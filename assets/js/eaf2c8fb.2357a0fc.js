"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11661],{21590:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>n,metadata:()=>o,toc:()=>h});c(67294);var s=c(85893),r=c(11151);const n={title:"Flow Epoch Contracts Reference",sidebar_title:"Epoch Contracts"},d="Contract",o={unversionedId:"concepts/core-contracts/epoch-contract-reference",id:"concepts/core-contracts/epoch-contract-reference",title:"Flow Epoch Contracts Reference",description:"The FlowEpoch contract is the state machine that manages Epoch phases and emits service events.",source:"@site/docs/concepts/core-contracts/07-epoch-contract-reference.md",sourceDirName:"concepts/core-contracts",slug:"/concepts/core-contracts/epoch-contract-reference",permalink:"/docs/next/concepts/core-contracts/epoch-contract-reference",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/core-contracts/07-epoch-contract-reference.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1685397510,formattedLastUpdatedAt:"May 29, 2023",sidebarPosition:7,frontMatter:{title:"Flow Epoch Contracts Reference",sidebar_title:"Epoch Contracts"},sidebar:"tutorialSidebar",previous:{title:"Flow Staking Contract Reference",permalink:"/docs/next/concepts/core-contracts/staking-contract-reference"},next:{title:"Non-Fungible Token Contract",permalink:"/docs/next/concepts/core-contracts/non-fungible-token"}},i={},h=[{value:"Getting Epoch Info",id:"getting-epoch-info",level:2},{value:"Quorum Certificate Transactions and Scripts",id:"quorum-certificate-transactions-and-scripts",level:2},{value:"DKG Transactions and Scripts",id:"dkg-transactions-and-scripts",level:2}];function a(e){const t=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"contract",children:"Contract"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"FlowEpoch"})," contract is the state machine that manages Epoch phases and emits service events.\nThe ",(0,s.jsx)(t.code,{children:"FlowClusterQC"})," and ",(0,s.jsx)(t.code,{children:"FlowDKG"})," contracts manage the processes that happen during the Epoch Setup phase."]}),"\n",(0,s.jsxs)(t.p,{children:["These contracts are all deployed to the same account as the ",(0,s.jsx)(t.code,{children:"FlowIDTableStaking"})," contract."]}),"\n",(0,s.jsx)(t.p,{children:"Sources:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/epochs/FlowEpoch.cdc",children:"FlowEpoch.cdc"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/epochs/FlowClusterQC.cdc",children:"FlowClusterQC.cdc"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/epochs/FlowDKG.cdc",children:"FlowDKG.cdc"})}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Network"}),(0,s.jsx)(t.th,{children:"Contract Address"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Emulator/Canary"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0xf8d6e0586b0a20c7"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Testnet"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0x9eca2b38b18b5dfe"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Sandboxnet"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0xf4527793ee68aede"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mainnet"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0x8624b52f9ddcd04a"})})]})]})]}),"\n",(0,s.jsx)(t.h1,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsx)(t.h2,{id:"getting-epoch-info",children:"Getting Epoch Info"}),"\n",(0,s.jsx)(t.p,{children:"These scripts are read-only and get info about the current state of the epoch contract."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"ID"}),(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Source"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"EP.01"})})}),(0,s.jsx)(t.td,{children:"Get Epoch Metadata"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/epoch/scripts/get_epoch_metadata.cdc",children:"epoch/get_epoch_metadata.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"EP.02"})})}),(0,s.jsx)(t.td,{children:"Get Configurable Metadata"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/epoch/scripts/get_config_metadata.cdc",children:"epoch/get_config_metadata.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"EP.03"})})}),(0,s.jsx)(t.td,{children:"Get Epoch Counter"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/epoch/scripts/get_epoch_counter.cdc",children:"epoch/get_epoch_counter.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"EP.04"})})}),(0,s.jsx)(t.td,{children:"Get Epoch Phase"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/epoch/scripts/get_epoch_phase.cdc",children:"epoch/get_epoch_phase.cdc"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"quorum-certificate-transactions-and-scripts",children:"Quorum Certificate Transactions and Scripts"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"ID"}),(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Source"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"QC.01"})})}),(0,s.jsx)(t.td,{children:"Create QC Voter"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/create_voter.cdc",children:"quorumCertificate/get_epoch_metadata.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"QC.02"})})}),(0,s.jsx)(t.td,{children:"Submit QC Vote"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/submit_vote.cdc",children:"quorumCertificate/get_config_metadata.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"QC.03"})})}),(0,s.jsx)(t.td,{children:"Get Collector Cluster"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/scripts/get_cluster.cdc",children:"quorumCertificate/scripts/get_cluster.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"QC.04"})})}),(0,s.jsx)(t.td,{children:"Get QC Enabled"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/scripts/get_qc_enabled.cdc",children:"quorumCertificate/scripts/get_qc_enabled.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"QC.05"})})}),(0,s.jsx)(t.td,{children:"Get Node Has Voted"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/scripts/get_node_has_voted.cdc",children:"quorumCertificate/scripts/get_node_has_voted.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"QC.06"})})}),(0,s.jsx)(t.td,{children:"Get QC Voting Complete"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/scripts/get_voting_completed.cdc",children:"quorumCertificate/scripts/get_voting_completed.cdc"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"dkg-transactions-and-scripts",children:"DKG Transactions and Scripts"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"ID"}),(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Source"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"DKG.01"})})}),(0,s.jsx)(t.td,{children:"Create DKG Participant"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/create_participant.cdc",children:"dkg/create_participant.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"DKG.02"})})}),(0,s.jsx)(t.td,{children:"Get Configurable Metadata"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/send_whiteboard_message.cdc",children:"dkg/send_whiteboard_message.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"DKG.03"})})}),(0,s.jsx)(t.td,{children:"Send Final Submission"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/send_final_submission.cdc",children:"dkg/send_final_submission.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"DKG.04"})})}),(0,s.jsx)(t.td,{children:"Get DKG Enabled"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/scripts/get_dkg_enabled.cdc",children:"dkg/scripts/get_dkg_enabled.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"DKG.05"})})}),(0,s.jsx)(t.td,{children:"Get DKG Completed"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/scripts/get_dkg_completed.cdc",children:"dkg/scripts/get_dkg_completed.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"DKG.06"})})}),(0,s.jsx)(t.td,{children:"Get Whiteboard Messages"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/scripts/get_whiteboard_messages.cdc",children:"dkg/scripts/get_whiteboard_messages.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"DKG.07"})})}),(0,s.jsx)(t.td,{children:"Get Final Submissions"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/scripts/get_final_submissions.cdc",children:"dkg/scripts/get_final_submissions.cdc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"DKG.08"})})}),(0,s.jsx)(t.td,{children:"Get Node Has Submitted"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/scripts/get_node_has_submitted.cdc",children:"dkg/scripts/get_node_has_submitted.cdc"})})]})]})]})]})}const l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);