"use strict";(self.webpackChunkmachine_learning=self.webpackChunkmachine_learning||[]).push([[174],{6146:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"logistic-regression","title":"Logistic regression","description":"Logistic regression : conditional probability","source":"@site/docs/logistic-regression.md","sourceDirName":".","slug":"/logistic-regression","permalink":"/machine-learning/logistic-regression","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/machine-learning/blob/main/docs/logistic-regression.md","tags":[],"version":"current","frontMatter":{"title":"Logistic regression"},"sidebar":"docs","previous":{"title":"Ridge regression","permalink":"/machine-learning/ridge-regression"},"next":{"title":"PCA","permalink":"/machine-learning/pca"}}');var i=a(4848),l=a(8453);const t={title:"Logistic regression"},r=void 0,c={},m=[{value:"Logistic regression : conditional probability",id:"logistic-regression--conditional-probability",level:3},{value:"Notebooks",id:"notebooks",level:3}];function h(s){const e={a:"a",annotation:"annotation",h3:"h3",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"logistic-regression--conditional-probability",children:"Logistic regression : conditional probability"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Sigmoid/Squashing function:"})}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsxs)(e.mfrac,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mi,{children:"x"})]})]})]})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"s(x) = \\frac{1}{1 + e^{-x}}"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"2.0908em",verticalAlign:"-0.7693em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,i.jsx)(e.span,{className:"mfrac",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,i.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.6973em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.989em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mtight",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})]})})]})})})})})]})]})]}),(0,i.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,i.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"mord",children:(0,i.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.7693em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"x"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]})," can have range [-",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u221e"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\infty"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord",children:"\u221e"})]})})]}),", +",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u221e"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\infty"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord",children:"\u221e"})]})})]}),"], while ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"s"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," have range [0, 1]."]}),"\n",(0,i.jsx)(e.p,{children:"When we are on a decision boundary, the probability is equal for both outcomes.\nWhen we move away from the decision boundary, we have certain outcome more\nlikely."}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"P"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"y"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsxs)(e.mfrac,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mi,{children:"y"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"w"}),(0,i.jsx)(e.mo,{children:"\u22c5"}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mi,{children:"b"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]})]})]})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"Pr(y|x) = \\frac{1}{1 + e^{-y (w \\cdot x + b)}}"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"2.1088em",verticalAlign:"-0.7873em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,i.jsx)(e.span,{className:"mfrac",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,i.jsxs)(e.span,{style:{top:"-2.296em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.814em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.989em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mtight",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"},children:"w"}),(0,i.jsx)(e.span,{className:"mbin mtight",children:"\u22c5"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"}),(0,i.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"b"}),(0,i.jsx)(e.span,{className:"mclose mtight",children:")"})]})})]})})})})})]})]})]}),(0,i.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,i.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"mord",children:(0,i.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.7873em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,i.jsx)(e.p,{children:"Sigmoid function is linear near 0, and has sharp slopes towards the ends. It\nsquashes the outliers towards 0 or 1."}),"\n",(0,i.jsx)(e.p,{children:"The data is fitted with the linear regression model, then a logistic function is\nused to predict the categorical target."}),"\n",(0,i.jsx)(e.h3,{id:"notebooks",children:"Notebooks"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/pranabdas/machine-learning/blob/master/notebooks/05-logistic-regression-titanic.ipynb",children:"Logistic regression to predict the survival of titanic passengers"})}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>r});var n=a(6540);const i={},l=n.createContext(i);function t(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);