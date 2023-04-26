"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Cadence Anti-Patterns"},r=void 0,l={unversionedId:"cadence/anti-patterns",id:"cadence/anti-patterns",title:"Cadence Anti-Patterns",description:"This is an opinionated list of issues that can be improved if they are found in Cadence code intended for production.",source:"@site/docs/cadence/anti-patterns.mdx",sourceDirName:"cadence",slug:"/cadence/anti-patterns",permalink:"/cadence/anti-patterns",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Cadence Anti-Patterns"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/cadence/FAQ"},next:{title:"Contract Upgrades with Incompatible Changes",permalink:"/cadence/contract-upgrades"}},s={},c=[{value:"Avoid using <code>AuthAccount</code> as a function parameter",id:"avoid-using-authaccount-as-a-function-parameter",level:2},{value:"Problem",id:"problem",level:3},{value:"Example:",id:"example",level:3},{value:"Solution",id:"solution",level:3},{value:"Auth references and capabilities should be avoided",id:"auth-references-and-capabilities-should-be-avoided",level:2},{value:"Problem",id:"problem-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Another Example",id:"another-example",level:3},{value:"Events from resources may not be unique",id:"events-from-resources-may-not-be-unique",level:2},{value:"Problem",id:"problem-2",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Public functions and fields should be avoided",id:"public-functions-and-fields-should-be-avoided",level:2},{value:"Problem",id:"problem-3",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Capability-Typed public fields are a security hole",id:"capability-typed-public-fields-are-a-security-hole",level:2},{value:"Problem",id:"problem-4",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Array or dictionary fields should be private",id:"array-or-dictionary-fields-should-be-private",level:2},{value:"Problem",id:"problem-5",level:3},{value:"Solution",id:"solution-4",level:3},{value:"Public admin resource creation functions are unsafe",id:"public-admin-resource-creation-functions-are-unsafe",level:2},{value:"Problem",id:"problem-6",level:3},{value:"Solution",id:"solution-5",level:3},{value:"Example",id:"example-2",level:3},{value:"Do not modify smart contract state or emit events in public struct initializers",id:"do-not-modify-smart-contract-state-or-emit-events-in-public-struct-initializers",level:2},{value:"Problem",id:"problem-7",level:3},{value:"Solution",id:"solution-6",level:3},{value:"Example",id:"example-3",level:3}],u=(d="Callout",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const p={toc:c},h="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is an opinionated list of issues that can be improved if they are found in Cadence code intended for production."),(0,o.kt)("h1",{id:"security-and-robustness"},"Security and Robustness"),(0,o.kt)("h2",{id:"avoid-using-authaccount-as-a-function-parameter"},"Avoid using ",(0,o.kt)("inlineCode",{parentName:"h2"},"AuthAccount")," as a function parameter"),(0,o.kt)("h3",{id:"problem"},"Problem"),(0,o.kt)("p",null,"Some may choose to authenticate or perform operations for their users by using the users' account addresses.\nIn order to do this, a commonly seen case would be to pass the user's ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount")," object\nas a parameter to a contract function to use for querying the account or storing objects directly.\nThis is problematic, as the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount")," object allows access to ALL private areas of the account,\nfor example, all of the user's storage, authorized keys, etc.,\nwhich provides the opportunity for bad actors to take advantage of."),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"...\n// BAD CODE\n// DO NOT COPY\n\n// Imagine this code is in a contract that uses AuthAccount to authenticate users\n// To transfer NFTs\n\n// They could deploy the contract with an Ethereum-style access control list functionality\n\npub fun transferNFT(id: UInt64, owner: AuthAccount) {\n    assert(owner(id) == owner.address)\n\n    transfer(id)\n}\n\n// But they could upgrade the function to have the same signature\n// so it looks like it is doing the same thing, but they could also drain a little bit\n// of FLOW from the user's vault, a totally separate piece of the account that\n// should not be accessible in this function\n// BAD\n\npub fun transferNFT(id: UInt64, owner: AuthAccount) {\n    assert(owner(id) == owner.address)\n\n    transfer(id)\n\n    // Sneakily borrow a reference to the user's Flow Token Vault\n    // and withdraw a bit of FLOW\n    // BAD\n    let vaultRef = owner.borrow<&FlowToken.Vault>(/storage/flowTokenVault)!\n    let stolenTokens <- vaultRef.withdraw(amount: 0.1)\n\n    // deposit the stolen funds in the contract owners vault\n    // BAD\n    contractVault.deposit(from: <-stolenTokens)\n}\n...\n")),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Projects should find other ways to authenticate users, such as using resources and capabilities as authentication objects.\nThey should also expect to perform most storage and linking operations within transaction bodies\nrather than inside contract utility functions."),(0,o.kt)("p",null,"There are some scenarios where using an ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount")," object is necessary, such as a cold storage multi-sig,\nbut those cases are extremely rare and ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount")," usage should still be avoided unless absolutely necessary."),(0,o.kt)("h2",{id:"auth-references-and-capabilities-should-be-avoided"},"Auth references and capabilities should be avoided"),(0,o.kt)("h3",{id:"problem-1"},"Problem"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"language/references"},"Authorized references")," allow downcasting restricted\ntypes to their unrestricted type and should be avoided unless necessary.\nThe type that is being restricted could expose functionality that was not intended to be exposed.\nIf the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," keyword is used on local variables they will be references.\nReferences are ephemeral and cannot be stored.\nThis prevents any reference casting to be stored under account storage.\nAdditionally, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," keyword is used to store a public capability, serious harm\ncould happen since the value could be downcasted to a type\nthat has functionality and values altered."),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("p",null,"A commonly seen pattern in NFT smart contracts is including a public borrow function\nthat borrows an auth reference to an NFT (eg. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dapperlabs/nba-smart-contracts/blob/95fe72b7e94f43c9eff28412ce3642b69dcd8cd5/contracts/TopShot.cdc#L889-L906"},"NBA Top Shot"),").\nThis allows anyone to access the stored metadata or extra fields that weren't part\nof the NFT standard. While generally safe in most scenarios, not all NFTs are built the same.\nSome NFTs may have privileged functions that shouldn't be exposed by this method,\nso please be cautious and mindful when imitating NFT projects that use this pattern."),(0,o.kt)("h3",{id:"another-example"},"Another Example"),(0,o.kt)("p",null,"When we create a public capability for our ",(0,o.kt)("inlineCode",{parentName:"p"},"FungibleToken.Vault")," we do not use an auth capability:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// GOOD: Create a public capability to the Vault that only exposes\n// the balance field through the Balance interface\nsigner.link<&FlowToken.Vault{FungibleToken.Balance}>(\n    /public/flowTokenBalance,\n    target: /storage/flowTokenVault\n)\n")),(0,o.kt)("p",null,"If we were to use an authorized type for the capability, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// BAD: Create an Authorized public capability to the Vault that only exposes\n// the balance field through the Balance interface\n// Authorized referenced can be downcasted to their unrestricted types, which is dangerous\nsigner.link<auth &FlowToken.Vault{FungibleToken.Balance}>(\n    /public/flowTokenBalance,\n    target: /storage/flowTokenVault\n)\n")),(0,o.kt)("p",null,"Then anyone in the network could take that restricted reference\nthat is only supposed to expose the balance field and downcast it to expose the withdraw field\nand steal all our money!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// Exploit of the auth capability to expose withdraw\nlet balanceRef = getAccount(account)\n    .getCapability<auth &FlowToken.Vault{FungibleToken.Balance}>(/public/flowTokenBalance)\n    .borrow()!\n\nlet fullVaultRef = balanceRef as! &FlowToken.Vault\n\n// Withdraw the newly exposed funds\nlet stolenFunds <- fullVaultRef.withdraw(amount: 1000000)\n")),(0,o.kt)("h2",{id:"events-from-resources-may-not-be-unique"},"Events from resources may not be unique"),(0,o.kt)("h3",{id:"problem-2"},"Problem"),(0,o.kt)("p",null,"Public functions in a contract can be called by anyone, e.g. any other contract or any transaction.\nIf that function creates a resource, and that resource has functions that emit events,\nthat means any account can create an instance of that resource and emit those events.\nIf those events are meant to indicate actions taken using a single instance of that resource\n(eg. admin object, registry), or instances created through a particular workflow,\nit's possible that events from other instances may be mixed in with the ones you're querying for -\nmaking the event log search and management more cumbersome."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("p",null,"To fix this, if there should be only a single instance of the resource,\nit should be created and ",(0,o.kt)("inlineCode",{parentName:"p"},"link()"),"ed to a public path in an admin account's storage\nduring the contracts's initializer."),(0,o.kt)("h1",{id:"access-control"},"Access Control"),(0,o.kt)("h2",{id:"public-functions-and-fields-should-be-avoided"},"Public functions and fields should be avoided"),(0,o.kt)("h3",{id:"problem-3"},"Problem"),(0,o.kt)("p",null,"Be sure to keep track of access modifiers when structuring your code, and make public only what should be public.\nAccidentally exposed fields can be a security hole."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("p",null,"When writing your smart contract, look at every field and function and make sure\nthat they are all ",(0,o.kt)("inlineCode",{parentName:"p"},"access(self)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"access(contract)"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"access(account)"),", unless otherwise needed."),(0,o.kt)("h2",{id:"capability-typed-public-fields-are-a-security-hole"},"Capability-Typed public fields are a security hole"),(0,o.kt)("p",null,'This is a specific case of "Public Functions And Fields Should Be Avoided", above.'),(0,o.kt)("h3",{id:"problem-4"},"Problem"),(0,o.kt)("p",null,"The values of public fields can be copied. Capabilities are value types,\nso if they are used as a public field, anyone can copy it from the field\nand call the functions that it exposes.\nThis almost certainly is not what you want if a capability\nhas been stored as a field on a contract or resource in this way."),(0,o.kt)("h3",{id:"solution-3"},"Solution"),(0,o.kt)("p",null,"For public access to a capability, place it in an accounts public area so this expectation is explicit."),(0,o.kt)("h2",{id:"array-or-dictionary-fields-should-be-private"},"Array or dictionary fields should be private"),(0,o.kt)(u,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"This anti-pattern has been addressed with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flips/blob/main/flips/20211129-cadence-mutability-restrictions.md"},"FLIP #703"))),(0,o.kt)("h3",{id:"problem-5"},"Problem"),(0,o.kt)("p",null,'This is a specific case of "Public Functions And Fields Should Be Avoided", above.\nPublic array or dictionary fields are not directly over-writable,\nbut their members can be accessed and overwritten if the field is public.\nThis could potentially result in security vulnerabilities for the contract\nif these fields are mistakenly made public.'),(0,o.kt)("p",null,"Ex:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub contract Array {\n    // array is intended to be initialized to something constant\n    pub let shouldBeConstantArray: [Int]\n}\n")),(0,o.kt)("p",null,"Anyone could use a transaction like this to modify it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"import Array from 0x01\n\ntransaction {\n    execute {\n        Array.shouldbeConstantArray[0] = 1000\n    }\n}\n")),(0,o.kt)("h3",{id:"solution-4"},"Solution"),(0,o.kt)("p",null,"Make sure that any array or dictionary fields in contracts, structs, or resources\nare ",(0,o.kt)("inlineCode",{parentName:"p"},"access(contract)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"access(self)")," unless they need to be intentionally made public."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub contract Array {\n    // array is inteded to be initialized to something constant\n    access(self) let shouldBeConstantArray: [Int]\n}\n")),(0,o.kt)("h2",{id:"public-admin-resource-creation-functions-are-unsafe"},"Public admin resource creation functions are unsafe"),(0,o.kt)("p",null,'This is a specific case of "Public Functions And Fields Should Be Avoided", above.'),(0,o.kt)("h3",{id:"problem-6"},"Problem"),(0,o.kt)("p",null,"A public function on a contract that creates a resource can be called by any account.\nIf that resource provides access to admin functions then the creation function should not be public."),(0,o.kt)("h3",{id:"solution-5"},"Solution"),(0,o.kt)("p",null,"To fix this, a single instance of that resource should be created in the contract's ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," method,\nand then a new creation function can be potentially included within the admin resource, if necessary.\nThe admin resource can then be ",(0,o.kt)("inlineCode",{parentName:"p"},"link()"),"ed to a private path in an admin's account storage during the contract's initializer."),(0,o.kt)("h3",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// Pseudo-code\n\n// BAD\npub contract Currency {\n    pub resource Admin {\n        pub fun mintTokens()\n    }\n\n    // Anyone in the network can call this function\n    // And use the Admin resource to mint tokens\n    pub fun createAdmin(): @Admin {\n        return <-create Admin()\n    }\n}\n\n// This contract makes the admin creation private and in the initializer\n// so that only the one who controls the account can mint tokens\n// GOOD\npub contract Currency {\n    pub resource Admin {\n        pub fun mintTokens()\n\n        // Only an admin can create new Admins\n        pub fun createAdmin(): @Admin {\n            return <-create Admin()\n        }\n    }\n\n    init() {\n        // Create a single admin resource\n        let firstAdmin <- create Admin()\n\n        // Store it in private account storage in `init` so only the admin can use it\n        self.account.save(<-firstAdmin, to: /storage/currencyAdmin)\n    }\n}\n")),(0,o.kt)("h2",{id:"do-not-modify-smart-contract-state-or-emit-events-in-public-struct-initializers"},"Do not modify smart contract state or emit events in public struct initializers"),(0,o.kt)("p",null,"This is another example of the risks of having publicly accessible parts to your smart contract."),(0,o.kt)("h3",{id:"problem-7"},"Problem"),(0,o.kt)("p",null,"Data structure definitions in Cadence currently must be declared as public so that they can be used by anyone.\nStructs do not have the same restrictions that resources have on them,\nwhich means that anyone can create a new instance of a struct without going through any authorization."),(0,o.kt)("h3",{id:"solution-6"},"Solution"),(0,o.kt)("p",null,"Any contract state-modifying operations related to the creation of structs\nshould be contained in restricted resources instead of the initializers of structs."),(0,o.kt)("h3",{id:"example-3"},"Example"),(0,o.kt)("p",null,"This used to be a bug in the NBA Top Shot smart contract, so we'll use that as an example.\nBefore, when it created a new play,\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dapperlabs/nba-smart-contracts/blob/55645478594858a6830e4ab095034068ef9753e9/contracts/TopShot.cdc#L155-L158"},"it would initialize the play record with a struct,"),"\nwhich increments the number that tracks the play IDs and emits an event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// Simplified Code\n// BAD\n//\npub contract TopShot {\n\n    // The Record that is used to track every unique play ID\n    pub var nextPlayID: UInt32\n\n    pub struct Play {\n\n        pub let playID: UInt32\n\n        init() {\n\n            self.playID = TopShot.nextPlayID\n\n            // Increment the ID so that it isn't used again\n            TopShot.nextPlayID = TopShot.nextPlayID + 1\n\n            emit PlayCreated(id: self.playID, metadata: metadata)\n        }\n    }\n}\n")),(0,o.kt)("p",null,"This is a risk because anyone can create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Play")," struct as many times as they want,\nwhich could increment the ",(0,o.kt)("inlineCode",{parentName:"p"},"nextPlayID")," field to the max ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt32")," value,\neffectively preventing new plays from being created. It also would emit bogus events."),(0,o.kt)("p",null,"This bug was fixed by\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dapperlabs/nba-smart-contracts/blob/master/contracts/TopShot.cdc#L682-L685"},"instead updating the contract state in the admin function"),"\nthat creates the plays."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// Update contract state in admin resource functions\n// GOOD\n//\npub contract TopShot {\n\n    // The Record that is used to track every unique play ID\n    pub var nextPlayID: UInt32\n\n    pub struct Play {\n\n        pub let playID: UInt32\n\n        init() {\n            self.playID = TopShot.nextPlayID\n        }\n    }\n\n    pub resource Admin {\n\n        // Protected within the private admin resource\n        pub fun createPlay() {\n            // Create the new Play\n            var newPlay = Play()\n\n            // Increment the ID so that it isn't used again\n            TopShot.nextPlayID = TopShot.nextPlayID + UInt32(1)\n\n            emit PlayCreated(id: newPlay.playID, metadata: metadata)\n\n            // Store it in the contract storage\n            TopShot.playDatas[newPlay.playID] = newPlay\n        }\n    }\n}\n")))}m.isMDXComponent=!0}}]);