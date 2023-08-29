"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[29470],{38280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});t(67294);var o=t(85893),i=t(11151);const r={},a="Contributing Content to the Developer Portal",s={unversionedId:"community-resources/developer-portal/contribution-guidelines",id:"community-resources/developer-portal/contribution-guidelines",title:"Contributing Content to the Developer Portal",description:"In most cases you should be able to iterate and deploy changes to your documentation without needing to involved the engineering team that is maintaining the Developer Portal.",source:"@site/docs/community-resources/developer-portal/contribution-guidelines.md",sourceDirName:"community-resources/developer-portal",slug:"/community-resources/developer-portal/contribution-guidelines",permalink:"/docs/next/community-resources/developer-portal/contribution-guidelines",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/community-resources/developer-portal/contribution-guidelines.md",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1693323785,formattedLastUpdatedAt:"Aug 29, 2023",frontMatter:{},sidebar:"communityResources",previous:{title:"Introduction",permalink:"/docs/next/community-resources/Introduction"},next:{title:"Contributing to the Developer Portal",permalink:"/docs/next/community-resources/developer-portal/portal-overview"}},l={},d=[{value:"How To Contribute",id:"how-to-contribute",level:2},{value:"Before You Start",id:"before-you-start",level:3},{value:"Basic Contribution Workflow",id:"basic-contribution-workflow",level:3},{value:"Making Updates to Existing Content",id:"making-updates-to-existing-content",level:2},{value:"Contributing New Content",id:"contributing-new-content",level:2},{value:"Before You Start",id:"before-you-start-1",level:3},{value:"Adding a New Developer Tool or SDK",id:"adding-a-new-developer-tool-or-sdk",level:2},{value:"<strong>Adding Your SDK Documentation</strong>",id:"adding-your-sdk-documentation",level:3},{value:"<strong>Adding Callouts on Feature (Landing) Pages</strong>",id:"adding-callouts-on-feature-landing-pages",level:3},{value:"Adding a New Tutorial, Guide or Other Learning Content",id:"adding-a-new-tutorial-guide-or-other-learning-content",level:2},{value:"Adding Content",id:"adding-content",level:3},{value:"Linking to Content",id:"linking-to-content",level:3},{value:"Adding a New Community Initiative",id:"adding-a-new-community-initiative",level:2},{value:"Adding Content",id:"adding-content-1",level:3},{value:"Linking to Content",id:"linking-to-content-1",level:3},{value:"Updating \u201cTry, Learn, Build\u201d Link List",id:"updating-try-learn-build-link-list",level:2},{value:"Updating the Main Navigation Menu",id:"updating-the-main-navigation-menu",level:2},{value:"Integrating a New Repository",id:"integrating-a-new-repository",level:2},{value:"<strong>Integrating Documentation From Your Own Repository</strong>",id:"integrating-documentation-from-your-own-repository",level:3},{value:"Start with the Defaults",id:"start-with-the-defaults",level:3},{value:"Adding a <code>flow-docs.json</code> Configuration File",id:"adding-a-flow-docsjson-configuration-file",level:3},{value:"Create a PR With Your Integration Proposal",id:"create-a-pr-with-your-integration-proposal",level:3},{value:"General Troubleshooting",id:"general-troubleshooting",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",hr:"hr",ol:"ol",li:"li",code:"code",img:"img",strong:"strong",ul:"ul"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"contributing-content-to-the-developer-portal",children:"Contributing Content to the Developer Portal"}),"\n",(0,o.jsx)(n.p,{children:"In most cases you should be able to iterate and deploy changes to your documentation without needing to involved the engineering team that is maintaining the Developer Portal."}),"\n",(0,o.jsx)(n.h2,{id:"how-to-contribute",children:"How To Contribute"}),"\n",(0,o.jsx)(n.h3,{id:"before-you-start",children:"Before You Start"}),"\n",(0,o.jsx)(n.p,{children:"Before you can contribute to the Developer Portal, you\u2019ll need a GitHub Account, and you\u2019ll need to be logged into GitHub."}),"\n",(0,o.jsxs)(n.p,{children:["If you don\u2019t have a GitHub account ",(0,o.jsx)(n.a,{href:"https://github.com",children:"go here"})," and sign-up. Once you have a GitHub account you can proceed with the following steps."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"basic-contribution-workflow",children:"Basic Contribution Workflow"}),"\n",(0,o.jsx)(n.p,{children:"The basic contribution workflow is the same for everyone."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a PR into the ",(0,o.jsx)(n.code,{children:"main"})," branch of the GitHub repository you\u2019re working with."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Wait for check runs to complete and correct any validation errors."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Provide any redirects indicated in the check run, in your ",(0,o.jsx)(n.code,{children:"flow-docs.json"})," file."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Preview your updated pages using the provided preview links to make sure they are rendering and displaying as you wish."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Merge your PR, and updates to your docs are immediately available on ",(0,o.jsx)(n.a,{href:"https://developer.flow.com",children:"https://developers.flow.com"}),"!"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Note: there is no \u201cStaging\u201d environment for your documentation. Previews are rendered by fetching content from a specified Git branch, using a URL query string,"}),"\n",(0,o.jsxs)(n.p,{children:["eg: ",(0,o.jsx)(n.code,{children:"?preview=chasefleming%2Fdiscovery-docs-include"})]}),"\n",(0,o.jsxs)(n.p,{children:["However, only the staging instance of the Developer Portal is configured to process the preview query strings, which is why your previews appear on the \u201cstaging\u201d domain ",(0,o.jsx)(n.code,{children:"https://flow-docs-staging.fly.dev"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you require help integrating your documentation updates, you can make a request in ",(0,o.jsx)(n.code,{children:"#flow-documentation"})," Slack channel."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"making-updates-to-existing-content",children:"Making Updates to Existing Content"}),"\n",(0,o.jsx)(n.p,{children:"Contributing to the Developer Portal is as easy as making a PR to a GitHub repository. To update existing content, look for the \u201cEdit on Github\u201d link in the right-hand side of each page, in the header. Here is what the header looks like."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(25328).Z+"",loading:"lazy",alt:"editheader.png",width:"3450",height:"302"})}),"\n",(0,o.jsx)(n.p,{children:"Clicking the \u201cEdit in GitHub\u201d link will take you directly to the source code of the document you are viewing."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"contributing-new-content",children:"Contributing New Content"}),"\n",(0,o.jsx)(n.h3,{id:"before-you-start-1",children:"Before You Start"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Working With Markdown"})}),"\n",(0,o.jsx)(n.p,{children:"For your documentation to be displayed on the Developer Portal, it must be authored in Markdown format. To learn more about how to use Markdown syntax for creating documents, please review the following resources:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.markdowntutorial.com/",children:"https://www.markdowntutorial.com/"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.markdownguide.org/",children:"https://www.markdownguide.org/"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"From Google Doc \u2192 Developer Portal (Markdown)"})}),"\n",(0,o.jsx)(n.p,{children:"Markdown is not the ideal format for authoring documentation that requires collaboration during the editorial process. If you are using Google Docs to create documentation, you can use this tool to automatically generate Markdown files, which can then be submitted to the Developer Portal engineering team, using this browser plugin:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607",children:"https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607"})}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"adding-a-new-developer-tool-or-sdk",children:"Adding a New Developer Tool or SDK"}),"\n",(0,o.jsx)(n.p,{children:"Adding a new Tools or SDK requires some manual intervention from the Flow Developer Portal engineering team. In the future we hope this process can be self-serve."}),"\n",(0,o.jsxs)(n.p,{children:["Documentation for SDKs and other tools belongs under the \u201ctools\u201d section in the information hierarchy of the Developer Portal. You can review the information hierarchy of the Developer Portal ",(0,o.jsx)(n.a,{href:"/docs/next/community-resources/developer-portal/portal-overview",children:"here"}),":"]}),"\n",(0,o.jsx)(n.h3,{id:"adding-your-sdk-documentation",children:(0,o.jsx)(n.strong,{children:"Adding Your SDK Documentation"})}),"\n",(0,o.jsxs)(n.p,{children:["If you are familiar with Github, please follow the rest of this guide, starting with the ",(0,o.jsx)(n.a,{href:"#basic-contribution-workflow",children:"Basic Contribution Workflow"})]}),"\n",(0,o.jsx)(n.h3,{id:"adding-callouts-on-feature-landing-pages",children:(0,o.jsx)(n.strong,{children:"Adding Callouts on Feature (Landing) Pages"})}),"\n",(0,o.jsxs)(n.p,{children:["The Developer Portal has special sections used to \u201ccall out\u201d specific tools or other documentation. For example, the ",(0,o.jsx)(n.code,{children:"/tools"})," landing page contains the following categories."]}),"\n",(0,o.jsx)(n.p,{children:"To make your content easy for users to find, you\u2019ll place your Callout under one of the following categories, seen here in the top-level page navigation:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(29647).Z+"",loading:"lazy",alt:"callouts.png",width:"3382",height:"738"})}),"\n",(0,o.jsxs)(n.p,{children:["(See ",(0,o.jsx)(n.a,{href:"/docs/next/community-resources/developer-portal/contribution-guidelines#basic-contribution-workflow",children:"this reference"})," for a list of the specific landing pages and sections available on the Developer Portal)"]}),"\n",(0,o.jsxs)(n.p,{children:["Here is an example of a Callout section featuring available SDKs, on the ",(0,o.jsx)(n.code,{children:"/tools"})," landing page:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(37897).Z+"",loading:"lazy",alt:"callout specific.png",width:"2786",height:"1758"})}),"\n",(0,o.jsxs)(n.p,{children:["Data for these sections is currently part of the Developer Portal source code and can be found here: ",(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal/blob/main/app/data/tools/index.ts",children:"https://github.com/onflow/developer-portal/blob/main/app/data/tools/index.ts"}),"\nTo add a link to your too you\u2019ll need to create an object in this file that conforms to the object type defined for listing tools."]}),"\n",(0,o.jsx)(n.p,{children:"A new tool can be added by copying the format of the objects for existing tool. And existing tool descriptions can be modified by updating those objects."}),"\n",(0,o.jsxs)(n.p,{children:["Once a callout has been created, you can add it to the feature list, as in the image above, by importing your new callout into the ",(0,o.jsx)(n.code,{children:"tools"})," page here:\n",(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal/blob/main/app/data/pages/tools.ts",children:"https://github.com/onflow/developer-portal/blob/main/app/data/pages/tools.ts"})]}),"\n",(0,o.jsx)(n.p,{children:"Be sure to add your tool under the appropriate category. Follow the pattern established in the source code for existing tools, when adding a new tool."}),"\n",(0,o.jsxs)(n.p,{children:["Your Callout can be added to ",(0,o.jsx)(n.strong,{children:"Tools"})," sections on the following feature landing pages"]}),"\n",(0,o.jsxs)(n.p,{children:["(in addition to ",(0,o.jsx)(n.code,{children:"/tools"}),"):"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"/getting-started:"})," ",(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal/blob/main/app/data/pages/getting-started.ts",children:"https://github.com/onflow/developer-portal/blob/main/app/data/pages/getting-started.ts"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/getting-started",children:"getting-started"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"/community:"})," ",(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal/blob/main/app/data/pages/community.ts",children:"https://github.com/onflow/developer-portal/blob/main/app/data/pages/community.ts"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/community",children:"community"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"adding-a-new-tutorial-guide-or-other-learning-content",children:"Adding a New Tutorial, Guide or Other Learning Content"}),"\n",(0,o.jsxs)(n.p,{children:["The primary landing page for Guides and tutorials is ",(0,o.jsx)(n.code,{children:"/learn"})]}),"\n",(0,o.jsx)(n.h3,{id:"adding-content",children:"Adding Content"}),"\n",(0,o.jsx)(n.p,{children:"New content can be added in the for of a link to an external or internal page that exists, or by submitting content to the Flow documentation content repository, listed below."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Linking to existing Content"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To link to existing content, follow the steps under ",(0,o.jsx)(n.a,{href:"#linking-to-content",children:"Linking To New Content"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Adding New Content"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["New learning content, not hosted in your own repository can be submitted as markdown files here: ",(0,o.jsx)(n.a,{href:"https://github.com/onflow/flow/tree/master/docs/content",children:"https://github.com/onflow/flow/tree/master/docs/content"}),". Create a subfolder when necessary. The name of your folder / files will determine the URLs of your content."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["You\u2019ll follow the basic contribution workflow for submitting your content. Once your documents have been integrated, you\u2019ll link to existing content by following the steps under ",(0,o.jsx)(n.a,{href:"#linking-to-content",children:"Linking To New Content"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"linking-to-content",children:"Linking to Content"}),"\n",(0,o.jsxs)(n.p,{children:["To submit a link to learning content to be like the content below, you\u2019ll need to create a new object here: ",(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal/blob/main/app/data/articles/index.ts",children:"https://github.com/onflow/developer-portal/blob/main/app/data/articles/index.ts"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(12002).Z+"",loading:"lazy",alt:"learning-content",width:"2576",height:"1540"})}),"\n",(0,o.jsx)(n.p,{children:"Once a link to your content has been added, it can be added to the page by importing it here and adding it to the appropriate collection:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal/blob/main/app/data/pages/learn.ts",children:"https://github.com/onflow/developer-portal/blob/main/app/data/pages/learn.ts"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"adding-a-new-community-initiative",children:"Adding a New Community Initiative"}),"\n",(0,o.jsxs)(n.p,{children:["The primary landing page for Flow community initiatives is ",(0,o.jsx)(n.code,{children:"/community"})]}),"\n",(0,o.jsx)(n.h3,{id:"adding-content-1",children:"Adding Content"}),"\n",(0,o.jsx)(n.p,{children:"New content can be added in the for of a link to an external or internal page that exists, or by submitting content to the Flow documentation content repository, listed below."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Adding New Content"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["New learning content, not hosted in your own repository can be submitted as markdown files to this folder in this repository: ",(0,o.jsx)(n.a,{href:"https://github.com/onflow/flow/tree/master/docs/content",children:"https://github.com/onflow/flow/tree/master/docs/content"})]}),"\n",(0,o.jsxs)(n.li,{children:["You\u2019ll follow the basic contribution workflow for submitting your content. Once your documents have been integrated, you\u2019ll link to existing content by following the steps under ",(0,o.jsx)(n.a,{href:"#linking-to-content",children:"Linking To New Content"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"linking-to-content-1",children:"Linking to Content"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Featured Initiatives on the /community Home Page:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(29643).Z+"",loading:"lazy",alt:"community-initiatives",width:"1287",height:"838"})}),"\n",(0,o.jsxs)(n.p,{children:["To submit your content as a \u201cFeatured Initiative\u201d on the community page, you can submit an update PR to the following file: ",(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal/blob/main/app/data/pages/community.ts#L49",children:"https://github.com/onflow/developer-portal/blob/main/app/data/pages/community.ts#L49"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Be sure top include all of the required information as defined by the Types in this file."}),"\n",(0,o.jsx)(n.p,{children:"Use other entries as an example when submitting your own."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"updating-try-learn-build-link-list",children:"Updating \u201cTry, Learn, Build\u201d Link List"}),"\n",(0,o.jsx)(n.p,{children:"Currently there are 2 link feature lists available on the site."}),"\n",(0,o.jsxs)(n.p,{children:["This list appears on  ",(0,o.jsx)(n.code,{children:"/getting-started"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(10954).Z+"",loading:"lazy",alt:"try-learn-build",width:"2100",height:"1154"})}),"\n",(0,o.jsx)(n.p,{children:"To submit your content as a link in this list, you can submit an update PR to the following file:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal/blob/main/app/routes/getting-started.tsx#L83",children:"https://github.com/onflow/developer-portal/blob/main/app/routes/getting-started.tsx#L83"})}),"\n",(0,o.jsx)(n.h2,{id:"updating-the-main-navigation-menu",children:"Updating the Main Navigation Menu"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(95848).Z+"",loading:"lazy",alt:"main-navigation",width:"3446",height:"1314"})}),"\n",(0,o.jsx)(n.p,{children:"Adding links to your documentation in the main menu, can be done by submitting a PR to update one of the following files:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:'"Developers" Top Nav Menu'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal/blob/main/app/data/nav/documentationTabData.tsx",children:"https://github.com/onflow/developer-portal/blob/main/app/data/nav/documentationTabData.tsx"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:'"Community" Top Nav Menu'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal/blob/main/app/data/nav/communityTabData.tsx",children:"https://github.com/onflow/developer-portal/blob/main/app/data/nav/communityTabData.tsx"})}),"\n",(0,o.jsx)(n.p,{children:"Use existing contents of these files to understand how to integrate a link to your documentation into the main navigation of the Developer Portal."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"integrating-a-new-repository",children:"Integrating a New Repository"}),"\n",(0,o.jsx)(n.h3,{id:"integrating-documentation-from-your-own-repository",children:(0,o.jsx)(n.strong,{children:"Integrating Documentation From Your Own Repository"})}),"\n",(0,o.jsx)(n.p,{children:"For security and content auditing reasons, it is currently not possible to integrate 3rd party Repositories into the Developer Portal. See the following sections for information about integrating your Documentation."}),"\n",(0,o.jsx)(n.h3,{id:"start-with-the-defaults",children:"Start with the Defaults"}),"\n",(0,o.jsxs)(n.p,{children:["To start your integration, create a ",(0,o.jsx)(n.code,{children:"/docs"})," folder in the root of your repository that includes at least one valid Markdown file."]}),"\n",(0,o.jsxs)(n.h3,{id:"adding-a-flow-docsjson-configuration-file",children:["Adding a ",(0,o.jsx)(n.code,{children:"flow-docs.json"})," Configuration File"]}),"\n",(0,o.jsxs)(n.p,{children:["The first step to integrating your documentation into the Developer Portal is adding a ",(0,o.jsx)(n.code,{children:"flow-docs.json"})," configuration file in the folder in your repo containing your documentation. This is ",(0,o.jsx)(n.code,{children:"/docs"})," by default."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/next/community-resources/developer-portal/portal-overview#flow-docsjson",children:"Read more here"})," about available configuration options."]}),"\n",(0,o.jsx)(n.h3,{id:"create-a-pr-with-your-integration-proposal",children:"Create a PR With Your Integration Proposal"}),"\n",(0,o.jsx)(n.p,{children:"Currently, repositories must be approved and configured manually by the Developer Portal team. If you wish to integrate your repository, create a PR here:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/developer-portal",children:"https://github.com/onflow/developer-portal"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Include the following information:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Which section to locate your docs; read about the information hierarchy ",(0,o.jsx)(n.a,{href:"/docs/next/community-resources/developer-portal/portal-overview#information-design",children:"here"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"A brief section outlining your plans for updating and maintaining your documentation."}),"\n",(0,o.jsx)(n.li,{children:"Anything else you think might be relavent to the integration, including questions."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The PR will serve as a place to exchange messages and update progress while the Developer Portal team proceeds with your integration."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"general-troubleshooting",children:"General Troubleshooting"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["I want to add a link to my content but there are no instructions.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Not all sections of the site are customizable by users. Adding links to content is accessible to all, but updating feature sections, main navigation and page headers is the purview of the Developer Portal product team and is being restricted, for the time being."}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}},29643:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/community-iniatives-ecc6883c4a55bc761875c78fe93e5302.png"},25328:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/edit-header-43dc9304b067aa47ea68e1a6ff15c02b.png"},29647:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/header-callouts-3353a7a60bbbebf617f98d3fe23a45c7.png"},12002:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/learn-links-4f2a89ef55263618210715716c55eee9.png"},95848:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/main-nav-286667df1d0d8c8196dea7030568642b.png"},37897:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/tools-callout-f0c9269da5ed20d4c6e9aedb54b52f50.png"},10954:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/try-learn-build-756d7307dfb7a319fefaa8680efa6453.png"}}]);