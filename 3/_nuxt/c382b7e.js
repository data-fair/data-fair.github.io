(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{678:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","lessons":"Tutoriels","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}'),delete e.options._Ctor}},679:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","lessons":"Tutorials","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete e.options._Ctor}},682:function(e,t,n){},683:function(e,t,n){"use strict";n.r(t);n(6),n(8),n(10),n(11),n(27),n(17),n(16),n(41),n(40),n(34);var r=n(13),o=n(3),c=(n(56),n(44),n(39),n(74),n(7),n(45));n(691);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=n(692),v=n(352),y=new m.Renderer;y.defaultCode=y.code,y.code=function(code,e){if("mermaid"===e){0;var t=(Math.random()+"").replace("0.","");return window.sessionStorage.setItem("mermaid-"+t,code),'<iframe class="mermaid-iframe" id="mermaid-iframe-'.concat(t,'" frameborder="0" scrolling="no" style="width:100%" src="').concat("/3/","mermaid?key=").concat(t,'"></iframe>')}return this.defaultCode(code,e)},m.use({renderer:y}),n(693);var w={props:["content","onlyEnglish","onlyFrench","hideTitle"],data:function(){return{ready:!1}},computed:h(h(h({},Object(c.c)(["env"])),Object(c.b)(["navContent"])),{},{filledContent:function(){var content=v(this.content);return content.html=m.parse(content.markdown).replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content},breadcrumbs:function(){var e=this,t=this.$route.path.split("/")[1],n=this.navContent(this.$i18n.locale),r=n.find((function(s){return s.chapter===t&&(s.section||null)===(e.filledContent.meta.section||null)&&(s.subsection||null)===(e.filledContent.meta.subsection||null)})),o=[];if(r&&(o.push(this.$t(r.chapter)),r.section)){var c=n.find((function(s){return s.chapter===t&&s.section===r.section&&!s.subsection}));if(o.push(c.title),r.subsection){var l=n.find((function(s){return s.chapter===t&&s.section===r.section&&s.subsection===r.subsection}));o.push(l.title)}}return o}}),mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,iframe,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=l(e.$el.querySelectorAll(".mermaid-iframe"));try{for(n.s();!(r=n.n()).done;)iframe=r.value,window.iFrameResize({},"#"+iframe.id)}catch(e){n.e(e)}finally{n.f()}o={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]},Object.keys(o).forEach((function(t){e.$el.querySelectorAll(t).forEach((function(e){o[t].forEach((function(t){return e.classList.add(t)}))}))})),e.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),e.ready=!0;case 6:case"end":return t.stop()}}),t)})))()}},_=(n(685),n(49)),O=n(686),j=n(687),C=n(65),E=n.n(C),k=n(728),x=n(707),A=n(694),S=n(708),component=Object(_.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"doc-page"},[n("div",{staticClass:"hidden-breadcrumb section-title"},[e._v("\n    "+e._s(e.breadcrumbs.slice(0,e.breadcrumbs.length-1).join(" / "))+"\n  ")]),e._v(" "),n("v-row",[n("v-col",[e.hideTitle?e._e():n("h2",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyFrench&&"fr"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof O.default&&Object(O.default)(component),"function"==typeof j.default&&Object(j.default)(component);t.default=component.exports;E()(component,{VAlert:k.a,VCol:x.a,VContainer:A.a,VRow:S.a})},685:function(e,t,n){"use strict";n(682)},686:function(e,t,n){"use strict";var r=n(678),o=n.n(r);t.default=o.a},687:function(e,t,n){"use strict";var r=n(679),o=n.n(r);t.default=o.a}}]);