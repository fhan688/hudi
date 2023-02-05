"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[16513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Apache Hudi meets Apache Flink",excerpt:"The design and latest progress of the integration of Apache Hudi and Apache Flink.",author:"wangxianghu",category:"blog",image:"/assets/images/blog/2020-10-15-apache-hudi-meets-apache-flink.png",tags:["blog","apache flink","apache hudi"]},r=void 0,l={permalink:"/cn/blog/2020/10/15/apache-hudi-meets-apache-flink",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-10-15-apache-hudi-meets-apache-flink.md",source:"@site/blog/2020-10-15-apache-hudi-meets-apache-flink.md",title:"Apache Hudi meets Apache Flink",description:"Apache Hudi (Hudi for short) is a data lake framework created at Uber. Hudi joined the Apache incubator for incubation in January 2019, and was promoted to the top Apache project in May 2020. It is one of the most popular data lake frameworks.",date:"2020-10-15T00:00:00.000Z",formattedDate:"October 15, 2020",tags:[{label:"blog",permalink:"/cn/blog/tags/blog"},{label:"apache flink",permalink:"/cn/blog/tags/apache-flink"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:9.705,truncated:!0,authors:[{name:"wangxianghu"}],prevItem:{title:"Origins of Data Lake at Grofers",permalink:"/cn/blog/2020/10/19/Origins-of-Data-Lake-at-Grofers"},nextItem:{title:"How nClouds Helps Accelerate Data Delivery with Apache Hudi on Amazon EMR",permalink:"/cn/blog/2020/10/06/cdc-solution-using-hudi-by-nclouds"}},s={authorsImageUrls:[void 0]},p=[{value:"1. Why decouple",id:"1-why-decouple",children:[],level:2},{value:"2. Challenges",id:"2-challenges",children:[],level:2},{value:"3. Decoupling Spark",id:"3-decoupling-spark",children:[{value:"Decoupling principle",id:"decoupling-principle",children:[],level:3}],level:2},{value:"4. Flink integration design",id:"4-flink-integration-design",children:[{value:"4.1 Index design based on Flink State",id:"41-index-design-based-on-flink-state",children:[],level:3}],level:2},{value:"5. Implementation examples",id:"5-implementation-examples",children:[{value:"1) HoodieTable",id:"1-hoodietable",children:[],level:3},{value:"2) HoodieEngineContext",id:"2-hoodieenginecontext",children:[],level:3}],level:2},{value:"6. Current progress and follow-up plan",id:"6-current-progress-and-follow-up-plan",children:[{value:"6.1 Working time axis",id:"61-working-time-axis",children:[],level:3},{value:"6.2 Follow-up plan",id:"62-follow-up-plan",children:[{value:"1) Promote the integration of Hudi and Flink",id:"1-promote-the-integration-of-hudi-and-flink",children:[],level:4},{value:"2) Performance optimization",id:"2-performance-optimization",children:[],level:4},{value:"3) flink-connector-hudi like third-party package development",id:"3-flink-connector-hudi-like-third-party-package-development",children:[],level:4}],level:3}],level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Hudi (Hudi for short) is a data lake framework created at Uber. Hudi joined the Apache incubator for incubation in January 2019, and was promoted to the top Apache project in May 2020. It is one of the most popular data lake frameworks."),(0,i.kt)("h2",{id:"1-why-decouple"},"1. Why decouple"),(0,i.kt)("p",null,"Hudi has been using Spark as its data processing engine since its birth. If users want to use Hudi as their data lake framework, they must introduce Spark into their platform technology stack.\nA few years ago, using Spark as a big data processing engine can be said to be very common or even natural. Since Spark can either perform batch processing or use micro-batch to simulate streaming, one engine solves both streaming and batch problems.\nHowever, in recent years, with the development of big data technology, Flink, which is also a big data processing engine, has gradually entered people's vision and has occupied a certain market in the field of computing engines.\nIn the big data technology community, forums and other territories, the voice of whether Hudi supports Flink has gradually appeared and has become more frequent. Therefore, it is a valuable thing to make Hudi support the Flink engine, and the first step of integrating the Flink engine is that Hudi and Spark are decoupled."),(0,i.kt)("p",null,"In addition, looking at the mature, active, and viable frameworks in the big data, all frameworks are elegant in design and can be integrated with other frameworks and leverage each other's expertise.\nTherefore, decoupling Hudi from Spark and turning it into an engine-independent data lake framework will undoubtedly create more possibilities for the integration of Hudi and other components, allowing Hudi to better integrate into the big data ecosystem."),(0,i.kt)("h2",{id:"2-challenges"},"2. Challenges"),(0,i.kt)("p",null,"Hudi's internal use of Spark API is as common as our usual development and use of List. Since the data source reads the data, and finally writes the data to the table, Spark RDD is used as the main data structure everywhere, and even ordinary tools are implemented using the Spark API.\nIt can be said that Hudi is a universal data lake framework implemented by Spark. Hudi also leverages deep Spark functionality like custom partitioning, in-memory caching to implement indexing and file sizing using workload heuristics.\nFor some of these, Flink offers better out-of-box support (e.g using Flink\u2019s state store for indexing) and can in fact, make Hudi approach real-time latencies more and more. "),(0,i.kt)("p",null,"In addition, the primary engine integrated after this decoupling is Flink. Flink and Spark differ greatly in core abstraction. Spark believes that data is bounded, and its core abstraction is a limited set of data.\nFlink believes that the essence of data is a stream, and its core abstract DataStream contains various operations on data. Hudi has a streaming first design (record level updates, record level streams), that arguably fit the Flink model more naturally.\nAt the same time, there are multiple RDDs operating at the same time in Hudi, and the processing result of one RDD is combined with another RDD.\nThis difference in abstraction and the reuse of intermediate results during implementation make it difficult for Hudi to use a unified API to operate both RDD and DataStream in terms of decoupling abstraction."),(0,i.kt)("h2",{id:"3-decoupling-spark"},"3. Decoupling Spark"),(0,i.kt)("p",null,"In theory, Hudi uses Spark as its computing engine to use Spark's distributed computing power and RDD's rich operator capabilities. Apart from distributed computing power, Hudi uses RDD more as a data structure, and RDD is essentially a bounded data set.\nTherefore, it is theoretically feasible to replace RDD with List (of course, it may sacrifice performance/scale). In order to ensure the performance and stability of the Hudi Spark version as much as possible. We can keep setting the bounded data set as the basic operation unit.\nHudi's main operation API remains unchanged, and RDD is extracted as a generic type. The Spark engine implementation still uses RDD, and other engines use List or other bounded  data set according to the actual situation."),(0,i.kt)("h3",{id:"decoupling-principle"},"Decoupling principle"),(0,i.kt)("p",null,"1) Unified generics. The input records ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaRDD<HoodieRecord>"),", key of input records ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaRDD<HoodieKey>"),", and result of write operations ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaRDD<WriteStatus>")," used by the Spark API use generic ",(0,i.kt)("inlineCode",{parentName:"p"},"I,K,O")," instead;"),(0,i.kt)("p",null,"2) De-sparkization. All APIs of the abstraction layer must have nothing to do with Spark. Involving specific operations that are difficult to implement in the abstract layer, rewrite them as abstract methods and introduce Spark subclasses."),(0,i.kt)("p",null,"For example: Hudi uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSparkContext#map()")," method in many places. To de-spark, you need to hide the ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSparkContext"),". For this problem, we introduced the ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieEngineContext#map()")," method, which will block the specific implementation details of ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),", so as to achieve de-sparkization in abstraction."),(0,i.kt)("p",null,"3) Minimize changes to the abstraction layer to ensure the original function and performance of Hudi;"),(0,i.kt)("p",null,"4) Replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSparkContext")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieEngineContext")," abstract class to provide the running environment context."),(0,i.kt)("p",null,"In addition, some of the core algorithms in Hudi, like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/1756"},"rollback"),", has been redone without the need for computing a workload profile ahead of time, which used to rely on Spark caching. "),(0,i.kt)("h2",{id:"4-flink-integration-design"},"4. Flink integration design"),(0,i.kt)("p",null,"Hudi's write operation is batch processing in nature, and the continuous mode of ",(0,i.kt)("inlineCode",{parentName:"p"},"DeltaStreamer")," is realized by looping batch processing. In order to use a unified API, when Hudi integrates Flink, we choose to collect a batch of data before processing, and finally submit it in a unified manner (here we use List to collect data in Flink).\nIn Hudi terminology, we will stream data for a given commit, but only publish the commits every so often, making it practical to scale storage on cloud storage and also tunable."),(0,i.kt)("p",null,"The easiest way to think of batch operation is to use a time window. However, when using a window, when there is no data flowing in a window, there will be no output data, and it is difficult for the Flink sink to judge whether all the data from a given batch has been processed.\nTherefore, we use Flink's checkpoint mechanism to collect batches. The data between every two barriers is a batch. When there is no data in a subtask, the mock result data is made up.\nIn this way, on the sink side, when each subtask has result data issued, it can be considered that a batch of data has been processed and the commit can be executed."),(0,i.kt)("p",null,"The DAG is as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dualism",src:n(52652).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source:")," receives Kafka data and converts it into ",(0,i.kt)("inlineCode",{parentName:"li"},"List<HoodieRecord>"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"InstantGeneratorOperator:")," generates a globally unique instant. When the previous instant is not completed or the current batch has no data, no new instant is created;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"KeyBy partitionPath:")," partitions according to ",(0,i.kt)("inlineCode",{parentName:"li"},"partitionPath")," to avoid multiple subtasks from writing the same partition;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WriteProcessOperator:")," performs a write operation. When there is no data in the current partition, it sends empty result data to the downstream to make up the number;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CommitSink:")," receives the calculation results of the upstream task. When receiving the parallelism results, it is considered that all the upstream subtasks are completed and the commit is executed.")),(0,i.kt)("p",null,"Note:\n",(0,i.kt)("inlineCode",{parentName:"p"},"InstantGeneratorOperator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"WriteProcessOperator")," are both custom Flink operators. ",(0,i.kt)("inlineCode",{parentName:"p"},"InstantGeneratorOperator")," will block checking the state of the previous instant to ensure that there is only one instant in the global (or requested) state.\n",(0,i.kt)("inlineCode",{parentName:"p"},"WriteProcessOperator")," is the actual execution Where a write operation is performed, the write operation is triggered at checkpoint."),(0,i.kt)("h3",{id:"41-index-design-based-on-flink-state"},"4.1 Index design based on Flink State"),(0,i.kt)("p",null,"Stateful computing is one of the highlights of the Flink engine. Compared with using external storage, using Flink's built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," can significantly improve the performance of Flink applications.\nTherefore, it would be a good choice to implement a Hudi index based on Flink's State."),(0,i.kt)("p",null,"The core of the Hudi index is to maintain the mapping of the Hudi key ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieKey")," and the location of the Hudi data ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieRecordLocation"),".\nTherefore, based on the current design, we can simply maintain a ",(0,i.kt)("inlineCode",{parentName:"p"},"MapState<HoodieKey, HoodieRecordLocation>")," in Flink UDF to map the ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieRecordLocation"),", and leave the fault tolerance and persistence of State to the Flink framework."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dualism",src:n(27494).Z})),(0,i.kt)("h2",{id:"5-implementation-examples"},"5. Implementation examples"),(0,i.kt)("h3",{id:"1-hoodietable"},"1) HoodieTable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/**\n  * Abstract implementation of a HoodieTable.\n  *\n  * @param <T> Sub type of HoodieRecordPayload\n  * @param <I> Type of inputs\n  * @param <K> Type of keys\n  * @param <O> Type of outputs\n  */\npublic abstract class HoodieTable<T extends HoodieRecordPayload, I, K, O> implements Serializable {\n\n   protected final HoodieWriteConfig config;\n   protected final HoodieTableMetaClient metaClient;\n   protected final HoodieIndex<T, I, K, O> index;\n\n   public abstract HoodieWriteMetadata<O> upsert(HoodieEngineContext context, String instantTime,\n       I records);\n\n   public abstract HoodieWriteMetadata<O> insert(HoodieEngineContext context, String instantTime,\n       I records);\n\n   public abstract HoodieWriteMetadata<O> bulkInsert(HoodieEngineContext context, String instantTime,\n       I records, Option<BulkInsertPartitioner<I>> bulkInsertPartitioner);\n\n   ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HoodieTable")," is one of the core abstractions of Hudi, which defines operations such as ",(0,i.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"bulkInsert")," supported by the table.\nTake ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," as an example, the input data is changed from the original ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaRDD<HoodieRecord> inputRdds")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"I records"),", and the runtime ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSparkContext jsc")," is changed to ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieEngineContext context"),"."),(0,i.kt)("p",null,"From the class annotations, we can see that ",(0,i.kt)("inlineCode",{parentName:"p"},"T, I, K, O")," represents the load data type, input data type, primary key type and output data type of Hudi operation respectively.\nThese generics will run through the entire abstraction layer."),(0,i.kt)("h3",{id:"2-hoodieenginecontext"},"2) HoodieEngineContext"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/**\n * Base class contains the context information needed by the engine at runtime. It will be extended by different\n * engine implementation if needed.\n */\npublic abstract class HoodieEngineContext {\n\n  public abstract <I, O> List<O> map(List<I> data, SerializableFunction<I, O> func, int parallelism);\n\n  public abstract <I, O> List<O> flatMap(List<I> data, SerializableFunction<I, Stream<O>> func, int parallelism);\n\n  public abstract <I> void foreach(List<I> data, SerializableConsumer<I> consumer, int parallelism);\n\n  ......\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HoodieEngineContext")," plays the role of ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSparkContext"),", it not only provides all the information that ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSparkContext")," can provide,\nbut also encapsulates many methods such as ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"flatMap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach"),", and hides The specific implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSparkContext#map()"),",",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSparkContext#flatMap()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSparkContext#foreach()")," and other methods."),(0,i.kt)("p",null,"Take the ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," method as an example. In the Spark implementation class ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieSparkEngineContext"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," method is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  @Override\n  public <I, O> List<O> map(List<I> data, SerializableFunction<I, O> func, int parallelism) {\n    return javaSparkContext.parallelize(data, parallelism).map(func::apply).collect();\n  }\n")),(0,i.kt)("p",null,"In the engine that operates List, the implementation can be as follows (different methods need to pay attention to thread-safety issues, use ",(0,i.kt)("inlineCode",{parentName:"p"},"parallel()")," with caution):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  @Override\n  public <I, O> List<O> map(List<I> data, SerializableFunction<I, O> func, int parallelism) {\n    return data.stream().parallel().map(func::apply).collect(Collectors.toList());\n  }\n")),(0,i.kt)("p",null,"Note:\nThe exception thrown in the map function can be solved by wrapping ",(0,i.kt)("inlineCode",{parentName:"p"},"SerializableFunction<I, O> func"),"."),(0,i.kt)("p",null,"Here is a brief introduction to ",(0,i.kt)("inlineCode",{parentName:"p"},"SerializableFunction"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"@FunctionalInterface\npublic interface SerializableFunction<I, O> extends Serializable {\n  O apply(I v1) throws Exception;\n}\n")),(0,i.kt)("p",null,"This method is actually a variant of ",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.function.Function"),". The difference from ",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.function.Function")," is that ",(0,i.kt)("inlineCode",{parentName:"p"},"SerializableFunction")," can be serialized and can throw exceptions.\nThis function is introduced because the input parameters that the ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaSparkContext#map()")," function can receive must be serializable.\nAt the same time, there are many exceptions that need to be thrown in the logic of Hudi, and the code for ",(0,i.kt)("inlineCode",{parentName:"p"},"try-catch")," in the Lambda expression will be omitted It is bloated and not very elegant."),(0,i.kt)("h2",{id:"6-current-progress-and-follow-up-plan"},"6. Current progress and follow-up plan"),(0,i.kt)("h3",{id:"61-working-time-axis"},"6.1 Working time axis"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dualism",src:n(42617).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.t3go.cn/"},"T3go"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://cn.aliyun.com/"},"Aliyun"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.sf-express.com/cn/sc/"},"SF-express")),(0,i.kt)("h3",{id:"62-follow-up-plan"},"6.2 Follow-up plan"),(0,i.kt)("h4",{id:"1-promote-the-integration-of-hudi-and-flink"},"1) Promote the integration of Hudi and Flink"),(0,i.kt)("p",null,"Push the integration of Flink and Hudi to the community as soon as possible. In the initial stage, this feature may only support Kafka data sources."),(0,i.kt)("h4",{id:"2-performance-optimization"},"2) Performance optimization"),(0,i.kt)("p",null,"In order to ensure the stability and performance of the Hudi-Spark version, the decoupling did not take too much into consideration the possible performance problems of the Flink version."),(0,i.kt)("h4",{id:"3-flink-connector-hudi-like-third-party-package-development"},"3) flink-connector-hudi like third-party package development"),(0,i.kt)("p",null,"Make the binding of Hudi-Flink into a third-party package. Users can this third-party package to read/write from/to Hudi with Flink."))}u.isMDXComponent=!0},52652:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image1-ad0429306e0ebe38c0eacbf4b2aed222.png"},27494:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image2-73e008bce9561bc07e7586c36a0cb745.png"},42617:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image3-570b43b2c0cec6865c17b50ddef9a3f4.png"}}]);