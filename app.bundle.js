!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"html {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n  height: 90%;\n  overflow: hidden;\n\n  font-family: 'Stylish', sans-serif;\n  background-color: grey;\n}\n\n.container {\n  width: 100%;\n  min-width: 100%;\n  max-width: 1800px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.search-wrapper {\n  margin: 0 auto;\n  width: 70%;\n}\n\n.search {\n  width: 70%;\n  height: 20px;\n\n  display: inline-block;\n  margin: 0 auto;\n  margin-top: 15px;\n  padding: 10px 15px;\n\n  border: none;\n  border-radius: 5px;\n\n  cursor: pointer;\n\n  box-shadow: 0 2px 5px -2px black;\n}\n\n.button-search {\n  width: 20%;\n  height: 20px;\n\n  display: inline-block;\n\n  margin-left: 1%;\n  padding: 10px 15px;\n  box-sizing: content-box;\n\n  background: LightSeaGreen;\n\n  border: none;\n  border-radius: 5px;\n\n  cursor: pointer;\n\n  box-shadow: 0 2px 5px -2px black;\n}\n\n.content-wrap {\n  height: 80%;\n  max-height: 450px;\n\n  padding-top: 20px;\n  margin: 0 auto;\n\n  white-space: nowrap;\n\n  transition: transform 1s 0s linear;\n}\n\n.item {\n  display: inline-block;\n\n  height: 420px;\n\n  width: 20%;\n  max-width: 280px;\n\n  white-space: normal;\n  vertical-align: top;\n\n  background: white;\n\n  overflow: hidden;\n\n  transition: left 1s 0s linear;\n\n  border-radius: 5px;\n  box-sizing: border-box;\n\n  box-shadow: 0 2px 5px -2px black;\n}\n\n.top-section-item {\n  padding: 5px;\n  height: 30%;\n\n  position: relative;\n}\n\n.header-item {\n  width: 100%;\n  min-height: 50px;\n\n  position: absolute;\n  left: 0;\n  top: calc(50% - 30px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 93%;\n  text-transform: uppercase;\n  background: green;\n  color: white;\n  text-align: center;\n}\n\n.header-img {\n  width: 100%;\n  height: 100%;\n}\n\n.bottom-section-item {\n  height: 70%;\n\n  padding: 5px;\n}\n\n.bottom-section-item > div {\n  font-size: 85%;\n  text-align: center;\n}\n\n.bottom-section-item > p {\n  text-align: justify;\n}\n\n.nav-wrap {\n  margin-top: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.nav-item {\n  width: 25px;\n  height: 25px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 0 5px;\n  box-sizing: border-box;\n\n  transition: all 0.2s 0s linear;\n\n  border-radius: 50%;\n  background: white;\n  color: white;\n  cursor: pointer;\n}\n\n.nav-item:hover {\n  border: solid 2px white;\n  background: red;\n}\n\n.active-nav-item {\n  border: solid 2px white;\n  background: red;\n}\n\n@media all and (max-width: 900px) {\n  .item {\n    width: 35%;\n  }\n}\n\n@media all and (max-width: 570px) {\n  .item {\n    width: 70%;\n  }\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([i]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(i=0;i<t.length;i++){var s=t[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r,i,a={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,d=[],u=n(4);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=a[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(b(r.parts[s],e))}else{var o=[];for(s=0;s<r.parts.length;s++)o.push(b(r.parts[s],e));a[r.id]={id:r.id,refs:1,parts:o}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var a=t[i],s=e.base?a[0]+e.base:a[0],o={css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(o):n.push(r[s]={id:s,parts:[o]})}return n}function f(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertAt.before,n);n.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),f(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,i,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var s=l++;n=c||(c=g(e)),r=x.bind(null,n,s,!1),i=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),f(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||a)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(s),o&&URL.revokeObjectURL(o)}.bind(null,n,e),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i];(o=a[s.id]).refs--,r.push(o)}t&&p(h(t,e),e);for(i=0;i<r.length;i++){var o;if(0===(o=r[i]).refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete a[o.id]}}}};var w,y=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function x(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var a=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,a=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";n.r(e);class r{constructor(t){this.state=t}async getClips(){const{url:t}=this.state,e=await fetch(t);return await e.json()}}n(0);class i{constructor(t){this.elem=i.constrElem(t)}static constrElem(t){const e=document.createElement(t.elem);return e.className=t.cls,"attr"in t&&e.setAttribute(t.attr[0],t.attr[1]),e}}class a{constructor(t){this.elem=a.addItem(t)}static addItem(t){const e=document.createElement("div");return e.className="item",e.innerHTML=`\n      <div class="top-section-item">\n        <h1 class="header-item">${t.title}</h1>\n        <img class="header-img" src="${t.thumbnails.default.url}" alt="title-picture">\n      </div>\n      <div class="bottom-section-item">\n        <div class="author-item"><h2><i class="fas fa-male"></i> ${t.channelTitle}</h2></div>\n        <div class="publish-item"><h2><i class="far fa-calendar-alt"></i> ${new Date(t.publishedAt).getFullYear()}-0${new Date(t.publishedAt).getMonth()+1}-${new Date(t.publishedAt).getDate()}</h2></div>\n        <div class="view-rate-item"><h2><i class="fas fa-eye"></i></h2></div>\n        <p class="descrition-item">${t.description}</p>\n      </div>\n    `,e}}const s={input:null,wrapper:null,navWrap:null},o=[],c={widthItem:0,marginLeft:0,step:0,shift:0,currentPage:1,allPages:0,countElemsOnPage:0,updateLarge(){this.widthItem=document.querySelector(".item").offsetWidth,this.marginLeft=(document.body.offsetWidth-4*this.widthItem)/5,this.step=document.body.offsetWidth-this.marginLeft,this.currentPage=1,this.countElemsOnPage=4,this.allPages=o.length/this.countElemsOnPage},updateMiddle(){this.widthItem=document.querySelector(".item").offsetWidth,this.marginLeft=(document.body.offsetWidth-2*this.widthItem)/3,this.step=document.body.offsetWidth-this.marginLeft,this.currentPage=1,this.countElemsOnPage=2,this.allPages=o.length/this.countElemsOnPage},updateSmall(){this.widthItem=document.querySelector(".item").offsetWidth,this.marginLeft=(document.body.offsetWidth-this.widthItem)/2,this.step=document.body.offsetWidth-this.marginLeft,this.currentPage=1,this.countElemsOnPage=1,this.allPages=o.length/this.countElemsOnPage}},l={next:""};class d{constructor(t){this.data=t}static render(){const t=new i({elem:"div",cls:"container"}).elem,e=new i({elem:"div",cls:"search-wrapper"}).elem,n=new i({elem:"input",cls:"search",attr:["placeholder","enter youtube request"]}).elem,r=new i({elem:"button",cls:"button-search"}).elem;r.innerHTML="Search";const a=new i({elem:"div",cls:"content-wrap"}).elem,o=new i({elem:"div",cls:"nav-wrap"}).elem;s.input=n,s.wrapper=a,s.navWrap=o,document.body.appendChild(t),t.appendChild(e),e.appendChild(n),e.appendChild(r),t.appendChild(a),t.appendChild(o)}renderItems(){const t=this.data.items;l.next=this.data.nextPageToken,t.forEach(t=>{const e=new a(t.snippet).elem;o.push(e)}),d.appendItems(),d.drawSlider(),d.drawNav(),window.onresize=function(){const t=getComputedStyle(o[0]).transition;o.forEach(t=>t.style.transition="none"),d.drawSlider(),d.drawNav(),o.forEach(e=>e.style.transition=t)},document.onmousedown=function(t){t.preventDefault();const e=t.clientX;document.body.onmouseup=function(t){const n=t.clientX;n<e&&d.moveLeft(),n>e&&d.moveRight()}},document.ontouchstart=function(t){const e=t.touches[0].clientX;document.ontouchend=function(t){const n=t.changedTouches[0].clientX;n>e&&d.moveRight(),n<e&&d.moveLeft()}},document.onclick=function(t){t.target.classList.contains("nav-item")&&(t.target.classList.contains("pre-prev")&&d.moveDoubleRight(),t.target.classList.contains("prev")&&d.moveRight(),t.target.classList.contains("next")&&d.moveLeft())},document.onmouseover=function(t){t.target.classList.contains("pre-prev")&&(t.target.textContent=c.currentPage-2),t.target.classList.contains("prev")&&(t.target.textContent=c.currentPage-1),t.target.classList.contains("next")&&(t.target.textContent=c.currentPage+1)}}static appendItems(){o.forEach(t=>{s.wrapper.appendChild(t)})}static drawSlider(){s.wrapper.style.transform="translate(0px)",c.shift=0,s.wrapper.offsetWidth>900?c.updateLarge():s.wrapper.offsetWidth<900&&s.wrapper.offsetWidth>570?c.updateMiddle():s.wrapper.offsetWidth<570&&c.updateSmall(),o.forEach(t=>{t.style.marginLeft=`${c.marginLeft}px`})}static moveLeft(){c.shift-=c.step,s.wrapper.style.transform=`translate(${c.shift}px)`,c.currentPage++,d.drawNav(),d.checkUploadingItems()}static moveRight(){1!==c.currentPage&&(c.shift+=c.step,s.wrapper.style.transform=`translate(${c.shift}px)`,c.currentPage--,d.drawNav())}static moveDoubleRight(){c.shift=c.shift+2*c.step,s.wrapper.style.transform=`translate(${c.shift}px)`,c.currentPage-=2,d.drawNav()}static drawNav(){const t=[],e=c.currentPage+1;s.navWrap.innerHTML="";for(let n=0;n<e;n++)t.push(new i({elem:"div",cls:"nav-item"}).elem);if(2===e?(t[0].textContent=c.currentPage,t[0].classList.toggle("active-nav-item"),t[0].classList.add("current"),t[1].classList.add("next")):3===e?(t[1].textContent=c.currentPage,t[1].classList.toggle("active-nav-item"),t[0].classList.add("prev"),t[1].classList.add("current"),t[2].classList.add("next")):e>=4&&(t[2].textContent=c.currentPage,t[2].classList.toggle("active-nav-item"),t[0].classList.add("pre-prev"),t[1].classList.add("prev"),t[2].classList.add("current"),t[3].classList.add("next")),t.length<=3)t.forEach(t=>{s.navWrap.appendChild(t)});else if(t.length>=4)for(let e=0;e<4;e++)s.navWrap.appendChild(t[e])}static checkUploadingItems(){let t="";if(t=l.next,c.currentPage===Math.floor(c.allPages)){const e=new CustomEvent("loadingItems",{bubbles:!0,detail:{nextPageToken:t}});document.dispatchEvent(e)}}static appendNewItems(t){l.next=t.nextPageToken,t.items.forEach(t=>{const e=new a(t.snippet).elem;s.wrapper.appendChild(e),e.style.marginLeft=`${c.marginLeft}px`,o.push(e)}),c.allPages=o.length/c.countElemsOnPage}}var u=d;class p{static addLinks(){const t=document.createElement("link");t.rel="stylesheet",t.href="https://use.fontawesome.com/releases/v5.8.2/css/all.css",t.crossorigin="anonymous",document.head.appendChild(t);const e=document.createElement("link");e.href="https://fonts.googleapis.com/css?family=Stylish&display=swap",e.rel="stylesheet",document.head.appendChild(e)}}class h{constructor(){this.query="",this.state={url:""}}start(){console.log(this.query),p.addLinks(),u.render(),document.querySelector(".search").addEventListener("focus",h.searchElems),document.addEventListener("loadingItems",h.loadingElements),document.addEventListener("click",h.searchWithCkick)}static async search(){const t=document.querySelector(".search");if(t.blur(),h.query=t.value,""!==h.query){h.state={url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${h.query}&key=AIzaSyCfe4edG3OrzN31ajT43oglC6OqLuyo7K8`};try{const t=new r(h.state),e=await t.getClips();new u(e).renderItems()}catch(t){console.log(t)}t.value=""}}static searchWithCkick(t){t.preventDefault(),t.target.classList.contains("button-search")&&(t.target.blur(),h.search())}static searchElems(){document.onkeydown=function(t){"Enter"===t.key&&h.search()}}static async loadingElements(t){const{nextPageToken:e}=t.detail;h.state={url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=AIzaSyCfe4edG3OrzN31ajT43oglC6OqLuyo7K8&pageToken=${e}`};const n=new r(h.state),i=await n.getClips();u.appendNewItems(i)}}(new h).start()}]);
//# sourceMappingURL=app.bundle.js.map