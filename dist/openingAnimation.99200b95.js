parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BIhk":[function(require,module,exports) {

},{"./fonts/Barlow-Bold.ttf":[["Barlow-Bold.3786d297.ttf","Z3cF"],"Z3cF"],"./../images/gif/powered.gif":[["powered.b4d14cfe.gif","WffA"],"WffA"]}],"la17":[function(require,module,exports) {
"use strict";require("../styles/_animation.scss");var e=new TimelineMax({});e.staggerTo(".hide",1.5,{delay:1,y:-120,ease:Power4.easeOut},.3).staggerTo(".hide",1,{delay:3,opacity:0,ease:Power4.easeOut},.3).to(".reveal-first",.8,{delay:1,width:"450px",ease:Power4.easeIn},1).to(".reveal-second",.8,{delay:1,width:"195px",ease:Power4.easeIn},2).to(".creators",0,{delay:1,visibility:"visible",ease:Power1.easeIn},2).to(".knmi",0,{delay:1,visibility:"visible",ease:Power1.easeIn},3).to(".reveal-first",.8,{delay:1,x:"100%",ease:Power4.easeOut},2).to(".reveal-second",.8,{delay:1,x:"100%",ease:Power4.easeOut},3).to(".page",1.5,{y:"-100%",ease:Power3.easeIn},7.5).to(".second-color-slide-up",1.6,{y:"-100%",ease:Power4.easeIn},8).to(".page",1.5,{visibility:"hidden",ease:Power3.easeIn},11);
},{"../styles/_animation.scss":"BIhk"}]},{},["la17"], null)
//# sourceMappingURL=/openingAnimation.99200b95.js.map