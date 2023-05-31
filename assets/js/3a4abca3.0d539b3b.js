"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4196],{79544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});n(67294);var a=n(85893),o=n(11151);const s={title:"Smart Contracts for Flow Dapps",sidebar_title:"Smart Contracts"},i=void 0,r={unversionedId:"tutorials/smart-contracts",id:"tutorials/smart-contracts",title:"Smart Contracts for Flow Dapps",description:"At its core, a decentralized application is defined by the smart contracts it uses on the blockchain. Rather than relying on centralized application servers and databases, dapps model their core application logic using smart contracts, often referred to as the \u201con-chain\u201d code.",source:"@site/docs/tutorials/smart-contracts.md",sourceDirName:"tutorials",slug:"/tutorials/smart-contracts",permalink:"/docs/next/tutorials/smart-contracts",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tutorials/smart-contracts.md",tags:[],version:"current",lastUpdatedBy:"darkdrag00n",lastUpdatedAt:1685551263,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"Smart Contracts for Flow Dapps",sidebar_title:"Smart Contracts"},sidebar:"tutorialSidebar",previous:{title:"Mainnet Deployment Guidelines",permalink:"/docs/next/tutorials/mainnet-deployment"},next:{title:"Testnet Deployment Guidelines",permalink:"/docs/next/tutorials/testnet-deployment"}},l={},c=[{value:"How to Write Smart Contracts on Flow",id:"how-to-write-smart-contracts-on-flow",level:2},{value:"Onboard to Cadence",id:"onboard-to-cadence",level:3},{value:"Learn Through Examples",id:"learn-through-examples",level:3},{value:"Configure Your Local Environment",id:"configure-your-local-environment",level:3},{value:"Storing Data on Flow",id:"storing-data-on-flow",level:2},{value:"What does your data need to represent?",id:"what-does-your-data-need-to-represent",level:3},{value:"Storage Limits &amp; Fees",id:"storage-limits--fees",level:3},{value:"External Storage Networks",id:"external-storage-networks",level:3},{value:"Using Existing Standards",id:"using-existing-standards",level:2},{value:"Non-Fungible Tokens (NFTs)",id:"non-fungible-tokens-nfts",level:3},{value:"NFT Sales and Trading",id:"nft-sales-and-trading",level:3},{value:"Fungible Tokens",id:"fungible-tokens",level:3}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",br:"br"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["At its core, a decentralized application is defined by the ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Smart_contract",children:"smart contracts"})," it uses on the blockchain. Rather than relying on centralized application servers and databases, dapps model their core application logic using smart contracts, often referred to as the \u201con-chain\u201d code."]}),"\n",(0,a.jsx)(t.p,{children:"It is therefore helpful to develop a clear model for your dapp that takes into account the data and logic that will exist in your smart contracts. In particular, it is important to differentiate between the parts of your dapp that must live on chain and those that should live off chain."}),"\n",(0,a.jsx)(t.h2,{id:"how-to-write-smart-contracts-on-flow",children:"How to Write Smart Contracts on Flow"}),"\n",(0,a.jsxs)(t.p,{children:["Smart contracts on the Flow blockchain are implemented in ",(0,a.jsx)(t.a,{href:"https://github.com/onflow/cadence",children:"Cadence"}),", a resource-oriented programming language specifically designed for smart contract development."]}),"\n",(0,a.jsx)(t.h3,{id:"onboard-to-cadence",children:"Onboard to Cadence"}),"\n",(0,a.jsxs)(t.p,{children:["To get started with Cadence, we recommended covering the introductory tutorials available in the ",(0,a.jsx)(t.a,{href:"https://play.onflow.org/",children:"Flow Playground"}),", a simple web IDE designed for learning Cadence."]}),"\n",(0,a.jsx)(t.h3,{id:"learn-through-examples",children:"Learn Through Examples"}),"\n",(0,a.jsxs)(t.p,{children:["After learning the basics, check out the ",(0,a.jsx)(t.a,{href:"./kitty-items",children:"Kitty Items sample dapp"})," to see Cadence contracts being used by a real web application. Inspired by CryptoKitties, Kitty Items demonstrates a simple NFT application that supports NFT minting, sales, and peer-to-peer trading."]}),"\n",(0,a.jsx)(t.h3,{id:"configure-your-local-environment",children:"Configure Your Local Environment"}),"\n",(0,a.jsx)(t.p,{children:"To build confidently, you will want to set up the appropriate local environment and have an adequate test suite to ensure your smart contracts operate as intended. To do this, familiarize yourself with the following tools:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../tooling/flow-cli/",children:"Flow CLI"}),": A utility to directly interact with the chain and manage accounts and contracts."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../tooling/emulator/",children:"Flow Emulator"}),": A lightweight server that simulates the Flow blockchain (strongly recommended during development)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/onflow/fcl-dev-wallet/",children:"FCL Dev Wallet"}),": A utility to simulate user wallets in development."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../tooling/vscode-extension/",children:"Visual Studio Code Extension"}),": An IDE integration for developing smart contracts."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/onflow/flow-js-testing",children:"JS Testing Framework"}),": A framework to test your smart contracts."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"storing-data-on-flow",children:"Storing Data on Flow"}),"\n",(0,a.jsx)(t.p,{children:"All dapps will store important data on the blockchain, and some more than others -- especially NFT dapps. You\u2019ll want to consider the following when storing data on the Flow blockchain."}),"\n",(0,a.jsx)(t.h3,{id:"what-does-your-data-need-to-represent",children:"What does your data need to represent?"}),"\n",(0,a.jsx)(t.p,{children:"Permanence is a key property of blockchains; users trust that the data they store will continue to exist for years to come, and this is a defining characteristic of assets like NFTs. Therefore, well-designed digital assets store the information necessary to retain their value without external dependencies."}),"\n",(0,a.jsx)(t.h3,{id:"storage-limits--fees",children:"Storage Limits & Fees"}),"\n",(0,a.jsxs)(t.p,{children:["However, there are practical constraints to storing data on a blockchain. Developer and user accounts must retain a small amount of FLOW tokens, known as the storage fee, for bytes of data stored in their accounts. The minimum storage fee will grant each account a minimum storage amount. If an account holds assets that demand more bytes of storage, the account will need to retain more FLOW tokens to increase the storage amount according to Flow's ",(0,a.jsx)(t.a,{href:"/docs/next/concepts/flow-token/concepts#fees",children:"fee schedule"}),". A more compact data model can keep storage needs down. ",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.br,{}),"\n","Furthermore, a single Flow transaction has a size limit of 4MB, which limits the rate at which large amounts of data can be transferred to the blockchain."]}),"\n",(0,a.jsx)(t.p,{children:"Lastly, a blockchain is not a content delivery network and therefore cannot serve media assets, such as videos, at the speeds expected by modern applications."}),"\n",(0,a.jsx)(t.p,{children:"For these reasons, it usually isn\u2019t practical to store large media assets such as videos and high-definition images on the Flow blockchain. Instead, consider using an external storage solution."}),"\n",(0,a.jsx)(t.h3,{id:"external-storage-networks",children:"External Storage Networks"}),"\n",(0,a.jsx)(t.p,{children:"Decentralized storage networks such as IPFS allow you to store large digital assets off chain, but without relying on centralized servers. Rather than saving an entire asset to the Flow blockchain, you can save the content hash (known as a CID on IPFS) on the blockchain and then store the source file off-chain. This way, users can verify that the media file matches the digital asset."}),"\n",(0,a.jsxs)(t.p,{children:["IPFS files can be uploaded via a pinning service such as Pinata; see their ",(0,a.jsx)(t.a,{href:"https://medium.com/pinata/how-to-create-nfts-like-nba-top-shot-with-flow-and-ipfs-701296944bf",children:"NFT tutorial"})," for an example of how to use Pinata with Flow."]}),"\n",(0,a.jsxs)(t.p,{children:["It\u2019s worth noting that IPFS files are served through ",(0,a.jsx)(t.a,{href:"https://docs.ipfs.io/concepts/ipfs-gateway/",children:"gateways"}),", many of which leverage caching to provide fast response times. Cloudflare provides a ",(0,a.jsx)(t.a,{href:"https://developers.cloudflare.com/distributed-web/ipfs-gateway",children:"public IPFS Gateway"}),", and Pinata also supports ",(0,a.jsx)(t.a,{href:"https://medium.com/pinata/announcing-dedicated-ipfs-gateways-60f599949ce",children:"dedicated gateways with custom domains"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"using-existing-standards",children:"Using Existing Standards"}),"\n",(0,a.jsx)(t.p,{children:"The Flow blockchain has existing smart contract standards for both fungible and non-fungible tokens that you should implement when building your contracts."}),"\n",(0,a.jsx)(t.h3,{id:"non-fungible-tokens-nfts",children:"Non-Fungible Tokens (NFTs)"}),"\n",(0,a.jsxs)(t.p,{children:["All NFTs on the Flow blockchain implement the ",(0,a.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/non-fungible-token",children:"NonFungibleToken"})," interface, allowing them to be compatible with wallets, marketplaces and other cross-app experiences."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/non-fungible-token",children:"Non-Fungible Token (NFT) contract interface"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"nft-sales-and-trading",children:"NFT Sales and Trading"}),"\n",(0,a.jsx)(t.p,{children:"Flow has a standard contract to facilitate both the direct sales and peer-to-peer trading of NFTs. The NFT storefront contract is useful for dapps that want to provide an NFT marketplace experience."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/onflow/nft-storefront",children:"NFT Storefront contract"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"fungible-tokens",children:"Fungible Tokens"}),"\n",(0,a.jsxs)(t.p,{children:["Fungible tokens (i.e. coins, currencies) on the Flow blockchain, including the default cryptocurrency token FLOW, implement the ",(0,a.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/fungible-token",children:"FungibleToken"})," interface."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/fungible-token",children:"Fungible Token contract interface"})}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}}}]);