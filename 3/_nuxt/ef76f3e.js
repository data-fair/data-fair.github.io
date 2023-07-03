(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4],{684:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","lessons":"Tutoriels","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null,"printChapter":"Imprimez ce chapitre en entier"}}'),delete e.options._Ctor}},685:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","lessons":"Tutorials","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being","printChapter":"Print this chapter"}}'),delete e.options._Ctor}},688:function(e,t,n){},689:function(e,t,n){"use strict";n.r(t);n(6),n(8),n(10),n(11),n(27),n(17),n(16),n(41),n(40),n(34);var r=n(13),o=n(3),c=(n(56),n(44),n(39),n(74),n(7),n(45));n(697);function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=n(698),v=n(354),y=new h.Renderer;y.defaultCode=y.code,y.code=function(code,e){if("mermaid"===e){0;var t=(Math.random()+"").replace("0.","");return window.sessionStorage.setItem("mermaid-"+t,code),'<iframe class="mermaid-iframe" id="mermaid-iframe-'.concat(t,'" frameborder="0" scrolling="no" style="width:100%" src="').concat("/3/","mermaid?key=").concat(t,'"></iframe>')}return this.defaultCode(code,e)},h.use({renderer:y}),n(699);var w={props:["content","onlyEnglish","onlyFrench","hideTitle"],data:function(){return{ready:!1}},computed:f(f(f({},Object(c.c)(["env"])),Object(c.b)(["navContent"])),{},{filledContent:function(){var content=v(this.content);return content.html=h.parse(content.markdown).replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content},breadcrumbs:function(){var e=this,t=this.$route.path.split("/")[1],n=this.navContent(this.$i18n.locale),r=n.find((function(s){return s.chapter===t&&(s.section||null)===(e.filledContent.meta.section||null)&&(s.subsection||null)===(e.filledContent.meta.subsection||null)})),o=[];if(r&&(o.push(this.$t(r.chapter)),r.section)){var c=n.find((function(s){return s.chapter===t&&s.section===r.section&&!s.subsection}));if(o.push(c.title),r.subsection){var d=n.find((function(s){return s.chapter===t&&s.section===r.section&&s.subsection===r.subsection}));o.push(d.title)}}return o}}),mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,iframe,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=d(e.$el.querySelectorAll(".mermaid-iframe"));try{for(n.s();!(r=n.n()).done;)iframe=r.value,window.iFrameResize({},"#"+iframe.id)}catch(e){n.e(e)}finally{n.f()}o={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]},Object.keys(o).forEach((function(t){e.$el.querySelectorAll(t).forEach((function(e){o[t].forEach((function(t){return e.classList.add(t)}))}))})),e.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),e.ready=!0;case 6:case"end":return t.stop()}}),t)})))()}},_=(n(691),n(49)),O=n(692),C=n(693),j=n(65),k=n.n(j),E=n(734),x=n(713),$=n(700),P=n(714),component=Object(_.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"doc-page px-0"},[n("div",{staticClass:"hidden-breadcrumb section-title"},[e._v("\n    "+e._s(e.breadcrumbs.slice(0,e.breadcrumbs.length-1).join(" / "))+"\n  ")]),e._v(" "),n("v-row",[n("v-col",[e.hideTitle?e._e():n("h1",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyFrench&&"fr"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof O.default&&Object(O.default)(component),"function"==typeof C.default&&Object(C.default)(component);t.default=component.exports;k()(component,{VAlert:E.a,VCol:x.a,VContainer:$.a,VRow:P.a})},691:function(e,t,n){"use strict";n(688)},692:function(e,t,n){"use strict";var r=n(684),o=n.n(r);t.default=o.a},693:function(e,t,n){"use strict";var r=n(685),o=n.n(r);t.default=o.a},732:function(e,t,n){var map={"./add-reuse-en.md":443,"./add-reuse-fr.md":444,"./analytics-en.md":445,"./analytics-fr.md":446,"./api-en.md":447,"./api-fr.md":448,"./attachements-en.md":449,"./attachements-fr.md":450,"./bar-chart-race-en.md":451,"./bar-chart-race-fr.md":452,"./carto-stats-en.md":453,"./carto-stats-fr.md":454,"./carto-workshop-en.md":455,"./carto-workshop-fr.md":456,"./catalogues-en.md":457,"./catalogues-fr.md":458,"./catchment-area-en.md":459,"./catchment-area-fr.md":460,"./charts-en.md":461,"./charts-fr.md":462,"./concept-en.md":463,"./concept-fr.md":464,"./content-en.md":465,"./content-fr.md":466,"./contrib-workflows-fr.md":467,"./dashboard-en.md":468,"./dashboard-fr.md":469,"./datasets-en.md":470,"./datasets-fr.md":471,"./department-en.md":472,"./department-fr.md":473,"./div-admin-en.md":474,"./div-admin-fr.md":475,"./edition-dataset-en.md":476,"./edition-dataset-fr.md":477,"./enrichment-en.md":478,"./enrichment-fr.md":479,"./file-formats-en.md":480,"./file-formats-fr.md":481,"./game-localisation-en.md":482,"./game-localisation-fr.md":483,"./game-quizz-en.md":484,"./game-quizz-fr.md":485,"./game-sort-en.md":486,"./game-sort-fr.md":487,"./geo-shapes-en.md":488,"./geo-shapes-fr.md":489,"./import-dataset-en.md":490,"./import-dataset-fr.md":491,"./infos-localisations-en.md":492,"./infos-localisations-fr.md":493,"./infos-parcelles-en.md":494,"./infos-parcelles-fr.md":495,"./licences-thematics-en.md":496,"./licences-thematics-fr.md":497,"./liste-fiches-en.md":498,"./liste-fiches-fr.md":499,"./members-en.md":500,"./members-fr.md":501,"./menu-en.md":502,"./menu-fr.md":503,"./navigation-en.md":504,"./navigation-fr.md":505,"./network-en.md":506,"./network-fr.md":507,"./news-en.md":508,"./news-fr.md":509,"./organisation-en.md":510,"./organisation-fr.md":511,"./parameter-reuse-en.md":512,"./parameter-reuse-fr.md":513,"./parameters-en.md":514,"./parameters-fr.md":515,"./periodic-series-en.md":516,"./periodic-series-fr.md":517,"./portal-en.md":518,"./portal-fr.md":519,"./portal-reuses-en.md":520,"./portal-reuses-fr.md":521,"./processing-en.md":522,"./processing-fr.md":523,"./proportion-en.md":524,"./proportion-fr.md":525,"./relations-en.md":526,"./relations-fr.md":527,"./reuses-carto-en.md":528,"./reuses-carto-fr.md":529,"./reuses-en.md":530,"./reuses-fr.md":531,"./reuses-game-en.md":532,"./reuses-game-fr.md":533,"./reuses-graphics-en.md":534,"./reuses-graphics-fr.md":535,"./reuses-text-en.md":536,"./reuses-text-fr.md":537,"./sankey-en.md":538,"./sankey-fr.md":539,"./sigin-en.md":540,"./sigin-fr.md":541,"./sunburst-en.md":542,"./sunburst-fr.md":543,"./update-dataset-en.md":544,"./update-dataset-fr.md":545,"./webhooks-en.md":546,"./webhooks-fr.md":547,"./word-cloud-en.md":548,"./word-cloud-fr.md":549};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=732},750:function(e,t,n){"use strict";n.r(t);var r=n(689),o=n(732),c={components:{DocPage:r.default},computed:{content:function(){if(this.$route){var content=o("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"));return content.default}}}},d=n(49),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("doc-page",{attrs:{content:e.content}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DocPage:n(689).default})}}]);