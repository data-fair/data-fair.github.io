(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3],{621:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuide":"Manuel utilisateur","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration"}}'),delete e.options._Ctor}},622:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuide":"User guide","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure"}}'),delete e.options._Ctor}},623:function(e,t,o){},624:function(e,t,o){"use strict";o.r(t);o(6),o(7),o(10),o(11);var n=o(2),r=(o(43),o(8),o(55));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=o(346);o(631);var d={props:["content"],data:function(){return{ready:!1}},computed:c(c({},Object(r.b)(["env"])),{},{filledContent:function(){var content=m(this.content);return content.html=content.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var e=this,t={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(t).forEach((function(o){e.$el.querySelectorAll(o).forEach((function(e){t[o].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),this.ready=!0}},_=(o(625),o(49)),f=o(626),h=o(627),E=o(68),v=o.n(E),T=o(697),S=o(630),R=o(633),A=o(662),component=Object(_.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{staticClass:"doc-page"},[o("v-row",[o("v-col",[o("h2",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||this.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?o("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component),"function"==typeof h.default&&Object(h.default)(component);t.default=component.exports;v()(component,{VAlert:T.a,VCol:S.a,VContainer:R.a,VRow:A.a})},625:function(e,t,o){"use strict";o(623)},626:function(e,t,o){"use strict";var n=o(621),r=o.n(n);t.default=r.a},627:function(e,t,o){"use strict";var n=o(622),r=o.n(n);t.default=r.a},635:function(e,t,o){var map={"./config-en.md":376,"./config-fr.md":377,"./i18n-en.md":378,"./i18n-fr.md":379,"./install-en.md":380,"./install-fr.md":381};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=635},650:function(e,t,o){e.exports={mode:"server_worker",port:8080,listenWhenReady:!1,publicUrl:"http://localhost:8080",oldPublicUrl:"",wsPublicUrl:"ws://localhost:8080",dataDir:"/data",sessionDomain:null,directoryUrl:"http://localhost:8080",privateDirectoryUrl:"",openapiViewerUrl:"https://koumoul.com/openapi-viewer/",captureUrl:"http://capture:8080",privateCaptureUrl:null,notifyUrl:null,privateNotifyUrl:null,notifyWSUrl:null,subscriptionUrl:null,pluginsDir:"./plugins",mongoUrl:"mongodb://localhost:27017/data-fair-production",map:{style:"./api/v1/remote-services/tileserver-koumoul/proxy/styles/klokantech-basic/style.json",beforeLayer:"poi_label"},elasticsearch:{host:"localhost:9200",defaultAnalyzer:"french",maxBulkLines:2e3,maxBulkChars:2e5,requestTimeout:24e4,maxShardSize:1e10,nbReplicas:1},indicesPrefix:"dataset-production",info:{termsOfService:"https://koumoul.com/platform/term-of-service",contact:{name:"Koumoul",url:"https://koumoul.com",email:"support@koumoul.com"}},brand:{logo:null,title:"Data Fair",description:"Find, Access, Interoperate, Reuse data on the Web",url:null,embed:null},theme:{dark:!1,colors:{primary:"#1E88E5",secondary:"#42A5F5",accent:"#FF9800",error:"FF5252",info:"#2196F3",success:"#4CAF50",warning:"#E91E63",admin:"#E53935"},darkColors:{primary:"#2196F3",success:"#00E676"},cssUrl:null,cssText:""},darkModeSwitch:!0,defaultLimits:{totalStorage:-1,datasetStorage:-1,attachmentStorage:1e8,attachmentIndexed:5e6,remoteServiceRate:{duration:5,nb:100,kb:4e3},apiRate:{anonymous:{duration:5,nb:100,bandwidth:{dynamic:5e5,static:2e6}},user:{duration:1,nb:100,bandwidth:{dynamic:1e6,static:4e6}}},hideBrand:0,maxSpreadsheetSize:5e7},worker:{interval:500,inactiveInterval:4e3,inactivityDelay:6e4,releaseInterval:1e3,concurrency:4,spawnTask:!0},adminRole:"admin",contribRole:"contrib",userRole:"user",defaultRemoteKey:{in:"header",name:"x-apiKey",value:null},remoteTimeout:5e3,secretKeys:{identities:null,limits:null,notifications:null},globalWebhooks:{consumption:[]},locks:{ttl:60},cache:{publicMaxAge:20,timestampedPublicMaxAge:604800,size:1e3},analytics:{},browserLogLevel:"error",thumbor:{url:"http://localhost:8000",key:"thumborkey"},nuxtDev:!1,licenses:[{title:"Licence Ouverte / Open Licence",href:"https://www.etalab.gouv.fr/licence-ouverte-open-licence"},{title:"Open Database License (ODbL)",href:"https://spdx.org/licenses/ODbL-1.0.html#licenseText"}],applicationsDirectories:["https://koumoul.com/apps/","https://staging-koumoul.com/apps/","https://koumoul-dev.github.io/","https://data-fair.github.io/","https://cdn.jsdelivr.net/npm/@koumoul/","https://cdn.jsdelivr.net/npm/@data-fair/"],applications:[{url:"https://koumoul.com/apps/infos-parcelles/2.5/"},{url:"https://koumoul.com/apps/infos-loc/0.9/"},{url:"https://cdn.jsdelivr.net/npm/@data-fair/app-charts@0.10/dist/"},{url:"https://koumoul.com/apps/word-cloud/0.3/"},{url:"https://koumoul.com/apps/sankey/0.5/"},{url:"https://koumoul.com/apps/sunburst/0.2/"},{url:"https://koumoul.com/apps/data-fair-networks/0.1/"},{url:"https://koumoul.com/apps/list-details/0.2/"},{url:"https://koumoul.com/apps/carto-stats/0.4/"},{url:"https://koumoul.com/apps/data-fair-series/0.2/"},{url:"https://koumoul.com/apps/data-fair-admin-divs/0.2/"},{url:"https://koumoul.com/apps/bar-chart-race/0.1/"},{url:"https://koumoul.com/apps/data-fair-geo-shapes/0.1/"},{url:"https://koumoul.com/apps/scdl-deliberations/0.1/"},{url:"https://koumoul.com/apps/scdl-equipements/0.1/"},{url:"https://koumoul.com/apps/data-fair-events/1.0/"}],baseAppsCategories:["carte","graphique","textuelle","SCDL"],remoteServices:[{title:"Données Entreprises",url:"https://koumoul.com/s/sirene/api-docs.json"},{title:"Géocoder",url:"https://koumoul.com/s/geocoder/api/v1/api-docs.json"},{title:"Cadastre",url:"https://koumoul.com/s/cadastre/api-docs.json"},{title:"Service de données cartographiques",url:"https://koumoul.com/s/tileserver/api/v1/api-docs.json"}],catalogs:[{title:"Data.gouv.fr",href:"https://www.data.gouv.fr",logo:"https://static.data.gouv.fr/_themes/gouvfr/img/logo-header.svg"}],disableSharing:!1,disableApplications:!1,disableRemoteServices:!1,proxyNuxt:!1,tippecanoe:{skip:!1,minFeatures:2e3,docker:!1,args:["-zg","--extend-zooms-if-still-dropping","--drop-densest-as-needed","--detect-shared-borders","-r1"]},ogr2ogr:{skip:!1,timeout:36e4},doc:{applications:null,datasets:null,datasetEdit:null,datasetExtend:null,datasetAttachments:null,settings:null,catalogs:null},extraNavigationItems:[],extraAdminNavigationItems:[],dateFormats:["D/M/YYYY","D/M/YY","YYYY/M/D"],dateTimeFormats:["D/M/YYYY H:m","D/M/YY H:m","D/M/YYYY, H:m","D/M/YY, H:m","D/M/YYYY H:m:s","D/M/YY H:m:s","D/M/YYYY, H:m:s","D/M/YY, H:m:s","YYYY-MM-DDTHH:mm:ss"],i18n:{locales:"fr,en",defaultLocale:"fr"}}},651:function(e,t){e.exports={}},652:function(e,t){e.exports={port:"PORT",mode:"MODE",publicUrl:"PUBLIC_URL",oldPublicUrl:"OLD_PUBLIC_URL",wsPublicUrl:"WS_PUBLIC_URL",sessionDomain:"SESSION_DOMAIN",directoryUrl:"DIRECTORY_URL",privateDirectoryUrl:"PRIVATE_DIRECTORY_URL",openapiViewerUrl:"OPENAPI_VIEWER_URL",captureUrl:"CAPTURE_URL",privateCaptureUrl:"PRIVATE_CAPTURE_URL",notifyUrl:"NOTIFY_URL",privateNotifyUrl:"PRIVATE_NOTIFY_URL",notifyWSUrl:"NOTIFY_WS_URL",subscriptionUrl:"SUBSCRIPTION_URL",mongoUrl:"MONGO_URL",analytics:{__name:"ANALYTICS",__format:"json"},elasticsearch:{host:"ES_HOST",defaultAnalyzer:"ES_DEFAULT_ANALYZER",maxBulkLines:{__name:"ES_MAX_BULK_LINES",__format:"json"},maxBulkChars:{__name:"ES_MAX_BULK_CHARS",__format:"json"},maxShardSize:{__name:"ES_MAX_SHARD_SIZE",__format:"json"},nbReplicas:{__name:"ES_NB_REPLICAS",__format:"json"}},defaultRemoteKey:{value:"DEFAULT_REMOTE_KEY"},secretKeys:{identities:"SECRET_IDENTITIES",limits:"SECRET_LIMITS",notifications:"SECRET_NOTIFICATIONS",masterData:"SECRET_MASTER_DATA"},globalWebhooks:{consumption:{__name:"WEBHOOKS_CONSUMPTION",__format:"json"}},brand:{logo:"BRAND_LOGO",title:"BRAND_TITLE",description:"BRAND_DESCRIPTION",url:"BRAND_URL",embed:"BRAND_EMBED"},theme:{dark:{__name:"THEME_DARK",__format:"json"},colors:{primary:"THEME_PRIMARY",secondary:"THEME_SECONDARY",accent:"THEME_ACCENT",error:"THEME_ERROR",info:"THEME_INFO",success:"THEME_SUCCESS",warning:"THEME_WARNING"},darkColors:{primary:"THEME_DARK_PRIMARY",secondary:"THEME_DARK_SECONDARY",accent:"THEME_DARK_ACCENT",error:"THEME_DARK_ERROR",info:"THEME_DARK_INFO",success:"THEME_DARK_SUCCESS",warning:"THEME_DARK_WARNING"},cssUrl:"THEME_CSS_URL",cssText:"THEME_CSS_TEXT"},darkModeSwitch:{__name:"DARK_MODE_SWITCH",__format:"json"},defaultLimits:{totalStorage:{__name:"DEFAULT_LIMITS_TOTAL_STORAGE",__format:"json"},datasetStorage:{__name:"DEFAULT_LIMITS_DATASET_STORAGE",__format:"json"},maxSpreadsheetSize:{__name:"DEFAULT_LIMITS_MAX_SPREADSHEET_SIZE",__format:"json"}},worker:{interval:{__name:"WORKER_INTERVAL",__format:"json"},concurrency:{__name:"WORKER_CONCURRENCY",__format:"json"},spawnTask:{__name:"WORKER_SPAWN_TASK",__format:"json"}},browserLogLevel:"BROWSER_LOG_LEVEL",listenWhenReady:{__name:"LISTEN_WHEN_READY",__format:"json"},thumbor:{url:"THUMBOR_URL",key:"THUMBOR_KEY"},applications:{__name:"APPLICATIONS",__format:"json"},applicationsDirectories:{__name:"APPLICATIONS_DIRECTORIES",__format:"json"},baseAppsCategories:{__name:"BASE_APPS_CATEGORIES",__format:"json"},remoteServices:{__name:"REMOTE_SERVICES",__format:"json"},catalogs:{__name:"CATALOGS",__format:"json"},disableSharing:{__name:"DISABLE_SHARING",__format:"json"},disableApplications:{__name:"DISABLE_APPLICATIONS",__format:"json"},disableRemoteServices:{__name:"DISABLE_REMOTE_SERVICES",__format:"json"},info:{termsOfService:"INFO_TOS",contact:{__name:"INFO_CONTACT",__format:"json"}},tippecanoe:{skip:{__name:"TIPPECANOE_SKIP",__format:"json"}},ogr2ogr:{skip:{__name:"OGR2OGR_SKIP",__format:"json"},timeout:{__name:"OGR2OGR_TIMEOUT",__format:"json"}},doc:{datasetEdit:"DOC_DATASET_EDIT",datasetExtend:"DOC_DATASET_EXTEND",datasetAttachments:"DOC_DATASET_ATTACHMENTS",settings:"DOC_SETTINGS",catalogs:"DOC_CATALOGS"},extraNavigationItems:{__name:"EXTRA_NAV_ITEMS",__format:"json"},extraAdminNavigationItems:{__name:"EXTRA_ADMIN_NAV_ITEMS",__format:"json"},dateFormats:{__name:"DATE_FORMATS",__format:"json"},dateTimeFormats:{__name:"DATE_TIME_FORMATS",__format:"json"},i18n:{locales:"I18N_LOCALES",defaultLocale:"I18N_DEFAULT_LOCALE"}}},660:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"title":"Configuration","link":"Configuration","varKey":"Clé dans le fichier de configuration","varName":"Variable d\'environnement","varDesc":"Description","varDefault":"Valeur par défaut","varDescriptions":{"mode":"Utilisez ce paramètre pour lancer à la fois le serveur Web et la boucle de traitements des tâches asynchrones ou pour les lancer dans individuellement. Valeurs possibles: \\"server_worker\\", \\"server\\", \\"worker\\".","publicUrl":"<b>IMPORTANT.</b> L\'URL à laquelle le service sera exposé. Par exemple https://koumoul.com/s/data-fair","wsPublicUrl":"<b>IMPORTANT.</b> L\'URL à laquelle la connection socket sera exposée. Par exemple wss://koumoul.com/s/data-fair","directoryUrl":"<b>IMPORTANT.</b> L\'URL à laquelle le service de gestion des utilisateurs est exposé. Par exemple https://koumoul.com/s/simple-directory","mongoUrl":"La chaine de connexion complète à la base de données MongoDB.","analytics":"JSON de configuration des analytics, correspond à la partie \\"modules\\" de configuration de la librairie <a href=\\"https://github.com/koumoul-dev/vue-multianalytics#modules\\">vue-multianalytics</a>","elasticsearch":{"host":"Serveur ElasticSearch.","defaultAnalyzer":"Analyseur par défaut.","maxBulkLines":"Nombre de lignes maximum pour les traitements en masse.","maxBulkChars":"Nombre de caractères maximum pour les traitements en masse."},"defaultRemoteKey":{"value":"Clé a utiliser pour appeler les services distants. A n\'utiliser que si vous déployer vos propres services distants."},"secretKeys":{"ownerNames":"Secret partagé avec le service de gestion des utilisateurs et organisations."},"brand":{"logo":"Un lien vers un fichier image représentant votre logo.","title":"Le nom de votre organisation.","description":"La description de votre organisation.","url":"Un lien vers le site web principal de votre organisation."},"worker":{"concurrency":"Le nombre de tâches pouvant être traitées en parallèle. Les tâches sont tous les traitements asynchrones des jeux de données (analyse des formats de fichiers, indexation, extensions, publications dans les catalogues, etc.)"},"nuxtBuild":{"active":"Build Nuxt actif","blocking":"Build Nuxt bloquant"},"i18n":{"defaultLocale":"Locale par défaut","locales":"Liste des locales"},"thumbor":{"url":"URL du serveur thumbor utilisé pour créer des vignettes des images liées dans les jeux de données","key":"Clé secrète utilisée pour signer les URLs de vignettes thumbor"}}}}'),delete e.options._Ctor}},696:function(e,t,o){"use strict";var n=o(660),r=o.n(n);t.default=r.a},712:function(e,t,o){"use strict";o.r(t);var n=o(15),r=(o(8),o(38),o(43),o(17),o(624)),l=o(635),c=Object.assign({},o(650),o(651));var m=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object.keys(t).forEach((function(l){var m=r+l,d=m.split(".").reduce((function(a,e){return a[e]}),c);"object"===Object(n.a)(d)&&(d=JSON.stringify(d)),"string"==typeof t[l]?o.push({key:m,name:t[l],def:d}):"object"===Object(n.a)(t[l])&&t[l].__name?o.push({key:m,name:t[l].__name,def:d}):e(t[l],o,r+l+".")})),o}(o(652)),d={components:{DocPage:r.default},computed:{content:function(){if(this.$route){var content=l("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"))||l("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"));return content.default.replace("{{CONFIG_VARS}}",this.configVars)}},configVars:function(){var e=this,table="<table><thead><tr><th>".concat(this.$t("varKey"),"</th><th>").concat(this.$t("varName"),"</th><th>").concat(this.$t("varDesc"),"</th><th>").concat(this.$t("varDefault"),"</th></tr></thead><tbody>\n");return m.forEach((function(t){var o=e.$te("varDescriptions."+t.key)?e.$t("varDescriptions."+t.key):"";table+="<tr><td>".concat(t.key,"</td><td>").concat(t.name,"</td><td>").concat(o,"</td><td>").concat(t.def,"</td></tr>\n")})),table+="</tbody></table>"}}},_=o(49),f=o(696),component=Object(_.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("doc-page",{attrs:{content:e.content}})}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component);t.default=component.exports;installComponents(component,{DocPage:o(624).default})}}]);