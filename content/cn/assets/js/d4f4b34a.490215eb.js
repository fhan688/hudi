"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[49342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4656:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"S3 \u6587\u4ef6\u7cfb\u7edf",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u5728 S3 \u6587\u4ef6\u7cfb\u7edf\u4e2d\u914d\u7f6e Hudi \u3002",last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},s=void 0,l={unversionedId:"s3_hoodie",id:"s3_hoodie",title:"S3 \u6587\u4ef6\u7cfb\u7edf",description:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u5c06\u89e3\u91ca\u5982\u4f55\u8ba9\u4f60\u7684 Hudi Spark \u4f5c\u4e1a\u5b58\u50a8\u5230 AWS S3 \u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/s3_hoodie.md",sourceDirName:".",slug:"/s3_hoodie",permalink:"/cn/docs/next/s3_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/s3_hoodie.md",tags:[],version:"current",frontMatter:{title:"S3 \u6587\u4ef6\u7cfb\u7edf",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u5728 S3 \u6587\u4ef6\u7cfb\u7edf\u4e2d\u914d\u7f6e Hudi \u3002",last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"},sidebar:"docs",previous:{title:"\u4e91\u50a8\u5b58",permalink:"/cn/docs/next/cloud"},next:{title:"GCS \u6587\u4ef6\u7cfb\u7edf",permalink:"/cn/docs/next/gcs_hoodie"}},c=[{value:"AWS \u914d\u7f6e",id:"aws-\u914d\u7f6e",children:[{value:"AWS \u51ed\u8bc1",id:"aws-\u51ed\u8bc1",children:[],level:3},{value:"AWS \u5e93",id:"aws-\u5e93",children:[],level:3}],level:2}],i={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u5c06\u89e3\u91ca\u5982\u4f55\u8ba9\u4f60\u7684 Hudi Spark \u4f5c\u4e1a\u5b58\u50a8\u5230 AWS S3 \u3002"),(0,a.kt)("h2",{id:"aws-\u914d\u7f6e"},"AWS \u914d\u7f6e"),(0,a.kt)("p",null,"Hudi \u4e0e S3 \u7684\u9002\u914d\u9700\u8981\u4e24\u9879\u914d\u7f6e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a Hudi \u52a0 AWS \u51ed\u8bc1"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u9700\u8981\u7684 jar \u5305\u6dfb\u52a0\u5230\u7c7b\u8def\u5f84")),(0,a.kt)("h3",{id:"aws-\u51ed\u8bc1"},"AWS \u51ed\u8bc1"),(0,a.kt)("p",null,"\u5728 S3 \u4e0a\u4f7f\u7528 Hudi \u7684\u6700\u7b80\u5355\u7684\u529e\u6cd5\uff0c\u662f\u4e3a\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkSession")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkContext")," \u8bbe\u7f6e S3 \u51ed\u8bc1\u3002 Hudi \u5c06\u81ea\u52a8\u62fe\u53d6\u5e76\u901a\u77e5 S3 \u3002"),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u5c06\u9700\u8981\u7684\u914d\u7f6e\u6dfb\u52a0\u5230\u4f60\u7684 core-site.xml \u6587\u4ef6\u4e2d\uff0c Hudi \u53ef\u4ee5\u4ece\u90a3\u91cc\u83b7\u53d6\u5b83\u4eec\u3002\u7528\u4f60\u7684 S3 Bucket \u540d\u79f0\u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," \uff0c\u4e4b\u540e Hudi \u5e94\u8be5\u80fd\u591f\u4ece Bucket \u4e2d\u8bfb\u53d6/\u5199\u5165."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n      <name>fs.defaultFS</name>\n      <value>s3://ysharma</value>\n  </property>\n\n  <property>\n      <name>fs.s3.impl</name>\n      <value>org.apache.hadoop.fs.s3native.NativeS3FileSystem</value>\n  </property>\n\n  <property>\n      <name>fs.s3.awsAccessKeyId</name>\n      <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsAccessKeyId</name>\n       <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hudi-cli")," \u6216 DeltaStreamer \u8fd9\u4e9b\u5de5\u5177\u96c6\u80fd\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"HOODIE_ENV_")," \u524d\u7f00\u7684\u73af\u5883\u53d8\u91cf\u62fe\u53d6\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f5c\u4e3a\u793a\u4f8b\u7684\u57fa\u7840\u4ee3\u7801\u7247\u6bb5\uff0c\u5b83\u8bbe\u7f6e\u4e86\u8fd9\u4e9b\u53d8\u91cf\u5e76\u8ba9 CLI \u80fd\u591f\u5728\u4fdd\u5b58\u5728 S3 \u4e0a\u7684\u6570\u636e\u96c6\u4e0a\u5de5\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"export HOODIE_ENV_fs_DOT_s3a_DOT_access_DOT_key=$accessKey\nexport HOODIE_ENV_fs_DOT_s3a_DOT_secret_DOT_key=$secretKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_impl=org.apache.hadoop.fs.s3a.S3AFileSystem\n")),(0,a.kt)("h3",{id:"aws-\u5e93"},"AWS \u5e93"),(0,a.kt)("p",null,"\u5c06 AWS Hadoop \u5e93\u6dfb\u52a0\u5230\u6211\u4eec\u7684\u7c7b\u8def\u5f84\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk:1.10.34"),(0,a.kt)("li",{parentName:"ul"},"org.apache.hadoop:hadoop-aws:2.7.3")),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86 AWS Glue \u7684\u6570\u636e\uff0c\u5219\u9700\u8981 AWS Glue \u5e93\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"com.amazonaws.glue:aws-glue-datacatalog-hive2-client:1.11.0"),(0,a.kt)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk-glue:1.11.475")))}u.isMDXComponent=!0}}]);