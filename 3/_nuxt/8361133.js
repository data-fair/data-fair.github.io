(window.webpackJsonp=window.webpackJsonp||[]).push([[21,4],{620:function(t,e,n){},629:function(t,e,n){"use strict";n.r(e);n(36),n(7),n(16),n(34),n(35),n(22),n(43),n(38);var r=n(346),o={props:["context","name"],computed:{sections:function(){var t=this;if(this.$route){var e=this.context.keys().filter((function(e){return e.includes("-".concat(t.$i18n.locale,".md"))})).map((function(e){return Object.assign(r(t.context(e).default).meta||{},{id:e.split("/")[1].split(".").shift().replace("-".concat(t.$i18n.locale),"")})}));return e.sort((function(t,e){return t.section<e.section?-1:t.section>e.section?1:t.subsection<e.subsection?-1:1})),e}}}},d=n(49),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticStyle:{"list-style-type":"none"}},t._l(t.sections.filter((function(s){return!s.subsection})),(function(section,i){return n("li",{key:"section-"+i,staticClass:"mb-5 text-h5"},[n("nuxt-link",{attrs:{to:t.localePath({name:t.name+"-id",params:{id:section.id}})}},[t._v("\n      "+t._s(i+1)+" - "+t._s(section.title)+"\n    ")]),t._v(" "),n("ul",{staticStyle:{"list-style-type":"none"}},t._l(t.sections.filter((function(s){return s.section===section.section&&s.subsection})),(function(e,r){return n("li",{key:r,staticClass:"mt-1 text-h6"},[n("nuxt-link",{staticClass:"text-h6",attrs:{to:t.localePath({name:t.name+"-id",params:{id:e.id}})}},[t._v("\n          "+t._s(i+1)+"."+t._s(r+1)+" - "+t._s(e.title)+"\n        ")])],1)})),0)],1)})),0)}),[],!1,null,null,null);e.default=component.exports},633:function(t,e,n){"use strict";n(7),n(8),n(52),n(348),n(620);var r=n(1);var o,d=n(87);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var d=data.attrs;if(d){data.attrs={};var c=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(d.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},638:function(t,e,n){var map={"./add-reuse-en.md":404,"./add-reuse-fr.md":405,"./analytics-en.md":406,"./analytics-fr.md":407,"./api-en.md":408,"./api-fr.md":409,"./attachements-en.md":410,"./attachements-fr.md":411,"./bar-chart-race-en.md":412,"./bar-chart-race-fr.md":413,"./carto-stats-en.md":414,"./carto-stats-fr.md":415,"./catalogues-en.md":416,"./catalogues-fr.md":417,"./catchment-area-en.md":418,"./catchment-area-fr.md":419,"./charts-en.md":420,"./charts-fr.md":421,"./concept-en.md":422,"./concept-fr.md":423,"./content-en.md":424,"./content-fr.md":425,"./dashboard-en.md":426,"./dashboard-fr.md":427,"./datasets-en.md":428,"./datasets-fr.md":429,"./div-admin-en.md":430,"./div-admin-fr.md":431,"./edition-dataset-en.md":432,"./edition-dataset-fr.md":433,"./enrichment-en.md":434,"./enrichment-fr.md":435,"./file-formats-en.md":436,"./file-formats-fr.md":437,"./game-localisation-en.md":438,"./game-localisation-fr.md":439,"./game-quizz-en.md":440,"./game-quizz-fr.md":441,"./game-sort-en.md":442,"./game-sort-fr.md":443,"./geo-shapes-en.md":444,"./geo-shapes-fr.md":445,"./import-dataset-en.md":446,"./import-dataset-fr.md":447,"./infos-localisations-en.md":448,"./infos-localisations-fr.md":449,"./infos-parcelles-en.md":450,"./infos-parcelles-fr.md":451,"./licences-thematics-en.md":452,"./licences-thematics-fr.md":453,"./liste-fiches-en.md":454,"./liste-fiches-fr.md":455,"./members-en.md":456,"./members-fr.md":457,"./menu-en.md":458,"./menu-fr.md":459,"./navigation-en.md":460,"./navigation-fr.md":461,"./network-en.md":462,"./network-fr.md":463,"./organisation-en.md":464,"./organisation-fr.md":465,"./parameter-reuse-en.md":466,"./parameter-reuse-fr.md":467,"./parameters-en.md":468,"./parameters-fr.md":469,"./periodic-series-en.md":470,"./periodic-series-fr.md":471,"./portal-en.md":472,"./portal-fr.md":473,"./processing-en.md":474,"./processing-fr.md":475,"./proportion-en.md":476,"./proportion-fr.md":477,"./relations-en.md":478,"./relations-fr.md":479,"./reuses-carto-en.md":480,"./reuses-carto-fr.md":481,"./reuses-en.md":482,"./reuses-fr.md":483,"./reuses-game-en.md":484,"./reuses-game-fr.md":485,"./reuses-graphics-en.md":486,"./reuses-graphics-fr.md":487,"./reuses-text-en.md":488,"./reuses-text-fr.md":489,"./sankey-en.md":490,"./sankey-fr.md":491,"./sigin-en.md":492,"./sigin-fr.md":493,"./sunburst-en.md":494,"./sunburst-fr.md":495,"./update-dataset-en.md":496,"./update-dataset-fr.md":497,"./webhooks-en.md":498,"./webhooks-fr.md":499,"./word-cloud-en.md":500,"./word-cloud-fr.md":501};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=638},646:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuide":"Manuel utilisateur","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration"}}'),delete t.options._Ctor}},647:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuide":"User guide","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure"}}'),delete t.options._Ctor}},678:function(t,e,n){"use strict";var r=n(646),o=n.n(r);e.default=o.a},679:function(t,e,n){"use strict";var r=n(647),o=n.n(r);e.default=o.a},704:function(t,e,n){"use strict";n.r(e);var r=n(638),o={data:function(){return{context:r}}},d=n(49),c=n(678),m=n(679),l=n(68),f=n.n(l),h=n(633),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"index-page"},[n("h2",{staticClass:"text-h4 my-6"},[t._v("\n    "+t._s(t.$t("userGuide"))+"\n    ")]),t._v(" "),n("toc",{attrs:{context:t.context,name:"user-guide"}})],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component),"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports;f()(component,{Toc:n(629).default}),f()(component,{VContainer:h.a})}}]);