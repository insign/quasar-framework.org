webpackJsonp([49],{179:function(t,e,i){var n=i(3)(i(317),i(475),null,null,null);t.exports=n.exports},317:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0);e.default={components:{QInfiniteScroll:n.QInfiniteScroll,QChip:n.QChip,QSpinnerDots:n.QSpinnerDots},data:function(){return{items:[{},{},{},{},{}]}},methods:{refresher:function(t,e){var i=this;setTimeout(function(){for(var t=[],n=0;n<7;n++)t.push({});i.items=i.items.concat(t),e()},2500)}}}},475:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout-padding row justify-center"},[i("div",{staticStyle:{width:"500px","max-width":"90vw"}},[i("p",{staticClass:"caption"},[t._v("Scroll down to see it in action.")]),t._v(" "),i("br"),t._v(" "),i("q-infinite-scroll",{attrs:{handler:t.refresher}},[t._l(t.items,function(e,n){return i("p",{staticClass:"caption"},[i("q-chip",{staticClass:"shadow-1",attrs:{square:"",color:"secondary"}},[t._v("\n          "+t._s(n+1)+"\n        ")]),t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      ")],1)}),t._v(" "),i("div",{staticClass:"row justify-center",staticStyle:{"margin-bottom":"50px"}},[i("q-spinner-dots",{attrs:{size:40},slot:"message"})],1)],2)],1)])},staticRenderFns:[]}}});