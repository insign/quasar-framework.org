webpackJsonp([83],{105:function(e,o,n){var t=n(3)(n(245),n(409),null,null,null);e.exports=t.exports},245:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(0);o.default={components:{QCollapsible:t.QCollapsible,QList:t.QList,QItemSeparator:t.QItemSeparator},methods:{openURL:function(){(0,t.openURL)("https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging?hl=en")}}}},409:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"layout-padding"},[n("p",{staticClass:"light-paragraph"},[e._v("\n    Develop your App right on your mobile phone with hot-reload with the following steps:\n  ")]),e._v(" "),n("q-list",[n("q-collapsible",{attrs:{icon:"phonelink_ring",label:"Register App URL"}},[n("p",[e._v("From inside your App's folder in the console use Quasar CLI:")]),e._v(" "),n("code",[n("pre",[e._v("$ quasar dev --play")])]),e._v(" "),n("p",[e._v("\n        This will start a webserver equipped with hot-reload and display a QR code\n        that points to that server. Use Quasar Play app to scan the QR code by tapping\n        on the FAB ("),n("i",[e._v("add")]),e._v(") button and\n        then on ("),n("i",[e._v("phonelink_ring")]),e._v(").\n      ")]),e._v(" "),n("p",[e._v("\n        If your development machine has multiple IPs then Quasar CLI will\n        ask you to select one. Make sure that your phone and dev machine are on the\n        same network and can ping themselves and so select correct IP interface.\n        Manually add URL by tapping on the FAB\n        ("),n("i",[e._v("add")]),e._v(") button and then on ("),n("i",[e._v("add")]),e._v(").\n      ")]),e._v(" "),n("blockquote",[n("small",[e._v("\n          You can skip generating a QR code and manually add the development URL\n          (displayed in the console) to Quasar Play app.\n        ")])])],1),e._v(" "),n("q-item-separator"),e._v(" "),n("q-collapsible",{attrs:{icon:"queue_play_next",label:"Play URL"}},[n("p",[e._v("\n        Now that you have your URL, you can play with your App on your mobile phone by\n        tapping on the ("),n("i",[e._v("ondemand_video")]),e._v(") button.\n      ")]),e._v(" "),n("p",[e._v("\n        Whenever you change your code the App is updated (quite fast). Due to hot-reload,\n        your App's state will be preserved between updates which makes development\n        a breeze.\n      ")]),e._v(" "),n("blockquote",[n("small",[e._v("\n          Unfortunately Cordova proprietary code will not be loaded as it currently\n          has a bug that generates a Java exception and halts your App.\n        ")])])],1),e._v(" "),n("q-item-separator"),e._v(" "),n("q-collapsible",{attrs:{icon:"bug_report",label:"Debugging your App"}},[n("p",[e._v("\n        There is a way to debug directly on your phone. Use Chrome Developer Tools to\n        see things like console.log() messages or inspect DOM tree.\n      ")]),e._v(" "),n("p",[e._v("\n        For this you need to connect your phone through a USB cable to the development\n        machine. And also Google Chrome browser. Read the complete guide\n        "),n("a",{on:{click:e.openURL}},[e._v("here")]),e._v(".\n      ")])])],1)],1)},staticRenderFns:[]}}});