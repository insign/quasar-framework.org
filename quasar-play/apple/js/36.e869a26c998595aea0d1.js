webpackJsonp([36],{179:function(e,t,i){var n=i(3)(i(317),i(445),null,null,null);e.exports=n.exports},233:function(e,t,i){e.exports=i.p+"img/quasar.e39acbb.jpg"},317:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.default={directives:{ScrollFire:n.ScrollFire},data:function(){return{loremipsum:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},methods:{bounceImage:function(e){e.classList.add("animate-bounce"),setTimeout(function(){document.body.contains(e)&&e.classList.remove("animate-bounce")},2e3)}}}},445:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-padding row justify-center"},[n("div",{staticStyle:{width:"500px","max-width":"90vw"}},[n("p",{staticClass:"caption"},[e._v("\n      Please scroll down to see the image have a short bounce effect when being visible for first time.\n      This effect is just for demoing that something happens when target comes into view.\n    ")]),e._v(" "),e._l(6,function(t){return n("p",[e._v(e._s(e.loremipsum))])}),e._v(" "),n("p",{staticClass:"caption"},[e._v("Scroll Fire below. Reload page to see the bounce effect again.")]),e._v(" "),n("p",{staticClass:"text-center"},[n("img",{directives:[{name:"scroll-fire",rawName:"v-scroll-fire",value:e.bounceImage,expression:"bounceImage"}],staticStyle:{width:"200px"},attrs:{src:i(233)}})]),e._v(" "),e._l(3,function(t){return n("p",[e._v(e._s(e.loremipsum))])})],2)])},staticRenderFns:[]}}});