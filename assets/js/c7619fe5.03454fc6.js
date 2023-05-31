"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[66632],{50717:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>l});s(67294);var a=s(85893),c=s(11151);const n={title:"Cadence Security Best Practices",sidebar_position:7},i=void 0,r={unversionedId:"cadence/security-best-practices",id:"version-stable/cadence/security-best-practices",title:"Cadence Security Best Practices",description:"This is an opinionated list of best practices Cadence developers should follow to write more secure Cadence code.",source:"@site/versioned_docs/version-stable/cadence/security-best-practices.mdx",sourceDirName:"cadence",slug:"/cadence/security-best-practices",permalink:"/docs/cadence/security-best-practices",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/cadence/security-best-practices.mdx",tags:[],version:"stable",lastUpdatedBy:"darkdrag00n",lastUpdatedAt:1685551263,formattedLastUpdatedAt:"May 31, 2023",sidebarPosition:7,frontMatter:{title:"Cadence Security Best Practices",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Anti-Patterns",permalink:"/docs/cadence/anti-patterns"},next:{title:"Guide for Solidity developers",permalink:"/docs/cadence/solidity-to-cadence"}},o={},l=[{value:"References",id:"references",level:2},{value:"Account Storage",id:"account-storage",level:2},{value:"Auth Accounts",id:"auth-accounts",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Types",id:"types",level:2},{value:"Access Control",id:"access-control",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",code:"code"},(0,c.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This is an opinionated list of best practices Cadence developers should follow to write more secure Cadence code."}),"\n",(0,a.jsxs)(t.p,{children:["Some practices listed below might overlap with advice in the ",(0,a.jsx)(t.a,{href:"/docs/cadence/design-patterns",children:"Cadence Anti-Patterns"})," section, which is a recommended read as well."]}),"\n",(0,a.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/cadence/language/references",children:"References"})," are ephemeral values and cannot be stored. If persistence is required, store a capability and borrow it when needed."]}),"\n",(0,a.jsxs)(t.p,{children:["Authorized references (references with the ",(0,a.jsx)(t.code,{children:"auth"})," keyword) allow downcasting, e.g. a restricted type to its unrestricted type and should only be used in some specific cases."]}),"\n",(0,a.jsx)(t.p,{children:"When exposing functionality, provide the least access necessary. Do not use authorized references, as they can be downcasted, potentially allowing a user to gain access to supposedly restricted functionality. For example, the fungible token standard provides an interface to get the balance of a vault, without exposing the withdrawal functionality."}),"\n",(0,a.jsx)(t.p,{children:"Be aware that the subtype or unrestricted type could expose functionality that was not intended to be exposed. Do not use authorized references when exposing functionality. For example, the fungible token standard provides an interface to get the balance of a vault, without exposing the withdrawal functionality."}),"\n",(0,a.jsx)(t.h2,{id:"account-storage",children:"Account Storage"}),"\n",(0,a.jsxs)(t.p,{children:["Don't trust a users\u2019 ",(0,a.jsx)(t.a,{href:"/docs/cadence/language/accounts#account-storage",children:"account storage"}),". Users have full control over their data and may reorganize it as they see fit. Users may store values in any path, so paths may store values of \u201cunexpected\u201d types. These values may be instances of types in contracts that the user deployed."]}),"\n",(0,a.jsxs)(t.p,{children:["Always ",(0,a.jsx)(t.a,{href:"/docs/cadence/language/capability-based-access-control",children:"borrow"})," with the specific type that is expected. Or, check if the value is an instance of the expected type."]}),"\n",(0,a.jsx)(t.h2,{id:"auth-accounts",children:"Auth Accounts"}),"\n",(0,a.jsxs)(t.p,{children:["Access to an ",(0,a.jsx)(t.code,{children:"AuthAccount"})," gives full access to the account's storage, keys, and contracts. Therefore, ",(0,a.jsx)(t.a,{href:"/docs/cadence/anti-patterns#avoid-using-authaccount-as-a-function-parameter",children:"avoid using AuthAccount"})," as a function parameter unless absolutely necessary."]}),"\n",(0,a.jsxs)(t.p,{children:["It is preferable to use capabilities over direct ",(0,a.jsx)(t.code,{children:"AuthAccount"})," storage when exposing account data. Using capabilities allows the revocation of access by unlinking and limits the access to a single value with a certain set of functionality \u2013 access to an ",(0,a.jsx)(t.code,{children:"AuthAccount"})," gives full access to the whole storage, as well as key and contract management."]}),"\n",(0,a.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,a.jsxs)(t.p,{children:["Don\u2019t store anything under the ",(0,a.jsx)(t.a,{href:"/docs/cadence/language/capability-based-access-control",children:"public capability storage"})," unless strictly required. Anyone can access your public capability using ",(0,a.jsx)(t.code,{children:"AuthAccount.getCapability"}),". If something needs to be stored under ",(0,a.jsx)(t.code,{children:"/public/"}),", make sure only read functionality is provided by restricting its type using either a resource interface or struct interface."]}),"\n",(0,a.jsxs)(t.p,{children:["When linking a capability, the link might already be present. In that case, Cadence will not panic with a runtime error but the link function will return ",(0,a.jsx)(t.code,{children:"nil"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["It is a good practice to check if the link already exists with ",(0,a.jsx)(t.code,{children:"getLinkTarget"})," before creating it. This function will return ",(0,a.jsx)(t.code,{children:"nil"})," if the link does not exist."]}),"\n",(0,a.jsxs)(t.p,{children:["If it is necessary to handle the case where borrowing a capability might fail, the ",(0,a.jsx)(t.code,{children:"account.check"})," function can be used to verify that the target exists and has a valid type."]}),"\n",(0,a.jsx)(t.p,{children:"Ensure capabilities cannot be accessed by unauthorized parties. For example, capabilities should not be accessible through a public field, including public dictionaries or arrays. Exposing a capability in such a way allows anyone to borrow it and perform all actions that the capability allows."}),"\n",(0,a.jsx)(t.h2,{id:"transactions",children:"Transactions"}),"\n",(0,a.jsxs)(t.p,{children:["Audits of Cadence code should also include ",(0,a.jsx)(t.a,{href:"/docs/cadence/language/transactions",children:"transactions"}),", as they may contain arbitrary code, just, like in contracts. In addition, they are given full access to the accounts of the transaction\u2019s signers, i.e. the transaction is allowed to manipulate the signers\u2019 account storage, contracts, and keys."]}),"\n",(0,a.jsxs)(t.p,{children:["Signing a transaction gives access to the ",(0,a.jsx)(t.code,{children:"AuthAccount"}),", i.e. full access to the account\u2019s storage, keys, and contracts."]}),"\n",(0,a.jsx)(t.p,{children:"Do not blindly sign a transaction. The transaction could for example change deployed contracts by upgrading them with malicious statements, revoking or adding keys, transferring resources from storage, etc."}),"\n",(0,a.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.a,{href:"/docs/cadence/language/restricted-types",children:"restricted types and interfaces"}),". Always use the most specific type possible, following the principle of least privilege. Types should always be as restrictive as possible, especially for resource types."]}),"\n",(0,a.jsx)(t.p,{children:"If given a less-specific type, cast to the more specific type that is expected. For example, when implementing the fungible token standard, a user may deposit any fungible token, so the implementation should cast to the expected concrete fungible token type."}),"\n",(0,a.jsx)(t.h2,{id:"access-control",children:"Access Control"}),"\n",(0,a.jsxs)(t.p,{children:["Declaring a field as ",(0,a.jsx)(t.a,{href:"/docs/cadence/language/access-control",children:(0,a.jsx)(t.code,{children:"pub/access(all)"})})," only protects from replacing the field\u2019s value, but the value itself can still be mutated if it is mutable. Remember that containers, like dictionaries, and arrays, are mutable."]}),"\n",(0,a.jsx)(t.p,{children:"Prefer non-public access to a mutable state. That state may also be nested. For example, a child may still be mutated even if its parent exposes it through a field with non-settable access."}),"\n",(0,a.jsxs)(t.p,{children:["Do not use the ",(0,a.jsx)(t.code,{children:"pub/access(all)"})," modifier on fields and functions unless necessary. Prefer ",(0,a.jsx)(t.code,{children:"priv/access(self)"}),", or ",(0,a.jsx)(t.code,{children:"access(contract)"})," and ",(0,a.jsx)(t.code,{children:"access(account)"})," when other types in the contract or account need to have access."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}}}]);