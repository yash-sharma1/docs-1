"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[90901],{74450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});n(67294);var o=n(85893),s=n(11151);const i={title:"Testnet Deployment Guidelines",sidebar_label:"Testnet Deployment",description:"Guidelines for deploying your application to Flow Testnet",sidebar_position:2,sidebar_custom_props:{icon:"\ud83e\uddea"}},a=void 0,r={unversionedId:"guides/deploying/testnet-deployment",id:"guides/deploying/testnet-deployment",title:"Testnet Deployment Guidelines",description:"Guidelines for deploying your application to Flow Testnet",source:"@site/docs/guides/deploying/testnet-deployment.mdx",sourceDirName:"guides/deploying",slug:"/guides/deploying/testnet-deployment",permalink:"/docs/next/guides/deploying/testnet-deployment",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/guides/deploying/testnet-deployment.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1694808350,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:2,frontMatter:{title:"Testnet Deployment Guidelines",sidebar_label:"Testnet Deployment",description:"Guidelines for deploying your application to Flow Testnet",sidebar_position:2,sidebar_custom_props:{icon:"\ud83e\uddea"}},sidebar:"guides",previous:{title:"Mainnet Deployment",permalink:"/docs/next/guides/deploying/mainnet-deployment"},next:{title:"Testing Guidelines",permalink:"/docs/next/guides/deploying/contract-testing"}},l={},d=[{value:"Getting Started on Testnet",id:"getting-started-on-testnet",level:2},{value:"Creating an Account",id:"creating-an-account",level:3},{value:"Creating and deploying a Project",id:"creating-and-deploying-a-project",level:3},{value:"Making Use of Core Contracts",id:"making-use-of-core-contracts",level:3},{value:"Breaking Changes",id:"breaking-changes",level:3},{value:"Testnet Sporking",id:"testnet-sporking",level:3}];function c(e){const t=Object.assign({p:"p",a:"a",em:"em",h2:"h2",h3:"h3",strong:"strong",code:"code"},(0,s.ah)(),e.components),{Callout:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The Flow test network, known as Flow Testnet, exists to help developers test their software and smart contracts against a live network. It's also used as a means of releasing and testing new protocol and smart contract features before they are integrated into Flow's main network (Mainnet)."}),"\n",(0,o.jsxs)(t.p,{children:["When the Flow protocol is updated or a new version of Cadence is released, those updates will always be made available on the ",(0,o.jsx)(t.a,{href:"../../tools/toolchains/emulator",children:"Flow Emulator"})," ",(0,o.jsx)(t.em,{children:"before"})," they're integrated into Flow Testnet or Flow Mainnet."]}),"\n",(0,o.jsx)(t.h2,{id:"getting-started-on-testnet",children:"Getting Started on Testnet"}),"\n",(0,o.jsx)(n,{type:"info",children:(0,o.jsxs)(t.p,{children:["To create accounts and generate keys, make sure to install ",(0,o.jsx)(t.a,{href:"../../build/getting-started/local-development/flow-cli/install",children:"Flow CLI"}),". Flow CLI provides convenient functions to simplifies interacting with the blockchain."]})}),"\n",(0,o.jsx)(t.h3,{id:"creating-an-account",children:"Creating an Account"}),"\n",(0,o.jsxs)(t.p,{children:["There are two simple methods of creating an account on testnet. ",(0,o.jsx)(t.strong,{children:"Interactive"})," and ",(0,o.jsx)(t.strong,{children:"Manual"}),", both use the Flow CLI and the ",(0,o.jsx)(t.a,{href:"https://testnet-faucet-v2.onflow.org/",children:"Testnet Faucet"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Make sure to install the Flow CLI. ",(0,o.jsx)(t.a,{href:"../../build/getting-started/local-development/flow-cli/accounts/create-accounts",children:"Flow CLI"})," has a interactive mode for generating keys, using the testnet faucet to create and fund the new account."]}),"\n",(0,o.jsx)(t.h3,{id:"creating-and-deploying-a-project",children:"Creating and deploying a Project"}),"\n",(0,o.jsxs)(t.p,{children:["Flow CLI can be used to create a Cadence project and stay organized, ",(0,o.jsx)(t.a,{href:"../../build/getting-started/local-development/flow-cli",children:"Flow CLI: Create a project"}),". This will make deployment much easiler and help with the iterative development process."]}),"\n",(0,o.jsxs)(t.p,{children:["After you have a project created and want to deploy your Cadence; contracts, transactions and scripts.",(0,o.jsx)(t.a,{href:"/docs/next/build/getting-started/local-development/flow-cli/deployment/deploy-project-contracts",children:"Flow CLI: deploy"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Make sure Flow project was initialized in the previous step and the ",(0,o.jsx)(t.code,{children:"flow.json"})," is present."]}),"\n",(0,o.jsx)(t.h3,{id:"making-use-of-core-contracts",children:"Making Use of Core Contracts"}),"\n",(0,o.jsxs)(t.p,{children:["Flow Testnet comes with some useful contracts already deployed, called ",(0,o.jsx)(t.strong,{children:"core contracts."})," More information and import addresses for the ",(0,o.jsx)(t.a,{href:"/docs/next/build/core-contracts/",children:"core contracts"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Once your accounts are set up and you're ready to develop, you can look over ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-go-sdk/tree/master/examples",children:"some code examples from the Flow Go SDK"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,o.jsx)(t.p,{children:"The Flow blockchain is improved continuously and thus version updates to Cadence, Flow node software, and the Flow SDKs will contain important updates as well as breaking changes."}),"\n",(0,o.jsxs)(t.p,{children:["You should anticipate future updates and join the community (",(0,o.jsx)(t.a,{href:"https://forum.onflow.org/",children:"Forum"})," or ",(0,o.jsx)(t.a,{href:"https://www.onflow.org/discord",children:"Discord"}),") to stay tuned on important announcements. Notices and guidelines for changes will be provided as early as possible."]}),"\n",(0,o.jsx)(t.h3,{id:"testnet-sporking",children:"Testnet Sporking"}),"\n",(0,o.jsx)(t.p,{children:'"Sporking" (soft forking) is the process of upgrading the Flow network node software and migrating the chain state from one version to another.'}),"\n",(0,o.jsxs)(t.p,{children:["Currently, ",(0,o.jsx)(t.strong,{children:"historical event data is not migrated between sporks."})," You'll need to design your application with this in mind. We recognize the usefulness of historical event data and plan on adding a means of accessing it in the near future. Only one previous spork data is available through old Access Node."]}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:'Flow Testnet is explicitly for experimentation and testing and should not be used to exchange "real value" (e.g. developing a fiat money on/off-ramp for your testnet application).'})})]})}const p=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);