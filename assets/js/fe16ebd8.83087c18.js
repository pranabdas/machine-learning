"use strict";(self.webpackChunkmachine_learning=self.webpackChunkmachine_learning||[]).push([[89],{3905:function(a,e,t){t.d(e,{Zo:function(){return N},kt:function(){return k}});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function p(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},p=Object.keys(a);for(s=0;s<p.length;s++)t=p[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(s=0;s<p.length;s++)t=p[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),i=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},N=function(a){var e=i(a.components);return s.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},o=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,p=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),o=i(t),k=n,h=o["".concat(l,".").concat(k)]||o[k]||c[k]||p;return t?s.createElement(h,m(m({ref:e},N),{},{components:t})):s.createElement(h,m({ref:e},N))}));function k(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var p=t.length,m=new Array(p);m[0]=o;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:n,m[1]=r;for(var i=2;i<p;i++)m[i]=t[i];return s.createElement.apply(null,m)}return s.createElement.apply(null,t)}o.displayName="MDXCreateElement"},2168:function(a,e,t){t.r(e),t.d(e,{assets:function(){return N},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c}});var s=t(7462),n=t(3366),p=(t(7294),t(3905)),m=["components"],r={title:"Principal Component Analysis",sidebar_label:"PCA"},l=void 0,i={unversionedId:"pca",id:"pca",title:"Principal Component Analysis",description:"Principal Component Analysis (PCA) is a technique to reduce the dimensionality",source:"@site/docs/pca.md",sourceDirName:".",slug:"/pca",permalink:"/machine-learning/pca",draft:!1,editUrl:"https://github.com/pranabdas/machine-learning/blob/main/docs/pca.md",tags:[],version:"current",frontMatter:{title:"Principal Component Analysis",sidebar_label:"PCA"},sidebar:"docs",previous:{title:"Logistic regression",permalink:"/machine-learning/logistic-regression"},next:{title:"SVM",permalink:"/machine-learning/svm"}},N={},c=[{value:"Centering of data",id:"centering-of-data",level:3},{value:"First Principal Component",id:"first-principal-component",level:3},{value:"Notebooks",id:"notebooks",level:3}],o={toc:c};function k(a){var e=a.components,r=(0,n.Z)(a,m);return(0,p.kt)("wrapper",(0,s.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Principal Component Analysis (PCA) is a technique to reduce the dimensionality\nof a dataset. It helps us to simply a given problem with the loss of minimum\npossible information. We will see that when we work with high dimensional data\nsuch as images, it is important to reduce the dimensionality of the problem both\nfor simplification and computational purpose at the same time without much\ncompromise in the end result."),(0,p.kt)("p",null,"Let us consider the following example. We have a set of two dimensional data,\nwhere x component has 10 times more variation compared to y component. The\nquestion is: can we ignore y component for simplicity?"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"] = 150\nplt.rcParams["figure.facecolor"] = "white"\n\n# create some random data\nx = 10 * np.random.randn(25)\ny = np.random.randn(25)\ny2 = np.zeros(25)\n\nplt.figure(figsize = (8, 3))\n\nplt.subplot(121)\nplt.plot(x, y, "o", markersize=4)\nplt.axvline(c="darkred", lw=0.75)\nplt.axhline(c="darkred", lw=0.75)\nplt.xlabel("x")\nplt.ylabel("y")\nplt.xlim(-20, 20)\nplt.ylim(-20, 20)\n\nplt.subplot(122)\nplt.plot(x, y2, "o", markersize=4)\nplt.axvline(c="darkred", lw=0.75)\nplt.axhline(c="darkred", lw=0.75)\nplt.xlabel("x")\nplt.xlim(-20, 20)\nplt.ylim(-20, 20)\n\nplt.show()\n')),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:t(5428).Z}),(0,p.kt)("img",{src:t(6011).Z,alt:"pca"})),(0,p.kt)("h3",{id:"centering-of-data"},"Centering of data"),(0,p.kt)("p",null,"In most cases we will transform our data with zero mean. It is always possible\nwithout losing any information."),(0,p.kt)("p",null,(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("msup",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msup"},"x"),(0,p.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mi",{parentName:"mrow"},"x"),(0,p.kt)("mo",{parentName:"mrow"},"\u2212"),(0,p.kt)("mover",{parentName:"mrow",accent:"true"},(0,p.kt)("mi",{parentName:"mover"},"x"),(0,p.kt)("mo",{parentName:"mover"},"\u02c9"))),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x' = x - \\bar{x}")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7519em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5678em"}}),(0,p.kt)("span",{parentName:"span",className:"mord accent"},(0,p.kt)("span",{parentName:"span",className:"vlist-t"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.5678em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")),(0,p.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2222em"}},(0,p.kt)("span",{parentName:"span",className:"mord"},"\u02c9")))))))))))),(0,p.kt)("p",null,"Let us consider some real world data, and how we can center."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nfrom sklearn import datasets\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"] = 150\nplt.rcParams["figure.facecolor"] = "white"\n\niris = datasets.load_iris()\ndata = iris.data\n\n# data[:4, :]\n# iris.feature_names\n\nsepal_length = data[:, 0]\npetal_length = data[:, 2]\n\nsepal_length_centered = sepal_length - np.mean(sepal_length)\npetal_length_centered = petal_length - np.mean(petal_length)\n\nplt.figure(figsize = (8, 3))\n\nplt.subplot(121)\nplt.plot(sepal_length, petal_length, "o", markersize=4)\nplt.xlabel("Sepal length (mm)")\nplt.ylabel("Petal length (mm)")\n\nplt.subplot(122)\nplt.plot(sepal_length_centered, petal_length_centered, "o", markersize=4)\nplt.axvline(c="darkred", lw=0.75)\nplt.axhline(c="darkred", lw=0.75)\nplt.xlabel("Sepal length (mm)")\n\nplt.show()\n')),(0,p.kt)("picture",null,(0,p.kt)("source",{type:"image/webp",srcSet:t(6911).Z}),(0,p.kt)("img",{src:t(8898).Z,alt:"data-centering"})),(0,p.kt)("h3",{id:"first-principal-component"},"First Principal Component"),(0,p.kt)("p",null,"A straight line, which is passing through the origin and the projections of the\ncentered coordinates of initial objects on which have the largest sample\nvariance, is called the ",(0,p.kt)("strong",{parentName:"p"},"first principal component"),"."),(0,p.kt)("p",null,"A unit directional vector ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"\u03d5"),(0,p.kt)("mn",{parentName:"msub"},"1"))),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\phi_1")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03d5"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"}))))))))))," of the first principal component is called\nthe ",(0,p.kt)("strong",{parentName:"p"},"loading vector of the first principal component"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"A score vector of the first PC")," is a column vector ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"Z"),(0,p.kt)("mn",{parentName:"msub"},"1"))),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Z_1")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"Z"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"}))))))))))," of the form"),(0,p.kt)("div",{className:"math math-display"},(0,p.kt)("span",{parentName:"div",className:"katex-display"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("msub",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msub"},"Z"),(0,p.kt)("mn",{parentName:"msub"},"1")),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mrow",{parentName:"mrow"},(0,p.kt)("mo",{parentName:"mrow",fence:"true"},"("),(0,p.kt)("mtable",{parentName:"mrow",rowspacing:"0.16em",columnalign:"center",columnspacing:"1em"},(0,p.kt)("mtr",{parentName:"mtable"},(0,p.kt)("mtd",{parentName:"mtr"},(0,p.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,p.kt)("msub",{parentName:"mstyle"},(0,p.kt)("mi",{parentName:"msub"},"Z"),(0,p.kt)("mn",{parentName:"msub"},"11"))))),(0,p.kt)("mtr",{parentName:"mtable"},(0,p.kt)("mtd",{parentName:"mtr"},(0,p.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,p.kt)("msub",{parentName:"mstyle"},(0,p.kt)("mi",{parentName:"msub"},"Z"),(0,p.kt)("mn",{parentName:"msub"},"12"))))),(0,p.kt)("mtr",{parentName:"mtable"},(0,p.kt)("mtd",{parentName:"mtr"},(0,p.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,p.kt)("mi",{parentName:"mstyle"},(0,p.kt)("mi",{parentName:"mi",mathvariant:"normal"},"\u22ee"),(0,p.kt)("mpadded",{parentName:"mi",height:"0em",voffset:"0em"},(0,p.kt)("mspace",{parentName:"mpadded",mathbackground:"black",width:"0em",height:"1.5em"})))))),(0,p.kt)("mtr",{parentName:"mtable"},(0,p.kt)("mtd",{parentName:"mtr"},(0,p.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,p.kt)("msub",{parentName:"mstyle"},(0,p.kt)("mi",{parentName:"msub"},"Z"),(0,p.kt)("mrow",{parentName:"msub"},(0,p.kt)("mn",{parentName:"mrow"},"1"),(0,p.kt)("mi",{parentName:"mrow"},"n"))))))),(0,p.kt)("mo",{parentName:"mrow",fence:"true"},")"))),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Z_1 = \\begin{pmatrix} Z_{11} \\\\ Z_{12} \\\\ \\vdots \\\\ Z_{1n} \\end{pmatrix}")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"Z"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"5.46em",verticalAlign:"-2.48em"}}),(0,p.kt)("span",{parentName:"span",className:"minner"},(0,p.kt)("span",{parentName:"span",className:"mopen"},(0,p.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.95em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.011em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.816em"}}),(0,p.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,p.kt)("span",{parentName:"span"},"\u239d"))),(0,p.kt)("span",{parentName:"span",style:{top:"-3.158em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.816em"}}),(0,p.kt)("span",{parentName:"span",style:{height:"1.816em",width:"0.875em"}},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.875em",height:"1.816em",style:{width:"0.875em"},viewBox:"0 0 875 1816",preserveAspectRatio:"xMinYMin"},(0,p.kt)("path",{parentName:"svg",d:"M291 0 H417 V1816 H291z M291 0 H417 V1816 H291z"})))),(0,p.kt)("span",{parentName:"span",style:{top:"-5.6111em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.816em"}}),(0,p.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,p.kt)("span",{parentName:"span"},"\u239b")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.45em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mtable"},(0,p.kt)("span",{parentName:"span",className:"col-align-c"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.98em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-5.8275em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.6875em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"Z"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"11"))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"})))))))),(0,p.kt)("span",{parentName:"span",style:{top:"-4.6275em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.6875em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"Z"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"12"))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"})))))))),(0,p.kt)("span",{parentName:"span",style:{top:"-2.7675em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.6875em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord"},"\u22ee"),(0,p.kt)("span",{parentName:"span",className:"mord rule",style:{borderRightWidth:"0em",borderTopWidth:"1.5em",bottom:"0em"}})))),(0,p.kt)("span",{parentName:"span",style:{top:"-1.5675em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.6875em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"Z"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,p.kt)("span",{parentName:"span"}))))))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.48em"}},(0,p.kt)("span",{parentName:"span"}))))))),(0,p.kt)("span",{parentName:"span",className:"mclose"},(0,p.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.95em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.011em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.816em"}}),(0,p.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,p.kt)("span",{parentName:"span"},"\u23a0"))),(0,p.kt)("span",{parentName:"span",style:{top:"-3.158em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.816em"}}),(0,p.kt)("span",{parentName:"span",style:{height:"1.816em",width:"0.875em"}},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.875em",height:"1.816em",style:{width:"0.875em"},viewBox:"0 0 875 1816",preserveAspectRatio:"xMinYMin"},(0,p.kt)("path",{parentName:"svg",d:"M457 0 H583 V1816 H457z M457 0 H583 V1816 H457z"})))),(0,p.kt)("span",{parentName:"span",style:{top:"-5.6111em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.816em"}}),(0,p.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,p.kt)("span",{parentName:"span"},"\u239e")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.45em"}},(0,p.kt)("span",{parentName:"span"})))))))))))),(0,p.kt)("p",null,"consisting of the projections of the centered input data coordinates onto the\nloading vector fo the first principal component."),(0,p.kt)("p",null,"How to find the first principal component?"),(0,p.kt)("div",{className:"math math-display"},(0,p.kt)("span",{parentName:"div",className:"katex-display"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"arg"),(0,p.kt)("mo",{parentName:"mrow"},"\u2061"),(0,p.kt)("munder",{parentName:"mrow"},(0,p.kt)("mrow",{parentName:"munder"},(0,p.kt)("mi",{parentName:"mrow"},"max"),(0,p.kt)("mo",{parentName:"mrow"},"\u2061")),(0,p.kt)("msub",{parentName:"munder"},(0,p.kt)("mi",{parentName:"msub"},"\u03d5"),(0,p.kt)("mn",{parentName:"msub"},"1"))),(0,p.kt)("mo",{parentName:"mrow",fence:"false",stretchy:"true",minsize:"2.4em",maxsize:"2.4em"},"("),(0,p.kt)("mfrac",{parentName:"mrow"},(0,p.kt)("mn",{parentName:"mfrac"},"1"),(0,p.kt)("mi",{parentName:"mfrac"},"n")),(0,p.kt)("munderover",{parentName:"mrow"},(0,p.kt)("mo",{parentName:"munderover"},"\u2211"),(0,p.kt)("mrow",{parentName:"munderover"},(0,p.kt)("mi",{parentName:"mrow"},"i"),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mn",{parentName:"mrow"},"1")),(0,p.kt)("mi",{parentName:"munderover"},"n")),(0,p.kt)("msubsup",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msubsup"},"Z"),(0,p.kt)("mrow",{parentName:"msubsup"},(0,p.kt)("mi",{parentName:"mrow"},"i"),(0,p.kt)("mn",{parentName:"mrow"},"1")),(0,p.kt)("mn",{parentName:"msubsup"},"2")),(0,p.kt)("mo",{parentName:"mrow",fence:"false",stretchy:"true",minsize:"2.4em",maxsize:"2.4em"},")")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\arg\\max\\limits_{\\phi_1} \\bigg( \\frac{1}{n} \\sum \\limits_{i=1}^n Z_{i1}^2 \\bigg)")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"2.9291em",verticalAlign:"-1.2777em"}}),(0,p.kt)("span",{parentName:"span",className:"mop"},"ar",(0,p.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mop op-limits"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4306em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.3479em",marginLeft:"0em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"\u03d5"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3173em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.0714em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},(0,p.kt)("span",{parentName:"span"}))))))))),(0,p.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span"},(0,p.kt)("span",{parentName:"span",className:"mop"},"max")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8882em"}},(0,p.kt)("span",{parentName:"span"}))))),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"delimsizing size3"},"(")),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,p.kt)("span",{parentName:"span",className:"mfrac"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3214em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,p.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,p.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,p.kt)("span",{parentName:"span"}))))),(0,p.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mop op-limits"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.6514em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-1.8723em",marginLeft:"0em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,p.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,p.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,p.kt)("span",{parentName:"span"},(0,p.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211"))),(0,p.kt)("span",{parentName:"span",style:{top:"-4.3em",marginLeft:"0em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.2777em"}},(0,p.kt)("span",{parentName:"span"}))))),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"Z"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8641em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.453em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,p.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.247em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"delimsizing size3"},")"))))))),(0,p.kt)("p",null,"We can find the subsequent principal components orthogonal to the previous ones\nwhich makes sure that the principal components are not correlated."),(0,p.kt)("h3",{id:"notebooks"},"Notebooks"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/pranabdas/machine-learning/blob/master/notebooks/pca-introduction.ipynb"},"PCA Introduction")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/pranabdas/machine-learning/blob/master/notebooks/07-pca-iris-dataset.ipynb"},"Principal Component Analysis on Iris dataset")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/pranabdas/machine-learning/blob/master/notebooks/08-pca-mnist-dataset.ipynb"},"Principal Component Analysis on MNIST dataset"))))}k.isMDXComponent=!0},8898:function(a,e,t){e.Z=t.p+"assets/images/data-centering-c0381984f92efcbeb8155a51238790e5.png"},6911:function(a,e,t){e.Z=t.p+"assets/images/data-centering-2f0984fff2a570a860ddf795c3bb9ff0.webp"},6011:function(a,e,t){e.Z=t.p+"assets/images/pca-2b466e8d52572fd1c4eeee497824da56.png"},5428:function(a,e,t){e.Z=t.p+"assets/images/pca-827fbe26439b9aa5352062efd300dc2d.webp"}}]);