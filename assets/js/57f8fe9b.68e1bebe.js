"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2556],{57729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});t(67294);var o=t(85893),s=t(11151);const c={title:"Key Concepts"},a=void 0,i={unversionedId:"concepts/flow-token/concepts",id:"concepts/flow-token/concepts",title:"Key Concepts",description:"The FLOW token is an integral part of the overall Flow ecosystem. There is a lot more to cover,",source:"@site/docs/concepts/flow-token/concepts.md",sourceDirName:"concepts/flow-token",slug:"/concepts/flow-token/concepts",permalink:"/docs/concepts/flow-token/concepts",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/flow-token/concepts.md",tags:[],version:"current",lastUpdatedBy:"Josh Hannan",lastUpdatedAt:1684351987,formattedLastUpdatedAt:"May 17, 2023",frontMatter:{title:"Key Concepts"},sidebar:"tutorialSidebar",previous:{title:"Flow Wallets",permalink:"/docs/concepts/flow-token/available-wallets"},next:{title:"FLOW Delivery Instructions",permalink:"/docs/concepts/flow-token/delivery"}},r={},l=[{value:"Fees",id:"fees",level:2},{value:"Segmented Transaction Fees",id:"segmented-transaction-fees",level:3},{value:"Storage/Account Fees",id:"storageaccount-fees",level:3},{value:"Accounts",id:"accounts",level:2},{value:"Flow Service Account",id:"flow-service-account",level:2},{value:"Tokens &amp; Fees",id:"tokens--fees",level:3},{value:"Network Management",id:"network-management",level:3},{value:"Governance",id:"governance",level:3},{value:"Key Format",id:"key-format",level:2}];function d(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",a:"a",ul:"ul",li:"li",strong:"strong",code:"code"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The FLOW token is an integral part of the overall Flow ecosystem. There is a lot more to cover,\nbut here are a few key concepts."}),"\n",(0,o.jsx)(n.h2,{id:"fees",children:"Fees"}),"\n",(0,o.jsx)(n.p,{children:"There are two types of fees that occur on the Flow blockchain: variable transaction fees and storage fees."}),"\n",(0,o.jsx)(n.h3,{id:"segmented-transaction-fees",children:"Segmented Transaction Fees"}),"\n",(0,o.jsx)(n.p,{children:"Transaction fees are applied only once per transaction, at time of execution."}),"\n",(0,o.jsx)(n.p,{children:"Transactions without a valid payer signature will fail and not be included in a block, prior to when the fee would be charged.\nIf there is no one to charge, the transaction never goes through."}),"\n",(0,o.jsx)(n.p,{children:"If a transaction fails for some other reason, you will still be charged. The fee covers the cost of the network looking at the transaction\nand thus must be paid even if no change to your account is made."}),"\n",(0,o.jsxs)(n.p,{children:["Transaction fees are charged based upon how much work is done by the transaction during execution, including creating accounts, reading and updating state, and executing of cadence logic. For more information, see ",(0,o.jsx)(n.a,{href:"/docs/concepts/start-here/variable-transaction-fees",children:"Segmented Transaction Fees on Flow"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"storageaccount-fees",children:"Storage/Account Fees"}),"\n",(0,o.jsx)(n.p,{children:'The account creation fee is applied only when a new account is created.\nThis fee covers the cost of storing up to 100kB of data in perpetuity.\nThis fee is applied only once and can be "topped up" to add additional storage to an account.'}),"\n",(0,o.jsxs)(n.p,{children:["More information: ",(0,o.jsx)(n.a,{href:"/docs/concepts/start-here/storage",children:"Storing Data on Flow"})]}),"\n",(0,o.jsx)(n.h2,{id:"accounts",children:"Accounts"}),"\n",(0,o.jsx)(n.p,{children:"An account on Flow is a record in the chain state that holds the following information:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Address"}),": unique identifier for the account"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Balance"}),": default token balance"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Public Keys"}),": public keys authorized on the account"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),": Cadence contracts deployed to the account"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Storage"}),": area of the account used to store resource assets"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["More information: ",(0,o.jsx)(n.a,{href:"/docs/concepts/start-here/accounts-and-keys",children:"Accounts & Keys"})]}),"\n",(0,o.jsx)(n.h2,{id:"flow-service-account",children:"Flow Service Account"}),"\n",(0,o.jsx)(n.p,{children:"The Service Account is a special account in Flow that has special permissions to manage system contracts.\nIt is able to mint tokens, set fees, and update network-level contracts."}),"\n",(0,o.jsx)(n.h3,{id:"tokens--fees",children:"Tokens & Fees"}),"\n",(0,o.jsx)(n.p,{children:"The Service Account has administrator access to the FLOW token smart contract, so it has authorization to mint and burn tokens. It also has access to the transaction fee smart contract and can adjust the fees charged for transactions execution on Flow."}),"\n",(0,o.jsx)(n.h3,{id:"network-management",children:"Network Management"}),"\n",(0,o.jsx)(n.p,{children:"The Service Account administrates other smart contracts that manage various aspects of the Flow network, such as epochs and (in the future) validator staking auctions."}),"\n",(0,o.jsx)(n.h3,{id:"governance",children:"Governance"}),"\n",(0,o.jsx)(n.p,{children:"Besides its special permissions, the Service Account is an account like any other in Flow. During the early phases of Flow's development, the account will be controlled by keys held by Dapper Labs. As Flow matures, the service account will transition to being controlled by a smart contract governed by the Flow community."}),"\n",(0,o.jsx)(n.h2,{id:"key-format",children:"Key Format"}),"\n",(0,o.jsxs)(n.p,{children:["We are supporting ECDSA with the curves ",(0,o.jsx)(n.code,{children:"P-256"})," and ",(0,o.jsx)(n.code,{children:"secp256k1"}),". For these curves, the public key is encoded into 64 bytes as ",(0,o.jsx)(n.code,{children:"X||Y"})," where ",(0,o.jsx)(n.code,{children:"||"})," is the concatenation operator."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"X"})," is 32 bytes and is the big endian byte encoding of the ",(0,o.jsx)(n.code,{children:"x"}),"-coordinate of the public key padded to 32, i.e. ",(0,o.jsx)(n.code,{children:"X=x_31||x_30||...||x_0"})," or ",(0,o.jsx)(n.code,{children:"X = x_31*256^31 + ... + x_i*256^i + ... + x_0"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Y"})," is 32 bytes and is the big endian byte encoding of the ",(0,o.jsx)(n.code,{children:"y"}),"-coordinate of the public key padded to 32, i.e. ",(0,o.jsx)(n.code,{children:"Y=y_31||y_30||...||y_0"})," or ",(0,o.jsx)(n.code,{children:"Y = y_31*256^31 + ... + y_i*256^i + ... + y_0"})]}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}}}]);