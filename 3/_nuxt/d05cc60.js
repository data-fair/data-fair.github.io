(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{649:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}'),delete e.options._Ctor}},650:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete e.options._Ctor}},653:function(e,t,n){},654:function(e,t,n){"use strict";n.r(t);n(6),n(8),n(11),n(12);var r=n(3),o=(n(43),n(7),n(55));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=n(351);n(662);var d={props:["content","onlyEnglish","onlyFrench","hideTitle"],data:function(){return{ready:!1}},computed:l(l({},Object(o.b)(["env"])),{},{filledContent:function(){var content=f(this.content);return content.html=content.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var e=this,t={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(t).forEach((function(n){e.$el.querySelectorAll(n).forEach((function(e){t[n].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),this.ready=!0}},m=(n(656),n(47)),v=n(657),h=n(658),y=n(65),_=n.n(y),x=n(692),j=n(674),k=n(664),O=n(675),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"doc-page"},[n("v-row",[n("v-col",[e.hideTitle?e._e():n("h2",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyFrench&&"fr"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof v.default&&Object(v.default)(component),"function"==typeof h.default&&Object(h.default)(component);t.default=component.exports;_()(component,{VAlert:x.a,VCol:j.a,VContainer:k.a,VRow:O.a})},656:function(e,t,n){"use strict";n(653)},657:function(e,t,n){"use strict";var r=n(649),o=n.n(r);t.default=o.a},658:function(e,t,n){"use strict";var r=n(650),o=n.n(r);t.default=o.a},666:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}'),delete e.options._Ctor}},667:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete e.options._Ctor}},669:function(e,t,n){},678:function(e){e.exports=JSON.parse('{"name":"data-fair","version":"3.31.0","description":"","main":"server","scripts":{"test":"NODE_ENV=test mocha --exit --bail --timeout 20000 test/","test-cover":"nyc npm test","test-deps":"docker-compose --profile test up -d","coveralls":"nyc report --reporter=text-lcov | coveralls","report":"nyc report --reporter=html","lint":"eslint --ext js,vue --ignore-path .gitignore .","lint-fix":"eslint --ext js,vue --ignore-path .gitignore --fix .","dev-deps":"docker-compose --profile dev up -d","dev-server":"DEBUG=upgrade*,i18n* NODE_ENV=development nodemon server","dev-client":"NODE_ENV=development nuxt","build":"nuxt build","start":"node server","analyze":"nuxt build --analyze","upgrade":"node upgrade","doc":"nuxt --port 3144 --config-file doc/nuxt.config.js","build-doc":"nuxt generate --config-file ${PWD}/doc/nuxt.config.js","serve-doc":"DOC_BASE=/doc-dist/ npm run build-doc && http-server .","postinstall":"patch-package"},"author":"","license":"AGPL-3.0-only","eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended","standard","plugin:vue/recommended"],"rules":{"vue/no-v-html":"off","vue/multi-word-component-names":"off","node/no-deprecated-api":"off","vue/no-mutating-props":"off","vue/require-prop-types":"off","vue/no-useless-template-attributes":"off","vue/singleline-html-element-content-newline":"off","vue/valid-v-slot":"off"}},"devDependencies":{"@data-fair/sd-vue":"^2.1.0","@hackmd/meta-marked":"^0.5.0","@koumoul/gh-pages-multi":"^0.7.1","@koumoul/v-iframe":"^0.12.0","@koumoul/vjsf":"^2.18.0","@koumoul/vue-multianalytics":"^1.10.1","@mdi/font":"^6.5.95","@nuxtjs/google-fonts":"^1.3.0","@nuxtjs/svg":"^0.1.12","@nuxtjs/vuetify":"^1.12.3","babel-eslint":"^10.1.0","clean-modules":"^2.0.4","coveralls":"^3.1.0","d3-hierarchy":"^2.0.0","debounce":"^1.2.0","dot-prop":"^6.0.1","easymde":"^2.14.0","eslint":"^7.32.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.25.4","eslint-plugin-no-only-tests":"^2.6.0","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^5.1.1","eslint-plugin-vue":"^8.5.0","form-data":"^3.0.0","highlight.js":"^11.4.0","http-proxy-middleware":"^1.0.6","http-server":"^13.0.2","iframe-resizer":"^4.3.2","less":"^3.12.2","less-loader":"^6.2.0","mapbox-gl":"^1.13.0","mocha":"^7.2.0","nock":"^13.1.3","nuxt":"^2.15.8","nuxt-webpack-optimisations":"^2.2.0","nyc":"^15.1.0","patch-package":"^6.4.7","raw-loader":"^4.0.2","reconnecting-websocket":"^4.4.0","semver-extract":"^1.2.0","tableschema":"^1.12.4","timezones.json":"^1.6.0","tinycolor2":"^1.4.2","vue-clamp":"^0.4.0","vue-moment":"^4.1.0","vuedraggable":"^2.24.3","web-streams-polyfill":"^3.2.0"},"dependencies":{"@elastic/elasticsearch":"~7.10.0","@koumoul/express-request-proxy":"^2.3.0","@koumoul/icalendar":"^0.7.3","@koumoul/nuxt-config-inject":"^0.4.10","@koumoul/sd-express":"1.1.3","@nuxtjs/axios":"^5.13.6","@nuxtjs/i18n":"^7.2.0","@terraformer/wkt":"^2.0.7","@turf/bbox":"^6.5.0","@turf/bbox-polygon":"^6.5.0","@turf/clean-coords":"^6.0.1","@turf/kinks":"^6.0.0","@turf/point-on-feature":"^6.5.0","@turf/rewind":"^5.1.5","@turf/unkink-polygon":"^5.1.5","ajv":"^6.12.6","cacheable-lookup":"^6.0.1","chardet":"^1.3.0","child-process-promise":"^2.2.1","compare-versions":"^3.6.0","config":"^3.3.3","cookie-parser":"^1.4.5","cookie-universal-nuxt":"^2.1.4","cors":"^2.8.5","crc":"^3.8.0","cron":"^1.8.2","csv-parser":"^3.0.0","csv-stringify":"^5.5.3","debug":"^4.3.1","escape-string-regexp":"^4.0.0","event-to-promise":"^0.8.0","exceljs":"^4.3.0","express":"^4.17.1","fast-json-stable-stringify":"^2.1.0","flat":"^5.0.2","fs-extra":"^9.0.1","geojson-vt":"^3.2.1","geolib":"^3.3.1","html-extractor":"^0.2.2","http-errors":"^1.8.0","http-link-header":"^1.0.4","i18n":"^0.13.3","iconv-lite":"^0.5.2","json-refs":"^3.0.15","json-stable-stringify":"^1.0.1","JSONStream":"^1.3.5","lucene-query-parser":"^1.2.0","marked":"^4.0.12","mime-type-stream":"^0.1.4","mime-types":"^2.1.31","moment":"^2.29.1","moment-timezone":"^0.5.34","mongo-escape":"^2.0.6","mongodb":"~4.2.0","multer":"^1.4.2","nanoid":"^3.1.22","ngeohash":"^0.6.3","node-dir":"^0.1.17","nodemon":"^2.0.7","number-abbreviate":"^2.0.0","nuxt-start":"^2.15.8","object-hash":"^2.2.0","ogr2ogr":"^2.1.2","original-url":"^1.2.3","parse5":"^6.0.1","piscina":"^3.2.0","proj4":"^2.7.2","prom-client":"^14.0.1","pump":"^3.0.0","random-seed":"^0.3.0","rate-limiter-flexible":"^2.3.5","request":"^2.88.2","request-ip":"^2.1.3","request-promise-native":"^1.0.9","rrule":"^2.6.8","sanitize-html":"^1.27.5","scrolling-element":"^1.0.2","semver":"^7.3.4","slugify":"^1.4.6","soas":"^0.5.1","stream-throttle":"^0.1.3","streamsaver":"^2.0.6","strip-bom-stream":"^4.0.0","thumbor":"^0.1.5","tmp-promise":"^2.1.1","truncate-html":"^1.0.4","truncate-middle":"^1.0.6","useragent":"^2.3.0","vt-pbf":"3.1.1","ws":"^7.4.1","xlsx":"^0.18.0"}}')},679:function(e,t,n){"use strict";n(669)},680:function(e,t,n){"use strict";var r=n(666),o=n.n(r);t.default=o.a},681:function(e,t,n){"use strict";var r=n(667),o=n.n(r);t.default=o.a},702:function(e,t,n){"use strict";n.r(t);n(7),n(6),n(11),n(12);var r=n(13),o=n(3),c=(n(56),n(8),n(35),n(16),n(33),n(37),n(30),n(50),n(43),n(38),n(654));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=n(351),m=n(353),v=n(678).version,h={components:{DocPage:c.default},layout:"void",data:function(){return{version:v}},head:function(){return{title:"Data Fair - "+this.$t(this.$route.params.id)}},computed:{sections:function(){var e=this;if(this.$route){var t=m.keys().filter((function(t){return t.includes("/".concat(e.$route.params.id,"/"))})).filter((function(t){return!!t.startsWith("./install")||(!!t.startsWith("./interoperate")||(!!t.startsWith("./technical-architecture")||t.includes("-".concat(e.$i18n.locale,".md"))))})).map((function(t){var content=m(t).default;return f(f({id:t.split("/").pop().split(".").shift().replace("-".concat(e.$i18n.locale),"")},d(m(t).default).meta),{},{content:content})})).filter((function(section){return section.published||!1}));return t.sort((function(e,t){return e.section<t.section?-1:e.section>t.section?1:!e.subsection||e.subsection<t.subsection?-1:1})),t}}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("true"!==e.$route.query.print){t.next=5;break}return t.next=3,new Promise((function(e){return setTimeout(e,2e3)}));case 3:window.print(),e.$router.go(-1);case 5:case"end":return t.stop()}}),t)})))()}},y=(n(679),n(47)),_=n(680),x=n(681),j=n(65),k=n.n(j),O=n(674),w=n(162),C=n(350),E=n(675),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"full-chapter",class:{"print-mode":"true"===e.$route.query.print}},[n("v-col",{staticClass:"mt-6 pt-6 text-center"},[n("v-img",{staticClass:"my-6",attrs:{height:"160px",contain:"",src:"./logo.svg"}}),e._v(" "),n("h1",{staticClass:"text-h3 grey--text text--darken-3"},[e._v("\n      Data Fair\n    ")]),e._v(" "),n("h4",[e._v("\n      Version "+e._s(e.version)+"\n    ")]),e._v(" "),n("h1",{directives:[{name:"t",rawName:"v-t",value:e.$route.params.id,expression:"$route.params.id"}],staticClass:"text-h3 grey--text text--darken-3",staticStyle:{"margin-top":"200px"}}),e._v(" "),n("h4",{staticStyle:{"margin-top":"200px!important"}},[e._v("\n      "+e._s(e._f("moment")(new Date,"DD MMMM YYYY"))),n("br")])],1),e._v(" "),n("div",{staticClass:"page-break"}),e._v(" "),n("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[n("div",[n("h2",{directives:[{name:"t",rawName:"v-t",value:"tableOfContents",expression:"'tableOfContents'"}],staticClass:"text-h4 my-4 grey--text text--darken-3"}),e._v(" "),e._l(e.sections,(function(section,i){return[section.subsection?n("h5",{key:"st-"+i,staticClass:"ml-3"},[n("a",{attrs:{href:"#"+section.id}},[e._v(e._s(section.section)+"."+e._s(section.subsection)+" - "+e._s(section.title))]),e._v(" "),section.published?e._e():n("v-icon",{attrs:{color:"error",small:""}},[e._v("\n            mdi-alert\n          ")])],1):n("h4",{key:"st-"+i},[n("a",{attrs:{href:"#"+section.id}},[e._v(e._s(section.section)+" - "+e._s(section.title))]),e._v(" "),section.published?e._e():n("v-icon",{attrs:{color:"error",small:""}},[e._v("\n            mdi-alert\n          ")])],1)]}))],2)]),e._v(" "),n("div",{staticClass:"page-break"}),e._v(" "),e._l(e.sections,(function(section,i){return[section.subsection?e._e():n("div",{key:"pb-"+i,staticClass:"page-break"}),e._v(" "),section.subsection?n("h3",{key:"t-"+i,staticClass:"text-h5 my-4 grey--text text--darken-3 section-title subsection-title",attrs:{id:section.id}},[e._v("\n      "+e._s(section.section)+"."+e._s(section.subsection)+" - "+e._s(section.title)+"\n      "),section.published?e._e():n("v-icon",{attrs:{color:"error",small:""}},[e._v("\n        mdi-alert\n      ")])],1):n("h2",{key:"t-"+i,staticClass:"text-h4 my-4 grey--text text--darken-3 section-title",attrs:{id:section.id}},[e._v("\n      "+e._s(section.section)+" - "+e._s(section.title)+"\n      "),section.published?e._e():n("v-icon",{attrs:{color:"error",small:""}},[e._v("\n        mdi-alert\n      ")])],1),e._v(" "),n("doc-page",{key:"page-"+i,attrs:{content:section.content,"hide-title":!0}})]}))],2)}),[],!1,null,null,null);"function"==typeof _.default&&Object(_.default)(component),"function"==typeof x.default&&Object(x.default)(component);t.default=component.exports;k()(component,{DocPage:n(654).default}),k()(component,{VCol:O.a,VIcon:w.a,VImg:C.a,VRow:E.a})}}]);