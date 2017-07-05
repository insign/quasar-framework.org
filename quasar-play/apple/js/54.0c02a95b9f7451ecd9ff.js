webpackJsonp([54],{170:function(t,i,o){var a=o(3)(o(308),o(430),null,null,null);t.exports=a.exports},308:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=o(0);i.default={components:{QBtn:a.QBtn,QTooltip:a.QTooltip,QList:a.QList,QItem:a.QItem,QItemMain:a.QItemMain,QIcon:a.QIcon,QRadio:a.QRadio,QCard:a.QCard,QCardTitle:a.QCardTitle,QCardMain:a.QCardMain,QChip:a.QChip,QFixedPosition:a.QFixedPosition},data:function(){return{anchorOrigin:{vertical:"bottom",horizontal:"middle"},selfOrigin:{vertical:"top",horizontal:"middle"}}},computed:{anchor:function(){return this.anchorOrigin.vertical+" "+this.anchorOrigin.horizontal},self:function(){return this.selfOrigin.vertical+" "+this.selfOrigin.horizontal}}}},430:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"layout-padding row justify-center"},[o("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t._m(0),t._v(" "),o("div",{staticClass:"bg-secondary text-white round-borders row flex-center",staticStyle:{"margin-top":"40px",width:"200px",height:"70px"}},[t._v("\n      One second delay\n      "),o("q-tooltip",{attrs:{delay:1e3,offset:[0,10]}},[t._v("Quasar Rulz!")])],1),t._v(" "),o("p",{staticClass:"caption"},[t._v("With offset")]),t._v(" "),o("div",{staticClass:"group"},[o("q-btn",{attrs:{color:"indigo"}},[t._v("\n        Hover\n        "),o("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",offset:[10,10]}},[o("strong",[t._v("Tooltip")]),t._v(" on "),o("em",[t._v("top")]),t._v(" ("),o("q-icon",{attrs:{name:"keyboard_arrow_up"}}),t._v(")\n        ")],1)],1),t._v(" "),o("q-btn",{attrs:{color:"red"}},[t._v("\n        Over\n        "),o("q-tooltip",{attrs:{anchor:"center right",self:"center left",offset:[10,10]}},[o("strong",[t._v("Tooltip")]),t._v(" on "),o("em",[t._v("right")]),t._v(" ("),o("q-icon",{attrs:{name:"keyboard_arrow_right"}}),t._v(")\n        ")],1)],1),t._v(" "),o("q-btn",{attrs:{color:"purple"}},[t._v("\n        These\n        "),o("q-tooltip",{attrs:{anchor:"center left",self:"center right",offset:[10,10]}},[o("strong",[t._v("Tooltip")]),t._v(" on "),o("em",[t._v("left")]),t._v(" ("),o("q-icon",{attrs:{name:"keyboard_arrow_left"}}),t._v(")\n        ")],1)],1),t._v(" "),o("q-btn",{attrs:{color:"amber"}},[t._v("\n        Buttons\n        "),o("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle",offset:[10,10]}},[o("strong",[t._v("Tooltip")]),t._v(" on "),o("em",[t._v("bottom")]),t._v(" ("),o("q-icon",{attrs:{name:"keyboard_arrow_down"}}),t._v(")\n        ")],1)],1)],1),t._v(" "),o("q-card",{staticStyle:{"margin-top":"75px"}},[o("q-card-title",{staticClass:"bg-primary text-center"},[o("q-btn",{attrs:{push:"",color:"orange"}},[t._v("\n          Mouse Hover\n\n          "),o("q-tooltip",{attrs:{anchor:t.anchor,self:t.self}},[o("div",[t._v("Quasar is "),o("strong",[t._v("great")]),t._v("!")]),t._v(" "),o("div",{staticClass:"text-center"},[t._v("Try it.")])])],1)],1),t._v(" "),o("p",{staticClass:"caption text-center"},[t._v("Configure the Tooltip for button above.")]),t._v(" "),o("p",{staticClass:"text-center"},[o("q-chip",{attrs:{tag:"",color:"primary"}},[t._v('anchor="'+t._s(t.anchor)+'"')]),t._v(" "),o("q-chip",{attrs:{tag:"",color:"primary"}},[t._v('self="'+t._s(t.self)+'"')])],1),t._v(" "),o("q-card-main",{staticClass:"row"},[o("div",{staticClass:"column items-center col-6"},[o("p",{staticClass:"caption"},[t._v("Anchor Origin")]),t._v(" "),o("div",{staticClass:"flex"},[o("div",{staticClass:"column group"},[o("div",[t._v("Vertical")]),t._v(" "),o("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.anchorOrigin.vertical=i},expression:"anchorOrigin.vertical"}}),t._v(" "),o("q-radio",{attrs:{val:"center",label:"Center"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.anchorOrigin.vertical=i},expression:"anchorOrigin.vertical"}}),t._v(" "),o("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.anchorOrigin.vertical=i},expression:"anchorOrigin.vertical"}})],1),t._v(" "),o("div",{staticClass:"column group"},[o("div",[t._v("Horizontal")]),t._v(" "),o("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.anchorOrigin.horizontal=i},expression:"anchorOrigin.horizontal"}}),t._v(" "),o("q-radio",{attrs:{val:"middle",label:"Middle"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.anchorOrigin.horizontal=i},expression:"anchorOrigin.horizontal"}}),t._v(" "),o("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.anchorOrigin.horizontal=i},expression:"anchorOrigin.horizontal"}})],1)])]),t._v(" "),o("div",{staticClass:"column items-center col-6"},[o("p",{staticClass:"caption"},[t._v("Self Origin")]),t._v(" "),o("div",{staticClass:"flex"},[o("div",{staticClass:"column group"},[o("div",[t._v("Vertical")]),t._v(" "),o("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.selfOrigin.vertical,callback:function(i){t.selfOrigin.vertical=i},expression:"selfOrigin.vertical"}}),t._v(" "),o("q-radio",{attrs:{val:"center",label:"Center"},model:{value:t.selfOrigin.vertical,callback:function(i){t.selfOrigin.vertical=i},expression:"selfOrigin.vertical"}}),t._v(" "),o("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.selfOrigin.vertical,callback:function(i){t.selfOrigin.vertical=i},expression:"selfOrigin.vertical"}})],1),t._v(" "),o("div",{staticClass:"column group"},[o("div",[t._v("Horizontal")]),t._v(" "),o("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.selfOrigin.horizontal=i},expression:"selfOrigin.horizontal"}}),t._v(" "),o("q-radio",{attrs:{val:"middle",label:"Middle"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.selfOrigin.horizontal=i},expression:"selfOrigin.horizontal"}}),t._v(" "),o("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.selfOrigin.horizontal=i},expression:"selfOrigin.horizontal"}})],1)])])])],1)],1)])},staticRenderFns:[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("p",{staticClass:"caption"},[o("span",{staticClass:"desktop-only"},[t._v("\n        Move mouse over the elements below. On a mobile device,\n        you need to tap the elements.\n      ")]),t._v(" "),o("span",{staticClass:"mobile-only"},[t._v("\n        Tap on elements below. On desktop you can move the mouse\n        over the elements.\n      ")])])}]}}});