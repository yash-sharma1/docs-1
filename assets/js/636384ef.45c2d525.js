"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4775],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={title:"Flow CLI Configuration",sidebar_title:"Configuration",description:"What is Flow CLI Configuration"},l=void 0,c={unversionedId:"tools/flow-cli/configuration",id:"tools/flow-cli/configuration",title:"Flow CLI Configuration",description:"What is Flow CLI Configuration",source:"@site/docs/tools/flow-cli/configuration.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/configuration",permalink:"/tools/flow-cli/configuration",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Flow CLI Configuration",sidebar_title:"Configuration",description:"What is Flow CLI Configuration"},sidebar:"tutorialSidebar",previous:{title:"Send Complex Transaction with the Flow CLI",permalink:"/tools/flow-cli/complex-transactions"},next:{title:"Create an Account with the Flow CLI",permalink:"/tools/flow-cli/create-accounts"}},i={},s=[{value:"Example Project Configuration",id:"example-project-configuration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Contracts",id:"contracts",level:3},{value:"Simple Format",id:"simple-format",level:4},{value:"Advanced Format",id:"advanced-format",level:4},{value:"Accounts",id:"accounts",level:3},{value:"Simple Format",id:"simple-format-1",level:4},{value:"Advanced format",id:"advanced-format-1",level:4},{value:"Deployments",id:"deployments",level:3},{value:"Networks",id:"networks",level:3},{value:"Emulators",id:"emulators",level:3}],d={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Flow CLI uses a state called configuration which is stored in a file (usually ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.json"),"). "),(0,o.kt)("p",null,"Flow configuration (",(0,o.kt)("inlineCode",{parentName:"p"},"flow.json"),") file will contain the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"networks")," list pre-populated with the Flow emulator, testnet and mainnet connection configuration."),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"accounts")," list pre-populated with the Flow Emulator service account."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"deployments")," empty object where all ",(0,o.kt)("a",{parentName:"li",href:"/tools/flow-cli/project-contracts#define-contract-deployment-targets"},"deployment targets")," can be defined. "),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"contracts")," empty object where you ",(0,o.kt)("a",{parentName:"li",href:"/tools/flow-cli/project-contracts#add-a-contract"},"define contracts")," you wish to deploy.")),(0,o.kt)("h2",{id:"example-project-configuration"},"Example Project Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "networks": {\n    "emulator": "127.0.0.1:3569",\n    "mainnet": "access.mainnet.nodes.onflow.org:9000",\n    "testnet": "access.devnet.nodes.onflow.org:9000"\n  },\n  "accounts": {\n    "emulator-account": {\n      "address": "f8d6e0586b0a20c7",\n      "key": "ae1b44c0f5e8f6992ef2348898a35e50a8b0b9684000da8b1dade1b3bcd6ebee",\n    }\n  },\n  "deployments": {},\n  "contracts": {}\n}\n')),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Below is an example of a configuration file for a complete Flow project.\nWe'll walk through each property one by one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "contracts": {\n    "NonFungibleToken": "./cadence/contracts/NonFungibleToken.cdc",\n    "Kibble": "./cadence/contracts/Kibble.cdc",\n    "KittyItems": "./cadence/contracts/KittyItems.cdc",\n    "KittyItemsMarket": "./cadence/contracts/KittyItemsMarket.cdc",\n    "FungibleToken": {\n      "source": "./cadence/contracts/FungibleToken.cdc",\n      "aliases": {\n        "testnet": "9a0766d93b6608b7",\n        "emulator": "ee82856bf20e2aa6"\n      }\n    }\n  },\n\n  "deployments": {\n    "testnet": {\n      "admin-account": ["NonFungibleToken"],\n      "user-account": ["Kibble", "KittyItems", "KittyItemsMarket"]\n    }, \n    "emulator": {\n      "emulator-account": [\n        "NonFungibleToken",\n        "Kibble",\n        "KittyItems",\n        "KittyItemsMarket"\n      ]\n    }\n  },\n\n  "accounts": {\n    "admin-account": {\n      "address": "3ae53cb6e3f42a79",\n      "key": "12332967fd2bd75234ae9037dd4694c1f00baad63a10c35172bf65fbb8ad1111"\n    },\n    "user-account": {\n      "address": "e2a8b7f23e8b548f",\n      "key": "22232967fd2bd75234ae9037dd4694c1f00baad63a10c35172bf65fbb8ad1111"\n    },\n    "emulator-account": {\n      "address": "f8d6e0586b0a20c7",\n      "key": "2eae2f31cb5b756151fa11d82949c634b8f28796a711d7eb1e52cc301ed11111",\n    }\n  },\n\n  "networks": {\n    "emulator": "127.0.0.1:3569",\n    "mainnet": "access.mainnet.nodes.onflow.org:9000",\n    "testnet": "access.devnet.nodes.onflow.org:9000",\n    "testnetSecure": {\n      "Host": "access-001.devnet30.nodes.onflow.org:9001",\n      "NetworkKey": "ba69f7d2e82b9edf25b103c195cd371cf0cc047ef8884a9bbe331e62982d46daeebf836f7445a2ac16741013b192959d8ad26998aff12f2adc67a99e1eb2988d"\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"contracts"},"Contracts"),(0,o.kt)("p",null,"Contracts are specified as key-value pairs, where the key is the contract name,\nand the value is the location of the Cadence source code."),(0,o.kt)("p",null,"The advanced format allows us to specify aliases for each network."),(0,o.kt)("h4",{id:"simple-format"},"Simple Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n\n"contracts": {\n  "NonFungibleToken": "./cadence/contracts/NonFungibleToken.cdc"\n}\n\n...\n')),(0,o.kt)("h4",{id:"advanced-format"},"Advanced Format"),(0,o.kt)("p",null,"Using advanced format we can define ",(0,o.kt)("inlineCode",{parentName:"p"},"aliases"),". Aliases define an address where the contract is already deployed for that specific network.\nIn the example scenario below the contract ",(0,o.kt)("inlineCode",{parentName:"p"},"FungibleToken")," would be imported from the address ",(0,o.kt)("inlineCode",{parentName:"p"},"9a0766d93b6608b7")," when deploying to testnet network\nand address ",(0,o.kt)("inlineCode",{parentName:"p"},"ee82856bf20e2aa6")," when deploying to the Flow emulator.\nWe can specify aliases for each network we have defined. When deploying to testnet it is always a good idea to specify aliases for all the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.onflow.org/core-contracts"},"common\ncontracts")," that have already been deployed to the testnet. "),(0,o.kt)("p",null,"\u26a0\ufe0f If we use an alias for the contract we should not specify it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment")," section for that network. "),(0,o.kt)("p",null,"Our example below should not include ",(0,o.kt)("inlineCode",{parentName:"p"},"FungibleToken")," in  ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment")," section for testnet and emulator network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n"FungibleToken": {\n  "source": "./cadence/contracts/FungibleToken.cdc",\n  "aliases": {\n    "testnet": "9a0766d93b6608b7",\n    "emulator": "ee82856bf20e2aa6"\n  }\n}\n...\n')),(0,o.kt)("p",null,"Format used to specify advanced contracts is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"CONTRACT NAME": {\n    "source": "CONTRACT SOURCE FILE LOCATION",\n    "aliases": {\n        "NETWORK NAME": "ADDRESS ON SPECIFIED NETWORK WITH DEPLOYED CONTRACT"\n        ...\n    }\n}\n')),(0,o.kt)("h3",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,"The accounts section is used to define account properties such as keys and addresses.\nEach account must include a name, which is then referenced throughout the configuration file."),(0,o.kt)("h4",{id:"simple-format-1"},"Simple Format"),(0,o.kt)("p",null,"When using the simple format, simply specify the address for the account, and a single hex-encoded\nprivate key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n\n"accounts": {\n  "admin-account": {\n    "address": "3ae53cb6e3f42a79",\n    "key": "12332967fd2bd75234ae9037dd4694c1f00baad63a10c35172bf65fbb8ad1111"\n  }\n}\n\n...\n')),(0,o.kt)("h4",{id:"advanced-format-1"},"Advanced format"),(0,o.kt)("p",null,"The advanced format allows us to define more properties for the account.\nWe can define the signature algorithm and hashing algorithm, as well as custom key formats."),(0,o.kt)("p",null,"Please note that we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"service")," for address in case the account is used on ",(0,o.kt)("inlineCode",{parentName:"p"},"emulator")," network as this is a special\nvalue that is defined on the run time to the default service address on the emulator network."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example for advanced hex format:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n\n"accounts": {\n  "admin-account": {\n    "address": "service",\n    "key":{\n        "type": "hex",\n        "index": 0,\n        "signatureAlgorithm": "ECDSA_P256",\n        "hashAlgorithm": "SHA3_256",\n        "privateKey": "12332967fd2bd75234ae9037dd4694c1f00baad63a10c35172bf65fbb8ad1111"\n      }\n  }\n}\n\n...\n')),(0,o.kt)("p",null,"You can also use BIP44 to derive keys from a mnemonic. For more details please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flips/blob/main/flips/20201125-bip-44-multi-account.md"},"FLIP")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example for BIP44 format:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n\n"accounts": {\n  "admin-account": {\n    "address": "service",\n    "key":{\n        "type": "bip44",\n        "index": 0,\n        "signatureAlgorithm": "ECDSA_P256",\n        "hashAlgorithm": "SHA3_256",\n        "mnemonic": "skull design wagon top faith actor valley crystal subject volcano access join",\n        "derivationPath": "m/44\'/539\'/0\'/0/0"\n      }\n  }\n}\n\n...\n')),(0,o.kt)("p",null,"Note: Default value for ",(0,o.kt)("inlineCode",{parentName:"p"},"derivationPath")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"m/44'/539'/0'/0/0")," if omitted. "),(0,o.kt)("p",null,"You can also use a key management system (KMS) to sign the transactions. Currently, we only support Google KMS."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example for Google KMS format:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n"accounts": {\n  "admin-account": {\n    "address": "service",\n    "key": {\n        "type": "google-kms",\n        "index": 0,\n        "signatureAlgorithm": "ECDSA_P256",\n        "hashAlgorithm": "SHA3_256",\n        "resourceID": "projects/flow/locations/us/keyRings/foo/bar/cryptoKeyVersions/1"\n    }\n  }\n}\n...\n')),(0,o.kt)("p",null,"You can store the account key to a separate file and provide the file location as part of the key configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example for separate key file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n"accounts": {\n  "admin-account": {\n    "address": "service",\n    "key": {\n        "type": "file",\n        "location": "./test.key"\n    }\n  }\n}\n...\n')),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"test.key")," file you should only put the hex key content (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"12332967fd2bd75234ae9037dd4694c1f00baad63a10c35172bf65fbb8ad1111"),")"),(0,o.kt)("h3",{id:"deployments"},"Deployments"),(0,o.kt)("p",null,"The deployments section defines where the ",(0,o.kt)("inlineCode",{parentName:"p"},"project deploy")," command will deploy specified contracts.\nThis configuration property acts as the glue that ties together accounts,\ncontracts and networks, all of which are referenced by name."),(0,o.kt)("p",null,"In the deployments section we specify the network, account name and list of contracts to be deployed to that account."),(0,o.kt)("p",null,"Format specifying the deployment is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n"deployments": {\n  "NETWORK": {\n    "ACCOUNT NAME": ["CONTRACT NAME"]\n  }\n}\n\n...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n\n"deployments": {\n  "emulator": {\n    "emulator-account": [\n      "NonFungibleToken",\n      "Kibble",\n      "KittyItems",\n      "KittyItemsMarket"\n    ]\n  },\n  "testnet": {\n    "admin-account": ["NonFungibleToken"],\n    "user-account": [\n      "Kibble",\n      "KittyItems",\n      "KittyItemsMarket"\n    ]\n  }\n}\n\n...\n')),(0,o.kt)("h3",{id:"networks"},"Networks"),(0,o.kt)("p",null,"Use this section to define networks and connection parameters for that specific network."),(0,o.kt)("p",null,"Format for networks is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n"networks": {\n  "NETWORK NAME": "ADDRESS"\n}\n...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n"networks": {\n  "NETWORK NAME": {\n    "host": "ADDRESS",\n    "key": "ACCESS NODE NETWORK KEY"    \n  }\n}\n...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n\n"networks": {\n    "emulator": "127.0.0.1:3569",\n    "mainnet": "access.mainnet.nodes.onflow.org:9000",\n    "testnet": "access.devnet.nodes.onflow.org:9000",\n    "testnetSecure": {\n        "host": "access-001.devnet30.nodes.onflow.org:9001",\n        "key": "ba69f7d2e82b9edf25b103c195cd371cf0cc047ef8884a9bbe331e62982d46daeebf836f7445a2ac16741013b192959d8ad26998aff12f2adc67a99e1eb2988d"\n    },\n}\n\n...\n')),(0,o.kt)("h3",{id:"emulators"},"Emulators"),(0,o.kt)("p",null,"The default emulator CLI is automatically configured with name being ",(0,o.kt)("inlineCode",{parentName:"p"},'"default"')," and values of\n",(0,o.kt)("inlineCode",{parentName:"p"},"serviceAccount"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"emulator-account"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},"port"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"3569"'),". The default emulator configuration will not show up on\nflow.json."),(0,o.kt)("p",null,"To customize emulator values, add emulator section like the example below: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n\n"emulators": {\n    "custom-emulator": {\n        "port": 3600,\n        "serviceAccount": "emulator-account"\n    }\n}\n\n...\n')))}p.isMDXComponent=!0}}]);