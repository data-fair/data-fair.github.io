(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{573:function(e,t,r){},579:function(e){e.exports=JSON.parse('{"name":"data-fair","version":"2.38.0","description":"","main":"server","scripts":{"test":"NODE_ENV=test mocha --exit --bail --timeout 20000 test/","test-cover":"nyc npm test","coveralls":"nyc report --reporter=text-lcov | coveralls","report":"nyc report --reporter=html","lint":"eslint --ext js,vue --ignore-path .gitignore .","lint-fix":"eslint --ext js,vue --ignore-path .gitignore --fix .","dev-server":"NODE_ENV=development nodemon server","dev-client":"NODE_ENV=development nuxt","build":"nuxt build","start":"node server","analyze":"nuxt build --analyze","upgrade":"node upgrade","doc":"nuxt --config-file ${PWD}/doc/nuxt.config.js","build-doc":"nuxt generate --config-file ${PWD}/doc/nuxt.config.js","postinstall":"patch-package"},"author":"","license":"AGPL-3.0-only","devDependencies":{"@hackmd/meta-marked":"^0.4.4","@koumoul/gh-pages-multi":"^0.7.1","babel-eslint":"^10.1.0","coveralls":"^3.1.0","eslint":"^7.27.0","eslint-config-vuetify":"^0.6.1","eslint-plugin-no-only-tests":"^2.6.0","http-proxy-middleware":"^1.0.6","mocha":"^7.2.0","nock":"^12.0.3","nyc":"^15.1.0","raw-loader":"^4.0.2","semver-extract":"^1.2.0","tableschema":"^1.12.4"},"dependencies":{"@alloc/quick-lru":"^5.2.0","@digibytes/markdownit":"^1.2.2","@elastic/elasticsearch":"^7.10.0","@koumoul/express-request-proxy":"^2.3.0","@koumoul/icalendar":"^0.7.3","@koumoul/nuxt-config-inject":"^0.4.10","@koumoul/sd-express":"1.0.0","@koumoul/sd-vue":"1.2.0","@koumoul/v-iframe":"^0.3.2","@koumoul/vjsf":"^2.3.1","@koumoul/vue-multianalytics":"^1.10.1","@mapbox/mbtiles":"^0.11.0","@nuxtjs/axios":"^5.13.4","@nuxtjs/svg":"^0.1.12","@nuxtjs/vuetify":"^1.11.2","@terraformer/wkt":"^2.0.7","@turf/clean-coords":"^6.0.1","@turf/kinks":"^6.0.0","@turf/rewind":"^5.1.5","@turf/turf":"^5.1.6","@turf/unkink-polygon":"^5.1.5","JSONStream":"^1.3.5","accept-language-parser":"^1.5.0","ajv":"^6.12.6","babel-polyfill":"^6.26.0","body-parser":"^1.19.0","byline":"^5.0.0","cacheable-lookup":"^6.0.1","cacheable-request":"^7.0.2","chardet":"^1.3.0","chart.js":"^2.9.4","child-process-promise":"^2.2.1","compare-versions":"^3.6.0","config":"^3.3.3","connect-mongo":"^3.2.0","cookie-parser":"^1.4.5","cookie-universal-nuxt":"^2.1.4","cors":"^2.8.5","crc":"^3.8.0","csv-parser":"^3.0.0","csv-stringify":"^5.5.3","d3-hierarchy":"^2.0.0","debounce":"^1.2.0","debug":"^4.3.1","dot-prop":"^6.0.1","easymde":"^2.14.0","escape-string-regexp":"^4.0.0","event-to-promise":"^0.8.0","express":"^4.17.1","express-session":"^1.17.1","fast-clone":"^1.5.13","fast-json-stable-stringify":"^2.1.0","flat":"^5.0.2","form-data":"^3.0.0","fs-extra":"^9.0.1","geojson-vt":"^3.2.1","geojson2wkt":"^1.0.0","geolib":"^3.3.1","html-extractor":"^0.2.2","http-errors":"^1.8.0","iconv-lite":"^0.5.2","iframe-resizer":"^4.2.11","install":"^0.13.0","js-cookie":"^2.2.1","json-refs":"^3.0.15","json-stable-stringify":"^1.0.1","jwks-rsa":"^1.12.0","jwt-decode":"^2.2.0","less":"^3.12.2","less-loader":"^6.2.0","lucene-query-parser":"^1.2.0","mapbox-gl":"^1.13.0","marked":"^2.0.0","material-design-icons-iconfont":"^5.0.1","memoize":"^0.1.1","memoizee":"^0.4.14","mime-type-stream":"^0.1.4","mime-types":"^2.1.31","moment":"^2.29.1","moment-timezone":"^0.5.32","mongo-escape":"^2.0.6","mongodb":"~3.6.4","multer":"^1.4.2","nanoid":"^3.1.22","ngeohash":"^0.6.3","node-dir":"^0.1.17","node-fetch":"^2.6.1","nodemon":"^2.0.7","nuxt":"^2.14.11","nuxt-i18n":"^6.27.0","object-hash":"^2.2.0","ogr2ogr":"^2.1.2","original-url":"^1.2.3","parse5":"^6.0.1","patch-package":"^6.4.7","proj4":"^2.7.2","pump":"^3.0.0","random-seed":"^0.3.0","rate-limiter-flexible":"^2.2.2","reconnecting-websocket":"^4.4.0","request":"^2.88.2","request-ip":"^2.1.3","request-promise-native":"^1.0.9","rrule":"^2.6.8","sanitize-html":"^1.27.5","sass":"~1.32.12","scrolling-element":"^1.0.2","semver":"^7.3.4","shortid":"^2.2.16","slugify":"^1.4.6","soas":"^0.5.1","stream-throttle":"^0.1.3","strip-bom-stream":"^4.0.0","style-loader":"^1.3.0","stylus":"^0.54.8","stylus-loader":"^3.0.2","thumbor":"^0.1.5","tinycolor2":"^1.4.2","tmp-promise":"^2.1.1","truncate-middle":"^1.0.6","universal-analytics":"^0.4.23","uuid":"^3.4.0","vt-pbf":"3.1.1","vue-moment":"^4.1.0","vuedraggable":"^2.24.3","vuetify":"^2.5.3","ws":"^7.4.1","xlsx":"^0.16.9"}}')},582:function(e,t,r){"use strict";r(5),r(7),r(11),r(12);var n=r(2),o=(r(32),r(9),r(40),r(335),r(42),r(15),r(34),r(31),r(53),r(573),r(1)),c=r(83),l=r(3);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=["sm","md","lg","xl"],v=f.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),y=f.reduce((function(e,t){return e["offset"+Object(l.r)(t)]={type:[String,Number],default:null},e}),{}),h=f.reduce((function(e,t){return e["order"+Object(l.r)(t)]={type:[String,Number],default:null},e}),{}),x={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(h)};function k(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var j=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var m in r)l+=String(r[m]);var d=j.get(l);return d||function(){var e,t;for(t in d=[],x)x[t].forEach((function(e){var n=r[e],o=k(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),j.set(l,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}})},586:function(e,t,r){var map={"./analytics-fr.md":379,"./backup-fr.md":380,"./capture-fr.md":381,"./connectors-fr.md":382,"./data-fair-fr.md":383,"./http-log-fr.md":384,"./introduction-fr.md":385,"./notify-fr.md":386,"./portal-fr.md":387,"./processings-fr.md":388,"./simple-directory-fr.md":389,"./thumbor-fr.md":390};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=586},595:function(e,t,r){},604:function(e,t,r){"use strict";r(595)},618:function(e,t,r){"use strict";r.r(t);r(38),r(7),r(15),r(34),r(35),r(31),r(40),r(41),r(9);var n=r(334),o=r(586),c=r(579).version,l={layout:"void",data:function(){return{version:c}},computed:{sections:function(){if(this.$route){var e=o.keys().filter((function(e){return e.includes("-fr.md")})).map((function(e){return Object.assign(n(o(e).default)||{},{id:e.split("/")[1].split(".").shift().replace("-fr","")})}));return e.sort((function(e,t){return e.meta.section<t.meta.section?-1:e.meta.section>t.meta.section?1:!e.meta.subsection||e.meta.subsection<t.meta.subsection?-1:1})),e}}},mounted:function(){var e=this,t={h2:["headline","font-weight-bold","grey--text","text--darken-3","my-4"],h3:["title","font-weight-bold","grey--text","text--darken-3","my-3"],h4:["subheading","font-weight-bold","grey--text","text--darken-3","my-2"],p:["body1"],table:["v-datatable","v-table","theme--light","elevation-1"],code:["theme--light"],"pre code":["v-card","pt-3","mb-4"]};Object.keys(t).forEach((function(r){e.$el.querySelectorAll(r).forEach((function(e){t[r].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")}))}},m=(r(604),r(48)),d=r(70),f=r.n(d),v=r(582),y=r(333),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-col",{staticClass:"mt-6 pt-6 text-center"},[r("v-img",{staticClass:"my-6",attrs:{height:"160px",contain:"",src:"./logo.svg"}}),e._v(" "),r("h1",{staticClass:"text-h3 grey--text text--darken-3"},[e._v("\n      Data Fair\n    ")]),e._v(" "),r("h4",[e._v("\n      Version "+e._s(e.version)+"\n    ")]),e._v(" "),r("h1",{staticClass:"text-h3 grey--text text--darken-3",staticStyle:{"margin-top":"200px"}},[e._v("\n      Architecture technique\n    ")]),e._v(" "),r("h4",{staticStyle:{"margin-top":"200px!important"}},[e._v("\n      "+e._s(e._f("moment")(new Date,"DD MMMM YYYY"))),r("br")])],1),e._v(" "),r("div",{staticClass:"page-break"}),e._v(" "),r("h2",{staticClass:"text-h4 my-4 grey--text text--darken-3"},[e._v("\n    Table des matières\n  ")]),e._v(" "),e._l(e.sections,(function(section,i){return[section.meta.subsection?r("h5",{key:"st-"+i,staticClass:"ml-3"},[e._v("\n      "+e._s(section.meta.section)+"."+e._s(section.meta.subsection)+" - "+e._s(section.meta.title)+"\n    ")]):r("h4",{key:"st-"+i},[e._v("\n      "+e._s(section.meta.section)+" - "+e._s(section.meta.title)+"\n    ")])]})),e._v(" "),e._l(e.sections,(function(section,i){return[section.meta.subsection?e._e():r("div",{key:"pb-"+i,staticClass:"page-break"}),e._v(" "),section.meta.subsection?r("h3",{key:"t-"+i,staticClass:"text-h5 my-4 grey--text text--darken-3"},[e._v("\n      "+e._s(section.meta.section)+"."+e._s(section.meta.subsection)+" - "+e._s(section.meta.title)+"\n    ")]):r("h2",{key:"t-"+i,staticClass:"text-h4 my-4 grey--text text--darken-3"},[e._v("\n      "+e._s(section.meta.section)+" - "+e._s(section.meta.title)+"\n    ")]),e._v(" "),r("div",{key:"c-"+i,staticClass:"article",domProps:{innerHTML:e._s(section.html)}})]}))],2)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:v.a,VImg:y.a})}}]);