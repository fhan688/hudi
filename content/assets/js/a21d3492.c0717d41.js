"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[31044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78502:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={version:"0.8.0",title:"AWS S3",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},s=void 0,i={unversionedId:"s3_hoodie",id:"version-0.8.0/s3_hoodie",title:"AWS S3",description:"In this page, we explain how to get your Hudi spark job to store into AWS S3.",source:"@site/versioned_docs/version-0.8.0/s3_hoodie.md",sourceDirName:".",slug:"/s3_hoodie",permalink:"/docs/0.8.0/s3_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.8.0/s3_hoodie.md",tags:[],version:"0.8.0",frontMatter:{version:"0.8.0",title:"AWS S3",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.8.0/docs",previous:{title:"Cloud Storage",permalink:"/docs/0.8.0/cloud"},next:{title:"Google Cloud",permalink:"/docs/0.8.0/gcs_hoodie"}},l=[{value:"AWS configs",id:"aws-configs",children:[{value:"AWS Credentials",id:"aws-credentials",children:[],level:3},{value:"AWS Libs",id:"aws-libs",children:[],level:3}],level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this page, we explain how to get your Hudi spark job to store into AWS S3."),(0,a.kt)("h2",{id:"aws-configs"},"AWS configs"),(0,a.kt)("p",null,"There are two configurations required for Hudi-S3 compatibility:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adding AWS Credentials for Hudi"),(0,a.kt)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,a.kt)("h3",{id:"aws-credentials"},"AWS Credentials"),(0,a.kt)("p",null,"Simplest way to use Hudi with S3, is to configure your ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkSession")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkContext")," with S3 credentials. Hudi will automatically pick this up and talk to S3."),(0,a.kt)("p",null,"Alternatively, add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your S3 bucket name and Hudi should be able to read/write from the bucket."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n      <name>fs.defaultFS</name>\n      <value>s3://ysharma</value>\n  </property>\n\n  <property>\n      <name>fs.s3.impl</name>\n      <value>org.apache.hadoop.fs.s3native.NativeS3FileSystem</value>\n  </property>\n\n  <property>\n      <name>fs.s3.awsAccessKeyId</name>\n      <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsAccessKeyId</name>\n       <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n")),(0,a.kt)("p",null,"Utilities such as hudi-cli or deltastreamer tool, can pick up s3 creds via environmental variable prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"HOODIE_ENV_"),". For e.g below is a bash snippet to setup\nsuch variables and then have cli be able to work on datasets stored in s3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"export HOODIE_ENV_fs_DOT_s3a_DOT_access_DOT_key=$accessKey\nexport HOODIE_ENV_fs_DOT_s3a_DOT_secret_DOT_key=$secretKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_impl=org.apache.hadoop.fs.s3a.S3AFileSystem\n")),(0,a.kt)("h3",{id:"aws-libs"},"AWS Libs"),(0,a.kt)("p",null,"AWS hadoop libraries to add to our classpath"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk:1.10.34"),(0,a.kt)("li",{parentName:"ul"},"org.apache.hadoop:hadoop-aws:2.7.3")),(0,a.kt)("p",null,"AWS glue data libraries are needed if AWS glue data is used"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"com.amazonaws.glue:aws-glue-datacatalog-hive2-client:1.11.0"),(0,a.kt)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk-glue:1.11.475")))}u.isMDXComponent=!0}}]);