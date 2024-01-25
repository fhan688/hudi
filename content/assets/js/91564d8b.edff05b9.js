"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[81896],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),h=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=h(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=h(t),c=i,m=d["".concat(l,".").concat(c)]||d[c]||u[c]||r;return t?n.createElement(m,o(o({ref:a},p),{},{components:t})):n.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var h=2;h<r;h++)o[h]=t[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},68940:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var n=t(87462),i=(t(67294),t(3905));const r={title:"Apache Hudi 2023: A Year In Review",excerpt:"Reflect on and celebrate the myriad of exciting developments and accomplishments that have defined the year 2023 for the Hudi community.",author:"Shiyan Xu",category:"blog",image:"/assets/images/blog/2023-12-28-a-year-in-review-2023/00.cover.png",tags:["apache hudi","community"]},o=void 0,s={permalink:"/blog/2023/12/28/apache-hudi-2023-a-year-in-review",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-12-28-apache-hudi-2023-a-year-in-review.md",source:"@site/blog/2023-12-28-apache-hudi-2023-a-year-in-review.md",title:"Apache Hudi 2023: A Year In Review",description:"In the warm glow of the holiday season, I am delighted to convey a message of deep appreciation on behalf of the",date:"2023-12-28T00:00:00.000Z",formattedDate:"December 28, 2023",tags:[{label:"apache hudi",permalink:"/blog/tags/apache-hudi"},{label:"community",permalink:"/blog/tags/community"}],readingTime:7.065,truncated:!1,authors:[{name:"Shiyan Xu"}],prevItem:{title:"From Data lake to Microservices: Unleashing the Power of Apache Hudi's Record Level Index with FastAPI and Spark Connect",permalink:"/blog/2024/01/01/From-Data-lake-to-Microservices-Unleashing-the-Power-of-Apache-Hudi-Record-Level-Index-with-FastAPI-and-Spark-Connect"},nextItem:{title:"What is Apache Hudi",permalink:"/blog/2023/12/13/what-is-apache-hudi"}},l={authorsImageUrls:[void 0]},h=[{value:"Development Highlights",id:"development-highlights",children:[{value:"Indexing has elevated to a whole new level",id:"indexing-has-elevated-to-a-whole-new-level",children:[],level:3},{value:"Write throughput achieves remarkable advancement",id:"write-throughput-achieves-remarkable-advancement",children:[],level:3},{value:"Programming APIs have a brand-new look",id:"programming-apis-have-a-brand-new-look",children:[],level:3},{value:"Usability receives significant attention",id:"usability-receives-significant-attention",children:[],level:3},{value:"Platform capabilities are substantially enhanced",id:"platform-capabilities-are-substantially-enhanced",children:[],level:3},{value:"Ecosystem integrations undergo notable expansions",id:"ecosystem-integrations-undergo-notable-expansions",children:[],level:3},{value:"Interoperability is the key",id:"interoperability-is-the-key",children:[],level:3},{value:"Stay tuned for 2024",id:"stay-tuned-for-2024",children:[],level:3}],level:2},{value:"Content Spotlight",id:"content-spotlight",children:[],level:2},{value:"Engage with the Community",id:"engage-with-the-community",children:[],level:2}],p={toc:h},d="wrapper";function u(e){let{components:a,...t}=e;return(0,i.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/assets/images/blog/2023-12-28-a-year-in-review-2023/00.cover.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),(0,i.kt)("p",null,"In the warm glow of the holiday season, I am delighted to convey a message of deep appreciation on behalf of the\nHudi Project Management Committee (PMC) to all the contributors and users in the community who made 2023 an\nextraordinary year for Hudi. "),(0,i.kt)("p",null,"In 2023, the Hudi community continued strong engagement and activities, evident in the\n",(0,i.kt)("a",{parentName:"p",href:"https://ossinsight.io/analyze/apache/hudi#pull-requests"},"1,832 pull requests created"),",\nwith a significant 1,363 of these being merged. We proudly welcomed 2 new PMC members and 3 new Committers.\nOur community ",(0,i.kt)("a",{parentName:"p",href:"https://apache-hudi.slack.com/join/shared_invite/zt-20r833rxh-627NWYDUyR8jRtMa2mZ~gg#/"},"Slack channel"),"\nwitnessed a remarkable 44% increase in users, with numbers exceeding 3,800.\nOur presence on social media platforms has grown impressively, with our ",(0,i.kt)("a",{parentName:"p",href:"https://x.com/apachehudi"},"X (Twitter) account"),"\ngarnering 2,274 followers, and our newly established ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/apache-hudi/"},"LinkedIn page"),"\nrapidly gaining 2,245 followers in just three months. Let\u2019s take a moment to reflect on and celebrate the myriad of\nexciting developments and accomplishments that have defined the year 2023 for the Hudi community."),(0,i.kt)("img",{src:"/assets/images/blog/2023-12-28-a-year-in-review-2023/01.PR_histogram.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),(0,i.kt)("h2",{id:"development-highlights"},"Development Highlights"),(0,i.kt)("p",null,"The year 2023 has been exceptionally productive for Hudi, marked by significant advancements and innovations.\nThere have been three major releases: ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.13.0"},"0.13.0"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.14.0"},"0.14.0"),", and the trailblazing\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-1.0.0-beta1"},"1.0.0-beta1")," that have collectively reshaped the\ndatabase experience for Hudi data lakehouses. Here are some brief summaries highlighting key features introduced:"),(0,i.kt)("h3",{id:"indexing-has-elevated-to-a-whole-new-level"},"Indexing has elevated to a whole new level"),(0,i.kt)("p",null,"Hudi's new ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.14.0#record-level-index"},"Record Level Index"),"\nis a game-changing feature that boosts write performance for large tables. It achieves this by efficiently\nstoring per-record locations, enabling rapid retrieval during index look-ups. Benchmarks indicate a 72%\nimprovement in write latency compared to the Global Simple Index, alongside notable reductions in query latency\nfor equality-matching queries. The new ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.14.0#consistent-hashing-index-support"},"Consistent Hash Index"),"\ndynamically scales the buckets for hash-based indexing schemes. By addressing data skew issues inherent in bucket\nindex, it can achieve blazing fast look-up similar to the Record Level Index during the write process.\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-1.0.0-beta1#functional-index"},"Functional Index"),"\nenables the creation and deletion of indexes on specific columns, providing users with additional means to\nspeed up queries and adjust partitioning."),(0,i.kt)("h3",{id:"write-throughput-achieves-remarkable-advancement"},"Write throughput achieves remarkable advancement"),(0,i.kt)("p",null,"A common reason why developers choose Apache Hudi is for its ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@kywe665/delta-hudi-iceberg-a-benchmark-compilation-a5630c69cffc"},"industry leading write throughput and performance"),".\nThe community has continued innovations on write performance including\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.13.0#early-conflict-detection-for-multi-writer"},"Early-conflict detection for OCC"),"\nwhich proactively validates concurrent writes before they are written to disk, avoiding significant resource wastage\nand enhancing throughput. Up-leveling this, the\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-1.0.0-beta1#concurrency-control"},"Non-Blocking Concurrency Control"),"\nintroduced in 1.0 further optimizes multi-writer throughput by allowing conflicts to be resolved later in query\nor via compaction. Responding to popular community requests,\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.13.0#support-for-partial-payload-update"},"partial update capability"),"\nwas implemented to allow updates to be applied only to changed fields, particularly benefiting the dimension\ntables that are usually super wide."),(0,i.kt)("h3",{id:"programming-apis-have-a-brand-new-look"},"Programming APIs have a brand-new look"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.13.0#optimizing-record-payload-handling"},"HoodieRecordMerger"),"\nis a new abstraction that unifies the merging semantics and makes use of the engine-native representation for\nrecords in the process. Benchmark shows a ballpark of 10-20% boost for upsert performance.\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-1.0.0-beta1#new-filegroup-reader"},"File Group Reader"),"\nis another API that standardizes File Group access, reducing MoR tables' read latencies by approximately 20%.\nEnabling position-based merging and page-skipping can further accelerate snapshot queries by 5.7 times."),(0,i.kt)("h3",{id:"usability-receives-significant-attention"},"Usability receives significant attention"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.14.0#table-valued-function-named-hudi_table_changes-designed-for-incremental-reading-through-spark-sql"},"Table-valued function ",(0,i.kt)("inlineCode",{parentName:"a"},"hudi_table_changes")),"\nsimplifies performing incremental queries via SQLs.\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.14.0#support-for-hudi-tables-with-autogenerated-keys"},"Auto-generated keys"),"\nallows users to omit providing a record key field, especially useful for append-only tables. Among many other\nuser-friendly updates, two more notable ones are the addition of a\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.13.0#hudi-cli-bundle"},(0,i.kt)("inlineCode",{parentName:"a"},"hudi-cli-bundle")," jar"),"\nand a revamped ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/basic_configurations"},"configuration page"),"."),(0,i.kt)("h3",{id:"platform-capabilities-are-substantially-enhanced"},"Platform capabilities are substantially enhanced"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.13.0#change-data-capture"},"Changed Data Capture"),"\nwas supported by logging additional information alongside writers. The changed data, including ",(0,i.kt)("inlineCode",{parentName:"p"},"before"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," images, can be served through incremental queries, offering rich analytical insights.\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.13.0#metaserver"},"Metaserver"),"\noffers centralized management services for operating numerous tables in lakehouse projects, signifying a major\nstep in Hudi's platform features.\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.14.0#hoodiedeltastreamer-renamed-to-hoodiestreamer"},(0,i.kt)("inlineCode",{parentName:"a"},"HoodieStreamer")),"\n(formerly ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),") remains a highly popular tool for data ingestion:\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.13.0#new-source-support-in-deltastreamer"},"new sources"),"\nsuch as Protobuf Kafka source, GCS incremental source, and Pulsar source were added, further expanding\nthe integration capabilities."),(0,i.kt)("h3",{id:"ecosystem-integrations-undergo-notable-expansions"},"Ecosystem integrations undergo notable expansions"),(0,i.kt)("p",null,"On AWS,\n",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-athena-apache-hudi/"},"Athena supported Hudi 0.12.2 and Hudi's metadata table"),",\nelevating query performance.\n",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/big-data/introducing-apache-hudi-support-with-aws-glue-crawlers/"},"AWS Glue crawlers added Hudi support"),"\nwith Glue 4.0 working with Hudi 0.12.1, and AWS EMR extended the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-app-versions-6.x.html"},"support matrix"),"\nto cover Hudi 0.13 and 0.14. GCP improved\n",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/data-analytics/bigquery-manifest-file-support-for-open-table-format-queries"},"Hudi integration in BigQuery"),"\nwith a new manifest file integration for improved performance.\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.starburst.io/latest/connector/hudi.html"},"Starburst also added a Hudi connector"),".\nExecution engine support has also been extended to newer versions, including Spark 3.4 and 3.5,\nas well as Flink 1.16, 1.17, and 1.18."),(0,i.kt)("h3",{id:"interoperability-is-the-key"},"Interoperability is the key"),(0,i.kt)("p",null,"While Apache Hudi continues its strong growth momentum, some members of the community also decided it is time to\nstart building interoperability bridges across Lakehouse table formats with Delta Lake and Iceberg. The\n",(0,i.kt)("a",{parentName:"p",href:"https://www.onehouse.ai/blog/onetable-is-now-open-source"},"recent announcement about OneTable becoming open source"),"\nmarks a big leap forward for all developers looking to build a data lakehouse architecture. This development not\nonly emphasizes Hudi's commitment to openness but also enables a wider range of users to experience the\ntechnological advantages offered by Hudi."),(0,i.kt)("h3",{id:"stay-tuned-for-2024"},"Stay tuned for 2024"),(0,i.kt)("p",null,"The File Group Reader APIs are poised for widespread adoption, promising benefits for numerous query\nengines. We also anticipate broad adoption for Non-Blocking Concurrency Control. And there's more on\nthe horizon, including innovations like infinite timeline, secondary indexes, multi-table transactions,\nand the support for unstructured data. For the latest updates and detailed insights, I encourage you to\nvisit the ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/roadmap"},"roadmap page"),"."),(0,i.kt)("h2",{id:"content-spotlight"},"Content Spotlight"),(0,i.kt)("img",{src:"/assets/images/blog/2023-12-28-a-year-in-review-2023/02.contentspotlight.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),(0,i.kt)("p",null,"Below is a curated list highlighting noteworthy pieces of content from the diverse Hudi community in 2023:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/big-data/create-an-apache-hudi-based-near-real-time-transactional-data-lake-using-aws-dms-amazon-kinesis-aws-glue-streaming-etl-and-data-visualization-using-amazon-quicksight/"},"Create Hudi-based near-real-time transactional data lake")," - AWS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/big-data/automate-schema-evolution-at-scale-with-apache-hudi-in-aws-glue/"},"Automate schema evolution at scale with Apache Hudi")," - AWS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/big-data/how-zoom-implemented-streaming-log-ingestion-and-efficient-gdpr-deletes-using-apache-hudi-on-amazon-emr/"},"Zoom implemented streaming log ingestion and efficient GDPR deletes using Hudi")," - AWS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/walmartglobaltech/lakehouse-at-fortune-1-scale-480bcb10391b"},"Lakehouse at Fortune 1 scale")," - Walmart"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.uber.com/blog/ubers-lakehouse-architecture/"},"Setting Uber\u2019s Transactional Data Lake in Motion")," - Uber"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/dZbXC4mlNck"},"Notion\u2019s journey: transition from Snowflake to Hudi")," - Notion"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensourcedatasummit.com/robinhoods-data-lakehouse/"},"Scaling and governing Robinhood's data lakehouse")," - Robinhood"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.onehouse.ai/blog/apache-hudi-vs-delta-lake-vs-apache-iceberg-lakehouse-feature-comparison"},"Feature comparison: Hudi vs Delta vs Iceberg")," - Kyle Weller, Onehouse"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensourcedatasummit.com/apache-hudi-1-preview/"},"Apache Hudi 1.0 preview: A database experience on the data lake")," - Sagar Sumit & Bhavani Sudha Saktheeswaran, Hudi PMC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.onehouse.ai/blog/hudi-metafields-demystified"},"Hudi Metafields demystified")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.onehouse.ai/blog/knowing-your-data-partitioning-vices-on-the-data-lakehouse"},"Knowing your data partitioning vices")," - Bhavani Sudha Saktheeswaran, Hudi PMC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hudi.apache.org/blog/2023/11/01/record-level-index/"},"Record Level Index: blazing fast indexing for large-scale datasets")," - Shiyan Xu & Sivabalan Narayanan, Hudi PMC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.datumagic.com/p/apache-hudi-from-zero-to-one-110"},"Apache Hudi from zero to one: a 10-post blog series")," - Shiyan Xu, Hudi PMC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/YgmOASLum7g"},"Hudi Workshop: Build a ride-share lakehouse platform on AWS")," - Soumil Shah, Jaganath Achari, Nadine Farah")),(0,i.kt)("p",null,"Additionally, the official Hudi website is a treasure trove of valuable learning materials. Begin your\njourney on ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/overview"},"the documentation page"),", and then explore a wealth of\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/talks"},"talks"),", ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/videos"},"videos"),",\nand ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog"},"blogs")," to deepen your understanding and knowledge of Hudi."),(0,i.kt)("h2",{id:"engage-with-the-community"},"Engage with the Community"),(0,i.kt)("p",null,"Throughout 2023, the Hudi community played an important role in the data industry altogether, gathering and\nfeaturing in many virtual syncs, live events, meet-ups, and conference presentations. We marked our presence\nat a variety of events, listed here in no particular order: Re:Invent, PrestoCon, Trino Fest, Current,\nthe Data & AI Summit, Flink Forward, the Open-source Data Summit, ApacheCon, AI.dev, QCon, OSA Con, DEWCon,\nand Data Council."),(0,i.kt)("img",{src:"/assets/images/blog/2023-12-28-a-year-in-review-2023/03.events.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"18pt",marginBottom:"18pt"}}),(0,i.kt)("p",null,"As we reflect on an eventful 2023, the Hudi community continues to thrive and welcomes diverse forms\nof engagement. For those looking to connect, our\n",(0,i.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apache-hudi/shared_invite/zt-20r833rxh-627NWYDUyR8jRtMa2mZ~gg"},"Slack group"),"\nis an excellent place for general inquiries, being watched out by Hudi experts and an LLM-backed\nquestion bot. You can also participate in our\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/community/office_hours"},"weekly office hours"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/community/syncs"},"monthly community syncs"),"\nto stay updated and involved. To keep abreast of the latest developments, follow Hudi's\n",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/apache-hudi/"},"LinkedIn page"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/apachehudi"},"X (Twitter) account"),",\nand ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/@apachehudi"},"YouTube channel"),"."),(0,i.kt)("p",null,"If you encounter any issues or have feature requests, we encourage you to file them through\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/issues"},"GitHub issues")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/projects/HUDI/summary"},"JIRA tickets"),".\nFor more in-depth discussions and contributions to the ongoing development of Hudi,\nsubscribing (by sending an empty email) to\n",(0,i.kt)("a",{parentName:"p",href:"mailto:dev-subscribe@hudi.apache.org"},"our dev mailing list")," is a great option."),(0,i.kt)("p",null,"And for those inspired to contribute directly to the project,\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/contribute/how-to-contribute"},"our contribution guide")," is your\nstarting point. Your involvement, whether it's by contributing code, sharing ideas, or simply giving\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/"},"our GitHub repository")," a star, is greatly valued. Together,\nlet's continue to shape Hudi's future and drive innovation in the open-source community.\nHere's to an even more vibrant and successful 2024 ahead!"))}u.isMDXComponent=!0}}]);