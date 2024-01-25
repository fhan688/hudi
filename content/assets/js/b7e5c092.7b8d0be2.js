"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[55856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),b=n,g=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},6746:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(72389);function o(e){let{children:t,url:o}=e;return(0,n.Z)()&&(a.g.window.location.href=o),r.createElement("span",null,t,"or click ",r.createElement("a",{href:o},"here"))}},41338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(6746);const l={title:"Use Amazon Athena with Spark SQL for your open-source transactional table formats",excerpt:"Use Amazon Athena with Spark SQL for your open-source transactional table formats",author:"Pathik Shah, Raj Devnath",category:"blog",image:"/assets/images/blog/2024-01-24-Use-Amazon-Athena-with-Spark-SQL-for-your-open-source-transactional-table-formats.png",tags:["blog","apache hudi","aws","beginner","aws glue","aws athena","time travel query","clustering","compaction","aws s3","apache iceberg","delta lake"]},i=void 0,c={permalink:"/blog/2024/01/24/Use-Amazon-Athena-with-Spark-SQL-for-your-open-source-transactional-table-formats",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2024-01-24-Use-Amazon-Athena-with-Spark-SQL-for-your-open-source-transactional-table-formats.mdx",source:"@site/blog/2024-01-24-Use-Amazon-Athena-with-Spark-SQL-for-your-open-source-transactional-table-formats.mdx",title:"Use Amazon Athena with Spark SQL for your open-source transactional table formats",description:"Redirecting... please wait!!",date:"2024-01-24T00:00:00.000Z",formattedDate:"January 24, 2024",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"apache hudi",permalink:"/blog/tags/apache-hudi"},{label:"aws",permalink:"/blog/tags/aws"},{label:"beginner",permalink:"/blog/tags/beginner"},{label:"aws glue",permalink:"/blog/tags/aws-glue"},{label:"aws athena",permalink:"/blog/tags/aws-athena"},{label:"time travel query",permalink:"/blog/tags/time-travel-query"},{label:"clustering",permalink:"/blog/tags/clustering"},{label:"compaction",permalink:"/blog/tags/compaction"},{label:"aws s3",permalink:"/blog/tags/aws-s-3"},{label:"apache iceberg",permalink:"/blog/tags/apache-iceberg"},{label:"delta lake",permalink:"/blog/tags/delta-lake"}],readingTime:.045,truncated:!1,authors:[{name:"Pathik Shah, Raj Devnath"}],nextItem:{title:"Introduction to Apache Hudi",permalink:"/blog/2024/01/09/introduction-to-apache-hudi"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{url:"https://aws.amazon.com/blogs/big-data/use-amazon-athena-with-spark-sql-for-your-open-source-transactional-table-formats/",mdxType:"Redirect"},"Redirecting... please wait!! "))}b.isMDXComponent=!0}}]);