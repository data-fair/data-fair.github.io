(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3],{652:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuide":"Manuel utilisateur","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais."}}'),delete e.options._Ctor}},653:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuide":"User guide","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null}}'),delete e.options._Ctor}},654:function(e,t,n){},655:function(e,t,n){"use strict";n.r(t);n(6),n(7),n(11),n(12);var r=n(3),o=(n(44),n(8),n(55));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=n(352);n(661);var l={props:["content","onlyEnglish"],data:function(){return{ready:!1}},computed:c(c({},Object(o.b)(["env"])),{},{filledContent:function(){var content=m(this.content);return content.html=content.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var e=this,t={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(t).forEach((function(n){e.$el.querySelectorAll(n).forEach((function(e){t[n].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),this.ready=!0}},f=(n(656),n(48)),h=n(657),v=n(658),y=n(65),w=n.n(y),O=n(723),_=n(663),j=n(664),C=n(688),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"doc-page"},[n("v-row",[n("v-col",[n("h2",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof h.default&&Object(h.default)(component),"function"==typeof v.default&&Object(v.default)(component);t.default=component.exports;w()(component,{VAlert:O.a,VCol:_.a,VContainer:j.a,VRow:C.a})},656:function(e,t,n){"use strict";n(654)},657:function(e,t,n){"use strict";var r=n(652),o=n.n(r);t.default=o.a},658:function(e,t,n){"use strict";var r=n(653),o=n.n(r);t.default=o.a},668:function(e,t,n){var map={"./add-reuse-en.md":431,"./add-reuse-fr.md":432,"./analytics-en.md":433,"./analytics-fr.md":434,"./api-en.md":435,"./api-fr.md":436,"./attachements-en.md":437,"./attachements-fr.md":438,"./bar-chart-race-en.md":439,"./bar-chart-race-fr.md":440,"./carto-stats-en.md":441,"./carto-stats-fr.md":442,"./catalogues-en.md":443,"./catalogues-fr.md":444,"./catchment-area-en.md":445,"./catchment-area-fr.md":446,"./charts-en.md":447,"./charts-fr.md":448,"./concept-en.md":449,"./concept-fr.md":450,"./content-en.md":451,"./content-fr.md":452,"./dashboard-en.md":453,"./dashboard-fr.md":454,"./datasets-en.md":455,"./datasets-fr.md":456,"./div-admin-en.md":457,"./div-admin-fr.md":458,"./edition-dataset-en.md":459,"./edition-dataset-fr.md":460,"./enrichment-en.md":461,"./enrichment-fr.md":462,"./file-formats-en.md":463,"./file-formats-fr.md":464,"./game-localisation-en.md":465,"./game-localisation-fr.md":466,"./game-quizz-en.md":467,"./game-quizz-fr.md":468,"./game-sort-en.md":469,"./game-sort-fr.md":470,"./geo-shapes-en.md":471,"./geo-shapes-fr.md":472,"./import-dataset-en.md":473,"./import-dataset-fr.md":474,"./infos-localisations-en.md":475,"./infos-localisations-fr.md":476,"./infos-parcelles-en.md":477,"./infos-parcelles-fr.md":478,"./licences-thematics-en.md":479,"./licences-thematics-fr.md":480,"./liste-fiches-en.md":481,"./liste-fiches-fr.md":482,"./members-en.md":483,"./members-fr.md":484,"./menu-en.md":485,"./menu-fr.md":486,"./navigation-en.md":487,"./navigation-fr.md":488,"./network-en.md":489,"./network-fr.md":490,"./organisation-en.md":491,"./organisation-fr.md":492,"./parameter-reuse-en.md":493,"./parameter-reuse-fr.md":494,"./parameters-en.md":495,"./parameters-fr.md":496,"./periodic-series-en.md":497,"./periodic-series-fr.md":498,"./portal-en.md":499,"./portal-fr.md":500,"./processing-en.md":501,"./processing-fr.md":502,"./proportion-en.md":503,"./proportion-fr.md":504,"./relations-en.md":505,"./relations-fr.md":506,"./reuses-carto-en.md":507,"./reuses-carto-fr.md":508,"./reuses-en.md":509,"./reuses-fr.md":510,"./reuses-game-en.md":511,"./reuses-game-fr.md":512,"./reuses-graphics-en.md":513,"./reuses-graphics-fr.md":514,"./reuses-text-en.md":515,"./reuses-text-fr.md":516,"./sankey-en.md":517,"./sankey-fr.md":518,"./sigin-en.md":519,"./sigin-fr.md":520,"./sunburst-en.md":521,"./sunburst-fr.md":522,"./update-dataset-en.md":523,"./update-dataset-fr.md":524,"./webhooks-en.md":525,"./webhooks-fr.md":526,"./word-cloud-en.md":527,"./word-cloud-fr.md":528};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=668},740:function(e,t,n){"use strict";n.r(t);var r=n(655),o=n(668),d={components:{DocPage:r.default},computed:{content:function(){if(this.$route){var content=o("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"));return content.default}}}},c=n(48),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("doc-page",{attrs:{content:e.content}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DocPage:n(655).default})}}]);