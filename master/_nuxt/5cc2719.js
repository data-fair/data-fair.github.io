(window.webpackJsonp=window.webpackJsonp||[]).push([[21,4],{674:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","lessons":"Tutoriels","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}'),delete e.options._Ctor}},675:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","lessons":"Tutorials","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete e.options._Ctor}},678:function(e,t,n){},679:function(e,t,n){"use strict";n.r(t);n(6),n(8),n(11),n(12),n(26),n(16),n(17),n(39),n(37),n(33);var r=n(13),o=n(3),l=(n(55),n(43),n(7),n(56));n(687);function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=n(688),v=n(351),y=new h.Renderer;y.defaultCode=y.code,y.code=function(code,e){if("mermaid"===e){0;var t=(Math.random()+"").replace("0.","");return window.sessionStorage.setItem("mermaid-"+t,code),'<iframe class="mermaid-iframe" id="mermaid-iframe-'.concat(t,'" frameborder="0" scrolling="no" style="width:100%" src="').concat("/master/","mermaid?key=").concat(t,'"></iframe>')}return this.defaultCode(code,e)},h.use({renderer:y}),n(689);var w={props:["content","onlyEnglish","onlyFrench","hideTitle"],data:function(){return{ready:!1}},computed:m(m({},Object(l.b)(["env"])),{},{filledContent:function(){var content=v(this.content);return content.html=h.parse(content.markdown).replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,iframe,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=c(e.$el.querySelectorAll(".mermaid-iframe"));try{for(n.s();!(r=n.n()).done;)iframe=r.value,window.iFrameResize({},"#"+iframe.id)}catch(e){n.e(e)}finally{n.f()}o={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]},Object.keys(o).forEach((function(t){e.$el.querySelectorAll(t).forEach((function(e){o[t].forEach((function(t){return e.classList.add(t)}))}))})),e.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),e.ready=!0;case 6:case"end":return t.stop()}}),t)})))()}},O=(n(681),n(47)),_=n(682),j=n(683),C=n(65),E=n.n(C),k=n(725),x=n(703),P=n(691),T=n(704),component=Object(O.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"doc-page"},[n("v-row",[n("v-col",[e.hideTitle?e._e():n("h2",{staticClass:"display1 my-4"},[e._v("\n        "+e._s(e.filledContent.meta&&e.filledContent.meta.title||e.$route.params.id)+"\n      ")]),e._v(" "),e.filledContent.meta&&!1===e.filledContent.meta.published?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"constructionWarning",expression:"'constructionWarning'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyEnglish&&"en"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyEnglish",expression:"'onlyEnglish'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),e.onlyFrench&&"fr"!==e.$i18n.locale?n("v-alert",{directives:[{name:"t",rawName:"v-t",value:"onlyFrench",expression:"'onlyFrench'"}],attrs:{type:"warning",border:"left",outlined:""}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:e._s(e.filledContent.html)}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof _.default&&Object(_.default)(component),"function"==typeof j.default&&Object(j.default)(component);t.default=component.exports;E()(component,{VAlert:k.a,VCol:x.a,VContainer:P.a,VRow:T.a})},681:function(e,t,n){"use strict";n(678)},682:function(e,t,n){"use strict";var r=n(674),o=n.n(r);t.default=o.a},683:function(e,t,n){"use strict";var r=n(675),o=n.n(r);t.default=o.a},724:function(e,t,n){var map={"./contentpage-en.md":542,"./contentpage-fr.md":543,"./datapage-en.md":544,"./datapage-fr.md":545,"./datasetpage-en.md":546,"./datasetpage-fr.md":547,"./homepage-en.md":548,"./homepage-fr.md":549,"./use-portal-en.md":550,"./use-portal-fr.md":551,"./visualisation-en.md":552,"./visualisation-fr.md":553,"./visualisationspage-en.md":554,"./visualisationspage-fr.md":555};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=724},743:function(e,t,n){"use strict";n.r(t);var r=n(679),o=n(724),l={components:{DocPage:r.default},computed:{content:function(){if(this.$route){var content=o("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"));return content.default}}}},c=n(47),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("doc-page",{attrs:{content:e.content}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DocPage:n(679).default})}}]);