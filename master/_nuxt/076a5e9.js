(window.webpackJsonp=window.webpackJsonp||[]).push([[20,4],{662:function(e,t,n){},668:function(e,t,n){"use strict";n.r(t);n(37),n(7),n(17),n(34),n(36),n(26),n(44),n(39);var r=n(352),o={props:["context","name","ignoreLocale"],computed:{sections:function(){var e=this;if(this.$route){var t=this.context.keys().filter((function(t){return!!e.ignoreLocale||t.includes("-".concat(e.$i18n.locale,".md"))})).map((function(t){return Object.assign(r(e.context(t).default).meta||{},{id:t.split("/")[1].split(".").shift().replace("-".concat(e.$i18n.locale),"")})}));return t.sort((function(e,t){return e.section<t.section?-1:e.section>t.section?1:e.subsection<t.subsection?-1:1})),t}}}},c=n(48),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticStyle:{"list-style-type":"none"}},e._l(e.sections.filter((function(s){return!s.subsection})),(function(section,i){return n("li",{key:"section-"+i,staticClass:"mb-5 text-h5"},[n("nuxt-link",{attrs:{to:e.localePath({name:e.name+"-id",params:{id:section.id}})}},[e._v("\n      "+e._s(i+1)+" - "+e._s(section.title)+"\n    ")]),e._v(" "),n("ul",{staticStyle:{"list-style-type":"none"}},e._l(e.sections.filter((function(s){return s.section===section.section&&s.subsection})),(function(t,r){return n("li",{key:r,staticClass:"mt-1 text-h6"},[n("nuxt-link",{staticClass:"text-h6",attrs:{to:e.localePath({name:e.name+"-id",params:{id:t.id}})}},[e._v("\n          "+e._s(i+1)+"."+e._s(r+1)+" - "+e._s(t.title)+"\n        ")])],1)})),0)],1)})),0)}),[],!1,null,null,null);t.default=component.exports},672:function(e,t,n){"use strict";n(7),n(8),n(51),n(354),n(662);var r=n(1);var o,c=n(88);t.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,t){var n=t.props,data=t.data,r=t.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(e){if("slot"===e)return!1;var t=c[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,r=t.props,data=t.data,o=t.children,d=data.attrs;return d&&(data.attrs={},n=Object.keys(d).filter((function(e){if("slot"===e)return!1;var t=d[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},676:function(e,t,n){var map={"./add-reuse-en.md":421,"./add-reuse-fr.md":422,"./analytics-en.md":423,"./analytics-fr.md":424,"./api-en.md":425,"./api-fr.md":426,"./attachements-en.md":427,"./attachements-fr.md":428,"./bar-chart-race-en.md":429,"./bar-chart-race-fr.md":430,"./carto-stats-en.md":431,"./carto-stats-fr.md":432,"./catalogues-en.md":433,"./catalogues-fr.md":434,"./catchment-area-en.md":435,"./catchment-area-fr.md":436,"./charts-en.md":437,"./charts-fr.md":438,"./concept-en.md":439,"./concept-fr.md":440,"./content-en.md":441,"./content-fr.md":442,"./dashboard-en.md":443,"./dashboard-fr.md":444,"./datasets-en.md":445,"./datasets-fr.md":446,"./div-admin-en.md":447,"./div-admin-fr.md":448,"./edition-dataset-en.md":449,"./edition-dataset-fr.md":450,"./enrichment-en.md":451,"./enrichment-fr.md":452,"./file-formats-en.md":453,"./file-formats-fr.md":454,"./game-localisation-en.md":455,"./game-localisation-fr.md":456,"./game-quizz-en.md":457,"./game-quizz-fr.md":458,"./game-sort-en.md":459,"./game-sort-fr.md":460,"./geo-shapes-en.md":461,"./geo-shapes-fr.md":462,"./import-dataset-en.md":463,"./import-dataset-fr.md":464,"./infos-localisations-en.md":465,"./infos-localisations-fr.md":466,"./infos-parcelles-en.md":467,"./infos-parcelles-fr.md":468,"./licences-thematics-en.md":469,"./licences-thematics-fr.md":470,"./liste-fiches-en.md":471,"./liste-fiches-fr.md":472,"./members-en.md":473,"./members-fr.md":474,"./menu-en.md":475,"./menu-fr.md":476,"./navigation-en.md":477,"./navigation-fr.md":478,"./network-en.md":479,"./network-fr.md":480,"./organisation-en.md":481,"./organisation-fr.md":482,"./parameter-reuse-en.md":483,"./parameter-reuse-fr.md":484,"./parameters-en.md":485,"./parameters-fr.md":486,"./periodic-series-en.md":487,"./periodic-series-fr.md":488,"./portal-en.md":489,"./portal-fr.md":490,"./processing-en.md":491,"./processing-fr.md":492,"./proportion-en.md":493,"./proportion-fr.md":494,"./relations-en.md":495,"./relations-fr.md":496,"./reuses-carto-en.md":497,"./reuses-carto-fr.md":498,"./reuses-en.md":499,"./reuses-fr.md":500,"./reuses-game-en.md":501,"./reuses-game-fr.md":502,"./reuses-graphics-en.md":503,"./reuses-graphics-fr.md":504,"./reuses-text-en.md":505,"./reuses-text-fr.md":506,"./sankey-en.md":507,"./sankey-fr.md":508,"./sigin-en.md":509,"./sigin-fr.md":510,"./sunburst-en.md":511,"./sunburst-fr.md":512,"./update-dataset-en.md":513,"./update-dataset-fr.md":514,"./webhooks-en.md":515,"./webhooks-fr.md":516,"./word-cloud-en.md":517,"./word-cloud-fr.md":518};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=676},687:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuideBack":"Manuel utilisateur back-office","userGuideFront":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}'),delete e.options._Ctor}},688:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuideBack":"User guide back-office","userGuideFront":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete e.options._Ctor}},715:function(e,t,n){"use strict";var r=n(687),o=n.n(r);t.default=o.a},716:function(e,t,n){"use strict";var r=n(688),o=n.n(r);t.default=o.a},744:function(e,t,n){"use strict";n.r(t);var r=n(676),o={data:function(){return{context:r}}},c=n(48),d=n(715),m=n(716),l=n(65),f=n.n(l),h=n(672),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"index-page"},[n("h2",{staticClass:"text-h4 my-6"},[e._v("\n    "+e._s(e.$t("userGuideBack"))+"\n    ")]),e._v(" "),n("toc",{attrs:{context:e.context,name:"user-guide-backoffice"}})],1)}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component),"function"==typeof m.default&&Object(m.default)(component);t.default=component.exports;f()(component,{Toc:n(668).default}),f()(component,{VContainer:h.a})}}]);