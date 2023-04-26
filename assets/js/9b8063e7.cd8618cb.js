"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"Setting Up a Flow Node",sidebar_title:"Node Setup",description:"How to run a Collection, Consensus, Verification and Execution node"},i=void 0,l={unversionedId:"nodes/node-operation/node-setup",id:"nodes/node-operation/node-setup",title:"Setting Up a Flow Node",description:"How to run a Collection, Consensus, Verification and Execution node",source:"@site/docs/nodes/node-operation/node-setup.mdx",sourceDirName:"nodes/node-operation",slug:"/nodes/node-operation/node-setup",permalink:"/nodes/node-operation/node-setup",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682537977,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Setting Up a Flow Node",sidebar_title:"Node Setup",description:"How to run a Collection, Consensus, Verification and Execution node"},sidebar:"tutorialSidebar",previous:{title:"Node Roles",permalink:"/nodes/node-operation/node-roles"},next:{title:"Observer Node",permalink:"/nodes/node-operation/observer-node"}},s={},d=[{value:"Pull the Flow Images",id:"pull-the-flow-images",level:2},{value:"Prepare Your Node to Start",id:"prepare-your-node-to-start",level:2},{value:"Systemd",id:"systemd",level:3},{value:"Docker Configuration",id:"docker-configuration",level:3},{value:"System Configuration",id:"system-configuration",level:3},{value:"Admin Server",id:"admin-server",level:3},{value:"Access",id:"access",level:3},{value:"Collection",id:"collection",level:3},{value:"Consensus",id:"consensus",level:3},{value:"Execution",id:"execution",level:3},{value:"Verification",id:"verification",level:3},{value:"Archive",id:"archive",level:3},{value:"Start the Node",id:"start-the-node",level:2},{value:"Systemd",id:"systemd-1",level:3},{value:"Verify your Node is Running",id:"verify-your-node-is-running",level:2},{value:"Systemd",id:"systemd-2",level:3},{value:"Docker",id:"docker",level:3},{value:"Monitoring and Metrics",id:"monitoring-and-metrics",level:2},{value:"Node Status",id:"node-status",level:3}],c=(p="Callout",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const u={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide is for running a Collection, Consensus, Verification and Execution node.\nIf you are planning to run an Access node then refer to ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/access-node-setup"},"access node setup"),"."),(0,a.kt)("p",null,"First you'll need to provision a machine or virtual machine to run your node software. Please see follow the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-provisioning"},"node-provisioning")," guide for it."),(0,a.kt)("h2",{id:"pull-the-flow-images"},"Pull the Flow Images"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"flow-go")," binaries are distributed as container images, and need to be pulled down to your host with your image management tool of choice."),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"$ROLE")," with the node type you are planning to run. Valid options are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"collection"),(0,a.kt)("li",{parentName:"ul"},"consensus"),(0,a.kt)("li",{parentName:"ul"},"execution"),(0,a.kt)("li",{parentName:"ul"},"verification"),(0,a.kt)("li",{parentName:"ul"},"access")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'  # Docker\n  docker pull gcr.io/flow-container-registry/${ROLE}:alpha-v0.0.1\n\n  # Containerd\n  ctr images pull gcr.io/flow-container-registry/${ROLE}:alpha-v0.0.1",\n')),(0,a.kt)("h2",{id:"prepare-your-node-to-start"},"Prepare Your Node to Start"),(0,a.kt)("p",null,"Your nodes will need to boot at startup, and restart if they crash."),(0,a.kt)("p",null,"If you are running ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," you can use the service files provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"flow-go"),".\nFind them in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/tree/master/deploy"},"Flow Go"),"."),(0,a.kt)("p",null,"If you are using some other system besides Systemd, you need to ensure that the Flow container is started,\nthe appropriate key directories are mounted into the container, and that the container will\nautomatically restart following a crash."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," files pull runtime settings from ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/flow/runtime-config.env")," and any ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\nfiles under ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/flow/conf.d"),". Examples of these files are also available in the github repo.\nYou will need to modify the runtime config file later."),(0,a.kt)("h3",{id:"systemd"},"Systemd"),(0,a.kt)(c,{type:"info",mdxType:"Callout"},"If you are not using Systemd, you can skip this step"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ensure that you pulled the latest changes from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-go"},"flow-go repository")," via ",(0,a.kt)("inlineCode",{parentName:"li"},"git"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"## Clone the repo if you haven't already done so\ngit clone https://github.com/onflow/flow-go\n\n## Get latest changes\ncd flow-go\ngit pull origin master\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Copy your respective ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-go/tree/master/deploy/systemd-docker"},"systemd unit file")," to: ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/systemd/system")),(0,a.kt)("li",{parentName:"ol"},"Create directory ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo mkdir /etc/flow")),(0,a.kt)("li",{parentName:"ol"},"Copy the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-go/blob/master/deploy/systemd-docker/runtime-conf.env"},"runtime-conf.env")," file to: ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/flow/")),(0,a.kt)("li",{parentName:"ol"},"Enable your service ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo systemctl enable flow-$ROLE.service")," (replace ",(0,a.kt)("inlineCode",{parentName:"li"},"$ROLE")," with your node role - eg. ",(0,a.kt)("inlineCode",{parentName:"li"},"collection"),")")),(0,a.kt)("h3",{id:"docker-configuration"},"Docker Configuration"),(0,a.kt)("p",null,"If you are not using Systemd, sample commands for running each Docker container are below.\nBe sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"/path/to/data")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/path/to/bootstrap")," with the appropriate paths you are using."),(0,a.kt)(c,{type:"warning",mdxType:"Callout"},"Do not run your node using `docker run` command directly without a mechanism for the node to automatically restart following a crash."),(0,a.kt)(c,{type:"info",mdxType:"Callout"},"The actual Docker image tag can be found [here](https://developers.flow.com/nodes/node-operation/past-sporks) for appropriate spork."),(0,a.kt)("h3",{id:"system-configuration"},"System Configuration"),(0,a.kt)("p",null,"Flow nodes create connections to other nodes on the network, which are represented as file descriptors by the OS. Depending on the default\nlimits for your machine, you may need to increase the soft limit available to the node software."),(0,a.kt)("p",null,"Make sure the soft limit is at least ",(0,a.kt)("inlineCode",{parentName:"p"},"8192"),"."),(0,a.kt)("p",null,"You can configure the ulimit for the node's docker container. See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/run/#ulimit"},"Docker documentation")," for more details."),(0,a.kt)("h3",{id:"admin-server"},"Admin Server"),(0,a.kt)("p",null,"Each node can be configured with an admin server, which allows you to control some of the node's configuration, as well as view some of its internal state. You can find\na few of the commands in the Admin Server ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/blob/master/admin/README.md"},"README"),". Two commands to highlight are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list-commands"),": which returns a list of all of the available commands for your node"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set-log-level"),": which allows you to change the log level of your node at runtime")),(0,a.kt)("p",null,"You can enable the admin server by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--admin-addr")," flag with an interface and port."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("em",{parentName:"p"},"IMPORANT: The admin server can modify your node's configuration. DO NOT allow access to untrusted clients."))),(0,a.kt)("h3",{id:"access"},"Access"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    --ulimit nofile=8192 \\\n    gcr.io/flow-container-registry/access:<applicable docker tag> \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --secretsdir=/data/secrets \\\n    --execution-data-dir=/data/execution_data \\\n    --rpc-addr=0.0.0.0:9000 \\\n    --http-addr=0.0.0.0:8000 \\\n    --admin-addr=0.0.0.0:9002 \\\n    --collection-ingress-port=9000 \\\n    --script-addr=${FLOW_NETWORK_EXECUTION_NODE} \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,a.kt)("h3",{id:"collection"},"Collection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    --ulimit nofile=8192 \\\n    gcr.io/flow-container-registry/collection:<applicable docker tag> \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --secretsdir=/data/secrets \\\n    --ingress-addr=0.0.0.0:9000 \\\n    --admin-addr=0.0.0.0:9002 \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,a.kt)("h3",{id:"consensus"},"Consensus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    --ulimit nofile=8192 \\\n    gcr.io/flow-container-registry/consensus:<applicable docker tag> \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --secretsdir=/data/secrets \\\n    --admin-addr=0.0.0.0:9002 \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,a.kt)("h3",{id:"execution"},"Execution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    --ulimit nofile=8192 \\\n    gcr.io/flow-container-registry/execution:<applicable docker tag> \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --secretsdir=/data/secrets \\\n    --triedir=/data/execution \\\n    --execution-data-dir=/data/execution_data \\\n    --rpc-addr=0.0.0.0:9000 \\\n    --admin-addr=0.0.0.0:9002 \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,a.kt)("h3",{id:"verification"},"Verification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    --ulimit nofile=8192 \\\n    gcr.io/flow-container-registry/verification:<applicable docker tag> \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --secretsdir=/data/secrets \\\n    --admin-addr=0.0.0.0:9002 \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,a.kt)("h3",{id:"archive"},"Archive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," docker run --rm \\\n    -v /path/to/data:/data:rw \\\n    --network host \\\n    --label=project=flow \\\n    --label=network=mainnet\n    --label=app=dps\n    --label=version=v0.26\n    --name flow-dps gcr.io/flow-container-registry/flow-dps-live:v0.26.1\n    --address 0.0.0.0:5005\n    --index /data/index\n    --bootstrap /data/bootstrap\n    --checkpoint /data/bootstrap/root.checkpoint\n    --data /data/protocol\n    --level debug\n    --metrics 0.0.0.0:8080\n    --bucket bucket_name\n    --seed-address=access_node_address\n    --seed-key=seed_key\n")),(0,a.kt)("h2",{id:"start-the-node"},"Start the Node"),(0,a.kt)("p",null,"Now that your node is provisioned and configured, it can be started."),(0,a.kt)(c,{type:"warning",mdxType:"Callout"},(0,a.kt)("p",null,"Before starting your node, ensure it is ",(0,a.kt)("a",{parentName:"p",href:"node-bootstrap#step-2---stake-your-node"},"registered")," and ",(0,a.kt)("a",{parentName:"p",href:"node-bootstrap#confirming-authorization"},"authorized"),".")),(0,a.kt)("p",null,"Ensure you start your node at the appropriate time.\nSee ",(0,a.kt)("a",{parentName:"p",href:"spork"},"Spork Process")," for when to start up a node following a spork.\nSee ",(0,a.kt)("a",{parentName:"p",href:"node-bootstrap#timing"},"Node Bootstrap")," for when to start up a newly registered node."),(0,a.kt)("h3",{id:"systemd-1"},"Systemd"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Check that your ",(0,a.kt)("inlineCode",{parentName:"li"},"runtime-conf.env")," is at ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/flow/runtime-conf.env")),(0,a.kt)("li",{parentName:"ol"},"Update your environment variables: ",(0,a.kt)("inlineCode",{parentName:"li"},"source /etc/flow/runtime-conf.env")),(0,a.kt)("li",{parentName:"ol"},"Start your service: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo systemctl start flow"))),(0,a.kt)("h2",{id:"verify-your-node-is-running"},"Verify your Node is Running"),(0,a.kt)("p",null,"Here are a few handy commands that you can use to check if your Flow node is up and running"),(0,a.kt)("h3",{id:"systemd-2"},"Systemd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get Flow logs: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo journalctl -u flow-YOUR_ROLE")),(0,a.kt)("li",{parentName:"ul"},"To get the status: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo systemctl status flow"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u25cf flow-verification.service - Flow Access Node running with Docker\nLoaded: loaded (/etc/systemd/system/flow-verification.service; enabled; vendor preset: enabled)\nActive: active (running) since Wed 2020-05-20 18:18:13 UTC; 1 day 6h ago\nProcess: 3207 ExecStartPre=/usr/bin/docker pull gcr.io/flow-container-registry/verification:${FLOW_GO_NODE_VERSION} (code=exited, status=0/SUCCESS)\nMain PID: 3228 (docker)\nTasks: 10 (limit: 4915)\nMemory: 33.0M\nCGroup: /system.slice/flow-verification.service\n        \u2514\u25003228 /usr/bin/docker run --rm -v /var/flow/bootstrap:/bootstrap:ro -v /var/flow/data:/data:rw --rm --name flow-go --network host gcr.io/flow-container-registry/verification:candidate8 --nodeid=489f8a4513d5bd8b8b093108fec00327b683db545b37b4ea9153f61b2c0c49dc --bootstrapdir=/bootstrap --datadir=/data/protocol --alpha=1 --bind 0.0.0.0:3569 --loglevel=error\n")),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get Flow logs: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo docker logs flow-go")),(0,a.kt)("li",{parentName:"ul"},"To get the status: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo docker ps"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ sudo docker ps\nCONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES\n1dc5d43385b6 gcr.io/flow-container-registry/verification:candidate8 \\"/bin/app --nodeid=4\u2026\\" 30 hours ago Up 30 hours flow-go\n')),(0,a.kt)("h2",{id:"monitoring-and-metrics"},"Monitoring and Metrics"),(0,a.kt)("p",null,"This is intended for operators who would like to see what their Flow nodes are currently doing. Head over to ",(0,a.kt)("a",{parentName:"p",href:"monitoring-nodes"},"Monitoring Node Health")," to get setup."),(0,a.kt)("h3",{id:"node-status"},"Node Status"),(0,a.kt)("p",null,"The metrics for the node should be able to provide a good overview of the status of the node. If we want to get a quick snapshot of the status of the node, and if it's properly participating in the network, you can check the ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus_compliance_finalized_height")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus_compliance_sealed_height")," metric, and ensure that it is not zero and strictly increasing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl localhost:8080/metrics | grep consensus_compliance_sealed_height\n\n# HELP consensus_compliance_sealed_height the last sealed height\n# TYPE consensus_compliance_sealed_height gauge\nconsensus_compliance_sealed_height 1.132054e+06\n")))}h.isMDXComponent=!0}}]);