"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={title:"Machine Accounts for Existing Node Operators",sidebar_title:"Machine Accounts for Existing Node Operators",description:"Instructions for existing Node Operators to follow to create a machine account for their collection or consensus nodes."},r=void 0,c={unversionedId:"nodes/node-operation/machine-existing-operator",id:"nodes/node-operation/machine-existing-operator",title:"Machine Accounts for Existing Node Operators",description:"Instructions for existing Node Operators to follow to create a machine account for their collection or consensus nodes.",source:"@site/docs/nodes/node-operation/machine-existing-operator.mdx",sourceDirName:"nodes/node-operation",slug:"/nodes/node-operation/machine-existing-operator",permalink:"/nodes/node-operation/machine-existing-operator",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Machine Accounts for Existing Node Operators",sidebar_title:"Machine Accounts for Existing Node Operators",description:"Instructions for existing Node Operators to follow to create a machine account for their collection or consensus nodes."},sidebar:"tutorialSidebar",previous:{title:"Leased FLOW Account Setup",permalink:"/nodes/node-operation/leased-account-setup"},next:{title:"Monitoring Node Health",permalink:"/nodes/node-operation/monitoring-nodes"}},s={},l=[{value:"Downloading Bootstrap Utility",id:"downloading-bootstrap-utility",level:2},{value:"Generate Machine Account key",id:"generate-machine-account-key",level:2},{value:"Create Machine Account",id:"create-machine-account",level:2},{value:"Finalize Machine Account setup",id:"finalize-machine-account-setup",level:2},{value:"Verify Machine Account Setup",id:"verify-machine-account-setup",level:3}],d=(u="Callout",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const p={toc:l},h="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/staking/epoch-preparation/"},"Flow Epoch Preparation Protocol")," requires that\n",(0,a.kt)("inlineCode",{parentName:"p"},"collection")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus")," nodes use an automated ",(0,a.kt)("a",{parentName:"p",href:"/staking/qc-dkg/#machine-accounts"},"machine account"),"\nto participate in important processes required to start the next epoch. (QC and DKG, respectively)"),(0,a.kt)("p",null,"Starting on Thursday, August 26th 2021, all collector and consensus nodes who register with Flow Port will\nautomatically create and initialize this machine account as part of their node registration."),(0,a.kt)("p",null,"If you have an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"collection")," node that you registered with Flow Port before Thursday August 26th,\nyou will need to create this Machine Account manually in order to participate in epochs.\nYou will need to create one Machine Account for each ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"collection")," node that you operate."),(0,a.kt)("p",null,"This guide will walk you through creating a Machine Account and getting it set up."),(0,a.kt)(d,{type:"warning",mdxType:"Callout"},"During this process you will generate a new private key which will have sole control over your machine account. This private key will be stored on the machine you use to run your node, alongside your staking and networking keys. Loss of any of these keys (staking, networking, or machine account) will require you to un-stake your tokens, start a completely new node, and register the new node to continue participating in the Flow network, which takes multiple weeks."),(0,a.kt)("h2",{id:"downloading-bootstrap-utility"},"Downloading Bootstrap Utility"),(0,a.kt)(d,{type:"warning",mdxType:"Callout"},"If you have downloaded the bootstrapping kit previously, ensure that you do this step again to get the latest copy of the bootstrapping kit since there have been significant changes to it."),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-bootstrap/#download-the-bootstrapping-kit"},"here"),"\nto download the latest version of the bootstrapping kit, then return to this page."),(0,a.kt)("h2",{id:"generate-machine-account-key"},"Generate Machine Account key"),(0,a.kt)("p",null,"You will need to generate a Machine account private key using the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," utility."),(0,a.kt)(d,{type:"warning",mdxType:"Callout"},(0,a.kt)("p",null,"  Ensure you run the following commands on the machine you use to run your node software.\nThe bootstrap directory passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"-o")," flag must be the same bootstrap directory used by your node.\nThe default location is ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/flow/bootstrap"),", but double-check your setup before continuing.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=GenerateMachineAccountKey"},"$./boot-tools/bootstrap machine-account-key -o ./bootstrap\n<nil> INF generated machine account private key\n<nil> INF encoded machine account public key for entry to Flow Port machineAccountPubKey=f847b84031d9f47b88435e4ea828310529d2c60e806395da50d3dd0dd2f32e2de336fb44eb06488645673850897d7cc017701d7e6272a1ab7f2f125aede46363e973444a02038203e8\n<nil> INF wrote file bootstrap/private-root-information/private-node-info_6f6e98c983dbd9aa69320452949b81abeab2ac591a247f55f19f4dbf0b477d26/node-machine-account-key.priv.json\n\n$tree ./bootstrap/\n./bootstrap\n\u251c\u2500\u2500 private-root-information\n\u2502   \u2514\u2500\u2500 private-node-info_ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9\n\u2502       \u251c\u2500\u2500 node-info.priv.json\n\u2502       \u2514\u2500\u2500 node-machine-account-key.priv.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 secretsdb-key\n\u2514\u2500\u2500 public-root-information\n    \u251c\u2500\u2500 node-id\n    \u2514\u2500\u2500 node-info.pub.ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9.json\n\n3 directories, 4 files\n")),(0,a.kt)("h2",{id:"create-machine-account"},"Create Machine Account"),(0,a.kt)("p",null,"You will now need to copy the Machine account public key displayed in the terminal output and\nhead over to ",(0,a.kt)("a",{parentName:"p",href:"/flow-port/staking-guide/#existing-node-operators"},"Flow Port")," to submit a transaction to create a Machine Account.\nFor example, from the example above, we would copy ",(0,a.kt)("inlineCode",{parentName:"p"},"f847...")," from this line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=Example"},"<nil> INF encoded machine account public key for entry to Flow Port machineAccountPubKey=f847b84031d9f47b88435e4ea828310529d2c60e806395da50d3dd0dd2f32e2de336fb44eb06488645673850897d7cc017701d7e6272a1ab7f2f125aede46363e973444a02038203e8\n")),(0,a.kt)("p",null,"This process will create your machine account for you and show you your machine account's address, which you will need to save for the next step."),(0,a.kt)("h2",{id:"finalize-machine-account-setup"},"Finalize Machine Account setup"),(0,a.kt)("p",null,"You will now need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," utility to run ",(0,a.kt)("inlineCode",{parentName:"p"},"machine-account")," with the created address to finalize the set up of your Machine account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./boot-tools/bootstrap machine-account --address ${YOUR_MACHINE_ACCOUNT_ADDRESS} -o ./bootstrap\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=Example"},"$./boot-tools/bootstrap machine-account --address 0x1de23de44985c7e7 -o ./bootstrap\n<nil> INF read machine account private key json\n<nil> DBG encoded public machine account key machineAccountPubKey=2743786d1ff1bf7d7026d693a774210eaa54728343859baab62e2df7f71a370651f4c7fd239d07af170e484eedd4f3c2df47103f6c39baf2eb2a50f67bbcba6a\n<nil> INF wrote file bootstrap/private-root-information/private-node-info_6f6e98c983dbd9aa69320452949b81abeab2ac591a247f55f19f4dbf0b477d26/node-machine-account-info.priv.json\n\n$tree ./bootstrap/\n./bootstrap\n\u251c\u2500\u2500 private-root-information\n\u2502   \u2514\u2500\u2500 private-node-info_d60bd55ee616c5c297cae1d5cfb7f65e7e04014d9c4abe595af2fd83f3cfe160\n\u2502       \u251c\u2500\u2500 node-info.priv.json\n\u2502       \u251c\u2500\u2500 node-machine-account-info.priv.json\n\u2502       \u2514\u2500\u2500 node-machine-account-key.priv.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 secretsdb-key\n\u2514\u2500\u2500 public-root-information\n    \u251c\u2500\u2500 node-id\n    \u2514\u2500\u2500 node-info.pub.d60bd55ee616c5c297cae1d5cfb7f65e7e04014d9c4abe595af2fd83f3cfe160.json\n\n3 directories, 5 files\n")),(0,a.kt)("p",null,"After running this step, you should see the ",(0,a.kt)("inlineCode",{parentName:"p"},"node-machine-account-info.priv.json")," file in your ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," directory as shown above."),(0,a.kt)("h3",{id:"verify-machine-account-setup"},"Verify Machine Account Setup"),(0,a.kt)("p",null,"After finalizing your machine account setup, you should verify its correctness with the ",(0,a.kt)("inlineCode",{parentName:"p"},"check-machine-account")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=CheckMachineAccount"},"$ ./boot-tools/bootstrap check-machine-account --access-address access.mainnet.nodes.onflow.org:9000 -o ./bootstrap\n<nil> DBG read machine account info from disk hash_algo=SHA3_256 key_index=0 machine_account_address=0x284463aa6e25877c machine_account_pub_key=f847b84051bad4512101640772bf5e05e8a49868d92eaf9ebed41030881d95485769afd28653c5c53216cdcda4554384bb3ff6396a2ac04842422d55f0562496ad8d952802038203e8 signing_algo=ECDSA_P256\n<nil> DBG checking machine account configuration... machine_account_address=0x284463aa6e25877c role=consensus\n<nil> DBG machine account balance: 0.10000000\n<nil> INF \ud83e\udd16 machine account is configured correctly\n")),(0,a.kt)("p",null,"This command will detect and provide information about common misconfigurations, or confirm that the machine account is configured correctly."))}f.isMDXComponent=!0}}]);