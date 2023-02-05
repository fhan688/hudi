"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[31769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Ingesting Database changes via Sqoop/Hudi",excerpt:"Learn how to ingesting changes from a HUDI dataset using Sqoop/Hudi",author:"vinoth",category:"blog",tags:["how-to","apache hudi"]},i=void 0,s={permalink:"/cn/blog/2019/09/09/ingesting-database-changes",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2019-09-09-ingesting-database-changes.md",source:"@site/blog/2019-09-09-ingesting-database-changes.md",title:"Ingesting Database changes via Sqoop/Hudi",description:"Very simple in just 2 steps.",date:"2019-09-09T00:00:00.000Z",formattedDate:"September 9, 2019",tags:[{label:"how-to",permalink:"/cn/blog/tags/how-to"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:.605,truncated:!0,authors:[{name:"vinoth"}],prevItem:{title:"Hudi On Hops",permalink:"/cn/blog/2019/10/22/Hudi-On-Hops"},nextItem:{title:"Registering sample dataset to Hive via beeline",permalink:"/cn/blog/2019/05/14/registering-dataset-to-hive"}},p={authorsImageUrls:[void 0]},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Very simple in just 2 steps."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),": Extract new changes to users table in MySQL, as avro data files on DFS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// Command to extract incrementals using sqoop\nbin/sqoop import \\\n  -Dmapreduce.job.user.classpath.first=true \\\n  --connect jdbc:mysql://localhost/users \\\n  --username root \\\n  --password ******* \\\n  --table users \\\n  --as-avrodatafile \\\n  --target-dir \\ \n  s3:///tmp/sqoop/import-1/users\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Use your fav datasource to read extracted data and directly \u201cupsert\u201d the users table on DFS/Hive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// Spark Datasource\nimport org.apache.hudi.DataSourceWriteOptions._\n// Use Spark datasource to read avro\nval inputDataset = spark.read.avro("s3://tmp/sqoop/import-1/users/*");\n     \n// save it as a Hudi dataset\ninputDataset.write.format("org.apache.hudi\u201d)\n  .option(HoodieWriteConfig.TABLE_NAME, "hoodie.users")\n  .option(RECORDKEY_FIELD_OPT_KEY(), "userID")\n  .option(PARTITIONPATH_FIELD_OPT_KEY(),"country")\n  .option(PRECOMBINE_FIELD_OPT_KEY(), "last_mod")\n  .option(OPERATION_OPT_KEY(), UPSERT_OPERATION_OPT_VAL())\n  .mode(SaveMode.Append)\n  .save("/path/on/dfs");\n')),(0,r.kt)("p",null,"Alternatively, you can also use the Hudi ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/writing_data#deltastreamer"},"DeltaStreamer")," tool with the DFSSource."))}d.isMDXComponent=!0}}]);