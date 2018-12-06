define(["exports","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PopupInfo=void 0;var PopupInfo=function(_HTMLElement){babelHelpers.inherits(PopupInfo,_HTMLElement);babelHelpers.createClass(PopupInfo,[{key:"html",get:function get(){return"\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"}}],[{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Popup info",description:"",icon:"icons:android",color:"green",groups:["Info"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"azinck",owner:""}},settings:{quick:[],configure:[{property:"text",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"img",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function get(){return{text:{name:"text",type:"String",value:"",reflectToAttribute:!1,observer:!1},img:{name:"img",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}},{key:"tag",get:function get(){return"popup-info"}}]);function PopupInfo(){var _this,delayRender=0<arguments.length&&arguments[0]!==void 0?arguments[0]:!1;babelHelpers.classCallCheck(this,PopupInfo);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PopupInfo).call(this));_this.tag=PopupInfo.tag;var obj=PopupInfo.properties;for(var p in obj){if(obj.hasOwnProperty(p)){if(_this.hasAttribute(p)){_this[p]=_this.getAttribute(p)}else{_this.setAttribute(p,obj[p].value);_this[p]=obj[p].value}}}_this._queue=[];_this.template=document.createElement("template");_this.attachShadow({mode:"open"});if(!delayRender){_this.render()}return _this}babelHelpers.createClass(PopupInfo,[{key:"connectedCallback",value:function connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}if(this._queue.length){this._processQueue()}this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setHaxProperties(PopupInfo.haxProperties,PopupInfo.tag,this)}},{key:"_copyAttribute",value:function _copyAttribute(name,to){var recipients=this.shadowRoot.querySelectorAll(to),value=this.getAttribute(name),fname=null==value?"removeAttribute":"setAttribute",_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=recipients[Symbol.iterator](),_step,node;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){node=_step.value;node[fname](name,value)}}catch(err){_didIteratorError=!0;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}}},{key:"_queueAction",value:function _queueAction(action){this._queue.push(action)}},{key:"_processQueue",value:function _processQueue(){var _this2=this;this._queue.forEach(function(action){_this2["_".concat(action.type)](action.data)});this._queue=[]}},{key:"_setProperty",value:function _setProperty(_ref){var name=_ref.name,value=_ref.value;this[name]=value}},{key:"render",value:function render(){this.shadowRoot.innerHTML=null;this.template.innerHTML=this.html;if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(this.template,this.tag)}this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}]);return PopupInfo}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.PopupInfo=PopupInfo;window.customElements.define("popup-info",PopupInfo)});