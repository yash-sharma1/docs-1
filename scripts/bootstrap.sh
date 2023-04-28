#!/bin/sh

echo Bootstrapping...

docCollectionsLocation="./src/data/doc-collections"
tempReposLocation="./temp"
docsLocation="./docs"
unsortedDocsLocation="./docs/unsorted"
staticAssetLocation="./static"

legacyDocsLocation="./versioned_docs/version-legacy"

# cloneRepoToTemp $repo $tempRepoLocation
cloneRepoToTemp() {
  repo=$1
  tempRepoLocation=$2
  branch=$3
  if [ -d $tempRepoLocation ]; then
    echo "Skipping $repo (already exists)"
  elif [ ! -z "$branch" ]; then
    git clone -b $branch https://github.com/$repo.git $tempRepoLocation
  else
    git clone https://github.com/$repo.git $tempRepoLocation
  fi
}

fixLiCloseTag() {
  fileLocation=$1
  sed -i -z 's/(#ftype)/(#ftype)\n/' $fileLocation
}

cleanUp() {
  echo Clean up...
  # remove broken unused pages
  rm $unsortedDocsLocation/flow-cli/template.md
  rm $unsortedDocsLocation/flow/content/status.mdx
  rm $unsortedDocsLocation/flow/content/index.mdx
  rm $unsortedDocsLocation/flow/content/http-api.mdx
  rm $unsortedDocsLocation/flow/content/nft-catalog/composability-nft-guide.mdx
  rm $unsortedDocsLocation/flow/content/sdks.mdx

  # remove mock docs
  rm -rf $unsortedDocsLocation/mock-developer-doc

  # fix markdown list missing closing line for lists
  fixLiCloseTag $unsortedDocsLocation/mock-developer-doc/api.mdx
  fixLiCloseTag $unsortedDocsLocation/mock-developer-doc/fclapi.mdx
  fixLiCloseTag $unsortedDocsLocation/fcl-js/reference/api.md

  # fix missing community link
  sed -i.original 's/\[Flow\ community\]\((\))/[Flow community](https:\/\/developers.flow.com\/community)/' $unsortedDocsLocation/flow/content/nodes/index.mdx

  # escape tag symbols for <version>
  sed -i.original 's/<version>/<version\\>/' $unsortedDocsLocation/flow/content/unity-sdk/samples/flow-words-tutorial.md

  # copy a screenshot static file to a global asset location
  cp $unsortedDocsLocation/flow/content/concepts/flowscan-fees.png $staticAssetLocation

  # fix links path from missing tools
  sed -i.original 's/(\/tools\/flow-cli\//(/g' $unsortedDocsLocation/flow-cli/index.md

  # fix extra hash in the path
  sed -i.original 's/(#.\/api.md#/(.\/api.md#/g' $unsortedDocsLocation/flow-js-testing/api.md
  sed -i.original 's/(#.\/api.md#/(.\/api.md#/g' $unsortedDocsLocation/flow-js-testing/accounts.md

  # use autogenerated index files
  mv $unsortedDocsLocation/cadence/index.mdx $unsortedDocsLocation/cadence/index.original.mdx
  mv $unsortedDocsLocation/cadence/index.mdx $unsortedDocsLocation/cadence/index.original.mdx
  mv $unsortedDocsLocation/flow-cli/index.md $unsortedDocsLocation/flow-cli/index.original.md
  mv $unsortedDocsLocation/fcl-js/index.md $unsortedDocsLocation/fcl-js/index.original.md.md
  mv $unsortedDocsLocation/fcl-js/index.mdx $unsortedDocsLocation/fcl-js/index.original.mdx.mdx
  mv $unsortedDocsLocation/flow-js-testing/index.md $unsortedDocsLocation/flow-js-testing/index.original.md
  replaceInFiles $unsortedDocsLocation "\](.\/index.md" "\](.\/index.original"
  replaceInFiles $unsortedDocsLocation "\](..\/index.md)" "\](..\/index)"
  replaceInFiles $unsortedDocsLocation "\](.\/api.md#" "\](.\/api#"

  find $unsortedDocsLocation -type f -name "*.original" -delete
}

cloneDocReposToTemp() {
  echo Cloning repos...
  for filePath in $(find $docCollectionsLocation -name "*.json"); do
    repoSource=$(cat $filePath | jq .source)
    # repo=( ["owner"]=($repoSource | jq .owner))
    # echo $repoSource
    owner=$(echo $repoSource | jq -r .owner)
    name=$(echo $repoSource | jq -r .name)
    rootPath=$(echo $repoSource | jq -r .rootPath)

    repo=$owner/$name
    tempRepoLocation=$tempReposLocation/$name

    #skip mock doc
    if [ "$name" != 'mock-developer-doc' ]; then
      cloneRepoToTemp $repo $tempRepoLocation
    fi
  done

  # use testing repo for onflow/flow
  cd $tempReposLocation/flow
  git checkout nialexsan/docs-202303
  cd ../..
}

