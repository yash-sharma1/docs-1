"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,k=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},i="Resource Switchboard",o={unversionedId:"flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_Switchboard",id:"flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_Switchboard",title:"Resource Switchboard",description:"The resource that stores the multiple fungible token receiver",source:"@site/docs/flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_Switchboard.md",sourceDirName:"flow/flow-ft/FungibleTokenSwitchboard",slug:"/flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_Switchboard",permalink:"/flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_Switchboard",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract FungibleTokenSwitchboard",permalink:"/flow/flow-ft/FungibleTokenSwitchboard/"},next:{title:"Resource Interface SwitchboardPublic",permalink:"/flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_SwitchboardPublic"}},u={},c=[{value:"Initializer",id:"initializer",level:3},{value:"Functions",id:"functions",level:2},{value:"fun <code>addNewVault()</code>",id:"fun-addnewvault",level:3},{value:"fun <code>addNewVaultsByPath()</code>",id:"fun-addnewvaultsbypath",level:3},{value:"fun <code>addNewVaultWrapper()</code>",id:"fun-addnewvaultwrapper",level:3},{value:"fun <code>removeVault()</code>",id:"fun-removevault",level:3},{value:"fun <code>deposit()</code>",id:"fun-deposit",level:3},{value:"fun <code>safeDeposit()</code>",id:"fun-safedeposit",level:3},{value:"fun <code>getVaultTypes()</code>",id:"fun-getvaulttypes",level:3}],p={toc:c},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"resource-switchboard"},"Resource ",(0,r.kt)("inlineCode",{parentName:"h1"},"Switchboard")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"resource Switchboard {\n\n    receiverCapabilities:  {Type: Capability<&{FungibleToken.Receiver}>}\n}\n")),(0,r.kt)("p",null,"The resource that stores the multiple fungible token receiver\ncapabilities, allowing the owner to add and remove them and anyone to\ndeposit any fungible token among the available types."),(0,r.kt)("p",null,"Implemented Interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FungibleToken.Receiver")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SwitchboardPublic"))),(0,r.kt)("h3",{id:"initializer"},"Initializer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func init()\n")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"fun-addnewvault"},"fun ",(0,r.kt)("inlineCode",{parentName:"h3"},"addNewVault()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func addNewVault(capability Capability<&{FungibleToken.Receiver}>)\n")),(0,r.kt)("p",null,"Adds a new fungible token receiver capability to the switchboard\nresource."),(0,r.kt)("p",null,"token vault deposit function through ",(0,r.kt)("inlineCode",{parentName:"p"},"{FungibleToken.Receiver}")," that\nwill be added to the switchboard."),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"capability : ",(0,r.kt)("em",{parentName:"li"},"The capability to expose a certain fungible"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fun-addnewvaultsbypath"},"fun ",(0,r.kt)("inlineCode",{parentName:"h3"},"addNewVaultsByPath()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func addNewVaultsByPath(paths [PublicPath], address Address)\n")),(0,r.kt)("p",null,"Adds a number of new fungible token receiver capabilities by using\nthe paths where they are stored."),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"paths : ",(0,r.kt)("em",{parentName:"li"},"The paths where the public capabilities are stored.")),(0,r.kt)("li",{parentName:"ul"},"address : ",(0,r.kt)("em",{parentName:"li"},"The address of the owner of the capabilities."))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fun-addnewvaultwrapper"},"fun ",(0,r.kt)("inlineCode",{parentName:"h3"},"addNewVaultWrapper()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func addNewVaultWrapper(capability Capability<&{FungibleToken.Receiver}>, type Type)\n")),(0,r.kt)("p",null,"Adds a new fungible token receiver capability to the switchboard\nresource specifying which ",(0,r.kt)("inlineCode",{parentName:"p"},"Type"),"of ",(0,r.kt)("inlineCode",{parentName:"p"},"@FungibleToken.Vault"),' can be\ndeposited to it. Use it to include in your switchboard "wrapper"\nreceivers such as a ',(0,r.kt)("inlineCode",{parentName:"p"},"@TokenForwarding.Forwarder"),". It can also be\nused to overwrite the type attached to a certain capability without\nhaving to remove that capability first."),(0,r.kt)("p",null,"token vault deposit function through ",(0,r.kt)("inlineCode",{parentName:"p"},"{FungibleToken.Receiver}")," that\nwill be added to the switchboard."),(0,r.kt)("p",null,"capability, rather than the ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," from the reference borrowed from\nsaid capability"),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"capability : ",(0,r.kt)("em",{parentName:"li"},"The capability to expose a certain fungible")),(0,r.kt)("li",{parentName:"ul"},"type : ",(0,r.kt)("em",{parentName:"li"},"The type of fungible token that can be deposited to that"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fun-removevault"},"fun ",(0,r.kt)("inlineCode",{parentName:"h3"},"removeVault()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func removeVault(capability Capability<&{FungibleToken.Receiver}>)\n")),(0,r.kt)("p",null,"Removes a fungible token receiver capability from the switchboard\nresource."),(0,r.kt)("p",null,"removed from the switchboard."),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"capability : ",(0,r.kt)("em",{parentName:"li"},"The capability to a fungible token vault to be"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fun-deposit"},"fun ",(0,r.kt)("inlineCode",{parentName:"h3"},"deposit()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func deposit(from FungibleToken.Vault)\n")),(0,r.kt)("p",null,"Takes a fungible token vault and routes it to the proper fungible\ntoken receiver capability for depositing it."),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"from : ",(0,r.kt)("em",{parentName:"li"},"The deposited fungible token vault resource."))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fun-safedeposit"},"fun ",(0,r.kt)("inlineCode",{parentName:"h3"},"safeDeposit()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func safeDeposit(from FungibleToken.Vault): FungibleToken.Vault?\n")),(0,r.kt)("p",null,"Takes a fungible token vault and tries to route it to the proper\nfungible token receiver capability for depositing the funds,\navoiding panicking if the vault is not available."),(0,r.kt)("p",null,"deposited."),(0,r.kt)("p",null,"funds if the deposit was successful, or still containing the funds\nif the reference to the needed vault was not found."),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vaultType : ",(0,r.kt)("em",{parentName:"li"},"The type of the ft vault that wants to be"))),(0,r.kt)("p",null,"Returns: The deposited fungible token vault resource, without the"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fun-getvaulttypes"},"fun ",(0,r.kt)("inlineCode",{parentName:"h3"},"getVaultTypes()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func getVaultTypes(): [Type]\n")),(0,r.kt)("p",null,"A getter function to know which tokens a certain switchboard\nresource is prepared to receive."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{FungibleToken.Receiver}")," capabilities that can be effectively\nborrowed."),(0,r.kt)("p",null,"Returns: The keys from the dictionary of stored"),(0,r.kt)("hr",null))}s.isMDXComponent=!0}}]);