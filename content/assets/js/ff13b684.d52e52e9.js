"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[56434],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,g=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Hudi Z-Order and Hilbert Space Filling Curves",excerpt:"Explore the benefits of new Apache Hudi Z-Order and Hilbert Curves",author:"Alexey Kudinkin and Tao Meng",category:"blog",image:"/assets/images/zordercurve.png",tags:["design","clustering","data skipping","apache hudi"]},o=void 0,l={permalink:"/blog/2021/12/29/hudi-zorder-and-hilbert-space-filling-curves",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-12-29-hudi-zorder-and-hilbert-space-filling-curves.md",source:"@site/blog/2021-12-29-hudi-zorder-and-hilbert-space-filling-curves.md",title:"Hudi Z-Order and Hilbert Space Filling Curves",description:"As of Hudi v0.10.0, we are excited to introduce support for an advanced Data Layout Optimization technique known in the database realm as Z-order and Hilbert space filling curves.",date:"2021-12-29T00:00:00.000Z",formattedDate:"December 29, 2021",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"clustering",permalink:"/blog/tags/clustering"},{label:"data skipping",permalink:"/blog/tags/data-skipping"},{label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:8.5,truncated:!0,authors:[{name:"Alexey Kudinkin and Tao Meng"}],prevItem:{title:"The Art of Building Open Data Lakes with Apache Hudi, Kafka, Hive, and Debezium",permalink:"/blog/2021/12/31/The-Art-of-Building-Open-Data-Lakes-with-Apache-Hudi-Kafka-Hive-and-Debezium"},nextItem:{title:"New features from Apache Hudi 0.7.0 and 0.8.0 available on Amazon EMR",permalink:"/blog/2021/12/20/New-features-from-Apache-Hudi-0.7.0-and-0.8.0-available-on-Amazon-EMR"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As of Hudi v0.10.0, we are excited to introduce support for an advanced Data Layout Optimization technique known in the database realm as ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Z-order_curve"},"Z-order")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hilbert_curve"},"Hilbert")," space filling curves."))}s.isMDXComponent=!0}}]);