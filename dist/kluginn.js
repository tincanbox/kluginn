!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Kluginn=t():e.Kluginn=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e,t={}){this.core=e,this.$k=e.$k,this.$=e.$,this.config={},this.option=t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),i=n(3),o=n(4),s=n(5);t.default=class{constructor(){if(!kintone)throw new Error("Kluginn only works with kintone !!");this.$=jQuery,this.$k=kintone,this.plugin_id=this.$k.$PLUGIN_ID,this.config=new r.default(this),this.api=new i.default(this),this.ui=new o.default(this),this.vendor={},this.vendor.jquery=jQuery,this.vendor.underscore=_,this.vendor.FM=FM,this.vendor.Swal=Swal,this.vendor.papaparse=Papa,this.service={},this.service.google=new s.default,this.external={gapi:"https://apis.google.com/js/api.js"}}init(e={}){var t=this;return new Promise((function(e,n){var r=[];for(var i in t.external)r.push(t.load(t.external[i]));Promise.race(r).then(e).catch(n)}))}load(e){return new Promise((function(t,n){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=t,r.onerror=n,document.head.appendChild(r)}))}dialog(){return Swal.queue.apply(Swal,[arguments])}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);t.default=class extends r.default{constructor(e,t={}){super(e,t),this.selector={form_input_class:"plugin-data"}}init(){this.$form=this.$(".js-submit-settings"),this.update_form()}apply_app_config(){for(var e in this.config)this.core.$("."+this.selector.form_input_class+"[name="+e+"]").val(this.config[e])}save(e){var t=this;return new t.$k.Promise((function(n,r){var i=t.retrieve_form_data();console.log("Saving form data",i);try{t.$k.plugin.app.setConfig(e?_.extend(i,e):i,(function(){t.update_form(),n(t.config)}))}catch(e){r(e)}}))}fetch_config(){return this.config=this.core.$k.plugin.app.getConfig(this.core.plugin_id),this.config}update_form(){console.log("Updating form"),this.fetch_config(),this.apply_app_config()}retrieve_form_data(){var e=this,t={};return e.core.$("."+e.selector.form_input_class).each((function(n,r){var i=e.core.$(r),o=i.attr("name");t[o]=i.val()})),t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);t.default=class extends r.default{constructor(e,t={}){super(e,t)}request(e,t,n){console.log("API Request["+e+"]",t);return this.$k.api(this.$k.api.url(t,!0),e.toUpperCase(),n?this.$.extend({app:this.$k.app.getId()},n||{}):null)}error_handler(e){return new Promise((function(t,n){return console.log("PLUGIN API ERROR",e),e.code,n(e)}))}fetch_form_field_list(){return this.request("get","/k/v1/app/form/fields",{})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);t.default=class extends r.default{constructor(e,t={}){super(e,t)}bind_action(e){var t=this,n="data-action",r="["+n+"]";t.core.$(r).each((function(i,o){var s=t.core.$(o).attr(n).split(":"),u=s[0],a="action_"+s[1];a in e&&t.core.$(document).on(u,r,t.core.$.proxy(e[a],t.core.$))}))}render(e,t){var n=document.getElementById("template:"+e);if(n){var r=_.template(this.$(n).html());return t?r(t):r}return"TEMPLATE ERROR"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e={}){this.config=e}init(){this.ins=gapi;var e=FM.promise(),t=this;return t.oauth((function(){t.ins.client.init(t.config),e.resolve()}),(function(){e.reject()})),e}oauth(e,t){return this.ins.load("client:auth2",{callback:e,onerror:t})}signin(){return!!this.is_signedin()||this.ins.auth2.getAuthInstance().signIn()}is_signedin(){return!(!this.ins.auth2||!this.ins.auth2.getAuthInstance().isSignedIn.get())}}}])}));