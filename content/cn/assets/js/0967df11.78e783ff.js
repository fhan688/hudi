"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[47363],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},49492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Lakehouse Concurrency Control: Are we too optimistic?",excerpt:"Vinoth Chandar, Creator of Apache Hudi, dives into concurrency control mechanisms",author:"vinoth",category:"blog",image:"/assets/images/blog/concurrency/MultiWriter.gif",tags:["blog","concurrency-control","apache hudi"]},i=void 0,s={permalink:"/cn/blog/2021/12/16/lakehouse-concurrency-control-are-we-too-optimistic",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-12-16-lakehouse-concurrency-control-are-we-too-optimistic.md",source:"@site/blog/2021-12-16-lakehouse-concurrency-control-are-we-too-optimistic.md",title:"Lakehouse Concurrency Control: Are we too optimistic?",description:"Transactions on data lakes are now considered a key characteristic of a Lakehouse these days. But what has actually been accomplished so far? What are the current approaches? How do they fare in real-world scenarios? These questions are the focus of this blog.",date:"2021-12-16T00:00:00.000Z",formattedDate:"December 16, 2021",tags:[{label:"blog",permalink:"/cn/blog/tags/blog"},{label:"concurrency-control",permalink:"/cn/blog/tags/concurrency-control"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:7.535,truncated:!0,authors:[{name:"vinoth"}],prevItem:{title:"New features from Apache Hudi 0.7.0 and 0.8.0 available on Amazon EMR",permalink:"/cn/blog/2021/12/20/New-features-from-Apache-Hudi-0.7.0-and-0.8.0-available-on-Amazon-EMR"},nextItem:{title:"Apache Hudi Architecture Tools and Best Practices",permalink:"/cn/blog/2021/11/22/Apache-Hudi-Architecture-Tools-and-Best-Practices"}},l={authorsImageUrls:[void 0]},c=[{value:"Pitfalls in Lake Concurrency Control",id:"pitfalls-in-lake-concurrency-control",children:[],level:3},{value:"Model 1 : Single Writer, Inline Table Services",id:"model-1--single-writer-inline-table-services",children:[],level:3},{value:"Model 2 : Single Writer, Async Table Services",id:"model-2--single-writer-async-table-services",children:[],level:3},{value:"Model 3 : Multiple Writers",id:"model-3--multiple-writers",children:[],level:3}],d={toc:c},h="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Transactions on data lakes are now considered a key characteristic of a Lakehouse these days. But what has actually been accomplished so far? What are the current approaches? How do they fare in real-world scenarios? These questions are the focus of this blog. "),(0,r.kt)("p",null,"Having had the good fortune of working on diverse database projects - an RDBMS (",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/database/"},"Oracle"),"), a NoSQL key-value store (",(0,r.kt)("a",{parentName:"p",href:"https://www.slideshare.net/vinothchandar/voldemort-prototype-to-production-nectar-edits"},"Voldemort"),"), a streaming database (",(0,r.kt)("a",{parentName:"p",href:"https://www.confluent.io/blog/ksqldb-pull-queries-high-availability/"},"ksqlDB"),"), a closed-source real-time datastore and of course, Apache Hudi, I can safely say that the nature of workloads deeply influence the concurrency control mechanisms adopted in different databases. This blog will also describe how we rethought concurrency control for the data lake in Apache Hudi."),(0,r.kt)("p",null,"First, let's set the record straight. RDBMS databases offer the richest set of transactional capabilities and the widest array of concurrency control ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-locking-transaction-model.html"},"mechanisms"),". Different isolation levels, fine grained locking, deadlock detection/avoidance, and more are possible because they have to support row-level mutations and reads across many tables while enforcing ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html"},"key constraints")," and maintaining ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/create-table-secondary-indexes.html"},"indexes"),". NoSQL stores offer dramatically weaker guarantees like eventual-consistency and simple row level atomicity in exchange for greater scalability for simpler workloads. Drawing a similar parallel, traditional data warehouses offer more or less the full set of capabilities that you would find in an RDBMS, over columnar data, with locking and key constraints ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teradata.com/r/a8IdS6iVHR77Z9RrIkmMGg/wFPZS4jwZgSG21GnOIpEsw"},"enforced")," whereas cloud data warehouses seem to have focused a lot more on separating the data and compute in architecture, while offering fewer isolation levels. As a surprising example, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/constraints-overview.html#supported-constraint-types"},"no enforcement")," of key constraints!"),(0,r.kt)("h3",{id:"pitfalls-in-lake-concurrency-control"},"Pitfalls in Lake Concurrency Control"),(0,r.kt)("p",null,"Historically, data lakes have been viewed as batch jobs reading/writing files on cloud storage and it's interesting to see how most new work extends this view and implements glorified file version control using some form of \"",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Optimistic_concurrency_control"},(0,r.kt)("strong",{parentName:"a"},"Optimistic concurrency control")),'" (OCC). With OCC jobs take a table level lock to check if they have impacted overlapping files and if a conflict exists, they abort their operations completely. Without naming names, the lock is sometimes even just a JVM level lock held on a single Apache Spark driver node. Once again, this may be okay for lightweight coordination of old school batch jobs that mostly append files to tables, but cannot be applied broadly to modern data lake workloads. Such approaches are built with immutable/append-only data models in mind, which are inadequate for incremental data processing or keyed updates/deletes. OCC is very optimistic that real contention never happens. Developer evangelism comparing OCC to the full fledged transactional capabilities of an RDBMS or a traditional data warehouse is rather misinformed. Quoting Wikipedia directly - "',(0,r.kt)("em",{parentName:"p"},"if contention for data resources is frequent, the cost of repeatedly restarting transactions hurts performance significantly, in which case other")," ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Concurrency_control"},(0,r.kt)("em",{parentName:"a"},"concurrency control"))," ",(0,r.kt)("em",{parentName:"p"},"methods may be better suited."),' " When conflicts do occur, they can cause massive resource wastage since you have a batch job that fails after it ran for a few hours, during every attempt!'),(0,r.kt)("p",null,"Imagine a real-life scenario of two writer processes : an ingest writer job producing new data every 30 minutes and a deletion writer job that is enforcing GDPR, taking 2 hours to issue deletes. It's very likely for these to overlap files with random deletes, and the deletion job is almost guaranteed to starve and fail to commit each time. In database speak, mixing long running transactions with optimism leads to disappointment, since the longer the transactions the higher the probability they will overlap."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"concurrency",src:a(70479).Z})),(0,r.kt)("p",null,"So, what's the alternative? Locking? Wikipedia also says - \"",(0,r.kt)("em",{parentName:"p"},'However, locking-based ("pessimistic") methods also can deliver poor performance because locking can drastically limit effective concurrency even when deadlocks are avoided.".')," Here is where Hudi takes a different approach, that we believe is more apt for modern lake transactions which are typically long-running and even continuous. Data lake workloads share more characteristics with high throughput stream processing jobs, than they do to standard reads/writes from a database and this is where we borrow from. In stream processing events are serialized into a single ordered log, avoiding any locks/concurrency bottlenecks and you can continuously process millions of events/sec. Hudi implements a file level, log based concurrency control protocol on the Hudi ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/timeline"},"timeline"),", which in-turn relies on bare minimum atomic puts to cloud storage. By building on an event log as the central piece for inter process coordination, Hudi is able to offer a few flexible deployment models that offer greater concurrency over pure OCC approaches that just track table snapshots."),(0,r.kt)("h3",{id:"model-1--single-writer-inline-table-services"},"Model 1 : Single Writer, Inline Table Services"),(0,r.kt)("p",null,"The simplest form of concurrency control is just no concurrency at all. A data lake table often has common services operating on it to ensure efficiency. Reclaiming storage space from older versions and logs, coalescing files (clustering in Hudi), merging deltas (compactions in Hudi), and more. Hudi can simply eliminate the need for concurrency control and maximizes throughput by supporting these table services out-of-box and running inline after every write to the table."),(0,r.kt)("p",null,"Execution plans are idempotent, persisted to the timeline and auto-recover from failures. For most simple use-cases, this means just writing is sufficient to get a well-managed table that needs no concurrency control."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"concurrency-single-writer",src:a(5357).Z})),(0,r.kt)("h3",{id:"model-2--single-writer-async-table-services"},"Model 2 : Single Writer, Async Table Services"),(0,r.kt)("p",null,"Our delete/ingest example above is n't really that simple. While ingest/writer may just be updating the last N partitions on the table, delete may span across the entire table even. Mixing them in the same job, could slow down ingest latency by a lot. But, Hudi provides the option of running the table services in an async fashion, where most of the heavy lifting (e.g actually rewriting the columnar data by compaction service) is done asynchronously, eliminating any repeated wasteful retries whatsoever, while also optimizing the table using clustering techniques. Thus a single writer could consumes both regular updates and GDPR deletes and serialize them into a log. Given Hudi has record level indexing and avro log writes are much cheaper (as opposed to writing parquet, which can be 10x or more expensive), ingest latency can be sustained while enjoying great replayability. In fact, we were able to scale this model at ",(0,r.kt)("a",{parentName:"p",href:"https://eng.uber.com/uber-big-data-platform/"},"Uber"),", across 100s of petabytes, by sequencing all deletes & updates into the same source Apache Kafka topic. There's more to concurrency control than locking and Hudi accomplishes all this without needing any external locking."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"concurrency-async",src:a(91245).Z})),(0,r.kt)("h3",{id:"model-3--multiple-writers"},"Model 3 : Multiple Writers"),(0,r.kt)("p",null,"But it's not always possible to serialize the deletes into the same write stream or sql based deletes are required. With multiple distributed processes, some form of locking is inevitable, but like real databases Hudi's concurrency model is intelligent enough to differentiate actual writing to the table, from table services that manage or optimize the table. Hudi offers similar optimistic concurrency control across multiple writers, but table services can still execute completely lock-free and async. This means the delete job can merely encode deletes and the ingest job can log updates, while the compaction service again applies the updates/deletes to base files. Even though the delete job and ingest job can contend and starve each other like like we mentioned above, their run-times are much lower and the wastage is drastically lower, since the compaction does the heavy-lifting of parquet/columnar data writing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"concurrency-multi",src:a(94366).Z})),(0,r.kt)("p",null,"All this said, there are still many ways we can improve upon this foundation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For starters, Hudi has already implemented a ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/blog/2021/08/18/improving-marker-mechanism/"},"marker mechanism")," that tracks all the files that are part of an active write transaction and a heartbeat mechanism that can track active writers to a table. This can be directly used by other active transactions/writers to detect what other writers are doing and ",(0,r.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/HUDI-1575"},"abort early")," if conflicts are detected, yielding the cluster resources back to other jobs sooner."),(0,r.kt)("li",{parentName:"ul"},"While optimistic concurrency control is attractive when serializable snapshot isolation is desired, it's neither optimal nor the only method for dealing with concurrency between writers. We plan to implement a fully lock-free concurrency control using CRDTs and widely adopted stream processing concepts, over our log ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/bc8bf043d5512f7afbb9d94882c4e43ee61d6f06/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieRecordPayload.java#L38"},"merge API"),", that has already been ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/blog/2021/09/01/building-eb-level-data-lake-using-hudi-at-bytedance/#functionality-support"},"proven")," to sustain enormous continuous write volumes for the data lake."),(0,r.kt)("li",{parentName:"ul"},"Touching upon key constraints, Hudi is the only lake transactional layer that ensures unique ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/key_generation"},"key")," constraints today, but limited to the record key of the table. We will be looking to expand this capability in a more general form to non-primary key fields, with the said newer concurrency models.")),(0,r.kt)("p",null,'Finally, for data lakes to transform successfully into lakehouses, we must learn from the failing of the "hadoop warehouse" vision, which shared similar goals with the new "lakehouse" vision. Designers did not pay closer attention to the missing technology gaps against warehouses and created unrealistic expectations from the actual software. As transactions and database functionality finally goes mainstream on data lakes, we must apply these lessons and remain candid about the current shortcomings. If you are building a lakehouse, I hope this post encourages you to closely consider various operational and efficiency aspects around concurrency control. Join our fast growing community by trying out ',(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/overview"},"Apache Hudi")," or join us in conversations on ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apache-hudi/shared_invite/zt-1e94d3xro-JvlNO1kSeIHJBTVfLPlI5w"},"Slack"),"."))}u.isMDXComponent=!0},70479:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ConcurrencyControlConflicts-55bed17c500b3b29e4f8cdb42cf0f483.png"},94366:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MultiWriter-fec6bf4269df78d4fa91e7a353144def.gif"},91245:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SingleWriterAsync-3d7ddf7312381eab7fdb91a7f2746376.gif"},5357:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SingleWriterInline-d18346421aa3f1d11a3247164389e1ce.gif"}}]);