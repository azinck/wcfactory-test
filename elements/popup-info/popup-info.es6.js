import{HAXWiring}from"./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";class PopupInfo extends HTMLElement{get html(){return`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}

.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3;
}

img {
  width: 1.2rem;
}

.icon:hover + .info, .icon:focus + .info {
  opacity: 1;
}</style>
<span class="wrapper">
  <span class="icon"><img src="${img}" /></span>
  <span class="info">${text}</span>
</span>`}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Popup info",description:"",icon:"icons:android",color:"green",groups:["Info"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"azinck",owner:""}},settings:{quick:[],configure:[{property:"text",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"img",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}static get properties(){return{text:{name:"text",type:"String",value:""},img:{name:"img",type:"String",value:""}}}static get tag(){return"popup-info"}constructor(delayRender=!1){super();this.tag=PopupInfo.tag;let obj=PopupInfo.properties;for(let p in obj){if(obj.hasOwnProperty(p)){if(this.hasAttribute(p)){this[p]=this.getAttribute(p)}else{this.setAttribute(p,obj[p].value);this[p]=obj[p].value}}}this._queue=[];this.template=document.createElement("template");this.attachShadow({mode:"open"});if(!delayRender){this.render()}}connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}if(this._queue.length){this._processQueue()}this.HAXWiring=new HAXWiring;this.HAXWiring.setHaxProperties(PopupInfo.haxProperties,PopupInfo.tag,this)}_copyAttribute(name,to){const recipients=this.shadowRoot.querySelectorAll(to),value=this.getAttribute(name),fname=null==value?"removeAttribute":"setAttribute";for(const node of recipients){node[fname](name,value)}}_queueAction(action){this._queue.push(action)}_processQueue(){this._queue.forEach(action=>{this[`_${action.type}`](action.data)});this._queue=[]}_setProperty({name,value}){this[name]=value}render(){this.shadowRoot.innerHTML=null;this.template.innerHTML=this.html;if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(this.template,this.tag)}this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}window.customElements.define("popup-info",PopupInfo);export{PopupInfo};