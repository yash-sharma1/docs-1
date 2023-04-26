"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=l,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),l=(n(67294),n(3905));const a={},r=void 0,i={unversionedId:"tools/fcl-dev-wallet/overview",id:"tools/fcl-dev-wallet/overview",title:"overview",description:"Introduction",source:"@site/docs/tools/fcl-dev-wallet/overview.md",sourceDirName:"tools/fcl-dev-wallet",slug:"/tools/fcl-dev-wallet/overview",permalink:"/tools/fcl-dev-wallet/overview",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flow Emulator",permalink:"/tools/emulator/"},next:{title:"index",permalink:"/tools/fcl-js/"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Install the <code>flow-cli</code>",id:"install-the-flow-cli",level:3},{value:"Create a <code>flow.json</code> file",id:"create-a-flowjson-file",level:3},{value:"Start the emulator",id:"start-the-emulator",level:3},{value:"Configuring your JavaScript application",id:"configuring-your-javascript-application",level:2},{value:"Test harness",id:"test-harness",level:3},{value:"Contributing",id:"contributing",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"The FCL dev wallet is a mock Flow wallet that simulates the protocols used by ",(0,l.kt)("a",{parentName:"p",href:"https://docs.onflow.org/fcl/"},"FCL")," to interact with the Flow blockchain on behalf of simulated user accounts."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IMPORTANT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"This project implements an FCL compatible\ninterface, but should **not** be used as a reference for\nbuilding a production grade wallet.\n\nThis project should only be used in aid of local\ndevelopment against a locally run instance of the Flow\nblockchain like the Flow emulator, and should never be used in\nconjunction with Flow Mainnet, Testnet, Canarynet or any\nother instances of Flow.\n")),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("p",null,"Before using the dev wallet, you'll need to start the Flow emulator."),(0,l.kt)("h3",{id:"install-the-flow-cli"},"Install the ",(0,l.kt)("inlineCode",{parentName:"h3"},"flow-cli")),(0,l.kt)("p",null,"The Flow emulator is bundles with the Flow CLI. Instructions for installing the CLI can be found here: ",(0,l.kt)("a",{parentName:"p",href:"https://docs.onflow.org/flow-cli/install/"},"https://docs.onflow.org/flow-cli/install/")),(0,l.kt)("h3",{id:"create-a-flowjson-file"},"Create a ",(0,l.kt)("inlineCode",{parentName:"h3"},"flow.json")," file"),(0,l.kt)("p",null,"Run this command to create ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.json")," file (typically in your project's root directory):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"flow init\n")),(0,l.kt)("h3",{id:"start-the-emulator"},"Start the emulator"),(0,l.kt)("p",null,"Start the emulator and deploy the contracts by running the following command from the directory containing ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.json")," in your project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"flow emulator start\nflow project deploy --network emulator\n")),(0,l.kt)("h2",{id:"configuring-your-javascript-application"},"Configuring your JavaScript application"),(0,l.kt)("p",null,"The FCL dev wallet is designed to be used with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-js-sdk"},(0,l.kt)("inlineCode",{parentName:"a"},"@onflow/fcl"))," version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0")," or higher. The FCL package can be installed with: ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install @onflow/fcl")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn add @onflow/fcl"),"."),(0,l.kt)("p",null,"To use the dev wallet, configure FCL to point to the address of a locally running ",(0,l.kt)("a",{parentName:"p",href:"#start-the-emulator"},"Flow emulator")," and the dev wallet endpoint."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as fcl from "@onflow/fcl"\n\nfcl\n  .config()\n  // Point App at Emulator REST API\n  .put("accessNode.api", "http://localhost:8888")\n  // Point FCL at dev-wallet (default port)\n  .put("discovery.wallet", "http://localhost:8701/fcl/authn")\n')),(0,l.kt)("h3",{id:"test-harness"},"Test harness"),(0,l.kt)("p",null,"It's easy to use this FCL harness app as a barebones\napp to interact with the dev-wallet during development:"),(0,l.kt)("p",null,"Navigate to http://localhost:8701/harness"),(0,l.kt)("h2",{id:"contributing"},"Contributing"),(0,l.kt)("p",null,"Releasing a new version of Dev Wallet is as simple as tagging and creating a release, a Github Action will then build a bundle of the Dev Wallet that can be used in other tools (such as CLI). If the update of the Dev Wallet is required in the CLI, a seperate update PR on the CLI should be created."))}d.isMDXComponent=!0}}]);