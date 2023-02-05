"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[37051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57753:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={title:"Release 0.10.1",sidebar_position:7,layout:"releases",toc:!0,last_modified_at:new Date("2022-01-27T14:07:00.000Z")},l="[Release 0.10.1](https://github.com/apache/hudi/releases/tag/release-0.10.1) ([docs](/docs/quick-start-guide))",s={unversionedId:"release-0.10.1",id:"release-0.10.1",title:"Release 0.10.1",description:"Migration Guide",source:"@site/releases/release-0.10.1.md",sourceDirName:".",slug:"/release-0.10.1",permalink:"/cn/releases/release-0.10.1",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Release 0.10.1",sidebar_position:7,layout:"releases",toc:!0,last_modified_at:"2022-01-27T14:07:00.000Z"},sidebar:"releases",previous:{title:"Release 0.11.0",permalink:"/cn/releases/release-0.11.0"},next:{title:"Release 0.10.0",permalink:"/cn/releases/release-0.10.0"}},o=[{value:"Migration Guide",id:"migration-guide",children:[],level:2},{value:"Release Highlights",id:"release-highlights",children:[{value:"Explicit Spark 3 bundle names",id:"explicit-spark-3-bundle-names",children:[],level:3},{value:"Repair Utility",id:"repair-utility",children:[],level:3},{value:"Bug fixes",id:"bug-fixes",children:[],level:3}],level:2},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:2}],p={toc:o},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"release-0101-docs"},(0,n.kt)("a",{parentName:"h1",href:"https://github.com/apache/hudi/releases/tag/release-0.10.1"},"Release 0.10.1")," (",(0,n.kt)("a",{parentName:"h1",href:"/docs/quick-start-guide"},"docs"),")"),(0,n.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This release (0.10.1) does not introduce any new table version, hence no migration needed if you are on 0.10.0."),(0,n.kt)("li",{parentName:"ul"},"If migrating from an older release, please check the migration guide from the previous release notes, specifically the upgrade instructions in 0.6.0, 0.9.0 and 0.10.0.")),(0,n.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("h3",{id:"explicit-spark-3-bundle-names"},"Explicit Spark 3 bundle names"),(0,n.kt)("p",null,"In the previous release (0.10.0), we added Spark 3.1.x support and made it the default Spark 3 version to build with. In 0.10.1,\nwe made the Spark 3 version explicit in the bundle name and published a new bundle for Spark 3.0.x. Specifically, these 2 bundles\nare available in the public maven repository."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hudi-spark3.1.2-bundle_2.12-0.10.1.jar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hudi-spark3.0.3-bundle_2.12-0.10.1.jar"))),(0,n.kt)("h3",{id:"repair-utility"},"Repair Utility"),(0,n.kt)("p",null,"We added a new repair utility ",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.utilities.HoodieRepairTool")," to clean up dangling base and log files. The utility\ncan be run as a separate Spark job as below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"spark-submit \\\n--class org.apache.hudi.utilities.HoodieRepairTool \\\n--driver-memory 4g \\\n--executor-memory 1g \\\n--conf spark.serializer=org.apache.spark.serializer.KryoSerializer \\\n--conf spark.sql.catalogImplementation=hive \\\n--conf spark.sql.extensions=org.apache.spark.sql.hudi.HoodieSparkSessionExtension \\\n--packages org.apache.spark:spark-avro_2.12:3.1.2 \\\n$HUDI_DIR/packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.11.0-SNAPSHOT.jar \\\n--mode dry_run \\\n--base-path base_path \\\n--assume-date-partitioning\n")),(0,n.kt)("p",null,"Check out the javadoc in ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieRepairTool")," for more instructions and examples."),(0,n.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("p",null,"0.10.1 is mainly intended for bug fixes and stability. The fixes span across many components, including"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HoodieDeltaStreamer"),(0,n.kt)("li",{parentName:"ul"},"Timeline related fixes"),(0,n.kt)("li",{parentName:"ul"},"Table services"),(0,n.kt)("li",{parentName:"ul"},"Metadata table"),(0,n.kt)("li",{parentName:"ul"},"Spark SQL support"),(0,n.kt)("li",{parentName:"ul"},"Timestamp-based key generator"),(0,n.kt)("li",{parentName:"ul"},"Hive Sync"),(0,n.kt)("li",{parentName:"ul"},"Flink and Java engines"),(0,n.kt)("li",{parentName:"ul"},"Kafka Connect")),(0,n.kt)("h2",{id:"raw-release-notes"},"Raw Release Notes"),(0,n.kt)("p",null,"The raw release notes are available ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12351135"},"here")))}c.isMDXComponent=!0}}]);