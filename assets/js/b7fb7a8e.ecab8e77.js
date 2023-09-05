"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[87870],{47604:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>d});o(67294);var l=o(85893),a=o(11151);const s={title:"Data Collection",description:"Data collected from Flow CLI usage",sidebar_position:14},c=void 0,n={unversionedId:"tools/toolchains/flow-cli/data-collection",id:"tools/toolchains/flow-cli/data-collection",title:"Data Collection",description:"Data collected from Flow CLI usage",source:"@site/docs/tools/toolchains/flow-cli/data-collection.md",sourceDirName:"tools/toolchains/flow-cli",slug:"/tools/toolchains/flow-cli/data-collection",permalink:"/docs/next/tools/toolchains/flow-cli/data-collection",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tools/toolchains/flow-cli/data-collection.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1693945937,formattedLastUpdatedAt:"Sep 5, 2023",sidebarPosition:14,frontMatter:{title:"Data Collection",description:"Data collected from Flow CLI usage",sidebar_position:14},sidebar:"tools",previous:{title:"Execute Flow Interaction Templates (FLIX) with the Flow CLI",permalink:"/docs/next/tools/toolchains/flow-cli/flix"},next:{title:"Flow Javascript Testing",permalink:"/docs/next/tools/toolchains/flow-js-testing/"}},i={},d=[{value:"Why do we collect data about flow cli usage?",id:"why-do-we-collect-data-about-flow-cli-usage",level:2},{value:"What data do we collect?",id:"what-data-do-we-collect",level:2}];function r(e){const t=Object.assign({p:"p",code:"code",h2:"h2",a:"a"},(0,a.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Flow CLI tracks flow command usage count using Mixpanel."}),"\n",(0,l.jsxs)(t.p,{children:["Data collection is enabled by default. Users can opt out of our data collection through running ",(0,l.jsx)(t.code,{children:"flow settings metrics disable"}),".\nTo opt back in, users can run ",(0,l.jsx)(t.code,{children:"flow settings metrics enable"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"why-do-we-collect-data-about-flow-cli-usage",children:"Why do we collect data about flow cli usage?"}),"\n",(0,l.jsx)(t.p,{children:"Collecting aggregate command count allow us to prioritise features and fixes based on how users use flow cli."}),"\n",(0,l.jsx)(t.h2,{id:"what-data-do-we-collect",children:"What data do we collect?"}),"\n",(0,l.jsx)(t.p,{children:"We only collect the number of times a command is executed."}),"\n",(0,l.jsx)(t.p,{children:"We don't keep track of the values of arguments, flags used\nand the values of the flags used. We also don't associate any commands to any particular user."}),"\n",(0,l.jsx)(t.p,{children:"The only property that we collect from our users are their preferences for opting in / out of data collection.\nThe analytics user ID is specific to Mixpanel and does not permit Flow CLI maintainers to e.g. track you across websites you visit."}),"\n",(0,l.jsxs)(t.p,{children:["Further details regarding the data collected can be found under Mixpanel's data collection page in ",(0,l.jsx)(t.code,{children:"Ingestion API"}),"\nsection of ",(0,l.jsx)(t.a,{href:"https://help.mixpanel.com/hc/en-us/articles/115004613766-Default-Properties-Collected-by-Mixpanel",children:"https://help.mixpanel.com/hc/en-us/articles/115004613766-Default-Properties-Collected-by-Mixpanel"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"Please note that although Mixpanel's page above mentions that geolocation properties are recorded by default,\nwe have turned off geolocation data reporting to Mixpanel."})]})}const u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(r,e)})):r(e)}}}]);