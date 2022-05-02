(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3],{660:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuideBack":"Manuel utilisateur back-office","userGuideFront":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}'),delete e.options._Ctor}},661:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuideBack":"User guide back-office","userGuideFront":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete e.options._Ctor}},663:function(e,t,n){},664:function(e,t,n){"use strict";n.r(t);n(6),n(7),n(11),n(12);var r=n(3),o=(n(44),n(8),n(55));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=n(352);n(669);var d={props:["content","onlyEnglish","onlyFrench"],data:function(){return{ready:!1}},computed:c(c({},Object(o.b)(["env"])),{},{filledContent:function(){var content=f(this.content);return content.html=content.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var e=this,t={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(t).forEach((function(n){e.$el.querySelectorAll(n).forEach((function(e){t[n].forEach((function(t){return e.classList.add(t)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),this.ready=!0}},h=(n(665),n(48)),m=n(666),v=n(667),y=n(65),_=n.n(y),O=n(737),w=n(673),j=n(672),C=n(700),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"doc-page"},[n("v-row",[n("v-col",[n("h2",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyFrench&&"fr"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(component),"function"==typeof v.default&&Object(v.default)(component);t.default=component.exports;_()(component,{VAlert:O.a,VCol:w.a,VContainer:j.a,VRow:C.a})},665:function(e,t,n){"use strict";n(663)},666:function(e,t,n){"use strict";var r=n(660),o=n.n(r);t.default=o.a},667:function(e,t,n){"use strict";var r=n(661),o=n.n(r);t.default=o.a},675:function(e,t,n){var map={"./analytics-fr.md":409,"./backup-fr.md":410,"./capture-fr.md":411,"./connectors-fr.md":412,"./data-fair-fr.md":413,"./http-log-fr.md":414,"./introduction-fr.md":415,"./notify-fr.md":416,"./portal-fr.md":417,"./processings-fr.md":418,"./simple-directory-fr.md":419,"./thumbor-fr.md":420};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=675},754:function(e,t,n){"use strict";n.r(t);var r=n(664),o=n(675),l={components:{DocPage:r.default},computed:{content:function(){if(this.$route){var content=o("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"));return content.default}}}},c=n(48),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("doc-page",{attrs:{content:e.content}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DocPage:n(664).default})}}]);