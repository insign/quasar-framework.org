webpackJsonp([75],{136:function(t,e,a){var s=a(3)(a(275),a(418),null,null,null);t.exports=s.exports},275:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(0);e.default={components:{QCheckbox:s.QCheckbox,QOptionGroup:s.QOptionGroup,QChip:s.QChip,QField:s.QField,QCard:s.QCard,QCardTitle:s.QCardTitle,QCardMain:s.QCardMain,QCardSeparator:s.QCardSeparator},data:function(){return{styles:["","bordered","horizontal-separator","vertical-separator","cell-separator","striped-odd","striped-even","highlight","compact","loose","flipped"],misc:[],separator:"none",stripe:"none",type:"none",gutter:"none"}},computed:{computedClasses:function(){var t=[];return this.misc.includes("bordered")&&t.push("bordered"),this.misc.includes("highlight")&&t.push("highlight"),"none"!==this.separator&&t.push(this.separator+"-separator"),"none"!==this.stripe&&t.push("striped-"+this.stripe),"none"!==this.type&&t.push(this.type),"none"!==this.gutter&&t.push(this.gutter),t}}}},418:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding row justify-center"},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[a("q-card",[a("q-card-title",[t._v("\n        Configure\n      ")]),t._v(" "),a("q-card-separator"),t._v(" "),a("q-card-main",[a("q-field",{staticStyle:{"margin-top":"0"},attrs:{label:"Separators","label-width":4}},[a("q-option-group",{attrs:{inline:"",type:"radio",options:[{value:"none",label:"No separator"},{value:"horizontal",label:"Horizontal separator"},{value:"vertical",label:"Vertical separator"},{value:"cell",label:"Cell separator"}]},model:{value:t.separator,callback:function(e){t.separator=e},expression:"separator"}})],1),t._v(" "),a("q-field",{attrs:{label:"Stripes","label-width":4}},[a("q-option-group",{attrs:{inline:"",type:"radio",options:[{value:"none",label:"No Stripe"},{value:"odd",label:"Striped Odd"},{value:"even",label:"Striped Even"}]},model:{value:t.stripe,callback:function(e){t.stripe=e},expression:"stripe"}})],1),t._v(" "),a("q-field",{attrs:{label:"Layout Type","label-width":4}},[a("q-option-group",{attrs:{inline:"",type:"radio",options:[{value:"none",label:"Standard"},{value:"flipped",label:"Flipped"},{value:"responsive",label:"Responsive"}]},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),t._v(" "),a("q-field",{attrs:{label:"Gutter","label-width":4}},[a("q-option-group",{attrs:{inline:"",type:"radio",options:[{value:"none",label:"Standard"},{value:"compact",label:"Compact"},{value:"loose",label:"Loose"}]},model:{value:t.gutter,callback:function(e){t.gutter=e},expression:"gutter"}})],1),t._v(" "),a("q-field",{attrs:{label:"Misc","label-width":4}},[a("q-option-group",{attrs:{inline:"",type:"checkbox",options:[{value:"bordered",label:"Bordered"},{value:"highlight",label:"Highlight"}]},model:{value:t.misc,callback:function(e){t.misc=e},expression:"misc"}})],1),t._v(" "),t.computedClasses.length>0?[a("q-card-separator",{staticStyle:{"margin-top":"16px","margin-bottom":"16px"}}),t._v(" "),a("q-field",{attrs:{label:"Applying CSS classes","label-width":4}},[a("div",{staticClass:"group",staticStyle:{margin:"-5px"}},t._l(t.computedClasses,function(e){return a("q-chip",{key:e,attrs:{color:"secondary",square:""}},[t._v("\n                "+t._s(e)+"\n              ")])}))])]:t._e()],2)],1),t._v(" "),a("div",{staticClass:"row justify-center"},[a("table",{staticClass:"q-table",class:t.computedClasses,staticStyle:{"margin-top":"30px"}},[t._m(0),t._v(" "),t._m(1)])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Name")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("Price")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("In Stock")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tbody",[a("tr",[a("td",{staticClass:"text-left",attrs:{"data-th":"Name"}},[t._v("Item #1")]),t._v(" "),a("td",{staticClass:"text-right",attrs:{"data-th":"Price"}},[t._v("$10.11")]),t._v(" "),a("td",{staticClass:"text-right",attrs:{"data-th":"In Stock"}},[t._v("101")])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left",attrs:{"data-th":"Name"}},[t._v("Item #2")]),t._v(" "),a("td",{staticClass:"text-right",attrs:{"data-th":"Price"}},[t._v("$8.88")]),t._v(" "),a("td",{staticClass:"text-right",attrs:{"data-th":"In Stock"}},[t._v("34")])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left",attrs:{"data-th":"Name"}},[t._v("Item #3")]),t._v(" "),a("td",{staticClass:"text-right",attrs:{"data-th":"Price"}},[t._v("$0.15")]),t._v(" "),a("td",{staticClass:"text-right",attrs:{"data-th":"In Stock"}},[t._v("1670")])])])}]}}});