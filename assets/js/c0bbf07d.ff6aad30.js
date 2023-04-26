"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[123],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22478:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="Flow Cadut Generator API Reference",o={unversionedId:"tools/flow-cadut/generator",id:"tools/flow-cadut/generator",title:"Flow Cadut Generator API Reference",description:"File System",source:"@site/docs/tools/flow-cadut/generator.md",sourceDirName:"tools/flow-cadut",slug:"/tools/flow-cadut/generator",permalink:"/tools/flow-cadut/generator",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flow Cadence Utilities API Reference",permalink:"/tools/flow-cadut/api"},next:{title:"Plugin System",permalink:"/tools/flow-cadut/plugins"}},p={},d=[{value:"File System",id:"file-system",level:2},{value:"sansExtension(filename)",id:"sansextensionfilename",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"Usage",id:"usage",level:4},{value:"<code>readFile(path)</code>",id:"readfilepath",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"<code>writeFile(path, data)</code>",id:"writefilepath-data",level:3},{value:"Usage",id:"usage-2",level:4},{value:"<code>clearPath(path)</code>",id:"clearpathpath",level:3},{value:"Arguments",id:"arguments-2",level:4},{value:"Usage",id:"usage-3",level:4},{value:"<code>getFileList(path)</code>",id:"getfilelistpath",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Usage",id:"usage-4",level:4},{value:"<code>prettify(code, options)</code>",id:"prettifycode-options",level:3},{value:"Arguments",id:"arguments-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Usage",id:"usage-5",level:4}],s={toc:d},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flow-cadut-generator-api-reference"},"Flow Cadut Generator API Reference"),(0,r.kt)("h2",{id:"file-system"},"File System"),(0,r.kt)("h3",{id:"sansextensionfilename"},"sansExtension(filename)"),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filename")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"file name with extension")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"filename without extension")))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { sansExtension } from "@onflow/flow-cadut";\n\nconst fileName = sansExtension("log-message-and-return.cdc");\nconsole.log({ fileName });\n')),(0,r.kt)("p",null,"\ud83d\udce3 This method is used internally to get value for module name during code generation."),(0,r.kt)("h3",{id:"readfilepath"},(0,r.kt)("inlineCode",{parentName:"h3"},"readFile(path)")),(0,r.kt)("p",null,"Reads the contents fo the file as ",(0,r.kt)("inlineCode",{parentName:"p"},"utf8"),". Syntax sugar for ",(0,r.kt)("inlineCode",{parentName:"p"},'fs.readFileSync(path, "utf8")')),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"path to the file")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"string representation of file contents")))),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { clearPath } from "@onflow/flow-cadut";\n\nconst content = readFile("./log.cdc");\n')),(0,r.kt)("h3",{id:"writefilepath-data"},(0,r.kt)("inlineCode",{parentName:"h3"},"writeFile(path, data)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"path to file, where data should be written")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"data to write into file")))),(0,r.kt)("p",null,"\ud83d\udce3 If path to the file is nested and does not exist, method will create necessary folders to provide place to accommodate your file."),(0,r.kt)("h4",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { writeFile } from "@onflow/flow-cadut";\n\nconst script = `\n  pub fun main(){\n    log("Hello, Cadence")\n  }\n`;\n\nwriteFile("./cadence/scripts/log.cdc", script);\n')),(0,r.kt)("h3",{id:"clearpathpath"},(0,r.kt)("inlineCode",{parentName:"h3"},"clearPath(path)")),(0,r.kt)("p",null,"Recursively deletes contents of the provided folder and all it's contents. Syntax sugar for ",(0,r.kt)("inlineCode",{parentName:"p"},"fs.rmdirSync(path, { recursive: true })")),(0,r.kt)("h4",{id:"arguments-2"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"path to folder to process")))),(0,r.kt)("h4",{id:"usage-3"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { clearPath } from "@onflow/flow-cadut";\n\nclearPath("./ready-to-go");\n')),(0,r.kt)("h3",{id:"getfilelistpath"},(0,r.kt)("inlineCode",{parentName:"h3"},"getFileList(path)")),(0,r.kt)("p",null,"Recursively looking for files under ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," and returns list of paths to found items."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"path to folder to process")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"array of strings, representing paths to files contained within specified folder")))),(0,r.kt)("h4",{id:"usage-4"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { getFileList } from "@onflow/flow-cadut";\n\nconst list = getFileList("./cadence");\n')),(0,r.kt)("h3",{id:"prettifycode-options"},(0,r.kt)("inlineCode",{parentName:"h3"},"prettify(code, options)")),(0,r.kt)("p",null,"Prettifies ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," using Prettier and set of ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),".\nDefault ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "printWidth": 100,\n  "endOfLine": "lf",\n  "trailingComma": "es5",\n  "tabWidth": 2,\n  "semi": true,\n  "useTabs": false,\n  "singleQuote": false\n}\n')),(0,r.kt)("h4",{id:"arguments-3"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"valid Javascript code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Prettier options. Consult ",(0,r.kt)("a",{parentName:"td",href:"https://prettier.io/docs/en/options.html"},"Prettier Options Documentation")," to learn more.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"prettified version of provided code")))),(0,r.kt)("h4",{id:"usage-5"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { prettify } from "@onflow/flow-cadut";\n\nconst code = `\n  const a         = "Hello"\n  const b    = "World\n  console.log(a    +b);\n`;\n\nconst pretty = prettify(code);\nconsole.log(pretty);\n')))}m.isMDXComponent=!0}}]);