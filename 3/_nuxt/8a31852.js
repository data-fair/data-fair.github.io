(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{655:function(s,a){s.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push(`{"fr":{"tableOfContents":"Table des mati\xE8res","functional-presentation":"Pr\xE9sentation fonctionnelle","interoperate":"Interop\xE9rer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu'elle contient peuvent ne pas \xEAtre \xE0 jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}`),delete e.options._Ctor}},656:function(s,a){s.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete e.options._Ctor}},659:function(s,a,e){},660:function(s,a,e){"use strict";e.r(a);var l=function(){var n=this,t=n.$createElement,_=n._self._c||t;return _("v-container",{staticClass:"doc-page"},[_("v-row",[_("v-col",[n.hideTitle?n._e():_("h2",{staticClass:"display1 my-4"},[n._v(`
        `+n._s(n.filledContent.meta&&n.filledContent.meta.title||n.$route.params.id)+`
      `)]),n._v(" "),n.filledContent.meta&&n.filledContent.meta.published===!1?_("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):n._e(),n._v(" "),n.onlyEnglish&&n.$i18n.locale!=="en"?_("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):n._e(),n._v(" "),n.onlyFrench&&n.$i18n.locale!=="fr"?_("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):n._e(),n._v(" "),_("div",{directives:[{name:"show",rawName:"v-show",value:n.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:n._s(n.filledContent.html)}})],1)],1)],1)},r=[],C=e(6),T=e(8),M=e(11),w=e(12),v=e(3),A=e(43),L=e(7),p=e(55);function c(n,t){var _=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),_.push.apply(_,o)}return _}function u(n){for(var t=1;t<arguments.length;t++){var _=arguments[t]!=null?arguments[t]:{};t%2?c(Object(_),!0).forEach(function(o){Object(v.a)(n,o,_[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(_)):c(Object(_)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(_,o))})}return n}var y=e(351);e(668);var h={props:["content","onlyEnglish","onlyFrench","hideTitle"],data:function(){return{ready:!1}},computed:u(u({},Object(p.b)(["env"])),{},{filledContent:function(){var t=y(this.content);return t.html=t.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),t}}),mounted:function(){var t=this,_={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(_).forEach(function(o){t.$el.querySelectorAll(o).forEach(function(d){_[o].forEach(function(D){return d.classList.add(D)})})}),this.$el.querySelectorAll("img").forEach(function(o){o.parentElement.classList.add("text-center")}),this.ready=!0}},g=h,I=e(662),F=e(47),f=e(663),m=e(664),j=e(65),O=e.n(j),b=e(698),P=e(680),x=e(670),E=e(681),i=Object(F.a)(g,l,r,!1,null,null,null);typeof f.default=="function"&&Object(f.default)(i),typeof m.default=="function"&&Object(m.default)(i);var W=a.default=i.exports;O()(i,{VAlert:b.a,VCol:P.a,VContainer:x.a,VRow:E.a})},662:function(s,a,e){"use strict";var l=e(659),r=e.n(l)},663:function(s,a,e){"use strict";var l=e(655),r=e.n(l);a.default=r.a},664:function(s,a,e){"use strict";var l=e(656),r=e.n(l);a.default=r.a}}]);
