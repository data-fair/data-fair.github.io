(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4],{674:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","lessons":"Tutoriels","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}'),delete e.options._Ctor}},675:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","lessons":"Tutorials","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete e.options._Ctor}},678:function(e,t,o){},679:function(e,t,o){"use strict";o.r(t);o(6),o(8),o(11),o(12),o(26),o(16),o(17),o(39),o(37),o(33);var r=o(13),n=o(3),l=(o(55),o(43),o(7),o(56));o(687);function c(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,n=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw n}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=o(688),h=o(351),E=new d.Renderer;E.defaultCode=E.code,E.code=function(code,e){if("mermaid"===e){0;var t=(Math.random()+"").replace("0.","");return window.sessionStorage.setItem("mermaid-"+t,code),'<iframe class="mermaid-iframe" id="mermaid-iframe-'.concat(t,'" frameborder="0" scrolling="no" style="width:100%" src="').concat("/master/","mermaid?key=").concat(t,'"></iframe>')}return this.defaultCode(code,e)},d.use({renderer:E}),o(689);var y={props:["content","onlyEnglish","onlyFrench","hideTitle"],data:function(){return{ready:!1}},computed:f(f({},Object(l.b)(["env"])),{},{filledContent:function(){var content=h(this.content);return content.html=d.parse(content.markdown).replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,iframe,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=c(e.$el.querySelectorAll(".mermaid-iframe"));try{for(o.s();!(r=o.n()).done;)iframe=r.value,window.iFrameResize({},"#"+iframe.id)}catch(e){o.e(e)}finally{o.f()}n={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]},Object.keys(n).forEach((function(t){e.$el.querySelectorAll(t).forEach((function(e){n[t].forEach((function(t){return e.classList.add(t)}))}))})),e.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),e.ready=!0;case 6:case"end":return t.stop()}}),t)})))()}},v=(o(681),o(47)),T=o(682),S=o(683),A=o(65),O=o.n(A),R=o(725),I=o(703),k=o(691),j=o(704),component=Object(v.a)(y,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{staticClass:"doc-page"},[o("v-row",[o("v-col",[e.hideTitle?e._e():o("h2",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?o("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?o("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyFrench&&"fr"!==e.$i18n.locale?o("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof T.default&&Object(T.default)(component),"function"==typeof S.default&&Object(S.default)(component);t.default=component.exports;O()(component,{VAlert:R.a,VCol:I.a,VContainer:k.a,VRow:j.a})},681:function(e,t,o){"use strict";o(678)},682:function(e,t,o){"use strict";var r=o(674),n=o.n(r);t.default=n.a},683:function(e,t,o){"use strict";var r=o(675),n=o.n(r);t.default=n.a},715:function(e,t){function o(e){return e&&e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return e}function n(e,t){const n=(t=t||{}).delimiter||".",l=t.maxDepth,c=t.transformKey||r,output={};return function e(object,r,m){m=m||1,Object.keys(object).forEach((function(_){const f=object[_],d=t.safe&&Array.isArray(f),h=Object.prototype.toString.call(f),E=o(f),y="[object Object]"===h||"[object Array]"===h,v=r?r+n+c(_):c(_);if(!d&&!E&&y&&Object.keys(f).length&&(!t.maxDepth||m<l))return e(f,v,m+1);output[v]=f}))}(e),output}e.exports=n,n.flatten=n,n.unflatten=function e(t,l){const c=(l=l||{}).delimiter||".",m=l.overwrite||!1,_=l.transformKey||r,f={};if(o(t)||"[object Object]"!==Object.prototype.toString.call(t))return t;function d(e){const t=Number(e);return isNaN(t)||-1!==e.indexOf(".")||l.object?e:t}return t=Object.keys(t).reduce((function(e,o){const r=Object.prototype.toString.call(t[o]);return!("[object Object]"===r||"[object Array]"===r)||function(e){const t=Object.prototype.toString.call(e),o="[object Array]"===t,r="[object Object]"===t;if(!e)return!0;if(o)return!e.length;if(r)return!Object.keys(e).length}(t[o])?(e[o]=t[o],e):function(e,t,o){return Object.keys(o).reduce((function(t,r){return t[e+c+r]=o[r],t}),t)}(o,e,n(t[o],l))}),{}),Object.keys(t).forEach((function(o){const r=o.split(c).map(_);let n=d(r.shift()),h=d(r[0]),E=f;for(;void 0!==h;){if("__proto__"===n)return;const e=Object.prototype.toString.call(E[n]),t="[object Object]"===e||"[object Array]"===e;if(!m&&!t&&void 0!==E[n])return;(m&&!t||!m&&null==E[n])&&(E[n]="number"!=typeof h||l.object?{}:[]),E=E[n],r.length>0&&(n=d(r.shift()),h=d(r[0]))}E[n]=e(t[o],l)})),f}},716:function(e,t,o){var map={"./config.md":397,"./install.md":398};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=n,e.exports=r,r.id=716},717:function(e,t,o){e.exports={mode:"server_worker",port:8080,listenWhenReady:!1,publicUrl:"http://localhost:8080",oldPublicUrl:"",wsPublicUrl:"ws://localhost:8080",dataDir:"/data",sessionDomain:null,directoryUrl:"http://localhost:8080",privateDirectoryUrl:null,openapiViewerUrl:"https://koumoul.com/openapi-viewer/",captureUrl:"http://capture:8080",privateCaptureUrl:null,notifyUrl:null,privateNotifyUrl:null,notifyWSUrl:null,subscriptionUrl:null,pluginsDir:"./plugins",mongo:{url:"mongodb://localhost:27017/data-fair-production",maxBulkOps:1e3},map:{style:"./api/v1/remote-services/tileserver-koumoul/proxy/styles/klokantech-basic/style.json",beforeLayer:"poi_label"},elasticsearch:{host:"localhost:9200",defaultAnalyzer:"french",maxBulkLines:2e3,maxBulkChars:2e5,requestTimeout:24e4,maxShardSize:1e10,nbReplicas:1,maxPageSize:1e4},indicesPrefix:"dataset-production",info:{termsOfService:"",contact:{name:"",url:""}},brand:{logo:null,title:"Data Fair",description:"Find, Access, Interoperate, Reuse data on the Web",url:null,embed:null},theme:{dark:!1,colors:{primary:"#1E88E5",secondary:"#42A5F5",accent:"#FF9800",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#E91E63",admin:"#E53935"},darkColors:{primary:"#2196F3",success:"#00E676"},cssUrl:null,cssText:""},darkModeSwitch:!0,defaultLimits:{totalStorage:-1,totalIndexed:-1,datasetStorage:-1,datasetIndexed:-1,nbDatasets:-1,attachmentStorage:1e8,attachmentIndexed:5e6,apiRate:{anonymous:{duration:5,nb:100,bandwidth:{dynamic:5e5,static:2e6}},user:{duration:1,nb:100,bandwidth:{dynamic:1e6,static:4e6}},remoteService:{duration:5,nb:100,bandwidth:{dynamic:5e5}}},hideBrand:0,maxSpreadsheetSize:5e7},worker:{interval:500,inactiveInterval:4e3,inactivityDelay:6e4,concurrency:4,spawnTask:!0},adminRole:"admin",contribRole:"contrib",userRole:"user",secretKeys:{identities:null,limits:null,notifications:null},globalWebhooks:{consumption:[]},locks:{ttl:60},datasetStateRetries:{interval:500,nb:20},cache:{publicMaxAge:300,timestampedPublicMaxAge:604800,mongoSize:2e3},analytics:{},browserLogLevel:"error",thumbor:{url:"http://thumbor:8000",key:"thumborkey"},nuxtDev:!1,licenses:[{title:"Licence Ouverte / Open Licence",href:"https://www.etalab.gouv.fr/licence-ouverte-open-licence"},{title:"Open Database License (ODbL)",href:"https://spdx.org/licenses/ODbL-1.0.html#licenseText"}],applicationsDirectories:["https://koumoul.com/apps/","https://staging-koumoul.com/apps/","https://koumoul-dev.github.io/","https://data-fair.github.io/","https://cdn.jsdelivr.net/npm/@koumoul/","https://cdn.jsdelivr.net/npm/@data-fair/","https://cdn.jsdelivr.net/npm/iframe-resizer"],applications:[{url:"https://koumoul.com/apps/infos-parcelles/2.7/"},{url:"https://koumoul.com/apps/infos-loc/0.10/"},{url:"https://cdn.jsdelivr.net/npm/@data-fair/app-charts@0.10/dist/"},{url:"https://koumoul.com/apps/word-cloud/0.3/"},{url:"https://koumoul.com/apps/sankey/0.5/"},{url:"https://koumoul.com/apps/sunburst/0.2/"},{url:"https://koumoul.com/apps/data-fair-networks/0.1/"},{url:"https://koumoul.com/apps/list-details/0.4/"},{url:"https://koumoul.com/apps/carto-stats/0.6/"},{url:"https://koumoul.com/apps/data-fair-series/0.2/"},{url:"https://koumoul.com/apps/bar-chart-race/0.2/"},{url:"https://koumoul.com/apps/data-fair-geo-shapes/0.1/"},{url:"https://koumoul.com/apps/scdl-deliberations/0.1/"},{url:"https://koumoul.com/apps/scdl-equipements/0.1/"},{url:"https://koumoul.com/apps/data-fair-events/1.0/"},{url:"https://koumoul.com/apps/atelier-carto/1.0/"},{url:"https://koumoul.com/apps/admin-divs-levels/0.3/"},{url:"https://koumoul.com/apps/data-fair-proportions/0.2/"},{url:"https://cdn.jsdelivr.net/npm/@data-fair/app-carousel@0.2/dist/"},{url:"https://koumoul.com/apps/data-fair-form/1.0/"},{url:"https://koumoul.com/apps/data-fair-radar/0.1/"},{url:"https://koumoul.com/apps/data-fair-locate-game/0.1/"},{url:"https://koumoul.com/apps/data-fair-quizz/0.1/"},{url:"https://koumoul.com/apps/data-fair-sort-game/0.1/"},{url:"https://koumoul.com/apps/data-fair-relations/0.2/"},{url:"https://koumoul.com/apps/app-table/0.1/"},{url:"https://koumoul.com/apps/data-fair-table/0.1/"},{url:"https://koumoul.com/apps/app-treemap/0.2/"},{url:"https://koumoul.com/apps/admin-divs-catchment/0.1/"}],baseAppsCategories:["carte","graphique","textuelle","SCDL"],remoteServices:[{title:"Données Entreprises",url:"https://koumoul.com/s/sirene/api-docs.json"},{title:"Géocoder",url:"https://koumoul.com/s/geocoder/api/v1/api-docs.json"},{title:"Cadastre",url:"https://koumoul.com/s/cadastre/api-docs.json"},{title:"Service de données cartographiques",url:"https://koumoul.com/s/tileserver/api/v1/api-docs.json"}],catalogs:[{title:"Data.gouv.fr",href:"https://www.data.gouv.fr",logo:"https://static.data.gouv.fr/_themes/gouvfr/img/logo-header.svg"}],defaultRemoteKey:{in:"header",name:"x-apiKey",value:null},remoteTimeout:5e3,remoteServicesPrivateMapping:["",""],disableSharing:!1,disableApplications:!1,disableRemoteServices:!1,proxyNuxt:!1,ogr2ogr:{skip:!1,timeout:36e4},extraNavigationItems:[],extraAdminNavigationItems:[],dateFormats:["D/M/YYYY","D/M/YY","YYYY/M/D"],dateTimeFormats:["D/M/YYYY H:m","D/M/YY H:m","D/M/YYYY, H:m","D/M/YY, H:m","D/M/YYYY H:m:s","D/M/YY H:m:s","D/M/YYYY, H:m:s","D/M/YY, H:m:s","YYYY-MM-DDTHH:mm:ss","YYYY-MM-DD HH:mm:ss"],defaultTimeZone:"Europe/Paris",i18n:{locales:"fr,en",defaultLocale:"fr"},exportRestDatasets:{cron:"0 6 * * 0"},prometheus:{active:!0,port:9090}}},718:function(e,t){e.exports={}},719:function(e,t){e.exports={port:"PORT",mode:"MODE",publicUrl:"PUBLIC_URL",oldPublicUrl:"OLD_PUBLIC_URL",wsPublicUrl:"WS_PUBLIC_URL",sessionDomain:"SESSION_DOMAIN",directoryUrl:"DIRECTORY_URL",privateDirectoryUrl:"PRIVATE_DIRECTORY_URL",openapiViewerUrl:"OPENAPI_VIEWER_URL",captureUrl:"CAPTURE_URL",privateCaptureUrl:"PRIVATE_CAPTURE_URL",notifyUrl:"NOTIFY_URL",privateNotifyUrl:"PRIVATE_NOTIFY_URL",notifyWSUrl:"NOTIFY_WS_URL",subscriptionUrl:"SUBSCRIPTION_URL",mongo:{url:"MONGO_URL",maxBulkOps:{__name:"MONGO_MAX_BULK_OPS",__format:"json"}},cache:{publicMaxAge:{__name:"CACHE_PUBLIC_MAX_AGE",__format:"json"},timestampedPublicMaxAge:{__name:"CACHE_TIMESTAMPED_PUBLIC_MAX_AGE",__format:"json"},mongoSize:{__name:"CACHE_MONGO_SIZE",__format:"json"}},analytics:{__name:"ANALYTICS",__format:"json"},elasticsearch:{host:"ES_HOST",defaultAnalyzer:"ES_DEFAULT_ANALYZER",maxBulkLines:{__name:"ES_MAX_BULK_LINES",__format:"json"},maxBulkChars:{__name:"ES_MAX_BULK_CHARS",__format:"json"},maxShardSize:{__name:"ES_MAX_SHARD_SIZE",__format:"json"},nbReplicas:{__name:"ES_NB_REPLICAS",__format:"json"}},secretKeys:{identities:"SECRET_IDENTITIES",limits:"SECRET_LIMITS",notifications:"SECRET_NOTIFICATIONS",masterData:"SECRET_MASTER_DATA"},globalWebhooks:{consumption:{__name:"WEBHOOKS_CONSUMPTION",__format:"json"}},brand:{logo:"BRAND_LOGO",title:"BRAND_TITLE",description:"BRAND_DESCRIPTION",url:"BRAND_URL",embed:"BRAND_EMBED"},theme:{dark:{__name:"THEME_DARK",__format:"json"},colors:{primary:"THEME_PRIMARY",secondary:"THEME_SECONDARY",accent:"THEME_ACCENT",error:"THEME_ERROR",info:"THEME_INFO",success:"THEME_SUCCESS",warning:"THEME_WARNING"},darkColors:{primary:"THEME_DARK_PRIMARY",secondary:"THEME_DARK_SECONDARY",accent:"THEME_DARK_ACCENT",error:"THEME_DARK_ERROR",info:"THEME_DARK_INFO",success:"THEME_DARK_SUCCESS",warning:"THEME_DARK_WARNING"},cssUrl:"THEME_CSS_URL",cssText:"THEME_CSS_TEXT"},darkModeSwitch:{__name:"DARK_MODE_SWITCH",__format:"json"},defaultLimits:{totalStorage:{__name:"DEFAULT_LIMITS_TOTAL_STORAGE",__format:"json"},totalIndexed:{__name:"DEFAULT_LIMITS_TOTAL_INDEXED",__format:"json"},datasetStorage:{__name:"DEFAULT_LIMITS_DATASET_STORAGE",__format:"json"},datasetIndexed:{__name:"DEFAULT_LIMITS_DATASET_INDEXED",__format:"json"},nbDatasets:{__name:"DEFAULT_LIMITS_NB_DATASETS",__format:"json"},maxSpreadsheetSize:{__name:"DEFAULT_LIMITS_MAX_SPREADSHEET_SIZE",__format:"json"}},worker:{interval:{__name:"WORKER_INTERVAL",__format:"json"},concurrency:{__name:"WORKER_CONCURRENCY",__format:"json"},spawnTask:{__name:"WORKER_SPAWN_TASK",__format:"json"}},browserLogLevel:"BROWSER_LOG_LEVEL",listenWhenReady:{__name:"LISTEN_WHEN_READY",__format:"json"},thumbor:{url:"THUMBOR_URL",key:"THUMBOR_KEY"},applications:{__name:"APPLICATIONS",__format:"json"},applicationsDirectories:{__name:"APPLICATIONS_DIRECTORIES",__format:"json"},baseAppsCategories:{__name:"BASE_APPS_CATEGORIES",__format:"json"},remoteServices:{__name:"REMOTE_SERVICES",__format:"json"},defaultRemoteKey:{value:"DEFAULT_REMOTE_KEY"},remoteServicesPrivateMapping:{__name:"REMOTE_SERVICES_PRIVATE_MAPPING",__format:"json"},catalogs:{__name:"CATALOGS",__format:"json"},disableSharing:{__name:"DISABLE_SHARING",__format:"json"},disableApplications:{__name:"DISABLE_APPLICATIONS",__format:"json"},disableRemoteServices:{__name:"DISABLE_REMOTE_SERVICES",__format:"json"},info:{termsOfService:"INFO_TOS",contact:{__name:"INFO_CONTACT",__format:"json"}},ogr2ogr:{skip:{__name:"OGR2OGR_SKIP",__format:"json"},timeout:{__name:"OGR2OGR_TIMEOUT",__format:"json"}},extraNavigationItems:{__name:"EXTRA_NAV_ITEMS",__format:"json"},extraAdminNavigationItems:{__name:"EXTRA_ADMIN_NAV_ITEMS",__format:"json"},dateFormats:{__name:"DATE_FORMATS",__format:"json"},dateTimeFormats:{__name:"DATE_TIME_FORMATS",__format:"json"},defaultTimeZone:"DEFAULT_TIME_ZONE",i18n:{locales:"I18N_LOCALES",defaultLocale:"I18N_DEFAULT_LOCALE"},prometheus:{active:{__name:"PROMETHEUS_ACTIVE",__format:"json"},port:"PROMETHEUS_PORT"}}},738:function(e,t,o){"use strict";o.r(t);var r=o(15),n=(o(7),o(40),o(43),o(17),o(679)),l=o(715),c=o(716),m=Object.assign({},o(717),o(718));var _=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object.keys(t).forEach((function(l){var c=n+l,_=c.split(".").reduce((function(a,e){return a[e]}),m);"object"===Object(r.a)(_)&&(_=JSON.stringify(_)),"string"==typeof t[l]?o.push({key:c,name:t[l],def:_}):"object"===Object(r.a)(t[l])&&t[l].__name?o.push({key:c,name:t[l].__name,def:_}):e(t[l],o,n+l+".")})),o}(o(719)),f=l({mode:'Use this parameter to run both the Web server and the dataset processing loop or run them separately. Pissible values: "server_worker", "server", "worker".',publicUrl:"<b>IMPORTANT.</b> The URL where the server will be exposed. For example https://koumoul.com/data-fair",wsPublicUrl:"<b>IMPORTANT.</b> The URL where the Web socket server will be exposed. For example wss://koumoul.com/data-fair",directoryUrl:"<b>IMPORTANT.</b> The URL where the user management service will be exposed. For example https://koumoul.com/s/simple-directory",mongoUrl:"The full connexion chain to the mongodb database.",analytics:'JSON configuration of analytics, matches the "modules" part of the configuration for this library <a href="https://github.com/koumoul-dev/vue-multianalytics#modules">vue-multianalytics</a>',elasticsearch:{maxBulkLines:"Maximum number of lines when sending indexing in bulk into ElasticSearch.",maxBulkChars:"Maximum number of chars when sending indexing in bulk into ElasticSearch."},defaultRemoteKey:{value:"Default API key to use when calling remote services."},brand:{logo:"A link to an image with your logo.",title:"The name of your organization or another name for the service.",url:"A link to use on the top left logo."},worker:{concurrency:"Number of tasks processes in parallel. Tasks are all asynchronous processings on datasets (file format analysis, indexing, extending, etc.)"},i18n:{locales:"List of locales split by commas"}}),d={components:{DocPage:n.default},computed:{content:function(){if(this.$route){var content=c("./".concat(this.$route.params.id,".md"))||c("./".concat(this.$route.params.id,".md"));return content.default.replace("{{CONFIG_VARS}}",this.configVars).replace(/{{DOC_BASE}}/g,this.$router.options.base)}},configVars:function(){var table="<table><thead><tr><th>Key in config file</th><th>Env variable</th><th>Description</th><th>Default value</th></tr></thead><tbody>\n";return _.forEach((function(e){var t=f[e.key]||"";table+="<tr><td>".concat(e.key,"</td><td>").concat(e.name,"</td><td>").concat(t,"</td><td>").concat(e.def,"</td></tr>\n")})),table+="</tbody></table>"}}},h=o(47),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("doc-page",{attrs:{content:e.content,"only-english":!0}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DocPage:o(679).default})}}]);