"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[34226],{43310:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});o(67294);var t=o(85893),a=o(11151);const s={title:"Operator FAQ"},r="Operator FAQ",d={unversionedId:"concepts/nodes/node-operation/FAQ",id:"concepts/nodes/node-operation/FAQ",title:"Operator FAQ",description:"Can anybody run a node? What is the approval process?",source:"@site/docs/concepts/nodes/node-operation/FAQ.md",sourceDirName:"concepts/nodes/node-operation",slug:"/concepts/nodes/node-operation/FAQ",permalink:"/docs/next/concepts/nodes/node-operation/FAQ",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/node-operation/FAQ.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1685397510,formattedLastUpdatedAt:"May 29, 2023",frontMatter:{title:"Operator FAQ"},sidebar:"tutorialSidebar",previous:{title:"Node Operations",permalink:"/docs/next/concepts/nodes/node-operation/"},next:{title:"Setting Up a Flow Access Node",permalink:"/docs/next/concepts/nodes/node-operation/access-node-setup"}},i={},c=[{value:"Can anybody run a node? What is the approval process?",id:"can-anybody-run-a-node-what-is-the-approval-process",level:3},{value:"How do I generate keys?",id:"how-do-i-generate-keys",level:3},{value:"How do I check on the status of my node?",id:"how-do-i-check-on-the-status-of-my-node",level:3},{value:"Can I bootstrap and run a node at any time?",id:"can-i-bootstrap-and-run-a-node-at-any-time",level:3},{value:"Would it hurt the network to have a node that constantly spins up and down?",id:"would-it-hurt-the-network-to-have-a-node-that-constantly-spins-up-and-down",level:3},{value:"Does Flow has a regular schedule for Sporks?",id:"does-flow-has-a-regular-schedule-for-sporks",level:3},{value:"How do I update the Node Software?",id:"how-do-i-update-the-node-software",level:3},{value:"Is there any way to know if a node is currently online?",id:"is-there-any-way-to-know-if-a-node-is-currently-online",level:3},{value:"Can I migrate a node to a new machine?",id:"can-i-migrate-a-node-to-a-new-machine",level:3},{value:"Where can I find how many nodes are currently running Flow?",id:"where-can-i-find-how-many-nodes-are-currently-running-flow",level:3},{value:"Why do I need to update my node&#39;s ulimit?",id:"why-do-i-need-to-update-my-nodes-ulimit",level:3}];function h(e){const n=Object.assign({h1:"h1",h3:"h3",p:"p",a:"a",code:"code"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"operator-faq",children:"Operator FAQ"}),"\n",(0,t.jsx)(n.h3,{id:"can-anybody-run-a-node-what-is-the-approval-process",children:"Can anybody run a node? What is the approval process?"}),"\n",(0,t.jsxs)(n.p,{children:["Anyone can run an ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/observer-node",children:"observer node"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Very soon, Access nodes too will be permissionless and anyone will be able to run one."}),"\n",(0,t.jsxs)(n.p,{children:["For the other node types, individuals can go through an application process that involves asking about their background and experience contributing to decentralized projects. To pursue an application, please visit ",(0,t.jsx)(n.a,{href:"https://www.onflow.org/node-validators",children:"the Flow website here to apply"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Pending approval, new node operators will be onboarded and invited to join a webinar to meet the team and share more about how they\u2019ll grow the community. Node Operators are invited to join and participate in Flow's Node Validator Discord channel for setup questions and network announcements."}),"\n",(0,t.jsx)(n.p,{children:"In the long-term, anyone can run a node validator on Flow."}),"\n",(0,t.jsx)(n.h3,{id:"how-do-i-generate-keys",children:"How do I generate keys?"}),"\n",(0,t.jsxs)(n.p,{children:["Please follow the instructions provided here: ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/node-bootstrap#generating-your-node-id",children:"Generate Your Node Keys"})]}),"\n",(0,t.jsx)(n.h3,{id:"how-do-i-check-on-the-status-of-my-node",children:"How do I check on the status of my node?"}),"\n",(0,t.jsxs)(n.p,{children:["Please follow the instructions provided here: ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/monitoring-nodes",children:"Monitoring nodes"})]}),"\n",(0,t.jsx)(n.h3,{id:"can-i-bootstrap-and-run-a-node-at-any-time",children:"Can I bootstrap and run a node at any time?"}),"\n",(0,t.jsxs)(n.p,{children:["Flow allows nodes to join/leave the network each time a new epoch begins (roughly once per week).\nSee ",(0,t.jsx)(n.a,{href:"../staking#epochs",children:"Staking & Epochs"})," for general information and ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/node-bootstrap#timing",children:"Node Setup"})," for a guide to running a new node."]}),"\n",(0,t.jsx)(n.h3,{id:"would-it-hurt-the-network-to-have-a-node-that-constantly-spins-up-and-down",children:"Would it hurt the network to have a node that constantly spins up and down?"}),"\n",(0,t.jsxs)(n.p,{children:["All staked nodes except access nodes, have to be online at all time. A staked node, other than an access node, which is not online can cause severe degradation of network performance and will be subjected to slashing of rewards.\nA way to prevent this is to check your equipment meets Flow's ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/node-setup#hardware-requirements",children:"recommended requirements"}),", periodically checking for updates and announcements in Discord but also using a node monitoring system for when your node does go offline."]}),"\n",(0,t.jsx)(n.h3,{id:"does-flow-has-a-regular-schedule-for-sporks",children:"Does Flow has a regular schedule for Sporks?"}),"\n",(0,t.jsxs)(n.p,{children:["Yes, see ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/upcoming-sporks",children:"Upcoming Sporks"})," for the latest schedule. Currently, Flow has a Mainnet Spork and a Testnet Spork roughly every two months."]}),"\n",(0,t.jsx)(n.h3,{id:"how-do-i-update-the-node-software",children:"How do I update the Node Software?"}),"\n",(0,t.jsxs)(n.p,{children:["One of the reasons for a ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/spork",children:"spork"})," is to make sure all nodes update to the latest software version. Hence, you should have the latest software update as long as you are participating in each spork.\nHowever, if we do release any software update in between a Spork (e.g. an emergency patch) we will announce it on Discord."]}),"\n",(0,t.jsx)(n.h3,{id:"is-there-any-way-to-know-if-a-node-is-currently-online",children:"Is there any way to know if a node is currently online?"}),"\n",(0,t.jsxs)(n.p,{children:["To verify if a node is online, please ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/FAQ#how-do-i-check-on-the-status-of-my-node",children:"setup metrics"})," for the node."]}),"\n",(0,t.jsx)(n.h3,{id:"can-i-migrate-a-node-to-a-new-machine",children:"Can I migrate a node to a new machine?"}),"\n",(0,t.jsxs)(n.p,{children:["Yes, as long as you retain the ",(0,t.jsx)(n.code,{children:"boostrap"})," information which includes the node staking key, networking key, IP address and port from the old node to the new.\nMore on this ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/node-migration",children:"here"})]}),"\n",(0,t.jsx)(n.h3,{id:"where-can-i-find-how-many-nodes-are-currently-running-flow",children:"Where can I find how many nodes are currently running Flow?"}),"\n",(0,t.jsxs)(n.p,{children:["If you are running a node, then you most definitely have this information on your node in the file ",(0,t.jsx)(n.code,{children:"<your bootstrap dir>/public-root-information/node-infos.pub.json"}),". If you are not running a node, you can find this information by using a Cadence script to query the ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference",children:"Staking Smart Contract"})," (or check ",(0,t.jsx)(n.a,{href:"https://flowscan.org/staking/overview",children:"Flowscan"}),")"]}),"\n",(0,t.jsx)(n.h3,{id:"why-do-i-need-to-update-my-nodes-ulimit",children:"Why do I need to update my node's ulimit?"}),"\n",(0,t.jsx)(n.p,{children:"Flow nodes create network connections to other nodes on the network to participate in the protocol. The node's operating system represents\nthese connections as file descriptors, and uses soft and hard limits to control the number of open files. The node software uses these limits\nto manage how many connections it will open and accept from other nodes. If the limit is too low, the node will not be able to communicate\nwith its peers, preventing it from functioning properly."})]})}const l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}}}]);