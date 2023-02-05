"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[62939],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>b});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return o?r.createElement(b,i(i({ref:t},u),{},{components:o})):r.createElement(b,i({ref:t},u))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},67186:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={title:"IBM Cloud",keywords:["hudi","hive","ibm","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with IBM Cloud Object Storage filesystem.",last_modified_at:new Date("2020-10-01T21:38:24.000Z")},i=void 0,l={unversionedId:"ibm_cos_hoodie",id:"version-0.10.1/ibm_cos_hoodie",title:"IBM Cloud",description:"In this page, we explain how to get your Hudi spark job to store into IBM Cloud Object Storage.",source:"@site/versioned_docs/version-0.10.1/ibm_cos_hoodie.md",sourceDirName:".",slug:"/ibm_cos_hoodie",permalink:"/cn/docs/0.10.1/ibm_cos_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/ibm_cos_hoodie.md",tags:[],version:"0.10.1",frontMatter:{title:"IBM Cloud",keywords:["hudi","hive","ibm","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with IBM Cloud Object Storage filesystem.",last_modified_at:"2020-10-01T21:38:24.000Z"},sidebar:"version-0.10.1/docs",previous:{title:"Tencent Cloud",permalink:"/cn/docs/0.10.1/cos_hoodie"},next:{title:"Baidu Cloud",permalink:"/cn/docs/0.10.1/bos_hoodie"}},s=[{value:"IBM COS configs",id:"ibm-cos-configs",children:[{value:"IBM Cloud Object Storage Credentials",id:"ibm-cloud-object-storage-credentials",children:[],level:3},{value:"IBM Cloud Object Storage Libs",id:"ibm-cloud-object-storage-libs",children:[],level:3}],level:2}],c={toc:s},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this page, we explain how to get your Hudi spark job to store into IBM Cloud Object Storage."),(0,n.kt)("h2",{id:"ibm-cos-configs"},"IBM COS configs"),(0,n.kt)("p",null,"There are two configurations required for Hudi-IBM Cloud Object Storage compatibility:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adding IBM COS Credentials for Hudi"),(0,n.kt)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,n.kt)("h3",{id:"ibm-cloud-object-storage-credentials"},"IBM Cloud Object Storage Credentials"),(0,n.kt)("p",null,"Simplest way to use Hudi with IBM Cloud Object Storage, is to configure your ",(0,n.kt)("inlineCode",{parentName:"p"},"SparkSession")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"SparkContext")," with IBM Cloud Object Storage credentials using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CODAIT/stocator"},"Stocator")," storage connector for Spark. Hudi will automatically pick this up and talk to IBM Cloud Object Storage."),(0,n.kt)("p",null,"Alternatively, add the required configs in your ",(0,n.kt)("inlineCode",{parentName:"p"},"core-site.xml")," from where Hudi can fetch them. Replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your IBM Cloud Object Storage bucket name and Hudi should be able to read/write from the bucket."),(0,n.kt)("p",null,"For example, using HMAC keys and service name ",(0,n.kt)("inlineCode",{parentName:"p"},"myCOS"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n      <name>fs.defaultFS</name>\n      <value>cos://myBucket.myCOS</value>\n  </property>\n\n  <property>\n      <name>fs.cos.flat.list</name>\n      <value>true</value>\n  </property>\n\n  <property>\n      <name>fs.stocator.scheme.list</name>\n      <value>cos</value>\n  </property>\n\n  <property>\n      <name>fs.cos.impl</name>\n      <value>com.ibm.stocator.fs.ObjectStoreFileSystem</value>\n  </property>\n\n  <property>\n      <name>fs.stocator.cos.impl</name>\n      <value>com.ibm.stocator.fs.cos.COSAPIClient</value>\n  </property>\n\n  <property>\n      <name>fs.stocator.cos.scheme</name>\n      <value>cos</value>\n  </property>\n\n  <property>\n      <name>fs.cos.myCos.access.key</name>\n      <value>ACCESS KEY</value>\n  </property>\n\n  <property>\n      <name>fs.cos.myCos.endpoint</name>\n      <value>http://s3-api.us-geo.objectstorage.softlayer.net</value>\n  </property>\n\n  <property>\n      <name>fs.cos.myCos.secret.key</name>\n      <value>SECRET KEY</value>\n  </property>\n\n")),(0,n.kt)("p",null,"For more options see Stocator ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CODAIT/stocator/blob/master/README.md"},"documentation"),"."),(0,n.kt)("h3",{id:"ibm-cloud-object-storage-libs"},"IBM Cloud Object Storage Libs"),(0,n.kt)("p",null,"IBM Cloud Object Storage hadoop libraries to add to our classpath"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"com.ibm.stocator:stocator:1.1.3")))}p.isMDXComponent=!0}}]);