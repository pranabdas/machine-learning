"use strict";(self.webpackChunkmachine_learning=self.webpackChunkmachine_learning||[]).push([[890],{8532:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"basic-stat","title":"Basic Statistical Analysis","description":"Univariate dataset","source":"@site/docs/basic-stat.md","sourceDirName":".","slug":"/basic-stat","permalink":"/machine-learning/basic-stat","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/machine-learning/blob/main/docs/basic-stat.md","tags":[],"version":"current","frontMatter":{"title":"Basic Statistical Analysis"},"sidebar":"docs","previous":{"title":"Probability and Statistics","permalink":"/machine-learning/probability-statistics"},"next":{"title":"Optimization","permalink":"/machine-learning/optimization"}}');var t=s(4848),i=s(8453);const l={title:"Basic Statistical Analysis"},r=void 0,d={},o=[{value:"Univariate dataset",id:"univariate-dataset",level:2},{value:"Count, min and max",id:"count-min-and-max",level:4},{value:"Mean and standard deviation",id:"mean-and-standard-deviation",level:4},{value:"Inter quartile ranges",id:"inter-quartile-ranges",level:4},{value:"Standard score or z-score",id:"standard-score-or-z-score",level:4},{value:"Histogram plot",id:"histogram-plot",level:3},{value:"Box plot",id:"box-plot",level:3},{value:"Violin plot",id:"violin-plot",level:3},{value:"Q-Q plot",id:"q-q-plot",level:3},{value:"Multivariate dataset",id:"multivariate-dataset",level:2},{value:"Notebooks",id:"notebooks",level:2},{value:"Resources",id:"resources",level:2}];function c(e){const a={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mo:"mo",mrow:"mrow",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"univariate-dataset",children:"Univariate dataset"}),"\n",(0,t.jsx)(a.p,{children:"Here we will look into some simple (univariate) dataset, and see how can we\nstatistically describe the dataset. We work on a Jupyter notebook. First let us\nload the python libraries we will be using:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'import matplotlib.pyplot as plt\nimport pandas as pd\nimport seaborn as sns\n\n# some matplotlib configs\n%matplotlib inline\nplt.rcParams["figure.dpi"] = 150\nplt.rcParams["figure.facecolor"] = "white"\n'})}),"\n",(0,t.jsx)(a.p,{children:"Let us load our dataset of human heights (in inches). The dataset contains more\ncolumns (variables), but we will be looking only in the height."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'data = pd.read_csv("../datasets/height-weight.csv", usecols=[1])\ndata.head()\n'})}),"\n",(0,t.jsxs)(a.p,{children:["And we will see an output like below. You can also pass an argument to the\n",(0,t.jsx)(a.code,{children:"head"})," method (e.g., ",(0,t.jsx)(a.code,{children:"data.head(10)"}),") to display certain number of rows instead\nof default 5."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"   Height(Inches)\n0        65.78331\n1        71.51521\n2        69.39874\n3        68.21660\n4        67.78781\n"})}),"\n",(0,t.jsxs)(a.p,{children:["We can a get a summary of our data using pandas ",(0,t.jsx)(a.code,{children:"describe"})," method:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:"data.describe()\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"\n       Height(Inches)\ncount    25000.000000\nmean        67.993114\nstd          1.901679\nmin         60.278360\n25%         66.704397\n50%         67.995700\n75%         69.272958\nmax         75.152800\n"})}),"\n",(0,t.jsx)(a.p,{children:"Now let us try to understand what these various quantities means."}),"\n",(0,t.jsx)(a.h4,{id:"count-min-and-max",children:"Count, min and max"}),"\n",(0,t.jsx)(a.p,{children:"Count is the number of data points we have in our dataset. Min and max are the\nlowest and highest values of data points, respectively."}),"\n",(0,t.jsx)(a.h4,{id:"mean-and-standard-deviation",children:"Mean and standard deviation"}),"\n",(0,t.jsxs)(a.p,{children:["We have seen ",(0,t.jsx)(a.a,{href:"/machine-learning/probability-statistics",children:"previously"})," how they are defined.\nMean gives us an idea where our data is centered around. Standard deviation\ntells us how our data is distributed or spread. 66.67% of our data points falls\nin the range ",(0,t.jsx)(a.code,{children:"mean \xb1 std"}),", about 95% of our samples falls in the range\n",(0,t.jsx)(a.code,{children:"mean \xb1 2*std"})," and 99.7% of our data falls in the range ",(0,t.jsx)(a.code,{children:"mean \xb1 3*std"}),". Standard\ndeviation is the average distance our data points fall from the mean value."]}),"\n",(0,t.jsx)(a.h4,{id:"inter-quartile-ranges",children:"Inter quartile ranges"}),"\n",(0,t.jsx)(a.p,{children:"The quantities 25%, 50%, and 75% are inter quartile ranges, sometimes referred\nto as first, second, and third quartile as well. Second quartile is also known\nas median. First quartile gives the value where 25% of data points falls below.\nInter quartile range is defined as the (3rd quartile - 1st quartile); in our\ncase (69.272958 - 66.704397) = 2.568561. This also describes how hour data\npoints are distributed. Range is defined as (max value - min value)."}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"In case of symmetrical dataset, the mean and median will have the same value. If\nthe data is right skewed, the mean will be higher than median. Conversely, if\nthe data is left skewed, the average will lower than the median."})}),"\n",(0,t.jsx)(a.h4,{id:"standard-score-or-z-score",children:"Standard score or z-score"}),"\n",(0,t.jsx)(a.p,{children:"Standard score or z-score of a specific data point is given by"}),"\n",(0,t.jsx)(a.span,{className:"katex-display",children:(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"z"}),(0,t.jsx)(a.mtext,{children:"-score"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsxs)(a.mfrac,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mtext,{children:"value"}),(0,t.jsx)(a.mo,{children:"\u2212"}),(0,t.jsx)(a.mtext,{children:"mean"})]}),(0,t.jsx)(a.mtext,{children:"standard\xa0deviation"})]})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"z\\text{-score} = \\frac{\\text{value} - \\text{mean}}{\\text{standard~deviation}}"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,t.jsx)(a.span,{className:"mord text",children:(0,t.jsx)(a.span,{className:"mord",children:"-score"})}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"2.0574em",verticalAlign:"-0.686em"}}),(0,t.jsxs)(a.span,{className:"mord",children:[(0,t.jsx)(a.span,{className:"mopen nulldelimiter"}),(0,t.jsx)(a.span,{className:"mfrac",children:(0,t.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(a.span,{className:"vlist-r",children:[(0,t.jsxs)(a.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,t.jsxs)(a.span,{style:{top:"-2.314em"},children:[(0,t.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(a.span,{className:"mord",children:(0,t.jsxs)(a.span,{className:"mord text",children:[(0,t.jsx)(a.span,{className:"mord",children:"standard"}),(0,t.jsx)(a.span,{className:"mord nobreak",children:"\xa0"}),(0,t.jsx)(a.span,{className:"mord",children:"deviation"})]})})]}),(0,t.jsxs)(a.span,{style:{top:"-3.23em"},children:[(0,t.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(a.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,t.jsxs)(a.span,{style:{top:"-3.677em"},children:[(0,t.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsxs)(a.span,{className:"mord",children:[(0,t.jsx)(a.span,{className:"mord text",children:(0,t.jsx)(a.span,{className:"mord",children:"value"})}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(a.span,{className:"mord text",children:(0,t.jsx)(a.span,{className:"mord",children:"mean"})})]})]})]}),(0,t.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(a.span,{className:"vlist-r",children:(0,t.jsx)(a.span,{className:"vlist",style:{height:"0.686em"},children:(0,t.jsx)(a.span,{})})})]})}),(0,t.jsx)(a.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,t.jsx)(a.h3,{id:"histogram-plot",children:"Histogram plot"}),"\n",(0,t.jsxs)(a.p,{children:["Histogram plot can give us good indication about mean, median, data\ndistribution, ranges of our dataset. Here we will use ",(0,t.jsx)(a.strong,{children:"seaborn"})," to make plots."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'sns.histplot(data, x="Height(Inches)", bins=20)\nplt.show()\n'})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"histogram-plot",src:s(7472).A+"",width:"823",height:"547"})}),"\n",(0,t.jsx)(a.p,{children:"We can infer from the histogram plot that our data is symmetrical with a bell-\nshaped (normal) distribution, centered around 68 inches, has range from 62 to\n75. The distribution is unimodal (it has only peak. If there are two peaks, we\ncall it bimodal)."}),"\n",(0,t.jsxs)(a.p,{children:["In case of univariate data, we can also plot a smooth distribution curve (kernel\ndensity plot) along with the histogram by setting the ",(0,t.jsx)(a.code,{children:"kde"})," parameter to ",(0,t.jsx)(a.code,{children:"True"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'sns.histplot(data, x="Height(Inches)", bins=20, kde=True)\n'})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Main aspects of histogram plot:"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Shape:"})," overall appearance of histogram; could be symmetric, bell shaped,\nleft skewed or right skewed, etc."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Center:"})," mean or median. In order to find the median, we can draw a\nvertical separator line such that the area under the curve on the left and right\nare equal."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Spread:"})," how the data is distributed. Range, Interquartile Range (IQR),\nstandard deviation, variance."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Outliers:"})," data points that fall far from the bulk of the data. If the data\nis say, right skewed (long tail on the right), likely there will have outlier on\nthe right as well."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"box-plot",children:"Box plot"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'sns.boxplot(data=data["Height(Inches)"])\nplt.show()\n'})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"box-plot",src:s(836).A+"",width:"734",height:"545"})}),"\n",(0,t.jsx)(a.p,{children:"Important parts of the box plot is described in the diagram below:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"box-plot-description",src:s(3709).A+"",width:"800",height:"400"})}),"\n",(0,t.jsx)(a.h3,{id:"violin-plot",children:"Violin plot"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'sns.violinplot(x=data["Height(Inches)"])\nplt.show()\n'})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"violin-plot",src:s(9419).A+"",width:"734",height:"545"})}),"\n",(0,t.jsx)(a.h3,{id:"q-q-plot",children:"Q-Q plot"}),"\n",(0,t.jsx)(a.p,{children:"Quantile-quantile plot."}),"\n",(0,t.jsx)(a.h2,{id:"multivariate-dataset",children:"Multivariate dataset"}),"\n",(0,t.jsx)(a.h2,{id:"notebooks",children:"Notebooks"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/pranabdas/machine-learning/blob/master/notebooks/basic-stat.ipynb",children:"Basic statistical analysis"})}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://www.nytimes.com/column/whats-going-on-in-this-graph",children:"What's going on in this graph from New Your Times (some cool infographics)"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3709:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/stat-boxplot-description-8da9cdaee7d0101f36b5a01de62a3e45.png"},836:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/stat-boxplot-a870fcb565e2b043a75ca62219350e06.png"},7472:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/stat-histogram-3d94afb137661c5feae2131e5bcc3b79.png"},9419:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/stat-violin-plot-ff9bf7e8f3680debd86aeea10da66308.png"},8453:(e,a,s)=>{s.d(a,{R:()=>l,x:()=>r});var n=s(6540);const t={},i=n.createContext(t);function l(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);