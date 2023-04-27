"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?l.createElement(k,r(r({ref:t},c),{},{components:n})):l.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const i={title:"Get a Transaction with the Flow CLI",sidebar_title:"Get a Transaction",description:"How to get a Flow transaction from the command line"},r=void 0,o={unversionedId:"tools/flow-cli/get-transactions",id:"tools/flow-cli/get-transactions",title:"Get a Transaction with the Flow CLI",description:"How to get a Flow transaction from the command line",source:"@site/docs/tools/flow-cli/get-transactions.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/get-transactions",permalink:"/tools/flow-cli/get-transactions",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682618386,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"Get a Transaction with the Flow CLI",sidebar_title:"Get a Transaction",description:"How to get a Flow transaction from the command line"},sidebar:"tutorialSidebar",previous:{title:"Get Network Status",permalink:"/tools/flow-cli/get-status"},next:{title:"Flow CLI",permalink:"/tools/flow-cli/"}},u={},s=[{value:"Example Usage",id:"example-usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Transaction ID",id:"transaction-id",level:3},{value:"Flags",id:"flags",level:2},{value:"Include Fields",id:"include-fields",level:3},{value:"Wait for Seal",id:"wait-for-seal",level:3},{value:"Exclude Fields",id:"exclude-fields",level:3},{value:"Host",id:"host",level:3},{value:"Network Key",id:"network-key",level:3},{value:"Network",id:"network",level:3},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3},{value:"Log",id:"log",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Flow CLI provides a command to fetch a transaction\nthat was previously submitted to an Access API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow transactions get <tx_id>\n")),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> flow transactions get 40bc4b100c1930c61381c22e0f4c10a7f5827975ee25715527c1061b8d71e5aa --network mainnet \n\nStatus      \u2705 SEALED\nID      40bc4b100c1930c61381c22e0f4c10a7f5827975ee25715527c1061b8d71e5aa\nPayer       18eb4ee6b3c026d2\nAuthorizers [18eb4ee6b3c026d2]\n\nProposal Key:   \n    Address 18eb4ee6b3c026d2\n    Index   11\n    Sequence    17930\n\nPayload Signature 0: 18eb4ee6b3c026d2\nPayload Signature 1: 18eb4ee6b3c026d2\nEnvelope Signature 0: 18eb4ee6b3c026d2\nSignatures (minimized, use --include signatures)\n\nEvents:      \n    Index   0\n    Type    A.1654653399040a61.FlowToken.TokensWithdrawn\n    Tx ID   40bc4b100c1930c61381c22e0f4c10a7f5827975ee25715527c1061b8d71e5aa\n    Values\n        - amount (UFix64):  0.00100000\n        - from ({}?):           18eb4ee6b3c026d2\n\n    Index   1\n    Type    A.1654653399040a61.FlowToken.TokensDeposited\n    Tx ID   40bc4b100c1930c61381c22e0f4c10a7f5827975ee25715527c1061b8d71e5aa\n    Values\n        - amount (UFix64):  0.00100000\n        - to ({}?):         5068e27f275c546c\n\n    Index   2\n    Type    A.18eb4ee6b3c026d2.PrivateReceiverForwarder.PrivateDeposit\n    Tx ID   40bc4b100c1930c61381c22e0f4c10a7f5827975ee25715527c1061b8d71e5aa\n    Values\n        - amount (UFix64):  0.00100000\n        - to ({}?):         5068e27f275c546c\n\n\n\nCode (hidden, use --include code)\n\nPayload (hidden, use --include payload)\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"transaction-id"},"Transaction ID"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"<tx_id>")),(0,a.kt)("li",{parentName:"ul"},"Valid Input: transaction ID.")),(0,a.kt)("p",null,"The first argument is the ID (hash) of the transaction."),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("h3",{id:"include-fields"},"Include Fields"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--include")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"code"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"payload"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"signatures"))),(0,a.kt)("p",null,"Specify fields to include in the result output. Applies only to the text output."),(0,a.kt)("h3",{id:"wait-for-seal"},"Wait for Seal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--sealed")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Indicate whether to wait for the transaction to be sealed\nbefore displaying the result."),(0,a.kt)("h3",{id:"exclude-fields"},"Exclude Fields"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--exclude")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"events"))),(0,a.kt)("p",null,"Specify fields to exclude from the result output. Applies only to the text output."),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--host")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: an IP address or hostname."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3569")," (Flow Emulator)")),(0,a.kt)("p",null,"Specify the hostname of the Access API that will be\nused to execute the command. This flag overrides\nany host defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--network")," flag."),(0,a.kt)("h3",{id:"network-key"},"Network Key"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network-key")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: A valid network public key of the host in hex string format")),(0,a.kt)("p",null,"Specify the network public key of the Access API that will be\nused to create a secure GRPC client when executing the command."),(0,a.kt)("h3",{id:"network"},"Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-n")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: the name of a network defined in the configuration (",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"),")"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"emulator"))),(0,a.kt)("p",null,"Specify which network you want the command to use for execution."),(0,a.kt)("h3",{id:"filter"},"Filter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--filter")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a case-sensitive name of the result property.")),(0,a.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--output")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-o")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"inline"))),(0,a.kt)("p",null,"Specify the format of the command results."),(0,a.kt)("h3",{id:"save"},"Save"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--save")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-s")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem.")),(0,a.kt)("p",null,"Specify the filename where you want the result to be saved"),(0,a.kt)("h3",{id:"log"},"Log"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--log")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-l")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"info"))),(0,a.kt)("p",null,"Specify the log level. Control how much output you want to see during command execution."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-f")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"))),(0,a.kt)("p",null,"Specify the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow.json")," configuration file.\nYou can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times to merge\nseveral configuration files."),(0,a.kt)("h3",{id:"version-check"},"Version Check"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}d.isMDXComponent=!0}}]);