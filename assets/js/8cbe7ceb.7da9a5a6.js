"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Access control"},l=void 0,c={unversionedId:"cadence/language/access-control",id:"cadence/language/access-control",title:"Access control",description:"Access control allows making certain parts of the program accessible/visible",source:"@site/docs/cadence/language/access-control.md",sourceDirName:"cadence/language",slug:"/cadence/language/access-control",permalink:"/cadence/language/access-control",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Access control"},sidebar:"tutorialSidebar",previous:{title:"The Cadence Programming Language",permalink:"/cadence/language/"},next:{title:"Accounts",permalink:"/cadence/language/accounts"}},o={},s=[],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Access control allows making certain parts of the program accessible/visible\nand making other parts inaccessible/invisible."),(0,r.kt)("p",null,"In Flow and Cadence, there are two types of access control:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access control on objects in account storage using capability security."),(0,r.kt)("p",{parentName:"li"},"Within Flow, a caller is not able to access an object\nunless it owns the object or has a specific reference to that object.\nThis means that nothing is truly public by default.\nOther accounts can not read or write the objects in an account\nunless the owner of the account has granted them access\nby providing references to the objects.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access control within contracts and objects\nusing ",(0,r.kt)("inlineCode",{parentName:"p"},"pub")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"access")," keywords."),(0,r.kt)("p",{parentName:"li"},"For the explanations of the following keywords, we assume that\nthe defining type is either a contract, where capability security\ndoesn't apply, or that the caller would have valid access to the object\ngoverned by capability security."))),(0,r.kt)("p",null,"The high-level reference-based security (point 1 above)\nwill be covered in a later section."),(0,r.kt)("p",null,"Top-level declarations\n(variables, constants, functions, structures, resources, interfaces)\nand fields (in structures, and resources) are always only able to be written\nto and mutated (modified, such as by indexed assignment or methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"append"),")\nin the scope where it is defined (self)."),(0,r.kt)("p",null,"There are four levels of access control defined in the code that specify where\na declaration can be accessed or called."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Public")," or ",(0,r.kt)("strong",{parentName:"p"},"access(all)")," means the declaration\nis accessible/visible in all scopes."),(0,r.kt)("p",{parentName:"li"},"This includes the current scope, inner scopes, and the outer scopes."),(0,r.kt)("p",{parentName:"li"},"For example, a public field in a type can be accessed using the access syntax\non an instance of the type in an outer scope.\nThis does not allow the declaration to be publicly writable though."),(0,r.kt)("p",{parentName:"li"},"An element is made publicly accessible / by any code\nby using the ",(0,r.kt)("inlineCode",{parentName:"p"},"pub")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"access(all)")," keywords.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"access(account)")," means the declaration is only accessible/visible in the\nscope of the entire account where it is defined. This means that\nother contracts in the account are able to access it,"),(0,r.kt)("p",{parentName:"li"},"An element is made accessible by code in the same account (e.g. other contracts)\nby using the ",(0,r.kt)("inlineCode",{parentName:"p"},"access(account)")," keyword.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"access(contract)")," means the declaration is only accessible/visible in the\nscope of the contract that defined it. This means that other types\nand functions that are defined in the same contract can access it,\nbut not other contracts in the same account."),(0,r.kt)("p",{parentName:"li"},"An element is made accessible by code in the same contract\nby using the ",(0,r.kt)("inlineCode",{parentName:"p"},"access(contract)")," keyword.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Private or ",(0,r.kt)("strong",{parentName:"p"},"access(self)")," means the declaration is only accessible/visible\nin the current and inner scopes."),(0,r.kt)("p",{parentName:"li"},"For example, an ",(0,r.kt)("inlineCode",{parentName:"p"},"access(self)")," field can only be\naccessed by functions of the type is part of,\nnot by code in an outer scope."),(0,r.kt)("p",{parentName:"li"},"An element is made accessible by code in the same containing type\nby using the ",(0,r.kt)("inlineCode",{parentName:"p"},"access(self)")," keyword."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access level must be specified for each declaration")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"(set)")," suffix can be used to make variables also publicly writable and mutable."),(0,r.kt)("p",null,"To summarize the behavior for variable declarations, constant declarations, and fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Declaration kind"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access modifier"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Read scope"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Write scope"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mutate scope"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"let")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"priv")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"access(self)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"let")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"access(contract)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current, inner, and containing contract"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"let")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"access(account)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current, inner, and other contracts in same account"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"let")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pub"),",",(0,r.kt)("inlineCode",{parentName:"td"},"access(all)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"All")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"var")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"access(self)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"var")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"access(contract)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current, inner, and containing contract"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"var")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"access(account)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current, inner, and other contracts in same account"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"var")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pub")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"access(all)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"All")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"var")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pub(set)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"All")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"All")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"All"))))),(0,r.kt)("p",null,"To summarize the behavior for functions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Access modifier"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access scope"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"priv")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"access(self)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current and inner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"access(contract)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current, inner, and containing contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"access(account)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current, inner, and other contracts in same account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pub")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"access(all)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"All"))))),(0,r.kt)("p",null,"Declarations of structures, resources, events, and ",(0,r.kt)("a",{parentName:"p",href:"contracts"},"contracts")," can only be public.\nHowever, even though the declarations/types are publicly visible,\nresources can only be created from inside the contract they are declared in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a private constant, inaccessible/invisible in outer scope.\n//\naccess(self) let a = 1\n\n// Declare a public constant, accessible/visible in all scopes.\n//\npub let b = 2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a public struct, accessible/visible in all scopes.\n//\npub struct SomeStruct {\n\n    // Declare a private constant field which is only readable\n    // in the current and inner scopes.\n    //\n    access(self) let a: Int\n\n    // Declare a public constant field which is readable in all scopes.\n    //\n    pub let b: Int\n\n    // Declare a private variable field which is only readable\n    // and writable in the current and inner scopes.\n    //\n    access(self) var c: Int\n\n    // Declare a public variable field which is not settable,\n    // so it is only writable in the current and inner scopes,\n    // and readable in all scopes.\n    //\n    pub var d: Int\n\n    // Declare a public variable field which is settable,\n    // so it is readable and writable in all scopes.\n    //\n    pub(set) var e: Int\n\n    // Arrays and dictionaries declared without (set) cannot be\n    // mutated in external scopes\n    pub let arr: [Int]\n\n    // The initializer is omitted for brevity.\n\n    // Declare a private function which is only callable\n    // in the current and inner scopes.\n    //\n    access(self) fun privateTest() {\n        // ...\n    }\n\n    // Declare a public function which is callable in all scopes.\n    //\n    pub fun privateTest() {\n        // ...\n    }\n\n    // The initializer is omitted for brevity.\n\n}\n\nlet some = SomeStruct()\n\n// Invalid: cannot read private constant field in outer scope.\n//\nsome.a\n\n// Invalid: cannot set private constant field in outer scope.\n//\nsome.a = 1\n\n// Valid: can read public constant field in outer scope.\n//\nsome.b\n\n// Invalid: cannot set public constant field in outer scope.\n//\nsome.b = 2\n\n// Invalid: cannot read private variable field in outer scope.\n//\nsome.c\n\n// Invalid: cannot set private variable field in outer scope.\n//\nsome.c = 3\n\n// Valid: can read public variable field in outer scope.\n//\nsome.d\n\n// Invalid: cannot set public variable field in outer scope.\n//\nsome.d = 4\n\n// Valid: can read publicly settable variable field in outer scope.\n//\nsome.e\n\n// Valid: can set publicly settable variable field in outer scope.\n//\nsome.e = 5\n\n// Invalid: cannot mutate a public field in outer scope.\n//\nsome.f.append(0)\n\n// Invalid: cannot mutate a public field in outer scope.\n//\nsome.f[3] = 1\n\n// Valid: can call non-mutating methods on a public field in outer scope\nsome.f.contains(0)\n")))}m.isMDXComponent=!0}}]);