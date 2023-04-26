"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||r;return n?a.createElement(f,c(c({ref:t},l),{},{components:n})):a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<r;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={title:"Mainnet Account Setup Guidelines",sidebar_title:"4. Mainnet Account Setup"},c=void 0,i={unversionedId:"flow/dapp-development/mainnet-account-setup",id:"flow/dapp-development/mainnet-account-setup",title:"Mainnet Account Setup Guidelines",description:"In order to deploy your smart contracts to the mainnet, you need to register, fund, and setup a new account.",source:"@site/docs/flow/dapp-development/mainnet-account-setup.md",sourceDirName:"flow/dapp-development",slug:"/flow/dapp-development/mainnet-account-setup",permalink:"/flow/dapp-development/mainnet-account-setup",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Mainnet Account Setup Guidelines",sidebar_title:"4. Mainnet Account Setup"},sidebar:"tutorialSidebar",previous:{title:"In-dapp Payments on Flow",permalink:"/flow/dapp-development/in-dapp-payments"},next:{title:"Mainnet Deployment Guidelines",permalink:"/flow/dapp-development/mainnet-deployment"}},p={},u=[{value:"Create an account",id:"create-an-account",level:2}],l={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to deploy your smart contracts to the mainnet, you need to register, fund, and setup a new account."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": This account will be used for production purposes. Make sure you handle keys appropriately. Using a Key Management Service is the best practice. By default, this command generates an ECDSA key pair on the P-256 curve. Keep in mind the CLI is intended for development purposes only and is not recommended for production use. Handling keys using a Key Management Service is the best practice.")),(0,o.kt)("h2",{id:"create-an-account"},"Create an account"),(0,o.kt)("p",null,"You can easily create a new funded account on mainnet using the Flow CLI. You only need to run a single command ",(0,o.kt)("inlineCode",{parentName:"p"},"flow accounts create")," and select a name for the account and the network, which in this case is ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),". After that the account private key is saved into a seperate file called ",(0,o.kt)("inlineCode",{parentName:"p"},"{name}.pkey"),". We advice switching to KMS system for production use which you ",(0,o.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli/configuration#advanced-format-1"},"can read more about here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"flow accounts create\n\nEnter an account name: mike\n\u2714 Testnet\n\n\ud83c\udf89 New account created with address 0x77e6ae4c8c2f1dd6 and name mike on Testnet network.\n\nHere\u2019s a summary of all the actions that were taken:\n - Added the new account to flow.json.\n - Saved the private key to mike.pkey.\n - Added mike.pkey to .gitignore.\n")),(0,o.kt)("p",null,"Read more about the command in the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli/create-accounts#interactive-mode"},"CLI account creation documentation"),"."))}s.isMDXComponent=!0}}]);