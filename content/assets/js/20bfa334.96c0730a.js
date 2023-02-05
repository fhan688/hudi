"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[15516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return a?i.createElement(m,o(o({ref:t},p),{},{components:a})):i.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},74034:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=a(87462),n=(a(67294),a(3905));const r={title:"Release 0.10.0",sidebar_position:8,layout:"releases",toc:!0,last_modified_at:new Date("2021-12-10T14:07:00.000Z")},o="[Release 0.10.0](https://github.com/apache/hudi/releases/tag/release-0.10.0) ([docs](/docs/quick-start-guide))",s={unversionedId:"release-0.10.0",id:"release-0.10.0",title:"Release 0.10.0",description:"Migration Guide",source:"@site/releases/release-0.10.0.md",sourceDirName:".",slug:"/release-0.10.0",permalink:"/releases/release-0.10.0",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Release 0.10.0",sidebar_position:8,layout:"releases",toc:!0,last_modified_at:"2021-12-10T14:07:00.000Z"},sidebar:"releases",previous:{title:"Release 0.10.1",permalink:"/releases/release-0.10.1"},next:{title:"Release 0.9.0",permalink:"/releases/release-0.9.0"}},l=[{value:"Migration Guide",id:"migration-guide",children:[{value:"Prerequisites for enabling metadata table",id:"prerequisites-for-enabling-metadata-table",children:[],level:3},{value:"Upgrade steps",id:"upgrade-steps",children:[],level:3},{value:"Spark-SQL primary key requirements",id:"spark-sql-primary-key-requirements",children:[],level:3}],level:2},{value:"Release Highlights",id:"release-highlights",children:[{value:"Kafka Connect",id:"kafka-connect",children:[],level:3},{value:"Z-Ordering, Hilbert Curves and Data Skipping",id:"z-ordering-hilbert-curves-and-data-skipping",children:[],level:3},{value:"Debezium Deltastreamer sources",id:"debezium-deltastreamer-sources",children:[],level:3},{value:"External config file support",id:"external-config-file-support",children:[],level:3},{value:"Metadata table",id:"metadata-table",children:[],level:3},{value:"Documentation overhaul",id:"documentation-overhaul",children:[],level:3}],level:2},{value:"Writer side improvements",id:"writer-side-improvements",children:[{value:"DynamoDB based lock provider",id:"dynamodb-based-lock-provider",children:[],level:3},{value:"Default flips",id:"default-flips",children:[],level:3},{value:"Spark SQL improvements",id:"spark-sql-improvements",children:[],level:3}],level:2},{value:"Query side improvements",id:"query-side-improvements",children:[],level:2},{value:"Flink Integration Improvements",id:"flink-integration-improvements",children:[],level:2},{value:"Ecosystem",id:"ecosystem",children:[{value:"DBT support",id:"dbt-support",children:[],level:3},{value:"Monitoring",id:"monitoring",children:[],level:3},{value:"DevEx",id:"devex",children:[],level:3},{value:"Repair tool for dangling data files",id:"repair-tool-for-dangling-data-files",children:[],level:3}],level:2},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"release-0100-docs"},(0,n.kt)("a",{parentName:"h1",href:"https://github.com/apache/hudi/releases/tag/release-0.10.0"},"Release 0.10.0")," (",(0,n.kt)("a",{parentName:"h1",href:"/docs/quick-start-guide"},"docs"),")"),(0,n.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If migrating from an older release, please also check the upgrade instructions for each subsequent release below."),(0,n.kt)("li",{parentName:"ul"},"With 0.10.0, we have made some foundational fix to metadata table and so as part of upgrade, any existing metadata table is cleaned up.\nWhenever Hudi is launched with newer table version i.e 3 (or moving from an earlier release to 0.10.0), an upgrade step will be executed automatically.\nThis automatic upgrade step will happen just once per Hudi table as the hoodie.table.version will be updated in property file after upgrade is completed."),(0,n.kt)("li",{parentName:"ul"},"Similarly, a command line tool for Downgrading (command - downgrade) is added if in case some users want to downgrade Hudi\nfrom table version 3 to 2 or move from Hudi 0.10.0 to pre 0.10.0. This needs to be executed from a 0.10.0 hudi-cli binary/script."),(0,n.kt)("li",{parentName:"ul"},"We have made some major fixes to 0.10.0 release around metadata table and would recommend users to try out metadata\nfor better performance from optimized file listings. As part of the upgrade, please follow the below steps to enable metadata table.")),(0,n.kt)("h3",{id:"prerequisites-for-enabling-metadata-table"},"Prerequisites for enabling metadata table"),(0,n.kt)("p",null,"Hudi writes and reads have to perform \u201clist files\u201d operation on the file system to get the current view of the system.\nThis could be very costly in cloud stores which could throttle your requests depending on the scale/size of your dataset.\nSo, we introduced a metadata table in 0.7.0 to cache the file listing for the table. With 0.10.0, we have made a foundational fix\nto the metadata table with synchronous updates instead of async updates to simplify the overall design and to assist in\nbuilding future enhancements like multi-modal indexing. This can be turned on using the config hoodie.metadata.enable.\nBy default, metadata table based file listing feature is disabled."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deployment Model")," 1 : If your current deployment model is single writer and all table services (cleaning, clustering, compaction) are configured to be ",(0,n.kt)("strong",{parentName:"p"},"inline"),",\nthen you can turn on the metadata table without needing any additional configuration."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deployment Model")," 2 : If your current deployment model is ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/concurrency_control"},"multi writer"),"\nalong with ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/concurrency_control#enabling-multi-writing"},"lock providers")," configured,\nthen you can turn on the metadata table without needing any additional configuration."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deployment Model 3")," : If your current deployment model is single writer along with async table services (such as cleaning, clustering, compaction) configured,\nthen it is a must to have the lock providers configured before turning on the metadata table.\nEven if you have already had a metadata table turned on, and your deployment model employs async table services,\nthen it is  a must to have lock providers configured before upgrading to this release."),(0,n.kt)("h3",{id:"upgrade-steps"},"Upgrade steps"),(0,n.kt)("p",null,"For deployment mode 1, restarting the Single Writer with 0.10.0 is sufficient to upgrade the table."),(0,n.kt)("p",null,"For deployment model 2 with multi-writers, you can bring up the writers with 0.10.0 sequentially.\nIf you intend to use the metadata table, it is a must to have the ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#hoodiemetadataenable"},"metadata config")," enabled across all the writers.\nOtherwise, it will lead to loss of data from the inconsistent writer."),(0,n.kt)("p",null,"For deployment model 3 with single writer and async table services, restarting the single writer along with async services is sufficient to upgrade the table.\nIf async services are configured to run separately from the writer, then it is a must to have a consistent metadata config across all writers and async jobs.\nRemember to configure the lock providers as detailed above if enabling the metadata table."),(0,n.kt)("p",null,"To leverage the metadata table based file listings, readers must have metadata config turned on explicitly while querying.\nIf not, readers will not leverage the file listings from the metadata table."),(0,n.kt)("h3",{id:"spark-sql-primary-key-requirements"},"Spark-SQL primary key requirements"),(0,n.kt)("p",null,"Spark SQL in Hudi requires ",(0,n.kt)("inlineCode",{parentName:"p"},"primaryKey")," to be specified by tblproperites or options in sql statement.\nFor update and delete operations, ",(0,n.kt)("inlineCode",{parentName:"p"},"preCombineField")," is required as well. These requirements align with\nHudi datasource writer\u2019s and the alignment resolves many behavioural discrepancies reported in previous versions."),(0,n.kt)("p",null,"To specify ",(0,n.kt)("inlineCode",{parentName:"p"},"primaryKey"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"preCombineField")," or other hudi configs, ",(0,n.kt)("inlineCode",{parentName:"p"},"tblproperties")," is a preferred way than ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),".\nSpark SQL syntax is detailed ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-ref-syntax-ddl-create-table-datasource.html"},"DDL CREATE TABLE"),".\nIn summary, any Hudi table created pre 0.10.0 without a ",(0,n.kt)("inlineCode",{parentName:"p"},"primaryKey")," need to be recreated with a ",(0,n.kt)("inlineCode",{parentName:"p"},"primaryKey")," field with 0.10.0.\nWe plan to remove the need for primary keys in future versions more holistically."),(0,n.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("h3",{id:"kafka-connect"},"Kafka Connect"),(0,n.kt)("p",null,"In 0.10.0, we are adding a Kafka Connect Sink for Hudi that provides the ability for users to ingest/stream records from Apache Kafka to Hudi Tables.\nWhile users can already stream Kafka records into Hudi tables using deltastreamer, the Kafka connect sink offers greater flexibility\nto current users of Kafka connect sinks such as S3, HDFS, etc to additionally sink their data to a data lake.\nIt also helps users who do not want to deploy and operate spark.  The sink is currently experimental,\nand users can quickly get started by referring to the detailed steps in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-kafka-connect/README.md"},"README"),".\nFor users who are curious about the internals, you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC-32+Kafka+Connect+Sink+for+Hudi"},"RFC"),"."),(0,n.kt)("h3",{id:"z-ordering-hilbert-curves-and-data-skipping"},"Z-Ordering, Hilbert Curves and Data Skipping"),(0,n.kt)("p",null,"In 0.10.0 we\u2019re bringing (in experimental mode) support for indexing based on space-filling curves ordering initially\nsupporting ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Z-order_curve"},"Z-order")," and ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hilbert_curve"},"Hilbert curves"),"."),(0,n.kt)("p",null,"Data skipping is crucial in optimizing query performance. Enabled by the Column Statistics Index containing column level stats (like min, max, number of nulls, etc)\nfor individual data files, allows to quickly prune (for some queries) the search space by excluding files that are guaranteed\nnot to contain the values of interest for the query in question. Effectiveness of Data Skipping is maximized\nwhen data is globally ordered by the columns, allowing individual Parquet files to contain disjoint ranges of values,\nallowing for more effective pruning."),(0,n.kt)("p",null,"Using space-filling curves (like Z-order, Hilbert, etc) allows to effectively order rows in your table based on sort-key\ncomprising multiple columns, while preserving very important property: ordering of the rows using space-filling curve\non multi-column key will preserve within itself the ordering by each individual column as well.\nThis property comes very handy in use-cases when rows need to be ordered by complex multi-column sort keys,\nwhich need to be queried efficiently by any subset of they key (not necessarily key\u2019s prefix), making space-filling curves stand out\nfrom plain and simple linear (or lexicographical) multi-column ordering. Using space-filling curves in such use-cases might bring order(s)\nof magnitude speed-up in your queries' performance by considerably reducing search space, if applied appropriately."),(0,n.kt)("p",null,"These features are currently experimental, we\u2019re planning to dive into more details showcasing real-world application\nof the space-filling curves in a blog post soon."),(0,n.kt)("h3",{id:"debezium-deltastreamer-sources"},"Debezium Deltastreamer sources"),(0,n.kt)("p",null,"We have added two new debezium sources to our deltastreamer ecosystem. Debezium is an open source distributed platform for change data capture(CDC).\nWe have added PostgresDebeziumSource and MysqlDebeziumSource to route CDC logs into Apache Hudi via deltastreamer for postgres and my sql db respectively.\nWith this capability, we can continuously capture row-level changes that insert, update and delete records that were committed to a database and ingest to hudi."),(0,n.kt)("h3",{id:"external-config-file-support"},"External config file support"),(0,n.kt)("p",null,"Instead of directly and sometimes passing configurations to every Hudi job, since 0.10.0 users can now pass in configuration via a configuration file ",(0,n.kt)("inlineCode",{parentName:"p"},"hudi-default.conf"),".\nBy default, Hudi would load the configuration file under /etc/hudi/conf directory. You can specify a different configuration directory location\nby setting the ",(0,n.kt)("strong",{parentName:"p"},"HUDI_CONF_DIR")," environment variable. This can be useful for uniformly enforcing often repeated configs\nlike Hive sync settings, write/index tuning parameters, across your entire data lake."),(0,n.kt)("h3",{id:"metadata-table"},"Metadata table"),(0,n.kt)("p",null,"With 0.10.0, we have made a foundational fix to the metadata table with synchronous updates instead of async updates\nto simplify the overall design and to assist in building future enhancements. This can be turned on using the config ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#hoodiemetadataenable"},"hoodie.metadata.enable"),".\nBy default, metadata table based file listing feature is disabled. We have few following up tasks we are looking to fix by 0.11.0.\nYou can follow ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-1292"},"HUDI-1292")," umbrella ticket for further details.\nPlease refer to the Migration guide section before turning on the metadata table."),(0,n.kt)("h3",{id:"documentation-overhaul"},"Documentation overhaul"),(0,n.kt)("p",null,"Documentation was added for many pre-existing features that were previously missing docs. We reorganised the documentation\nlayout to improve discoverability and help new users ramp up on Hudi. We made many doc improvements based on community feedback.\nSee the latest docs at: ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/overview"},"overview"),"."),(0,n.kt)("h2",{id:"writer-side-improvements"},"Writer side improvements"),(0,n.kt)("p",null,"Commit instant time format have been upgraded to ms granularity from secs granularity. Users don\u2019t have to do any special handling in this,\nregular upgrade should work smoothly."),(0,n.kt)("p",null,"Deltastreamer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ORCDFSSource has been added to support orc files with DFSSource."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"S3EventsHoodieIncrSource")," can now fan-out multiple tables off a single S3 metadata table.")),(0,n.kt)("p",null,"Clustering:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We have added support to retain same file groups with clustering to cater to the requirements of external index.\nIncremental timeline support has been added for pending clustering operations.")),(0,n.kt)("h3",{id:"dynamodb-based-lock-provider"},"DynamoDB based lock provider"),(0,n.kt)("p",null,"Hudi added support for multi-writers in 0.7.0 and as part of it, users are required to configure lock service providers.\nIn 0.10.0, we are adding DynamoDBBased lock provider that users can make use of. To configure this lock provider, users have to set the below configs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"hoodie.write.lock.provider=org.apache.hudi.aws.transaction.lock.DynamoDBBasedLockProvider\nHoodie.write.lock.dynamodb.table\nHoodie.write.lock.dynamodb.partition_keyhoodie.write.lock.dynamodb.region\n")),(0,n.kt)("p",null,"Also, to set up the credentials for accessing AWS resources, users can set the below property:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"hoodie.aws.access.keyhoodie.aws.secret.keyhoodie.aws.session.token\n")),(0,n.kt)("p",null,"More details on concurrency control are covered ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/concurrency_control"},"here"),"."),(0,n.kt)("h3",{id:"default-flips"},"Default flips"),(0,n.kt)("p",null,"We have flipped defaults for all shuffle parallelism configs in hudi from 1500 to 200. The configs of interest are ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#hoodieinsertshuffleparallelism"},(0,n.kt)("inlineCode",{parentName:"a"},"hoodie.insert.shuffle.parallelism")),",\n",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#hoodiebulkinsertshuffleparallelism"},(0,n.kt)("inlineCode",{parentName:"a"},"hoodie.bulkinsert.shuffle.parallelism")),",\n",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#hoodieupsertshuffleparallelism"},(0,n.kt)("inlineCode",{parentName:"a"},"hoodie.upsert.shuffle.parallelism"))," and\n",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#hoodiedeleteshuffleparallelism"},(0,n.kt)("inlineCode",{parentName:"a"},"hoodie.delete.shuffle.parallelism")),".\nIf you have been relying on the default settings, just watch out after upgrading. We have tested these configs at a reasonable scale though."),(0,n.kt)("p",null,"We have enabled the rollback strategy to use marker based from listing based. And we have also made timeline server based\nmarkers as default with this release. You can read more on the timeline server based markers ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2021/08/18/improving-marker-mechanism"},"here"),"."),(0,n.kt)("p",null,"Clustering: Default plan strategy changed to ",(0,n.kt)("inlineCode",{parentName:"p"},"SparkSizeBasedClusteringPlanStrategy"),". By default, commit metadata will be preserved when clustering.\nIt will be useful for incremental query support with replace commits in the timeline."),(0,n.kt)("h3",{id:"spark-sql-improvements"},"Spark SQL improvements"),(0,n.kt)("p",null,"We have made more improvements to spark-sql like adding support for ",(0,n.kt)("inlineCode",{parentName:"p"},"MERGE INTO")," to work with non-primary keys,\nand added support for new operations like ",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW PARTITIONS")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"DROP PARTITIONS"),"."),(0,n.kt)("h2",{id:"query-side-improvements"},"Query side improvements"),(0,n.kt)("p",null,"Hive Incremental query support and partition pruning for snapshot query has been added for MOR table. Support has been added for incremental read with clustering commit."),(0,n.kt)("p",null,"We have improved the listing logic to gain 65% on query time and 2.8x parallelism on Presto queries against the Hudi tables."),(0,n.kt)("p",null,"In general, we have made a lot of bug fixes (multi writers, archival, rollbacks, metadata, clustering, etc) and stability fixes in this release.\nAnd have improved our CLI around metadata and clustering commands. Hoping users will have a smoother ride with hudi 0.10.0."),(0,n.kt)("h2",{id:"flink-integration-improvements"},"Flink Integration Improvements"),(0,n.kt)("p",null,"Flink reader now supports incremental read, set ",(0,n.kt)("inlineCode",{parentName:"p"},"hoodie.datasource.query.type")," as ",(0,n.kt)("inlineCode",{parentName:"p"},"incremental")," to enable for batch execution mode.\nConfigure option ",(0,n.kt)("inlineCode",{parentName:"p"},"read.start-commit")," to specify the reading start commit, configure option ",(0,n.kt)("inlineCode",{parentName:"p"},"read.end-commit"),"\nto specify the end commit (both are inclusive). Streaming reader can also specify the start offset with the same option ",(0,n.kt)("inlineCode",{parentName:"p"},"read.start-commit"),"."),(0,n.kt)("p",null,"Upsert operation is now supported for batch execution mode, use ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," syntax to update the existing data set."),(0,n.kt)("p",null,"For non-updating data set like the log data, flink writer now supports appending the new data set directly without merging,\nthis now becomes the default mode for Copy On Write table type with ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT")," operation,\nby default, the writer does not merge the existing small files, set option ",(0,n.kt)("inlineCode",{parentName:"p"},"write.insert.cluster")," as ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," to enable merging of the small files."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"write.precombine.field")," now becomes optional(not a required option) for flink writer, when the field is not specified,\nif there is a field named ",(0,n.kt)("inlineCode",{parentName:"p"},"ts")," in the table schema, the writer use it as the preCombine field,\nor the writer compares records by processing sequence: always choose later records."),(0,n.kt)("p",null,"The small file strategy is tweaked to be more stable, with the new strategy, each bucket assign task manages a subset of filegroups separately,\nthat means, the parallelism of bucket assign task would affect the number of small files."),(0,n.kt)("p",null,"The metadata table is also supported for flink writer and reader, metadata table can reduce the partition lookup and file listing obviously for the underneath storage for both writer and reader side.\nSet option ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.enabled")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," to enable this feature."),(0,n.kt)("h2",{id:"ecosystem"},"Ecosystem"),(0,n.kt)("h3",{id:"dbt-support"},"DBT support"),(0,n.kt)("p",null,"We've made it so much easier to create derived hudi datasets by integrating with the very popular data transformation tool (dbt).\nWith 0.10.0, users can create incremental hudi datasets using dbt. Please see this PR for details ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/dbt-spark/issues/187"},"https://github.com/dbt-labs/dbt-spark/issues/187")),(0,n.kt)("h3",{id:"monitoring"},"Monitoring"),(0,n.kt)("p",null,"Hudi now supports publishing metrics to Amazon CloudWatch. It can be configured by setting ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#hoodiemetricsreportertype"},(0,n.kt)("inlineCode",{parentName:"a"},"hoodie.metrics.reporter.type"))," to \u201cCLOUDWATCH\u201d.\nStatic AWS credentials to be used can be configured using ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#hoodieawsaccesskey"},(0,n.kt)("inlineCode",{parentName:"a"},"hoodie.aws.access.key")),",\n",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#hoodieawssecretkey"},(0,n.kt)("inlineCode",{parentName:"a"},"hoodie.aws.secret.key")),",\n",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#hoodieawssessiontoken"},(0,n.kt)("inlineCode",{parentName:"a"},"hoodie.aws.session.token"))," properties.\nIn the absence of static AWS credentials being configured, ",(0,n.kt)("inlineCode",{parentName:"p"},"DefaultAWSCredentialsProviderChain")," will be used to get credentials by checking environment properties.\nAdditional Amazon CloudWatch reporter specific properties that can be tuned are in the ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieMetricsCloudWatchConfig")," class."),(0,n.kt)("h3",{id:"devex"},"DevEx"),(0,n.kt)("p",null,"Default maven spark3 version is not upgraded to 3.1 So, ",(0,n.kt)("inlineCode",{parentName:"p"},"maven profile -Dspark3")," will build Hudi against Spark 3.1.2 with 0.10.0. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"-Dspark3.0.x")," for building against Spark 3.0.x versions"),(0,n.kt)("h3",{id:"repair-tool-for-dangling-data-files"},"Repair tool for dangling data files"),(0,n.kt)("p",null,"Sometimes, there could be dangling data files lying around due to various reasons ranging from rollback failing mid-way\nto cleaner failing to clean up all data files, or data files created by spark task failures were not cleaned up properly.\nSo, we are adding a repair tool to clean up any dangling data files which are not part of completed commits. Feel free to try out\nthe tool via spark-submit at ",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.utilities.HoodieRepairTool")," in hudi-utilities bundle, if you encounter issues in 0.10.0 release.\nThe tool has dry run mode as well which would print the dangling files without actually deleting it. The tool is available\nfrom 0.11.0-SNAPSHOT on master."),(0,n.kt)("h2",{id:"raw-release-notes"},"Raw Release Notes"),(0,n.kt)("p",null,"The raw release notes are available ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12350285"},"here")))}u.isMDXComponent=!0}}]);