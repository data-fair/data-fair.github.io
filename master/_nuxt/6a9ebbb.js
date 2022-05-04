(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3],{662:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}'),delete t.options._Ctor}},663:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete t.options._Ctor}},666:function(t,e,n){},670:function(t,e,n){"use strict";var r=n(662),o=n.n(r);e.default=o.a},671:function(t,e,n){"use strict";var r=n(663),o=n.n(r);e.default=o.a},672:function(t,e,n){"use strict";n.r(e);n(7),n(6),n(11),n(12);var r=n(3);n(8),n(37),n(17),n(34),n(36),n(26),n(44),n(39);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=n(352),f=n(354),d={props:["chapter","ignoreLocale"],computed:{sections:function(){var t=this;if(this.$route){var e=f.keys().filter((function(e){return e.includes("/".concat(t.chapter,"/"))})).filter((function(e){return t.ignoreLocale||e.includes("-".concat(t.$i18n.locale,".md"))})).map((function(e){var content=f(e).default;return c(c({id:e.split("/").pop().split(".").shift().replace("-".concat(t.$i18n.locale),"")},l(f(e).default).meta),{},{content:content})})).filter((function(section){return section.published||!0}));return e.sort((function(t,e){return t.section<e.section?-1:t.section>e.section?1:!t.subsection||t.subsection<e.subsection?-1:1})),e}}}},h=n(48),m=n(670),v=n(671),y=n(65),_=n.n(y),O=n(645),j=n(675),C=n(162),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"index-page"},[n("h2",{staticClass:"text-h4 my-6"},[t._v("\n    "+t._s(t.$t(t.chapter))+"\n    "),n("v-btn",{attrs:{to:t.localePath({name:"full-id",params:{id:t.chapter},query:{print:!0}}),icon:""}},[n("v-icon",{attrs:{color:"primary"}},[t._v("\n        mdi-printer\n      ")])],1)],1),t._v(" "),n("ul",{staticStyle:{"list-style-type":"none"}},t._l(t.sections.filter((function(s){return!s.subsection})),(function(section,i){return n("li",{key:"section-"+i,staticClass:"mb-5 text-h5"},[n("nuxt-link",{attrs:{to:t.localePath({name:t.chapter+"-id",params:{id:section.id}})}},[t._v("\n        "+t._s(i+1)+" - "+t._s(section.title)+"\n        "),section.published?t._e():n("v-icon",{attrs:{color:"error",small:""}},[t._v("\n          mdi-alert\n        ")])],1),t._v(" "),n("ul",{staticClass:"my-4",staticStyle:{"list-style-type":"none"}},t._l(t.sections.filter((function(s){return s.section===section.section&&s.subsection})),(function(e,r){return n("li",{key:r,staticClass:"mt-1 text-h6"},[n("nuxt-link",{staticClass:"text-h6",attrs:{to:t.localePath({name:t.chapter+"-id",params:{id:e.id}})}},[t._v("\n            "+t._s(i+1)+"."+t._s(r+1)+" - "+t._s(e.title)+"\n            "),e.published?t._e():n("v-icon",{attrs:{color:"error",small:""}},[t._v("\n              mdi-alert\n            ")])],1)],1)})),0)],1)})),0)])}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(component),"function"==typeof v.default&&Object(v.default)(component);e.default=component.exports;_()(component,{VBtn:O.a,VContainer:j.a,VIcon:C.a})},675:function(t,e,n){"use strict";n(8),n(7),n(51),n(353),n(666);var r=n(1);var o,c=n(88);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},708:function(t,e,n){"use strict";n.r(e);var r={},o=n(48),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("chapter-home",{attrs:{chapter:"interoperate","ignore-locale":!0}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChapterHome:n(672).default})}}]);