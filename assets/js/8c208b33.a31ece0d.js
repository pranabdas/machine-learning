"use strict";(self.webpackChunkmachine_learning=self.webpackChunkmachine_learning||[]).push([[311],{3905:function(a,e,t){t.d(e,{Zo:function(){return p},kt:function(){return h}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function m(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),o=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},p=function(a){var e=o(a.components);return n.createElement(l.Provider,{value:e},a.children)},d="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,l=a.parentName,p=m(a,["components","mdxType","originalType","parentName"]),d=o(t),u=s,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return t?n.createElement(h,i(i({ref:e},p),{},{components:t})):n.createElement(h,i({ref:e},p))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,i=new Array(r);i[0]=u;var m={};for(var l in e)hasOwnProperty.call(e,l)&&(m[l]=e[l]);m.originalType=a,m[d]="string"==typeof a?a:s,i[1]=m;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2091:function(a,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return d}});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),i=["components"],m={title:"Basic Statistical Analysis"},l=void 0,o={unversionedId:"basic-stat",id:"basic-stat",title:"Basic Statistical Analysis",description:"Univariate dataset",source:"@site/docs/basic-stat.md",sourceDirName:".",slug:"/basic-stat",permalink:"/machine-learning/basic-stat",draft:!1,editUrl:"https://github.com/pranabdas/machine-learning/blob/main/docs/basic-stat.md",tags:[],version:"current",frontMatter:{title:"Basic Statistical Analysis"},sidebar:"docs",previous:{title:"Probability and Statistics",permalink:"/machine-learning/probability-statistics"},next:{title:"Optimization",permalink:"/machine-learning/optimization"}},p={},d=[{value:"Univariate dataset",id:"univariate-dataset",level:2},{value:"Count, min and max",id:"count-min-and-max",level:4},{value:"Mean and standard deviation",id:"mean-and-standard-deviation",level:4},{value:"Inter quartile ranges",id:"inter-quartile-ranges",level:4},{value:"Standard score or z-score",id:"standard-score-or-z-score",level:4},{value:"Histogram plot",id:"histogram-plot",level:3},{value:"Box plot",id:"box-plot",level:3},{value:"Violin plot",id:"violin-plot",level:3},{value:"Q-Q plot",id:"q-q-plot",level:3},{value:"Multivariate dataset",id:"multivariate-dataset",level:2},{value:"Notebooks",id:"notebooks",level:2},{value:"Resources",id:"resources",level:2}],c={toc:d};function u(a){var e=a.components,m=(0,s.Z)(a,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,m,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"univariate-dataset"},"Univariate dataset"),(0,r.kt)("p",null,"Here we will look into some simple (univariate) dataset, and see how can we\nstatistically describe the dataset. We work on a Jupyter notebook. First let us\nload the python libraries we will be using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import matplotlib.pyplot as plt\nimport pandas as pd\nimport seaborn as sns\n\n# some matplotlib configs\n%matplotlib inline\nplt.rcParams["figure.dpi"] = 150\nplt.rcParams["figure.facecolor"] = "white"\n')),(0,r.kt)("p",null,"Let us load our dataset of human heights (in inches). The dataset contains more\ncolumns (variables), but we will be looking only in the height."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'data = pd.read_csv("../datasets/height-weight.csv", usecols=[1])\ndata.head()\n')),(0,r.kt)("p",null,"And we will see an output like below. You can also pass an argument to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"head")," method (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"data.head(10)"),") to display certain number of rows instead\nof default 5."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"   Height(Inches)\n0        65.78331\n1        71.51521\n2        69.39874\n3        68.21660\n4        67.78781\n")),(0,r.kt)("p",null,"We can a get a summary of our data using pandas ",(0,r.kt)("inlineCode",{parentName:"p"},"describe")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"data.describe()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n       Height(Inches)\ncount    25000.000000\nmean        67.993114\nstd          1.901679\nmin         60.278360\n25%         66.704397\n50%         67.995700\n75%         69.272958\nmax         75.152800\n")),(0,r.kt)("p",null,"Now let us try to understand what these various quantities means."),(0,r.kt)("h4",{id:"count-min-and-max"},"Count, min and max"),(0,r.kt)("p",null,"Count is the number of data points we have in our dataset. Min and max are the\nlowest and highest values of data points, respectively."),(0,r.kt)("h4",{id:"mean-and-standard-deviation"},"Mean and standard deviation"),(0,r.kt)("p",null,"We have seen ",(0,r.kt)("a",{parentName:"p",href:"/machine-learning/probability-statistics"},"previously")," how they are defined.\nMean gives us an idea where our data is centered around. Standard deviation\ntells us how our data is distributed or spread. 66.67% of our data points falls\nin the range ",(0,r.kt)("inlineCode",{parentName:"p"},"mean \xb1 std"),", about 95% of our samples falls in the range\n",(0,r.kt)("inlineCode",{parentName:"p"},"mean \xb1 2*std")," and 99.7% of our data falls in the range ",(0,r.kt)("inlineCode",{parentName:"p"},"mean \xb1 3*std"),". Standard\ndeviation is the average distance our data points fall from the mean value."),(0,r.kt)("h4",{id:"inter-quartile-ranges"},"Inter quartile ranges"),(0,r.kt)("p",null,"The quantities 25%, 50%, and 75% are inter quartile ranges, sometimes referred\nto as first, second, and third quartile as well. Second quartile is also known\nas median. First quartile gives the value where 25% of data points falls below.\nInter quartile range is defined as the (3rd quartile - 1st quartile); in our\ncase (69.272958 - 66.704397) = 2.568561. This also describes how hour data\npoints are distributed. Range is defined as (max value - min value)."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In case of symmetrical dataset, the mean and median will have the same value. If\nthe data is right skewed, the mean will be higher than median. Conversely, if\nthe data is left skewed, the average will lower than the median.")),(0,r.kt)("h4",{id:"standard-score-or-z-score"},"Standard score or z-score"),(0,r.kt)("p",null,"Standard score or z-score of a specific data point is given by"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"z"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"n")))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z-score = \\frac{value - mean}{standard~deviation}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"score"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0574em",verticalAlign:"-0.686em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3714em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mspace nobreak"},"\xa0"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ia"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"an")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,r.kt)("h3",{id:"histogram-plot"},"Histogram plot"),(0,r.kt)("p",null,"Histogram plot can give us good indication about mean, median, data\ndistribution, ranges of our dataset. Here we will use ",(0,r.kt)("strong",{parentName:"p"},"seaborn")," to make plots."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'sns.histplot(data, x="Height(Inches)", bins=20)\nplt.show()\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"histogram-plot",src:t(338).Z,width:"823",height:"547"})),(0,r.kt)("p",null,"We can infer from the histogram plot that our data is symmetrical with a bell-\nshaped (normal) distribution, centered around 68 inches, has range from 62 to\n75. The distribution is unimodal (it has only peak. If there are two peaks, we\ncall it bimodal)."),(0,r.kt)("p",null,"In case of univariate data, we can also plot a smooth distribution curve (kernel\ndensity plot) along with the histogram by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"kde")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'sns.histplot(data, x="Height(Inches)", bins=20, kde=True)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Main aspects of histogram plot:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shape:")," overall appearance of histogram; could be symmetric, bell shaped,\nleft skewed or right skewed, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Center:")," mean or median. In order to find the median, we can draw a\nvertical separator line such that the area under the curve on the left and right\nare equal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spread:")," how the data is distributed. Range, Interquartile Range (IQR),\nstandard deviation, variance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outliers:")," data points that fall far from the bulk of the data. If the data\nis say, right skewed (long tail on the right), likely there will have outlier on\nthe right as well.")),(0,r.kt)("h3",{id:"box-plot"},"Box plot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'sns.boxplot(data=data["Height(Inches)"])\nplt.show()\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"box-plot",src:t(2163).Z,width:"734",height:"545"})),(0,r.kt)("p",null,"Important parts of the box plot is described in the diagram below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"box-plot-description",src:t(5177).Z,width:"800",height:"400"})),(0,r.kt)("h3",{id:"violin-plot"},"Violin plot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'sns.violinplot(x=data["Height(Inches)"])\nplt.show()\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"violin-plot",src:t(6367).Z,width:"734",height:"545"})),(0,r.kt)("h3",{id:"q-q-plot"},"Q-Q plot"),(0,r.kt)("p",null,"Quantile-quantile plot."),(0,r.kt)("h2",{id:"multivariate-dataset"},"Multivariate dataset"),(0,r.kt)("h2",{id:"notebooks"},"Notebooks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pranabdas/machine-learning/blob/master/notebooks/basic-stat.ipynb"},"Basic statistical analysis"))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nytimes.com/column/whats-going-on-in-this-graph"},"What's going on in this graph from New Your Times (some cool infographics)"))))}u.isMDXComponent=!0},5177:function(a,e,t){e.Z=t.p+"assets/images/stat-boxplot-description-8da9cdaee7d0101f36b5a01de62a3e45.png"},2163:function(a,e,t){e.Z=t.p+"assets/images/stat-boxplot-a870fcb565e2b043a75ca62219350e06.png"},338:function(a,e,t){e.Z=t.p+"assets/images/stat-histogram-3d94afb137661c5feae2131e5bcc3b79.png"},6367:function(a,e,t){e.Z=t.p+"assets/images/stat-violin-plot-ff9bf7e8f3680debd86aeea10da66308.png"}}]);