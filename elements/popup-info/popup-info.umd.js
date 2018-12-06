!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],t):t(e.PopupInfo={},e.HAXWiring_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function a(e){var t="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return u(e,arguments,o(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,e)})(e)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var l=function(e){function n(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=c(this,o(n).call(this))).tag=n.tag;var r=n.properties;for(var i in r)r.hasOwnProperty(i)&&(e.hasAttribute(i)?e[i]=e.getAttribute(i):(e.setAttribute(i,r[i].value),e[i]=r[i].value));return e._queue=[],e.template=document.createElement("template"),e.attachShadow({mode:"open"}),t||e.render(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,a(HTMLElement)),r(n,[{key:"html",get:function(){return"\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"}}],[{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Popup info",description:"",icon:"icons:android",color:"green",groups:["Info"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"azinck",owner:""}},settings:{quick:[],configure:[{property:"text",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"img",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return{text:{name:"text",type:"String",value:"",reflectToAttribute:!1,observer:!1},img:{name:"img",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}},{key:"tag",get:function(){return"popup-info"}}]),r(n,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._queue.length&&this._processQueue(),this.HAXWiring=new t.HAXWiring,this.HAXWiring.setHaxProperties(n.haxProperties,n.tag,this)}},{key:"_copyAttribute",value:function(e,t){var n=this.shadowRoot.querySelectorAll(t),r=this.getAttribute(e),o=null==r?"removeAttribute":"setAttribute",i=!0,u=!1,a=void 0;try{for(var c,l=n[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){c.value[o](e,r)}}catch(e){u=!0,a=e}finally{try{i||null==l.return||l.return()}finally{if(u)throw a}}}},{key:"_queueAction",value:function(e){this._queue.push(e)}},{key:"_processQueue",value:function(){var e=this;this._queue.forEach(function(t){e["_".concat(t.type)](t.data)}),this._queue=[]}},{key:"_setProperty",value:function(e){var t=e.name,n=e.value;this[t]=n}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}]),n}();window.customElements.define(l.tag,l),e.PopupInfo=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=popup-info.umd.js.map
