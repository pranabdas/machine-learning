"use strict";(self.webpackChunkmachine_learning=self.webpackChunkmachine_learning||[]).push([[314],{5457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"boosting","title":"Boosting","description":"Boosting is an ensemble classifier, meaning it combines multiple algorithms.","source":"@site/docs/boosting.md","sourceDirName":".","slug":"/boosting","permalink":"/machine-learning/boosting","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/machine-learning/blob/main/docs/boosting.md","tags":[],"version":"current","frontMatter":{"title":"Boosting"},"sidebar":"docs","previous":{"title":"Random Forrest","permalink":"/machine-learning/random-forrest"},"next":{"title":"Resources","permalink":"/machine-learning/resources"}}');var i=n(4848),s=n(8453);const a={title:"Boosting"},r=void 0,l={},c=[{value:"AdaBoost (Adaptive Boosting)",id:"adaboost",level:3},{value:"Resources",id:"resources",level:3}];function h(e){const t={a:"a",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Boosting is an ensemble classifier, meaning it combines multiple algorithms.\nBoosting can be used to improve the performance of weak learner. If we have an\nalgorithm that is better than random but performs poorly by itself. In such\nsituations, boosting can be used to improve its performance. During training,\nboosting goes through the dataset several times. We use our actual algorithm,\nand look into its results. If the algorithm predicts correct result for a data\npoint, we leave the weight of that data points as it is. However, if the\nalgorithm predicts wrong, we increase the weight of those data points (a weight\nof 2, means having that data point twice) and apply our algorithm again. Most\nlikely, we will obtain different prediction output. We repeat the process for\ncertain number of times. Our final boosting algorithm is a weighted (this weight\nis the ratio of how well a specific boosting performed) sum of all these\nindividual boosting. Overall this can improve the performance of a weak learning\nalgorithm drastically."}),"\n",(0,i.jsx)(t.h3,{id:"adaboost",children:"AdaBoost (Adaptive Boosting)"}),"\n",(0,i.jsx)(t.h3,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://api.semanticscholar.org/CorpusID:1836349",children:"Original AdaBoost paper"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);