"use strict";(self.webpackChunkmachine_learning=self.webpackChunkmachine_learning||[]).push([[292],{449:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>p,frontMatter:()=>t,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"pca","title":"Principal Component Analysis","description":"Principal Component Analysis (PCA) is a technique to reduce the dimensionality","source":"@site/docs/pca.md","sourceDirName":".","slug":"/pca","permalink":"/machine-learning/pca","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/machine-learning/blob/main/docs/pca.md","tags":[],"version":"current","frontMatter":{"title":"Principal Component Analysis","sidebar_label":"PCA"},"sidebar":"docs","previous":{"title":"Logistic regression","permalink":"/machine-learning/logistic-regression"},"next":{"title":"SVM","permalink":"/machine-learning/svm"}}');var l=a(4848),i=a(8453);const t={title:"Principal Component Analysis",sidebar_label:"PCA"},m=void 0,c={},r=[{value:"Centering of data",id:"centering-of-data",level:3},{value:"First Principal Component",id:"first-principal-component",level:3},{value:"Notebooks",id:"notebooks",level:3}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h3:"h3",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mpadded:"mpadded",mrow:"mrow",mspace:"mspace",mstyle:"mstyle",msub:"msub",msubsup:"msubsup",msup:"msup",mtable:"mtable",mtd:"mtd",mtr:"mtr",munder:"munder",munderover:"munderover",p:"p",path:"path",pre:"pre",semantics:"semantics",span:"span",strong:"strong",svg:"svg",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Principal Component Analysis (PCA) is a technique to reduce the dimensionality\nof a dataset. It helps us to simply a given problem with the loss of minimum\npossible information. We will see that when we work with high dimensional data\nsuch as images, it is important to reduce the dimensionality of the problem both\nfor simplification and computational purpose at the same time without much\ncompromise in the end result."}),"\n",(0,l.jsx)(e.p,{children:"Let us consider the following example. We have a set of two dimensional data,\nwhere x component has 10 times more variation compared to y component. The\nquestion is: can we ignore y component for simplicity?"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'import numpy as np\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"] = 150\nplt.rcParams["figure.facecolor"] = "white"\n\n# create some random data\nx = 10 * np.random.randn(25)\ny = np.random.randn(25)\ny2 = np.zeros(25)\n\nplt.figure(figsize = (8, 3))\n\nplt.subplot(121)\nplt.plot(x, y, "o", markersize=4)\nplt.axvline(c="darkred", lw=0.75)\nplt.axhline(c="darkred", lw=0.75)\nplt.xlabel("x")\nplt.ylabel("y")\nplt.xlim(-20, 20)\nplt.ylim(-20, 20)\n\nplt.subplot(122)\nplt.plot(x, y2, "o", markersize=4)\nplt.axvline(c="darkred", lw=0.75)\nplt.axhline(c="darkred", lw=0.75)\nplt.xlabel("x")\nplt.xlim(-20, 20)\nplt.ylim(-20, 20)\n\nplt.show()\n'})}),"\n",(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{type:"image/webp",srcSet:a(487).A}),(0,l.jsx)("img",{src:a(7086).A,alt:"pca"})]}),"\n",(0,l.jsx)(e.h3,{id:"centering-of-data",children:"Centering of data"}),"\n",(0,l.jsx)(e.p,{children:"In most cases we will transform our data with zero mean. It is always possible\nwithout losing any information."}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"\u02c9"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"x' = x - \\bar{x}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.5678em"}}),(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.5678em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.2222em"},children:(0,l.jsx)(e.span,{className:"mord",children:"\u02c9"})})]})]})})})})]})]})]})}),"\n",(0,l.jsx)(e.p,{children:"Let us consider some real world data, and how we can center."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'import numpy as np\nfrom sklearn import datasets\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"] = 150\nplt.rcParams["figure.facecolor"] = "white"\n\niris = datasets.load_iris()\ndata = iris.data\n\n# data[:4, :]\n# iris.feature_names\n\nsepal_length = data[:, 0]\npetal_length = data[:, 2]\n\nsepal_length_centered = sepal_length - np.mean(sepal_length)\npetal_length_centered = petal_length - np.mean(petal_length)\n\nplt.figure(figsize = (8, 3))\n\nplt.subplot(121)\nplt.plot(sepal_length, petal_length, "o", markersize=4)\nplt.xlabel("Sepal length (mm)")\nplt.ylabel("Petal length (mm)")\n\nplt.subplot(122)\nplt.plot(sepal_length_centered, petal_length_centered, "o", markersize=4)\nplt.axvline(c="darkred", lw=0.75)\nplt.axhline(c="darkred", lw=0.75)\nplt.xlabel("Sepal length (mm)")\n\nplt.show()\n'})}),"\n",(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{type:"image/webp",srcSet:a(3527).A}),(0,l.jsx)("img",{src:a(4270).A,alt:"data-centering"})]}),"\n",(0,l.jsx)(e.h3,{id:"first-principal-component",children:"First Principal Component"}),"\n",(0,l.jsxs)(e.p,{children:["A straight line, which is passing through the origin and the projections of the\ncentered coordinates of initial objects on which have the largest sample\nvariance, is called the ",(0,l.jsx)(e.strong,{children:"first principal component"}),"."]}),"\n",(0,l.jsxs)(e.p,{children:["A unit directional vector ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03d5"}),(0,l.jsx)(e.mn,{children:"1"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\phi_1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03d5"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," of the first principal component is called\nthe ",(0,l.jsx)(e.strong,{children:"loading vector of the first principal component"}),"."]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"A score vector of the first PC"})," is a column vector ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"Z"}),(0,l.jsx)(e.mn,{children:"1"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"Z_1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"Z"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," of the form"]}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"Z"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{fence:"true",children:"("}),(0,l.jsxs)(e.mtable,{rowspacing:"0.16em",columnalign:"center",columnspacing:"1em",children:[(0,l.jsx)(e.mtr,{children:(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"Z"}),(0,l.jsx)(e.mn,{children:"11"})]})})})}),(0,l.jsx)(e.mtr,{children:(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"Z"}),(0,l.jsx)(e.mn,{children:"12"})]})})})}),(0,l.jsx)(e.mtr,{children:(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.mi,{children:[(0,l.jsx)(e.mi,{mathvariant:"normal",children:"\u22ee"}),(0,l.jsx)(e.mpadded,{height:"0em",voffset:"0em",children:(0,l.jsx)(e.mspace,{mathbackground:"black",width:"0em",height:"1.5em"})})]})})})}),(0,l.jsx)(e.mtr,{children:(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"Z"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mi,{children:"n"})]})]})})})})]}),(0,l.jsx)(e.mo,{fence:"true",children:")"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"Z_1 = \\begin{pmatrix} Z_{11} \\\\ Z_{12} \\\\ \\vdots \\\\ Z_{1n} \\end{pmatrix}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"Z"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"5.46em",verticalAlign:"-2.48em"}}),(0,l.jsxs)(e.span,{className:"minner",children:[(0,l.jsx)(e.span,{className:"mopen",children:(0,l.jsx)(e.span,{className:"delimsizing mult",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"2.95em"},children:(0,l.jsxs)(e.span,{style:{top:"-4.95em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"7.4em"}}),(0,l.jsx)(e.span,{style:{width:"0.875em",height:"5.400em"},children:(0,l.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"0.875em",height:"5.400em",viewBox:"0 0 875 5400",children:(0,l.jsx)(e.path,{d:"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,1884c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-1892c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"2.45em"},children:(0,l.jsx)(e.span,{})})})]})})}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mtable",children:(0,l.jsx)(e.span,{className:"col-align-c",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"2.98em"},children:[(0,l.jsxs)(e.span,{style:{top:"-5.8275em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.6875em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"Z"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"11"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.6275em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.6875em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"Z"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"12"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-2.7675em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.6875em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"\u22ee"}),(0,l.jsx)(e.span,{className:"mord rule",style:{borderRightWidth:"0em",borderTopWidth:"1.5em",bottom:"0em"}})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-1.5675em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.6875em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"Z"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mtight",children:"1"}),(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})]})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"2.48em"},children:(0,l.jsx)(e.span,{})})})]})})})}),(0,l.jsx)(e.span,{className:"mclose",children:(0,l.jsx)(e.span,{className:"delimsizing mult",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"2.95em"},children:(0,l.jsxs)(e.span,{style:{top:"-4.95em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"7.4em"}}),(0,l.jsx)(e.span,{style:{width:"0.875em",height:"5.400em"},children:(0,l.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"0.875em",height:"5.400em",viewBox:"0 0 875 5400",children:(0,l.jsx)(e.path,{d:"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,1809\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-1944c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"2.45em"},children:(0,l.jsx)(e.span,{})})})]})})})]})]})]})]})}),"\n",(0,l.jsx)(e.p,{children:"consisting of the projections of the centered input data coordinates onto the\nloading vector fo the first principal component."}),"\n",(0,l.jsx)(e.p,{children:"How to find the first principal component?"}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"arg"}),(0,l.jsx)(e.mo,{children:"\u2061"}),(0,l.jsxs)(e.munder,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"max"}),(0,l.jsx)(e.mo,{children:"\u2061"})]}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03d5"}),(0,l.jsx)(e.mn,{children:"1"})]})]}),(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"2.4em",maxsize:"2.4em",children:"("}),(0,l.jsxs)(e.mfrac,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mi,{children:"n"})]}),(0,l.jsxs)(e.munderover,{children:[(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mi,{children:"n"})]}),(0,l.jsxs)(e.msubsup,{children:[(0,l.jsx)(e.mi,{children:"Z"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"2.4em",maxsize:"2.4em",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\arg\\max\\limits_{\\phi_1} \\bigg( \\frac{1}{n} \\sum \\limits_{i=1}^n Z_{i1}^2 \\bigg)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"2.9291em",verticalAlign:"-1.2777em"}}),(0,l.jsxs)(e.span,{className:"mop",children:["ar",(0,l.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mop op-limits",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.4306em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.3479em",marginLeft:"0em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"\u03d5"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3173em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,l.jsx)(e.span,{})})})]})})]})})})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{children:(0,l.jsx)(e.span,{className:"mop",children:"max"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8882em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size3",children:"("})}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mop op-limits",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.6514em"},children:[(0,l.jsxs)(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,l.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{children:(0,l.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"1.2777em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"Z"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.8641em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.453em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.247em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size3",children:")"})})]})})]})}),"\n",(0,l.jsx)(e.p,{children:"We can find the subsequent principal components orthogonal to the previous ones\nwhich makes sure that the principal components are not correlated."}),"\n",(0,l.jsx)(e.h3,{id:"notebooks",children:"Notebooks"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/pranabdas/machine-learning/blob/master/notebooks/pca-introduction.ipynb",children:"PCA Introduction"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/pranabdas/machine-learning/blob/master/notebooks/07-pca-iris-dataset.ipynb",children:"Principal Component Analysis on Iris dataset"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/pranabdas/machine-learning/blob/master/notebooks/08-pca-mnist-dataset.ipynb",children:"Principal Component Analysis on MNIST dataset"})}),"\n"]})]})}function p(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},4270:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/data-centering-c0381984f92efcbeb8155a51238790e5.png"},3527:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/data-centering-2f0984fff2a570a860ddf795c3bb9ff0.webp"},7086:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/pca-2b466e8d52572fd1c4eeee497824da56.png"},487:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/pca-827fbe26439b9aa5352062efd300dc2d.webp"},8453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>m});var n=a(6540);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);