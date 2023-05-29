(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11625],{23612:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(67294),o=n(86010),l=n(35281),r=n(95999);const c={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const s={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},i={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function m(e){const{children:t,type:n,title:r,icon:m}=d(e),u=function(e){const t=i[e]??e,n=s[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),s.info)}(n),p=r??u.label,{iconComponent:h}=u,f=m??a.createElement(h,null);return a.createElement("div",{className:(0,o.Z)(l.k.common.admonition,l.k.common.admonitionType(e.type),"alert",`alert--${u.infimaClassName}`,c.admonition)},a.createElement("div",{className:c.admonitionHeading},a.createElement("span",{className:c.admonitionIcon},f),p),a.createElement("div",{className:c.admonitionContent},t))}},56487:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Te});var a=n(67294),o=n(10833),l=n(902);const r=a.createContext(null);function c(e){let{children:t,content:n}=e;const o=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:o},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(o.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(86010),m=n(87524),u=n(87462),p=n(95999),h=n(39960);function f(e){const{permalink:t,title:n,subLabel:o,isNext:l}=e;return a.createElement(h.Z,{className:(0,d.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}function g(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(f,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(f,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=s();return a.createElement(g,{previous:e.previous,next:e.next})}var v=n(52263),E=n(94104),y=n(35281),k=n(60373),N=n(74477);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){const t=C[e.versionMetadata.banner];return a.createElement(t,e)}function _(e){let{versionLabel:t,to:n,onClick:o}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(h.Z,{to:n,onClick:o},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function Z(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,v.Z)(),{pluginId:l}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,k.J)(l),{latestDocSuggestion:c,latestVersionSuggestion:s}=(0,E.Jo)(l),i=c??(m=s).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(L,{siteTitle:o,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(_,{versionLabel:s.label,to:i.path,onClick:()=>r(s.name)})))}function T(e){let{className:t}=e;const n=(0,N.E)();return n.banner?a.createElement(Z,{className:t,versionMetadata:n}):null}function B(e){let{className:t}=e;const n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function x(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function H(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:o}=e;return a.createElement("span",{className:y.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:o?a.createElement(x,{lastUpdatedBy:o}):""}},"Last updated{atDate}{byUser}"),!1)}const A={iconEdit:"iconEdit_Z9Sw"};function I(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(A.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function M(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:y.k.common.editThisPage},a.createElement(I,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var S=n(13008);const j={tags:"tags_jXut",tag:"tag_QGVx"};function U(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.Z)(j.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:j.tag},a.createElement(S.Z,{label:t,permalink:n}))}))))}const O={lastUpdated:"lastUpdated_vwxv"};function z(e){return a.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(U,e)))}function V(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l}=e;return a.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(M,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",O.lastUpdated)},(n||o)&&a.createElement(H,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o})))}function P(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l,tags:r}=e,c=r.length>0,i=!!(t||n||l);return c||i?a.createElement("footer",{className:(0,d.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(z,{tags:r}),i&&a.createElement(V,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o})):null}var D=n(86043),R=n(86668);function W(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function $(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=$({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function F(e){const t=e.getBoundingClientRect();return t.top===t.bottom?F(e.parentNode):t}function q(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>F(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(F(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function G(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,R.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){const t=(0,a.useRef)(void 0),n=G();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:r}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),s=q(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function J(e){let{toc:t,className:n,linkClassName:o,isChild:l}=e;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(J,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const Q=a.memo(J);function X(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:c,...s}=e;const i=(0,R.L)(),d=r??i.tableOfContents.minHeadingLevel,m=c??i.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,a.useMemo)((()=>$({toc:W(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:d,maxHeadingLevel:m});return Y((0,a.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:d,maxHeadingLevel:m}}),[o,l,d,m])),a.createElement(Q,(0,u.Z)({toc:p,className:n,linkClassName:o},s))}const K={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function ee(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",K.tocCollapsibleButton,!t&&K.tocCollapsibleButtonExpanded,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const te={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function ne(e){let{toc:t,className:n,minHeadingLevel:o,maxHeadingLevel:l}=e;const{collapsed:r,toggleCollapsed:c}=(0,D.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(te.tocCollapsible,!r&&te.tocCollapsibleExpanded,n)},a.createElement(ee,{collapsed:r,onClick:c}),a.createElement(D.z,{lazy:!0,className:te.tocCollapsibleContent,collapsed:r},a.createElement(X,{toc:t,minHeadingLevel:o,maxHeadingLevel:l})))}const ae={tocMobile:"tocMobile_ITEo"};function oe(){const{toc:e,frontMatter:t}=s();return a.createElement(ne,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(y.k.docs.docTocMobile,ae.tocMobile)})}const le={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},re="table-of-contents__link toc-highlight",ce="table-of-contents__link--active";function se(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,d.Z)(le.tableOfContents,"thin-scrollbar",t)},a.createElement(X,(0,u.Z)({},n,{linkClassName:re,linkActiveClassName:ce})))}function ie(){const{toc:e,frontMatter:t}=s();return a.createElement(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}var de=n(92503),me=n(11151),ue=n(31769);function pe(e){let{children:t}=e;return a.createElement(me.Zo,{components:ue.Z},t)}function he(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(y.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(de.Z,{as:"h1"},n)),a.createElement(pe,null,t))}var fe=n(52802),ge=n(48596),be=n(44996);function ve(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Ee={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ye(){const e=(0,be.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(h.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ve,{className:Ee.breadcrumbHomeIcon})))}const ke={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Ne(e){let{children:t,href:n,isLast:o}=e;const l="breadcrumbs__link";return o?a.createElement("span",{className:l,itemProp:"name"},t):n?a.createElement(h.Z,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l},t)}function Ce(e){let{children:t,active:n,index:o,addMicrodata:l}=e;return a.createElement("li",(0,u.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(o+1)}))}function Le(){const e=(0,fe.s1)(),t=(0,ge.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(y.k.docs.docBreadcrumbs,ke.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ye,null),e.map(((t,n)=>{const o=n===e.length-1;return a.createElement(Ce,{key:n,active:o,index:n,addMicrodata:!!t.href},a.createElement(Ne,{href:t.href,isLast:o},t.label))})))):null}const _e={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Ze(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,m.i)(),o=e.hide_table_of_contents,l=!o&&t.length>0;return{hidden:o,mobile:l?a.createElement(oe,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(ie,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&_e.docItemCol)},a.createElement(T,null),a.createElement("div",{className:_e.docItemContainer},a.createElement("article",null,a.createElement(Le,null),a.createElement(B,null),n.mobile,a.createElement(he,null,t),a.createElement(P,null)),a.createElement(b,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function Te(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(o.FG,{className:t},a.createElement(i,null),a.createElement(Ze,null,a.createElement(n,null))))}},92503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(87462),o=n(67294),l=n(86010),r=n(95999),c=n(86668),s=n(39960);const i={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();if("h1"===t||!n)return o.createElement(t,(0,a.Z)({},d,{id:void 0}));const u=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return o.createElement(t,(0,a.Z)({},d,{className:(0,l.Z)("anchor",m?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar,d.className),id:n}),d.children,o.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},66063:(e,t,n)=>{"use strict";n.d(t,{Z:()=>oe});var a=n(87462),o=n(67294),l=n(35742);var r=n(72389),c=n(86010),s=n(92949),i=n(86668);function d(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var m=n(35281),u=n(87594),p=n.n(u);const h=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function b(e,t){const n=e.map((e=>{const{start:n,end:a}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:o,metastring:l}=t;if(l&&f.test(l)){const e=l.match(f).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,a=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);default:return b(Object.keys(g),t)}}(a,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(r);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${p},`:d[t]?s[d[t]].start=p:m[t]&&(s[m[t]].range+=`${s[m[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const u={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{u[e]??=[],u[e].push(t)}))})),{lineClassNames:u,code:n}}const E={codeBlockContainer:"codeBlockContainer_Ckt0"};function y(e){let{as:t,...n}=e;const l=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,o]=e;const l=t[a];l&&"string"==typeof o&&(n[l]=o)})),n}(d());return o.createElement(t,(0,a.Z)({},n,{style:l,className:(0,c.Z)(n.className,E.codeBlockContainer,m.k.common.codeBlock)}))}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function N(e){let{children:t,className:n}=e;return o.createElement(y,{as:"pre",tabIndex:0,className:(0,c.Z)(k.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:k.codeBlockLines},t))}var C=n(902);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function _(e,t){const[n,a]=(0,o.useState)(),l=(0,o.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,o.useEffect)((()=>{l()}),[l]),function(e,t,n){void 0===n&&(n=L);const a=(0,C.zX)(t),l=(0,C.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,l),()=>t.disconnect()}),[e,a,l])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const Z={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var T={Prism:n(87410).Z,theme:Z};function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}var x=/\r\n|\r|\n/,H=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},A=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},I=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=w({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=w({},n,{backgroundColor:null}),o};function M(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const S=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),B(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?I(e.theme,e.language):void 0;return t.themeDict=n})),B(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,l=w({},M(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(l.style=r.plain),void 0!==o&&(l.style=void 0!==l.style?w({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),B(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return l[n[0]];var r=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[r].concat(c))}})),B(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,l=e.token,r=w({},M(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(r.style=void 0!==r.style?w({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),B(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,l=this.getThemeDict(this.props),r=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],l=0,r=0,c=[],s=[c];r>-1;){for(;(l=a[r]++)<o[r];){var i=void 0,d=t[r],m=n[r][l];if("string"==typeof m?(d=r>0?d:["plain"],i=m):(d=A(d,m.type),m.alias&&(d=A(d,m.alias)),i=m.content),"string"==typeof i){var u=i.split(x),p=u.length;c.push({types:d,content:u[0]});for(var h=1;h<p;h++)H(c),s.push(c=[]),c.push({types:d,content:u[h]})}else r++,t.push(d),n.push(i),a.push(0),o.push(i.length)}r--,t.pop(),n.pop(),a.pop(),o.pop()}return H(c),s}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),j={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function U(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:r,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=r({line:t,className:(0,c.Z)(n,l&&j.codeLine)}),d=t.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},s({token:e,key:t})))));return o.createElement("span",i,l?o.createElement(o.Fragment,null,o.createElement("span",{className:j.codeLineNumber}),o.createElement("span",{className:j.codeLineContent},d)):d,o.createElement("br",null))}var O=n(95999);const z={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function V(e){let{code:t,className:n}=e;const[a,l]=(0,o.useState)(!1),r=(0,o.useRef)(void 0),s=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),r&&(l.removeAllRanges(),l.addRange(r)),o&&o.focus()}(t),l(!0),r.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),o.createElement("button",{type:"button","aria-label":a?(0,O.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,O.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,O.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,z.copyButton,a&&z.copyButtonCopied),onClick:s},o.createElement("span",{className:z.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:z.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:z.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const P={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function D(e){let{className:t,onClick:n,isEnabled:a}=e;const l=(0,O.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,a&&P.wordWrapButtonEnabled),"aria-label":l,title:l},o.createElement("svg",{className:P.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function R(e){let{children:t,className:n="",metastring:l,title:r,showLineNumbers:s,language:m}=e;const{prism:{defaultLanguage:u,magicComments:p}}=(0,i.L)(),f=m??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u,g=d(),b=function(){const[e,t]=(0,o.useState)(!1),[n,a]=(0,o.useState)(!1),l=(0,o.useRef)(null),r=(0,o.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[l,e]),c=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");a(n)}),[l]);return _(l,c),(0,o.useEffect)((()=>{c()}),[e,c]),(0,o.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:r}}(),E=function(e){return e?.match(h)?.groups.title??""}(l)||r,{lineClassNames:N,code:C}=v(t,{metastring:l,language:f,magicComments:p}),L=s??function(e){return Boolean(e?.includes("showLineNumbers"))}(l);return o.createElement(y,{as:"div",className:(0,c.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},E&&o.createElement("div",{className:k.codeBlockTitle},E),o.createElement("div",{className:k.codeBlockContent},o.createElement(S,(0,a.Z)({},T,{theme:g,code:C,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:l}=e;return o.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,c.Z)(t,k.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,c.Z)(k.codeBlockLines,L&&k.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(U,{key:t,line:e,getLineProps:a,getTokenProps:l,classNames:N[t],showLineNumbers:L})))))})),o.createElement("div",{className:k.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&o.createElement(D,{className:k.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),o.createElement(V,{className:k.codeButton,code:C}))))}function W(e){let{children:t,...n}=e;const l=(0,r.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?R:N;return o.createElement(s,(0,a.Z)({key:String(l)},n),c)}var $=n(39960);var F=n(86043);const q={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function G(e){return!!e&&("SUMMARY"===e.tagName||G(e.parentElement))}function Y(e,t){return!!e&&(e===t||Y(e.parentElement,t))}function J(e){let{summary:t,children:n,...l}=e;const s=(0,r.Z)(),i=(0,o.useRef)(null),{collapsed:d,setCollapsed:m}=(0,F.u)({initialState:!l.open}),[u,p]=(0,o.useState)(l.open),h=o.isValidElement(t)?t:o.createElement("summary",null,t??"Details");return o.createElement("details",(0,a.Z)({},l,{ref:i,open:u,"data-collapsed":d,className:(0,c.Z)(q.details,s&&q.isBrowser,l.className),onMouseDown:e=>{G(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;G(t)&&Y(t,i.current)&&(e.preventDefault(),d?(m(!1),p(!0)):m(!0))}}),h,o.createElement(F.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),p(!e)}},o.createElement("div",{className:q.collapsibleContent},n)))}const Q={details:"details_b_Ee"},X="alert alert--info";function K(e){let{...t}=e;return o.createElement(J,(0,a.Z)({},t,{className:(0,c.Z)(X,Q.details,t.className)}))}var ee=n(92503);function te(e){return o.createElement(ee.Z,e)}const ne={containsTaskList:"containsTaskList_mC6p"};const ae={img:"img_ev3q"};const oe={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return o.createElement(e.props.originalType,a)}return e}(e):e));return o.createElement(l.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(e.props?.mdxType)))?o.createElement("code",e):o.createElement(W,e)},a:function(e){return o.createElement($.Z,e)},pre:function(e){return o.createElement(W,(0,o.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.props?.mdxType)),l=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(K,(0,a.Z)({},e,{summary:n}),l)},ul:function(e){return o.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,c.Z)(t,t?.includes("contains-task-list")&&ne.containsTaskList))}));var t},img:function(e){return o.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,ae.img))}));var t},h1:e=>o.createElement(te,(0,a.Z)({as:"h1"},e)),h2:e=>o.createElement(te,(0,a.Z)({as:"h2"},e)),h3:e=>o.createElement(te,(0,a.Z)({as:"h3"},e)),h4:e=>o.createElement(te,(0,a.Z)({as:"h4"},e)),h5:e=>o.createElement(te,(0,a.Z)({as:"h5"},e)),h6:e=>o.createElement(te,(0,a.Z)({as:"h6"},e)),admonition:n(23612).Z,mermaid:()=>null}},13008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),o=n(86010),l=n(39960);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c(e){let{permalink:t,label:n,count:c}=e;return a.createElement(l.Z,{href:t,className:(0,o.Z)(r.tag,c?r.tagWithCount:r.tagRegular)},n,c&&a.createElement("span",null,c))}},74477:(e,t,n)=>{"use strict";n.d(t,{E:()=>c,q:()=>r});var a=n(67294),o=n(902);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}},87594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);