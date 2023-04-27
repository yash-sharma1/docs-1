"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5282],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=c(n),g=i,k=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return n?o.createElement(k,r(r({ref:e},d),{},{components:n})):o.createElement(k,r({ref:e},d))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69694:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={title:"Options for Building Staking Integrations",sidebar_title:"Technical Staking Options"},r=void 0,s={unversionedId:"nodes/staking/staking-options",id:"nodes/staking/staking-options",title:"Options for Building Staking Integrations",description:"This document describes the three different methods for staking at a high level.",source:"@site/docs/nodes/staking/staking-options.mdx",sourceDirName:"nodes/staking",slug:"/nodes/staking/staking-options",permalink:"/nodes/staking/staking-options",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682618386,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"Options for Building Staking Integrations",sidebar_title:"Technical Staking Options"},sidebar:"tutorialSidebar",previous:{title:"Manage a Staking Collection",permalink:"/nodes/staking/staking-collection"},next:{title:"Staking and Delegation rewards",permalink:"/nodes/staking/staking-rewards"}},l={},c=[],d=(u="Callout",function(t){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)});var u;const p={toc:c},g="wrapper";function k(t){let{components:e,...n}=t;return(0,i.kt)(g,(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes the three different methods for staking at a high level."),(0,i.kt)(d,{type:"warning",mdxType:"Callout"},(0,i.kt)("p",null,"We highly recommended you use the Staking Collection paradigm,\nas this will be the most supported method for staking with any set up,\nincluding locked FLOW.")),(0,i.kt)("h1",{id:"staking-collection"},"Staking Collection"),(0,i.kt)("p",null,"A Staking Collection is a resource that allows its owner to manage multiple staking\nobjects in a single account via a single storage path, and perform staking actions\nusing both locked and unlocked Flow. It also supports machine accounts,\na necessary feature for Flow epoch node operation."),(0,i.kt)("p",null,"The staking collection paradigm is the most flexible of the three choices\nand will receive the most support in the future.\nIt is the set-up that Flow Port and many other staking providers use."),(0,i.kt)("p",null,"The staking collection setup and guide is detailed in the ",(0,i.kt)("a",{parentName:"p",href:"/staking/staking-collection"},"staking collection guide.")),(0,i.kt)("h1",{id:"basic-staking"},"Basic Staking"),(0,i.kt)("p",null,"The basic method to stake is to stake directly with the ",(0,i.kt)("inlineCode",{parentName:"p"},"FlowIDTableStaking")," smart contract.\nThis would involve calling the node or delegator registration functions directly in the staking\ncontract and storing the staking objects directly in account storage."),(0,i.kt)("p",null,"This is probably the simplest way to do it, but it is not very flexible\nand not recommended."),(0,i.kt)("p",null,"The basic staking guide is detailed ",(0,i.kt)("a",{parentName:"p",href:"/staking/unlocked-staking-guide/"},"here")),(0,i.kt)("h1",{id:"locked-tokens-staking"},"Locked Tokens Staking"),(0,i.kt)("p",null,"This method is what almost all of the participants in the Flow Community sale originally used for staking.\nIt involves creating a secondary account that holds the user's locked tokens from the sale.\nA capability is created for the secondary account that allows the user's main account to\nregister to stake and perform staking actions with the locked tokens\nwithout allowing them to actually withdraw any of the locked tokens to their primary account."),(0,i.kt)("p",null,"The locked account setup is detailed in the ",(0,i.kt)("a",{parentName:"p",href:"/flow-token/locked-account-setup/"},"locked account setup page"),"\nand the ",(0,i.kt)("a",{parentName:"p",href:"/staking/locked-staking-guide/"},"locked account staking guide.")),(0,i.kt)("p",null,"This version is only recommended if you are dealing with locked tokens,\nbut even if you are using locked tokens, it is recommended that you follow the locked account setup,\nthen use the staking collection for managing staking objects."))}k.isMDXComponent=!0}}]);