(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{531:function(t,n,e){var map={"./access-control-fr.md":336,"./analitycs-fr.md":337,"./api-fr.md":338,"./api-key-fr.md":339,"./api-stats-fr.md":340,"./back-office-fr.md":341,"./catalog-fr.md":342,"./connection-fr.md":343,"./connectors-fr.md":344,"./content-pages-fr.md":345,"./dataset-details-fr.md":346,"./dataset-management-fr.md":347,"./extensions-fr.md":348,"./home-fr.md":349,"./introduction-fr.md":350,"./licenses-fr.md":351,"./notify-fr.md":352,"./periodic-processings-fr.md":353,"./portal-config-fr.md":354,"./portal-fr.md":355,"./portal-notify-fr.md":356,"./reuse-fr.md":357,"./user-management-fr.md":358,"./visu-config-fr.md":359,"./visualization-fr.md":360,"./visualizations-page-fr.md":361};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=531},557:function(t,n,e){"use strict";e.r(n);e(38),e(7),e(15),e(34),e(35),e(31),e(40),e(41);var r=e(334),o=e(531),c={computed:{sections:function(){if(this.$route){var t=o.keys().filter((function(t){return t.includes("-fr.md")})).map((function(t){return Object.assign(r(o(t).default).meta||{},{id:t.split("/")[1].split(".").shift().replace("-fr","")})}));return t.sort((function(t,n){return t.section<n.section?-1:t.section>n.section?1:t.subsection<n.subsection?-1:1})),t}}}},f=e(48),l=e(70),d=e.n(l),m=e(522),v=e(535),_=e(571),h=e(143),k=e(554),component=Object(f.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"index-page"},[e("h2",{staticClass:"text-h4 my-6"},[t._v("\n    Présentation fonctionnelle\n    "),e("v-btn",{attrs:{to:t.localePath({name:"full-functional-presentation"}),icon:""}},[e("v-icon",{attrs:{color:"primary"}},[t._v("\n        mdi-printer\n      ")])],1)],1),t._v(" "),t._l(t.sections.filter((function(s){return!s.subsection})),(function(section,i){return e("v-row",{key:i},[e("v-col",[e("nuxt-link",{staticClass:"text-h5",attrs:{to:t.localePath({name:"functional-presentation-id",params:{id:section.id}})}},[t._v("\n        "+t._s(i+1)+" - "+t._s(section.title)+"\n      ")]),t._v(" "),t._l(t.sections.filter((function(s){return s.section===section.section&&s.subsection})),(function(n,r){return e("v-row",{key:r,staticClass:"px-6"},[e("nuxt-link",{staticClass:"text-h6",attrs:{to:t.localePath({name:"functional-presentation-id",params:{id:n.id}})}},[t._v("\n          "+t._s(i+1)+"."+t._s(r+1)+" - "+t._s(n.title)+"\n        ")])],1)}))],2)],1)}))],2)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VBtn:m.a,VCol:v.a,VContainer:_.a,VIcon:h.a,VRow:k.a})}}]);