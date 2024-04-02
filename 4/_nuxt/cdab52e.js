(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{1043:function(e,t,n){e.exports={}},1204:function(e){e.exports=JSON.parse('{"name":"data-fair","version":"4.1.2","description":"","main":"server","scripts":{"test":"NODE_ENV=test EVENTS_LOG_LEVEL=warn mocha --exit --bail --timeout 30000 test/","test-cover":"nyc npm test","test-deps":"docker compose --profile test up -d --wait","coveralls":"nyc report --reporter=text-lcov | coveralls","report":"nyc report --reporter=html","lint":"eslint --ext js,vue --ignore-path .gitignore .","lint-fix":"eslint --ext js,vue --ignore-path .gitignore --fix .","dev-deps":"docker compose --profile dev up -d --wait","stop-dev-deps":"docker compose --profile dev stop","dev-server":"DEBUG=upgrade*,i18n*,catalogs*,thumbnails,workers* NODE_ENV=development nodemon server","dev-server-memory":"DEBUG=upgrade*,i18n*,notifications,worker:* DEBUG_HEAP=* NODE_ENV=development nodemon -x \\"node --expose-gc\\" server","dev-client":"NODE_ENV=development nuxt","dev-zellij":"zellij --layout .zellij.kdl","build":"nuxt build --no-generate","start":"node server","analyze":"nuxt build --analyze","upgrade":"node upgrade","doc":"nuxt --port 3144 --config-file doc/nuxt.config.js","build-doc":"nuxt generate --config-file ${PWD}/doc/nuxt.config.js","serve-doc":"TARGET=http://localhost:3144/doc-dist/ npm run build-doc && http-server .","postinstall":"patch-package","prepare":"husky install","check-types":"tsc","quality":"npm run test-deps && npm run lint && npm run test && npm audit --omit=dev --audit-level=critical"},"engines":{"node":"v20"},"author":"","license":"AGPL-3.0-only","eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended","standard","plugin:vue/recommended"],"rules":{"vue/no-v-html":"off","vue/multi-word-component-names":"off","node/no-deprecated-api":"off","vue/no-mutating-props":"off","vue/require-prop-types":"off","vue/no-useless-template-attributes":"off","vue/singleline-html-element-content-newline":"off","vue/valid-v-slot":"off"}},"devDependencies":{"@commitlint/cli":"^17.5.0","@commitlint/config-conventional":"^17.4.4","@data-fair/sd-vue":"^2.6.1","@hackmd/meta-marked":"^0.5.0","@koumoul/gh-pages-multi":"^0.7.1","@koumoul/vjsf":"^2.22.1","@koumoul/vue-multianalytics":"^1.10.1","@mdi/font":"^6.5.95","@nuxtjs/google-fonts":"^1.3.0","@nuxtjs/sitemap":"^2.4.0","@nuxtjs/svg":"^0.1.12","@nuxtjs/vuetify":"^1.12.3","@types/config":"^3.3.3","@types/cookie-parser":"^1.4.6","@types/cors":"^2.8.17","@types/debug":"^4.1.12","@types/deep-equal":"^1.0.4","@types/escape-html":"^1.0.4","@types/flat":"^5.0.5","@types/fs-extra":"^11.0.4","@types/http-link-header":"^1.0.5","@types/i18n":"^0.13.10","@types/json-stable-stringify":"^1.0.36","@types/memoizee":"^0.4.11","@types/nanoid":"^3.0.0","@types/node-dir":"^0.0.37","@types/original-url":"^1.2.3","@types/random-seed":"^0.3.5","@types/resolve-path":"^1.4.2","@types/sanitize-html":"^2.9.5","@types/truncate-middle":"^1.0.4","babel-eslint":"^10.1.0","clean-modules":"^2.0.4","coveralls":"^3.1.0","d3-hierarchy":"^2.0.0","debounce":"^1.2.0","dot-prop":"^6.0.1","easymde":"^2.14.0","eslint":"^7.32.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.25.4","eslint-plugin-no-only-tests":"^2.6.0","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^5.1.1","eslint-plugin-vue":"^8.5.0","form-data":"^3.0.0","highlight.js":"^11.4.0","http-proxy-middleware":"^1.0.6","http-server":"^13.0.2","husky":"^8.0.3","js-file-download":"^0.4.12","less":"^3.12.2","less-loader":"^6.2.0","mapbox-gl":"^1.13.0","mermaid":"^9.2.2","mocha":"^10.2.0","nock":"^13.1.3","nuxt":"^2.17.1","nuxt-webpack-optimisations":"^2.2.0","nyc":"^15.1.0","patch-package":"^6.4.7","perfect-scrollbar":"^1.5.5","raw-loader":"^4.0.2","reconnecting-websocket":"^4.4.0","semver-extract":"^1.2.0","tableschema":"^1.12.4","timezones.json":"^1.6.0","tinycolor2":"^1.4.2","tsc":"^2.0.4","typescript":"^5.3.3","vue-clamp":"^0.4.0","vue-moment":"^4.1.0","vue-window-size":"0.6.2","vuedraggable":"^2.24.3","vuetify":"^2.7.1","web-streams-polyfill":"^3.2.0"},"dependencies":{"@data-fair/lib":"^0.31.1","@data-fair/sd-express":"^1.4.3","@elastic/elasticsearch":"~7.17.12","@koumoul/icalendar":"^0.7.3","@koumoul/nuxt-config-inject":"^0.4.10","@koumoul/v-iframe":"^1.4.0","@nuxtjs/axios":"^5.13.6","@nuxtjs/i18n":"^7.2.0","@terraformer/wkt":"^2.0.7","@turf/bbox":"^6.5.0","@turf/bbox-polygon":"^6.5.0","@turf/clean-coords":"^6.0.1","@turf/kinks":"^6.0.0","@turf/point-on-feature":"^6.5.0","@turf/rewind":"^5.1.5","@turf/unkink-polygon":"^5.1.5","agentkeepalive":"^4.2.1","ajv":"^8.12.0","ajv-formats":"^2.1.1","ajv-i18n":"^4.2.0","cacheable-lookup":"^6.0.1","chardet":"^1.5.1","child-process-promise":"^2.2.1","compare-versions":"^3.6.0","config":"^3.3.3","content-disposition":"^0.5.4","cookie-parser":"^1.4.5","cookie-universal-nuxt":"^2.1.4","cors":"^2.8.5","crc":"^3.8.0","cron":"^1.8.2","csv-parser":"^3.0.0","csv-stringify":"^6.4.4","debug":"^4.3.1","deep-equal":"^2.1.0","escape-html":"^1.0.3","escape-string-regexp":"^4.0.0","event-to-promise":"^0.8.0","exceljs":"^4.4.0","expr-eval":"^2.0.2","express":"^4.18.2","fast-json-stable-stringify":"^2.1.0","flat":"^5.0.2","fs-extra":"^9.0.1","geojson-vt":"^3.2.1","geolib":"^3.3.1","html-extractor":"^0.2.2","http-errors":"^1.8.0","http-link-header":"^1.0.4","http-terminator":"^3.2.0","i18n":"^0.13.3","iconv-lite":"^0.5.2","iframe-resizer":"^4.3.2","into-stream":"^7.0.0","json-refs":"^3.0.15","json-stable-stringify":"^1.0.1","JSONStream":"^1.3.5","limiter":"^2.1.0","lucene-query-parser":"^1.2.0","marked":"^4.2.2","md5":"^2.3.0","md5-file":"^5.0.0","memoizee":"^0.4.15","mime-type-stream":"^0.1.4","mime-types":"^2.1.31","moment":"^2.29.1","moment-timezone":"^0.5.34","mongo-escape":"^2.0.6","mongodb":"~5.8.1","multer":"^1.4.2","nanoid":"^3.1.22","ngeohash":"^0.6.3","node-dir":"^0.1.17","nodemon":"^2.0.7","number-abbreviate":"^2.0.0","nuxt-start":"^2.17.1","object-hash":"^2.2.0","object-sizeof":"^1.6.3","ogr2ogr":"^4.0.1","original-url":"^1.2.3","out-of-character":"^1.2.2","parse5":"^7.1.2","piscina":"^3.2.0","proj4":"^2.7.2","prom-client":"^15.1.0","promise-socket":"^7.0.0","pump":"^3.0.0","random-seed":"^0.3.0","request":"^2.88.2","request-ip":"^2.1.3","request-promise-native":"^1.0.9","resolve-path":"^1.4.0","rfdc":"^1.3.1","rrule":"^2.6.8","sanitize-html":"^2.10.0","scrolling-element":"^1.0.2","semver":"^7.3.4","sharp":"^0.32.1","slugify":"^1.4.6","soas":"^0.5.1","streamsaver":"^2.0.6","terser":"^5.15.0","throttle-debounce":"^5.0.0","thumbor":"^0.1.5","tmp-promise":"^2.1.1","truncate-html":"^1.0.4","truncate-middle":"^1.0.6","uninstall":"^0.0.0","unzipper":"^0.10.11","useragent":"^2.3.0","vt-pbf":"3.1.1","ws":"^8.16.0","xlsx":"^0.18.0"},"overrides":{"@data-fair/lib":{"vue":"2.7.16","vuetify":"$vuetify","vue-i18n":"8.28.2","vue-router":"3.6.5","mongodb":"$mongodb","prom-client":"$prom-client"}}}')},1205:function(e,t,n){"use strict";n(1043)},1206:function(e,t,n){"use strict";var r=n(973),o=n.n(r);t.default=o.a},1207:function(e,t,n){"use strict";var r=n(974),o=n.n(r);t.default=o.a},1248:function(e,t,n){"use strict";n.r(t);var r=n(1156),o=n(224),c=n(441),l=n(1155),f=(n(13),n(10),n(15),n(12),n(16),n(19)),d=n(3),m=(n(80),n(11),n(6),n(46),n(41),n(42),n(51),n(68),n(23),n(56),n(186),n(71),n(836));function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=n(442),_=n(444),x=n(1204).version,j={components:{DocPage:m.default},layout:"void",data:function(){return{version:x}},head:function(){return{title:"Data Fair - "+this.$t(this.$route.params.id)}},computed:{sections:function(){var e=this;if(this.$route){var t=_.keys().filter((function(t){return t.includes("/".concat(e.$route.params.id,"/"))})).filter((function(t){return!!t.startsWith("./install")||(!!t.startsWith("./interoperate")||(!!t.startsWith("./technical-architecture")||t.includes("-".concat(e.$i18n.locale,".md"))))})).map((function(t){var content=_(t).default;return v(v({id:t.split("/").pop().split(".").shift().replace("-".concat(e.$i18n.locale,"$"),"")},y(_(t).default).meta),{},{content:content})})).filter((function(section){return section.published||!1}));return t.sort((function(e,t){return e.section<t.section?-1:e.section>t.section?1:!e.subsection||e.subsection<t.subsection?-1:1})),t}}},mounted:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("true"!==e.$route.query.print){t.next=5;break}return t.next=3,new Promise((function(e){return setTimeout(e,2e3)}));case 3:window.print(),e.$router.go(-1);case 5:case"end":return t.stop()}}),t)})))()}},k=(n(1205),n(67)),w=n(1206),O=n(1207),component=Object(k.a)(j,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"full-chapter",class:{"print-mode":"true"===e.$route.query.print}},[t(r.a,{staticClass:"mt-6 pt-6 text-center"},[t(c.a,{staticClass:"my-6",attrs:{height:"160px",contain:"",src:"./logo.svg"}}),e._v(" "),t("h1",{staticClass:"text-h3 grey--text text--darken-3"},[e._v("\n      Data Fair\n    ")]),e._v(" "),t("h4",[e._v("\n      Version "+e._s(e.version)+"\n    ")]),e._v(" "),t("h1",{directives:[{name:"t",rawName:"v-t",value:e.$route.params.id,expression:"$route.params.id"}],staticClass:"text-h3 grey--text text--darken-3",staticStyle:{"margin-top":"200px"}}),e._v(" "),t("h4",{staticStyle:{"margin-top":"200px!important"}},[e._v("\n      "+e._s(e._f("moment")(new Date,"DD MMMM YYYY"))),t("br")])],1),e._v(" "),t("div",{staticClass:"page-break"}),e._v(" "),t(l.a,{staticClass:"mt-4",attrs:{justify:"center"}},[t("div",[t("h2",{directives:[{name:"t",rawName:"v-t",value:"tableOfContents",expression:"'tableOfContents'"}],staticClass:"text-h4 my-4 grey--text text--darken-3"}),e._v(" "),e._l(e.sections,(function(section,i){return[section.subsection?t("h5",{key:"st-"+i,staticClass:"ml-3"},[t("a",{attrs:{href:"#"+section.id}},[e._v(e._s(section.section)+"."+e._s(section.subsection)+" - "+e._s(section.title))]),e._v(" "),section.published?e._e():t(o.a,{attrs:{color:"error",small:""}},[e._v("\n            mdi-alert\n          ")])],1):t("h4",{key:"st-"+i},[t("a",{attrs:{href:"#"+section.id}},[e._v(e._s(section.section)+" - "+e._s(section.title))]),e._v(" "),section.published?e._e():t(o.a,{attrs:{color:"error",small:""}},[e._v("\n            mdi-alert\n          ")])],1)]}))],2)]),e._v(" "),e._l(e.sections,(function(section,i){return[section.subsection?e._e():t("div",{key:"pb-"+i,staticClass:"page-break"}),e._v(" "),section.subsection?t("h3",{key:"t-"+i,staticClass:"text-h5 mt-4 mb-2 grey--text text--darken-3 section-title subsection-title",attrs:{id:section.id}},[e._v("\n      "+e._s(section.section)+"."+e._s(section.subsection)+" - "+e._s(section.title)+"\n      "),section.published?e._e():t(o.a,{attrs:{color:"error",small:""}},[e._v("\n        mdi-alert\n      ")])],1):t("h2",{key:"t-"+i,staticClass:"text-h4 mt-6 mb-4 grey--text text--darken-3 section-title",attrs:{id:section.id}},[e._v("\n      "+e._s(section.section)+" - "+e._s(section.title)+"\n      "),section.published?e._e():t(o.a,{attrs:{color:"error",small:""}},[e._v("\n        mdi-alert\n      ")])],1),e._v(" "),t("doc-page",{key:"page-"+i,attrs:{content:section.content,"hide-title":!0}})]}))],2)}),[],!1,null,null,null);"function"==typeof w.default&&Object(w.default)(component),"function"==typeof O.default&&Object(O.default)(component);t.default=component.exports;installComponents(component,{DocPage:n(836).default})},830:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","lessons":"Tutoriels","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null,"printChapter":"Imprimez ce chapitre en entier"}}'),delete e.options._Ctor}},831:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","lessons":"Tutorials","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being","printChapter":"Print this chapter"}}'),delete e.options._Ctor}},835:function(e,t,n){e.exports={}},836:function(e,t,n){"use strict";n.r(t);var r=n(1235),o=n(1156),c=n(860),l=n(1155),f=(n(79),n(35),n(10),n(11),n(15),n(16),n(36),n(24),n(50),n(43),n(49),n(57),n(41),n(19)),d=n(3),m=(n(80),n(23),n(56),n(27),n(95),n(6),n(12),n(13),n(65));n(856);function h(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=n(857),j=n(442),k=new x.Renderer;k.defaultCode=k.code,k.code=function(code,e){if("mermaid"===e){0;var t=(Math.random()+"").replace("0.","");return window.sessionStorage.setItem("mermaid-"+t,code),'<iframe class="mermaid-iframe" id="mermaid-iframe-'.concat(t,'" frameborder="0" scrolling="no" style="width:100%" src="').concat("/4/","mermaid?key=").concat(t,'"></iframe>')}return this.defaultCode(code,e)},x.use({renderer:k}),n(858);var w={props:["content","onlyEnglish","onlyFrench","hideTitle"],data:function(){return{ready:!1}},computed:_(_(_({},Object(m.c)(["env"])),Object(m.b)(["navContent"])),{},{filledContent:function(){var content=j(this.content);return content.html=x.parse(content.markdown).replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content},breadcrumbs:function(){var e=this,t=this.$route.path.split("/")[1],n=this.navContent(this.$i18n.locale),r=n.find((function(s){return s.chapter===t&&(s.section||null)===(e.filledContent.meta.section||null)&&(s.subsection||null)===(e.filledContent.meta.subsection||null)})),o=[];if(r&&(o.push(this.$t(r.chapter)),r.section)){var c=n.find((function(s){return s.chapter===t&&s.section===r.section&&!s.subsection}));if(o.push(c.title),r.subsection){var l=n.find((function(s){return s.chapter===t&&s.section===r.section&&s.subsection===r.subsection}));o.push(l.title)}}return o}}),mounted:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var n,r,iframe,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=h(e.$el.querySelectorAll(".mermaid-iframe"));try{for(n.s();!(r=n.n()).done;)iframe=r.value,window.iFrameResize({},"#"+iframe.id)}catch(e){n.e(e)}finally{n.f()}o={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]},Object.keys(o).forEach((function(t){e.$el.querySelectorAll(t).forEach((function(e){o[t].forEach((function(t){return e.classList.add(t)}))}))})),e.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),e.ready=!0;case 6:case"end":return t.stop()}}),t)})))()}},O=(n(839),n(67)),C=n(840),E=n(841),component=Object(O.a)(w,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"doc-page px-0"},[t("div",{staticClass:"hidden-breadcrumb section-title"},[e._v("\n    "+e._s(e.breadcrumbs.slice(0,e.breadcrumbs.length-1).join(" / "))+"\n  ")]),e._v(" "),t(l.a,[t(o.a,[e.hideTitle?e._e():t("h1",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?t(r.a,{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?t(r.a,{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyFrench&&"fr"!==e.$i18n.locale?t(r.a,{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof C.default&&Object(C.default)(component),"function"==typeof E.default&&Object(E.default)(component);t.default=component.exports},839:function(e,t,n){"use strict";n(835)},840:function(e,t,n){"use strict";var r=n(830),o=n.n(r);t.default=o.a},841:function(e,t,n){"use strict";var r=n(831),o=n.n(r);t.default=o.a},973:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","lessons":"Tutoriels","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null,"printChapter":"Imprimez ce chapitre en entier"}}'),delete e.options._Ctor}},974:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","lessons":"Tutorials","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being","printChapter":"Print this chapter"}}'),delete e.options._Ctor}}}]);