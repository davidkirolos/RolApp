(function(){var m,p=this;function q(a){a=a.split(".");for(var b=p,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function ba(a){a.B=function(){return a.$?a.$:a.$=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function r(a){return"string"==typeof a}
function ea(a){return"function"==ca(a)}
function fa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return t.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var na=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=p;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.R=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ja=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}}
;var oa;var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function qa(a,b){return a<b?-1:a>b?1:0}
;var ra=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},sa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},ta=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function va(a,b){var c;a:{c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function wa(a,b){return 0<=ra(a,b)}
function xa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function ya(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function za(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Aa(a,b,c,d){return Array.prototype.splice.apply(a,Ba(arguments,1))}
function Ba(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function Ca(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function Da(a,b){return a.classList?a.classList.contains(b):wa(Ca(a),b)}
function Ea(a,b){a.classList?a.classList.add(b):Da(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Fa(a,b){a.classList?a.classList.remove(b):Da(a,b)&&(a.className=sa(Ca(a),function(a){return a!=b}).join(" "))}
function Ga(a,b,c){c?Ea(a,b):Fa(a,b)}
;function Ha(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ia(a){var b=Ja,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function La(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ka.length;f++)c=Ka[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ma;a:{var Na=p.navigator;if(Na){var Oa=Na.userAgent;if(Oa){Ma=Oa;break a}}Ma=""}function x(a){return-1!=Ma.indexOf(a)}
;function Pa(){this.f="";this.b=null}
function Qa(a,b){var c=new Pa;c.f=a;c.b=b;return c}
Qa("<!DOCTYPE html>",0);Qa("",0);Qa("<br>",0);function y(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
y.prototype.clone=function(){return new y(this.x,this.y)};
y.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
y.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
y.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function z(a,b){this.width=a;this.height=b}
z.prototype.clone=function(){return new z(this.width,this.height)};
z.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
z.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
z.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Ra=x("Opera"),A=x("Trident")||x("MSIE"),Sa=x("Edge"),Ta=x("Gecko")&&!(-1!=Ma.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Ua=-1!=Ma.toLowerCase().indexOf("webkit")&&!x("Edge"),Va=x("Windows");function Wa(){var a=p.document;return a?a.documentMode:void 0}
var Xa;a:{var Ya="",Za=function(){var a=Ma;if(Ta)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Sa)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ua)return/WebKit\/(\S+)/.exec(a);if(Ra)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Za&&(Ya=Za?Za[1]:"");if(A){var $a=Wa();if(null!=$a&&$a>parseFloat(Ya)){Xa=String($a);break a}}Xa=Ya}var ab=Xa,bb={};
function cb(a){var b;if(!(b=bb[a])){b=0;for(var c=pa(String(ab)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var n=k.exec(g)||["","",""],H=l.exec(h)||["","",""];if(0==n[0].length&&0==H[0].length)break;b=qa(0==n[1].length?0:parseInt(n[1],10),0==H[1].length?0:parseInt(H[1],10))||qa(0==n[2].length,0==H[2].length)||qa(n[2],H[2])}while(0==b)}b=bb[a]=0<=b}return b}
var db=p.document,eb=db&&A?Wa()||("CSS1Compat"==db.compatMode?parseInt(ab,10):5):void 0;!Ta&&!A||A&&9<=Number(eb)||Ta&&cb("1.9.1");var fb=A&&!cb("9");function gb(a){return a?new ib(jb(a)):oa||(oa=new ib)}
function B(a){var b=document;return r(a)?b.getElementById(a):a}
function kb(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):lb(a,void 0)}
function lb(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var g=c.getElementsByClassName(a);return g}g=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=g[d];d++){var h=c.className;"function"==typeof h.split&&wa(h.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return g}
function mb(a){return"CSS1Compat"==a.compatMode}
function jb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function nb(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);c=jb(a);a.appendChild(c.createTextNode(String(b)))}}
var ob={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},pb={IMG:" ",BR:"\n"};function qb(a){if(fb&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];rb(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");fb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function rb(a,b,c){if(!(a.nodeName in ob))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in pb)b.push(pb[a.nodeName]);else for(a=a.firstChild;a;)rb(a,b,c),a=a.nextSibling}
function sb(a){var b=tb.ma;return b?ub(a,function(a){return!b||r(a.className)&&wa(a.className.split(/\s+/),b)},!0,void 0):null}
function ub(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function ib(a){this.b=a||p.document||document}
ib.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(a)};
ib.prototype.createElement=function(a){return this.b.createElement(String(a))};
ib.prototype.isElement=function(a){return fa(a)&&1==a.nodeType};
ib.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function vb(a){p.setTimeout(function(){throw a;},0)}
var wb;
function xb(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.X;c.X=null;a()}};
return function(a){d.next={X:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function yb(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
yb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};function zb(){this.f=this.b=null}
var Bb=new yb(function(){return new Ab},function(a){a.reset()},100);
zb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Ab(){this.next=this.f=this.b=null}
Ab.prototype.set=function(a,b){this.b=a;this.f=b;this.next=null};
Ab.prototype.reset=function(){this.next=this.f=this.b=null};function Cb(a){Db||Eb();Fb||(Db(),Fb=!0);var b=Gb,c=Bb.get();c.set(a,void 0);b.f?b.f.next=c:b.b=c;b.f=c}
var Db;function Eb(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);Db=function(){a.then(Hb)}}else Db=function(){var a=Hb;
!ea(p.setImmediate)||p.Window&&p.Window.prototype&&!x("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(wb||(wb=xb()),wb(a)):p.setImmediate(a)}}
var Fb=!1,Gb=new zb;function Hb(){for(var a;a=Gb.remove();){try{a.b.call(a.f)}catch(c){vb(c)}var b=Bb;b.j(a);b.f<b.i&&(b.f++,a.next=b.b,b.b=a)}Fb=!1}
;function Ib(){this.f=this.f;this.g=this.g}
Ib.prototype.f=!1;Ib.prototype.isDisposed=function(){return this.f};
Ib.prototype.dispose=function(){this.f||(this.f=!0,this.O())};
Ib.prototype.O=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function C(a){Ib.call(this);this.C=1;this.i=[];this.j=0;this.b=[];this.l={};this.aa=!!a}
v(C,Ib);m=C.prototype;m.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.C;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.C=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.l[a]){var d=this.b;if(a=va(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.F(a)}return!1};
m.F=function(a){var b=this.b[a];if(b){var c=this.l[b];if(0!=this.j)this.i.push(a),this.b[a+1]=aa;else{if(c){var d=ra(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
m.J=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.aa)for(e=0;e<c.length;e++){var g=c[e];Jb(this.b[g+1],this.b[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.F(c)}}return 0!=e}return!1};
function Jb(a,b,c){Cb(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.l[a];b&&(w(b,this.F,this),delete this.l[a])}else this.b.length=0,this.l={}};
function Kb(a,b){if(b){var c=a.l[b];return c?c.length:0}var c=0,d;for(d in a.l)c+=Kb(a,d);return c}
m.O=function(){C.R.O.call(this);this.clear();this.i.length=0};var Lb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Lb);u("yt.tokens_",window.yt&&window.yt.tokens_||{});var Mb=window.yt&&window.yt.msgs_||q("window.ytcfg.msgs")||{};u("yt.msgs_",Mb);function Nb(a){var b=arguments;if(1<b.length){var c=b[0];Lb[c]=b[1]}else for(c in b=b[0],b)Lb[c]=b[c]}
function D(a,b){return a in Lb?Lb[a]:b}
function Ob(a,b){ea(a)&&(a=Pb(a));return window.setTimeout(a,b)}
function Pb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw Qb(b),b;}}:a}
function Qb(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=D("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Nb("ERRORS",b))}
;function Rb(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():Ob(a,b||0)}
;function E(a,b){this.version=a;this.args=b}
function Sb(a){if(!a.ia){var b={};a.call(b);a.ia=b.version}return a.ia}
function Tb(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Sb(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function F(a,b){this.b=a;this.G=b}
F.prototype.toString=function(){return this.b};var Ub=q("yt.pubsub2.instance_")||new C;C.prototype.subscribe=C.prototype.subscribe;C.prototype.unsubscribeByKey=C.prototype.F;C.prototype.publish=C.prototype.J;C.prototype.clear=C.prototype.clear;u("yt.pubsub2.instance_",Ub);var Vb=q("yt.pubsub2.subscribedKeys_")||{};u("yt.pubsub2.subscribedKeys_",Vb);var Wb=q("yt.pubsub2.topicToKeys_")||{};u("yt.pubsub2.topicToKeys_",Wb);var Xb=q("yt.pubsub2.isAsync_")||{};u("yt.pubsub2.isAsync_",Xb);u("yt.pubsub2.skipSubKey_",null);
function G(a,b){var c=Yb();return c?c.publish.call(c,a.toString(),a,b):!1}
function Zb(a,b,c){window.yt.pubsub2.skipSubKey_=a;G.call(null,b,c);window.yt.pubsub2.skipSubKey_=null}
function I(a,b,c){var d=Yb();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var h=function(){if(Vb[e])try{if(g&&a instanceof F&&a!=d)try{g=Tb(a.G,g)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(c||window,g)}catch(h){Qb(h)}};
Xb[a.toString()]?q("yt.scheduler.instance")?Rb(h):Ob(h,0):h()}});
Vb[e]=!0;Wb[a.toString()]||(Wb[a.toString()]=[]);Wb[a.toString()].push(e);return e}
function $b(a){var b=Yb();b&&("number"==typeof a&&(a=[a]),w(a,function(a){b.unsubscribeByKey(a);delete Vb[a]}))}
function Yb(){return q("yt.pubsub2.instance_")}
;var J=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function ac(a){return a?decodeURI(a):a}
function cc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function dc(a,b,c){if("array"==ca(b))for(var d=0;d<b.length;d++)dc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function ec(a,b,c){for(c=c||0;c<b.length;c+=2)dc(b[c],b[c+1],a);return a}
function fc(a,b){for(var c in b)dc(c,b[c],a);return a}
function gc(a){a=fc([],a);a[0]="";return a.join("")}
function hc(a,b){return cc(2==arguments.length?ec([a],arguments[1],0):ec([a],arguments,1))}
;var ic={},jc=0;function kc(a){var b=new Image,c=""+jc++;ic[c]=b;b.onload=b.onerror=function(){delete ic[c]};
b.src=a}
;function lc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ca(b[f])?za(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function mc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=lc(d[1]||""),e;for(e in b)d[e]=b[e];return cc(fc([a],d))+c}
;function nc(a){E.call(this,1,arguments);this.b=a}
v(nc,E);function K(a){E.call(this,1,arguments);this.b=a}
v(K,E);function oc(a,b){E.call(this,1,arguments);this.b=a;this.f=b}
v(oc,E);function pc(a,b,c,d,e){E.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.j=e||null}
v(pc,E);function qc(a,b,c){E.call(this,1,arguments);this.b=a;this.f=b}
v(qc,E);function rc(a,b,c,d,e,f,g){E.call(this,1,arguments);this.f=a;this.C=b;this.b=c;this.aa=d||null;this.i=e||null;this.g=f||null;this.j=g||null}
v(rc,E);
var sc=new F("subscription-batch-subscribe",nc),tc=new F("subscription-batch-unsubscribe",nc),uc=new F("subscription-pref-email",oc),vc=new F("subscription-subscribe",pc),wc=new F("subscription-subscribe-loading",K),xc=new F("subscription-subscribe-loaded",K),L=new F("subscription-subscribe-success",qc),yc=new F("subscription-subscribe-external",pc),zc=new F("subscription-unsubscribe",rc),Ac=new F("subscription-unsubscirbe-loading",K),Bc=new F("subscription-unsubscribe-loaded",K),M=new F("subscription-unsubscribe-success",K),
Cc=new F("subscription-external-unsubscribe",rc),Dc=new F("subscription-enable-ypc",K),Ec=new F("subscription-disable-ypc",K);var Fc=q("yt.pubsub.instance_")||new C;C.prototype.subscribe=C.prototype.subscribe;C.prototype.unsubscribeByKey=C.prototype.F;C.prototype.publish=C.prototype.J;C.prototype.clear=C.prototype.clear;u("yt.pubsub.instance_",Fc);var Gc=q("yt.pubsub.subscribedKeys_")||{};u("yt.pubsub.subscribedKeys_",Gc);var Hc=q("yt.pubsub.topicToKeys_")||{};u("yt.pubsub.topicToKeys_",Hc);var Ic=q("yt.pubsub.isSynchronous_")||{};u("yt.pubsub.isSynchronous_",Ic);var Jc=q("yt.pubsub.skipSubId_")||null;
u("yt.pubsub.skipSubId_",Jc);function Kc(a,b,c){var d=Lc();if(d){var e=d.subscribe(a,function(){if(!Jc||Jc!=e){var d=arguments,g;g=function(){Gc[e]&&b.apply(c||window,d)};
try{Ic[a]?g():Ob(g,0)}catch(h){Qb(h)}}},c);
Gc[e]=!0;Hc[a]||(Hc[a]=[]);Hc[a].push(e);return e}return 0}
function Mc(a){var b=Lc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),w(a,function(a){b.unsubscribeByKey(a);delete Gc[a]}))}
function Nc(a,b){var c=Lc();return c?c.publish.apply(c,arguments):!1}
function Lc(){return q("yt.pubsub.instance_")}
;function Oc(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=hc(b,"mode","subscribe"),b=hc("/signin?context=popup","next",b),b=hc(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Kc("LOGGED_IN",function(b){Mc(D("LOGGED_IN_PUBSUB_KEY",void 0));Nb("LOGGED_IN",!0);a(b)});
Nb("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
u("yt.pubsub.publish",Nc);function Pc(a){return eval("("+a+")")}
;var Qc=null;"undefined"!=typeof XMLHttpRequest?Qc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Qc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function Rc(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Pb(b)(k)}
var k=Qc&&Qc();if(!("open"in k))return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);f="POST"==c;if(e=Sc(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(f=!1);f&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
function Sc(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(J)[1]||null,e=ac(a.match(J)[3]||null);d&&e?(d=c,c=a.match(J),d=d.match(J),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ac(c.match(J)[3]||null)==e&&(Number(c.match(J)[4]||null)||null)==(Number(a.match(J)[4]||null)||null):!0;for(var f in Tc){if((e=d=D(Tc[f]))&&!(e=c)){var e=f,g=D("CORS_HEADER_WHITELIST")||{},h=ac(a.match(J)[3]||null);e=h?(g=g[h])?wa(g,e):!1:!0}e&&(b[f]=d)}return b}
function Uc(a,b){var c=D("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.La&&(!ac(a.match(J)[3]||null)||b.withCredentials||ac(a.match(J)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.w&&b.w[c])}
function Vc(a,b){var c=b.format||"JSON";b.Ma&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=D("XSRF_FIELD_NAME",void 0),e=D("XSRF_TOKEN",void 0),f=b.ha;f&&(f[d]&&delete f[d],a=mc(a,f||{}));var g=b.Na||"",f=b.w;Uc(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=lc(g),La(d,f),g=b.Aa&&"JSON"==b.Aa?JSON.stringify(d):gc(d));var h=!1,k,l=Rc(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d;a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Wc(c,a,b.Ka);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||p;d?b.D&&b.D.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.P&&b.P.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.ya&&0<b.timeout&&(k=Ob(function(){h||(h=!0,l.abort(),window.clearTimeout(k),b.ya.call(b.context||p,l))},b.timeout))}
function Wc(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Pc(a));break;case "XML":if(b=(b=b.responseXML)?Xc(b):null)d={},w(b.getElementsByTagName("*"),function(a){d[a.tagName]=Yc(a)})}c&&Zc(d);
return d}
function Zc(a){if(fa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Qa(a[b],null);a[c]=d}else Zc(a[b])}}
function Xc(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Yc(a){var b="";w(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Tc={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function $c(){var a=D("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!D("SESSION_INDEX")&&!D("LOGGED_IN"))}
;function ad(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=ad.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new ad(this.top,this.right,this.bottom,this.left)};
m.contains=function(a){return this&&a?a instanceof ad?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function bd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
m=bd.prototype;m.clone=function(){return new bd(this.left,this.top,this.width,this.height)};
m.contains=function(a){return a instanceof y?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
m.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function N(a,b){var c=jb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function cd(a,b){return N(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function dd(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}A&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ed(a){"number"==typeof a&&(a+="px");return a}
function fd(a){var b=gd;if("none"!=cd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function gd(a){var b=a.offsetWidth,c=a.offsetHeight,d=Ua&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=dd(a),new z(a.right-a.left,a.bottom-a.top)):new z(b,c)}
function hd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function id(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?hd(a,c):0}
var jd={thin:2,medium:4,thick:6};function kd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in jd?jd[c]:hd(a,c)}
;var ld=q("yt.dom.getNextId_");if(!ld){ld=function(){return++md};
u("yt.dom.getNextId_",ld);var md=0}function nd(){var a=document,b;ta(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function od(){var a=nd();return a?a:null}
;function pd(a,b){(a=B(a))&&a.style&&(a.style.display=b?"":"none",Ga(a,"hid",!b))}
function qd(a){w(arguments,function(a){!da(a)||a instanceof Element?pd(a,!0):w(a,function(a){qd(a)})})}
function rd(a){w(arguments,function(a){!da(a)||a instanceof Element?pd(a,!1):w(a,function(a){rd(a)})})}
;function sd(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.b=a;for(var b in a)b in td||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=
a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
sd.prototype.preventDefault=function(){this.b&&(this.b.returnValue=!1,this.b.preventDefault&&this.b.preventDefault())};
sd.prototype.stopPropagation=function(){this.b&&(this.b.cancelBubble=!0,this.b.stopPropagation&&this.b.stopPropagation())};
sd.prototype.stopImmediatePropagation=function(){this.b&&(this.b.cancelBubble=!0,this.b.stopImmediatePropagation&&this.b.stopImmediatePropagation())};
var td={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var Ja=q("yt.events.listeners_")||{};u("yt.events.listeners_",Ja);var ud=q("yt.events.counter_")||{count:0};u("yt.events.counter_",ud);function vd(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ia(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function O(a,b,c,d){if(a&&(a.addEventListener||a.attachEvent)){d=!!d;var e=vd(a,b,c,d);if(!e){var e=++ud.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new sd(d);if(!ub(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new sd(b);
b.currentTarget=a;return c.call(a,b)};
g=Pb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ja[e]=[a,b,c,g,d]}}}
;var P={},wd="ontouchstart"in document;function xd(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return ub(c,function(a){return Da(a,b)},!0,d)}
function Q(a){var b="mouseover"==a.type&&"mouseenter"in P||"mouseout"==a.type&&"mouseleave"in P,c=a.type in P||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=P[b],d;for(d in c.l){var e=xd(b,d,a.target);e&&!ub(a.relatedTarget,function(a){return a==e},!0)&&c.J(d,e,b,a)}}if(b=P[a.type])for(d in b.l)(e=xd(a.type,d,a.target))&&b.J(d,e,a.type,a)}}
O(document,"blur",Q,!0);O(document,"change",Q,!0);O(document,"click",Q);O(document,"focus",Q,!0);O(document,"mouseover",Q);O(document,"mouseout",Q);O(document,"mousedown",Q);O(document,"keydown",Q);O(document,"keyup",Q);O(document,"keypress",Q);O(document,"cut",Q);O(document,"paste",Q);wd&&(O(document,"touchstart",Q),O(document,"touchend",Q),O(document,"touchcancel",Q));function yd(a,b,c){a&&(a.dataset?a.dataset[zd(b)]=c:a.setAttribute("data-"+b,c))}
function R(a,b){return a?a.dataset?a.dataset[zd(b)]:a.getAttribute("data-"+b):null}
function Ad(a,b){a&&(a.dataset?delete a.dataset[zd(b)]:a.removeAttribute("data-"+b))}
var Bd={};function zd(a){return Bd[a]||(Bd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Cd(a){this.j=a;this.g={};this.K=[];this.i=[]}
function S(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
Cd.prototype.unregister=function(){Mc(this.K);this.K.length=0;$b(this.i);this.i.length=0};
Cd.prototype.init=aa;Cd.prototype.dispose=aa;function Dd(a,b,c){a.i.push(I(b,c,a))}
function U(a,b,c){var d=S(a,void 0),e=t(c,a);b in P||(P[b]=new C);P[b].subscribe(d,e);a.g[c]=e}
function Ed(a,b,c){if(b in P){var d=P[b];d.unsubscribe(S(a,void 0),a.g[c]);0>=Kb(d)&&(d.dispose(),delete P[b])}delete a.g[c]}
function Fd(a,b){yd(a,"tooltip-text",b)}
;function Gd(){Cd.call(this,"tooltip");this.b=0;this.f={}}
v(Gd,Cd);ba(Gd);m=Gd.prototype;m.register=function(){U(this,"mouseover",this.H);U(this,"mouseout",this.v);U(this,"focus",this.Z);U(this,"blur",this.W);U(this,"click",this.v);U(this,"touchstart",this.ga);U(this,"touchend",this.L);U(this,"touchcancel",this.L)};
m.unregister=function(){Ed(this,"mouseover",this.H);Ed(this,"mouseout",this.v);Ed(this,"focus",this.Z);Ed(this,"blur",this.W);Ed(this,"click",this.v);Ed(this,"touchstart",this.ga);Ed(this,"touchend",this.L);Ed(this,"touchcancel",this.L);this.dispose();Gd.R.unregister.call(this)};
m.dispose=function(){for(var a in this.f)this.v(this.f[a]);this.f={}};
m.H=function(a){if(!(this.b&&1E3>na()-this.b)){var b=parseInt(R(a,"tooltip-hide-timer"),10);b&&(Ad(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){Hd(this,a);Ad(a,"tooltip-show-timer")},this),c=parseInt(R(a,"tooltip-show-delay"),10)||0,b=Ob(b,c);
yd(a,"tooltip-show-timer",b.toString());a.title&&(Fd(a,Id(a)),a.title="");b=(a[ia]||(a[ia]=++ja)).toString();this.f[b]=a}};
m.v=function(a){var b=parseInt(R(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),Ad(a,"tooltip-show-timer"));b=t(function(){if(a){var b=B(Jd(this,a));b&&(Kd(b),b&&b.parentNode&&b.parentNode.removeChild(b),Ad(a,"content-id"));(b=B(Jd(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Ad(a,"tooltip-hide-timer")},this);
b=Ob(b,50);yd(a,"tooltip-hide-timer",b.toString());if(b=R(a,"tooltip-text"))a.title=b;b=(a[ia]||(a[ia]=++ja)).toString();delete this.f[b]};
m.Z=function(a){this.b=0;this.H(a)};
m.W=function(a){this.b=0;this.v(a)};
m.ga=function(a,b,c){c.changedTouches&&(this.b=0,a=xd(b,S(this),c.changedTouches[0].target),this.H(a))};
m.L=function(a,b,c){c.changedTouches&&(this.b=na(),a=xd(b,S(this),c.changedTouches[0].target),this.v(a))};
function Ld(a,b){Fd(a,b);var c=R(a,"content-id");(c=B(c))&&nb(c,b)}
function Id(a){return R(a,"tooltip-text")||a.title}
function Hd(a,b){if(b){var c=Id(b);if(c){var d=B(Jd(a,b));if(!d){d=document.createElement("div");d.id=Jd(a,b);d.className=S(a,"tip");var e=document.createElement("div");e.className=S(a,"tip-body");var f=document.createElement("div");f.className=S(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=S(a,"tip-content");var h=Md(a,b),k=Jd(a,b,"content");g.id=k;yd(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var l=
qb(b),k=Jd(a,b,"arialabel"),f=document.createElement("div");Ea(f,S(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;nb(f,l);b.setAttribute("aria-labelledby",k);k=od()||document.body;k.appendChild(f);k.appendChild(d);Ld(b,c);(c=parseInt(R(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",Ea(g,S(a,"normal-wrap")));g=Da(b,S(a,"reverse"));Nd(a,b,d,e,h,g)||Nd(a,b,d,e,h,!g);var n=S(a,"tip-visible");
Ob(function(){Ea(d,n)},0)}}}}
function Nd(a,b,c,d,e,f){Ga(c,S(a,"tip-reverse"),f);var g=0;f&&(g=1);a=fd(b);f=new y((a.width-10)/2,f?a.height:0);var h=jb(b),k=new y(0,0),l;l=h?jb(h):document;l=!A||9<=Number(eb)||mb(gb(l).b)?l.documentElement:l.body;if(b!=l){l=dd(b);var n=gb(h).b,h=n.scrollingElement?n.scrollingElement:!Ua&&mb(n)?n.documentElement:n.body||n.documentElement,n=n.parentWindow||n.defaultView,h=A&&cb("10")&&n.pageYOffset!=h.scrollTop?new y(h.scrollLeft,h.scrollTop):new y(n.pageXOffset||h.scrollLeft,n.pageYOffset||h.scrollTop);
k.x=l.left+h.x;k.y=l.top+h.y}f=new y(k.x+f.x,k.y+f.y);f=f.clone();k=(g&8&&"rtl"==cd(c,"direction")?g^4:g)&-9;g=fd(c);l=g.clone();h=f.clone();l=l.clone();0!=k&&(k&4?h.x-=l.width+0:k&2&&(h.x-=l.width/2),k&1&&(h.y-=l.height+0));f=new bd(0,0,0,0);f.left=h.x;f.top=h.y;f.width=l.width;f.height=l.height;l=new y(f.left,f.top);l instanceof y?(k=l.x,l=l.y):(k=l,l=void 0);c.style.left=ed(k);c.style.top=ed(l);l=new z(f.width,f.height);if(!(g==l||g&&l&&g.width==l.width&&g.height==l.height))if(g=l,f=jb(c),k=mb(gb(f).b),
!A||cb("10")||k&&cb("8"))f=c.style,Ta?f.MozBoxSizing="border-box":Ua?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(g.width,0)+"px",f.height=Math.max(g.height,0)+"px";else if(f=c.style,k){A?(k=id(c,"paddingLeft"),l=id(c,"paddingRight"),h=id(c,"paddingTop"),n=id(c,"paddingBottom"),k=new ad(h,l,n,k)):(k=N(c,"paddingLeft"),l=N(c,"paddingRight"),h=N(c,"paddingTop"),n=N(c,"paddingBottom"),k=new ad(parseFloat(h),parseFloat(l),parseFloat(n),parseFloat(k)));if(!A||9<=Number(eb))l=
N(c,"borderLeftWidth"),h=N(c,"borderRightWidth"),n=N(c,"borderTopWidth"),H=N(c,"borderBottomWidth"),l=new ad(parseFloat(n),parseFloat(h),parseFloat(H),parseFloat(l));else{l=kd(c,"borderLeft");var h=kd(c,"borderRight"),n=kd(c,"borderTop"),H=kd(c,"borderBottom");l=new ad(n,h,H,l)}f.pixelWidth=g.width-l.left-k.left-k.right-l.right;f.pixelHeight=g.height-l.top-k.top-k.bottom-l.bottom}else f.pixelWidth=g.width,f.pixelHeight=g.height;g=window.document;g=mb(g)?g.documentElement:g.body;f=new z(g.clientWidth,
g.clientHeight);1==c.nodeType?(c=dd(c),l=new y(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,l=new y(c.clientX,c.clientY));c=fd(d);h=Math.floor(c.width/2);g=!!(f.height<l.y+a.height);a=!!(l.y<a.height);k=!!(l.x<h);f=!!(f.width<l.x+h);l=(c.width+3)/-2- -5;b=R(b,"force-tooltip-direction");if("left"==b||k)l=-5;else if("right"==b||f)l=20-c.width-3;b=Math.floor(l)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||a)}
function Jd(a,b,c){a=S(a);var d=b.__yt_uid_key;d||(d=ld(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Md(a,b){var c=null;Va&&Da(b,S(a,"masked"))&&((c=B("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),qd(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=S(a,"tip-mask")));return c}
function Kd(a){var b=B("yt-uix-tooltip-shared-mask"),c=b&&ub(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),rd(b),document.body.appendChild(b))}
;function V(){Cd.call(this,"subscription-button");this.b=!1}
v(V,Cd);ba(V);V.prototype.register=function(){U(this,"click",this.M);Dd(this,wc,this.ca);Dd(this,xc,this.ba);Dd(this,L,this.Ba);Dd(this,Ac,this.ca);Dd(this,Bc,this.ba);Dd(this,M,this.Ca);Dd(this,Dc,this.xa);Dd(this,Ec,this.wa)};
V.prototype.unregister=function(){Ed(this,"click",this.M);V.R.unregister.call(this)};
V.prototype.f=function(a){return!!R(a,"is-subscribed")};
var tb={S:"hover-enabled",ka:"yt-uix-button-subscribe",la:"yt-uix-button-subscribed",Da:"ypc-enabled",ma:"yt-uix-button-subscription-container",na:"yt-subscription-button-disabled-mask-container"},Od={Ea:"channel-external-id",oa:"subscriber-count-show-when-subscribed",pa:"subscriber-count-tooltip",qa:"subscriber-count-title",Fa:"href",T:"is-subscribed",Ga:"parent-url",Ha:"clicktracking",ra:"style-type",U:"subscription-id",Ia:"target",sa:"ypc-enabled"};m=V.prototype;
m.M=function(a){var b=R(a,"href"),c=$c();if(!b||this.b&&c)if(c){var b=R(a,"channel-external-id"),c=R(a,"clicktracking"),d;if(R(a,"ypc-enabled")){d=R(a,"ypc-item-type");var e=R(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=R(a,"parent-url");if(R(a,"is-subscribed")){var f=R(a,"subscription-id");G(zc,new rc(b,f,d,a,c,e))}else G(vc,new pc(b,d,c,e))}else Pd(this,a);else a=R(a,"target")||"_self",window.open(b,a)};
m.ca=function(a){this.A(a.b,this.ea,!0)};
m.ba=function(a){this.A(a.b,this.ea,!1)};
m.Ba=function(a){this.A(a.b,this.fa,!0,a.f)};
m.Ca=function(a){this.A(a.b,this.fa,!1)};
m.xa=function(a){this.A(a.b,this.va)};
m.wa=function(a){this.A(a.b,this.ua)};
m.fa=function(a,b,c){b?(yd(a,Od.T,"true"),c&&yd(a,Od.U,c)):(Ad(a,Od.T),Ad(a,Od.U));Qd(a)};
m.ea=function(a,b){var c;c=sb(a);Ga(c,tb.na,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Qd(a){var b=R(a,Od.ra),c=!!R(a,"is-subscribed"),b="-"+b,d=tb.la+b;Ga(a,tb.ka+b,!c);Ga(a,d,c);R(a,Od.pa)&&!R(a,Od.oa)&&(b=S(Gd.B()),Ga(a,b,!c),a.title=c?"":R(a,Od.qa));c?Ob(function(){Ea(a,tb.S)},1E3):Fa(a,tb.S)}
m.va=function(a){var b=!!R(a,"ypc-item-type"),c=!!R(a,"ypc-item-id");!R(a,"ypc-enabled")&&b&&c&&(Ea(a,"ypc-enabled"),yd(a,Od.sa,"true"))};
m.ua=function(a){R(a,"ypc-enabled")&&(Fa(a,"ypc-enabled"),Ad(a,"ypc-enabled"))};
function Rd(a,b){var c=kb(S(a));return sa(c,function(a){return b==R(a,"channel-external-id")},a)}
m.ta=function(a,b,c){var d=Ba(arguments,2);w(a,function(a){b.apply(this,xa(a,d))},this)};
m.A=function(a,b,c){var d=Rd(this,a),d=xa([d],Ba(arguments,1));this.ta.apply(this,d)};
function Pd(a,b){var c=t(function(a){a.discoverable_subscriptions&&Nb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.M(b)},a);
Oc(c)}
;var Sd=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};u("yt.uix.widgets_",Sd);var Td=window,Ud=document,Vd=Td.location;function Wd(){}
var Xd=/\[native code\]/;function W(a,b,c){return a[b]=a[b]||c}
function Yd(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Zd(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function X(){var a;if((a=Object.create)&&Xd.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var $d=W(Td,"gapi",{});var Y;Y=W(Td,"___jsl",X());W(Y,"I",0);W(Y,"hel",10);function ae(){var a=Vd.href,b;if(Y.dpo)b=Y.h;else{b=Y.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function be(a){var b=W(Y,"PQ",[]);Y.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function ce(a){return W(W(Y,"H",X()),a,X())}
;var de=W(Y,"perf",X());W(de,"g",X());var ee=W(de,"i",X());W(de,"r",[]);X();X();function fe(a,b,c){b&&0<b.length&&(b=ge(b),c&&0<c.length&&(b+="___"+ge(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=W(ee,"_p",X()),W(b,c,X())[a]=(new Date).getTime(),b=de.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function ge(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var he=X(),ie=[];function Z(a){throw Error("Bad hint"+(a?": "+a:""));}
;ie.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Y[b]=W(Y,b,[]).concat(c):W(Y,b,c)}if(b=a.u)a=W(Y,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var je=/^(\/[a-zA-Z0-9_\-]+)+$/,ke=/^[a-zA-Z0-9\-_\.,!]+$/,le=/^gapi\.loaded_[0-9]+$/,me=/^[a-zA-Z0-9,._-]+$/;function ne(a,b,c,d){var e=a.split(";"),f=e.shift(),g=he[f],h=null;g?h=g(e,b,c,d):Z("no hint processor for: "+f);h||Z("failed to generate load url");b=h;c=b.match(oe);(d=b.match(pe))&&1===d.length&&qe.test(b)&&c&&1===c.length||Z("failed sanity: "+a);return h}
function re(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=se(a);le.test(c)||Z("invalid_callback");b=te(b);d=d&&d.length?te(d):null;return[encodeURIComponent(a.za).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.V?"/am="+e(a.V):"",a.da?"/rs="+e(a.da):"",a.ja?"/t="+e(a.ja):"","/cb=",e(c)].join("")}
function se(a){"/"!==a.charAt(0)&&Z("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Z("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");je.test(b)||Z("invalid_prefix");c=ue(a,"k",!0);d=ue(a,"am");e=ue(a,"rs");a=ue(a,"t");return{za:b,version:c,
V:d,da:e,ja:a}}
function te(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");me.test(e)&&b.push(e)}return b.join(",")}
function ue(a,b,c){a=a[b];!a&&c&&Z("missing: "+b);if(a){if(ke.test(a))return a;Z("invalid: "+b)}return null}
var qe=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,pe=/\/cb=/g,oe=/\/\//g;function ve(){var a=ae();if(!a)throw Error("Bad hint");return a}
he.m=function(a,b,c,d){(a=a[0])||Z("missing_hint");return"https://apis.google.com"+re(a,b,c,d)};var we=decodeURI("%73cript");function xe(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Yd.call(b,e)&&c.push(e)}return c}
function ye(a){"loading"!=Ud.readyState?ze(a):Ud.write("<"+we+' src="'+encodeURI(a)+'"></'+we+">")}
function ze(a){var b=Ud.createElement(we);b.setAttribute("src",a);b.async="true";(a=Ud.getElementsByTagName(we)[0])?a.parentNode.insertBefore(b,a):(Ud.head||Ud.body||Ud.documentElement).appendChild(b)}
function Ae(a,b){var c=b&&b._c;if(c)for(var d=0;d<ie.length;d++){var e=ie[d][0],f=ie[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Be(a,b,c){Ce(function(){var c;c=b===ae()?W($d,"_",X()):X();c=W(ce(b),"_",c);a(c)},c)}
function De(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ae(a,c);var d=a?a.split(":"):[],e=c.h||ve(),f=W(Y,"ah",X());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,l=g.length&&g[g.length-1]||null,n=l;l&&l.hint==k||(n={hint:k,Y:[]},g.push(n));n.Y.push(h)}var H=g.length;if(1<H){var ua=c.callback;ua&&(c.callback=function(){0==--H&&ua()})}for(;d=g.shift();)Ee(d.Y,c,d.hint)}else Ee(d||[],c,e)}
function Ee(a,b,c){function d(a,b){if(H)return 0;Td.clearTimeout(n);ua.push.apply(ua,T);var d=(($d||{}).config||{}).update;d?d(f):f&&W(Y,"cu",[]).push(f);if(b){fe("me0",a,hb);try{Be(b,c,l)}finally{fe("me1",a,hb)}}return 1}
a=Zd(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var n=null,H=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=W(ce(c),"r",[]).sort(),ua=W(ce(c),"L",[]).sort(),hb=[].concat(k);0<g&&(n=Td.setTimeout(function(){H=!0;h()},g));
var T=xe(a,ua);if(T.length){var T=xe(a,k),ga=W(Y,"CP",[]),ha=ga.length;ga[ha]=function(a){function b(){var a=ga[ha+1];a&&a()}
function c(b){ga[ha]=null;d(T,a)&&be(function(){e&&e();b()})}
if(!a)return 0;fe("ml1",T,hb);0<ha&&ga[ha-1]?ga[ha]=function(){c(b)}:c(b)};
if(T.length){var bc="loaded_"+Y.I++;$d[bc]=function(a){ga[ha](a);$d[bc]=null};
a=ne(c,T,"gapi."+bc,k);k.push.apply(k,T);fe("ml0",T,hb);b.sync||Td.___gapisync?ye(a):ze(a)}else ga[ha](Wd)}else d(T)&&e&&e()}
;function Ce(a,b){if(Y.hee&&0<Y.hel)try{return a()}catch(c){b&&b(c),Y.hel--,De("debug_error",function(){try{window.___jsl.hefn(c)}catch(a){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
;$d.load=function(a,b){return Ce(function(){return De(a,b)})};function Fe(a){a=ea(a)?{callback:a}:a||{};if(a.gapiHintOverride||D("GAPI_HINT_OVERRIDE")){var b;b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=lc(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&La(a,{_c:{jsl:{h:b}}})}De("gapi.iframes:gapi.iframes.style.common",a)}
;function Ge(){return q("gapi.iframes.getContext")()}
function He(a){(Ge()||Ge()).connectIframes(a)}
function Ie(a,b){Ge().addOnConnectHandler("yt",a,void 0,b)}
function Je(){return Ge().getParentIframe()}
;var Ke="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com".split(" "),Le=[wc,xc,L,Ac,Bc,M,yc,Cc],Me=[wc,xc,L,Ac,Bc,M,Dc,Ec];function Ne(a){this.b=a;this.o=null;D("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Oe(this),O(this.b,"mouseover",t(this.i,this)),O(this.b,"mouseout",t(this.N,this)),O(this.b,"click",t(this.N,this)),I(L,ma(this.f,!0),this),I(M,ma(this.f,!1),this),Pe(this))}
function Oe(a){var b={url:D("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=t(a.g,a);Ge().open(b,a)}
function Pe(a){$c()||Kc("LOGGED_IN",function(){this.o&&(this.N(),this.o.close(),this.o=null,Oe(this))},a)}
Ne.prototype.g=function(a){this.o=a;a=V.B().f(this.b);this.f(a)};
Ne.prototype.i=function(){this.o&&this.o.restyle({show:!0})};
Ne.prototype.N=function(){this.o&&this.o.restyle({show:!1})};
Ne.prototype.f=function(a){if(this.o){a={isSubscribed:a};try{var b=q("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.o.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};function Qe(a){if(da(a))return Re(a);if(fa(a)&&!ea(a)&&!(fa(a)&&0<a.nodeType))return Se(a);try{return p.JSON.stringify(a),a}catch(b){}}
function Se(a){var b={};Ha(a,function(a,d){b[d]=Qe(a)});
return b}
function Re(a){var b=[];w(a,function(a,d){b[d]=Qe(a)});
return b}
;function Te(a){this.f=null;this.b=a;a=Je();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^na()).toString(36);a&&(He({role:"ytsubscribe",iframe:a,data:{id:b}}),Ie(t(function(a){this.f=a},this),this.b))}
Te.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=t(this.register,this,a,b,this.b);Ie(c,this.b)}};
Te.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=t(this.send,this,a,b);Ie(c,this.b)}};function Ue(){this.b=this.f=null}
function Ve(a,b){var c=q("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||We(a),e=Je();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
Ue.prototype.g=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function We(a){if(!a.f){var b;b=q("gapi.iframes.makeWhiteListIframesFilter")(Ke);a.f=b}return a.f}
;function Xe(){this.b=new Ue;this.g=!1;this.f={}}
function Ye(a){w(Le,function(a){if(!this.f[a.toString()]){var c=I(a,function(c){var e=c?{version:c.version,args:c.args}:null;c=this.b;c.b&&(e={eventType:"pubsub2",topicString:a.toString(),serializedData:Qe(e)},c.b.send("msg-youtube-pubsub",e))},this);
c&&(this.f[a.toString()]=c)}},a)}
Xe.prototype.i=function(a,b){var c=va(Me,function(b){return b.toString()==a});
if(c&&(!c.G||b)){var d;if(c.G)try{d=Tb(c.G,b)}catch(f){return}var e=this.f[c.toString()];e?Zb(e,c,d):G(c,d)}};
Xe.prototype.j=function(a){Ze(this)&&Ve(this.b,{eventType:"subscribe",channelExternalId:a.b})};
Xe.prototype.C=function(a){Ze(this)&&Ve(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function Ze(a){return a.g||!!D("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function $e(){Fe(function(){var a;a=fd(B("yt-subscribe"));a={width:a.width,height:a.height};var b=af;Ge().ready(a,null,b)})}
function af(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=B("yt-subscribe"),d=V.B(),d=S(d),e=c||document,f=null;e.getElementsByClassName?f=e.getElementsByClassName(d)[0]:e.querySelectorAll&&e.querySelector?f=e.querySelector("."+d):f=lb(d,c)[0];c=f||null;a&&c&&(V.B(),yd(c,"parent-url",a));a=bf();b&&a&&(V.B().b=!0);c&&!a&&new Ne(c);a=new Xe;I(L,a.j,a);I(M,a.C,a);if(bf()){b=a.b;b.b=new Te(We(b));Ye(a);b=a.b;c=t(a.i,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",
ma(b.g,c))}catch(g){}a.g=!0}}}
function bf(){var a=Je().getOrigin();return wa(Ke,a)}
;function cf(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&kc(c)}}
;function df(a){E.call(this,1,arguments);this.b=a}
v(df,E);function ef(a,b){E.call(this,2,arguments);this.f=a;this.b=b}
v(ef,E);function ff(a,b,c,d){E.call(this,1,arguments);this.b=b;this.g=c||null;this.f=d||null}
v(ff,E);function gf(a,b){E.call(this,1,arguments);this.f=a;this.b=b||null}
v(gf,E);function hf(a){E.call(this,1,arguments)}
v(hf,E);var jf=new F("ypc-core-load",df),kf=new F("ypc-guide-sync-success",ef),lf=new F("ypc-purchase-success",ff),mf=new F("ypc-subscription-cancel",hf),nf=new F("ypc-subscription-cancel-success",gf),of=new F("ypc-init-subscription",hf);var pf=!1,qf=[],rf=[];function sf(a){a.b?pf?G(yc,a):G(jf,new df(function(){G(of,new hf(a.b))})):tf(a.f,a.i,a.g,a.j)}
function uf(a){a.b?pf?G(Cc,a):G(jf,new df(function(){G(mf,new hf(a.b))})):vf(a.f,a.C,a.i,a.g,a.j)}
function wf(a){xf(ya(a.b))}
function yf(a){zf(ya(a.b))}
function Af(a){Bf(a.b,a.f,null)}
function Cf(a,b,c,d){Bf(a,b,c,d)}
function Df(a){var b=a.f,c=a.b.subscriptionId;b&&c&&G(L,new qc(b,c,a.b.channelInfo))}
function Ef(a){var b=a.b;Ha(a.f,function(a,d){G(L,new qc(d,a,b[d]))})}
function Ff(a){G(M,new K(a.f.itemId));a.b&&a.b.length&&(Gf(a.b,M),Gf(a.b,Dc))}
function tf(a,b,c,d){var e=new K(a);G(wc,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=D("PLAYBACK_ID"))&&(c.plid=d);(d=D("EVENT_ID"))&&(c.ei=d);b&&Hf(b,c);Vc("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ha:f,w:c,D:function(b,c){var d=c.response;G(L,new qc(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Nc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&cf(d.actions)},
P:function(){G(xc,e)}})}
function vf(a,b,c,d,e){var f=new K(a);G(Ac,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=D("PLAYBACK_ID"))&&(d.plid=a);(a=D("EVENT_ID"))&&(d.ei=a);c&&Hf(c,d);Vc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ha:g,w:d,D:function(a,b){var c=b.response;G(M,f);c.actions&&cf(c.actions)},
P:function(){G(Bc,f)}})}
function Bf(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.receive_all_updates=b);null===c||(e.receive_no_updates=c);Vc("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",w:e,onError:function(){d&&d()}})}}
function xf(a){if(a.length){var b=Aa(a,0,40);G("subscription-batch-subscribe-loading");Gf(b,wc);var c={};c.a=b.join(",");var d=function(){G("subscription-batch-subscribe-loaded");Gf(b,xc)};
Vc("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",w:c,D:function(c,f){d();var g=f.response,h=g.id;if("array"==ca(h)&&h.length==b.length){var k=g.channel_info_map;w(h,function(a,c){var d=b[c];G(L,new qc(d,a,k[d]))});
a.length?xf(a):G("subscription-batch-subscribe-finished")}},
onError:function(){d();G("subscription-batch-subscribe-failure")}})}}
function zf(a){if(a.length){var b=Aa(a,0,40);G("subscription-batch-unsubscribe-loading");Gf(b,Ac);var c={};c.c=b.join(",");var d=function(){G("subscription-batch-unsubscribe-loaded");Gf(b,Bc)};
Vc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",w:c,D:function(){d();Gf(b,M);a.length&&zf(a)},
onError:function(){d()}})}}
function Gf(a,b){w(a,function(a){G(b,new K(a))})}
function Hf(a,b){var c=lc(a),d;for(d in c)b[d]=c[d]}
;u("yt.setConfig",Nb);u("ytbin.www.subscribeembed.init",function(){pf=!0;rf.push(I(vc,sf),I(zc,uf));pf||(rf.push(I(yc,sf),I(Cc,uf),I(sc,wf),I(tc,yf),I(uc,Af)),qf.push(Kc("subscription-prefs",Cf)),rf.push(I(lf,Df),I(nf,Ff),I(kf,Ef)));var a=V.B(),b=S(a);b in Sd||(a.register(),a.K.push(Kc("yt-uix-init-"+b,a.init,a)),a.K.push(Kc("yt-uix-dispose-"+b,a.dispose,a)),Sd[b]=a);$e()});})();
