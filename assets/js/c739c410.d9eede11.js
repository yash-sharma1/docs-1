"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1123],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},27530:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={title:"Governance"},i=void 0,l={unversionedId:"1.Learn/Concepts/governance",id:"1.Learn/Concepts/governance",title:"Governance",description:"Participation",source:"@site/docs/1.Learn/Concepts/governance.mdx",sourceDirName:"1.Learn/Concepts",slug:"/1.Learn/Concepts/governance",permalink:"/1.Learn/Concepts/governance",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682618386,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"Governance"},sidebar:"tutorialSidebar",previous:{title:"Fees",permalink:"/1.Learn/Concepts/fees"},next:{title:"Flow networks",permalink:"/1.Learn/Concepts/networks"}},s={},c=[{value:"Participation",id:"participation",level:2},{value:"Token Holder Rights",id:"token-holder-rights",level:2},{value:"Process",id:"process",level:2},{value:"Timing",id:"timing",level:3},{value:"Protocol Set Parameters",id:"protocol-set-parameters",level:2},{value:"Early Governance of the Protocol",id:"early-governance-of-the-protocol",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"participation"},"Participation"),(0,r.kt)("p",null,"Participating in the governance process can take three forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Being elected as a council member on the governing committee"),(0,r.kt)("li",{parentName:"ul"},"Putting forth a proposal for the community to vote on"),(0,r.kt)("li",{parentName:"ul"},"Staking to receive voting rights")),(0,r.kt)("p",null,"Votes will be weighted based on locked tokens. All tokens staked by node operators will be eligible for voting, but other users can lock up their tokens to be given voting power. Anyone will be able to stake a Flow token to vote on issues (even if they aren\u2019t participating as a staked node)."),(0,r.kt)("h2",{id:"token-holder-rights"},"Token Holder Rights"),(0,r.kt)("p",null,"Tokens may be staked for operation or governance rights which gives holders the right to participate in running a node and/or to participate in public votes."),(0,r.kt)("h2",{id:"process"},"Process"),(0,r.kt)("p",null,"Proposals can be brought forward on a public forum where they will be evaluated by the governing committee. All decisions are made publicly and any stakeholder has the opportunity to organize grassroots action to veto specific decisions or to vote in or remove council members."),(0,r.kt)("p",null,'To ensure the progress of the network, the elected council first assesses the proposal and selects an answer they agree to be the "default choice". Voters can freely vote how they choose, but having a well-considered default allows forward progress without being blocked by passive participants. All decisions are voted on by all participants and decisions made by the council must be ratified by a public vote on the network.'),(0,r.kt)("h3",{id:"timing"},"Timing"),(0,r.kt)("p",null,"Vote outcomes and upcoming votes will be published every Friday by 7am PT. All upcoming votes are available for review and voting for at least two weeks following their publication."),(0,r.kt)("h2",{id:"protocol-set-parameters"},"Protocol Set Parameters"),(0,r.kt)("p",null,"The following parameters will be set on the network on day 1 and will not be candidates for a public vote when the network first launches."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The staking ratio preserved between each node type"),(0,r.kt)("li",{parentName:"ul"},"The maximum inflation rate"),(0,r.kt)("li",{parentName:"ul"},"The role of FLOW as the main reserve asset for collateralized secondary tokens (e.g. stablecoins)"),(0,r.kt)("li",{parentName:"ul"},"The mechanism through which transaction inclusion, computation, and storage fees are determined and paid for")),(0,r.kt)("h2",{id:"early-governance-of-the-protocol"},"Early Governance of the Protocol"),(0,r.kt)("p",null,"Once governance is enabled, the community can participate in the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Protocol upgrades, including things like: - the consensus algorithm - the low-level network communication structure - the execution environment - the number of seats available for each node type"),(0,r.kt)("li",{parentName:"ul"},"Management of Ecosystem Development Fund, including: - issuance of grants - bug & feature bounties"),(0,r.kt)("li",{parentName:"ul"},"Selecting council members"),(0,r.kt)("li",{parentName:"ul"},"Committee budgets for each of the operational arms of the Foundation, including the executive, technical, operational, legal, pricing, financial, and marketing branches."),(0,r.kt)("li",{parentName:"ul"},"Management of legal affairs, including: - enforcing license and patent infringements - issuing takedown notices and copyright infringement - freezing accounts if illegal activity occurs - updating the community, security, contribution policies")),(0,r.kt)("p",null,"During the Bootstrapping Phase, anyone may apply online to be set as a Validator by the Company. Approved Validators must then Stake a fixed minimum of FLOWs based on Validator type. Other FLOW holders may become \u201cDelegators\u201d when they dedicate or \u201cDelegate\u201d their FLOWs to approved Node Operators as a signal that they believe that Validator to be an effective and honest participant of the network. Staking and Delegation features are already enabled as of the Effective Date."),(0,r.kt)("p",null,"Each Validator makes an individual decision of which Protocol Version they choose to use. Since the value of blockchain networks is primarily due to the collectively verified execution state, there is a strong incentive for Validators to choose a Protocol Version that is compatible with the Protocol Version selected by the majority of other Validators. As a practical matter, the Protocol Version chosen by the overwhelming majority of Validators is likely to be the most recent Protocol Version produced and recommended by the Core Team, provided the proposed changes are not contentious. However, if a significant fraction of the community disagrees with any aspect of the most recent Protocol Version, they can band together to use a previous Protocol Version, or some other Protocol Version defined independently from the Core Team. This process of a \u201ccontentious forking\u201d is rare, but does have several precedents in other networks (REF: Ethereum Classic, Bitcoin Cash)."),(0,r.kt)("p",null,"The process by which the Core Team chooses the updates for each new Protocol Version follows the open process described above, using GitHub as an open discussion platform to gauge the priorities and needs of the entire Flow ecosystem. The proposed changes by the Core Team will be announced and discussed well before they are implemented, and any community member can propose their own changes or contribute code updates to implement any proposed changes. The details of a new Protocol Version are publicly available no less than 14 days before that version is formally recommended for use by Validators (a \u201cRelease\u201d), with the complete implementation source code visible for no less than 7 days before a Release."))}d.isMDXComponent=!0}}]);