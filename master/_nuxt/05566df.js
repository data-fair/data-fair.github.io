(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3],{659:function(f,a){f.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push(`{"fr":{"tableOfContents":"Table des mati\xE8res","functional-presentation":"Pr\xE9sentation fonctionnelle","interoperate":"Interop\xE9rer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu'elle contient peuvent ne pas \xEAtre \xE0 jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}`),delete t.options._Ctor}},660:function(f,a){f.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete t.options._Ctor}},663:function(f,a,t){},667:function(f,a,t){"use strict";var p=t(659),m=t.n(p);a.default=m.a},668:function(f,a,t){"use strict";var p=t(660),m=t.n(p);a.default=m.a},669:function(f,a,t){"use strict";t.r(a);var p=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("v-container",{staticClass:"index-page"},[r("h2",{staticClass:"text-h4 my-6"},[e._v(`
    `+e._s(e.$t(e.chapter))+`
    `),r("v-btn",{attrs:{to:e.localePath({name:"full-id",params:{id:e.chapter},query:{print:!0}}),icon:""}},[r("v-icon",{attrs:{color:"primary"}},[e._v(`
        mdi-printer
      `)])],1)],1),e._v(" "),r("ul",{staticStyle:{"list-style-type":"none"}},e._l(e.sections.filter(function(n){return!n.subsection}),function(n,c){return r("li",{key:"section-"+c,staticClass:"mb-5 text-h5"},[r("nuxt-link",{attrs:{to:e.localePath({name:e.chapter+"-id",params:{id:n.id}})}},[e._v(`
        `+e._s(c+1)+" - "+e._s(n.title)+`
        `),n.published?e._e():r("v-icon",{attrs:{color:"error",small:""}},[e._v(`
          mdi-alert
        `)])],1),e._v(" "),r("ul",{staticClass:"my-4",staticStyle:{"list-style-type":"none"}},e._l(e.sections.filter(function(g){return g.section===n.section&&g.subsection}),function(g,M){return r("li",{key:M,staticClass:"mt-1 text-h6"},[r("nuxt-link",{staticClass:"text-h6",attrs:{to:e.localePath({name:e.chapter+"-id",params:{id:g.id}})}},[e._v(`
            `+e._s(c+1)+"."+e._s(M+1)+" - "+e._s(g.title)+`
            `),g.published?e._e():r("v-icon",{attrs:{color:"error",small:""}},[e._v(`
              mdi-alert
            `)])],1)],1)}),0)],1)}),0)])},m=[],b=t(7),x=t(6),E=t(11),F=t(12),j=t(3),O=t(8),T=t(35),h=t(16),D=t(33),y=t(37),d=t(30),s=t(43),i=t(38);function v(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?v(Object(r),!0).forEach(function(n){Object(j.a)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var _=t(351),l=t(353),P={props:["chapter","ignoreLocale"],computed:{sections:function(){var o=this;if(!!this.$route){var r=l.keys().filter(function(n){return n.includes("/".concat(o.chapter,"/"))}).filter(function(n){return o.ignoreLocale||n.includes("-".concat(o.$i18n.locale,".md"))}).map(function(n){var c=l(n).default;return u(u({id:n.split("/").pop().split(".").shift().replace("-".concat(o.$i18n.locale),"")},_(l(n).default).meta),{},{content:c})}).filter(function(n){return n.published||!0});return r.sort(function(n,c){return n.section<c.section?-1:n.section>c.section?1:!n.subsection||n.subsection<c.subsection?-1:1}),r}}}},S=P,V=t(47),H=t(667),I=t(668),W=t(65),B=t.n(W),A=t(642),L=t(672),R=t(162),C=Object(V.a)(S,p,m,!1,null,null,null);typeof H.default=="function"&&Object(H.default)(C),typeof I.default=="function"&&Object(I.default)(C);var U=a.default=C.exports;B()(C,{VBtn:A.a,VContainer:L.a,VIcon:R.a})},672:function(f,a,t){"use strict";var p=t(8),m=t(7),b=t(50),x=t(352),E=t(663),F=t(1);function j(h){return F.a.extend({name:"v-".concat(h),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(y,d){var s=d.props,i=d.data,v=d.children;i.staticClass="".concat(h," ").concat(i.staticClass||"").trim();var u=i.attrs;if(u){i.attrs={};var _=Object.keys(u).filter(function(l){if(l==="slot")return!1;var P=u[l];return l.startsWith("data-")?(i.attrs[l]=P,!1):P||typeof P=="string"});_.length&&(i.staticClass+=" ".concat(_.join(" ")))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),y(s.tag,i,v)}})}var O=t(88),T=a.a=j("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(D,y){var d=y.props,s=y.data,i=y.children,v,u=s.attrs;return u&&(s.attrs={},v=Object.keys(u).filter(function(_){if(_==="slot")return!1;var l=u[_];return _.startsWith("data-")?(s.attrs[_]=l,!1):l||typeof l=="string"})),d.id&&(s.domProps=s.domProps||{},s.domProps.id=d.id),D(d.tag,Object(O.a)(s,{staticClass:"container",class:Array({"container--fluid":d.fluid}).concat(v||[])}),i)}})},707:function(f,a,t){"use strict";t.r(a);var p=function(){var O=this,T=O.$createElement,h=O._self._c||T;return h("chapter-home",{attrs:{chapter:"user-guide-backoffice"}})},m=[],b={},x=b,E=t(47),F=Object(E.a)(x,p,m,!1,null,null,null),j=a.default=F.exports;installComponents(F,{ChapterHome:t(669).default})}}]);