copyRepoFiles() {
  dirName=$1
  echo Copying files from $dirName

  source=$tempReposLocation/$dirName/docs
  unsortedDestination=$unsortedDocsLocation/$(basename $dirName)
  mkdir -p $unsortedDestination

  rsync -av --exclude='next/' "$source/" "$unsortedDestination"
}

copyDocFiles() {
  echo Copying files...
  for dirName in $(ls $tempReposLocation); do
    copyRepoFiles $dirName
  done
}

bootstrapDevPortal() {
  echo Bootstrapping dev portal
  cloneRepoToTemp onflow/developer-portal $tempReposLocation/developer-portal production

  rm -rf $docCollectionsLocation
  mkdir -p $docCollectionsLocation
  cp -r $tempReposLocation/developer-portal/app/data/doc-collections/. $docCollectionsLocation
}

reset() {
  for dirName in $(ls $docsLocation); do
    if [ "$dirName" != 'documentation' ] && [ "$dirName" != 'learn' ] && [ "$dirName" != 'quickstarts' ]; then
      rm -rf $docsLocation/$dirName
    fi
  done
}

replaceInFiles() {
  location=$1
  searchString=$2
  replaceString=$3
  FILES=$(find $location -type f \( -name "*.md" -o -name "*.mdx" \))
  # Loop through each file and replace the search string with the replace string
  for file in $FILES; do
    sed -i.original "s/$searchString/$replaceString/g" $file
  done
}

cleanLegacy() {
  echo Clean up legacy...
  # remove broken unused pages
  rm $legacyDocsLocation/tools/flow-cli/template.md

  fixLiCloseTag $legacyDocsLocation/tools/fcl-js/reference/api.md

  # escape tag symbols for <version>
  sed -i.original 's/<version>/<version\\>/' $legacyDocsLocation/tools/unity-sdk/samples/flow-words-tutorial.md

  # fix missing community link
  sed -i.original 's/\[Flow\ community\]\((\))/[Flow community](https:\/\/developers.flow.com\/community)/' $legacyDocsLocation/nodes/index.mdx

  # fix missing screenshots in composability-nft-guilde.mdx
  sed -i.original 's/\!\[Screen Shot 2023-02-09 at 11.27.04 PM.png\](Composability%20Chronicles%20#1%20How%20to%20build%20your%20Flow%209bce963939a14a37954748cfa193a38b\/Screen_Shot_2023-02-09_at_11.27.04_PM.png)//' $legacyDocsLocation/tools/nft-catalog/composability-nft-guide.mdx
  sed -i.original 's/\!\[Screen Shot 2023-02-09 at 11.28.34 PM.png\](Composability%20Chronicles%20#1%20How%20to%20build%20your%20Flow%209bce963939a14a37954748cfa193a38b\/Screen_Shot_2023-02-09_at_11.28.34_PM.png)//' $legacyDocsLocation/tools/nft-catalog/composability-nft-guide.mdx
  sed -i.original 's/    \!\[Screen Shot 2023-02-09 at 11.29.01 PM.png\](Composability%20Chronicles%20#1%20How%20to%20build%20your%20Flow%209bce963939a14a37954748cfa193a38b\/Screen_Shot_2023-02-09_at_11.29.01_PM.png)//' $legacyDocsLocation/tools/nft-catalog/composability-nft-guide.mdx

  replaceInFiles $legacyDocsLocation ".md)" ")"
  replaceInFiles $legacyDocsLocation ".md#" ")"
  replaceInFiles $legacyDocsLocation ".mdx)" ")"

  find $legacyDocsLocation -type f -name "*.original" -delete

  # create index pages as placeholders
  touch $legacyDocsLocation/intro.md
  touch $legacyDocsLocation/documentation.md
  touch $legacyDocsLocation/quickstarts.md
  touch $legacyDocsLocation/learn/welcome.md
}

bootstrapLegacy() {
  for filePath in $(find $docCollectionsLocation -name "*.json"); do
    fileName=$(basename $filePath .json)
    destination=$(echo "$fileName" | sed 's/__/\//g')
    fullDestination=$legacyDocsLocation/$destination
    if [ ! -d $fullDestination ]; then
      mkdir -p $fullDestination
    fi

    repoSource=$(cat $filePath | jq .source)

    owner=$(echo $repoSource | jq -r .owner)
    name=$(echo $repoSource | jq -r .name)
    rootPath=$(echo $repoSource | jq -r .rootPath)

    source=$tempReposLocation/$dirName/docs
    if [ "$name" != 'mock-developer-doc' ] && [ "$fileName" != 'documentation.json' ]; then
      cp -r $tempReposLocation/$name/$rootPath/. $fullDestination
    fi
  done

  # copy sporks.json to data
  sporksSource=$tempReposLocation/flow/sporks.json
  sporksDestination="./src/data"
  if [ -d $sporksSourceLocation ]; then
    cp $sporksSource $sporksDestination
  fi
}

bootstrapDevPortal
cloneDocReposToTemp
bootstrapLegacy
cleanLegacy
copyDocFiles
cleanUp
# ./scripts/import.sh (files are now checked in)
# reset