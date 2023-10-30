(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{828:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"tableOfContents":"Table des matières","functional-presentation":"Présentation fonctionnelle","interoperate":"Interopérer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu\'elle contient peuvent ne pas être à jour.","install":"Installation et configuration","lessons":"Tutoriels","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null,"printChapter":"Imprimez ce chapitre en entier"}}'),delete t.options._Ctor}},829:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","lessons":"Tutorials","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being","printChapter":"Print this chapter"}}'),delete t.options._Ctor}},833:function(t,e,n){t.exports={}},839:function(t,e,n){"use strict";var r=n(828),o=n.n(r);e.default=o.a},840:function(t,e,n){"use strict";var r=n(829),o=n.n(r);e.default=o.a},843:function(t,e,n){"use strict";n.r(e);var r=n(810),o=n(856),c=n(224),l=(n(11),n(6),n(13),n(10),n(15),n(12),n(16),n(3));n(46),n(41),n(42),n(51),n(23),n(56),n(186);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=n(442),m=n(444),y={props:["chapter","ignoreLocale"],computed:{sections:function(){var t=this;if(this.$route){var e=m.keys().filter((function(e){return e.includes("/".concat(t.chapter,"/"))})).filter((function(e){return t.ignoreLocale||e.includes("-".concat(t.$i18n.locale,".md"))})).map((function(e){var content=m(e).default;return d(d({id:e.split("/").pop().split(".").shift().replace("-".concat(t.$i18n.locale),"")},h(m(e).default).meta),{},{content:content})})).filter((function(section){return section.published||!0}));return e.sort((function(t,e){return t.section<e.section?-1:t.section>e.section?1:!t.subsection||t.subsection<e.subsection?-1:1})),e}}}},v=n(67),_=n(839),O=n(840),component=Object(v.a)(y,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"index-page"},[e("h2",{staticClass:"text-h4 my-6"},[t._v("\n    "+t._s(t.$t(t.chapter))+"\n    "),e(r.a,{attrs:{to:t.localePath({name:"full-id",params:{id:t.chapter},query:{print:!0}}),icon:"",title:t.$t("printChapter")}},[e(c.a,{attrs:{color:"primary"}},[t._v("\n        mdi-printer\n      ")])],1)],1),t._v(" "),e("ul",{staticStyle:{"list-style-type":"none"}},t._l(t.sections.filter((function(s){return!s.subsection})),(function(section,i){return e("li",{key:"section-".concat(i),staticClass:"mb-5 text-h5"},[e("nuxt-link",{attrs:{to:t.localePath({name:"".concat(t.chapter,"-id"),params:{id:section.id}})}},[t._v("\n        "+t._s(i+1)+" - "+t._s(section.title)+"\n        "),section.published?t._e():e(c.a,{attrs:{color:"error",small:""}},[t._v("\n          mdi-alert\n        ")])],1),t._v(" "),e("ul",{staticClass:"my-4",staticStyle:{"list-style-type":"none"}},t._l(t.sections.filter((function(s){return s.section===section.section&&s.subsection})),(function(n,r){return e("li",{key:r,staticClass:"mt-1 text-h6"},[e("nuxt-link",{staticClass:"text-h6",attrs:{to:t.localePath({name:"".concat(t.chapter,"-id"),params:{id:n.id}})}},[t._v("\n            "+t._s(i+1)+"."+t._s(r+1)+" - "+t._s(n.title)+"\n            "),n.published?t._e():e(c.a,{attrs:{color:"error",small:""}},[t._v("\n              mdi-alert\n            ")])],1)],1)})),0)],1)})),0)])}),[],!1,null,null,null);"function"==typeof _.default&&Object(_.default)(component),"function"==typeof O.default&&Object(O.default)(component);e.default=component.exports},856:function(t,e,n){"use strict";n(11),n(6),n(13),n(68),n(27),n(443),n(833),n(89),n(79);var r=n(1);var o,c=n(122);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})}}]);