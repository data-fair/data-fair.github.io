(window.webpackJsonp=window.webpackJsonp||[]).push([[1],Array(121).concat([function(t,e){t.exports=function(n){n.options.__i18n=n.options.__i18n||[],n.options.__i18n.push(`{"fr":{"tableOfContents":"Table des mati\xE8res","functional-presentation":"Pr\xE9sentation fonctionnelle","interoperate":"Interop\xE9rer","technical-architecture":"Architecture technique","user-guide-backoffice":"Manuel utilisateur back-office","user-guide-frontoffice":"Manuel utilisateur front-office","constructionWarning":"Cette page est en chantier et les informations qu'elle contient peuvent ne pas \xEAtre \xE0 jour.","install":"Installation et configuration","onlyEnglish":"Cette page est disponible uniquement en anglais.","onlyFrench":null}}`),delete n.options._Ctor}},function(t,e){t.exports=function(n){n.options.__i18n=n.options.__i18n||[],n.options.__i18n.push('{"en":{"tableOfContents":"Table of contents","functional-presentation":"Functional presentation","interoperate":"Interoperate","technical-architecture":"Technical architecture","user-guide-backoffice":"User guide back-office","user-guide-frontoffice":"User guide front-office","constructionWarning":"This page is in construction and the information it contains can be outdated.","install":"Install and configure","onlyEnglish":null,"onlyFrench":"This page is only available in french for the time being"}}'),delete n.options._Ctor}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var i=function(){var s=this,z=s.$createElement,f=s._self._c||z;return f("v-list",{attrs:{dense:"",expand:""}},[s._l(s.chapters,function(y,l){return[f("v-list-group",{key:y.id,attrs:{"no-action":"",value:l===0}},[f("v-list-item",{attrs:{slot:"activator",to:s.localePath({name:y.id}),nuxt:"",exact:""},slot:"activator"},[f("v-list-item-title",[s._v(`
          `+s._s(y.title)+`
        `)])],1),s._v(" "),s._l(s.content.filter(function(u){return u.chapter===y.id&&!u.subsection}),function(u){return[s.content.filter(function(c){return c.chapter===y.id&&c.section==u.section&&c.subsection}).length?f("v-list-group",{key:u.id,attrs:{"no-action":"","sub-group":""}},[f("v-list-item",{attrs:{slot:"activator",to:s.localePath({name:y.id+"-id",params:{id:u.id}}),nuxt:""},slot:"activator"},[f("v-list-item-title",[s._v(`
              `+s._s(u.title)+`
            `)])],1),s._v(" "),s._l(s.content.filter(function(c){return c.chapter===y.id&&c.section==u.section&&c.subsection}),function(c){return f("v-list-item",{key:c.id,attrs:{to:s.localePath({name:y.id+"-id",params:{id:c.id}})}},[f("v-list-item-title",[s._v(`
              `+s._s(c.title)+`
              `),c.published?s._e():f("v-icon",{attrs:{color:"error",small:""}},[s._v(`
                mdi-alert
              `)])],1)],1)})],2):f("v-list-item",{key:u.id,attrs:{to:s.localePath({name:y.id+"-id",params:{id:u.id}})}},[f("v-list-item-title",[s._v(`
            `+s._s(u.title||u.id)+`
            `),u.published?s._e():f("v-icon",{attrs:{color:"error",small:""}},[s._v(`
              mdi-alert
            `)])],1)],1)]})],2)]})],2)},o=[],b=n(8),p=n(35),h=n(16),S=n(33),C=n(50),T=n(37),L=n(30),D=n(38),k=n(43),A=n(158),j=n(351),w={props:["folder"],computed:{content:function(){var z=this;if(!!this.$route){var f=n(353),y=f.keys().filter(function(l){return l.startsWith("./install")||l.startsWith("./interoperate")||l.startsWith("./technical-architecture")?!0:l.includes("-".concat(z.$i18n.locale,".md"))}).map(function(l){return Object.assign(j(f(l).default).meta||{},{chapter:l.split("/")[1],id:l.split("/")[2].split(".").shift().replace("-".concat(z.$i18n.locale),"")})}).filter(function(l){return l.published||!0});return y.sort(function(l,u){return z.chapters.findIndex(function(c){return c.id===l.chapter})<z.chapters.findIndex(function(c){return c.id===u.chapter})?-1:z.chapters.findIndex(function(c){return c.id===l.chapter})>z.chapters.findIndex(function(c){return c.id===u.chapter})?1:l.section&&!u.section?-1:!l.section&&u.section?1:l.section<u.section?-1:l.section>u.section?1:l.subsection&&!u.subsection?-1:!l.subsection&&u.subsection?1:l.subsection<u.subsection?-1:1}),y}},chapters:function(){return[{id:"functional-presentation",title:this.$t("functional-presentation")},{id:"user-guide-backoffice",title:this.$t("user-guide-backoffice")},{id:"user-guide-frontoffice",title:this.$t("user-guide-frontoffice")},{id:"technical-architecture",title:this.$t("technical-architecture")},{id:"interoperate",title:this.$t("interoperate")},{id:"install",title:this.$t("install")}]}}},q=w,v=n(47),m=n(169),d=n(170),g=n(65),I=n.n(g),E=n(162),x=n(163),F=n(166),a=n(103),V=n(45),r=Object(v.a)(q,i,o,!1,null,null,null);typeof m.default=="function"&&Object(m.default)(r),typeof d.default=="function"&&Object(d.default)(r);var P=e.default=r.exports;I()(r,{VIcon:E.a,VList:x.a,VListGroup:F.a,VListItem:a.a,VListItemTitle:V.b})},,,,,function(t,e,n){"use strict";var i=n(121),o=n.n(i);e.default=o.a},function(t,e,n){"use strict";var i=n(122),o=n.n(i);e.default=o.a},,function(t,e,n){"use strict";var i=n(1),o=n(0);n(161),i.a.use(n(628),{moment:o})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=function(){var a=this,V=a.$createElement,r=a._self._c||V;return r("v-app",[r("v-navigation-drawer",{attrs:{app:"",fixed:"",width:"300"}},[r("v-list-item",{attrs:{to:a.localePath({name:"index"}),nuxt:"",exact:""}},[r("v-list-item-avatar",{staticClass:"brand-logo"},[r("v-img",{attrs:{src:"./logo.png"}})],1),a._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h5 font-weight-bold"},[a._v(`
          Data Fair
        `)])],1)],1),a._v(" "),r("v-divider"),a._v(" "),r("folder-menu")],1),a._v(" "),r("v-main",[r("v-speed-dial",{attrs:{direction:"bottom",transition:"fade-transition",absolute:"",top:"",right:""},scopedSlots:a._u([{key:"activator",fn:function(){return[r("v-btn",{staticStyle:{"font-weight":"bold"},attrs:{icon:"",color:"primary"}},[a._v(`
          `+a._s(a.$i18n.locale)+`
        `)])]},proxy:!0}])},[a._v(" "),a._l(a.$i18n.locales.filter(function(P){return P!==a.$i18n.locale}),function(P){return r("v-btn",{key:P,staticStyle:{"font-weight":"bold"},attrs:{to:a.switchLocalePath(P),icon:"",nuxt:""}},[a._v(`
        `+a._s(P)+`
      `)])})],2),a._v(" "),r("nuxt")],1),a._v(" "),r("v-footer",{staticClass:"pa-3"},[r("v-spacer"),a._v(" "),r("div",[a._v("Maintained by "),r("a",{attrs:{href:"https://koumoul.com"}},[a._v("Koumoul")])])],1)],1)},o=[],b=n(164),p={components:{FolderMenu:b.default}},h=p,S=n(609),C=n(47),T=n(65),L=n.n(T),D=n(640),k=n(632),A=n(641),j=n(642),w=n(350),q=n(103),v=n(165),m=n(45),d=n(643),g=n(646),I=n(644),E=n(645),x=Object(C.a)(h,i,o,!1,null,null,null),F=e.a=x.exports;L()(x,{FolderMenu:n(164).default}),L()(x,{VApp:D.a,VBtn:k.a,VDivider:A.a,VFooter:j.a,VImg:w.a,VListItem:q.a,VListItemAvatar:v.a,VListItemContent:m.a,VListItemTitle:m.b,VMain:d.a,VNavigationDrawer:g.a,VSpacer:I.a,VSpeedDial:E.a})},function(t,e,n){"use strict";var i=function(){var j=this,w=j.$createElement,q=j._self._c||w;return q("v-app",[q("v-main",[q("nuxt")],1)],1)},o=[],b={},p=b,h=n(621),S=n(47),C=n(65),T=n.n(C),L=n(640),D=n(643),k=Object(S.a)(p,i,o,!1,null,null,null),A=e.a=k.exports;T()(k,{VApp:L.a,VMain:D.a})},,,,function(t,e,n){var i={"./about/overview-fr.md":355,"./functional-presentation/account-en.md":356,"./functional-presentation/account-fr.md":357,"./functional-presentation/analitycs-en.md":358,"./functional-presentation/analitycs-fr.md":359,"./functional-presentation/api-en.md":360,"./functional-presentation/api-fr.md":361,"./functional-presentation/api-stats-en.md":362,"./functional-presentation/api-stats-fr.md":363,"./functional-presentation/back-office-en.md":364,"./functional-presentation/back-office-fr.md":365,"./functional-presentation/connectors-en.md":366,"./functional-presentation/connectors-fr.md":367,"./functional-presentation/contact-en.md":368,"./functional-presentation/contact-fr.md":369,"./functional-presentation/content-pages-en.md":370,"./functional-presentation/content-pages-fr.md":371,"./functional-presentation/dataset-details-en.md":372,"./functional-presentation/dataset-details-fr.md":373,"./functional-presentation/dataset-management-en.md":374,"./functional-presentation/dataset-management-fr.md":375,"./functional-presentation/datasets-catalog-en.md":376,"./functional-presentation/datasets-catalog-fr.md":377,"./functional-presentation/home-en.md":378,"./functional-presentation/home-fr.md":379,"./functional-presentation/introduction-en.md":380,"./functional-presentation/introduction-fr.md":381,"./functional-presentation/notify-en.md":382,"./functional-presentation/notify-fr.md":383,"./functional-presentation/portal-config-en.md":384,"./functional-presentation/portal-config-fr.md":385,"./functional-presentation/portal-en.md":386,"./functional-presentation/portal-fr.md":387,"./functional-presentation/processings-en.md":388,"./functional-presentation/processings-fr.md":389,"./functional-presentation/user-management-en.md":390,"./functional-presentation/user-management-fr.md":391,"./functional-presentation/visu-config-en.md":392,"./functional-presentation/visu-config-fr.md":393,"./functional-presentation/visualization-details-en.md":394,"./functional-presentation/visualization-details-fr.md":395,"./functional-presentation/visualizations-catalog-en.md":396,"./functional-presentation/visualizations-catalog-fr.md":397,"./install/config.md":398,"./install/install.md":399,"./interoperate/api.md":400,"./interoperate/applications.md":401,"./interoperate/collectors.md":402,"./interoperate/connectors.md":403,"./interoperate/services.md":404,"./technical-architecture/analytics.md":405,"./technical-architecture/backup.md":406,"./technical-architecture/capture.md":407,"./technical-architecture/connectors.md":408,"./technical-architecture/data-fair.md":409,"./technical-architecture/http-log.md":410,"./technical-architecture/introduction.md":411,"./technical-architecture/notify.md":412,"./technical-architecture/portal.md":413,"./technical-architecture/processings.md":414,"./technical-architecture/simple-directory.md":415,"./technical-architecture/thumbor.md":416,"./user-guide-backoffice/add-reuse-en.md":417,"./user-guide-backoffice/add-reuse-fr.md":418,"./user-guide-backoffice/analytics-en.md":419,"./user-guide-backoffice/analytics-fr.md":420,"./user-guide-backoffice/api-en.md":421,"./user-guide-backoffice/api-fr.md":422,"./user-guide-backoffice/attachements-en.md":423,"./user-guide-backoffice/attachements-fr.md":424,"./user-guide-backoffice/bar-chart-race-en.md":425,"./user-guide-backoffice/bar-chart-race-fr.md":426,"./user-guide-backoffice/carto-stats-en.md":427,"./user-guide-backoffice/carto-stats-fr.md":428,"./user-guide-backoffice/catalogues-en.md":429,"./user-guide-backoffice/catalogues-fr.md":430,"./user-guide-backoffice/catchment-area-en.md":431,"./user-guide-backoffice/catchment-area-fr.md":432,"./user-guide-backoffice/charts-en.md":433,"./user-guide-backoffice/charts-fr.md":434,"./user-guide-backoffice/concept-en.md":435,"./user-guide-backoffice/concept-fr.md":436,"./user-guide-backoffice/content-en.md":437,"./user-guide-backoffice/content-fr.md":438,"./user-guide-backoffice/dashboard-en.md":439,"./user-guide-backoffice/dashboard-fr.md":440,"./user-guide-backoffice/datasets-en.md":441,"./user-guide-backoffice/datasets-fr.md":442,"./user-guide-backoffice/div-admin-en.md":443,"./user-guide-backoffice/div-admin-fr.md":444,"./user-guide-backoffice/edition-dataset-en.md":445,"./user-guide-backoffice/edition-dataset-fr.md":446,"./user-guide-backoffice/enrichment-en.md":447,"./user-guide-backoffice/enrichment-fr.md":448,"./user-guide-backoffice/file-formats-en.md":449,"./user-guide-backoffice/file-formats-fr.md":450,"./user-guide-backoffice/game-localisation-en.md":451,"./user-guide-backoffice/game-localisation-fr.md":452,"./user-guide-backoffice/game-quizz-en.md":453,"./user-guide-backoffice/game-quizz-fr.md":454,"./user-guide-backoffice/game-sort-en.md":455,"./user-guide-backoffice/game-sort-fr.md":456,"./user-guide-backoffice/geo-shapes-en.md":457,"./user-guide-backoffice/geo-shapes-fr.md":458,"./user-guide-backoffice/import-dataset-en.md":459,"./user-guide-backoffice/import-dataset-fr.md":460,"./user-guide-backoffice/infos-localisations-en.md":461,"./user-guide-backoffice/infos-localisations-fr.md":462,"./user-guide-backoffice/infos-parcelles-en.md":463,"./user-guide-backoffice/infos-parcelles-fr.md":464,"./user-guide-backoffice/licences-thematics-en.md":465,"./user-guide-backoffice/licences-thematics-fr.md":466,"./user-guide-backoffice/liste-fiches-en.md":467,"./user-guide-backoffice/liste-fiches-fr.md":468,"./user-guide-backoffice/members-en.md":469,"./user-guide-backoffice/members-fr.md":470,"./user-guide-backoffice/menu-en.md":471,"./user-guide-backoffice/menu-fr.md":472,"./user-guide-backoffice/navigation-en.md":473,"./user-guide-backoffice/navigation-fr.md":474,"./user-guide-backoffice/network-en.md":475,"./user-guide-backoffice/network-fr.md":476,"./user-guide-backoffice/organisation-en.md":477,"./user-guide-backoffice/organisation-fr.md":478,"./user-guide-backoffice/parameter-reuse-en.md":479,"./user-guide-backoffice/parameter-reuse-fr.md":480,"./user-guide-backoffice/parameters-en.md":481,"./user-guide-backoffice/parameters-fr.md":482,"./user-guide-backoffice/periodic-series-en.md":483,"./user-guide-backoffice/periodic-series-fr.md":484,"./user-guide-backoffice/portal-en.md":485,"./user-guide-backoffice/portal-fr.md":486,"./user-guide-backoffice/processing-en.md":487,"./user-guide-backoffice/processing-fr.md":488,"./user-guide-backoffice/proportion-en.md":489,"./user-guide-backoffice/proportion-fr.md":490,"./user-guide-backoffice/relations-en.md":491,"./user-guide-backoffice/relations-fr.md":492,"./user-guide-backoffice/reuses-carto-en.md":493,"./user-guide-backoffice/reuses-carto-fr.md":494,"./user-guide-backoffice/reuses-en.md":495,"./user-guide-backoffice/reuses-fr.md":496,"./user-guide-backoffice/reuses-game-en.md":497,"./user-guide-backoffice/reuses-game-fr.md":498,"./user-guide-backoffice/reuses-graphics-en.md":499,"./user-guide-backoffice/reuses-graphics-fr.md":500,"./user-guide-backoffice/reuses-text-en.md":501,"./user-guide-backoffice/reuses-text-fr.md":502,"./user-guide-backoffice/sankey-en.md":503,"./user-guide-backoffice/sankey-fr.md":504,"./user-guide-backoffice/sigin-en.md":505,"./user-guide-backoffice/sigin-fr.md":506,"./user-guide-backoffice/sunburst-en.md":507,"./user-guide-backoffice/sunburst-fr.md":508,"./user-guide-backoffice/update-dataset-en.md":509,"./user-guide-backoffice/update-dataset-fr.md":510,"./user-guide-backoffice/webhooks-en.md":511,"./user-guide-backoffice/webhooks-fr.md":512,"./user-guide-backoffice/word-cloud-en.md":513,"./user-guide-backoffice/word-cloud-fr.md":514,"./user-guide-frontoffice/contentpage-en.md":515,"./user-guide-frontoffice/contentpage-fr.md":516,"./user-guide-frontoffice/datapage-en.md":517,"./user-guide-frontoffice/datapage-fr.md":518,"./user-guide-frontoffice/datasetpage-en.md":519,"./user-guide-frontoffice/datasetpage-fr.md":520,"./user-guide-frontoffice/homepage-en.md":521,"./user-guide-frontoffice/homepage-fr.md":522,"./user-guide-frontoffice/use-portal-en.md":523,"./user-guide-frontoffice/use-portal-fr.md":524,"./user-guide-frontoffice/visualisation-en.md":525,"./user-guide-frontoffice/visualisation-fr.md":526,"./user-guide-frontoffice/visualisationspage-en.md":527,"./user-guide-frontoffice/visualisationspage-fr.md":528};function o(p){var h=b(p);return n(h)}function b(p){if(!n.o(i,p)){var h=new Error("Cannot find module '"+p+"'");throw h.code="MODULE_NOT_FOUND",h}return i[p]}o.keys=function(){return Object.keys(i)},o.resolve=b,t.exports=o,o.id=353},,function(t,e,n){"use strict";n.r(e),e.default=`Data Fair permet d'enrichir et de partager facilement ses donn\xE9es pour pouvoir ensuite les utiliser dans des applications. Le partage des donn\xE9es peut se faire en mode priv\xE9 (private data) ou public (open data). Les donn\xE9es partageables sont des donn\xE9es de type tabulaire ou g\xE9ographiques. Data Fair permet de mettre facilement des donn\xE9es \xE0 disposition, mais les m\xE9tadonn\xE9es sont minimes et **ce n'est donc pas un service de catalogage**. Il peut donc \xEAtre un excellent compl\xE9ment \xE0 un service comme [udata](https://github.com/opendatateam/udata) utilis\xE9 sur le site [data.gouv.fr](http://data.gouv.fr).

Ce service permet d'exposer facilement ses donn\xE9es via une API web, **contractualis\xE9e et document\xE9e**, ce qui permet aux d\xE9veloppeurs de les **r\xE9utiliser facilement dans leurs applications**. De plus les donn\xE9es peuvent \xEAtre **s\xE9mantis\xE9es, ce qui permet ensuite de les enrichir** avec d'autres donn\xE9es s\xE9mantis\xE9es. Ainsi, des donn\xE9es qui ont une adresse peuvent par exemple \xEAtre compl\xE9t\xE9es par des coordonn\xE9es GPS, ce qui permet ensuite de les afficher sur une carte. Mais bien qu'il puisse \xEAtre utilis\xE9 pour de l'enrichissement, Data Fair **n'est pas un atelier de traitement de la donn\xE9e**. Il est plut\xF4t compl\xE9mentaire et permet de publier de la donn\xE9e pr\xE9trait\xE9e.

## Concepts cl\xE9s

Les 3 concepts centraux sont : les jeux de donn\xE9es les services distants et les applications. La finalit\xE9 de ce service est de pouvoir utiliser facilement des applications adapt\xE9es \xE0 diff\xE9rents m\xE9tiers et aliment\xE9es par une combinaison de services distants et de donn\xE9es propres \xE0 l'utilisateur.

Les jeux de donn\xE9es sont cr\xE9\xE9s par les utilisateurs en chargeant des fichiers : le service stocke le fichier, l'analyse et d\xE9duit un sch\xE9ma de donn\xE9es. Les donn\xE9es sont ensuite index\xE9es suivant ce sch\xE9ma et peuvent \xEAtre requ\xEAt\xE9es au travers d'une API Web propre. L'utilisateur peut **s\xE9mantiser les champs des jeux de donn\xE9es**, par exemple en d\xE9terminant qu'une colonne contenant des donn\xE9es sur 5 chiffre est un champ de type Code Postal. Cette s\xE9mantisation permet 2 choses : les donn\xE9es peuvent \xEAtre enrichies et servir \xE0 certains traitements si on dispose des services distants appropri\xE9s, et les donn\xE9es peuvent \xEAtre utilis\xE9es dans des applications adapt\xE9es \xE0 leurs concepts. Pour une liste des formats de fichiers support\xE9s [consultez cette page](user-guide/format).

En compl\xE9ment des jeux de donn\xE9es bas\xE9s fichiers Data Fair permet \xE9galement de cr\xE9er des jeux de donn\xE9es incr\xE9mentaux qui sont \xE9ditables en temps r\xE9el et des jeux de donn\xE9es virtuels qui sont des vues re-configurable d'un ou plusieurs jeux de donn\xE9es.

Les services distants mettent \xE0 disposition des fonctionnalit\xE9s sous forme d'APIs Web externes \xE0 Data Fair qui respectent quelques [r\xE8gles d'interoperabilit\xE9](interoperate/services). Un des objectifs de Data Fair est de **permettre \xE0 des non informaticiens d'utiliser facilement des APIs tierces avec leurs propres donn\xE9es**. Il y a 2 mani\xE8res d'exploiter les services distants : l'utilisateur peut les utiliser pour ajouter en temps diff\xE9r\xE9 des colonnes \xE0 ses jeux de donn\xE9es (exemple g\xE9ocodage) et les applications peuvent les exploiter en temps r\xE9el (exemple fonds de carte). Les services distants connect\xE9s sur une instance Data Fair ne sont pas g\xE9r\xE9s par les utilisateurs directement, mais plut\xF4t mis \xE0 leur disposition par les administrateurs. La soci\xE9t\xE9 [koumoul](https://koumoul.com) qui maintient Data Fair propose un certain nombre de services distants compatibles (fonds de carte, base des entreprises de France, cadastre, base nationale des adresses, etc.).

Les applications permettent d'exploiter au maximum le potentiel des donn\xE9es des utilisateurs et des services distants. Quelques exemples: un jeu de donn\xE9es contenant des codes de commune peut \xEAtre projet\xE9 sur une carte du d\xE9coupage administratif fran\xE7ais, un jeu de donn\xE9es contenant des codes de parcelles peut \xEAtre projet\xE9 sur le cadastre, etc. **Les applications ne sont pas d\xE9velopp\xE9es dans ce projet** : ce sont des applications Web d\xE9velopp\xE9es et d\xE9ploy\xE9es de mani\xE8re autonome qui respectent quelques [r\xE8gles d'interop\xE9rabilit\xE9](interoperate/applications) avec Data Fair. Elles peuvent \xEAtre open source ou non. Chaque application de base peut \xEAtre utilis\xE9e autant de fois que d\xE9sir\xE9 pour valoriser diff\xE9rents jeux de donn\xE9es. Data Fair permet de stocker et \xE9diter ces diff\xE9rents param\xE9trages d'une m\xEAme application de base.

## Contr\xF4les d'acc\xE8s

Le service permet de contr\xF4ler simplement mais de mani\xE8re puissante les permissions sur les diff\xE9rentes ressources. Les utilisateurs peuvent faire partie de une ou plusieurs organisations, qui peuvent elles m\xEAme contenir un ou plusieurs utilisateurs. Quand un utilisateur configure un jeux de donn\xE9es ou une application, il peut d\xE9terminer quels utilisateurs et organisations y ont acc\xE8s. Ouvrir un acc\xE8s \xE0 une organisation donne l'acc\xE8s \xE0 tous les membres de cette organisation. Les acc\xE8s peuvent \xE9galement \xEAtre ouverts en public et m\xEAme les personnes non authentifi\xE9es pourront alors acc\xE9der \xE0 la ressource.

Les **utilisateurs et organisations ne sont pas g\xE9r\xE9es dans ce service**. Ce service doit \xEAtre connect\xE9 \xE0 un annuaire qui impl\xE9mente le contrat du service [simple-directory](https://github.com/koumoul-dev/simple-directory).
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: User Account
section: 2
subsection : 7
description : User Accounts
published: true
---
Users can log in with a password and email or using an existing external account such as a Gmail account via the oAuth2 protocol.

![Connexion](./images/functional-presentation/connexion.jpg)


Once logged in, users can personalize their account.

It is possible to :
* set an avatar
* set first and last name  
* set birthday
* renew password
* link your account to a github, linkedin, google or facebook account
* view the different organizations in their account and the role for each of the organizations
* view the number of organizations created and the maximum number of organizations for the account
* create a new organization
* delete his account

![Compte](./images/functional-presentation/compte.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Compte utilisateur
section: 2
subsection : 7
description : Compte utilisateur
published: true
---

Si le portail de donn\xE9es est public, il n'y a pas d'obligation de cr\xE9er de compte pour l'utiliser. Les utilisateurs peuvent, si il le souhaitent, cr\xE9er un compte pour **s'abonner \xE0 des notifications** et cr\xE9er des **cl\xE9s d'APIs** pour utiliser les APIs avec moins de restrictions. Dans le cas ou le portail est priv\xE9, les utilisateurs auront besoin d'un compte, mais il leur faudra aussi des autorisations donn\xE9es par un administrateur de l'organisation propri\xE9taire du portail.

Pour limiter les probl\xE9matiques li\xE9es au RGPD, un **minimum de donn\xE9es est collect\xE9** et la seule donn\xE9e requise est l'email de l'utilisateur. Il peut renseigner un pr\xE9nom et un nom si il le souhaite, ou mettre un pseudonyme \xE0 la place. Si l'utilisateur ne se connecte pas \xE0 son compte pendant 3 ans, il est automatiquement supprim\xE9. Les utilisateurs peut \xE9galement **supprimer leur compte** \xE0 l'aide d'un bouton, sans \xE0 avoir \xE0 formuler une demande par mail ou autre.

La cr\xE9ation de compte se fait en renseignant un email et un mot de passe, et il y a aussi la possibilit\xE9 de  passer par un compte Gmail, Facebook, LinkedIn ou Github via le **protocole oAuth2**. Un m\xE9canisme de renouvellement de mot de passe est disponible pour les utilisateurs ayant perdu celui-ci ou d\xE9sirant le changer.

<img src="./images/functional-presentation/connexion.jpg"
     height="200" style="margin:20px auto;" />

Les utilisateurs qui cr\xE9ent des comptes par eux m\xEAme ont leur donn\xE9es stock\xE9es dans des bases de donn\xE9es. Leur mot de passe est encrypt\xE9 avec sels et multiple hachage pour garantir une s\xE9curit\xE9 maximale. Il y a des r\xE8gles de saisie de mot de passe pour \xE9viter d'en avoir de facilement trouvables.

Il est \xE9galement possible de configurer une connexion \xE0 un annuaire d'utilisateur externe au travers du protocole LDAP.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Portal analytics
section: 3
subsection : 12
updated: 2020-12-09
description : Portal usage statistics
published: true
---

Analytics let you measure the statistics of frequentation of the platform.  
It is possible to use **Matomo Analytics** (old piwik) or **Google Analytics** as a tracking system.

### Matomo Analytics
[Matomo Analytics](https://fr.matomo.org/) displays statistics in various visualizations: tables, graphs and maps. By selecting the different representations of statistics, it is possible to customize its dashboards.  
It is also possible to **anonymize the data** and record user journeys while complying with the recommendations of the [CNIL](https://www.cnil.fr/professionnel).

![Matomo](./images/functional-presentation/matomo.jpg)

It is possible to process personal data by activating the following features:
* **Right of access**: visitors can have access to their personal data
* **Right to portability**: visitor data may be retrieved in a machine-readable format
* **Right to be forgotten**: respect for the privacy of users by deleting their personal data
* **Right to withdraw consent**: visitors can revoke their consent at any time
* **Right to object**: visitors can easily opt out of being tracked
* **Anonymization features**: in one click, it is possible to anonymize personal data such as IP addresses, location and many more
* **Support for the "Do Not Track" functionality of browsers**: use of web browser settings regarding privacy settings
* **Delete historical data**: this data is automatically deleted from the database
* **Anonymization of historical data**: this data can be kept by anonymizing it.

### Google Analytics

The statistics under [Google Analytics](https://analytics.google.com/) are also available in different visualizations: tables, graphs and maps. It is also possible to customize its dashboards.

![Google Analytics](./images/functional-presentation/google-analytics.jpg)

### Configuration

The configuration of the user tracking system consists of two points.  
1. Configure the tracking system on the portal  
2. Configure events

<p>
</p>

**Configure the tracking system on the portal**

This process is available on the portal configuration.  
For **Google Analytics** you will need the *id number* and for **Matomo analytics** you will need the *tracker url* and *your site ID*.

![Configuration](./images/functional-presentation/config-GA-1.jpg)


**Configure events**
This process is available in the Data Fair settings in the *Outside calls (webhooks)* category.

You can define **which events** you want to track in your analytics:
* A new dataset has been created
* A dataset encountered an error
* A dataset has been finalized and is online
* A dataset has been published to a catalog
* A new reuse has been created
* A reuse encountered an error
* A reuse has been published on a catalog
* A dataset file has been updated

![Configuration](./images/functional-presentation/config-GA-2.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Analytics du portail
section: 3
subsection : 12
updated: 2020-12-09
description : Statistiques d\u2019utilisation du portail
published: true
---

Ce module permet de comptabiliser les diff\xE9rentes statistiques de fr\xE9quentation de la plateforme.  
Il est possible d'utiliser **Matomo Analytics** (ancienne piwik) ou **Google Analytics** comme syst\xE8me de suivi.

### Matomo Analytics
Les statistiques sous [Matomo Analytics](https://fr.matomo.org/) sont disponibles sous diff\xE9rentes formes : tableaux, graphiques et cartes. En s\xE9lectionnant les diff\xE9rentes repr\xE9sentations des statistiques, il est possible de personnaliser ses tableaux de bord.  
Il est \xE9galement possible d'**anonymiser les donn\xE9es** et d\u2019enregistrer les parcours utilisateurs tout en \xE9tant en conformit\xE9 avec les recommandations de la [CNIL](https://www.cnil.fr/professionnel).

![Matomo](./images/functional-presentation/matomo.jpg)

Il est possible de traiter des donn\xE9es personnelles en activant les fonctionnalit\xE9s suivantes :
* **Droit d'acc\xE8s** : les visiteurs peuvent avoir acc\xE8s \xE0 leurs donn\xE9es personnelles
* **Droit \xE0 la portabilit\xE9** : les donn\xE9es des visiteurs peuvent \xEAtre r\xE9cup\xE9r\xE9es dans un format lisible par une machine
* **Droit \xE0 l'oubli** : respect de la vie priv\xE9e des utilisateurs en supprimant leurs donn\xE9es personnelles
* **Droit de retirer son consentement** : les visiteurs peuvent revenir sur le consentement qu'ils ont accord\xE9 \xE0 n'importe quel moment
* **Droit d\u2019opposition** : les visiteurs peuvent facilement choisir de ne plus \xEAtre suivis
* **Fonctionnalit\xE9s d'anonymisation** : en un clic, il est possible d'anonymiser les donn\xE9es personnelles comme les adresses IP, la localisation et bien d'autres
* **Support de la fonctionnalit\xE9 "Ne pas pister" des navigateurs** : utilisation des r\xE9glages du navigateur web concernant les param\xE8tres relatifs \xE0 la vie priv\xE9e
* **Suppression des donn\xE9es historis\xE9es** : ces donn\xE9es sont supprim\xE9es automatiquement de la base de donn\xE9es
* **Anonymisation des donn\xE9es historis\xE9es** : on peut garder ces donn\xE9es en les anonymisant.

### Google Analytics

Les statistiques sous [Google Analytics](https://analytics.google.com/) sont aussi disponibles sous diff\xE9rentes formes : tableaux, graphiques et cartes. Il est aussi possible de personnaliser ses tableaux de bord.

![Google Analytics](./images/functional-presentation/google-analytics.jpg)

### Configuration

La configuration du syst\xE8me de suivi des utilisateurs se compose en deux points.  
1. Configuration du syst\xE8me de suivi sur le portail  
2. Configuration des \xE9v\xE9nements

<p>
</p>

**Configuration du syst\xE8me de suivi sur le portail**

Ce point de configuration est disponible sur la configuration du portail.
Pour **Google Analytics** vous aurez besoin du *num\xE9ro d'identifiant* et pour **Matomo analytics**, vous aurez besoin de l'*url du tracker* et de l'*identifiant de votre site*.

![Configuration](./images/functional-presentation/config-GA-1.jpg)


**Configuration des \xE9v\xE9nements**
Ce point de configuration est disponible dans les param\xE8tres de Data Fair \xE0 la cat\xE9gorie *Appels exterieurs (webhooks)*.

Vous pouvez d\xE9finir **quels \xE9v\xE9nements** vous souhaitez suivre dans vos Analytics :
* Un nouveau jeu de donn\xE9es a \xE9t\xE9 cr\xE9\xE9
* Un jeu de donn\xE9es a rencontr\xE9 une erreur
* Un jeu de donn\xE9es a \xE9t\xE9 finalis\xE9 et mis en ligne
* Un jeu de donn\xE9es a \xE9t\xE9 publi\xE9 sur un catalogue
* Un jeu de donn\xE9es a \xE9t\xE9 t\xE9l\xE9charg\xE9 dans un format fichier
* Une nouvelle r\xE9utilisation a \xE9t\xE9 cr\xE9\xE9e
* Une r\xE9utilisation a rencontr\xE9 une erreur
* Une r\xE9utilisation a \xE9t\xE9 publi\xE9e sur un catalogue
* Le fichier d'un jeu de donn\xE9es a \xE9t\xE9 mis \xE0 jour
* Un extrait filtr\xE9 d'un jeu de donn\xE9es a \xE9t\xE9 t\xE9l\xE9charg\xE9 dans un format fichier

![Configuration](./images/functional-presentation/config-GA-2.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: API Acces
section: 2
subsection : 9
description : APIs and global integration
published: true
---

All features of data management, cataloging, user management and statistics are available through **documented Rest APIs**.

API documentation is done following the **OpenAPI 3.0** specification. This allows clear and understandable documentation through interactive documentation. Developers can quickly acces and handle the API's.

Another benefit of using this specification is increased **interoperability**, with some computer systems (e.g. API gateways) being able to understand this specification.


![API](./images/functional-presentation/api.jpg)


The different possible uses of the API are described in more detail in [this section](./interoperate/api)..

It is possible to use the API to **harvest data from a portal**. For example, the site https://www.opendatarchives.fr/ regularly harvests data from the portal https://data.ademe.fr/ powered by Data Fair.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Acc\xE8s par API
section: 2
subsection : 9
description : APIs propos\xE9es et int\xE9gration globale
published: true
---

L\u2019ensemble des fonctionnalit\xE9s de la plateforme est disponible au travers d\u2019**APIs Rest document\xE9es**. Ces APIs peuvent \xEAtre appel\xE9es en dehors du portail, mais pour les acc\xE8s restreints il faut passer par l'utilisation d'une **cl\xE9 d'API**. Lors de l\u2019ajout d\u2019une cl\xE9 d\u2019api, il est possible de restreindre l\u2019acc\xE8s \xE0 une seule fonction. Il est ensuite possible de restreindre l\u2019acc\xE8s \xE0 une IP ou \xE0 un nom de domaine pr\xE9cis.

La documentation des APIs est r\xE9alis\xE9e en suivant la sp\xE9cification **OpenAPI 3.0**. Cela permet une documentation claire et compr\xE9hensible au travers d\u2019une documentation interactive. La prise en main des APIs par les d\xE9veloppeurs est ainsi plus rapide.

Un autre avantage d\u2019utiliser cette sp\xE9cification est l\u2019**interop\xE9rabilit\xE9** accrue, certains syst\xE8mes informatiques (par exemple les API gateway)  \xE9tant capable de comprendre cette sp\xE9cification. Les APIs r\xE9alis\xE9es avec Data Fair peuvent par exemple \xEAtre directement int\xE9gr\xE9es par des sites comme https://api.gouv.fr.

<img src="./images/functional-presentation/api.jpg"
     height="500" style="margin:20px auto;" />


Il est possible d'utiliser l'API pour **moissonner les donn\xE9es d'un portail**. Par exemple, le site https://opendatarchives.fr/ moissonne r\xE9guli\xE8rement les donn\xE9es du portail https://data.ademe.fr/ propuls\xE9 par Data Fair.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: API statistics
section: 3
subsection : 13
updated: 2020-12-09
description : API statistics
published: false
---
Data Fair and the various associated services make extensive use of cache mechanisms to improve access times to resources, so precise statistics on the use of the various access points of the platform can only be extracted afterwards. A module allows to extract **usage statistics** of APIs from the HTTP logs of services such as Nginx.

API access logs are published on Data Fair as a private dataset. Dataset can be used for consultation like another dataset, we can make visualizations on it and it is planned to create a content page presenting different views of this data in the form of a dashboard.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Statistiques de l'API
section: 3
subsection : 13
updated: 2020-12-09
description : Statistiques des API
published: false
---
Dans la mesure ou Data Fair et les diff\xE9rents services associ\xE9s utilisent beaucoup les m\xE9canismes de cache pour am\xE9liorer les temps d'acc\xE8s aux ressources, des statistiques pr\xE9cises d'utilisation des diff\xE9rents points d'acc\xE8s de la plateforme ne peuvent \xEAtre extraites qu'apr\xE8s coup. Un module permet d'extraire des **statistiques d'utilisation** des API \xE0 partir des logs HTTP de services tels que Nginx.

Les logs d'acc\xE8s aux API sont publi\xE9s sur Data Fair sous la forme d'un jeu de donn\xE9es priv\xE9s. Ce jeu de donn\xE9es peut \xEAtre utilis\xE9 en consultation comme un autre jeu de donn\xE9es, on peut faire des visualisations dessus et il est pr\xE9vu de r\xE9aliser une page de contenu pr\xE9sentant diff\xE9rentes vues de ces donn\xE9es sous la forme d\u2019un tableau de bord.

![Cl\xE9 d'api](./images/functional-presentation/metrics.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Back Office
section: 3
description : Back Office
published: true
---

The **back office** allows to manage different elements on the platform: dataset, visualizations, portal configuration, organization members, permissions, catalog's connectors (input or output) and periodic data collectors.


![Page d'accueil Data FAIR](./images/functional-presentation/back-office.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Gestion des contenus (Back Office)
section: 3
description : Gestion des contenus (Back Office)
published: true
---

Le **back office** permet de g\xE9rer diff\xE9rents \xE9l\xE9ments sur la plateforme :  les donn\xE9es, les visualisations, les portails, les membres des organisations, les permissions, les connecteurs vers d'autres catalogues de donn\xE9es (en entr\xE9e ou en sortie) et les traitements p\xE9riodiques. Il permet \xE9galement d'acc\xE9der \xE0 des m\xE9triques d'exploitation.

L'acc\xE8s au back office est bien s\xFBr restreint \xE0 des utilisateurs authentifi\xE9s, en particulier aux utilisateurs ayant les r\xF4les d'administrateur ou de contributeur.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Catalog connectors
section: 3
subsection : 7
updated: 2020-12-09
description : Catalog connectors
published: true
---

Connectors allow you to interact with other platforms or data services, both in reading and in writing.

In **writing**, the idea is to be able to push metadata into other **catalogs**. An example of a catalog is the french national open data catalog [data.gouv.fr](https://www.data.gouv.fr/fr): datasets published using Data Fair can be synchronized automatically and any change in the metadata is propagated to the remote catalog.

Pushing metadata to a catalog rather than being harvested by it offers several advantages including propagating changes immediately.

Connectors can eventually push data to these catalogs but it is best to avoid this because of data duplication and synchronization issues.
As mentioned before, the data is indexed in a very efficient way and it is better to query the data directly from Data Fair.

![Connecteur vers le catalogue data.gouv.fr](./images/functional-presentation/catalogues.jpg)

In **reading**, the approach is different and the connectors behave more like **metadata and data harvesters**. It is possible for each connector to configure the collection frequencies and the types of sources that one wishes to harvest.

Integrating the data into the platform makes it possible to index it and to be able to centralize access controls, an essential prerequisite if you want to be able to **merge** the data or consult different sources on a visualization.

It is possible to add new catalog connectors by following the instructions in [this section](./interoperate/connectors).
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Connecteurs de catalogues
section: 3
subsection : 7
updated: 2020-12-09
description : Connecteurs de catalogues
published: true
---

Les connecteurs permettent d\u2019interagir avec d\u2019autres plateformes ou services de donn\xE9es, en lecture comme en \xE9criture.

En **\xE9criture**, l\u2019id\xE9e est de pouvoir pousser des m\xE9tadonn\xE9es dans d\u2019autres **catalogues**. Un exemple de catalogue est le catalogue de donn\xE9es ouvertes national [data.gouv.fr](https://www.data.gouv.fr/fr/) : les jeux de donn\xE9es publi\xE9s \xE0 l\u2019aide de Data Fair peuvent \xEAtre synchronis\xE9s automatiquement et toute modification dans les m\xE9tadonn\xE9es est propag\xE9e vers le catalogue distant.

Le fait de pousser les m\xE9tadonn\xE9es vers un catalogue plut\xF4t que de se faire moissonner par lui offre plusieurs avantages dont le fait de propager imm\xE9diatement les modifications.

Les connecteurs peuvent \xE9ventuellement pousser les donn\xE9es vers ces catalogues mais il est pr\xE9f\xE9rable d\u2019\xE9viter cela \xE0 cause des probl\xE8mes de duplication et synchronisation de donn\xE9es. Comme mentionn\xE9 pr\xE9c\xE9demment, les donn\xE9es sont index\xE9e de mani\xE8re tr\xE8s performante et il est pr\xE9f\xE9rable de requ\xEAter les donn\xE9es directement \xE0 partir de Data Fair.

![Connecteur vers le catalogue data.gouv.fr](./images/functional-presentation/catalogues.jpg)

En ce qui concerne la **lecture**, l\u2019approche est par contre diff\xE9rente et les connecteurs se comportent plut\xF4t comme des **moissonneurs de m\xE9tadonn\xE9es et de donn\xE9es**. On peut ainsi pour chaque connecteur param\xE9trer les fr\xE9quences de collecte et les types de sources que l\u2019on souhaite moissonner.

Le fait d'int\xE9grer les donn\xE9es \xE0 la plateforme permet de les indexer et de pouvoir centraliser les contr\xF4les d\u2019acc\xE8s, pr\xE9requis indispensable si l\u2019on souhaite pouvoir **fusionner** les donn\xE9es ou consulter diff\xE9rentes sources sur une visualisation.

Il est possible de rajouter de nouveaux connecteurs de catalogues en suivant les instructions dans [cette section](./interoperate/connectors).
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Contact form
section: 2
subsection : 10
description : Contact form
published: false
---

All features of data management, cataloging, user management and statistics are available through **documented Rest APIs**.

API documentation is done following the **OpenAPI 3.0** specification. This allows clear and understandable documentation through interactive documentation. Developers can quickly acces and handle the API's.

Another benefit of using this specification is increased **interoperability**, with some computer systems (e.g. API gateways) being able to understand this specification.


![API](./images/functional-presentation/api.jpg)


The different possible uses of the API are described in more detail in [this section](./interoperate/api)..

It is possible to use the API to **harvest data from a portal**. For example, the site https://www.opendatarchives.fr/ regularly harvests data from the portal https://data.ademe.fr/ powered by Data Fair.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Formulaire de contact
section: 2
subsection : 10
description : Formulaire de contact
published: true
---

Pour collecter les remarques, demandes ou questions des utilisateurs, un formulaire de contact peut \xEAtre mis \xE0 disposition par simple param\xE9trage de l'adresse email de contact. Cette adresse n'est pas visible sur la page du formulaire pour \xE9viter d'\xEAtre collect\xE9e par des sites mal intentionn\xE9s.

Il y a \xE9galement des m\xE9canismes de protection (soucieux du respect du RGPD) qui sont mis en place pour \xE9viter les abus d'envoi qui pourraient \xEAtre faits par des robots.`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Content Pages
section: 2
subsection : 6
description : Content Pages
published: true
---

The **content pages** allow you to create different types of pages: articles, thematic pages around several datasets, news pages, data storytelling, licenses, conditions of use, ...  
It is possible to **highlight certain data** and set even more context, for example, or to create dashboards integrating different data
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Pages de contenus
section: 2
subsection : 6
description : Pages de contenus
published: true
---

Les **pages de contenus** permettent de cr\xE9er diff\xE9rents type de pages : articles, pages th\xE9matiques autour de plusieurs jeux de donn\xE9es, pages d'actualit\xE9s, data storytelling, licences, conditions d'utilisation, ...  Il est ainsi possible de **mettre en avant certaines donn\xE9es** et de leur donner encore plus de contexte, ou de faire des tableaux de bord int\xE9grants diff\xE9rentes donn\xE9es.

En plus de la saisie de texte libre, il est possible d'int\xE9grer diff\xE9rents types d'\xE9l\xE9ments : tableau d'un jeu de donn\xE9es, visualisation, liste de jeux de donn\xE9es, int\xE9gration de contenus externe, ...

Pour acc\xE9der aux pages de contenus cr\xE9\xE9es, il est possible de renseigner des liens dans la barre de navigation. Les liens peuvent appara\xEEtre directement dans la barre, ou dans un menu ajout\xE9 \xE0 celle-ci. Il est possible de cr\xE9er des pages **publiques** ou des pages **priv\xE9es**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title:  Dataset details
section: 2
subsection : 3
description : Dataset details
published: true
---
Datasets are presented with **visualizations adapted to the data** to be accessible to as many people as possible. Visitors can quickly absorb the data and **interact** with it.

Various tools allow a more informed public to be able to go further (downloading, use of the API, sharing, access to metadata, ...)

![D\xE9tails d'un jeu de donn\xE9es](./images/functional-presentation/detail-1.jpg)

The information thumbnail presents the data producer, the associated license, the date of the last update as well as various action buttons. These actions are the same as those on the thumbnails of the data catalog, and you can also **download the data**.

Below the title and description of the data, the visualizations associated with the dataset are presented with their description, which allows you to **give meaning to your data**, tell a story and highlight different aspects of the dataset or possible use cases.

The visualizations are **interactive** and it is possible to access the page of the visualization by clicking on its title.

![Page de pr\xE9sentation d'un jeu de donn\xE9es](./images/functional-presentation/detail-2.jpg)

At the bottom of the page, various buttons allow you to share the dataset page on social networks (Facebook, Twitter, Linkedin, etc.). The data page has **enriched metadata** which allows better indexing by search engines and display of a thumbnail on social networks. This thumbnail presents the first visualization associated with the dataset, and this graphical side helps to **increase the engagement** of social network users.

![Miniature jeu de donn\xE9es](./images/functional-presentation/detail-3.jpg)

It is possible to download part of the filtered dataset. The download interface is currently being improved to include the ability to download data in a wide variety of formats (CSV, TSV, XLS, TXT, GeoJson,\u2026), as well as attachments associated with the dataset .
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: D\xE9tails d\u2019un jeu de donn\xE9es
section: 2
subsection : 3
description : D\xE9tails d\u2019un jeu de donn\xE9es
published: true
---
Pour pouvoir \xEAtre accessibles au plus grand nombre, les jeux de donn\xE9es sont pr\xE9sent\xE9s avec des **visualisations adapt\xE9es aux donn\xE9es**. Cela permet de raconter une histoire et de mettre en avant diff\xE9rents aspects du jeu de donn\xE9es ou des cas d\u2019utilisations possibles. Les visiteurs du portail peuvent rapidement s\u2019impr\xE9gner des donn\xE9es et **interagir** avec elles.

Diff\xE9rentes **m\xE9tadonn\xE9es** (producteur, licence, date de derni\xE8re mise \xE0 jour, ...) sont pr\xE9sent\xE9es \xE0 l'utilisateur, et on retrouve les boutons d'action des vignettes du catalogue (vue tableau, acc\xE8s au sch\xE9ma, documentation d'API). D'autres actions suppl\xE9mentaires sont offertes \xE0 l'utilisateur. Il peut **t\xE9l\xE9charger les donn\xE9es sources** qui ont \xE9t\xE9 charg\xE9es par le producteur pour faire le jeu de donn\xE9es. Si l'utilisateur est authentifi\xE9 il peut s'abonner aux notifications li\xE9es \xE0 ce jeu de donn\xE9es, ce qui lui permet d'\xEAtre inform\xE9 quand les donn\xE9es sont mises \xE0 jour.

Il a acc\xE8s \xE0 une vue tableau en plein \xE9cran, qui lui permet de voir plus de lignes et de colonnes, et surtout d'obtenir une URL qui correspond aux filtres qu'il a appliqu\xE9s et qu'il peut **partager avec d'autres utilisateurs**. Il peut ainsi partager des donn\xE9es qui seraient par exemple filtr\xE9e sur une commune particuli\xE8re. Il est possible de n'afficher que certaine colonnes et de t\xE9l\xE9charger le jeu de donn\xE9es filtr\xE9 dans plusieurs formats (CSV, ODS, XLSX, GeoJson, ...).

Il est \xE9galement possible d'acc\xE9der aux **pi\xE8ces jointes** du jeu de donn\xE9es. Ce sont en g\xE9n\xE9ral des fichiers charg\xE9s en compl\xE9ment des fichiers de donn\xE9es, comme par exemple un manuel d'utilisation des donn\xE9es au format pdf.

<img src="./images/functional-presentation/detail-2.jpg"
     height="400" style="margin:20px auto;" />

En plus des visualisations du portail qui sont des r\xE9utilisations des donn\xE9es "internes", d'autres r\xE9utilisations de donn\xE9es peuvent \xEAtre mentionn\xE9es. Ces r\xE9utilisations peuvent \xEAtre pr\xE9sent\xE9es au travers d'une vignette cliquable, ou directement embarqu\xE9es dans la page en iframe.

Diff\xE9rents boutons permettent de partager la page du jeu de donn\xE9es sur les r\xE9seaux sociaux (Facebook, Twitter, Linkedin, ...). La page de donn\xE9es poss\xE8de des **m\xE9tadonn\xE9es enrichies** qui permettent une meilleure indexation par les moteurs de recherche et un affichage d\u2019une miniature sur les r\xE9seaux sociaux. Cette miniature pr\xE9sente la premi\xE8re visualisation associ\xE9e au jeu de donn\xE9es, et ce c\xF4t\xE9 graphique permet d\u2019**augmenter l\u2019engagement** des utilisateurs des r\xE9seaux sociaux.

<img src="./images/functional-presentation/detail-3.jpg"
     height="200" style="margin:20px auto;" />
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Dataset management
section: 3
subsection : 1
description : Dataset management
published: false
---

The datasets are represented in the form of sheets on the platform. A card has a title and data information. The information contains the name of the file, its size, the number of lines and the themes of the data. The data owner icon and publishing status are also available on each card.

![Fiche d'un jeu de donn\xE9es](./images/functional-presentation/jeu-2.jpg)

### Data formats

There are several types of datasets on the platform, files, editable datasets, virtual datasets.

* The **file datasets** correspond to data files loaded on the platform. Several file formats are supported such as CSV, TSV, XLS, TXT, GeoJson, KML, ESRI Shapefile, \u2026

* **Editable datasets** are data stored in the database and are more suitable for data that changes regularly. They are updated by API and are well suited for IOT data for example.

* **Virtual datasets** correspond to views of one or serveral datasets. They allow more advanced access control. For example, they can be used to create a public view, restricted to some rows or columns, of a more complete data set that remains private.

### Add a dataset
It is possible to import different data sources on Data Fair. You can already import files directly from your computer. It will soon be possible to import data from external sources like Airtable or Google drive.

After the file is loaded, it is converted to a more standard format internally and then automatically parsed to determine the schema of the dataset. The data is indexed and can be enriched with other external data. Final processing is carried out to calculate properties linked to the data (field cardinalities, geographical bounds, etc.) then the data set is available to be edited or used.

After this step, the data can be consulted at least in a table and can be sorted and filtered. If the concepts of **Latitude** and **Longitude** are assigned in the schema, the data can also be consulted on a map. If they have an **Images** concept, a gallery is generated.

### Edit a dataset

The edit page of a dataset allows you to work on the presentation and reusability of this dataset. This page allows you to modify the title of the dataset, update the data, complete the data schema, semanticize the data so that it can be used in visualizations or enriched via complementary services.

#### Data schema

The edit page of a dataset allows, among other things, to fill in the concepts in the **Data schema** section.  
Les concepts sont des notions connues pour la plateforme. Ils permettent d'**augmenter la r\xE9utilisabilit\xE9** de vos donn\xE9es et de faire le lien entre vos donn\xE9es et les fonctionnalit\xE9s de la plateforme.

![Sch\xE9ma d'un jeu de donn\xE9es](./images/functional-presentation/schema.jpg)


Using the concepts, you can **enrich your data** to give them even more value or project your data on a map.  
A concept is unique to a column of a dataset. You cannot have two different columns with the same concept for a dataset.

Concepts are necessary for the representation of certain visualizations. For example, your data cannot be projected on a map if you have not associated the concepts **Latitude** and **Longitude** to the columns that contain the latitude and longitude values.

In the **Data schema** section, you can fill in labels for each of the fields. These labels are used in the table view and in the different visualizations of the dataset.

#### Data enrichment

It is possible to enrich your data with data from open data such as the **SIRENE** database, the **cadastre**, **INSEE data and the BAN**.
* The SIRENE database brings together economic and legal information from more than 28 million business establishments, of which more than 11 million are active.
* The cadastre provides access to the various information concerning the plots. In particular, you can geocode parcel codes or obtain the surfaces of your parcels.
* INSEE data can be used to retrieve various information on administrative divisions (municipalities, departments, regions)
* The NAB is the French National Address Base. It allows you to geolocate addresses or find addresses from coordinates.

Depending on the data you have, you can choose the enrichment that suits you and thus give more value to your data.

#### Data Sharing Permissions

An administrator can control **data access permissions** with pressision. Depending on the role assigned to a user, the latter has the right to access, read and/or modify the content of the source.

![Persmissions d'un jeu de donn\xE9es](./images/functional-presentation/permissions.jpg)

We can set the role of **user** to a group of people and define whether they can access and read a platform resource.

It is also possible to manage permissions more finely and give rights to a single or multiple users. The list of people with permissions on a dataset is available on the edit page of this set.

#### Dataset Log

A dataset's log allows you to check the **change history** on the dataset.

![Journal d'un jeu de donn\xE9es](./images/functional-presentation/journal.jpg)

The log allows the **traceability** of changes to data sets, parameters and authorizations.

#### Attachments

It is possible to associate attachments to each row of a dataset. This is done by associating an archive in zip format that contains the files to be associated. There must also be a column in the dataset containing the names of the files to be associated with each row. Two types of files can be linked to lines: images (png, jpg, \u2026) or documents (pdf, docx, xlsx, \u2026). In the case of documents, they are indexed **fulltext** by the platform and searches take into account the content of these documents.

Attachments can also be directly attached to a dataset. For example, you can add documentation files or rich metadata.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Administration des jeux de donn\xE9es
section: 3
subsection : 1
description : Administration des jeux de donn\xE9es
published: true
---

Les jeux de donn\xE9es permettent de mettre \xE0 disposition de l'utilisateur des donn\xE9es, ainsi que des informations sur les donn\xE9es (m\xE9tadonn\xE9es) comme la licence associ\xE9e aux donn\xE9es, la date de mise \xE0 jour, le propri\xE9taire des donn\xE9es ...

<!-- ![Fiche d'un jeu de donn\xE9es](./images/functional-presentation/jeu-2.jpg) -->

### Types de jeux de donn\xE9es

Il existe plusieurs types de jeux de donn\xE9es sur la plateforme, les fichiers, les jeux de donn\xE9es incr\xE9mentaux, les jeux de donn\xE9es virtuels et des jeux de donn\xE9es externes.

* Les **jeux de donn\xE9es fichiers** correspondent \xE0 des donn\xE9es sous format tabulaire ou cartographique charg\xE9s sur la plateforme. Plusieurs formats de fichiers sont support\xE9s tels que le CSV, TSV, OpenDocument, XLS, XLSX, GeoJson, KML, KMZ, ESRI Shapefile, GPX et iCalendar. Suivant les besoins de nouveaux formats de fichiers sont r\xE9guli\xE8rement ajout\xE9s. Quand un fichier est charg\xE9, il est converti dans un format plus standard en interne, puis analys\xE9 automatiquement pour d\xE9terminer le sch\xE9ma du jeu de donn\xE9es. Le contributeur peut ensuite modifier ce sch\xE9ma, par exemple d\xE9terminer qu'une colonne aura sa donn\xE9e index\xE9e en tant que chaine de caract\xE8re plut\xF4t que nombre entier.

* Les **jeux de donn\xE9es incr\xE9mentaux** sont des donn\xE9es stock\xE9es en base et sont plut\xF4t adapt\xE9s \xE0 des donn\xE9es qui \xE9voluent r\xE9guli\xE8rement, ou mises \xE0 jour par des personnes m\xE9tier qui veulent juste modifier quelques lignes. La cr\xE9ation de ce type de jeu de donn\xE9es se fait en \xE9ditant son sch\xE9ma de donn\xE9es : on d\xE9fini chaque colonne et son type. Pour des donn\xE9es produites par des syst\xE8mes informatiques (donn\xE9es IOT par exemple), ces jeux de donn\xE9es sont g\xE9n\xE9ralement mis \xE0 jour par API. Dans le cas de mises \xE0 jour manuelles par des agents, ils sont mis \xE0 jour via un formulaire de saisie.

* Les **jeux de donn\xE9es virtuels** correspondent \xE0 des vues d\u2019un ou plusieurs jeux de donn\xE9es. Ils permettent d\u2019avoir un contr\xF4le d\u2019acc\xE8s plus pouss\xE9. Ils peuvent par exemple servir \xE0 cr\xE9er une vue publique, restreinte \xE0 certaines lignes et certaines colonnes, d\u2019un jeu de donn\xE9es plus complet qui reste priv\xE9. On peut par exemple restreindre un jeu de donn\xE9es national \xE0 un seul d\xE9partement. L'autre cas d'usage de ce type de jeu de donn\xE9es est d'op\xE9rer avec des donn\xE9es mill\xE9sim\xE9es ou territorialis\xE9es : on peut ainsi publier des donn\xE9es chaque ann\xE9e via un fichier qui a toujours le m\xEAme format puis faire une vue qui regroupe les diff\xE9rentes ann\xE9es.

* Les **jeux de donn\xE9es externes** n'ont pas de donn\xE9es index\xE9es sur la plateforme. Ils permettent de renseigner des m\xE9tadonn\xE9es (titre, description, licence, ...) et d'y associer des donn\xE9es dans des formats qui ne sont pas exploitables par la plateforme (PDF, Archive Zip, ...) ou de cataloguer des donn\xE9es pr\xE9sentes sur d'autres plateforme en renseignant un lien dans la description.

### Sch\xE9ma des donn\xE9es

La plateforme supporte l'indexation de donn\xE9es tabulaires. Chaque jeu de donn\xE9es (except\xE9 les jeux de donn\xE9es externes) poss\xE8de un sch\xE9ma qui est la description des diff\xE9rentes colonnes (ou champs) qui le composent. A minima, chaque colonne a un identifiant et un type, mais il est possible de renseigner des informations compl\xE9mentaires.

Un libell\xE9 et une description permettent d'avoir des ent\xEAtes de colonne plus lisibles et compr\xE9hensibles. Le champ peut avoir un groupe qui permet de le retrouver plus rapidement quand il y a beaucoup de colonnes. Si le champ est de type texte, on peut opter pour du formatage riche : il sera alors possible de mettre du HTML ou Markdown dans ce champ. Le champ peut \xE9galement \xEAtre d\xE9fini comme \xE9tant multi-valu\xE9, dans ce cas on sp\xE9cifie le s\xE9parateur utilis\xE9 dans la colonne entre les diff\xE9rentes valeurs.

<img src="./images/functional-presentation/schema.jpg"
     height="300" style="margin:40px auto;" />

Le dernier \xE9l\xE9ment qui peut \xEAtre renseign\xE9, et qui a une importance consid\xE9rable, est le **type m\xE9tier** associ\xE9 au champ. Cela se fait en s\xE9lectionnant un **concept issu d'un th\xE9saurus**. Il y a une base de concepts communs \xE0 toute la plateforme, et il est possible de **rajouter ses propres concepts**. Ceux-ci sont en g\xE9n\xE9ral li\xE9s \xE0 du vocabulaire issu du Web S\xE9mantique, le concept de code postal a par exemple l'identifiant \`http://schema.org/postalCode\`.

Ce typage m\xE9tier **augmente la r\xE9utilisabilit\xE9** des donn\xE9es et permet 2 choses au sein de la plateforme : **l'enrichissement \xE0 partir d'autres donn\xE9es**, et la proposition de **visualisations adapt\xE9es** (en simplifiant le param\xE9trage de celles-ci) : les concepts *latitude* et *longitude* permettent par exemple de param\xE9trer des cartes avec des marqueurs.

### M\xE9tadonn\xE9es et pi\xE8ces jointes

Certaines m\xE9tadonn\xE9es sont pr\xE9remplies, comme les dates de mise \xE0 jour des m\xE9tadonn\xE9es ou des donn\xE9es, et l'utilisateur les a cr\xE9e ou modifi\xE9. La page d\u2019\xE9dition d\u2019un jeu de donn\xE9es permet de modifier les diff\xE9rente m\xE9tadonn\xE9es de ce jeu. Il est possible de modifier le titre et la description, de d\xE9finir une **licence d'utilisation** et d'associer des **th\xE9matiques**. Les listes de licences et th\xE9matiques utilisables sont communes \xE0 toute l'organisation et peuvent \xEAtre \xE9dit\xE9es par les administrateurs.

Il est possible d\u2019associer des **pi\xE8ces jointes \xE0 chaque ligne** d\u2019un jeu de donn\xE9es. Cela se fait en associant une archive au format zip qui contient les fichiers \xE0 associer. Il faut aussi qu\u2019il y ait dans le jeu de donn\xE9es une colonne contenant les noms des fichiers \xE0 associer \xE0 chaque ligne. Deux types de fichiers peuvent \xEAtre li\xE9s aux lignes : des images (png, jpg, ...) ou des documents (pdf, docx, xlsx, ...). Dans le cas des documents, ils peuvent \xEAtre index\xE9s **fulltext** par la plateforme pour que les recherches tiennent compte du contenu de ces documents.

Les pi\xE8ces jointes peuvent aussi \xEAtre **directement attach\xE9es \xE0 un jeu de donn\xE9es**. On peut par exemple ajouter des fichiers de documentation ou des m\xE9tadonn\xE9es riches. On peut \xE9galement s'en servir pour publier des donn\xE9es qui ne peuvent pas \xEAtre index\xE9es par la plateforme dans le cas d'un jeu de donn\xE9es de type *externe*.

### Donn\xE9es maitre et enrichissement

Certaines donn\xE9es peuvent \xEAtre utilis\xE9es \xE0 diff\xE9rents endroits et dans diff\xE9rents processus par les organisations. Il est possible de d\xE9finir un jeu de donn\xE9es comme \xE9tant des **donn\xE9es maitre** (master-data en anglais). Ce sont des donn\xE9es qui font r\xE9f\xE9rence \xE0 des concepts particulier, et la plateforme met \xE0 disposition de toutes les organisation des donn\xE9es maitre.

Les donn\xE9es de la **base Sirene** sont rattach\xE9es aux concepts de *code siren*, *code siret* et *code APE* par exemple. Il y a \xE9galement des donn\xE9es mises \xE0 disposition \xE0 partir du **cadastre** (via des *code parcelle*) ou des donn\xE9es de l'INSEE (via les *code commune*, *code d\xE9partement*, ...). Il y a enfin des donn\xE9es d'adresses, issues de la **BAN**, qui permettent de faire du g\xE9ocodage. De nouvelles donn\xE9es de r\xE9f\xE9rence sont r\xE9guli\xE8rement ajout\xE9es \xE0 la plateforme, et chaque organisation peut elle m\xEAme cr\xE9er ses propres jeux de donn\xE9es pivots !

Ces donn\xE9es maitre sont d'une grande valeur, car elles permettent de **compl\xE9ter facilement les autres donn\xE9es**. Dans le cadre des formulaire de saisie des jeux incr\xE9mentaux, on peut faire r\xE9f\xE9rence \xE0 des donn\xE9es maitres en assignant un concept \xE0 un certain champ, et le **formulaire proposera une liste de valeur** (avec un moteur de recherche si elle est grande) pour s\xE9lectionner ce qui sera mis dans le champ. Il est ainsi possible de contraindre la saisie dans un champ et de s'assurer que les valeurs dedans soient toutes valides suivant certaines r\xE8gles m\xE9tier !

La deuxi\xE8me possibilit\xE9 pour compl\xE9ter les donn\xE9es est de mettre en place des **enrichissements** : des colonnes sont alors automatiquement ajout\xE9es au jeu de donn\xE9es et les valeurs renseign\xE9es \xE0 partir des valeurs d'une ou plusieurs autres colonnes. Par exemple des colonnes qui ont les concepts *num\xE9ro de rue*, *libell\xE9 de rue* et *code postal* peuvent \xEAtre compl\xE9t\xE9es par les donn\xE9es d'adresse et \xEAtre g\xE9ocod\xE9es, ce qui permet de rajouter les colonnes *latitude* et *longitude* et ainsi de projeter les donn\xE9es sur une carte. Quand les donn\xE9es sont mises \xE0 jour, les enrichissements sont automatiquement mis \xE0 jour, et un jeu de donn\xE9es peut avoir plusieurs enrichissements provenant de donn\xE9es maitres diff\xE9rentes.

### Permissions et publication des donn\xE9es

Un administrateur peut contr\xF4ler finement les permissions d\u2019**acc\xE8s aux donn\xE9es**. Les donn\xE9es sont de base *priv\xE9es*, c'est \xE0 dire que seuls les membres de l'organisation authentifi\xE9s peuvent les consulter. Il est possible de rendre les donn\xE9es *publiques*, dans ce cas tout le monde, y compris les utilisateurs non-enregistr\xE9s, pourra y acc\xE9der. On peut \xE9galement d\xE9finir des droits d'acc\xE8s \xE0 certains utilisateurs ou des organisations partenaires. Un mode avanc\xE9 permet de d\xE9finir les permissions pour chaque point d'acc\xE8s de l'API d'un jeu de donn\xE9es : on peut par exemple rendre l'acc\xE8s aux m\xE9tadonn\xE9es public alors que l'acc\xE8s aux donn\xE9es reste restreint.

<img src="./images/functional-presentation/permissions.jpg"
     height="300" style="margin:40px auto;" />

Quand un jeu de donn\xE9es vient d'\xEAtre cr\xE9\xE9, il n'est pas de base disponible dans les diff\xE9rents portails de donn\xE9es de l'organisation. Il doit d'abord \xEAtre **publi\xE9 dans un ou plusieurs portails**. Dans le cadre de portails opendata, le jeu de donn\xE9es doit aussi avoir une permission d'acc\xE8s public en plus d'\xEAtre publi\xE9.

Ce m\xE9canisme de publication permet de travailler de mani\xE8re agile pour la publication d\u2019un jeu de donn\xE9es : on peut par exemple avoir un **portail de recette** sur lequel on publie les jeux de donn\xE9es que l\u2019on souhaite ouvrir prochainement, en les accompagnant de visualisations.

Les visualisations peuvent mettre en avant un probl\xE8me dans les donn\xE9es ou une mauvaise structuration de celle-ci, probl\xE8me qui peut \xEAtre vu par plusieurs personnes car les donn\xE9es sont d\xE9j\xE0 publi\xE9es sur un portail. Une fois que l\u2019on atteint la **qualit\xE9 de publication souhait\xE9e**, on d\xE9-publie le jeu de donn\xE9es du portail de recette et on le publie sur un ou plusieurs portails de production.

<img src="./images/functional-presentation/portail-publication.jpg"
     height="300" style="margin:40px auto;" />

Il est aussi possible de publier un jeu de donn\xE9es sur des portails ou catalogues de donn\xE9es externes \xE0 la plateforme, cela est d\xE9cris plus en d\xE9tails \xE0 la section sur les *connecteurs de catalogues*.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Data catalog
section: 2
subsection : 2
updated: 2020-12-09
description : Data catalog
published: true
---

The portal provides **quick access** to all the datasets published thanks to a page presenting the different sources. Each source is presented through a thumbnail which indicates its title, description, date of update and offers several actions:
* **Preview** the data with a tabular view in which you can sort the columns, paginate, carry out fulltext searches and download filtered data
* **Access** the interactive API documentation
* **Consult** the data schema

![Catalogue de donn\xE9es](./images/functional-presentation/catalogue.jpg)

Clicking on a thumbnail title or description navigates to a dataset details page.  


The list of datasets can be browsed using an infinite scrolling mechanism, suitable for **desktop or mobile** use. Different tools allow you to search in this list, filter it by theme or sort it according to different criteria.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Catalogue des donn\xE9es
section: 2
subsection : 2
updated: 2020-12-09
description : Catalogue des donn\xE9es
published: true
---

Le catalogue de donn\xE9es est un moteur de recherche permettant d\u2019**acc\xE9der rapidement** aux jeux de donn\xE9es susceptibles d'int\xE9resser l'utilisateur. Outre le champ de recherche textuelle, il est possible d'acc\xE9der aux jeux de donn\xE9es par th\xE9matique ou par concept pr\xE9sent dans les donn\xE9es. Il est par exemple possible de lister tous les jeux de donn\xE9es g\xE9ographiques en filtrant par concept *Latitude*, ou toutes les donn\xE9es li\xE9es \xE0 des entreprises en filtrant par *SIREN*.

![recherche](./images/functional-presentation/search.jpg)

La liste des jeux de donn\xE9es est parcourue au moyen d\u2019un m\xE9canisme de scroll infini, aussi bien adapt\xE9 \xE0 une utilisation **bureautique ou mobile**. Il est \xE9galement possible de trier les r\xE9sultats suivant diff\xE9rent crit\xE8res (Alphab\xE9tique, date de cr\xE9ation, ...). La liste des r\xE9sultats obtenus peut \xEAtre export\xE9e au format CSV en un clic.

Les r\xE9sultats sur cette page sont pr\xE9sent\xE9s sous forme de vignettes qui affichent des informations comme le titre du jeu de donn\xE9es, sa date de mise \xE0 jour ou les th\xE9matiques qui lui sont associ\xE9es. Un bout de la description est \xE9galement affich\xE9, mais il peut \xEAtre remplac\xE9 par une image pour faire un catalogue plus "visuel".

En plus de permettre de naviguer vers la page de d\xE9tails d'un jeu de donn\xE9es, les vignettes pr\xE9sentent des boutons d'action permettant de :
* Visualiser les donn\xE9es avec une **vue tabulaire** dans laquelle on peut trier les colonnes, paginer, effectuer des recherches fulltext et t\xE9l\xE9charger les donn\xE9es filtr\xE9es
* Visualiser les donn\xE9es avec une **vue cartographique** quand les donn\xE9es le permettent
* Acc\xE9der \xE0 la **documentation interactive de l\u2019API**
* Consulter le **sch\xE9ma des donn\xE9es**
<p></p>

![Catalogue de donn\xE9es](./images/functional-presentation/home-dataset.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Home page
section: 2
subsection : 1
description : Home page
published: true
---

The home page is the main entry point to the data portal.  
It presents the latest datasets added and the latest visualizations made

The portal allows to highlight **editorial content** (explaining text or presenting the portal) and a visualization.

![Page d\u2019accueil](./images/functional-presentation/acceuil.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Page d\u2019accueil
section: 2
subsection : 1
description : Page d\u2019accueil
published: true
---

La page d'accueil est le point d\u2019entr\xE9e principal du portail de donn\xE9es. Elle permet **d'acc\xE9der rapidement aux donn\xE9es** \xE0 partir des th\xE9matiques et d'un champ de recherche textuelle. Des **chiffres cl\xE9s** permettent de quantifier les donn\xE9es pr\xE9sentes sur le portail.

Il est possible de mettre en avant du **contenu \xE9ditorial** (texte expliquant la d\xE9marche ou pr\xE9sentant le portail) ainsi qu'une visualisation de donn\xE9es qui est directement utilisable sur cette page. On peut, par exemple, mettre en avant une carte pr\xE9sentant la localisation de centres de vaccination, ou les menus des cantines pour la semaine.
Dans le cadre d'une d\xE9marche de communication, il est \xE9galement possible d'afficher un fil tweeter sur cette page.

Pour les visiteurs r\xE9guliers, des sections pr\xE9sentent les **derniers jeux de donn\xE9es ajout\xE9s** ainsi que les derni\xE8res visualisations r\xE9alis\xE9es, avec une navigation rapide pour voir plus en d\xE9tails ces nouveaux contenus.

Il est possible de personnaliser quels \xE9l\xE9ments sont affich\xE9s sur cette page, d'afficher une banni\xE8re plut\xF4t qu'un texte \xE9ditorialis\xE9 ou m\xEAme d'utiliser une visualisation \xE0 la place de la banni\xE8re ! Cette derni\xE8re option permet d'avoir un **carrousel avec des liens de navigation**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Introduction
section: 1
description : Introduction
published: true
---
**Data Fair** and its ecosystem make it possible to implement a platform for sharing (internal or opendata) and data visualization. This platform can be intended for the general public, who can access data through adapted interactive visualizations, as well as for a more expert public who can access data through APIs.  
**FAIR** refers to data which meet principles of [findability, accessibility, interoperability, and reusability](https://fr.wikipedia.org/wiki/Fair_data).

The **datasets** uploaded on the platform are indexed. Indexing a dataset greatly increases its reusability and enables text searches in large data sets of millions of records or in data visualizations.

The **front-office** pages allows you to access the dataset catalog and to be able to search in it. It is possible to consult the datasets directly, whether with generic views (tables, simple maps, etc.) or more specific preconfigured visualizations. The data is disseminated through pages that present it in the form of stories (data storytelling). Finally, developers can access the documentation for the various **APIs of the platform**.

The **back-office** allows you to manage the different elements of the platform: user accounts, datasets and visualizations. Administrators can set up the environment and manage access permissions to data and visualizations. Depending on their profile, back-office users will be able to create, edit, enrich, delete datasets, maps and graphs.  
The back office makes it possible to create **data portals** (private or open data) and also to access various portal usage statistics (analytics).

### Main advantages of the platform

* The ability to load data in different formats.
* The publication of data in the form of visualizations, portals and APIs
* A methodological framework for publishing highly reusable semantic data
* The enrichment of data to give them even more value.
* Possible representations thanks to a large choice of interactive displays (graphs, maps, search engine, etc.).
* An intuitive interface for a quick start
* The ability to extend the platform with specific visualizations


### Key Concepts

The three central concepts are: **datasets**, **remote services** and **applications**. The purpose of this service is to be able to easily use **applications** adapted to different professions and powered by a combination of **remote services** and user-specific data.

**Datasets** are created by users by uploading files: the service stores the file, analyzes it and derives a data schema. The data is then indexed according to this scheme and can be queried through its own Web API.

The user can semanticize the fields of the **data sets**, for example by determining that a column containing data on 5 digits is a field of the Postal Code type. This semantization allows 2 things: the **data can be enriched** and used for certain processing if the appropriate **remote services** are available, and the data **can be used in applications** adapted to their concepts.

In addition to file-based **datasets**, Data Fair also allows the creation of editable **datasets** which are editable in real time and also virtual **datasets** which are configurable views of one or various **datasets**.

**Remote Services** provide functionality in the form of Web APIs external to Data Fair that comply with OpenAPI 3.0 interoperability rules.
One of Data Fair's goals is to allow non-IT people to easily use third-party APIs with their own data. There are 2 ways to exploit **remote services**: the user can use them to add columns to his **datasets** in delayed time (eg geocoding) and **applications** can exploit them in real time (eg map backgrounds).

**Remote services**, connected to a Data Fair instance, are not managed by users directly but rather made available to them by administrators.

**Applications** enable the full potential of user data and **remote services** to be exploited. A few examples: a dataset containing commune codes can be projected onto a map of the French administrative division, a dataset containing parcel codes can be projected onto the cadastre, etc.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Introduction
section: 1
description : Introduction
published: true
---
**Data Fair** et son \xE9cosyst\xE8me permettent de mettre en \u0153uvre une plateforme de partage de donn\xE9es (interne ou opendata) et de visualisations. Cette plateforme peut \xEAtre \xE0 destination du grand public, qui peut acc\xE9der aux donn\xE9es au travers de **visualisations interactives** adapt\xE9es, aussi bien qu\u2019\xE0 un public plus expert qui peut acc\xE9der aux donn\xE9es au travers des APIs.  

Le mot **FAIR** fait r\xE9f\xE9rence \xE0 de la donn\xE9e [\xAB Facile \xE0 trouver, Accessible, Interop\xE9rable et R\xE9utilisable \xBB](https://fr.wikipedia.org/wiki/Fair_data). Cela est rendu possible gr\xE2ce \xE0 **l'indexation** des donn\xE9es sur la plateforme. Elle permet de r\xE9aliser des recherches complexes dans des volumes de plusieurs millions d\u2019enregistrements et d'acc\xE9der plus facilement et rapidement \xE0 ce qui nous int\xE9resse. L'acc\xE8s aux donn\xE9es aux travers **d'APIs normalis\xE9es et document\xE9es** permet d'interfacer la plateforme avec d'autres syst\xE8mes d'information et facilite la r\xE9utilisabilit\xE9 des donn\xE9es.

<img src="./images/functional-presentation/FAIR.jpg"
     height="160" style="margin:30px auto;" />

Les utilisateurs des donn\xE9es acc\xE8dent \xE0 la plateforme au travers **d'un ou plusieurs portails de donn\xE9es**. Ils permettent d\u2019acc\xE9der au catalogue de jeux de donn\xE9es et de pouvoir rechercher dans celui-ci de diff\xE9rentes mani\xE8res. Il est possible de consulter directement les jeux de donn\xE9es, que ce soit avec des vues g\xE9n\xE9riques (tableaux, cartes simples, ...) ou des visualisations plus sp\xE9cifiques pr\xE9configur\xE9es. Les donn\xE9es sont diffus\xE9es au travers de pages qui les pr\xE9sentent sous la forme d\u2019histoires (data storytelling), **permettant \xE0 n'importe qui de les comprendre plus facilement**. Les utilisateurs peuvent s'abonner \xE0 des notifications sur les mises \xE0 jour et les d\xE9veloppeurs peuvent acc\xE9der \xE0 la documentation interactive des diverses APIs de la plateforme. Les portails peuvent \xEAtre agr\xE9ment\xE9s de diverses **pages de contenu** pr\xE9sentant les d\xE9marches, contributeurs ou r\xE9utilisations mises en avant par exemple.

Les administrateurs et contributeurs de donn\xE9es ont acc\xE8s \xE0 un **back-office** qui permet de g\xE9rer les diff\xE9rents \xE9l\xE9ments de la plateforme : comptes utilisateurs, jeux de donn\xE9es et visualisations. Les administrateurs peuvent param\xE9trer l'environnement et g\xE9rer les permissions d\u2019acc\xE8s aux donn\xE9es et visualisations. Selon leur profil, les utilisateurs du back-office pourront cr\xE9er, \xE9diter, enrichir, supprimer les jeux de donn\xE9es, les cartes et les graphiques. Le back-office permet de cr\xE9er des **portails de donn\xE9es** (interne ou open data) et aussi d\u2019acc\xE9der \xE0 diff\xE9rentes m\xE9triques d\u2019utilisation des portails.

### Fonctionnement g\xE9n\xE9ral
Les **jeux de donn\xE9es** sont en g\xE9n\xE9ral cr\xE9\xE9s par les utilisateurs en **chargeant des fichiers tabulaires ou g\xE9ographiques** : le service stocke le fichier, l'analyse et d\xE9duit un sch\xE9ma de donn\xE9es. Les donn\xE9es sont ensuite index\xE9es suivant ce sch\xE9ma et peuvent \xEAtre requ\xEAt\xE9es au travers d'une API Web propre.

En compl\xE9ment des jeux de donn\xE9es bas\xE9s fichiers, Data Fair permet \xE9galement de cr\xE9er des jeux de donn\xE9es **\xE9ditables par formulaire** et des jeux de donn\xE9es virtuels qui sont des **vues configurables d'un ou plusieurs jeux de donn\xE9es**.

L'utilisateur peut s\xE9mantiser les champs des jeux de donn\xE9es en leur **attribuant des concepts**, par exemple en d\xE9terminant qu'une colonne contenant des donn\xE9es sur 5 chiffres est un champ de type Code Postal. Cette s\xE9mantisation permet 2 choses : les donn\xE9es peuvent **\xEAtre enrichies** \xE0 partir de donn\xE9es de r\xE9f\xE9rence ou elles m\xEAme devenir **donn\xE9es de r\xE9f\xE9r\xE9nce** pour en enrichir d'autres, et les donn\xE9es peuvent \xEAtre utilis\xE9es dans des **visualisations adapt\xE9es \xE0 leurs concepts**.

Les **visualisations** permettent d'exploiter au maximum le potentiel des donn\xE9es des utilisateurs. Quelques exemples: un jeu de donn\xE9es contenant des codes de commune peut \xEAtre projet\xE9 sur une carte du d\xE9coupage administratif fran\xE7ais, un jeu de donn\xE9es contenant des codes de parcelles peut \xEAtre projet\xE9 sur le cadastre, etc.

<!-- ![FAIR](./images/functional-presentation/data_and_settings.png) -->

### Principaux atouts de la plateforme
Data Fair permet de mettre en place une organisation centr\xE9e autour de la donn\xE9e :
* Possibilit\xE9 de charger des donn\xE9es sous diff\xE9rents formats de fichiers ou par saisie via formulaire, permettant m\xEAme de faire du crowd sourcing
* Consultation des donn\xE9es au travers d'un large choix de visualisations interactives (graphiques, cartes, moteurs de recherche, ...)
* Possibilit\xE9 de cr\xE9er plusieurs portails suivant les cas d'usage (opendata, echanges interne, ...)
* Cr\xE9ation facilit\xE9 d'APIs de donn\xE9es et enrichissement des donn\xE9es pour leur donner encore plus de valeur
* Mise en place de traitements p\xE9riodiques permettant d'alimenter automatiquement la plateforme en donn\xE9es
* Cadre s\xE9curis\xE9, code source ouvert et utilisation de standards
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Portal notification
section: 2
subsection : 8
description : Portal notification
published: true
---

Registered users can **subscribe** and be notified when dataset is added to the portal or in a particular theme:

![Notification](./images/functional-presentation/notifiy-pf-1.png)


It is also possible to subscribe to the update of a particular dataset using the bell on its presentation page.


![jeu de donnees](./images/functional-presentation/notifiy-pf-3.png)

Notifications will be visible on the bell in the navigation bar and a **notification email** will be sent to your account email address.

![Cloche](./images/functional-presentation/notifiy-pf-2.png)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Notifications
section: 2
subsection : 8
description : Gestion des notifications
published: true
---

Les notifications permettent aux utilisateur enregistr\xE9s de recevoir des alertes dans le portail ou par email lorsque certains \xE9v\xE9nements se produisent. Les alertes sont visibles sur la cloche de la barre de navigation et si l'utilisateur l'a choisi, il peut recevoir un **email d'alerte**.

<img src="./images/functional-presentation/notifiy-pf-2.png"
     height="200" style="margin:20px auto;" />


Les utilisateurs  peuvent **s'abonner** \xE0 l'ajout d'un jeu de donn\xE9es sur le portail ou dans une th\xE9matique en particulier. Il est aussi possible de s'abonner \xE0 la mise \xE0 jour d'un jeu de donn\xE9es en particulier.

<img src="./images/functional-presentation/notifiy-pf-3.png"
     height="200" style="margin:20px auto;" />



`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Configure a data portal
section: 3
subsection : 3
description : Configure a data portal
published: true
---

The configuration of the data portal is done in a **graphic** interface in two steps: you work on a draft which you then publish in the current version. The *current version* is the version that is presented to the various visitors to your portal, which allows you to update the portal without impacting users until the draft has been validated.


![Configuration d'un portail](./images/functional-presentation/configuration-portail.jpg)


Few configuration elements: the logo, the home image, the favicon, the color of the navigation bar, the color of the footer, content elements (title, description, visualization to highlight, public or private visibility ) and various communication elements (website, contact email and twitter account)

It is possible to set up a [Google Analytics or Matomo (ex Piwik)](./analytics) account for activity monitoring and have **statistics** on the most visited pages and the most downloaded data.





The **content pages** allow you to create different types of pages: articles, thematic pages around several datasets, news pages, data storytelling, licenses, conditions of use, ...  
It is possible to **highlight certain data** and set even more context, for example, or to create dashboards integrating different data


![Configuration d'un portail](./images/functional-presentation/foncier-edit.jpg)


Creating a page is done in **3 steps**: First, choose the page template. Then, fill in the different elements by means of a form adapted to the chosen page model with a preview of the result. Finally, publish the page. With this 3 steps, it is possible to prepare pages in advance and publish them later.  
In addition to free text, it is possible to integrate different types of elements: table of a dataset, visualization, list of datasets, integration of external content, ...

To access the content pages created, it is possible to enter links in the navigation bar as direct links or in a menu.  
It is possible to create **public** pages or **private** pages.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Portails de donn\xE9es et pages de contenus
section: 3
subsection : 3
description : Portails de donn\xE9es et pages de contenus
published: true
---

### Param\xE9trage des portails

Data Fair permet de configurer plusieurs portails de donn\xE9es qui sont des lieux de publication des jeux de donn\xE9es, visualisations et pages de contenus que les utilisateurs vont pouvoir consulter. Il peut y avoir **des portails pour diff\xE9rents cas d'usage** : opendata, partage de donn\xE9es en interne, partage avec des partenaire, donn\xE9es en cours de consolidation (portail de pr\xE9production), ...

Tout comme pour les visualisations de donn\xE9es, la configuration d'un portail de donn\xE9es se fait **de mani\xE8re graphique** en deux temps : on travaille sur un brouillon que l'on publie ensuite en version courante. La *version courante* est la version qui est pr\xE9sent\xE9e aux diff\xE9rents visiteurs de votre portail, ce qui permet de mettre \xE0 jour le portail sans impacter les utilisateurs tant que l'on n'a pas valid\xE9 le brouillon. **Aucune connaissance en HTML ou CSS** n'est requise et un portail s'administre \xE0 la mani\xE8re d'un CMS comme Wordpress.

<img src="./images/functional-presentation/configuration-portail.jpg"
     height="300" style="margin:40px auto;" />

De **nombreux \xE9l\xE9ments sont configurables** : le logo, l\u2019image d'accueil, la favicon, la couleur de la barre de navigation, la couleur du pied de page, des \xE9l\xE9ments de contenu (titre, description, visualisation \xE0 mettre en avant, visibilit\xE9 publique ou priv\xE9e) et divers \xE9l\xE9ments de communication (site web, mail de contact, et comptes sur les r\xE9seaux sociaux).

Il est possible de renseigner un compte [Google Analytics ou Matomo (ex Piwik)](./analytics) pour le suivi d'activit\xE9 et ainsi avoir des **statistiques** sur les pages les plus consult\xE9es et les donn\xE9es les plus t\xE9l\xE9charg\xE9es.

### \xC9dition des pages de contenus

Les pages de contenu permettent de cr\xE9er diff\xE9rents type de pages : articles, pages th\xE9matiques autour de plusieurs jeux de donn\xE9es, pages d'actualit\xE9s, data storytelling, licences, conditions d'utilisation, ...  
Il est ainsi possible de **mettre en avant certaines donn\xE9es** et de leur donner encore plus de contexte par exemple, ou de faire des **tableaux de bord** int\xE9grants diff\xE9rentes donn\xE9es.

<img src="./images/functional-presentation/foncier-edit.jpg"
     height="300" style="margin:40px auto;" />

La cr\xE9ation d'une page se fait en 3 \xE9tapes : On choisit d'abord le **mod\xE8le de page**. Puis on renseigne les diff\xE9rents \xE9l\xE9ments au moyen d'un formulaire adapt\xE9 au mod\xE8le de page choisi avec une **pr\xE9visualisation du r\xE9sultat**. On peut enfin publier la page, ce qui permet de **pr\xE9parer des pages en avance** et de les publier plus tard. En plus de la saisie de texte libre, il est possible d'int\xE9grer diff\xE9rents type d'\xE9l\xE9ments : tableau d'un jeu de donn\xE9es, visualisation, liste de jeux de donn\xE9es, int\xE9gration de contenu externe, ...

Pour acc\xE9der aux pages de contenu cr\xE9\xE9es, il est possible de renseigner des liens dans la barre de navigation. Les liens peuvent appara\xEEtre directement dans la barre, ou dans un menu ajout\xE9 \xE0 celle-ci. Il est possible de cr\xE9er des pages **publiques** ou des pages **priv\xE9es**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Data portal
section: 2
description : Data portal
published: true
---

**Portals** allow Data Fair users to present datasets and visualizations.

A data portal consists of a home page, a page that lists data, a page that lists visualizations, and content pages.  
The home page presents key figures, the last elements added as well as featured content.  
The data page provides access to data sources and the ability to perform **multi-criteria searches**, while the visualizations page provides quick access to the different visualizations.

The data portal has a responsive design and its display is suitable for a wide variety of terminals, allowing use on **fixed or mobile workstations**.

An **authentication screen** is accessible on all the pages of the portal to be able to connect or create an account. The account allows access to private data according to its rights. If the portal is on a domain name other than Data Fair, it is no longer possible to authenticate through it and the pattern no longer appears: the portal is in this case intended for open date.

The footer allows to integrate various links such as the conditions of use, the contact page and the institutional site, among others.

The **portal is configurable**, the configuration points are as follows:

* Title and Description
* Choice of main and secondary colors
* Logo, favicone and home image
* View portal key figures (number of datasets, records and visualizations)
* Choice of visualization highlighted
* Show data, visualizations and contact page links in navigation bar
* Show the latest datasets and visualizations added on the homepage
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Portail de donn\xE9es (Front Office)
section: 2
description : Portail de donn\xE9es (Front Office)
published: true
---

Les utilisateurs des donn\xE9es acc\xE8dent \xE0 la plateforme au travers **d'un ou plusieurs portails de donn\xE9es** d\xE9di\xE9s \xE0 diff\xE9rents cas d'usage. Il peut y avoir, par exemple, un portail de donn\xE9es publiques (opendata), un portail pour les donn\xE9es internes et un portail de *pr\xE9production* pr\xE9sentant les donn\xE9es en cours de consolidation ou qui ne sont pas encore pr\xEAte \xE0 \xEAtre publi\xE9es.

Un portail de donn\xE9es est compos\xE9 de diff\xE9rentes pages (accueil, contact, ...), de moteurs de  **recherche multicrit\xE8res**, de jeux de donn\xE9es, de visualisations et de pages de contenu (actualit\xE9s, th\xE9matiques, contributeurs, d\xE9marche, ...). Il est possible de pr\xE9senter des chiffres cl\xE9s et **d'\xE9ditorialiser des contenus** mis en avant.

Le portail de donn\xE9es a un **design responsive** et son affichage est adapt\xE9 \xE0 une grande diversit\xE9 de terminaux, permettant une utilisation sur **poste fixe ou mobile**. Il est possible de configurer diff\xE9rents \xE9l\xE9ments pour personnaliser au maximum le portal (titre et description, choix des couleurs principale et secondaire, logo, favicone et image d'accueil, liens dans le footer, ...).

Une **mire d\u2019authentification** est accessible sur toutes les pages du portail pour pouvoir se connecter ou cr\xE9er un compte. Le compte permet d'acc\xE9der aux donn\xE9es priv\xE9es selon ses droits dans le cas de portails interne, et s'abonner \xE0 des **notifications** sur les jeux de donn\xE9es.

<img src="./images/functional-presentation/portal.jpg"
     height="450" style="margin:20px auto;" />
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Periodic processings
section: 3
subsection : 5
description : Periodic processings
published: true
---

Periodic processing **fetch** data from certain places, **transform** it and **publish** it on the platform..

Periodic processing differs from catalog connectors on several points:
* A processing is limited to a reduced set of input and output sources. Typically it can retrieve data from one place, and metadata from another, and dump the data into a platform source.
* The collection frequencies can be higher: data can be collected with a few seconds interval, which is suitable for the publication of **IOT data**.

<p>
</p>

Periodic processing is configured by entering the type of source (IOT data, files from billing, etc.), the corresponding data set in the platform and the frequency of collection.

![Collecteurs](./images/functional-presentation/collecteurs.jpg)


It is also possible to have the **success status** of the last processing for each collector, as well as to access detailed logs of the last data collections. Periodic jobs can also be used for daily, weekly, etc. updates.

It is possible to add **new periodic processing** by following the instructions in [this section](./interoperate/collectors).
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Traitements p\xE9riodiques
section: 3
subsection : 5
description : Traitements p\xE9riodiques
published: true
---

Les traitements p\xE9riodiques vont **chercher** des donn\xE9es \xE0 certains endroits, les **transforment** et les **importent** sur la plateforme. Il sont r\xE9alis\xE9s sous la forme de plugins open source, ce qui veut dire que la liste des traitements possibles est extensible.

Le plugin *dfp-dl-file* permet de couvrir plusieurs cas d'usage : ce traitement va chercher des fichiers \xE0 un endroit pour les publier sur la plateforme. Il est capable d'acc\xE9der \xE0 des fichiers via les protocoles **ftp, sftp ou http(s)**. Il fonctionne en g\xE9n\xE9ral \xE0 la suite de traitements sur les donn\xE9es r\xE9alis\xE9s par des ETL qui mettent leur r\xE9sultats sous la forme de fichiers accessibles \xE0 distance.

Chaque plugin \xE0 son propre param\xE9trage (code d'acc\xE8s, jeu de donn\xE9es \xE0 mettre \xE0 jour, ...) mais tous les traitements ont les m\xEAmes options de planification. Les traitements peuvent \xEAtre d\xE9clench\xE9s toutes les heures, jours, semaines, mois ou \xEAtre param\xE9tr\xE9s pour \xEAtre d\xE9clench\xE9s manuellement.

Il est m\xEAme possible de g\xE9n\xE9rer une cl\xE9 d'API sp\xE9cifique au traitement pour cr\xE9er un **webhook permettant de le d\xE9clencher** : un traitement dans un ETL peut par exemple cr\xE9er un fichier sur un espace de partage puis appeler l'url du webhook pour que le traitement d'import se d\xE9clenche.


![Collecteurs](./images/functional-presentation/collecteurs.jpg)

Un contributeur peut acc\xE9der \xE0 l\u2019**\xE9tat de r\xE9ussite** des diff\xE9rentes ex\xE9cutions d'un traitement, ainsi que d\u2019acc\xE9der \xE0 des logs d\xE9taill\xE9s de ces ex\xE9cutions. Il peut s'abonner aux notifications d'un traitement pour \xEAtre inform\xE9 quand un traitement est en \xE9chec, ou que des alertes sont renvoy\xE9es dans les logs.`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: User Management
section: 3
subsection : 4
description : User Management
published: true
---

There are four different roles: User, Contributor, Admin, and Super Admin.

**Super administrators** of the platform can manage all the organizations and members of the platform. They can also configure the data portal and manage periodic processing.

Organization admins can manage members:

* **Invite** new members by email
* **Change** member roles
* **Exclude** a member

<p>
</p>

Permissions of the different roles of an organization:

| Actions                              | User | Contributor | Admin |
|--------------------------------------|:-----------:|:------------:|:--------------:|
| Add a dataset            |             |       x      |        x       |
| Read a dataset          |      x      |       x      |        x       |
| Edit a datase     |             |       x      |        x       |
| Administration of a dataset  |             |              |        x       |
| Add a visualization            |             |       x      |        x       |
| Read a visualization         |      x      |       x      |        x       |
| Edit a visualization          |             |       x      |        x       |
| Administration of a visualization |             |              |        x       |
| Acces and Change Settings |             |              |        x       |
| Create and modify the portal |             |              |        x       |

A person can belong to several organizations with different roles in each organization.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Gestion des utilisateurs
section: 3
subsection : 4
description : Gestion des utilisateurs
published: true
---

Par d\xE9faut, il existe quatre r\xF4les diff\xE9rents : utilisateur, contributeur, administrateur et super administrateur.

Les **super administrateurs** de la plateforme peuvent g\xE9rer l'ensemble des organisation, membres et tout le contenu de la plateforme. Ils ont la possibilit\xE9 de configurer les visualisations disponibles, publier les portails sur des noms de domaine particuliers, param\xE9trer les traitements p\xE9riodiques, ou d\xE9finir quels sont les jeux de donn\xE9es maitres. Il est pr\xE9vu de transf\xE9rer prochainement la gestion des deux derniers \xE9l\xE9ments aux administrateurs des organisations.

Les 3 autres r\xF4les sont d\xE9finis par organisation : il est par exemple possible d'\xEAtre *administrateur* dans une organisation et simple *utilisateur* dans une autre.

### R\xF4les et permissions associ\xE9es

Les administrateurs d\u2019une organisation peuvent g\xE9rer les membres :

* **Inviter** de nouveaux membres par e-mail
* **Changer** les r\xF4les des membres
* **Exclure** un membre

Permissions par d\xE9faut des diff\xE9rents r\xF4les d\u2019une organisation :

| Actions                              | Utilisateur | Contributeur | Administrateur |
|--------------------------------------|:-----------:|:------------:|:--------------:|
| Ajout d'un jeu de donn\xE9es            |             |       x      |        x       |
| Lecture d'un jeu de donn\xE9es          |      x      |       x      |        x       |
| Modification d'un jeu de donn\xE9es     |             |       x      |        x       |
| Administration d'un jeu de donn\xE9es  |             |              |        x       |
| Ajout d'une visualisation            |             |       x      |        x       |
| Lecture d'une visualisation          |      x      |       x      |        x       |
| Edition d'une visualisation          |             |       x      |        x       |
| Administration d'une visualisation   |             |              |        x       |
| Acc\xE8s et modification des param\xE8tres |             |              |        x       |
| Cr\xE9ation et modification du portail  |             |              |        x       |

### D\xE9partements

En plus de leur r\xF4le, les utilisateurs peuvent \xEAtre assign\xE9 \xE0 un d\xE9partement de l'organisation. Cela permet une forme de cloisonnement et d'avoir des groupes d'utilisateurs qui g\xE8rent chacun leurs donn\xE9es de leur cot\xE9. Les utilisateurs qui ne sont pas restreints \xE0 un d\xE9partement peuvent voir (ou modifier si ils ont un r\xF4le de *contributeur* ou *administrateur*) toutes les ressources de l'organisation.

Un *contributeur* d'un d\xE9partement ne peux mettre \xE0 jour que les jeux de donn\xE9es de ce d\xE9partement, et quand il cr\xE9\xE9 un jeu de donn\xE9es, celui ci est forc\xE9ment rattach\xE9 au d\xE9partement du *contributeur*. De la m\xEAme mani\xE8re, un administrateur rattach\xE9 \xE0 un d\xE9partement ne peut publier des jeux de donn\xE9es que sur un portail rattach\xE9 \xE0 son d\xE9partement. Par contre, un administrateur g\xE9n\xE9ral de l'organisation peut publier ce m\xEAme jeu de donn\xE9es sur un portail plus global \xE0 l'organisation.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Configure visualizations
section: 3
subsection : 2
description : Configure visualizations
published: false
---

Interactive visualizations allow data to be presented in a fun way and quickly understood. They are served by lightweight web applications ([This section](./interoperate/applications) describes how to create them). Visualizations can be configured through an interface that does not **require any programming skills**.

The configuration menu consists of different sections which differ according to the applications. Most of the time, the menu consists of three sections: data source, rendering options, and navigation related items. It is often possible to filter the data if you do not want to represent the entire dataset.

![Configuration d'une visualisation](./images/functional-presentation/configuration-visu.jpg)

A preview renders the visualization. When changes are made in the configuration menu, they are directly represented in the preview. It is possible to quickly modify and test different renderings of the visualization. When the rendering is satisfactory, saving makes it possible to validate the modifications. The changes are then visible to all users of the visualization.


A visualization is private. It can be made public later. In any case, it is recommended to fill in a description. This description will be visible on the visualization's consultation page.

Data Fair offers a wide variety of constantly growing visualizations.

![Differentes visualisations](./images/functional-presentation/valorisations.jpg)

### Map visualizations
* **Plot info** : Project your data onto the French cadastral map
* **Location info** : Project your geolocated data and create cards on each marker
* **Administrative divisions** : Project your data at the level of the municipality, department, or region
* **Geo Shapes** : Project data containing geometric shapes onto a map

### Graph visualizations

* **Sankey Diagram** : Visualize flow data
* **Sunburst Diagram** : Visualize hierarchical data
* **Bar chart race** : Visualize ranking data over time
* **Charts** : Visualize data in different types of graphs, such as histograms, area graphs, line graphs, etc
* **Relations and graphs/networks** : Visualize data with nodes, links or networks

### Text visualizations

* **List and cards** : Create a search engine to explore data displayed as cards
* **Word cloud** : Generate a word cloud
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Param\xE9trage des visualisations
section: 3
subsection : 2
description : Param\xE9trage des visualisations
published: true
---

Les visualisations interactives permettent de pr\xE9senter les donn\xE9es de mani\xE8re synth\xE9tique et d'offrir la possibilit\xE9 \xE0 l'utilisateur de les manipuler pour les comprendre plus rapidement. Elle sont servies par des applications Web l\xE9g\xE8res, qui permet une consultation directe sur tout type de terminal Web, ou une int\xE9gration iframe dans des portails ou sites institutionnel.

### Param\xE9trage intuitif
Les visualisations peuvent \xEAtre configur\xE9es gr\xE2ce \xE0 une interface graphique qui ne **requiert pas de comp\xE9tences en programmation**. Le menu de configuration se compose de diff\xE9rentes sections qui diff\xE8rent selon les applications. La plupart du temps, le menu est compos\xE9 de trois sections : la source de donn\xE9es, les options de rendu et les \xE9l\xE9ments li\xE9s \xE0 la navigation. Il est souvent possible de filtrer les donn\xE9es si on ne souhaite pas repr\xE9senter le jeu de donn\xE9es en entier.

<img src="./images/functional-presentation/configuration-visu.jpg"
     height="400" style="margin:40px auto;" />

Un aper\xE7u donne un rendu de la visualisation. Lorsque l\u2019on r\xE9alise des modifications sur le menu de configuration, elles sont directement repr\xE9sent\xE9es sur l'aper\xE7u. Il est ainsi possible de modifier et tester rapidement diff\xE9rents rendus de la visualisation, en **mode brouillon**. Lorsque le rendu est satisfaisant, l\u2019enregistrement permet de valider les modifications r\xE9alis\xE9es. Les modifications sont alors visibles sur toutes les publications de la visualisation.

### Types de visualisations
Data Fair offre une grande vari\xE9t\xE9 de visualisations en constante progression, il y a ce jour pr\xE8s d'une **trentaine de visualisations diff\xE9rentes**. ([Cette section](./interoperate/applications) d\xE9crit en d\xE9tails la mani\xE8re de les cr\xE9er).


#### Visualisations cartographiques

<img src="./images/functional-presentation/visu-carto.jpg"
     height="500" style="margin:40px auto;" />

Plusieurs applications permettent d'afficher des donn\xE9es g\xE9olocalis\xE9es. *Infos localisations* permet d'afficher des **marqueurs** qui pr\xE9sentent au clic une **fiche d\xE9taill\xE9e**, \xE9ventuellement accompagn\xE9e d'une image. *Carto stats* affiche les donn\xE9es sous forme de **cercles color\xE9s et proportionnels** \xE0 une donn\xE9e dans une colonne, elle se pr\xEAte bien \xE0 la visualisation d'un **grand nombre de points**. *G\xE9o shapes* est quand \xE0 elle adapt\xE9e \xE0 l'affichage de **g\xE9om\xE9trie complexes**, par exemple un r\xE9seau routier ou un PLU.

D'autres applications sont adapt\xE9es aux donn\xE9es territorialis\xE9es, ce sont les donn\xE9es poss\xE9dant des code territoire : code commune, d\xE9partement ou m\xEAme code parcelles. *Infos parcelles* permet de projeter les donn\xE9es sur le **plan cadastral** fran\xE7ais. *Cartographie territoriale multi-niveaux* affiche une **carte choropl\xE8the** des territoires allant de l'IRIS \xE0 la r\xE9gion et est adapt\xE9e \xE0 pr\xE9senter des donn\xE9es comme les r\xE9sultats d'\xE9lections ou d'autres indicateurs. *Zones de chalandise* permet de **fusionner les g\xE9om\xE9tries des territoires** pour avoir des zones de couverture, par exemple le p\xE9rim\xE8tre d'action des gendarmeries.

#### Visualisations en diagrammes

<img src="./images/functional-presentation/visu-diag.jpg"
     height="500" style="margin:40px auto;" />

D\xE8s que les donn\xE9es poss\xE8dent des colonnes avec des types num\xE9riques, il est possible de param\xE9trer pour elles des visualisations en diagrammes. *Graphiques divers* permet de faire diff\xE9rents type de graphiques communs : **histogrammes, lignes, aires, camemberts**, ... *Diagramme de Sankey* est adapt\xE9 \xE0 la **visualisation de flux**. *Graphique en radar* permet de comparer les lignes de donn\xE9es sur **diff\xE9rents crit\xE8res**. *Comparaison de proportions* produit des diagrammes en gaufre, pour par exemple comparer la r\xE9partitions des \xE9l\xE9ments suivant diff\xE9rentes cat\xE9gories.

*Graphes / R\xE9seaux* et *R\xE9seau de relations* permettent de faire des **graphes**, dans le premiers cas en utilisant des n\u0153uds et des liens, et dans le second cas en se basant sur 2 crit\xE8res dans 2 colonnes diff\xE9rentes d'un jeu de donn\xE9es. Pour les **donn\xE9es hi\xE9rarchiques**, 2 visualisations sont disponibles : *Treemap* et *Diagramme Sunburst*, et sont bien adapt\xE9e pour visualiser des donn\xE9es de budget ou d'allocation d'aides.

#### Visualisations temporelles

<img src="./images/functional-presentation/visu-temp.jpg"
     height="500" style="margin:40px auto;" />

Les donn\xE9es ayant des concepts li\xE9s aux dates peuvent \xEAtre visualis\xE9es avec des visualisation temporelles. Certaines sont interactives, comme *S\xE9ries temporelles* qui permet de comparer des **courbes au cours du temps** (d\xE9c\xE8s li\xE9s au covid par exemple), ou *Diagramme Timeline*  et *Calendrier* pour visualiser les donn\xE9es ayant des dates de d\xE9but et dates de fin.

D'autres visualisation temporelles sont anim\xE9es : elles poss\xE8de un bouton lecture et l'utilisateur peut les regarder de mani\xE8re passive. Ces visualisations sont int\xE9ressantes pour les r\xE9seaux sociaux car elles permettent d'augmenter l'engagement des autres utilisateurs, qui n'ont pas a cliquer sur le lien pour voir le r\xE9sultat. *Bar chart race* permet de voir des courses de barres horizontales et est adapt\xE9 quand il y a un **nombre important d'\xE9l\xE9ments qui ont la valeur maximale**, par exemple pour voir le pr\xE9nom le plus donn\xE9 au cours du temps. *Periodic Series* permet d'analyser les **donn\xE9es cycliques** pour voir comment elle se comportent d'une p\xE9riode sur une autre (par exemple des temp\xE9ratures ou du trafic de v\xE9hicules).

#### Visualisations textuelles

<img src="./images/functional-presentation/visu-text.jpg"
     height="500" style="margin:40px auto;" />

Ce type de visualisations pr\xE9sente les donn\xE9es sous forme de texte, y compris les donn\xE9es num\xE9riques. *M\xE9triques* permet de mettre en avant des **chiffres cl\xE9s** sous la forme de tuiles. *Tableau synth\xE9tique* calcule des **agr\xE9gats sur 1 ou 2 axes**, et peut par exemple montrer des moyennes d'une valeur par d\xE9partements. *Simple Table* permet d'afficher quelques colonnes du jeu de donn\xE9es en proposant des **filtres ou une arborescence** pour acc\xE9der plus rapidement aux donn\xE9es (par exemple r\xE9gion > d\xE9partement > commune). *Nuage de mots* analyse la fr\xE9quence des diff\xE9rents termes d'un jeu de donn\xE9es, ou de l'une de ses colonnes, pour mettre en avant ceux qui sont les plus pr\xE9sents.

Il est \xE9galement possible de cr\xE9er un moteur de recherche pour pouvoir explorer ses donn\xE9es sous formes de fiches avec *Liste et fiches*. Cela est bien adapt\xE9 quand les donn\xE9es poss\xE8dent des colonnes avec des textes longs, qui ne sont pas faciles \xE0 lire dans une vue tableau. Le rendu des fiches peut \xEAtre param\xE9tr\xE9 finement et il est m\xEAme possible de faire un rendu pdf du jeu de donn\xE9es. Cette application est bien adapt\xE9e pour r\xE9aliser des annuaires ou des catalogues.

#### Gamification

<img src="./images/functional-presentation/visu-jeu.jpg"
     height="500" style="margin:40px auto;" />

En plus des visualisations de donn\xE9es "traditionnelles", il est possible de configurer des mini-jeux. Le jeu est l'un des **meilleurs moyens d'apprentissage** et permet de m\xE9moriser certaines choses sans parfois m\xEAme s\u2019en rendre compte. Cela permet de rendre les donn\xE9es **plus attractives**, favorise l'engagement des utilisateurs qui peuvent r\xE9essayer les jeux plusieurs fois jusqu'\xE0 avoir un bon score et **augmenter la visibilit\xE9 des donn\xE9es** sur les r\xE9seaux sociaux via les m\xE9canismes de partage de scores et de "mise au d\xE9fi".

*Jeu de localisation* est destin\xE9 aux donn\xE9es g\xE9olocalis\xE9es et demande a placer des \xE9l\xE9ments sur une carte. *Jeu de Quizz* permet de r\xE9aliser un questionnaire a choix multiples. *Jeu de tri* demande \xE0 l'utilisateur de trier des donn\xE9es par glisser / d\xE9poser pour les classer suivant un certain crit\xE8re, par exemple pour trier des aliments en fonction de leur empreinte carbone. Tous ces jeux prennent en compte le temps dans le calcul du score, pour \xE9viter la "triche" et inciter l'utilisateur a m\xE9moriser les bonnes r\xE9ponses par essai / erreur.

#### Autre types de visualisations
Certaines visualisations sont compliqu\xE9es \xE0 classer et nous les mentionnons ici. *Diaporama* permet d'afficher des donn\xE9es ayant des **images en pi\xE8ces-jointes**. *Formulaire de saisie* offre la possibilit\xE9 de collecter des retour directement stock\xE9s dans un jeu de donn\xE9es, de faire du **crowd sourcing** ou d'offrir une interface de mise \xE0 jour des donn\xE9es plus l\xE9g\xE8re que l'int\xE9gralit\xE9 du back-office pour une personne qui ne serait responsable de la mise \xE0 jour que d'un jeu de donn\xE9es.

Il y a aussi des visualisation qui sont **adapt\xE9es \xE0 certains sch\xE9mas de donn\xE9es**, comme les *d\xE9lib\xE9rations* ou les *\xE9quipements* publi\xE9s suivant les sch\xE9mas du **Socle Commun des Donn\xE9es Locales (SCDL)**.

### Permissions et publication des visualisations

Les m\xE9canismes de permission et de publication des visualisations sont les m\xEAme que pour les jeux de donn\xE9es. Par d\xE9faut, une visualisation est priv\xE9e. Elle peut \xEAtre rendue publique par la suite. Dans tous les cas, il est recommand\xE9 de renseigner une description. Cette description est visible sur la page de consultation de la visualisation, mais aussi sur la page du jeu de donn\xE9es associ\xE9.

Il est aussi possible de partager une visualisation priv\xE9e avec des utilisateurs non authentifi\xE9s. Cela se fait en g\xE9n\xE9rant un lien de partage qui contient un code secret. Toute personne connaissant ce lien peut acc\xE9der \xE0 la visualisation, m\xEAme si les donn\xE9es qu'elle utilise sont priv\xE9es. Si le lien est compromis, il peut \xEAtre supprim\xE9 puis r\xE9g\xE9n\xE9r\xE9 avec un code secret diff\xE9rent. Cela permet d'embarquer des visualisations dans des sites priv\xE9s, sans avoir \xE0 cr\xE9er un ou plusieurs comptes utilisateur et transmettre des identifiants d'acc\xE8s.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Data Visualization
section: 2
subsection : 5
description : Data Visualization
published: true
---
Each visualization is presented through a **dedicated page** which allows to add context, a title and description, and different actions. It is possible to access the full-screen visualization and retrieve an HTML code that allows the visualization to be embedded in another website.

As with datasets pages, there are various buttons at the bottom of the page to **share** the visualization page on various social networks (Facebook, Twitter, Linkedin, etc.).

The visualization page has **enriched metadata** which allows better indexing by search engines and display of a thumbnail on social networks.

![D\xE9tails d'une visualisation](./images/functional-presentation/detail-visualisation.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Consultation d\u2019une visualisation
section: 2
subsection : 5
description : Consultation d\u2019une visualisation
published: true
---
Chaque visualisation est pr\xE9sent\xE9e au travers d\u2019une **page d\xE9di\xE9e** ce qui permet de lui associer du contexte, titre et description, ainsi que d'offrir diff\xE9rentes actions \xE0 l'utilisateur. Il est possible d\u2019acc\xE9der \xE0 la visualisation en plein \xE9cran (les visualisations sont consultables aussi bien sur **poste fixe que smartphone**) et de r\xE9cup\xE9rer un code HTML qui permet d\u2019embarquer la visualisation dans un autre site web.

<img src="./images/functional-presentation/detail-visualisation.jpg"
     height="500" style="margin:20px auto;" />

Tout comme pour les jeux de donn\xE9es, il y a en bas de page diff\xE9rents boutons pour **partager** la page de la visualisation sur diff\xE9rents r\xE9seaux sociaux (Facebook, Twitter, Linkedin, ...).

La page de la visualisation poss\xE8de des **m\xE9tadonn\xE9es enrichies** qui permettent une meilleure indexation par les moteurs de recherche et l'affichage d\u2019une miniature sur les r\xE9seaux sociaux.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Visualizations catalog
section: 2
subsection : 4
description : Visualizations catalog
published: true
---
Like datasets, a catalog page of visualizations is available with a **search engine** and tools to filter or sort visualizations.

Visualizations are presented through **image thumbnails**. As with datasets, these tiles have different action buttons so you can quickly **interact** with the visualization or navigate to a full-screen view of it.  
Clicking on a thumbnail title or image navigates to the visualization's details page.

![Visualisations](./images/functional-presentation/valorisations.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Catalogue des visualisations
section: 2
subsection : 4
description : Catalogue des visualisations
published: true
---
Tout comme pour les jeux de donn\xE9es, un catalogue des visualisations est disponible avec un **moteur de recherche** et des outils pour filtrer ou trier les visualisations. On peut ainsi acc\xE9der rapidement aux visualisations correspondantes \xE0 certaines th\xE9matiques ou li\xE9es \xE0 des donn\xE9es ayant des concepts particuliers.

Les visualisations sont pr\xE9sent\xE9es au travers de **vignettes imag\xE9es**. Comme pour les jeux de donn\xE9es, ces vignettes poss\xE8dent diff\xE9rents boutons d\u2019actions pour pouvoir **interagir** rapidement avec la visualisation ou naviguer vers une vue plein \xE9cran de celle-ci. La liste des r\xE9sultats est parcourue au moyen d\u2019un m\xE9canisme de scroll infini, aussi bien adapt\xE9 \xE0 une utilisation **bureautique ou mobile**. 

<img src="./images/functional-presentation/valorisations.jpg"
     height="500" style="margin:20px auto;" />

La plateforme offre une grande vari\xE9t\xE9 de visualisations, et de nouvelles sont r\xE9guli\xE8rement ajout\xE9es. Il y a des cartes interactives pour pr\xE9senter des donn\xE9es g\xE9ographiques, des graphiques, visualisations anim\xE9es, nuages de mots, ... Il est m\xEAme possible de r\xE9aliser des moteurs de recherche, plus adapt\xE9s que la table pour pr\xE9senter des donn\xE9es avec des textes longs, ou des mini-jeux qui permettent de d\xE9couvrir les donn\xE9es en jouant avec elle ! L'ensemble des visualisations disponibles est pr\xE9sent\xE9 plus en d\xE9tails dans la section 3.2.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Configuration
section: 2
updated: 2020-12-10
description : Configuration
published: true
---

### Variables

*Data Fair* supports quite a large number of parameters that are documented below. We try as much as possible to define sensible default values, still some parameters will almost always need to be overridden, these parameters have **IMPORTANT** in their descriptions.

Parameters can be overridden by directly modifying the files, but the recommanded way is to use environment variables.

{{CONFIG_VARS}}
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Installation
section: 1
updated: 2020-12-10
description : Installation
published: true
---

A complete Data Fair installation is constitued of multiple Web services, to understand how it works please read about the [technical architecture]({{DOC_BASE}}technical-architecture/).

The recommended installation is based on [Docker](https://docker.com) containers, and [this image](https://github.com/data-fair/data-fair/pkgs/container/data-fair) in particular.

## Requisites

### Hardware setup

This documentation was written using Linux (Ubuntu 20.04), but any Linux running a recent Docker service should work the same. Minimal recommended configuration is as follow:

 * At least 2 cores, 4 is better if mongodb and elasticsearch are deployed too
 * 4 Gb of memory, 16 if mongodb and elasticsearch are deployed too
 * 50 Gb of SSD hard drive
 * 100 Mbits of up and down bandwidth

### Docker

Install Docker following the [official documentation](https://docs.docker.com/engine/installation/).

To use the standard installation recipes install Docker Compose following the [official documentation](https://docs.docker.com/compose/install/).

### MongoDB

Data Fair requires MongoDB 4.x. It can be [installed in various ways](https://docs.mongodb.com/v4.4/installation/).

**Manual installation of MongoDB is optional**, you can install it alongside Data Fair Web services using the Docker Compose recipes below.

### ElasticSearch

Data Fair requires ElasticSearch 7.x with the ingest-attachment plugin. See [installation instructions here](https://www.elastic.co/guide/en/elasticsearch/reference/6.0/install-elasticsearch.html).

**Manual installation of ElasticSearch is optional**, you can install it alongside Data Fair Web services using the Docker Compose recipes below.

## Recipe 1 : simple local installation

This recipe runs Data Fair and its most important dependencies locally on your computer.

  - download files [data-fair.env]({{DOC_BASE}}install-resources/local/data-fair.env), [default.conf]({{DOC_BASE}}install-resources/local/default.conf) and [docker-compose.yaml]({{DOC_BASE}}install-resources/local/docker-compose.yaml) next to each other in a directory.
  - run \`docker-compose --env-file data-fair.env up -d\` in the directory
  - check that all containers are up with \`docker-compose ps\`
  - you should be able to open [http://localhost](http://localhost)
  - the superadmin user is *admin@test.com* on the login page you can click on *Renew the password* then on *Open the development mail box* to define its password then use it to login

## Recipe 2 : full installation

This recipe can run Data Fair on a virtual machine exposed to the internet.

  - download files [data-fair.env]({{DOC_BASE}}install-resources/full/data-fair.env), [default.conf]({{DOC_BASE}}install-resources/full/default.conf) and [docker-compose.yaml]({{DOC_BASE}}install-resources/full/docker-compose.yaml) next to each other in a directory.
  - carefully read and edit the *.env* file
  - edit the line *server_name* in default.conf
  - run \`docker-compose --env-file data-fair.env up -d\` in the directory
  - check that all containers are up with \`docker-compose ps\`
  - check that the reverse proxy is attempting to create a certificate with \`docker-compose logs nginx\`
  - you should be able to open data-fair in your browser using your domain name


This recipe completes the previous one in many ways that you can chose to use or not by tinkering with the files. These improvements are detailed below.

### Mails transport configuration

By changing the MAILS_TRANSPORT and MAILDEV_ACTIVE variables you can switch from the temporary maildev solution to a proper mail transport. Please note that this element of the configuration should be managed quite early as it is unsafe to expose maildev to the internet.

### HTTPS using letsencrypt certificate

The nginx reverse proxy is configured to expose every services over the HTTPS, this will improve security. The certificate provider is letsencrypt and the certificate is automatically generated which requires that the domain name and the machine are available from the internet.

The related changes are:
  - the use of another image for the nginx container (jonasal/nginx-certbot)
  - the new volume nginx-letsencrypt
  - variable BASE_URL in data-fair.env
  - the whole beginning of the server block in default.conf.

### Reverse proxy cache

The nginx reverse proxy is configured to act as a cache for Data Fair, this will improve response times and limit the load on the service. It is mostly important when exposing Data Fair to the internet and creating public datasets.

The related changes are:
  - the definition of data-fair-cache in default.conf
  - the new volume nginx-cache in docker-compose.yaml

### Server / worker separation

The *data-fair* service has a new MODE=server variable and there is a new service *data-fair-worker*. This will improve the responsiveness of the HTTP server when there is heavy work going on in the worker (files parsing, etc).

### Portals

Portals is a companion service to Data Fair that lets you create private or open data portals using Data Fair as a backend. Look at the new left navigation items (as normal user and as super admin).

The related changes are:
  - the new service *portals*
  - the new volume *portals-data*
  - a new location rule in default.conf
  - the new variables EXTRA_NAV_ITEMS and EXTRA_ADMIN_NAV_ITEMS in data-fair.env and the *data-fair* service

### Processings

Processings is a companion service to Data Fair that lets you define and run tasks based on plugins published on npm. Look at the new left navigation items (as normal user and as super admin).

The related changes are:
  - the new services *processings* and *processings-worker*
  - the new volume *processings-data*
  - a new location rule in default.conf
  - the new variables EXTRA_NAV_ITEMS and EXTRA_ADMIN_NAV_ITEMS in data-fair.env and the *data-fair* service

### Metrics

Metrics is a companion service to Data Fair that can receive logs over UDP from the reverse proxy to store aggregated usage metrics of your datasets. Look at the new left navigation item.

The related changes are:
  - the new service *metrics*
  - a new location rule in default.conf
  - the new *log_format* and *access_log* rules in default.conf
  - the new variables EXTRA_NAV_ITEMS and EXTRA_ADMIN_NAV_ITEMS in data-fair.env and the *data-fair* service

### Backup

**TODO**`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: API Data Fair
section: 1
updated: 2020-12-10
description: API Data Fair
published: true
---

Data Fair expose une API Rest compl\xE8te. Une partie de cette API est essentiellement \xE0 destination des applications et autres r\xE9utilisations des jeux de donn\xE9es. Une autre partie concerne principalement les producteurs de contenu qui souhaitent automatiser leur processus. Dans cette page nous proposons un aper\xE7u de quelques m\xE9thodes de publication de contenu. Les exemples ci-dessous ne montrent qu'un \xE9chantillon des capacit\xE9s de l'API Data Fair et ne remplacent pas la documentation interactive bien plus compl\xE8te embarqu\xE9e dans le service.

### Pr\xE9-requis

  - Une installation op\xE9rationnelle de Data FAIR, soit locale, soit publique comme sur [koumoul.com](https://koumoul.com/s/data-fair)
  - Un compte et une cl\xE9 d'API avec la port\xE9e "Gestion des jeux de donn\xE9es" (voir vos param\xE8tres personnels ou d'organisation dans le menu en haut \xE0 droite)
  - [curl](https://curl.haxx.se/) ou autre client HTTP \xE0 condition d'adapter les exemples

D\xE9finissez une variable contenant votre cl\xE9 d'API :

\`\`\`sh
export API_KEY="XXXX"
\`\`\`

D\xE9finissez une variable contenant l'URL de base de votre instance Data Fair :

\`\`\`sh
export Data Fair_URL="https://koumoul.com/s/data-fair"
export Data Fair_URL="http://localhost/data-fair"
\`\`\`

### Jeu de donn\xE9es simple bas\xE9 fichier

T\xE9l\xE9chargez un fichier CSV d'exemple :

\`\`\`sh
curl https://raw.githubusercontent.com/data-fair/data-fair/master/test/resources/dataset1.csv -o dataset1.csv
\`\`\`

Cr\xE9ez un jeu de donn\xE9es simple \xE0 partir de ce fichier avec une requ\xEAte HTTP multipart :

\`\`\`sh
curl -v --header "x-apiKey: $API_KEY" --form file=@dataset1.csv $Data Fair_URL/api/v1/datasets
\`\`\`

Notez dans le retour que le jeu de donn\xE9es cr\xE9\xE9 s'est vu attribu\xE9 un identifiant "id" que vous pouvez conserver pour effectuer des op\xE9rations ult\xE9rieures sur ce jeu de donn\xE9es.

\`\`\`sh
export DATASET_ID=identifiant que vous venez de recevoir
\`\`\`

L'attribut "status" est \xE0 "loaded". Notez que les traitements sur le jeu de donn\xE9es sont ex\xE9cut\xE9s de mani\xE8re asynchrone, quelques secondes plus tard le statut devrait devenir "finalized" en passant par des \xE9tapes interm\xE9diaires. Pour v\xE9rifier cela vous pouvez faire un GET sur le jeu de donn\xE9es :

\`\`\`sh
curl -v --header "x-apiKey: $API_KEY" $Data Fair_URL/api/v1/datasets/$DATASET_ID
\`\`\`

L'attribut page est lui aussi int\xE9ressant, il vous permet de naviguer dans un navigateur directement sur la page de description du jeu de donn\xE9es. Pour conna\xEEtre l'\xE9tendue des capacit\xE9s de requ\xEAtage sur ce jeu de donn\xE9es vous pouvez vous rendre sur l'onglet API depuis cette page. Voici un exemple basique :

\`\`\`sh
curl -v --header "x-apiKey: $API_KEY" $Data Fair_URL/api/v1/datasets/$DATASET_ID/lines
\`\`\`

### Jeu de donn\xE9es bas\xE9 fichier avec pi\xE8ces jointes

T\xE9l\xE9chargez un fichier CSV d'exemple qui contient une colonne de chemins vers des pi\xE8ces jointes :

\`\`\`sh
curl https://raw.githubusercontent.com/data-fair/data-fair/master/test/resources/dataset-attachments.csv -o dataset-attachments.csv
\`\`\`

T\xE9l\xE9chargez l'archive contenant les pi\xE8ces jointes correspondantes :

\`\`\`sh
curl https://raw.githubusercontent.com/data-fair/data-fair/master/test/resources/files.zip -o files.zip
\`\`\`

Cr\xE9ez un jeu de donn\xE9es bas\xE9 sur le CSV et enrichi avec les pi\xE8ces jointes de l'archive gr\xE2ce \xE0 cette requ\xEAte HTTP multipart :

\`\`\`sh
curl -v --header "x-apiKey: $API_KEY" --form file=@dataset-attachments.csv --form attachments=@files.zip $Data Fair_URL/api/v1/datasets
export DATASET_ID=identifiant que vous venez de recevoir
\`\`\`

Si vous visitez la page de ce jeu de donn\xE9es vous verrez un onglet "Fichiers" suppl\xE9mentaire qui permet de lister les pi\xE8ces jointes et d'effectuer des recherches dans leur contenu. En effectuant une requ\xEAte basique sur le jeu de donn\xE9es vous pouvez constater l'ajout de champs \\_file.\\* qui sont issus de l'analyse du contenu des pi\xE8ces jointes.

### Jeu de donn\xE9es \xE9ditable

Cr\xE9ez un jeu de donn\xE9es \xE9ditable vide avec un sch\xE9ma minimaliste. Notez l'attribut "isRest" qui est la condition pour cr\xE9er ce type de jeu de donn\xE9es :

\`\`\`sh
curl -v --header "x-apiKey: $API_KEY" --header "Content-Type: application/json" $Data Fair_URL/api/v1/datasets --data '{
  "isRest": true,
  "title": "rest1",
  "schema": [{ "key": "attr1", "type": "string" }, { "key": "attr2", "type": "string" }]
}'
export DATASET_ID=identifiant que vous venez de recevoir
\`\`\`

Ajouter une ligne de donn\xE9e :

\`\`\`sh
curl -v --header "x-apiKey: $API_KEY" --header "Content-Type: application/json" $Data Fair_URL/api/v1/datasets/$DATASET_ID/lines --data '{
  "_id": "ligne1",
  "attr1": "attr1 ligne1",
  "attr2": "attr2 ligne1"
}'
\`\`\`

Ajoutez/modifiez plusieurs lignes de donn\xE9e :

\`\`\`sh
curl -v --header "x-apiKey: $API_KEY" --header "Content-Type: application/json" $Data Fair_URL/api/v1/datasets/$DATASET_ID/_bulk_lines --data '[
  { "_id": "ligne1", "_action": "patch", "attr1": "attr1 ligne1 autre valeur"},
  { "_id": "ligne2", "attr1": "attr1 ligne2", "attr2": "attr2 ligne2"}
]'
\`\`\`

V\xE9rifiez la donn\xE9e :

\`\`\`sh
curl -v --header "x-apiKey: $API_KEY" $Data Fair_URL/api/v1/datasets/$DATASET_ID/lines
\`\`\`

### Jeu de donn\xE9es \xE9ditable avec pi\xE8ces jointes

Cr\xE9ez un jeu de donn\xE9es \xE9ditable vide avec un sch\xE9ma qui contient un champ type *pi\xE8ces jointes* :

\`\`\`sh
curl -v --header "x-apiKey: $API_KEY" --header "Content-Type: application/json" $Data Fair_URL/api/v1/datasets --data '{
  "isRest": true,
  "title": "rest1",
  "schema": [
    { "key": "attr1", "type": "string" },
    { "key": "attachmentPath", "type": "string", "x-refersTo": "http://schema.org/DigitalDocument" }
  ]
}'
export DATASET_ID=identifiant que vous venez de recevoir
\`\`\`

Ajoutez plusieurs lignes de donn\xE9es avec pi\xE8ces jointes dans une archive :

\`\`\`sh
echo '[
  { "_id": "line1", "attr1": "test1", "attachmentPath": "test.odt" },
  { "_id": "line2", "attr1": "test1", "attachmentPath": "dir1/test.pdf" }
]' > actions.json
curl -v --header "x-apiKey: $API_KEY" $Data Fair_URL/api/v1/datasets/$DATASET_ID/_bulk_lines --form attachments=@files.zip --form actions=@actions.json
\`\`\`

V\xE9rifiez la donn\xE9e :

\`\`\`sh
curl -v --header "x-apiKey: $API_KEY" $Data Fair_URL/api/v1/datasets/$DATASET_ID/lines
\`\`\`
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Applications de visualisation
section: 2
updated: 2020-12-10
description: Applications de visualisation de donn\xE9es
published: true
---

N'importe qui peut d\xE9velopper une nouvelle application de visualisation de donn\xE9es compatible avec Data Fair. Ces applications sont mises \xE0 disposition sous forme de services : ce sont des applications Web disponibles en ligne. Une instance de Data Fair fait office de proxy vers les applications configur\xE9es et les r\xE9expose en leur communiquant les informations de contexte dont elles ont besoin. Pour pouvoir \xEAtre int\xE9gr\xE9e dans une instance Data Fair, une application doit exposer certaines informations.

### Exemples

  - Un plugin pour [vue-cli](https://cli.vuejs.org/) qui permet de g\xE9n\xE9rer une application : [vue-cli-plugin-app](https://github.com/data-fair/vue-cli-plugin-app)
  - Une application statique minimaliste en HTML/JS/CSS pur avec juste un petit peu de jQuery : [app-minimal](https://github.com/data-fair/app-minimal)
  - Une application compl\xE8te d\xE9velopp\xE9e avec des frameworks modernes : [app-charts](https://github.com/data-fair/app-charts)

### M\xE9tadonn\xE9es essentielles

Une application expose un fichier HTML, typiquement un fichier \`\xECndex.html\` \xE0 sa racine. Ce fichier doit contenir certaines informations, renseign\xE9es dans des balises de la section HEAD :
 * **title** : Le titre de l'application, dans une balise title.
 * **description** : La description de l'application, dans une balise meta.

### Gestion des configurations

Une application doit donner \xE0 Data Fair le moyen de cr\xE9er et \xE9diter des configurations coh\xE9rentes avec ses besoins. Les configurations sont d\xE9crites \xE0 l'aide de JSON sch\xE9ma, en servant \xE0 la racine de l'application un fichier \`config-schema.json\`. Ce fichier peut avoir des annotations particuli\xE8res qui permettent d'avoir du contr\xF4le sur le formulaire de configuration qui sera g\xE9n\xE9r\xE9.

Ce formulaire est g\xE9n\xE9r\xE9 \xE0 l'aide de la librairie [vuetify-jsonschema-form](https://github.com/koumoul-dev/vuetify-jsonschema-form/) (v-jsf), la documentation des diff\xE9rente annotations JSON sch\xE9ma utilis\xE9e est [disponible ici](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/).

### Informations de contexte

#### C\xF4t\xE9 client

Par simplicit\xE9 nous privil\xE9gions des applications statiques d\xE9ployables sur un simple serveur Web comme nos applications exemples. Pour ces applications nous avons pr\xE9vu un m\xE9canisme simple de transmission des informations contextuelles.

Le proxy Data Fair cherche dans le contenu HTML qui transite la cha\xEEne de caract\xE8re %APPLICATION% et la remplace par la configuration d'application compl\xE8te au format JSON. Le code Javascript peut donc r\xE9cup\xE9rer cet objet et l'utiliser pour effectuer un rendu adapt\xE9 et consommer l'API de Data FAIR en cons\xE9quence. L'objet JSON transmis contient les champs suivants :

 * **title**: Titre de la visualisation configur\xE9e
 * **url**: URL ou est expos\xE9e l'application utilis\xE9e pour la configuration
 * **id**: Identifiant de la visualisation
 * **status**: Etat de la configuration (brouillon, publi\xE9, ...)
 * **configuration**: La structure de cet objet d\xE9pend du sch\xE9ma de configuration de l'application utilis\xE9e
 * **href**: Point d'acc\xE8s de l'API Data Fair permettant de lire / modifier la configuration d'application
 * **page**: Page qui pr\xE9sente la visualisation
 * **exposedUrl**: URL d'exposition de la visualisation, peut \xEAtre utilis\xE9e dans une iFrame ou en acc\xE8s direct
 * **apiUrl**: URL de l'API Data Fair
 * **captureUrl**: URL vers le service de capture, permet de r\xE9aliser des exports image ou impressions PDF
 * **wsUrl**: URL de la web socket Data Fair, utile pour les applications qui manipulent des donn\xE9es mise a jour en temps r\xE9el

#### C\xF4t\xE9 serveur

Il est aussi possible de d\xE9velopper une application avec rendu c\xF4t\xE9 serveur. Dans ce cas le mode de transmission des informations contextuelles est diff\xE9rent.

Ces informations sont transmises \xE0 l'aide de headers HTTP que le serveur de l'application interpr\xE8te. Les headers suivant sont transmis par le service :
 * **X-Exposed-Url** : URL d'exposition de la visualisation, peut \xEAtre utilis\xE9e dans une iFrame ou en acc\xE8s direct
 * **X-Application-Url** : URL \xE0 utiliser pour conna\xEEtre le propri\xE9taire de l'application, les droits de l'utilisateur courant (pour par exemple masquer / afficher un bouton de configuration).
 * **X-API-Url** : URL de l'API de c, ce qui permet ensuite d'acc\xE9der aux services distants et aux datasets
 * **X-Directory-Url**: URL vers le service de gestion des utilisateurs.


### Outils de d\xE9veloppement

#### Serveur de d\xE9veloppement Data Fair

Le projet [df-dev-server](https://github.com/data-fair/dev-server) permet de simplifier le d\xE9veloppement des applications Data Fair.

 * Il est plus l\xE9ger que Data Fair car il n'a pas besoin des diff\xE9rents services en local (bases de donn\xE9es, gestion utilisateurs, ...)
 * Il permet d'avoir d\xE9j\xE0 des donn\xE9es de disponible en se connectant \xE0 des sources distantes
 * Il est plus facile a faire fonctionner sous Windows, car ne n\xE9cessite pas Docker
 * Il n\xE9cessite par contre une connexion internet pour pouvoir acc\xE9der aux donn\xE9es
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Collecteurs de donn\xE9es
section: 3
updated: 2020-12-10
description : Collecteurs de donn\xE9es
published: true
---

Les collecteurs de donn\xE9es p\xE9riodiques permettent de mettre \xE0 jour certains jeux de donn\xE9es sp\xE9cifiques de mani\xE8re automatis\xE9e. Il y a principalement 2 cas d'usage, mais on peut en imaginer d'autres :
 * Mise \xE0 jour de jeux de donn\xE9es aliment\xE9s par des fichiers produits par d'autres traitement automatis\xE9s. Typiquement des traitements r\xE9alis\xE9s par des ETL avec en sortie des fichiers tabulaires ou cartographiques mis \xE0 disposition sur un espace d'\xE9change (serveur HTTP ou FTP).
 * Mise \xE0 jour de donn\xE9es temps r\xE9el aliment\xE9s par des flux de donn\xE9es ayant des formats sp\xE9cifiques. Cela concerne principalement des donn\xE9es IOT.

 La collecte de donn\xE9es est assur\xE9e par le service open source [Data Fair Processings](https://github.com/data-fair-processings). Lorsque l'on souhaite collecter des donn\xE9es dans un nouveau format ou protocole d'\xE9change, il faut d\xE9velopper un nouveau plugin. On peut distinguer 2 cas de figure. Soit la mise \xE0 disposition des donn\xE9es correspond \xE0 un standard qui n'est pas encore support\xE9, et dans ce cas le plugin peut \xEAtre int\xE9gr\xE9 directement dans Data Fair Processings via une merge request. Soit le plugin reste propri\xE9taire ou correspond \xE0 un format/protocole trop sp\xE9cifique pour \xEAtre int\xE9gr\xE9 directement dans le projet, et il est rajout\xE9 par configuration, lors de l'installation du service.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Connecteurs de catalogues
section: 5
updated: 2020-12-10
description: Connecteurs de catalogues
published: false
---
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Services externes
section: 3
updated: 2020-12-10
description: Services externes
published: true
---

Une API peut \xEAtre utlis\xE9e par ce service si elle respecte certains crit\xE8res. Elle doit \xEAtre d\xE9crite avec un certain formalisme : sp\xE9cification OpenAPI 3.0, annotations s\xE9mantiques particuli\xE8res et m\xE9canisme d'identification de l'API.

### Sp\xE9cification OpenAPI 3.0

Le sch\xE9ma utilis\xE9 pour d\xE9crire une API est celui de la [sp\xE9cification OpenAPI 3.0](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md). Le format \xE0 utiliser est JSON (YAML sera support\xE9 prochainement). Les autres formats ne sont pas support\xE9s, en particulier le format Swagger 2.0. Si votre API est d\xE9crite dans un autre format, [certains outils](https://github.com/Mermade/awesome-openapi3) permettent de la convertir dans le format OpenAPI 3.0.

N\xE9amoins, une description en pur OpenAPI 3.0 est insuffisante et il faut renseigner des informations compl\xE9mentaires, notamment pour identifier l'API plus facilement et la s\xE9mantiser. Ces informations sont ajout\xE9es en utilisant le format d'extensions autoris\xE9 par la sp\xE9cification est les attributs suppl\xE9mentaires sont de la forme *x-PropertyName*.

### Identification de l'API

La sp\xE9cification OpenAPI 3.0 n'offre pas de m\xE9canisme permettant d'identifier de mani\xE8re unique un API. Cela pose diff\xE9rents probl\xE8mes :
 * Il est difficile de suivre l'\xE9volution de l'API, on ne sait pas si 2 descriptions similaires correspondent \xE0 2 APIs diff\xE9rentes ou a 2 versions diff\xE9rentes d'une m\xEAme API.
 * Certaines applications n\xE9cessitent des fonctionnalit\xE9s particuli\xE8res d'API qu'il est difficile de d\xE9crire s\xE9mantiquement. Une identification unique de l'API permet au moins de dire que les applications ont besoin de cette API (et plus pr\xE9cis\xE9ment d'une version minimale) en particulier.

Pour identifier de mani\xE8re unique une API, nous avons choisi d'adopter [ces recommandations](https://github.com/zalando/restful-api-guidelines/blob/master/chapters/compatibility.adoc) : il faut renseigner un attribut \`x-api-id\` dans le bloc \`\xECnfo\`. Plus pr\xE9cis\xE9ment, il doit avoir cette forme :

\`\`\`yaml
/info/x-api-id:
  type: string
  format: urn
  pattern: ^[a-z0-9][a-z0-9-:.]{6,62}[a-z0-9]$
  description: |
    Globally unique and immutable ID required to identify the API. The API
    identifier allows to reveal the history and evolution of an API as a
    sequence of API specifications. It enables validation tools to detect
    incompatible changes and incorrect semantic versions.
\`\`\`

### Annotations s\xE9mantiques

Les annotations s\xE9mantiques permettent de pr\xE9ciser ce que font les diff\xE9rentes op\xE9rations d'une API. On peut d'une part typer plus pr\xE9cis\xE9ment les donn\xE9es en entr\xE9e et en sortie en utilisant des ontologies (par exemple un code postal est plus pr\xE9cis qu'un entier) et d'autre part d\xE9terminer une plus grande diversit\xE9 d'actions que les verbes HTTP qui sont tr\xE8s restreints.

Le format d'annotations s\xE9mantiques que nous avons choisi est d\xE9crit dans [cet article](http://www.intelligence.tuc.gr/~petrakis/publications/SOAS4.pdf). *x-operationType* permet de sp\xE9cifier plus pr\xE9cis\xE9ment l'action r\xE9alis\xE9e par l'op\xE9ration. Nous conseillons d'utiliser le vocabulaire [d\xE9fini ici](http://schema.org/Action) dans les types sp\xE9cifiques. Pour pouvoir \xEAtre utilis\xE9 pour de l'enrichissement, un endpoint doit utiliser l'action *Search*. *x-refersTo* permet de typer les entr\xE9es et sorties avec des ontologies. Le vocabulaire \xE0 utiliser est d\xE9crit dans ce projet, dans le fichier \`contract/vocabulary.json\`.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Analytics
section: 8
updated: 2020-12-09
description : Analytics
published: true
---

La gestion des analytics et autres statistiques d'utilisation de la plateforme peut se faire de 2 mani\xE8res :
 * A l'aide d'un service en ligne externe \xE0 la plateforme, tel que Google Analytics
 * Avec un service d'analytics d\xE9ploy\xE9 sur la m\xEAme infrastructure que Data Fair : dans ce cas nous recommandons le logiciel open source [Matomo](https://fr.matomo.org/matomo-on-premise/) (anciennement Piwik).

### Matomo

Matomo est \xE9crit en PHP et n\xE9cessite une base de donn\xE9es MySQL, comme par exemple MariaDB. Il est distribu\xE9 sous forme de conteneurs Docker, et nous recommandons de l'int\xE9grer \xE0 la plateforme de cette mani\xE8re.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Backup
section: 11
updated: 2020-12-09
description : Backup - Sauvegardes
published: true
---

Le service Backup permet de sauvegarder les donn\xE9es des diff\xE9rents services de la plateforme dans un format compress\xE9.

Les differents base MongoDB, les donn\xE9es de data-fair et les utilisateurs de simple-directory sont enregistr\xE9es lors d\u2019une sauvegarde.
Il est possible de configurer une sauvegarde p\xE9riodique ou de d\xE9clencher une sauvegarde manuellement.

### Stack technique

Le backend de Backup est \xE9crit en NodeJS avec le framework ExpressJS. La persistance est assur\xE9e avec MongoDB. Le frontend est r\xE9alis\xE9 avec les frameworks VueJS, VuetifyJS et NuxtJS. De part son r\xF4le, il est important d'avoir des volumes tr\xE8s fiables avec ce service.

Il n'y a pour l'instant qu'un mode de distribution qui est Docker, et il est recommand\xE9 d'op\xE9rer ce service dans un environnement tel que Kubernetes.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Capture
section: 9
updated: 2020-12-09
description : Capture
published: true
---

Le service Capture permet de cr\xE9er des images \xE0 partir de visualisations web ou des documents PDF \xE0 partir de pages web.

### Stack technique

Le backend de Capture est \xE9crit en NodeJS avec le framework ExpressJS. Ce service ne poss\xE8de pas de persistance ni de frontend. Ce service utilise un navigateur headless pour faire les rendu qui est [Puppeteer](https://github.com/puppeteer/puppeteer)

Il n'y a pour l'instant qu'un mode de distribution qui est Docker, et il est recommand\xE9 d'op\xE9rer ce service dans un environnement tel que Kubernetes.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Connecteurs de catalogues
section: 5
updated: 2020-12-09
description : Connecteurs de catalogues
published: true
---

Les connecteurs de catalogues permettent d'interagir avec des catalogues de donn\xE9es, pour moissonner leurs donn\xE9es ou au contraire y publier des jeux de donn\xE9es h\xE9berg\xE9s sur Data Fair. Contrairement aux traitements de donn\xE9es p\xE9riodiques, les connecteur de catalogue permettent de synchroniser des ensembles de jeux de donn\xE9es.

Une refonte est en cours concernant ces connecteurs qui vont devoir \xEAtre r\xE9aliser sous la forme d'API Rest respectant un certain contrat sp\xE9cifi\xE9 au format OpenAPI 3.1.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Data Fair
section: 2
updated: 2020-12-09
description : Data Fair
published: true
---

Data Fair permet d'exposer facilement ses donn\xE9es via une API web, contractualis\xE9e et document\xE9e, ce qui permet aux d\xE9veloppeurs de les r\xE9utiliser facilement dans leurs **applications**. De plus les donn\xE9es peuvent \xEAtre s\xE9mantis\xE9es, ce qui permet ensuite de les enrichir avec d'autres donn\xE9es s\xE9mantis\xE9es. Ainsi, des donn\xE9es qui ont une adresse peuvent par exemple \xEAtre compl\xE9t\xE9es par des coordonn\xE9es GPS, ce qui permet ensuite de les afficher sur une carte.

Le coeur de la solution permet
* d\u2019indexer des donn\xE9es
* d\u2019Apifier des donn\xE9es
* d\u2019enrichir des donn\xE9es
* de partager des donn\xE9es
* de configurer les visualisations
* de g\xE9rer les droits d\u2019acc\xE8s aux donn\xE9es et aux visualisations (publication)


Cette page pr\xE9sente bri\xE8vement les langages de programmation, services et outils utilis\xE9s pour r\xE9aliser ce projet. Pour les d\xE9veloppeurs vous pouvez consulter directement le [README et le code source sur github](https://github.com/data-fair/data-fair).

## Backend

Le backend sert l'application cliente (frontend) et l'API. Le frontend est une application Web dynamique avec un rendu c\xF4t\xE9 serveur partiel et un rendu final c\xF4t\xE9 client en Javascript.


### Persistance

Ce service utilise 3 types de persistance : fichier, base de donn\xE9es et moteur de recherche.

La persistance fichier est utilis\xE9e pour stocker les jeux de donn\xE9es des utilisateurs : les fichiers sont stock\xE9s tels quels sur le syst\xE8me de fichier et sont ensuite analys\xE9s puis index\xE9s.

Les informations sur les jeux de donn\xE9es, les services distants et les configurations d'applications sont stock\xE9es dans une base de donn\xE9es [MongoDB](https://www.mongodb.com/fr), qui est une base NoSQL open source orient\xE9e documents. Les jeux de donn\xE9es incr\xE9mentaux sont \xE9galement stock\xE9s dans cette base.

Les datasets sont index\xE9s dans un moteur de recherche open source [ElasticSearch](https://www.elastic.co/fr/products/elasticsearch). Tr\xE8s performant et puissant il permet de faire des recherches textuelles et des agr\xE9gations pour des temps de r\xE9ponse irr\xE9prochables.

## Front end

L'interface du service est une applications Web (HTML/CSS/JS).

Le framework Javascript utilis\xE9 est [VueJS 2](https://vuejs.org/) compl\xE9t\xE9 principalement par [Nuxt](https://nuxtjs.org/) et [Vuetify](https://vuetifyjs.com/en/). Le tout forme un environnement tr\xE8s complet pour d\xE9velopper des interfaces graphiques dynamiques et claires. La documentation sur cet \xE9cosyst\xE8me est bien fournie et de qualit\xE9. Ce n'est pas pour rien que VueJS fait partie des projets Github les plus populaires.

## Code source

Le code du backend est \xE9crit en [NodeJS](https://nodejs.org/en/), en respectant la syntaxe ES7. Le code utilise donc massivement les promesses, cach\xE9es derri\xE8res des mots cl\xE9s comme *async* ou *await*. Cela permet d'avoir du code clair, concis et facilement compr\xE9hensible, tout en \xE9tant tr\xE8s performant gr\xE2ce \xE0 une gestion non bloquante des op\xE9rations asynchrones.

Un autre aspect de NodeJS est tr\xE8s utilis\xE9 dans ce projet : la gestion d'op\xE9rations en flux (streams). Cela permet de r\xE9aliser des traitements sur des volumes importants sans abuser des ressources de la machine. Ce service demande donc peu de m\xE9moire vive pour fonctionner (mais il en faudra par contre une bonne quantit\xE9 pour ElasticSearch).

Le serveur web et l'API sont \xE9crits avec le framework [express 4](https://expressjs.com/fr/) qui est utilis\xE9 dans de nombreux projets Web NodeJS. Les briques fonctionnelles sont s\xE9par\xE9es dans des *router* Express, qui permettent par exemple de d\xE9finir les op\xE9rations autour d'un certain concept.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Statistiques d'API
section: 12
updated: 2020-12-09
description : R\xE9cup\xE9ration des statistiques d'acc\xE8s \xE0 l'API
published: true
---

HTTP logs permet d'extraire des statistiques d'utilisation des API \xE0 partir des logs HTTP de services tels que Nginx. Dans la mesure ou Data Fair et les diff\xE9rents services associ\xE9s utilisent beaucoup les m\xE9canismes de cache pour am\xE9liorer les temps d'acc\xE8s aux ressources, des statistiques pr\xE9cises d'utilisation des diff\xE9rents points d'acc\xE8s de la plateforme ne peuvent \xEAtre extraites qu'apr\xE8s coup.

Les logs d'acc\xE8s aux API sont publi\xE9s sur Data Fair sous la forme d'un jeu de donn\xE9es qui peut ensuite \xEAtre expos\xE9 partiellement \xE0 des organisation en leur proposant les donn\xE9es filtr\xE9es les concernant.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Introduction
section: 1
updated: 2020-12-09
description : Introduction
published: true
---

L'architecture technique retenu est une plateforme compos\xE9 de diff\xE9rents services Web. La plupart de ces services sont open source et d\xE9crits ici, mais certaines extensions peuvent \xEAtre disponibles sous la forme de services distants propri\xE9taires :

* **Data Fair**, le coeur de la solution, permet d\u2019indexer, d\u2019Apifier, d\u2019enrichir et de partager facilement ses donn\xE9es
* **Simple Directory** permet de se connecter au portail et g\xE9rer les comptes
* **Data Fair Portal** permet de cr\xE9er facilement plusieurs portails de donn\xE9es, pour du partage en opendata ou en interne
* Les **Connecteurs de catalogues** permettent de se synchroniser avec d'autres catalogues de donn\xE9es, dans les 2 sens
* Les **Data Fair Processings** permet de programmer des traitements p\xE9riodiques pour mettre \xE0 jour les donn\xE9es et de r\xE9colter les donn\xE9es issues de l\u2019IOT
* **Notify** permet de g\xE9rer les alertes et les notifications
* **Les analytics** peuvent \xEAtre g\xE9r\xE9s directement dans la plateforme \xE0 l'aide de Matomo
* **Capture** permet de cr\xE9er les miniatures et les captures d\u2019images des visualisations
* **Thumbor** permet les traitement des images des jeux de donn\xE9es
* **Backup** permet de g\xE9rer les sauvegardes de la plateforme
* Les **services distants** ne sont pas d\xE9velopp\xE9es dans ce projet : ce sont des applications Web d\xE9velopp\xE9es et d\xE9ploy\xE9es de mani\xE8re autonome qui respectent les r\xE8gles d\u2019interop\xE9rabilit\xE9 d\u2019OpenAPI 3.0 avec Data Fair. Ils sont disponibles sous forme d'extensions.
* Les **visualisations de donn\xE9es** : certaines sont open source, d'autres sont propri\xE9taires (extensions en libre acc\xE8s ou n\xE9cessitant un abonnement). Chaque application de base peut \xEAtre utilis\xE9e autant de fois que d\xE9sir\xE9 pour valoriser diff\xE9rents **jeux de donn\xE9es**. Data Fair permet de stocker et \xE9diter les diff\xE9rents param\xE8tres d'une m\xEAme application de base.

### Architecture technique compl\xE8te

![Catalogue de donn\xE9es](./images/technical-architecture/architecture.jpg)

### Authentification

Le m\xE9canisme d'authentification utilis\xE9 pour s\xE9curiser les APIs des diff\xE9rents service est le JWT (Json Web Token). La s\xE9curit\xE9 repose sur des m\xE9canismes de cryptograhie asym\xE9trique (RSA). La session utilisateur est maintenue cot\xE9 client, ce qui permet d'avoir un backend sans \xE9tat, et donc scalable. Le backend n'\xE9met pas de JWT : il doit donc \xEAtre reli\xE9 \xE0 un annuaire [simple directory](https://koumoul-dev.github.io/simple-directory/) qui en \xE9met. Le lien vers cet annuaire permet de t\xE9l\xE9charger sa cl\xE9 publique pour ensuite v\xE9rifier que les JWT re\xE7us soient valides.


### D\xE9ploiement

Les diff\xE9rents services sont livr\xE9 avec [Docker](https://www.docker.com/). Nous recommandons de les d\xE9ployer et de les op\xE9rer dans un environnement tel que Kubernetes.

Il est possible de d\xE9ployer ces diff\xE9rents service \xE0 l'aide de docker-compose \xE9galement. Cela permet de d\xE9marrer plus rapidement, et est particuli\xE8rement adapt\xE9 pour un d\xE9ploiement en local pour tester la plateforme ou d\xE9velopper des extensions pour celle-ci.

Pour plus de d\xE9tails, vous pouvez consulter la [documentation d'installation](install/install).

### Licences

Les diff\xE9rents services sont *open source*, avec comme licence l'AGPL v3, qui est une licence copyleft : tous ceux mettant le service \xE0 disposition d'autres utilisateurs doivent partager les \xE9ventuelles am\xE9liorations qu'ils y apporteraient. Nous avons choisi de rendre ces services *open source* pour 2 raisons : pour partager des donn\xE9es *open data*, il nous para\xEEt naturel d'utiliser un service *open source*, et quel que soit le type de donn\xE9es, l'ouverture du code offre des garanties de s\xE9curit\xE9 et de p\xE9rennit\xE9 qui permet aux organisations de d\xE9ployer ces services sur leurs propres serveurs en toute s\xE9r\xE9nit\xE9.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Notify
section: 7
updated: 2020-12-09
description : Notify
published: true
---

Le service **Notify** permet de g\xE9rer les notifications d'une plateforme. Celles-ci peuvent \xEAtre transmises dans le navigateur, sur un smartphone ou par email.

### Stack technique

Le backend de Notify est \xE9crit en NodeJS avec le framework ExpressJS. La persistance est assur\xE9e avec MongoDB. Le frontend est r\xE9alis\xE9 avec les frameworks VueJS, VuetifyJS et NuxtJS.

Il n'y a pour l'instant qu'un mode de distribution qui est Docker, et il est recommand\xE9 d'op\xE9rer ce service dans un environnement tel que Kubernetes.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Data Fair Portal
section: 4
updated: 2020-12-09
description : Portails de donn\xE9es
published: true
---

Data Fair Portal permet de r\xE9aliser des portails de donn\xE9es, publics ou priv\xE9s.

Une organisation peut avoir plusieurs portails, et il sera bient\xF4t possible de r\xE9aliser des portails multi-organisations. Chaque portail peut \xEAtre publi\xE9 sur un nom de domaine diff\xE9rent, Data Fair Portal ag\xEEt \xE0 la mani\xE8re d'un reverse proxy pour que chaque requ\xEAte HTTP soit trait\xE9e dans le contexte du portail auquel elle fait r\xE9f\xE9rence.

L'authentification avec Simple Directory n'\xE9tant possible que sur le m\xEAme domaine (ou sur un sous domaine de celui pour lequel Simple Directory est configur\xE9), les portails de donn\xE9es sur un autre domaine ne peuvent \xEAtre que des portails open data.

### Stack technique

Le backend de Data Fair Portal est \xE9crit en NodeJS avec le framework ExpressJS. La persistance est assur\xE9e avec MongoDB. Le frontend est r\xE9alis\xE9 avec les frameworks VueJS, VuetifyJS et NuxtJS. La configuration des pages est faites \xE0 l'aide de JSON sch\xE9mas interpr\xE9t\xE9s par la librairie VJFS.

Il n'y a pour l'instant qu'un mode de distribution qui est Docker, et il est recommand\xE9 d'op\xE9rer ce service dans un environnement tel que Kubernetes.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Data Fair Processings
section: 6
updated: 2020-12-09
description : Traitements p\xE9riodiques
published: true
---

Data Fair Processings permet de programmer des traitements p\xE9riodiques. Ils permettent d'aller chercher des donn\xE9es \xE0 certains endroits, les transformer et les publier sur Data Fair. Il est aussi pr\xE9vu de pouvoir faire prochainement l'inverse. Il permet en pratique de mettre a jour automatiquement des jeux de donn\xE9es sp\xE9cifiques.

### Stack technique

Le backend de Data Fair Processings est \xE9crit en NodeJS avec le framework ExpressJS. La persistance est assur\xE9e avec MongoDB. Le frontend est r\xE9alis\xE9 avec les frameworks VueJS, VuetifyJS et NuxtJS. Les plugins pour ajouter de nouveaux types de traitements sont \xE0 \xE9crire en NodeJS, mais il est pr\xE9vu dans le futur de pouvoir supporter des plugins \xE9crits dans d'autres langages.

Il n'y a pour l'instant qu'un mode de distribution qui est Docker, et il est recommand\xE9 d'op\xE9rer ce service dans un environnement tel que Kubernetes.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Simple Directory
section: 3
updated: 2020-12-09
description : Simple Directory
published: true
---
La connexion et la gestion des comptes est assur\xE9e par Simple Directory. Il permet de g\xE9rer 2 types de comptes : les comptes utilisateurs et les comptes organisation.

### Gestion de session d\xE9centralis\xE9e
Le r\xF4le principal de Simple Directory est de permettre aux utilisateurs de s'authentifier dans la plateforme. Cela se fait au moyen de JWT (JSON Web Token) qui sont stock\xE9s cot\xE9 client. Les clients envoient leur JWT \xE0 chaque requ\xEAte HTTP, et chaque service dans l'infrastructure est capable de v\xE9rifier qu'un JWT est correct. Cela se fait en v\xE9rifiant le jeton avec la cl\xE9 publique mise \xE0 leur disposition par Simple Directory.


### Connection des utilisateurs
Les utilisateurs peuvent se connecter avec un mot de passe et un email ou en utilisant un compte externe existant tel qu\u2019un compte Gmail, Facebook, Github ou Linkedin via le protocole oAuth2.

D\u2019autres protocoles ou fournisseurs d\u2019identit\xE9s tels que LDAP ou SSO vont bient\xF4t \xEAtre impl\xE9ment\xE9s.


### Stack technique

Le backend de Simple Directory est \xE9crit en NodeJS avec le framework ExpressJS. La persistance est assur\xE9e avec MongoDB. Le frontend est r\xE9alis\xE9 avec les frameworks VueJS, VuetifyJS et NuxtJS. La cr\xE9ation et gestion des JWT est assur\xE9e gr\xE2ce \xE0 diff\xE9rentes librairies open source.

Il n'y a pour l'instant qu'un mode de distribution qui est Docker, et il est recommand\xE9 d'op\xE9rer ce service dans un environnement tel que Kubernetes.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Thumbor
section: 10
updated: 2020-12-09
description : Thumbor
published: true
---

[Thumbor](https://github.com/thumbor/thumbor) est un service qui permet d'effectuer des traitements sur les images, dans le but d'am\xE9liorer leur affichage :
 * D\xE9coupe une image (Crop) pour par exemple avoir des images ayant une proportion bien d\xE9finie
 * Redimensionnement d'une image pour diminuer sa taille et ainsi gagner en vitesse d'affichage dans le portail ou dans les visualisations
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Create interactives visualizations
section: 5
subsection : 1
updated: 2021-09-20
description : Create interactives visualizations
published: true
---
Interactive visualizations present and explore your data in a fun way.

The creation of a visualization can be initiated from the various buttons **Configure a visualization** available on Data Fair

Remark : Check your datasets to match the type of visualization you want to create and also check [the concepts](./user-guide-backoffice/concept) on your dataset.
For example, to configure a map, the concepts **Latitude** and **Longitude** must be associated with the columns that contain these values \u200B\u200Bin your dataset. Please do [contact](https://koumoul.com/contact) us if you have any trouble.

Once you clicked on **Configure visualization** you are redirected to the configuration page of your visualization.  
This page is divided into several parts:

* **Metadata** at the top of the page with the title, description and thematic.
* **Configuration** which includes the configuration menu on the left and the visualization preview on the right
* **Share** section allows you to manage permissions, the sharing link for private viewing, publications on various portals and on external catalogs.
* **Activity** to keep track of the latest changes to your visualization.
<p>
</p>

On the right of the page, **action buttons** are available.

![Menu](./images/user-guide-backoffice/add-reuse-config.jpg)  
*Customize the rendering of your visualization*

## Configuration menu

The configuration menu consists of different sections which may differ depending on the application.  
The menu is made up of at least three sections, the **Data**, the **Render** (or **Presentation**) and finally the **Navigation**.  
The **Data** section allows you to choose the dataset used in the visualization.

## Preview

The preview allows you to view the rendering of your visualisation. The preview is split into two modes **sketch** and **Registered Version**.  

When you make changes to the configuration menu, they are directly represented in the **sketch** mode of the preview. You can modify and test different renderings of your visualization. When you are satisfied with your rendering, click on the **Save** button and the **Registered Version** will change to represent the saved visualization.  


## Share my visualization

A visualization can be public or private. By default, a visualization is private.  
If your data is accessible to the public then your visualization can also be accessible to the public.  

The **Protected link** section allows to create a link to access a private visualization.

Visualizations can be published on multiple portals. It's possible to publish your visualization internally to get feedback from your team and then publish the visualization on an opendata portal for exemple.

![partage visu](./images/user-guide-backoffice/visu-partage.jpg)  

## Action buttons

On the right, there are the action buttons:

* **Full page**.
* **Integrate into site**. Allows you to display the code necessary to integrate the visualization in another site.
* **Capture**. Image in PNG format.
* **API**
* **Delete**
* **Change owner**
<p>
</p>

The **Content** allows to quickly navigate in the page.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Cr\xE9er une visualisation
section: 5
subsection : 1
updated: 2021-09-20
description : Comment cr\xE9er des visualisations interactives pour mettre en valeur ses donn\xE9es
published: true
---
Les visualisations interactives permettent de pr\xE9senter et d'explorer vos donn\xE9es de mani\xE8re ludique.   

La cr\xE9ation d'une visualisation peut \xEAtre initi\xE9e \xE0 partir des diff\xE9rents boutons **Configurer une visualisation** disponibles sur Data Fair.

Remarque : Si certaines visualisations sont en rouge lors de la cr\xE9ation, v\xE9rifier que vos jeux de donn\xE9es correspondent \xE0 ce type de visualisation ou que vous avez bien associer les [concepts](./user-guide-backoffice/concept) \xE0 votre jeu de donn\xE9es. Par exemple, pour configurer une carte, les concepts **Latitude** et **Longitude** doivent \xEAtre associ\xE9es aux colonnes qui contiennent ces valeurs dans votre jeu de donn\xE9es. N\u2019h\xE9sitez pas \xE0 nous [contacter](https://koumoul.com/contact) si vous rencontrez des difficult\xE9s.

Un fois que vous avez cliqu\xE9 sur **Configurer la visualisation**. Vous \xEAtes redirig\xE9 vers la page de configuration de votre visualisation.  
Cette page est divis\xE9e en plusieurs parties:  

* les **metadonn\xE9es** en haut de la page avec le titre, la description et la th\xE9matique.
* la **configuration** qui comprend le menu de configuration sur votre gauche et l'aper\xE7u \xE0 droite
* la section **partage** qui permet de g\xE9rer les permissions, le lien de partage pour une visualisation priv\xE9e, les publications sur diff\xE9rents portails et sur des catalogues externe.
* l'**activit\xE9** pour suivre les derni\xE8res modifications de votre visualisation.
<p>
</p>

Sur la droite de la page, les **boutons d'actions** sont disponibles.

![Menu](./images/user-guide-backoffice/add-reuse-config.jpg)  
*La section de configuration vous permet d'ajuster le rendu de votre visualisation*


## Menu configuration

Le menu de configuration se compose de diff\xE9rentes sections qui peuvent diff\xE9rer selon les applications.
Ce menu est compos\xE9 d'au moins trois sections, les **Donn\xE9es**, le **Rendu** (ou **pr\xE9sentation**) et enfin la **Navigation**.  
La section des donn\xE9es vous permet de choisir le jeu de donn\xE9es utilis\xE9 dans la visualisation.  

## L'aper\xE7u

L'aper\xE7u vous permet de visualiser le rendu. L'aper\xE7u est d\xE9compos\xE9 en deux modes **Ebauche** et **Version Enregistr\xE9e**.

Lorsque vous r\xE9alisez des modifications sur le menu de configuration, elles sont directement repr\xE9sent\xE9es dans le mode **Ebauche** de l'aper\xE7u. Vous pouvez ainsi modifier et tester diff\xE9rents rendus de votre visualisation. Lorsque vous \xEAtes satisfait de votre rendu, cliquez sur le bouton **Enregistrer**.

Vous pouvez acc\xE9der \xE0 la derni\xE8re version enregistr\xE9e avec le mode **Version Enregistr\xE9e**.

## Partager ma visualisation

Votre visualisation peut \xEAtre publique ou priv\xE9e. Par d\xE9faut, une visualisation est priv\xE9e.  
Il est possible de rendre l'acc\xE8s \xE0 votre visualisation au public avec des donn\xE9es qui sont aussi publiques.  

La section **Lien prot\xE9g\xE9** vous permet de cr\xE9er un lien d'acc\xE8s \xE0 une visualisation priv\xE9e.  

Les visualisations peuvent \xEAtre publi\xE9e sur plusieurs portails, vous pouvez ainsi publier votre visualisation en interne avoir les retours de votre \xE9quipe puis publier la visualisation sur un portail opendata.

![partage visu](./images/user-guide-backoffice/visu-partage.jpg)  


## Boutons d'actions

Sur votre droite, on retrouve les boutons d'actions :
* **Ouvrir en pleine page**.
* **Int\xE9grer dans site**. Permet d'afficher le code n\xE9cessaire pour int\xE9grer la visualisation dans un autre site.
* **Effecteur une capture**. Image au format PNG.
* **Utiliser l'API**
* **Supprimer**
* **Changer de propri\xE9taire**  
<p>
</p>
Le **contenu** permet de rapidement naviguer sur la page.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Analytics setup
section: 11
subsection : 2
updated: 2021-11-09
description : Configure your analytics
published: true
---

There are 2 steps in the  configuration of the user tracking system
1. Choosing the monitoring system on the portal
2. Event configuration

You can choose between three different tracking systems, Matotmo, Google Analytics Universal Analytics (old version of GA) and Google Analytics 4 (new version of GA).

### Matomo configuration

After creating the web site on Matoto, it will provide **tracker url** and **th site id** of your portal. You can then enter these codes on the configuration of your portal.

### Google Analytics UA (old tracking system)

For Google Analytics Universal Analytics you will need the **Tracking ID** which you can find after creating your property on Google Analytics: **Administration**> **Property Settings**> **Tracking ID** .  
The tracking ID is a code starting with UA- *

You can then enter this code on the configuration of your portal.

![Configuration](./images/user-guide-backoffice/config-GA-1.jpg)

### Google Analytics 4 (new tracking system)

For Google Analytics Universal Analytics you will need the **MEASURE ID** which you can find after creating your property on Google Analytics: **Administration**> **Property settings**> **Data feed** > Add or click on data feed> **MEASUREMENT ID**.  
The measure ID is a code starting with G- *.

You can then enter this code on the configuration of your portal.

![Configuration](./images/user-guide-backoffice/config-GA4.jpg)

### Event configuration

The event configuration is available in the Data Fair settings in the **Webhooks** category.

You can select which events you want to track in your analytics:
* A new dataset has been created
* A dataset has encountered an error
* A dataset has been finalized and uploaded
* A dataset has been published to a catalog
* A new reuse has been created
* A reuse encountered an error
* A reuse has been published in a catalog
* The file of a dataset has been updated

![Configuration](./images/user-guide-backoffice/config-GA-2.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Configurer vos analytics
section: 11
subsection : 2
updated: 2021-11-09
description : Configurer le syst\xE8me de suivi de votre portail
published: true
---

La configuration du syst\xE8me de suivi des utilisateurs se compose en deux points.
1. Le choix du syst\xE8me de suivi sur le portail
2. Configuration des \xE9v\xE9nements
<p>
</p>

Vous pouvez choisir entre trois diff\xE9rents syst\xE8me de suivi, **Matotmo**, **Google Analytics Universal Analytics (ancienne version de GA)** et **Google Analytics 4 (nouvelle version de GA)**.

### Configuration avec Matomo

Pour configurer votre portail pour qu'il envoie les donn\xE9es de suivi \xE0 Matomo, vous aurez besoin de l'**url du tracker** et de l'**identifiant de votre site** que vous avez configur\xE9 dans Matomo. Vous pourrez ensuite renseigner ces codes sur la configuration de votre portail.

### Configuration avec l'ancien syst\xE8me de suivi de Google Analytics UA-

Pour Google Analytics Universal Analytics vous aurez besoin de l'**ID de suivi** que vous pouvez retrouver apr\xE8s avoir cr\xE9er votre propri\xE9t\xE9 sur Google Analytics : **Administration** > **Param\xE8tres de la propri\xE9t\xE9** > **ID de suivi**.  
L'identifiant de suivi est un code commen\xE7ant par UA-*.

Vous pourrez ensuite renseigner ce code sur la configuration de votre portail.

![Configuration](./images/user-guide-backoffice/config-GA-1.jpg)

### Configuration avec le nouveau syst\xE8me de suivi de Google Analytics 4 G-

Pour Google Analytics 4 vous aurez besoin de l'**ID DE MESURE** que vous pouvez retrouver apr\xE8s avoir cr\xE9er votre propri\xE9t\xE9 sur Google Analytics : **Administration** > **Param\xE8tres de la propri\xE9t\xE9** > **Flux de donn\xE9es** > Ajouter ou cliquez sur le flux de donn\xE9es > **ID DE MESURE**.  
L'identifiant de mesure est un code commen\xE7ant par G-*.

Vous pourrez ensuite renseigner ce code sur la configuration de votre portail.

![Configuration](./images/user-guide-backoffice/config-GA4.jpg)

### Configuration des \xE9v\xE9nements

Ce point de configuration est disponible dans les param\xE8tres de Data Fair \xE0 la cat\xE9gorie *Appels exterieurs (webhooks)*.

Vous pouvez d\xE9finir quels \xE9v\xE9nements vous souhaitez suivre dans vos analytics :
* Un nouveau jeu de donn\xE9es a \xE9t\xE9 cr\xE9\xE9
* Un jeu de donn\xE9es a rencontr\xE9 une erreur
* Un jeu de donn\xE9es a \xE9t\xE9 finalis\xE9 et mis en ligne
* Un jeu de donn\xE9es a \xE9t\xE9 publi\xE9 sur un catalogue
* Une nouvelle r\xE9utilisation a \xE9t\xE9 cr\xE9\xE9e
* Une r\xE9utilisation a rencontr\xE9 une erreur
* Une r\xE9utilisation a \xE9t\xE9 publi\xE9e sur un catalogue
* Le fichier d'un jeu de donn\xE9es a \xE9t\xE9 mis \xE0 jour

![Configuration](./images/user-guide-backoffice/config-GA-2.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: API
section: 12
subsection: 2
updated: 2021-09-20
description : Access data via API. Manage your different API keys easily.
published: true
---
On the settings page you will find the **API Keys** section.

API keys allow to use your account's global API for managing datasets, visualizations, catalogs or retrieving statistical informations.

You can create multiple different API keys.  
Each key has its own label which allows them to be differentiated.

![API-edition](./images/user-guide-backoffice/api-edit.jpg)  
*Access your API*

You can edit or delete your keys.  
Help is available with the **How to use this key** button.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Acc\xE8s par API
section: 12
subsection: 2
updated: 2021-09-20
description : Acc\xE9der aux donn\xE9es par API. G\xE9rer ses diff\xE9rentes cl\xE9s d'API facilement.
published: true
---
Sur la page des param\xE8tres vous retrouvez la section des **Cl\xE9s d'API**.  
Les cl\xE9s d'API permettent d'utiliser l'API globale de votre compte pour la gestion des jeux de donn\xE9es, des visualisations, des catalogues ou la r\xE9cup\xE9ration d'informations statistiques.

Vous pouvez cr\xE9er plusieurs de cl\xE9s d'API diff\xE9rentes.  
Chaque cl\xE9 poss\xE8de son libell\xE9 ce qui permet de les diff\xE9rencier.  

![API-edition](./images/user-guide-backoffice/api-edit.jpg)  
*Acc\xE8s de votre API sur vos ressources*

Vous pouvez \xE9diter ou supprimer vos cl\xE9s avec les boutons d'actions correspondants.  
Une aide d'utilisation des API est disponible avec le bouton **Comment utiliser cette cl\xE9**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Row Attachments
section: 4
subsection: 7
updated: 2021-09-20
description: Row Attachments
published: true
---

When you load a dataset, it is possible to associate a zip archive containing PDF, JPG, etc ... files with your dataset. These files can be latter used in visualizations.

In order for your zip file to be correctly associated with your dataset, your dataset and archive must follow these two rules:

1. your dataset must have a column containing the paths and names of the files in the ZIP archive
2. the name of your zip file must match the name column containing the paths of the files in the ZIP archive. Example: You column is **Document**, your file must be **Document.zip**.

<p>
</p>s

![PJ-1](./images/user-guide-backoffice/piece-jointe-1.png)

In the **Schema** section of your dataset, the concept **Attached digital document** will be automatically associated with the column containing the names of the files of your ZIP archive.

![PJ-2](./images/user-guide-backoffice/piece-jointe-2.png)

The attachment indexing time can be long and will depend on the size of your attachments files.   
The unzipped files size is counted in your data storage quota.  

Please do [contact](https://koumoul.com/contact) us if you have any trouble.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Pi\xE8ces jointes par ligne
section: 4  
subsection: 7
updated: 2021-09-20
description: Pi\xE8ces jointes par ligne
published: true
---

Lorsque vous chargez un jeu de donn\xE9es, il est possible d'associer une archive zip contenant des fichiers PDF, JPG, etc... \xE0 votre jeu de donn\xE9es. Ces fichiers pourront \xEAtre utilis\xE9s dans les applications.

Pour que votre archive soit correctement associ\xE9e \xE0 votre jeu de donn\xE9es, votre jeu de donn\xE9es et votre archive doivent suivre ces deux r\xE8gles :

1. votre jeu de donn\xE9e doit poss\xE9der une colonne contenant les chemins et les noms des fichiers dans l'archive ZIP
2. le nom de votre fichier zip doit correspondre au nom de la colonne contenant les chemins des fichiers dans l'archive ZIP. Exemple : La colonne dans votre jeu de donn\xE9es s'appelle **Document** votre fichier doit s'appeler **Document.zip**

<p>
</p>

![PJ-1](./images/user-guide-backoffice/piece-jointe-1.png)

Dans le sch\xE9ma de votre jeu de donn\xE9es, le concept **Document num\xE9rique attach\xE9** sera automatiquement associ\xE9 \xE0 la colonne contenant les noms des fichiers de votre archive ZIP.

![PJ-2](./images/user-guide-backoffice/piece-jointe-2.png)

Le temps d'indexation des pi\xE8ces jointes est assez long et il d\xE9pendra de la taille de vos pi\xE8ces jointes.  
La taille des fichiers d\xE9zipp\xE9 des pi\xE8ces jointes est comptabilis\xE9e dans le quota de stockage de donn\xE9es de votre plan.

N\u2019h\xE9sitez pas \xE0 nous [contacter](https://koumoul.com/contact) si vous rencontrez des difficult\xE9s.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Bar Chart Race
section: 7
subsection : 1
updated: 2021-09-20
description : Data racing for first place
published: true
application : https://koumoul.com/apps/bar-chart-race/0.2/
---

**Bar Chart Race** represent rankings data over time.  
An example of this visualization is the [evolution of wages by region between 1966 and 2010 in France](https://opendata.koumoul.com/reuses/evolution-des-salaires-selon-la-region-entre-1966-et-2010)

### Prerequisites

The data you want to visualise must have a column containing a temporality. In the evolution of wages example, the temporality is the years.


### Bar Chart Race initialization

To configure a **Bar Chart Bace** visualization, click on **Visualizations** in the navigation bar, then on **Configure visualization**.  

1. Choose the application **Bar Chart Race**
2. Enter the title of your visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/barchart-config.jpg)


The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.  

### Configuration menu

The configuration menu contains three submenus : **Sources**, **Preparation** and **Presentation**.  

#### 1.Sources
**Sources** allows to choose a dataset and define the **Filters**. **Filters** restrict the data displayed in the visualization.  
It's possible to **Restrict to Values** from a column, **Restrict to Range of Values** from a column, or **Exclude Values** from a column.  

#### 2.Preparation
**Preparation** section define which columns you will use in your visualization.  
* **Calculation** allows to count rows, sum or average on column values.
* **Column** allows to choose the column used for the **Calculation**.
* **Time field** allows to choose the column containing the time values.
* **Value field** allows to define the column containing the labels used on each bar.

Once all the options are filled in, you have a first glimpse of your visualization.

![Premier aper\xE7u](./images/user-guide-backoffice/barchart-preparation.gif)  
*Evolution of the ranking of Ligue 1 teams for the 2016-2017 season*

#### 3.Presentation
The **Presentation** submenu allows to modify the **Maximum number**, the **Duration in seconds**, the **Width**, the **Position**, the colors of the bars of bars and if the visualization starts automatically.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Bar Chart Race
section: 7
subsection : 1
updated: 2021-09-20
description : Vos donn\xE9es font la course \xE0 la premi\xE8re place
published: true
application : https://koumoul.com/apps/bar-chart-race/0.2/
---
La visualisation **Bar Chart Race** permet de repr\xE9senter des donn\xE9es de classement \xE0 travers le temps.

Vous avez un exemple de cette visualisation sur l'[\xE9volution des salaires selon la r\xE9gion entre 1966 et 2010](https://opendata.koumoul.com/reuses/evolution-des-salaires-selon-la-region-entre-1966-et-2010).

### Pr\xE9requis

Les donn\xE9es que vous souhaitez projeter doivent poss\xE9der une colonne contenant une temporalit\xE9. Dans notre exemple de l'\xE9volution des salaires, la temporalit\xE9 est en ann\xE9e.


### Cr\xE9er une visualisation Bar Chart Race

Pour configurer une visualisation **Bar Chart Bace**, cliquez sur **Visualisations** dans la barre de navigation, puis sur **Configurer une visualisation**.

1. Choisir l'application **Bar Chart Race**
2. Entrer le titre de sa visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/barchart-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  

### Menu de configuration
Le menu de configuration est compos\xE9 de trois sous-menus : **Sources de donn\xE9es**, **Pr\xE9paration des donn\xE9es** et **Pr\xE9sentation**.

#### 1.Sources de donn\xE9es
Le sous-menu **Sources de donn\xE9es** vous permet de choisir un jeu de donn\xE9es et de d\xE9finir des **Filtres pr\xE9d\xE9finis**. Les **Filtres pr\xE9d\xE9finis** permettent de restreindre les donn\xE9es affich\xE9es dans l'application.  
Vous pouvez **Restreindre \xE0 des valeurs** d'une colonne,  **Restreindre \xE0 un intervalle de valeurs** d'une colonne ou **Exclure des valeurs** d'une colonne.

#### 2.Pr\xE9paration des donn\xE9es
Le sous-menu **Pr\xE9paration des donn\xE9es** vous permet de d\xE9finir quelles sont les colonnes que vous allez utiliser dans votre visualisation.
* **Calcul de la valeur** vous permet de compter les lignes, de faire une somme ou une moyenne sur les valeurs de la colonne.
* **Colonne** vous permet de choisir la colonne utilis\xE9e pour le **Calcul de la valeur**.
* **Champ temporel** vous permet de choisir la colonne contenant les valeurs temporelles de vos donn\xE9es.
* **Champ de la valeur** vous permet de d\xE9finir la colonne contenant les libell\xE9s utilis\xE9s sur chaque barre.

Une fois que toutes les options sont renseign\xE9es, vous avez un premier aper\xE7u de votre visualisation.

![Premier aper\xE7u](./images/user-guide-backoffice/barchart-preparation.gif)  
*Evolution du classement des \xE9quipes de Ligue 1 saison 2016-2017*

#### 3.Pr\xE9sentation
Le sous-menu **Pr\xE9sentation** vous permet de modifier le **Nombre maximal de barres**, la **Dur\xE9e en secondes**, la **Largeur des barres**, la **Position des barres**, si la visualisation d\xE9marre automatiquement et les couleurs des barres.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Carto-stats
section: 6
subsection : 1
updated: 2021-09-20
description : Project your geolocated data on a map.
published: true
application : https://koumoul.com/apps/carto-stats/0.6/
---

**Carto-stats** visualization is a map with geolocated data and dynamic filters.  
An example of this visualization is the [bicycle accidents map](https://opendata.koumoul.com/reuses/cartographie-des-accidents-de-velo/full).


Carto-stats allows to create dynamic filters and to have filtered data on the map.  
Compared to [Infos-location](./user-guide-backoffice/infos-localisations), **Carto-stats** will be more suitable for large data and **Info-locations** will be more suitable for data containing special fields such as URL, images, descriptions, ...

### Concepts

To configure a **Carto-stats** visualization, your active account contains a monthly dataset with [concepts] (./ user-guide / concept) **Latitude** and **Longitude** of associates in its schema.  
Once you have updated your data schema, you can preview your data using the **generic map**. YOu can verify that the data is correctly projected on a map.

### Create a Carto-stats map

To configure a **Carto-stats** visualization, click on **Visualizations** in the navigation bar, then on **Configure visualization**.  

1. Choose the application **Carto-stats**
2. Enter the title of your visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/carto-stats-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.  

### Configuration menu

The configuration menu contains three submenus : **Sources**, **Preparation** and **Presentation**.  

#### 1.Sources

**Sources** allows to choose a dataset.  

Once you have choosen a dataset compatible with the **Carto-stats** visualization, a map preview is displayed with geolocalised data.

You can configure dynamic filters, predefined filters and a slider.

* Dynamic filters allow to choose fields that will be available to users of your visualization. These users will be able to use the filters to restrict the number of dots on the map.
* Predefined filters allow to restrict or exclude values \u200B\u200Bin your data. The fields, or values, that you configure in this section will not be available in your visualization.
* The Slider allows to choose an integer field, such as a **year** field. The user will be able to choose a year value on the slider, the data will be filtered on this year and displayed on the map.

#### 2.Render options


In the menu **Render options**, you can customize the cards available on the markers and customize your legend.  

The **Tooltip** menu allows you to select the different fields to be displayed on the cards of your markers.  
The **Color by value of a field** defines the column used for your legend. The palette allows to choose a set of colors that will be associated with your legend values.

#### 3.Navigation

In the **Navigation** menu, you can hide the search bar and set the initial position of the map

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Carto-stats
section: 6
subsection : 1
updated: 2021-09-20
description : Projeter vos donn\xE9es g\xE9olocalis\xE9es sur une carte
published: true
application : https://koumoul.com/apps/carto-stats/0.6/
---

La visualisation **Carto-stats** permet de projeter des donn\xE9es g\xE9olocalis\xE9es sur une carte et de pouvoir cr\xE9er des filtres dynamiques.  
Vous avez un exemple de cette visualisation sur notre [carte des accidents de v\xE9los](https://opendata.koumoul.com/reuses/cartographie-des-accidents-de-velo/full).

Carto-stats permet de cr\xE9er des filtres dynamiques et d'avoir les r\xE9sultats des filtres sur la carte.  
En comparaison avec [Infos-localisation](./user-guide-backoffice/infos-localisations), **Carto-stats** sera plus adapt\xE9e pour des donn\xE9es volumineuses et **Infos-localisations** sera plus adapt\xE9e \xE0 des donn\xE9es contenant des champs sp\xE9ciaux tels que des liens de sites, des images, des descriptions, etc...


### Les concepts

Pour configurer une visualisation **Carto-stats**, votre compte actif contient au mois un jeu de donn\xE9es avec [les concepts](./user-guide-backoffice/concept)  **Latitude** et **Longitude** d'associ\xE9s dans son sch\xE9ma.  
Une fois que vous avez mis \xE0 jour le sch\xE9ma de vos donn\xE9es, vous pouvez visualiser un aper\xE7u de vos donn\xE9es \xE0 l'aide de la **carte g\xE9n\xE9rique**. Vous pouvez ainsi v\xE9rifier que vos donn\xE9es sont correctement projet\xE9es sur une carte.

### Cr\xE9er une visualisation Carto-stats

Pour r\xE9aliser la visualisation, cliquez sur **Visualisations** puis sur **Configurer une visualisation**.

1. Choisir l'application **Carto-stats**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/carto-stats-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  

### Menu de configuration
Le menu de configuration est compos\xE9 de trois sous-menus : **Source de donn\xE9es**, **Options de rendu** et **Navigation**.

#### 1.Sources des donn\xE9es
Dans le menu **Sources de donn\xE9es**, vous pouvez choisir le jeu de donn\xE9es que vous voulez utiliser.

Remarque : Si votre fichier n'est pas disponible dans ce menu, v\xE9rifiez que vous avez bien mis \xE0 jour les [concepts](./user-guide-backoffice/concept) **Latitude** et **Longitude** dans votre jeu de donn\xE9es.

Lorsque vous avez choisi un jeu de donn\xE9es compatible avec l'application **Carto-stats**, votre aper\xE7u de carte s'affiche avec les points de vos donn\xE9es.  
Vous pouvez configurer des filtres dynamiques, des filtres pr\xE9d\xE9finis et un slider.

* Les filtres dynamiques vous permettent de choisir des champs qui seront disponibles aux utilisateurs de votre visualisation. Ces utilisateurs pourront utiliser les filtres pour restreindre le nombre de points sur la carte.
* Les filtres pr\xE9d\xE9finis vous permettent de restreindre ou exclure des valeurs dans vos donn\xE9es. Les champs, ou valeurs, que vous configurez dans cette section ne seront pas disponibles dans votre visualisation.
* Le Slider vous permet de choisir un champ entier, tel qu'un champ **ann\xE9e**. L'utilisateur pourra choisir une valeur d'ann\xE9e sur le slider, les donn\xE9es seront filtr\xE9es sur cette ann\xE9e et affich\xE9es sur la carte.

#### 2.Options de rendu

Dans le menu **Options de rendu**, vous pouvez personnaliser les fiches disponible sur les marqueurs et votre l\xE9gende.  
Le menu **Infobulle**, vous permet de s\xE9lectionner les diff\xE9rents champs \xE0 afficher sur les fiches de vos marqueurs.  
La **Couleur par valeur d'un champ** d\xE9fini la colonne utilis\xE9e pour votre l\xE9gende. La palette vous permet de choisir un ensemble de couleurs qui seront associ\xE9es \xE0 vos valeurs de l\xE9gende.

#### 3.Navigation

Dans le menu **Navigation**, vous pouvez cacher la barre de recherche et d\xE9finir la position initiale de la carte.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Catalogs
section: 13
updated: 2021-09-20
description : Broadcast or import data from catalogs.
published: true
---
Connectors allow you to interact, read and write, with other platforms or data services.

With the writing interaction, metadata is pushed into other catalogs.  
An example of a catalog is the French National Open Data Catalog [data.gouv.fr](https://www.data.gouv.fr/fr/) : datasets published with Data Fair can be **automatically synchronized** and any metadata changes on Data Fair are propagated to the remote catalog.

With the reading interaction, connectors are harvesters of metadata and data.  
It is  possible, for each connector, to configure the collection frequencies and the types of sources to harvest.

![Catalogue](./images/user-guide-backoffice/catalogue-data-gouv.jpg)  
*Configure catalogs and your data will be accessible from other platforms*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Catalogues
section: 13
updated: 2021-09-20
description : Diffusez ou importez des donn\xE9es de diff\xE9rents catalogues.
published: true
---
Les connecteurs permettent d\u2019interagir avec d\u2019autres plateformes ou services de donn\xE9es, en lecture comme en \xE9criture.

En \xE9criture, l\u2019id\xE9e est de pouvoir pousser des m\xE9tadonn\xE9es dans d\u2019autres catalogues.  
Un exemple de catalogue est le catalogue de donn\xE9es ouvertes national [data.gouv.fr](https://www.data.gouv.fr/fr/) : les jeux de donn\xE9es publi\xE9s \xE0 l\u2019aide de Data Fair peuvent \xEAtre **synchronis\xE9s automatiquement** et toute modification des m\xE9tadonn\xE9es est propag\xE9e vers le catalogue distant.

En lecture, l\u2019approche est  diff\xE9rente et les connecteurs se comportent plut\xF4t comme des moissonneurs de m\xE9tadonn\xE9es et de donn\xE9es. On peut ainsi pour chaque connecteur param\xE9trer les fr\xE9quences de collecte et les types de sources que l\u2019on souhaite moissonner.

![Catalogue](./images/user-guide-backoffice/catalogue-data-gouv.jpg)  
*Configurez des catalogues et rendez vos donn\xE9es accessibles \xE0 partir d'autres plateformes*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Catchment areas
section: 6
subsection : 6
updated: 2021-09-20
description : Generate catchment area maps
published: true
application : https://koumoul.com/apps/admin-divs-catchment/0.1/
---

The **Catchment areas** visualization is a map offering the possibility of identifying areas of responsibility or influence of an establishment, an entity or even an organization, for example.  
The map uses EPCI, municipality, department, region codes to calculate the geometry according to values \u200B\u200Bof a column.


### Create your catchment area map

To configure a **Catchment areas** visualization, click on **Visualizations** in the navigation bar, then on **Configure visualization**.  

1. Choose the application **Catchment areas**
2. Enter the title of your visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/chalandise-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.  

### Configuration menu


The configuration menu contains two submenus: **Data** and **Render**.  


#### 1.Data

The **Territory code** section allows to define the ladder of the territory IRIS code, EPCI code, town code  or Department code).  
The **Aggregate values** section allows to define the field to aggregate your data.  
**Filters** are used to restrict the data displayed in the application.

#### 2.Render


The **Render** menu manage the initial position, hide the position search bar and activate geolocation.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Zones de chalandise
section: 6
subsection : 6
updated: 2021-09-20
description : G\xE9n\xE9rer des cartes de zones de chalandise
published: true
application : https://koumoul.com/apps/admin-divs-catchment/0.1/
---


La visualisation **Zones de Chalandise**, est une carte offrant la possibilit\xE9 d\u2019identifier des zones de responsabilit\xE9 ou d\u2019influence d\u2019un \xE9tablissement, d\u2019une entit\xE9 ou encore d\u2019une organisation par exemple. La carte utilise les codes EPCI, commune, d\xE9partement, r\xE9gion \xE0 fin de calculer les formes g\xE9omtriue en fonction des valeurs d'une colonne.

### Cr\xE9er votre carte des zones de chalandise

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configuration une visualisation**.

1. Choisir l'application **Zones de Chalandise**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/chalandise-config.jpg)


Le titre de la visualisation peut \xEAtre modifi\xE9 \xE0 tout moment.  
Les informations vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration


Le menu de configuration est compos\xE9 de deux sous-menus : **Donn\xE9es** et **Rendu**.

#### 1.Donn\xE9es

Dans le menu **Donn\xE9es**, vous pouvez choisir le jeu de donn\xE9es que vous voulez utiliser.  
La section **Colonne contenant le code du territoire** vous permet de d\xE9finir la maille du territoire que vous poss\xE9dez dans vos donn\xE9es (Code IRIS, Code commune, Code EPCI ou Code d\xE9partement).  
La section **Agr\xE9ger les valeurs suivant une colonne** vous permet de d\xE9finir le champ selon lequel vous allez agr\xE9ger vos donn\xE9es.  

Les **Filtres** permettent de restreindre les donn\xE9es affich\xE9es dans l'application.

#### 2.Rendu

Le menu **Rendu** permet de g\xE9rer la position initiale, cacher la barre de recherche de position et d'activer la g\xE9olocalisation.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Charts
section: 7
subsection : 7
updated: 2021-09-20
description : Histograms, lines, areas, radar ... visualize your data in interactive charts!
published: true
application : https://cdn.jsdelivr.net/npm/@koumoul/data-fair-charts@0.9/dist/
---


The **Charts** visualization allows to compare several columns of your data with each other in different charts :

* **Histogram**, chart in the form of vertical or horizontal columns, grouped or stacked.
* **Lines**, chart as single lines or multiple lines.
* **Areas**, chart in the form of areas and stacked areas.
* **Radar**, spider web chart.
* **Pie**, circle chart.

![Diff\xE9rentes visualisations](./images/user-guide-backoffice/Charts-Visu.jpg)

In this visualization, you can aggregate the values of your data.  
This visualization is a quite powerful, its configuration is more complex than other visualizations.

### Create a chart

To configure a **Chart** visualization, click on **Visualizations** in the navigation bar, then on **Configure visualization**.  

1. Choose the application **Chart**
2. Enter the title of your visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/charts-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration Menu

The configuration menu contains five sub-menus: **Data**, **Type**, **Preparation**, **Presentation** and **Navigation**.

#### 1.Data


The **Data** menu allows to select the columns to display and to have the first preview of your chart.  

The **Data type** parameter allows to choose how you will represent your data. A different menu is displaued depending on the option you selected.  

- Option 1: **Read rows one by one**, the values \u200B\u200Bof your data are read directly from a column of your dataset.
- Option 2: **Group the rows and count them**, the rows of the dataset are grouped according to one or two criterias and the displayed values \u200B\u200Brepresent the sum of rows for each group.
- Option 3: **Group the rows and aggregate**, the rows of the dataset are grouped according to one or two criterias and the displayed values \u200B\u200Bare the results of a calculation on a numerical column (sum, average, etc ...) that you choose.


<p>
</p>

1. **Read rows one by one** :
- **Values \u200Bcolumn** corresponds to the values re\u200B\u200Bpresented on the Y-Axis.
- **Columns of labels** corresponds to the values represented on the X-Axis, these values \u200B\u200Bcan be sorted.
- **Sort by** allows you to sort your values.
- **Sequence** allows you to order to your sort.  
- **Maximum number of lines** allows to limit the number of elements in the legend.

<p>
</p>

2. **Group the rows and count them** :  
This option allows to group rows and count them on two levels. The first level corresponds to the value on the X-Axis, the second level corresponds to the legend.  

**1st level** on the X-axis:  
- **Group by**, define the method to group the values. The graph will be able to read the **exact values \u200B\u200Bof a column**, define **intervals of a date type column**, define **intervals of a numeric column**
- **Group according to this column** define the column you want to use on the X-axis.
- **Sort by** allows to choose a sorting method

**2nd level** in legend: This group level is optional, it allows to separate the values even more\u200B. For example it's possible to separate a line into several lines or delimit different sections on a bar in a histogram.

<p>
</p>

3. **Group the rows and aggregate** :

- **Group by**, allows to define the method to group the values. The chart can read the **exact values \u200B\u200Bof a column**, set the **intervals of a date type column** or define **intervals of a numeric column**.  
- **Group according to this column** allows to define the column you want to use on the X-axis.
- **Sort by** allows to choose a sorting method.
- **Aggregate** options: average, minimum value, maximum value, sum
- **Values column** allows to choose the column for the aggregation.

#### 2.Presentation

This section allows you to choose a color palette to use on your application.

#### 3.Navigation

This section allows to define different types of interactive filters. The visualization with an interactive filter will be modified according to the values \u200B\u200Bprovided in the filters by the visitor.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Graphiques
section: 7
subsection : 7
updated: 2021-09-20
description : Histogrammes, lignes, aires, radar... visualiser vos donn\xE9es dans des graphiques interactifs!
published: true
application : https://cdn.jsdelivr.net/npm/@koumoul/data-fair-charts@0.9/dist/
---


La visualisation **Graphiques** vous permet de comparer plusieurs colonnes de vos donn\xE9es entre elles sous diff\xE9rents formes graphiques:

* **Histogramme**, graphiques sous formes de colonnes verticales ou horizontales, group\xE9es ou empil\xE9es.
* **Lignes**, graphiques sous formes de ligne simples ou de lignes multiples.
* **Aires**, graphiques sous formes d'aires et aires empil\xE9es.
* **Radar**, graphiques sous formes de toile d'araign\xE9e.
* **Camembert**, graphiques sous formes de camembert.

![Diff\xE9rentes visualisations](./images/user-guide-backoffice/Charts-Visu.jpg)

Dans cette visualisation, vous pouvez agr\xE9ger les valeurs de vos donn\xE9es.  
Il s'agit d'une visualisation assez puissante et c'est pour cela que sa configuration est plus complexe que les autres visualisations.

### Cr\xE9er un graphique

Pour r\xE9aliser la visualisation, cliquez sur **Visualisations** dans la barre de navigation, puis sur **Configurer une visualisation**.

1. Choisir l'application **Graphiques**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/charts-config.jpg)

Le **titre** de la visualisation peut \xEAtre modifi\xE9.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  

### Menu de configuration
Le menu de configuration est compos\xE9 de cinq sous-menus : **Sources de donn\xE9es**, **Type de visualisation**, **Pr\xE9paration des donn\xE9es**, **Pr\xE9sentation** et **Navigation**.

#### 1.Sources des donn\xE9es
Dans le menu **Sources de donn\xE9es**, vous pouvez choisir le jeu de donn\xE9es que vous voulez utiliser.  
Lorsque vous choisissez la source de donn\xE9es, vous pouvez configurer des filtres pour restreindre ou exclure des valeurs dans vos donn\xE9es.

#### 2.Type de visualisation
Dans ce menu, vous choisissez le type de graphique que vous voulez r\xE9aliser.  
Vous pouvez repr\xE9senter vos donn\xE9es sous formes d'un histogramme, de diagramme en lignes, en aires, d'un radar ou d'un camembert.

#### 3.Pr\xE9paration des donn\xE9es
Le menu **Pr\xE9paration des donn\xE9es** permet de renseigner les colonnes que vous souhaitez afficher et d'avoir le premier aper\xE7u de votre graphique.

Le param\xE8tre **Type de pr\xE9paration des donn\xE9es** permet de choisir comment vous allez repr\xE9senter vos donn\xE9es. Vous avez un menu diff\xE8rent en fonction de l'option que vous avez choisi.

- Option 1 :  **Lire les lignes une par une**, les valeurs de vos donn\xE9es sont lues directement depuis une colonne de votre jeu de donn\xE9es.  
- Option 2 : **Grouper les lignes et les compter**, les lignes du jeu de donn\xE9es sont group\xE9es selon un ou deux crit\xE8res et les valeurs affich\xE9es repr\xE9sente la somme du nombre lignes pour chaque groupe.  
- Option 3 : **Grouper les lignes et calculer des valeurs dans ces groupes**, les lignes du jeu de donn\xE9es sont group\xE9es selon un ou deux crit\xE8res et les valeurs affich\xE9es sont les r\xE9sultats d'un calcul sur une colonne num\xE9rique (somme, moyenne, etc...) que vous choisissez.

<p>
</p>

1. **Lire les lignes une par une** :  
- **Colonne des valeurs** correspond aux valeurs pr\xE9sent\xE9es en ordonn\xE9e.  
- **Colonnes des libell\xE9s** correspond \xE0 la colonne repr\xE9sent\xE9 en abscisses, ces valeurs peuvent \xEAtre tri\xE9es.  
- **Trier par** permet de trier vos valeurs.
- **Ordre** permet donner un ordre \xE0 votre tri.  
- **Nombre maximal de lignes** permet de d\xE9limiter le nombre d'\xE9l\xE9ments dans la l\xE9gende.

<p>
</p>

2. **Grouper les lignes et les compter** :  
Cette option permet de grouper les lignes et les compter sur deux niveaux. Le premier niveau correspond \xE0 la valeur en abscisse, le second niveau correspond \xE0 la l\xE9gende.
**1re niveau de groupes** en abscisse:
- **Grouper par** , vous permet de d\xE9finir la m\xE9thode pour grouper les valeurs. Le graphique pourra lire les **valeurs exacte d'une colonne**, d\xE9finir **intervalles d'une colonne de type date**, d\xE9finir des **intervalles d'une colonne num\xE9rique**
- **Grouper en fonction de cette colonne** permet de d\xE9finir la colonne que vous voulez utiliser en abscisse.  
- **Trier par** permet de choisir une m\xE9thode de tri pour la colonne choisie  
**2\xE8me niveau de groupes** en l\xE9gende : Ce niveau de groupe est optionnel, il permet de s\xE9parer les valeurs quand les donn\xE9es le permettent. On peut par exemple s\xE9parer une ligne en plusieurs lignes dans un graphique en lignes ou encore  d\xE9limiter diff\xE9rentes sections par barre dans un histogramme.

<p>
</p>

3. **Grouper les lignes et calculer des valeurs dans ces groupes** :  
- **Grouper par** , vous permet de d\xE9finir la m\xE9thode pour grouper les valeurs. Le graphique peut lire les **valeurs exacte d'une colonne**, d\xE9finir les **intervalles d'une colonne de type date** ou de d\xE9finir des **intervalles d'une colonne num\xE9rique**.  
- **Grouper en fonction de cette colonne** permet de d\xE9finir la colonne que vous voulez utiliser en abscisse.  
- **Trier par** permet de choisir une m\xE9thode de tri pour la colonne choisie.  
- **Type de calcul** possibles : moyenne, valeur minimale, valeur maximale, somme.  
- **Colonne de valeurs** permet de choisir la colonne sur laquelle faire le calcul.

#### 4.Pr\xE9sentation
Cette section vous permet de choisir une palette de couleur \xE0 utiliser sur votre application.

#### 5.Navigation
Cette section vous permet de d\xE9finir diff\xE9rents types de filtres interactifs. La visualisation avec un filtre interactif sera modifi\xE9e en fonction des valeurs fournies dans les filtres.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Concepts
section: 4
subsection: 5
updated: 2021-09-20
description: Make sens of your data
published: true
---

The concepts are known elements for the platform. Your data is more explicit.  
Concepts increase the reusability of your data and   **link your data to the functionalities of Data Fair** such as [enrichment](./user-guide-backoffice/enrichment).  

The dataset edition page allows to select the concepts in the **Schema** section.

1. Selected column
2. Label and description of the column
3. Key, type and cardinality of the column
4. Concept associated with the column

![Concepts](./images/user-guide-backoffice/schema-concept.jpg)  
*Concepts are needed to create of some visualizations.*


A concept is unique for a dataset, it can only be attributed once to a dataset. For example, if the **Latitude** concept is associated with a column of your dataset, it cannot be associated with another column.

### List of concepts

It is possible to create your own concepts and use them in your [reference data](./user-guide-backoffice/enrichment).  
Here is the default list of concepts used by Data Fair:

* **Label**: An easily readable label
* **Description**: A small descriptive text (HTML content accepted)
* **Image**: URL to an illustration image of the current document
* **Street number**: A house number, which can contain words like bis or ter
* **Street or locality**: A street or locality name
* **Address**: An full address written on one line
* **Municipality**: Municipality name
* **Postal code**: Postal code, on 5 digits
* **Municipality code**: INSEE code of the municipality, on 5 characters, not to be confused with the postal code.
* **Department code**: Department code on 2 or 3 characters
* **Region code**: Region code on 2 digits
* **Latitude**: Geographic coordinate related to the equator
* **Longitude**: Geographic coordinate related to the Greenwich meridian
* **Latitude / Longitude**: latitude / longitude separated by a comma
* **SIRET**: The SIRET number is a 14-digit numeric identifier made up of the SIREN (9 digits) and the NIC (5 digits)
* **SIREN**: The SIREN number is a company digital identifier (9 digits)
* **APE code**: The APE code (main activity exercised) identifies the main branch of activity of the company or of the self-employed person with reference to the classification of French activities
* **Legal category (level 3)**: The legal category of level 3, sometimes called legal nature is a code on 4 numeric characters. It comes from a nomenclature of the French government.
* **Date of the event**: Corresponds to the date of the event
* **Creation date**: Date on which the resource was created
* **Parcel code**: The cadastral parcel code is the unique number assigned by the Cadastre Service to identify a cadastral parcel at the national level. It is composed of 14 characters: INSEE commune code of 5 digits + cadastre section code of 5 characters + cadastre parcel number of 4 digits. For example 56197037ZC0063 is a valid french code.
* **GeoJSON geometry**: A geometry (point, polygon, line, etc.) in GeoJSON format.
* **Attached files**: Relative path to a file attached to the dataset or URL to a file hosted outside
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Les concepts
section: 4
subsection: 5
updated: 2021-09-20
description: Donnez du sens \xE0 vos donn\xE9es
published: true
---

Les concepts sont des notions connues pour la plateforme. Les concepts vont donner du sens \xE0 vos donn\xE9es.  
Ils permettent d'augmenter la r\xE9utilisabilit\xE9 de vos donn\xE9es et de faire **le lien entre vos donn\xE9es et les fonctionnalit\xE9s de Data Fair**.

La page d'\xE9dition d'un jeu de donn\xE9es permet de renseigner les concepts dans la section **Sch\xE9ma des donn\xE9es**.

1. Colonne s\xE9lectionn\xE9e
2. Libell\xE9 et description de la colonne
3. Cl\xE9, type et cardinalit\xE9 de la colonne
4. Concept associ\xE9 \xE0 la colonne

![Concepts](./images/user-guide-backoffice/schema-concept.jpg)  
*Les concepts sont n\xE9cessaires lors de la cr\xE9ation de certaines visualisations.*

Grace aux concepts, vous pouvez, par exemple, [enrichir](./user-guide-backoffice/enrichment) vos donn\xE9es pour leur donner encore plus de valeur ou bien projeter vos donn\xE9es sur une carte.

Un concept est unique pour un jeu de donn\xE9es, il ne peut \xEAtre attribu\xE9 qu'une seule fois \xE0 un jeu de donn\xE9es. Par exemple, si le concept **Latitude** est associ\xE9 \xE0 une colonne de votre jeu de donn\xE9es, il ne pourra pas \xEAtre associ\xE9 \xE0 une autre colonne de votre jeu de donn\xE9es.


### Liste des concepts

Il est possible de cr\xE9er ses propres concepts et qu'ils soient utilis\xE9s dans vos [donn\xE9es de r\xE9f\xE9rence](./user-guide-backoffice/enrichment).  
Voici la liste par d\xE9faut des concepts utilis\xE9 par Data Fair :

* **Libell\xE9** : Un libell\xE9 facilement lisible
* **Description** : Un petit texte descriptif (contenu HTML accept\xE9)
* **Image** : URL vers une image illustration du document courant
* **Num\xE9ro de rue** : Un num\xE9ro de rue, qui peut contenir des mots comme bis ou ter
* **Rue ou lieu-dit** : Un nom de rue ou de lieu-dit
* **Adresse** : Une adresse compl\xE8te \xE9crite sur une ligne
* **Commune** : Libell\xE9 d'une commune
* **Code postal** : Code postal, sur 5 chiffres
* **Code commune** : Code INSEE de la commune, sur 5 caract\xE8res, \xE0 ne pas confondre avec le code postal.
* **Code d\xE9partement** : Code du d\xE9partement, sur 2 ou 3 caract\xE8res
* **Code r\xE9gion** : Code de la r\xE9gion, sur 2 chiffres
* **Latitude** : Coordonn\xE9 g\xE9ographique qui permet de se situer par rapport \xE0 l'\xE9quateur
* **Longitude** : Coordonn\xE9 g\xE9ographique qui permet de se situer par rapport au m\xE9ridien de Greenwich
* **Latitude / Longitude** : Paire latitude / longitude, s\xE9par\xE9es par une virgule
* **SIRET** : Le num\xE9ro SIRET est un identifiant num\xE9rique de 14 chiffres compos\xE9 du SIREN (9 chiffres) et du NIC (5 chiffres)
* **SIRENE** : Le num\xE9ro SIREN est un identifiant num\xE9rique d'entreprise (9 chiffres)
* **Code APE** : Le code APE (activit\xE9 principale exerc\xE9e) permet d'identifier la branche d'activit\xE9 principale de l'entreprise ou du travailleur ind\xE9pendant en r\xE9f\xE9rence \xE0 la nomenclature des activit\xE9s fran\xE7aises
* **Cat\xE9gorie juridique (niveau 3)** : La cat\xE9gorie juridique de niveau 3, parfois appel\xE9e nature juridique est un code sur 4 caract\xE8res num\xE9riques. Elle est issue d'une nomenclature de l'\xE9tat Fran\xE7ais.
* **Date de l'\xE9v\xE8nement** : Correspond \xE0 la date de l'\xE9v\xE8nement
* **Date de cr\xE9ation** : Date \xE0 laquelle a \xE9t\xE9 cr\xE9\xE9e la ressource
* **Code parcelle** : Le code de la parcelle cadastrale est le num\xE9ro unique attribu\xE9 par le Service du cadastre pour identifier une parcelle cadastrale au niveau national. Il est compos\xE9 de 14 caract\xE8res : code commune INSEE de 5 chiffres + code section cadastre de 5 caract\xE8res + num\xE9ro parcelle cadastre de 4 chiffres. Par exemple 56197037ZC0063 est un code valide.
* **G\xE9om\xE9trie GeoJSON** : Une g\xE9om\xE9trie (point, polygone, ligne, etc.) au format GeoJSON.
* **Document num\xE9rique attach\xE9** : Chemin relatif vers un fichier rattach\xE9 au jeu de donn\xE9es ou URL vers un fichier h\xE9berg\xE9 \xE0 l'ext\xE9rieur
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Create content pages on your portal
section: 11
subsection : 1
updated: 2021-09-30
description : Add thematic pages to your portal
published: true
---

Content pages allow to highlight data, write articles, do data storytelling or even describe a license on your portal.  

### Create a content page

The **Portals** section of Data Fair allows you to access the configuration of your portals. You can then access the editing of **content pages** using the **Edit content pages** button at the top right.

![Configurer votre portail](./images/user-guide-backoffice/page-contenu-1.jpg)

Then click on the **create a new content page** button.

A menu is displayed allowing you to enter the parameters of your page:
* Published or/and Public
* The template allows you to choose a predefined page layout.
* The position in the menu, in direct link or in a submenu
* The page title
* Thematics

![Configurer votre portail](./images/user-guide-backoffice/page-contenu-2.jpg)  
*Parameters of this menu can be modified later.*


On the image, the content page is called **Land**, has a **thematic** page template, a sub-menu layout and a **Thematic** as block name.

The **blank page** template allows to add and arrange the elements freely.  
The **thematic page** template allows to add description of the page and a banner.

### Configuration of your thematic page

On the left side of the editing page is the editorial content.  
On the right side of your page, there is a preview of your content page updated in real time.  

The editing part allows to add elements and page blocks like a CMS.

A block has different sections:
* The title
* General description
* The **visualization** you want to present
* The **associated datasets** which allow you to choose the datasets to highlight.
* **An accented text** which allows to highlight an important text such as an information, a success, a warning or an error.

You can use the following video as an example to complete your first block:  

<iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://videos.koumoul.com/videos/embed/954b9a9c-055d-4b39-a8c8-4bf61c44264f?loop=1&warningTitle=0" frameborder="0" allowfullscreen></iframe>


Once your block has been edited, click on the pencil to exit edit mode.  
You can then create multiple custom blocks.  

After adding different blocks, you can **publish** your page so that it is accessible to visitors to your portal.  
For an opendata portal, your page must be public to be available to visitors of your portal.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Editer les pages de contenu de son portail
section: 11
subsection : 1
updated: 2021-09-30
description : Ajouter des pages th\xE9matiques sur votre portail
published: true
---

Les pages de contenu permettent de mettre en avant certaines donn\xE9es, d'\xE9crire des articles, de faire du data storytelling, ou encore de pr\xE9senter une licence sur votre portail.

### Cr\xE9ation de la page de contenu

La section **Portails** de Data Fair vous permet d'acc\xE9der \xE0 l'\xE9dition de vos portail. Vous pouvez ensuite acc\xE9der \xE0 l'\xE9dition des **pages de contenu** \xE0 l'aide du bouton **Editer les pages de contenu** en haut \xE0 droite.

![Configurer votre portail](./images/user-guide-backoffice/page-contenu-1.jpg)

Cliquez ensuite sur le bouton de **cr\xE9ation d'une nouvelle page de contenu**.

Un menu s'affiche vous permettant de renseigner les param\xE8tres de votre page:

* Publi\xE9e ou/et Publique
* Le mod\xE8le de la page vous permet de choisir une disposition de page pr\xE9d\xE9finie.
* La disposition dans le menu, en lien direct ou dans un sous-menu
* Le titre de la page
* Les th\xE9matiques permettent de choisir les diff\xE9rentes th\xE9matiques de votre portail abord\xE9es sur votre page

![Configurer votre portail](./images/user-guide-backoffice/page-contenu-2.jpg)  
*Tous les param\xE8tres de ce menu pourrons \xEAtre modifi\xE9 par la suite.*

Sur notre image la page de contenu s'appelle **Foncier**, poss\xE8de un mod\xE8le de page **th\xE9matique**, une disposition dans un sous-menu et un nom de bloc **Th\xE9matiques**.

Le mod\xE8le de **page blanche** permet d'ajouter et de disposer ses \xE9l\xE9ments librement.  
Le mod\xE8le de **page th\xE9matique** permet d'ajouter une premi\xE8re description de la page et une image en banni\xE8re.

### Configuration de votre page th\xE9matique

Sur la partie gauche de la page d'\xE9dition se pr\xE9sente le contenu \xE9ditorial, il va vous permettre de personnaliser votre page.  
Sur la partie droite de votre page, vous avez un aper\xE7u de votre page de contenu qui se met \xE0 jour en temps r\xE9el.

La partie d'\xE9dition vous permet d'ajouter des \xE9l\xE9ments et des blocs de page tel un CMS.  

Un bloc est poss\xE8de diff\xE9rentes sections :

* Le titre
* La description g\xE9n\xE9rale
* La **visualisation** que vous souhaitez pr\xE9senter
* Les **jeux de donn\xE9es associ\xE9s** qui permettent de choisir les jeux de donn\xE9es \xE0 mettre en avant.
* **Un texte accentu\xE9** qui permet de mettre en avant une texte important sous forme d'une information, un succ\xE8s, un avertissement ou une erreur.

Vous pouvez prendre exemple sur la vid\xE9o suivante pour compl\xE9ter votre premier bloc :

<iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://videos.koumoul.com/videos/embed/954b9a9c-055d-4b39-a8c8-4bf61c44264f?loop=1&warningTitle=0" frameborder="0" allowfullscreen></iframe>


Une fois votre bloc \xE9dit\xE9, cliquez sur le crayon pour sortir du mode \xE9dition.  
Vous pouvez ensuite cr\xE9er plusieurs blocs personnalis\xE9s.

Apr\xE8s avoir ajout\xE9 les diff\xE9rents blocs, vous pouvez **publier** votre page pour quelle soit accessible aux visiteurs de votre portail.  
Pour un portail opendata, il faudra rendre publique votre page pour quelle soit disponible pour les visiteurs non connect\xE9 \xE0 votre portail.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Dashboard
section: 3
updated: 2021-09-20
description : Dashboard
published: true
---

The **dashboard** of your [active account](./user-guide-backoffice/organisation) is accessible using the navigation bar.


The dashboard page is a summary of the datasets and visualizations configured on your space.  

1. Active account
2. Latest changes or addition to the account
3. Summary of datasets with access to the largest datasets and creation of datasets.
4. Summary of visualizations

![Dashboard](./images/user-guide-backoffice/dashboard.jpg)  
*Organization dashboard*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Tableau de bord
section: 3
updated: 2021-09-20
description : Dashboard
published: true
---

Le **tableau de bord** de votre compte [compte actif](./user-guide-backoffice/organisation) est accessible \xE0 l'aide de la barre de navigation.

Cette page pr\xE9sente un r\xE9sum\xE9 des donn\xE9es et des visualisations configur\xE9es sur votre espace.

1. Compte actif
2. Derni\xE8res modifications ou ajout sur le compte
3. R\xE9sum\xE9 des jeux de donn\xE9es avec acc\xE8s aux jeux de donn\xE9es les plus volumineux et la cr\xE9ation de jeux de donn\xE9es.
4. R\xE9sum\xE9 des visualisations


![Dashboard](./images/user-guide-backoffice/dashboard.jpg)  
*Tableau de bord d'une organisation*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Datasets
section: 4
updated: 2021-09-20
description : Datasets
published: true
---


On Data Fair, a dataset corresponds to an uploaded [file](./user-guide-backoffice/file-formats) or an [editable or virutal source](./user-guide-backoffice/import-dataset) whith metadata filled in.

By default, all uploaded data is private on your account.  
You can work with your team using an [organization](./user-guide-backoffice/organisation) account.

### Metadata

Metadata is the data characterizing your dataset, such as size, format, modification date, etc.  
The title, description, provenance, license are metadata that you can modify in the edition page of a dataset.  
With metadata your datasets are easier to find and to identify.

### Concepts  

On the dataset edition page, you will find the **Schema** section which allows to view the model of your data. The schema of a dataset corresponds to its architecture (all the columns). In this section you can fill in [concepts](./user-guide-backoffice/concept). When you fill in a concept on a column, you associate a known elements of Data Fair to this column. This makes your data more meaningful for Data Fair.

[Concepts](./user-guide-backoffice/concept) are used in various functions, in some cases, they are essential. For example, if you want to project your data onto a map, the **Latitude / Longitude** or **Geometry** concepts must be present on your schema.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Jeu de donn\xE9es
section: 4
updated: 2021-09-20
description : Datasets
published: true
---

Sur Data Fair, un jeu de donn\xE9es correspond \xE0 un [fichier](./user-guide-backoffice/file-formats) que vous avez charg\xE9 ou \xE0 un [jeu virtuel ou un jeu \xE9ditable](./user-guide-backoffice/import-dataset) dont vous avez renseign\xE9 les meta-donn\xE9es.  
Par d\xE9faut, toutes les donn\xE9es que vous chargez sont priv\xE9es, il n'y a que le compte sur lequel vous avez charg\xE9 les donn\xE9es qui a acc\xE8s aux donn\xE9es.

Vous pouvez travailler \xE0 plusieurs sur des jeux de donn\xE9es en utilisant une [organisation](./user-guide-backoffice/organisation).


### Les meta-donn\xE9es

Les meta-donn\xE9es sont les donn\xE9es qui vont caract\xE9riser votre fichier, telles que la taille, le format, la date de modification, etc...  
Le titre, la description, la provenance, la licence sont des meta-donn\xE9es que vous pouvez modifier dans la page d'\xE9dition d'un jeu de donn\xE9es. Elles permettent de mieux identifier et de retrouver vos jeux de donn\xE9es.

### Les concepts

Dans la page d'\xE9dition d'un jeu de donn\xE9es, vous retrouvez la section **Sch\xE9ma** qui vous permet de visualiser le model de vos donn\xE9es. Le sch\xE9ma d'un jeu de donn\xE9es correspond \xE0 son architecture (l'ensemble des colonnes). Dans cette section vous pouvez renseigner des [concepts](./user-guide-backoffice/concept). Lorsque vous renseignez un concept sur une colonne, vous associez une notion connue de Data Fair \xE0 cette colonne. Vos donn\xE9es ont ainsi plus de sens pour Data Fair.

Les [concepts](./user-guide-backoffice/concept) sont utilis\xE9s dans divers fonctionnalit\xE9s, dans certains cas, ils sont indispensables. Par exemple, si vous souhaitez projeter vos donn\xE9es sur une carte, les concepts **Latitude/Longitude** ou **G\xE9om\xE9trie** devront \xEAtre renseign\xE9s dans votre sch\xE9ma.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Administrative divisions
section: 6
subsection : 2
updated: 2021-09-20
description : Create interactive administrative maps
published: true
application : https://koumoul.com/apps/data-fair-admin-divs/0.2/
---

The **Administrative divisions** visualization allows to create administrative, thematic or choropleth maps.  
**Administrative divisions** is used to project statistical data on a set of territories. It is possible to navigate between the levels of territories using the zoom. To access the data, click on a territory.  
An example of this visualization on [the 2019 European election results map](https://opendata.koumoul.com/reuses/resultats-aux-elections-europeennes-2019/full).  


**Administrative divisions** allows to create maps at the levels of IRIS, EPCI, municipalities, departments and / or regions.

### Concepts  


To configure a **Administrative divisions** visualization, your active account contains a dataset with any of the [concepts](./user-guide-backoffice/concept) **IRIS code**, **EPCI code**, **Municipality code**, **Department code** and / or **Region code**.

### Create an Administrative Divisions visualization

Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Administrative divisions**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/div-admin-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.  


### Configuration menu

The configuration menu contains four sub-menus: **Data**, **Metric**, **Render** and **Navigation**.  

#### 1.Data
In the **Data** menu, you can choose the dataset you want to use.  
Once you chose a dataset compatible with the application **Administrative divisions**, a map preview is displayed.  

#### 2.Metric

In the **Metric** menu, the **Numerator** section allows to define the value of your dataset that you want to display on your map. It is possible to count, sum or average the values \u200B\u200Bof this field.

The **Denominator** section allows you to perform a ratio. For example, if you have the populations of the territories in a column of your dataset, you can enter a value in the **Numerator** divided by the population to have the ratio per capita.

#### 3.Render

The **Render** menu allows to customize your visualization.  
The **Colors** section allows to choose a set of colors that will be associated with the values \u200B\u200Bof your data. You can invert the colors in the palette and set a default color for your values.  
The **Calculation of intervals** allows to define the type of intervals you want to display. It is possible to have intervals of the same size, from quantiles or to define them yourself.

#### 4.Navigation  

The **Navigation** menu is used to define the initial position of the map.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Divisions administratives
section: 6
subsection : 2
updated: 2021-09-20
description : Cr\xE9er facilement des cartes administratives interactives.
published: true
application : https://koumoul.com/apps/data-fair-admin-divs/0.2/
---


La visualisation **Divisions administratives** permet de r\xE9aliser des cartes administratives, th\xE9matiques ou choropl\xE8thes.  
Il s'agit de projeter des donn\xE9es statistiques sur un ensemble de territoires. Il est possible de naviguer entre les niveaux de territoires \xE0 l'aide du zoom. Un clic sur un territoire vous permet d'acc\xE9der aux donn\xE9es.  
Vous avez un exemple de cette visualisation sur notre [carte des r\xE9sultats aux \xE9lections europ\xE9ennes de 2019](https://opendata.koumoul.com/reuses/resultats-aux-elections-europeennes-2019/full).

**Divisions administratives** permet de cr\xE9er des cartes aux niveaux d'IRIS, EPCI, des communes, des d\xE9partements et/ou des r\xE9gions.  

### Les concepts

Pour configurer une visualisation **Divisions administratives**, votre compte actif contient au moins un jeu de donn\xE9es avec des [concepts](./user-guide-backoffice/concept) **Code IRIS**, **Code EPCI**, **Code Commune**, **Code d\xE9partement** et/ou **Code r\xE9gion**.

### Cr\xE9er une visualisation Divisions administratives

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configurer une visualisation**.

1. Choisir l'application **Divisions administratives**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/div-admin-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  

### Menu de configuration
Le menu de configuration est compos\xE9 de quatre sous-menus : **Donn\xE9es**, **M\xE9trique**, **Rendu** et **Navigation**.

#### 1.Donn\xE9es
Dans le menu **Donn\xE9es**, vous pouvez choisir le jeu de donn\xE9es que vous voulez utiliser.  
Lorsque vous avez choisi un jeu de donn\xE9es compatible avec l'application **Divisions administratives**, un aper\xE7u de carte s'affiche.

#### 2.M\xE9trique

Dans le menu **M\xE9trique**, la section **Num\xE9rateur** vous permet de d\xE9finir la valeur de votre jeu de donn\xE9es que vous voulez afficher sur votre carte. Il est possible de r\xE9aliser un d\xE9compte, une somme ou une moyenne sur les valeurs de ce champs.

Le champ **D\xE9nominateur** vous permet de r\xE9aliser un ratio. Par exemple, si vous avez les populations des territoires dans une colonne de votre jeu de donn\xE9es, vous pouvez avoir la valeur renseign\xE9e dans le **Num\xE9rateur** divis\xE9e par la population pour avoir le ratio par habitant.

#### 3.Rendu

Le menu **Rendu** permet de personnaliser votre visualisation.

La **Palette** permet de choisir un ensemble de couleurs qui seront associ\xE9es aux valeurs de vos donn\xE9es. Vous pouvez inverser les couleurs de la palette et d\xE9finir une couleur par d\xE9faut pour vos valeurs.

Le **Calcul des intervalles** permet de d\xE9finir le type des intervalles que vous souhaitez afficher. Il est possible d'avoir des intervalles de m\xEAme taille, des intervalles \xE0 partir de quantiles ou de les d\xE9finir soit m\xEAme.

#### 4.Navigation

Le menu **Navigation** permet de d\xE9finir la position initiale de la carte.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Edit a dataset
section: 4
subsection: 3
updated: 2021-09-20
description: Add metadata to your dataset
published: true
---

Datasets are represented by a card. To edit a dataset click on the card.  

The edition page contains several sections: structure, metadata, data, visualizations, data sharing, activity, action buttons and content.

## Structure

The **Structure** section contains of the Schema and the Enrichment.

### Schema


The data schema allows to visualize all of the columns in your dataset.  
Clicking on a column allows you to access the column information

1. Selected column
2. Label and description of the column
3. Key, type and cardinality of the column
4. [Concept](./user-guide-backoffice/concept) associated to the column

<p>
</p>

[Concepts](./user-guide-backoffice/concept) are known elements for the platform and are used in visualizations or the [enrichment](./user-guide-backoffice/enrichment).

![schema](./images/user-guide-backoffice/dataset-schema-edit.jpg)  
*Visualize the schemas of your data and fill in concepts to make sense of your data*  

### Enrichment  

Enrichment allows to import columns from a reference base. It is possible to improuve you data and cross with data from open data such as the SIRENE database, INSEE data, the cadastre or the BAN.

Several steps are necessary to create a data enrichment:

1. On the schema, associate the [concepts](./user-guide-backoffice/concept) necessary for the enrichment you need.  
2. Choose the desired extension.  
3. Choose the columns you want to add and apply the enrichment

![enrichissement](./images/user-guide-backoffice/dataset-enrichement.jpg)  
*Enrich your data get even more value*

The dataset will be processed and the progress can be viewed on the 6 different states of the dataset. Once the finalization step is complete, your data set is enriched.  

In the lower part of the enrichment sheet, you will find the enrichment log, as well as a button to delete the enrichment.  
The enrichment report allows you to check the quality of the enrichment and list the different lines that have not been enriched.

The columns that you have added to your dataset with [enrichment](./user-guide-backoffice/enrichment) will be automatically added to the dataset schema and it will be possible to download the enriched file with the additional columns.

## Metadata
The **Metadata** section is made up of Information and Attachments.  

### Informations
In this section, you will find information about your dataset, such as:  

* The title
* The description,
* the name, extension and size of your file
* Last update date of metadata and data
* Lines number
* License
* The thematic
* The source

![Informations](./images/user-guide-backoffice/dataset-informations.jpg)

### Attachments

Attachments are used to attach a document to data such as a description or documentation in a PDF file for example.  
The attached files will be available for download on the dataset page on your portals.

## Data

In this section, the data can be viewed in table or map form (if the **Latitude** / **Longitude** or **Geometry** concepts are assigned to your data ).  

![Donn\xE9es](./images/user-guide-backoffice/dataset-donnees.jpg)  
*Access your data in table or map form*

The table allows you to explore your data through several features.  
It is possible to perform text searches and filters on a column value, the first 10,000 results will be displayed.

Your search result can be dowloaded in various file formats.  

## Visualizations

In this section, there is a the list of visualizations using your dataset.  
You can quickly navigate between the different visualizations to configure them or create a new visualization.  
The order of the visualizations can be modified with a simple drag and drop of the visualization cards. This order will be applied on the dataset page of your portals.

![Visualisations](./images/user-guide-backoffice/dataset-visualisations-edit.jpg)  
*Configure multiple visualizations to better understand your data*

It is possible to add **External Reuse**.  
External reuses will be displayed on the dataset portal page as a summary cards or the reuse will be framed on the page if you have the embed code.

## Share

In this section you will be able to define the permissions of your dataset, the publication on your portals and the publication on external catalogs.  
By default, a dataset is private.

### Permissions

The list of your portals is available in this section.  

Datasets can be published to multiple portals. Broadcast of data in stages is possible, you can publish your data internally, get feedback, then publish the data on an opendata portal. Publishing on different portals increase the quality of the shared data with multiple feedback.  

Publishing on several portals allow to have the same data on all the portals without duplicating the data. In addition, when the data is updated, it will be updated for all portals.

![Permissions](./images/user-guide-backoffice/dataset-partage.jpg)

### Catalogue

The list of configured catalogs is available the [Catalogues](./user-guide-backoffice/catalogues) page is available in this section.  
You can thus publish your data to various external catalogs.

## Activity

The activity log allows you to view the history of the last modifications made to the dataset.  

![Activit\xE9](./images/user-guide-backoffice/dataset-activity.jpg)  
*Latest events in your dataset*

## Action buttons

On the right of the edit page you have access to several action buttons:
* **Original file**, allows you to download the original file
* **Enriched file**, allows you to download the file with all the new columns that you added thanks to the [enrichissement](./user-guide-backoffice/enrichment) in CSV format.
* **Update**, allows you to modify the dataset loaded on your account with a new one from your computer.
* **Integrate on a site**, allows access to the HTML code to integrate the table or the data map to an external site.
* **View on the data portal**, allows access to the page on your portal. If you have published the dataset on more than one portal, there will be various links.
* **API**, provides access to the interactive documentation of the dataset API.
* **Delete**, remove the dataset from the platform.
* **Change owner**, allows you to transfer the dataset to another account.

## Contents

The content section allows you to quickly navigate between the different sections of the dataset edit page.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Editer un jeu de donn\xE9es
section: 4
subsection: 3
updated: 2021-09-20
description: Ajouter les metadonn\xE9es \xE0 votre jeu de donn\xE9es
published: true
---

Les jeux de donn\xE9es sont repr\xE9sent\xE9s par une fiche. L'\xE9dition d'une jeu de donn\xE9es est accessible en cliquant sur cette fiche.

La page d'\xE9dition d'un jeu de donn\xE9es contient plusieurs sections : la structure, les m\xE9tadonn\xE9es, les donn\xE9es, les visualisations, le partage des donn\xE9es, l'activit\xE9, les boutons d'actions et le contenu.

## Structure
La section **Structure** est compos\xE9 du Sch\xE9ma et de l'Enrichissement.

### Sch\xE9ma
Le sch\xE9ma des donn\xE9es vous permet de visualiser l'ensemble des colonnes de votre jeu de donn\xE9es.
Un clic sur une colonne vous permet d'acc\xE9der aux informations de la colonne
1. Colonne s\xE9lectionn\xE9e
2. Libell\xE9 et description de la colonne
3. Cl\xE9, type et cardinalit\xE9 de la colonne
4. [Concept](./user-guide-backoffice/concept) associ\xE9 \xE0 la colonne

<p>
</p>

Les [concepts](./user-guide-backoffice/concept) sont des notions connues pour la plateforme et sont utilis\xE9s dans les visualisations ou pour l'[enrichissement](./user-guide-backoffice/enrichment).  

![schema](./images/user-guide-backoffice/dataset-schema-edit.jpg)  
*Visualisez les sch\xE9mas de vos donn\xE9es et renseignez des concepts pour donner du sens \xE0 vos donn\xE9es*

### Enrichissement

L'enrichissement permet d'importer des colonnes d'une base de r\xE9f\xE9rence. Il est ainsi possible de croiser ses donn\xE9es avec des donn\xE9es issues de l'open data telles que la base SIRENE, les donn\xE9es INSEE, le cadastre ou la BAN.

Plusieurs \xE9tapes sont n\xE9cessaires pour cr\xE9er un enrichissement de donn\xE9es :

1. Sur le sch\xE9ma, associez les [concepts](./user-guide-backoffice/concept) n\xE9cessaires \xE0 l'enrichissement que vous d\xE9sirez.
2. Choisissez l'extension d\xE9sir\xE9e.
3. Choisissez les colonnes que vous voulez ajouter et appliquez l'enrichissement

![enrichissement](./images/user-guide-backoffice/dataset-enrichement.jpg)  
*Enrichissez vos donn\xE9es pour leur donner encore plus de valeur*

Le jeu de donn\xE9es va \xEAtre trait\xE9 et l'\xE9tat d'avancement peut \xEAtre visualiser sur les 6 diff\xE9rents \xE9tats du jeu de donn\xE9es. Une fois l'\xE9tape de finalisation termin\xE9e votre jeu de donn\xE9es est enrichi.

Dans la partie basse de la fiche de votre enrichissement, vous retrouvez le journal d'enrichissement, ainsi qu'un bouton pour supprimer l'enrichissement.  
Le rapport d'enrichissement vous permet de v\xE9rifier la qualit\xE9 de l'enrichissement et lister les diff\xE9rentes lignes qui n'ont pas \xE9t\xE9 enrichies.

Les colonnes que vous avez ajout\xE9es \xE0 votre jeu de donn\xE9es avec l'[enrichissement](./user-guide-backoffice/enrichment) seront automatiquement ajout\xE9es au sch\xE9ma du jeu de donn\xE9es et il sera possible de t\xE9l\xE9charger le fichier enrichi avec les colonnes suppl\xE9mentaires.

## M\xE9tadonn\xE9es
La section **M\xE9tadonn\xE9es** est compos\xE9e des Informations et des Pi\xE8ces jointes.

### Informations
Dans cette section, vous retrouvez les informations de votre jeu de donn\xE9es, telles que :
* Le titre
* La description,
* Le nom, l'extension et la taille de votre fichier
* La date de la derni\xE8re mise \xE0 jour des m\xE9tadonn\xE9es et des donn\xE9es
* Le nombre de lignes
* La licence
* La th\xE9matique
* La provenance

![Informations](./images/user-guide-backoffice/dataset-informations.jpg)

### Pi\xE8ces jointes

Les pi\xE8ces jointes permettent d'attacher un document aux donn\xE9es tels qu'un descriptif ou une documentation dans un fichier PDF par exemple.  
Les fichiers en pi\xE8ce jointe seront disponibles en t\xE9l\xE9chargement sur la page du jeu de donn\xE9es sur vos portails.

## Donn\xE9es

Dans cette section, les donn\xE9es sont consultables sous forme de tableau ou de carte (si vous donn\xE9es poss\xE8dent les concepts **Latitude**/**Longitude** ou **G\xE9ometrie** de renseign\xE9s).

![Donn\xE9es](./images/user-guide-backoffice/dataset-donnees.jpg)  
*Acc\xE9dez \xE0 vos donn\xE9es sous forme de tableau ou de carte*

Le tableau permet d'explorer vos donn\xE9es \xE0 travers plusieurs fonctionnalit\xE9s.  
Il est possible de r\xE9aliser des recherches textuelles et des filtres sur une valeur d'une colonne, les 10 000 premi\xE8res lignes du r\xE9sultat seront alors affich\xE9es.  
Le r\xE9sultat de votre recherche est t\xE9l\xE9chargeable sous diff\xE9rents formats de fichiers.

## Visualisations
Dans cette section, vous retrouvez la liste des visualisations qui utilisent votre jeu de donn\xE9es.  
Vous pouvez ainsi naviguer rapidement entre les diff\xE9rentes visualisations pour les configurer ou cr\xE9er une nouvelle visualisation.  
L'ordre des visualisations peut \xEAtre modifi\xE9 avec un simple gliss\xE9 et d\xE9pos\xE9 des fiches des visualisations. Cet ordre sera appliqu\xE9 sur la page de vos portails.

![Visualisations](./images/user-guide-backoffice/dataset-visualisations-edit.jpg)  
*Configurez plusieurs visualisations pour mieux comprendre vos donn\xE9es*

Il est possible d'ajouter des **R\xE9utilisations Externes** qui utilisent vos donn\xE9es.  
Les r\xE9utilisations externes seront affich\xE9es sur la page du portail du jeu de donn\xE9es sous la forme d'une fiche r\xE9capitulative ou la r\xE9utilisation sera int\xE9gr\xE9e \xE0 la page si vous poss\xE9dez le code d'int\xE9gration.

## Partage

Dans cette section vous pourrez d\xE9finir les permissions de votre jeu de donn\xE9es, la publication sur vos portails et la publication sur des catalogues externes. Par d\xE9faut, un jeu de donn\xE9e est priv\xE9.


### Permissions
L'option **Accessible publiquement** permet de rendre les donn\xE9es publiques ou priv\xE9es.  
Les permissions peuvent \xEAtre d\xE9finies plus finement \xE0 l'aide de l'**Ajout des permissions** pour ne donner l'acc\xE8s qu'\xE0 un nombre limit\xE9 de comptes.

![Permissions](./images/user-guide-backoffice/dataset-permissions.jpg)  
*Rendez vos donn\xE9es accessibles*

### Portails

La liste de vos portails est disponible dans cette section.

Les jeux de donn\xE9es peuvent \xEAtre publi\xE9e sur plusieurs portails. Vous pouvez ainsi publier vos donn\xE9es en interne, avoir des retours, puis publier les donn\xE9es sur un portail opendata. Une diffusion de donn\xE9es par \xE9tapes sur diff\xE9rents portail permet d'augmenter la qualit\xE9 des donn\xE9es partag\xE9es.  
Le fait de pouvoir partager sur plusieurs portails permet aussi d'avoir les m\xEAme donn\xE9es sur tous les portails sans les dupliquer. De plus lorsque les donn\xE9es seront mises \xE0 jour, elles le seront pour tous les portails.

![Permissions](./images/user-guide-backoffice/dataset-partage.jpg)

### Catalogue

La liste des catalogues que vous avez configur\xE9s sur la page [Catalogues](./user-guide-backoffice/catalogues) est disponible dans cette section.  
Vous pouvez ainsi publier vos donn\xE9es sur un ou plusieurs catalogues externes.

## Activit\xE9

Le journal d'activit\xE9 permet de consulter l'historique des derni\xE8res modifications r\xE9alis\xE9e sur le jeu de donn\xE9es

![Activit\xE9](./images/user-guide-backoffice/dataset-activity.jpg)  
*Dernies \xE9v\xE9nements de votre jeu de donn\xE9es*

## Boutons d'actions
Sur la droite de la page d'\xE9dition vous avez acc\xE8s \xE0 plusieurs boutons d'actions :

* **Fichier original**, vous permet de t\xE9l\xE9charger le fichier original
* **Fichier enrichi**, vous permet de t\xE9l\xE9charger le fichier avec toutes les nouvelles colonnes que vous avez ajout\xE9es gr\xE2ce \xE0 l'[enrichissement](./user-guide-backoffice/enrichment) au format CSV.
* **Mettre \xE0 jour**, vous permet de modifier le jeu de donn\xE9es charg\xE9 sur votre compte par un nouveau de votre ordinateur.
* **Int\xE9grer dans un site**, permet d'acc\xE9der au code HTML pour int\xE9grer le tableau ou la carte des donn\xE9es \xE0 un site externe.
* **Voir sur le portail des donn\xE9es**, permet d'acc\xE9der \xE0 la page sur votre portail. Si vous avez publi\xE9 le jeu sur plusieurs portail, il y aura plusieurs liens.
* **Utiliser l'API**, permet d'acc\xE9der \xE0 la documentation interactive de 'API du jeu de donn\xE9es.
* **Suppression**, permet de supprimer le jeu de donn\xE9es de la plateforme.
* **Changer de propri\xE9taire**, permet de transf\xE8re le jeu de donn\xE9es dans une autre compte.

## Contenu
La section du contenu permet de naviguer rapidement entre les diff\xE9rentes sections de la page d'\xE9dition du jeu de donn\xE9es.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Data enrichment
section: 4
subsection: 6
updated: 2021-09-20
description: Data enrichment
published: true
---


Enrichment allows you to import columns from a reference base. It is possible to cross-reference its data with data from open data such as the SIRENE database, INSEE data, the cadastre or the BAN.


* The **SIRENE** database brings together economic and legal information from more than 28 million french business establishments, including more than 11 million active establishments.
* **INSEE** data makes it possible to retrieve various informations on french administrative divisions (municipalities, departments, regions)
* The **cadastre** provides access to the various information concerning the plots. In particular, you can geocode plot codes or obtain the areas of your parcel on the french territory.
* The NAB is the **French National Address Base**. It allows you to geolocate addresses or find addresses from coordinates.


Depending on your data, you can choose an enrichment and complete your data.

## Create your own reference data

At this time, only **Super Instance Admins** can set a dataset as **Reference Data**.

1. Upload a file and associate at least one concept with a column.
2. Switch to super administrator mode
3. Define your **Reference Data**

Once these 3 steps have been completed, you can enrich other data with your **Reference data**.

### Upload and concept

When your dataset is created on your account, you will need to associate a concept to the column containing the uniques values. This column is the link to join data. Your column must contain unique codes, such as **INSEE codes** of municipality, **SIRENE codes** or **Parcel codes**.  

![Donn\xE9es de r\xE9f\xE9rence](./images/user-guide-backoffice/enrichment-concept.jpg)  
*A column with a concept is in bold*

### Super admin mode

Super administrator mode is only available for users authorized in the instance.  
This mode is available in the menu at the top right on Data Fair.

![Donn\xE9es de r\xE9f\xE9rence](./images/user-guide-backoffice/enrichment-superadmin.jpg)


### Reference data

The imported datasets with concepts can be used as reference data for **unitary searches** or / and for **mass enrichments**.  

The **unit searches** will allow to validate a code in your [editable datasets](./user-guide-backoffice/import-dataset).  
If your editable dataset has the same concept as one of your reference datasets, when a value is filled in this column, the user will have valid propositions of this concept.


The **mass enrichments** will allow to perform a join and import columns from the reference data to your dataset.

![Donn\xE9es de r\xE9f\xE9rence](./images/user-guide-backoffice/enrichment-master-data.jpg)  
*Cross your data with reference data*

On our image, we have created a SITADEL reference data with the concept **parcel code** which can be used in mass enrichments.  
Any other dataset in your account with the concept **parcel code** can use the SITADEL enrichment to import various columns from the SITADEL reference base.


### Create a concept


You can create your own unique value concepts in the **Private Vocabulary** section of **Settings** on your account. The concepts created will be available for your account.

A concept is defined by its **Identifier**, its **Title**, its **Description** and its **Category**. The identifier and title are required.

![Donn\xE9es de r\xE9f\xE9rence](./images/user-guide-backoffice/enrichment-vocabulaire.jpg)  
*Create your own concepts*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Enrichir ses donn\xE9es
section: 4
subsection: 6
updated: 2021-09-20
description: Jointures de donn\xE9es
published: true
---

L'enrichissement permet d'importer des colonnes d'une base de r\xE9f\xE9rence. Il est ainsi possible de croiser ses donn\xE9es avec des donn\xE9es issues de l'open data telles que la base SIRENE, les donn\xE9es INSEE, le cadastre ou la BAN.

* La **base SIRENE** rassemble les informations \xE9conomiques et juridiques de plus de 28 Millions d'\xE9tablissements d'entreprises, dont plus de 11 Millions \xE9tablissement actifs.
* Les **donn\xE9es INSEE** permettent de r\xE9cup\xE9rer diverses informations sur les divisions administrative (communes, d\xE9partements, r\xE9gions)
* Le **cadastre** permet d'avoir acc\xE8s aux diff\xE9rentes informations concernant les parcelles. Vous pouvez notamment g\xE9ocoder des codes parcelles ou encore obtenir les surfaces de vos parcelles.
* La BAN est la **Base d'Adresse Nationale**. Elle permet de g\xE9olocaliser des adresses ou de trouver des adresses \xE0 partir de coordonn\xE9es.

En fonction des donn\xE9es que vous poss\xE9dez, vous pouvez choisir l'enrichissement qui vous convient et compl\xE9ter vos donn\xE9es.


## Cr\xE9ez vos donn\xE9es de r\xE9f\xE9rence

Pour le moment, seul les supers administrateurs de l'instance peuvent d\xE9finir un jeu de donn\xE9es comme **Donn\xE9es de r\xE9f\xE9rence**.

1. Importer un fichier et associer au moins un concept \xE0 une colonne.
2. Passer en mode surper administrateur  
3. D\xE9finir votre donn\xE9es de r\xE9f\xE9rence

Une fois ces 3 \xE9tapes r\xE9alis\xE9es, il vous est alors possible d'enrichir d'autres donn\xE9es avec vos donn\xE9es de r\xE9f\xE9rence.

### Import et concept
Lorsque votre jeu de donn\xE9es est cr\xE9\xE9 sur votre compte, il vous faudra associer un concept \xE0 la colonne qui va faire la jointure avec les autres jeux de donn\xE9es. Votre colonne devra contenir des codes uniques, tels que des **Codes INSEE** de commune, des **Codes SIRENE** ou des **Codes parcelles**

![Donn\xE9es de r\xE9f\xE9rence](./images/user-guide-backoffice/enrichment-concept.jpg)  
*Une colonne poss\xE9dant un concept est en gras*

### Mode super administrateur

Le mode super administrateur n'est disponible que pour les utilisateurs autoris\xE9 dans l'instance.  
Ce mode est disponible dans le menu en haut \xE0 droite sur Data Fair.

![Donn\xE9es de r\xE9f\xE9rence](./images/user-guide-backoffice/enrichment-superadmin.jpg)


### D\xE9finir une donn\xE9e de r\xE9f\xE9rence

Le jeu de donn\xE9e import\xE9 avec ses concepts renseign\xE9s peut servir de donn\xE9e de r\xE9f\xE9rence pour des **recherches unitaires** ou/et pour des **enrichissements en masse**.  

Les **recherches unitaires** vont vous permettre de valider un code dans vos [jeux de donn\xE9es incr\xE9mentaux](./user-guide-backoffice/import-dataset).  
Si votre jeu de donn\xE9es \xE9ditable poss\xE8de le m\xEAme concept qu'un de vos jeux de donn\xE9es r\xE9f\xE9rence, lorsque qu'une valeur sera renseign\xE9 pour cette colonne, l'utilisateur aura des propositions valides de ce concept.

Les **enrichissements en masse** vont vous permettre de r\xE9aliser une jointure \xE0 froid et d'importer des colonnes du jeu de r\xE9f\xE9rence vers votre jeu de donn\xE9es.

![Donn\xE9es de r\xE9f\xE9rence](./images/user-guide-backoffice/enrichment-master-data.jpg)  
*Croisez vos donn\xE9es avec les donn\xE9es de r\xE9f\xE9rence*

Sur notre image, nous avons cr\xE9\xE9 une donn\xE9e de r\xE9f\xE9rence SITADEL avec le concept **code parcelle** qui pourra \xEAtre utilis\xE9 dans les enrichissements en masse.  
Tout autre jeu de donn\xE9es de votre compte poss\xE9dant le concept **code parcelle** pourra utiliser l'enrichissement SITADEL pour importer diverses colonnes de la base de r\xE9f\xE9rence SITADEL.

### Cr\xE9er un concept

Vous pouvez cr\xE9er vos propres concepts de valeurs uniques dans la section **Vocabulaire priv\xE9** de **Param\xE8tres** de votre compte. Les concepts cr\xE9\xE9s dans cette section ne seront disponible que pour votre compte (organisation ou personnel). Ces concepts pourront \xEAtre utilis\xE9s dans vos donn\xE9es de r\xE9f\xE9rence.  

Un concept est d\xE9fini par son **Identifiant**, son **Titre**, sa **Description** et sa **Cat\xE9gorie**. L'identifiant et le titre sont obligatoires.

![Donn\xE9es de r\xE9f\xE9rence](./images/user-guide-backoffice/enrichment-vocabulaire.jpg)  
*Cr\xE9ez vos propres concepts*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Supported file formats
section: 4
subsection: 1
updated: 2021-09-20
description: Supported file formats
published: true
---

The following table shows the file formats supported by Data Fair:

Type | Description | Format | Archived format (zip)
----------|---------------------------|--------------------|--------------------
CSV | Tabular data file format as comma separated values | .csv  | **-**
TSV | Open format of text representing tabular data as tab-separated values | .tsv  | **-**
OpenDocument | Open data file format for office applications | .ods, .fods | **-**
XLSX | Office Open XML Spreadsheet File Format | .xlsx | **-**
XLS | Excel spreadsheet file formatl | .xls | **-**
DBF |Format de fichier de base de donn\xE9es DBase | .dbf | **-**
TXT | Format de fichier texte qui ne contient qu'une suite de caract\xE8res  | .txt | **-**
DIF | Format de fichier texte de donn\xE9es ASCII | .dif | **-**
GeoJSON | Format de de fichier de donn\xE9es g\xE9ospatiales simples utilisant la norme JSON | .geojson | **-**
KML/KMZ | Format destin\xE9 \xE0 la gestion de l'affichage de donn\xE9es g\xE9ospatiales bas\xE9 sur le formalise XML | .kml, .kmz | **-**
GPX |  Format de fichier permettant l'\xE9change de coordonn\xE9es GPS | .gpx ou .xml | **-**
ESRI Shapefile |  Format de fichier pour les syst\xE8mes d'informations g\xE9ographiques  | **-** | .shp, .dbf et .shx (.prj optionel)

<p>
</p>

At this time, only Shapefile data can be contained in a .zip file.  
[Contact us](https://koumoul.com/contact) if you have a compatibility issue or if you need a new format.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Formats de fichier support\xE9s
section: 4
subsection: 1
updated: 2021-09-20
description: Formats de fichier support\xE9s
published: true
---

Le tableau suivant reprend les formats de fichier support\xE9s par Data Fair :

Type | Description | Format | Format archiv\xE9 (.zip)
----------|---------------------------|--------------------|--------------------
CSV | Format de fichier de donn\xE9es tabulaires sous forme de valeurs s\xE9par\xE9es par des virgules | .csv  | **-**
TSV | Format ouvert de texte repr\xE9sentant des donn\xE9es tabulaires sous forme de valeurs s\xE9par\xE9es par des tabulations | .tsv  | **-**
OpenDocument | Format de fichier ouvert de donn\xE9es pour les applications bureautiques | .ods, .fods | **-**
XLSX | Format de fichier tableur Office Open XML | .xlsx | **-**
XLS | Format de fichier tableur Excel | .xls | **-**
DBF |Format de fichier de base de donn\xE9es DBase | .dbf | **-**
TXT | Format de fichier texte qui ne contient qu'une suite de caract\xE8res  | .txt | **-**
DIF | Format de fichier texte de donn\xE9es ASCII | .dif | **-**
GeoJSON | Format de de fichier de donn\xE9es g\xE9ospatiales simples utilisant la norme JSON | .geojson | **-**
KML/KMZ | Format destin\xE9 \xE0 la gestion de l'affichage de donn\xE9es g\xE9ospatiales bas\xE9 sur le formalise XML | .kml, .kmz | **-**
GPX |  Format de fichier permettant l'\xE9change de coordonn\xE9es GPS | .gpx ou .xml | **-**
ESRI Shapefile |  Format de fichier pour les syst\xE8mes d'informations g\xE9ographiques  | **-** | .shp, .dbf et .shx (.prj optionel)

<p>
</p>

Pour le moment, seules les donn\xE9es Shapefile peuvent \xEAtre contenues dans un fichier .zip.  
Si vous avez un besoin diff\xE9rent ou que vous rencontrez un probl\xE8me de compatibilit\xE9, n\u2019h\xE9sitez pas \xE0 nous [contacter](https://koumoul.com/contact).
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Localization game
section: 9
subsection : 2
updated: 2021-09-20
description :  Explore the data by locating points on a map.
published: true
application : https://koumoul.com/apps/data-fair-locate-game/0.1/
---

The **Localization game** allows to create a game on a blind map. You have an example of this visualization on the map of [location of world capitals](https://opendata.koumoul.com/reuses/localisez-les-capitales-du-monde).  
A score is awarded to the player based on the distance from the correct answer and the time spent answering the questions.  


### Create your localization game

Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Localization game**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/localisation-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu

The configuration menu contains three submenus: **Data**, **Render** and **Presentation**.

#### 1.Data

In the **Data** menu, you choose the dataset you want to use.  

**Filters** are used to restrict the data displayed in the application.  
You can **Restrict to Values** from a column, **Restrict to Range of Values\u200B\u200B** from a column, or **Exclude Values\u200B\u200B** from a column.


The **Number of elements** defines the number of points to find on the map.

#### 2.Render

The **Render** menu allows you to choose the style of your map, the default markers icon, the size of the icons and the initial position of the map.

#### 3.Presentation

In the **Presentation** menu, you define the overall description of your game and you can select a presentation image of the game if you have added an image as an attachment.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Jeu de localisation
section: 9
subsection : 2
updated: 2021-09-20
description :  Explorer les donn\xE9es en localisant les points sur une carte.
published: true
application : https://koumoul.com/apps/data-fair-locate-game/0.1/
---

La visualisation **Jeu de localisation** permet de cr\xE9er un jeu de localisation sur une carte aveugle. Vous avez un exemple de cette visualisation sur la carte de [localisation des capitales du monde](https://opendata.koumoul.com/reuses/localisez-les-capitales-du-monde).  
Un score est attribu\xE9 au joueur en fonction de la distance par rapport \xE0 la bonne r\xE9ponse et du temps pass\xE9 pour r\xE9pondre aux questions.

### Cr\xE9er votre jeu de localisation

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configuration une visualisation**.

1. Choisir l'application **Jeu de localisation**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/localisation-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9 \xE0 tout moment.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration
Le menu de configuration est compos\xE9 de trois sous-menus : **Donn\xE9es**, **Rendu** et **Pr\xE9sentation**.

#### 1.Donn\xE9es

Dans le menu **Donn\xE9es**, vous choisissez le jeu de donn\xE9es que vous voulez utiliser.  

Les **Filtres** permettent de restreindre les donn\xE9es affich\xE9es dans l'application.  
Vous pouvez **Restreindre \xE0 des valeurs** d'une colonne,  **Restreindre \xE0 un intervalle de valeurs** d'une colonne ou **Exclure des valeurs** d'une colonne.

Le **Nombre d'\xE9l\xE9ments** d\xE9finie le nombre de points \xE0 trouver sur la carte.

#### 2.Rendu
Le menu **Rendu** vous permet de choisir le style de votre carte, l'icone par d\xE9faut des marqueurs, la taille des icones et la position initiale de la carte.

#### 3.Pr\xE9sentation

Dans le menu **Pr\xE9sentation**, vous d\xE9finissez la description globale de votre jeu et vous pouvez s\xE9lectionner une image de pr\xE9sentation du jeu si vous avez ajouter une image en pi\xE8ce jointe.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Quiz game
section: 9
subsection : 1
updated: 2021-09-20
description :  Data exploration with quiz questions.
published: true
application : https://koumoul.com/apps/data-fair-quizz/0.1/
---

The **Quiz Game** visualization allows to create a game in which labels are matched to descriptions or images.
An example of this game is the [quiz on the 2019 science festival](https://opendata.koumoul.com/reuses/quizz-fete-de-la-science-2019).  
A score is awarded to the player based on the number of correct answers and the time spent answering the questions.

### Quiz game

Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Quiz game**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/quizz-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu

The configuration menu contains two submenus: **Data** and **Presentation**.

### 1.Data

In the **Data** menu, you choose the dataset you want to use.

The **Label field** allows to choose the column of your labels.  
The **Description, image, or question field** allows  to select the column of items to find.  
The **Elements number** allows to choose the number of questions the visitors will have to answer before obtaining their score.  
The **Choices  Number** is used to define the number of possible answers for a question.  
The **Transform the value** section allows to perform a calculation in the form of a formula on all the values.  
The **minimum label length** allows to filter the **Description, image, or question field** to have understandable descriptions or questions displayed.

**Filters** are used to restrict the data displayed in the application.  
You can **Restrict to Values** from a column, **Restrict to Range of Values\u200B\u200B** from a column, or **Exclude Values\u200B\u200B** from a column

### 2.Presentation

In the **Presentation** menu, you define the overall description of your game and you can select a presentation image of the game if you have added an image as an attachment to your data.  

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Jeu de Quizz
section: 9
subsection : 1
updated: 2021-09-20
description :  Explorer les donn\xE9es avec des questions sous forme de quizz.
published: true
application : https://koumoul.com/apps/data-fair-quizz/0.1/
---

La visualisation **Jeu de Quizz** permet de cr\xE9er un jeu dans lequel il faut faire correspondre des libell\xE9s \xE0 des descriptions ou images. Vous avez un exemple de cette visualisation sur la [quizz sur la f\xEAte de la science 2019](https://opendata.koumoul.com/reuses/quizz-fete-de-la-science-2019).  
Un score est attribu\xE9 au joueur en fonction du nombre de bonnes r\xE9ponse et du temps pass\xE9 pour r\xE9pondre aux questions.

### Cr\xE9er Quizz

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configuration une visualisation**.

1. Choisir l'application **Jeu de Quizz**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/quizz-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9 \xE0 tout moment.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration
Le menu de configuration est compos\xE9 de deux sous-menus : **Donn\xE9es** et **Pr\xE9sentation**.

#### 1.Donn\xE9es

Dans le menu **Donn\xE9es**, vous choisissez le jeu de donn\xE9es que vous voulez utiliser.  

Le **Champ du libell\xE9** permet de choisir la colonne de vos libell\xE9s.  
Le **Champ de la description, de l'image, ou de la question** permet de s\xE9lectionner la colonne des \xE9l\xE9ments \xE0 trouver.
Le **Nombre d'\xE9l\xE9ments** permet de choisir le nombre que questions que le visiteurs devra r\xE9pondre avant d'obtenir son score.  
Le **Nombre de choix** permet de d\xE9finir le nombre de r\xE9ponses possibles pour une question.  
La section **Transformer la valeur** permet de r\xE9aliser un calcul sous forme de formule sur toute les valeurs.  
La **longueur minimale du libell\xE9** permet filtrer le champ pour avoir des descriptions ou des questions compr\xE9hensibles affich\xE9es.

Les **Filtres** permettent de restreindre les donn\xE9es affich\xE9es dans l'application.  
Vous pouvez **Restreindre \xE0 des valeurs** d'une colonne,  **Restreindre \xE0 un intervalle de valeurs** d'une colonne ou **Exclure des valeurs** d'une colonne.

#### 2.Pr\xE9sentation

Dans le menu **Pr\xE9sentation**, vous d\xE9finissez la description globale de votre jeu et vous pouvez s\xE9lectionner une image de pr\xE9sentation du jeu si vous avez ajouter une image en pi\xE8ce jointe.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Sort game
section: 9
subsection : 3
updated: 2021-09-20
description :  Data exploration in a sort game
published: true
application : https://koumoul.com/apps/data-fair-sort-game/0.1/
---

The **Sort game** allows to create a game of classification of your data according to a numerical value. An example is the [ranking of the top scorers of the Euro](https://opendata.koumoul.com/reuses/classez-les-meilleurs-buteurs-de-l'euro).  
A score is assigned to the player based on the number of permutations and the time spent sorting the items.


### Create your Sort game

Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Sort game**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/tri-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu

The configuration menu contains two submenus: **Data** and **Presentation**.

#### 1.Data

In the **Data** menu, you choose the dataset you want to use.

The **Label field** is used to define the column containing the values \u200B\u200Bto be sorted.  
The **Comparaison value field** is used to define the column containing the numerical values.  
The **Game Mode** allows to choose your game mode **number of distant elements as much as possible** or **one element of each value**.  

**Filters** are used to restrict the data displayed in the application.  
You can **Restrict to Values** from a column, **Restrict to Range of Values\u200B\u200B** from a column, or **Exclude Values\u200B\u200B** from a column.  

#### 2.Presentation

In the **Presentation** menu, you define the overall description of your game. You can select an image for the game if you have added an image as an attachment on your dataset.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Jeu de tri
section: 9
subsection : 3
updated: 2021-09-20
description :  Explorer les donn\xE9es en les triant suivant une valeur num\xE9rique.
published: true
application : https://koumoul.com/apps/data-fair-sort-game/0.1/
---

La visualisation **Jeu de tri** permet de cr\xE9er un jeu de classement de vos donn\xE9es selon une valeur num\xE9rique. Vous avez un exemple de cette visualisation avec le [classement des meilleurs buteurs de l'Euro](https://opendata.koumoul.com/reuses/classez-les-meilleurs-buteurs-de-l'euro).  
Un score est attribu\xE9 au joueur en fonction du nombre de permutations et du temps pass\xE9 pour arriver \xE0 trier les \xE9l\xE9ments.

### Cr\xE9er votre jeu de tri

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configuration une visualisation**.

1. Choisir l'application **Jeu de tri**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/tri-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9 \xE0 tout moment.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration
Le menu de configuration est compos\xE9 de deux sous-menus : **Donn\xE9es** et **Pr\xE9sentation**.

#### 1.Donn\xE9es

Dans le menu **Donn\xE9es**, vous choisissez le jeu de donn\xE9es que vous voulez utiliser.  


Le **Champ du libell\xE9** permet de d\xE9finir la colonne contenant les valeurs \xE0 trier.  
Le **Champ de la valeur \xE0 comparer** permet de d\xE9finir la colonne contenant les valeurs num\xE9riques.  
Le **Mode du jeu** permet de choisir son mode de jeu, **nombre d'\xE9l\xE9ments \xE9loign\xE9s autant que possible** ou **un \xE9l\xE9ment de chaque valeur**.

Les **Filtres** permettent de restreindre les donn\xE9es affich\xE9es dans l'application.  
Vous pouvez **Restreindre \xE0 des valeurs** d'une colonne,  **Restreindre \xE0 un intervalle de valeurs** d'une colonne ou **Exclure des valeurs** d'une colonne.


#### 2.Pr\xE9sentation

Dans le menu **Pr\xE9sentation**, vous d\xE9finissez la description globale de votre jeu et vous pouvez s\xE9lectionner une image de pr\xE9sentation du jeu si vous avez ajouter une image en pi\xE8ce jointe.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Geo Shapes
section: 6
subsection : 3
updated: 2021-09-20
description : Visualize geometric data on a map.
published: true
application : https://koumoul.com/apps/data-fair-geo-shapes/0.1/
---

The **Geo Shapes** visualization display geometric data on a map. It is thus possible to visualize data such as the zones of the local urbanization plan or energy networks.  
An example is the [map of the Angers Loire M\xE9tropole LUP zones](https://opendata.koumoul.com/reuses/plu-zone-urba-angers-loire-metropole/full).  
You can click on each zone to get more details and click on a color in the legend to filter by zone type.

### Concepts  

To configure a **Geo Shapes** visualization, your active account contains at least one dataset with the [concept](./user-guide-backoffice/concept) **GeoJSON geometry** to be able to project your data on the map.

Once you updated your data schema, you can preview your data using the **generic map** button. This allows to verify that your data is correctly projected on a map.

### Create a Geo Shapes visualization

Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Geo Shapes**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/geo-shapes-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu
The configuration menu contains three submenus: **Data**, **Render** and **Presentation**.

#### 1.Data
In the **Data** menu, you choose the dataset you want to use.
Once you chose a dataset compatible with the **Geo Shapes** visualization, a map preview is displayed.  

#### 2.Render


In the **Render** menu, the **Value color** defines the column used for your legend. A legend color can be defined by clicking on the **color** circle or each legend value. You manage the legend order with a drag and drop on the hamburger menu.  

The **Details Fiels** allows to choose the fields to display when a user clicks on a geometric shape. Without any value in this section, the side panel will only be useful for navigation.  
The **map style** allows to modify your basemap. You can customize the basemap of your application to have a better rendering.

#### 3.Navigation

The **Navigation** menu is used to activate geolocation and define the initial position of the map.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: G\xE9o Shapes
section: 6
subsection : 3
updated: 2021-09-20
description : Visualiser des donn\xE9es g\xE9om\xE9triques sur une carte.
published: true
application : https://koumoul.com/apps/data-fair-geo-shapes/0.1/
---

La visualisation **G\xE9o Shapes** permet de visualiser des donn\xE9es g\xE9om\xE9triques sur une carte. Il est ainsi possible de visualiser des donn\xE9es telles que le zonage du PLU ou des r\xE9seaux \xE9nerg\xE9tiques.  
Vous avez un exemple de cette visualisation sur la [carte des zones du PLU d'Angers Loire M\xE9tropole](https://opendata.koumoul.com/reuses/plu-zone-urba-angers-loire-metropole/full).  
Il est possible de cliquer sur chaque zone pour obtenir plus de d\xE9tails ou de cliquer sur un type de zone dans la l\xE9gende pour filtrer par type de zone.

### Les concepts

Pour configurer une visualisation **G\xE9o Shapes**, votre compte actif contient au moins un jeu de donn\xE9es avec le [concept](./user-guide-backoffice/concept)  **G\xE9ometrie GeoJSON** pour pouvoir projeter vos donn\xE9es sur la visualisation.  
Une fois que vous avez mis \xE0 jour le sch\xE9ma de vos donn\xE9es, vous pouvez visualiser un aper\xE7u de vos donn\xE9es \xE0 l'aide du bouton **carte g\xE9n\xE9rique**. Vous pouvez ainsi v\xE9rifier que vos donn\xE9es sont correctement projet\xE9es sur une carte.

### Cr\xE9er une visualisation G\xE9o Shapes

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configurer une visualisation**.

1. Choisir l'application **G\xE9o Shapes**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/geo-shapes-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  

### Menu de configuration
Le menu de configuration est compos\xE9 de trois sous-menus : **Source de donn\xE9es**, **Option de rendu** et **Navigation**.

#### 1.Source de donn\xE9es
Dans le menu **Source de donn\xE9es**, vous pouvez choisir le jeu de donn\xE9es que vous voulez utiliser.  
Lorsque vous avez choisi un jeu de donn\xE9es compatible avec l'application **G\xE9o Shapes**, un aper\xE7u de carte s'affiche.

#### 2.Option de rendu

Dans le menu **Option de rendu**, la **Couleur par valeur d'un champ** d\xE9fini la colonne utilis\xE9e pour votre l\xE9gende. Vous pouvez d\xE9finir chaque couleur par valeur de votre l\xE9gende en cliquant sur le cercle **color**. Vous pouvez modifier l'ordre avec un glisser-d\xE9poser sur le menu hamburger de la valeur de l\xE9gende \xE0 r\xE9ordonner.  
Le **D\xE9tails des champs** permet de choisir les champs \xE0 afficher lorsqu'un utilisateur cliquera sur une forme g\xE9om\xE9trique. Sans aucune valeur dans cette section, le panneau lat\xE9ral ne sera utile que pour la navigation.  
Le **style de carte** permet de modifier votre fond de carte. Vous pouvez ainsi personnaliser le fond de carte de votre application pour avoir le meilleur rendu.

#### 3.Navigation

Le menu **Navigation** permet d'activer la g\xE9olocalisation et de d\xE9finir la position initiale de la carte.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Import a dataset
section: 4
subsection: 2
updated: 2021-09-20
description: Import a dataset
published: true
---

You can create a dataset on the [dashbord](./user-guide-backoffice/dashboard) or on the [datasets](./user-guide-backoffice/datasets) pages.

Three differents datasets on Data Fair.  

1. Upload a file from your computer
2. An editable dataset
3. A virtual dataset

### Upload a file

You can import files using any **Create a dataset** action buttons on Data Fair.  
The upload file process contains a list of the [formats](./user-guide-backoffice/file-formats) supported by Data fair.
It is possible to add [attachments](./user-guide-backoffice/attachements) in a zip archive to link it to the rows of the dataset.

Once the file is loaded, you are redirected to the dataset edit page. Data Fair continues processing the file on the dataset edit page.

Six have to be validated to use your dataset :

1. **Loading**
2. **Conversion** to a format used by the platform internally.
3. **Analysis**, which will determine the schema of the dataset.
4. **Indexing**, which will allow you to quickly find and access the data in the file.
5. **Enrichment**, which supplements the data in the file with external data.
6. The **Finalization**, which corresponds to the last processing before the dataset is available.

<p>
</p>

When finalization is complete, the dataset state is set to "available". It can then be [edited](./user-guide-backoffice/edition-dataset), enriched or used in the various visualizations.

### Incremental dataset  

An **editable dataset** is an empty editable dataset created without a data file.  
You will be able to define the columns of the dataset and then add the rows from Data Fair.

Each column is defined by its label and its type.

The schema of your **editable dataset** is defined when you have filled in all the columns of your dataset.

![Choix de l'application](./images/user-guide-backoffice/import-schema-editable.jpg)  
*Add columns to create your editable dataset*


You can then add rows to your dataset either through a form on a page of your site, your portal or through the **Data** section in the edit of the dataset.

![Formulaire](./images/user-guide-backoffice/import-formulaire.jpg)  
*Feedback form for portal visitors*

### Virtual dataset

A **virtual dataset** is a view of one or more datasets (children's dataset).  
It is used to present a portion of a dataset or to concatenate datasets with the same schema.


For exemple, it is possible to create a view of its municipality or its department on a national reference dataset without having to copy the data.  
As a **virtual dataset** is a portion of a dataset, when the reference dataset is updated, the virtual dataset of the town (or department) will also be updated. The data always remains up to date with respect to the reference data set.

![Jeu virtuel](./images/user-guide-backoffice/import-virtuel-valeur.jpg)  
*Filter or aggregate your datasets values*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Ajouter un jeu de donn\xE9es
section: 4
subsection: 2
updated: 2021-09-20
description: Ajouter un dataset
published: true
---

Vous pouvez cr\xE9er un jeu de donn\xE9es sur la [page du tableau de bord](./user-guide-backoffice/dashboard) ou sur la [page des jeux de donn\xE9es](./user-guide-backoffice/datasets).

Il existe trois jeux de donn\xE9es diff\xE9rents sur Data Fair.
1. L'import d'un fichier de votre ordinateur
2. Un jeu \xE9ditable
3. Un jeu virtuel

### Import d'un fichier

L'import de fichiers est r\xE9alisable \xE0 l'aide des differents boutons d'action **Cr\xE9er un jeu de donn\xE9es** disponibles dans Data Fair.  
Le d\xE9roul\xE9 d'import d'un fichier contient un rappel des [formats](./user-guide-backoffice/file-formats) pris en charge par Data fair.  
Il est possible d'ajouter des [pi\xE8ces jointes](./user-guide-backoffice/attachements) dans une archive zip qui sera attach\xE9 aux lignes du jeux de donn\xE9es.

Une fois le fichier charg\xE9, vous \xEAtes redirig\xE9 vers la page d'\xE9dition du jeu de donn\xE9es. Data Fair continue le traitement du fichier sur la page d'\xE9dition du jeu de donn\xE9es.  

Pour qu'il soit utilisable, l'\xE9tape 6 de finalisation doit \xEAtre valid\xE9e :  

1. Le **chargement**
2. La **conversion** vers un format utilis\xE9 par la plateforme en interne.
3. L'**analyse**, qui va d\xE9terminer le sch\xE9ma du jeu de donn\xE9es.
4. L'**indexation**, qui va permettre de trouver et d'acc\xE9der rapidement aux donn\xE9es du fichier.
5. L\u2019**enrichissement**, qui compl\xE8te les donn\xE9es du fichier avec des donn\xE9es externes.
6. La **finalisation**, qui correspond aux derniers traitements avant que le jeu de donn\xE9es ne soit disponible.

<p>
</p>

Lorsque la finalisation est termin\xE9e, le jeu de donn\xE9es passe en \xE9tat "disponible". Il peut alors \xEAtre [\xE9dit\xE9](./user-guide-backoffice/edition-dataset), enrichi et utilis\xE9 dans les diff\xE9rentes visualisations.  
La plus part des visualisations utilisent [des concepts](./user-guide-backoffice/concept) tels que les concepts **Latitude** et **Longitude** pour une visualisation cartographique.

### Jeu \xE9ditable

Un **jeu de donn\xE9es \xE9ditable** est un jeu de donn\xE9es vide, il est cr\xE9\xE9 sans fichier de donn\xE9es.  
Vous allez pouvoir d\xE9finir les colonnes du jeu de donn\xE9es puis ajouter les lignes \xE0 partir de Data Fair.

Chaque colonne est caract\xE9ris\xE9e par son libell\xE9 et son type.
Le sch\xE9ma de votre **jeu de donn\xE9es \xE9ditable** est d\xE9fini lorsque vous avez renseign\xE9 l'ensemble des colonnes de votre jeu de donn\xE9es.

![Choix de l'application](./images/user-guide-backoffice/import-schema-editable.jpg)  
*Ajoutez des colonnes et cr\xE9ez votre propre jeu de donn\xE9es*

Vous pouvez ensuite ajouter des lignes \xE0 votre jeu de donn\xE9es que ce soit par un formulaire sur une page de votre site, de votre portail ou par la section **Donn\xE9es** dans l'\xE9dition du jeu de donn\xE9es.

![Formulaire](./images/user-guide-backoffice/import-formulaire.jpg)  
*Formulaire de retours pour les visiteurs de portail*

### Jeu virtuel

Un **jeu virtuel** est une vue d'un ou plusieurs jeux de donn\xE9es (jeux enfants).  
Il permet de pr\xE9senter un sous ensemble d'un jeu de donn\xE9es ou de concat\xE9ner des jeux de donn\xE9es qui poss\xE8dent le m\xEAme sch\xE9ma.

Il est ainsi possible de cr\xE9er une vue de sa commune ou de son d\xE9partement sur un jeu de donn\xE9es de r\xE9f\xE9rence national sans devoir copier les donn\xE9es.  
Comme il s'agit d'une vue, lorsque le jeu de r\xE9f\xE9rence sera mis \xE0 jour, le jeu virtuel sur la commune (ou le d\xE9partement) sera aussi mis \xE0 jour. Les donn\xE9es restent ainsi toujours \xE0 jour par rapport au jeu de donn\xE9es r\xE9f\xE9rence.

![Jeu virtuel](./images/user-guide-backoffice/import-virtuel-valeur.jpg)  
*Filtrez ou agr\xE9gez les valeurs de vos jeux de donn\xE9es*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Location info
section: 6
subsection : 5
updated: 2021-09-20
description : Project your geolocated data on a map with custom markers
published: true
application : https://koumoul.com/apps/infos-loc/0.9/
---

The **Location info** visualization allows to project geolocated data on a map. The coordinates are represented by a clickable marker with a personalized card on each point.


### Prerequisites

The data you want to project must contain latitudes and longitudes.  
The visualization supports Lambert 93, Lambert II and WGS 84 system projections.

### Configuration
#### 1.Concepts

To use your data in a **Location Info** visualization, [the concepts](./user-guide-backoffice/concept) **Latitude** and **Longitude** must be associated with the schema of the dataset you want to use.

Then, associate the concept **Label** with the corresponding column of your dataset.  
The values of this column will be used as card titles in your visualisation.  

You can combine other concepts such as **images**, **descriptions** or **web page** to better inform your data. These concepts will be used on the marker cards.  
Once you updated your data schema, you can preview your data using the **generic map** button. This allows to verify that your data is correctly projected on a map.

#### 2.Create a Location info map

Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Location Info**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/infos-localisations-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu

The configuration menu contains four sub-menus: **Data**, **Render**, **Card** and **Navigation**.

#### 1.Data

In the **Data** menu, you choose the dataset you want to use.  

Note: If your dataset is not available in this menu, make sure you have updated the [concepts](./user-guide-backoffice/concept) **Latitude** and **Longitude** in your dataset.

#### 2.Render

In the **Render** menu, you can choose the **Map Style** that suits you the most.  
The **Color by value** defines the column used for the colors of your legend. You can choose the different colors you want to associate with your legend values.  

You can also choose **Icons by field value** to define the column used for the icons in your legend. You can define different icons for each value of one of your columns.

#### 3.Card

The marker cards display certain concepts automatically. For example, on the [European Heritage Days dataset](https://opendata.koumoul.com/reuses/carte-des-evenements-des-journees-europeennes-du-patrimoine-en-france-2019), the concepts **Latitude**, **Longitude**, **Label**, **Image**, **Description** and **Web page** are associated with the corresponding columns.


In the **Card** menu, you can add **Fields to be used** in order to display them in each of the marker files.  
You can add as much information as you want on a record, however, a card with a lot of information will be too large to display.

#### 4.Navigation

The **Navigation** menu is used to activate geolocation and define the initial position of the map.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Infos localisations
section: 6
subsection : 5
updated: 2021-09-20
description : Projeter vos donn\xE9es g\xE9olocalis\xE9es sur une carte avec des marqueurs personnalis\xE9s
published: true
application : https://koumoul.com/apps/infos-loc/0.9/
---

La visualisation **Infos-localisations** permet de projeter des donn\xE9es g\xE9olocalis\xE9es sur une carte. Les coordonn\xE9es sont repr\xE9sent\xE9es par un marqueur cliquable qui permet d'afficher une fiche personnalis\xE9e sur chaque point.

### Pr\xE9requis
Les donn\xE9es que vous souhaitez projeter doivent contenir des latitudes et longitudes.  
La visualisation supporte les projections Lambert 93, Lambert II et le syst\xE8me WGS 84.

### Les concepts
Pour utiliser vos donn\xE9es dans une visualisation **Infos-localisations**, [les concepts](./user-guide-backoffice/concept) **Latitude** et **Longitude** doivent \xEAtre associ\xE9s au sch\xE9ma du jeu de donn\xE9es que vous souhaitez utiliser.

Ensuite, associez le concept **Libell\xE9** \xE0 la colonne correspondante de votre jeu de donn\xE9es.  
Les valeurs de cette colonne seront utilis\xE9s en tant que titres de fiches dans votre carte **Infos-localisations**.

Vous pouvez associer d'autres concepts telles que les **images**, les **descriptions** ou les **page web** pour mieux renseigner vos donn\xE9es. Ces concepts seront utilis\xE9s par les fiches des marqueurs.  
Une fois que vous avez mis \xE0 jour le sch\xE9ma de vos donn\xE9es, vous pouvez visualiser un aper\xE7u de vos donn\xE9es \xE0 l'aide du bouton **carte g\xE9n\xE9rique**. Vous pouvez ainsi v\xE9rifier que vos donn\xE9es sont correctement projet\xE9es sur une carte.

### Cr\xE9er une visualisation Infos-localisation
Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configurer une visualisation**.

1. Choisir l'application **Infos-localisations**
2. Entrer le titre de la visualisation

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/infos-localisations-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  

### Menu de configuration
Le menu de configuration est compos\xE9 de quatre sous-menus : **Donn\xE9es**, **Rendu**, **Fiche** et **Navigation**.

#### 1.Donn\xE9es
Dans le menu **Donn\xE9es**, choisissez le jeu de donn\xE9es que vous venez de pr\xE9parer avec vos concepts.

Remarque : Si votre jeu de donn\xE9es n'est pas disponible dans ce menu, v\xE9rifiez que vous avez bien mis \xE0 jour les [concepts](./user-guide-backoffice/concept) **Latitude** et **Longitude** dans votre jeu de donn\xE9es.

Lorsque vous avez choisi un jeu de donn\xE9es compatible avec l'application **Infos-localisations**, l'aper\xE7u de carte s'affiche avec les points de vos donn\xE9es.


#### 2.Rendu
Dans le menu **Rendu**, vous pouvez choisir le **Style de carte** qui vous convient le mieux.  
La **Couleur par valeur d'un champ** d\xE9fini la colonne utilis\xE9e pour les couleurs de votre l\xE9gende. Vous pouvez d\xE9finir les diff\xE9rentes couleurs que vous voulez associer \xE0 vos valeurs de l\xE9gende.

Vous pouvez aussi choisir les **Icones par valeur d'un champ** pour d\xE9finir la colonne utilis\xE9e pour les icones dans votre l\xE9gende. Vous pouvez d\xE9finir des icones diff\xE9rents pour chaque valeur d'une de vos colonnes

#### 3.Fiche
Les fiches des marqueurs affichent certains concepts automatiquement. Par exemple, sur le [jeu de donn\xE9es des journ\xE9es europ\xE9ennes du patrimoine](https://opendata.koumoul.com/reuses/carte-des-evenements-des-journees-europeennes-du-patrimoine-en-france-2019), les concepts **Latitude**, **Longitude**, **Libell\xE9**, **Image**, **Description** et **Page Web** sont associ\xE9s aux colonnes correspondantes.

Dans le menu **Fiche**, vous pouvez ajouter des **Champs \xE0 utiliser** afin de les afficher dans chacune des fiches des marqueurs.  
Vous pouvez ajouter autant d'informations que vous le d\xE9sirez sur une fiche, cependant, une fiche avec beaucoup d'informations sera trop grand pour \xEAtre affich\xE9e.

#### 4.Navigation
Dans le menu **Navigation**, vous pouvez cacher la barre de recherche, activer ou d\xE9sactiver la g\xE9olocalisation et d\xE9finir la position initiale de la carte.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Parcel info
section: 6
subsection : 4
updated: 2021-09-20
description : Project your data on the French cadastral map.
published: true
application : https://koumoul.com/apps/infos-parcelles/2.4/
---

The **Parcel Info** visualization allows you to project your data onto an interactive French cadastral map.

### Prerequisites

To view your data on **Parcel Info**, your dataset must contain a column of **parcel identifiers of 14 characters**.  
These identifier (or parcel code) are made up of this method: common INSEE code of 5 digits + cadastre section code of 5 characters + cadastral parcel number of 4 digits = structured parcel identifier for Parcel info.


For example **56197037ZC0063** is a valid code for **Parcel info**. An exemple is the [dataset of agricultural plots managed by the agricultural management of the City of Toulouse](https://koumoul.com/s/data-fair/api/v1/datasets/domaine-agricole-toulouse/full) which has a column with identifiers of 14 characters valid for Parcel info.

Your dataset must also contain latitudes and longitudes associated with each field code.  
If you only have 14 character identifiers, it is possible to [enrich your dataset](./user-guide-backoffice/enrichment) and import the latitudes and longitudes according to the parcel identifiers with the help for the **cadastre** enrichment of the Koumoul platform.

### Concepts

To configure a **Parcel info** visualization, your active account contains a data set with [concepts](./user-guide-backoffice/concept) **Parcel code**, **Latitude** and **Longitude** associated in its schema.

Once you update your data schema, the **Map** preview is available in the **Data** section. This allows to verify that your data is correctly projected on a map.

### Create a Parcel info visualization

lick on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Parcel info**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/infos-parcelles-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu

The configuration menu contains four sub-menus: **Data**, **Render** and **Navigation**.

#### 1.Data

In the **Data** menu, you choose the dataset you want to use.  

Note: If your dataset is not available in this menu, make sure you have updated the [concepts](./user-guide-backoffice/concept) **Latitude**, **Longitude** and **Parcel Code** in your dataset.

#### 2.Render

In the **Render** menu, the **Color by value** defines the column used for the colors of your legend. You can choose the different colors you want to associate with your legend values.  

In the **Tooltip** parameter, you can select multiple columns to display when a user clicks on a parcel.

You can have a 3D render with the **Field height**.

#### 3.Navigation

The **Navigation** menu is used to activate geolocation and define the initial position of the map.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Infos parcelles
section: 6
subsection : 4
updated: 2021-09-20
description : Projeter vos donn\xE9es sur le plan cadastral fran\xE7ais.
published: true
application : https://koumoul.com/apps/infos-parcelles/2.4/
---

La visualisation **Infos-parcelles** permet de projeter ses donn\xE9es sur un plan cadastral fran\xE7ais interactif.  

### Pr\xE9requis

Pour visualiser vos donn\xE9es sur **Infos-parcelles**, votre jeu de donn\xE9es doit contenir une colonne d'**identifiants de parcelles sur 14 caract\xE8res**. Ces identifiant (ou code parcelles) sont constitu\xE9s de cette m\xE9thode : code commune INSEE de 5 chiffres + code section cadastre de 5 caract\xE8res + num\xE9ro parcelle cadastre de 4 chiffres = identifiant de parcelle structur\xE9 pour Infos-Parcelles.

Par exemple **56197037ZC0063** est un code valide pour **Infos-parcelles**. Vous pouvez consulter ce [jeu de donn\xE9es de parcelles agricoles g\xE9r\xE9es par la r\xE9gie agricole de la Ville de Toulouse](https://koumoul.com/s/data-fair/api/v1/datasets/domaine-agricole-toulouse/full) qui poss\xE8de une colonne avec des identifiants sur 14 caract\xE8res valides pour Infos-parcelles.

Votre jeu de donn\xE9es doit aussi contenir des latitudes et longitudes associ\xE9es \xE0 chaque code parcelle.  
Si vous n'avez que des identifiants de 14 caract\xE8res, il est possible d'[enrichir votre jeu de donn\xE9es](./user-guide-backoffice/enrichment) et d'importer les latitudes et longitudes en fonction des identifiants de parcelles \xE0 l'aide de l'enrichissement **cadastre** de la plateforme Koumoul.

### Les concepts
Pour configurer une visualisation **Infos-parcelles**, votre compte actif contient au moins un jeu de donn\xE9es avec [les concepts](./user-guide-backoffice/concept) **Code parcelle**, **Latitude** et **Longitude** associ\xE9s dans son sch\xE9ma.

Une fois que vous avez mis \xE0 jour le sch\xE9ma de vos donn\xE9es, la pr\xE9visualisation **Carte** est disponible dans la section des **Donn\xE9es**. Vous pouvez ainsi v\xE9rifier que vos donn\xE9es sont correctement projet\xE9es sur une carte.

### Cr\xE9er une visualisation Infos-parcelles

Pour cr\xE9er une visualisation, vous pouvez aller dans la section **Visualisations** de votre jeu de donn\xE9es ou dans la barre de navigation de Data Fair, cliquez ensuite sur **Configurer une visualisation**.

1. Choisir l'application **Infos-parcelles**
2. Entrer le titre de la visualisation

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/infos-parcelles-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration
Le menu de configuration est compos\xE9 de trois sous-menus : **Sources de donn\xE9es**, **Options de rendu** et **Navigation**.

#### 1.Sources des donn\xE9es  

Dans le menu **Sources de donn\xE9es**, choisissez le jeu de donn\xE9es que vous venez de pr\xE9parer avec les concepts.

Remarque : Si votre fichier n'est pas disponible dans ce menu, v\xE9rifiez que vous avez bien mis \xE0 jour les [concepts](./user-guide-backoffice/concept) **Code parcelle**, **Latitude** et **Longitude** dans votre jeu de donn\xE9es.

Lorsque vous avez choisi un jeu de donn\xE9es compatible avec l'application **Infos-parcelles**, votre aper\xE7u de carte s'affiche avec les points de vos donn\xE9es.  
Pour le moment, les points sont tous de la m\xEAme couleur et vous n'avez que les donn\xE9es cadastrales par default.  

#### 2.Options de rendu  

Dans le menu **Options de rendu**, renseignez la colonne de votre l\xE9gende avec le param\xE8tre **Couleur par valeur d'un champ**.  
Dans le param\xE8tre **Infobulle**, vous pouvez s\xE9lectionner plusieurs colonnes pour les afficher lorsque qu'un utilisateur de votre visualisation aura cliqu\xE9 sur une parcelle.

#### 3.Navigation  

Dans le menu **Navigation**, vous pouvez cacher la barre de recherche et activer ou d\xE9sactiver la g\xE9olocalisation.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Licenses and thematics
section: 12
subsection: 1
updated: 2021-09-20
description : Add and manage the licenses and thematics of your portal
published: true
---

On the settings page you will find the **Licenses** and **Themes** sections.

Data can manage licenses and thematics lists for your data.

A license is referenced by its name and the address of a page that describes the content of that license.  
A theme is defined by its name and color.

![Licences](./images/user-guide-backoffice/licence-thematics.jpg)  
*Add new licenses and themes easily*

The licenses and thematics added to your configuration can then be assigned to the data.  
The licenses and thematis will be available on your portal.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Licences et th\xE9matiques
section: 12
subsection: 1
updated: 2021-09-20
description : Ajouter et g\xE9rer les licences et th\xE9matiques de votre portail
published: true
---
Sur la page des param\xE8tres vous retrouvez les sections des **Licences** et des **Th\xE9matiques**.  

Data Fair permet de g\xE9rer les listes de licences et th\xE9matiques dont vous avez besoin pour vos donn\xE9es.

Une licence est r\xE9f\xE9renc\xE9e par son nom et l'adresse d'une page qui d\xE9crit le contenu de cette licence.  
Une th\xE9matique est d\xE9finie par son nom et sa couleur.

![Licences](./images/user-guide-backoffice/licence-thematics.jpg)  
*Ajoutez de nouvelles licences et th\xE9matiques facilement*

Les licences et th\xE9matiques ajout\xE9es dans votre configuration peuvent ensuite \xEAtre assign\xE9es aux donn\xE9es.  
Ainsi, les licences et th\xE9matiques de vos donn\xE9es seront consultables sur votre portail.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Cards and list
section: 8
subsection : 1
updated: 2021-09-20
description : Explore your data
published: true
application : https://koumoul.com/apps/list-details/0.3/
---

The **Cards and list** visualization allows to filter, search and explore each of the rows of your data. It can for example be used to embed a search engine for your data on a site. The results are presented in the form of cards which may contain images.

### Create a Cards and list visualization

Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Cards and list**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/liste-et-fiches-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu
The configuration menu contains five sub-menus: **Data**, **Thumbnail**, **Detailed card**, **Navigation** and **Display**.

#### 1.Data  
The **Data** submenu allows to choose a dataset and define **Predefined filters**. **Predefined filters** restrict the data displayed in the application. You can **Restrict to Values** from a column, **Restrict to Range of Values** from a column, or **Exclude Values\u200B\u200B** from a column.  

#### 2.Thumbnail


The **Thumbnail** sub-menu allows to choose the different fields displayed in the cards. If your dataset you contains the [concepts](./user-guide-backoffice/concept) **Label**, **Image** and **Description**, the application **List and Forms** will automatically display them in the cards.

#### 3.Detailed card

The **Detailed card** sub-menu allows to activate the detailed cards. When the option **Activate detailed cards** is selected, the cards become clickable and will display a larger and more detailed card according to the fields that you choose.

#### 4.Navigation

The **Navigation** sub-menu is used to manage the filters of your visualization. With filtering and sorting options, users will be able to explore your dataset smoothly.

#### 5.Display

The **Display** submenu allows to choose the rendering of the image on the thumbnail. The image can be displayed as a banner, logo or not displayed.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Liste et Fiches
section: 8
subsection : 1
updated: 2021-09-20
description : Explorer vos donn\xE9es
published: true
application : https://koumoul.com/apps/list-details/0.3/
---

La visualisation **Liste et Fiches** vous permet de filtrer, rechercher et explorer chacune des lignes de vos donn\xE9es. Elle peut par exemple \xEAtre utilis\xE9e pour embarquer dans un site un moteur de recherche de vos donn\xE9es. Les r\xE9sultats sont pr\xE9sent\xE9s sous forme de fiches pouvant contenir des images.

### Cr\xE9er une visualisation Liste et Fiches

Pour r\xE9aliser la visualisation, cliquez sur **Mes visualisations** puis sur **Cr\xE9er une visualisation**.


1. Choisir l'application **Liste et Fiches**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (consultation, plein \xE9cran, ... )
3. Menu de configuration
5. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/liste-et-fiches-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration
Le menu de configuration est compos\xE9 de cinq sous-menus : **Donn\xE9es**, **Vignette**, **Fiche d\xE9taill\xE9e**, **Navigation** et **Affichage**.


#### 1.Donn\xE9es

Le sous-menu **Donn\xE9es** vous permet de choisir un jeu de donn\xE9es et de d\xE9finir des **Filtres pr\xE9d\xE9finis**. Les **Filtres pr\xE9d\xE9finis** permettent de restreindre les donn\xE9es affich\xE9es dans l'application. Vous pouvez **Restreindre \xE0 des valeurs** d'une colonne,  **Restreindre \xE0 un intervalle de valeurs** d'une colonne ou **Exclure des valeurs** d'une colonne.

#### 2.Vignette

Le sous-menu **Vignette** permet de choisir les diff\xE9rents champs affich\xE9s dans les fiches. Si le jeu de donn\xE9es que vous avez choisi poss\xE8de les [concepts](./user-guide-backoffice/concept) **Libell\xE9**, **Image** et **Description**, l'application **Liste et Fiches** va, automatiquement, les afficher dans les fiches.

#### 3.Fiche d\xE9taill\xE9e

Le sous-menu **Fiche d\xE9taill\xE9e** permet d'activer les fiches d\xE9taill\xE9es. Lorsque l'option **Activer les fiches d\xE9taill\xE9es** est s\xE9lectionn\xE9e, les fiches deviennent cliquable et vont afficher une fiche plus grande et plus d\xE9taill\xE9e selon les champs \xE0 utiliser que vous aurez choisi.

#### 4.Navigation

Le sous-menu **Navigation** permet de g\xE9rer les filtres de votre visualisation. Avec des options de filtres et de tri, les utilisateurs vont pouvoir explorer votre jeu de donn\xE9es plus facilement et dynamiquement.

#### 5.Affichage

Le sous-menu **Affichage** permet de choisir le rendu de l'image sur la vignette. L'image peut \xEAtre affich\xE9e en banni\xE8re, en logo ou ne pas afficher l'image.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Organization management
section: 10
subsection : 1
updated: 2021-09-20
description : Invite members in your organization through their email.
published: true
---

As an administrator of your organization, the **Organization management** section is accessible in the Data Fair navigation bar.

On this page, you can manage the different members of your organization:
* Invite new members with their email
* Change members roles
* Exclude members

![Membres](./images/user-guide-backoffice/orga-membres.jpg)  
*Manage the members of your organization*

Changing roles and removing a member can be accomplished through the action buttons on the member's row.

### Invitation

To invite a member to your organization, all you need is their email.

![Invitation](./images/user-guide-backoffice/orga-invitation.jpg)  
*Invite members of your organization by email*

An invitation email is sent to their address.  
The email contains a link to validate the account on the platform and be part of your organization.  
Once logged in, the invited person will have access to the different pages of the organization according to the role you assigned them.

### Role

An organization allows people to work together on different datasets and visualizations.


Organizations follow this rules:
* Not all members of an organization have the same rights.
* Administrators of an organization can change the roles of different members of the organization.
* There are three different roles, user, contributor and administrator

<p>
</p>

Each role has different permissions:

| Actions | User  | Contributor | Administrator  |
| ----- | ---- | ---- | ---- |
| Add a dataset | | x | x |
| Read a dataset | x | x | x |
| Edit a dataset |  | x | x |
| Dataset administration  | |  | x |
| Add a visualization | | x | x |
| Read a visualization | x | x | x |
| Edit a visualization |  | x | x |
| Visualization administration | |  | x |
| Modify organization settings|  |  | x |
| Creation and modification of the portal |  |  | x |

Dataset or visualization administration is about deletion and visibility.  
The administrator is the only one who can publish or delete a dataset or a visualization.

If you need more permissions in your organizations, contact an administrator of the organization.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Gestion de l'organisation
section: 10
subsection : 1
updated: 2021-09-20
description : Inviter les membres de votre organisation gr\xE2ce \xE0 leur e-mail.
published: true
---

Lorsque vous \xEAtes administrateur de votre organisation, la section **Gestion de l'organisation** est accessible dans la barre de navigation de Data Fair.

Sur cette page, vous pouvez g\xE9rer les diff\xE9rents membres de votre organisation :
* Inviter de nouveaux membres par e-mail
* Changer le r\xF4le des membres
* Exclure un membre

![Membres](./images/user-guide-backoffice/orga-membres.jpg)  
*G\xE9rez les membres de votre organisation*

Le changement de r\xF4le et la suppression d'un membre peut \xEAtre accompli gr\xE2ce aux boutons d'actions de la ligne du membre.

### Invitation
Pour inviter un membre dans votre organisation, vous n'avez besoin que de son e-mail.

![Invitation](./images/user-guide-backoffice/orga-invitation.jpg)  
*Invitez les membres de votre organisation par email*

Un e-mail d'invitation est envoy\xE9 sur l'email renseign\xE9.  
L'email contient un lien pour cr\xE9er son compte sur la plateforme et faire partie de votre organisation.  
Une fois connect\xE9e, la personne invit\xE9e aura acc\xE8s aux diff\xE9rentes pages de l'organisation selon le r\xF4le que vous lui avez attribu\xE9.

### R\xF4les

Une organisation permet de travailler \xE0 plusieurs sur diff\xE9rents jeux de donn\xE9es et visualisations.  

Les organisations suivent certaines r\xE8gles :
* Tous les membres d'une organisation n'ont pas les m\xEAme droits.  
* Les administrateurs d'une organisation peuvent modifier les r\xF4les des diff\xE9rents membres de l'organisation.  
* Il existe trois r\xF4les diff\xE9rents, utilisateur, contributeur et administrateur.  

<p>
</p>

Chaque r\xF4le poss\xE8de des permissions diff\xE9rentes :

| Actions | Utilisateur | Contributeur | Administrateur |
| ----- | ---- | ---- | ---- |
| Ajout d'un jeu de donn\xE9es | | x | x |
| Lecture d'un jeu de donn\xE9es | x | x | x |
| Modification d'un jeu de donn\xE9es |  | x | x |
| Administration d'un jeu de donn\xE9es | |  | x |
| Ajout d'une visualisation | | x | x |
| Lecture d'une visualisation | x | x | x |
| Edition d'une visualisation |  | x | x |
| Administration d'une visualisation | |  | x |
| Acc\xE8s et modification des param\xE8tres de l'organisation|  |  | x |
| Cr\xE9ation et modification du portail de l'organisation |  |  | x |


L'administration d'un jeu de donn\xE9es (ou une visualisation) consiste dans la suppression et la visibilit\xE9.  
L'administrateur est le seul \xE0 pouvoir rendre public ou supprimer un jeu de donn\xE9es (ou une visualisation).

Si vous d\xE9sirez avoir plus de permissions dans une de vos organisations, contactez un administrateur de cette organisation.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Data Fair menu
section: 2
subsection : 1
updated: 2021-09-20
description : Menu
published: true
---

The menu allows to change the active account and access the **Notifications** and **Storage** pages of the account.

![Menu](./images/user-guide-backoffice/menu.jpg)  
*The menu is available at the top right*

In the image above, the active account is the **Koumoul** account. It is possible to switch accounts to your **personal account**.

### My account

The **My account** page provides access to your personal account information such as your registration email, your avatar, the first name, last name and birthday entered.  
You can renew your password in this section.

The **My Organizations** section displays a summary of the organizations you are a member.

It is also possible to delete your personal account.

![Compte](./images/user-guide-backoffice/menu-account.jpg)  
*Manage your personnal account*

### Notifications

The notifications page allows to configure various email or browser alerts you will receive.

![Notifications](./images/user-guide-backoffice/notify.jpg)  
*Select the notifications you want to receive*

When a notification is triggered, a colored dot is present on the bell at the top right of Data Fair.  
The bell display the summary of the alerts sent.

### Storage

The storage page presents a summary of the datasets in your account.  
**Statistics** of account are available such as number of datasets, total space consumed, total space available, and number of views.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Menu de Data Fair
section: 2
subsection : 1
updated: 2021-09-20
description : Menu
published: true
---

Le menu permet principalement de changer de compte actif et d'acc\xE9der aux pages de **Notifications** et **Stockage** du compte actif.

![Menu](./images/user-guide-backoffice/menu.jpg)  
*Menu d\xE9roulant disponible en haut \xE0 droite*

Sur l'image ci-dessus, le compte actif est le compte **Koumoul**, il est possible de changer de compte pour passer sur son **compte personnel**.

### Mon compte

La page **Mon compte** permet d'acc\xE9der aux informations de votre compte personnel telles que votre email d'inscription, votre avatar, le pr\xE9nom, nom et anniversaire renseign\xE9.  
Vous pouvez renouvel\xE9 votre mot de passe dans cette section.

La section **Mes organisations** affiche un r\xE9sum\xE9 des organisations dont vous \xEAtes membres.

Il est aussi possible de supprimer son compte personnel.

![Compte](./images/user-guide-backoffice/menu-account.jpg)


### Notifications

La page des notifications permet de param\xE9trer diff\xE9rentes alertes email ou navigateur que vous allez recevoir.  

![Notifications](./images/user-guide-backoffice/notify.jpg)  
*S\xE9lectionnez les notifications que vous souhaitez recevoir*

Lorsqu\u2019une notification est d\xE9clench\xE9e, une pastille color\xE9e est pr\xE9sente sur la cloche en haut \xE0 droite de Data Fair.  
Un clic sur la cloche permet d'acc\xE9der au r\xE9sum\xE9 des alertes envoy\xE9es.


### Stockage
La page de stockage pr\xE9sente un r\xE9sum\xE9 des jeux pr\xE9sents sur le compte actif.

Des **statistiques** de votre compte sont disponibles telles que le nombre de jeux de donn\xE9es, l'espace total consomm\xE9, l'espace total disponible et le nombre de visualisation.

Un d\xE9tail par jeu de donn\xE9es est pr\xE9sent\xE9 sous forme de tableau.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Navigate in Data Fair
section: 2
updated: 2021-09-20
description : An intuitive interface
published: true
---

The **Data Fair** interface allows to present your data in the form of APIs, data portal and interactive visualizations **without any code**.

**Data Fair** pages display five elements:

1. The navigation bar allows you to access the different sections
2. The breadcrumb trail allows you to know the section or sub-section displayed and to navigate in them.
3. Page content
4. Notifications and menu of the active account
5. Activity, actions and navigation in the content

![Navigation](./images/user-guide-backoffice/navigation.jpg)
*The Data Fair interface allows to quickly access your resources*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Naviguer dans votre espace Data Fair
section: 2
updated: 2021-09-20
description : Une interface intuitive
published: true
---

L'interface de **Data Fair** vous permet de pr\xE9senter vos donn\xE9es sous forme d'API, de portail de donn\xE9es et de visualisations interactives **sans avoir besoin de programmer**.

Les pages de **Data Fair** pr\xE9sentent cinq \xE9l\xE9ments :

1. La barre de navigation vous permet d\u2019acc\xE9der aux diff\xE9rentes sections
2. Le fil d'Ariane vous permet de connaitre la section ou sous-section affich\xE9e et de naviguer dans celles-ci
3. Contenu de la page
4. Notifications et menu du compte actif
5. Activit\xE9, actions et navigation dans le contenu

![Navigation](./images/user-guide-backoffice/navigation.jpg)
*L'interface de Data Fair vous permet d'acc\xE9der rapidement \xE0 vos ressources*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Graphs / Networks
section: 7
subsection : 5
updated: 2021-09-20
description :  View networks
published: true
application : https://koumoul.com/apps/data-fair-networks/0.1/
---

The **Graphs / Networks** visualization allows to generate dynamic graphs from two datasets, one containing the nodes and the other containing the links. An example is the [tag network in Stackoverflow](https://opendata.koumoul.com/reuses/reseau-de-tags-dans-stackoverflow).

### Create a Graphs / Networks visualization

Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Graphs / Networks**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/graphes-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu

The configuration menu contains two submenus: **Data** and **Render**.

#### 1.Dataset

In the **Data** menu, you choose the two datasets of your vizualization.

#### 2.Render

The **Render** menu allows to configure your graph.  
You can choose the rendering method, SVG or Canvas, the strength of the links to better space the nodes of your graph and the font size of your labels.

In the section **nodes** you configure the rendering of your nodes by choosing the size of your nodes, the field of the names of your nodes and the color of your nodes.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Graphes/R\xE9seaux
section: 7
subsection : 5
updated: 2021-09-20
description :  Visualiser des r\xE9seaux
published: true
application : https://koumoul.com/apps/data-fair-networks/0.1/
---

La visualisation **Graphes/R\xE9seaux** permet g\xE9n\xE9rer des graphes dynamiques \xE0 partir de deux jeux de donn\xE9es, l'un contenant les n\u0153uds et l'autre contenant les liens. Vous avez un exemple de cette visualisation sur le [r\xE9seau de tags dans Stackoverflow](https://opendata.koumoul.com/reuses/reseau-de-tags-dans-stackoverflow).

### Cr\xE9er votre graphe

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configuration une visualisation**.

1. Choisir l'application **Graphes/R\xE9seaux**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/graphes-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9 \xE0 tout moment.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration
Le menu de configuration est compos\xE9 de deux sous-menus : **Sources** et **Rendu**.

#### 1.Sources de Donn\xE9es

Dans le menu **Sources de Donn\xE9es**, vous choisissez les deux jeux de donn\xE9es que vous voulez utiliser.  

#### 2.Rendu

Le menu **Rendu** permet de configurer votre graphe.  
Vous pouvez choisir la m\xE9thode de rendu, SVG ou Canevas, la force des liens pour mieux espacer les n\u0153uds de votre graphe et la taille de la police de vos libell\xE9s.  

La section **n\u0153uds** vous param\xE9trer le rendu de vos n\u0153uds en choisissant la taille de vos n\u0153uds, le champ des noms de vos n\u0153uds et la couleur de vos n\u0153uds.  

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Organization
section: 10
updated: 2021-09-20
description : Create and manage your organization
published: true
---

An organization account allows to work together on the same datasets and visualizations with various persons.  
A personal account can create an organization.

### Create an organization

Organizations can be created in the **My Account** space of the the Data Fair menu.  
Click on the **Create an organization** button and fill in the title and description of your organization, you will then be the administrator of this new organization.

If you are an administrator of the organization, you can access [member management](./user-guide-backoffice/members). This allows you to invite members, define their roles, and remove members from your organization.

### Active account

If you are a member of an organization, you have access to the organization workspace.

![Compte actif](./images/user-guide-backoffice/organisation-menu.jpg)

On our capture, the **personal account** is active.
If you click on **Koumoul organization**, the active account will be the Koumoul organization account and you will have access to all the datasets and visualizations of the **Koumoul organization**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Organisation
section: 10
updated: 2021-09-20
description : Cr\xE9er et g\xE9rer son organisation
published: true
---
Une compte organisation vous permet de travailler \xE0 plusieurs sur les m\xEAme fichiers et visualisations.  
Un compte personnel peut cr\xE9er une ou plusieurs organisations en fonction de ses limites.

### Cr\xE9er une organisation

Les organisations peuvent \xEAtre cr\xE9\xE9es dans l'espace **Mon Compte** qui accessible par le menu de Data Fair en haut \xE0 droite.  
Cliquez sur le bouton **Cr\xE9er une organisation** et renseignez le titre et la description de votre organisation, vous serez alors administrateur de cette nouvelle organisation.

Si vous \xEAtes un administrateur de l'organisation, vous pouvez acc\xE9der \xE0 la [gestion des membres](./user-guide-backoffice/members). Vous pouvez ainsi inviter des membres, d\xE9finir leurs r\xF4les et supprimer des membres de votre organisation.

### Compte actif

Si vous faites partie d'une organisation, vous avez acc\xE8s \xE0 l'espace de travail de l'organisation.

![Compte actif](./images/user-guide-backoffice/organisation-menu.jpg)

Sur notre capture, le **compte personnel** est actif.
Si on clique sur **organisation Koumoul**, le compte actif sera celui de l'organisation Koumoul et nous aurons acc\xE8s \xE0 tous les jeux de donn\xE9es et visualisations de l'**organisation Koumoul**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Visualization settings
section: 5
subsection : 2
updated: 2021-09-20
description : Configure your visualizations within minutes
published: true
---
The configuration menu of a visualization is divided into several sections.

The **Save** button turns orange when you modify any element of the configuration of your application.


## Menu

The configuration menu contains the **Data**, **Data preparation**, **Presentation** sections.

![Menu de configuration d'une visualisation graphique](./images/user-guide-backoffice/Menu-graph.jpg)

### Data

The **Data** section is available in all the configuration menus and allows to choose the dataset represented in the visualization.

On some configurations, static filters or interactive filters can be defined. Filters allow to restrict data to some values \u200B\u200Bor exclude values. You control the lines thanks to these filters.

#### Static filters

Static filters allow you to perform a hard filter on your data.

### Data preparation

In this section, you can perform controls on the columns. You are able to define which columns you want to represent in your visualization.

### Presentation

This section allows to configure the graphical aspect of the visualization. You can change colors and define interactive filters for exemple.

#### Filters

Interactive filters allow to have a filter section displayed in your visualization. The visualization will be dynamically modified according to the value entered in the filter by the users.

## Map menu

The map visualization configuration menu contains the **Data**, **Render**, **Navigation** sections.

![Menu de configuration d'une visualisation cartographique](./images/user-guide-backoffice/Menu-carto.jpg)

### Render

In this section you have the possibility to:
* Fill in the field that corresponds to your legend.
* Modify the content of cards or tooltips.
* Display information specific to each of the visualizations.

### Navigation
This section groups the elements related to the navigation of your visualization. You can activate geolocation, define an initial position of the map or display an address search bar.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Param\xE8tres d'une visualisation
section: 5
subsection : 2
updated: 2021-09-20
description : Configurer ses visualisations en quelques minutes
published: true
---

Le menu de configuration d'une visualisation est divis\xE9 en plusieurs sections.  

Le bouton **Enregistrer** passe en orange lorsque vous avez modifi\xE9 la configuration de votre application. Les modifications ne seront pas prises en compte tant que vous n'avez pas appuy\xE9 sur le bouton enregistrer.


## Menu graphique
Le menu de configuration des visualisations graphiques se compose des sections **Sources de donn\xE9es**, **Pr\xE9paration des donn\xE9es**, **Pr\xE9sentation**.

![Menu de configuration d'une visualisation graphique](./images/user-guide-backoffice/Menu-graph.jpg)


### Source de donn\xE9es
La section **Source de donn\xE9es** (ou **Donn\xE9es**) est commune \xE0 tous les menus de configurations et permet de choisir le jeu de donn\xE9es \xE0 repr\xE9senter dans la visualisation.

Sur certaines configurations, on peut d\xE9finir des filtres statiques ou des filtres interactifs. Les filtres permettent restreindre les donn\xE9es \xE0 certaines valeurs ou d'exclure certaines valeurs. Vous pouvez r\xE9aliser un contr\xF4le sur les lignes gr\xE2ce \xE0 ces filtres.

#### Filtres statiques
Les filtres statiques permettent de r\xE9alis\xE9 un filtre en dur sur vos donn\xE9es.

### Pr\xE9paration des donn\xE9es

Dans cette section, vous pouvez r\xE9aliser un control sur les colonnes. Vous allez pouvoir d\xE9finir quelles sont les colonnes que vous voulez repr\xE9senter dans votre visualisation.

### Pr\xE9sentation
Cette section vous permet de configurer l'aspect graphique de la visualisation. Vous pouvez notamment modifier les couleurs et d\xE9finir des filtres interactifs.

#### Filtres interactifs
Les filtres interactifs permettent d'avoir une section de filtre affich\xE9e dans votre visualisation. Les utilisateurs de votre visualisation vont pouvoir renseigner une valeur dans votre filtre interactif. La visualisation sera dynamiquement modifi\xE9e par rapport \xE0 la valeur du filtre.

## Menu cartographique
Le menu de configuration des visualisations cartographiques se compose des sections **Sources de donn\xE9es**, **Options de rendu**, **Navigation**.

![Menu de configuration d'une visualisation cartographique](./images/user-guide-backoffice/Menu-carto.jpg)

### Options de rendu
Dans cette partie vous avez la possibilit\xE9 de :
* Renseigner le champs qui correspond \xE0 votre l\xE9gende.
* Modifier le contenu des fiches ou des infos-bulles.
* Afficher des informations sp\xE9cifiques \xE0 chacune des visualisations.

### Navigation
Cette section regroupe les \xE9l\xE9ments li\xE9s \xE0 la navigation de votre visualisation. Vous pouvez activer la g\xE9olocalisation, d\xE9finir une position initiale de la carte ou encore afficher une barre de recherche de position.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Account settings
section: 12
updated: 2021-09-20
description : Manage the settings of your Data Fair account
published: true
---

Account settings are accessible from the navigation bar.

Sections in the account settings:

* [Licenses and thematics](./user-guide-backoffice/licences-thematics)
* [API](./user-guide-backoffice/api)
* [Webhooks](./user-guide-backoffice/webhooks)  
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Param\xE8tres du compte
section: 12
updated: 2021-09-20
description : G\xE9rer les diff\xE9rents param\xE8tres de son compte Data Fair
published: true
---
Les param\xE8tres d'un compte sont accessibles \xE0 partir de la barre de navigation

Param\xE8tres d'un compte :
* [Licences et th\xE9matiques](./user-guide-backoffice/licences-thematics)
* [Acc\xE8s par API](./user-guide-backoffice/api)
* [Appels ext\xE9rieurs (Webhooks)](./user-guide-backoffice/webhooks)  
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Periodic series
section: 7
subsection : 8
updated: 2021-09-20
description :  Graphs on evolution of temporal data.
published: true
application : https://koumoul.com/apps/periodic-series/0.1/
---

The **Periodic series** visualization is used to visualize a series of data to compare its evolution over time over a period.  
You have an example of this visualization on the [temperature variation and comparison between oceanic / continental climate](https://opendata.koumoul.com/reuses/variation-de-temperature-comparaison-climat-oceanique-et-continental).

### Create your graph

Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Periodic series**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/periodic-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu

The configuration menu contains two submenus: **Data** and **Render**.  

#### 1.Data

In the **Data** menu, you choose the data set you want to use.  
**Filters** are used to restrict the data displayed in the application.  
You can **Restrict to Values** from a column, **Restrict Range of Values** from a column, or **Exclude Values** from a column.

The **Measurement** allows to choose the column of values you want to represent.
The **Metric** allows to perform a calculation on your data according to the period you have chosen.
The **Category** allows to choose a column to filter the **Mesurement** values of your visualization.
The **Transform the value** section allows to perform a calculation in the form of a formula on all the values.

#### 2.Render


In the **Render** menu , you choose the period of the graph and the unit of the graph.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Periodic series
section: 7
subsection : 8
updated: 2021-09-20
description :  Visualiser l'\xE9volution de donn\xE9es temporelles sur des graphiques.
published: true
application : https://koumoul.com/apps/periodic-series/0.1/
---

La visualisation **Periodic series** permet de visualiser une s\xE9rie de donn\xE9es pour comparer son \xE9volution au cours du temps sur une p\xE9riode. Vous avez un exemple de cette visualisation sur la [variation de temp\xE9rature et comparaison entre climat oc\xE9anique/continental](https://opendata.koumoul.com/reuses/variation-de-temperature-comparaison-climat-oceanique-et-continental).

### Cr\xE9er votre graphe

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configuration une visualisation**.

1. Choisir l'application **Periodic series**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/periodic-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9 \xE0 tout moment.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration
Le menu de configuration est compos\xE9 de deux sous-menus : **Donn\xE9es** et **Rendu**.

#### 1.Donn\xE9es

Dans le menu **Donn\xE9es**, vous choisissez le jeu de donn\xE9es que vous voulez utiliser.  
Les **Filtres** permettent de restreindre les donn\xE9es affich\xE9es dans l'application.  
Vous pouvez **Restreindre \xE0 des valeurs** d'une colonne,  **Restreindre \xE0 un intervalle de valeurs** d'une colonne ou **Exclure des valeurs** d'une colonne.

Le **Champ de mesure** permet de choisir la colonne des valeurs que vous souhaitez visualiser.  
La **M\xE9trique** permet de r\xE9aliser un calcul sur vos donn\xE9es selon la p\xE9riode que vous avez choisie.  
Le **Champ de la cat\xE9gorie** permet de choisir la colonne \xE0 repr\xE9senter sur votre visualisation.  
La section **Transformer la valeur** permet de r\xE9aliser un calcul sous forme de formule sur toute les valeurs.  

#### 2.Rendu

Dans le menu **Rendu**, vous choisissez  la p\xE9riode du graphique et l'unit\xE9 du graphique.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Configure your data portal
section: 11
updated: 2021-09-20
description : Configure your data portal for Open Data or to private share.
published: true
---

Data Fair allows to present your data in a portal.  
It is possible to configure **several portals** for the same account.  
Portals can be **public**, for open data, or **private** to share data internally.  

The portal configuration page is accessible through the navigation bar. A list of your portals is available.
You can **create, delete, configure and duplicate** your portals.

![Liste des portails](./images/user-guide-backoffice/portal-list.jpg)

## Configure a portal

A portal can be created with the **Create a new portal** button.  
A default configuration is available on your portal.

When setting up your portal, you are working on a **Draft**. Once you are satisfied with your draft, you can save it to **Current Version**.
The **Current version** is the version presented to the visitors of your portal.

The **portal configuration** interface is divided into 5 parts:

1. The configuration menu allows to modify the various parameters of your portal.
2. Allows you to switch from draft to current version
3. The preview allows you to view the draft or the current version of your portal.
4. The **Publish draft** button allows you to switch your draft to the current version. The **Reset** button allows to return to the default configuration.
5. Edit content pages, allows you to add new written page to your portal

![Configuration portail](./images/user-guide-backoffice/portal-config.jpg)  
*Customize your data portals, without code*

## Configuration menu
### General

The **General** section allows you to customize the elements common to the different portal pages such as colors, logo, main image and favicon.  
You can activate or remove the authentication for your portal (open data portal, public portal with certain data in private, private portal).  

It is possible to add several links in the footer.

### Home page
This section allows you to customize the home page.  
The main image can be displayed as a banner and it is also possible to display a visualization as a banner.  

An editorial text will be displayed by entering a **description**.  
It is possible to display the **key indicators**, the **thematics** and to highlight a visualization on your home page.  
You can also define the number of datasets and / or visualizations you want to highlight.  

### Content
The **content** section allows to set the navigation mode on the dataset and visualization pages.  
You can choose to have infinite scroll navigation or a pagination navigation.

### Communication & contact
Allows to enter your website, twitter, Facebook, linkedin, youtube and instagram account.  
By adding your contact email, the **Contact** page will be available in the navigation bar of your portal.

### Monitoring
The monitoring allows to configure the **activity tracking** used on your portal such as Matomo (Piwik) or Google Analytics.

### Technical settings
The technical settings allow you to customize the portal header and footer a little more.  
It is possible to modify these two sections with HTML and CSS code.

### Edit content pages

[Content pages](./user-guide-backoffice/content) allow to create different types of pages: articles, thematic pages around several datasets, news pages, data storytelling, licenses, conditions of use, etc. and to give them even more context or create dashboards integrating different data.

A page is created with 3 steps: First you choose the page template, then you fill in the different elements using a form adapted to the chosen page template with a preview of the result.  
It is possible to prepare pages and publish them later.  
In addition to entering free text, it is possible to integrate different types of elements: dataset table, visualizations, list of datasets, integration of external content, etc.  

![Configuration portail](./images/user-guide-backoffice/portal-contenu.jpg)  
*Customize your portal*

It's possible to chose the acces to the content pages of your portal. Links can be displayed on the navigation bar, or in a scroll menu.  

Content pages can be public or private.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Configurer son portail de donn\xE9es
section: 11
updated: 2021-09-20
description : Apprenez comment configurer votre solution pour diffuser vos donn\xE9es en interne ou en Open Data.
published: true
---

Data Fair vous permet de pr\xE9senter vos donn\xE9es dans un portail.  
Il est possible de configurer **plusieurs portails** pour le m\xEAme compte.  
Les portails peuvent \xEAtre **publics**, pour faire de l'open data, ou bien **priv\xE9s** pour partager et visualiser les donn\xE9es en interne.  

La page de configuration du portail est accessible par la barre de navigation. Une liste de vos portails est alors disponible.  
Vous pouvez **cr\xE9er, supprimer, acc\xE9der \xE0 la configuration et dupliquer** vos portails.

![Liste des portails](./images/user-guide-backoffice/portal-list.jpg)

## Configurer un portail

La cr\xE9ation est r\xE9alisable \xE0 partir du bouton **cr\xE9er un nouveau portail**.  
Une configuration par d\xE9faut est alors disponible sur votre portail.

Lors de la configuration de votre portail, vous travaillez sur un brouillon que l'on appelle **\xE9bauche**. Un fois que vous \xEAtes satisfait de votre \xE9bauche, vous pouvez la publier pour qu'elle passe en **Version courante**.  
La **Version courante** est la version qui est pr\xE9sent\xE9e aux diff\xE9rents visiteurs de votre portail.

L'interface de **configuration d'un portail** est divis\xE9e en 5 parties :

1. Le menu de configuration permet de modifier les diff\xE9rents param\xE8tres de votre portail
2. Vous permet de passer de l'\xE9bauche \xE0 la version courante
3. L'aper\xE7u permet de visualiser l'\xE9bauche ou la version courante de votre portail.
4. Le bouton **Publier l'\xE9bauche** permet de passer votre \xE9bauche en version courante. Le bouton **R\xE9initialiser** permet de revenir \xE0 la configuration par d\xE9faut.
5. Editer les pages de contenu, vous permet d'ajouter de nouvelle page r\xE9dig\xE9e \xE0 votre portail

![Configuration portail](./images/user-guide-backoffice/portal-config.jpg)  
*Personnalisez vos portails de donn\xE9es, sans avoir besoin de programmer*

## Menu de configuration
### G\xE9n\xE9ral

La section **G\xE9n\xE9ral** vous permet de personnaliser les \xE9l\xE9ments communs aux diff\xE9rentes pages du portail telles que les couleurs, le logo, l'image principale et le favicon.  

Vous pouvez activer ou d\xE9sactive l'authentification sur votre portail (portail open data, portail public avec certaines donn\xE9es en priv\xE9, portail priv\xE9).

Il est possible d'ajouter plusieurs liens dans le footer.

### Page d'accueil
Cette section permet de personnaliser la page d'accueil.  
L'image principale peut \xEAtre affich\xE9e en banni\xE8re et il est aussi possible de d'afficher une visualisation de diaporama pour obtenir un carrousel d'images.  

Une texte \xE9ditorial sera affich\xE9 en renseignant une **description**.  
Il est possible d'afficher les **chiffres cl\xE9s**, les **th\xE9matiques** et de mettre en avant une visualisation sur votre page d'accueil.  
Vous pouvez \xE9galement de d\xE9finir le nombre de jeux de donn\xE9es et/ou de visualisations que vous souhaitez mettre en avant.

### Contenu

La section de **contenu** vous permet de d\xE9finir le mode de navigation sur les pages des jeux de donn\xE9es et des visualisation.  
Vous pouvez choisir d'avoir une navigation en scroll infini ou avec une pagination.

### Communication & contact
Vous permet de renseigner votre site web, votre compte twitter, Facebook, linkedin et youtube.  
En ajoutant votre email de contact, la page de **Contact** sera disponible dans la barre de navigation de votre portail.

#### Suivi d'activit\xE9
Vous permet d'activer un **suivi d'activit\xE9** tel que Matomo (Piwik) ou Google Analytics.

### Param\xE9trage technique
Le param\xE9trage technique permet d'un peu plus personnaliser l'ent\xEAte et le pied de page du portail.  
Il est possible de modifier ces deux sections avec du code HTML et CSS.

##  Editer les pages de contenu

Les [pages de contenu](./user-guide-backoffice/content) permettent de cr\xE9er diff\xE9rents types de pages : articles, pages th\xE9matiques autour de plusieurs jeux de donn\xE9es, pages d'actualit\xE9s, data storytelling, licences, conditions d'utilisation, etc... Il est ainsi possible de mettre en avant certaines donn\xE9es et de leur donner encore plus de contexte par exemple, ou de faire des tableaux de bord int\xE9grant diff\xE9rentes donn\xE9es.

La cr\xE9ation d'une page se fait en 3 \xE9tapes : On choisit d'abord le mod\xE8le de page, puis on renseigne les diff\xE9rents \xE9l\xE9ments au moyen d'un formulaire adapt\xE9 au mod\xE8le de page choisi avec une pr\xE9visualisation du r\xE9sultat. Il est possible de pr\xE9parer des pages en avance et de les publier plus tard. En plus de la saisie de texte libre, il est possible d'int\xE9grer diff\xE9rents types d'\xE9l\xE9ments : tableau d'un jeu de donn\xE9es, visualisation, liste de jeux de donn\xE9es, int\xE9gration de contenu externe, etc...

![Configuration portail](./images/user-guide-backoffice/portal-contenu.jpg)  
*Personnalisez votre portail*

Pour acc\xE9der aux pages de contenu cr\xE9\xE9es, il est possible de renseigner des liens dans la barre de navigation. Les liens peuvent appara\xEEtre directement dans la barre, ou dans un menu ajout\xE9 \xE0 celle-ci.

Il est possible de cr\xE9er des pages publiques ou des pages priv\xE9es.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Periodic processings
section: 14
updated: 2021-09-20
description : Process and update your data frequently
published: true
---

**Periodic processing** allows to fetch data, transform it and publish it on the platform.  
They can be used for **automatic data update** on regular intervals.

Periodic processing differs from [catalog connectors](./user-guide-backoffice/catalogues) on several points:

* Processing are limited to a small set of input and output sources. Typically, it can retrieve data in one place, metadata in another, and dump the data into a Data Fair source.
* **Collection frequencies can be higher**: Data can be collected with a few seconds intervals, which is suitable for publishing IOT data.

![Traitements p\xE9riodiques](./images/user-guide-backoffice/processings.jpg)  
*Collect, transform and publish your data automatically*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Traitements p\xE9riodiques
section: 14
updated: 2021-09-20
description : Automatisation de vos donn\xE9es \xE0 l'aide des traitements p\xE9riodiques
published: true
---

Les **traitements p\xE9riodiques** vont chercher des donn\xE9es \xE0 certains endroits, les transforment et les publient sur la plateforme.
Ils peuvent ainsi \xEAtre utilis\xE9 pour la **mise \xE0 jour automatique de donn\xE9es** \xE0 intervalle r\xE9guli\xE8res.

Les traitements p\xE9riodiques se diff\xE9rencient des connecteurs de [catalogues](./user-guide-backoffice/catalogues) sur plusieurs points :

* Un traitement est limit\xE9 \xE0 un ensemble r\xE9duit de sources en entr\xE9e et en sortie. Typiquement, il peut r\xE9cup\xE9rer des donn\xE9es \xE0 un endroit, les m\xE9tadonn\xE9es \xE0 un autre, et d\xE9verser les donn\xE9es dans une source de Data Fair.
* Les **fr\xE9quences de collecte peuvent \xEAtre plus \xE9lev\xE9es** : on peut collecter les donn\xE9es avec quelques secondes d\u2019intervalle, ce qui est adapt\xE9 \xE0 la publication des donn\xE9es IOT.

![Traitements p\xE9riodiques](./images/user-guide-backoffice/processings.jpg)  
*Collectez, transformez et publiez vos donn\xE9es automatiquement*
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Waffle Charts
section: 7
subsection : 2
updated: 2021-09-20
description : Comparison of proportions
published: true
application : https://koumoul.com/apps/data-fair-proportions/0.2/
---

The **Waffle Charts** visualization provide an intuitive overview of proportions in a dataset and the ability to compare them based on different categories / variables.  
For example, they can be used to highlight indicators of achievement of objectives.

## Create your waffle charts

To configure a **Waffle Charts** visualization, click on **Visualizations** in the navigation bar, then on **Configure visualization**.  

1. Choose the application **Waffle Charts**
2. Enter the title of your visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/proportion-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

## Configuration menu

The configuration menu contains two submenus: **Data** and **Render**.

### Data

In the **Data** menu, you can choose the data set you want to use.  
The **Value to compare** section allows to define the comparison field of the 100 squares of a "waffle".  
The **Category** section allows to define the number of different waffles you will display on your visualization.

The **Calculation** section allows to add a sum to a column or to count the rows
The **Calculate Field** section allows to define the column that contains the values \u200B\u200Bfor your sum.  

**Filters** are used to restrict the data displayed in the application.

### Render

The **Render** menu is used to modify the displayed icon in the waffles and to choose the colors.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Diagramme de comparaison de proportions
section: 7
subsection : 2
updated: 2021-09-20
description : Diagramme de comparaison de proportions
published: true
application : https://koumoul.com/apps/data-fair-proportions/0.2/
---

La visualisation \xAB Waffle Charts \xBB ou \xAB Graphiques en gaufre \xBB offrent un aper\xE7u intuitif de proportions dans un ensemble de donn\xE9es et la possibilit\xE9 de les comparer en fonction de diff\xE9rentes cat\xE9gories/variables.  
Elles peuvent \xEAtre utilis\xE9s pour mettre en avant des indicateurs de r\xE9alisation d'objectifs par exemple.

Pour configurer une visualisation **Comparaison de proportions**, choisissez le compte actif sur lequel vous voulez travailler. Votre compte actif contient au mois un jeu de donn\xE9es avec des donn\xE9es textuelles.

### Cr\xE9er votre diagramme de comparaison de proportions

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configuration une visualisation**.

1. Choisir l'application **Comparaison de proportions**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/proportion-config.jpg)


Le titre de la visualisation peut \xEAtre modifi\xE9 \xE0 tout moment.  
Les informations vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration


Le menu de configuration est compos\xE9 de deux sous-menus : **Donn\xE9es** et **Rendu**.

#### 1.Donn\xE9es

Dans le menu **Donn\xE9es**, vous pouvez choisir le jeu de donn\xE9es que vous voulez utiliser.  
La section **Champ de la valeur \xE0 comparer** vous permet de d\xE9finir le champ de comparaison des 100 carr\xE9s d'une "gaufre".  
La section **Champ de cat\xE9gorie** vous permet de d\xE9finir le champ qui va d\xE9finir le nombre de gaufres diff\xE9rentes que vous allez obtenir sur votre visualisation.  

La section **Type de calcul** vous permet de r\xE9aliser une somme sur une colonne ou de d\xE9compter les lignes.  
La section **Champ sur lequel calculer la somme** vous permet de d\xE9finir la colonne qui contient les valeurs pour votre somme.

Les **Filtres** permettent de restreindre les donn\xE9es affich\xE9es dans l'application.

#### 2.Rendu

Le menu **Rendu** permet modifier l'icone d'affichage dans les gaufre et de renseigner les couleurs de diff\xE9rentiation.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Network diagram
section: 7
subsection : 6
updated: 2021-09-20
description :  Visualize interconnections between nodes
published: true
application : https://koumoul.com/apps/data-fair-relations/0.2/
---

Network diagram allows to generate dynamic graphs from two datasets, one containing the nodes and the other containing the links between the nodes.  
An example of this visualization is the [relationship between the players of the France team and their clubs](https://opendata.koumoul.com/reuses/relation-entre-les-joueurs-de-l'equipe-de-france-et-leurs-clubs).

## Create your Network diagram

To configure a **Network diagram** visualization, click on **Visualizations** in the navigation bar, then on **Configure visualization**.  

1. Choose the application **Network diagram**
2. Enter the title of your visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/relation-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

## Configuration menu

The configuration menu contains three submenus: **Data**, **Nodes** and **Links**.

### Data
In the **Data** menu, you choose the dataset you want to use.

### Nodes
The **Nodes** menu allows to customize the two types of nodes in your visualization.  
It is possible to modify the color and the icon representing your nodes.

You can customize the spacing of the nodes, sum or count the rows, the minimum and maximum size of the nodes as well as the size of the font of the nodes.

### Links

The **Links** menu allows you to configure the size, minimum and maximum size of links. The thickness of the links corresponds to the force between the different nodes.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: R\xE9seau de relations
section: 7
subsection : 6
updated: 2021-09-20
description :  R\xE9seau de relations
published: true
application : https://koumoul.com/apps/data-fair-relations/0.2/
---

La visualisation **R\xE9seau de relations** permet g\xE9n\xE9rer des graphes dynamiques \xE0 partir de deux jeux de donn\xE9es, l'un contenant les n\u0153uds et l'autre contenant les liens. Vous avez un exemple de cette visualisation sur la [relation entre les joueurs de l'\xE9quipe de France et leurs clubs](https://opendata.koumoul.com/reuses/relation-entre-les-joueurs-de-l'equipe-de-france-et-leurs-clubs).

## Cr\xE9er votre graphe

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configuration une visualisation**.

1. Choisir l'application **R\xE9seau de relations**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/relation-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9 \xE0 tout moment.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

## Menu de configuration
Le menu de configuration est compos\xE9 de trois sous-menus : **Donn\xE9es**, **N\u0153uds** et **Liens**.

### Donn\xE9es

Dans le menu **Donn\xE9es**, vous choisissez le jeu de donn\xE9es que vous voulez utiliser.  

### N\u0153uds

Le menu **N\u0153uds** vous permet de personnaliser les deux types de n\u0153uds de votre visualisation.  
Il est possible de modifier la couleur et l'icone repr\xE9sentant vos types de n\u0153uds.  

Les options permettent de param\xE9trer l'\xE9cartement des n\u0153uds, le calcul r\xE9alis\xE9 sur les n\u0153uds, la taille minimale et maximale des n\u0153uds ainsi que la taille de la police des n\u0153uds.

### Liens

Le menu **Liens** permet de configurer la taille la taille minimale et maximale des liens. L'\xE9paisseur des liens correspond \xE0 la force entre les diff\xE9rents n\u0153uds.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Map visualizations
section: 6
updated: 2021-09-20
description : Map visualizations
published: true
---

Map visualizations allow to project your geographic data on a map using [concepts](./user-guide-backoffice/concept) latitude, longitude or geometry.

![Visualisations Carto](./images/user-guide-backoffice/visu-carto.jpg)

* [Carto-stats](./user-guide-backoffice/carto-stats) allows to project statistical data. [Cycling accidents in France](https://opendata.koumoul.com/reuses/cartographie-des-accidents-de-velo)
* [Administrative divisions](./user-guide-backoffice/div-admin) allows to project data at the level of the municipality, the department or the region. [Students in the private sector in France](https://opendata.koumoul.com/reuses/ratio-public-prive-du-nombre-d'eleves-dans-les-ecoles-par-commune).
* [G\xE9o Shapes](./user-guide-backoffice/geo-shapes) allows to project geometric shapes such as local urbanization plans or networks (energy, road). [Angers local urbanization plan zones](https://opendata.koumoul.com/reuses/plu-zone-urba-angers-loire-metropole)
* [Parcel info](./user-guide-backoffice/infos-parcelles) allows to project your data on the French cadastral map. [MAJIC - Legal persons Parcels](https://opendata.koumoul.com/reuses/carte-des-parcelles-des-personnes-morales-majic)
* [Location info](./user-guide-backoffice/infos-localisations) allows to project your data and create cards on each marker. The cards can display images, links, descriptions, etc ... [European Heritage Days 2019](https://opendata.koumoul.com/reuses/carte-des-evenements-des-journees-europeennes-du-patrimoine-en-france-2019)
* [Catchment areas](./user-guide-backoffice/catchment-area) allows to project areas of influence or indicators according to common codes. Geometries are calculated based on the values \u200B\u200Bin your data. [Territorial jurisdiction of the national police and gendarmerie](https://opendata.koumoul.com/reuses/competence-territoriale-gendarmerie-et-police-nationales)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Visualisations cartographiques
section: 6
updated: 2021-09-20
description : Visualisations cartographiques
published: true
---

Les visualisations cartographiques vous permettent de projeter vos donn\xE9es g\xE9olocalis\xE9es sur une carte \xE0 l'aide des [concepts](./user-guide-backoffice/concept) latitude, longitude ou g\xE9om\xE9trie.

![Visualisations Carto](./images/user-guide-backoffice/visu-carto.jpg)

* [Carto-stats](./user-guide-backoffice/carto-stats) vous permet de projeter vos donn\xE9es li\xE9es \xE0 des donn\xE9es num\xE9riques. [Les accidents de v\xE9lo en France](https://opendata.koumoul.com/reuses/cartographie-des-accidents-de-velo)
* [Divisions administratives](./user-guide-backoffice/div-admin) vous permet de projeter des donn\xE9es au niveau de la commune, du d\xE9partement, ou de la r\xE9gion. [Part des \xE9l\xE8ves dans le priv\xE9 en France](https://opendata.koumoul.com/reuses/ratio-public-prive-du-nombre-d'eleves-dans-les-ecoles-par-commune)
* [G\xE9o Shapes](./user-guide-backoffice/geo-shapes) vous permet de projeter des donn\xE9es contenant des formes g\xE9om\xE9triques telles que des zones de PLU ou des r\xE9seaux (\xE9nerg\xE9tiques, routiers). [Zones PLU d'Angers](https://opendata.koumoul.com/reuses/plu-zone-urba-angers-loire-metropole)
* [Infos-parcelles](./user-guide-backoffice/infos-parcelles) vous permet de projeter vos donn\xE9es sur le plan cadastral fran\xE7ais. [Exemple sur une partie de la base MAJIC des parcelles des personnes morales](https://opendata.koumoul.com/reuses/carte-des-parcelles-des-personnes-morales-majic)
* [Infos-localisations](./user-guide-backoffice/infos-localisations) vous permet de projeter vos donn\xE9es et de cr\xE9er des fiches sur chaque marqueur. Les fiches peuvent contenir des images, des liens, des descriptions, etc... [Les journ\xE9es europ\xE9ennes du patrimoine 2019](https://opendata.koumoul.com/reuses/carte-des-evenements-des-journees-europeennes-du-patrimoine-en-france-2019)
* [Zones de chalandise](./user-guide-backoffice/catchment-area) vous permet de projeter des zones d'influence ou des indicateurs selon les codes communes. Les g\xE9om\xE9tries sont calcul\xE9es selon les valeurs de vos donn\xE9es. [Comp\xE9tence territoriale gendarmerie et police nationales](https://opendata.koumoul.com/reuses/competence-territoriale-gendarmerie-et-police-nationales)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Visualizations
section: 5
updated: 2021-09-20
description : Visualizations
published: true
---

The services connected to Data Fair allow to present your data in **dynamic visualizations** and to make it more **accessible**.  
You can create as many visualizations as you want.

The visualizations are divided into several categories: maps, graphics, textual visualizations, etc.

## Map visualizations

Map visualizations allow to project your geographic data on a map using [concepts](./user-guide-backoffice/concept) latitude, longitude or geometry.

![Visualisations Carto](./images/user-guide-backoffice/visu-carto.jpg)

* [Carto-stats](./user-guide-backoffice/carto-stats) allows to project statistical data. [Cycling accidents in France](https://opendata.koumoul.com/reuses/cartographie-des-accidents-de-velo)
* [Administrative divisions](./user-guide-backoffice/div-admin) allows to project data at the level of the municipality, the department or the region. [Students in the private sector in France](https://opendata.koumoul.com/reuses/ratio-public-prive-du-nombre-d'eleves-dans-les-ecoles-par-commune).
* [G\xE9o Shapes](./user-guide-backoffice/geo-shapes) allows to project geometric shapes such as local urbanization plans or networks (energy, road). [Angers local urbanization plan zones](https://opendata.koumoul.com/reuses/plu-zone-urba-angers-loire-metropole)
* [Parcel info](./user-guide-backoffice/infos-parcelles) allows to project your data on the French cadastral map. [MAJIC - Legal persons Parcels](https://opendata.koumoul.com/reuses/carte-des-parcelles-des-personnes-morales-majic)
* [Location info](./user-guide-backoffice/infos-localisations) allows to project your data and create cards on each marker. The cards can display images, links, descriptions, etc ... [European Heritage Days 2019](https://opendata.koumoul.com/reuses/carte-des-evenements-des-journees-europeennes-du-patrimoine-en-france-2019)
* [Catchment areas](./user-guide-backoffice/catchment-area) allows to project areas of influence or indicators according to common codes. Geometries are calculated based on the values \u200B\u200Bin your data. [Territorial jurisdiction of the national police and gendarmerie](https://opendata.koumoul.com/reuses/competence-territoriale-gendarmerie-et-police-nationales)

## Graphic visualizations

Graphic visualizations allow to represent your data on different perspective visualizations.

![Visualisations graphiques](./images/user-guide-backoffice/visu-graphs.jpg)

* [Bar chart race](./user-guide-backoffice/bar-chart-race) allows to represent ranking data over time. [The evolution of french wages by region between 1966 and 2010](https://opendata.koumoul.com/reuses/evolution-des-salaires-selon-la-region-entre-1966-et-2010)
* [Waffle Charts](./user-guide-backoffice/proportion) allows to visualize the distribution of your data in percentage in the form of 100 squares and to compare them according to different variables. [Rating of the 2018 baccalaureate results](https://opendata.koumoul.com/reuses/proportions-des-resultats-du-baccalaureat)
* [Sunburst diagram](./user-guide-backoffice/sunburst) represent hierarchical data. [Subsidies to associations of Poitiers](https://opendata.koumoul.com/reuses/repartition-des-subventions-aux-associations-de-poitiers-par-secteur-d'activite)
* [Sankey diagram](./user-guide-backoffice/sankey) represent flow data.[Energy class / GHG relationship of housing built since 2010](https://opendata.koumoul.com/reuses/relation-entre-classes-energetiques-et-ges-dans-les-logements)
* [Graphs / Networks](./user-guide-backoffice/network) and [Network diagram](./user-guide-backoffice/relations) allow to represent your relational data containing nodes and links. [Tag network in Stackoverflow](https://opendata.koumoul.com/reuses/reseau-de-tags-dans-stackoverflow) or [Relationship between the players of the France team and their clubs](https://opendata.koumoul.com/reuses/relation-entre-les-joueurs-de-l'equipe-de-france-et-leurs-clubs)
* [Graphics](./user-guide-backoffice/charts) allows to represent your data in different types of graphs, such as histograms, area graphs, lines, etc. [Various examples on the page of energy performance diagnostics for housing](https://opendata.koumoul.com/datasets/dpe-logements)
* [Periodic Series](./user-guide-backoffice/periodic-series) allows to represent temporal data in an animated curve or radar. [Oceanic and continental climate comparison](https://opendata.koumoul.com/reuses/variation-de-temperature-comparaison-climat-oceanique-et-continental)

## Textual visualizations

Textual visualizations can represent the majority of your data.

![Visualisations texte](./images/user-guide-backoffice/visu-text.jpg)

* [List and Cards](./user-guide-backoffice/liste-fiches) allows to create a search engine to explore your data. [List of educational establishments in France](https://opendata.koumoul.com/reuses/liste-des-etablissements-de-l'education-en-france)
* [Word clouds](./user-guide-backoffice/word-cloud) allows you to generate a word cloud with your data. [French first names proportions in 1900](https://opendata.koumoul.com/reuses/prenom-par-annee)

## Gamification

Game visualizations present your data in mini-games. Gamification challenge your visitors, they will be able to test their knowledge and learn about your data.

![Visualisations texte](./images/user-guide-backoffice/visu-jeu.jpg)

* [Quiz](./user-guide-backoffice/game-quizz) : allows to create a quiz in which you need to match the labels to images or descriptions. [French Science Day 2019](https://opendata.koumoul.com/reuses/quizz-fete-de-la-science-2019)
* [Location game](./user-guide-backoffice/game-localisation) : allows to create a blind map to locate geographic points of your data. [Locate the capitals of the world](https://opendata.koumoul.com/reuses/localisez-les-capitales-du-monde)
* [Sort game](./user-guide-backoffice/game-sort) : allows to create a numeric sorting game based on your data to get a score. [Rank the top scorers of the Euro](https://opendata.koumoul.com/reuses/classez-les-meilleurs-buteurs-de-l'euro).

## Visualisations SCDL

SCDL visualizations make it possible to represent data respecting the format of the [Common Base of Local Data](https://www.opendatafrance.net/scdl/) (SCDL).
* **SCDL-Deliberations** allows you to view administrative decisions. [Grand Poitiers deliberations](https://opendata.koumoul.com/reuses/deliberations-grand-poitiers)
* **SCDL-Equiements** allows you to view the equipment of a territory on a map
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Visualisations
section: 5
updated: 2021-09-20
description : Visualisations
published: true
---

Les services compl\xE9tant Data Fair permettent de pr\xE9senter vos donn\xE9es dans des **visualisations dynamiques** et ainsi rendre vos donn\xE9es plus **accessibles**.  
Vous pouvez cr\xE9er autant de visualisations que vous le d\xE9sirez.  

Les visualisations sont reparties en plusieurs cat\xE9gories : les cartes, les graphiques, les visualisations textuelles, etc....

## Visualisations cartographiques

Les visualisations cartographiques vous permettent de projeter vos donn\xE9es g\xE9olocalis\xE9es sur une carte \xE0 l'aide des [concepts](./user-guide-backoffice/concept) latitude, longitude ou g\xE9om\xE9trie.

![Visualisations Carto](./images/user-guide-backoffice/visu-carto.jpg)

* [Carto-stats](./user-guide-backoffice/carto-stats) vous permet de projeter vos donn\xE9es li\xE9es \xE0 des donn\xE9es num\xE9riques. [Les accidents de v\xE9lo en France](https://opendata.koumoul.com/reuses/cartographie-des-accidents-de-velo)
* [Divisions administratives](./user-guide-backoffice/div-admin) vous permet de projeter des donn\xE9es au niveau de la commune, du d\xE9partement, ou de la r\xE9gion. [Part des \xE9l\xE8ves dans le priv\xE9 en France](https://opendata.koumoul.com/reuses/ratio-public-prive-du-nombre-d'eleves-dans-les-ecoles-par-commune)
* [G\xE9o Shapes](./user-guide-backoffice/geo-shapes) vous permet de projeter des donn\xE9es contenant des formes g\xE9om\xE9triques telles que des zones de PLU ou des r\xE9seaux (\xE9nerg\xE9tiques, routiers). [Zones PLU d'Angers](https://opendata.koumoul.com/reuses/plu-zone-urba-angers-loire-metropole)
* [Infos-parcelles](./user-guide-backoffice/infos-parcelles) vous permet de projeter vos donn\xE9es sur le plan cadastral fran\xE7ais. Vous pouvez ajouter une l\xE9gende selon vos donn\xE9es. [Exemple sur une partie de la base MAJIC des parcelles des personnes morales](https://opendata.koumoul.com/reuses/carte-des-parcelles-des-personnes-morales-majic)
* [Infos-localisations](./user-guide-backoffice/infos-localisations) vous permet de projeter vos donn\xE9es et de cr\xE9er des fiches sur chaque marqueur. Les fiches peuvent contenir des images, des liens, des descriptions, etc... [Les journ\xE9es europ\xE9ennes du patrimoine 2019](https://opendata.koumoul.com/reuses/carte-des-evenements-des-journees-europeennes-du-patrimoine-en-france-2019)
* [Zones de chalandise](./user-guide-backoffice/catchment-area) vous permet de projeter des zones d'influence ou des indicateurs selon les codes communes. Les g\xE9om\xE9tries sont calcul\xE9es selon les valeurs de vos donn\xE9es. [Comp\xE9tence territoriale gendarmerie et police nationales](https://opendata.koumoul.com/reuses/competence-territoriale-gendarmerie-et-police-nationales)

## Visualisations graphiques

Les visualisations graphiques vous permettent de repr\xE9senter vos donn\xE9es sous diff\xE9rents angles.

![Visualisations graphiques](./images/user-guide-backoffice/visu-graphs.jpg)

* [Bar chart race](./user-guide-backoffice/bar-chart-race) permet de repr\xE9senter des donn\xE9es de classement \xE0 travers le temps. [L'\xE9volution des salaires selon la r\xE9gion entre 1966 et 2010](https://opendata.koumoul.com/reuses/evolution-des-salaires-selon-la-region-entre-1966-et-2010)
* [Comparaison de proportion](./user-guide-backoffice/proportion) permet de visualiser la distribution de vos donn\xE9es en pourcentage sous la forme de 100 carr\xE9s et la possibilit\xE9 de les comparer en fonction de diff\xE9rentes variables. [R\xE9partition des mentions aux r\xE9sultats du baccalaur\xE9at 2018](https://opendata.koumoul.com/reuses/proportions-des-resultats-du-baccalaureat)
* [Diagramme Sunburst](./user-guide-backoffice/sunburst) permet de repr\xE9senter des donn\xE9es hi\xE9rarchiques. [Subventions aux associations de Poitiers](https://opendata.koumoul.com/reuses/repartition-des-subventions-aux-associations-de-poitiers-par-secteur-d'activite)
* [Diagramme de Sankey](./user-guide-backoffice/sankey) permet de repr\xE9senter des donn\xE9es de flux. [Relation classe \xE9nerg\xE9tiques/GES de logements construits depuis 2010](https://opendata.koumoul.com/reuses/relation-entre-classes-energetiques-et-ges-dans-les-logements)
* [Graphes/R\xE9seaux](./user-guide-backoffice/network) et [R\xE9seau de relations](./user-guide-backoffice/relations) permettent de repr\xE9senter vos donn\xE9es relationnelles contenants des n\u0153uds et des liens. [R\xE9seau de tags dans Stackoverflow](https://opendata.koumoul.com/reuses/reseau-de-tags-dans-stackoverflow) ou [Relation entre les joueurs de l'\xE9quipe de France et leurs clubs](https://opendata.koumoul.com/reuses/relation-entre-les-joueurs-de-l'equipe-de-france-et-leurs-clubs)
* [Graphiques](./user-guide-backoffice/charts) permet de repr\xE9senter vos donn\xE9es dans diff\xE9rents type de graphiques, tels que des histogrammes, des graphiques d'aires, de lignes, etc... [Diff\xE9rents exemples sur la page des diagnostiques de performance \xE9nerg\xE9tique pour les logements](https://opendata.koumoul.com/datasets/dpe-logements)
* [Periodic Series](./user-guide-backoffice/periodic-series) permet de repr\xE9senter des donn\xE9es temporelles sous forme de courbe ou de radar anim\xE9s. [Comparaison climat oc\xE9anique et continental](https://opendata.koumoul.com/reuses/variation-de-temperature-comparaison-climat-oceanique-et-continental)


## Visualisations textuelles

Les visualisations textuelles peuvent repr\xE9senter la majorit\xE9 de vos donn\xE9es.

![Visualisations texte](./images/user-guide-backoffice/visu-text.jpg)

* [Liste et Fiches](./user-guide-backoffice/liste-fiches) vous permet de cr\xE9er un moteur de recherche pour pouvoir explorer vos donn\xE9es. [Liste des \xE9tablissements de l'\xE9ducation en France](https://opendata.koumoul.com/reuses/liste-des-etablissements-de-l'education-en-france)
* [Nuages de mots](./user-guide-backoffice/word-cloud) vous permet de g\xE9n\xE9rer un nuage de mots avec vos donn\xE9es. [Les pr\xE9noms majoritaires en 1900](https://opendata.koumoul.com/reuses/prenom-par-annee)

## Visualisations Jeux

Les visualisations jeux pr\xE9sentent vos donn\xE9es sous forme de mini-jeux. La gamification permet d'explorer les donn\xE9es sous forme de challenge. Les visiteurs vont pouvoir tester leurs connaissances sur les donn\xE9es.

![Visualisations texte](./images/user-guide-backoffice/visu-jeu.jpg)

* [Quizz](./user-guide-backoffice/game-quizz) : vous permet de cr\xE9er un quizz dans lequel il faut faire correspondre les libell\xE9s \xE0 des images ou des descriptions. [F\xEAte de la science 2019](https://opendata.koumoul.com/reuses/quizz-fete-de-la-science-2019)
* [Jeu de localisation](./user-guide-backoffice/game-localisation) : vous permet de cr\xE9er une carte aveugle de localisation des points g\xE9ographiques de vos donn\xE9es. [Localisez les capitales du monde](https://opendata.koumoul.com/reuses/localisez-les-capitales-du-monde)
* [Jeu de tri](./user-guide-backoffice/game-sort): vous permet de cr\xE9er un jeu de tri de valeurs num\xE9rique sur vos donn\xE9es afin d\u2019obtenir un score. [Classez les meilleurs buteurs de l'Euro](https://opendata.koumoul.com/reuses/classez-les-meilleurs-buteurs-de-l'euro)

## Visualisations SCDL

Les visualisations SCDL permettent de repr\xE9senter des donn\xE9es respectant le format du [Socle Commune des Donn\xE9es Locales](https://www.opendatafrance.net/scdl/) (SCDL). Cette section est en cours de d\xE9veloppement selon les besoins.

* **SCDL-D\xE9liberations** vous permet de visualiser d\xE9lib\xE9rations. [D\xE9lib\xE9rations de Grand Poitiers](https://opendata.koumoul.com/reuses/deliberations-grand-poitiers)
* **SCDL-Equiements** vous permet de visualiser les \xE9quipements d'un territoire sur une carte. [Les \xE9quipements publics de la ville de Rambouillet](https://opendata.koumoul.com/reuses/equipements-publics-de-la-ville-de-rambouillet)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Gamification
section: 9
updated: 2021-09-20
description : Gamification
published: true
---

Game visualizations present your data in mini-games. Gamification challenge your visitors, they will be able to test their knowledge and learn about your data.

![Visualisations texte](./images/user-guide-backoffice/visu-jeu.jpg)

* [Quiz](./user-guide-backoffice/game-quizz) : allows to create a quiz in which you need to match the labels to images or descriptions. [French Science Day 2019](https://opendata.koumoul.com/reuses/quizz-fete-de-la-science-2019)
* [Location game](./user-guide-backoffice/game-localisation) : allows to create a blind map to locate geographic points of your data. [Locate the capitals of the world](https://opendata.koumoul.com/reuses/localisez-les-capitales-du-monde)
* [Sort game](./user-guide-backoffice/game-sort) : allows to create a numeric sorting game based on your data to get a score. [Rank the top scorers of the Euro](https://opendata.koumoul.com/reuses/classez-les-meilleurs-buteurs-de-l'euro).
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Visualisations de jeux
section: 9
updated: 2021-09-20
description : Visualisations
published: true
---

Les visualisations jeux pr\xE9sentent vos donn\xE9es sous forme de mini-jeux. La gamification permet d'explorer les donn\xE9es sous forme de challenge. Les visiteurs vont pouvoir tester leurs connaissances sur les donn\xE9es.

![Visualisations texte](./images/user-guide-backoffice/visu-jeu.jpg)

* [Quizz](./user-guide-backoffice/game-quizz) : vous permet de cr\xE9er un quizz dans lequel il faut faire correspondre les libell\xE9s \xE0 des images ou des descriptions. [F\xEAte de la science 2019](https://opendata.koumoul.com/reuses/quizz-fete-de-la-science-2019)
* [Jeu de localisation](./user-guide-backoffice/game-localisation) : vous permet de cr\xE9er une carte aveugle de localisation des points g\xE9ographiques de vos donn\xE9es. [Localisez les capitales du monde](https://opendata.koumoul.com/reuses/localisez-les-capitales-du-monde)
* [Jeu de tri](./user-guide-backoffice/game-sort): vous permet de cr\xE9er un jeu de tri de valeurs num\xE9rique sur vos donn\xE9es afin d\u2019obtenir un score. [Classez les meilleurs buteurs de l'Euro](https://opendata.koumoul.com/reuses/classez-les-meilleurs-buteurs-de-l'euro)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Graphic visualizations
section: 7
updated: 2021-09-20
description : Graphic visualizations
published: true
---

Graphic visualizations allow to represent your data on different perspective visualizations.

![Visualisations graphiques](./images/user-guide-backoffice/visu-graphs.jpg)

* [Bar chart race](./user-guide-backoffice/bar-chart-race) allows to represent ranking data over time. [The evolution of french wages by region between 1966 and 2010](https://opendata.koumoul.com/reuses/evolution-des-salaires-selon-la-region-entre-1966-et-2010)
* [Waffle Charts](./user-guide-backoffice/proportion) allows to visualize the distribution of your data in percentage in the form of 100 squares and to compare them according to different variables. [Rating of the 2018 baccalaureate results](https://opendata.koumoul.com/reuses/proportions-des-resultats-du-baccalaureat)
* [Sunburst diagram](./user-guide-backoffice/sunburst) represent hierarchical data. [Subsidies to associations of Poitiers](https://opendata.koumoul.com/reuses/repartition-des-subventions-aux-associations-de-poitiers-par-secteur-d'activite)
* [Sankey diagram](./user-guide-backoffice/sankey) represent flow data.[Energy class / GHG relationship of housing built since 2010](https://opendata.koumoul.com/reuses/relation-entre-classes-energetiques-et-ges-dans-les-logements)
* [Graphs / Networks](./user-guide-backoffice/network) and [Network diagram](./user-guide-backoffice/relations) allow to represent your relational data containing nodes and links. [Tag network in Stackoverflow](https://opendata.koumoul.com/reuses/reseau-de-tags-dans-stackoverflow) or [Relationship between the players of the France team and their clubs](https://opendata.koumoul.com/reuses/relation-entre-les-joueurs-de-l'equipe-de-france-et-leurs-clubs)
* [Graphics](./user-guide-backoffice/charts) allows to represent your data in different types of graphs, such as histograms, area graphs, lines, etc. [Various examples on the page of energy performance diagnostics for housing](https://opendata.koumoul.com/datasets/dpe-logements)
* [Periodic Series](./user-guide-backoffice/periodic-series) allows to represent temporal data in an animated curve or radar. [Oceanic and continental climate comparison](https://opendata.koumoul.com/reuses/variation-de-temperature-comparaison-climat-oceanique-et-continental)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Visualisations graphiques
section: 7
updated: 2021-09-20
description : Visualisations
published: true
---

Les visualisations graphiques vous permettent de repr\xE9senter vos donn\xE9es sous diff\xE9rents angles.

![Visualisations graphiques](./images/user-guide-backoffice/visu-graphs.jpg)

* [Bar chart race](./user-guide-backoffice/bar-chart-race) permet de repr\xE9senter des donn\xE9es de classement \xE0 travers le temps. [L'\xE9volution des salaires selon la r\xE9gion entre 1966 et 2010](https://opendata.koumoul.com/reuses/evolution-des-salaires-selon-la-region-entre-1966-et-2010)
* [Comparaison de proportion](./user-guide-backoffice/proportion) permet de visualiser la distribution de vos donn\xE9es en pourcentage sous la forme de 100 carr\xE9s et la possibilit\xE9 de les comparer en fonction de diff\xE9rentes variables. [R\xE9partition des mentions aux r\xE9sultats du baccalaur\xE9at 2018](https://opendata.koumoul.com/reuses/proportions-des-resultats-du-baccalaureat)
* [Diagramme Sunburst](./user-guide-backoffice/sunburst) permet de repr\xE9senter des donn\xE9es hi\xE9rarchiques. [Subventions aux associations de Poitiers](https://opendata.koumoul.com/reuses/repartition-des-subventions-aux-associations-de-poitiers-par-secteur-d'activite)
* [Diagramme de Sankey](./user-guide-backoffice/sankey) permet de repr\xE9senter des donn\xE9es de flux. [Relation classe \xE9nerg\xE9tiques/GES de logements construits depuis 2010](https://opendata.koumoul.com/reuses/relation-entre-classes-energetiques-et-ges-dans-les-logements)
* [Graphes/R\xE9seaux](./user-guide-backoffice/network) et [R\xE9seau de relations](./user-guide-backoffice/relations) permettent de repr\xE9senter vos donn\xE9es relationnelles contenants des n\u0153uds et des liens. [R\xE9seau de tags dans Stackoverflow](https://opendata.koumoul.com/reuses/reseau-de-tags-dans-stackoverflow) ou [Relation entre les joueurs de l'\xE9quipe de France et leurs clubs](https://opendata.koumoul.com/reuses/relation-entre-les-joueurs-de-l'equipe-de-france-et-leurs-clubs)
* [Graphiques](./user-guide-backoffice/charts) permet de repr\xE9senter vos donn\xE9es dans diff\xE9rents type de graphiques, tels que des histogrammes, des graphiques d'aires, de lignes, etc... [Diff\xE9rents exemples sur la page des diagnostiques de performance \xE9nerg\xE9tique pour les logements](https://opendata.koumoul.com/datasets/dpe-logements)
* [Periodic Series](./user-guide-backoffice/periodic-series) permet de repr\xE9senter des donn\xE9es temporelles sous forme de courbe ou de radar anim\xE9s. [Comparaison climat oc\xE9anique et continental](https://opendata.koumoul.com/reuses/variation-de-temperature-comparaison-climat-oceanique-et-continental)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Textual visualizations
section: 9
updated: 2021-09-20
description : Textual visualizations
published: true
---

Textual visualizations can represent the majority of your data.

![Visualisations texte](./images/user-guide-backoffice/visu-text.jpg)

* [List and Cards](./user-guide-backoffice/liste-fiches) allows to create a search engine to explore your data. [List of educational establishments in France](https://opendata.koumoul.com/reuses/liste-des-etablissements-de-l'education-en-france)
* [Word clouds](./user-guide-backoffice/word-cloud) allows you to generate a word cloud with your data. [French first names proportions in 1900](https://opendata.koumoul.com/reuses/prenom-par-annee)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Visualisations textuelles
section: 8
updated: 2021-09-20
description : Visualisations
published: true
---

Les visualisations textuelles peuvent repr\xE9senter la majorit\xE9 de vos donn\xE9es.

![Visualisations texte](./images/user-guide-backoffice/visu-text.jpg)

* [Liste et Fiches](./user-guide-backoffice/liste-fiches) vous permet de cr\xE9er un moteur de recherche pour pouvoir explorer vos donn\xE9es. [Liste des \xE9tablissements de l'\xE9ducation en France](https://opendata.koumoul.com/reuses/liste-des-etablissements-de-l'education-en-france)
* [Nuages de mots](./user-guide-backoffice/word-cloud) vous permet de g\xE9n\xE9rer un nuage de mots avec vos donn\xE9es. [Les pr\xE9noms majoritaires en 1900](https://opendata.koumoul.com/reuses/prenom-par-annee)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Sankey diagram
section: 7
subsection : 4
updated: 2021-09-20
description : View your information flows.
published: true
application : https://koumoul.com/apps/sankey/0.5/
---

A **Sankey** diagram represent data flow and can acces to the information of each flow in one click.

### Prerequisites


To configure a **Sankey** diagram, you need a dataset with one column containing numbers (**integer**) and two columns containing strings (**string**).

![Deux colonnes string et une colonne integer](./images/user-guide-backoffice/sankey-type.jpg)  
*Dataset with the columns of type string, Country and Candidates, and one column of type integer, Number_of_voices*

The values \u200B\u200Bof the two columns of character strings, **Country** and **Candidates**, are related to the numerical values \u200B\u200Bof the column of **Number_of_voices**.

### Create a Sankey diagram
Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Sankey**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/sankey-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu

The configuration menu contains three submenus: **Data**, **Preperation** and **Presentation**.
#### 1.Data

In the **Data** menu, you can choose the data set you want to use.

#### 2.Preperation

The **Preperation** menu allows to configure the columns you want to display and have your first rendering.

**Maximum sources** allows to select the number of elements displayed. The **Others** group includes all the data elements that are not displayed individually.  

**Sort** allows to sort the elements in alphabetical order or in descending order. If you have an **Others** category, it will be placed at the bottom of the diagram when sorting.  

**Palette color** and **Color palette name** allow to choose the color of the elements.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Diagramme de Sankey
section: 7
subsection : 4
updated: 2021-09-20
description : Visualiser vos flux d'informations.
published: true
application : https://koumoul.com/apps/sankey/0.5/
---

Un diagramme de **Sankey** permet de visualiser des donn\xE9es de flux et d'avoir les informations de chaque flux en un clic.

### Pr\xE9requis

Pour configurer une visualisation **Sankey**, votre compte actif doit poss\xE9der un jeu de donn\xE9es avec une colonne contenant des nombres (**integer**) et deux colonnes contenant des chaines de caract\xE8res (**string**).

![Deux colonnes string et une colonne integer](./images/user-guide-backoffice/sankey-type.jpg)  
*Jeu de donn\xE9es avec les colonnes de type string, Pays et Candidats, et une colonne de type integer, Nombre_de_voix*  

Les valeurs des deux colonnes de chaines de caract\xE8res, **Pays** et **Candidats**, sont en relations avec les valeurs num\xE9riques de la colonne des **Nombre_de_voix**.


### Cr\xE9er un diagramme de Sankey

Pour r\xE9aliser la visualisation, cliquez sur **Visualisations** puis sur **Configurer une visualisation**.


1. Choisir l'application **Diagramme de Sankey**
2. Entrer le titre de la visualisation
<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/sankey-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9.  
1. Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
2. Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration
Le menu de configuration est compos\xE9 de trois sous-menus : **Sources de donn\xE9es**, **Pr\xE9paration des donn\xE9es** et **Pr\xE9sentation**.

#### 1.Sources de donn\xE9es

Dans le menu **Sources de donn\xE9es**, vous allez choisir le jeu de donn\xE9es que vous souhaitez utiliser.

#### 2.Pr\xE9paration des donn\xE9es  

Le menu **Pr\xE9paration des donn\xE9es** permet de renseigner les colonnes que vous souhaitez afficher et d'avoir votre premier rendu.

**Calcul de la valeur** permet de compter le nombre de lignes non nulles d'une colonne pour qu'elle soit repr\xE9sent\xE9e ou bien de r\xE9aliser les sommes des valeurs d'une colonne. Dans notre image nous avons r\xE9aliser la sommes de valeurs pour la colonne **Nombre de voix**.  
**Source** permet de d\xE9finir les \xE9l\xE9ments plac\xE9s sur la gauche du diagramme de Sankey.  
**Cible** permet de d\xE9finir les \xE9l\xE9ments plac\xE9s sur la droite du diagramme de Sankey.


#### 3.Pr\xE9sentation

Dans le menu **Pr\xE9sentation**, vous pouvez param\xE9trer les **Sources** et les **Cibles** pour d\xE9finir les \xE9l\xE9ments que vous voulez afficher sur votre diagramme de Sankey.

**Nombre maximal de sources** permet d'avoir plus ou moins d'\xE9l\xE9ments. Le groupe **Autres** comprend l'ensemble des \xE9l\xE9ments des donn\xE9es qui ne sont pas affich\xE9s individuellement.  
**Tri** permet de trier les \xE9l\xE9ments par ordre alphab\xE9tique ou bien par ordre d\xE9croissant. Si vous avez une cat\xE9gorie **Autres**, elle sera plac\xE9e en bas du diagramme lors d'un tri.  
**Type de la palette de couleurs** et **Nom de la palette de couleurs** permettent de choisir la couleur des \xE9l\xE9ments.


Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Getting started with Data Fair
section: 1
updated: 2021-09-20
description : Connect to Data Fair
published: true
---

Data Fair allows to **enhance your data and share it internally or in opendata.**  

Your account allows to access the various features of Data Fair:

* [Upload your data](./user-guide-backoffice/datasets)
* [Enrich your data](./user-guide-backoffice/enrichment) to add even more value.
* Represent your data in [interactive visualizations](./user-guide-backoffice/reuses) (graphics, maps, search engine ...).
* Share your data in datastories, portals or API.

<p>
</p>

It is possible to work alone (personal account) or in a group ([organization account](./user-guide-backoffice/organisation)).
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Premiers pas avec Data Fair
section: 1
updated: 2021-09-20
description : Connectez vous sur Data Fair
published: true
---

Data Fair permet de **valoriser ses donn\xE9es et de les partager en interne ou en opendata.**

Votre compte vous permet d'acc\xE9der aux diff\xE9rentes fonctionnalit\xE9s de Data Fair :

1. [Charger ses donn\xE9es](./user-guide-backoffice/datasets)
2. [Enrichir ses donn\xE9es](./user-guide-backoffice/enrichment) pour leur donner encore plus de valeur.
3. Repr\xE9senter ses donn\xE9es sous formes de [visualisations interactives](./user-guide-backoffice/reuses) (graphiques, cartes, moteur de recherches ...).
4. Partager ses donn\xE9es sous formes de pages (story), de visualisations, de portail ou d'API.  

<p>
</p>

Il est possible de travailler seul (compte personnel) ou en groupe ([compte organisation](./user-guide-backoffice/organisation)).
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Diagramme Sunburst
section: 7
subsection : 3
updated: 2021-09-20
description : Visualisation interactive de vos donn\xE9es hi\xE9rarchiques.
published: true
application : https://koumoul.com/apps/sunburst/0.2/
---

**Sunburst** diagram allows to visualize hierarchical data and to access to several levels of this data in a few clicks.

### Create a Sankey diagram
Click on **Visualizations** then on **Configure a visualization**.


1. Choose the application **Sunburst**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/sunburst-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

### Configuration menu

The configuration menu contains three submenus: **Data**, **Preperation** and **Presentation**.

#### 1.Data
In the **Data** menu, you can choose the dataset to use.

#### 2.Preperation

The **Preperation** menu allows to enter the columns you want to display and to have your first rendering.  
**Calculation** allows to count the number of non-zero rows of a column or to calculate the sums of the values \u200B\u200Bof a column.  
The **Groups** represent the number of levels you want to display on your sunburst diagram.

#### 3.Presentation

In the **Presentation** menu, you can turn off the display of unique descendants, change the text color and change the color of your categories.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Diagramme Sunburst
section: 7
subsection : 3
updated: 2021-09-20
description : Visualisation interactive de vos donn\xE9es hi\xE9rarchiques.
published: true
application : https://koumoul.com/apps/sunburst/0.2/
---

Un diagramme **Sunburst** permet de visualiser des donn\xE9es hi\xE9rarchiques et permet d'acc\xE9der \xE0 plusieurs niveaux de ces donn\xE9es en quelques clics.

### Cr\xE9er un diagramme de Sunburst

Pour r\xE9aliser la visualisation, cliquez sur **Visualisations** puis sur **Configuration une visualisation**.

1. Choisir l'application **Diagramme Sunburst**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u


![Page de configuration](./images/user-guide-backoffice/sunburst-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration
Le menu de configuration est compos\xE9 de trois sous-menus : **Sources de donn\xE9es**, **Pr\xE9paration des donn\xE9es** et **Pr\xE9sentation**.

#### 1.Sources de donn\xE9es  

Dans le menu **Sources de donn\xE9es**, choisissez le jeu de donn\xE9es \xE0 utiliser.

#### 2.Pr\xE9paration des donn\xE9es  

Le menu **Pr\xE9paration des donn\xE9es** permet de renseigner les colonnes que vous souhaitez afficher et d'avoir votre premier rendu.  
**Calcul de la valeur** permet de compter le nombre de lignes non nulles d'une colonne pour qu'elle soit repr\xE9sent\xE9e ou bien de calculer les sommes des valeurs d'une colonne.  
Les **Groupes** repr\xE9sentent les niveaux que vous voulez afficher sur votre diagramme sunburst.

#### 3.Pr\xE9sentation  

Dans le menu **Pr\xE9sentation**, vous pouvez d\xE9sactiver l'affichage des descendants uniques, modifier la couleur du texte et modifier la couleur de vos cat\xE9gories.


Lorsque vous avez un aper\xE7u qui vous satisfait, cliquer sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Update a dataset
section: 4
subsection: 4
updated: 2021-09-20
description: Update a dataset
published: true
---

Updating a dataset can be done manually on the [dataset edition page](./user-guide-backoffice/edition-dataset)  or can be automated with [periodic processing](./user-guide-backoffice/processing).

### Manual update

Before performing a manual update, check your data schema. For example, if a visualization uses your dataset, verify that the columns used by the visualization are still present in the new file you are importing.

The update is done using the **Update** action button on the [dataset edit page](./user-guide-backoffice/edition-dataset) you want to update.  
You need to choose the new file to load on your computer and upload your dataset on Data Fair.

The file will be submitted to 6 processing steps:

1. The **Loading**, which represents the progress bar.
2. The **Conversion** to a format used by the platform.
3. The **Analysis**, which will determine the schema of the dataset.
4. **Indexing**, which will allow quick access to the data in the file.
5. The "**Enrichment**, which will take into account the new values \u200B\u200Bof the dataset and will perform a new enrichment according to the extensions added for the dataset.
6. The **Finalization**, which corresponds to the last processing before the dataset is available.

<p>
</p>

![Visualisations Carto](./images/user-guide-backoffice/update.png)

When the finalization is complete, the dataset goes into "draft".

Draft mode allows to check the structure of the schema to add concepts to the **new columns** and to consult the first 100 lines of the new file.  
New columns will be displayed in red.  
You can **cancel** the update if the schema does not match what you want.

After performing the schema verification and giving, the **Validate draft** button allows you to launch the last stage of the update.

The file will again be subjected to the 6 processing steps.  
When finalization is complete, the dataset goes to "available" state.  
It can then be edited, enriched and used in visualizations.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Mise \xE0 jour d'un jeu de donn\xE9es
section: 4
subsection: 4
updated: 2021-09-20
description: Mettre \xE0 jour ses donn\xE9es
published: true
---

La mise \xE0 jour d'un jeu de donn\xE9es peut \xEAtre r\xE9alis\xE9e manuellement sur la [page d'\xE9dition du jeu de donn\xE9es](./user-guide-backoffice/edition-dataset) ou peut \xEAtre automatis\xE9 \xE0 l'aide des [traitements p\xE9riodiques](./user-guide-backoffice/processing).

### Mise \xE0 jour manuelle

Avant de r\xE9aliser une mise \xE0 jour manuelle, v\xE9rifiez le sch\xE9ma de vos donn\xE9es. Par exemple, si une visualisation utilise votre jeu de donn\xE9es, v\xE9rifiez que les colonnes utilis\xE9es par la visualisation sont toujours pr\xE9sentes dans le fichier que vous importez.

La mise \xE0 jour s'effectue \xE0 l'aide du bouton d'action **Mettre \xE0 jour** sur la [page d'\xE9dition du jeu de donn\xE9es](./user-guide-backoffice/edition-dataset) que vous souhaitez mettre \xE0 jour.  
Il suffira de choisir le nouveau fichier \xE0 charger sur votre ordinateur pour mettre \xE0 jour votre jeu de donn\xE9es sur Data Fair.


Le fichier va \xEAtre soumis aux 6 \xE9tapes de traitement :

1. Le **chargement**, qui repr\xE9sente la barre de progression.
2. La **conversion** vers un format utilis\xE9 par la plateforme.
3. L'**analyse**, qui va d\xE9terminer le sch\xE9ma du jeu de donn\xE9es.
4. L'**indexation**, qui va permettre d'acc\xE9der rapidement aux donn\xE9es du fichier.
5. L\u2019**enrichissement**, qui va tenir compte des nouvelles valeurs du jeu de donn\xE9es et va effectuer un nouvel enrichissement en fonction des extensions ajout\xE9es pour le jeu de donn\xE9es.  
6. La **finalisation**, qui correspond aux derniers traitements avant que le jeu de donn\xE9es ne soit disponible.

<p>
</p>

![Visualisations Carto](./images/user-guide-backoffice/update.png)

Lorsque la finalisation est termin\xE9e, le jeu de donn\xE9es passe en \xE9tat "bouillon".  

Il est alors possible de v\xE9rifier la structure du sch\xE9ma d'ajouter des concepts aux **nouvelles colonnes** et de consulter les 100 premi\xE8res lignes du nouveau fichier.  
Les nouvelles colonnes seront affich\xE9es en rouge.  
Vous pouvez **annuler la mise \xE0 jour** du fichier si le sch\xE9ma ne correspond pas \xE0 ce que vous d\xE9sirez.

Apr\xE8s avoir r\xE9aliser les v\xE9rification de sch\xE9ma et de donner, le bouton **Valider le brouillon** permet de lancer la derni\xE8re \xE9tape de la mise \xE0 jour.

Le fichier sera \xE0 nouveaux soumis aux 6 \xE9tapes de traitement.  
Lorsque la finalisation est termin\xE9e, le jeu de donn\xE9es passe en \xE9tat "disponible".  
Il peut alors \xEAtre \xE9dit\xE9, enrichi et utilis\xE9 dans les visualisations.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Webhooks
section: 12
subsection: 3
updated: 2021-09-20
description : Keep informed on your data
published: true
---

**Webhooks** are used to synchronize computer systems. It is possible to send messages during updates on data for example.

List of triggering events:

* Creation of a dataset
* Errors on a dataset
* Finalization of a dataset
* Publication of a dataset in a catalog
* Downloading a dataset
* Creation of a visualization
* Error on a visualization
* Publication of a visualization in a catalog

### Configure the event tracking for Google Analytics

To configure event tracking for Google Analytics, you will need a [Google Analytics account](https://support.google.com/analytics/answer/1008015?hl=fr)
with a configured property and a UA-XXXXXXXX-X number configured for your site.

Once you configured your Google Analytics account and got your UA-XXXXXXXX-X number, you can use it on the **Webhooks** section of your Data Fair account.

When you are on the settings page, you can add an 'External calls' using the **+** button.  
A window appears to configure your call.  
Fill in the title, the trigger events you want to track from the list, then choose **Google Analytics** as the target type.  
In the Tracker ID section, enter your UA-XXXXXXXX-X number.

Once your webhook is validated, you will have a rendering like this:

![webhook](./images/user-guide-backoffice/web-2-identifiant.jpg)  
*Koumoul webhook for Google Analytics configured*

If you have correctly configured your calls, you will be able to view the number of events by type that the users of your portal have carried out in the **Behavior**> **Events**> **Main events** section of your account Google Analytics.

![webhook](./images/user-guide-backoffice/web-3-events.jpg)

To obtain the details of the downloads, click on **Event action** for the type of events **dataset**.

![webhook](./images/user-guide-backoffice/web-4-liste-events.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Webhooks
section: 12
subsection: 3
updated: 2021-09-20
description : Rester inform\xE9s de la vie de ses donn\xE9es
published: true
---

Les **Webhooks** permettent de synchroniser des syst\xE8mes informatiques. On peut ainsi obtenir des messages lors de mises \xE0 jour ou ajouts de donn\xE9es par exemple.

Liste d'\xE9v\xE9nements d\xE9clencheurs :

* Cr\xE9ation d'un jeu de donn\xE9es
* Erreurs sur un jeu de donn\xE9es
* Finalisation d'un jeu de donn\xE9es
* Publication d'un jeu de donn\xE9es sur un catalogue
* T\xE9l\xE9chargement d'un jeu de donn\xE9es
* Cr\xE9ation d'un visualisation
* Erreur sur une visualisation
* Publication d'une visualisation sur un catalogue

### Configurer le suivi d'\xE9v\xE9nements pour Google Analytics

Pour configurer le suivi d'\xE9v\xE9nements pour Google Analytics, il vous faudra poss\xE9der un [compte Google Analytics](https://support.google.com/analytics/answer/1008015?hl=fr) avec une propri\xE9t\xE9 configur\xE9e et un num\xE9ro UA-XXXXXXXX-X configur\xE9 pour votre site.

Une fois que vous avez configur\xE9 votre compte Google Analytics et que vous disposez de votre num\xE9ro UA-XXXXXXXX-X, vous pouvez l'utiliser sur la section **Webhooks** de votre compte Data Fair.

Lorsque vous \xEAtes sur la page des param\xE8tres, vous pouvez ajouter un 'Appels ext\xE9rieurs' \xE0 l'aide du bouton **+**.

Une fen\xEAtre apparait pour configurer votre appel.  
Renseignez le titre, les \xE9v\xE9nements d\xE9clencheurs que vous souhaitez suivre parmi la liste, puis choisissez **Google Analytics** comme type de cible.  
Dans la section de l'identifiant du traqueur, entrez votre num\xE9ro UA-XXXXXXXX-X.

Une fois votre webhook valid\xE9, vous aurez un rendu comme celui-ci :

![webhook](./images/user-guide-backoffice/web-2-identifiant.jpg)  
*Webhook Koumoul pour Google Analytics configur\xE9*

Si vous avez bien configurer vos appels, vous pourrez visualiser le nombre d'\xE9v\xE9nements par type que les utilisateurs de votre portail ont r\xE9alis\xE9s dans la section **Comportement** > **Ev\xE9nements** > **Principaux \xE9v\xE9nements** de votre compte Google Analytics.

![webhook](./images/user-guide-backoffice/web-3-events.jpg)

Pour obtenir le d\xE9tail des t\xE9l\xE9chargements, cliquez sur **Action d'\xE9v\xE9nement** pour le type d'\xE9v\xE9nements **dataset**

![webhook](./images/user-guide-backoffice/web-4-liste-events.jpg)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Word clouds
section: 8
subsection : 2
updated: 2021-09-20
description : Generate word clouds
published: true
application : https://koumoul.com/apps/word-cloud/0.3/
---

The **Word Clouds** visualization allows to generate word clouds containing textual data.  
You have an example of this visualization on our [cloud of most popular names in 1900](https://opendata.koumoul.com/reuses/prenom-par-annee). The number of births is available by hovering over a first name.

To set up a **Word Clouds** visualization, choose the active account you want to work on. Your active account contains at least one dataset with textual data.

## Create your Word Clouds
Click on **Visualizations** then on **Configure a visualization**.

1. Choose the application **Word Clouds**
2. Enter the title of the visualization

<p>
</p>

You are redirected to the configuration page of your application with its different sections:  

1. Information
2. Action buttons (full screen, integration on a site, capture, ...)
3. Configuration menu
4. Preview

![Page de configuration](./images/user-guide-backoffice/nuages-config.jpg)

The title of the visualization can be changed anytime.  
The **Informations** section shows a summary of the characteristics of your application.

## Configuration menu

The configuration menu contains three submenus: **Data**, **Preperation** and **Presentation**.  

### Data

In the **Data** menu, you can choose the dataset you want to use.  
**Filters** are used to restrict the data displayed in the application.  
You can **Restrict to Values** from a column, **Restrict to Range of Values\u200B\u200B** from a column, or **Exclude Values** from a column.

### Preperation

In the **Preperation** menu, **Text fields** allows you to select the column you want to use in your word cloud.  
**Calculation** allows to classify your text by the most significant words, by frequency or by a value from another column.

### Presentation

The **Presentation** menu allows to customize your word cloud.  
The **Palette** allows to choose a set of colors that will be associated with the values \u200B\u200Bof your data.  
The **Interactive filter** makes the words clickable, a new word cloud will be created in relation to the word on which you clicked.  
The **other rendering options** allos to choose the maximum number of words, the font, the minimum and maximum size of a word, the progression of the size of the words, the directions of rotation of the words and the spiral type of words.

When you are satisfied with the preview click on **Save** to finalize your configuration.  
You can add a description at the bottom of the page and make your application public.  
You can consult it using the **consult** or **full screen** buttons.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Nuages de mots
section: 8
subsection : 2
updated: 2021-09-20
description : G\xE9n\xE9rer des nuages de mots
published: true
application : https://koumoul.com/apps/word-cloud/0.3/
---

La visualisation **Nuages de mots** permet g\xE9n\xE9rer des nuages de mots contenant des donn\xE9es textuelles. Vous avez un exemple de cette visualisation sur notre [nuage de pr\xE9noms les plus donn\xE9es en 1900](https://opendata.koumoul.com/reuses/prenom-par-annee). Le nombre de naissance est disponible au survole d'un pr\xE9nom.

Pour configurer une visualisation **Nuages de mots**, choisissez le compte actif sur lequel vous voulez travailler. Votre compte actif contient au mois un jeu de donn\xE9es avec des donn\xE9es textuelles.

### Cr\xE9er votre Nuages de mots

Pour r\xE9aliser votre visualisation, cliquez sur **Visualisations** puis sur **Configuration une visualisation**.

1. Choisir l'application **Nuages de mots**
2. Entrer le titre de la visualisation

<p>
</p>

Vous \xEAtes redirig\xE9 vers la page de configuration de votre application avec ses diff\xE9rentes sections:

1. Informations
2. Boutons d'actions (plein \xE9cran, int\xE9gration sur un site, capture, ... )
3. Menu de configuration
4. Aper\xE7u

![Page de configuration](./images/user-guide-backoffice/nuages-config.jpg)

Le titre de la visualisation peut \xEAtre modifi\xE9 \xE0 tout moment.  
Les **informations** vous donnent un r\xE9sum\xE9 des caract\xE9ristiques de votre application.  
Les boutons d'actions vous permettent d'importer l'application sur un autre site, de dupliquer l'application, de la supprimer et d'acc\xE9der \xE0 l'application en plein \xE9cran.

### Menu de configuration
Le menu de configuration est compos\xE9 de trois sous-menus : **Source de donn\xE9es**, **Pr\xE9paration des donn\xE9es** et **Pr\xE9sentation**.

#### 1.Sources de Donn\xE9es

Dans le menu **Sources de Donn\xE9es**, vous pouvez choisir le jeu de donn\xE9es que vous voulez utiliser.  
Les **Filtres** permettent de restreindre les donn\xE9es affich\xE9es dans l'application.  
Vous pouvez **Restreindre \xE0 des valeurs** d'une colonne,  **Restreindre \xE0 un intervalle de valeurs** d'une colonne ou **Exclure des valeurs** d'une colonne.

#### 2.Pr\xE9paration des donn\xE9es

Dans le menu **Pr\xE9paration des donn\xE9es**, **Champs textuels** permet de s\xE9lectionner la ou les colonne(s) que vous souhaitez utiliser dans votre nuage de mots.  
**Type de calcul** vous permet de classer votre texte par mots les plus significatifs, par fr\xE9quence ou par une valeur d'une autre colonne.

#### 3.Pr\xE9sentation

Le menu **Pr\xE9sentation** permet de personnaliser votre nuage de mot.  
Le **Type de palette** permet de choisir un ensemble de couleurs qui seront associ\xE9es aux valeurs de vos donn\xE9es.  
Le **Filtre textuel interactif** permet de rendre les mots cliquable, un nouveau nuage de mots sera cr\xE9\xE9 en relation avec le mot sur lequel vous avez cliqu\xE9.  
Dans les **autres options de rendu**, vous permettent de choisir le nombre maximal de mots, la police, la taille minimale et maximale d'un mot, la progression de la taille des mots, les sens de rotation des mots et le type de spirale des mots.

Lorsque vous avez un aper\xE7u qui vous satisfait, cliquez sur **Enregistrer** pour finaliser votre configuration.  
Vous pouvez ajouter une description en bas de page et rendre publique votre application.  
Votre application est configur\xE9e et vous pouvez la consulter \xE0 l'aide des boutons **consultation** ou **plein \xE9cran**.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Content page
section: 5
updated: 2022-04-25
description : Thematic pages
published: true
---

Content pages are available in the navigation bar as a direct link to the page or as submenus.  
These pages make it possible to present a set of data sets, a license or a particular approach.

For the moment, two types of presentations of these pages are available: the thematic pages and the free presentation pages.

### Thematic pages

Theme pages are presented with an image as a banner.

![page des donn\xE9es](./images/user-guide-frontoffice/thematique.png)

The thematic pages are composed of several blocks, presenting one or more datasets per block.

Each blocks are contain a title, a description, a visualization and the datasets associated with the block.

### Free pages

Free pages are less structured than theme pages and are more easily customizable.

![page des donn\xE9es](./images/user-guide-frontoffice/libre.png)

Freeform pages allow more different content to be displayed and easier to modify page components
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Page de contenu
section: 5
updated: 2022-04-25
description : Pages th\xE9matiques
published: true
---

Les pages de contenus sont disponibles dans la barre de navigation sous forma de lien direct vers la page ou de sous menus.  
Ces pages permettent de pr\xE9senter un ensemble de jeux de donn\xE9es, une licence ou une d\xE9marche en particulier.

Pour le moment, deux types pr\xE9sentations de ces pages sont disponibles : les pages th\xE9matiques et les pages de pr\xE9sentations libre.  

### Pages th\xE9matiques

Les pages de th\xE9matiques sont pr\xE9sent\xE9es avec une image sous forme de banni\xE8re.

![page des donn\xE9es](./images/user-guide-frontoffice/thematique.png)

Les pages th\xE9matiques sont d\xE9compos\xE9es en plusieurs blocs, pr\xE9sentant un ou plusieurs jeux de donn\xE9es par blocs.  

Les  blocs sont compos\xE9es d'un titre, d'une description, une visualisation et les jeux de donn\xE9es associ\xE9s au bloc.

### Pages libres

Les pages libres sont moins structur\xE9es que les pages th\xE9matiques et sont plus facilement personnalisables.

![page des donn\xE9es](./images/user-guide-frontoffice/libre.png)

Les pages libres permettent d'afficher plus de contenu diff\xE9rents et de modifier plus facilement les composants de la page.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Data page
section: 3
updated: 2022-04-25
description : Access portal data
published: true
---

The data page gives you access to all of the portal's data.  
The display is responsive and allows browsing both on a computer and on a mobile device.

![page des donn\xE9es](./images/user-guide-frontoffice/datapage.png)

The number of datasets to which you have access as well as the dataset catalog download button is displayed on the first line of the page.  
The search function as well as filters by concepts and sorting are available.  
It is also possible to sort the datasets by theme by clicking on one or more of the themes displayed.

Each dataset is presented in the form of a card containing the title, the beginning of the description, the theme and action buttons.
The action buttons allow you to access the windowed or full-screen table, the API documentation, the dataset schema as well as the generic map of the datasets if it has contact information.

Clicking on the card takes you to the dataset page.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Page des donn\xE9es
section: 3
updated: 2022-04-25
description : Acc\xE9der aux donn\xE9es du portail
published: true
---

La page de donn\xE9es vous permet d'acc\xE9der \xE0 l'ensemble des donn\xE9es du portail.
L'affichage est responsive et permet une navigation aussi bien sous ordinateur que sur t\xE9l\xE9phone portable.

![page des donn\xE9es](./images/user-guide-frontoffice/datapage.png)

Le nombre de jeu de donn\xE9es aux quels vous avez acc\xE8s ainsi que le bouton de t\xE9l\xE9chargement du catalogue des jeux de donn\xE9es est affich\xE9 en premi\xE8re ligne de la page.
La fonction de recherche ainsi que des filtres par concepts et des tri sont  disponibles.
Il est aussi possible de trier les jeux de donn\xE9es par th\xE9matiques en cliquant sur une ou plusieurs des th\xE9matiques affich\xE9es.

Chaque jeu de donn\xE9es est pr\xE9sent\xE9 sous forme d'une fiche contenant le titre, le d\xE9but de la description, la th\xE9matique et des boutons d'actions.
Les boutons d'actions vous permettent d'acc\xE9der au tableau en fen\xEAtre ou en plein \xE9cran, \xE0 la documentation de l'API, au sch\xE9ma du jeu de donn\xE9es ainsi qu'\xE0 la carte g\xE9n\xE9rique des jeux du donn\xE9es si celui-ci poss\xE8de des coordonn\xE9es.

Un clic sur la fiche vous fait naviguer vers la page du jeu de donn\xE9es.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Dataset page
section: 3
subsection : 1
updated: 2022-04-25
description : Access portal data
published: true
---

The page of a dataset is composed of several elements:
1. The title and description of the dataset
2. Dataset metadata and action buttons
3. Social media sharing icons
4. Visualizations

External visualizations can be added at the end of the dataset page.

![page d'un jeu de donn\xE9es](./images/user-guide-frontoffice/datasetpage.png)

### Title and description
The title and description of the dataset provide context to the data. The description presents the data, differents process to obtain the data or presents the producer of the data.

### Metadata and action buttons

Metadata is available as a card. They contain the number of lines, the size of the csv file, the data source when it is external, the license as well as the data producer when it is filled in.

Action buttons are also dsiplayed in this section.  
From left to right: the table, the full screen table, the generic map, the API documentation, the original file download, the enriched data download, the data schema, the HTML code to embed the table or the map to a site as well as the notification bell to subscribe to the dataset.

**Table**

The table lets you access the first 10,000 rows of the file.

![Tableau](./images/user-guide-frontoffice/tableau-1.png)

It contains several sections:
1. search bar  
2. navigation pages  
3. columns choice  
4. download  
5. filters on a column  
6. the filter on a value of a column  
7. navigation bar


![Tableau](./images/user-guide-frontoffice/tableau-2.png)

1. Filters on the values \u200B\u200Bof a column allow you to perform an "equal to" or "begins with" type filter on columns with text and to perform "greater than or equal to" or "less than or equal to" filters on columns with numbers. You can make multiple filters. The number of filtered rows is then available under the search.  
2. Download of filtered lines in different formats.  
Downloading in XLSX, ODS and Geojson formats are limited to the first 10,000 lines.

![Tableau](./images/user-guide-frontoffice/tableau-3.png)

The column choices allow you to select the columns you want to display in the table.  
It is then possible to download the file with only the columns you have selected.

**The full screen table**

The full-screen table has the same functionality as the table.
1. search bar  
2. navigation pages
3. columns choice  
4. download  
5. filters on a column  
6. the filter on a value of a column  
7. navigation bar  

![Tableau](./images/user-guide-frontoffice/tableau-full.png)

**The generic map**

The generic map presents geographical data. A click on one of the points or geometries allows you to display the raw data of the element.

![Tableau](./images/user-guide-frontoffice/carte-g.png)

**API Documentation**

Each dataset has its own API. The API's interactive documentation allows developers to perform queries and view results quickly.

![Tableau](./images/user-guide-frontoffice/dataset-API.png)

**Download the original file**
The download button in the metadata allows you to download the raw data file. The format depends on the type of file imported by the data producer.

**Download enriched data**
The download button in the metadata allows you to download the CSV file containing the raw data as well as the enriched data. The enriched data are presented in the form of columns at the end of the table.

**Schema description**

You can access to the key, name, type, concept and description of each of the columns of the dataset.

![Tableau](./images/user-guide-frontoffice/dataset-schema.png)

**Embed code**

This code allows you to embed a table or map of a dataset on an external site as an iframe.
Visitors of your site will have access to the data without having to navigate to the data portal.

![Tableau](./images/user-guide-frontoffice/dataset-code.png)

**Notifications**

It is possible to activate two types of notifications on a dataset:
* Updating data
* Data compatibility break

The data compatibility break corresponds to a modification of the dataset schema.

![Tableau](./images/user-guide-frontoffice/dataset-notif.png)

### Sharing icons

Sharing icons allow you to quickly share the page link on different social networks.
The share thumbnail is the thumbnail of the first visualization of the page.

![Tableau](./images/user-guide-frontoffice/share-linkedin.png)


### Visualization

Interactive visualizations make it easy to access and explore the dataset.  
The descriptions provides a better understanding of the data and the producer of the data can put forward some interesting points.

Clicking on the title of a visualization takes you to the visualization's page. On this page, you find the description and the visualization is displayed larger.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Page d'un jeu de donn\xE9es
section: 3
subsection : 1
updated: 2022-04-25
description : Acc\xE9der aux donn\xE9es du portail
published: true
---

La page d'un jeu de donn\xE9es est compos\xE9 de plusieurs \xE9l\xE9ments :
1. Le titre et la description du jeu de donn\xE9es
2. Les metadonn\xE9es du jeu de donn\xE9es et les boutons d'actions
3. Les icones de partage sur les r\xE9seaux sociaux
4. Les visualisations

Les visualisations externes peuvent \xEAtre ajout\xE9es en fin de page du jeu donn\xE9es.

![page d'un jeu de donn\xE9es](./images/user-guide-frontoffice/datasetpage.png)

### Le titre et la description
Le titre et la description du jeu de donn\xE9es permette de donner un contexte au donn\xE9es. La description pr\xE9sente les donn\xE9es, les diff\xE9rents traitements r\xE9alis\xE9s pour obtenir les donn\xE9es ou bien le producteur des donn\xE9es.

### Les metadonn\xE9es et les boutons d'actions

Les metadonn\xE9es sont disponibles sous forme de fiche. Elles contiennent le nombre des lignes, la taille du fichier csv, la source des donn\xE9es lorsque celle-ci est externe, la licence ainsi que le producteur des donn\xE9es lorsqu'il est renseign\xE9.

Les boutons d'actions sont aussi pr\xE9sent dans cet encadr\xE9.
De gauche \xE0 droite : le tableau, le tableau en plein \xE9cran, la carte g\xE9n\xE9rique, la documentation de l'API, le t\xE9l\xE9chargement du fichier original, le t\xE9l\xE9chargement des donn\xE9es enrichies, le sch\xE9ma des donn\xE9es, le code HTML pour int\xE9grer le tableau ou la carte \xE0 un site ainsi que la cloche de notification pour s'abonner au jeu de donn\xE9es.

**Le tableau**

Le tableau vous permet d'acc\xE9der aux 10 000 premi\xE8res lignes du fichier.

![Tableau](./images/user-guide-frontoffice/tableau-1.png)

Il contient plusieurs sections :
1. la recherche  
2. les pages de navigations  
3. le choix des colonnes  
4. le t\xE9l\xE9chargement  
5. les filtres sur une colonne  
6. le filtre sur une valeur d'une colonne  
7. la barre de navigation


![Tableau](./images/user-guide-frontoffice/tableau-2.png)

1. Les filtres sur les valeurs d'une colonne vous permettent de r\xE9aliser un filtre de type "\xE9gal \xE0" ou "commence par" sur les colonnes avec du texte et de r\xE9aliser des filtres "sup\xE9rieur ou \xE9gale \xE0" ou "inferieur ou \xE9gal \xE0" sur les colonnes avec des nombres. Vous pouvez r\xE9aliser plusieurs filtres. Le nombre de lignes filtr\xE9es est alors disponible sous la recherche.
2. T\xE9l\xE9chargement des lignes filtr\xE9s sous diff\xE9rents formats.   
Le t\xE9l\xE9chargement aux format XLSX, ODS et Geojson sont limit\xE9s aux 10 000 premi\xE8res lignes.

![Tableau](./images/user-guide-frontoffice/tableau-3.png)

Les choix des colonnes permettent de s\xE9lectionner les colonnes que vous souhaitez afficher dans le tableau.  
Il est ensuite possible de t\xE9l\xE9charger le fichier avec seulement les colonnes que vous avez s\xE9lectionn\xE9es.

**Le tableau en plein \xE9cran**

Le tableau en plein \xE9cran poss\xE8de les m\xEAme fonctionnalit\xE9s que le tableau.
1. la recherche  
2. les pages de navigations  
3. le choix des colonnes  
4. le t\xE9l\xE9chargement  
5. les filtres sur une colonne  
6. le filtre sur une valeur d'une colonne  
7. la barre de navigation  

![Tableau](./images/user-guide-frontoffice/tableau-full.png)

**La carte g\xE9n\xE9rique**

La carte g\xE9n\xE9rique pr\xE9sente des donn\xE9es g\xE9ographiques. Un clic sur un des points ou g\xE9om\xE9tries vous permet d'afficher les donn\xE9es brutes de l'\xE9l\xE9ment.

![Tableau](./images/user-guide-frontoffice/carte-g.png)

**La documentation de l'API**

Chaque jeu de donn\xE9es poss\xE8de sa propre API. La documentation interactive de l'API permet aux d\xE9veloppeurs de r\xE9aliser des requ\xEAtes et de visualiser les r\xE9sultats rapidement.

![Tableau](./images/user-guide-frontoffice/dataset-API.png)

**Le t\xE9l\xE9chargement du fichier original**
Le bouton de t\xE9l\xE9chargement dans les m\xE9tadonn\xE9es vous permet de t\xE9l\xE9charger le fichier brut des donn\xE9es. Le format d\xE9pend du type de fichier import\xE9 par le producteur des donn\xE9es.

**Le t\xE9l\xE9chargement des donn\xE9es enrichies**
Le bouton de t\xE9l\xE9chargement dans les m\xE9tadonn\xE9es vous permet de t\xE9l\xE9charger le fichier CSV contenant les donn\xE9es brutes ainsi que les donn\xE9es enrichies. Les donn\xE9es enrichies sont pr\xE9sent\xE9s sous la forme de colonnes en fin de tableau.

**Description des champs**

La description des champs correspond au sch\xE9ma des donn\xE9es. Vous pouvez ainsi acc\xE9der \xE0 la cl\xE9, au nom, au type, au concept et \xE0 la description de chacune des colonnes du jeu de donn\xE9es.

![Tableau](./images/user-guide-frontoffice/dataset-schema.png)

**Le code d'int\xE9gration**

Le code d'int\xE9gration vous permet d'int\xE9grer de tableau ou la carte d'un jeu de donn\xE9es directement sur votre sous forme d'une iframe.  
Les visiteurs de votre site auront ainsi acc\xE8s aux donn\xE9es sans devoir naviguer vers le portail de donn\xE9es.

![Tableau](./images/user-guide-frontoffice/dataset-code.png)



**Les notifications**

Il est possible d'activer deux types de notifications sur un jeu de donn\xE9es :
* Mise \xE0 jour des donn\xE9es  
* Rupture de compatibilit\xE9 des donn\xE9es  

La rupture de compatibilit\xE9 des donn\xE9es correspond \xE0 une modification du sch\xE9ma du jeu de donn\xE9es.

![Tableau](./images/user-guide-frontoffice/dataset-notif.png)

### Les icones de partage

Les icones de partage vous permettent de rapidement partage le lien de la page sur diff\xE9rents r\xE9seaux sociaux.  
La vignette du partage correspond \xE0 la vignette de la premi\xE8re visualisation de la page.

![Tableau](./images/user-guide-frontoffice/share-linkedin.png)


### Les visualisations

Les visualisations interactives facilitent l'acc\xE8s et l'exploration du jeu de donn\xE9es.  
Les descriptions permettent de mieux comprendre les donn\xE9es et de d\xE9couvrir certains points mis en avant par le producteur des donn\xE9es.  

En cliquant sur le titre d'une visualisation vous acc\xE9der \xE0 la page de la visualisation. Sur cette page, vous retrouvez la description et la visualisation est affich\xE9e en plus grand.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Home page
section: 2
updated: 2022-04-25
description : Explore the portal
published: true
---

The home page provides an overview of the data present on the data portal.  
It allows visitors to quickly access the data highlighted, view key figures, search for data or connect to the portal.

### Home page

We will describe the home page of the [Koumoul open data portal ](https://opendata.koumoul.com/).

![page d'accueil](./images/user-guide-frontoffice/homepage.png)

1. Portal logo  
By clicking on the logo of the portal you can access the institutional site.  
2. Portal title  
3. Links to the social networks of the portal producer  
4. Navigation bar  
The navigation bar takes you to the main data and visualization pages as well as the content page, your notifications, and portal login if available.  
5. Notifications  
The notification bell allows you to view the latest notifications on your account. Clicking on a notification navigates you to the dataset page.  
Notifications are only available to logged in users.  
6. Login to the portal  
On some portals, it is possible to create an account and connect to your account. Accounts are required to access private data or to use portal notifications.
7. Description and main image  
8. Research  
The search bar allows you to search the metadata of portal datasets.  
9. Themes  
A click on a theme allows you to filter the data by this theme.
10. Featured visualization and twitter of the portal producer  
Portals can display a featured visualization as well as the latest tweets from the producer's account. The visualization can be used directly on the home page. The visualization page can be accessed by clicking on the visualization title.  
11. Latest dataviz  
Visualizations are presented as cards with a title, a preview of the visualization, and two action buttons. The first action button is used to display the visualization in a window while remaining on the home page. The second action button takes you to the page of the visualization which contains a description and other information (see section visualizations page)  
12. Latest datasets  
The data files are presented in the form of cards with a title, a description, action buttons and the date of the data update. Three action buttons are always available: The table which provides access to the first 10,000 rows of data in tabular format, the dataset API documentation and the dataset schema. If the dataset has coordinates, the icon to display a generic map will be available. It allows you to display a map containing all the points in the dataset. By clicking on a point, you can access the raw data for that point.  
13. Footer  
In the footer you can find the links to the social networks of the producer as well as links added by the producer of the portal. Links can be displayed as logo
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Page d'accueil
section: 2
updated: 2022-04-25
description : D\xE9couvrez les donn\xE9es du portail
published: true
---

La page d'accueil permet d'avoir un aper\xE7u des donn\xE9es pr\xE9sentes sur le portail de donn\xE9es.  
Elle permet aux visiteurs de rapidement acc\xE9der aux donn\xE9es mises en avant, de visualiser les chiffres cl\xE9s, de rechercher des donn\xE9es ou encore de se connecter au portail.

### Page d'accueil

Nous allons vous pr\xE9senter la page d'accueil du portail [open data de Koumoul](https://opendata.koumoul.com/) en 13 points.

![page d'accueil](./images/user-guide-frontoffice/homepage.png)

1. Logo du portail  
En cliquant sur le logo du portail vous pouvez acc\xE9der au site institutionnel.  
2. Titre du portail  
3. Liens vers les r\xE9seaux sociaux du producteur du portail  
4. Barre de navigation  
La barre de navigation vous permet d'acc\xE9der aux pages principales des donn\xE9es et des visualisations ainsi qu'au page de contenu, \xE0 vos notifications et \xE0 la connexion sur le portail si celle-ci est disponible.  
5. Notifications  
La cloche des notifications vous permet de visualiser les derni\xE8res notifications sur votre compte. Un clique sur une notification vous fait naviguer vers la page du jeu de donn\xE9es.  
Les notifications ne sont disponibles que pour les utilisateurs connect\xE9s.  
6. Connexion au portail  
Sur certains portail, il est possible de cr\xE9er un compte et de se connecter \xE0 son compte. Les comptes sont n\xE9cessaires pour acc\xE9der aux donn\xE9es priv\xE9es ou pour utiliser les notifications du portail.  
7. Description et image principale  
8. Recherche  
La fonction de recherche permet de r\xE9aliser une recherche dans les metadonn\xE9es des jeux de donn\xE9es du portail.  
9. Th\xE9matiques  
Un clic sur une th\xE9matique vous permet de filtrer les donn\xE9es de cette th\xE9matique.  
10. Visualisation mise en avant et twitter du producteur du portail  
Les portails peuvent afficher une visualisation mise en avant ainsi que les derniers tweet du compte du producteur. La visualisation est directement utilisable sur la page d'accueil. Il est possible d'acc\xE9der \xE0 la page de la visualisation en cliquant sur le titre de la visualisation.  
11. Derni\xE8res visualisations  
Les r\xE9utilisations sont pr\xE9sent\xE9es sous formes de fiches avec un titre, un aper\xE7u de la visualisation et deux boutons d'action. Le premier bouton d'action permet d'afficher la visualisation dans une fen\xEAtre tout en restant sur la page d'accueil. Le second bouton d'action permet d'acc\xE9der \xE0 la page de la visualisation qui contient une description et d'autres informations (voir la section page des visualisations)  
12. Derniers jeux de donn\xE9es  
Les eux de donn\xE9es sont pr\xE9sent\xE9s sous forme de fiches avec un titre, une description, des boutons d'actions et la date de mise \xE0 jour des donn\xE9es. Trois boutons d'actions sont toujours disponibles : Le tableau qui permet d'acc\xE9der aux 10 000 premi\xE8res lignes des donn\xE9es au format tabulaire, la documentation de l'API du jeu de donn\xE9es ainsi que le sch\xE9ma du jeu de donn\xE9es. Si le jeu de donn\xE9es poss\xE8de des coordonn\xE9es, l'icone pour afficher une carte g\xE9n\xE9rique sera disponible. Il vous permet d'afficher une carte contenant l'ensemble des points du jeu de donn\xE9es. En cliquant sur un point, vous pouvez acc\xE9der aux donn\xE9es brutes pour ce point.  
13. Footer  
Dans le footer vous pouvez retrouver les liens vers les r\xE9seaux sociaux du producteur ainsi que des liens ajout\xE9s par le producteur du portail. Les liens peuvent \xEAtre affich\xE9s sous la forme de logos.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Use the portal
section: 1
updated: 2022-04-25
description : Check the functionalities of a portal
published: true
---

The data portal allows visitors to quickly access data.  
In this section we will discover the different functionalities of a portal.

The portal consists of different pages:
1. [Home page](./user-guide-frontoffice/homepage)
2. [Data page](./user-guide-frontoffice/datapage)
3. [Visualizations page](./user-guide-frontoffice/visualisationspage)
4. [Content Pages](./user-guide-frontoffice/contentpage)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Utiliser le portail
section: 1
updated: 2022-04-25
description : D\xE9couvrez les fonctionnalit\xE9s d'un portail
published: true
---

Le portail de donn\xE9es permet au visiteurs d'acc\xE9der rapidement aux donn\xE9es.
Dans cette section nous allons d\xE9couvrir les diff\xE9rentes fonctionnalit\xE9s d'un portail.

Le portail est constitu\xE9 de diff\xE9rentes pages  :
1. [Page d'accueil](./user-guide-frontoffice/homepage)
2. [Page des donn\xE9es](./user-guide-frontoffice/datapage)
3. [Page des visualisations](./user-guide-frontoffice/visualisationspage)
4. [Pages de contenu](./user-guide-frontoffice/contentpage)
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Visualization page
section: 4
subsection : 1
updated: 2022-04-25
description : Access the visualisation on a full page
published: true
---

The page of a dataset is composed of several elements:  
1. The title and description of the dataset  
2. Dataset metadata and action buttons  
3. Icons for sharing on social networks  
4. Visualization  
5. Data used in visualization

![visualisation](./images/user-guide-frontoffice/visu-1.png)

### Title and description

The title and description of a visualization help to provide context, better understand the data and discover certain points put forward by the producer of the data.

### Metadata and action buttons

Metadata are available as a card. They contain the organization that published the visualization, the type of visualization, action buttons, and the date the visualization was updated.

Action buttons provide access to HTML code to embed the visualization on an external site as well as a full-screen presentation of the visualization.

### Sharing icons

Sharing icons allow you to quickly share the page link on different social networks.  
The share thumbnail is the visualization preview.
![Tableau](./images/user-guide-frontoffice/visu-2.png)

### Visualization  

All of our visualizations are interactive. They make it easier to explore the data.

### Donn\xE9es utilis\xE9es

The data used are presented in the form of sheets. Each card is composed of a title, a description, themes and action buttons.  
Clicking on the card takes you to the dataset page.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Page d'une visualisation
section: 4
subsection : 1
updated: 2022-04-25
description : Acc\xE9der \xE0 la page de visualisation du portail
published: true
---

La page d'un jeu de donn\xE9es est compos\xE9 de plusieurs \xE9l\xE9ments :
1. Le titre et la description du jeu de donn\xE9es
2. Les metadonn\xE9es du jeu de donn\xE9es et les boutons d'actions
3. Les icones de partage sur les r\xE9seaux sociaux
4. La visualisation  
5. Les donn\xE9es utilis\xE9es dans la visualisation  

![visualisation](./images/user-guide-frontoffice/visu-1.png)

### Le titre et la description
Le titre et la description d'une visualisation permettent de donner un contexte, de mieux comprendre les donn\xE9es et de d\xE9couvrir certains points mis en avant par le producteur des donn\xE9es.  

### Les metadonn\xE9es et les boutons d'actions

Les metadonn\xE9es sont disponibles sous forme de fiche. Elles contiennent l'organisme qui a publi\xE9 la visualisation, le type de visualisation, les boutons d'actions et la date de mise \xE0 jour de la visualisation.

Les boutons d'actions permettent d'acc\xE9der au code HTML pour int\xE9grer la visualisation \xE0 un site externe ainsi qu'\xE0 une pr\xE9sentation de la visualisation en plein \xE9cran.

### Les icones de partage

Les icones de partage vous permettent de rapidement partage le lien de la page sur diff\xE9rents r\xE9seaux sociaux.  
La vignette du partage correspond \xE0 l'aper\xE7u de la visualisation.
![Tableau](./images/user-guide-frontoffice/visu-2.png)

### La visualisation  
Toutes nos visualisations sont interactives. Elles permettent de plus facilement explorer les donn\xE9es.

### Donn\xE9es utilis\xE9es

Les donn\xE9es utilis\xE9es sont pr\xE9sent\xE9es sous forme de fiches. Chaque fiche est compos\xE9e d'un titre, d'une description, de th\xE9matiques et de boutons d'actions.  
Un clic sur la fiche vous permet d'acc\xE9der \xE0 la page du jeu de donn\xE9es.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Visualizations page
section: 4
updated: 2022-04-25
description : Access portal visualizations
published: true
---

The visualizations page gives you access to all of the portal's visualizations.  
The display is responsive and allows browsing both on a computer and on a mobile device.

![page des donn\xE9es](./images/user-guide-frontoffice/visupage-1.png)

The search bar as well as filters by type of visualization and sorting are available at the top of the page.
It is also possible to sort the visualizations by theme by clicking on one or more of the themes displayed.

Each visualization is presented in the form of a card containing the title, an overview of the visualization, the theme and action buttons.  
The action buttons allow you to access the visualization in a window or in full screen.

Clicking on the card takes you to the visualization page.
`},function(t,e,n){"use strict";n.r(e),e.default=`---
title: Page des visualisations
section: 4
updated: 2022-04-25
description : Acc\xE9der aux visualisations du portail
published: true
---

La page de visualisations vous permet d'acc\xE9der \xE0 l'ensemble des visualisations du portail.  
L'affichage est responsive et permet une navigation aussi bien sous ordinateur que sur t\xE9l\xE9phone portable.

![page des donn\xE9es](./images/user-guide-frontoffice/visupage-1.png)

La fonction de recherche ainsi que des filtres par type de visualisation et des tris sont disponibles en haut de la page.
Il est aussi possible de trier les visualisations par th\xE9matiques en cliquant sur une ou plusieurs des th\xE9matiques affich\xE9es.

Chaque visualisation est pr\xE9sent\xE9 sous forme d'une fiche contenant le titre, un aper\xE7u de la visualisation, la th\xE9matique et des boutons d'actions.
Les boutons d'actions vous permettent d'acc\xE9der \xE0 la visualisation dans une fen\xEAtre ou en plein \xE9cran.

Un clic sur la fiche vous fait naviguer vers la page de la visualisation.
`},,,function(t,e,n){n(532),t.exports=n(533)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(206),o=n.n(i)},,,,,,,,,,,,function(t,e,n){"use strict";var i=n(208),o=n.n(i)},function(t,e,n){"use strict";n.r(e);var i=n(7),o=n.n(i),b=n(6),p=n.n(b),h=n(8),S=n.n(h),C=n(11),T=n.n(C),L=n(12),D=n.n(L),k=n(3),A=n(1),j=n(55);function w(v,m){var d=Object.keys(v);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(v);m&&(g=g.filter(function(I){return Object.getOwnPropertyDescriptor(v,I).enumerable})),d.push.apply(d,g)}return d}function q(v){for(var m=1;m<arguments.length;m++){var d=arguments[m]!=null?arguments[m]:{};m%2?w(Object(d),!0).forEach(function(g){Object(k.a)(v,g,d[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(d)):w(Object(d)).forEach(function(g){Object.defineProperty(v,g,Object.getOwnPropertyDescriptor(d,g))})}return v}A.a.use(j.a),e.default=function(){return new j.a.Store({state:{env:{}},mutations:{setAny:function(m,d){Object.assign(m,d)}},actions:{nuxtServerInit:function(m,d){var g=m.commit,I=m.dispatch,E=d.req,x=d.env,F=d.app;g("setAny",{env:q({},x)})}}})}},,,,,function(t,e,n){var i={"./af":210,"./af.js":210,"./ar":211,"./ar-dz":212,"./ar-dz.js":212,"./ar-kw":213,"./ar-kw.js":213,"./ar-ly":214,"./ar-ly.js":214,"./ar-ma":215,"./ar-ma.js":215,"./ar-sa":216,"./ar-sa.js":216,"./ar-tn":217,"./ar-tn.js":217,"./ar.js":211,"./az":218,"./az.js":218,"./be":219,"./be.js":219,"./bg":220,"./bg.js":220,"./bm":221,"./bm.js":221,"./bn":222,"./bn-bd":223,"./bn-bd.js":223,"./bn.js":222,"./bo":224,"./bo.js":224,"./br":225,"./br.js":225,"./bs":226,"./bs.js":226,"./ca":227,"./ca.js":227,"./cs":228,"./cs.js":228,"./cv":229,"./cv.js":229,"./cy":230,"./cy.js":230,"./da":231,"./da.js":231,"./de":232,"./de-at":233,"./de-at.js":233,"./de-ch":234,"./de-ch.js":234,"./de.js":232,"./dv":235,"./dv.js":235,"./el":236,"./el.js":236,"./en-au":237,"./en-au.js":237,"./en-ca":238,"./en-ca.js":238,"./en-gb":239,"./en-gb.js":239,"./en-ie":240,"./en-ie.js":240,"./en-il":241,"./en-il.js":241,"./en-in":242,"./en-in.js":242,"./en-nz":243,"./en-nz.js":243,"./en-sg":244,"./en-sg.js":244,"./eo":245,"./eo.js":245,"./es":246,"./es-do":247,"./es-do.js":247,"./es-mx":248,"./es-mx.js":248,"./es-us":249,"./es-us.js":249,"./es.js":246,"./et":250,"./et.js":250,"./eu":251,"./eu.js":251,"./fa":252,"./fa.js":252,"./fi":253,"./fi.js":253,"./fil":254,"./fil.js":254,"./fo":255,"./fo.js":255,"./fr":161,"./fr-ca":256,"./fr-ca.js":256,"./fr-ch":257,"./fr-ch.js":257,"./fr.js":161,"./fy":258,"./fy.js":258,"./ga":259,"./ga.js":259,"./gd":260,"./gd.js":260,"./gl":261,"./gl.js":261,"./gom-deva":262,"./gom-deva.js":262,"./gom-latn":263,"./gom-latn.js":263,"./gu":264,"./gu.js":264,"./he":265,"./he.js":265,"./hi":266,"./hi.js":266,"./hr":267,"./hr.js":267,"./hu":268,"./hu.js":268,"./hy-am":269,"./hy-am.js":269,"./id":270,"./id.js":270,"./is":271,"./is.js":271,"./it":272,"./it-ch":273,"./it-ch.js":273,"./it.js":272,"./ja":274,"./ja.js":274,"./jv":275,"./jv.js":275,"./ka":276,"./ka.js":276,"./kk":277,"./kk.js":277,"./km":278,"./km.js":278,"./kn":279,"./kn.js":279,"./ko":280,"./ko.js":280,"./ku":281,"./ku.js":281,"./ky":282,"./ky.js":282,"./lb":283,"./lb.js":283,"./lo":284,"./lo.js":284,"./lt":285,"./lt.js":285,"./lv":286,"./lv.js":286,"./me":287,"./me.js":287,"./mi":288,"./mi.js":288,"./mk":289,"./mk.js":289,"./ml":290,"./ml.js":290,"./mn":291,"./mn.js":291,"./mr":292,"./mr.js":292,"./ms":293,"./ms-my":294,"./ms-my.js":294,"./ms.js":293,"./mt":295,"./mt.js":295,"./my":296,"./my.js":296,"./nb":297,"./nb.js":297,"./ne":298,"./ne.js":298,"./nl":299,"./nl-be":300,"./nl-be.js":300,"./nl.js":299,"./nn":301,"./nn.js":301,"./oc-lnc":302,"./oc-lnc.js":302,"./pa-in":303,"./pa-in.js":303,"./pl":304,"./pl.js":304,"./pt":305,"./pt-br":306,"./pt-br.js":306,"./pt.js":305,"./ro":307,"./ro.js":307,"./ru":308,"./ru.js":308,"./sd":309,"./sd.js":309,"./se":310,"./se.js":310,"./si":311,"./si.js":311,"./sk":312,"./sk.js":312,"./sl":313,"./sl.js":313,"./sq":314,"./sq.js":314,"./sr":315,"./sr-cyrl":316,"./sr-cyrl.js":316,"./sr.js":315,"./ss":317,"./ss.js":317,"./sv":318,"./sv.js":318,"./sw":319,"./sw.js":319,"./ta":320,"./ta.js":320,"./te":321,"./te.js":321,"./tet":322,"./tet.js":322,"./tg":323,"./tg.js":323,"./th":324,"./th.js":324,"./tk":325,"./tk.js":325,"./tl-ph":326,"./tl-ph.js":326,"./tlh":327,"./tlh.js":327,"./tr":328,"./tr.js":328,"./tzl":329,"./tzl.js":329,"./tzm":330,"./tzm-latn":331,"./tzm-latn.js":331,"./tzm.js":330,"./ug-cn":332,"./ug-cn.js":332,"./uk":333,"./uk.js":333,"./ur":334,"./ur.js":334,"./uz":335,"./uz-latn":336,"./uz-latn.js":336,"./uz.js":335,"./vi":337,"./vi.js":337,"./x-pseudo":338,"./x-pseudo.js":338,"./yo":339,"./yo.js":339,"./zh-cn":340,"./zh-cn.js":340,"./zh-hk":341,"./zh-hk.js":341,"./zh-mo":342,"./zh-mo.js":342,"./zh-tw":343,"./zh-tw.js":343};function o(p){var h=b(p);return n(h)}function b(p){if(!n.o(i,p)){var h=new Error("Cannot find module '"+p+"'");throw h.code="MODULE_NOT_FOUND",h}return i[p]}o.keys=function(){return Object.keys(i)},o.resolve=b,t.exports=o,o.id=627}]),[[531,20,2,21]]]);
