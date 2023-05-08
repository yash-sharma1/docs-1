"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7912],{17142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});n(67294);var s=n(85893),i=n(11151);const r={title:"Transaction Lifecycle",sidebar_position:2},o=void 0,a={unversionedId:"concepts/start-here/transaction-lifecycle",id:"concepts/start-here/transaction-lifecycle",title:"Transaction Lifecycle",description:"This document walks through each stage of a transaction's lifecycle as it moves through the Flow network.",source:"@site/docs/concepts/start-here/transaction-lifecycle.md",sourceDirName:"concepts/start-here",slug:"/concepts/start-here/transaction-lifecycle",permalink:"/docs/concepts/start-here/transaction-lifecycle",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/start-here/transaction-lifecycle.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683573026,formattedLastUpdatedAt:"May 8, 2023",sidebarPosition:2,frontMatter:{title:"Transaction Lifecycle",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Accounts, Keys & Signing",permalink:"/docs/concepts/start-here/accounts-and-keys"},next:{title:"Signing a Transaction",permalink:"/docs/concepts/start-here/transaction-signing"}},c={},l=[{value:"Submission",id:"submission",level:2},{value:"Validation",id:"validation",level:3},{value:"Clustering",id:"clustering",level:3},{value:"Block Formation",id:"block-formation",level:2},{value:"Proposal + Finalization",id:"proposal--finalization",level:3},{value:"Execution",id:"execution",level:2},{value:"Pre-execution validation step",id:"pre-execution-validation-step",level:3},{value:"Execution step",id:"execution-step",level:3},{value:"Check payer&#39;s balance",id:"check-payers-balance",level:4},{value:"Get metering parameters",id:"get-metering-parameters",level:4},{value:"Start metering execution effort",id:"start-metering-execution-effort",level:4},{value:"Execute transaction body",id:"execute-transaction-body",level:4},{value:"Stop metering execution effort",id:"stop-metering-execution-effort",level:4},{value:"Check accounts&#39; storage limits",id:"check-accounts-storage-limits",level:4},{value:"Execution error step",id:"execution-error-step",level:3},{value:"Stop metering execution effort",id:"stop-metering-execution-effort-1",level:4},{value:"Discard any state changes made so far",id:"discard-any-state-changes-made-so-far",level:4},{value:"Deduct transaction fees",id:"deduct-transaction-fees",level:3},{value:"Verification",id:"verification",level:2},{value:"Sealing",id:"sealing",level:2},{value:"Transaction Results",id:"transaction-results",level:2}];function h(e){const t=Object.assign({p:"p",strong:"strong",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3",img:"img",h4:"h4",code:"code",em:"em"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This document walks through each stage of a transaction's lifecycle as it moves through the Flow network."}),"\n","\n","\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Table of Contents"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#transaction-lifecycle",children:"Transaction Lifecycle"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#submission",children:"Submission"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#validation",children:"Validation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#clustering",children:"Clustering"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#block-formation",children:"Block Formation"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#proposal",children:"Proposal"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#finalization",children:"Finalization"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#execution",children:"Execution"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#fee-payment",children:"Fee Payment"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#computation",children:"Computation"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#verification",children:"Verification"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#sealing",children:"Sealing"})}),"\n"]}),"\n"]}),"\n"]}),"\n","\n",(0,s.jsx)(t.h2,{id:"submission",children:"Submission"}),"\n",(0,s.jsxs)(t.p,{children:["Transactions are submitted to the Flow network via Access Nodes. The Access Node provides a single point of contact to interact with the Flow network, accessible ",(0,s.jsx)(t.a,{href:"/docs/concepts/nodes/access-api#current-mainnet",children:"here"}),". It implements the ",(0,s.jsx)(t.a,{href:"/docs/concepts/nodes/access-api",children:"Access API"}),".\nTransactions are received by the Access Node via the ",(0,s.jsx)(t.a,{href:"/docs/concepts/nodes/access-api#sendtransaction",children:"SendTransaction API call"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"validation",children:"Validation"}),"\n","\n",(0,s.jsx)(t.h3,{id:"clustering",children:"Clustering"}),"\n",(0,s.jsx)(t.p,{children:"The Access Node forwards the transaction to one of the Collection nodes in the Collection node cluster to which this transaction belongs."}),"\n",(0,s.jsx)(t.h2,{id:"block-formation",children:"Block Formation"}),"\n",(0,s.jsx)(t.h3,{id:"proposal--finalization",children:"Proposal + Finalization"}),"\n",(0,s.jsxs)(t.p,{children:["Collection Nodes pass the transaction collections to the Consensus Nodes for them agree on the order of transactions. Flow's Consensus Nodes follow the HotStuff consensus protocol, ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-go/tree/master/consensus/hotstuff",children:"detailed here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"execution",children:"Execution"}),"\n",(0,s.jsx)(t.p,{children:"Once the transaction reaches the execution node as part of a collection it is validated and processed by the Flow Virtual Machine (FVM) following steps illustrated by the image below."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(48673).Z+"",loading:"lazy",alt:"Transaction Execution",width:"1500",height:"1233"})}),"\n",(0,s.jsx)(t.h3,{id:"pre-execution-validation-step",children:"Pre-execution validation step"}),"\n",(0,s.jsxs)(t.p,{children:["Before transaction execution starts all the transaction's signatures are verified (more on that ",(0,s.jsx)(t.a,{href:"./transaction-signing",children:"here"}),") and the sequence number of the proposer is checked and incremented.\nIf any of the checks fail the transaction execution fails with an error and no fees are deducted."]}),"\n",(0,s.jsx)(t.h3,{id:"execution-step",children:"Execution step"}),"\n",(0,s.jsx)(t.p,{children:"The execution step is the heart of the transaction processing in the FVM. It involves the following sub-steps:"}),"\n",(0,s.jsx)(t.h4,{id:"check-payers-balance",children:"Check payer's balance"}),"\n",(0,s.jsxs)(t.p,{children:["The first step is to check that the payer will be able to cover (pay for) the execution of the transaction. The payer must have sufficient balance so\nthat their ",(0,s.jsx)(t.a,{href:"./storage#storage-capacity-of-the-payer",children:"storage capacity"})," exceeds their ",(0,s.jsx)(t.a,{href:"./storage#storage-used",children:"storage used"}),". The Cadence function called to verify this is ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/276863c9af3ff9266c37dd60185cded7ba06cfa2/contracts/FlowFees.cdc#L100",children:"FlowFees.verifyPayersBalanceForTransactionExecution"}),". If the payers balance is insufficient an error is produced and the transaction execution continues with the ",(0,s.jsx)(t.a,{href:"#execution-error-step",children:"Execution error step"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"get-metering-parameters",children:"Get metering parameters"}),"\n",(0,s.jsx)(t.p,{children:"Execution of the body of the transaction will be metered. The metered quantities are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Execution effort."}),"\n",(0,s.jsx)(t.li,{children:"Cadence memory usage."}),"\n",(0,s.jsx)(t.li,{children:"interaction usage (how many bytes will be written/read to/from storage)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Some parameters for metering are written in the ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/276863c9af3ff9266c37dd60185cded7ba06cfa2/contracts/FlowServiceAccount.cdc",children:"FlowServiceAccount"})," smart contract. Some of these parameters are:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"execution effort weights (how much execution effort does it cost to call certain methods)"}),"\n",(0,s.jsx)(t.li,{children:"Cadence memory weights (mow much memory is used during Cadence operations)"}),"\n",(0,s.jsx)(t.li,{children:"Cadence memory limit"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"During this step these parameters are read from the smart contract."}),"\n",(0,s.jsx)(t.h4,{id:"start-metering-execution-effort",children:"Start metering execution effort"}),"\n",(0,s.jsx)(t.p,{children:"Until this point in the execution no execution effort was measured. All actions done should be accounted for in the inclusion effort.\nIn this step we start metering not only execution effort, but also memory consumption, interaction and emitted event size."}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"./variable-transaction-fees#segmented-transaction-fees",children:"Segmented Transaction Fees"})," for more details on the different components of effort."]}),"\n",(0,s.jsx)(t.h4,{id:"execute-transaction-body",children:"Execute transaction body"}),"\n",(0,s.jsxs)(t.p,{children:["During this step the users transaction code is executed. In case an error occurs the transaction continues with the ",(0,s.jsx)(t.a,{href:"#execution-error-step",children:"Execution error step"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"stop-metering-execution-effort",children:"Stop metering execution effort"}),"\n",(0,s.jsxs)(t.p,{children:["Now that the users part of the transaction is executed, metering is stopped. The metered quantities will be used for fee deduction later.\nIn case any metering limits were hit during execution, the execution would continue with the ",(0,s.jsx)(t.a,{href:"#execution-error-step",children:"Execution error step"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"check-accounts-storage-limits",children:"Check accounts' storage limits"}),"\n",(0,s.jsxs)(t.p,{children:["In this step, all accounts whose storage was changed during the transaction execution, will be checked to ensure their ",(0,s.jsx)(t.a,{href:"./storage#storage-capacity-of-the-payer",children:"storage capacity"})," does not exceed their ",(0,s.jsx)(t.a,{href:"./storage#storage-used",children:"storage used"}),". If it does, an error is produced and the transaction continues with the ",(0,s.jsx)(t.a,{href:"#execution-error-step",children:"Execution error step"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If and error occurs anywhere during this step the execution will continue with the ",(0,s.jsx)(t.a,{href:"#execution-error-step",children:"Execution error step"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"execution-error-step",children:"Execution error step"}),"\n",(0,s.jsx)(t.p,{children:"This step is only run when an error occurs during the Execution step. It is meant as a cleanup after the transaction has failed. The following sub-steps are performed."}),"\n",(0,s.jsx)(t.h4,{id:"stop-metering-execution-effort-1",children:"Stop metering execution effort"}),"\n",(0,s.jsx)(t.p,{children:"This step is only relevant if an error occurs during execution of the transaction body, after the metering started and hasn't stopped yet. Otherwise all the metered quantities will still be 0."}),"\n",(0,s.jsx)(t.h4,{id:"discard-any-state-changes-made-so-far",children:"Discard any state changes made so far"}),"\n",(0,s.jsx)(t.p,{children:"This step rolls back any changes made to the state by the transaction so far."}),"\n",(0,s.jsx)(t.h3,{id:"deduct-transaction-fees",children:"Deduct transaction fees"}),"\n",(0,s.jsxs)(t.p,{children:["The last step in transaction execution is to deduct the transaction fees. During this step the relevant fees are deducted from the account identified as the ",(0,s.jsx)(t.code,{children:"payer"})," in the transaction. Flow's flexible transaction structure allows accounts other than the user to pay transaction fees. For more info on ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow/blob/master/docs/content/concepts/accounts-and-keys.md#anatomy-of-a-transaction",children:"transaction structure"})," and ",(0,s.jsx)(t.a,{href:"/docs/concepts/start-here/accounts-and-keys",children:"transaction signing"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Transaction fees are calculated as described in ",(0,s.jsx)(t.a,{href:"./variable-transaction-fees#segmented-transaction-fees",children:"Segmented Transaction Fees"})," using the execution effort measured during execution and the inclusion effort of the transaction which was already known."]}),"\n",(0,s.jsx)(t.h2,{id:"verification",children:"Verification"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Documentation coming soon..."})}),"\n",(0,s.jsx)(t.h2,{id:"sealing",children:"Sealing"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Documentation coming soon..."})}),"\n",(0,s.jsx)(t.h2,{id:"transaction-results",children:"Transaction Results"}),"\n",(0,s.jsxs)(t.p,{children:["From the ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-go/blob/master/cmd/access/README.md",children:"Access API"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/concepts/nodes/access-api#gettransaction",children:"GetTransactionResult"}),": an execution node is requested for events for the transaction and the transaction status is derived as follows:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If the collection containing the transaction and the block containing that collection is found locally, but the transaction has expired then its status is returned as ",(0,s.jsx)(t.code,{children:"expired"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["If either the collection or the block is not found locally, but the transaction has not expired, then its status is returned as ",(0,s.jsx)(t.code,{children:"pending"}),"\nIf the transaction has neither expired nor is it pending, but the execution node has not yet executed the transaction, then the status of the transaction is returned as ",(0,s.jsx)(t.code,{children:"finalized"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["If the execution node has executed the transaction, then if the height of the block containing the transaction is greater than the highest sealed block, then the status of the transaction is returned as ",(0,s.jsx)(t.code,{children:"executed"})," else it is returned as ",(0,s.jsx)(t.code,{children:"sealed"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["If the collection, block, or chain state lookup failed then the status is returned as ",(0,s.jsx)(t.code,{children:"unknown"})]}),"\n"]})]})}const d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},48673:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/fvm-transaction-execution-9228793b0e89455119cf62d7797642e9.png"}}]);