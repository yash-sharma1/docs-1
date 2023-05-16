"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5571],{39306:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});n(67294);var l=n(85893),o=n(11151);const s={title:"Building blocks",description:"Learn about the key components of NFT marketplaces",sidebar_title:"Building blocks"},i=void 0,r={unversionedId:"tooling/nft-marketplace/building-blocks",id:"tooling/nft-marketplace/building-blocks",title:"Building blocks",description:"Learn about the key components of NFT marketplaces",source:"@site/docs/tooling/nft-marketplace/building-blocks.md",sourceDirName:"tooling/nft-marketplace",slug:"/tooling/nft-marketplace/building-blocks",permalink:"/docs/tooling/nft-marketplace/building-blocks",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tooling/nft-marketplace/building-blocks.md",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1684254567,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"Building blocks",description:"Learn about the key components of NFT marketplaces",sidebar_title:"Building blocks"},sidebar:"tutorialSidebar",previous:{title:"Best practices",permalink:"/docs/tooling/nft-marketplace/best-practices"},next:{title:"Handling accounts",permalink:"/docs/tooling/nft-marketplace/handling-accounts"}},a={},c=[{value:"Coming from Ethereum",id:"coming-from-ethereum",level:2}];function d(t){const e=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),t.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Following are the basic building blocks for any NFT marketplace solution on the Flow blockchain. Throughout the guide, these will be referred to."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/onflow/flow-nft",children:"NFT Standard"}),": Every NFT minted on Flow should follow this standard."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/onflow/flow-ft",children:"Fungible Token Standard"}),": All fungible tokens on Flow follow this standard. NFTs purchased on an NFT marketplace will be paid for using a fungible token in many scenarios."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"/docs/concepts/flow-token/",children:"FLOW Token"}),": Native currency of the Flow blockchain used to pay for the transaction fees. NFT buyers can use FLOW tokens to buy NFTs in a marketplace."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/onflow/flow-nft/#nft-metadata",children:"NFT Metadata Standard"}),": A generalized framework for NFTs on Flow to expose their metadata. The framework described already has ",(0,l.jsx)(e.a,{href:"https://github.com/onflow/flow-nft/#list-of-common-views",children:"a mechanism specified to render the basic representation"})," of an NFT."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/dapperlabs/nft-catalog",children:"Flow NFT Catalog"}),": NFT marketplaces can use this on-chain registry of NFTs to obtain the list of NFTs owned by an account and obtain display metadata for those NFTs and their collections. Developers should use the ",(0,l.jsx)(e.a,{href:"https://github.com/dapperlabs/nft-catalog#using-the-catalog-for-marketplaces-and-other-nft-applications",children:"example scripts"})," in conjunction with the ",(0,l.jsx)(e.a,{href:"https://github.com/onflow/flow-nft/#nft-metadata",children:"NFT Metadata Standard"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/onflow/nft-storefront",children:"NFT Storefront Contract"}),": \u200b\u200bContract used by almost all Flow NFT marketplaces for creating NFT sale listings. Note that you can directly use the version of this contract already deployed on the Mainnet."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/onflow/fcl-js",children:"FCL (Flow Client Library)"}),": This library is like web3.js in Ethereum. Application frontend will use FCL to interact with user wallets and the blockchain. JS-based backends of applications can also use it to interact with the blockchain."]}),"\n",(0,l.jsxs)(e.li,{children:["Flow SDKs: Multiple SDKs are available in different programming languages (",(0,l.jsx)(e.a,{href:"/docs/tooling/flow-go-sdk/",children:"Go"}),", ",(0,l.jsx)(e.a,{href:"https://github.com/the-nft-company/flow-jvm-sdk",children:"Java"}),") for Flow application backends to interact with the blockchain."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"coming-from-ethereum",children:"Coming from Ethereum"}),"\n",(0,l.jsx)(e.p,{children:"If you are coming from Ethereum, the following list shows corresponding modules and services available on Flow."}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Resource"}),(0,l.jsx)(e.th,{children:"Ethereum"}),(0,l.jsx)(e.th,{children:"Flow"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Smart Contract Programming Language"}),(0,l.jsx)(e.td,{children:"Solidity"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.a,{href:"../../cadence",children:"Cadence"})})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Fungible Token Standard"}),(0,l.jsx)(e.td,{children:"ERC-20"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.a,{href:"https://github.com/onflow/flow-ft",children:"Flow Fungible Token Standard"})})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"NFT Standard"}),(0,l.jsx)(e.td,{children:"ERC-721/ERC-1155"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.a,{href:"https://github.com/onflow/flow-nft",children:"Flow NFT Token Standard"})})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"NFT Metadata Standard"}),(0,l.jsx)(e.td,{children:"ERC-721"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.a,{href:"https://github.com/onflow/flow-nft/#nft-metadata",children:"Flow NFT Metadata Standard"})})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Native Crypto Currency"}),(0,l.jsx)(e.td,{children:"ETH"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.a,{href:"../../concepts/flow-token",children:"FLOW"})})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Wallet Interaction Library"}),(0,l.jsx)(e.td,{children:"web3.js"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.a,{href:"https://github.com/onflow/fcl-js",children:"Flow Client Library (FCL)"})})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Blockchain Interaction SDK"}),(0,l.jsx)(e.td,{children:"web3.js"}),(0,l.jsxs)(e.td,{children:[(0,l.jsx)(e.a,{href:"https://github.com/onflow/fcl-js",children:"Flow Client Library (FCL)"}),", ",(0,l.jsx)(e.a,{href:"https://github.com/onflow/flow-go-sdk",children:"Flow Go SDK"}),", and ",(0,l.jsx)(e.a,{href:"https://github.com/onflow/flip-fest/blob/main/winners.md",children:"many others"})]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Block Explorer"}),(0,l.jsx)(e.td,{children:"Etherscan"}),(0,l.jsx)(e.td,{children:"Flowscan"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Node Service Providers"}),(0,l.jsx)(e.td,{children:"Infura"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.a,{href:"https://flowscan.org/staking/nodes",children:"Official Flow Access Nodes"})})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Wallets"}),(0,l.jsx)(e.td,{children:"Metamask, WalletConnect"}),(0,l.jsxs)(e.td,{children:[(0,l.jsx)(e.a,{href:"https://portto.com/",children:"Blocto"}),", ",(0,l.jsx)(e.a,{href:"https://www.meetdapper.com/",children:"Dapper Wallet"})]})]})]})]})]})}const h=function(t){void 0===t&&(t={});const{wrapper:e}=Object.assign({},(0,o.ah)(),t.components);return e?(0,l.jsx)(e,Object.assign({},t,{children:(0,l.jsx)(d,t)})):d(t)}}}]);