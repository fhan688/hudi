"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[39065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Ingesting Database changes via Sqoop/Hudi",excerpt:"Learn how to ingesting changes from a HUDI dataset using Sqoop/Hudi",author:"vinoth",category:"blog",tags:["how-to","apache hudi"]},i=void 0,c={permalink:"/cn/blog/2019/09/09/ingesting-database-changes",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2019-09-09-ingesting-database-changes.md",source:"@site/blog/2019-09-09-ingesting-database-changes.md",title:"Ingesting Database changes via Sqoop/Hudi",description:"Very simple in just 2 steps.",date:"2019-09-09T00:00:00.000Z",formattedDate:"September 9, 2019",tags:[{label:"how-to",permalink:"/cn/blog/tags/how-to"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:.605,truncated:!0,authors:[{name:"vinoth"}],prevItem:{title:"Hudi On Hops",permalink:"/cn/blog/2019/10/22/Hudi-On-Hops"},nextItem:{title:"Registering sample dataset to Hive via beeline",permalink:"/cn/blog/2019/05/14/registering-dataset-to-hive"}},s={authorsImageUrls:[void 0]},l=[],p={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Very simple in just 2 steps."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": Extract new changes to users table in MySQL, as avro data files on DFS"))}g.isMDXComponent=!0}}]);