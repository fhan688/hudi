"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[53418],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:n,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13998:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"Azure \u6587\u4ef6\u7cfb\u7edf",keywords:["hudi","hive","azure","spark","presto"],summary:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u5982\u4f55\u5728 Azure \u6587\u4ef6\u7cfb\u7edf\u4e2d\u914d\u7f6e Hudi \u3002",last_modified_at:new Date("2020-05-25T23:00:57.000Z"),language:"cn"},i=void 0,u={unversionedId:"azure_hoodie",id:"azure_hoodie",title:"Azure \u6587\u4ef6\u7cfb\u7edf",description:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u89e3\u91ca\u5982\u4f55\u5728 Microsoft Azure \u4e0a\u4f7f\u7528 Hudi \u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/azure_hoodie.md",sourceDirName:".",slug:"/azure_hoodie",permalink:"/cn/docs/next/azure_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/azure_hoodie.md",tags:[],version:"current",frontMatter:{title:"Azure \u6587\u4ef6\u7cfb\u7edf",keywords:["hudi","hive","azure","spark","presto"],summary:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u5982\u4f55\u5728 Azure \u6587\u4ef6\u7cfb\u7edf\u4e2d\u914d\u7f6e Hudi \u3002",last_modified_at:"2020-05-25T23:00:57.000Z",language:"cn"},sidebar:"docs",previous:{title:"OSS Filesystem",permalink:"/cn/docs/next/oss_hoodie"},next:{title:"COS Filesystem",permalink:"/cn/docs/next/cos_hoodie"}},l=[{value:"\u58f0\u660e",id:"\u58f0\u660e",children:[],level:2},{value:"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf",id:"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf",children:[],level:2},{value:"\u7ecf\u8fc7\u9a8c\u8bc1\u7684 Spark \u4e0e\u5b58\u50a8\u7cfb\u7edf\u7684\u7ec4\u5408",id:"\u7ecf\u8fc7\u9a8c\u8bc1\u7684-spark-\u4e0e\u5b58\u50a8\u7cfb\u7edf\u7684\u7ec4\u5408",children:[{value:"Azure Data Lake Storage Gen 2 \u4e0a\u7684 HDInsight Spark 2.4",id:"azure-data-lake-storage-gen-2-\u4e0a\u7684-hdinsight-spark-24",children:[],level:4},{value:"Azure Data Lake Storage Gen 2 \u4e0a\u7684 Databricks Spark 2.4",id:"azure-data-lake-storage-gen-2-\u4e0a\u7684-databricks-spark-24",children:[],level:4}],level:2}],s={toc:l},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u89e3\u91ca\u5982\u4f55\u5728 Microsoft Azure \u4e0a\u4f7f\u7528 Hudi \u3002"),(0,n.kt)("h2",{id:"\u58f0\u660e"},"\u58f0\u660e"),(0,n.kt)("p",null,"\u672c\u9875\u9762\u7531 Hudi \u793e\u533a\u7ef4\u62a4\u3002\n\u5982\u679c\u4fe1\u606f\u4e0d\u51c6\u786e\uff0c\u6216\u8005\u4f60\u6709\u4fe1\u606f\u8981\u8865\u5145\uff0c\u8bf7\u5c3d\u7ba1\u521b\u5efa JIRA ticket\u3002\n\u5bf9\u6b64\u8d21\u732e\u9ad8\u5ea6\u8d5e\u8d4f\u3002"),(0,n.kt)("h2",{id:"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf"},"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf"),(0,n.kt)("p",null,"Hudi \u652f\u6301\u4e24\u79cd\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure Blob \u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},"Azure Data Lake Gen 2")),(0,n.kt)("h2",{id:"\u7ecf\u8fc7\u9a8c\u8bc1\u7684-spark-\u4e0e\u5b58\u50a8\u7cfb\u7edf\u7684\u7ec4\u5408"},"\u7ecf\u8fc7\u9a8c\u8bc1\u7684 Spark \u4e0e\u5b58\u50a8\u7cfb\u7edf\u7684\u7ec4\u5408"),(0,n.kt)("h4",{id:"azure-data-lake-storage-gen-2-\u4e0a\u7684-hdinsight-spark-24"},"Azure Data Lake Storage Gen 2 \u4e0a\u7684 HDInsight Spark 2.4"),(0,n.kt)("p",null,"This combination works out of the box. No extra config needed.\n\u8fd9\u79cd\u7ec4\u5408\u5f00\u7bb1\u5373\u7528\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\u3002"),(0,n.kt)("h4",{id:"azure-data-lake-storage-gen-2-\u4e0a\u7684-databricks-spark-24"},"Azure Data Lake Storage Gen 2 \u4e0a\u7684 Databricks Spark 2.4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06 Hudi jar \u5305\u5bfc\u5165\u5230 databricks \u5de5\u4f5c\u533a \u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d\u5230 dbutils \u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'dbutils.fs.mount(\n  source = "abfss://xxx@xxx.dfs.core.windows.net",\n  mountPoint = "/mountpoint",\n  extraConfigs = configs)\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5f53\u5199\u5165 Hudi \u6570\u636e\u96c6\u65f6\uff0c\u4f7f\u7528 abfss URL"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'inputDF.write\n  .format("org.apache.hudi")\n  .options(opts)\n  .mode(SaveMode.Append)\n  .save("abfss://<<storage-account>>.dfs.core.windows.net/hudi-tables/customer")\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5f53\u8bfb\u53d6 Hudi \u6570\u636e\u96c6\u65f6\uff0c\u4f7f\u7528\u6302\u8f7d\u70b9"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'spark.read\n  .format("org.apache.hudi")\n  .load("/mountpoint/hudi-tables/customer")\n')))))}p.isMDXComponent=!0}}]);