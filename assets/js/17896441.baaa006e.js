(self.webpackChunkmachine_learning=self.webpackChunkmachine_learning||[]).push([["48"],{7594:function(e,t){function n(e){let t,n=[];for(let l of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(l))n.push(parseInt(l,10));else if(t=l.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,l,s,i]=t;if(l&&i){l=parseInt(l);let e=l<(i=parseInt(i))?1:-1;("-"===s||".."===s||"\u2025"===s)&&(i+=e);for(let t=l;t!==i;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>tk});var l=n("5893"),s=n("7294"),i=n("4713"),a=n("5346");let o=s.createContext(null);function r(e){var t;let{children:n,content:i}=e;let a=(t=i,(0,s.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,contentTitle:t.contentTitle,toc:t.toc}),[t]));return(0,l.jsx)(o.Provider,{value:a,children:n})}function c(){let e=(0,s.useContext)(o);if(null===e)throw new a.i6("DocProvider");return e}function d(){var e;let{metadata:t,frontMatter:n,assets:s}=c();return(0,l.jsx)(i.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!==(e=s.image)&&void 0!==e?e:n.image})}var u=n("7026"),m=n("4704"),h=n("6025"),p=n("3012");function f(e){let{permalink:t,title:n,subLabel:s,isNext:i}=e;return(0,l.jsxs)(p.Z,{className:(0,u.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function x(e){let{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(f,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(f,{...n,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){let{metadata:e}=c();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var j=n("2933"),v=n("8057"),g=n("4681"),N=n("3896"),k=n("8529");let y={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){let t=y[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function _(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(p.Z,{to:n,onClick:s,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function B(e){let t,{className:n,versionMetadata:s}=e,{siteConfig:{title:i}}=(0,j.Z)(),{pluginId:a}=(0,v.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,N.J)(a),{latestDocSuggestion:r,latestVersionSuggestion:c}=(0,v.Jo)(a);let d=null!=r?r:(t=c).docs.find(e=>e.id===t.mainDocId);return(0,l.jsxs)("div",{className:(0,u.Z)(n,g.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(C,{siteTitle:i,versionMetadata:s})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(_,{versionLabel:c.label,to:d.path,onClick:()=>o(c.name)})})]})}function w(e){let{className:t}=e,n=(0,k.E)();return n.banner?(0,l.jsx)(B,{className:t,versionMetadata:n}):null}function L(e){let{className:t}=e,n=(0,k.E)();return n.badge?(0,l.jsx)("span",{className:(0,u.Z)(t,g.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}let Z={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function T(e){let{permalink:t,label:n,count:s,description:i}=e;return(0,l.jsxs)(p.Z,{href:t,title:i,className:(0,u.Z)(Z.tag,s?Z.tagWithCount:Z.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}let E="tags_jXut",I="tag_QGVx";function A(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.Z)(E,"padding--none","margin-left--sm"),children:t.map(e=>(0,l.jsx)("li",{className:I,children:(0,l.jsx)(T,{...e})},e.permalink))})]})}let M="iconEdit_Z9Sw";function H(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(M,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function S(e){let{editUrl:t}=e;return(0,l.jsxs)(p.Z,{to:t,className:g.k.common.editThisPage,children:[(0,l.jsx)(H,{}),(0,l.jsx)(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function V(e){let{lastUpdatedAt:t}=e,n=new Date(t),s=(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,j.Z)(),n=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,j.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})})({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function z(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function R(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,l.jsxs)("span",{className:g.k.common.lastUpdated,children:[(0,l.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(V,{lastUpdatedAt:t}):"",byUser:n?(0,l.jsx)(z,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}let U="lastUpdated_JAkA";function O(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:i}=e;return(0,l.jsxs)("div",{className:(0,u.Z)("row",t),children:[(0,l.jsx)("div",{className:"col",children:n&&(0,l.jsx)(S,{editUrl:n})}),(0,l.jsx)("div",{className:(0,u.Z)("col",U),children:(s||i)&&(0,l.jsx)(R,{lastUpdatedAt:s,lastUpdatedBy:i})})]})}function D(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:i}=e,a=i.length>0,o=!!(t||n||s);return a||o?(0,l.jsxs)("footer",{className:(0,u.Z)(g.k.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,l.jsx)("div",{className:(0,u.Z)("row margin-top--sm",g.k.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(A,{tags:i})})}),o&&(0,l.jsx)(O,{className:(0,u.Z)("margin-top--sm",g.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var P=n("7455"),F=n("140");function W(e){let t=e.getBoundingClientRect();return t.top===t.bottom?W(e.parentNode):t}let q=s.memo(function e(t){let{toc:n,className:s,linkClassName:i,isChild:a}=t;return n.length?(0,l.jsx)("ul",{className:a?void 0:s,children:n.map(t=>(0,l.jsxs)("li",{children:[(0,l.jsx)(p.Z,{to:"#".concat(t.id),className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,l.jsx)(e,{isChild:!0,toc:t.children,className:s,linkClassName:i})]},t.id))}):null});function G(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r,...c}=e,d=(0,F.L)(),u=null!=o?o:d.tableOfContents.minHeadingLevel,m=null!=r?r:d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,s.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:l,maxHeadingLevel:s}=t;return n.flatMap(t=>{var n;let i=e({toc:t.children,minHeadingLevel:l,maxHeadingLevel:s});return(n=t).level>=l&&n.level<=s?[{...t,children:i}]:i})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t});let l=[];return t.forEach(e=>{let{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):l.push(s)}),l}(t),minHeadingLevel:n,maxHeadingLevel:l}),[t,n,l])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return!function(e){let t=(0,s.useRef)(void 0),n=function(){let e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,F.L)();return(0,s.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,s.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:l,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:a}=e;function o(){var e;let o=(e=l,Array.from(document.getElementsByClassName(e))),r=function(e,t){var n,l,s;let{anchorTopOffset:i}=t,a=e.find(e=>W(e).top>=i);if(a){;return(s=W(a)).top>0&&s.bottom<window.innerHeight/2?a:null!==(n=e[e.indexOf(a)-1])&&void 0!==n?n:null}return null!==(l=e[e.length-1])&&void 0!==l?l:null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,l=[];for(let e=t;e<=n;e+=1)l.push("h".concat(e,".anchor"));return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),{anchorTopOffset:n.current}),c=o.find(e=>{var t;return r&&r.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});o.forEach(e=>{var n;n=e,e===c?(t.current&&t.current!==n&&t.current.classList.remove(s),n.classList.add(s),t.current=n):n.classList.remove(s)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,s.useMemo)(()=>{if(i&&a)return{linkClassName:i,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:m}},[i,a,u,m])),(0,l.jsx)(q,{toc:h,className:n,linkClassName:i,...c})}let J={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function $(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",J.tocCollapsibleButton,!t&&J.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let Y={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Q(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e,{collapsed:a,toggleCollapsed:o}=(0,P.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(Y.tocCollapsible,!a&&Y.tocCollapsibleExpanded,n),children:[(0,l.jsx)($,{collapsed:a,onClick:o}),(0,l.jsx)(P.z,{lazy:!0,className:Y.tocCollapsibleContent,collapsed:a,children:(0,l.jsx)(G,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})})]})}let X="tocMobile_ITEo";function K(){let{toc:e,frontMatter:t}=c();return(0,l.jsx)(Q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(g.k.docs.docTocMobile,X)})}let ee="tableOfContents_bqdL";function et(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,u.Z)(ee,"thin-scrollbar",t),children:(0,l.jsx)(G,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}function en(){let{toc:e,frontMatter:t}=c();return(0,l.jsx)(et,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var el=n("4403"),es=n("65"),ei=n("4819"),ea=n("7227"),eo=n("4239");function er(){let{prism:e}=(0,F.L)(),{colorMode:t}=(0,eo.I)(),n=e.theme,l=e.darkTheme||n;return"dark"===t?l:n}var ec=n("7594"),ed=n.n(ec);let eu=/title=(?<quote>["'])(?<title>.*?)\1/,em=/\{(?<range>[\d,-]+)\}/,eh={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},ep={...eh,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},ef=Object.keys(eh);function ex(e,t){let n=e.map(e=>{let{start:n,end:l}=ep[e];return"(?:".concat(n,"\\s*(").concat(t.flatMap(e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)}).join("|"),")\\s*").concat(l,")")}).join("|");return new RegExp("^\\s*(?:".concat(n,")\\s*$"))}let eb="codeBlockContainer_Ckt0";function ej(e){let{as:t,...n}=e,s=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[l,s]=e,i=t[l];i&&"string"==typeof s&&(n[i]=s)}),n}(er());return(0,l.jsx)(t,{...n,style:s,className:(0,u.Z)(n.className,eb,g.k.common.codeBlock)})}let ev={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function eg(e){let{children:t,className:n}=e;return(0,l.jsx)(ej,{as:"pre",tabIndex:0,className:(0,u.Z)(ev.codeBlockStandalone,"thin-scrollbar",n),children:(0,l.jsx)("code",{className:ev.codeBlockLines,children:t})})}let eN={attributes:!0,characterData:!0,childList:!0,subtree:!0};var ek=n("3229");let ey={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function eC(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:i,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let o=i({line:t,className:(0,u.Z)(n,s&&ey.codeLine)}),r=t.map((e,t)=>(0,l.jsx)("span",{...a({token:e})},t));return(0,l.jsxs)("span",{...o,children:[s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:ey.codeLineNumber}),(0,l.jsx)("span",{className:ey.codeLineContent,children:r})]}):r,(0,l.jsx)("br",{})]})}function e_(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function eB(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let ew={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function eL(e){let{code:t,className:n}=e,[i,a]=(0,s.useState)(!1),o=(0,s.useRef)(void 0),r=(0,s.useCallback)(()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw TypeError("Expected parameter `text` to be a `string`, got `".concat(typeof e,"`."));let n=document.createElement("textarea"),l=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let s=document.getSelection(),i=s.rangeCount>0&&s.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}n.remove(),i&&(s.removeAllRanges(),s.addRange(i)),l&&l.focus()}(t),a(!0),o.current=window.setTimeout(()=>{a(!1)},1e3)},[t]);return(0,s.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,l.jsx)("button",{type:"button","aria-label":i?(0,h.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,ew.copyButton,i&&ew.copyButtonCopied),onClick:r,children:(0,l.jsxs)("span",{className:ew.copyButtonIcons,"aria-hidden":"true",children:[(0,l.jsx)(e_,{className:ew.copyButtonIcon}),(0,l.jsx)(eB,{className:ew.copyButtonSuccessIcon})]})})}function eZ(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let eT={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function eE(e){let{className:t,onClick:n,isEnabled:s}=e,i=(0,h.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,l.jsx)("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,s&&eT.wordWrapButtonEnabled),"aria-label":i,title:i,children:(0,l.jsx)(eZ,{className:eT.wordWrapButtonIcon,"aria-hidden":"true"})})}function eI(e){var t,n,i,o,r,c;let{children:d,className:m="",metastring:h,title:p,showLineNumbers:f,language:x}=e,{prism:{defaultLanguage:b,magicComments:j}}=(0,F.L)();let v=null==(n=null!==(t=null!=x?x:function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return null==t?void 0:t.replace(/language-/,"")}(m))&&void 0!==t?t:b)?void 0:n.toLowerCase(),g=er(),N=function(){let[e,t]=(0,s.useState)(!1),[n,l]=(0,s.useState)(!1),i=(0,s.useRef)(null),o=(0,s.useCallback)(()=>{let n=i.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[i,e]),r=(0,s.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=i.current;l(e>t||i.current.querySelector("code").hasAttribute("style"))},[i]);return!function(e,t){let[n,l]=(0,s.useState)(),i=(0,s.useCallback)(()=>{var t;l(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))},[e,l]);(0,s.useEffect)(()=>{i()},[i]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:eN,l=(0,a.zX)(t),i=(0,a.Ql)(n);(0,s.useEffect)(()=>{let t=new MutationObserver(l);return e&&t.observe(e,i),()=>t.disconnect()},[e,l,i])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(i,r),(0,s.useEffect)(()=>{r()},[e,r]),(0,s.useEffect)(()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)}),[r]),{codeBlockRef:i,isEnabled:e,isCodeScrollable:n,toggle:o}}();let k=(null!==(r=null==(i=h)?void 0:null===(o=i.match(eu))||void 0===o?void 0:o.groups.title)&&void 0!==r?r:"")||p,{lineClassNames:y,code:C}=function(e,t){let n=e.replace(/\n$/,""),{language:l,magicComments:s,metastring:i}=t;if(i&&em.test(i)){let e=i.match(em).groups.range;if(0===s.length)throw Error("A highlight range has been given in code block's metastring (``` ".concat(i,"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges."));let t=s[0].className;return{lineClassNames:Object.fromEntries(ed()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===l)return{lineClassNames:{},code:n};let a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return ex(["js","jsBlock"],t);case"jsx":case"tsx":return ex(["js","jsBlock","jsx"],t);case"html":return ex(["js","jsBlock","html"],t);case"python":case"py":case"bash":return ex(["bash"],t);case"markdown":case"md":return ex(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return ex(["tex"],t);case"lua":case"haskell":case"sql":return ex(["lua"],t);case"wasm":return ex(["wasm"],t);case"vb":case"vba":case"visual-basic":return ex(["vb","rem"],t);case"vbnet":return ex(["vbnet","rem"],t);case"batch":return ex(["rem"],t);case"basic":return ex(["rem","f90"],t);case"fsharp":return ex(["js","ml"],t);case"ocaml":case"sml":return ex(["ml"],t);case"fortran":return ex(["f90"],t);case"cobol":return ex(["cobol"],t);default:return ex(ef,t)}}(l,s),o=n.split("\n"),r=Object.fromEntries(s.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(s.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),u=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<o.length;){let t=o[e].match(a);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?r[c[n]].range+="".concat(e,","):d[n]?r[d[n]].start=e:u[n]&&(r[u[n]].range+="".concat(r[u[n]].start,"-").concat(e-1,",")),o.splice(e,1)}n=o.join("\n");let m={};return Object.entries(r).forEach(e=>{let[t,{range:n}]=e;ed()(n).forEach(e=>{var n;null!==(n=m[e])&&void 0!==n||(m[e]=[]),m[e].push(t)})}),{lineClassNames:m,code:n}}(d,{metastring:h,language:v,magicComments:j});let _=null!=f?f:!!(null==(c=h)?void 0:c.includes("showLineNumbers"));return(0,l.jsxs)(ej,{as:"div",className:(0,u.Z)(m,v&&!m.includes("language-".concat(v))&&"language-".concat(v)),children:[k&&(0,l.jsx)("div",{className:ev.codeBlockTitle,children:k}),(0,l.jsxs)("div",{className:ev.codeBlockContent,children:[(0,l.jsx)(ek.y$,{theme:g,code:C,language:null!=v?v:"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:i,getTokenProps:a}=e;return(0,l.jsx)("pre",{tabIndex:0,ref:N.codeBlockRef,className:(0,u.Z)(t,ev.codeBlock,"thin-scrollbar"),style:n,children:(0,l.jsx)("code",{className:(0,u.Z)(ev.codeBlockLines,_&&ev.codeBlockLinesWithNumbering),children:s.map((e,t)=>(0,l.jsx)(eC,{line:e,getLineProps:i,getTokenProps:a,classNames:y[t],showLineNumbers:_},t))})})}}),(0,l.jsxs)("div",{className:ev.buttonGroup,children:[(N.isEnabled||N.isCodeScrollable)&&(0,l.jsx)(eE,{className:ev.codeButton,onClick:()=>N.toggle(),isEnabled:N.isEnabled}),(0,l.jsx)(eL,{className:ev.codeButton,code:C})]})]})]})}function eA(e){var t;let{children:n,...i}=e,a=(0,ea.Z)();let o=(t=n,s.Children.toArray(t).some(e=>(0,s.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t);return(0,l.jsx)("string"==typeof o?eI:eg,{...i,children:o},String(a))}function eM(e){return(0,l.jsx)("code",{...e})}var eH=n("1065");let eS={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function eV(e){return!!e&&("SUMMARY"===e.tagName||eV(e.parentElement))}function ez(e){let{summary:t,children:n,...i}=e;(0,eH.Z)().collectAnchor(i.id);let a=(0,ea.Z)(),o=(0,s.useRef)(null),{collapsed:r,setCollapsed:c}=(0,P.u)({initialState:!i.open}),[d,m]=(0,s.useState)(i.open),h=s.isValidElement(t)?t:(0,l.jsx)("summary",{children:null!=t?t:"Details"});return(0,l.jsxs)("details",{...i,ref:o,open:d,"data-collapsed":r,className:(0,u.Z)(eS.details,a&&eS.isBrowser,i.className),onMouseDown:e=>{eV(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();let t=e.target;if(!!(eV(t)&&function e(t,n){return!!t&&(t===n||e(t.parentElement,n))}(t,o.current)))e.preventDefault(),r?(c(!1),m(!0)):c(!0)},children:[h,(0,l.jsx)(P.z,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)},children:(0,l.jsx)("div",{className:eS.collapsibleContent,children:n})})]})}let eR="details_b_Ee";function eU(e){let{...t}=e;return(0,l.jsx)(ez,{...t,className:(0,u.Z)("alert alert--info",eR,t.className)})}function eO(e){let t=s.Children.toArray(e.children),n=t.find(e=>s.isValidElement(e)&&"summary"===e.type),i=(0,l.jsx)(l.Fragment,{children:t.filter(e=>e!==n)});return(0,l.jsx)(eU,{...e,summary:n,children:i})}function eD(e){return(0,l.jsx)(el.Z,{...e})}let eP={containsTaskList:"containsTaskList_mC6p"},eF="img_ev3q",eW={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function eq(e){let{type:t,className:n,children:s}=e;return(0,l.jsx)("div",{className:(0,u.Z)(g.k.common.admonition,g.k.common.admonitionType(t),eW.admonition,n),children:s})}function eG(e){let{icon:t,title:n}=e;return(0,l.jsxs)("div",{className:eW.admonitionHeading,children:[(0,l.jsx)("span",{className:eW.admonitionIcon,children:t}),n]})}function eJ(e){let{children:t}=e;return t?(0,l.jsx)("div",{className:eW.admonitionContent,children:t}):null}function e$(e){let{type:t,icon:n,title:s,children:i,className:a}=e;return(0,l.jsxs)(eq,{type:t,className:a,children:[s||n?(0,l.jsx)(eG,{title:s,icon:n}):null,(0,l.jsx)(eJ,{children:i})]})}let eY={icon:(0,l.jsx)(function(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function eQ(e){return(0,l.jsx)(e$,{...eY,...e,className:(0,u.Z)("alert alert--secondary",e.className),children:e.children})}let eX={icon:(0,l.jsx)(function(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function eK(e){return(0,l.jsx)(e$,{...eX,...e,className:(0,u.Z)("alert alert--success",e.className),children:e.children})}let e0={icon:(0,l.jsx)(function(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function e1(e){return(0,l.jsx)(e$,{...e0,...e,className:(0,u.Z)("alert alert--info",e.className),children:e.children})}function e2(e){return(0,l.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let e3={icon:(0,l.jsx)(e2,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},e5={icon:(0,l.jsx)(function(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},e4={icon:(0,l.jsx)(e2,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},e7={note:eQ,tip:eK,info:e1,warning:function(e){return(0,l.jsx)(e$,{...e3,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,l.jsx)(e$,{...e5,...e,className:(0,u.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,l.jsx)(eQ,{title:"secondary",...e}),important:e=>(0,l.jsx)(e1,{title:"important",...e}),success:e=>(0,l.jsx)(eK,{title:"success",...e}),caution:function(e){return(0,l.jsx)(e$,{...e4,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})}};function e6(e){let t=function(e){var t;let{mdxAdmonitionTitle:n,rest:i}=function(e){let t=s.Children.toArray(e),n=t.find(e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),i=t.filter(e=>e!==n);return{mdxAdmonitionTitle:null==n?void 0:n.props.children,rest:i.length>0?(0,l.jsx)(l.Fragment,{children:i}):null}}(e.children),a=null!==(t=e.title)&&void 0!==t?t:n;return{...e,...a&&{title:a},children:i}}(e),n=function(e){let t=e7[e];return t?t:(console.warn('No admonition component found for admonition type "'.concat(e,'". Using Info as fallback.')),e7.info)}(t.type);return(0,l.jsx)(n,{...t})}let e9={Head:ei.Z,details:eO,Details:eO,code:function(e){var t;return void 0!==(t=e).children&&s.Children.toArray(t.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,l.jsx)(eM,{...e}):(0,l.jsx)(eA,{...e})},a:function(e){return(0,l.jsx)(p.Z,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,u.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&eP.containsTaskList)}(e.className)})},li:function(e){return(0,eH.Z)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){var t;return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.Z)(t,eF))})},h1:e=>(0,l.jsx)(eD,{as:"h1",...e}),h2:e=>(0,l.jsx)(eD,{as:"h2",...e}),h3:e=>(0,l.jsx)(eD,{as:"h3",...e}),h4:e=>(0,l.jsx)(eD,{as:"h4",...e}),h5:e=>(0,l.jsx)(eD,{as:"h5",...e}),h6:e=>(0,l.jsx)(eD,{as:"h6",...e}),admonition:e6,mermaid:()=>null};function e8(e){let{children:t}=e;return(0,l.jsx)(es.Z,{components:e9,children:t})}function te(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return!t.hide_title&&void 0===n?e.title:null}();return(0,l.jsxs)("div",{className:(0,u.Z)(g.k.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(el.Z,{as:"h1",children:n})}),(0,l.jsx)(e8,{children:t})]})}var tt=n("3413"),tn=n("9246"),tl=n("4757");function ts(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}let ti="breadcrumbHomeIcon_YNFT";function ta(){let e=(0,tl.ZP)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(p.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ts,{className:ti})})})}let to="breadcrumbsContainer_Z_bl";function tr(e){let{children:t,href:n,isLast:s}=e,i="breadcrumbs__link";return s?(0,l.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,l.jsx)(p.Z,{className:i,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:i,children:t})}function tc(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,l.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function td(){let e=(0,tt.s1)(),t=(0,tn.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(g.k.docs.docBreadcrumbs,to),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(ta,{}),e.map((t,n)=>{let s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(tc,{active:s,index:n,addMicrodata:!!i,children:(0,l.jsx)(tr,{href:i,isLast:s,children:t.label})},n)})]})}):null}function tu(){return(0,l.jsx)(h.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function tm(){return(0,l.jsx)(h.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function th(){return(0,l.jsx)(ei.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function tp(){return(0,l.jsx)(h.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function tf(){return(0,l.jsx)(h.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function tx(e){let{className:t}=e;return(0,l.jsx)(e6,{type:"caution",title:(0,l.jsx)(tp,{}),className:(0,u.Z)(t,g.k.common.draftBanner),children:(0,l.jsx)(tf,{})})}function tb(e){let{className:t}=e;return(0,l.jsx)(e6,{type:"caution",title:(0,l.jsx)(tu,{}),className:(0,u.Z)(t,g.k.common.unlistedBanner),children:(0,l.jsx)(tm,{})})}function tj(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(th,{}),(0,l.jsx)(tb,{...e})]})}function tv(e){let{metadata:t}=e,{unlisted:n,frontMatter:s}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||s.unlisted)&&(0,l.jsx)(tj,{}),s.draft&&(0,l.jsx)(tx,{})]})}let tg={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function tN(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,i=!s&&t.length>0,a=i?(0,l.jsx)(K,{}):void 0;return{hidden:s,mobile:a,desktop:i&&("desktop"===n||"ssr"===n)?(0,l.jsx)(en,{}):void 0}}(),{metadata:s}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&tg.docItemCol),children:[(0,l.jsx)(tv,{metadata:s}),(0,l.jsx)(w,{}),(0,l.jsxs)("div",{className:tg.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(td,{}),(0,l.jsx)(L,{}),n.mobile,(0,l.jsx)(te,{children:t}),(0,l.jsx)(D,{})]}),(0,l.jsx)(b,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function tk(e){let t="docs-doc-id-".concat(e.content.metadata.id),n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(i.FG,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(tN,{children:(0,l.jsx)(n,{})})]})})}},65:function(e,t,n){"use strict";n.d(t,{Z:function(){return o},a:function(){return a}});var l=n(7294);let s={},i=l.createContext(s);function a(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);