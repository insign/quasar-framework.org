webpackJsonp([37],{168:function(t,i,o){var a=o(3)(o(306),o(407),null,null,null);t.exports=a.exports},231:function(t,i,o){t.exports=o.p+"img/map.956e5dd.png"},306:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=o(0);i.default={components:{QBtn:a.QBtn,QPopover:a.QPopover,QList:a.QList,QItem:a.QItem,QItemMain:a.QItemMain,QIcon:a.QIcon,QRadio:a.QRadio,QCard:a.QCard,QCardTitle:a.QCardTitle,QCardMain:a.QCardMain,QChip:a.QChip,QFixedPosition:a.QFixedPosition},data:function(){return{anchorOrigin:{vertical:"bottom",horizontal:"left"},selfOrigin:{vertical:"top",horizontal:"left"}}},computed:{anchor:function(){return this.anchorOrigin.vertical+" "+this.anchorOrigin.horizontal},self:function(){return this.selfOrigin.vertical+" "+this.selfOrigin.horizontal}},methods:{showToast:function(){a.Toast.create((this.$q.platform.is.desktop?"Clicked":"Tapped")+" on a Popover item")}}}},407:function(t,i,o){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"layout-padding row justify-center"},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t._m(0),t._v(" "),a("div",[a("q-btn",{attrs:{color:"primary"}},[a("q-icon",{attrs:{name:"assignment"}}),t._v(" "),a("q-popover",{ref:"popover1"},[a("q-list",{staticClass:"scroll",staticStyle:{"min-width":"100px"},attrs:{link:"",separator:""}},t._l(20,function(i){return a("q-item",{key:i,on:{click:function(i){t.showToast(),t.$refs.popover1.close()}}},[a("q-item-main",{attrs:{label:"Label",sublabel:"Click me"}})],1)}))],1)],1),t._v(" "),a("q-btn",{ref:"target4",attrs:{color:"negative"}},[t._v("\n        Disabled Popover\n\n        "),a("q-popover",{attrs:{disable:""}},[t._v('\n          This Popover content won\'t be shown because of "disable"\n        ')])],1),t._v(" "),a("q-card",{staticStyle:{"margin-top":"75px"}},[a("q-card-title",{staticClass:"bg-primary text-center"},[a("q-btn",{attrs:{push:"",color:"orange"}},[t._v("\n            Tap Me\n\n            "),a("q-popover",{ref:"popover2",attrs:{anchor:t.anchor,self:t.self}},[a("q-list",{staticStyle:{"min-width":"100px"},attrs:{link:""}},t._l(3,function(i){return a("q-item",{key:i,on:{click:function(i){t.showToast(),t.$refs.popover2.close()}}},[a("q-item-main",{attrs:{label:"Label"}})],1)}))],1)],1)],1),t._v(" "),a("p",{staticClass:"caption text-center"},[t._v("Configure the Popover for button above.")]),t._v(" "),a("p",{staticClass:"text-center"},[a("q-chip",{attrs:{tag:"",color:"primary"}},[t._v('anchor="'+t._s(t.anchor)+'"')]),t._v(" "),a("q-chip",{attrs:{tag:"",color:"primary"}},[t._v('self="'+t._s(t.self)+'"')])],1),t._v(" "),a("q-card-main",{staticClass:"row"},[a("div",{staticClass:"column items-center col-6"},[a("p",{staticClass:"caption"},[t._v("Anchor Origin")]),t._v(" "),a("div",{staticClass:"flex"},[a("div",{staticClass:"column group"},[a("div",[t._v("Vertical")]),t._v(" "),a("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.anchorOrigin.vertical=i},expression:"anchorOrigin.vertical"}}),t._v(" "),a("q-radio",{attrs:{val:"center",label:"Center"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.anchorOrigin.vertical=i},expression:"anchorOrigin.vertical"}}),t._v(" "),a("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.anchorOrigin.vertical=i},expression:"anchorOrigin.vertical"}})],1),t._v(" "),a("div",{staticClass:"column group"},[a("div",[t._v("Horizontal")]),t._v(" "),a("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.anchorOrigin.horizontal=i},expression:"anchorOrigin.horizontal"}}),t._v(" "),a("q-radio",{attrs:{val:"middle",label:"Middle"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.anchorOrigin.horizontal=i},expression:"anchorOrigin.horizontal"}}),t._v(" "),a("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.anchorOrigin.horizontal=i},expression:"anchorOrigin.horizontal"}})],1)])]),t._v(" "),a("div",{staticClass:"column items-center col-6"},[a("p",{staticClass:"caption"},[t._v("Self Origin")]),t._v(" "),a("div",{staticClass:"flex"},[a("div",{staticClass:"column group"},[a("div",[t._v("Vertical")]),t._v(" "),a("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.selfOrigin.vertical,callback:function(i){t.selfOrigin.vertical=i},expression:"selfOrigin.vertical"}}),t._v(" "),a("q-radio",{attrs:{val:"center",label:"Center"},model:{value:t.selfOrigin.vertical,callback:function(i){t.selfOrigin.vertical=i},expression:"selfOrigin.vertical"}}),t._v(" "),a("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.selfOrigin.vertical,callback:function(i){t.selfOrigin.vertical=i},expression:"selfOrigin.vertical"}})],1),t._v(" "),a("div",{staticClass:"column group"},[a("div",[t._v("Horizontal")]),t._v(" "),a("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.selfOrigin.horizontal=i},expression:"selfOrigin.horizontal"}}),t._v(" "),a("q-radio",{attrs:{val:"middle",label:"Middle"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.selfOrigin.horizontal=i},expression:"selfOrigin.horizontal"}}),t._v(" "),a("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.selfOrigin.horizontal=i},expression:"selfOrigin.horizontal"}})],1)])])])],1),t._v(" "),a("div",{staticStyle:{"margin-bottom":"700px"}}),t._v(" "),a("q-fixed-position",{attrs:{corner:"top-right",offset:[16,16]}},[a("q-btn",{attrs:{color:"secondary"}},[a("q-icon",{attrs:{name:"directions"}}),t._v(" "),a("q-popover",{ref:"popover3"},[a("img",{staticStyle:{height:"150px",width:"200px"},attrs:{src:o(231)},on:{click:function(i){t.showToast(),t.$refs.popover3.close()}}})])],1)],1),t._v(" "),a("q-fixed-position",{attrs:{corner:"bottom-right",offset:[16,16]}},[a("q-btn",{attrs:{color:"tertiary"}},[a("q-icon",{attrs:{name:"plus_one"}}),t._v(" "),a("q-popover",{ref:"popover4"},[a("div",{staticClass:"group",staticStyle:{width:"220px","text-align":"center"}},[a("q-btn",{attrs:{flat:"",color:"primary"},on:{click:function(i){t.showToast(),t.$refs.popover4.close()}}},[a("q-icon",{attrs:{name:"thumb_up"}})],1),t._v(" "),a("q-btn",{attrs:{flat:"",color:"primary"},on:{click:function(i){t.showToast(),t.$refs.popover4.close()}}},[a("q-icon",{attrs:{name:"thumb_down"}})],1),t._v(" "),a("q-btn",{attrs:{flat:"",color:"secondary"},on:{click:function(i){t.showToast(),t.$refs.popover4.close()}}},[a("q-icon",{attrs:{name:"share"}})],1)],1)])],1)],1)],1),t._v(" "),a("q-fixed-position",{attrs:{corner:"bottom-left",offset:[16,16]}},[a("q-btn",{attrs:{color:"primary"}},[a("q-icon",{attrs:{name:"menu"}}),t._v(" "),a("q-popover",{ref:"popover5"},[a("q-list",{staticClass:"scroll",staticStyle:{"min-width":"200px"},attrs:{link:"",separator:""}},t._l(20,function(i){return a("q-item",{key:i,on:{click:function(i){t.showToast(),t.$refs.popover5.close()}}},[a("q-item-main",{attrs:{label:"Label",sublabel:"Click me"}})],1)}))],1)],1)],1)],1)])},staticRenderFns:[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("p",{staticClass:"caption",staticStyle:{"margin-top":"120px"}},[t._v("\n      Click on buttons and image below to open Popovers.\n      "),o("br"),t._v(" "),o("em",[t._v("This page has intended scroll so you can see multiple scenarios.")])])}]}}});