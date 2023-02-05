"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[76930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},95166:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const i={version:"0.5.2",title:"GCS Filesystem",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},a=void 0,l={unversionedId:"gcs_hoodie",id:"version-0.5.2/gcs_hoodie",title:"GCS Filesystem",description:"For Hudi storage on GCS, regional buckets provide an DFS API with strong consistency.",source:"@site/versioned_docs/version-0.5.2/gcs_hoodie.md",sourceDirName:".",slug:"/gcs_hoodie",permalink:"/docs/0.5.2/gcs_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.2/gcs_hoodie.md",tags:[],version:"0.5.2",frontMatter:{version:"0.5.2",title:"GCS Filesystem",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.5.2/docs",previous:{title:"S3 Filesystem",permalink:"/docs/0.5.2/s3_hoodie"},next:{title:"Docker Demo",permalink:"/docs/0.5.2/docker_demo"}},s=[{value:"GCS Configs",id:"gcs-configs",children:[{value:"GCS Credentials",id:"gcs-credentials",children:[],level:3},{value:"GCS Libs",id:"gcs-libs",children:[],level:3}],level:2}],c={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For Hudi storage on GCS, ",(0,n.kt)("strong",{parentName:"p"},"regional")," buckets provide an DFS API with strong consistency."),(0,n.kt)("h2",{id:"gcs-configs"},"GCS Configs"),(0,n.kt)("p",null,"There are two configurations required for Hudi GCS compatibility:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adding GCS Credentials for Hudi"),(0,n.kt)("li",{parentName:"ul"},"Adding required jars to classpath")),(0,n.kt)("h3",{id:"gcs-credentials"},"GCS Credentials"),(0,n.kt)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your GCS bucket name and Hudi should be able to read/write from the bucket."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n    <name>fs.defaultFS</name>\n    <value>gs://hudi-bucket</value>\n  </property>\n\n  <property>\n    <name>fs.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem</value>\n    <description>The FileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.AbstractFileSystem.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS</value>\n    <description>The AbstractFileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.gs.project.id</name>\n    <value>GCS_PROJECT_ID</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.enable</name>\n    <value>true</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.email</name>\n    <value>GCS_SERVICE_ACCOUNT_EMAIL</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.keyfile</name>\n    <value>GCS_SERVICE_ACCOUNT_KEYFILE</value>\n  </property>\n")),(0,n.kt)("h3",{id:"gcs-libs"},"GCS Libs"),(0,n.kt)("p",null,"GCS hadoop libraries to add to our classpath"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"com.google.cloud.bigdataoss:gcs-connector:1.6.0-hadoop2")))}p.isMDXComponent=!0}}]);