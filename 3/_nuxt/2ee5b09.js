(window.webpackJsonp=window.webpackJsonp||[]).push([[20,3],{656:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuide":"Manuel utilisateur","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration"}}'),delete e.options._Ctor}},657:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuide":"User guide","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure"}}'),delete e.options._Ctor}},658:function(e,t,n){},659:function(e,t,n){"use strict";n.r(t);n(6),n(7),n(11),n(12);var r=n(3),o=(n(44),n(8),n(55));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=n(352);n(666);var l={props:["content"],data:function(){return{ready:!1}},computed:c(c({},Object(o.b)(["env"])),{},{filledContent:function(){var content=m(this.content);return content.html=content.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var e=this,t={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(t).forEach((function(n){e.$el.querySelectorAll(n).forEach((function(e){t[n].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),this.ready=!0}},f=(n(660),n(48)),h=n(661),v=n(662),y=n(65),O=n.n(y),w=n(732),_=n(665),j=n(668),C=n(697),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"doc-page"},[n("v-row",[n("v-col",[n("h2",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof h.default&&Object(h.default)(component),"function"==typeof v.default&&Object(v.default)(component);t.default=component.exports;O()(component,{VAlert:w.a,VCol:_.a,VContainer:j.a,VRow:C.a})},660:function(e,t,n){"use strict";n(658)},661:function(e,t,n){"use strict";var r=n(656),o=n.n(r);t.default=o.a},662:function(e,t,n){"use strict";var r=n(657),o=n.n(r);t.default=o.a},673:function(e,t,n){var map={"./add-reuse-en.md":437,"./add-reuse-fr.md":438,"./analytics-en.md":439,"./analytics-fr.md":440,"./api-en.md":441,"./api-fr.md":442,"./attachements-en.md":443,"./attachements-fr.md":444,"./bar-chart-race-en.md":445,"./bar-chart-race-fr.md":446,"./carto-stats-en.md":447,"./carto-stats-fr.md":448,"./catalogues-en.md":449,"./catalogues-fr.md":450,"./catchment-area-en.md":451,"./catchment-area-fr.md":452,"./charts-en.md":453,"./charts-fr.md":454,"./concept-en.md":455,"./concept-fr.md":456,"./content-en.md":457,"./content-fr.md":458,"./dashboard-en.md":459,"./dashboard-fr.md":460,"./datasets-en.md":461,"./datasets-fr.md":462,"./div-admin-en.md":463,"./div-admin-fr.md":464,"./edition-dataset-en.md":465,"./edition-dataset-fr.md":466,"./enrichment-en.md":467,"./enrichment-fr.md":468,"./file-formats-en.md":469,"./file-formats-fr.md":470,"./game-localisation-en.md":471,"./game-localisation-fr.md":472,"./game-quizz-en.md":473,"./game-quizz-fr.md":474,"./game-sort-en.md":475,"./game-sort-fr.md":476,"./geo-shapes-en.md":477,"./geo-shapes-fr.md":478,"./import-dataset-en.md":479,"./import-dataset-fr.md":480,"./infos-localisations-en.md":481,"./infos-localisations-fr.md":482,"./infos-parcelles-en.md":483,"./infos-parcelles-fr.md":484,"./licences-thematics-en.md":485,"./licences-thematics-fr.md":486,"./liste-fiches-en.md":487,"./liste-fiches-fr.md":488,"./members-en.md":489,"./members-fr.md":490,"./menu-en.md":491,"./menu-fr.md":492,"./navigation-en.md":493,"./navigation-fr.md":494,"./network-en.md":495,"./network-fr.md":496,"./organisation-en.md":497,"./organisation-fr.md":498,"./parameter-reuse-en.md":499,"./parameter-reuse-fr.md":500,"./parameters-en.md":501,"./parameters-fr.md":502,"./periodic-series-en.md":503,"./periodic-series-fr.md":504,"./portal-en.md":505,"./portal-fr.md":506,"./processing-en.md":507,"./processing-fr.md":508,"./proportion-en.md":509,"./proportion-fr.md":510,"./relations-en.md":511,"./relations-fr.md":512,"./reuses-carto-en.md":513,"./reuses-carto-fr.md":514,"./reuses-en.md":515,"./reuses-fr.md":516,"./reuses-game-en.md":517,"./reuses-game-fr.md":518,"./reuses-graphics-en.md":519,"./reuses-graphics-fr.md":520,"./reuses-text-en.md":521,"./reuses-text-fr.md":522,"./sankey-en.md":523,"./sankey-fr.md":524,"./sigin-en.md":525,"./sigin-fr.md":526,"./sunburst-en.md":527,"./sunburst-fr.md":528,"./update-dataset-en.md":529,"./update-dataset-fr.md":530,"./webhooks-en.md":531,"./webhooks-fr.md":532,"./word-cloud-en.md":533,"./word-cloud-fr.md":534};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=673},750:function(e,t,n){"use strict";n.r(t);var r=n(659),o=n(673),d={components:{DocPage:r.default},computed:{content:function(){if(this.$route){var content=o("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"));return content.default}}}},c=n(48),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("doc-page",{attrs:{content:e.content}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DocPage:n(659).default})}}]);