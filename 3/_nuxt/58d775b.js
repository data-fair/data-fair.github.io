(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{652:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuide":"Manuel utilisateur","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais."}}'),delete e.options._Ctor}},653:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuide":"User guide","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null}}'),delete e.options._Ctor}},654:function(e,t,n){},655:function(e,t,n){"use strict";n.r(t);n(6),n(7),n(11),n(12);var o=n(3),r=(n(44),n(8),n(55));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=n(352);n(661);var f={props:["content","onlyEnglish"],data:function(){return{ready:!1}},computed:l(l({},Object(r.b)(["env"])),{},{filledContent:function(){var content=d(this.content);return content.html=content.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var e=this,t={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(t).forEach((function(n){e.$el.querySelectorAll(n).forEach((function(e){t[n].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),this.ready=!0}},m=(n(656),n(48)),v=n(657),h=n(658),y=n(65),O=n.n(y),_=n(723),w=n(663),j=n(664),C=n(688),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"doc-page"},[n("v-row",[n("v-col",[n("h2",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof v.default&&Object(v.default)(component),"function"==typeof h.default&&Object(h.default)(component);t.default=component.exports;O()(component,{VAlert:_.a,VCol:w.a,VContainer:j.a,VRow:C.a})},656:function(e,t,n){"use strict";n(654)},657:function(e,t,n){"use strict";var o=n(652),r=n.n(o);t.default=r.a},658:function(e,t,n){"use strict";var o=n(653),r=n.n(o);t.default=r.a},665:function(e,t,n){var map={"./access-control-en.md":355,"./access-control-fr.md":356,"./analitycs-en.md":357,"./analitycs-fr.md":358,"./api-en.md":359,"./api-fr.md":360,"./api-key-en.md":361,"./api-key-fr.md":362,"./api-stats-en.md":363,"./api-stats-fr.md":364,"./back-office-en.md":365,"./back-office-fr.md":366,"./catalog-en.md":367,"./catalog-fr.md":368,"./connection-en.md":369,"./connection-fr.md":370,"./connectors-en.md":371,"./connectors-fr.md":372,"./content-pages-en.md":373,"./content-pages-fr.md":374,"./dataset-details-en.md":375,"./dataset-details-fr.md":376,"./dataset-management-en.md":377,"./dataset-management-fr.md":378,"./extensions-en.md":379,"./extensions-fr.md":380,"./home-en.md":381,"./home-fr.md":382,"./introduction-en.md":383,"./introduction-fr.md":384,"./licenses-en.md":385,"./licenses-fr.md":386,"./notify-en.md":387,"./notify-fr.md":388,"./periodic-processings-en.md":389,"./periodic-processings-fr.md":390,"./portal-config-en.md":391,"./portal-config-fr.md":392,"./portal-en.md":393,"./portal-fr.md":394,"./portal-notify-en.md":395,"./portal-notify-fr.md":396,"./portal-publication-en.md":397,"./portal-publication-fr.md":398,"./reuse-en.md":399,"./reuse-fr.md":400,"./user-management-en.md":401,"./user-management-fr.md":402,"./visu-config-en.md":403,"./visu-config-fr.md":404,"./visualization-en.md":405,"./visualization-fr.md":406,"./visualizations-page-en.md":407,"./visualizations-page-fr.md":408};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=665},736:function(e,t,n){"use strict";n.r(t);var o=n(655),r=n(665),c={components:{DocPage:o.default},computed:{content:function(){if(this.$route){var content=r("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"));return content.default}}}},l=n(48),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("doc-page",{attrs:{content:e.content}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DocPage:n(655).default})}}]);