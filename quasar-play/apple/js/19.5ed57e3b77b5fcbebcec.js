webpackJsonp([19],{128:function(e,l,t){var o=t(3)(t(267),t(460),null,null,null);e.exports=o.exports},187:function(e,l,t){l=e.exports=t(98)(void 0),l.push([e.i,".docs-input .caption:not(:first-child){margin-top:60px}.docs-input .dark-example{background:#424242;padding:5px 15px 15px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:2px}",""])},188:function(e,l,t){var o=t(187);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(99)("654c67fb",o,!0)},267:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=t(0);t(188),l.default={components:{QDialogSelect:o.QDialogSelect,QField:o.QField},data:function(){return{select:"fb",multipleSelect:["goog","twtr"],options:[{label:"Google",value:"goog"},{label:"Facebook",value:"fb"},{label:"Twitter",value:"twtr"},{label:"Apple Inc.",value:"appl"},{label:"Oracle",value:"ora"}],listOptions:[{label:"Google",icon:"email",value:"goog"},{label:"Facebook",icon:"chat",description:"Enables communication",value:"fb"},{label:"Twitter",inset:!0,rightIcon:"live_help",value:"twtr"},{label:"Apple Inc.",inset:!0,stamp:"10 min",value:"appl"},{label:"Oracle",description:"Some Java for today?",icon:"unarchive",rightIcon:"widgets",value:"ora"}]}}}},460:function(e,l){e.exports={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"layout-padding docs-input row justify-center"},[t("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t("p",{staticClass:"caption"},[e._v("Single selection")]),e._v(" "),t("q-dialog-select",{attrs:{options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-dialog-select",{attrs:{"stack-label":"Delimited options",inverted:"",color:"amber",separator:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-dialog-select",{attrs:{color:"secondary","float-label":"List with float label",options:e.listOptions},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-dialog-select",{attrs:{radio:"",color:"secondary","float-label":"With Radio",options:e.listOptions},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Multiple selection")]),e._v(" "),t("q-dialog-select",{attrs:{multiple:"",color:"indigo",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("q-dialog-select",{attrs:{multiple:"",inverted:"",color:"dark","stack-label":"Delimited options",separator:"",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("q-dialog-select",{attrs:{multiple:"",toggle:"",inverted:"",color:"orange","float-label":"List with float label & toggles",options:e.listOptions},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("q-dialog-select",{attrs:{multiple:"",chips:"",color:"purple","float-label":"With chips",options:e.listOptions},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("q-dialog-select",{attrs:{multiple:"","float-label":"With custom display value","display-value":e.multipleSelect.length+" companies selected",options:e.listOptions},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Disable / Error states")]),e._v(" "),t("q-dialog-select",{attrs:{disable:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-dialog-select",{attrs:{disable:"",inverted:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-dialog-select",{attrs:{error:"","float-label":"Hey, an error!",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-dialog-select",{attrs:{error:"",inverted:"",multiple:"","float-label":"Look, look. An error.",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("In a Field")]),e._v(" "),t("q-field",{attrs:{icon:"public",label:"Pick employers",helper:"Pick company names"}},[t("q-dialog-select",{attrs:{multiple:"",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}})],1),e._v(" "),t("q-field",{attrs:{icon:"public",count:5,label:"Pick employers",helper:"Pick company names"}},[t("q-dialog-select",{attrs:{inverted:"",chips:"",color:"black","frame-color":"amber",multiple:"",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}})],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("On dark background")]),e._v(" "),t("div",{staticClass:"dark-example"},[t("q-dialog-select",{attrs:{dark:"","stack-label":"Delimited options",color:"amber",separator:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-field",{attrs:{dark:"",icon:"school",label:"Company"}},[t("q-dialog-select",{attrs:{dark:"","stack-label":"Stack label",color:"lime",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}})],1)],1)],1)])},staticRenderFns:[]}}});