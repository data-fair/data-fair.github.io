(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4],{620:function(t,n,e){},629:function(t,n,e){"use strict";e.r(n);e(36),e(7),e(16),e(34),e(35),e(22),e(43),e(38);var r=e(346),o={props:["context","name"],computed:{sections:function(){var t=this;if(this.$route){var n=this.context.keys().filter((function(n){return n.includes("-".concat(t.$i18n.locale,".md"))})).map((function(n){return Object.assign(r(t.context(n).default).meta||{},{id:n.split("/")[1].split(".").shift().replace("-".concat(t.$i18n.locale),"")})}));return n.sort((function(t,n){return t.section<n.section?-1:t.section>n.section?1:t.subsection<n.subsection?-1:1})),n}}}},c=e(49),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticStyle:{"list-style-type":"none"}},t._l(t.sections.filter((function(s){return!s.subsection})),(function(section,i){return e("li",{key:"section-"+i,staticClass:"mb-5 text-h5"},[e("nuxt-link",{attrs:{to:t.localePath({name:t.name+"-id",params:{id:section.id}})}},[t._v("\n      "+t._s(i+1)+" - "+t._s(section.title)+"\n    ")]),t._v(" "),e("ul",{staticStyle:{"list-style-type":"none"}},t._l(t.sections.filter((function(s){return s.section===section.section&&s.subsection})),(function(n,r){return e("li",{key:r,staticClass:"mt-1 text-h6"},[e("nuxt-link",{staticClass:"text-h6",attrs:{to:t.localePath({name:t.name+"-id",params:{id:n.id}})}},[t._v("\n          "+t._s(i+1)+"."+t._s(r+1)+" - "+t._s(n.title)+"\n        ")])],1)})),0)],1)})),0)}),[],!1,null,null,null);n.default=component.exports},633:function(t,n,e){"use strict";e(7),e(8),e(52),e(348),e(620);var r=e(1);var o,c=e(87);n.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var e=n.props,data=n.data,r=n.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,r=n.props,data=n.data,o=n.children,l=data.attrs;return l&&(data.attrs={},e=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),o)}})},634:function(t,n,e){var map={"./access-control-fr.md":349,"./analitycs-fr.md":350,"./api-fr.md":351,"./api-key-fr.md":352,"./api-stats-fr.md":353,"./back-office-fr.md":354,"./catalog-fr.md":355,"./connection-fr.md":356,"./connectors-fr.md":357,"./content-pages-fr.md":358,"./dataset-details-fr.md":359,"./dataset-management-fr.md":360,"./extensions-fr.md":361,"./home-fr.md":362,"./introduction-fr.md":363,"./licenses-fr.md":364,"./notify-fr.md":365,"./periodic-processings-fr.md":366,"./portal-config-fr.md":367,"./portal-fr.md":368,"./portal-notify-fr.md":369,"./portal-publication-fr.md":370,"./reuse-fr.md":371,"./user-management-fr.md":372,"./visu-config-fr.md":373,"./visualization-fr.md":374,"./visualizations-page-fr.md":375};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=634},640:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuide":"Manuel utilisateur","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration"}}'),delete t.options._Ctor}},641:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuide":"User guide","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure"}}'),delete t.options._Ctor}},672:function(t,n,e){"use strict";var r=e(640),o=e.n(r);n.default=o.a},673:function(t,n,e){"use strict";var r=e(641),o=e.n(r);n.default=o.a},700:function(t,n,e){"use strict";e.r(n);var r=e(634),o={data:function(){return{context:r}}},c=e(49),l=e(672),f=e(673),d=e(68),m=e.n(d),v=e(633),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"index-page"},[e("h2",{staticClass:"text-h4 my-6"},[t._v("\n    "+t._s(t.$t("functionalPresentation"))+"\n    ")]),t._v(" "),e("toc",{attrs:{context:t.context,name:"functional-presentation"}})],1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component),"function"==typeof f.default&&Object(f.default)(component);n.default=component.exports;m()(component,{Toc:e(629).default}),m()(component,{VContainer:v.a})}}]);