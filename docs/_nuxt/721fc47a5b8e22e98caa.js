/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{184:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(187))&&n.__esModule?n:{default:n};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===c(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=f;t.len=function(e){return Array.isArray(e)?e.length:"object"===c(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},function(e){return!f(e)||t.test(e)})}},185:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return A.default}}),t.helpers=void 0;var n=T(r(186)),o=T(r(189)),c=T(r(190)),f=T(r(191)),l=T(r(192)),d=T(r(193)),m=T(r(194)),v=T(r(195)),y=T(r(196)),h=T(r(197)),_=T(r(198)),P=T(r(199)),j=T(r(200)),O=T(r(201)),$=T(r(202)),w=T(r(203)),x=T(r(204)),M=T(r(205)),C=T(r(206)),k=T(r(207)),A=T(r(208)),S=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(184));function T(e){return e&&e.__esModule?e:{default:e}}t.helpers=S},186:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(184).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},187:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(188).withParams:r(113).withParams;t.default=n}).call(this,r(73))},188:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e(function(){})};t.withParams=o}).call(this,r(21))},189:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(184).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(184).regex)("numeric",/^[0-9]*$/);t.default=n},191:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r})}},192:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(184).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=n},193:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184),o=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(c)});t.default=o;var c=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},194:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)})};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},195:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})}},196:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})}},197:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184),o=(0,n.withParams)({type:"required"},n.req);t.default=o},198:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},199:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},200:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})}},201:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(184).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/i);t.default=n},202:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})}},203:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})}},204:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(e){return(0,n.withParams)({type:"not"},function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)})}},205:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})}},206:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(184);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})}},207:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(184).regex)("integer",/^-?[0-9]*$/);t.default=n},208:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(184).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},209:function(e,t,r){"use strict";r(111),r(112),r(16);t.a=function(){return Math.random().toString(36).substr(2,9)}},211:function(e,t,r){"use strict";r(35);var n=r(49),o=r.n(n),c=r(185),f={props:{formFieldType:{type:String,required:!0,default:function(){return{}}}},validations:{form:{currency:{required:c.required},name:{required:c.required,maxLength:Object(c.maxLength)(10)},amount:{required:c.required,between:Object(c.between)(1,1e6)}}},data:function(){return{valid:!1,form:{currency:"",name:"",amount:""},currencyItems:["USD","EUR","GBP","RUB"]}},computed:{currencyErrors:function(){var e=[];return this.$v.form.currency.$dirty?(!this.$v.form.currency.required&&e.push("Item is required"),e):e},nameErrors:function(){var e=[];return this.$v.form.name.$dirty?(!this.$v.form.name.maxLength&&e.push("Name must be at most 10 characters long"),!this.$v.form.name.required&&e.push("Name is required."),e):e},amountErrors:function(){var e=[];return this.$v.form.amount.$dirty?(!this.$v.form.amount.between&&e.push("Must be between 1 and 1.000.000"),!this.$v.form.amount.required&&e.push("Amount is required"),e):e}},methods:{submit:function(){var e={currency:this.form.currency,name:this.form.name,amount:o()(this.form.amount)};this.$emit("submitForm",e),this.$v.form.$reset(),this.form={currency:"",name:"",amount:""}}}},l=r(22),component=Object(l.a)(f,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-form",{attrs:{card:""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{label:e.formFieldType+" name",counter:10,required:"",outline:"","error-messages":e.nameErrors},on:{input:function(t){return e.$v.form.name.$touch()},blur:function(t){return e.$v.form.name.$touch()}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-select",{attrs:{items:e.currencyItems,label:e.formFieldType+" currency",required:"",outline:"","error-messages":e.currencyErrors},on:{input:function(t){return e.$v.form.currency.$touch()},blur:function(t){return e.$v.form.currency.$touch()}},model:{value:e.form.currency,callback:function(t){e.$set(e.form,"currency",t)},expression:"form.currency"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{label:e.formFieldType+" amount",type:"number",step:"0.01",required:"",outline:"","error-messages":e.amountErrors},on:{input:function(t){return e.$v.form.amount.$touch()},blur:function(t){return e.$v.form.amount.$touch()}},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),e._v(" "),r("v-flex",[r("v-btn",{attrs:{color:"primary",disabled:e.$v.form.$invalid},on:{click:e.submit}},[e._v("\n            submit\n          ")])],1)],1)],1)],1)],1)},[],!1,null,null,null);t.a=component.exports},214:function(e,t,r){!function(r,n){var o=function(e){return new d(e)};o.version="0.2";var c=r.fxSetup||{rates:{},base:""};o.rates=c.rates,o.base=c.base,o.settings={from:c.from||o.base,to:c.to||o.base};var f=o.convert=function(e,t){if("object"==typeof e&&e.length){for(var i=0;i<e.length;i++)e[i]=f(e[i],t);return e}return(t=t||{}).from||(t.from=o.settings.from),t.to||(t.to=o.settings.to),e*l(t.to,t.from)},l=function(e,t){var r=o.rates;if(r[o.base]=1,!r[e]||!r[t])throw"fx error";return t===o.base?r[e]:e===o.base?1/r[t]:r[e]*(1/r[t])},d=function(e){"string"==typeof e?(this._v=parseFloat(e.replace(/[^0-9-.]/g,"")),this._fx=e.replace(/([^A-Za-z])/g,"")):this._v=e},m=o.prototype=d.prototype;m.convert=function(){var e=Array.prototype.slice.call(arguments);return e.unshift(this._v),f.apply(o,e)},m.from=function(e){var t=o(f(this._v,{from:e,to:o.base}));return t._fx=o.base,t},m.to=function(e){return f(this._v,{from:this._fx?this._fx:o.settings.from,to:e})},e.exports&&(t=e.exports=o),t.fx=o}(this)},215:function(e,t,r){"use strict";r.r(t);var n=r(49),o=r.n(n),c=r(214),f=r.n(c),l=r(70),d=r(211),m=r(19),v=r(209),y={components:{ClForm:d.a},data:function(){return{budget:null,snackbar:!1,multiLine:!0,timeout:6e3,interval:null}},computed:Object(l.c)(["baseCurrency"]),watch:{baseCurrency:function(e,t){f.a.rates=e}},beforeCreate:function(){this.$nextTick(function(){this.budget=this.$store.getters.getBudgetById(this.$route.params.id),void 0===this.budget&&this.$router.push({path:"/budgets"}),this.budget&&(this.fetchRates(this.budget.currency),f.a.base=this.budget.currency)})},mounted:function(){var e=this;m.a.getFromLocalStorage(this.$store),this.interval=setInterval(function(){e.fetchRates(e.budget.currency)},3e4)},destroyed:function(){clearInterval(this.interval)},methods:{setTransaction:function(form){var e=this.convertCurrency(form.amount,form.currency,this.budget.currency);this.budget.amount>=e?this.createTransaction(form,e):this.snackbar=!0},deleteTransaction:function(i,e){this.$store.dispatch("deleteTransaction",{index:i,id:this.budget.id,amount:o()(this.budget.amount).add(this.convertCurrency(e.amount.value,e.currency,this.budget.currency))})},createTransaction:function(form,e){form.id=Object(v.a)(),this.$store.dispatch("addTransaction",{data:form,id:this.budget.id,amount:this.budget.amount-e})},fetchRates:function(e){var t=this;this.$axios.get("https://api.exchangeratesapi.io/latest?base=".concat(e)).then(function(e){t.$store.dispatch("setBaseCurrency",e.data.rates)}).catch(function(e){console.log(e)})},convertCurrency:function(e,t,r){return f()(e).from(t).to(r)},resetTransactions:function(){var e=this;this.budget.transactions.slice(0).forEach(function(t){e.$store.dispatch("resetTransaction",{transactionId:t.id,budgetId:e.budget.id,amount:o()(e.budget.amount).add(e.convertCurrency(t.amount.value,t.currency,e.budget.currency))})})}}},h=r(22),component=Object(h.a)(y,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{staticClass:"ml-auto mb-3",attrs:{outline:"",color:"primary",to:"/budgets"}},[r("v-icon",{staticClass:"mr-1"},[e._v("arrow_back")]),e._v("\n    Go to budgets\n  ")],1),e._v(" "),r("v-card",{staticClass:"mb-3"},[e.budget?r("v-card-title",[r("h1",{staticClass:"display-1"},[e._v(e._s(e.budget.name))]),e._v(" "),r("h2",{staticClass:"display-1 ml-auto"},[e._v("\n        "+e._s(e.budget.amount)+" "+e._s(e.budget.currency)+"\n      ")]),e._v(" "),r("v-btn",{attrs:{outline:"",color:"error"},on:{click:e.resetTransactions}},[e._v("\n        Reset all "),r("v-icon",{staticClass:"ml-1"},[e._v("delete_sweep")])],1)],1):e._e()],1),e._v(" "),e.budget?r("cl-form",{staticClass:"budget-form mb-2",attrs:{"form-field-type":"Tariff"},on:{submitForm:e.setTransaction}}):e._e(),e._v(" "),e.budget?r("transition-group",{staticClass:"budget-card",attrs:{name:"list",tag:"div"}},e._l(e.budget.transactions,function(t,i){return r("v-card",{key:i+"-"+t,staticClass:"mt-2 budget-card-item list-item"},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticClass:"card-title"},[r("h2",{staticClass:"headline mb-0"},[e._v(e._s(t.name))]),e._v(" "),r("h2",[e._v(e._s(t.amount)+" "+e._s(t.currency))])])]),e._v(" "),r("v-card-actions",{staticClass:"card-actions"},[r("v-btn",{attrs:{outline:"",color:"error"},on:{click:function(r){return e.deleteTransaction(i,t)}}},[e._v("\n          Delete\n          "),r("v-icon",{attrs:{right:"",dark:""}},[e._v("delete")])],1)],1)],1)}),1):e._e(),e._v(" "),r("v-snackbar",{attrs:{color:"error","multi-line":e.multiLine,timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    Not enough credit\n  ")])],1)},[],!1,null,null,null);t.default=component.exports}}]);