"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5336],{95825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>i,toc:()=>h});n(67294);var s=n(85893),r=n(11151);const d={title:"How to Stake with Locked FLOW",sidebar_title:"Locked FLOW Staking Guide (Deprecated)"},o=void 0,i={unversionedId:"concepts/nodes/staking/locked-staking-guide",id:"concepts/nodes/staking/locked-staking-guide",title:"How to Stake with Locked FLOW",description:"This document outlines the steps a token holder (TH) can take to stake and manage",source:"@site/docs/concepts/nodes/staking/locked-staking-guide.mdx",sourceDirName:"concepts/nodes/staking",slug:"/concepts/nodes/staking/locked-staking-guide",permalink:"/docs/concepts/nodes/staking/locked-staking-guide",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/staking/locked-staking-guide.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683573026,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{title:"How to Stake with Locked FLOW",sidebar_title:"Locked FLOW Staking Guide (Deprecated)"},sidebar:"tutorialSidebar",previous:{title:"Staking FAQ",permalink:"/docs/concepts/nodes/staking/faq"},next:{title:"How to Stake Locked FLOW with a Third-Party Node Operator",permalink:"/docs/concepts/nodes/staking/locked-third-party-operator"}},a={},h=[{value:"Setup",id:"setup",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Register a New Staked Node",id:"register-a-new-staked-node",level:3},{value:"Stake New Tokens",id:"stake-new-tokens",level:2},{value:"Re-stake Unstaked Tokens",id:"re-stake-unstaked-tokens",level:2},{value:"Re-stake Rewarded Tokens",id:"re-stake-rewarded-tokens",level:2},{value:"Unstake Tokens",id:"unstake-tokens",level:2},{value:"Withdraw Unstaked Tokens",id:"withdraw-unstaked-tokens",level:2},{value:"Withdraw Rewarded Tokens",id:"withdraw-rewarded-tokens",level:2},{value:"Update A Node&#39;s Networking Address",id:"update-a-nodes-networking-address",level:3},{value:"Query a Staker Record",id:"query-a-staker-record",level:2},{value:"Stake Multiple Nodes from the Same Account",id:"stake-multiple-nodes-from-the-same-account",level:2},{value:"Delegate from the Same Account",id:"delegate-from-the-same-account",level:2},{value:"Setup",id:"setup-1",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Register as a Delegator",id:"register-as-a-delegator",level:2},{value:"Delegate New Tokens",id:"delegate-new-tokens",level:2},{value:"Re-delegate Unstaked Tokens",id:"re-delegate-unstaked-tokens",level:2},{value:"Re-delegate Rewarded Tokens",id:"re-delegate-rewarded-tokens",level:2},{value:"Unstake Delegated Tokens",id:"unstake-delegated-tokens",level:2},{value:"Withdraw Unstaked Tokens",id:"withdraw-unstaked-tokens-1",level:2},{value:"Withdraw Rewarded Tokens",id:"withdraw-rewarded-tokens-1",level:2},{value:"Query a Delegator Record",id:"query-a-delegator-record",level:2},{value:"Delegate to Multiple Nodes from the Same Account",id:"delegate-to-multiple-nodes-from-the-same-account",level:2}];function c(e){const t=Object.assign({p:"p",strong:"strong",code:"code",h2:"h2",h3:"h3",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr",em:"em",h1:"h1"},(0,r.ah)(),e.components),{Callout:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This document outlines the steps a ",(0,s.jsx)(t.strong,{children:"token holder (TH)"})," can take to stake and manage\na Flow node using the ",(0,s.jsx)(t.code,{children:"LockedTokens"})," contract. This is the original way that users\nwho bought tokens from the Flow community sale had to stake their tokens,\nbut now there is a better way to manage staking, the Staking Collection.\nIt is highly recommended that you use the staking collection paradigm instead,\nas it has more flexibility and features than these original paradigms."]}),"\n",(0,s.jsx)(n,{type:"warning",children:(0,s.jsxs)(t.p,{children:["This guide only covers staking with ",(0,s.jsx)(t.strong,{children:"locked FLOW tokens"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["The token holder must ",(0,s.jsx)(t.a,{href:"./locked-staking-guide",children:"configure their account to hold locked FLOW"}),"\nbefore they are able to complete the steps below. After this is complete,\nthe ",(0,s.jsx)(t.code,{children:"LockedTokens.TokenHolder"})," can be used to perform staking operations from the account."]}),"\n",(0,s.jsx)(t.h3,{id:"register-a-new-staked-node",children:"Register a New Staked Node"}),"\n",(0,s.jsxs)(t.p,{children:["To register as a node, the token holder can use the ",(0,s.jsx)(t.strong,{children:"Register Node"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.06"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"id"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsxs)(t.td,{children:["The ID of the new node. It must be a 32 byte ",(0,s.jsx)(t.code,{children:"String"}),". The operator is free to choose this value, but it must be unique across all nodes. A recommended process to generate this is to hash the staking public key."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"role"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UInt8"})}),(0,s.jsx)(t.td,{children:"The role of the new node. (1: collection, 2: consensus, 3: execution, 4: verification, 5: access)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"networkingAddress"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The IP address of the new node."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"networkingKey"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The networking public key as a hex-encoded string."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"stakingKey"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The staking public key as a hex-encoded string."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of FLOW tokens to stake."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["This transaction registers the account as a node with the specified node information\nand attaches a ",(0,s.jsx)(t.code,{children:"NodeStakerProxy"})," capability to the ",(0,s.jsx)(t.code,{children:"TokenHolder"})," resource.\nThis capability can later be used to perform staking actions."]}),"\n",(0,s.jsxs)(t.p,{children:["Once an account has registered as a node, they cannot register any additional nodes.\nFor more information, see ",(0,s.jsx)(t.a,{href:"#stake-multiple-nodes-from-the-same-account",children:"Stake Multiple Nodes from the Same Account"})," below.\nThis feature will be added in the future."]}),"\n",(0,s.jsx)(t.p,{children:"An account can use this transaction to register a different node that replaces the old node, but only if they have withdrawn\nALL tokens for their node from their record in the staking contract. If there are any tokens remaining,\nthe re-registration will fail. This is because the registration overwrites the old one, which would revoke access to their tokens."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Once the token holder has registered their node,\ntheir tokens and node information are committed to the central staking contract for the next epoch."}),"\n",(0,s.jsx)(t.p,{children:"At this point, the token holder now has access to various staking operations that they can perform,\nassuming they have the correct number of tokens to perform the action."}),"\n",(0,s.jsx)(t.h2,{id:"stake-new-tokens",children:"Stake New Tokens"}),"\n",(0,s.jsx)(t.p,{children:"The token holder can stake additional tokens at any time."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Note: this transaction stakes additional tokens to the same node that was registered in the setup phase.\nIt is currently not possible to ",(0,s.jsx)(t.a,{href:"#stake-multiple-nodes-from-the-same-account",children:"stake to multiple nodes from the same account"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["To stake new tokens via the ",(0,s.jsx)(t.code,{children:"NodeStakerProxy"}),",\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Stake New Locked FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.08"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of FLOW tokens to stake."})]})})]}),"\n",(0,s.jsx)(t.p,{children:"This transaction commits tokens to stake from the token holder's locked token account."}),"\n",(0,s.jsx)(t.h2,{id:"re-stake-unstaked-tokens",children:"Re-stake Unstaked Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After tokens become unstaked, the token holder can choose to re-stake the unstaked tokens to the same node."}),"\n",(0,s.jsxs)(t.p,{children:["To staked unstaked tokens via the ",(0,s.jsx)(t.code,{children:"NodeStakerProxy"}),",\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Re-stake Unstaked FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.09"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of unstaked FLOW tokens to stake."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"re-stake-rewarded-tokens",children:"Re-stake Rewarded Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After earning rewards from staking, the token holder can choose to re-stake the rewarded tokens to the same node."}),"\n",(0,s.jsxs)(t.p,{children:["To staked rewarded tokens via the ",(0,s.jsx)(t.code,{children:"NodeStakerProxy"}),",\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Re-stake Rewarded FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.10"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of rewarded FLOW tokens to stake."})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["Since rewarded tokens are considered to be unlocked for the purposes of the vesting schedule,\nand staked tokens are considered locked, staking rewarded tokens marks the staked tokens as locked\nand marks an equal amount of tokens in the token holder's ",(0,s.jsx)(t.code,{children:"LockedTokens.LockedTokenManager"})," as unlocked."]}),"\n",(0,s.jsx)(t.h2,{id:"unstake-tokens",children:"Unstake Tokens"}),"\n",(0,s.jsx)(t.p,{children:"The token holder can submit a request to unstake their tokens at any time.\nIf the tokens aren't staked yet, they will be uncommitted and available to withdraw."}),"\n",(0,s.jsxs)(t.p,{children:["To unstake staked tokens via the ",(0,s.jsx)(t.code,{children:"NodeStakerProxy"}),", the token holder can use\nthe ",(0,s.jsx)(t.strong,{children:"Unstake FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.11"}),") transaction."]}),"\n",(0,s.jsx)(t.p,{children:"This transaction requires no arguments."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Warning: this will unstake all of the user's staked tokens."})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Note: unstaked tokens will be held by the central staking contract until the end of the following epoch.\nOnce the tokens are released (unstaked), they can be claimed via the\n",(0,s.jsx)(t.a,{href:"#withdraw-unstaked-tokens",children:"Withdraw Unstaked Tokens"})," action below."]})}),"\n",(0,s.jsx)(t.h2,{id:"withdraw-unstaked-tokens",children:"Withdraw Unstaked Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After tokens become unstaked, the token holder can withdraw them from the central staking contract."}),"\n",(0,s.jsxs)(t.p,{children:["To withdraw unstaked tokens via the ",(0,s.jsx)(t.code,{children:"NodeStakerProxy"}),",\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Withdraw Unstaked FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.13"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of unstaked FLOW tokens to withdraw."})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["This transaction moves the unstaked tokens back into the ",(0,s.jsx)(t.code,{children:"LockedTokens.TokenManager"})," owned by the token holder."]}),"\n",(0,s.jsx)(t.h2,{id:"withdraw-rewarded-tokens",children:"Withdraw Rewarded Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After earning rewards from staking, the token holder can withdraw them from the central staking contract."}),"\n",(0,s.jsxs)(t.p,{children:["To withdraw rewarded tokens via the ",(0,s.jsx)(t.code,{children:"NodeStakerProxy"}),",\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Withdraw Rewarded FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.14"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of rewarded FLOW tokens to withdraw."})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["This transaction moves the rewarded tokens back into the ",(0,s.jsx)(t.code,{children:"LockedTokens.TokenManager"})," owned by the token holder.\nHowever, unlike unstaked tokens, rewards are ",(0,s.jsx)(t.em,{children:"unlocked FLOW"})," and can be immediately withdrawn from the locked account."]}),"\n",(0,s.jsx)(t.h3,{id:"update-a-nodes-networking-address",children:"Update A Node's Networking Address"}),"\n",(0,s.jsx)(t.p,{children:"A user may update their node's networking address if it has become inconsistent with the protocol state."}),"\n",(0,s.jsx)(t.p,{children:"This operation can only be performed in the staking auction phase of an epoch."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Note: Currently, if a node updates its networking address and the new address does not match"}),"\n",(0,s.jsx)(t.em,{children:"what is stored in the protocol state for the node, the node will not be able to participate in the upcoming epoch"}),"\n",(0,s.jsx)(t.em,{children:"Only update your networking address if you have already confirmed with the Flow team that you can."}),"\n",(0,s.jsx)(t.em,{children:"This restriction will be removed once fully automated epochs are completely implemented"})]}),"\n",(0,s.jsxs)(t.p,{children:["The owner of a Staking Collection can use the ",(0,s.jsx)(t.strong,{children:"Update Networking Address"})," (",(0,s.jsx)(t.a,{href:"../../../cadence/core-contracts/locked-tokens",children:"TH.25"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"nodeID"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The nodeID of the node to update."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"newAddress"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The new networking address"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"query-a-staker-record",children:"Query a Staker Record"}),"\n",(0,s.jsxs)(t.p,{children:["To return a struct with all the information associated with a node, anyone\ncan use the ",(0,s.jsx)(t.strong,{children:"Get Node Info"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.06"}),") script with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"nodeID"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The 32 byte ID of the node"})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["This script returns a ",(0,s.jsx)(t.code,{children:"FlowIDTableStaking.NodeInfo"})," ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc#L264",children:"struct"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"stake-multiple-nodes-from-the-same-account",children:"Stake Multiple Nodes from the Same Account"}),"\n",(0,s.jsxs)(t.p,{children:["Currently, the ",(0,s.jsx)(t.code,{children:"LockedTokens"})," contract only supports token holders staking to a single node."]}),"\n",(0,s.jsx)(t.p,{children:"If a token holder wants to create a second staking relationship, they must create a new account\nand transfer their locked tokens to the new account by requesting authorization from the token admin."}),"\n",(0,s.jsx)(t.p,{children:"We plan on adding functionality in the future to allow accounts to stake to multiple nodes."}),"\n",(0,s.jsx)(t.h2,{id:"delegate-from-the-same-account",children:"Delegate from the Same Account"}),"\n",(0,s.jsx)(t.p,{children:"An account that registers a node with locked FLOW can also register as a delegator from the same account."}),"\n",(0,s.jsx)(t.h1,{id:"delegate",children:"Delegate"}),"\n",(0,s.jsx)(t.h2,{id:"setup-1",children:"Setup"}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["The token holder must ",(0,s.jsx)(t.a,{href:"/docs/concepts/nodes/staking/locked-staking-guide",children:"configure their account to hold locked FLOW"}),"\nbefore they are able to complete the steps below. After this is complete,\nthe ",(0,s.jsx)(t.code,{children:"LockedTokens.TokenHolder"})," can be used to perform staking operations from the account."]}),"\n",(0,s.jsx)(t.h2,{id:"register-as-a-delegator",children:"Register as a Delegator"}),"\n",(0,s.jsxs)(t.p,{children:["To register as a delegator, the token holder can use the ",(0,s.jsx)(t.strong,{children:"Register Delegator"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.17"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"id"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The ID of the node to delegate to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of FLOW tokens to delegate."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["This transaction registers the account as a delegator to the node ID they specified\nand attaches a ",(0,s.jsx)(t.code,{children:"NodeDelegatorProxy"})," capability to the ",(0,s.jsx)(t.code,{children:"TokenHolder"})," resource.\nThis capability can later be used to perform delegation actions."]}),"\n",(0,s.jsxs)(t.p,{children:["Once an account has registered as a delegator with one node, they cannot register with any others.\nFor more information, see ",(0,s.jsx)(t.a,{href:"#delegate-to-multiple-nodes-from-the-same-account",children:"Delegate to Multiple Nodes from the Same Account"})," below.\nThis feature will be added in the future."]}),"\n",(0,s.jsx)(t.p,{children:"An account can use this transaction to register a different delegator that replaces the old delegator, but only if they have withdrawn\nALL tokens for their old delegator from their record in the staking contract. If there are any tokens remaining,\nthe re-registration will fail. This is because the registration overwrites the old one, which would revoke access to the tokens."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"delegate-new-tokens",children:"Delegate New Tokens"}),"\n",(0,s.jsx)(t.p,{children:"The token holder can delegate additional tokens after registering as a delegator."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Note: this transaction delegates additional tokens to the same node that was registered in the setup phase.\nIt is currently not possible to ",(0,s.jsx)(t.a,{href:"#delegate-to-multiple-nodes-from-the-same-account",children:"delegate to multiple nodes from the same account"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["To delegate new tokens via the ",(0,s.jsx)(t.code,{children:"NodeDelegatorProxy"}),",\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Delegate New Locked FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.19"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of FLOW tokens to delegate."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"re-delegate-unstaked-tokens",children:"Re-delegate Unstaked Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After delegated tokens become unstaked, the token holder can choose to re-delegate the unstaked tokens to the same node."}),"\n",(0,s.jsxs)(t.p,{children:["To delegate unstaked tokens via the ",(0,s.jsx)(t.code,{children:"NodeDelegatorProxy"}),",\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Re-delegate Unstaked FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.20"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of unstaked FLOW tokens to delegate."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"re-delegate-rewarded-tokens",children:"Re-delegate Rewarded Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After earning rewards from delegation, the token holder can choose to re-delegate the rewarded tokens to the same node."}),"\n",(0,s.jsxs)(t.p,{children:["To delegate rewarded tokens via the ",(0,s.jsx)(t.code,{children:"NodeDelegatorProxy"}),",\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Re-delegate Rewarded FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.21"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of rewarded FLOW tokens to delegate."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"unstake-delegated-tokens",children:"Unstake Delegated Tokens"}),"\n",(0,s.jsx)(t.p,{children:"The token holder can submit a request to unstake their delegated tokens at any time.\nIf the tokens aren't staked yet, they will be uncommitted and available to withdraw."}),"\n",(0,s.jsxs)(t.p,{children:["To unstake delegated tokens via the ",(0,s.jsx)(t.code,{children:"NodeDelegatorProxy"}),",\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Unstake Delegated FOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.22"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of FLOW tokens to unstake."})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Note: unstaked delegated tokens will be held by the central staking contract for a period of time\n(the rest of the current epoch plus all of the next epoch) before they are\nreleased to the token holder. Once the tokens are released (unstaked),\nthey can be claimed via the ",(0,s.jsx)(t.a,{href:"#withdraw-unstaked-tokens",children:"Withdraw Unstaked Tokens"})," action below."]})}),"\n",(0,s.jsx)(t.h2,{id:"withdraw-unstaked-tokens-1",children:"Withdraw Unstaked Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After delegated tokens become unstaked, the token holder can withdraw them from the central staking contract."}),"\n",(0,s.jsxs)(t.p,{children:["To withdraw unstaked tokens via the ",(0,s.jsx)(t.code,{children:"NodeDelegatorProxy"}),",\nthe token holder can use the **Withdraw Unstaked FLOW ** (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.23"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of unstaked FLOW tokens to withdraw."})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["This transaction moves the unstaked tokens back into the ",(0,s.jsx)(t.code,{children:"LockedTokens.TokenManager"})," owned by the token holder."]}),"\n",(0,s.jsx)(t.h2,{id:"withdraw-rewarded-tokens-1",children:"Withdraw Rewarded Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After earning rewards from delegation, the token holder can withdraw them from the central staking contract."}),"\n",(0,s.jsxs)(t.p,{children:["To withdraw rewarded tokens via the ",(0,s.jsx)(t.code,{children:"NodeDelegatorProxy"}),",\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Withdraw Rewarded FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.24"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of rewarded FLOW tokens to withdraw."})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["This transaction moves the rewarded tokens back into the ",(0,s.jsx)(t.code,{children:"LockedTokens.TokenManager"})," owned by the token holder.\nHowever, unlike unstaked tokens, rewards are ",(0,s.jsx)(t.em,{children:"unlocked FLOW"})," and can be immediately withdrawn from the lockbox."]}),"\n",(0,s.jsx)(t.h2,{id:"query-a-delegator-record",children:"Query a Delegator Record"}),"\n",(0,s.jsxs)(t.p,{children:["To return a struct with all the information associated with a delegator, anyone\ncan use the ",(0,s.jsx)(t.strong,{children:"Get Delegator Info"})," (",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.21"}),") script with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"nodeID"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The 32 byte ID of the node of the delegator"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"nodeID"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UInt8"})}),(0,s.jsx)(t.td,{children:"The ID of the delegator"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["This script returns a ",(0,s.jsx)(t.code,{children:"FlowIDTableStaking.DelegatorInfo"})," ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc#L348",children:"struct."})]}),"\n",(0,s.jsx)(t.h2,{id:"delegate-to-multiple-nodes-from-the-same-account",children:"Delegate to Multiple Nodes from the Same Account"}),"\n",(0,s.jsxs)(t.p,{children:["Currently, the ",(0,s.jsx)(t.code,{children:"LockedTokens"})," contract only supports token holders delegating to a single node."]}),"\n",(0,s.jsx)(t.p,{children:"If a token holder wants to create a second delegation relationship, they must create a new account\nand transfer their locked tokens to the new account by requesting authorization from the token admin."}),"\n",(0,s.jsx)(t.p,{children:"We plan on adding functionality in the future to allow accounts to delegate to multiple nodes."})]})}const l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);