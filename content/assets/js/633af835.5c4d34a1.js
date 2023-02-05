"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[90926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81412:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Compaction",summary:"In this page, we describe async compaction in Hudi.",toc:!0,last_modified_at:null},r=void 0,l={unversionedId:"compaction",id:"version-0.12.0/compaction",title:"Compaction",description:"Async Compaction",source:"@site/versioned_docs/version-0.12.0/compaction.md",sourceDirName:".",slug:"/compaction",permalink:"/docs/0.12.0/compaction",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.0/compaction.md",tags:[],version:"0.12.0",frontMatter:{title:"Compaction",summary:"In this page, we describe async compaction in Hudi.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Bootstrapping",permalink:"/docs/0.12.0/migration_guide"},next:{title:"Clustering",permalink:"/docs/0.12.0/clustering"}},c=[{value:"Async Compaction",id:"async-compaction",children:[{value:"Spark Structured Streaming",id:"spark-structured-streaming",children:[],level:3},{value:"DeltaStreamer Continuous Mode",id:"deltastreamer-continuous-mode",children:[],level:3}],level:2},{value:"Synchronous Compaction",id:"synchronous-compaction",children:[],level:2},{value:"Offline Compaction",id:"offline-compaction",children:[{value:"Hudi Compactor Utility",id:"hudi-compactor-utility",children:[],level:3},{value:"Hudi CLI",id:"hudi-cli",children:[],level:3},{value:"Flink Offline Compaction",id:"flink-offline-compaction",children:[{value:"Options",id:"options",children:[],level:4}],level:3}],level:2}],p={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"async-compaction"},"Async Compaction"),(0,i.kt)("p",null,"Compaction is executed asynchronously with Hudi by default. Async Compaction is performed in 2 steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Compaction Scheduling")),": This is done by the ingestion job. In this step, Hudi scans the partitions and selects ",(0,i.kt)("strong",{parentName:"li"},"file\nslices")," to be compacted. A compaction plan is finally written to Hudi timeline."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Compaction Execution")),": In this step the compaction plan is read and file slices are compacted.")),(0,i.kt)("p",null,"There are few ways by which we can execute compactions asynchronously."),(0,i.kt)("h3",{id:"spark-structured-streaming"},"Spark Structured Streaming"),(0,i.kt)("p",null,"Compactions are scheduled and executed asynchronously inside the\nstreaming job.  Async Compactions are enabled by default for structured streaming jobs\non Merge-On-Read table."),(0,i.kt)("p",null,"Here is an example snippet in java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'import org.apache.hudi.DataSourceWriteOptions;\nimport org.apache.hudi.HoodieDataSourceHelpers;\nimport org.apache.hudi.config.HoodieCompactionConfig;\nimport org.apache.hudi.config.HoodieWriteConfig;\n\nimport org.apache.spark.sql.streaming.OutputMode;\nimport org.apache.spark.sql.streaming.ProcessingTime;\n\n\n DataStreamWriter<Row> writer = streamingInput.writeStream().format("org.apache.hudi")\n        .option(DataSourceWriteOptions.OPERATION_OPT_KEY(), operationType)\n        .option(DataSourceWriteOptions.TABLE_TYPE_OPT_KEY(), tableType)\n        .option(DataSourceWriteOptions.RECORDKEY_FIELD_OPT_KEY(), "_row_key")\n        .option(DataSourceWriteOptions.PARTITIONPATH_FIELD_OPT_KEY(), "partition")\n        .option(DataSourceWriteOptions.PRECOMBINE_FIELD_OPT_KEY(), "timestamp")\n        .option(HoodieCompactionConfig.INLINE_COMPACT_NUM_DELTA_COMMITS_PROP, "10")\n        .option(DataSourceWriteOptions.ASYNC_COMPACT_ENABLE_OPT_KEY(), "true")\n        .option(HoodieWriteConfig.TABLE_NAME, tableName).option("checkpointLocation", checkpointLocation)\n        .outputMode(OutputMode.Append());\n writer.trigger(new ProcessingTime(30000)).start(tablePath);\n')),(0,i.kt)("h3",{id:"deltastreamer-continuous-mode"},"DeltaStreamer Continuous Mode"),(0,i.kt)("p",null,"Hudi DeltaStreamer provides continuous ingestion mode where a single long running spark application",(0,i.kt)("br",{parentName:"p"}),"\n","ingests data to Hudi table continuously from upstream sources. In this mode, Hudi supports managing asynchronous\ncompactions. Here is an example snippet for running in continuous mode with async compactions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"spark-submit --packages org.apache.hudi:hudi-utilities-bundle_2.11:0.6.0 \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n--table-type MERGE_ON_READ \\\n--target-base-path <hudi_base_path> \\\n--target-table <hudi_table> \\\n--source-class org.apache.hudi.utilities.sources.JsonDFSSource \\\n--source-ordering-field ts \\\n--schemaprovider-class org.apache.hudi.utilities.schema.FilebasedSchemaProvider \\\n--props /path/to/source.properties \\\n--continous\n")),(0,i.kt)("h2",{id:"synchronous-compaction"},"Synchronous Compaction"),(0,i.kt)("p",null,"By default, compaction is run asynchronously."),(0,i.kt)("p",null,"If latency of ingesting records is important for you, you are most likely using Merge-On-Read tables.\nMerge-On-Read tables store data using a combination of columnar (e.g parquet) + row based (e.g avro) file formats.\nUpdates are logged to delta files & later compacted to produce new versions of columnar files.\nTo improve ingestion latency, Async Compaction is the default configuration."),(0,i.kt)("p",null,"If immediate read performance of a new commit is important for you, or you want simplicity of not managing separate compaction jobs,\nyou may want Synchronous compaction, which means that as a commit is written it is also compacted by the same job."),(0,i.kt)("p",null,'Compaction is run synchronously by passing the flag "--disable-compaction" (Meaning to disable async compaction scheduling).\nWhen both ingestion and compaction is running in the same spark context, you can use resource allocation configuration\nin DeltaStreamer CLI such as ("--delta-sync-scheduling-weight",\n"--compact-scheduling-weight", ""--delta-sync-scheduling-minshare", and "--compact-scheduling-minshare")\nto control executor allocation between ingestion and compaction.'),(0,i.kt)("h2",{id:"offline-compaction"},"Offline Compaction"),(0,i.kt)("p",null,"The compaction of the MERGE_ON_READ table is enabled by default. The trigger strategy is to perform compaction after completing\nfive commits. Because compaction consumes a lot of memory and is placed in the same pipeline with the write operation, it's easy to\ninterfere with the write operation when there is a large amount of data (> 100000 per second). As this time, it is more stable to execute\nthe compaction task by using offline compaction."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The execution of a compaction task includes two parts: schedule compaction plan and execute compaction plan. It's recommended that\nthe process of schedule compaction plan be triggered periodically by the write task, and the write parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"compaction.schedule.enable"),"\nis enabled by default."))),(0,i.kt)("h3",{id:"hudi-compactor-utility"},"Hudi Compactor Utility"),(0,i.kt)("p",null,"Hudi provides a standalone tool to execute specific compactions asynchronously. Below is an example and you can read more in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/deployment#compactions"},"deployment guide")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"spark-submit --packages org.apache.hudi:hudi-utilities-bundle_2.11:0.6.0 \\\n--class org.apache.hudi.utilities.HoodieCompactor \\\n--base-path <base_path> \\\n--table-name <table_name> \\\n--schema-file <schema_file> \\\n--instant-time <compaction_instant>\n")),(0,i.kt)("p",null,"Note, the ",(0,i.kt)("inlineCode",{parentName:"p"},"instant-time")," parameter is now optional for the Hudi Compactor Utility. If using the utility without ",(0,i.kt)("inlineCode",{parentName:"p"},"--instant time"),",\nthe spark-submit will execute the earliest scheduled compaction on the Hudi timeline."),(0,i.kt)("h3",{id:"hudi-cli"},"Hudi CLI"),(0,i.kt)("p",null,"Hudi CLI is yet another way to execute specific compactions asynchronously. Here is an example and you can read more in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli#compactions"},"deployment guide")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"hudi:trips->compaction run --tableName <table_name> --parallelism <parallelism> --compactionInstant <InstantTime>\n...\n")),(0,i.kt)("h3",{id:"flink-offline-compaction"},"Flink Offline Compaction"),(0,i.kt)("p",null,"Offline compaction needs to submit the Flink task on the command line. The program entry is as follows: ",(0,i.kt)("inlineCode",{parentName:"p"},"hudi-flink-bundle_2.11-0.9.0-SNAPSHOT.jar")," :\n",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.sink.compact.HoodieFlinkCompactor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Command line\n./bin/flink run -c org.apache.hudi.sink.compact.HoodieFlinkCompactor lib/hudi-flink-bundle_2.11-0.9.0.jar --path hdfs://xxx:9000/table\n")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--path")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"frue")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--")),(0,i.kt)("td",{parentName:"tr",align:null},"The path where the target table is stored on Hudi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--compaction-max-memory")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"100")),(0,i.kt)("td",{parentName:"tr",align:null},"The index map size of log data during compaction, 100 MB by default. If you have enough memory, you can turn up this parameter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--schedule")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"whether to execute the operation of scheduling compaction plan. When the write process is still writing\uff0c turning on this parameter have a risk of losing data. Therefore, it must be ensured that there are no write tasks currently writing data to this table when this parameter is turned on")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--seq")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LIFO")),(0,i.kt)("td",{parentName:"tr",align:null},"The order in which compaction tasks are executed. Executing from the latest compaction plan by default. ",(0,i.kt)("inlineCode",{parentName:"td"},"LIFO"),": executing from the latest plan. ",(0,i.kt)("inlineCode",{parentName:"td"},"FIFO"),": executing from the oldest plan.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--service")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to start a monitoring service that checks and schedules new compaction task in configured interval.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--min-compaction-interval-seconds")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"600(s)")),(0,i.kt)("td",{parentName:"tr",align:null},"The checking interval for service mode, by default 10 minutes.")))))}m.isMDXComponent=!0}}]);