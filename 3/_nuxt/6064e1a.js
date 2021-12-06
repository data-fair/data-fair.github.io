(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{620:function(e,t,o){},628:function(e){e.exports=JSON.parse('{"name":"data-fair","version":"3.5.0","description":"","main":"server","scripts":{"test":"NODE_ENV=test mocha --exit --bail --timeout 20000 test/","test-cover":"nyc npm test","test-deps":"docker-compose --profile test up -d","coveralls":"nyc report --reporter=text-lcov | coveralls","report":"nyc report --reporter=html","lint":"eslint --ext js,vue --ignore-path .gitignore .","lint-fix":"eslint --ext js,vue --ignore-path .gitignore --fix .","dev-deps":"docker-compose --profile dev up -d","dev-server":"DEBUG=upgrade*,i18n* NODE_ENV=development nodemon server","dev-client":"NODE_ENV=development nuxt","build":"nuxt build","start":"node server","analyze":"nuxt build --analyze","upgrade":"node upgrade","doc":"nuxt --port 3144 --config-file doc/nuxt.config.js","build-doc":"nuxt generate --config-file ${PWD}/doc/nuxt.config.js","serve-doc":"DOC_BASE=/doc-dist/ npm run build-doc && http-server .","postinstall":"patch-package"},"author":"","license":"AGPL-3.0-only","devDependencies":{"@hackmd/meta-marked":"^0.4.4","@koumoul/gh-pages-multi":"^0.7.1","babel-eslint":"^10.1.0","coveralls":"^3.1.0","eslint":"^7.32.0","eslint-config-vuetify":"^0.6.1","eslint-plugin-no-only-tests":"^2.6.0","http-proxy-middleware":"^1.0.6","http-server":"^13.0.2","mocha":"^7.2.0","nock":"^13.1.3","nyc":"^15.1.0","raw-loader":"^4.0.2","semver-extract":"^1.2.0","tableschema":"^1.12.4"},"dependencies":{"@alloc/quick-lru":"^5.2.0","@digibytes/markdownit":"^1.2.2","@elastic/elasticsearch":"^7.10.0","@koumoul/express-request-proxy":"^2.3.0","@koumoul/icalendar":"^0.7.3","@koumoul/nuxt-config-inject":"^0.4.10","@koumoul/sd-express":"1.1.1","@koumoul/sd-vue":"1.3.0","@koumoul/v-iframe":"^0.5.6","@koumoul/vjsf":"^2.8.1","@koumoul/vue-multianalytics":"^1.10.1","@mapbox/mbtiles":"^0.11.0","@nuxtjs/axios":"^5.13.4","@nuxtjs/i18n":"^7.0.3","@nuxtjs/svg":"^0.1.12","@nuxtjs/vuetify":"^1.11.2","@terraformer/wkt":"^2.0.7","@turf/clean-coords":"^6.0.1","@turf/kinks":"^6.0.0","@turf/rewind":"^5.1.5","@turf/turf":"^5.1.6","@turf/unkink-polygon":"^5.1.5","accept-language-parser":"^1.5.0","ajv":"^6.12.6","babel-polyfill":"^6.26.0","body-parser":"^1.19.0","byline":"^5.0.0","cacheable-lookup":"^6.0.1","cacheable-request":"^7.0.2","chardet":"^1.3.0","chart.js":"^2.9.4","child-process-promise":"^2.2.1","compare-versions":"^3.6.0","config":"^3.3.3","connect-mongo":"^4.6.0","cookie-parser":"^1.4.5","cookie-universal-nuxt":"^2.1.4","cors":"^2.8.5","crc":"^3.8.0","csv-parser":"^3.0.0","csv-stringify":"^5.5.3","d3-hierarchy":"^2.0.0","debounce":"^1.2.0","debug":"^4.3.1","dot-prop":"^6.0.1","easymde":"^2.14.0","escape-string-regexp":"^4.0.0","event-to-promise":"^0.8.0","express":"^4.17.1","express-session":"^1.17.1","fast-clone":"^1.5.13","fast-json-stable-stringify":"^2.1.0","flat":"^5.0.2","form-data":"^3.0.0","fs-extra":"^9.0.1","geojson-vt":"^3.2.1","geojson2wkt":"^1.0.0","geolib":"^3.3.1","html-extractor":"^0.2.2","http-errors":"^1.8.0","i18n":"^0.13.3","iconv-lite":"^0.5.2","iframe-resizer":"^4.3.2","install":"^0.13.0","js-cookie":"^2.2.1","json-refs":"^3.0.15","json-stable-stringify":"^1.0.1","JSONStream":"^1.3.5","jwks-rsa":"^1.12.0","jwt-decode":"^2.2.0","less":"^3.12.2","less-loader":"^6.2.0","lucene-query-parser":"^1.2.0","mapbox-gl":"^1.13.0","marked":"^2.0.0","material-design-icons-iconfont":"^5.0.1","memoize":"^0.1.1","memoizee":"^0.4.14","mime-type-stream":"^0.1.4","mime-types":"^2.1.31","moment":"^2.29.1","moment-timezone":"^0.5.32","mongo-escape":"^2.0.6","mongodb":"~4.2.0","multer":"^1.4.2","nanoid":"^3.1.22","ngeohash":"^0.6.3","node-dir":"^0.1.17","node-fetch":"^2.6.1","nodemon":"^2.0.7","nuxt":"^2.14.11","object-hash":"^2.2.0","ogr2ogr":"^2.1.2","original-url":"^1.2.3","parse5":"^6.0.1","patch-package":"^6.4.7","proj4":"^2.7.2","pump":"^3.0.0","random-seed":"^0.3.0","rate-limiter-flexible":"^2.3.5","reconnecting-websocket":"^4.4.0","request":"^2.88.2","request-ip":"^2.1.3","request-promise-native":"^1.0.9","rrule":"^2.6.8","sanitize-html":"^1.27.5","sass":"~1.32.12","scrolling-element":"^1.0.2","semver":"^7.3.4","shortid":"^2.2.16","slugify":"^1.4.6","soas":"^0.5.1","stream-throttle":"^0.1.3","strip-bom-stream":"^4.0.0","style-loader":"^1.3.0","thumbor":"^0.1.5","tinycolor2":"^1.4.2","tmp-promise":"^2.1.1","truncate-middle":"^1.0.6","universal-analytics":"^0.4.23","uuid":"^3.4.0","vt-pbf":"3.1.1","vue-i18n":"^8.26.2","vue-moment":"^4.1.0","vuedraggable":"^2.24.3","vuetify":"^2.5.3","ws":"^7.4.1","xlsx":"^0.16.9"}}')},630:function(e,t,o){"use strict";o(6),o(7),o(10),o(11);var r=o(2),n=(o(26),o(8),o(43),o(347),o(40),o(16),o(34),o(22),o(52),o(620),o(1)),l=o(87),c=o(3);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _=["sm","md","lg","xl"],f=_.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=_.reduce((function(e,t){return e["offset"+Object(c.r)(t)]={type:[String,Number],default:null},e}),{}),v=_.reduce((function(e,t){return e["order"+Object(c.r)(t)]={type:[String,Number],default:null},e}),{}),E={col:Object.keys(f),offset:Object.keys(h),order:Object.keys(v)};function y(e,t,o){var r=e;if(null!=o&&!1!==o){if(t){var n=t.replace(e,"");r+="-".concat(n)}return"col"!==e||""!==o&&!0!==o?(r+="-".concat(o)).toLowerCase():r.toLowerCase()}}var S=new Map;t.a=n.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var o=t.props,data=t.data,n=t.children,c=(t.parent,"");for(var m in o)c+=String(o[m]);var d=S.get(c);return d||function(){var e,t;for(t in d=[],E)E[t].forEach((function(e){var r=o[e],n=y(t,e,r);n&&d.push(n)}));var n=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!n||!o.cols},Object(r.a)(e,"col-".concat(o.cols),o.cols),Object(r.a)(e,"offset-".concat(o.offset),o.offset),Object(r.a)(e,"order-".concat(o.order),o.order),Object(r.a)(e,"align-self-".concat(o.alignSelf),o.alignSelf),e)),S.set(c,d)}(),e(o.tag,Object(l.a)(data,{class:d}),n)}})},635:function(e,t,o){var map={"./config-en.md":376,"./config-fr.md":377,"./i18n-en.md":378,"./i18n-fr.md":379,"./install-en.md":380,"./install-fr.md":381};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=n,e.exports=r,r.id=635},650:function(e,t,o){e.exports={mode:"server_worker",port:8080,listenWhenReady:!1,publicUrl:"http://localhost:8080",oldPublicUrl:"",wsPublicUrl:"ws://localhost:8080",dataDir:"/data",sessionDomain:null,directoryUrl:"http://localhost:8080",privateDirectoryUrl:"",openapiViewerUrl:"https://koumoul.com/openapi-viewer/",captureUrl:"http://capture:8080",privateCaptureUrl:null,notifyUrl:null,privateNotifyUrl:null,notifyWSUrl:null,subscriptionUrl:null,pluginsDir:"./plugins",mongoUrl:"mongodb://localhost:27017/data-fair-production",map:{style:"./api/v1/remote-services/tileserver-koumoul/proxy/styles/klokantech-basic/style.json",beforeLayer:"poi_label"},elasticsearch:{host:"localhost:9200",defaultAnalyzer:"french",maxBulkLines:2e3,maxBulkChars:2e5,requestTimeout:24e4,maxShardSize:1e10,nbReplicas:1},indicesPrefix:"dataset-production",info:{termsOfService:"https://koumoul.com/platform/term-of-service",contact:{name:"Koumoul",url:"https://koumoul.com",email:"support@koumoul.com"}},brand:{logo:null,title:"Data Fair",description:"Find, Access, Interoperate, Reuse data on the Web",url:null,embed:null},theme:{dark:!1,colors:{primary:"#1E88E5",secondary:"#42A5F5",accent:"#FF9800",error:"FF5252",info:"#2196F3",success:"#4CAF50",warning:"#E91E63",admin:"#E53935"},darkColors:{primary:"#2196F3",success:"#00E676"},cssUrl:null,cssText:""},darkModeSwitch:!0,defaultLimits:{totalStorage:-1,datasetStorage:-1,attachmentStorage:1e8,attachmentIndexed:5e6,remoteServiceRate:{duration:5,nb:100,kb:4e3},apiRate:{anonymous:{duration:5,nb:100,bandwidth:{dynamic:5e5,static:2e6}},user:{duration:1,nb:100,bandwidth:{dynamic:1e6,static:4e6}}},hideBrand:0,maxSpreadsheetSize:5e7},worker:{interval:500,inactiveInterval:4e3,inactivityDelay:6e4,releaseInterval:1e3,concurrency:4,spawnTask:!0},adminRole:"admin",contribRole:"contrib",userRole:"user",defaultRemoteKey:{in:"header",name:"x-apiKey",value:null},remoteTimeout:5e3,secretKeys:{identities:null,limits:null,notifications:null},globalWebhooks:{consumption:[]},locks:{ttl:60},cache:{publicMaxAge:20,timestampedPublicMaxAge:604800,size:1e3},analytics:{},browserLogLevel:"error",thumbor:{url:"http://localhost:8000",key:"thumborkey"},nuxtDev:!1,licenses:[{title:"Licence Ouverte / Open Licence",href:"https://www.etalab.gouv.fr/licence-ouverte-open-licence"},{title:"Open Database License (ODbL)",href:"https://spdx.org/licenses/ODbL-1.0.html#licenseText"}],applicationsDirectories:["https://koumoul.com/apps/","https://staging-koumoul.com/apps/","https://koumoul-dev.github.io/","https://data-fair.github.io/","https://cdn.jsdelivr.net/npm/@koumoul/","https://cdn.jsdelivr.net/npm/@data-fair/"],applications:[{url:"https://koumoul.com/apps/infos-parcelles/2.5/"},{url:"https://koumoul.com/apps/infos-loc/0.9/"},{url:"https://cdn.jsdelivr.net/npm/@data-fair/app-charts@0.10/dist/"},{url:"https://koumoul.com/apps/word-cloud/0.3/"},{url:"https://koumoul.com/apps/sankey/0.5/"},{url:"https://koumoul.com/apps/sunburst/0.2/"},{url:"https://koumoul.com/apps/data-fair-networks/0.1/"},{url:"https://koumoul.com/apps/list-details/0.2/"},{url:"https://koumoul.com/apps/carto-stats/0.4/"},{url:"https://koumoul.com/apps/data-fair-series/0.2/"},{url:"https://koumoul.com/apps/data-fair-admin-divs/0.2/"},{url:"https://koumoul.com/apps/bar-chart-race/0.1/"},{url:"https://koumoul.com/apps/data-fair-geo-shapes/0.1/"},{url:"https://koumoul.com/apps/scdl-deliberations/0.1/"},{url:"https://koumoul.com/apps/scdl-equipements/0.1/"},{url:"https://koumoul.com/apps/data-fair-events/1.0/"}],baseAppsCategories:["carte","graphique","textuelle","SCDL"],remoteServices:[{title:"Données Entreprises",url:"https://koumoul.com/s/sirene/api-docs.json"},{title:"Géocoder",url:"https://koumoul.com/s/geocoder/api/v1/api-docs.json"},{title:"Cadastre",url:"https://koumoul.com/s/cadastre/api-docs.json"},{title:"Service de données cartographiques",url:"https://koumoul.com/s/tileserver/api/v1/api-docs.json"}],catalogs:[{title:"Data.gouv.fr",href:"https://www.data.gouv.fr",logo:"https://static.data.gouv.fr/_themes/gouvfr/img/logo-header.svg"}],disableSharing:!1,disableApplications:!1,disableRemoteServices:!1,proxyNuxt:!1,tippecanoe:{skip:!1,minFeatures:2e3,docker:!1,args:["-zg","--extend-zooms-if-still-dropping","--drop-densest-as-needed","--detect-shared-borders","-r1"]},ogr2ogr:{skip:!1,timeout:36e4},doc:{applications:null,datasets:null,datasetEdit:null,datasetExtend:null,datasetAttachments:null,settings:null,catalogs:null},extraNavigationItems:[],extraAdminNavigationItems:[],dateFormats:["D/M/YYYY","D/M/YY","YYYY/M/D"],dateTimeFormats:["D/M/YYYY H:m","D/M/YY H:m","D/M/YYYY, H:m","D/M/YY, H:m","D/M/YYYY H:m:s","D/M/YY H:m:s","D/M/YYYY, H:m:s","D/M/YY, H:m:s","YYYY-MM-DDTHH:mm:ss"],i18n:{locales:"fr,en",defaultLocale:"fr"}}},651:function(e,t){e.exports={}},652:function(e,t){e.exports={port:"PORT",mode:"MODE",publicUrl:"PUBLIC_URL",oldPublicUrl:"OLD_PUBLIC_URL",wsPublicUrl:"WS_PUBLIC_URL",sessionDomain:"SESSION_DOMAIN",directoryUrl:"DIRECTORY_URL",privateDirectoryUrl:"PRIVATE_DIRECTORY_URL",openapiViewerUrl:"OPENAPI_VIEWER_URL",captureUrl:"CAPTURE_URL",privateCaptureUrl:"PRIVATE_CAPTURE_URL",notifyUrl:"NOTIFY_URL",privateNotifyUrl:"PRIVATE_NOTIFY_URL",notifyWSUrl:"NOTIFY_WS_URL",subscriptionUrl:"SUBSCRIPTION_URL",mongoUrl:"MONGO_URL",analytics:{__name:"ANALYTICS",__format:"json"},elasticsearch:{host:"ES_HOST",defaultAnalyzer:"ES_DEFAULT_ANALYZER",maxBulkLines:{__name:"ES_MAX_BULK_LINES",__format:"json"},maxBulkChars:{__name:"ES_MAX_BULK_CHARS",__format:"json"},maxShardSize:{__name:"ES_MAX_SHARD_SIZE",__format:"json"},nbReplicas:{__name:"ES_NB_REPLICAS",__format:"json"}},defaultRemoteKey:{value:"DEFAULT_REMOTE_KEY"},secretKeys:{identities:"SECRET_IDENTITIES",limits:"SECRET_LIMITS",notifications:"SECRET_NOTIFICATIONS",masterData:"SECRET_MASTER_DATA"},globalWebhooks:{consumption:{__name:"WEBHOOKS_CONSUMPTION",__format:"json"}},brand:{logo:"BRAND_LOGO",title:"BRAND_TITLE",description:"BRAND_DESCRIPTION",url:"BRAND_URL",embed:"BRAND_EMBED"},theme:{dark:{__name:"THEME_DARK",__format:"json"},colors:{primary:"THEME_PRIMARY",secondary:"THEME_SECONDARY",accent:"THEME_ACCENT",error:"THEME_ERROR",info:"THEME_INFO",success:"THEME_SUCCESS",warning:"THEME_WARNING"},darkColors:{primary:"THEME_DARK_PRIMARY",secondary:"THEME_DARK_SECONDARY",accent:"THEME_DARK_ACCENT",error:"THEME_DARK_ERROR",info:"THEME_DARK_INFO",success:"THEME_DARK_SUCCESS",warning:"THEME_DARK_WARNING"},cssUrl:"THEME_CSS_URL",cssText:"THEME_CSS_TEXT"},darkModeSwitch:{__name:"DARK_MODE_SWITCH",__format:"json"},defaultLimits:{totalStorage:{__name:"DEFAULT_LIMITS_TOTAL_STORAGE",__format:"json"},datasetStorage:{__name:"DEFAULT_LIMITS_DATASET_STORAGE",__format:"json"},maxSpreadsheetSize:{__name:"DEFAULT_LIMITS_MAX_SPREADSHEET_SIZE",__format:"json"}},worker:{interval:{__name:"WORKER_INTERVAL",__format:"json"},concurrency:{__name:"WORKER_CONCURRENCY",__format:"json"},spawnTask:{__name:"WORKER_SPAWN_TASK",__format:"json"}},browserLogLevel:"BROWSER_LOG_LEVEL",listenWhenReady:{__name:"LISTEN_WHEN_READY",__format:"json"},thumbor:{url:"THUMBOR_URL",key:"THUMBOR_KEY"},applications:{__name:"APPLICATIONS",__format:"json"},applicationsDirectories:{__name:"APPLICATIONS_DIRECTORIES",__format:"json"},baseAppsCategories:{__name:"BASE_APPS_CATEGORIES",__format:"json"},remoteServices:{__name:"REMOTE_SERVICES",__format:"json"},catalogs:{__name:"CATALOGS",__format:"json"},disableSharing:{__name:"DISABLE_SHARING",__format:"json"},disableApplications:{__name:"DISABLE_APPLICATIONS",__format:"json"},disableRemoteServices:{__name:"DISABLE_REMOTE_SERVICES",__format:"json"},info:{termsOfService:"INFO_TOS",contact:{__name:"INFO_CONTACT",__format:"json"}},tippecanoe:{skip:{__name:"TIPPECANOE_SKIP",__format:"json"}},ogr2ogr:{skip:{__name:"OGR2OGR_SKIP",__format:"json"},timeout:{__name:"OGR2OGR_TIMEOUT",__format:"json"}},doc:{datasetEdit:"DOC_DATASET_EDIT",datasetExtend:"DOC_DATASET_EXTEND",datasetAttachments:"DOC_DATASET_ATTACHMENTS",settings:"DOC_SETTINGS",catalogs:"DOC_CATALOGS"},extraNavigationItems:{__name:"EXTRA_NAV_ITEMS",__format:"json"},extraAdminNavigationItems:{__name:"EXTRA_ADMIN_NAV_ITEMS",__format:"json"},dateFormats:{__name:"DATE_FORMATS",__format:"json"},dateTimeFormats:{__name:"DATE_TIME_FORMATS",__format:"json"},i18n:{locales:"I18N_LOCALES",defaultLocale:"I18N_DEFAULT_LOCALE"}}},653:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"title":"Configuration","link":"Configuration","varKey":"Clé dans le fichier de configuration","varName":"Variable d\'environnement","varDesc":"Description","varDefault":"Valeur par défaut","varDescriptions":{"mode":"Utilisez ce paramètre pour lancer à la fois le serveur Web et la boucle de traitements des tâches asynchrones ou pour les lancer dans individuellement. Valeurs possibles: \\"server_worker\\", \\"server\\", \\"worker\\".","publicUrl":"<b>IMPORTANT.</b> L\'URL à laquelle le service sera exposé. Par exemple https://koumoul.com/s/data-fair","wsPublicUrl":"<b>IMPORTANT.</b> L\'URL à laquelle la connection socket sera exposée. Par exemple wss://koumoul.com/s/data-fair","directoryUrl":"<b>IMPORTANT.</b> L\'URL à laquelle le service de gestion des utilisateurs est exposé. Par exemple https://koumoul.com/s/simple-directory","mongoUrl":"La chaine de connexion complète à la base de données MongoDB.","analytics":"JSON de configuration des analytics, correspond à la partie \\"modules\\" de configuration de la librairie <a href=\\"https://github.com/koumoul-dev/vue-multianalytics#modules\\">vue-multianalytics</a>","elasticsearch":{"host":"Serveur ElasticSearch.","defaultAnalyzer":"Analyseur par défaut.","maxBulkLines":"Nombre de lignes maximum pour les traitements en masse.","maxBulkChars":"Nombre de caractères maximum pour les traitements en masse."},"defaultRemoteKey":{"value":"Clé a utiliser pour appeler les services distants. A n\'utiliser que si vous déployer vos propres services distants."},"secretKeys":{"ownerNames":"Secret partagé avec le service de gestion des utilisateurs et organisations."},"brand":{"logo":"Un lien vers un fichier image représentant votre logo.","title":"Le nom de votre organisation.","description":"La description de votre organisation.","url":"Un lien vers le site web principal de votre organisation."},"worker":{"concurrency":"Le nombre de tâches pouvant être traitées en parallèle. Les tâches sont tous les traitements asynchrones des jeux de données (analyse des formats de fichiers, indexation, extensions, publications dans les catalogues, etc.)"},"nuxtBuild":{"active":"Build Nuxt actif","blocking":"Build Nuxt bloquant"},"i18n":{"defaultLocale":"Locale par défaut","locales":"Liste des locales"},"thumbor":{"url":"URL du serveur thumbor utilisé pour créer des vignettes des images liées dans les jeux de données","key":"Clé secrète utilisée pour signer les URLs de vignettes thumbor"}}}}'),delete e.options._Ctor}},664:function(e,t,o){},683:function(e,t,o){"use strict";o(664)},684:function(e,t,o){"use strict";var r=o(653),n=o.n(r);t.default=n.a},706:function(e,t,o){"use strict";o.r(t);var r=o(15),n=(o(8),o(38),o(36),o(7),o(16),o(34),o(35),o(22),o(43),o(17),o(346)),l=o(635),c=o(628).version,m=Object.assign({},o(650),o(651));var d=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object.keys(t).forEach((function(l){var c=n+l,d=c.split(".").reduce((function(a,e){return a[e]}),m);"object"===Object(r.a)(d)&&(d=JSON.stringify(d)),"string"==typeof t[l]?o.push({key:c,name:t[l],def:d}):"object"===Object(r.a)(t[l])&&t[l].__name?o.push({key:c,name:t[l].__name,def:d}):e(t[l],o,n+l+".")})),o}(o(652)),_={layout:"void",data:function(){return{version:c}},computed:{sections:function(){var e=this;if(this.$route){var t=l.keys().filter((function(t){return t.includes("-".concat(e.$i18n.locale,".md"))})).map((function(t){return Object.assign(n(l(t).default).meta||{},{id:t.split("/")[1].split(".").shift().replace("-".concat(e.$i18n.locale),"")})}));return t.sort((function(e,t){return e.meta.section<t.meta.section?-1:e.meta.section>t.meta.section?1:!e.meta.subsection||e.meta.subsection<t.meta.subsection?-1:1})),t[1].html=t[1].html.replace("{{CONFIG_VARS}}",this.configVars),t}},configVars:function(){var e=this,table="<table><thead><tr><th>".concat(this.$t("varKey"),"</th><th>").concat(this.$t("varName"),"</th><th>").concat(this.$t("varDesc"),"</th><th>").concat(this.$t("varDefault"),"</th></tr></thead><tbody>\n");return d.forEach((function(t){var o=e.$te("varDescriptions."+t.key)?e.$t("varDescriptions."+t.key):"";table+="<tr><td>".concat(t.key,"</td><td>").concat(t.name,"</td><td>").concat(o,"</td><td>").concat(t.def,"</td></tr>\n")})),table+="</tbody></table>"}},mounted:function(){var e=this,t={h2:["headline","font-weight-bold","grey--text","text--darken-3","my-4"],h3:["title","font-weight-bold","grey--text","text--darken-3","my-3"],h4:["subheading","font-weight-bold","grey--text","text--darken-3","my-2"],p:["body1"],table:["v-datatable","v-table","theme--light","elevation-1"],code:["theme--light"],"pre code":["v-card","pt-3","mb-4"]};Object.keys(t).forEach((function(o){e.$el.querySelectorAll(o).forEach((function(e){t[o].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")}))}},f=(o(683),o(49)),h=o(684),v=o(68),E=o.n(v),y=o(630),S=o(345),component=Object(f.a)(_,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-col",{staticClass:"mt-6 pt-6 text-center"},[o("v-img",{staticClass:"my-6",attrs:{height:"160px",contain:"",src:"./logo.svg"}}),e._v(" "),o("h1",{staticClass:"text-h3 grey--text text--darken-3"},[e._v("\n      Data Fair\n    ")]),e._v(" "),o("h4",[e._v("\n      Version "+e._s(e.version)+"\n    ")]),e._v(" "),o("h1",{staticClass:"text-h3 grey--text text--darken-3",staticStyle:{"margin-top":"200px"}},[e._v("\n      Installation et configuration\n    ")]),e._v(" "),o("h4",{staticStyle:{"margin-top":"200px!important"}},[e._v("\n      "+e._s(e._f("moment")(new Date,"DD MMMM YYYY"))+"\n    ")])],1),e._v(" "),o("div",{staticClass:"page-break"}),e._v(" "),o("h2",{staticClass:"text-h4 my-4 grey--text text--darken-3"},[e._v("\n    Table des matières\n  ")]),e._v(" "),e._l(e.sections,(function(section,i){return[section.meta.subsection?o("h5",{key:"st-"+i,staticClass:"ml-3"},[e._v("\n      "+e._s(section.meta.section)+"."+e._s(section.meta.subsection)+" - "+e._s(section.meta.title)+"\n    ")]):o("h4",{key:"st-"+i},[e._v("\n      "+e._s(section.meta.section)+" - "+e._s(section.meta.title)+"\n    ")])]})),e._v(" "),e._l(e.sections,(function(section,i){return[section.meta.subsection?e._e():o("div",{key:"pb-"+i,staticClass:"page-break"}),e._v(" "),section.meta.subsection?o("h3",{key:"t-"+i,staticClass:"text-h5 my-4 grey--text text--darken-3"},[e._v("\n      "+e._s(section.meta.section)+"."+e._s(section.meta.subsection)+" - "+e._s(section.meta.title)+"\n    ")]):o("h2",{key:"t-"+i,staticClass:"text-h4 my-4 grey--text text--darken-3"},[e._v("\n      "+e._s(section.meta.section)+" - "+e._s(section.meta.title)+"\n    ")]),e._v(" "),o("div",{key:"c-"+i,staticClass:"article",domProps:{innerHTML:e._s(section.html)}})]}))],2)}),[],!1,null,null,null);"function"==typeof h.default&&Object(h.default)(component);t.default=component.exports;E()(component,{VCol:y.a,VImg:S.a})}}]);