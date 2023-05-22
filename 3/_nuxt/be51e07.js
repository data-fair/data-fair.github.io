(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{684:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","lessons":"Tutoriels","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null,"printChapter":"Imprimez ce chapitre en entier"}}'),delete e.options._Ctor}},685:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","lessons":"Tutorials","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being","printChapter":"Print this chapter"}}'),delete e.options._Ctor}},688:function(e,t,n){},689:function(e,t,n){"use strict";n.r(t);n(6),n(8),n(10),n(11),n(27),n(17),n(16),n(41),n(40),n(34);var o=n(13),r=n(3),l=(n(56),n(44),n(39),n(74),n(7),n(45));n(697);function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw r}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=n(698),h=n(354),E=new f.Renderer;E.defaultCode=E.code,E.code=function(code,e){if("mermaid"===e){0;var t=(Math.random()+"").replace("0.","");return window.sessionStorage.setItem("mermaid-"+t,code),'<iframe class="mermaid-iframe" id="mermaid-iframe-'.concat(t,'" frameborder="0" scrolling="no" style="width:100%" src="').concat("/3/","mermaid?key=").concat(t,'"></iframe>')}return this.defaultCode(code,e)},f.use({renderer:E}),n(699);var v={props:["content","onlyEnglish","onlyFrench","hideTitle"],data:function(){return{ready:!1}},computed:d(d(d({},Object(l.c)(["env"])),Object(l.b)(["navContent"])),{},{filledContent:function(){var content=h(this.content);return content.html=f.parse(content.markdown).replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content},breadcrumbs:function(){var e=this,t=this.$route.path.split("/")[1],n=this.navContent(this.$i18n.locale),o=n.find((function(s){return s.chapter===t&&(s.section||null)===(e.filledContent.meta.section||null)&&(s.subsection||null)===(e.filledContent.meta.subsection||null)})),r=[];if(o&&(r.push(this.$t(o.chapter)),o.section)){var l=n.find((function(s){return s.chapter===t&&s.section===o.section&&!s.subsection}));if(r.push(l.title),o.subsection){var c=n.find((function(s){return s.chapter===t&&s.section===o.section&&s.subsection===o.subsection}));r.push(c.title)}}return r}}),mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,iframe,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=c(e.$el.querySelectorAll(".mermaid-iframe"));try{for(n.s();!(o=n.n()).done;)iframe=o.value,window.iFrameResize({},"#"+iframe.id)}catch(e){n.e(e)}finally{n.f()}r={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]},Object.keys(r).forEach((function(t){e.$el.querySelectorAll(t).forEach((function(e){r[t].forEach((function(t){return e.classList.add(t)}))}))})),e.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),e.ready=!0;case 6:case"end":return t.stop()}}),t)})))()}},S=(n(691),n(49)),T=n(692),A=n(693),y=n(65),O=n.n(y),R=n(734),I=n(713),j=n(700),k=n(714),component=Object(S.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"doc-page px-0"},[n("div",{staticClass:"hidden-breadcrumb section-title"},[e._v("\n    "+e._s(e.breadcrumbs.slice(0,e.breadcrumbs.length-1).join(" / "))+"\n  ")]),e._v(" "),n("v-row",[n("v-col",[e.hideTitle?e._e():n("h1",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyFrench&&"fr"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof T.default&&Object(T.default)(component),"function"==typeof A.default&&Object(A.default)(component);t.default=component.exports;O()(component,{VAlert:R.a,VCol:I.a,VContainer:j.a,VRow:k.a})},691:function(e,t,n){"use strict";n(688)},692:function(e,t,n){"use strict";var o=n(684),r=n.n(o);t.default=r.a},693:function(e,t,n){"use strict";var o=n(685),r=n.n(o);t.default=r.a},724:function(e,t){function n(e){return e&&e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function o(e){return e}function r(e,t){const r=(t=t||{}).delimiter||".",l=t.maxDepth,c=t.transformKey||o,output={};return function e(object,o,m){m=m||1,Object.keys(object).forEach((function(_){const d=object[_],f=t.safe&&Array.isArray(d),h=Object.prototype.toString.call(d),E=n(d),v="[object Object]"===h||"[object Array]"===h,S=o?o+r+c(_):c(_);if(!f&&!E&&v&&Object.keys(d).length&&(!t.maxDepth||m<l))return e(d,S,m+1);output[S]=d}))}(e),output}e.exports=r,r.flatten=r,r.unflatten=function e(t,l){const c=(l=l||{}).delimiter||".",m=l.overwrite||!1,_=l.transformKey||o,d={};if(n(t)||"[object Object]"!==Object.prototype.toString.call(t))return t;function f(e){const t=Number(e);return isNaN(t)||-1!==e.indexOf(".")||l.object?e:t}return t=Object.keys(t).reduce((function(e,n){const o=Object.prototype.toString.call(t[n]);return!("[object Object]"===o||"[object Array]"===o)||function(e){const t=Object.prototype.toString.call(e),n="[object Array]"===t,o="[object Object]"===t;if(!e)return!0;if(n)return!e.length;if(o)return!Object.keys(e).length}(t[n])?(e[n]=t[n],e):function(e,t,n){return Object.keys(n).reduce((function(t,o){return t[e+c+o]=n[o],t}),t)}(n,e,r(t[n],l))}),{}),Object.keys(t).forEach((function(n){const o=n.split(c).map(_);let r=f(o.shift()),h=f(o[0]),E=d;for(;void 0!==h;){if("__proto__"===r)return;const e=Object.prototype.toString.call(E[r]),t="[object Object]"===e||"[object Array]"===e;if(!m&&!t&&void 0!==E[r])return;(m&&!t||!m&&null==E[r])&&(E[r]="number"!=typeof h||l.object?{}:[]),E=E[r],o.length>0&&(r=f(o.shift()),h=f(o[0]))}E[r]=e(t[n],l)})),d}},725:function(e,t,n){var map={"./config.md":400,"./install.md":401};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=725},726:function(e,t,n){e.exports={mode:"server_worker",port:8080,listenWhenReady:!1,publicUrl:"http://localhost:8080",oldPublicUrl:"",wsPublicUrl:"ws://localhost:8080",dataDir:"/data",sessionDomain:null,directoryUrl:"http://localhost:8080",privateDirectoryUrl:null,openapiViewerUrl:"https://koumoul.com/openapi-viewer/",captureUrl:"http://capture:8080",privateCaptureUrl:null,notifyUrl:null,privateNotifyUrl:null,notifyWSUrl:null,subscriptionUrl:null,pluginsDir:"./plugins",mongo:{url:"mongodb://localhost:27017/data-fair-production",maxBulkOps:1e3},map:{style:"./api/v1/remote-services/tileserver-koumoul/proxy/styles/klokantech-basic/style.json",beforeLayer:"poi_label"},elasticsearch:{host:"localhost:9200",defaultAnalyzer:"french",maxBulkLines:2e3,maxBulkChars:2e5,requestTimeout:24e4,maxShardSize:1e10,nbReplicas:1,maxPageSize:1e4},indicesPrefix:"dataset-production",info:{termsOfService:"",contact:{name:"",url:""}},brand:{logo:null,title:"Data Fair",description:"Find, Access, Interoperate, Reuse data on the Web",url:null,embed:null},theme:{dark:!1,colors:{primary:"#1E88E5",secondary:"#42A5F5",accent:"#FF9800",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#E91E63",admin:"#E53935"},darkColors:{primary:"#2196F3",success:"#00E676"},cssUrl:null,cssText:""},darkModeSwitch:!0,defaultLimits:{totalStorage:-1,totalIndexed:-1,datasetStorage:-1,datasetIndexed:-1,nbDatasets:-1,attachmentStorage:1e8,attachmentIndexed:5e6,apiRate:{anonymous:{duration:5,nb:100,bandwidth:{dynamic:5e5,static:2e6}},user:{duration:1,nb:100,bandwidth:{dynamic:1e6,static:4e6}},remoteService:{duration:5,nb:100,bandwidth:{dynamic:5e5}}},hideBrand:0,maxSpreadsheetSize:5e7},worker:{interval:500,inactiveInterval:4e3,inactivityDelay:6e4,concurrency:4,spawnTask:!0},adminRole:"admin",contribRole:"contrib",userRole:"user",secretKeys:{identities:null,limits:null,notifications:null},globalWebhooks:{consumption:[]},locks:{ttl:60},datasetStateRetries:{interval:500,nb:20},cache:{publicMaxAge:300,timestampedPublicMaxAge:604800,mongoSize:2e3},analytics:{},browserLogLevel:"error",nuxtDev:!1,licenses:[{title:"Licence Ouverte / Open Licence",href:"https://www.etalab.gouv.fr/licence-ouverte-open-licence"},{title:"Open Database License (ODbL)",href:"http://opendatacommons.org/licenses/odbl/summary/"}],applicationsDirectories:["https://koumoul.com/apps/","https://staging-koumoul.com/apps/","https://koumoul-dev.github.io/","https://data-fair.github.io/","https://cdn.jsdelivr.net/npm/@koumoul/","https://cdn.jsdelivr.net/npm/@data-fair/","https://cdn.jsdelivr.net/npm/iframe-resizer"],applications:[{url:"https://koumoul.com/apps/infos-parcelles/2.7/"},{url:"https://koumoul.com/apps/infos-loc/0.10/"},{url:"https://cdn.jsdelivr.net/npm/@data-fair/app-charts@0.10/dist/"},{url:"https://koumoul.com/apps/word-cloud/0.3/"},{url:"https://koumoul.com/apps/sankey/0.5/"},{url:"https://koumoul.com/apps/sunburst/0.2/"},{url:"https://koumoul.com/apps/data-fair-networks/0.1/"},{url:"https://koumoul.com/apps/list-details/0.4/"},{url:"https://koumoul.com/apps/carto-stats/0.6/"},{url:"https://koumoul.com/apps/data-fair-series/0.2/"},{url:"https://koumoul.com/apps/bar-chart-race/0.2/"},{url:"https://koumoul.com/apps/data-fair-geo-shapes/0.1/"},{url:"https://koumoul.com/apps/scdl-deliberations/0.1/"},{url:"https://koumoul.com/apps/scdl-equipements/0.1/"},{url:"https://koumoul.com/apps/data-fair-events/1.0/"},{url:"https://koumoul.com/apps/atelier-carto/1.0/"},{url:"https://koumoul.com/apps/admin-divs-levels/0.3/"},{url:"https://koumoul.com/apps/data-fair-proportions/0.2/"},{url:"https://cdn.jsdelivr.net/npm/@data-fair/app-carousel@0.2/dist/"},{url:"https://koumoul.com/apps/data-fair-form/1.0/"},{url:"https://koumoul.com/apps/data-fair-radar/0.1/"},{url:"https://koumoul.com/apps/data-fair-locate-game/0.1/"},{url:"https://koumoul.com/apps/data-fair-quizz/0.1/"},{url:"https://koumoul.com/apps/data-fair-sort-game/0.1/"},{url:"https://koumoul.com/apps/data-fair-relations/0.2/"},{url:"https://koumoul.com/apps/app-table/0.1/"},{url:"https://koumoul.com/apps/data-fair-table/0.1/"},{url:"https://koumoul.com/apps/app-treemap/0.2/"},{url:"https://koumoul.com/apps/admin-divs-catchment/0.1/"}],applicationsPrivateMapping:["",""],baseAppsCategories:["carte","graphique","textuelle","SCDL"],remoteServices:[{title:"Données Entreprises",url:"https://koumoul.com/s/sirene/api-docs.json"},{title:"Géocoder",url:"https://koumoul.com/s/geocoder/api/v1/api-docs.json"},{title:"Cadastre",url:"https://koumoul.com/s/cadastre/api-docs.json"},{title:"Service de données cartographiques",url:"https://koumoul.com/s/tileserver/api/v1/api-docs.json"}],remoteServicesPrivateMapping:["",""],catalogs:[{title:"Data.gouv.fr",href:"https://www.data.gouv.fr",logo:"https://static.data.gouv.fr/_themes/gouvfr/img/logo-header.svg"}],defaultRemoteKey:{in:"header",name:"x-apiKey",value:null},remoteTimeout:1e4,disableSharing:!1,disableApplications:!1,disableRemoteServices:!1,disablePublicationSites:!1,proxyNuxt:!1,ogr2ogr:{skip:!1,timeout:36e4},extraNavigationItems:[],extraAdminNavigationItems:[],dateFormats:["D/M/YYYY","D/M/YY","YYYY/M/D"],dateTimeFormats:["D/M/YYYY H:m","D/M/YY H:m","D/M/YYYY, H:m","D/M/YY, H:m","D/M/YYYY H:m:s","D/M/YY H:m:s","D/M/YYYY, H:m:s","D/M/YY, H:m:s","YYYY-MM-DDTHH:mm:ss","YYYY-MM-DD HH:mm:ss"],defaultTimeZone:"Europe/Paris",i18n:{locales:"fr,en",defaultLocale:"fr"},exportRestDatasets:{cron:"0 6 * * 0"},prometheus:{active:!0,port:9090},agentkeepaliveOptions:{maxSockets:128,maxFreeSockets:128,timeout:6e4,freeSocketTimeout:3e4}}},727:function(e,t){e.exports={}},728:function(e,t){e.exports={port:"PORT",mode:"MODE",publicUrl:"PUBLIC_URL",oldPublicUrl:"OLD_PUBLIC_URL",wsPublicUrl:"WS_PUBLIC_URL",sessionDomain:"SESSION_DOMAIN",directoryUrl:"DIRECTORY_URL",privateDirectoryUrl:"PRIVATE_DIRECTORY_URL",openapiViewerUrl:"OPENAPI_VIEWER_URL",captureUrl:"CAPTURE_URL",privateCaptureUrl:"PRIVATE_CAPTURE_URL",notifyUrl:"NOTIFY_URL",privateNotifyUrl:"PRIVATE_NOTIFY_URL",notifyWSUrl:"NOTIFY_WS_URL",subscriptionUrl:"SUBSCRIPTION_URL",mongo:{url:"MONGO_URL",maxBulkOps:{__name:"MONGO_MAX_BULK_OPS",__format:"json"}},cache:{publicMaxAge:{__name:"CACHE_PUBLIC_MAX_AGE",__format:"json"},timestampedPublicMaxAge:{__name:"CACHE_TIMESTAMPED_PUBLIC_MAX_AGE",__format:"json"},mongoSize:{__name:"CACHE_MONGO_SIZE",__format:"json"}},analytics:{__name:"ANALYTICS",__format:"json"},elasticsearch:{host:"ES_HOST",defaultAnalyzer:"ES_DEFAULT_ANALYZER",maxBulkLines:{__name:"ES_MAX_BULK_LINES",__format:"json"},maxBulkChars:{__name:"ES_MAX_BULK_CHARS",__format:"json"},maxShardSize:{__name:"ES_MAX_SHARD_SIZE",__format:"json"},nbReplicas:{__name:"ES_NB_REPLICAS",__format:"json"}},secretKeys:{identities:"SECRET_IDENTITIES",limits:"SECRET_LIMITS",notifications:"SECRET_NOTIFICATIONS",masterData:"SECRET_MASTER_DATA"},globalWebhooks:{consumption:{__name:"WEBHOOKS_CONSUMPTION",__format:"json"}},brand:{logo:"BRAND_LOGO",title:"BRAND_TITLE",description:"BRAND_DESCRIPTION",url:"BRAND_URL",embed:"BRAND_EMBED"},theme:{dark:{__name:"THEME_DARK",__format:"json"},colors:{primary:"THEME_PRIMARY",secondary:"THEME_SECONDARY",accent:"THEME_ACCENT",error:"THEME_ERROR",info:"THEME_INFO",success:"THEME_SUCCESS",warning:"THEME_WARNING"},darkColors:{primary:"THEME_DARK_PRIMARY",secondary:"THEME_DARK_SECONDARY",accent:"THEME_DARK_ACCENT",error:"THEME_DARK_ERROR",info:"THEME_DARK_INFO",success:"THEME_DARK_SUCCESS",warning:"THEME_DARK_WARNING"},cssUrl:"THEME_CSS_URL",cssText:"THEME_CSS_TEXT"},darkModeSwitch:{__name:"DARK_MODE_SWITCH",__format:"json"},defaultLimits:{totalStorage:{__name:"DEFAULT_LIMITS_TOTAL_STORAGE",__format:"json"},totalIndexed:{__name:"DEFAULT_LIMITS_TOTAL_INDEXED",__format:"json"},datasetStorage:{__name:"DEFAULT_LIMITS_DATASET_STORAGE",__format:"json"},datasetIndexed:{__name:"DEFAULT_LIMITS_DATASET_INDEXED",__format:"json"},nbDatasets:{__name:"DEFAULT_LIMITS_NB_DATASETS",__format:"json"},maxSpreadsheetSize:{__name:"DEFAULT_LIMITS_MAX_SPREADSHEET_SIZE",__format:"json"}},worker:{interval:{__name:"WORKER_INTERVAL",__format:"json"},concurrency:{__name:"WORKER_CONCURRENCY",__format:"json"},spawnTask:{__name:"WORKER_SPAWN_TASK",__format:"json"}},browserLogLevel:"BROWSER_LOG_LEVEL",listenWhenReady:{__name:"LISTEN_WHEN_READY",__format:"json"},applications:{__name:"APPLICATIONS",__format:"json"},applicationsPrivateMapping:{__name:"APPLICATIONS_PRIVATE_MAPPING",__format:"json"},applicationsDirectories:{__name:"APPLICATIONS_DIRECTORIES",__format:"json"},baseAppsCategories:{__name:"BASE_APPS_CATEGORIES",__format:"json"},remoteServices:{__name:"REMOTE_SERVICES",__format:"json"},remoteServicesPrivateMapping:{__name:"REMOTE_SERVICES_PRIVATE_MAPPING",__format:"json"},defaultRemoteKey:{value:"DEFAULT_REMOTE_KEY"},catalogs:{__name:"CATALOGS",__format:"json"},disableSharing:{__name:"DISABLE_SHARING",__format:"json"},disableApplications:{__name:"DISABLE_APPLICATIONS",__format:"json"},disableRemoteServices:{__name:"DISABLE_REMOTE_SERVICES",__format:"json"},disablePublicationSites:{__name:"DISABLE_PUBLICATION_SITES"},info:{termsOfService:"INFO_TOS",contact:{__name:"INFO_CONTACT",__format:"json"}},ogr2ogr:{skip:{__name:"OGR2OGR_SKIP",__format:"json"},timeout:{__name:"OGR2OGR_TIMEOUT",__format:"json"}},extraNavigationItems:{__name:"EXTRA_NAV_ITEMS",__format:"json"},extraAdminNavigationItems:{__name:"EXTRA_ADMIN_NAV_ITEMS",__format:"json"},dateFormats:{__name:"DATE_FORMATS",__format:"json"},dateTimeFormats:{__name:"DATE_TIME_FORMATS",__format:"json"},defaultTimeZone:"DEFAULT_TIME_ZONE",i18n:{locales:"I18N_LOCALES",defaultLocale:"I18N_DEFAULT_LOCALE"},prometheus:{active:{__name:"PROMETHEUS_ACTIVE",__format:"json"},port:"PROMETHEUS_PORT"},agentkeepaliveOptions:{__name:"AGENTKEEPALIVE_OPTIONS",__format:"json"},exportRestDatasets:{cron:"EXPORT_REST_DATASETS_CRON"}}},746:function(e,t,n){"use strict";n.r(t);var o=n(15),r=(n(7),n(39),n(44),n(16),n(689)),l=n(724),c=n(725),m=Object.assign({},n(726),n(727));var _=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object.keys(t).forEach((function(l){var c=r+l,_=c.split(".").reduce((function(a,e){return a[e]}),m);"object"===Object(o.a)(_)&&(_=JSON.stringify(_)),"string"==typeof t[l]?n.push({key:c,name:t[l],def:_}):"object"===Object(o.a)(t[l])&&t[l].__name?n.push({key:c,name:t[l].__name,def:_}):e(t[l],n,r+l+".")})),n}(n(728)),d=l({mode:'Use this parameter to run both the Web server and the dataset processing loop or run them separately. Pissible values: "server_worker", "server", "worker".',publicUrl:"<b>IMPORTANT.</b> The URL where the server will be exposed. For example https://koumoul.com/data-fair",wsPublicUrl:"<b>IMPORTANT.</b> The URL where the Web socket server will be exposed. For example wss://koumoul.com/data-fair",directoryUrl:"<b>IMPORTANT.</b> The URL where the user management service will be exposed. For example https://koumoul.com/s/simple-directory",mongoUrl:"The full connexion chain to the mongodb database.",analytics:'JSON configuration of analytics, matches the "modules" part of the configuration for this library <a href="https://github.com/koumoul-dev/vue-multianalytics#modules">vue-multianalytics</a>',elasticsearch:{maxBulkLines:"Maximum number of lines when sending indexing in bulk into ElasticSearch.",maxBulkChars:"Maximum number of chars when sending indexing in bulk into ElasticSearch."},defaultRemoteKey:{value:"Default API key to use when calling remote services."},brand:{logo:"A link to an image with your logo.",title:"The name of your organization or another name for the service.",url:"A link to use on the top left logo."},worker:{concurrency:"Number of tasks processes in parallel. Tasks are all asynchronous processings on datasets (file format analysis, indexing, extending, etc.)"},i18n:{locales:"List of locales split by commas"}}),f={components:{DocPage:r.default},computed:{content:function(){if(this.$route){var content=c("./".concat(this.$route.params.id,".md"))||c("./".concat(this.$route.params.id,".md"));return content.default.replace("{{CONFIG_VARS}}",this.configVars).replace(/{{DOC_BASE}}/g,this.$router.options.base)}},configVars:function(){var table="<table><thead><tr><th>Key in config file</th><th>Env variable</th><th>Description</th><th>Default value</th></tr></thead><tbody>\n";return _.forEach((function(e){var t=d[e.key]||"";table+="<tr><td>".concat(e.key,"</td><td>").concat(e.name,"</td><td>").concat(t,"</td><td>").concat(e.def,"</td></tr>\n")})),table+="</tbody></table>"}}},h=n(49),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("doc-page",{attrs:{content:e.content,"only-english":!0}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DocPage:n(689).default})}}]);