"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"Add FCL Support for WalletConnect 2.0"},i="Add FCL Support for WalletConnect 2.0",o={unversionedId:"tools/fcl-js/reference/wallet-connect",id:"tools/fcl-js/reference/wallet-connect",title:"Add FCL Support for WalletConnect 2.0",description:"To improve developer experience and streamline Flow dApp integration with WalletConnect 2.0 wallets, FCL ^1.3.0 introduces support for discovery-service plugins. These ServicePlugins allow for injection of client configured services, service methods, and the execution strategies required to interact with them.",source:"@site/docs/tools/fcl-js/reference/wallet-connect.mdx",sourceDirName:"tools/fcl-js/reference",slug:"/tools/fcl-js/reference/wallet-connect",permalink:"/tools/fcl-js/reference/wallet-connect",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Add FCL Support for WalletConnect 2.0"},sidebar:"tutorialSidebar",previous:{title:"Signing and Verifying Arbitrary Data",permalink:"/tools/fcl-js/reference/user-signatures"},next:{title:"Flow App Quickstart",permalink:"/tools/fcl-js/tutorials/flow-app-quickstart"}},p={},c=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Implementation path",id:"implementation-path",level:3},{value:"1. Add required packages",id:"1-add-required-packages",level:3},{value:"2. Obtain a WalletConnect projectID",id:"2-obtain-a-walletconnect-projectid",level:3},{value:"3. Initialize WalletConnect <code>SignClient</code> and <code>FclWcServicePlugin</code>",id:"3-initialize-walletconnect-signclient-and-fclwcserviceplugin",level:3},{value:"Configuration options",id:"configuration-options",level:4},{value:"Returns",id:"returns",level:4},{value:"4. Add FclWcServicePlugin to FCL Plugin Registry",id:"4-add-fclwcserviceplugin-to-fcl-plugin-registry",level:3},{value:"Usage",id:"usage",level:4},{value:"ServicePlugin Spec",id:"serviceplugin-spec",level:3},{value:"Integrating With Wallet Discovery",id:"integrating-with-wallet-discovery",level:2},{value:"<code>discovery-service</code> ServicePlugin",id:"discovery-service-serviceplugin",level:4},{value:"How to add your FCL compatible WalletConnect wallet to Discovery (UI/API)",id:"how-to-add-your-fcl-compatible-walletconnect-wallet-to-discovery-uiapi",level:3},{value:"Wallet Provider Spec",id:"wallet-provider-spec",level:2},{value:"Implementation path",id:"implementation-path-1",level:3},{value:"Metadata requirements",id:"metadata-requirements",level:4},{value:"Next steps",id:"next-steps",level:2}],d={toc:c},s="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-fcl-support-for-walletconnect-20"},"Add FCL Support for WalletConnect 2.0"),(0,r.kt)("p",null,"To improve developer experience and streamline ",(0,r.kt)("strong",{parentName:"p"},"Flow")," dApp integration with ",(0,r.kt)("strong",{parentName:"p"},"WalletConnect 2.0")," wallets, ",(0,r.kt)("strong",{parentName:"p"},"FCL ",(0,r.kt)("inlineCode",{parentName:"strong"},"^1.3.0"))," introduces support for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"discovery-service"))," plugins. These ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ServicePlugins"))," allow for injection of client configured ",(0,r.kt)("strong",{parentName:"p"},"services"),", service ",(0,r.kt)("strong",{parentName:"p"},"methods"),", and the execution ",(0,r.kt)("strong",{parentName:"p"},"strategies")," required to interact with them.\nFCL dApps can opt-in through use of the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@onflow/fcl-wc"},(0,r.kt)("strong",{parentName:"a"},"fcl-wc"))," package and ",(0,r.kt)("strong",{parentName:"p"},"FCL Plugin Registry"),"."),(0,r.kt)("p",null,"When using FCL Discovery for authentication, dApps are able to support most FCL-compatible wallets and their users on Flow without any custom integrations or changes needed to the dApp code. "),(0,r.kt)("p",null,"These instructions explain how dApps can also add support for FCL compatible wallets that use the WalletConnect 2.0 protocol."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"fc-wc"))," package is used to initialize a ",(0,r.kt)("strong",{parentName:"li"},"WalletConnect 2.0")," ",(0,r.kt)("a",{parentName:"li",href:"https://docs.walletconnect.com/2.0/introduction/sign"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"SignClient")))," instance, and build a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"discovery-service"))," ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ServicePlugin"))," based on dApp specified options."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"discovery-service"))," plugins are used to add opt-in wallets and other services to ",(0,r.kt)("strong",{parentName:"li"},"FCL Wallet Discovery")," (UI/API)."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"FCL Plugin Registry")," offers dApps the ability to add new services, methods, and the execution strategies needed to interact with them.")),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fcl")," version >= ",(0,r.kt)("inlineCode",{parentName:"li"},"1.3.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fcl-wc")," version >= ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0.0"))),(0,r.kt)("h3",{id:"implementation-path"},"Implementation path"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"#1-add-required-packages"},(0,r.kt)("strong",{parentName:"a"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add required packages"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Install and import minimum ",(0,r.kt)("inlineCode",{parentName:"td"},"fcl")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"fcl-wc")," ",(0,r.kt)("a",{parentName:"td",href:"#requirements"},"versions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"#2-obtain-a-walletconnect-projectid"},(0,r.kt)("strong",{parentName:"a"},"2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Obtain a WalletConnect ",(0,r.kt)("inlineCode",{parentName:"td"},"projectID")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Visit ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.walletconnect.com/"},"WalletConnect Cloud Registry")," and register for public relay server access and an application ",(0,r.kt)("inlineCode",{parentName:"td"},"projectId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"#3-initialize-walletconnect-signclient-and-fclwcserviceplugin"},(0,r.kt)("strong",{parentName:"a"},"3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initialize WalletConnect ",(0,r.kt)("inlineCode",{parentName:"td"},"SignClient")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"FclWcServicePlugin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initialize WalletConnect ",(0,r.kt)("inlineCode",{parentName:"td"},"SignClient")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"FclWcServicePlugin")," with ",(0,r.kt)("a",{parentName:"td",href:"#configuration-options"},"configuration options"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"#4-add-fclwcserviceplugin-to-fcl-plugin-registry"},(0,r.kt)("strong",{parentName:"a"},"4"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,r.kt)("inlineCode",{parentName:"td"},"FclWcServicePlugin")," to FCL Plugin Registry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Inject ",(0,r.kt)("inlineCode",{parentName:"td"},"FclWcServicePlugin")," via ",(0,r.kt)("inlineCode",{parentName:"td"},"fcl.pluginRegistry.add(FclWcServicePlugin)"))))),(0,r.kt)("h3",{id:"1-add-required-packages"},"1. Add required packages"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"fcl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fcl-wc")," packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @onflow/fcl@ @onflow/fcl-wc\n")),(0,r.kt)("h3",{id:"2-obtain-a-walletconnect-projectid"},"2. Obtain a WalletConnect projectID"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.walletconnect.com/"},"WalletConnect Cloud Registry")," and register for public relay server access and an application ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"projectId")),"."),(0,r.kt)("h3",{id:"3-initialize-walletconnect-signclient-and-fclwcserviceplugin"},"3. Initialize WalletConnect ",(0,r.kt)("inlineCode",{parentName:"h3"},"SignClient")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"FclWcServicePlugin")),(0,r.kt)("p",null,"In addition to the WalletConnect ",(0,r.kt)("inlineCode",{parentName:"p"},"SignClient"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"fcl-wc")," returns a ",(0,r.kt)("a",{parentName:"p",href:"#serviceplugin-spec"},(0,r.kt)("inlineCode",{parentName:"a"},"ServicePlugin"))," object. This object can be injected using the ",(0,r.kt)("a",{parentName:"p",href:"#pluginregistry"},"FCL Plugin Registry")," to add support for new service methods and their corresponding execution strategies (like ",(0,r.kt)("inlineCode",{parentName:"p"},"WC/RPC")," for WalletConnect ).\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"discovery-service")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ServicePlugin")," may also include additional opt-in wallets to offer your users through FCL Wallet Discovery."),(0,r.kt)("h4",{id:"configuration-options"},"Configuration options"),(0,r.kt)("p",null,"Initialize WalletConnect ",(0,r.kt)("inlineCode",{parentName:"p"},"SignClient")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FclWcServicePlugin")," with the following configuration options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"projectId")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ",(0,r.kt)("strong",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"A WalletConnect projectId for public relay server access. Your Project ID can be obtained from ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.walletconnect.com/app"},"WalletConnect Cloud Dashboard"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ }")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional dApp metadata to describe your application and define its appearance in a web browser. More details can be found ",(0,r.kt)("a",{parentName:"td",href:"https://docs.walletconnect.com/2.0/swift/sign/dapp-usage"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"includeBaseWC")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional configuration to include a generic WalletConnect service in FCL Discovery (UI/API). ",(0,r.kt)("br",null)," \u2757 BaseWC Service offers no deeplink support for mobile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wcRequestHook")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional function is called on all desktop WalletConnect client session proposals and signing requests. Use this to handle alerting user to check wallet for approval.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pairingModalOverride")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional function called to allow override of included QRCodeModal. Function receives two arguments: ",(0,r.kt)("br",null)," 1. Connection ",(0,r.kt)("inlineCode",{parentName:"td"},"uri")," to display QR code or send to wallet to create pairing. ",(0,r.kt)("br",null)," 2. Callback function to manually cancel the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wallets")),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[ ]")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional list of WalletConnect ",(0,r.kt)("inlineCode",{parentName:"td"},"authn")," services to include in FCL Wallet Discovery (UI/API). ",(0,r.kt)("br",null)," \u2757 Only available for use on ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"testnet")),". These services will be combined with wallets returned from ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.walletconnect.com/"},"WalletConnect cloud registry API")," and sent to Discovery for display in UI and inclusion in API response.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#fclwcserviceplugin"},"FclWcServicePlugin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ServicePlugin")),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("inlineCode",{parentName:"td"},"ServicePlugin")," of type ",(0,r.kt)("inlineCode",{parentName:"td"},"discovery-service"),".  May also include optional ",(0,r.kt)("inlineCode",{parentName:"td"},"authn")," services to offer through FCL Wallet Discovery (UI/API).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#"},"client")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SignClient")),(0,r.kt)("td",{parentName:"tr",align:null},"An initialized WalletConnect ",(0,r.kt)("a",{parentName:"td",href:"https://docs.walletconnect.com/2.0/introduction/sign"},(0,r.kt)("inlineCode",{parentName:"a"},"SignClient")),".")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const FclWcServicePlugin = {\n  name: "fcl-plugin-service-walletconnect",\n  f_type: "ServicePlugin",   // the type of FCL plugin\n  type: "discovery-service", // the is a service sent to Discovery\n  services: [Service],       // (optional) Generic, Cloud Registry and client injected WalletConnect services\n  serviceStrategy: {method: "WC/RPC", exec: execStrategy, // the method name and execution strategy for WalletConnect services\n}\n')),(0,r.kt)("p",null,"\u2757 Setting FCL config ",(0,r.kt)("inlineCode",{parentName:"p"},"flow.network")," to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"testnet"))," or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"mainnet"))," is required to use ",(0,r.kt)("inlineCode",{parentName:"p"},"fcl-wc")," as it enables ",(0,r.kt)("inlineCode",{parentName:"p"},'"WC/RPC"')," service strategy to request correct chain permissions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import {config} from \'@onflow/config\'\n\nconfig({\n    "flow.network": "mainnet"\n})\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/fcl-js/reference/configure-fcl"},"FCL Configuration")," for more information."),(0,r.kt)("h3",{id:"4-add-fclwcserviceplugin-to-fcl-plugin-registry"},"4. Add FclWcServicePlugin to FCL Plugin Registry"),(0,r.kt)("p",null,"In addition to the WalletConnect ",(0,r.kt)("inlineCode",{parentName:"p"},"SignClient"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"fcl-wc")," returns a ",(0,r.kt)("a",{parentName:"p",href:"#serviceplugin-spec"},(0,r.kt)("inlineCode",{parentName:"a"},"ServicePlugin"))," object. This object can be injected into the FCL Plugin Registry to add FCL support for new service methods, (like WC/RPC for WalletConnect) and their corresponding execution strategies."),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as fcl from "@onflow/fcl"\nimport { init } from "fcl-wc"\n\nconst { FclWcServicePlugin, client } = await init({\n  projectId: WC_PROJECT_ID, // required\n  metadata: WC_APP_METADATA, // optional\n  includeBaseWC: false, // optional, default: false\n  wallets: [], // optional, default: []\n  wcRequestHook: (wcRequestData) => { // optional,default: null\n    handlePendingRequest(data)\n  },\n  pairingModalOverride: (uri, rejectPairingRequest) => { // optional,default: null\n    handlePendingPairingRequest(data)\n  }\n})\n\nfcl.pluginRegistry.add(FclWcServicePlugin)\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serviceplugin-spec"},"ServicePlugin Spec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"f_type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of plugin (currently only supports ",(0,r.kt)("inlineCode",{parentName:"td"},"ServicePlugin")," type).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The plugin subtype (currently only supports ",(0,r.kt)("inlineCode",{parentName:"td"},"discovery-service")," type).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"services")),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of services to add to FCL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serviceStrategy")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ method: string, exec: function }")),(0,r.kt)("td",{parentName:"tr",align:null},"The method and corresponding strategy FCL uses to interact with the service. A service with the ",(0,r.kt)("inlineCode",{parentName:"td"},"service.method")," property set to ",(0,r.kt)("inlineCode",{parentName:"td"},'"WC/RPC"')," tells FCL to use the corresponding service strategy if it is supported by the dApp.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"integrating-with-wallet-discovery"},"Integrating With Wallet Discovery"),(0,r.kt)("p",null,"Knowing all the wallets available to users on a blockchain can be challenging. FCL's Discovery mechanism relieves much of the burden of integrating with Flow compatible wallets and let's developers focus on building their dApp and providing as many options as possible to their users."),(0,r.kt)("p",null,"There are two ways an app can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/fcl-js/blob/master/docs/reference/discovery.mdx"},"Wallet Discovery"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The UI version which can be configured for display via iFrame, Popup, or Tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The API version which allows you to access authentication services directly in your code via ",(0,r.kt)("inlineCode",{parentName:"p"},"fcl.discovery.authn")," method which we'll describe below."))),(0,r.kt)("p",null,"When using FCL Wallet Discovery for authentication, dApps are able to support FCL-compatible wallets on Flow without any custom integrations or changes needed to the dApp code."),(0,r.kt)("h4",{id:"discovery-service-serviceplugin"},(0,r.kt)("inlineCode",{parentName:"h4"},"discovery-service")," ServicePlugin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FclWcServicePlugin")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServicePlugin")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"discovery-service"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"discovery-service")," plugins may include additional authentication services to offer through FCL Wallet Discovery."),(0,r.kt)("p",null,"Once a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"discovery-service")," plugin is registered, FCL shares client supported services with Discovery to add registered and injected wallets to the UI and API. "),(0,r.kt)("p",null,"To connect a Flow supported wallet using WalletConnect 2.0, users of your dApp will go through the authentication process and have the option to select their preferred wallet."),(0,r.kt)("p",null,"\u2757 Once a WalletConnect session is established and a ",(0,r.kt)("inlineCode",{parentName:"p"},"currentUser")," is authenticated, FCL will handle client pairings and sessions during FCL ",(0,r.kt)("inlineCode",{parentName:"p"},"authn"),", and initiate signing requests as part of ",(0,r.kt)("inlineCode",{parentName:"p"},"authz")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"fcl.mutate")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/fcl-js/blob/master/docs/reference/user-signatures.mdx"},(0,r.kt)("inlineCode",{parentName:"a"},"user-sign"))," using ",(0,r.kt)("inlineCode",{parentName:"p"},"fcl.signUserMessage"),"."),(0,r.kt)("h3",{id:"how-to-add-your-fcl-compatible-walletconnect-wallet-to-discovery-uiapi"},"How to add your FCL compatible WalletConnect wallet to Discovery (UI/API)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/onflow/fcl-discovery/blob/master/data/services.json"},"Submit a PR")," to add your wallet to FCL Wallet Discovery ",(0,r.kt)("inlineCode",{parentName:"li"},"services.json")),(0,r.kt)("li",{parentName:"ol"},"Submit your FCL compatible wallet to ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.walletconnect.com/"},"WalletConnect Cloud Registry")),(0,r.kt)("li",{parentName:"ol"},"Add Wallet Service to ",(0,r.kt)("inlineCode",{parentName:"li"},"fcl-wc")," init options. \u2757 testnet only.")),(0,r.kt)("p",null,"FCL tells Wallet Discovery which services are supported by the client (installed extensions and ",(0,r.kt)("inlineCode",{parentName:"p"},"discovery-service")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ServicePlugins"),") so only those supported will be shown in Discovery UI or returned via Discovery API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wallet Discovery UI",src:n(4253).Z,width:"496",height:"542"})),(0,r.kt)("h2",{id:"wallet-provider-spec"},"Wallet Provider Spec"),(0,r.kt)("h3",{id:"implementation-path-1"},"Implementation path"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Obtain a WalletConnect ",(0,r.kt)("inlineCode",{parentName:"td"},"projectId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Register to receive a ",(0,r.kt)("inlineCode",{parentName:"td"},"projectId")," from the ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.walletconnect.com/"},"WalletConnect Cloud Registry"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Conform to ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/draft-v4.md"},"FCL Wallet Provider Spec")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Compatible wallets must support ",(0,r.kt)("inlineCode",{parentName:"td"},"flow_authn"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"flow_authz"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"flow_user_sign")," methods and wrap data in the appropriate FCL Response type. Services returned with the ",(0,r.kt)("inlineCode",{parentName:"td"},"AuthnResponse")," of ",(0,r.kt)("inlineCode",{parentName:"td"},"flow_authn")," should set ",(0,r.kt)("inlineCode",{parentName:"td"},"service.endpoint")," to corresponding methods.",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"ServiceType")," ",(0,r.kt)("inlineCode",{parentName:"td"},"authz")," : ",(0,r.kt)("inlineCode",{parentName:"td"},"flow_authz")," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"ServiceType")," ",(0,r.kt)("inlineCode",{parentName:"td"},"user-signature")," : ",(0,r.kt)("inlineCode",{parentName:"td"},"flow_user_sign"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add wallet to WalletConnect Cloud Registry API ",(0,r.kt)("strong",{parentName:"td"},"(optional)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Submit your wallet to be included in the ",(0,r.kt)("a",{parentName:"td",href:"https://explorer.walletconnect.com/"},"WalletConnect Cloud Registry API and Explorer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"4")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Responses"),(0,r.kt)("td",{parentName:"tr",align:"left"},"All responses need to be wrapped in a ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/draft-v4.md#pollingresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"PollingResponse")))))),(0,r.kt)("h4",{id:"metadata-requirements"},"Metadata requirements"),(0,r.kt)("p",null,"\u2757 In order to correctly identify, improve pairing, and include deep link support for mobile, services using the ",(0,r.kt)("inlineCode",{parentName:"p"},"WC/RPC")," method need to use the same universal link as their ",(0,r.kt)("inlineCode",{parentName:"p"},"uid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," in Wallet metadata.\nWallets sourced from WalletConnect Cloud Registry automatically build the service from data and will set the ",(0,r.kt)("inlineCode",{parentName:"p"},"service.uid")," to the universal link."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nimport SignClient from '@walletconnect/sign-client'\n\nexport let signClient: SignClient\n\nexport async function createSignClient() {\n  signClient = await SignClient.init({\n    projectId: PROJECT_ID,\n    relayUrl: 'wss://relay.walletconnect.com',\n    metadata: {\n      name: 'Awesome Wallet',\n      description: 'Awesome Wallet with FCL Support for WalletConnect',\n      url: 'https://deeplink.awesome-wallet.com/',\n      icons: ['https://avatars.githubusercontent.com/u/37784886']\n    }\n  })\n}\n\n")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/draft-v4.md"},"FCL Wallet Provider Spec"),"."),(0,r.kt)("li",{parentName:"ol"},"Check out the a WalletConnect 2.0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gregsantos/flow-walletconnect-v2-react-wallet"},"React POC Wallet")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gregsantos/flow-walletconnect-v2-react-dapp"},"FCL Flow dApp")," with support for WalletConnect v2.0."),(0,r.kt)("li",{parentName:"ol"},"Read and review the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.walletconnect.com/2.0/"},"WalletConnect 2.0 Docs"),", ",(0,r.kt)("a",{parentName:"li",href:"https://docs.walletconnect.com/2.0/introduction/examples-and-resources"},"examples and resources"),".")))}m.isMDXComponent=!0},4253:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wc-discovery-1a85f6af14c5c6768a2105a4328d13ab.png"}}]);