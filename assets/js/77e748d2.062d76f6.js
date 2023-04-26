"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={},r="Flow Non-Fungible Token Standard",l={unversionedId:"flow/flow-nft/overview",id:"flow/flow-nft/overview",title:"Flow Non-Fungible Token Standard",description:"This standard defines the minimum functionality required to",source:"@site/docs/flow/flow-nft/overview.md",sourceDirName:"flow/flow-nft",slug:"/flow/flow-nft/overview",permalink:"/flow/flow-nft/overview",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource Interface Receiver",permalink:"/flow/flow-nft/NonFungibleToken/NonFungibleToken_Receiver"},next:{title:"FLOW Token",permalink:"/flow/flow-token/"}},s={},c=[{value:"What is Cadence?",id:"what-is-cadence",level:2},{value:"Core features",id:"core-features",level:2},{value:"Create a new NFT collection",id:"create-a-new-nft-collection",level:3},{value:"Withdraw an NFT",id:"withdraw-an-nft",level:3},{value:"Deposit an NFT",id:"deposit-an-nft",level:3},{value:"\u26a0\ufe0f Important",id:"\ufe0f-important",level:4},{value:"List NFTs in an account",id:"list-nfts-in-an-account",level:3},{value:"NFT Metadata",id:"nft-metadata",level:2},{value:"How to read metadata",id:"how-to-read-metadata",level:3},{value:"How to implement metadata",id:"how-to-implement-metadata",level:3},{value:"List of common views",id:"list-of-common-views",level:3},{value:"Royalty View",id:"royalty-view",level:2},{value:"Important Royalty Instructions for Royalty Receivers",id:"important-royalty-instructions-for-royalty-receivers",level:4},{value:"How to propose a new view",id:"how-to-propose-a-new-view",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Comparison to other standards on Ethereum",id:"comparison-to-other-standards-on-ethereum",level:2},{value:"How to test the standard",id:"how-to-test-the-standard",level:2},{value:"Running automated tests",id:"running-automated-tests",level:2},{value:"Bonus features",id:"bonus-features",level:2},{value:"NFT Forwarding",id:"nft-forwarding",level:3},{value:"License",id:"license",level:2},{value:"Deploying updates",id:"deploying-updates",level:2},{value:"Testnet",id:"testnet",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flow-non-fungible-token-standard"},"Flow Non-Fungible Token Standard"),(0,o.kt)("p",null,"This standard defines the minimum functionality required to\nimplement a safe, secure, and easy-to-use non-fungible token\ncontract on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.onflow.org/"},"Flow blockchain"),"."),(0,o.kt)("h2",{id:"what-is-cadence"},"What is Cadence?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.onflow.org/cadence"},"Cadence is the resource-oriented programming language"),"\nfor developing smart contracts on Flow."),(0,o.kt)("p",null,"Before reading this standard,\nwe recommend completing the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.onflow.org/cadence/tutorial/01-first-steps/"},"Cadence tutorials"),"\nto build a basic understanding of the programming language."),(0,o.kt)("p",null,"Resource-oriented programming, and by extension Cadence,\nprovides an ideal programming model for non-fungible tokens (NFTs).\nUsers are able to store their NFT objects directly in their accounts and transact\npeer-to-peer. Learn more in this ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/dapperlabs/resource-oriented-programming-bee4d69c8f8e"},"blog post about resources"),"."),(0,o.kt)("h2",{id:"core-features"},"Core features"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NonFungibleToken")," contract defines the following set of functionality\nthat must be included in each implementation."),(0,o.kt)("p",null,"Contracts that implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"NonFungibleToken")," interface are required to implement two resource interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"NFT")," - A resource that describes the structure of a single NFT.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," - A resource that can hold multiple NFTs of the same type."),(0,o.kt)("p",{parentName:"li"},"Users typically store one collection per NFT type, saved at a well-known location in their account storage."),(0,o.kt)("p",{parentName:"li"},"For example, all NBA Top Shot Moments owned by a single user are held in a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dapperlabs/nba-smart-contracts/blob/master/contracts/TopShot.cdc#L605"},(0,o.kt)("inlineCode",{parentName:"a"},"TopShot.Collection"))," stored in their account at the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/storage/MomentCollection"),"."))),(0,o.kt)("h3",{id:"create-a-new-nft-collection"},"Create a new NFT collection"),(0,o.kt)("p",null,"Create a new collection using the ",(0,o.kt)("inlineCode",{parentName:"p"},"createEmptyCollection")," function."),(0,o.kt)("p",null,"This function MUST return an empty collection that contains no NFTs."),(0,o.kt)("p",null,"Users typically save new collections to a well-known location in their account\nand link the ",(0,o.kt)("inlineCode",{parentName:"p"},"NonFungibleToken.CollectionPublic")," interface as a public capability."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let collection <- ExampleNFT.createEmptyCollection()\n\naccount.save(<-collection, to: /storage/ExampleNFTCollection)\n\n// create a public capability for the collection\naccount.link<&{NonFungibleToken.CollectionPublic}>(\n    /public/ExampleNFTCollection,\n    target: /storage/ExampleNFTCollection\n)\n")),(0,o.kt)("h3",{id:"withdraw-an-nft"},"Withdraw an NFT"),(0,o.kt)("p",null,"Withdraw an ",(0,o.kt)("inlineCode",{parentName:"p"},"NFT")," from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc#L36-L42"},(0,o.kt)("inlineCode",{parentName:"a"},"withdraw"))," function.\nThis function emits the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc#L12"},(0,o.kt)("inlineCode",{parentName:"a"},"Withdraw"))," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let collectionRef = account.borrow<&ExampleNFT.Collection>(from: /storage/ExampleNFTCollection)\n    ?? panic(\"Could not borrow a reference to the owner's collection\")\n\n// withdraw the NFT from the owner's collection\nlet nft <- collectionRef.withdraw(withdrawID: 42)\n")),(0,o.kt)("h3",{id:"deposit-an-nft"},"Deposit an NFT"),(0,o.kt)("p",null,"Deposit an ",(0,o.kt)("inlineCode",{parentName:"p"},"NFT")," into a ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc#L46-L57"},(0,o.kt)("inlineCode",{parentName:"a"},"deposit"))," function.\nThis function emits the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc#L13"},(0,o.kt)("inlineCode",{parentName:"a"},"Deposit"))," event."),(0,o.kt)("p",null,"This function is available on the ",(0,o.kt)("inlineCode",{parentName:"p"},"NonFungibleToken.CollectionPublic")," interface,\nwhich accounts publish as public capability.\nThis capability allows anybody to deposit an NFT into a collection\nwithout accessing the entire collection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let nft: ExampleNFT.NFT\n\n// ...\n\nlet collection = account.getCapability(/public/ExampleNFTCollection)\n    .borrow<&{NonFungibleToken.CollectionPublic}>()\n    ?? panic("Could not borrow a reference to the receiver\'s collection")\n\ncollection.deposit(token: <-nft)\n')),(0,o.kt)("h4",{id:"\ufe0f-important"},"\u26a0\ufe0f Important"),(0,o.kt)("p",null,"In order to comply with the deposit function in the interface,\nan implementation MUST take a ",(0,o.kt)("inlineCode",{parentName:"p"},"@NonFungibleToken.NFT")," resource as an argument.\nThis means that anyone can send a resource object that conforms to ",(0,o.kt)("inlineCode",{parentName:"p"},"@NonFungibleToken.NFT")," to a deposit function.\nIn an implementation, you MUST cast the ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," as your specific token type before depositing it or you will\ndeposit another token type into your collection. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let token <- token as! @ExampleNFT.NFT\n")),(0,o.kt)("h3",{id:"list-nfts-in-an-account"},"List NFTs in an account"),(0,o.kt)("p",null,"Return a list of NFTs in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc#L59-L62"},(0,o.kt)("inlineCode",{parentName:"a"},"getIDs"))," function."),(0,o.kt)("p",null,"This function is available on the ",(0,o.kt)("inlineCode",{parentName:"p"},"NonFungibleToken.CollectionPublic")," interface,\nwhich accounts publish as public capability."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let collection = account.getCapability(/public/ExampleNFTCollection)\n    .borrow<&{NonFungibleToken.CollectionPublic}>()\n    ?? panic("Could not borrow a reference to the receiver\'s collection")\n\nlet ids = collection.getIDs()\n')),(0,o.kt)("h2",{id:"nft-metadata"},"NFT Metadata"),(0,o.kt)("p",null,"NFT metadata is represented in a flexible and modular way using\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/blob/master/flips/20210916-nft-metadata.md"},"standard proposed in FLIP-0636"),"."),(0,o.kt)("p",null,"When writing an NFT contract,\nyou should implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L3-L6"},(0,o.kt)("inlineCode",{parentName:"a"},"MetadataViews.Resolver")),"interface,\nwhich allows your NFT to implement one or more metadata types called views."),(0,o.kt)("p",null,"Each view represents a different type of metadata,\nsuch as an on-chain creator biography or an off-chain video clip.\nViews do not specify or require how to store your metadata, they only specify\nthe format to query and return them, so projects can still be flexible with how they store their data."),(0,o.kt)("h3",{id:"how-to-read-metadata"},"How to read metadata"),(0,o.kt)("p",null,"This example shows how to read basic information about an NFT\nincluding the name, description, image and owner."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source: ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/onflow/flow-nft/blob/master/scripts/get_nft_metadata.cdc"},"get_nft_metadata.cdc"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import ExampleNFT from "..."\nimport MetadataViews from "..."\n\n// ...\n\n// Get the regular public capability\nlet collection = account.getCapability(ExampleNFT.CollectionPublicPath)\n    .borrow<&{ExampleNFT.ExampleNFTCollectionPublic}>()\n    ?? panic("Could not borrow a reference to the collection")\n\n// Borrow a reference to the NFT as usual\nlet nft = collection.borrowExampleNFT(id: 42)\n    ?? panic("Could not borrow a reference to the NFT")\n\n// Call the resolveView method\n// Provide the type of the view that you want to resolve\n// View types are defined in the MetadataViews contract\n// You can see if an NFT supports a specific view type by using the `getViews()` method\nif let view = nft.resolveView(Type<MetadataViews.Display>()) {\n    let display = view as! MetadataViews.Display\n\n    log(display.name)\n    log(display.description)\n    log(display.thumbnail)\n}\n\n// The owner is stored directly on the NFT object\nlet owner: Address = nft.owner!.address!\n\n// Inspect the type of this NFT to verify its origin\nlet nftType = nft.getType()\n\n// `nftType.identifier` is `A.e03daebed8ca0615.ExampleNFT.NFT`\n')),(0,o.kt)("h3",{id:"how-to-implement-metadata"},"How to implement metadata"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc"},"example NFT contract")," shows how to implement metadata views."),(0,o.kt)("h3",{id:"list-of-common-views"},"List of common views"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Source"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Display")),(0,o.kt)("td",{parentName:"tr",align:null},"Return the basic representation of an NFT."),(0,o.kt)("td",{parentName:"tr",align:null},"Implemented"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L35-L70"},"MetadataViews.cdc"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HTTPFile")),(0,o.kt)("td",{parentName:"tr",align:null},"A file available at an HTTP(S) URL."),(0,o.kt)("td",{parentName:"tr",align:null},"Implemented"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L80-L92"},"MetadataViews.cdc"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"IPFSFile")),(0,o.kt)("td",{parentName:"tr",align:null},"A file stored in IPFS."),(0,o.kt)("td",{parentName:"tr",align:null},"Implemented"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L94-L133"},"MetadataViews.cdc"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Royalties")),(0,o.kt)("td",{parentName:"tr",align:null},"An array of Royalty Cuts for a given NFT."),(0,o.kt)("td",{parentName:"tr",align:null},"Implemented"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L136-L208"},"MetadataViews.cdc"))))),(0,o.kt)("h2",{id:"royalty-view"},"Royalty View"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataViews")," contract also includes ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L136-L208"},"a standard view for Royalties"),"."),(0,o.kt)("p",null,"This view is meant to be used by 3rd party marketplaces to take a cut of the proceeds of an NFT sale\nand send it to the author of a certain NFT. Each NFT can have its own royalty view:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Royalties {\n\n    /// Array that tracks the individual royalties\n    access(self) let cutInfos: [Royalty]\n}\n")),(0,o.kt)("p",null,"and the royalty can indicate whatever fungible token it wants to accept via the type of the generic ",(0,o.kt)("inlineCode",{parentName:"p"},"{FungibleToken.Reciever}")," capability that it specifies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Royalty {\n    /// Generic FungibleToken Receiver for the beneficiary of the royalty\n    /// Can get the concrete type of the receiver with receiver.getType()\n    /// Recommendation - Users should create a new link for a FlowToken receiver for this using `getRoyaltyReceiverPublicPath()`,\n    /// and not use the default FlowToken receiver.\n    /// This will allow users to update the capability in the future to use a more generic capability\n    pub let receiver: Capability<&AnyResource{FungibleToken.Receiver}>\n\n    /// Multiplier used to calculate the amount of sale value transferred to royalty receiver.\n    /// Note - It should be between 0.0 and 1.0\n    /// Ex - If the sale value is x and multiplier is 0.56 then the royalty value would be 0.56 * x.\n    ///\n    /// Generally percentage get represented in terms of basis points\n    /// in solidity based smart contracts while cadence offers `UFix64` that already supports\n    /// the basis points use case because its operations\n    /// are entirely deterministic integer operations and support up to 8 points of precision.\n    pub let cut: UFix64\n}\n")),(0,o.kt)("p",null,"If someone wants to make a listing for their NFT on a marketplace,\nthe marketplace can check to see if the royalty receiver accepts the seller's desired fungible token\nby checking the concrete type of the reference.\nIf the concrete type is not the same as the type of token the seller wants to accept,\nthe marketplace has a few options.\nThey could either get the address of the receiver by using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"receiver.owner.address")," field and check to see if the account has a receiver for the desired token,\nthey could perform the sale without a royalty cut, or they could abort the sale\nsince the token type isn't accepted by the royalty beneficiary."),(0,o.kt)("p",null,"You can see example implementations of royalties in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleNFT")," contract\nand the associated transactions and scripts."),(0,o.kt)("p",null,"=======\n| Name       | Purpose                                    | Status      | Source                                                                                                   |\n| ----------- | ------------------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------- |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"Display"),"   | Return the basic representation of an NFT. | Implemented | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L35-L70"},"MetadataViews.cdc"),"  |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPFile"),"  | A file available at an HTTP(S) URL.        | Implemented | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L80-L92"},"MetadataViews.cdc"),"  |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"IPFSFile"),"  | A file stored in IPFS.                     | Implemented | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L94-L133"},"MetadataViews.cdc")," |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"Royalties")," | An array of Royalty Cuts for a given NFT.  | Implemented | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L136-L208"},"MetadataViews.cdc")," |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"Edition"),"  | Return information about one or more editions for an NFT. | Implemented | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L246-L266"},"MetadataViews.cdc")," |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTCollectionData")," | Provides storage and retrieval information of an NFT | Implemented | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L243-L299"},"MetadataViews.cdc")," |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTCollectionDisplay")," | Returns the basic representation of an NFT's Collection.  | Implemented | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/MetadataViews.cdc#L301-L328"},"MetadataViews.cdc")," |"),(0,o.kt)("h4",{id:"important-royalty-instructions-for-royalty-receivers"},"Important Royalty Instructions for Royalty Receivers"),(0,o.kt)("p",null,"If you plan to set your account as a receiver of royalties, you'll likely want to be able to accept\nas many token types as possible. This won't be immediately possible at first, but eventually,\nwe will also design a contract that can act as a sort of switchboard for fungible tokens.\nIt will accept any generic fungible token and route it to the correct vault in your account.\nThis hasn't been built yet, but you can still set up your account to be ready for it in the future.\nTherefore, if you want to receive royalties, you should set up your account with the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/c13545c37be4d1e63605c5d76340fb188923d997/transactions/setup_account_to_receive_royalty.cdc"},(0,o.kt)("inlineCode",{parentName:"a"},"setup_account_to_receive_royalty.cdc")," transaction"),"."),(0,o.kt)("p",null,"This will link generic public path from ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataViews.getRoyaltyReceiverPublicPath()"),"\nto your chosen fungible token for now. Then, use that public path for your royalty receiver\nand in the future, you will be able to easily update the link at that path to use the\nfungible token switchboard instead."),(0,o.kt)("h2",{id:"how-to-propose-a-new-view"},"How to propose a new view"),(0,o.kt)("p",null,"Please open a pull request to propose a new metadata view or changes to an existing view."),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"As Flow and Cadence are still new,\nwe expect this standard to evolve based on feedback\nfrom both developers and users."),(0,o.kt)("p",null,"We'd love to hear from anyone who has feedback. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are there any features that are missing from the standard?"),(0,o.kt)("li",{parentName:"ul"},"Are the current features defined in the best way possible?"),(0,o.kt)("li",{parentName:"ul"},"Are there any pre and post conditions that are missing?"),(0,o.kt)("li",{parentName:"ul"},"Are the pre and post conditions defined well enough? Error messages?"),(0,o.kt)("li",{parentName:"ul"},"Are there any other actions that need an event defined for them?"),(0,o.kt)("li",{parentName:"ul"},"Are the current event definitions clear enough and do they provide enough information?"),(0,o.kt)("li",{parentName:"ul"},"Are the variable, function, and parameter names descriptive enough?"),(0,o.kt)("li",{parentName:"ul"},"Are there any openings for bugs or vulnerabilities that we are not noticing?")),(0,o.kt)("p",null,"Please create an issue in this repository if there is a feature that\nyou believe needs discussing or changing."),(0,o.kt)("h2",{id:"comparison-to-other-standards-on-ethereum"},"Comparison to other standards on Ethereum"),(0,o.kt)("p",null,"This standard covers much of the same ground as ERC-721 and ERC-1155,\nbut without most of the downsides."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tokens cannot be sent to contracts that don't understand how to use them, because an account needs to have a ",(0,o.kt)("inlineCode",{parentName:"li"},"Receiver")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Collection")," in its storage to receive tokens."),(0,o.kt)("li",{parentName:"ul"},"If the recipient is a contract that has a stored ",(0,o.kt)("inlineCode",{parentName:"li"},"Collection"),", the tokens can just be deposited to that Collection without having to do a clunky ",(0,o.kt)("inlineCode",{parentName:"li"},"approve"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"transferFrom"),"."),(0,o.kt)("li",{parentName:"ul"},"Events are defined in the contract for withdrawing and depositing, so a recipient will always be notified that someone has sent them tokens with their own deposit event."),(0,o.kt)("li",{parentName:"ul"},"This version can support batch transfers of NFTs. Even though it isn't explicitly defined in the contract, a batch transfer can be done within a transaction by just withdrawing all the tokens to transfer, then depositing them wherever they need to be, all atomically."),(0,o.kt)("li",{parentName:"ul"},"Transfers can trigger actions because users can define custom ",(0,o.kt)("inlineCode",{parentName:"li"},"Receivers")," to execute certain code when a token is sent."),(0,o.kt)("li",{parentName:"ul"},"Easy ownership indexing: rathing than iterating through all tokens to find which ones you own, you have them all stored in your account's collection and can get the list of the ones you own instantly.")),(0,o.kt)("h2",{id:"how-to-test-the-standard"},"How to test the standard"),(0,o.kt)("p",null,"If you want to test out these contracts, we recommend either testing them\nwith the ",(0,o.kt)("a",{parentName:"p",href:"https://play.onflow.org"},"Flow Playground"),"\nor with the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/vscode-extension"},"Visual Studio Code Extension"),"."),(0,o.kt)("p",null,"The steps to follow are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy ",(0,o.kt)("inlineCode",{parentName:"li"},"NonFungibleToken.cdc")),(0,o.kt)("li",{parentName:"ol"},"Deploy ",(0,o.kt)("inlineCode",{parentName:"li"},"ExampleNFT.cdc"),", importing ",(0,o.kt)("inlineCode",{parentName:"li"},"NonFungibleToken")," from the address you deployed it to.")),(0,o.kt)("p",null,"Then you can experiment with some of the other transactions and scripts in ",(0,o.kt)("inlineCode",{parentName:"p"},"transactions/"),"\nor even write your own. You'll need to replace some of the import address placeholders with addresses that you deploy to, as well as some of the transaction arguments."),(0,o.kt)("h2",{id:"running-automated-tests"},"Running automated tests"),(0,o.kt)("p",null,"You can find automated tests in the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/go/test/nft_test.go")," file. It uses the transaction templates that are contained in the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/go/templates/templates.go")," file. "),(0,o.kt)("p",null,"Tests have also been written in JavaScript and can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/js/test/tests/nft_test.js"),". Similar to the tests written in Go, test helper functions can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/js/test/templates/")," directory."),(0,o.kt)("p",null,"Entering the ",(0,o.kt)("inlineCode",{parentName:"p"},"make test")," command from the root directory will run both Go and JavaScript test suites. If you'd like to run just one test suite, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"make test")," from the test suite's ",(0,o.kt)("inlineCode",{parentName:"p"},"test/")," directory (e.g. running ",(0,o.kt)("inlineCode",{parentName:"p"},"make test")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/js/test")," will run just your JavaScript tests)."),(0,o.kt)("h2",{id:"bonus-features"},"Bonus features"),(0,o.kt)("h3",{id:"nft-forwarding"},"NFT Forwarding"),(0,o.kt)("p",null,"While this utility contract is not a standard, it is a demonstration of how an account could be configured to forward NFTs to a specified forwarding recipient's collection."),(0,o.kt)("p",null,"The NFTForwarder resource itself can be referenced like any ",(0,o.kt)("inlineCode",{parentName:"p"},"NonFungibleToken.Receiver")," resource, allowing a sender to deposit NFT's as they usually would. However, ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit()")," as implemented in this resource forwards the deposited NFT to the designated recipient's collection."),(0,o.kt)("p",null,"Several transactions are included in this repo to demonstrate how to interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTForwarder")," resource. Those are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create_forwarder.cdc")," - Creates the NFTForwarder resource and links the capability to ",(0,o.kt)("inlineCode",{parentName:"li"},"ExampleNFT.CollectionPublicPath"),", where an Example NFT Collection would expect to be found."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer_nft_to_receiver.cdc")," - Transfers an NFT to the forwarder by way of ",(0,o.kt)("inlineCode",{parentName:"li"},"deposit()")," found in NonFungibleToken.Receiver` interface. By construction of the NFTForwarder resource, the NFT deposited by the signer is further forwarded to the forwarding recipient designated in the NFTForwarder resource."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"change_forwarder_recipient.cdc")," - Changes the designated recipient collection to which NFT will be forwarded."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unlink_forwarder_link_collection.cdc")," - Unlinks the forwarder resource from ",(0,o.kt)("inlineCode",{parentName:"li"},"ExampleNFT.CollectionPublicPath"),", restoring the accounts CollectionPublic capability.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"(These could each be defined as a separate interface and standard and are probably not part of the main standard) They are not implemented in this repository yet")),(0,o.kt)("p",null,"10- Withdrawing tokens from someone else's Collection by using their ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," reference."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"approved withdraw event"),(0,o.kt)("li",{parentName:"ul"},"Providing a resource that only approves an account to withdraw a specific amount per transaction or per day/month/etc."),(0,o.kt)("li",{parentName:"ul"},"Returning the list of tokens that an account can withdraw for another account."),(0,o.kt)("li",{parentName:"ul"},"Reading the balance of the account that you have permission to send tokens for"),(0,o.kt)("li",{parentName:"ul"},"Owner is able to increase and decrease the approval at will, or revoke it completely",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is much harder than anticipated")))),(0,o.kt)("p",null,"11 - Standard for Composability/Extensibility"),(0,o.kt)("p",null,"12 - Minting a specific amount of tokens using a specific minter resource that an owner can control"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"tokens minted event"),(0,o.kt)("li",{parentName:"ul"},"Setting a cap on the total number of tokens that can be minted at a time or overall"),(0,o.kt)("li",{parentName:"ul"},"Setting a time frame where this is allowed")),(0,o.kt)("p",null,"13 - Burning a specific amount of tokens using a specific burner resource that an owner controls"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"tokens burnt event"),(0,o.kt)("li",{parentName:"ul"},"Setting a cap on the number of tokens that can be burned at a time or overall"),(0,o.kt)("li",{parentName:"ul"},"Setting a time frame where this is allowed")),(0,o.kt)("p",null,"14 - Pausing Token transfers (maybe a way to prevent the contract from being imported? probably not a good idea)"),(0,o.kt)("p",null,"15 - Cloning the token to create a new token with the same distribution"),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"The works in these files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc"},"ExampleNFT.cdc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-nft/blob/master/contracts/NonFungibleToken.cdc"},"NonFungibleToken.cdc"))),(0,o.kt)("p",null,"are under the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/LICENSE"},"Unlicense"),"."),(0,o.kt)("h2",{id:"deploying-updates"},"Deploying updates"),(0,o.kt)("h3",{id:"testnet"},"Testnet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"TESTNET_PRIVATE_KEY=xxxx flow project deploy --update --network testnet\n")))}u.isMDXComponent=!0}}]);