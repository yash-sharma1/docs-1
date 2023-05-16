"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5883],{52213:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});s(67294);var n=s(85893),o=s(11151);const i={title:"Smart Contract Testing Guidelines",sidebar_title:"1. Smart Contract Testing"},r=void 0,a={unversionedId:"tutorials/contract-testing",id:"tutorials/contract-testing",title:"Smart Contract Testing Guidelines",description:"Achieving good test coverage is vital for assuring the quality of code written to be deployed on the Flow blockchain.",source:"@site/docs/tutorials/contract-testing.md",sourceDirName:"tutorials",slug:"/tutorials/contract-testing",permalink:"/docs/tutorials/contract-testing",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tutorials/contract-testing.md",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1684254567,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"Smart Contract Testing Guidelines",sidebar_title:"1. Smart Contract Testing"},sidebar:"tutorialSidebar",previous:{title:"NFT Drop Strategies",permalink:"/docs/tutorials/NFT-drop-styles"},next:{title:"Off-chain Dapp Infrastructure",permalink:"/docs/tutorials/dapp-infrastructure"}},c={},l=[{value:"Testing Requirements",id:"testing-requirements",level:2},{value:"Writing Tests",id:"writing-tests",level:2},{value:"Go Tests",id:"go-tests",level:3},{value:"JavaScript Tests",id:"javascript-tests",level:3}];function h(t){const e=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",em:"em",h3:"h3",a:"a",blockquote:"blockquote",strong:"strong"},(0,o.ah)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Achieving good test coverage is vital for assuring the quality of code written to be deployed on the Flow blockchain."}),"\n",(0,n.jsx)(e.p,{children:"Automated tests can be run locally in the Flow emulator, and on the Flow testnet. These tests should include both unit tests; to exercise each feature of a contract, and integration tests; to exercise the behavior of different parts of the project as a whole."}),"\n",(0,n.jsx)(e.p,{children:"Human-driven tests, in which individual testers work manually through user stories via the project's user interface or custom transactions, can also be performed locally. Tests with groups of testers can be performed similarly on testnet in a similar manner."}),"\n",(0,n.jsx)(e.p,{children:"Finally, unstructured closed testing with a limited audience on testnet can gain valuable information about performance and security by capturing usage data from more organic interaction with the project's smart contracts over days or weeks."}),"\n",(0,n.jsx)(e.h2,{id:"testing-requirements",children:"Testing Requirements"}),"\n",(0,n.jsx)(e.p,{children:"It is suggested to follow the following best practices:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Every publicly exposed feature of a contract and its resources should have unit tests that check both for success with correct input ",(0,n.jsx)(e.em,{children:"and"})," for failure with incorrect input.\nThese tests should be capable of being run locally with the Flow emulator, with no or minimal extra resources or configuration, and with a single command."]}),"\n",(0,n.jsx)(e.li,{children:"Each user story or workflow that uses the smart contracts should have an integration test that ensures that the series of steps required to complete it does so successfully with test data."}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Make sure you test all contracts - and the integration into your application extensively before proceeding to the mainnet.\nYou should aim to replicate all conditions as closely as possible to the usage patterns on mainnet."}),"\n",(0,n.jsx)(e.h2,{id:"writing-tests",children:"Writing Tests"}),"\n",(0,n.jsx)(e.p,{children:"There are official SDKs for Flow in both Go and JavaScript."}),"\n",(0,n.jsx)(e.p,{children:"In both cases, the code will need to deploy the contracts, configure accounts to interact with them and send transactions to them. It will then have to wait for the transactions to be sealed and check the results by catching exceptions, checking for events, and querying state using scripts."}),"\n",(0,n.jsx)(e.h3,{id:"go-tests",children:"Go Tests"}),"\n",(0,n.jsxs)(e.p,{children:["Tests in Go can be written using ",(0,n.jsx)(e.a,{href:"https://github.com/onflow/flow-go-sdk",children:"flow-go-sdk"})," and the go test command."]}),"\n",(0,n.jsxs)(e.p,{children:["You can find examples of Go tests in the following projects: ",(0,n.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/tree/master/lib/go/test",children:"flow-core-contracts"}),", ",(0,n.jsx)(e.a,{href:"https://github.com/onflow/flow-nft/tree/master/lib/go/test",children:"flow-nft"}),", ",(0,n.jsx)(e.a,{href:"https://github.com/onflow/flow-ft/tree/master/lib/go/test",children:"flow-ft"}),"."]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Note"}),": These tests are tied to the emulator but can be refactored to run on testnet"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"javascript-tests",children:"JavaScript Tests"}),"\n",(0,n.jsxs)(e.p,{children:["Tests in JavaScript can be written using ",(0,n.jsx)(e.a,{href:"https://github.com/onflow/flow-js-testing",children:"flow-js-testing"}),"."]})]})}const d=function(t){void 0===t&&(t={});const{wrapper:e}=Object.assign({},(0,o.ah)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(h,t)})):h(t)}}}]);