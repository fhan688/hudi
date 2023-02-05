"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[16440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"Schema evolution with DeltaStreamer using KafkaSource",excerpt:"Evolve schema used in Kafkasource of DeltaStreamer to keep data up to date with business",author:"sbernauer",category:"blog",image:"/assets/images/blog/hudi_schemaevolution.png",tags:["design","deltastreamer","schema","apache hudi","apache kafka"]},i=void 0,c={permalink:"/cn/blog/2021/08/16/kafka-custom-deserializer",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-16-kafka-custom-deserializer.md",source:"@site/blog/2021-08-16-kafka-custom-deserializer.md",title:"Schema evolution with DeltaStreamer using KafkaSource",description:"The schema used for data exchange between services can change rapidly with new business requirements.",date:"2021-08-16T00:00:00.000Z",formattedDate:"August 16, 2021",tags:[{label:"design",permalink:"/cn/blog/tags/design"},{label:"deltastreamer",permalink:"/cn/blog/tags/deltastreamer"},{label:"schema",permalink:"/cn/blog/tags/schema"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"},{label:"apache kafka",permalink:"/cn/blog/tags/apache-kafka"}],readingTime:3.155,truncated:!0,authors:[{name:"sbernauer"}],prevItem:{title:"Adding support for Virtual Keys in Hudi",permalink:"/cn/blog/2021/08/18/virtual-keys"},nextItem:{title:"Cost-Efficient Open Source Big Data Platform at Uber",permalink:"/cn/blog/2021/08/11/Cost-Efficient-Open-Source-Big-Data-Platform-at-Uber"}},s={authorsImageUrls:[void 0]},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The schema used for data exchange between services can change rapidly with new business requirements.\nApache Hudi is often used in combination with kafka as a event stream where all events are transmitted according to a record schema.\nIn our case a Confluent schema registry is used to maintain the schema and as schema evolves, newer versions are updated in the schema registry."))}m.isMDXComponent=!0}}]);