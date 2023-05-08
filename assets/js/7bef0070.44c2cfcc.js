"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3749],{58701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>h});n(67294);var o=n(85893),s=n(11151);const c={title:"Locked/Leased FLOW Account Setup",description:"Configure an account to hold locked or leased FLOW"},a=void 0,r={unversionedId:"concepts/flow-token/locked-account-setup",id:"concepts/flow-token/locked-account-setup",title:"Locked/Leased FLOW Account Setup",description:"Configure an account to hold locked or leased FLOW",source:"@site/docs/concepts/flow-token/locked-account-setup.mdx",sourceDirName:"concepts/flow-token",slug:"/concepts/flow-token/locked-account-setup",permalink:"/docs/concepts/flow-token/locked-account-setup",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/flow-token/locked-account-setup.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1683563229,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{title:"Locked/Leased FLOW Account Setup",description:"Configure an account to hold locked or leased FLOW"},sidebar:"tutorialSidebar",previous:{title:"Token Recipient FAQs",permalink:"/docs/concepts/flow-token/faq"},next:{title:"FLOW for Wallets & Custodians",permalink:"/docs/concepts/flow-token/wallets"}},i={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Configure a Creator Account",id:"configure-a-creator-account",level:3},{value:"Receive Account Creator Capability",id:"receive-account-creator-capability",level:3},{value:"Account Creation",id:"account-creation",level:2},{value:"1. Create Both Accounts for the User",id:"1-create-both-accounts-for-the-user",level:3},{value:"2. Create the Shared Account for an Existing User Account",id:"2-create-the-shared-account-for-an-existing-user-account",level:3},{value:"3. (Optional) Convert the Shared account to a locked account.",id:"3-optional-convert-the-shared-account-to-a-locked-account",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",code:"code",em:"em",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol"},(0,s.ah)(),e.components),{Callout:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n,{type:"warning",children:[(0,o.jsx)(t.p,{children:"This guide is for custodians and wallet providers who wish to create user accounts\nthat can hold leased or locked FLOW tokens from the Flow token sale."}),(0,o.jsxs)(t.p,{children:["If you already have an account and wish to stake tokens,\nplease see our guides on staking ",(0,o.jsx)(t.a,{href:"../nodes/staking/",children:"here"}),"."]})]}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"This guide covers the technical integration required for custodians to create\naccounts that store locked and/or leased FLOW tokens for users."}),"\n",(0,o.jsx)(t.p,{children:"Before discussing the account creation process, some terminology needs to be defined:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Flow Token Admin"})," - The user who controls the locked and vesting tokens from the\nFlow Token sale. This user maintains a record of users, their account addresses,\nand how many Flow tokens they will receive according to their vesting schedule.\nThis user also is required to co-sign any transactions that transfer locked tokens\nbefore they have been unlocked via the vesting schedule."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"User"})," - A user who has bought Flow tokens in the Flow token sale or auction."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Custody/Wallet Provider"})," - A service that is managing accounts on behalf of users."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Every user who holds locked FLOW tokens gets two accounts."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Account 1 - User Account:"})," This is the user's normal Flow account.\nThis account is completely controlled by the user. It can have already been created by\nthe custody provider or can be created along with the user's second account."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Account 2 - Shared Account:"})," This account is shared between the Flow token admin and the user.\nIn the case of a ",(0,o.jsx)(t.strong,{children:"locked token relationship"})," with a user who owns the tokens in this account,\nThe user's key will have weight 900 and the token admin's key will have weight 100.\nThe pre-generated token admin's key with weight 100 will be easily accessible for the custody provider\nto fetch and use to create this account.\nAny transactions that directly access this account need to be signed by the user and the token admin.\nThe locked tokens are stored in this account and the token admin has the authority to unlock\ntokens as outlined by the vesting schedule. This account also manages access to the staking\nand delegating functionality that a user signs up for."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In the case of a ",(0,o.jsx)(t.strong,{children:"leased token relationship"})," where the token admin has leased tokens\nto a user for the purposes or node operation, the user does not own the tokens in the shared account.\nThe token admin's key will have weight 1000.\nThe pre-generated token admin's key with weight 1000 will be easily accessible for the custody provider\nto fetch and use to create this account. This account also manages access to the staking\nand delegating functionality that a user signs up for."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"User Account"})," will include an object that manages access to\nthe staking functionality contained in the shared account.\nThe user submits token withdrawal and staking transactions with locked tokens\nwith their normal account, without the need for a signature from the token admin.\nThe user can also withdraw staking rewards from the shared account without the need for a signature\nfrom the token admin."]}),"\n",(0,o.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(t.h3,{id:"configure-a-creator-account",children:"Configure a Creator Account"}),"\n",(0,o.jsxs)(t.p,{children:["As the custodian, you must configure a Flow account that you will use to\ncreate user accounts. This is called your ",(0,o.jsx)(t.strong,{children:"creator account"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["You can convert an existing account into a ",(0,o.jsx)(t.strong,{children:"creator account"})," by running\nthe ",(0,o.jsx)(t.strong,{children:"Set Up Creator Account"})," (",(0,o.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#custodian",children:"C.01"}),") transaction."]}),"\n",(0,o.jsxs)(t.p,{children:["This transaction creates an ",(0,o.jsx)(t.code,{children:"AccountCreator"})," object and stores it in the custodian's account.\nIt also publishes a capability that allows the token admin to grant the custodian\nthe authority to register locked token accounts."]}),"\n",(0,o.jsx)(t.h3,{id:"receive-account-creator-capability",children:"Receive Account Creator Capability"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Note: Once you reach this step, please contact the token admin."})})}),"\n",(0,o.jsx)(t.p,{children:"After you have set up your creator account,\nthe token admin needs to submit one more transaction\nto enable your account to register new user accounts to receive locked tokens."}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Deposit Account Creator"})," (",(0,o.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-admin",children:"TA.06"}),") transaction\nmust be signed and authorized by the token admin account. It requires the\nfollowing arguments:"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Argument"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"custodyProviderAddress"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Address"})}),(0,o.jsx)(t.td,{children:"The address of the custodian's account."})]})})]}),"\n",(0,o.jsx)(t.p,{children:"This transaction gives the account registration capability to the custodian's creator account\nthat was configured in the previous transaction."}),"\n",(0,o.jsx)(t.h2,{id:"account-creation",children:"Account Creation"}),"\n",(0,o.jsx)(t.p,{children:"When a custodian uses these transactions, they must also ensure that\nthe token admin knows which account addresses map to which users. This is so\nthe token admin knows how much to pay to each locked account,\nhow many tokens to unlock via the vesting schedule,\nand/or which accounts apply to each node operator."}),"\n",(0,o.jsx)(t.h3,{id:"1-create-both-accounts-for-the-user",children:"1. Create Both Accounts for the User"}),"\n",(0,o.jsxs)(t.p,{children:["If your user does not have a regular account created for them yet, you must\ncreate both accounts using the ",(0,o.jsx)(t.strong,{children:"Create Shared Lease Accounts"})," (",(0,o.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#custodian",children:"C.04"}),")\ntransaction with the following arguments:"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Argument"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"fullAdminPublicKey"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"[UInt8]"})}),(0,o.jsx)(t.td,{children:"The public key of the token admin. Must be Weight: 1000"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"fullUserPublicKey"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"[UInt8]"})}),(0,o.jsx)(t.td,{children:"The public key of the user. Must be Weight: 1000"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"2-create-the-shared-account-for-an-existing-user-account",children:"2. Create the Shared Account for an Existing User Account"}),"\n",(0,o.jsx)(t.p,{children:"If your user already has a personal account allocated to them, you can run a transaction\nthat creates the shared account and gives their existing account the capability\nto interact with their locked tokens."}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsxs)(t.p,{children:["This transaction ",(0,o.jsx)(t.strong,{children:"MUST"})," also be signed and authorized by the existing user account.\nIt needs this because it needs to have access to the user's private storage and Authorized access."]})}),"\n",(0,o.jsxs)(t.p,{children:["To attach a shared account to an existing user account,\nrun the ",(0,o.jsx)(t.strong,{children:"Create Only Shared Account"})," (",(0,o.jsx)(t.a,{href:"/docs/cadence/core-contracts/locked-tokens#custodian",children:"C.03"}),")\ntransaction with the following arguments:"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Argument"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"fullAdminPublicKey"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"[UInt8]"})}),(0,o.jsx)(t.td,{children:"The public key of the token admin. Must be Weight: 1000"})]})})]}),"\n",(0,o.jsx)(t.h3,{id:"3-optional-convert-the-shared-account-to-a-locked-account",children:"3. (Optional) Convert the Shared account to a locked account."}),"\n",(0,o.jsx)(t.p,{children:"If the account is intended to be a leased tokens account, then there is no more action to take.\nThe token admin by default should have control of the shared account, and the user has access\nto staking capabilities on the shared account, but not the tokens themselves."}),"\n",(0,o.jsx)(t.p,{children:"If you would like to convert the shared account to a locked token account instead of a leased account,\nyou must contact the token admin, who will submit a transaction that sets the keys on the shared account\nto the locked account set up, which consists of the admin key with weight 100 and the user key with weight 900."}),"\n",(0,o.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(t.p,{children:"The account creation transactions generally perform these actions:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Create the shared account and add the public keys to the account."}),"\n",(0,o.jsx)(t.li,{children:"Create and store the Locked Token Manager object in the shared account."}),"\n",(0,o.jsx)(t.li,{children:"Create the Token Holder object and store it in the user account. This object\nis what the user interacts with to withdraw unlocked tokens and perform staking actions."}),"\n",(0,o.jsx)(t.li,{children:"Register the new accounts with the token admin account so that\nit can receive locked tokens from the vesting schedule."}),"\n",(0,o.jsx)(t.li,{children:"Override the default Flow Token receiver to mark received tokens as unlocked."}),"\n",(0,o.jsx)(t.li,{children:"Create a different Flow Token receiver that the token admin account uses to deposit locked tokens."}),"\n"]})]})}const l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}}}]);