"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||l;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const l={},a="Resource Interface ExampleNFTCollectionPublic",c={unversionedId:"flow/flow-nft/ExampleNFT/ExampleNFT_ExampleNFTCollectionPublic",id:"flow/flow-nft/ExampleNFT/ExampleNFT_ExampleNFTCollectionPublic",title:"Resource Interface ExampleNFTCollectionPublic",description:"Defines the methods that are particular to this NFT contract collection",source:"@site/docs/flow/flow-nft/ExampleNFT/ExampleNFT_ExampleNFTCollectionPublic.md",sourceDirName:"flow/flow-nft/ExampleNFT",slug:"/flow/flow-nft/ExampleNFT/ExampleNFT_ExampleNFTCollectionPublic",permalink:"/flow/flow-nft/ExampleNFT/ExampleNFT_ExampleNFTCollectionPublic",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource Collection",permalink:"/flow/flow-nft/ExampleNFT/ExampleNFT_Collection"},next:{title:"Resource NFT",permalink:"/flow/flow-nft/ExampleNFT/ExampleNFT_NFT"}},i={},u=[{value:"Functions",id:"functions",level:2},{value:"fun <code>deposit()</code>",id:"fun-deposit",level:3},{value:"fun <code>getIDs()</code>",id:"fun-getids",level:3},{value:"fun <code>borrowNFT()</code>",id:"fun-borrownft",level:3},{value:"fun <code>borrowExampleNFT()</code>",id:"fun-borrowexamplenft",level:3}],p={toc:u},f="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource-interface-examplenftcollectionpublic"},"Resource Interface ",(0,o.kt)("inlineCode",{parentName:"h1"},"ExampleNFTCollectionPublic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"resource interface ExampleNFTCollectionPublic {\n}\n")),(0,o.kt)("p",null,"Defines the methods that are particular to this NFT contract collection"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"fun-deposit"},"fun ",(0,o.kt)("inlineCode",{parentName:"h3"},"deposit()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"func deposit(token NonFungibleToken.NFT)\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fun-getids"},"fun ",(0,o.kt)("inlineCode",{parentName:"h3"},"getIDs()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"func getIDs(): [UInt64]\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fun-borrownft"},"fun ",(0,o.kt)("inlineCode",{parentName:"h3"},"borrowNFT()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"func borrowNFT(id UInt64): &NonFungibleToken.NFT\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fun-borrowexamplenft"},"fun ",(0,o.kt)("inlineCode",{parentName:"h3"},"borrowExampleNFT()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"func borrowExampleNFT(id UInt64): &ExampleNFT.NFT?\n")),(0,o.kt)("hr",null))}s.isMDXComponent=!0}}]);