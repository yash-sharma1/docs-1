"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[10736],{47088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});n(67294);var o=n(85893),s=n(11151);const i={title:"Epoch Preparation Protocol",sidebar_label:"Epoch Preparation Protocol",description:"Technical Overview of the Flow Epoch Protocol"},c=void 0,r={unversionedId:"building-on-flow/run-and-secure/staking/epoch-preparation",id:"version-stable/building-on-flow/run-and-secure/staking/epoch-preparation",title:"Epoch Preparation Protocol",description:"Technical Overview of the Flow Epoch Protocol",source:"@site/versioned_docs/version-stable/building-on-flow/run-and-secure/staking/04-epoch-preparation.mdx",sourceDirName:"building-on-flow/run-and-secure/staking",slug:"/building-on-flow/run-and-secure/staking/epoch-preparation",permalink:"/docs/building-on-flow/run-and-secure/staking/epoch-preparation",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/run-and-secure/staking/04-epoch-preparation.mdx",tags:[],version:"stable",lastUpdatedBy:"Alex",lastUpdatedAt:1694808350,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:4,frontMatter:{title:"Epoch Preparation Protocol",sidebar_label:"Epoch Preparation Protocol",description:"Technical Overview of the Flow Epoch Protocol"},sidebar:"buildingOnFlow",previous:{title:"Epoch and Reward Schedule",permalink:"/docs/building-on-flow/run-and-secure/staking/schedule"},next:{title:"Stake Slashing",permalink:"/docs/building-on-flow/run-and-secure/staking/stake-slashing"}},h={},a=[{value:"Epochs Overview",id:"epochs-overview",level:2},{value:"Epoch Length",id:"epoch-length",level:2},{value:"Phase Transitions",id:"phase-transitions",level:2},{value:"Phase 0: Staking Auction",id:"phase-0-staking-auction",level:2},{value:"<strong>Protocol Directives:</strong>",id:"protocol-directives",level:3},{value:"Phase 1: Epoch Setup",id:"phase-1-epoch-setup",level:2},{value:"<strong>Protocol Directives:</strong>",id:"protocol-directives-1",level:3},{value:"Phase 2: Epoch Committed",id:"phase-2-epoch-committed",level:2},{value:"<strong>Protocol Directives:</strong>",id:"protocol-directives-2",level:3}];function l(e){const t=Object.assign({p:"p",h1:"h1",ul:"ul",li:"li",a:"a",code:"code",h2:"h2",strong:"strong",img:"img",em:"em",h3:"h3"},(0,s.ah)(),e.components),{Callout:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"If you haven't read the staking introduction, please read that\nfirst. That document provides a non-technical overview of staking on Flow for\nall users and is a necessary prerequisite to this document."})}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"This document assumes you have some technical knowledge about the Flow\nblockchain and programming environment."})}),"\n",(0,o.jsx)(t.h1,{id:"epochs",children:"Epochs"}),"\n",(0,o.jsx)(t.p,{children:"The epoch preparation protocol defines how information about the next epoch\nis determined and propagated to the protocol state."}),"\n",(0,o.jsx)(t.p,{children:"There are two primary actors in this protocol, the Epoch Smart Contracts, and the Consensus Committee:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/epochs",children:(0,o.jsx)(t.code,{children:"Epoch Smart Contracts"})})," - the smart contracts that manage epochs:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"FlowClusterQC"})," : Manages the quorum certificate generation for bootstrapping\nthe hotstuff consensus algorithm for each collector cluster."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"FlowDKG"})," : Manages the Distributed Key Generation that consensus nodes participate\nin to initialize the random beacon for each epoch."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"FlowIDTableStaking"})," : Manages the source of truth for the identity table,\nand enforces rules related to staking FLOW, delegating, paying rewards, and allocating token movements between epochs."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"FlowEpoch"})," : Ties all of the previously mentioned contracts together to manage\nthe high level epoch lifecycle. ",(0,o.jsx)(t.code,{children:"FlowEpoch"})," acts as a state machine that transitions\nbetween different epoch phases when specific conditions from the other contracts are met and triggers important operations in the other smart contracts when phase changes happen."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Consensus Committee"})," - the committee of consensus nodes for the current epoch"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"This document describes the communication protocol between these two actors and the impact on the protocol state."}),"\n",(0,o.jsx)(t.p,{children:"It gives an overview of the process of epochs, the staking auction, and the epoch setup and commit phases.\nIt is an important prerequisite to understand before proceeding with any other technical integration or interaction with the Flow Protocol,\nbut does not provide step-by-step instructions for how to perform specific actions."}),"\n",(0,o.jsxs)(t.p,{children:["The transactions described in this document are contained in the ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/tree/master/transactions/epoch",children:(0,o.jsx)(t.code,{children:"flow-core-contracts/transactions/epoch/"})}),"\ndirectory. You can see the text of all the transactions used to interact with the smart contracts there."]}),"\n",(0,o.jsx)(t.h2,{id:"epochs-overview",children:"Epochs Overview"}),"\n",(0,o.jsxs)(t.p,{children:["Only a pre-determined set of nodes is authorized to participate in the protocol at any given time.\nThe set of authorized nodes is a-priori known to all network participants.\nThis set is referred to as the ",(0,o.jsx)(t.strong,{children:"Identity Table"}),". An ",(0,o.jsx)(t.strong,{children:"Epoch"})," is defined as a period of time\nwhere the set of authorized nodes is constant (or can only shrink due to ejection of malicious nodes)."]}),"\n",(0,o.jsx)(t.p,{children:"At an Epoch switchover, which is the time when the network transitions from one epoch to the next,\nthe set of authorized nodes can change. For each of Flow's node roles, the Flow protocol admits a protocol-determined number of nodes."}),"\n",(0,o.jsxs)(t.p,{children:["For each Epoch, there is a ",(0,o.jsx)(t.a,{href:"/docs/building-on-flow/run-and-secure/staking/technical-overview",children:"Staking Auction"})," in which new potential node operators may submit Staking Commitments.\nAll this is completely smart-contract based and handled through conventional transactions."]}),"\n",(0,o.jsx)(t.p,{children:"After the Staking Auction is over, the protocol determines which commitments to accept and which to reject.\nThe node operators whose staking commitments were accepted are added to the Identity Table for the next epoch,\nand become authorized participants at the next epoch switchover.\nStaked Nodes also can submit other operations to modify their existing stake, which are all carried out at the end of the current epoch."}),"\n",(0,o.jsxs)(t.p,{children:["The smart contract that determines the nodes for the next Epoch has special privileges.\nSpecifically, it is allowed to emit ",(0,o.jsx)(t.a,{href:"/docs/building-on-flow/run-and-secure/staking/epoch-scripts-events#monitor-epoch-service-events",children:"Service Events"}),",\nwhich are how the execution state updates the consensus node-based protocol state."]}),"\n",(0,o.jsx)(t.p,{children:"At the end of the staking auction, the epoch smart contracts conclude that they have now determined\nthe set of nodes which will be running the network for the next Epoch, and the amount of FLOW that all the nodes have staked.\nThe smart contract then emits a service event with this information."}),"\n",(0,o.jsx)(t.p,{children:"When processing the block with seat assignment, all network nodes (including future ones which are supposed to monitor the chain in anticipation)\nare thereby informed about the upcoming change."}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"Note: At this point in the epoch (end of the staking auction),\nthere is no change in participating nodes.\nThe change in participating nodes happens at the end of the epoch."})}),"\n",(0,o.jsx)(t.p,{children:"After the staking auction, there is an interim period of time until the new Epoch starts for the following tasks to be completed:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The epoch smart contract runs the cluster assignment algorithm for all the collector nodes\nand each collector node will vote for the root block of their respective clusters"}),"\n",(0,o.jsx)(t.li,{children:"The Random Beacon Committee for the next Epoch (currently all consensus nodes)\nwill run the Distributed Key Generation (DKG),"}),"\n",(0,o.jsx)(t.li,{children:"When completing the QC generation and DKG, the smart contracts will emit a service event.\nAfter consensus nodes have collected all relevant information (public keys for the random beacon and cluster quorum certificates),\nthey can update the identity table to include the information for the next Epoch."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"If preparation for the next Epoch is not completed before the current Epoch ends,\na spork is required to transition to the next Epoch."}),"\n",(0,o.jsx)(t.h2,{id:"epoch-length",children:"Epoch Length"}),"\n",(0,o.jsxs)(t.p,{children:["The length of an Epoch is measured in terms of consensus views.\nThe number of views in an epoch and in the various epoch phases are determined before\nthe Epoch begins and stored as a field in the main epoch smart contract (",(0,o.jsx)(t.code,{children:"FlowEpoch"}),")."]}),"\n",(0,o.jsx)(t.p,{children:"Generally, there is not a block for every view, so the view number will not change at the same rate as the block height."}),"\n",(0,o.jsx)(t.p,{children:"Because the length of a consensus view can vary depending on many different factors,\nthe wall-clock time of an epoch is expected to vary from week to week.\nUnder typical network conditions we expect the variance in epoch length to be less than 2 hours for a 1-week epoch (~1%).\nUnder adverse network conditions the variance in epoch length will increase (typically this will result in longer epochs)."}),"\n",(0,o.jsx)(t.p,{children:"As the average view rate changes over time, the Service Account can change the epoch length to\ntarget a 1 week wall-clock epoch length."}),"\n",(0,o.jsx)(t.h1,{id:"phases",children:"Phases"}),"\n",(0,o.jsx)(t.p,{children:"The preparation for the next epoch is separated into distinct phases.\nEach phase occurs completely within the current epoch."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://storage.googleapis.com/flow-resources/documentation-assets/epoch-phase-diagram.png",alt:"Flow Epoch Schedule"})}),"\n",(0,o.jsxs)(t.p,{children:["The Epoch Smart Contract acts as a state machine. The smart contract keeps a record of the current phase,\nthe number of views in the current phase, and the conditions that need to be met in order to advance to the next phase, or next epoch.\nA special ",(0,o.jsx)(t.code,{children:"Heartbeat"})," resource is used to call the ",(0,o.jsx)(t.code,{children:"advanceBlock()"})," method during every single new block in Flow.\nDuring these regular method calls, if all of the conditions are met to advance to the next phase,\nthe smart contract performs any relevant retreival and storage of information, emits a Service Event,\nand transitions to the next phase, which often involves setting certain metadata\nor enabling one of the connected smart contracts to begin its work."]}),"\n",(0,o.jsx)(t.p,{children:"From the perspective of the consensus committe, the phase transitions within epochs\noccur as a result of including a service event in a block,\nthus the phase transition only applies to the fork containing the block with the service event."}),"\n",(0,o.jsxs)(t.p,{children:["At the end of Phase 0 and beginning of Phase 1, the ",(0,o.jsx)(t.code,{children:"EpochSetup"})," service event is emitted\nthat contains the identity table and other initial metadata for the upcoming epoch."]}),"\n",(0,o.jsxs)(t.p,{children:["At the end of Phase 1 and beginning of Phase 2, the ",(0,o.jsx)(t.code,{children:"EpochCommit"})," service event\nis emitted that contains the results of the Epoch Setup phase."]}),"\n",(0,o.jsx)(t.p,{children:"The start of a new epoch is the first block with its view > the last view of the previous epoch,\nand its parent view \u2264 the last view of the last epoch."}),"\n",(0,o.jsx)(t.h2,{id:"phase-transitions",children:"Phase Transitions"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Consensus Committee"})," triggers the ",(0,o.jsx)(t.strong,{children:"phase transition coinciding with the Epoch switchover"}),"\nby publishing the block of the next Epoch.\nThis block's execution state will also detect the the end view of an epoch has arrived\nand trigger the start of the new epoch.\nThe state of the smart contracts reflect the latest epoch's new identity table and metadata."]}),"\n",(0,o.jsxs)(t.p,{children:["For the ",(0,o.jsxs)(t.strong,{children:["Epoch-",(0,o.jsx)(t.em,{children:"internal"})," Phase transitions"]}),", meaning the phase transitions within an epoch,\nthe ",(0,o.jsx)(t.strong,{children:"Epoch Smart Contract"})," provides the trigger by emitting a respective service event:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"EpochSetup"})," service event triggers the phase transition\n",(0,o.jsx)(t.code,{children:"Staking Auction Phase"})," \u2192 ",(0,o.jsx)(t.code,{children:"Epoch Setup Phase"})]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"EpochCommit"})," service event triggers the phase transition\n",(0,o.jsx)(t.code,{children:"Epoch Setup Phase"})," \u2192 ",(0,o.jsx)(t.code,{children:"Epoch Committed Phase"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Only one of each service event may be emitted each epoch, for a given fork.\n",(0,o.jsx)(t.code,{children:"EpochCommit"})," may only be emitted after ",(0,o.jsx)(t.code,{children:"EpochSetup"})," has been generated in the respective given fork."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"FlowEpoch"})," contract manages all of these phases, the ",(0,o.jsx)(t.code,{children:"FlowIDTableStaking"})," contract\nmanages the identity table and staking auction, the ",(0,o.jsx)(t.code,{children:"FlowClusterQC"})," contract manages\nthe Quorum Certificate generation for collector clusters, and the ",(0,o.jsx)(t.code,{children:"FlowDKG"})," contract manages\nthe Distributed Key Generation protocol for the consensus nodes."]}),"\n",(0,o.jsx)(t.p,{children:"Initially, control of these phases and contracts will be managed manually by the Flow Token Admin,\nbut control will eventually be completely decentralized and managed by the node software, smart contracts,\nand democratically by all the stakers in the network."}),"\n",(0,o.jsx)(t.h2,{id:"phase-0-staking-auction",children:"Phase 0: Staking Auction"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Purpose:"})," During the staking auction phase, operators can put up stake\nin exchange for being a part of the upcoming epoch.\nAll voluntary commitments to register a new node, increase, or decrease stake for the next epoch\nmust occur before the end of this phase."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Duration:"})," The staking auction phase begins with the first block of the current Epoch\nIts last block is the block in which the ",(0,o.jsx)(t.code,{children:"EpochSetup"})," service event is emitted."]}),"\n",(0,o.jsx)(t.h3,{id:"protocol-directives",children:(0,o.jsx)(t.strong,{children:"Protocol Directives:"})}),"\n",(0,o.jsx)(t.p,{children:"Epoch Smart Contract"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"FlowEpoch"})," Smart Contract is responsible for ensuring that staking, un-staking,\nand stake-modification transactions for the next epoch are\nare only executed during the staking auction and fail otherwise.\nThe contract enforces this by setting a ",(0,o.jsx)(t.code,{children:"stakingEnabled"})," field in the staking contract.\nEvery staking method checks to see if this is set before executing."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"FlowEpoch"})," Smart Contract must ensure that the subsequent phases\nare sufficiently long to perform all required tasks before the epoch ends."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["As part of the execution result for the last block of the staking auction,\nthe ",(0,o.jsx)(t.code,{children:"Epoch Smart Contract"})," computes the seat assignment information for the next epoch,\nand emits a specialized service event, the ",(0,o.jsx)(t.code,{children:"EpochSetup"})," event,\nwith the timing and identity table information about the next epoch.\nSee the ",(0,o.jsx)(t.a,{href:"/docs/building-on-flow/run-and-secure/staking/epoch-scripts-events#epochsetup",children:"Epoch Setup Event Documentation"}),"\nfor a detailed breakdown of the epoch setup event."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"phase-1-epoch-setup",children:"Phase 1: Epoch Setup"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Purpose:"})," During the epoch setup phase, all nodes participating in the upcoming epoch\nmust perform setup tasks in preparation for the upcoming epoch."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Duration:"})," The epoch setup phase begins right after the ",(0,o.jsx)(t.code,{children:"EpochSetup"})," service event is emitted.\nIt ends with the block where ",(0,o.jsx)(t.code,{children:"EpochCommit"})," service emitted."]}),"\n",(0,o.jsx)(t.h3,{id:"protocol-directives-1",children:(0,o.jsx)(t.strong,{children:"Protocol Directives:"})}),"\n",(0,o.jsx)(t.p,{children:"Consensus:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["When a primary constructs a block that seals the ",(0,o.jsx)(t.code,{children:"EpochSetup"})," service event,\nthe primary includes an update to the protocol state in the block.\nSpecifically, it adds the nodes for the ",(0,o.jsx)(t.code,{children:"PendingEpoch"})," to the list of authorized nodes.\nWhen this block is propagated, all staked nodes will know about the participants\nin the next epoch and can communicate with them."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Based on the ",(0,o.jsx)(t.code,{children:"RandSeed"})," field in the ",(0,o.jsx)(t.code,{children:"EpochSetup"})," event, all nodes compute:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The seed to initialize the consensus node's primary selection algorithm for the next epoch"}),"\n",(0,o.jsx)(t.li,{children:"The seeds to initialize the collector clusters' primary selection algorithm for the next epoch"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The collector nodes generate the root block for their respective clusters\nin the next Epoch and submit a vote for the root block to a specialized smart contract, ",(0,o.jsx)(t.code,{children:"FlowClusterQC"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The Random Beacon Committee for the next Epoch (currently all consensus nodes)\nwill run the DKG through a specialized smart contract, ",(0,o.jsx)(t.code,{children:"FlowDKG"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Epoch Smart Contract:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"FlowEpoch"})," Smart Contract is responsible for ensuring that Epoch Setup transactions\nare only executed during the Epoch Setup phase and fail otherwise.\nThe contract enforces this by setting an ",(0,o.jsx)(t.code,{children:"enabled"})," field in the ",(0,o.jsx)(t.code,{children:"FlowClusterQC"})," and ",(0,o.jsx)(t.code,{children:"FlowDKG"})," contracts.\nEvery state-changing method from these contracts checks to see if this is set before executing."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The Epoch ",(0,o.jsx)(t.code,{children:"Epoch Smart Contract"})," must ensure that the subsequent phase\nis sufficiently long to perform all required tasks before the epoch ends."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["As part of the execution of the last block of the Epoch Setup phase,\nthe ",(0,o.jsx)(t.code,{children:"Epoch Smart Contract"})," computes the public key shares generated by the DKG\nand the ",(0,o.jsx)(t.code,{children:"QC"}),"s for the collector clusters and publishes these as ",(0,o.jsx)(t.code,{children:"EpochCommit"})," service event.\nThe ",(0,o.jsx)(t.code,{children:"FlowEpoch"})," Smart Contract should emit this event as soon as the artifacts are determined."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["See the ",(0,o.jsx)(t.a,{href:"/docs/building-on-flow/run-and-secure/staking/epoch-scripts-events#epochcommit",children:"Epoch Commit Event Documentation"}),"\nfor a detailed breakdown of the epoch commit event."]}),"\n",(0,o.jsx)(t.h2,{id:"phase-2-epoch-committed",children:"Phase 2: Epoch Committed"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Purpose:"})," When the epoch committed phase starts, the precise role of each node is fully specified.\nFrom a protocol-perspective, all information is available for each node\nto start its operation for the next Epoch.\nThis phase provides some time for nodes to establish the communication channels\nand synchronize with the network to seamlessly switch over to the next epoch."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Duration:"})," The epoch committed phase begins right ",(0,o.jsx)(t.em,{children:"after"})," the ",(0,o.jsx)(t.code,{children:"EpochCommit"})," service event\nhas been emitted. It ends when the epoch ends."]}),"\n",(0,o.jsx)(t.h3,{id:"protocol-directives-2",children:(0,o.jsx)(t.strong,{children:"Protocol Directives:"})}),"\n",(0,o.jsx)(t.p,{children:"Consensus"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["When a primary constructs a block that seals the ",(0,o.jsx)(t.code,{children:"EpochCommit"})," service event,\nthe primary includes an update to the protocol state in the block. Specifically, it:"]}),"\n",(0,o.jsx)(t.li,{children:"adds the information generated in the setup phase to the Protocol State and"}),"\n",(0,o.jsxs)(t.li,{children:["marks the updated Protocol State as ",(0,o.jsx)(t.code,{children:"committed"})," in this respective fork."]}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"query-information-from-the-epoch-contract",children:"Query Information from the Epoch Contract"}),"\n",(0,o.jsxs)(t.p,{children:["See the ",(0,o.jsx)(t.a,{href:"/docs/building-on-flow/run-and-secure/staking/epoch-scripts-events#introduction",children:"epoch scripts and events document"})," for detailed documentation about\nyou can use scripts events to learn information about the state of the epoch contracts."]})]})}const d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);