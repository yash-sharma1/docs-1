"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73716],{46525:(e,t,o)=>{o.d(t,{Z:()=>g});var n=o(67294),s=o(86010),r=o(52802),i=o(39960),c=o(13919),a=o(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",preWrap:"preWrap_myZA"};function m(e){let{href:t,children:o}=e;return n.createElement(i.Z,{href:t,className:(0,s.Z)("card padding--lg",l.cardContainer)},o)}function d(e){let{href:t,icon:o,title:r,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",l.cardTitle),title:r},o," ",r),i&&n.createElement("p",{className:(0,s.Z)(l.preWrap,l.cardDescription),title:i},i))}function u(e){let{item:t}=e;const o=(0,r.Wl)(t);return o?n.createElement(d,{href:o,icon:t.customProps?.icon||"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??t.customProps?.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const o=Boolean(t?.customProps?.icon)&&t?.customProps?.icon||((0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17"),s=(0,r.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:o,title:t.label,description:t.description??s?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const o=(0,r.jA)();return n.createElement(g,{items:o.items,className:t})}function g(e){const{items:t,className:o}=e;if(!t)return n.createElement(f,e);const i=(0,r.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",o)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},16689:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});o(67294);var n=o(85893),s=o(11151),r=o(46525),i=o(1116),c=o(48596),a=o(16550);const l={sidebar_position:1,title:"Community Resources",description:"Access essential tools, knowledge, and community connections for the Flow Blockchain ecosystem."},m=void 0,d={unversionedId:"community-resources/index",id:"community-resources/index",title:"Community Resources",description:"Access essential tools, knowledge, and community connections for the Flow Blockchain ecosystem.",source:"@site/docs/community-resources/index.mdx",sourceDirName:"community-resources",slug:"/community-resources/",permalink:"/docs/next/community-resources/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/community-resources/index.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1693945937,formattedLastUpdatedAt:"Sep 5, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Community Resources",description:"Access essential tools, knowledge, and community connections for the Flow Blockchain ecosystem."},sidebar:"communityResources",next:{title:"Contributing to Flow Docs",permalink:"/docs/next/community-resources/developer-portal/"}},u={},p=[];function h(e){return(0,n.jsx)(r.Z,{items:[...(0,i.V)().items.filter((e=>!(0,c.Mg)(e.href,(0,a.TH)().pathname))),{type:"link",label:"Flow Forum",href:"https://forum.onflow.org/",description:"Engage with the Flow community, discuss ideas, and seek support on the Flow Blockchain Forum.",customProps:{icon:"\ud83c\udfdb\ufe0f"}},{type:"link",label:"FLIPs",href:"https://forum.onflow.org/",description:"Flow Improvement Proposals (FLIPs) serve as a platform for engaging the Flow community in development, harnessing the collective ideas, insights, and expertise of contributors and experts while ensuring widespread communication of design changes.",customProps:{icon:"\ud83d\udcdc"}}]})}const f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h()}}}]);