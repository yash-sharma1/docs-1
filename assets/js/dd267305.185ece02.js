"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={archived:!1,draft:!1,title:"5.2 Non-Fungible Token Tutorial Part 2",description:"An introduction to NFTs on Cadence",date:new Date("2022-05-10T00:00:00.000Z"),meta:{keywords:["tutorial","Flow","NFT","Non-Fungible Tokens","Cadence","Resources","Capabilities"]},tags:["reference","NFT","Non-Fungible Token","cadence","tutorial"],socialImageTitle:"Non-Fungible Tokens in Cadence",socialImageDescription:"NFT social image."},r=void 0,l={unversionedId:"cadence/tutorial/05-non-fungible-tokens-2",id:"cadence/tutorial/05-non-fungible-tokens-2",title:"5.2 Non-Fungible Token Tutorial Part 2",description:"An introduction to NFTs on Cadence",source:"@site/docs/cadence/tutorial/05-non-fungible-tokens-2.mdx",sourceDirName:"cadence/tutorial",slug:"/cadence/tutorial/05-non-fungible-tokens-2",permalink:"/cadence/tutorial/05-non-fungible-tokens-2",draft:!1,tags:[{label:"reference",permalink:"/tags/reference"},{label:"NFT",permalink:"/tags/nft"},{label:"Non-Fungible Token",permalink:"/tags/non-fungible-token"},{label:"cadence",permalink:"/tags/cadence"},{label:"tutorial",permalink:"/tags/tutorial"}],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682618386,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{archived:!1,draft:!1,title:"5.2 Non-Fungible Token Tutorial Part 2",description:"An introduction to NFTs on Cadence",date:"2022-05-10T00:00:00.000Z",meta:{keywords:["tutorial","Flow","NFT","Non-Fungible Tokens","Cadence","Resources","Capabilities"]},tags:["reference","NFT","Non-Fungible Token","cadence","tutorial"],socialImageTitle:"Non-Fungible Tokens in Cadence",socialImageDescription:"NFT social image."},sidebar:"tutorialSidebar",previous:{title:"5.1 Non-Fungible Token Tutorial Part 1",permalink:"/cadence/tutorial/05-non-fungible-tokens-1"},next:{title:"6. Fungible Tokens",permalink:"/cadence/tutorial/06-fungible-tokens"}},c={},s=[{value:"Storing Multiple NFTs in a Collection",id:"storing-multiple-nfts-in-a-collection",level:2},{value:"Dictionaries",id:"dictionaries",level:2},{value:"The Resource Dictionary",id:"the-resource-dictionary",level:2},{value:"Resources Owning Resources",id:"resources-owning-resources",level:2},{value:"Restricting Access to the NFT Collection",id:"restricting-access-to-the-nft-collection",level:2},{value:"Run a Script",id:"run-a-script",level:2},{value:"Mint and Distribute Tokens",id:"mint-and-distribute-tokens",level:2},{value:"Transferring an NFT",id:"transferring-an-nft",level:2},{value:"Putting It All Together",id:"putting-it-all-together",level:2},{value:"Fungible Tokens",id:"fungible-tokens",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=u("Callout"),h=u("Img"),d={toc:s},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we're going to learn about\na full implementation for ",(0,o.kt)("strong",{parentName:"p"},"Non-Fungible Tokens (NFTs)"),"."),(0,o.kt)("hr",null),(0,o.kt)(p,{type:"success",mdxType:"Callout"},"Open the starter code for this tutorial in the Flow Playground:",(0,o.kt)("a",{href:"https://play.onflow.org/f08e8e0d-d28e-4cbe-8d72-3afe2349c629",target:"_blank"},"https://play.onflow.org/f08e8e0d-d28e-4cbe-8d72-3afe2349c629"),(0,o.kt)("br",null),"The tutorial will ask you to take various actions to interact with this code."),(0,o.kt)(p,{type:"info",mdxType:"Callout"},"Instructions that require you to take action are always included in a callout box like this one. These highlighted actions are all that you need to do to get your code running, but reading the rest is necessary to understand the language's design."),(0,o.kt)("h2",{id:"storing-multiple-nfts-in-a-collection"},"Storing Multiple NFTs in a Collection"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"05-non-fungible-tokens-1"},"last tutorial"),",\nwe created a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"NFT")," resource, stored in at a storage path,\nthen used a multi-sig transaction to transfer it from one account to another."),(0,o.kt)("p",null,"It should hopefully be clear that the setup and operations that we used\nin the previous tutorial are not very scalable. Users need a way\nto manage all of their NFTs from a single place."),(0,o.kt)("p",null,"There are some different ways we could accomplish this."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We could store all of our NFTs in an array or dictionary, like so.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// Define a dictionary to store the NFTs in\nlet myNFTs: @{Int: BasicNFT.NFT} = {}\n\n// Create a new NFT\nlet newNFT <- BasicNFT.createNFT(id: 1)\n\n// Save the new NFT to the dictionary\nmyNFTs[newNFT.id] <- newNFT\n\n// Save the NFT to a new storage path\naccount.save(<-myNFTs, to: /storage/basicNFTDictionary)\n\n")),(0,o.kt)("h2",{id:"dictionaries"},"Dictionaries"),(0,o.kt)("p",null,"This example uses a ",(0,o.kt)("a",{parentName:"p",href:"../language/values-and-types#dictionaries"},(0,o.kt)("strong",{parentName:"a"},"Dictionary"),": a mutable, unordered collection of key-value associations"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub let myNFTs: @{Int: NFT}\n")),(0,o.kt)("p",null,"In a dictionary, all keys must have the same type, and all values must have the same type.\nIn this case, we are mapping integer (",(0,o.kt)("inlineCode",{parentName:"p"},"Int"),") IDs to ",(0,o.kt)("inlineCode",{parentName:"p"},"NFT")," resource objects.\nDictionary definitions don't usually have the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," symbol in the type specification,\nbut because the ",(0,o.kt)("inlineCode",{parentName:"p"},"myNFTs")," mapping stores resources, the whole field also has to become a resource type,\nwhich is why the field has the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," symbol indicating that it is a resource type."),(0,o.kt)("p",null,"This means that all the rules that apply to resources apply to this type."),(0,o.kt)("p",null,"Using a dictionary to store our NFTs would solve the problem\nof having to use different storage paths for each NFT, but it doesn't solve all the problems.\nThis types are relatively opaque and doesn't have much useful functionality on its own."),(0,o.kt)("p",null,"Instead, we can use a powerful feature of Cadence, resources owning other resources!\nWe'll define a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," resource as our NFT storage place\nto enable more-sophisticated ways to interact with our NFTs."),(0,o.kt)("p",null,"The next contract we look at is called ",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleNFT"),", it's stored in account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x02"),".\nThis contract expands on the ",(0,o.kt)("inlineCode",{parentName:"p"},"BasicNFT")," we looked at by adding:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"idCount")," contract field that tracks unique NFT ids."),(0,o.kt)("li",{parentName:"ol"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"NFTReceiver")," interface that exposes three functions for the collection"),(0,o.kt)("li",{parentName:"ol"},"Declares a resource called ",(0,o.kt)("inlineCode",{parentName:"li"},"Collection")," that implements the ",(0,o.kt)("inlineCode",{parentName:"li"},"NFTReceiver")," interface"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Collection")," will declare fields and functions to interact with it,\nincluding ",(0,o.kt)("inlineCode",{parentName:"li"},"ownedNFTs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"init()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"withdraw()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"destroy()"),", and other important functions"),(0,o.kt)("li",{parentName:"ol"},"Next, the contract declares functions that create a new NFT (",(0,o.kt)("inlineCode",{parentName:"li"},"mintNFT()"),") and an empty collection (",(0,o.kt)("inlineCode",{parentName:"li"},"createEmptyCollection()"),")"),(0,o.kt)("li",{parentName:"ol"},"Finally, the contract declares an ",(0,o.kt)("inlineCode",{parentName:"li"},"init()")," function that initializes the path fields,\ncreates an empty collection as well as a reference to it,\nand saves a minter resource to account storage.")),(0,o.kt)("p",null,"This contract introduces a few new concepts, we'll look at the new contract, then break down all the new\nconcepts this contract introduces."),(0,o.kt)(p,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Open Account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," to see ",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleNFT.cdc"),".",(0,o.kt)("br",null),"\nDeploy the contract by clicking the Deploy button in the bottom right of the editor.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleNFT.cdc")," should contain the code below.\nIt contains what was already in ",(0,o.kt)("inlineCode",{parentName:"p"},"BasicNFT.cdc")," plus additional resource declarations in the contract body.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=ExampleNFT.cdc"},"// ExampleNFT.cdc\n//\n// This is a complete version of the ExampleNFT contract\n// that includes withdraw and deposit functionalities, as well as a\n// collection resource that can be used to bundle NFTs together.\n//\n// Learn more about non-fungible tokens in this tutorial: https://docs.onflow.org/docs/non-fungible-tokens\n\npub contract ExampleNFT {\n\n    // Declare Path constants so paths do not have to be hardcoded\n    // in transactions and scripts\n\n    pub let CollectionStoragePath: StoragePath\n    pub let CollectionPublicPath: PublicPath\n    pub let MinterStoragePath: StoragePath\n\n    // Tracks the unique IDs of the NFT\n    pub var idCount: UInt64\n\n    // Declare the NFT resource type\n    pub resource NFT {\n        // The unique ID that differentiates each NFT\n        pub let id: UInt64\n\n        // Initialize both fields in the init function\n        init(initID: UInt64) {\n            self.id = initID\n        }\n    }\n\n    // We define this interface purely as a way to allow users\n    // to create public, restricted references to their NFT Collection.\n    // They would use this to publicly expose only the deposit, getIDs,\n    // and idExists fields in their Collection\n    pub resource interface NFTReceiver {\n\n        pub fun deposit(token: @NFT)\n\n        pub fun getIDs(): [UInt64]\n\n        pub fun idExists(id: UInt64): Bool\n    }\n\n    // The definition of the Collection resource that\n    // holds the NFTs that a user owns\n    pub resource Collection: NFTReceiver {\n        // dictionary of NFT conforming tokens\n        // NFT is a resource type with an `UInt64` ID field\n        pub var ownedNFTs: @{UInt64: NFT}\n\n        // Initialize the NFTs field to an empty collection\n        init () {\n            self.ownedNFTs <- {}\n        }\n\n        // withdraw\n        //\n        // Function that removes an NFT from the collection\n        // and moves it to the calling context\n        pub fun withdraw(withdrawID: UInt64): @NFT {\n            // If the NFT isn't found, the transaction panics and reverts\n            let token <- self.ownedNFTs.remove(key: withdrawID)!\n\n            return <-token\n        }\n\n        // deposit\n        //\n        // Function that takes a NFT as an argument and\n        // adds it to the collections dictionary\n        pub fun deposit(token: @NFT) {\n            // add the new token to the dictionary with a force assignment\n            // if there is already a value at that key, it will fail and revert\n            self.ownedNFTs[token.id] <-! token\n        }\n\n        // idExists checks to see if a NFT\n        // with the given ID exists in the collection\n        pub fun idExists(id: UInt64): Bool {\n            return self.ownedNFTs[id] != nil\n        }\n\n        // getIDs returns an array of the IDs that are in the collection\n        pub fun getIDs(): [UInt64] {\n            return self.ownedNFTs.keys\n        }\n\n        destroy() {\n            destroy self.ownedNFTs\n        }\n    }\n\n    // creates a new empty Collection resource and returns it\n    pub fun createEmptyCollection(): @Collection {\n        return <- create Collection()\n    }\n\n    // mintNFT\n    //\n    // Function that mints a new NFT with a new ID\n    // and returns it to the caller\n    pub fun mintNFT(): @NFT {\n\n        // create a new NFT\n        var newNFT <- create NFT(initID: self.idCount)\n\n        // change the id so that each ID is unique\n        self.idCount = self.idCount + 1\n\n        return <-newNFT\n    }\n\n    init() {\n        self.CollectionStoragePath = /storage/nftTutorialCollection\n        self.CollectionPublicPath = /public/nftTutorialCollection\n        self.MinterStoragePath = /storage/nftTutorialMinter\n\n        // initialize the ID count to one\n        self.idCount = 1\n\n        // store an empty NFT Collection in account storage\n        self.account.save(<-self.createEmptyCollection(), to: self.CollectionStoragePath)\n\n        // publish a reference to the Collection in storage\n        self.account.link<&{NFTReceiver}>(self.CollectionPublicPath, target: self.CollectionStoragePath)\n    }\n}\n")),(0,o.kt)("p",null,"This smart contract more closely resembles a contract\nthat a project would actually use in production."),(0,o.kt)("p",null,"Any user who owns one or more ",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleNFT")," will have an instance\nof this ",(0,o.kt)("inlineCode",{parentName:"p"},"@ExampleNFT.Collection")," resource stored in their account.\nThis collection stores all of their NFTs in a dictionary that maps integer IDs to ",(0,o.kt)("inlineCode",{parentName:"p"},"@NFT"),"s."),(0,o.kt)("p",null,"Each collection has a ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," function.\nThese functions allow users to follow the pattern of moving tokens in and out of\ntheir collections through a standard set of functions."),(0,o.kt)("p",null,"When a user wants to store NFTs in their account,\nthey will create an empty ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"createEmptyCollection()")," function in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleNFT")," smart contract.\nThis returns an empty ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," object that they can store in their account storage."),(0,o.kt)("p",null,"There are a few new features that we use in this example, so let's walk through them."),(0,o.kt)("h2",{id:"the-resource-dictionary"},"The Resource Dictionary"),(0,o.kt)("p",null,"We discussed above that when a dictionary stores a resource, it also becomes a resource!"),(0,o.kt)("p",null,"This means that the collection has to\nhave special rules for how to handle its own resource.\nYou wouldn't want it getting lost by accident!"),(0,o.kt)("p",null,"If the NFT ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," resource is destroyed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," command,\nit needs to know what to do with the resources it stores in the dictionary.\nThis is why resources that store other resources have to include\na ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," function that runs when ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," is called on it.\nThis destroy function has to either explicitly destroy the contained resources\nor move them somewhere else. In this example, we destroy them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"destroy() {\n    destroy self.ownedNFTs\n}\n")),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," resource is created, the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," function is run\nand must explicitly initialize all member variables.\nThis helps prevent issues in some smart contracts where uninitialized fields can cause bugs.\nThe init function can never run again after this.\nHere, we initialize the dictionary as a resource type with an empty dictionary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"init () {\n  self.ownedNFTs <- {}\n}\n")),(0,o.kt)("p",null,"Another feature for dictionaries is the ability to get an array\nof the keys of the dictionary using the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"keys")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// getIDs returns an array of the IDs that are in the collection\npub fun getIDs(): [UInt64] {\n    return self.ownedNFTs.keys\n}\n")),(0,o.kt)("p",null,"This can be used to iterate through the dictionary or just to see a list of what is stored.\nAs you can see, ",(0,o.kt)("a",{parentName:"p",href:"../language/values-and-types#arrays"},"a variable length array type"),"\nis declared by enclosing the member type within square brackets (",(0,o.kt)("inlineCode",{parentName:"p"},"[UInt64]"),")."),(0,o.kt)("h2",{id:"resources-owning-resources"},"Resources Owning Resources"),(0,o.kt)("p",null,"This NFT Collection example in ",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleNFT.cdc")," illustrates an important feature: resources can own other resources."),(0,o.kt)("p",null,"In the example, a user can transfer one NFT to another user.\nAdditionally, since the ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," explicitly owns the NFTs in it,\nthe owner could transfer all of the NFTs at once by just transferring the single collection."),(0,o.kt)("p",null,"This is an important feature because it enables numerous additional use cases.\nIn addition to allowing easy batch transfers,\nthis means that if a unique NFT wants to own another unique NFT,\nlike a CryptoKitty owning a hat accessory,\nthe Kitty literally stores the hat in its own storage and effectively owns it.\nThe hat belongs to the CryptoKitty that it is stored in,\nand the hat can be transferred separately or along with the CryptoKitty that owns it."),(0,o.kt)("h2",{id:"restricting-access-to-the-nft-collection"},"Restricting Access to the NFT Collection"),(0,o.kt)("p",null,"In the NFT Collection, all the functions and fields are public,\nbut we do not want everyone in the network to be able to call our ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," function.\nThis is where Cadence's second layer of access control comes in.\nCadence utilizes ",(0,o.kt)("a",{parentName:"p",href:"../language/capability-based-access-control"},"capability security"),",\nwhich means that for any given object, a user is allowed to access a field or method of that object if they either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are the owner of the object"),(0,o.kt)("li",{parentName:"ul"},"Have a valid reference to that field or method (note that references can only be created from capabilities, and capabilities can only be created by the owner of the object)")),(0,o.kt)("p",null,"When a user stores their NFT ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," in their account storage, it is by default not available for other users to access.\nA user's authorized account object (",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount"),", which gives access to private storage)\nis only accessible by its owner. To give external accounts access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," function,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"getIDs")," function, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"idExists")," function, the owner creates an interface that only includes those fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface NFTReceiver {\n\n    pub fun deposit(token: @NFT)\n\n    pub fun getIDs(): [UInt64]\n\n    pub fun idExists(id: UInt64): Bool\n}\n")),(0,o.kt)("p",null,"Then, using that interface, they would create a link to the object in storage,\nspecifying that the link only contains the functions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTReceiver")," interface.\nThis link creates a capability. From there, the owner can then do whatever they want with that capability:\nthey could pass it as a parameter to a function for one-time-use,\nor they could put in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/public/")," domain of their account so that anyone can access it.\nIf a user tried to use this capability to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," function,\nit wouldn't work because it doesn't exist in the interface that was used to create the capability."),(0,o.kt)("p",null,"The creation of the link and capability is seen in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleNFT.cdc")," contract ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// publish a reference to the Collection in storage\nself.account.link<&{NFTReceiver}>(self.CollectionPublicPath, target: self.CollectionStoragePath)\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," function specifies that the capability is typed as ",(0,o.kt)("inlineCode",{parentName:"p"},"&AnyResource{NFTReceiver}")," to only expose those fields and functions.\nThen the link is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"/public/")," which is accessible by anyone.\nThe link targets the ",(0,o.kt)("inlineCode",{parentName:"p"},"/storage/NFTCollection")," (through the ",(0,o.kt)("inlineCode",{parentName:"p"},"self.CollectionStoragePath")," contract field) that we created earlier."),(0,o.kt)("p",null,"Now the user has an NFT collection in their account ",(0,o.kt)("inlineCode",{parentName:"p"},"/storage/"),",\nalong with a capability for it that others can use to see what NFTs they own and to send an NFT to them."),(0,o.kt)("p",null,"Let's confirm this is true by running a script!"),(0,o.kt)("h2",{id:"run-a-script"},"Run a Script"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Scripts in Cadence are simple transactions that run without any account permissions and only read information from the blockchain."),(0,o.kt)(p,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Open the script file named ",(0,o.kt)("inlineCode",{parentName:"p"},"Print 0x01 NFTs"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"Print 0x01 NFTs")," should contain the following code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'import ExampleNFT from 0x01\n\n// Print the NFTs owned by account 0x01.\npub fun main() {\n    // Get the public account object for account 0x01\n    let nftOwner = getAccount(0x01)\n\n    // Find the public Receiver capability for their Collection\n    let capability = nftOwner.getCapability<&{ExampleNFT.NFTReceiver}>(ExampleNFT.CollectionPublicPath)\n\n    // borrow a reference from the capability\n    let receiverRef = capability.borrow()\n            ?? panic("Could not borrow receiver reference")\n\n    // Log the NFTs that they own as an array of IDs\n    log("Account 1 NFTs")\n    log(receiverRef.getIDs())\n}\n')),(0,o.kt)(p,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"Print 0x01 NFTs")," by clicking the Execute button in the top right of the editor box.",(0,o.kt)("br",null),"\nThis script prints a list of the NFTs that account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," owns.")),(0,o.kt)("p",null,"Because account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," currently doesn't own any in its collection, it will just print an empty array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Account 1 NFTs"\n[]\nResult > "void"\n')),(0,o.kt)("p",null,"If the script cannot be executed, it probably means that the NFT collection hasn't been stored correctly in account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01"),".\nIf you run into issues, make sure that you deployed the contract in account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," and that you followed the previous steps correctly."),(0,o.kt)("h2",{id:"mint-and-distribute-tokens"},"Mint and Distribute Tokens"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"One way to create NFTs is by having an admin mint new tokens and send them to a user.\nFor the purpose of learning, we are simply implementing minting as a public function here."),(0,o.kt)("p",null,"Most would implement this by having an NFT Minter resource. This would restrict minting,\nbecause the owner of this resource is the only one that can mint tokens."),(0,o.kt)("p",null,"You can see an example of this in the ",(0,o.kt)("a",{parentName:"p",href:"08-marketplace-compose"},"Marketplace tutorial"),"."),(0,o.kt)(p,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Open the file named ",(0,o.kt)("inlineCode",{parentName:"p"},"Mint NFT"),".\nSelect account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," as the only signer and send the transaction.",(0,o.kt)("br",null),"\nThis transaction deposits the minted NFT into the account owner's NFT collection:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=Mint",metastring:"NFT.cdc","NFT.cdc":!0},'import ExampleNFT from 0x01\n\n// This transaction allows the Minter account to mint an NFT\n// and deposit it into its collection.\n\ntransaction {\n\n    // The reference to the collection that will be receiving the NFT\n    let receiverRef: &{ExampleNFT.NFTReceiver}\n\n    prepare(acct: AuthAccount) {\n        // Get the owner\'s collection capability and borrow a reference\n        self.receiverRef = acct.getCapability<&{ExampleNFT.NFTReceiver}>(ExampleNFT.CollectionPublicPath)\n            .borrow()\n            ?? panic("Could not borrow receiver reference")\n    }\n\n    execute {\n        // Use the minter reference to mint an NFT, which deposits\n        // the NFT into the collection that is sent as a parameter.\n        let newNFT <- ExampleNFT.mintNFT()\n\n        self.receiverRef.deposit(token: <-newNFT)\n\n        log("NFT Minted and deposited to Account 1\'s Collection")\n    }\n}\n')),(0,o.kt)(p,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Reopen ",(0,o.kt)("inlineCode",{parentName:"p"},"Print 0x01 NFTs")," and execute the script.\nThis prints a list of the NFTs that account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," owns.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=Print",metastring:"0x01 NFTs.cdc","0x01":!0,"NFTs.cdc":!0},'import ExampleNFT from 0x01\n\n// Print the NFTs owned by account 0x01.\npub fun main() {\n    // Get the public account object for account 0x01\n    let nftOwner = getAccount(0x01)\n\n    // Find the public Receiver capability for their Collection\n    let capability = nftOwner.getCapability<&{ExampleNFT.NFTReceiver}>(ExampleNFT.CollectionPublicPath)\n\n    // borrow a reference from the capability\n    let receiverRef = capability.borrow()\n            ?? panic("Could not borrow receiver reference")\n\n    // Log the NFTs that they own as an array of IDs\n    log("Account 1 NFTs")\n    log(receiverRef.getIDs())\n}\n\n')),(0,o.kt)("p",null,"You should see that account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," owns the NFT with ",(0,o.kt)("inlineCode",{parentName:"p"},"id = 1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Account 1 NFTs"\n[1]\n')),(0,o.kt)("h2",{id:"transferring-an-nft"},"Transferring an NFT"),(0,o.kt)("p",null,"Before we are able to transfer an NFT to another account, we need to set up that account\nwith an NFTCollection of their own so they are able to receive NFTs."),(0,o.kt)(p,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Open the file named ",(0,o.kt)("inlineCode",{parentName:"p"},"Setup Account")," and submit the transaction, using account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x02")," as the only signer.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=Setup",metastring:"Account.cdc","Account.cdc":!0},'import ExampleNFT from 0x01\n\n// This transaction configures a user\'s account\n// to use the NFT contract by creating a new empty collection,\n// storing it in their account storage, and publishing a capability\ntransaction {\n    prepare(acct: AuthAccount) {\n\n        // Create a new empty collection\n        let collection <- ExampleNFT.createEmptyCollection()\n\n        // store the empty NFT Collection in account storage\n        acct.save<@ExampleNFT.Collection>(<-collection, to: ExampleNFT.CollectionStoragePath)\n\n        log("Collection created for account 2")\n\n        // create a public capability for the Collection\n        acct.link<&{ExampleNFT.NFTReceiver}>(ExampleNFT.CollectionPublicPath, target: ExampleNFT.CollectionStoragePath)\n\n        log("Capability created")\n    }\n}\n')),(0,o.kt)("p",null,"Account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x02")," should now have an empty ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," resource stored in its account storage.\nIt has also created and stored a capability to the collection in its ",(0,o.kt)("inlineCode",{parentName:"p"},"/public/")," domain."),(0,o.kt)(p,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Open the file named ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer"),", select account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," as the only signer, and send the transaction.",(0,o.kt)("br",null),"\nThis transaction transfers a token from account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," to account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x02"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=Transfer.cdc"},'import ExampleNFT from 0x01\n\n// This transaction transfers an NFT from one user\'s collection\n// to another user\'s collection.\ntransaction {\n\n    // The field that will hold the NFT as it is being\n    // transferred to the other account\n    let transferToken: @ExampleNFT.NFT\n\n    prepare(acct: AuthAccount) {\n\n        // Borrow a reference from the stored collection\n        let collectionRef = acct.borrow<&ExampleNFT.Collection>(from: ExampleNFT.CollectionStoragePath)\n            ?? panic("Could not borrow a reference to the owner\'s collection")\n\n        // Call the withdraw function on the sender\'s Collection\n        // to move the NFT out of the collection\n        self.transferToken <- collectionRef.withdraw(withdrawID: 1)\n    }\n\n    execute {\n        // Get the recipient\'s public account object\n        let recipient = getAccount(0x02)\n\n        // Get the Collection reference for the receiver\n        // getting the public capability and borrowing a reference from it\n        let receiverRef = recipient.getCapability<&{ExampleNFT.NFTReceiver}>(ExampleNFT.CollectionPublicPath)\n            .borrow()\n            ?? panic("Could not borrow receiver reference")\n\n        // Deposit the NFT in the receivers collection\n        receiverRef.deposit(token: <-self.transferToken)\n\n        log("NFT ID 1 transferred from account 1 to account 2")\n    }\n}\n')),(0,o.kt)("p",null,"Now we can check both accounts' collections to make sure that account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x02")," owns the token and account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," has nothing."),(0,o.kt)(p,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Execute the script ",(0,o.kt)("inlineCode",{parentName:"p"},"Print all NFTs")," to see the tokens in each account:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=Script2.cdc"},'import ExampleNFT from 0x01\n\n// Print the NFTs owned by accounts 0x01 and 0x02.\npub fun main() {\n\n    // Get both public account objects\n    let account1 = getAccount(0x01)\n    let account2 = getAccount(0x02)\n\n    // Find the public Receiver capability for their Collections\n    let acct1Capability = account1.getCapability(ExampleNFT.CollectionPublicPath)\n    let acct2Capability = account2.getCapability(ExampleNFT.CollectionPublicPath)\n\n    // borrow references from the capabilities\n    let receiver1Ref = acct1Capability.borrow<&{ExampleNFT.NFTReceiver}>()\n        ?? panic("Could not borrow account 1 receiver reference")\n    let receiver2Ref = acct2Capability.borrow<&{ExampleNFT.NFTReceiver}>()\n        ?? panic("Could not borrow account 2 receiver reference")\n\n    // Print both collections as arrays of IDs\n    log("Account 1 NFTs")\n    log(receiver1Ref.getIDs())\n\n    log("Account 2 NFTs")\n    log(receiver2Ref.getIDs())\n}\n')),(0,o.kt)("p",null,"You should see something like this in the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Account 1 NFTs"\n[]\n"Account 2 NFTs"\n[1]\n')),(0,o.kt)("p",null,"Account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x02")," has one NFT with ID=1 and account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," has none.\nThis shows that the NFT was transferred from account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," to account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x02"),"."),(0,o.kt)(h,{src:"https://storage.googleapis.com/flow-resources/documentation-assets/cadence-tuts/accounts-nft-storage.png",mdxType:"Img"}),(0,o.kt)("p",null,"Congratulations, you now have a working NFT!"),(0,o.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This was only a basic example how a NFT might work on Flow.\nPlease refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft"},"Flow NFT Standard repo"),"\nfor information about the official Flow NFT standard and an example implementation of it."),(0,o.kt)("p",null,"Also check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/kitty-items"},"Kitty Items Repo")," for a production ready version!"),(0,o.kt)("h2",{id:"fungible-tokens"},"Fungible Tokens"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that you have a working NFT, you will probably want to be able to trade it. For that you are going to need to\nunderstand how fungible tokens work on Flow, so go ahead and move to the next tutorial!"))}f.isMDXComponent=!0}}]);