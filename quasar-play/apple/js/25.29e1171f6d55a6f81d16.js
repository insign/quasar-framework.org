webpackJsonp([25],{118:function(e,t,a){var l=a(3)(a(257),a(458),null,null,null);e.exports=l.exports},187:function(e,t,a){t=e.exports=a(98)(void 0),t.push([e.i,".docs-input .caption:not(:first-child){margin-top:60px}.docs-input .dark-example{background:#424242;padding:5px 15px 15px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:2px}",""])},188:function(e,t,a){var l=a(187);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(99)("654c67fb",l,!0)},257:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(0);a(188);var i=new Date,o=l.date.startOfDate,s=l.date.addToDate,d=l.date.subtractFromDate;t.default={components:{QDatetime:l.QDatetime,QField:l.QField,QList:l.QList,QItem:l.QItem,QItemSide:l.QItemSide,QItemMain:l.QItemMain,QItemSeparator:l.QItemSeparator,QListHeader:l.QListHeader},data:function(){return{date1:null,date2:null,date3:null,date4:null,date5:null,date6:null,date7:null,date8:null,date9:null,today:i,tomorrow:s(i,{days:1}),yesterday:d(i,{days:1}),state:new Date,defaultSelection:o(i,"year")}}}},458:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout-padding docs-input row justify-center"},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[e._m(0),e._v(" "),a("q-datetime",{attrs:{"float-label":"Date"},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}}),e._v(" "),a("q-datetime",{attrs:{inverted:"",color:"secondary","monday-first":"","stack-label":"Date (Monday as first day)"},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}}),e._v(" "),a("q-datetime",{attrs:{inverted:"",color:"light-blue","saturday-first":"","stack-label":"Date (Saturday as first day)"},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}}),e._v(" "),a("q-datetime",{attrs:{inverted:"",color:"orange",type:"time","float-label":"Time"},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}}),e._v(" "),"mat"===e.$q.theme?a("q-datetime",{attrs:{color:"brown",type:"time",format24h:"","float-label":"Time (24h) format"},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}}):e._e(),e._v(" "),a("q-datetime",{attrs:{color:"purple",type:"datetime","float-label":"Date & Time"},model:{value:e.date3,callback:function(t){e.date3=t},expression:"date3"}}),e._v(" "),a("br"),a("br"),e._v(" "),a("q-datetime",{attrs:{"default-selection":e.defaultSelection,type:"datetime",color:"brown","float-label":"With default selection & placeholder",placeholder:"Start of this year as default"},model:{value:e.date4,callback:function(t){e.date4=t},expression:"date4"}}),e._v(" "),a("q-datetime",{attrs:{"display-value":e.date5?"Picked date. Thanks!":"Pick a date, will ya?",type:"date",inverted:"",color:"brown","stack-label":"With display value"},model:{value:e.date5,callback:function(t){e.date5=t},expression:"date5"}}),e._v(" "),a("q-datetime",{attrs:{type:"date",color:"amber","stack-label":"No 'Clear' button","no-clear":""},model:{value:e.today,callback:function(t){e.today=t},expression:"today"}}),e._v(" "),a("p",{staticClass:"caption"},[e._v("Min / max selection")]),e._v(" "),a("q-datetime",{attrs:{min:e.tomorrow,"stack-label":"Pick date starting with tomorrow"},model:{value:e.date7,callback:function(t){e.date7=t},expression:"date7"}}),e._v(" "),a("q-datetime",{attrs:{max:e.yesterday,"stack-label":"Pick a date in the past"},model:{value:e.date8,callback:function(t){e.date8=t},expression:"date8"}}),e._v(" "),a("q-datetime",{attrs:{type:"datetime",min:e.yesterday,max:e.tomorrow,"stack-label":"Pick a date & time in an interval"},model:{value:e.date9,callback:function(t){e.date9=t},expression:"date9"}}),e._v(" "),a("p",{staticClass:"caption"},[e._v("Disable / Error states")]),e._v(" "),a("q-datetime",{attrs:{disable:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}),e._v(" "),a("q-datetime",{attrs:{disable:"",inverted:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}),e._v(" "),a("q-datetime",{attrs:{error:"","float-label":"Hey, an error!"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}),e._v(" "),a("q-datetime",{attrs:{error:"",inverted:"","float-label":"Look, look. An error."},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}),e._v(" "),a("p",{staticClass:"caption"},[e._v("In a Field")]),e._v(" "),a("q-field",{attrs:{icon:"local_movies",helper:"Pick when to schedule a movie"}},[a("q-datetime",{attrs:{min:e.today,"float-label":"Pick date"},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}})],1),e._v(" "),a("q-field",{attrs:{icon:"golf_course",label:"Golf course",helper:"Pick a date"}},[a("q-datetime",{attrs:{inverted:"",color:"purple"},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}})],1),e._v(" "),a("p",{staticClass:"caption"},[e._v("In a List")]),e._v(" "),a("q-list",[a("q-list-header",[e._v("Date or Time")]),e._v(" "),a("q-item",[a("q-item-side",{attrs:{icon:"access_time"}}),e._v(" "),a("q-item-main",[a("q-datetime",{staticClass:"no-margin",attrs:{type:"time"},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}})],1)],1),e._v(" "),a("q-item",[a("q-item-side",{attrs:{icon:"update"}}),e._v(" "),a("q-item-main",[a("q-datetime",{staticClass:"no-margin",attrs:{type:"date"},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}})],1)],1),e._v(" "),a("q-item-separator"),e._v(" "),a("q-list-header",[e._v("Date & Time")]),e._v(" "),a("q-item",[a("q-item-side",{attrs:{icon:"notifications"}}),e._v(" "),a("q-item-main",[a("q-datetime",{staticClass:"no-margin",attrs:{type:"datetime"},model:{value:e.date3,callback:function(t){e.date3=t},expression:"date3"}})],1)],1)],1),e._v(" "),a("p",{staticClass:"caption"},[e._v("On dark background")]),e._v(" "),a("div",{staticClass:"dark-example"},[a("q-datetime",{attrs:{dark:"","stack-label":"Pick start time",color:"amber",type:"time"},model:{value:e.date6,callback:function(t){e.date6=t},expression:"date6"}}),e._v(" "),a("q-field",{attrs:{dark:"",icon:"school",label:"Javascript",helper:"Pick a start time"}},[a("q-datetime",{attrs:{dark:"",color:"secondary",type:"time"},model:{value:e.date6,callback:function(t){e.date6=t},expression:"date6"}})],1)],1)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"caption"},[a("span",{staticClass:"desktop-only"},[e._v("\n        On a real mobile device DateTime Input opens up a Modal\n        instead of a Popover.\n      ")]),e._v(" "),a("span",{staticClass:"mobile-only"},[e._v("\n        On a desktop platform DateTime Input opens up a Popover\n        instead of a Modal.\n      ")])])}]}}});