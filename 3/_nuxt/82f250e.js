(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{619:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functionalPresentation":"Présentation fonctionnelle","interoperate":"Interopérer","architecture":"Architecture technique","userGuide":"Manuel utilisateur","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration"}}'),delete t.options._Ctor}},620:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functionalPresentation":"Functional presentation","interoperate":"Interoperate","architecture":"Technical architecture","userGuide":"User guide","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure"}}'),delete t.options._Ctor}},621:function(t,e,n){},622:function(t,e,n){"use strict";n.r(e);n(6),n(7),n(10),n(11);var r=n(2),o=(n(43),n(8),n(55));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=n(346);n(629);var d={props:["content"],data:function(){return{ready:!1}},computed:l(l({},Object(o.b)(["env"])),{},{filledContent:function(){var content=f(this.content);return content.html=content.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var t=this,e={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(e).forEach((function(n){t.$el.querySelectorAll(n).forEach((function(t){e[n].forEach((function(e){return t.classList.add(e)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),this.ready=!0}},h=(n(623),n(49)),v=n(624),m=n(625),y=n(68),O=n.n(y),_=n(695),w=n(628),j=n(631),C=n(660),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"doc-page"},[n("v-row",[n("v-col",[n("h2",{staticClass:"display1 my-4"},[t._v("\n        "+t._s(t.filledContent.meta&&t.filledContent.meta.title||this.$route.params.id)+"\n      ")]),t._v(" "),t.filledContent.meta&&!1===t.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:t._s(t.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof v.default&&Object(v.default)(component),"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports;O()(component,{VAlert:_.a,VCol:w.a,VContainer:j.a,VRow:C.a})},623:function(t,e,n){"use strict";n(621)},624:function(t,e,n){"use strict";var r=n(619),o=n.n(r);e.default=o.a},625:function(t,e,n){"use strict";var r=n(620),o=n.n(r);e.default=o.a}}]);