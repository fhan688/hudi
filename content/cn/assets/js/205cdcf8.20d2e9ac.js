"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[75923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91655:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Hive Metastore",keywords:["hudi","hive","sync"]},o=void 0,l={unversionedId:"syncing_metastore",id:"version-0.11.0/syncing_metastore",title:"Hive Metastore",description:"Hive Sync Tool",source:"@site/versioned_docs/version-0.11.0/syncing_metastore.md",sourceDirName:".",slug:"/syncing_metastore",permalink:"/cn/docs/0.11.0/syncing_metastore",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.0/syncing_metastore.md",tags:[],version:"0.11.0",frontMatter:{title:"Hive Metastore",keywords:["hudi","hive","sync"]},sidebar:"docs",previous:{title:"DataHub",permalink:"/cn/docs/0.11.0/syncing_datahub"},next:{title:"Google BigQuery",permalink:"/cn/docs/0.11.0/gcp_bigquery"}},s=[{value:"Hive Sync Tool",id:"hive-sync-tool",children:[{value:"Hive Sync Configuration",id:"hive-sync-configuration",children:[],level:3},{value:"Sync modes",id:"sync-modes",children:[{value:"HMS",id:"hms",children:[],level:4},{value:"HIVEQL",id:"hiveql",children:[],level:4},{value:"JDBC",id:"jdbc",children:[],level:4}],level:3},{value:"Flink Setup",id:"flink-setup",children:[{value:"Install",id:"install",children:[],level:4},{value:"Hive Environment",id:"hive-environment",children:[],level:4},{value:"Sync Template",id:"sync-template",children:[],level:4},{value:"Query",id:"query",children:[],level:4}],level:3},{value:"Spark datasource example",id:"spark-datasource-example",children:[],level:3}],level:2}],d={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hive-sync-tool"},"Hive Sync Tool"),(0,i.kt)("p",null,"Writing data with ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data"},"DataSource")," writer or ",(0,i.kt)("a",{parentName:"p",href:"/docs/hoodie_deltastreamer"},"HoodieDeltaStreamer")," supports syncing of the table's latest schema to Hive metastore, such that queries can pick up new columns and partitions.\nIn case, it's preferable to run this from commandline or in an independent jvm, Hudi provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"HiveSyncTool"),", which can be invoked as below,\nonce you have built the hudi-hive module. Following is how we sync the above Datasource Writer written table to Hive metastore."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"cd hudi-hive\n./run_sync_tool.sh  --jdbc-url jdbc:hive2:\\/\\/hiveserver:10000 --user hive --pass hive --partitioned-by partition --base-path <basePath> --database default --table <tableName>\n")),(0,i.kt)("p",null,"Starting with Hudi 0.5.1 version read optimized version of merge-on-read tables are suffixed '_ro' by default. For backwards compatibility with older Hudi versions, an optional HiveSyncConfig - ",(0,i.kt)("inlineCode",{parentName:"p"},"--skip-ro-suffix"),", has been provided to turn off '_ro' suffixing if desired. Explore other hive sync options using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"cd hudi-hive\n./run_sync_tool.sh\n [hudi-hive]$ ./run_sync_tool.sh --help\n")),(0,i.kt)("h3",{id:"hive-sync-configuration"},"Hive Sync Configuration"),(0,i.kt)("p",null,"Please take a look at the arguments that can be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"run_sync_tool")," in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-sync/hudi-hive-sync/src/main/java/org/apache/hudi/hive/HiveSyncConfig.java"},"HiveSyncConfig"),".\nAmong them, following are the required arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Parameter(names = {"--database"}, description = "name of the target database in Hive", required = true);\n@Parameter(names = {"--table"}, description = "name of the target table in Hive", required = true);\n@Parameter(names = {"--base-path"}, description = "Basepath of hoodie table to sync", required = true);## Sync modes\n')),(0,i.kt)("p",null,"Corresponding datasource options for the most commonly used hive sync configs are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"HiveSyncConfig"),(0,i.kt)("th",{parentName:"tr",align:null},"DataSourceWriteOption"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--database"),(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.hive_sync.database"),(0,i.kt)("td",{parentName:"tr",align:null},"name of the target database in Hive")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--table"),(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.hive_sync.table"),(0,i.kt)("td",{parentName:"tr",align:null},"name of the target table in Hive")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--user"),(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.hive_sync.username"),(0,i.kt)("td",{parentName:"tr",align:null},"username for hive metastore")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--pass"),(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.hive_sync.password"),(0,i.kt)("td",{parentName:"tr",align:null},"password for hive metastore")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--use-jdbc"),(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.hive_sync.use_jdbc"),(0,i.kt)("td",{parentName:"tr",align:null},"use JDBC to connect to metastore")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--jdbc-url"),(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.hive_sync.jdbcurl"),(0,i.kt)("td",{parentName:"tr",align:null},"Hive metastore url")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--sync-mode"),(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.hive_sync.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"Mode to choose for Hive ops. Valid values are hms, jdbc and hiveql.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--partitioned-by"),(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.hive_sync.partition_fields"),(0,i.kt)("td",{parentName:"tr",align:null},"Comma-separated column names in the table to use for determining hive partition.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--partition-value-extractor"),(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.hive_sync.partition_extractor_class"),(0,i.kt)("td",{parentName:"tr",align:null},"Class which implements PartitionValueExtractor to extract the partition values. ",(0,i.kt)("inlineCode",{parentName:"td"},"SlashEncodedDayPartitionValueExtractor")," by default.")))),(0,i.kt)("h3",{id:"sync-modes"},"Sync modes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HiveSyncTool")," supports three modes, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"HMS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"HIVEQL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"JDBC"),", to connect to Hive metastore server.\nThese modes are just three different ways of executing DDL against Hive. Among these modes, JDBC or HMS is preferable over\nHIVEQL, which is mostly used for running DML rather than DDL."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: All these modes assume that hive metastore has been configured and the corresponding properties set in\nhive-site.xml configuration file. Additionally, if you're using spark-shell/spark-sql to sync Hudi table to Hive then\nthe hive-site.xml file also needs to be placed under ",(0,i.kt)("inlineCode",{parentName:"p"},"<SPARK_HOME>/conf")," directory.")),(0,i.kt)("h4",{id:"hms"},"HMS"),(0,i.kt)("p",null,"HMS mode uses the hive metastore client to sync Hudi table using thrift APIs directly.\nTo use this mode, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"--sync-mode=hms")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"run_sync_tool")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"--use-jdbc=false"),".\nAdditionally, if you are using remote metastore, then ",(0,i.kt)("inlineCode",{parentName:"p"},"hive.metastore.uris")," need to be set in hive-site.xml configuration file.\nOtherwise, the tool assumes that metastore is running locally on port 9083 by default.\nSupport for HMS mode with Spark datasource will be ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-2491"},"enabled soon"),"."),(0,i.kt)("h4",{id:"hiveql"},"HIVEQL"),(0,i.kt)("p",null,"HQL is Hive's own SQL dialect.\nThis mode simply uses the Hive QL's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hive/blob/master/ql/src/java/org/apache/hadoop/hive/ql/Driver.java"},"driver")," to execute DDL as HQL command.\nTo use this mode, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"--sync-mode=hiveql")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"run_sync_tool")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"--use-jdbc=false"),"."),(0,i.kt)("h4",{id:"jdbc"},"JDBC"),(0,i.kt)("p",null,"This mode uses the JDBC specification to connect to the hive metastore.\nTo use this mode, just pass the jdbc url to the hive server (",(0,i.kt)("inlineCode",{parentName:"p"},"--use-jdbc")," is true by default)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Parameter(names = {"--jdbc-url"}, description = "Hive jdbc connect url");\n')),(0,i.kt)("h3",{id:"flink-setup"},"Flink Setup"),(0,i.kt)("h4",{id:"install"},"Install"),(0,i.kt)("p",null,"Now you can git clone Hudi master branch to test Flink hive sync. The first step is to install Hudi to get ",(0,i.kt)("inlineCode",{parentName:"p"},"hudi-flink-bundle_2.11-0.x.jar"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"hudi-flink-bundle")," module pom.xml sets the scope related to hive as ",(0,i.kt)("inlineCode",{parentName:"p"},"provided")," by default. If you want to use hive sync, you need to use the\nprofile ",(0,i.kt)("inlineCode",{parentName:"p"},"flink-bundle-shade-hive")," during packaging. Executing command below to install:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Maven install command\nmvn install -DskipTests -Drat.skip=true -Pflink-bundle-shade-hive2\n\n# For hive1, you need to use profile -Pflink-bundle-shade-hive1\n# For hive3, you need to use profile -Pflink-bundle-shade-hive3 \n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Hive1.x can only synchronize metadata to hive, but cannot use hive query now. If you need to query, you can use spark to query hive table."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If using hive profile, you need to modify the hive version in the profile to your hive cluster version (Only need to modify the hive version in this profile).\nThe location of this ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"packaging/hudi-flink-bundle/pom.xml"),", and the corresponding profile is at the bottom of this file."))),(0,i.kt)("h4",{id:"hive-environment"},"Hive Environment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Import ",(0,i.kt)("inlineCode",{parentName:"p"},"hudi-hadoop-mr-bundle")," into hive. Creating ",(0,i.kt)("inlineCode",{parentName:"p"},"auxlib/")," folder under the root directory of hive, and moving ",(0,i.kt)("inlineCode",{parentName:"p"},"hudi-hadoop-mr-bundle-0.x.x-SNAPSHOT.jar")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"auxlib"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"hudi-hadoop-mr-bundle-0.x.x-SNAPSHOT.jar")," is at ",(0,i.kt)("inlineCode",{parentName:"p"},"packaging/hudi-hadoop-mr-bundle/target"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When Flink sql client connects hive metastore remotely, ",(0,i.kt)("inlineCode",{parentName:"p"},"hive metastore")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"hiveserver2")," services need to be enabled, and the port number need to\nbe set correctly. Command to turn on the services:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Enable hive metastore and hiveserver2\nnohup ./bin/hive --service metastore &\nnohup ./bin/hive --service hiveserver2 &\n\n# While modifying the jar package under auxlib, you need to restart the service.\n")),(0,i.kt)("h4",{id:"sync-template"},"Sync Template"),(0,i.kt)("p",null,"Flink hive sync now supports two hive sync mode, ",(0,i.kt)("inlineCode",{parentName:"p"},"hms")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"hms")," mode only needs to configure metastore uris. For\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc")," mode, the JDBC attributes and metastore uris both need to be configured. The options template is as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- hms mode template\nCREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${db_path}/t1',\n  'table.type' = 'COPY_ON_WRITE',  -- If MERGE_ON_READ, hive query will not have output until the parquet file is generated\n  'hive_sync.enable' = 'true',     -- Required. To enable hive synchronization\n  'hive_sync.mode' = 'hms',        -- Required. Setting hive sync mode to hms, default jdbc\n  'hive_sync.metastore.uris' = 'thrift://${ip}:9083' -- Required. The port need set on hive-site.xml\n);\n\n\n-- jdbc mode template\nCREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${db_path}/t1',\n  'table.type' = 'COPY_ON_WRITE',  --If MERGE_ON_READ, hive query will not have output until the parquet file is generated\n  'hive_sync.enable' = 'true',     -- Required. To enable hive synchronization\n  'hive_sync.mode' = 'jdbc',       -- Required. Setting hive sync mode to hms, default jdbc\n  'hive_sync.metastore.uris' = 'thrift://${ip}:9083', -- Required. The port need set on hive-site.xml\n  'hive_sync.jdbc_url'='jdbc:hive2://${ip}:10000',    -- required, hiveServer port\n  'hive_sync.table'='${table_name}',                  -- required, hive table name\n  'hive_sync.db'='${db_name}',                        -- required, hive database name\n  'hive_sync.username'='${user_name}',                -- required, JDBC username\n  'hive_sync.password'='${password}'                  -- required, JDBC password\n);\n")),(0,i.kt)("h4",{id:"query"},"Query"),(0,i.kt)("p",null,"While using hive beeline query, you need to enter settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set hive.input.format = org.apache.hudi.hadoop.hive.HoodieCombineHiveInputFormat;\n")),(0,i.kt)("h3",{id:"spark-datasource-example"},"Spark datasource example"),(0,i.kt)("p",null,"Assuming the metastore is configured properly, then start the spark-shell."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$SPARK_INSTALL/bin/spark-shell   --jars $HUDI_SPARK_BUNDLE \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n")),(0,i.kt)("p",null,"We can run the following script to create a sample hudi table and sync it to hive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nimport org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.spark.sql.types._\nimport org.apache.spark.sql.Row\n\n\nval tableName = "hudi_cow"\nval basePath = "/user/hive/warehouse/hudi_cow"\n\nval schema = StructType(Array(\nStructField("rowId", StringType,true),\nStructField("partitionId", StringType,true),\nStructField("preComb", LongType,true),\nStructField("name", StringType,true),\nStructField("versionId", StringType,true),\nStructField("toBeDeletedStr", StringType,true),\nStructField("intToLong", IntegerType,true),\nStructField("longToInt", LongType,true)\n))\n\nval data0 = Seq(Row("row_1", "2021/01/01",0L,"bob","v_0","toBeDel0",0,1000000L), \n               Row("row_2", "2021/01/01",0L,"john","v_0","toBeDel0",0,1000000L), \n               Row("row_3", "2021/01/02",0L,"tom","v_0","toBeDel0",0,1000000L))\n\nvar dfFromData0 = spark.createDataFrame(data0,schema)\n\ndfFromData0.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "preComb").\n  option(RECORDKEY_FIELD_OPT_KEY, "rowId").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionId").\n  option(TABLE_NAME, tableName).\n  option(TABLE_TYPE.key, COW_TABLE_TYPE_OPT_VAL).\n  option(OPERATION_OPT_KEY, "upsert").\n  option("hoodie.index.type","SIMPLE").\n  option("hoodie.datasource.write.hive_style_partitioning","true").\n  option("hoodie.datasource.hive_sync.jdbcurl","jdbc:hive2://hiveserver:10000/").\n  option("hoodie.datasource.hive_sync.database","default").\n  option("hoodie.datasource.hive_sync.table","hudi_cow").\n  option("hoodie.datasource.hive_sync.partition_fields","partitionId").\n  option("hoodie.datasource.hive_sync.enable","true").\n  mode(Overwrite).\n  save(basePath)\n')),(0,i.kt)("p",null,"To query, connect to the hive server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"beeline -u jdbc:hive2://hiveserver:10000 \\\n  --hiveconf hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat \\\n  --hiveconf hive.stats.autogather=false\n  \nBeeline version 1.2.1.spark2 by Apache Hive\n0: jdbc:hive2://hiveserver:10000> show tables;\n+-----------+--+\n| tab_name  |\n+-----------+--+\n| hudi_cow  |\n+-----------+--+\n1 row selected (0.531 seconds)\n0: jdbc:hive2://hiveserver:10000> select * from hudi_cow limit 1;\n+-------------------------------+--------------------------------+------------------------------+----------------------------------+----------------------------------------------------------------------------+-----------------+-------------------+----------------+---------------------+--------------------------+---------------------+---------------------+-----------------------+--+\n| hudi_cow._hoodie_commit_time  | hudi_cow._hoodie_commit_seqno  | hudi_cow._hoodie_record_key  | hudi_cow._hoodie_partition_path  |                         hudi_cow._hoodie_file_name                         | hudi_cow.rowid  | hudi_cow.precomb  | hudi_cow.name  | hudi_cow.versionid  | hudi_cow.tobedeletedstr  | hudi_cow.inttolong  | hudi_cow.longtoint  | hudi_cow.partitionid  |\n+-------------------------------+--------------------------------+------------------------------+----------------------------------+----------------------------------------------------------------------------+-----------------+-------------------+----------------+---------------------+--------------------------+---------------------+---------------------+-----------------------+--+\n| 20220120090023631             | 20220120090023631_1_2          | row_1                        | partitionId=2021/01/01           | 0bf9b822-928f-4a57-950a-6a5450319c83-0_1-24-314_20220120090023631.parquet  | row_1           | 0                 | bob            | v_0                 | toBeDel0                 | 0                   | 1000000             | 2021/01/01            |\n+-------------------------------+--------------------------------+------------------------------+----------------------------------+----------------------------------------------------------------------------+-----------------+-------------------+----------------+---------------------+--------------------------+---------------------+---------------------+-----------------------+--+\n1 row selected (5.475 seconds)\n0: jdbc:hive2://hiveserver:10000>\n")))}c.isMDXComponent=!0}}]);