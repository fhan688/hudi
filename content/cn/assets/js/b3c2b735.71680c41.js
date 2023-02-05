"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[53310],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=d(a),s=r,N=m["".concat(o,".").concat(s)]||m[s]||k[s]||l;return a?n.createElement(N,i(i({ref:e},u),{},{components:a})):n.createElement(N,i({ref:e},u))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},81373:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={version:"0.7.0",title:"\u67e5\u8be2 Hudi \u6570\u636e\u96c6",keywords:["hudi","hive","spark","sql","presto"],summary:"In this page, we go over how to enable SQL queries on Hudi built tables.",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},i=void 0,p={unversionedId:"querying_data",id:"version-0.7.0/querying_data",title:"\u67e5\u8be2 Hudi \u6570\u636e\u96c6",description:"\u4ece\u6982\u5ff5\u4e0a\u8bb2\uff0cHudi\u7269\u7406\u5b58\u50a8\u4e00\u6b21\u6570\u636e\u5230DFS\u4e0a\uff0c\u540c\u65f6\u5728\u5176\u4e0a\u63d0\u4f9b\u4e09\u4e2a\u903b\u8f91\u89c6\u56fe\uff0c\u5982\u4e4b\u524d\u6240\u8ff0\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.7.0/querying_data.md",sourceDirName:".",slug:"/querying_data",permalink:"/cn/docs/0.7.0/querying_data",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.7.0/querying_data.md",tags:[],version:"0.7.0",frontMatter:{version:"0.7.0",title:"\u67e5\u8be2 Hudi \u6570\u636e\u96c6",keywords:["hudi","hive","spark","sql","presto"],summary:"In this page, we go over how to enable SQL queries on Hudi built tables.",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"},sidebar:"version-0.7.0/docs",previous:{title:"\u5199\u5165 Hudi \u6570\u636e\u96c6",permalink:"/cn/docs/0.7.0/writing_data"},next:{title:"\u914d\u7f6e",permalink:"/cn/docs/0.7.0/configurations"}},o=[{value:"\u67e5\u8be2\u5f15\u64ce\u652f\u6301\u5217\u8868",id:"\u67e5\u8be2\u5f15\u64ce\u652f\u6301\u5217\u8868",children:[{value:"\u8bfb\u4f18\u5316\u8868",id:"\u8bfb\u4f18\u5316\u8868",children:[],level:3},{value:"\u5b9e\u65f6\u8868",id:"\u5b9e\u65f6\u8868",children:[],level:3}],level:2},{value:"Hive",id:"hive",children:[{value:"\u8bfb\u4f18\u5316\u8868",id:"hive-ro-view",children:[],level:3},{value:"\u5b9e\u65f6\u8868",id:"hive-rt-view",children:[],level:3},{value:"\u589e\u91cf\u62c9\u53d6",id:"hive-incr-pull",children:[],level:3}],level:2},{value:"Spark",id:"spark",children:[{value:"\u8bfb\u4f18\u5316\u8868",id:"spark-ro-view",children:[],level:3},{value:"\u5b9e\u65f6\u8868",id:"spark-rt-view",children:[],level:3},{value:"\u589e\u91cf\u62c9\u53d6",id:"spark-incr-pull",children:[],level:3}],level:2},{value:"PrestoDB",id:"prestodb",children:[],level:2},{value:"Impala (3.4 or later)",id:"impala-34-or-later",children:[{value:"\u8bfb\u4f18\u5316\u8868",id:"\u8bfb\u4f18\u5316\u8868-1",children:[],level:3}],level:2}],d={toc:o},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4ece\u6982\u5ff5\u4e0a\u8bb2\uff0cHudi\u7269\u7406\u5b58\u50a8\u4e00\u6b21\u6570\u636e\u5230DFS\u4e0a\uff0c\u540c\u65f6\u5728\u5176\u4e0a\u63d0\u4f9b\u4e09\u4e2a\u903b\u8f91\u89c6\u56fe\uff0c\u5982",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/concepts#views"},"\u4e4b\u524d"),"\u6240\u8ff0\u3002\n\u6570\u636e\u96c6\u540c\u6b65\u5230Hive Metastore\u540e\uff0c\u5b83\u5c06\u63d0\u4f9b\u7531Hudi\u7684\u81ea\u5b9a\u4e49\u8f93\u5165\u683c\u5f0f\u652f\u6301\u7684Hive\u5916\u90e8\u8868\u3002\u4e00\u65e6\u63d0\u4f9b\u4e86\u9002\u5f53\u7684Hudi\u6346\u7ed1\u5305\uff0c\n\u5c31\u53ef\u4ee5\u901a\u8fc7Hive\u3001Spark\u548cPresto\u4e4b\u7c7b\u7684\u5e38\u7528\u67e5\u8be2\u5f15\u64ce\u6765\u67e5\u8be2\u6570\u636e\u96c6\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u5728\u5199\u5165\u8fc7\u7a0b\u4e2d\u4f20\u9012\u4e86\u4e24\u4e2a\u7531",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/configurations#TABLE_NAME_OPT_KEY"},"table name"),"\u547d\u540d\u7684Hive\u8868\u3002\n\u4f8b\u5982\uff0c\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"table name = hudi_tbl"),"\uff0c\u6211\u4eec\u5f97\u5230"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hudi_tbl")," \u5b9e\u73b0\u4e86\u7531 ",(0,r.kt)("inlineCode",{parentName:"li"},"HoodieParquetInputFormat")," \u652f\u6301\u7684\u6570\u636e\u96c6\u7684\u8bfb\u4f18\u5316\u89c6\u56fe\uff0c\u4ece\u800c\u63d0\u4f9b\u4e86\u7eaf\u5217\u5f0f\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hudi_tbl_rt")," \u5b9e\u73b0\u4e86\u7531 ",(0,r.kt)("inlineCode",{parentName:"li"},"HoodieParquetRealtimeInputFormat")," \u652f\u6301\u7684\u6570\u636e\u96c6\u7684\u5b9e\u65f6\u89c6\u56fe\uff0c\u4ece\u800c\u63d0\u4f9b\u4e86\u57fa\u7840\u6570\u636e\u548c\u65e5\u5fd7\u6570\u636e\u7684\u5408\u5e76\u89c6\u56fe\u3002")),(0,r.kt)("p",null,"\u5982\u6982\u5ff5\u90e8\u5206\u6240\u8ff0\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop"},"\u589e\u91cf\u5904\u7406"),"\u6240\u9700\u8981\u7684\n\u4e00\u4e2a\u5173\u952e\u539f\u8bed\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u589e\u91cf\u62c9\u53d6"),"\uff08\u4ee5\u4ece\u6570\u636e\u96c6\u4e2d\u83b7\u53d6\u66f4\u6539\u6d41/\u65e5\u5fd7\uff09\u3002\u60a8\u53ef\u4ee5\u589e\u91cf\u63d0\u53d6Hudi\u6570\u636e\u96c6\uff0c\u8fd9\u610f\u5473\u7740\u81ea\u6307\u5b9a\u7684\u5373\u65f6\u65f6\u95f4\u8d77\uff0c\n\u60a8\u53ef\u4ee5\u53ea\u83b7\u5f97\u5168\u90e8\u66f4\u65b0\u548c\u65b0\u884c\u3002 \u8fd9\u4e0e\u63d2\u5165\u66f4\u65b0\u4e00\u8d77\u4f7f\u7528\uff0c\u5bf9\u4e8e\u6784\u5efa\u67d0\u4e9b\u6570\u636e\u7ba1\u9053\u5c24\u5176\u6709\u7528\uff0c\u5305\u62ec\u5c061\u4e2a\u6216\u591a\u4e2a\u6e90Hudi\u8868\uff08\u6570\u636e\u6d41/\u4e8b\u5b9e\uff09\u4ee5\u589e\u91cf\u65b9\u5f0f\u62c9\u51fa\uff08\u6d41/\u4e8b\u5b9e\uff09\n\u5e76\u4e0e\u5176\u4ed6\u8868\uff08\u6570\u636e\u96c6/\u7ef4\u5ea6\uff09\u7ed3\u5408\u4ee5",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/writing_data"},"\u5199\u51fa\u589e\u91cf"),"\u5230\u76ee\u6807Hudi\u6570\u636e\u96c6\u3002\u589e\u91cf\u89c6\u56fe\u662f\u901a\u8fc7\u67e5\u8be2\u4e0a\u8868\u4e4b\u4e00\u5b9e\u73b0\u7684\uff0c\u5e76\u5177\u6709\u7279\u6b8a\u914d\u7f6e\uff0c\n\u8be5\u7279\u6b8a\u914d\u7f6e\u6307\u793a\u67e5\u8be2\u8ba1\u5212\u4ec5\u9700\u8981\u4ece\u6570\u636e\u96c6\u4e2d\u83b7\u53d6\u589e\u91cf\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"\u67e5\u8be2\u5f15\u64ce\u652f\u6301\u5217\u8868"},"\u67e5\u8be2\u5f15\u64ce\u652f\u6301\u5217\u8868"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u8868\u683c\u5c55\u793a\u4e86\u5404\u67e5\u8be2\u5f15\u64ce\u662f\u5426\u652f\u6301Hudi\u683c\u5f0f"),(0,r.kt)("h3",{id:"\u8bfb\u4f18\u5316\u8868"},"\u8bfb\u4f18\u5316\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u67e5\u8be2\u5f15\u64ce"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b9e\u65f6\u89c6\u56fe"),(0,r.kt)("th",{parentName:"tr",align:null},"\u589e\u91cf\u62c9\u53d6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Hive")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Spark SQL")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Spark Datasource")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PrestoDB")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Impala")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N")))),(0,r.kt)("h3",{id:"\u5b9e\u65f6\u8868"},"\u5b9e\u65f6\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u67e5\u8be2\u5f15\u64ce"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b9e\u65f6\u89c6\u56fe"),(0,r.kt)("th",{parentName:"tr",align:null},"\u589e\u91cf\u62c9\u53d6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bfb\u4f18\u5316\u8868"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Hive")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Spark SQL")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Spark Datasource")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PrestoDB")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Impala")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")))),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u8be6\u7ec6\u8ba8\u8bba\u5728\u6bcf\u4e2a\u67e5\u8be2\u5f15\u64ce\u4e0a\u5982\u4f55\u8bbf\u95ee\u6240\u6709\u4e09\u4e2a\u89c6\u56fe\u3002"),(0,r.kt)("h2",{id:"hive"},"Hive"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4f7fHive\u80fd\u591f\u8bc6\u522bHudi\u6570\u636e\u96c6\u5e76\u6b63\u786e\u67e5\u8be2\uff0c\nHiveServer2\u9700\u8981\u5728\u5176",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudera.com/documentation/enterprise/5-6-x/topics/cm_mc_hive_udf#concept_nc3_mms_lr"},"\u8f85\u52a9jars\u8def\u5f84"),"\u4e2d\u63d0\u4f9b",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-hadoop-mr-bundle-x.y.z-SNAPSHOT.jar"),"\u3002\n\u8fd9\u5c06\u786e\u4fdd\u8f93\u5165\u683c\u5f0f\u7c7b\u53ca\u5176\u4f9d\u8d56\u9879\u53ef\u7528\u4e8e\u67e5\u8be2\u8ba1\u5212\u548c\u6267\u884c\u3002"),(0,r.kt)("h3",{id:"hive-ro-view"},"\u8bfb\u4f18\u5316\u8868"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u8bbe\u7f6e\u4e4b\u5916\uff0c\u5bf9\u4e8ebeeline cli\u8bbf\u95ee\uff0c\u8fd8\u9700\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"hive.input.format"),"\u53d8\u91cf\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.hadoop.HoodieParquetInputFormat"),"\u8f93\u5165\u683c\u5f0f\u7684\u5b8c\u5168\u9650\u5b9a\u8def\u5f84\u540d\u3002\n\u5bf9\u4e8eTez\uff0c\u8fd8\u9700\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"hive.tez.input.format"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.hadoop.hive.ql.io.HiveInputFormat"),"\u3002"),(0,r.kt)("h3",{id:"hive-rt-view"},"\u5b9e\u65f6\u8868"),(0,r.kt)("p",null,"\u9664\u4e86\u5728HiveServer2\u4e0a\u5b89\u88c5Hive\u6346\u7ed1jars\u4e4b\u5916\uff0c\u8fd8\u9700\u8981\u5c06\u5176\u653e\u5728\u6574\u4e2a\u96c6\u7fa4\u7684hadoop/hive\u5b89\u88c5\u4e2d\uff0c\u8fd9\u6837\u67e5\u8be2\u4e5f\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49RecordReader\u3002"),(0,r.kt)("h3",{id:"hive-incr-pull"},"\u589e\u91cf\u62c9\u53d6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HiveIncrementalPuller"),"\u5141\u8bb8\u901a\u8fc7HiveQL\u4ece\u5927\u578b\u4e8b\u5b9e/\u7ef4\u8868\u4e2d\u589e\u91cf\u63d0\u53d6\u66f4\u6539\uff0c\n\u7ed3\u5408\u4e86Hive\uff08\u53ef\u9760\u5730\u5904\u7406\u590d\u6742\u7684SQL\u67e5\u8be2\uff09\u548c\u589e\u91cf\u539f\u8bed\u7684\u597d\u5904\uff08\u901a\u8fc7\u589e\u91cf\u62c9\u53d6\u800c\u4e0d\u662f\u5b8c\u5168\u626b\u63cf\u6765\u52a0\u5feb\u67e5\u8be2\u901f\u5ea6\uff09\u3002\n\u8be5\u5de5\u5177\u4f7f\u7528Hive JDBC\u8fd0\u884chive\u67e5\u8be2\u5e76\u5c06\u5176\u7ed3\u679c\u4fdd\u5b58\u5728\u4e34\u65f6\u8868\u4e2d\uff0c\u8fd9\u4e2a\u8868\u53ef\u4ee5\u88ab\u63d2\u5165\u66f4\u65b0\u3002\nUpsert\u5b9e\u7528\u7a0b\u5e8f\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),"\uff09\u5177\u6709\u76ee\u5f55\u7ed3\u6784\u6240\u9700\u7684\u6240\u6709\u72b6\u6001\uff0c\u4ee5\u4e86\u89e3\u76ee\u6807\u8868\u4e0a\u7684\u63d0\u4ea4\u65f6\u95f4\u5e94\u4e3a\u591a\u5c11\u3002\n\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"/app/incremental-hql/intermediate/{source_table_name}_temp/{last_commit_included}"),"\u3002\n\u5df2\u6ce8\u518c\u7684Delta Hive\u8868\u7684\u683c\u5f0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"{tmpdb}.{source_table}_{last_commit_included}"),"\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662fHiveIncrementalPuller\u7684\u914d\u7f6e\u9009\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u914d\u7f6e")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiveUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u8fde\u63a5\u7684Hive Server 2\u7684URL"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiveUser"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive Server 2 \u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hivePass"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive Server 2 \u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue"),(0,r.kt)("td",{parentName:"tr",align:null},"YARN \u961f\u5217\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tmp"),(0,r.kt)("td",{parentName:"tr",align:null},"DFS\u4e2d\u5b58\u50a8\u4e34\u65f6\u589e\u91cf\u6570\u636e\u7684\u76ee\u5f55\u3002\u76ee\u5f55\u7ed3\u6784\u5c06\u9075\u5faa\u7ea6\u5b9a\u3002\u8bf7\u53c2\u9605\u4ee5\u4e0b\u90e8\u5206\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extractSQLFile"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u6e90\u8868\u4e0a\u8981\u6267\u884c\u7684\u63d0\u53d6\u6570\u636e\u7684SQL\u3002\u63d0\u53d6\u7684\u6570\u636e\u5c06\u662f\u81ea\u7279\u5b9a\u65f6\u95f4\u70b9\u4ee5\u6765\u5df2\u66f4\u6539\u7684\u6240\u6709\u884c\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceTable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e90\u8868\u540d\u79f0\u3002\u5728Hive\u73af\u5883\u5c5e\u6027\u4e2d\u9700\u8981\u8bbe\u7f6e\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"targetTable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8868\u540d\u79f0\u3002\u4e2d\u95f4\u5b58\u50a8\u76ee\u5f55\u7ed3\u6784\u9700\u8981\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceDataPath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e90DFS\u57fa\u672c\u8def\u5f84\u3002\u8fd9\u662f\u8bfb\u53d6Hudi\u5143\u6570\u636e\u7684\u5730\u65b9\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"targetDataPath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807DFS\u57fa\u672c\u8def\u5f84\u3002 \u8fd9\u662f\u8ba1\u7b97fromCommitTime\u6240\u5fc5\u9700\u7684\u3002 \u5982\u679c\u663e\u5f0f\u6307\u5b9a\u4e86fromCommitTime\uff0c\u5219\u4e0d\u9700\u8981\u8bbe\u7f6e\u8fd9\u4e2a\u53c2\u6570\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tmpdb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u521b\u5efa\u4e2d\u95f4\u4e34\u65f6\u589e\u91cf\u8868\u7684\u6570\u636e\u5e93"),(0,r.kt)("td",{parentName:"tr",align:null},"hoodie_temp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fromCommitTime"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd9\u662f\u6700\u91cd\u8981\u7684\u53c2\u6570\u3002 \u8fd9\u662f\u4ece\u4e2d\u63d0\u53d6\u66f4\u6539\u7684\u8bb0\u5f55\u7684\u65f6\u95f4\u70b9\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxCommits"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u5305\u542b\u5728\u62c9\u53d6\u4e2d\u7684\u63d0\u4ea4\u6570\u3002\u5c06\u6b64\u8bbe\u7f6e\u4e3a-1\u5c06\u5305\u62ec\u4ecefromCommitTime\u5f00\u59cb\u7684\u6240\u6709\u63d0\u4ea4\u3002\u5c06\u6b64\u8bbe\u7f6e\u4e3a\u5927\u4e8e0\u7684\u503c\uff0c\u5c06\u5305\u62ec\u5728fromCommitTime\u4e4b\u540e\u4ec5\u66f4\u6539\u6307\u5b9a\u63d0\u4ea4\u6b21\u6570\u7684\u8bb0\u5f55\u3002\u5982\u679c\u60a8\u9700\u8981\u4e00\u6b21\u8d76\u4e0a\u4e24\u6b21\u63d0\u4ea4\uff0c\u5219\u53ef\u80fd\u9700\u8981\u8fd9\u6837\u505a\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"help"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u7528\u7a0b\u5e8f\u5e2e\u52a9"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u8bbe\u7f6efromCommitTime=0\u548cmaxCommits=-1\u5c06\u63d0\u53d6\u6574\u4e2a\u6e90\u6570\u636e\u96c6\uff0c\u53ef\u7528\u4e8e\u542f\u52a8Backfill\u3002\n\u5982\u679c\u76ee\u6807\u6570\u636e\u96c6\u662fHudi\u6570\u636e\u96c6\uff0c\u5219\u8be5\u5b9e\u7528\u7a0b\u5e8f\u53ef\u4ee5\u786e\u5b9a\u76ee\u6807\u6570\u636e\u96c6\u662f\u5426\u6ca1\u6709\u63d0\u4ea4\u6216\u5ef6\u8fdf\u8d85\u8fc724\u5c0f\u65f6\uff08\u8fd9\u662f\u53ef\u914d\u7f6e\u7684\uff09\uff0c\n\u5b83\u5c06\u81ea\u52a8\u4f7f\u7528Backfill\u914d\u7f6e\uff0c\u56e0\u4e3a\u589e\u91cf\u5e94\u7528\u6700\u8fd124\u5c0f\u65f6\u7684\u66f4\u6539\u4f1a\u6bd4Backfill\u82b1\u8d39\u66f4\u591a\u7684\u65f6\u95f4\u3002\n\u8be5\u5de5\u5177\u5f53\u524d\u7684\u5c40\u9650\u6027\u5728\u4e8e\u7f3a\u4e4f\u5728\u6df7\u5408\u6a21\u5f0f\uff08\u6b63\u5e38\u6a21\u5f0f\u548c\u589e\u91cf\u6a21\u5f0f\uff09\u4e0b\u81ea\u8054\u63a5\u540c\u4e00\u8868\u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5173\u4e8e\u4f7f\u7528Fetch\u4efb\u52a1\u6267\u884c\u7684Hive\u67e5\u8be2\u7684\u8bf4\u660e\uff1a"),"\n\u7531\u4e8eFetch\u4efb\u52a1\u4e3a\u6bcf\u4e2a\u5206\u533a\u8c03\u7528InputFormat.listStatus()\uff0c\u6bcf\u4e2alistStatus()\u8c03\u7528\u90fd\u4f1a\u5217\u51faHoodie\u5143\u6570\u636e\u3002\n\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u5982\u4e0b\u64cd\u4f5c\u53ef\u80fd\u662f\u6709\u7528\u7684\uff0c\u5373\u4f7f\u7528Hive session\u5c5e\u6027\u5bf9\u589e\u91cf\u67e5\u8be2\u7981\u7528Fetch\u4efb\u52a1\uff1a\n",(0,r.kt)("inlineCode",{parentName:"p"},"set hive.fetch.task.conversion = none;"),"\u3002\u8fd9\u5c06\u786e\u4fddHive\u67e5\u8be2\u4f7f\u7528Map Reduce\u6267\u884c\uff0c\n\u5408\u5e76\u5206\u533a\uff08\u7528\u9017\u53f7\u5206\u9694\uff09\uff0c\u5e76\u4e14\u5bf9\u6240\u6709\u8fd9\u4e9b\u5206\u533a\u4ec5\u8c03\u7528\u4e00\u6b21InputFormat.listStatus()\u3002"),(0,r.kt)("h2",{id:"spark"},"Spark"),(0,r.kt)("p",null,"Spark\u53ef\u5c06Hudi jars\u548c\u6346\u7ed1\u5305\u8f7b\u677e\u90e8\u7f72\u548c\u7ba1\u7406\u5230\u4f5c\u4e1a/\u7b14\u8bb0\u672c\u4e2d\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u901a\u8fc7Spark\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u8bbf\u95eeHudi\u6570\u636e\u96c6\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hudi DataSource"),"\uff1a\u652f\u6301\u5b9e\u65f6\u89c6\u56fe\uff0c\u8bfb\u53d6\u4f18\u5316\u548c\u589e\u91cf\u62c9\u53d6\uff0c\u7c7b\u4f3c\u4e8e\u6807\u51c6\u6570\u636e\u6e90\uff08\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"spark.read.parquet"),"\uff09\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4ee5Hive\u8868\u8bfb\u53d6"),"\uff1a\u652f\u6301\u6240\u6709\u4e09\u4e2a\u89c6\u56fe\uff0c\u5305\u62ec\u5b9e\u65f6\u89c6\u56fe\uff0c\u4f9d\u8d56\u4e8e\u81ea\u5b9a\u4e49\u7684Hudi\u8f93\u5165\u683c\u5f0f\uff08\u518d\u6b21\u7c7b\u4f3cHive\uff09\u3002")),(0,r.kt)("p",null,"\u901a\u5e38\uff0c\u60a8\u7684spark\u4f5c\u4e1a\u9700\u8981\u4f9d\u8d56",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-spark"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-spark-bundle-x.y.z.jar"),"\uff0c\n\u5b83\u4eec\u5fc5\u987b\u4f4d\u4e8e\u9a71\u52a8\u7a0b\u5e8f\u548c\u6267\u884c\u7a0b\u5e8f\u7684\u7c7b\u8def\u5f84\u4e0a\uff08\u63d0\u793a\uff1a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"--jars"),"\u53c2\u6570\uff09\u3002"),(0,r.kt)("h3",{id:"spark-ro-view"},"\u8bfb\u4f18\u5316\u8868"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528SparkSQL\u5c06RO\u8868\u8bfb\u53d6\u4e3aHive\u8868\uff0c\u53ea\u9700\u6309\u5982\u4e0b\u6240\u793a\u5c06\u8def\u5f84\u8fc7\u6ee4\u5668\u63a8\u5165sparkContext\u3002\n\u5bf9\u4e8eHudi\u8868\uff0c\u8be5\u65b9\u6cd5\u4fdd\u7559\u4e86Spark\u5185\u7f6e\u7684\u8bfb\u53d6Parquet\u6587\u4ef6\u7684\u4f18\u5316\u529f\u80fd\uff0c\u4f8b\u5982\u8fdb\u884c\u77e2\u91cf\u5316\u8bfb\u53d6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'spark.sparkContext.hadoopConfiguration.setClass("mapreduce.input.pathFilter.class", classOf[org.apache.hudi.hadoop.HoodieROTablePathFilter], classOf[org.apache.hadoop.fs.PathFilter]);\n')),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u901a\u8fc7\u6570\u636e\u6e90\u5728DFS\u4e0a\u4f7f\u7528\u5168\u5c40\u8def\u5f84\uff0c\u5219\u53ea\u9700\u6267\u884c\u4ee5\u4e0b\u7c7b\u4f3c\u64cd\u4f5c\u5373\u53ef\u5f97\u5230Spark DataFrame\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'Dataset<Row> hoodieROViewDF = spark.read().format("org.apache.hudi")\n// pass any path glob, can include hudi & non-hudi datasets\n.load("/glob/path/pattern");\n')),(0,r.kt)("h3",{id:"spark-rt-view"},"\u5b9e\u65f6\u8868"),(0,r.kt)("p",null,"\u5c06\u5b9e\u65f6\u8868\u5728Spark\u4e2d\u4f5c\u4e3aHive\u8868\u8fdb\u884c\u67e5\u8be2\uff0c\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"spark.sql.hive.convertMetastoreParquet = false"),"\uff0c\n\u8feb\u4f7fSpark\u56de\u9000\u5230\u4f7f\u7528Hive Serde\u8bfb\u53d6\u6570\u636e\uff08\u8ba1\u5212/\u6267\u884c\u4ecd\u7136\u662fSpark\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"$ spark-shell --jars hudi-spark-bundle-x.y.z-SNAPSHOT.jar --driver-class-path /etc/hive/conf  --packages com.databricks:spark-avro_2.11:4.0.0 --conf spark.sql.hive.convertMetastoreParquet=false --num-executors 10 --driver-memory 7g --executor-memory 2g  --master yarn-client\n\nscala> sqlContext.sql(\"select count(*) from hudi_rt where datestr = '2016-10-02'\").show()\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u901a\u8fc7\u6570\u636e\u6e90\u5728DFS\u4e0a\u4f7f\u7528\u5168\u5c40\u8def\u5f84\uff0c\u5219\u53ea\u9700\u6267\u884c\u4ee5\u4e0b\u7c7b\u4f3c\u64cd\u4f5c\u5373\u53ef\u5f97\u5230Spark DataFrame\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'Dataset<Row> hoodieRealtimeViewDF = spark.read().format("org.apache.hudi")\n// pass any path glob, can include hudi & non-hudi datasets\n.load("/glob/path/pattern");\n')),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u53ea\u67e5\u8be2\u5b9e\u65f6\u8868\u7684\u8bfb\u4f18\u5316\u89c6\u56fe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'Dataset<Row> hoodieRealtimeViewDF = spark.read().format("org.apache.hudi")\n.option(DataSourceReadOptions.QUERY_TYPE_OPT_KEY, DataSourceReadOptions.QUERY_TYPE_READ_OPTIMIZED_OPT_VAL)\n// pass any path glob, can include hudi & non-hudi datasets\n.load("/glob/path/pattern");\n')),(0,r.kt)("h3",{id:"spark-incr-pull"},"\u589e\u91cf\u62c9\u53d6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hudi-spark"),"\u6a21\u5757\u63d0\u4f9b\u4e86DataSource API\uff0c\u8fd9\u662f\u4e00\u79cd\u4eceHudi\u6570\u636e\u96c6\u4e2d\u63d0\u53d6\u6570\u636e\u5e76\u901a\u8fc7Spark\u5904\u7406\u6570\u636e\u7684\u66f4\u4f18\u96c5\u7684\u65b9\u6cd5\u3002\n\u5982\u4e0b\u6240\u793a\u662f\u4e00\u4e2a\u793a\u4f8b\u589e\u91cf\u62c9\u53d6\uff0c\u5b83\u5c06\u83b7\u53d6\u81ea",(0,r.kt)("inlineCode",{parentName:"p"},"beginInstantTime"),"\u4ee5\u6765\u5199\u5165\u7684\u6240\u6709\u8bb0\u5f55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' Dataset<Row> hoodieIncViewDF = spark.read()\n     .format("org.apache.hudi")\n     .option(DataSourceReadOptions.VIEW_TYPE_OPT_KEY(),\n             DataSourceReadOptions.VIEW_TYPE_INCREMENTAL_OPT_VAL())\n     .option(DataSourceReadOptions.BEGIN_INSTANTTIME_OPT_KEY(),\n            <beginInstantTime>)\n     .option(DataSourceReadOptions.INCR_PATH_GLOB_OPT_KEY(),\n            "/year=2020/month=*/day=*") // \u53ef\u9009\uff0c\u4ece\u6307\u5b9a\u7684\u5206\u533a\u589e\u91cf\u62c9\u53d6\n     .load(tablePath); // \u7528\u6570\u636e\u96c6\u7684\u6700\u5e95\u5c42\u8def\u5f84\n')),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/configurations#spark-datasource"},"\u8bbe\u7f6e"),"\u90e8\u5206\uff0c\u4ee5\u67e5\u770b\u6240\u6709\u6570\u636e\u6e90\u9009\u9879\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"HoodieReadClient"),"\u901a\u8fc7Hudi\u7684\u9690\u5f0f\u7d22\u5f15\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u529f\u80fd\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"API")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"read(keys)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Hudi\u81ea\u5df1\u7684\u7d22\u901a\u8fc7\u5feb\u901f\u67e5\u627e\u5c06\u4e0e\u952e\u5bf9\u5e94\u7684\u6570\u636e\u4f5c\u4e3aDataFrame\u8bfb\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filterExists()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u63d0\u4f9b\u7684RDD","[HoodieRecord]","\u4e2d\u8fc7\u6ee4\u51fa\u5df2\u7ecf\u5b58\u5728\u7684\u8bb0\u5f55\u3002\u5bf9\u5220\u9664\u91cd\u590d\u6570\u636e\u6709\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkExists(keys)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u63d0\u4f9b\u7684\u952e\u662f\u5426\u5b58\u5728\u4e8eHudi\u6570\u636e\u96c6\u4e2d")))),(0,r.kt)("h2",{id:"prestodb"},"PrestoDB"),(0,r.kt)("p",null,"PrestoDB\u662f\u4e00\u79cd\u5e38\u7528\u7684\u67e5\u8be2\u5f15\u64ce\uff0c\u53ef\u63d0\u4f9b\u4ea4\u4e92\u5f0f\u67e5\u8be2\u6027\u80fd\u3002 Hudi RO\u8868\u53ef\u4ee5\u5728Presto\u4e2d\u65e0\u7f1d\u67e5\u8be2\u3002\n\u8fd9\u9700\u8981\u5728\u6574\u4e2a\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-presto-bundle")," jar\u653e\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"<presto_install>/plugin/hive-hadoop2/"),"\u4e2d\u3002"),(0,r.kt)("h2",{id:"impala-34-or-later"},"Impala (3.4 or later)"),(0,r.kt)("h3",{id:"\u8bfb\u4f18\u5316\u8868-1"},"\u8bfb\u4f18\u5316\u8868"),(0,r.kt)("p",null,"Impala\u53ef\u4ee5\u5728HDFS\u4e0a\u67e5\u8be2Hudi\u8bfb\u4f18\u5316\u8868\uff0c\u4f5c\u4e3a\u4e00\u79cd ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/impala_tables#external_tables"},"EXTERNAL TABLE")," \u7684\u5f62\u5f0f\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5728Impala\u4e0a\u5efa\u7acbHudi\u8bfb\u4f18\u5316\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE EXTERNAL TABLE database.table_name\nLIKE PARQUET '/path/to/load/xxx.parquet'\nSTORED AS HUDIPARQUET\nLOCATION '/path/to/load';\n")),(0,r.kt)("p",null,"Impala\u53ef\u4ee5\u5229\u7528\u5408\u7406\u7684\u6587\u4ef6\u5206\u533a\u6765\u63d0\u9ad8\u67e5\u8be2\u7684\u6548\u7387\u3002\n\u5982\u679c\u60f3\u8981\u5efa\u7acb\u5206\u533a\u7684\u8868\uff0c\u6587\u4ef6\u5939\u547d\u540d\u9700\u8981\u6839\u636e\u6b64\u79cd\u65b9\u5f0f",(0,r.kt)("inlineCode",{parentName:"p"},"year=2020/month=1"),".\nImpala\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"="),"\u6765\u533a\u5206\u5206\u533a\u540d\u548c\u5206\u533a\u503c.",(0,r.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5728Impala\u4e0a\u5efa\u7acb\u5206\u533aHudi\u8bfb\u4f18\u5316\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE EXTERNAL TABLE database.table_name\nLIKE PARQUET '/path/to/load/xxx.parquet'\nPARTITION BY (year int, month int, day int)\nSTORED AS HUDIPARQUET\nLOCATION '/path/to/load';\nALTER TABLE database.table_name RECOVER PARTITIONS;\n")),(0,r.kt)("p",null,"\u5728Hudi\u6210\u529f\u5199\u5165\u4e00\u4e2a\u65b0\u7684\u63d0\u4ea4\u540e, \u5237\u65b0Impala\u8868\u6765\u5f97\u5230\u6700\u65b0\u7684\u7ed3\u679c."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"REFRESH database.table_name\n")))}m.isMDXComponent=!0}}]);