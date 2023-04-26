"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>w});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,w=p["".concat(u,".").concat(d)]||p[d]||f[d]||i;return n?a.createElement(w,o(o({ref:t},s),{},{components:n})):a.createElement(w,o({ref:t},s))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Struct FTView",l={unversionedId:"flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTView",id:"flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTView",title:"Struct FTView",description:"FTView wraps FTDisplay and FTVaultData, and is used to give a complete",source:"@site/docs/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTView.md",sourceDirName:"flow/flow-ft/FungibleTokenMetadataViews",slug:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTView",permalink:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTView",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct FTVaultData",permalink:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTVaultData"},next:{title:"Contract FungibleTokenSwitchboard",permalink:"/flow/flow-ft/FungibleTokenSwitchboard/"}},u={},c=[{value:"Initializer",id:"initializer",level:3}],s={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"struct-ftview"},"Struct ",(0,r.kt)("inlineCode",{parentName:"h1"},"FTView")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"struct FTView {\n\n    ftDisplay:  FTDisplay?\n\n    ftVaultData:  FTVaultData?\n}\n")),(0,r.kt)("p",null,"FTView wraps FTDisplay and FTVaultData, and is used to give a complete\npicture of a Fungible Token. Most Fungible Token contracts should\nimplement this view."),(0,r.kt)("h3",{id:"initializer"},"Initializer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func init(ftDisplay FTDisplay?, ftVaultData FTVaultData?)\n")))}f.isMDXComponent=!0}}]);