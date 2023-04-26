"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,w=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(w,o(o({ref:t},u),{},{components:n})):a.createElement(w,o({ref:t},u))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Struct FTDisplay",l={unversionedId:"flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTDisplay",id:"flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTDisplay",title:"Struct FTDisplay",description:"View to expose the information needed to showcase this FT.",source:"@site/docs/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTDisplay.md",sourceDirName:"flow/flow-ft/FungibleTokenMetadataViews",slug:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTDisplay",permalink:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTDisplay",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract FungibleTokenMetadataViews",permalink:"/flow/flow-ft/FungibleTokenMetadataViews/"},next:{title:"Struct FTVaultData",permalink:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTVaultData"}},s={},c=[{value:"Initializer",id:"initializer",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"struct-ftdisplay"},"Struct ",(0,r.kt)("inlineCode",{parentName:"h1"},"FTDisplay")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"struct FTDisplay {\n\n    name:  String\n\n    symbol:  String\n\n    description:  String\n\n    externalURL:  MetadataViews.ExternalURL\n\n    logos:  MetadataViews.Medias\n\n    socials:  {String: MetadataViews.ExternalURL}\n}\n")),(0,r.kt)("p",null,"View to expose the information needed to showcase this FT.\nThis can be used by applications to give an overview and\ngraphics of the FT."),(0,r.kt)("h3",{id:"initializer"},"Initializer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func init(name String, symbol String, description String, externalURL MetadataViews.ExternalURL, logos MetadataViews.Medias, socials {String: MetadataViews.ExternalURL})\n")))}d.isMDXComponent=!0}}]);