"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={},o="Struct Serial",l={unversionedId:"flow/flow-nft/MetdataViews/MetadataViews_Serial",id:"flow/flow-nft/MetdataViews/MetadataViews_Serial",title:"Struct Serial",description:"View representing a project-defined serial number for a specific NFT",source:"@site/docs/flow/flow-nft/MetdataViews/MetadataViews_Serial.md",sourceDirName:"flow/flow-nft/MetdataViews",slug:"/flow/flow-nft/MetdataViews/MetadataViews_Serial",permalink:"/flow/flow-nft/MetdataViews/MetadataViews_Serial",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct Royalty",permalink:"/flow/flow-nft/MetdataViews/MetadataViews_Royalty"},next:{title:"Struct Trait",permalink:"/flow/flow-nft/MetdataViews/MetadataViews_Trait"}},c={},s=[{value:"Initializer",id:"initializer",level:3}],u={toc:s},f="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"struct-serial"},"Struct ",(0,a.kt)("inlineCode",{parentName:"h1"},"Serial")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Serial {\n\n    pub let number: UInt64\n}\n")),(0,a.kt)("p",null,"View representing a project-defined serial number for a specific NFT\nProjects have different definitions for what a serial number should be\nSome may use the NFTs regular ID and some may use a different\nclassification system. The serial number is expected to be unique among\nother NFTs within that project"),(0,a.kt)("h3",{id:"initializer"},"Initializer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"init(_: UInt64)\n")))}p.isMDXComponent=!0}}]);