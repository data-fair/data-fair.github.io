(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{655:function(e,t,n){},663:function(e){e.exports=JSON.parse('{"name":"data-fair","version":"3.17.0","description":"","main":"server","scripts":{"test":"NODE_ENV=test mocha --exit --bail --timeout 20000 test/","test-cover":"nyc npm test","test-deps":"docker-compose --profile test up -d","coveralls":"nyc report --reporter=text-lcov | coveralls","report":"nyc report --reporter=html","lint":"eslint --ext js,vue --ignore-path .gitignore .","lint-fix":"eslint --ext js,vue --ignore-path .gitignore --fix .","dev-deps":"docker-compose --profile dev up -d","dev-server":"DEBUG=upgrade*,i18n* NODE_ENV=development nodemon server","dev-client":"NODE_ENV=development nuxt","build":"nuxt build","start":"node server","analyze":"nuxt build --analyze","upgrade":"node upgrade","doc":"nuxt --port 3144 --config-file doc/nuxt.config.js","build-doc":"nuxt generate --config-file ${PWD}/doc/nuxt.config.js","serve-doc":"DOC_BASE=/doc-dist/ npm run build-doc && http-server .","postinstall":"patch-package"},"author":"","license":"AGPL-3.0-only","eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended","standard","plugin:vue/recommended"],"rules":{"vue/no-v-html":"off","vue/multi-word-component-names":"off","node/no-deprecated-api":"off","vue/no-mutating-props":"off","vue/require-prop-types":"off","vue/no-useless-template-attributes":"off"}},"devDependencies":{"@hackmd/meta-marked":"^0.5.0","@koumoul/gh-pages-multi":"^0.7.1","@koumoul/sd-vue":"1.3.0","@koumoul/v-iframe":"^0.5.6","@koumoul/vjsf":"^2.11.3","@koumoul/vue-multianalytics":"^1.10.1","@mdi/font":"^6.5.95","@nuxtjs/google-fonts":"^1.3.0","@nuxtjs/svg":"^0.1.12","@nuxtjs/vuetify":"^1.12.3","babel-eslint":"^10.1.0","clean-modules":"^2.0.4","coveralls":"^3.1.0","d3-hierarchy":"^2.0.0","debounce":"^1.2.0","dot-prop":"^6.0.1","easymde":"^2.14.0","eslint":"^7.32.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.25.4","eslint-plugin-no-only-tests":"^2.6.0","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^5.1.1","eslint-plugin-vue":"^8.5.0","form-data":"^3.0.0","highlight.js":"^11.4.0","http-proxy-middleware":"^1.0.6","http-server":"^13.0.2","iframe-resizer":"^4.3.2","less":"^3.12.2","less-loader":"^6.2.0","mapbox-gl":"^1.13.0","mocha":"^7.2.0","nock":"^13.1.3","nuxt":"^2.15.8","nuxt-webpack-optimisations":"^2.2.0","nyc":"^15.1.0","patch-package":"^6.4.7","raw-loader":"^4.0.2","reconnecting-websocket":"^4.4.0","semver-extract":"^1.2.0","tableschema":"^1.12.4","timezones.json":"^1.6.0","tinycolor2":"^1.4.2","vue-clamp":"^0.4.0","vue-moment":"^4.1.0","vuedraggable":"^2.24.3","web-streams-polyfill":"^3.2.0"},"dependencies":{"@elastic/elasticsearch":"~7.10.0","@koumoul/express-request-proxy":"^2.3.0","@koumoul/icalendar":"^0.7.3","@koumoul/nuxt-config-inject":"^0.4.10","@koumoul/sd-express":"1.1.1","@mapbox/mbtiles":"^0.11.0","@nuxtjs/axios":"^5.13.4","@nuxtjs/i18n":"^7.2.0","@terraformer/wkt":"^2.0.7","@turf/bbox":"^6.5.0","@turf/bbox-polygon":"^6.5.0","@turf/clean-coords":"^6.0.1","@turf/kinks":"^6.0.0","@turf/point-on-feature":"^6.5.0","@turf/rewind":"^5.1.5","@turf/unkink-polygon":"^5.1.5","ajv":"^6.12.6","cacheable-lookup":"^6.0.1","chardet":"^1.3.0","child-process-promise":"^2.2.1","compare-versions":"^3.6.0","config":"^3.3.3","cookie-parser":"^1.4.5","cookie-universal-nuxt":"^2.1.4","cors":"^2.8.5","crc":"^3.8.0","cron":"^1.8.2","csv-parser":"^3.0.0","csv-stringify":"^5.5.3","debug":"^4.3.1","escape-string-regexp":"^4.0.0","event-to-promise":"^0.8.0","exceljs":"^4.3.0","express":"^4.17.1","fast-json-stable-stringify":"^2.1.0","flat":"^5.0.2","fs-extra":"^9.0.1","geojson-vt":"^3.2.1","geolib":"^3.3.1","html-extractor":"^0.2.2","http-errors":"^1.8.0","http-link-header":"^1.0.4","i18n":"^0.13.3","iconv-lite":"^0.5.2","json-refs":"^3.0.15","json-stable-stringify":"^1.0.1","JSONStream":"^1.3.5","lucene-query-parser":"^1.2.0","marked":"^4.0.12","memoizee":"^0.4.14","mime-type-stream":"^0.1.4","mime-types":"^2.1.31","moment":"^2.29.1","moment-timezone":"^0.5.34","mongo-escape":"^2.0.6","mongodb":"~4.2.0","multer":"^1.4.2","nanoid":"^3.1.22","ngeohash":"^0.6.3","node-dir":"^0.1.17","nodemon":"^2.0.7","nuxt-start":"^2.15.8","object-hash":"^2.2.0","ogr2ogr":"^2.1.2","original-url":"^1.2.3","parse5":"^6.0.1","proj4":"^2.7.2","pump":"^3.0.0","random-seed":"^0.3.0","rate-limiter-flexible":"^2.3.5","request":"^2.88.2","request-ip":"^2.1.3","request-promise-native":"^1.0.9","rrule":"^2.6.8","sanitize-html":"^1.27.5","scrolling-element":"^1.0.2","semver":"^7.3.4","slugify":"^1.4.6","soas":"^0.5.1","stream-throttle":"^0.1.3","streamsaver":"^2.0.6","strip-bom-stream":"^4.0.0","thumbor":"^0.1.5","tmp-promise":"^2.1.1","truncate-middle":"^1.0.6","vt-pbf":"3.1.1","ws":"^7.4.1","xlsx":"^0.18.0"}}')},665:function(e,t,n){"use strict";n(6),n(7),n(11),n(12);var r=n(3),o=(n(27),n(8),n(44),n(353),n(40),n(17),n(34),n(26),n(54),n(655),n(1)),c=n(88),l=n(2);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=["sm","md","lg","xl"],v=m.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=m.reduce((function(e,t){return e["offset"+Object(l.t)(t)]={type:[String,Number],default:null},e}),{}),y=m.reduce((function(e,t){return e["order"+Object(l.t)(t)]={type:[String,Number],default:null},e}),{}),x={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(y)};function _(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var k=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var d in n)l+=String(n[d]);var f=k.get(l);return f||function(){var e,t;for(t in f=[],x)x[t].forEach((function(e){var r=n[e],o=_(t,e,r);o&&f.push(o)}));var o=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!o||!n.cols},Object(r.a)(e,"col-".concat(n.cols),n.cols),Object(r.a)(e,"offset-".concat(n.offset),n.offset),Object(r.a)(e,"order-".concat(n.order),n.order),Object(r.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),k.set(l,f)}(),e(n.tag,Object(c.a)(data,{class:f}),o)}})},671:function(e,t,n){var map={"./api-en.md":415,"./api-fr.md":416,"./applications-en.md":417,"./applications-fr.md":418,"./collectors-en.md":419,"./collectors-fr.md":420,"./connectors-en.md":421,"./connectors-fr.md":422,"./services-en.md":423,"./services-fr.md":424};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=671},689:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuide":"Manuel utilisateur","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration"}}'),delete e.options._Ctor}},690:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuide":"User guide","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure"}}'),delete e.options._Ctor}},700:function(e,t,n){},720:function(e,t,n){"use strict";n(700)},721:function(e,t,n){"use strict";var r=n(689),o=n.n(r);t.default=o.a},722:function(e,t,n){"use strict";var r=n(690),o=n.n(r);t.default=o.a},742:function(e,t,n){"use strict";n.r(t);n(37),n(7),n(17),n(34),n(36),n(26),n(44),n(39),n(8);var r=n(352),o=n(671),c=n(663).version,l={layout:"void",data:function(){return{version:c}},computed:{sections:function(){var e=this;if(this.$route){var t=o.keys().filter((function(t){return t.includes("-".concat(e.$i18n.locale,".md"))})).map((function(t){return Object.assign(r(o(t).default).meta||{},{id:t.split("/")[1].split(".").shift().replace("-".concat(e.$i18n.locale),"")})}));return t.sort((function(e,t){return e.meta.section<t.meta.section?-1:e.meta.section>t.meta.section?1:!e.meta.subsection||e.meta.subsection<t.meta.subsection?-1:1})),t}}},mounted:function(){var e=this,t={h2:["headline","font-weight-bold","grey--text","text--darken-3","my-4"],h3:["title","font-weight-bold","grey--text","text--darken-3","my-3"],h4:["subheading","font-weight-bold","grey--text","text--darken-3","my-2"],p:["body1"],table:["v-datatable","v-table","theme--light","elevation-1"],code:["theme--light"],"pre code":["v-card","pt-3","mb-4"]};Object.keys(t).forEach((function(n){e.$el.querySelectorAll(n).forEach((function(e){t[n].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")}))}},d=(n(720),n(48)),f=n(721),m=n(722),v=n(65),h=n.n(v),y=n(665),x=n(351),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-col",{staticClass:"mt-6 pt-6 text-center"},[n("v-img",{staticClass:"my-6",attrs:{height:"160px",contain:"",src:"./logo.svg"}}),e._v(" "),n("h1",{staticClass:"text-h3 grey--text text--darken-3"},[e._v("\n      Data Fair\n    ")]),e._v(" "),n("h4",[e._v("\n      Version "+e._s(e.version)+"\n    ")]),e._v(" "),n("h1",{directives:[{name:"t",rawName:"v-t",value:"interoperate",expression:"'interoperate'"}],staticClass:"text-h3 grey--text text--darken-3",staticStyle:{"margin-top":"200px"}}),e._v(" "),n("h4",{staticStyle:{"margin-top":"200px!important"}},[e._v("\n      "+e._s(e._f("moment")(new Date,"DD MMMM YYYY"))+"\n    ")])],1),e._v(" "),n("div",{staticClass:"page-break"}),e._v(" "),n("h2",{directives:[{name:"t",rawName:"v-t",value:"tableOfContents",expression:"'tableOfContents'"}],staticClass:"text-h4 my-4 grey--text text--darken-3"}),e._v(" "),e._l(e.sections,(function(section,i){return[section.meta.subsection?n("h5",{key:"st-"+i,staticClass:"ml-3"},[e._v("\n      "+e._s(section.meta.section)+"."+e._s(section.meta.subsection)+" - "+e._s(section.meta.title)+"\n    ")]):n("h4",{key:"st-"+i},[e._v("\n      "+e._s(section.meta.section)+" - "+e._s(section.meta.title)+"\n    ")])]})),e._v(" "),e._l(e.sections,(function(section,i){return[section.meta.subsection?e._e():n("div",{key:"pb-"+i,staticClass:"page-break"}),e._v(" "),section.meta.subsection?n("h3",{key:"t-"+i,staticClass:"text-h5 my-4 grey--text text--darken-3"},[e._v("\n      "+e._s(section.meta.section)+"."+e._s(section.meta.subsection)+" - "+e._s(section.meta.title)+"\n    ")]):n("h2",{key:"t-"+i,staticClass:"text-h4 my-4 grey--text text--darken-3"},[e._v("\n      "+e._s(section.meta.section)+" - "+e._s(section.meta.title)+"\n    ")]),e._v(" "),n("div",{key:"c-"+i,staticClass:"article",domProps:{innerHTML:e._s(section.html)}})]}))],2)}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component),"function"==typeof m.default&&Object(m.default)(component);t.default=component.exports;h()(component,{VCol:y.a,VImg:x.a})}}]);