"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[13279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=n,m=s["".concat(u,".").concat(f)]||s[f]||p[f]||i;return r?o.createElement(m,a(a({ref:t},d),{},{components:r})):o.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70776:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:new Date("2019-06-17T01:59:57.000Z")},a=void 0,l={unversionedId:"cloud",id:"version-0.5.3/cloud",title:"Cloud Storage",description:"Talking to Cloud Storage",source:"@site/versioned_docs/version-0.5.3/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/docs/0.5.3/cloud",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.3/cloud.md",tags:[],version:"0.5.3",frontMatter:{title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:"2019-06-17T01:59:57.000Z"},sidebar:"version-0.5.3/docs",previous:{title:"Deployment Guide",permalink:"/docs/0.5.3/deployment"},next:{title:"S3 Filesystem",permalink:"/docs/0.5.3/s3_hoodie"}},u=[{value:"Talking to Cloud Storage",id:"talking-to-cloud-storage",children:[],level:2}],c={toc:u},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"talking-to-cloud-storage"},"Talking to Cloud Storage"),(0,n.kt)("p",null,"Immaterial of whether RDD/WriteClient APIs or Datasource is used, the following information helps configure access\nto cloud stores."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/s3_hoodie"},"AWS S3")," ",(0,n.kt)("br",null),"\nConfigurations required for S3 and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/gcs_hoodie"},"Google Cloud Storage")," ",(0,n.kt)("br",null),"\nConfigurations required for GCS and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/oss_hoodie"},"Alibaba Cloud OSS")," ",(0,n.kt)("br",null),"\nConfigurations required for OSS and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/azure_hoodie"},"Microsoft Azure")," ",(0,n.kt)("br",null),"\nConfigurations required for Azure and Hudi co-operability.")))}s.isMDXComponent=!0}}]);