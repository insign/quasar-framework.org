webpackJsonp([84],{104:function(t,e,o){var a=o(3)(o(244),o(427),null,null,null);t.exports=a.exports},244:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(0);e.default={components:{QLayout:a.QLayout,QIcon:a.QIcon,QBtn:a.QBtn,QToolbar:a.QToolbar,QToolbarTitle:a.QToolbarTitle,QTabs:a.QTabs,QRouteTab:a.QRouteTab},directives:{GoBack:a.GoBack}}},427:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"Hhh lpr fff"}},[o("q-toolbar",{slot:"header"},[o("q-btn",{directives:[{name:"go-back",rawName:"v-go-back",value:"/",expression:"'/'"}],attrs:{flat:""}},[o("q-icon",{attrs:{name:"arrow_back"}})],1),t._v(" "),o("q-toolbar-title",[t._v("\n      Play URL\n    ")])],1),t._v(" "),o("q-tabs",{slot:"navigation"},[o("q-route-tab",{attrs:{to:"/play",exact:"",replace:"",icon:"queue_play_next",label:"URL List"},slot:"title"}),t._v(" "),o("q-route-tab",{attrs:{to:"/play/how-to",replace:"",icon:"info",label:"How To"},slot:"title"})],1),t._v(" "),o("router-view")],1)},staticRenderFns:[]}}});