(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4],{648:function(t,e,n){},654:function(t,e,n){"use strict";n.r(e);n(37),n(7),n(17),n(34),n(36),n(26),n(44),n(39);var r=n(352),o={props:["context","name","ignoreLocale"],computed:{sections:function(){var t=this;if(this.$route){var e=this.context.keys().filter((function(e){return!!t.ignoreLocale||e.includes("-".concat(t.$i18n.locale,".md"))})).map((function(e){return Object.assign(r(t.context(e).default).meta||{},{id:e.split("/")[1].split(".").shift().replace("-".concat(t.$i18n.locale),"")})}));return e.sort((function(t,e){return t.section<e.section?-1:t.section>e.section?1:t.subsection<e.subsection?-1:1})),e}}}},d=n(48),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticStyle:{"list-style-type":"none"}},t._l(t.sections.filter((function(s){return!s.subsection})),(function(section,i){return n("li",{key:"section-"+i,staticClass:"mb-5 text-h5"},[n("nuxt-link",{attrs:{to:t.localePath({name:t.name+"-id",params:{id:section.id}})}},[t._v("\n      "+t._s(i+1)+" - "+t._s(section.title)+"\n    ")]),t._v(" "),n("ul",{staticStyle:{"list-style-type":"none"}},t._l(t.sections.filter((function(s){return s.section===section.section&&s.subsection})),(function(e,r){return n("li",{key:r,staticClass:"mt-1 text-h6"},[n("nuxt-link",{staticClass:"text-h6",attrs:{to:t.localePath({name:t.name+"-id",params:{id:e.id}})}},[t._v("\n          "+t._s(i+1)+"."+t._s(r+1)+" - "+t._s(e.title)+"\n        ")])],1)})),0)],1)})),0)}),[],!1,null,null,null);e.default=component.exports},657:function(t,e,n){"use strict";n(7),n(8),n(51),n(354),n(648);var r=n(1);var o,d=n(88);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var d=data.attrs;if(d){data.attrs={};var c=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(d.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},661:function(t,e,n){var map={"./add-reuse-en.md":421,"./add-reuse-fr.md":422,"./analytics-en.md":423,"./analytics-fr.md":424,"./api-en.md":425,"./api-fr.md":426,"./attachements-en.md":427,"./attachements-fr.md":428,"./bar-chart-race-en.md":429,"./bar-chart-race-fr.md":430,"./carto-stats-en.md":431,"./carto-stats-fr.md":432,"./catalogues-en.md":433,"./catalogues-fr.md":434,"./catchment-area-en.md":435,"./catchment-area-fr.md":436,"./charts-en.md":437,"./charts-fr.md":438,"./concept-en.md":439,"./concept-fr.md":440,"./content-en.md":441,"./content-fr.md":442,"./dashboard-en.md":443,"./dashboard-fr.md":444,"./datasets-en.md":445,"./datasets-fr.md":446,"./div-admin-en.md":447,"./div-admin-fr.md":448,"./edition-dataset-en.md":449,"./edition-dataset-fr.md":450,"./enrichment-en.md":451,"./enrichment-fr.md":452,"./file-formats-en.md":453,"./file-formats-fr.md":454,"./game-localisation-en.md":455,"./game-localisation-fr.md":456,"./game-quizz-en.md":457,"./game-quizz-fr.md":458,"./game-sort-en.md":459,"./game-sort-fr.md":460,"./geo-shapes-en.md":461,"./geo-shapes-fr.md":462,"./import-dataset-en.md":463,"./import-dataset-fr.md":464,"./infos-localisations-en.md":465,"./infos-localisations-fr.md":466,"./infos-parcelles-en.md":467,"./infos-parcelles-fr.md":468,"./licences-thematics-en.md":469,"./licences-thematics-fr.md":470,"./liste-fiches-en.md":471,"./liste-fiches-fr.md":472,"./members-en.md":473,"./members-fr.md":474,"./menu-en.md":475,"./menu-fr.md":476,"./navigation-en.md":477,"./navigation-fr.md":478,"./network-en.md":479,"./network-fr.md":480,"./organisation-en.md":481,"./organisation-fr.md":482,"./parameter-reuse-en.md":483,"./parameter-reuse-fr.md":484,"./parameters-en.md":485,"./parameters-fr.md":486,"./periodic-series-en.md":487,"./periodic-series-fr.md":488,"./portal-en.md":489,"./portal-fr.md":490,"./processing-en.md":491,"./processing-fr.md":492,"./proportion-en.md":493,"./proportion-fr.md":494,"./relations-en.md":495,"./relations-fr.md":496,"./reuses-carto-en.md":497,"./reuses-carto-fr.md":498,"./reuses-en.md":499,"./reuses-fr.md":500,"./reuses-game-en.md":501,"./reuses-game-fr.md":502,"./reuses-graphics-en.md":503,"./reuses-graphics-fr.md":504,"./reuses-text-en.md":505,"./reuses-text-fr.md":506,"./sankey-en.md":507,"./sankey-fr.md":508,"./sigin-en.md":509,"./sigin-fr.md":510,"./sunburst-en.md":511,"./sunburst-fr.md":512,"./update-dataset-en.md":513,"./update-dataset-fr.md":514,"./webhooks-en.md":515,"./webhooks-fr.md":516,"./word-cloud-en.md":517,"./word-cloud-fr.md":518};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=661},672:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuide":"Manuel utilisateur","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}'),delete t.options._Ctor}},673:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuide":"User guide","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete t.options._Ctor}},695:function(t,e,n){"use strict";var r=n(672),o=n.n(r);e.default=o.a},696:function(t,e,n){"use strict";var r=n(673),o=n.n(r);e.default=o.a},719:function(t,e,n){"use strict";n.r(e);var r=n(661),o={data:function(){return{context:r}}},d=n(48),c=n(695),m=n(696),l=n(65),f=n.n(l),h=n(657),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"index-page"},[n("h2",{staticClass:"text-h4 my-6"},[t._v("\n    "+t._s(t.$t("userGuide"))+"\n    ")]),t._v(" "),n("toc",{attrs:{context:t.context,name:"user-guide"}})],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component),"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports;f()(component,{Toc:n(654).default}),f()(component,{VContainer:h.a})}}]);