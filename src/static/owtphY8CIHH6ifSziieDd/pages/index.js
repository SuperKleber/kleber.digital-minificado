(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,t,n){e.exports=n(107)},206:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(238),{page:e.exports.default}})},223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.flush=function(){var e=c.cssRules();return c.flush(),e};var o,i=n(0),a=n(224);var c=new((o=a)&&o.__esModule?o:{default:o}).default,u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.prevProps={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.styleId!==e.styleId||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){c.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.styleId&&c.remove(this.prevProps),c.add(this.props),this.prevProps=this.props),null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return c.computeId(t,n)}).join(" ")}}]),t}();t.default=u},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(225)),i=a(n(226));function a(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,a=void 0!==o&&o,c=t.isBrowser,u=void 0===c?"undefined"!=typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"==typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return r(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join("\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),i=t+r;return e[i]||(e[i]="jsx-"+(0,o.default)(t+"-"+r)),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var n=this.computeId(e.styleId,e.dynamic);return{styleId:n,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=c},225:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},226:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,i=void 0===n?"stylesheet":n,c=t.optimizeForSpeed,u=void 0===c?r:c,s=t.isBrowser,l=void 0===s?"undefined"!=typeof window:s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"==typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}return n(e,[{key:"setOptimizeForSpeed",value:function(e){a("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(a(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];a(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&a(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}]),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n(227))},227:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&y())}function y(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||l||c(y)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},238:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(108),a=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,l(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props,t=e.data,n=e.handleMenu;return o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{onClick:n,className:"icon-star-full",href:t.href},t.text))}}])&&u(n.prototype,i),a&&u(n,a),t}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=h(t).call(this),e=!r||"object"!==y(r)&&"function"!=typeof r?b(n):r,v(b(b(e)),"state",{openMenu:!0}),v(b(b(e)),"handleMenu",function(t){e.state.openMenu?(e.setState({openMenu:!e.state.openMenu}),e.button.current.className="MenuClose",e.MenuElements.current.className="MenuElements"):(e.setState({openMenu:!e.state.openMenu}),e.button.current.className="MenuOpen",e.MenuElements.current.className="MenuElements MenuElementsClose")}),e.button=o.a.createRef(),e.MenuElements=o.a.createRef(),e}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this,t=this.props.data;return o.a.createElement("nav",{className:"Menu",id:"menu"},o.a.createElement("a",{href:"/","data-text":t.title,className:"titleMenu"},t.title),o.a.createElement("ul",{ref:this.MenuElements,className:"MenuElements MenuElementsClose"},t.MenuElement.map(function(t){return o.a.createElement(p,{handleMenu:e.handleMenu,data:t})})),o.a.createElement("button",{onClick:this.handleMenu,ref:this.button,className:"MenuOpen"}))}}])&&m(n.prototype,i),a&&m(n,a),t}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,O(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("footer",{className:"Footer",id:"footer"},o.a.createElement("div",{className:"Contacto"},o.a.createElement("h1",null,"Contacto"),o.a.createElement("div",null,o.a.createElement("h3",{className:"icon-instagram"},"Instagram"),o.a.createElement("a",{href:"https://www.instagram.com/kleber.digital/"},"@kleber.digital")),o.a.createElement("div",null,o.a.createElement("h3",{className:"icon-whatsapp"},"WhatsApp"),o.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=59170657034&text=Hola%20Kleber,%20vengo%20de%20tu%20web,%20me%20gustaría%20que%20trabajemos%20juntos,%20mi%20nombre%20es"},"+59170657034")),o.a.createElement("div",null,o.a.createElement("h3",{className:"icon-bubble"},"Correo Electrónico"),o.a.createElement("a",{href:"mailto:alejandrofaesta@gmail.com"},"alejandrofaesta@gmail.com"))),o.a.createElement("div",{className:"Others"},o.a.createElement("div",null,o.a.createElement("a",{className:"icon-file-pdf",href:"../static/doc/cv.pdf",download:"Curriculum_kleber_Digital.pdf"},"Descargar Curriculum"))))}}])&&S(n.prototype,i),a&&S(n,a),t}();n(219),n(221);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,T(t).apply(this,arguments))}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props,t=e.data,n=e.children;return o.a.createElement("div",null,o.a.createElement(a.a,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Inconsolata|Montserrat",rel:"stylesheet"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=no"})),o.a.createElement(_,{data:t.Menu}),n,o.a.createElement(j,null))}}])&&P(n.prototype,i),c&&P(n,c),t}(),x=n(37);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,z(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.data;return o.a.createElement("div",{className:"About",id:"about"},o.a.createElement("h2",{className:"AboutText"},e.description),o.a.createElement("img",{className:"AboutImg",src:e.imgSrc,alt:e.imgAlt}))}}])&&A(n.prototype,i),a&&A(n,a),t}(),B=n(48),L=n.n(B);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var H=function(e){function t(){var e,n,r,i,a,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,e=!(r=U(t).call(this))||"object"!==W(r)&&"function"!=typeof r?G(n):r,i=G(G(e)),c={style:{color:""}},(a="state")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,e.text=o.a.createRef(),e}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,r["Component"]),n=t,(i=[{key:"componentWillMount",value:function(){var e=this.props.data.color;this.state.style.color=e}},{key:"render",value:function(){var e=this.props.data,t=e.title,n=e.icon;return o.a.createElement("div",{className:L.a.dynamic([["3655436608",[this.state.style.color]]])+" CompetitionsDetail"},o.a.createElement("h1",{ref:this.text,className:L.a.dynamic([["3655436608",[this.state.style.color]]])+" "+("CompetitionsDetailTitle icon-"+n||"")},t),o.a.createElement(L.a,{styleId:"3655436608",css:["h1.__jsx-style-dynamic-selector::before{color:".concat(this.state.style.color," !important;}")],dynamic:[this.state.style.color]}))}}])&&q(n.prototype,i),a&&q(n,a),t}();function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Q(this,V(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.data,t=(e.title,e.CompetitionsDetails);return o.a.createElement("div",{className:"CompetitionsResume"},o.a.createElement("div",{className:"CompetitionsDetailsElement"},t.map(function(e){return o.a.createElement(H,{data:e})})))}}])&&K(n.prototype,i),a&&K(n,a),t}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var oe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),te(this,ne(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.data,t=e.title,n=e.CompetitionsResume;e.CompetitionsDetails;return o.a.createElement("div",{className:"Competitions",id:"competitions"},o.a.createElement("h1",{className:"CompetitionsTitle"},t),o.a.createElement("div",{className:"CompetitionsResumeElement",id:"competitionsResumeElement"},n.map(function(e){return o.a.createElement(Z,{data:e})})))}}])&&ee(n.prototype,i),a&&ee(n,a),t}();function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t){return!t||"object"!==ie(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var le=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ce(this,ue(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props,t=e.data,n=e.handleOpenModal;return o.a.createElement("div",{className:"Modal",id:"modal"},o.a.createElement("div",{className:"ModalContent"},o.a.createElement("h1",{className:"ModalTitle"},t),o.a.createElement("div",{className:"ModalChildren"},this.props.children),o.a.createElement("button",{className:"ModalClose",onClick:n})))}}])&&ae(n.prototype,i),a&&ae(n,a),t}();function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=this,o=(e=ye(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==fe(o)&&"function"!=typeof o?he(r):o,de(he(he(n)),"state",{openModal:!1}),de(he(he(n)),"handleOpenModal",function(e){n.setState({openModal:!n.state.openModal})}),n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.data,t=e.text,n=e.imgSrc,r=e.imgAlt;e.actionText,e.description;return o.a.createElement("div",{onClick:this.handleOpenModal,className:"Card",id:"card"},o.a.createElement("div",{className:"ImageContent"},o.a.createElement("img",{className:"CardImage",src:n,alt:r})),o.a.createElement("div",{className:"CardContent"},o.a.createElement("h1",{className:"CardText"},t)))}}])&&pe(n.prototype,i),a&&pe(n,a),t}();function ve(e){return(ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ge(e,t){return!t||"object"!==ve(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function we(e,t){return(we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Oe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ge(this,Se(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&we(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.data;return o.a.createElement(be,{data:e})}}])&&_e(n.prototype,i),a&&_e(n,a),t}();function Ee(e){return(Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ce(e){return(Ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pe(e,t){return(Pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Me=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=this,o=(e=Ce(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==Ee(o)&&"function"!=typeof o?ke(r):o,Te(ke(ke(n)),"state",{openModal:!1}),Te(ke(ke(n)),"openModal",function(e){n.setState({openModal:!n.state.openModal})}),n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pe(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.data;return o.a.createElement("div",{className:"Services",id:"services"},o.a.createElement("h1",{className:"ServicesTitle"},e.title),o.a.createElement("div",{className:"ServicesElement"},e.ServicesElement.map(function(e){return o.a.createElement(Oe,{data:e})})),o.a.createElement("button",{onClick:this.openModal,className:"ServicesButton"},e.callToAction),this.state.openModal&&o.a.createElement(le,{data:"¿Cómo deseas contactarme?",handleOpenModal:this.openModal},o.a.createElement(j,null)))}}])&&je(n.prototype,i),a&&je(n,a),t}();function Re(e){return(Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function xe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ne(e,t){return!t||"object"!==Re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ae(e){return(Ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Fe(e,t){return(Fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"index",function(){return ze});var ze=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ne(this,Ae(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Fe(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(R,{data:x.Components},o.a.createElement(D,{data:x.Components.About}),o.a.createElement(Me,{data:x.Components.Services}),o.a.createElement(oe,{data:x.Components.Competitions})))}}])&&xe(n.prototype,i),a&&xe(n,a),t}();t.default=ze},37:function(e){e.exports={Components:{Menu:{title:"kleber.digital",MenuElement:[{text:"Servicios",href:"#services"},{text:"Competencias",href:"#competitions"},{text:"Contacto",href:"#footer"},{text:"Curriculum",href:"#footer"}]},About:{imgSrc:"../static/images/avatar.png",imgAlt:"Perfil",description:"Desarrollador Web especializado en FrontEnd y diseño de interfaces UI/UX, publicista en Marketing Digital"},Services:{title:"Servicios",ServicesElement:[{text:"Desarrollo Web",description:"Desarrollaré tu web xD",imgSrc:"../static/images/desarrollo-web.png",imgAlt:"WEB",actionText:"Detalles"},{text:"Marketing Digital",description:"Estrategia de Marketing con Facebook ADS",imgSrc:"../static/images/facebook-ads2.png",imgAlt:"Facebook ADS",actionText:"Detalles"},{text:"Charlas y Cursos",description:"Profesor, organizador de eventos o charlas en tecnología",imgSrc:"../static/images/speaker.png",imgAlt:"Charlas",actionText:"Detalles"}],callToAction:"¿Trabajamos Juntos?"},Competitions:{title:"Skils",CompetitionsResume:[{title:"FrontEnd",CompetitionsDetails:[{title:"HTML",icon:"html-five2",color:"orange"},{title:"CSS",icon:"css3"},{title:"JavaScript",icon:"javascript"},{title:"Bootstrap",icon:"bootstrap"},{title:"React",icon:"react"},{title:"LESScss",icon:"csswizardry"}]},{title:"BackEnd",CompetitionsDetails:[{title:"PHP",icon:"php"},{title:"Node.js",icon:"node-dot-js"},{title:"MySQl",icon:"mysql"},{title:"GoogleCloud",icon:"google",color:"blue"}]},{title:"Marketing Digital",CompetitionsDetails:[{title:"FacebookAds",icon:"facebook2",color:"#3b5998"},{title:"Instagram",icon:"instagram",color:"pink"},{title:"WhatsApp Marketing",icon:"whatsapp",color:"green"},{title:"Diseño Publicitario",icon:"heart",color:"red"}]},{title:"Comunicación",CompetitionsDetails:[{title:"Mentoría",icon:"graduation-cap",color:"gold"},{title:"Exposición y Conferencia",icon:"microphone",color:"gold"},{title:"Podcast",icon:"mic",color:"gold"}]}]}}}},48:function(e,t,n){e.exports=n(223)}},[[206,1,0,6]]]);