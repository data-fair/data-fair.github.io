(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{657:function(l,_){l.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push(`{"fr":{"tableOfContents":"Table des mati\xE8res","functional-presentation":"Pr\xE9sentation fonctionnelle","interoperate":"Interop\xE9rer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu'elle contient peuvent ne pas \xEAtre \xE0 jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}`),delete e.options._Ctor}},658:function(l,_){l.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete e.options._Ctor}},661:function(l,_,e){},662:function(l,_,e){"use strict";e.r(_);var r=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("v-container",{staticClass:"doc-page"},[n("v-row",[n("v-col",[t.hideTitle?t._e():n("h2",{staticClass:"display1 my-4"},[t._v(`
        `+t._s(t.filledContent.meta&&t.filledContent.meta.title||t.$route.params.id)+`
      `)]),t._v(" "),t.filledContent.meta&&t.filledContent.meta.published===!1?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):t._e(),t._v(" "),t.onlyEnglish&&t.$i18n.locale!=="en"?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):t._e(),t._v(" "),t.onlyFrench&&t.$i18n.locale!=="fr"?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:t._s(t.filledContent.html)}})],1)],1)],1)},s=[],f=e(6),i=e(8),d=e(11),g=e(12),p=e(3),y=e(43),O=e(7),u=e(55);function c(t,o){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);o&&(a=a.filter(function(h){return Object.getOwnPropertyDescriptor(t,h).enumerable})),n.push.apply(n,a)}return n}function v(t){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?c(Object(n),!0).forEach(function(a){Object(p.a)(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}var b=e(351);e(670);var P={props:["content","onlyEnglish","onlyFrench","hideTitle"],data:function(){return{ready:!1}},computed:v(v({},Object(u.b)(["env"])),{},{filledContent:function(){var o=b(this.content);return o.html=o.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),o}}),mounted:function(){var o=this,n={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(n).forEach(function(a){o.$el.querySelectorAll(a).forEach(function(h){n[a].forEach(function(A){return h.classList.add(A)})})}),this.$el.querySelectorAll("img").forEach(function(a){a.parentElement.classList.add("text-center")}),this.ready=!0}},x=P,R=e(664),E=e(47),F=e(665),j=e(666),D=e(65),C=e.n(D),T=e(700),M=e(682),w=e(672),L=e(683),m=Object(E.a)(x,r,s,!1,null,null,null);typeof F.default=="function"&&Object(F.default)(m),typeof j.default=="function"&&Object(j.default)(m);var I=_.default=m.exports;C()(m,{VAlert:T.a,VCol:M.a,VContainer:w.a,VRow:L.a})},664:function(l,_,e){"use strict";var r=e(661),s=e.n(r)},665:function(l,_,e){"use strict";var r=e(657),s=e.n(r);_.default=s.a},666:function(l,_,e){"use strict";var r=e(658),s=e.n(r);_.default=s.a},685:function(l,_,e){var r={"./overview-fr.md":355};function s(i){var d=f(i);return e(d)}function f(i){if(!e.o(r,i)){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}return r[i]}s.keys=function(){return Object.keys(r)},s.resolve=f,l.exports=s,s.id=685},709:function(l,_,e){"use strict";e.r(_);var r=function(){var u=this,c=u.$createElement,v=u._self._c||c;return v("doc-page",{attrs:{content:u.content}})},s=[],f=e(662),i=e(685),d={components:{DocPage:f.default},head:function(){var c=[{hid:"robots",name:"robots",content:"index"}];return{meta:c}},computed:{content:function(){if(!!this.$route){var c=i("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"));return c.default}}}},g=d,p=e(47),y=Object(p.a)(g,r,s,!1,null,null,null),O=_.default=y.exports;installComponents(y,{DocPage:e(662).default})}}]);
