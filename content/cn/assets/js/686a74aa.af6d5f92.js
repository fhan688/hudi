"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[82212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6746:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(72389);function i(e){let{children:t,url:i}=e;return(0,a.Z)()&&(n.g.window.location.href=i),r.createElement("span",null,t,"or click ",r.createElement("a",{href:i},"here"))}},11237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(6746);const o={title:"Get started with Apache Hudi using AWS Glue by implementing key design concepts \u2013 Part 1",authors:[{name:"Amit Maindola"},{name:"Srinivas Kandi"},{name:"Mitesh Patel"}],category:"blog",image:"/assets/images/blog/2022-10-17-Get_started_with_apache_hudi_using_glue.jpeg",tags:["how-to","bulk-insert","amazon"]},l=void 0,c={permalink:"/cn/blog/2022/10/17/Get-started-with-Apache-Hudi-using-AWS",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-10-17-Get-started-with-Apache-Hudi-using-AWS.mdx",source:"@site/blog/2022-10-17-Get-started-with-Apache-Hudi-using-AWS.mdx",title:"Get started with Apache Hudi using AWS Glue by implementing key design concepts \u2013 Part 1",description:"Redirecting... please wait!!",date:"2022-10-17T00:00:00.000Z",formattedDate:"October 17, 2022",tags:[{label:"how-to",permalink:"/cn/blog/tags/how-to"},{label:"bulk-insert",permalink:"/cn/blog/tags/bulk-insert"},{label:"amazon",permalink:"/cn/blog/tags/amazon"}],readingTime:.045,truncated:!1,authors:[{name:"Amit Maindola"},{name:"Srinivas Kandi"},{name:"Mitesh Patel"}],prevItem:{title:"How Hudl built a cost-optimized AWS Glue pipeline with Apache Hudi datasets",permalink:"/cn/blog/2022/11/10/How-Hudl-built-a-cost-optimized-AWS-Glue-pipeline-with-Apache-Hudi-datasets"},nextItem:{title:"Ingest streaming data to Apache Hudi tables using AWS Glue and Apache Hudi DeltaStreamer",permalink:"/cn/blog/2022/10/06/Ingest-streaming-data-to-Apache-Hudi-using-AWS-Glue-and-DeltaStreamer"}},s={authorsImageUrls:[void 0,void 0,void 0]},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{url:"https://aws.amazon.com/blogs/big-data/part-1-get-started-with-apache-hudi-using-aws-glue-by-implementing-key-design-concepts/",mdxType:"Redirect"},"Redirecting... please wait!! "))}m.isMDXComponent=!0}}]);