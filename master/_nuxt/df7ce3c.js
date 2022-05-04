(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4],{660:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}'),delete e.options._Ctor}},661:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete e.options._Ctor}},664:function(e,t,n){},665:function(e,t,n){"use strict";n.r(t);n(6),n(8),n(11),n(12);var r=n(3),o=(n(44),n(7),n(55));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=n(352);n(673);var d={props:["content","onlyEnglish","onlyFrench","hideTitle"],data:function(){return{ready:!1}},computed:c(c({},Object(o.b)(["env"])),{},{filledContent:function(){var content=f(this.content);return content.html=content.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var e=this,t={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(t).forEach((function(n){e.$el.querySelectorAll(n).forEach((function(e){t[n].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),this.ready=!0}},h=(n(667),n(48)),m=n(668),v=n(669),y=n(65),_=n.n(y),O=n(703),w=n(685),j=n(675),C=n(686),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"doc-page"},[n("v-row",[n("v-col",[e.hideTitle?e._e():n("h2",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyFrench&&"fr"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(component),"function"==typeof v.default&&Object(v.default)(component);t.default=component.exports;_()(component,{VAlert:O.a,VCol:w.a,VContainer:j.a,VRow:C.a})},667:function(e,t,n){"use strict";n(664)},668:function(e,t,n){"use strict";var r=n(660),o=n.n(r);t.default=o.a},669:function(e,t,n){"use strict";var r=n(661),o=n.n(r);t.default=o.a},702:function(e,t,n){var map={"./contentpage-en.md":528,"./contentpage-fr.md":529,"./datapage-en.md":530,"./datapage-fr.md":531,"./datasetpage-en.md":532,"./datasetpage-fr.md":533,"./homepage-en.md":534,"./homepage-fr.md":535,"./use-portal-en.md":536,"./use-portal-fr.md":537,"./visualisation-en.md":538,"./visualisation-fr.md":539,"./visualisationspage-en.md":540,"./visualisationspage-fr.md":541};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=702},719:function(e,t,n){"use strict";n.r(t);var r=n(665),o=n(702),l={components:{DocPage:r.default},computed:{content:function(){if(this.$route){var content=o("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"));return content.default}}}},c=n(48),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("doc-page",{attrs:{content:e.content}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DocPage:n(665).default})}}]);