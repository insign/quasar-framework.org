webpackJsonp([22],{123:function(e,t,a){var r=a(3)(a(262),a(418),null,null,null);e.exports=r.exports},189:function(e,t,a){t=e.exports=a(100)(void 0),t.push([e.i,".docs-input .caption:not(:first-child){margin-top:60px}.docs-input .dark-example{background:#424242;padding:5px 15px 15px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:2px}",""])},190:function(e,t,a){var r=a(189);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(101)("654c67fb",r,!0)},262:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0);a(190),t.default={components:{QInput:r.QInput,QToggle:r.QToggle,QIcon:r.QIcon,QField:r.QField,QTooltip:r.QTooltip,QPopover:r.QPopover},data:function(){return{text:"text",num:5,email:"email",password:"password",area:"Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works.",texterr:"Quasar rulz",error:!0,error2:!1,loading:!0}}}},418:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout-padding docs-input row justify-center"},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[a("q-input",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{placeholder:"Placeholder"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{"stack-label":"Stack label"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{"float-label":"Float label"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{"float-label":"Float label & placeholder"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{type:"email","float-label":"Email",suffix:"@gmail.com",clearable:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("q-input",{attrs:{type:"password","float-label":"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),a("q-input",{attrs:{"float-label":"Clearable",clearable:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{type:"number",prefix:"$","float-label":"Number with prefix"},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),e._v(" "),a("q-input",{attrs:{type:"number","float-label":"Number with prefix, suffix, clearable",prefix:"$",suffix:"TSP",clearable:""},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),e._v(" "),a("p",{staticClass:"caption"},[e._v("Inverted")]),e._v(" "),a("q-input",{attrs:{inverted:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{type:"email",inverted:"",color:"secondary",suffix:"@gmail.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("q-input",{attrs:{type:"password",inverted:"",color:"amber",clearable:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),a("q-input",{attrs:{type:"number",align:"right",suffix:"EUR",inverted:"",color:"brown","stack-label":"Number aligned to right"},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),e._v(" "),a("p",{staticClass:"caption"},[e._v("Before/after icons")]),e._v(" "),a("q-input",{attrs:{type:"email",before:[{icon:"mail",handler:function(){}}],suffix:"@gmail.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("q-input",{attrs:{inverted:"","float-label":"Icon dissapears on empty input",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{inverted:"",color:"secondary",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{"float-label":"Minimum 5 characters password",inverted:"",color:"amber",type:"password",after:[{icon:"done",condition:e.password.length>=5,handler:function(){}}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),a("q-input",{attrs:{inverted:"",color:"brown",type:"email",before:[{icon:"mail",handler:function(){}}],suffix:"@gmail.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("q-input",{attrs:{inverted:"",type:"number",before:[{icon:"monetization_on",handler:function(){}}]},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),e._v(" "),a("p",{staticClass:"caption"},[e._v("Textarea (auto-grows)")]),e._v(" "),a("q-input",{attrs:{type:"textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),e._v(" "),a("q-input",{attrs:{inverted:"",color:"secondary","float-label":"Inverted textarea",type:"textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),e._v(" "),a("q-input",{attrs:{inverted:"",color:"purple","min-rows":5,"float-label":"Inverted textarea",type:"textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),e._v(" "),a("p",{staticClass:"caption"},[e._v("Error state")]),e._v(" "),a("q-input",{attrs:{error:"","float-label":"Has always error"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-toggle",{staticStyle:{"margin-top":"16px"},attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}}),e._v(" "),a("q-input",{attrs:{error:e.error},model:{value:e.texterr,callback:function(t){e.texterr=t},expression:"texterr"}}),e._v(" "),a("q-input",{attrs:{error:e.error,"float-label":"Signaling error"},model:{value:e.texterr,callback:function(t){e.texterr=t},expression:"texterr"}}),e._v(" "),a("q-input",{attrs:{error:e.error,inverted:""},model:{value:e.texterr,callback:function(t){e.texterr=t},expression:"texterr"}}),e._v(" "),a("q-input",{attrs:{error:e.error,inverted:"","float-label":e.error?"We got an error":"Everything fine now",after:[{icon:"warning",error:!0,handler:function(){}}]},model:{value:e.texterr,callback:function(t){e.texterr=t},expression:"texterr"}}),e._v(" "),a("p",{staticClass:"caption"},[e._v("Disabled")]),e._v(" "),a("q-input",{attrs:{disable:"","float-label":"Disabled text input"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{disable:"",inverted:"",color:"amber","float-label":"Disabled & inverted"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{"min-rows":5,disable:"",type:"textarea","float-label":"Disabled textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),e._v(" "),a("q-input",{attrs:{"min-rows":5,disable:"",inverted:"",type:"textarea","float-label":"Disabled & inverted textarea"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),e._v(" "),a("p",{staticClass:"caption"},[e._v("With loading state")]),e._v(" "),a("q-toggle",{attrs:{label:"Toggle loading state"},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}}),e._v(" "),a("q-input",{attrs:{loading:e.loading},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{loading:e.loading,"stack-label":"Loading or not?"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{loading:e.loading,inverted:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("q-input",{attrs:{loading:e.loading,inverted:"",color:"secondary","stack-label":"Loading or not?"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),a("p",{staticClass:"caption"},[e._v("In a Field")]),e._v(" "),a("q-toggle",{attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error2,callback:function(t){e.error2=t},expression:"error2"}}),e._v(" "),a("br"),a("br"),e._v(" "),a("q-field",{attrs:{count:7,error:e.error2,helper:"What's your account name?","error-label":"Hey, we got an error"}},[a("q-input",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),a("q-field",{attrs:{icon:"wifi",helper:"Your awesome helper",error:e.error2,"error-label":"We got an error"}},[a("q-input",{attrs:{"float-label":"Textfield"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),a("br"),e._v(" "),a("q-field",{attrs:{icon:"account_circle",label:"Account",count:7,error:e.error2,helper:"What's your account name?","error-label":"Hey, we got an error"}},[a("q-input",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),a("q-field",{attrs:{icon:"card_travel",label:"Travel card",error:e.error2,helper:"Some helper","error-label":"Wait, wait. Error!"}},[a("q-input",{attrs:{"float-label":"Float label"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),a("q-field",{attrs:{icon:"important_devices",label:"Device name",count:15,helper:"Some helper",error:e.error2,"error-label":"Wait, wait. Error!"}},[a("q-input",{attrs:{inverted:"",placeholder:"On Field",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),a("q-field",{attrs:{icon:"place",label:"Your destination",helper:"Some helper",error:e.error2,"error-label":"Some error"}},[a("q-input",{attrs:{color:"amber",inverted:"","stack-label":"Stack Label",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),a("q-field",{attrs:{icon:"wifi",label:"Wifi network",helper:"We need your wifi id",error:e.error2,"error-label":"That's not a valid id number"}},[a("q-input",{attrs:{color:"amber",inverted:e.error,"float-label":"Float Label",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),a("p",{staticClass:"caption"},[e._v("On a dark background")]),e._v(" "),a("div",{staticClass:"dark-example"},[a("q-input",{attrs:{type:"number","float-label":"Colored",dark:"",color:"yellow",prefix:"$",suffix:"TSP"},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),e._v(" "),a("q-input",{attrs:{type:"number","float-label":"Colored",dark:"",color:"secondary",prefix:"$",suffix:"TSP"},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),e._v(" "),a("q-field",{attrs:{icon:"wifi",label:"Wifi network",count:10,helper:"We need this for connecting you"}},[a("q-input",{attrs:{dark:"",color:"yellow","float-label":"Wifi name"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)],1),e._v(" "),a("p",{staticClass:"caption"},[e._v("With tooltip/popover")]),e._v(" "),a("q-input",{attrs:{"float-label":"Tooltip"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}},[a("q-tooltip",[e._v("Some tooltip")])],1),e._v(" "),a("q-input",{attrs:{"float-label":"Popover"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}},[a("q-popover",{attrs:{fit:"",offset:[0,10]}},[a("div",{staticClass:"bg-primary text-white",staticStyle:{padding:"10px"}},[e._v("\n          Some popover content\n        ")])])],1)],1)])},staticRenderFns:[]}}});