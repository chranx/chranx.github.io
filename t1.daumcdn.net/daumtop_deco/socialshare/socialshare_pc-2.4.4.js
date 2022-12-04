(function (exports) {
    /* 이 파일은 자동 생성됩니다. 직접 수정 금지 */
    !function (a, b, c) {
        "use strict";
        function d() {
            for (var a = b.querySelectorAll(p), c = 0, d = a.length; d > c; c += 1){
                e(a[c]);
            }
        }

        function e(a) {
            if (!a[q]) {
                a[q] = !0;
                var b = i(a, "type"), c = i(a, "action");
                b && c && k(a, "click", function (d) {
                    d.preventDefault(), f(b, c, j(a));
                });
            }
        }

        function f(a, b, d) {
            switch (a) {
                case n.DIALOG:
                    switch (b) {
                        case o.SHARE:
                            g(d);
                            break;
                        default:
                            c.error("bad or missing action: " + b);
                    }
                    break;
                default:
                    c.error("bad or missing type: " + a);
            }
        }

        function g(b) {
            var d = b.link;
            if (!d){
                throw new Error("bad or missing link: " + d);
            }
            var e = b.next || a.location.href, f = b.target || "_self", g = l + "?link=" + encodeURIComponent(d) + "&next=" + encodeURIComponent(e), i = a.open(g, f);
            if (a !== i.opener) {
                c.log("popup!");
                var j = setInterval(function () {
                    h(i) && j && (clearInterval(j), j = null);
                }, 1e3);
            }
        }

        function h(a) {
            if (a.location.hash) {
                var b = m.exec(a.location.hash);
                if (b) {
                    var c = b[2];
                    if (a.confirm("등록된 글을 카페에서 확인하시겠습니까?")){
                        return a.location.replace(c), !0;
                    }
                    a.location.hash = a.location.hash.replace(m, "");
                }
            }
        }

        function i(a, b) {
            return a.dataset ? a.dataset[b] : a.getAttribute("data-" + b);
        }

        function j(a) {
            if (a.dataset){
                return a.dataset;
            }
            for (var b = {}, c = a.attributes, d = 0, e = c.length; e > d; d += 1) {
                var f = c[d], g = r.exec(f.name);
                g && (b[g[1]] = f.value);
            }
            return b;
        }

        function k(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c);
        }

        var l = a.__CAFE_SHARE_DIALOG_ENDPOINT__ || "http://m.cafe.daum.net/_dialogs/share", m = /(#|&)__cafe_link__=(.+)/, n = {DIALOG: "dialog"}, o = {SHARE: "share"}, p = ".cafe-widget", q = "__cafe_widget__";
        setTimeout(function () {
            h(a) || d();
        }, 1);
        var r = /^data-(\w+)$/i;
        a.DaumCafe = a.DaumCafe || {}, a.DaumCafe.Widget = a.DaumCafe.Widget || {}, a.DaumCafe.Widget.connect = f;
    }(window, document, console);
})();/**
 * Kakao SDK for JavaScript - v1.41.0
 *
 * Copyright 2017 Kakao Corp.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * OSS Notice | KakaoSDK-Javascript
 *
 * This application is Copyright © Kakao Corp. All rights reserved.
 * The following sets forth attribution notices for third party software that may be contained in this application.
 * If you have any questions or concerns, please contact us at opensource@kakaocorp.com
 *
 *
 * crypto-js
 *
 * https://github.com/brix/crypto-js
 *
 * Copyright 2009-2013 Jeff Mott
 * Copyright 2013-2016 Evan Vosberg
 *
 * MIT License
 *
 *
 * easyXDM
 *
 * https://github.com/oyvindkinsey/easyXDM/
 *
 * Copyright 2009-2011 Øyvind Sean Kinsey, oyvind@kinsey.no
 *
 * MIT License
 *
 *
 * ES6-Promise
 *
 * https://github.com/stefanpenner/es6-promise
 *
 * Copyright 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 *
 * MIT License
 *
 *
 * Kakao Web2App Library
 *
 * https://github.com/kakao/web2app
 *
 * Copyright 2015 Kakao Corp. http://www.kakaocorp.com
 *
 * MIT License
 *
 *
 * lodash
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors
 *
 * MIT License
 *
 *
 * ua_parser
 *
 * https://github.com/html5crew/ua_parser
 *
 * Copyright HTML5 Tech. Team in Daum Communications Corp.
 *
 * MIT License
 *
 *
 * ``````````
 * MIT License
 *
 * Copyright (c)
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ``````````
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Kakao=e.Kakao||{})}(this,(function(e){"use strict";var t="object"==typeof global&&global&&global.Object===Object&&global,n="object"==typeof self&&self&&self.Object===Object&&self,r=t||n||Function("return this")(),o=r.Symbol,i=Object.prototype,a=i.hasOwnProperty,c=i.toString,s=o?o.toStringTag:void 0;var u=Object.prototype.toString;var l=o?o.toStringTag:void 0;function d(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?function(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[s]=n:delete e[s]),o}(e):function(e){return u.call(e)}(e)}function p(e){return null!=e&&"object"==typeof e}var f=Array.isArray,h=/\s/;var m=/^\s+/;function v(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&h.test(e.charAt(t)););return t}(e)+1).replace(m,""):e}function g(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,_=/^0o[0-7]+$/i,k=parseInt;function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||p(e)&&"[object Symbol]"==d(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=v(e);var n=b.test(e);return n||_.test(e)?k(e.slice(2),n?2:8):y.test(e)?NaN:+e}var S=1/0;function x(e){var t=function(e){return e?(e=w(e))===S||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}(e),n=t%1;return t==t?n?t-n:t:0}function O(e){return e}function A(e){if(!g(e))return!1;var t=d(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}var T,j=r["__core-js_shared__"],C=(T=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var I=Function.prototype.toString;var P=/^\[object .+?Constructor\]$/,F=Function.prototype,B=Object.prototype,E=F.toString,L=B.hasOwnProperty,U=RegExp("^"+E.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function R(e){return!(!g(e)||(t=e,C&&C in t))&&(A(e)?U:P).test(function(e){if(null!=e){try{return I.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function z(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var D=Date.now;var M,q,N,K=function(){try{var e=R(t=function(e,t){return null==e?void 0:e[t]}(Object,"defineProperty"))?t:void 0;return e({},"",{}),e}catch(e){}var t}(),H=K,J=H?function(e,t){return H(e,"toString",{configurable:!0,enumerable:!1,value:(n=t,function(){return n}),writable:!0});var n}:O,W=(M=J,q=0,N=0,function(){var e=D(),t=16-(e-N);if(N=e,t>0){if(++q>=800)return arguments[0]}else q=0;return M.apply(void 0,arguments)}),X=W;function $(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}var G=/^(?:0|[1-9]\d*)$/;function V(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&G.test(e))&&e>-1&&e%1==0&&e<t}function Y(e,t,n){"__proto__"==t&&H?H(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Q(e,t){return e===t||e!=e&&t!=t}var Z=Object.prototype.hasOwnProperty;function ee(e,t,n){var r=e[t];Z.call(e,t)&&Q(r,n)&&(void 0!==n||t in e)||Y(e,t,n)}var te=Math.max;function ne(e,t){return X(function(e,t,n){return t=te(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,i=te(r.length-t,0),a=Array(i);++o<i;)a[o]=r[t+o];o=-1;for(var c=Array(t+1);++o<t;)c[o]=r[o];return c[t]=n(a),z(e,this,c)}}(e,t,O),e+"")}function re(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function oe(e){return null!=e&&re(e.length)&&!A(e)}function ie(e,t,n){if(!g(n))return!1;var r=typeof t;return!!("number"==r?oe(n)&&V(t,n.length):"string"==r&&t in n)&&Q(n[t],e)}var ae=Object.prototype;function ce(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ae)}function se(e){return p(e)&&"[object Arguments]"==d(e)}var ue=Object.prototype,le=ue.hasOwnProperty,de=ue.propertyIsEnumerable,pe=se(function(){return arguments}())?se:function(e){return p(e)&&le.call(e,"callee")&&!de.call(e,"callee")},fe=pe;var he="object"==typeof e&&e&&!e.nodeType&&e,me=he&&"object"==typeof module&&module&&!module.nodeType&&module,ve=me&&me.exports===he?r.Buffer:void 0,ge=(ve?ve.isBuffer:void 0)||function(){return!1},ye={};ye["[object Float32Array]"]=ye["[object Float64Array]"]=ye["[object Int8Array]"]=ye["[object Int16Array]"]=ye["[object Int32Array]"]=ye["[object Uint8Array]"]=ye["[object Uint8ClampedArray]"]=ye["[object Uint16Array]"]=ye["[object Uint32Array]"]=!0,ye["[object Arguments]"]=ye["[object Array]"]=ye["[object ArrayBuffer]"]=ye["[object Boolean]"]=ye["[object DataView]"]=ye["[object Date]"]=ye["[object Error]"]=ye["[object Function]"]=ye["[object Map]"]=ye["[object Number]"]=ye["[object Object]"]=ye["[object RegExp]"]=ye["[object Set]"]=ye["[object String]"]=ye["[object WeakMap]"]=!1;var be="object"==typeof e&&e&&!e.nodeType&&e,_e=be&&"object"==typeof module&&module&&!module.nodeType&&module,ke=_e&&_e.exports===be&&t.process,we=function(){try{var e=_e&&_e.require&&_e.require("util").types;return e||ke&&ke.binding&&ke.binding("util")}catch(e){}}(),Se=we&&we.isTypedArray,xe=Se?function(e){return function(t){return e(t)}}(Se):function(e){return p(e)&&re(e.length)&&!!ye[d(e)]},Oe=xe,Ae=Object.prototype.hasOwnProperty;function Te(e,t){var n=f(e),r=!n&&fe(e),o=!n&&!r&&ge(e),i=!n&&!r&&!o&&Oe(e),a=n||r||o||i,c=a?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],s=c.length;for(var u in e)!t&&!Ae.call(e,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||V(u,s))||c.push(u);return c}function je(e,t){return function(n){return e(t(n))}}var Ce=je(Object.keys,Object),Ie=Object.prototype.hasOwnProperty;function Pe(e){return oe(e)?Te(e):function(e){if(!ce(e))return Ce(e);var t=[];for(var n in Object(e))Ie.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)}var Fe=Object.prototype.hasOwnProperty;function Be(e){if(!g(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=ce(e),n=[];for(var r in e)("constructor"!=r||!t&&Fe.call(e,r))&&n.push(r);return n}function Ee(e){return oe(e)?Te(e,!0):Be(e)}var Le,Ue=(Le=function(e,t){!function(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var c=t[i],s=r?r(n[c],e[c],c,n,e):void 0;void 0===s&&(s=e[c]),o?Y(n,c,s):ee(n,c,s)}}(t,Ee(t),e)},ne((function(e,t){var n=-1,r=t.length,o=r>1?t[r-1]:void 0,i=r>2?t[2]:void 0;for(o=Le.length>3&&"function"==typeof o?(r--,o):void 0,i&&ie(t[0],t[1],i)&&(o=r<3?void 0:o,r=1),e=Object(e);++n<r;){var a=t[n];a&&Le(e,a,n,o)}return e}))),Re=je(Object.getPrototypeOf,Object),ze=Function.prototype,De=Object.prototype,Me=ze.toString,qe=De.hasOwnProperty,Ne=Me.call(Object);var Ke,He=function(e,t,n){for(var r=-1,o=Object(e),i=n(e),a=i.length;a--;){var c=i[Ke?a:++r];if(!1===t(o[c],c,o))break}return e};var Je=function(e,t){return function(n,r){if(null==n)return n;if(!oe(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=Object(n);(t?i--:++i<o)&&!1!==r(a[i],i,a););return n}}((function(e,t){return e&&He(e,t,Pe)})),We=Je,Xe=Object.prototype,$e=Xe.hasOwnProperty,Ge=ne((function(e,t){e=Object(e);var n=-1,r=t.length,o=r>2?t[2]:void 0;for(o&&ie(t[0],t[1],o)&&(r=1);++n<r;)for(var i=t[n],a=Ee(i),c=-1,s=a.length;++c<s;){var u=a[c],l=e[u];(void 0===l||Q(l,Xe[u])&&!$e.call(e,u))&&(e[u]=i[u])}return e}));function Ve(e,t){var n;return(f(e)?$:We)(e,"function"==typeof(n=t)?n:O)}function Ye(e){return"string"==typeof e||!f(e)&&p(e)&&"[object String]"==d(e)}function Qe(e){return!0===e||!1===e||p(e)&&"[object Boolean]"==d(e)}function Ze(e){return p(e)&&1===e.nodeType&&!function(e){if(!p(e)||"[object Object]"!=d(e))return!1;var t=Re(e);if(null===t)return!0;var n=qe.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Me.call(n)==Ne}(e)}function et(e){return"number"==typeof e&&e==x(e)}function tt(e){return"number"==typeof e||p(e)&&"[object Number]"==d(e)}function nt(e){return function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}}function rt(e){return nt("Blob")(e)}function ot(e){return nt("File")(e)}function it(e){return nt("FileList")(e)}function at(e,t){return Array.prototype.slice.call(e).map(t)}function ct(e,t){return Array.prototype.slice.call(e).every(t)}function st(e,t){return[e,t].reduce((function(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}))}function ut(e){return Object.keys(e||{})}function lt(){}function dt(){return Math.random().toString(36).slice(2)}function pt(e){return Ze(e)?e:Ye(e)?document.querySelector(e):null}function ft(e,t,n){e.addEventListener&&e.addEventListener(t,n,!1)}function ht(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}function mt(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t?encodeURIComponent:function(e){return e},r=at(ut(e),(function(t){var r=e[t];return n(t)+"="+n(g(r)?JSON.stringify(r):r)}));return r.join("&")}function vt(e){if(!f(e))throw new Error("elements should be an Array");return function(t){return e.indexOf(t)>-1}}function gt(e){if(!f(e))throw new Error("validators should be an Array");return function(t){return e.some((function(e){return e(t)}))}}var yt=function(){var e={_data:{},setItem:function(e,t){return this._data[e]=String(t)},getItem:function(e){return this._data.hasOwnProperty(e)?this._data[e]:null},removeItem:function(e){return delete this._data[e]},clear:function(){return this._data={}}};try{return"localStorage"in window&&null!==window.localStorage?(window.localStorage.setItem("store",""),window.localStorage.removeItem("store"),window.localStorage):e}catch(t){return e}}();function bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bt(Object(n),!0).forEach((function(t){Ot(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function kt(e){return kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kt(e)}function wt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function St(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xt(e,t,n){return t&&St(e.prototype,t),n&&St(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ot(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function At(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&jt(e,t)}function Tt(e){return Tt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Tt(e)}function jt(e,t){return jt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},jt(e,t)}function Ct(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function It(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Tt(e);if(t){var o=Tt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ct(this,n)}}function Pt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||Bt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ft(e){return function(e){if(Array.isArray(e))return Et(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Bt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Bt(e,t){if(e){if("string"==typeof e)return Et(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Et(e,t):void 0}}function Et(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Lt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Ut=function(){function e(e){var n={},r=/(dolfin)[ \/]([\w.]+)/.exec(e)||/(edge)[ \/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(tizen)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e)||/(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(e)||["","unknown"];return"webkit"===r[1]?r=/(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e)||/(android)[ \/]([\w._\-]+);/.exec(e)||[r[0],"safari",r[2]]:"mozilla"===r[1]?/trident/.test(e)?r[1]="msie":r[1]="firefox":/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e)&&(r[1]="polaris"),n[r[1]]=!0,n.name=r[1],n.version=t(r[2]),n}function t(e){var t={},n=e?e.split(/\.|-|_/):["0","0","0"];return t.info=n.join("."),t.major=n[0]||"0",t.minor=n[1]||"0",t.patch=n[2]||"0",t}function n(e){return function(e){if(e.match(/ipad/)||e.match(/android/)&&!e.match(/mobi|mini|fennec/)||e.match(/macintosh/)&&window.navigator.maxTouchPoints>1)return!0;return!1}(e)?"tablet":function(e){if(e.match(/linux|windows (nt|98)|macintosh|cros/)&&!e.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/))return!0;return!1}(e)?"pc":function(e){return!!e.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|tizen.+mobile|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)}(e)?"mobile":""}function r(e){var n={},r=/(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e)||!!/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e)&&["","polaris","0.0.0"]||/(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(e)||/(android)[ \/]([\w._\-]+);/.exec(e)||!!/android/.test(e)&&["","android","0.0.0"]||!!/(windows)/.test(e)&&["","windows","0.0.0"]||/(mac) os x ([\w._\-]+)/.exec(e)||/(tizen)[ \/]([\w._\-]+);/.exec(e)||!!/(linux)/.test(e)&&["","linux","0.0.0"]||!!/webos/.test(e)&&["","webos","0.0.0"]||/(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(e)||/(bada)[ \/]([\w._\-]+)/.exec(e)||!!/bada/.test(e)&&["","bada","0.0.0"]||!!/(rim|blackberry|bb10)/.test(e)&&["","blackberry","0.0.0"]||["","unknown","0.0.0"];return"iphone"===r[1]||"ipad"===r[1]||"ipod"===r[1]?r[1]="ios":"windows"===r[1]&&"98"===r[2]&&(r[2]="0.98.0"),"mac"===r[1]&&"undefined"!=typeof window&&window.navigator.maxTouchPoints>1&&(r[1]="ios"),"cros"===r[1]&&(r[1]="chrome"),n[r[1]]=!0,n.name=r[1],n.version=t(r[2]),n}Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});var o=["crios","fxios","daumapps"];function i(e,n){var r={},i=null,a=o;Array.isArray(n)?a=o.concat(n):"string"==typeof n&&(a=o.concat([n]));for(var c=0,s=a.length;c<s;c+=1){var u=a[c];if(i=new RegExp("("+u+")[ \\/]([\\w._\\-]+)").exec(e))break}return i||(i=["",""]),i[1]?(r.isApp=!0,r.name=i[1],r.version=t(i[2])):r.isApp=!1,r}return function(t,o){var a=function(e){return e?e.toLowerCase():"undefined"!=typeof window&&window.navigator&&"string"==typeof window.navigator.userAgent?window.navigator.userAgent.toLowerCase():""}(t);return{ua:a,browser:e(a),platform:n(a),os:r(a),app:i(a,o)}}}(),Rt=Ut();var zt,Dt,Mt,qt,Nt="https://kauth.kakao.com",Kt="https://story.kakao.com",Ht="https://developers.kakao.com",Jt=(zt=location,Dt=zt.protocol,Mt=zt.hostname,qt=zt.port,"".concat(Dt,"//").concat(Mt).concat(qt?":"+qt:"")),Wt=Rt,Xt=/KAKAOTALK/i.test(Wt.ua),$t="1.41.0".concat(""),Gt=navigator,Vt=["sdk/".concat($t),"os/javascript","sdk_type/javascript","lang/".concat(Gt.userLanguage||Gt.language),"device/".concat(Gt.platform.replace(/ /g,"_")),"origin/".concat(encodeURIComponent(Jt))].join(" "),Yt={accountDomain:"https://accounts.kakao.com",authDomain:Nt,authorize:"".concat(Nt,"/oauth/authorize"),loginWidget:"".concat(Nt,"/public/widget/login/kakaoLoginWidget.html"),redirectUri:"JS-SDK",universalKakaoLink:"".concat("https://talk-apps.kakao.com","/scheme/"),talkLoginScheme:"kakaokompassauth://authorize",talkLoginRedirectUri:"https://kapi.kakao.com/cors/afterlogin.html",talkInappScheme:"kakaotalk://inappbrowser",talkSyncpluginScheme:"kakaotalk://bizplugin?plugin_id=6011263b74fc2b49c73a7298",apiRemote:"".concat("https://kapi.kakao.com","/cors/"),sharerDomain:"https://sharer.kakao.com",pickerDomain:"https://friend-picker.kakao.com",appsDomain:"https://apps.kakao.com",talkLinkScheme:"kakaolink://send",talkAndroidPackage:"com.kakao.talk",channel:"https://pf.kakao.com",channelIcon:"".concat(Ht,"/assets/img/about/logos"),storyShare:"".concat(Kt,"/s/share"),storyChannelFollow:"".concat(Kt,"/s/follow"),storyIcon:"".concat(Ht,"/sdk/js/resources/story/icon_small.png"),storyPostScheme:"storylink://posting",naviScheme:"kakaonavi-sdk://navigate",naviFallback:"https://kakaonavi.kakao.com/launch/index.do"},Qt=null;function Zt(){return Qt}function en(e){Qt=e}function tn(e){Error.prototype.constructor.apply(this,arguments),this.name="KakaoError",this.message=e}function nn(e){return Ue.apply(void 0,[{cleanup:function(){Ve(e,(function(e){return e.cleanup&&e.cleanup()}))}}].concat(Ft(e)))}function rn(e){Ve(e,(function(e){e()})),e.length=0}function on(e,t,n){if(!1===t(e))throw new tn("Illegal argument for ".concat(n))}function an(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;if(!g(e))throw new Error("params should be an Object");A(t.before)&&t.before(e),A(t.defaults)?Ge(e,t.defaults(e)):Ge(e,t.defaults);var r=t.required,o=void 0===r?{}:r,i=t.optional,a=void 0===i?{}:i,c=st(ut(o),ut(e));if(c.length>0)throw new tn("Missing required keys: ".concat(c.join(",")," at ").concat(n));var s=Ue({},o,a),u=st(ut(e),ut(s));if(u.length>0)throw new tn("Invalid parameter keys: ".concat(u.join(",")," at ").concat(n));return Ve(e,(function(e,t){on(e,s[t],'"'.concat(t,'" in ').concat(n))})),A(t.after)&&t.after(e),e}function cn(){return(Math.random().toString(36).slice(2)+Zt()+Date.now().toString(36)).slice(0,60)}function sn(e,t){if(Wt.os.android){var n=JSON.stringify({appKey:Qt,KA:Vt});return"market://details?id=".concat(e,"&referrer=").concat(n)}return Wt.os.ios?"https://itunes.apple.com/app/id".concat(t):location.href}function un(e){try{return e()}catch(e){throw e instanceof TypeError?new tn("kakao.js should be loaded from a web server"):new tn("EasyXDM - ".concat(e.message))}}tn.prototype=new Error;var ln={};function dn(e,t,n){var r=ln[t];return r&&r.close&&!r.closed&&r.close(),ln[t]=window.open(e,t,n),ln[t]}function pn(e,t,n){Ve(n,(function(n,r){var o=t.getAttribute(n);null!==o&&(e[r]="true"===o||"false"===o?"true"===o:o)}))}function fn(e,t,n){var r=document.createElement("iframe");r.id=r.name=e,r.src=t,r.setAttribute("style","border:none; width:0; height:0; display:none; overflow:hidden;"),document.body.appendChild(r),n.push((function(){document.body.removeChild(r)}))}function hn(e,t,n){var r=function n(r){var o=r.data,i=r.origin;if(o&&i===t){var a=JSON.parse(o);a.code?e.fail(a):e.success(a),e.always(a),ht(window,"message",n)}};ft(window,"message",r),n.push((function(){ht(window,"message",r)}))}function mn(e,t){var n=t.url,r=t.popupName,o=t.popupFeatures,i=Wt.browser.msie?{}:dn("",r,o);return i.focus&&i.focus(),vn(e,n,r),i}function vn(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=document.createElement("form");r.setAttribute("accept-charset","utf-8"),r.setAttribute("method","post"),r.setAttribute("action",t),r.setAttribute("target",n),r.setAttribute("style","display:none"),Ve(e,(function(e,t){var n=document.createElement("input");n.type="hidden",n.name=t,n.value=Ye(e)?e:JSON.stringify(e),r.appendChild(n)})),document.body.appendChild(r),r.submit(),document.body.removeChild(r)}var gn={};var yn={subscribe:function(e,t){gn[e]=gn[e]||[],gn[e].push(t)},unsubscribe:function(e,t){for(var n=gn[e],r=0;r<n.length;r++)if(n[r]===t)return void n.splice(r,1)},dispatch:function(e){Ve(gn[e],(function(e){e()}))}},bn=function(){function e(t,n){wt(this,e),this._interval=t,this._maxCount=n,this._count=0,this._stopped=!1,this._timeout=null}return xt(e,[{key:"start",value:function(e,t){this._count=0,this._stopped=!1,this._doPolling(e,t)}},{key:"_doPolling",value:function(e,t){var n=this;this._stopped||(this._timeout=setTimeout((function(){++n._count>n._maxCount?t():(e(),n._doPolling(e,t))}),this._interval))}},{key:"stop",value:function(){this._stopped=!0,clearTimeout(this._timeout)}}]),e}(),_n={success:lt,fail:lt,always:lt},kn=_t({throughTalk:!0,persistAccessToken:!0,persistRefreshToken:!1},_n),wn={success:A,fail:A,always:A,persistAccessToken:Qe,persistRefreshToken:Qe,approvalType:vt(["project"]),scope:Ye,throughTalk:Qe,plusFriendPublicId:Ye,channelPublicId:Ye,serviceTerms:Ye,redirectUri:Ye,state:Ye,deviceType:vt(["watch","tv"])},Sn={optional:{success:A,fail:A,always:A,close:A,returnUrl:Ye},defaults:_t(_t({},_n),{},{close:lt})},xn={createLoginButton:{required:{container:gt([Ze,Ye])},optional:_t({lang:vt(["en","kr"]),size:vt(["small","medium","large"])},wn),defaults:_t({lang:"kr",size:"medium"},kn)},login:{optional:wn,defaults:kn},authorize:{optional:{redirectUri:Ye,approvalType:vt(["project"]),scope:Ye,throughTalk:Qe,plusFriendPublicId:Ye,channelPublicId:Ye,serviceTerms:Ye,isPopup:Qe,state:Ye,autoLogin:Qe,deviceType:vt(["watch","tv"]),prompts:Ye,reauthenticate:Qe,throughSyncplugin:Qe,loginHint:Ye,success:A,fail:A,always:A},defaults:{throughTalk:!0,isPopup:!1,reauthenticate:!1,throughSyncplugin:!0,success:lt,fail:lt,always:lt}},autoLogin:{optional:{success:A,fail:A,always:A},defaults:_n},issueAccessToken:{required:{code:Ye,redirectUri:Ye},optional:{success:A,fail:A,always:A},defaults:_n},selectShippingAddress:Sn,createShippingAddress:Sn,updateShippingAddress:_t({required:{addressId:et}},Sn)};function On(e){var t,n,r,o,i,a;return dn(e,"_blank",(t=480,n=700,r=window.screenLeft?window.screenLeft:window.screenX?window.screenX:0,o=window.screenTop?window.screenTop:window.screenY?window.screenY:0,i=screen.width/2-t/2+r,a=screen.height/2-n/2+o,["width=".concat(t),"height=".concat(n),"left=".concat(i),"top=".concat(a),"scrollbars=yes","resizable=1"].join(",")))}function An(e){return"".concat(Yt.authorize,"?").concat(mt(e))}function Tn(e){var t={client_id:Zt()};return e.approvalType&&(t.approval_type=e.approvalType),e.scope&&(t.scope=e.scope),e.state&&(t.state=e.state),t}function jn(e){var t={};return e.plusFriendPublicId&&(t["extra.plus_friend_public_id"]=e.plusFriendPublicId),e.channelPublicId&&(t.channel_public_id=e.channelPublicId),e.serviceTerms&&(t["extra.service_terms"]=e.serviceTerms),e.autoLogin&&(t.prompt="none"),e.reauthenticate&&(t.prompt="login"),e.prompts&&(t.prompt=e.prompts),e.deviceType&&(t.device_type=e.deviceType),e.loginHint&&(t.login_hint=e.loginHint),t}function Cn(e,t){t.error?e.fail(t):e.success(t),e.always(t)}function In(e,t){!function(e,t){var n=e.url,r=e.method,o=e.data,i=new XMLHttpRequest;if(void 0!==i.withCredentials)i.open(r,n),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&200===i.status&&t(i)},i.send(o);else{var a=new XDomainRequest;a.open(r.toLowerCase(),n),a.onload=function(){t({status:a.responseText?200:"error",response:a.responseText})},setTimeout((function(){a.send(o)}),0)}}({method:"GET",url:e},t)}var Pn=new bn(1e3,600);function Fn(e,t){return!!(e&&e.indexOf(t)>-1)}function Bn(e,t){if(e.state&&(t.state=e.state),e.redirectUri){var n=e.redirectUri.indexOf("?")>-1?"&":"?";location.href=e.redirectUri+n+mt(t)}else Cn(e,t)}var En=Object.freeze({__proto__:null,authorize:function(e){if(((e=an(e,xn.authorize,"Auth.authorize")).autoLogin||Fn(e.prompts,"none"))&&!Xt)return Bn(e,{error:"auto_login",error_description:"NOT_SUPPORTED_BROWSER"}),!1;var t=cn(),n=Ue({},Tn(e),jn(e),{redirect_uri:e.redirectUri||Yt.redirectUri,response_type:"code",auth_tran_id:t}),r=Ue({},n,{ka:Vt,is_popup:e.isPopup}),o=function(e){var t=!(!Wt.os.ios&&!Wt.os.android)&&!Xt,n=!0===e.reauthenticate||Fn(e.prompts,"login"),r=!0===e.autoLogin||Fn(e.prompts,"none");return!(Wt.os.android&&/instagram/g.test(Wt.ua))&&t&&!n&&!0===e.throughTalk&&!r}(e),i=function(e){return e.throughSyncplugin&&Xt&&/ch-home/i.test(Wt.ua)}(e),a=An(r),c=o?function(e,t,n){var r=Ue({},t,{is_popup:!0}),o=function(){var t=["intent:#Intent","action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY","launchFlags=0x08880000","S.com.kakao.sdk.talk.appKey=".concat(Zt()),"S.com.kakao.sdk.talk.redirectUri=".concat(r.redirect_uri),"S.com.kakao.sdk.talk.kaHeader=".concat(Vt),"S.com.kakao.sdk.talk.extraparams=".concat(encodeURIComponent(JSON.stringify(r)))];return e.state&&t.push("S.com.kakao.sdk.talk.state=".concat(e.state)),t.concat(["S.browser_fallback_url=".concat(encodeURIComponent(n)),"end;"]).join(";")},i=function(){var t=An(r),o=e.isPopup?t:n,i="".concat(t,"&ka=").concat(encodeURIComponent(Vt)),a="".concat(Yt.talkInappScheme,"?url=").concat(encodeURIComponent(i));return"".concat(Yt.universalKakaoLink).concat(encodeURIComponent(a),"&web=").concat(encodeURIComponent(o))};return Wt.os.android?o():i()}(e,n,a):a,s=null;i?function(e){var t=Ue({},e,{ka:Vt,is_popup:!0,approval_window_type:"v4_bizplugin"}),n=encodeURIComponent(mt(t));location.href="".concat(Yt.talkSyncpluginScheme,"&query=").concat(n)}(n):e.isPopup?s=On(c):location.href=c,(o||i||e.isPopup)&&Pn.start((function(){var n={client_id:Zt(),auth_tran_id:t,ka:Vt};In("".concat(Yt.authDomain,"/apiweb/code.json?").concat(mt(n)),(function(t){var n=function(e,t){if(200===t.status&&t.response){var n=JSON.parse(t.response);if("ok"===n.status&&n.code)return Bn(e,{code:n.code}),!0;if("error"===n.status&&n.error_code&&"300"!==n.error_code)return Bn(e,{error:n.error,error_description:n.error_description}),"700"===n.error_code&&(location.href="".concat(Yt.authDomain,"/error/network")),!0}return!1}(e,t);n&&(Pn.stop(),s&&s.close&&s.close()),!o&&s&&s.closed&&Pn.stop()}))}),(function(){Bn(e,{error:"timeout",error_description:"LOGIN_TIMEOUT"})})),yn.dispatch("LOGIN_START")}});function Ln(){return Wt.os.android&&(2==Wt.os.version.major&&/Version\/\d+.\d+|/i.test(Wt.ua)||4==Wt.os.version.major&&Wt.os.version.minor<4&&/Version\/\d+.\d+|/i.test(Wt.ua)||/Version\/\d+\.\d+/i.test(Wt.ua)&&(/Chrome\/\d+\.\d+\.\d+\.\d+ Mobile/i.test(Wt.ua)||/; wv\)/i.test(Wt.ua)))}function Un(){return Wt.os.ios&&Xt}var Rn={exports:{}};!function(e,t){e.exports=function(){function e(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}function t(e){return"function"==typeof e}var n=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},r=0,o=void 0,i=void 0,a=function(e,t){b[r]=e,b[r+1]=t,2===(r+=2)&&(i?i(_):w())};function c(e){i=e}function s(e){a=e}var u="undefined"!=typeof window?window:void 0,l=u||{},d=l.MutationObserver||l.WebKitMutationObserver,p="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){return function(){return process.nextTick(_)}}function m(){return void 0!==o?function(){o(_)}:y()}function v(){var e=0,t=new d(_),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function g(){var e=new MessageChannel;return e.port1.onmessage=_,function(){return e.port2.postMessage(0)}}function y(){var e=setTimeout;return function(){return e(_,1)}}var b=new Array(1e3);function _(){for(var e=0;e<r;e+=2)(0,b[e])(b[e+1]),b[e]=void 0,b[e+1]=void 0;r=0}function k(){try{var e=Function("return this")().require("vertx");return o=e.runOnLoop||e.runOnContext,m()}catch(e){return y()}}var w=void 0;function S(e,t){var n=this,r=new this.constructor(A);void 0===r[O]&&W(r);var o=n._state;if(o){var i=arguments[o-1];a((function(){return N(o,r,i,n._result)}))}else M(n,r,e,t);return r}function x(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(A);return U(n,e),n}w=p?h():d?v():f?g():void 0===u?k():y();var O=Math.random().toString(36).substring(2);function A(){}var T=void 0,j=1,C=2;function I(){return new TypeError("You cannot resolve a promise with itself")}function P(){return new TypeError("A promises callback cannot return that same promise.")}function F(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function B(e,t,n){a((function(e){var r=!1,o=F(n,t,(function(n){r||(r=!0,t!==n?U(e,n):z(e,n))}),(function(t){r||(r=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!r&&o&&(r=!0,D(e,o))}),e)}function E(e,t){t._state===j?z(e,t._result):t._state===C?D(e,t._result):M(t,void 0,(function(t){return U(e,t)}),(function(t){return D(e,t)}))}function L(e,n,r){n.constructor===e.constructor&&r===S&&n.constructor.resolve===x?E(e,n):void 0===r?z(e,n):t(r)?B(e,n,r):z(e,n)}function U(t,n){if(t===n)D(t,I());else if(e(n)){var r=void 0;try{r=n.then}catch(e){return void D(t,e)}L(t,n,r)}else z(t,n)}function R(e){e._onerror&&e._onerror(e._result),q(e)}function z(e,t){e._state===T&&(e._result=t,e._state=j,0!==e._subscribers.length&&a(q,e))}function D(e,t){e._state===T&&(e._state=C,e._result=t,a(R,e))}function M(e,t,n,r){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+j]=n,o[i+C]=r,0===i&&e._state&&a(q,e)}function q(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,o=void 0,i=e._result,a=0;a<t.length;a+=3)r=t[a],o=t[a+n],r?N(n,r,o,i):o(i);e._subscribers.length=0}}function N(e,n,r,o){var i=t(r),a=void 0,c=void 0,s=!0;if(i){try{a=r(o)}catch(e){s=!1,c=e}if(n===a)return void D(n,P())}else a=o;n._state!==T||(i&&s?U(n,a):!1===s?D(n,c):e===j?z(n,a):e===C&&D(n,a))}function K(e,t){try{t((function(t){U(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}var H=0;function J(){return H++}function W(e){e[O]=H++,e._state=void 0,e._result=void 0,e._subscribers=[]}function X(){return new Error("Array Methods must be provided an Array")}var $=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(A),this.promise[O]||W(this.promise),n(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?z(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&z(this.promise,this._result))):D(this.promise,X())}return e.prototype._enumerate=function(e){for(var t=0;this._state===T&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===x){var o=void 0,i=void 0,a=!1;try{o=e.then}catch(e){a=!0,i=e}if(o===S&&e._state!==T)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===ee){var c=new n(A);a?D(c,i):L(c,e,o),this._willSettleAt(c,t)}else this._willSettleAt(new n((function(t){return t(e)})),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===T&&(this._remaining--,e===C?D(r,n):this._result[t]=n),0===this._remaining&&z(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;M(e,void 0,(function(e){return n._settledAt(j,t,e)}),(function(e){return n._settledAt(C,t,e)}))},e}();function G(e){return new $(this,e).promise}function V(e){var t=this;return n(e)?new t((function(n,r){for(var o=e.length,i=0;i<o;i++)t.resolve(e[i]).then(n,r)})):new t((function(e,t){return t(new TypeError("You must pass an array to race."))}))}function Y(e){var t=new this(A);return D(t,e),t}function Q(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function Z(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var ee=function(){function e(t){this[O]=J(),this._result=this._state=void 0,this._subscribers=[],A!==t&&("function"!=typeof t&&Q(),this instanceof e?K(this,t):Z())}return e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();function te(){var e=void 0;if(void 0!==Lt)e=Lt;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=ee}return ee.prototype.then=S,ee.all=G,ee.race=V,ee.resolve=x,ee.reject=Y,ee._setScheduler=c,ee._setAsap=s,ee._asap=a,ee.polyfill=te,ee.Promise=ee,ee}()}(Rn);var zn=(function(e,t,n,r,o,i){var a,c,s,u,l,d=this||e,p=Math.floor(1e4*Math.random()),f=Function.prototype,h=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,m=/[\-\w]+\/\.\.\//,v=/([^:])\/\//g,g="",y={},b=e.easyXDM,_="easyXDM_",k=!1;function w(e,t){var n=kt(e[t]);return"function"==n||!("object"!=n||!e[t])||"unknown"==n}function S(){var e,t="Shockwave Flash",n="application/x-shockwave-flash";if(!E(navigator.plugins)&&"object"==kt(navigator.plugins[t])){var r=navigator.plugins[t].description;r&&!E(navigator.mimeTypes)&&navigator.mimeTypes[n]&&navigator.mimeTypes[n].enabledPlugin&&(c=r.match(/\d+/g))}if(!c)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),c=Array.prototype.slice.call(e.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1),e=null}catch(e){}if(!c)return!1;var o=parseInt(c[0],10),i=parseInt(c[1],10);return s=o>9&&i>0,!0}if(w(e,"addEventListener"))u=function(e,t,n){e.addEventListener(t,n,!1)},l=function(e,t,n){e.removeEventListener(t,n,!1)};else{if(!w(e,"attachEvent"))throw new Error("Browser not supported");u=function(e,t,n){e.attachEvent("on"+t,n)},l=function(e,t,n){e.detachEvent("on"+t,n)}}var x,O=!1,A=[];function T(){if(!O){O=!0;for(var e=0;e<A.length;e++)A[e]();A.length=0}}function j(e,t){O?e.call(t):A.push((function(){e.call(t)}))}function C(e){return e.match(h)[3]}function I(e){if(e.indexOf("file://")>=0)return"file://";var t=e.toLowerCase().match(h);if(!t)return"";var n=t[2],r=t[3],o=t[4]||"";return("http:"==n&&":80"==o||"https:"==n&&":443"==o)&&(o=""),n+"//"+r+o}function P(e){if(!(e=e.replace(v,"$1/")).match(/^(http||https):\/\//)){var t="/"===e.substring(0,1)?"":n.pathname;"/"!==t.substring(t.length-1)&&(t=t.substring(0,t.lastIndexOf("/")+1)),e=n.protocol+"//"+n.host+t+e}for(;m.test(e);)e=e.replace(m,"");return e}function F(e,t){var n="",r=e.indexOf("#");-1!==r&&(n=e.substring(r),e=e.substring(0,r));var o=[];for(var a in t)t.hasOwnProperty(a)&&o.push(a+"="+i(t[a]));return e+(k?"#":-1==e.indexOf("?")?"?":"&")+o.join("&")+n}"readyState"in t?(x=t.readyState,O="complete"==x||~navigator.userAgent.indexOf("AppleWebKit/")&&("loaded"==x||"interactive"==x)):O=!!t.body,O||(w(e,"addEventListener")?u(t,"DOMContentLoaded",T):(u(t,"readystatechange",(function(){"complete"==t.readyState&&T()})),t.documentElement.doScroll&&e===top&&function e(){if(!O){try{t.documentElement.doScroll("left")}catch(t){return void r(e,1)}T()}}()),u(e,"load",T));var B=function(e){for(var t,n={},r=(e=e.substring(1).split("&")).length;r--;)n[(t=e[r].split("="))[0]]=o(t[1]);return n}(/xdm_e=/.test(n.search)?n.search:n.hash);function E(e){return void 0===e}var L,U=function(){var e={},t={a:[1,2,3]},n='{"a":[1,2,3]}';return"undefined"!=typeof JSON&&"function"==typeof JSON.stringify&&JSON.stringify(t).replace(/\s/g,"")===n?JSON:(Object.toJSON&&Object.toJSON(t).replace(/\s/g,"")===n&&(e.stringify=Object.toJSON),"function"==typeof String.prototype.evalJSON&&(t=n.evalJSON()).a&&3===t.a.length&&3===t.a[2]&&(e.parse=function(e){return e.evalJSON()}),e.stringify&&e.parse?(U=function(){return e},e):null)};function R(e,t,n){var r;for(var o in t)t.hasOwnProperty(o)&&(o in e?"object"===kt(r=t[o])?R(e[o],r,n):n||(e[o]=t[o]):e[o]=t[o]);return e}function z(e){var n;E(a)&&function(){var e=t.body.appendChild(t.createElement("form")),n=e.appendChild(t.createElement("input"));n.name=_+"TEST"+p,a=n!==e.elements[n.name],t.body.removeChild(e)}(),a?n=t.createElement('<iframe name="'+e.props.name+'"/>'):(n=t.createElement("IFRAME")).name=e.props.name,n.id=n.name=e.props.name,delete e.props.name,"string"==typeof e.container&&(e.container=t.getElementById(e.container)),e.container||(R(n.style,{position:"absolute",top:"-2000px",left:"0px"}),e.container=t.body);var r=e.props.src;if(e.props.src="javascript:false",R(n,e.props),n.border=n.frameBorder=0,n.allowTransparency=!0,e.container.appendChild(n),e.onLoad&&u(n,"load",e.onLoad),e.usePost){var o,i=e.container.appendChild(t.createElement("form"));if(i.target=n.name,i.action=r,i.method="POST","object"===kt(e.usePost))for(var c in e.usePost)e.usePost.hasOwnProperty(c)&&(a?o=t.createElement('<input name="'+c+'"/>'):(o=t.createElement("INPUT")).name=c,o.value=e.usePost[c],i.appendChild(o));i.submit(),i.parentNode.removeChild(i)}else n.src=r;return e.props.src=r,n}function D(e){return e.replace(/[-[\]/{}()+.\^$|]/g,"\\$&").replace(/(\*)/g,".$1").replace(/\?/g,".")}function M(r){var o,i=r.protocol;if(r.isHost=r.isHost||E(B.xdm_p),k=r.hash||!1,r.props||(r.props={}),r.isHost)r.remote=P(r.remote),r.channel=r.channel||"default"+p++,r.secret=Math.random().toString(16).substring(2),E(i)&&(i=I(n.href)==I(r.remote)?"4":w(e,"postMessage")||w(t,"postMessage")?"1":r.swf&&w(e,"ActiveXObject")&&S()?"6":"Gecko"===navigator.product&&"frameElement"in e&&-1==navigator.userAgent.indexOf("WebKit")?"5":r.remoteHelper?"2":"0");else if(r.channel=B.xdm_c.replace(/["'<>\\]/g,""),r.secret=B.xdm_s,r.remote=B.xdm_e.replace(/["'<>\\]/g,""),i=B.xdm_p,r.acl&&!function(e,t){"string"==typeof e&&(e=[e]);for(var n,r=e.length;r--;)if(n="^"===e[r].substr(0,1)&&"$"===e[r].substr(e[r].length-1,1)?e[r]:"^"+D(e[r])+"$",(n=new RegExp(n)).test(t))return!0;return!1}(r.acl,r.remote))throw new Error("Access denied for "+r.remote);switch(r.protocol=i,i){case"0":if(R(r,{interval:100,delay:2e3,useResize:!0,useParent:!1,usePolling:!1},!0),r.isHost){if(!r.local){for(var a,s=n.protocol+"//"+n.host,u=t.body.getElementsByTagName("img"),l=u.length;l--;)if((a=u[l]).src.substring(0,s.length)===s){r.local=a.src;break}r.local||(r.local=e)}var d={xdm_c:r.channel,xdm_p:0};r.local===e?(r.usePolling=!0,r.useParent=!0,r.local=n.protocol+"//"+n.host+n.pathname+n.search,d.xdm_e=r.local,d.xdm_pa=1):d.xdm_e=P(r.local),r.container&&(r.useResize=!1,d.xdm_po=1),r.remote=F(r.remote,d)}else R(r,{useParent:!E(B.xdm_pa),usePolling:!E(B.xdm_po),useResize:!r.useParent&&r.useResize});o=[new y.stack.HashTransport(r),new y.stack.ReliableBehavior({}),new y.stack.QueueBehavior({encode:!0,maxLength:4e3-r.remote.length}),new y.stack.VerifyBehavior({initiate:r.isHost})];break;case"1":o=[new y.stack.PostMessageTransport(r)];break;case"2":r.isHost&&(r.remoteHelper=P(r.remoteHelper)),o=[new y.stack.NameTransport(r),new y.stack.QueueBehavior,new y.stack.VerifyBehavior({initiate:r.isHost})];break;case"3":o=[new y.stack.NixTransport(r)];break;case"4":o=[new y.stack.SameOriginTransport(r)];break;case"5":o=[new y.stack.FrameElementTransport(r)];break;case"6":c||S(),o=[new y.stack.FlashTransport(r)]}return o.push(new y.stack.QueueBehavior({lazy:r.lazy,remove:!0})),o}function q(e){for(var t,n={incoming:function(e,t){this.up.incoming(e,t)},outgoing:function(e,t){this.down.outgoing(e,t)},callback:function(e){this.up.callback(e)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}},r=0,o=e.length;r<o;r++)R(t=e[r],n,!0),0!==r&&(t.down=e[r-1]),r!==o-1&&(t.up=e[r+1]);return t}R(y,{version:"2.5.00.1",query:B,stack:{},apply:R,getJSONObject:U,whenReady:j,noConflict:function(t){return e.easyXDM=b,(g=t)&&(_="easyXDM_"+g.replace(".","_")+"_"),y}}),y.DomHelper={on:u,un:l,requiresJSON:function(n){(function(e,t){return!("object"!=kt(e[t])||!e[t])})(e,"JSON")||t.write('<script type="text/javascript" src="'+n+'"><\/script>')}},L={},y.Fn={set:function(e,t){L[e]=t},get:function(e,t){if(L.hasOwnProperty(e)){var n=L[e];return t&&delete L[e],n}}},y.Socket=function(e){var t=q(M(e).concat([{incoming:function(t,n){e.onMessage(t,n)},callback:function(t){e.onReady&&e.onReady(t)}}])),n=I(e.remote);this.origin=I(e.remote),this.destroy=function(){t.destroy()},this.postMessage=function(e){t.outgoing(e,n)},t.init()},y.Rpc=function(e,t){if(t.local)for(var n in t.local)if(t.local.hasOwnProperty(n)){var r=t.local[n];"function"==typeof r&&(t.local[n]={method:r})}var o=q(M(e).concat([new y.stack.RpcBehavior(this,t),{callback:function(t){e.onReady&&e.onReady(t)}}]));this.origin=I(e.remote),this.context=e.context||null,this.destroy=function(){o.destroy()},o.init()},y.stack.SameOriginTransport=function(e){var t,o,i,a;return t={outgoing:function(e,t,n){i(e),n&&n()},destroy:function(){o&&(o.parentNode.removeChild(o),o=null)},onDOMReady:function(){a=I(e.remote),e.isHost?(R(e.props,{src:F(e.remote,{xdm_e:n.protocol+"//"+n.host+n.pathname,xdm_c:e.channel,xdm_p:4}),name:_+e.channel+"_provider"}),o=z(e),y.Fn.set(e.channel,(function(e){return i=e,r((function(){t.up.callback(!0)}),0),function(e){t.up.incoming(e,a)}}))):(i=function(){var e=parent;if(""!==g)for(var t=0,n=g.split(".");t<n.length;t++)e=e[n[t]];return e.easyXDM}().Fn.get(e.channel,!0)((function(e){t.up.incoming(e,a)})),r((function(){t.up.callback(!0)}),0))},init:function(){j(t.onDOMReady,t)}}},y.stack.FlashTransport=function(e){var o,a,c,u,l;function p(e,t){r((function(){o.up.incoming(e,c)}),0)}function f(n){var r=e.swf+"?host="+e.isHost,o="easyXDM_swf_"+Math.floor(1e4*Math.random());y.Fn.set("flash_loaded"+n.replace(/[\-.]/g,"_"),(function(){y.stack.FlashTransport[n].swf=u=l.firstChild;for(var e=y.stack.FlashTransport[n].queue,t=0;t<e.length;t++)e[t]();e.length=0})),e.swfContainer?l="string"==typeof e.swfContainer?t.getElementById(e.swfContainer):e.swfContainer:(R((l=t.createElement("div")).style,s&&e.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0}),t.body.appendChild(l));var a="callback=flash_loaded"+i(n.replace(/[\-.]/g,"_"))+"&proto="+d.location.protocol+"&domain="+i(C(d.location.href))+"&port="+i(function(e){return e.match(h)[4]||""}(d.location.href))+"&ns="+i(g);l.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+o+"' data='"+r+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+r+"'></param><param name='flashvars' value='"+a+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+a+"' allowScriptAccess='always' wmode='transparent' src='"+r+"' height='1' width='1'></embed></object>"}return o={outgoing:function(t,n,r){u.postMessage(e.channel,t.toString()),r&&r()},destroy:function(){try{u.destroyChannel(e.channel)}catch(e){}u=null,a&&(a.parentNode.removeChild(a),a=null)},onDOMReady:function(){c=e.remote,y.Fn.set("flash_"+e.channel+"_init",(function(){r((function(){o.up.callback(!0)}))})),y.Fn.set("flash_"+e.channel+"_onMessage",p),e.swf=P(e.swf);var t=C(e.swf),i=function(){y.stack.FlashTransport[t].init=!0,(u=y.stack.FlashTransport[t].swf).createChannel(e.channel,e.secret,I(e.remote),e.isHost),e.isHost&&(s&&e.swfNoThrottle&&R(e.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"}),R(e.props,{src:F(e.remote,{xdm_e:I(n.href),xdm_c:e.channel,xdm_p:6,xdm_s:e.secret}),name:_+e.channel+"_provider"}),a=z(e))};y.stack.FlashTransport[t]&&y.stack.FlashTransport[t].init?i():y.stack.FlashTransport[t]?y.stack.FlashTransport[t].queue.push(i):(y.stack.FlashTransport[t]={queue:[i]},f(t))},init:function(){j(o.onDOMReady,o)}}},y.stack.PostMessageTransport=function(t){var o,i,a,c;function s(e){if("string"==typeof e.data){var r=function(e){if(e.origin)return I(e.origin);if(e.uri)return I(e.uri);if(e.domain)return n.protocol+"//"+e.domain;throw"Unable to retrieve the origin of the event"}(e);r==c&&"string"==typeof e.data&&e.data.substring(0,t.channel.length+1)==t.channel+" "&&o.up.incoming(e.data.substring(t.channel.length+1),r)}}function d(n){n.data==t.channel+"-ready"&&(a="postMessage"in i.contentWindow?i.contentWindow:i.contentWindow.document,l(e,"message",d),u(e,"message",s),r((function(){o.up.callback(!0)}),0))}return o={outgoing:function(e,n,r){a.postMessage(t.channel+" "+e,n||c),r&&r()},destroy:function(){l(e,"message",d),l(e,"message",s),i&&(a=null,i.parentNode.removeChild(i),i=null)},onDOMReady:function(){"file://"===(c=I(t.remote))&&(c="*"),t.isHost?(u(e,"message",d),R(t.props,{src:F(t.remote,{xdm_e:I(n.href),xdm_c:t.channel,xdm_p:1}),name:_+t.channel+"_provider"}),i=z(t)):(u(e,"message",s),(a="postMessage"in e.parent?e.parent:e.parent.document).postMessage(t.channel+"-ready",c),r((function(){o.up.callback(!0)}),0))},init:function(){j(o.onDOMReady,o)}}},y.stack.FrameElementTransport=function(o){var i,a,c,s;return i={outgoing:function(e,t,n){c.call(this,e),n&&n()},destroy:function(){a&&(a.parentNode.removeChild(a),a=null)},onDOMReady:function(){s=I(o.remote),o.isHost?(R(o.props,{src:F(o.remote,{xdm_e:I(n.href),xdm_c:o.channel,xdm_p:5}),name:_+o.channel+"_provider"}),(a=z(o)).fn=function(e){return delete a.fn,c=e,r((function(){i.up.callback(!0)}),0),function(e){i.up.incoming(e,s)}}):(t.referrer&&I(t.referrer)!=B.xdm_e&&(e.top.location=B.xdm_e),c=e.frameElement.fn((function(e){i.up.incoming(e,s)})),i.up.callback(!0))},init:function(){j(i.onDOMReady,i)}}},y.stack.NameTransport=function(e){var t,n,o,i,a,c,s,u;function d(t){var r=e.remoteHelper+(n?"#_3":"#_2")+e.channel;o.contentWindow.sendMessage(t,r)}function p(){n?2!=++a&&n||t.up.callback(!0):(d("ready"),t.up.callback(!0))}function f(e){t.up.incoming(e,s)}function h(){c&&r((function(){c(!0)}),0)}return t={outgoing:function(e,t,n){c=n,d(e)},destroy:function(){o.parentNode.removeChild(o),o=null,n&&(i.parentNode.removeChild(i),i=null)},onDOMReady:function(){n=e.isHost,a=0,s=I(e.remote),e.local=P(e.local),n?(y.Fn.set(e.channel,(function(t){n&&"ready"===t&&(y.Fn.set(e.channel,f),p())})),u=F(e.remote,{xdm_e:e.local,xdm_c:e.channel,xdm_p:2}),R(e.props,{src:u+"#"+e.channel,name:_+e.channel+"_provider"}),i=z(e)):(e.remoteHelper=e.remote,y.Fn.set(e.channel,f)),o=z({props:{src:e.local+"#_4"+e.channel},onLoad:function t(){var n=o||this;l(n,"load",t),y.Fn.set(e.channel+"_load",h),function e(){"function"==typeof n.contentWindow.sendMessage?p():r(e,50)}()}})},init:function(){j(t.onDOMReady,t)}}},y.stack.HashTransport=function(t){var n,o,i,a,c,s,u,l,d,p;function f(){if(u){var e=u.location.href,t="",r=e.indexOf("#");-1!=r&&(t=e.substring(r)),t&&t!=c&&function(e){c=e,n.up.incoming(c.substring(c.indexOf("_")+1),p)}(t)}}function h(){i=setInterval(f,a)}return n={outgoing:function(e,n){!function(e){if(l){var n=t.remote+"#"+s+++"_"+e;(o||!d?l.contentWindow:l).location=n}}(e)},destroy:function(){e.clearInterval(i),!o&&d||l.parentNode.removeChild(l),l=null},onDOMReady:function(){if(o=t.isHost,a=t.interval,c="#"+t.channel,s=0,d=t.useParent,p=I(t.remote),o){if(R(t.props,{src:t.remote,name:_+t.channel+"_provider"}),d)t.onLoad=function(){u=e,h(),n.up.callback(!0)};else{var i=0,f=t.delay/50;!function e(){if(++i>f)throw new Error("Unable to reference listenerwindow");try{u=l.contentWindow.frames[_+t.channel+"_consumer"]}catch(e){}u?(h(),n.up.callback(!0)):r(e,50)}()}l=z(t)}else u=e,h(),d?(l=parent,n.up.callback(!0)):(R(t,{props:{src:t.remote+"#"+t.channel+new Date,name:_+t.channel+"_consumer"},onLoad:function(){n.up.callback(!0)}}),l=z(t))},init:function(){j(n.onDOMReady,n)}}},y.stack.ReliableBehavior=function(e){var t,n,r=0,o=0,i="";return t={incoming:function(e,a){var c=e.indexOf("_"),s=e.substring(0,c).split(",");e=e.substring(c+1),s[0]==r&&(i="",n&&n(!0)),e.length>0&&(t.down.outgoing(s[1]+","+r+"_"+i,a),o!=s[1]&&(o=s[1],t.up.incoming(e,a)))},outgoing:function(e,a,c){i=e,n=c,t.down.outgoing(o+","+ ++r+"_"+e,a)}}},y.stack.QueueBehavior=function(e){var t,n,a=[],c=!0,s="",u=0,l=!1,d=!1;function p(){if(e.remove&&0===a.length)!function(e){e.up.down=e.down,e.down.up=e.up,e.up=e.down=null}(t);else if(!c&&0!==a.length&&!n){c=!0;var o=a.shift();t.down.outgoing(o.data,o.origin,(function(e){c=!1,o.callback&&r((function(){o.callback(e)}),0),p()}))}}return t={init:function(){E(e)&&(e={}),e.maxLength&&(u=e.maxLength,d=!0),e.lazy?l=!0:t.down.init()},callback:function(e){c=!1;var n=t.up;p(),n.callback(e)},incoming:function(n,r){if(d){var i=n.indexOf("_"),a=parseInt(n.substring(0,i),10);s+=n.substring(i+1),0===a&&(e.encode&&(s=o(s)),t.up.incoming(s,r),s="")}else t.up.incoming(n,r)},outgoing:function(n,r,o){e.encode&&(n=i(n));var c,s=[];if(d){for(;0!==n.length;)c=n.substring(0,u),n=n.substring(c.length),s.push(c);for(;c=s.shift();)a.push({data:s.length+"_"+c,origin:r,callback:0===s.length?o:null})}else a.push({data:n,origin:r,callback:o});l?t.down.init():p()},destroy:function(){n=!0,t.down.destroy()}}},y.stack.VerifyBehavior=function(e){var t,n,r;function o(){n=Math.random().toString(16).substring(2),t.down.outgoing(n)}return t={incoming:function(i,a){var c=i.indexOf("_");-1===c?i===n?t.up.callback(!0):r||(r=i,e.initiate||o(),t.down.outgoing(i)):i.substring(0,c)===r&&t.up.incoming(i.substring(c+1),a)},outgoing:function(e,r,o){t.down.outgoing(n+"_"+e,r,o)},callback:function(t){e.initiate&&o()}}},y.stack.RpcBehavior=function(e,t){var n,r=t.serializer||U(),o=0,i={};function a(e){e.jsonrpc="2.0",n.down.outgoing(r.stringify(e))}function c(e,t){var n=Array.prototype.slice;return function(){var r,c=arguments.length,s={method:t};c>0&&"function"==typeof arguments[c-1]?(c>1&&"function"==typeof arguments[c-2]?(r={success:arguments[c-2],error:arguments[c-1]},s.params=n.call(arguments,0,c-2)):(r={success:arguments[c-1]},s.params=n.call(arguments,0,c-1)),i[""+ ++o]=r,s.id=o):s.params=n.call(arguments,0),e.namedParams&&1===s.params.length&&(s.params=s.params[0]),a(s)}}function s(t,n,r,o){if(r){var i,c;n?(i=function(e){i=f,a({id:n,result:e})},c=function(e,t){c=f;var r={id:n,error:{code:-32099,message:e}};t&&(r.error.data=t),a(r)}):i=c=f,function(e){return"[object Array]"===Object.prototype.toString.call(e)}(o)||(o=[o]);try{var s=e.context||r.scope,u=r.method.apply(s,o.concat([i,c]));E(u)||i(u)}catch(e){c(e.message)}}else n&&a({id:n,error:{code:-32601,message:"Procedure not found."}})}return n={incoming:function(e,n){var o=r.parse(e);if(o.method)t.handle?t.handle(o,a):s(o.method,o.id,t.local[o.method],o.params);else{var c=i[o.id];o.error?c.error&&c.error(o.error):c.success&&c.success(o.result),delete i[o.id]}},init:function(){if(t.remote)for(var r in t.remote)t.remote.hasOwnProperty(r)&&(e[r]=c(t.remote[r],r));n.down.init()},destroy:function(){for(var r in t.remote)t.remote.hasOwnProperty(r)&&e.hasOwnProperty(r)&&delete e[r];n.down.destroy()}}},d.easyXDM=y}(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent),easyXDM.noConflict("Kakao")),Dn=zn,Mn=function(){var e,t,n=n||function(e,t){var n={},r=n.lib={},o=function(){},i=r.Base={extend:function(e){o.prototype=this;var t=new o;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},a=r.WordArray=i.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||s).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes;if(e=e.sigBytes,this.clamp(),r%4)for(var o=0;o<e;o++)t[r+o>>>2]|=(n[o>>>2]>>>24-o%4*8&255)<<24-(r+o)%4*8;else if(65535<n.length)for(o=0;o<e;o+=4)t[r+o>>>2]=n[o>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=i.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(4294967296*e.random()|0);return new a.init(n,t)}}),c=n.enc={},s=c.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++){var o=t[r>>>2]>>>24-r%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new a.init(n,t/2)}},u=c.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new a.init(n,t)}},l=c.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},d=r.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,o=n.sigBytes,i=this.blockSize,c=o/(4*i);if(t=(c=t?e.ceil(c):e.max((0|c)-this._minBufferSize,0))*i,o=e.min(4*t,o),t){for(var s=0;s<t;s+=i)this._doProcessBlock(r,s);s=r.splice(0,t),n.sigBytes-=o}return new a.init(s,o)},clone:function(){var e=i.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=d.extend({cfg:i.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new p.HMAC.init(e,n).finalize(t)}}});var p=n.algo={};return n}(Math);return t=(e=n).lib.WordArray,e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp(),e=[];for(var o=0;o<n;o+=3)for(var i=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;4>a&&o+.75*a<n;a++)e.push(r.charAt(i>>>6*(3-a)&63));if(t=r.charAt(64))for(;e.length%4;)e.push(t);return e.join("")},parse:function(e){var n=e.length,r=this._map;(o=r.charAt(64))&&-1!=(o=e.indexOf(o))&&(n=o);for(var o=[],i=0,a=0;a<n;a++)if(a%4){var c=r.indexOf(e.charAt(a-1))<<a%4*2,s=r.indexOf(e.charAt(a))>>>6-a%4*2;o[i>>>2]|=(c|s)<<24-i%4*8,i++}return t.create(o,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},function(e){function t(e,t,n,r,o,i,a){return((e=e+(t&n|~t&r)+o+a)<<i|e>>>32-i)+t}function r(e,t,n,r,o,i,a){return((e=e+(t&r|n&~r)+o+a)<<i|e>>>32-i)+t}function o(e,t,n,r,o,i,a){return((e=e+(t^n^r)+o+a)<<i|e>>>32-i)+t}function i(e,t,n,r,o,i,a){return((e=e+(n^(t|~r))+o+a)<<i|e>>>32-i)+t}for(var a=n,c=(u=a.lib).WordArray,s=u.Hasher,u=a.algo,l=[],d=0;64>d;d++)l[d]=4294967296*e.abs(e.sin(d+1))|0;u=u.MD5=s.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,n){for(var a=0;16>a;a++){var c=e[s=n+a];e[s]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}a=this._hash.words;var s=e[n+0],u=(c=e[n+1],e[n+2]),d=e[n+3],p=e[n+4],f=e[n+5],h=e[n+6],m=e[n+7],v=e[n+8],g=e[n+9],y=e[n+10],b=e[n+11],_=e[n+12],k=e[n+13],w=e[n+14],S=e[n+15],x=t(x=a[0],T=a[1],A=a[2],O=a[3],s,7,l[0]),O=t(O,x,T,A,c,12,l[1]),A=t(A,O,x,T,u,17,l[2]),T=t(T,A,O,x,d,22,l[3]);x=t(x,T,A,O,p,7,l[4]),O=t(O,x,T,A,f,12,l[5]),A=t(A,O,x,T,h,17,l[6]),T=t(T,A,O,x,m,22,l[7]),x=t(x,T,A,O,v,7,l[8]),O=t(O,x,T,A,g,12,l[9]),A=t(A,O,x,T,y,17,l[10]),T=t(T,A,O,x,b,22,l[11]),x=t(x,T,A,O,_,7,l[12]),O=t(O,x,T,A,k,12,l[13]),A=t(A,O,x,T,w,17,l[14]),x=r(x,T=t(T,A,O,x,S,22,l[15]),A,O,c,5,l[16]),O=r(O,x,T,A,h,9,l[17]),A=r(A,O,x,T,b,14,l[18]),T=r(T,A,O,x,s,20,l[19]),x=r(x,T,A,O,f,5,l[20]),O=r(O,x,T,A,y,9,l[21]),A=r(A,O,x,T,S,14,l[22]),T=r(T,A,O,x,p,20,l[23]),x=r(x,T,A,O,g,5,l[24]),O=r(O,x,T,A,w,9,l[25]),A=r(A,O,x,T,d,14,l[26]),T=r(T,A,O,x,v,20,l[27]),x=r(x,T,A,O,k,5,l[28]),O=r(O,x,T,A,u,9,l[29]),A=r(A,O,x,T,m,14,l[30]),x=o(x,T=r(T,A,O,x,_,20,l[31]),A,O,f,4,l[32]),O=o(O,x,T,A,v,11,l[33]),A=o(A,O,x,T,b,16,l[34]),T=o(T,A,O,x,w,23,l[35]),x=o(x,T,A,O,c,4,l[36]),O=o(O,x,T,A,p,11,l[37]),A=o(A,O,x,T,m,16,l[38]),T=o(T,A,O,x,y,23,l[39]),x=o(x,T,A,O,k,4,l[40]),O=o(O,x,T,A,s,11,l[41]),A=o(A,O,x,T,d,16,l[42]),T=o(T,A,O,x,h,23,l[43]),x=o(x,T,A,O,g,4,l[44]),O=o(O,x,T,A,_,11,l[45]),A=o(A,O,x,T,S,16,l[46]),x=i(x,T=o(T,A,O,x,u,23,l[47]),A,O,s,6,l[48]),O=i(O,x,T,A,m,10,l[49]),A=i(A,O,x,T,w,15,l[50]),T=i(T,A,O,x,f,21,l[51]),x=i(x,T,A,O,_,6,l[52]),O=i(O,x,T,A,d,10,l[53]),A=i(A,O,x,T,y,15,l[54]),T=i(T,A,O,x,c,21,l[55]),x=i(x,T,A,O,v,6,l[56]),O=i(O,x,T,A,S,10,l[57]),A=i(A,O,x,T,h,15,l[58]),T=i(T,A,O,x,k,21,l[59]),x=i(x,T,A,O,p,6,l[60]),O=i(O,x,T,A,b,10,l[61]),A=i(A,O,x,T,u,15,l[62]),T=i(T,A,O,x,g,21,l[63]);a[0]=a[0]+x|0,a[1]=a[1]+T|0,a[2]=a[2]+A|0,a[3]=a[3]+O|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,o=8*t.sigBytes;n[o>>>5]|=128<<24-o%32;var i=e.floor(r/4294967296);for(n[15+(o+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),n[14+(o+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(n.length+1),this._process(),n=(t=this._hash).words,r=0;4>r;r++)o=n[r],n[r]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8);return t},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}}),a.MD5=s._createHelper(u),a.HmacMD5=s._createHmacHelper(u)}(Math),function(){var e,t=n,r=(e=t.lib).Base,o=e.WordArray,i=(e=t.algo).EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:e.MD5,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=(c=this.cfg).hasher.create(),r=o.create(),i=r.words,a=c.keySize,c=c.iterations;i.length<a;){s&&n.update(s);var s=n.update(e).finalize(t);n.reset();for(var u=1;u<c;u++)s=n.finalize(s),n.reset();r.concat(s)}return r.sigBytes=4*a,r}});t.EvpKDF=function(e,t,n){return i.create(n).compute(e,t)}}(),n.lib.Cipher||function(e){var t=(h=n).lib,r=t.Base,o=t.WordArray,i=t.BufferedBlockAlgorithm,a=h.enc.Base64,c=h.algo.EvpKDF,s=t.Cipher=i.extend({cfg:r.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){i.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(t,n,r){return("string"==typeof n?m:f).encrypt(e,t,n,r)},decrypt:function(t,n,r){return("string"==typeof n?m:f).decrypt(e,t,n,r)}}}});t.StreamCipher=s.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var u=h.mode={},l=function(e,t,n){var r=this._iv;r?this._iv=undefined:r=this._prevBlock;for(var o=0;o<n;o++)e[t+o]^=r[o]},d=(t.BlockCipherMode=r.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}})).extend();d.Encryptor=d.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize;l.call(this,e,t,r),n.encryptBlock(e,t),this._prevBlock=e.slice(t,t+r)}}),d.Decryptor=d.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,o=e.slice(t,t+r);n.decryptBlock(e,t),l.call(this,e,t,r),this._prevBlock=o}}),u=u.CBC=d,d=(h.pad={}).Pkcs7={pad:function(e,t){for(var n,r=(n=(n=4*t)-e.sigBytes%n)<<24|n<<16|n<<8|n,i=[],a=0;a<n;a+=4)i.push(r);n=o.create(i,n),e.concat(n)},unpad:function(e){e.sigBytes-=255&e.words[e.sigBytes-1>>>2]}},t.BlockCipher=s.extend({cfg:s.cfg.extend({mode:u,padding:d}),reset:function(){s.reset.call(this);var e=(t=this.cfg).iv,t=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=t.createEncryptor;else n=t.createDecryptor,this._minBufferSize=1;this._mode=n.call(t,this,e&&e.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else t=this._process(!0),e.unpad(t);return t},blockSize:4});var p=t.CipherParams=r.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),f=(u=(h.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext;return((e=e.salt)?o.create([1398893684,1701076831]).concat(e).concat(t):t).toString(a)},parse:function(e){var t=(e=a.parse(e)).words;if(1398893684==t[0]&&1701076831==t[1]){var n=o.create(t.slice(2,4));t.splice(0,4),e.sigBytes-=16}return p.create({ciphertext:e,salt:n})}},t.SerializableCipher=r.extend({cfg:r.extend({format:u}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var o=e.createEncryptor(n,r);return t=o.finalize(t),o=o.cfg,p.create({ciphertext:t,key:n,iv:o.iv,algorithm:e,mode:o.mode,padding:o.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}})),h=(h.kdf={}).OpenSSL={execute:function(e,t,n,r){return r||(r=o.random(8)),e=c.create({keySize:t+n}).compute(e,r),n=o.create(e.words.slice(t),4*n),e.sigBytes=4*t,p.create({key:e,iv:n,salt:r})}},m=t.PasswordBasedCipher=f.extend({cfg:f.cfg.extend({kdf:h}),encrypt:function(e,t,n,r){return n=(r=this.cfg.extend(r)).kdf.execute(n,e.keySize,e.ivSize),r.iv=n.iv,(e=f.encrypt.call(this,e,t,n.key,r)).mixIn(n),e},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),n=r.kdf.execute(n,e.keySize,e.ivSize,t.salt),r.iv=n.iv,f.decrypt.call(this,e,t,n.key,r)}})}(),function(){for(var e=n,t=e.lib.BlockCipher,r=e.algo,o=[],i=[],a=[],c=[],s=[],u=[],l=[],d=[],p=[],f=[],h=[],m=0;256>m;m++)h[m]=128>m?m<<1:m<<1^283;var v=0,g=0;for(m=0;256>m;m++){var y=(y=g^g<<1^g<<2^g<<3^g<<4)>>>8^255&y^99;o[v]=y,i[y]=v;var b=h[v],_=h[b],k=h[_],w=257*h[y]^16843008*y;a[v]=w<<24|w>>>8,c[v]=w<<16|w>>>16,s[v]=w<<8|w>>>24,u[v]=w,w=16843009*k^65537*_^257*b^16843008*v,l[y]=w<<24|w>>>8,d[y]=w<<16|w>>>16,p[y]=w<<8|w>>>24,f[y]=w,v?(v=b^h[h[h[k^b]]],g^=h[h[g]]):v=g=1}var S=[0,1,2,4,8,16,32,64,128,27,54];r=r.AES=t.extend({_doReset:function(){for(var e=(n=this._key).words,t=n.sigBytes/4,n=4*((this._nRounds=t+6)+1),r=this._keySchedule=[],i=0;i<n;i++)if(i<t)r[i]=e[i];else{var a=r[i-1];i%t?6<t&&4==i%t&&(a=o[a>>>24]<<24|o[a>>>16&255]<<16|o[a>>>8&255]<<8|o[255&a]):(a=o[(a=a<<8|a>>>24)>>>24]<<24|o[a>>>16&255]<<16|o[a>>>8&255]<<8|o[255&a],a^=S[i/t|0]<<24),r[i]=r[i-t]^a}for(e=this._invKeySchedule=[],t=0;t<n;t++)i=n-t,a=t%4?r[i]:r[i-4],e[t]=4>t||4>=i?a:l[o[a>>>24]]^d[o[a>>>16&255]]^p[o[a>>>8&255]]^f[o[255&a]]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,a,c,s,u,o)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,l,d,p,f,i),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,o,i,a,c){for(var s=this._nRounds,u=e[t]^n[0],l=e[t+1]^n[1],d=e[t+2]^n[2],p=e[t+3]^n[3],f=4,h=1;h<s;h++){var m=r[u>>>24]^o[l>>>16&255]^i[d>>>8&255]^a[255&p]^n[f++],v=r[l>>>24]^o[d>>>16&255]^i[p>>>8&255]^a[255&u]^n[f++],g=r[d>>>24]^o[p>>>16&255]^i[u>>>8&255]^a[255&l]^n[f++];p=r[p>>>24]^o[u>>>16&255]^i[l>>>8&255]^a[255&d]^n[f++],u=m,l=v,d=g}m=(c[u>>>24]<<24|c[l>>>16&255]<<16|c[d>>>8&255]<<8|c[255&p])^n[f++],v=(c[l>>>24]<<24|c[d>>>16&255]<<16|c[p>>>8&255]<<8|c[255&u])^n[f++],g=(c[d>>>24]<<24|c[p>>>16&255]<<16|c[u>>>8&255]<<8|c[255&l])^n[f++],p=(c[p>>>24]<<24|c[u>>>16&255]<<16|c[l>>>8&255]<<8|c[255&d])^n[f++],e[t]=m,e[t+1]=v,e[t+2]=g,e[t+3]=p},keySize:8});e.AES=t._createHelper(r)}(),n}(),qn=Mn;function Nn(){return Zt()}var Kn=null;function Hn(){var e,t,n,r;return null===Kn&&(e=Gn(),t=yt.getItem(e),Kn=t?(n=t,r=Nn(),qn.AES.decrypt(n,r).toString(qn.enc.Utf8)):null),Kn}function Jn(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Kn=e,null===e||!1===t?Xn(Gn()):Wn(Gn(),e)}function Wn(e,t){var n,r,o=(n=t,r=Nn(),qn.AES.encrypt(n,r).toString());yt.setItem(e,o)}function Xn(e){yt.removeItem(e)}var $n={};function Gn(){var e;return $n.accessTokenKey||($n.accessTokenKey="kakao_"+(e="kat"+Nn(),qn.MD5(e).toString())),$n.accessTokenKey}var Vn=Object.freeze({__proto__:null,getAppKey:Nn,getAccessToken:Hn,setAccessToken:Jn,getRefreshToken:function(){return console.error("unsupported operation: Auth.getRefreshToken()"),""},setRefreshToken:function(e){console.error("unsupported operation: Auth.setRefreshToken()")}});function Yn(){return"Bearer ".concat(Hn())}function Qn(){return"KakaoAK ".concat(Nn())}var Zn={permission:vt(["A","F","M"]),enable_share:Qe,android_exec_param:Ye,ios_exec_param:Ye,android_market_param:Ye,ios_market_param:Ye},er={secure_resource:Qe};function tr(e){!1===e.secure_resource&&(console&&console.warn("KakaoWarning: The secure_resource parameter is deprecated."),e.secure_resource=!0)}function nr(e){if(!Ye(e))return!1;if(0===e.length||e.length>2048)throw new tn("content length should be between 0 and 2048");return!0}function rr(e){return(e.header_image_url||e.header_image_width||e.header_image_height)&&(delete e.header_image_url,delete e.header_image_width,delete e.header_image_height,console&&console.warn("KakaoWarning: The parameters (".concat(["header_image_url","header_image_width","header_image_height"].join(", "),") for header background image are deprecated."))),!0}var or={"/v1/user/signup":{method:"post",data:{optional:{properties:g}}},"/v1/user/unlink":{method:"post"},"/v2/user/me":{method:"get",data:{optional:_t({property_keys:f},er)}},"/v1/user/logout":{method:"post",data:{}},"/v1/user/update_profile":{method:"post",data:{required:{properties:g}}},"/v1/user/access_token_info":{method:"get",data:{}},"/v2/user/scopes":{method:"get",data:{optional:{scopes:f}}},"/v2/user/revoke/scopes":{method:"post",data:{required:{scopes:f}}},"/v1/user/service/terms":{method:"get"},"/v1/user/shipping_address":{method:"get",data:{optional:{address_id:et,from_updated_at:et,page_size:et}}},"/v1/api/talk/profile":{method:"get",data:{optional:er,after:tr}},"/v1/api/talk/friends":{method:"get",data:{optional:_t({offset:et,limit:et,order:Ye,friend_order:Ye},er),after:tr}},"/v1/friends":{method:"get",data:{optional:_t({offset:et,limit:et,order:Ye,friend_order:Ye},er),after:tr}},"/v2/api/talk/memo/send":{method:"post",data:{required:{template_id:et},optional:{template_args:g}}},"/v2/api/talk/memo/scrap/send":{method:"post",data:{required:{request_url:Ye},optional:{template_id:et,template_args:g}}},"/v2/api/talk/memo/default/send":{method:"post",data:{required:{template_object:function(e){return g(e)&&rr(e)}}}},"/v1/api/talk/friends/message/send":{method:"post",data:{required:{template_id:et,receiver_uuids:f,receiver_id_type:Ye},optional:{template_args:g},defaults:function(){return{receiver_id_type:"uuid"}}}},"/v1/api/talk/friends/message/scrap/send":{method:"post",data:{required:{request_url:Ye,receiver_uuids:f,receiver_id_type:Ye},optional:{template_id:et,template_args:g},defaults:function(){return{receiver_id_type:"uuid"}}}},"/v1/api/talk/friends/message/default/send":{method:"post",data:{required:{template_object:function(e){return g(e)&&rr(e)},receiver_uuids:f,receiver_id_type:Ye},defaults:function(){return{receiver_id_type:"uuid"}}}},"/v2/api/kakaolink/talk/template/validate":{method:"get",data:{required:{link_ver:Ye,template_id:et},optional:{template_args:g}},authType:Qn},"/v2/api/kakaolink/talk/template/scrap":{method:"get",data:{required:{link_ver:Ye,request_url:Ye},optional:{template_id:et,template_args:g}},authType:Qn},"/v2/api/kakaolink/talk/template/default":{method:"get",data:{required:{link_ver:Ye,template_object:g}},authType:Qn},"/v2/api/talk/message/image/upload":{method:"post",data:{required:{file:g}},authType:Qn},"/v2/api/talk/message/image/delete":{method:"delete",data:{required:{image_url:Ye}},authType:Qn},"/v2/api/talk/message/image/scrap":{method:"post",data:{required:{image_url:Ye}},authType:Qn},"/v1/api/story/profile":{method:"get",data:{optional:er}},"/v1/api/story/isstoryuser":{method:"get"},"/v1/api/story/mystory":{method:"get",data:{required:{id:Ye}}},"/v1/api/story/mystories":{method:"get",data:{optional:{last_id:Ye}}},"/v1/api/story/linkinfo":{method:"get",data:{required:{url:Ye}}},"/v1/api/story/post/note":{method:"post",data:{required:{content:nr},optional:Zn}},"/v1/api/story/post/photo":{method:"post",data:{required:{image_url_list:function(e){return!!f(e)&&ct(e,(function(e){if(!Ye(e))return!1;if(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e))throw new tn("url in image_url_list should be a kage url, obtained from '/v1/api/story/upload/multi'.");return!0}))}},optional:_t({content:nr},Zn)}},"/v1/api/story/post/link":{method:"post",data:{required:{link_info:g},optional:_t({content:nr},Zn)}},"/v1/api/story/upload/multi":{method:"post",data:{}},"/v1/api/story/delete/mystory":{method:"delete",data:{required:{id:Ye}}},"/v1/api/talk/channels":{method:"get",data:{optional:{channel_public_ids:f}}},"/v1/api/talk/plusfriends":{method:"get",data:{optional:{plus_friend_public_ids:f}}}},ir={request:{required:{url:function(e){return vt(ut(or))(e)}},optional:{data:g,files:function(e){return gt([f,it])(e)&&ct(e,gt([ot,rt]))},file:ot,success:A,fail:A,always:A},defaults:{data:{},success:lt,fail:lt,always:lt}},api:or},ar=null;function cr(e){var t=(e=an(e,ir.request,"API.request")).url,n=ir.api[t].data;return n&&(e.data=an(e.data,n,"API.request - ".concat(t))),ar||(ar=un((function(){return new Dn.Rpc({remote:Yt.apiRemote},{remote:{request:{}}})})),sr.push((function(){ar.destroy(),ar=null}))),new Rn.exports.Promise((function(t,n){(function(e){var t=e.url,n=ir.api[t],r={};Ve(e.data,(function(e,t){r[t]=Ye(e)?e:JSON.stringify(e)}));var o={url:t,method:n.method,headers:{KA:Vt,Authorization:(n.authType||Yn)(),"Cache-Control":"no-cache",Pragma:"no-cache"},data:r};return new Rn.exports.Promise((function(n,i){if(function(e){return"/v1/api/story/upload/multi"===e||"/v2/api/talk/message/image/upload"===e}(t)||e.data.file){var a=e.files||e.data.file;if(!a)throw new tn("'files' parameter should be set for ".concat(t));(function(e){var t=at(e,(function(e){return function(e){return new Rn.exports.Promise((function(t,n){"undefined"==typeof FileReader&&n(new tn("File API is not supported for this browser."));var r=new FileReader;r.onload=function(e){try{t((r=e.target.result,Array.prototype.slice.call(new Uint8Array(r)).reduce((function(e,t){return e+String.fromCharCode.apply(null,[t])}),"")))}catch(e){n(e)}var r},r.onerror=function(t){n(new tn("Cannot read file: ".concat(e.name)))},r.readAsArrayBuffer(e)}))}(e).then((function(t){return{name:e.name,type:e.type,str:t}}))}));return new Rn.exports.Promise((function(e,n){Rn.exports.Promise.all(t).then((function(t){e({paramName:"file",data:t})}),(function(e){n(e)}))}))})(a).then((function(e){var t=[];for(var i in r)"file"!==i&&t.push("".concat(i,"=").concat(encodeURIComponent(r[i])));t.length>0&&(o.url+="?".concat(t.join("&"))),o.file=e,n(o)}),(function(e){i(e)}))}else n(o)}))})(e).then((function(r){ar.request(r,(function(n){e.success(n),e.always(n),t(n)}),(function(t){var r=function(e){try{return JSON.parse(e.message.responseText)}catch(e){return{code:-777,msg:"Unknown error"}}}(t);e.fail(r),e.always(r),n(r)}))}),(function(e){n(e)}))}))}var sr=[];var ur=Object.freeze({__proto__:null,request:cr,cleanup:function(){rn(sr)}});function lr(e,t){return Ue(e,{remote:Yt.loginWidget,channel:dt()}),un((function(){var n=new Dn.Rpc(e,{local:{postResponse:t,getKakaoAgent:function(){return Vt}},remote:{getCode:{},getAccessToken:{},setClient:{},setStateToken:{},deleteAuthCookie:{}}});return n.channel=e.channel,n}))}var dr="_blank",pr="width=380, height=520, scrollbars=yes",fr=/Version\/4.0/i.test(Wt.ua)||/; wv\)/i.test(Wt.ua),hr=/naver\(inapp|fb_iab|daumapps|ebay/g.test(Wt.ua)||"object"===("undefined"==typeof daumApps?"undefined":kt(daumApps));function mr(){return Wt.os.ios?/safari|FxiOS|CriOS/.test(Wt.ua)||!Xt:!!Wt.os.android&&(Wt.browser.chrome&&!/opr\//i.test(Wt.ua)&&Wt.browser.version.major>=30&&(!fr||fr&&hr))}var vr={login:function(e,t,n,r){if(mr()){var o=null;if(Wt.os.ios){var i=function(e,t){t.state=e;var n={client_id:Zt(),redirect_uri:Yt.redirectUri,params:JSON.stringify(t)};return"".concat(Yt.talkLoginScheme,"?").concat(mt(n))}(e,n),a="".concat(Yt.universalKakaoLink).concat(encodeURIComponent(i),"&web=").concat(encodeURIComponent(t));r?location.href=a:o=dn(a,dr,pr)}else if(Wt.os.android){var c=function(e,t,n){return["intent:#Intent","action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY","launchFlags=0x08880000","S.com.kakao.sdk.talk.appKey=".concat(Zt()),"S.com.kakao.sdk.talk.redirectUri=".concat(Yt.talkLoginRedirectUri),"S.com.kakao.sdk.talk.state=".concat(e),"S.com.kakao.sdk.talk.kaHeader=".concat(Vt),"S.com.kakao.sdk.talk.extraparams=".concat(encodeURIComponent(JSON.stringify(n))),"S.browser_fallback_url=".concat(encodeURIComponent(t)),"end;"].join(";")}(e,t,n);r?location.href=c:Wt.browser.version.major>40&&(!fr||fr&&hr)?o=dn(c,dr,pr):(o=dn("",dr,pr))&&(o.addEventListener("unload",(function(){setTimeout((function(){o&&o.location&&(o.location.href=t)}),10)})),o.location.href=c)}return o}},isSupport:mr},gr=new bn(1e3,600);function yr(e){var t=dt()+dt();if(vr.isSupport()&&e.throughTalk)Sr(e,t);else if(e.redirectUri)location.href=Tr(e);else if(Wt.os.android&&Xt&&Wt.browser.chrome&&Wt.browser.version.major>=71){Sr(e,t,An(Ue({},Tn(e),jn(e),{redirect_uri:Yt.talkLoginRedirectUri,response_type:"code",state:t,ka:Vt,origin:Jt})))}else{Wt.browser.msie&&parseInt(Wt.browser.version.major)<=9||function(e){var t=function t(n){var r=n.origin,o=n.data;if(/\.kakao\.com$/.test(r)&&o&&"string"==typeof o){var i=o.split(" ");if("postResponse"===i[1]){var a=JSON.parse(decodeURIComponent(i[2]));jr(e,a),ht(window,"message",t)}}};ft(window,"message",t),Ir.push((function(){ht(window,"message",t)}))}(e),On(Ar(e,t))}yn.dispatch("LOGIN_START")}var br=null,_r=function(){br&&br.close&&br.close(),br=null},kr=null,wr=null;function Sr(e,t,n){kr||(kr=lr({},(function(t){if("error"===t.status&&t.error_code&&"300"!==t.error_code&&(gr.stop(),"700"===t.error_code&&(location.href="".concat(Yt.authDomain,"/error/network")),jr(e,{error:t.error,error_description:t.error_description})),t.status)if("ok"===t.status){if(gr.stop(),wr===t.code)return;wr=t.code,kr.getAccessToken(t.code,Zt(),Wt.os.ios&&!n?Yt.redirectUri:Yt.talkLoginRedirectUri,e.approvalType),_r()}else Wt.os.ios&&"about:blank"===br.location.href&&_r();else jr(e,t)})),Ir.push((function(){kr.destroy(),kr=null})));var r="";if(n)e.redirectUri?location.href=n:On(n);else{r=e.redirectUri?Tr(e):Ar(e,t,Wt.os.ios?Yt.redirectUri:Yt.talkLoginRedirectUri);var o=Ue({},Tn(e),jn(e));setTimeout((function(){br=vr.login(t,r,o,e.redirectUri)}),500)}gr.start((function(){t&&kr.getCode(t,Zt(),Vt)}),(function(){jr(e,{error:"timeout",description:"Account login timed out. Please login again.",error_description:"Account login timed out. Please login again."}),e.redirectUri?location.href=r:On(r)}))}var xr=null,Or={};function Ar(e,t,n){xr||(xr=lr({},(function(e){var t=function(e,t){if(!t[e.stateToken])throw new tn("security error: #CST2");var n=t[e.stateToken];return delete t[e.stateToken],delete e.stateToken,n}(e,Or);jr(t,e)})),Ir.push((function(){xr.destroy(),xr=null}))),Or[t]=e;var r=e.redirectUri?e.redirectUri:n||"kakaojs";return An(Ue({},Tn(e),jn(e),{redirect_uri:r,response_type:"code",state:t,proxy:"easyXDM_Kakao_".concat(xr.channel,"_provider"),ka:Vt,origin:Jt}))}function Tr(e){return An(Ue({},Tn(e),jn(e),{redirect_uri:e.redirectUri,response_type:"code",ka:Vt,origin:Jt}))}function jr(e,t){t.error?"access_denied"!==t.error&&Jn(null):(Jn(t.access_token,e.persistAccessToken),yn.dispatch("LOGIN")),Cn(e,t)}var Cr=null;var Ir=[];var Pr=Object.freeze({__proto__:null,createLoginButton:function(e){var t=pt((e=an(e,xn.createLoginButton,"Auth.createLoginButton")).container);if(!t)throw new tn("container is required for Kakao login button: pass in element or id");var n="medium"===e.size?"02":"small"===e.size?"03":"01",r="".concat(Yt.authDomain,"/public/widget/login/").concat(e.lang,"/").concat(e.lang,"_").concat(n,"_medium"),o="".concat(r,".png"),i="".concat(r,"_press.png");t.innerHTML='<img\n    id="kakao-login-btn"\n    src='.concat(o,"\n    onmouseover=this.src='").concat(i,"'\n    onmouseout=this.src='").concat(o,'\'\n    style="cursor: pointer"\n  />');var a=function(){yr(e)};ft(t,"click",a),Ir.push((function(){ht(t,"click",a)}))},login:function(e){yr(e=an(e,xn.login,"Auth.login"))},loginForm:function(e){e=an(e,xn.login,"Auth.loginForm");var t=dt()+dt(),n="&prompt=login";e.redirectUri?location.href="".concat(Tr(e)).concat(n):On("".concat(Ar(e,t)).concat(n))},autoLogin:function(e){if(e=an(e,xn.autoLogin,"Auth.autoLogin"),Un()||Wt.os.android&&Xt){var t=dt()+dt();Sr(e,t,An(Ue({},Tn(e),{redirect_uri:Yt.talkLoginRedirectUri,response_type:"code",state:t,ka:Vt,origin:Jt,prompt:"none"})))}else Cn(e,{error:"auto_login",error_description:"Kakao.Auth.autoLogin is only supported by KakaoTalk InAppBrowser",error_code:"400",status:"error"});yn.dispatch("LOGIN_START")},logout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt;on(e,A,"Auth.logout"),cr({url:"/v1/user/logout",always:function(){Jn(null),yn.dispatch("LOGOUT"),e(!0)}})},issueAccessToken:function(e){e=an(e,xn.issueAccessToken,"Auth.issueAccessToken"),Cr||(Cr=lr({},(function(t){jr(e,t)})),Ir.push((function(){Cr.destroy(),Cr=null}))),Cr.getAccessToken(e.code,Zt(),e.redirectUri)},cleanup:function(){rn(Ir)}});function Fr(e,t){Er();var n=cn(),r=_t({app_key:Zt(),access_token:Hn(),ka:Vt,trans_id:n},e.addressId&&{address_id:e.addressId}),o=Yt.appsDomain+t;e.returnUrl?(r.return_url=e.returnUrl,vn(r,o)):(fn(n,"".concat(Yt.appsDomain,"/proxy?trans_id=").concat(n),Br),hn(e,Yt.appsDomain,Br),function(e){var t=function t(n){var r=n.data,o=n.origin;o!==Yt.appsDomain&&o!==Yt.accountDomain||"closed"!==r||(e.close(),ht(window,"message",t))};ft(window,"message",t)}(e),mn(r,{url:o,popupName:"shipping_address",popupFeatures:"location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"}))}var Br=[];function Er(){rn(Br)}var Lr=nn([En,Pr,Vn,Object.freeze({__proto__:null,getStatusInfo:function(e){on(e,A,"Auth.getStatusInfo"),Hn()?cr({url:"/v2/user/me",success:function(t){e({status:"connected",user:t})},fail:function(){e({status:"not_connected"})}}):e({status:"not_connected"})}}),Object.freeze({__proto__:null,selectShippingAddress:function(e){Fr(e=an(e,xn.selectShippingAddress,"Auth.selectShippingAddress"),"/user/address")},createShippingAddress:function(e){Fr(e=an(e,xn.createShippingAddress,"Auth.createShippingAddress"),"/user/create/address")},updateShippingAddress:function(e){Fr(e=an(e,xn.updateShippingAddress,"Auth.updateShippingAddress"),"/user/edit/address")},cleanup:Er})]),Ur=nn([ur]);function Rr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function zr(e){return e.replace(/[A-Z]/g,(function(e){return"_".concat(e.toLowerCase())}))}function Dr(e){return g(e)?JSON.stringify(e):e}function Mr(e,t){return cr({url:e,data:t})}function qr(e,t,n){return an(e,t,'parameter "'.concat(n,'" in Link')),!0}function Nr(e){return ut(e).reduce((function(t,n){return t[zr(n)]=e[n],t}),{})}var Kr={optional:{webUrl:Ye,mobileWebUrl:Ye,androidExecutionParams:Ye,androidExecParams:Ye,iosExecutionParams:Ye,iosExecParams:Ye},builder:Jr},Hr={required:{item:Ye,itemOp:Ye}};function Jr(e){var t=Nr(e);return t.android_exec_params&&(t.android_execution_params=t.android_exec_params,delete t.android_exec_params),t.ios_exec_params&&(t.ios_execution_params=t.ios_exec_params,delete t.ios_exec_params),t}function Wr(e){return{title:e.title,link:Jr(e.link)}}function Xr(e){var t=Nr(e);return t.link=Jr(t.link),t}var $r={headerLink:Kr,link:Kr,button:{required:{title:Ye,link:function(e){qr(e,Kr,"link")}},builder:Wr},buttons:{optional:{0:function(e){qr(e,$r.button,"button")},1:function(e){qr(e,$r.button,"button")}},builder:function(e){return at(e,Wr)}},content:{required:{title:Ye,imageUrl:Ye,link:function(e){qr(e,Kr,"link")}},optional:{imageWidth:et,imageHeight:et,description:Ye},builder:Xr},contents:{optional:{0:function(e){qr(e,$r.content,"content")},1:function(e){qr(e,$r.content,"content")},2:function(e){qr(e,$r.content,"content")}},builder:function(e){return at(e,Xr)}},commerce:{required:{regularPrice:et},optional:{discountPrice:et,discountRate:et,fixedDiscountPrice:et,currencyUnit:Ye,currencyUnitPosition:vt([0,1]),productName:Ye},builder:Nr},social:{optional:{likeCount:et,commentCount:et,sharedCount:et,viewCount:et,subscriberCount:et},builder:Nr},itemContent:{optional:{profileText:Ye,profileImageUrl:Ye,titleImageUrl:Ye,titleImageText:Ye,titleImageCategory:Ye,items:function(e){return f(e)&&e.length<6&&ct(e,(function(e){return qr(e,Hr,"items.item")}))},sum:Ye,sumOp:Ye},builder:function(e){var t=Nr(e);return t.items&&(t.items=at(t.items,(function(e){return Nr(e)}))),t}}};var Gr={create:function(e,t,n){var r=$r[t];if(r)return e=an(e,r,'parameter "'.concat(t,'" in ').concat(n||"Link")),r.builder(e)}},Vr="4.0",Yr=xt((function e(t,n){wt(this,e),this.appkey=Zt(),this.appver="1.0",this.linkver=Vr,this.extras=_t(_t({KA:Vt},t.extras),t.serverCallbackArgs&&{lcba:Dr(t.serverCallbackArgs)}),this.template_json=n.template_msg,this.template_args=n.template_args,this.template_id=n.template_id}));var Qr=xt((function e(t){var n=this;wt(this,e),this.link_ver=Vr,this.template_object=_t({object_type:t.objectType},t.buttonTitle&&{button_title:t.buttonTitle}),Ve(t,(function(e,t){var r=Gr.create(e,t,"defaultObject");r&&(n.template_object[zr(t)]=r)}))})),Zr={FeedLink:Qr,CommerceLink:Qr,ListLink:function(e){At(n,e);var t=It(n);function n(e){var r;return wt(this,n),(r=t.call(this,e)).template_object.header_title=e.headerTitle,console&&(e.headerImageUrl||e.headerImageWidth||e.headerImageHeight)&&console.warn("KakaoWarning: The parameters (".concat(["headerImageUrl","headerImageWidth","headerImageHeight"].join(", "),") for header background image are deprecated.")),r}return xt(n)}(Qr),LocationLink:function(e){At(n,e);var t=It(n);function n(e){var r;wt(this,n);var o=(r=t.call(this,e)).template_object;return o.address=e.address||"",o.address_title=e.addressTitle||"",r}return xt(n)}(Qr),TextLink:function(e){At(n,e);var t=It(n);function n(e){var r;return wt(this,n),(r=t.call(this,e)).template_object.text=e.text||"",r}return xt(n)}(Qr)},eo=xt((function e(t){wt(this,e),this.link_ver=Vr,this.request_url=t.requestUrl,t.templateId&&(this.template_id=t.templateId),t.templateArgs&&(this.template_args=t.templateArgs)})),to=xt((function e(t){wt(this,e),this.link_ver=Vr,this.template_id=t.templateId,this.template_args=t.templateArgs}));var no="kakao_link_web_sharer",ro="location=no,resizable=no,status=no,scrollbars=no,width=460,height=608";var oo={send:function(e,t,n){var r={app_key:Zt(),ka:Vt,validation_action:t,validation_params:JSON.stringify(n)};e.serverCallbackArgs&&(r.lcba=Dr(e.serverCallbackArgs));var o="".concat(Yt.sharerDomain,"/talk/friends/picker/easylink?").concat(mt(r)),i=null;!Wt.browser.msie&&!Wt.browser.spartan&&o.length<2084?(i=dn(o,no,ro)).focus():i=mn(r,{url:"".concat(Yt.sharerDomain,"/talk/friends/picker/link"),popupName:no,popupFeatures:ro}),e.callback&&function(e,t){if(Wt.browser.msie)return void(console&&console.warn("KakaoWarning: The callback parameter does not support the IE browser."));var n=function(e){"sent"===e.data&&e.origin===Yt.sharerDomain&&t()};ft(window,"message",n);var r=setInterval((function(){e.closed&&(clearInterval(r),ht(window,"message",n))}),1e3)}(i,e.callback)}},io=function(){var e=Ut(),t=e.os,n=["firefox","opr/"],r=["KAKAOTALK"];function o(e){window.top.location.href=e}function i(e,t,n){var r=(new Date).getTime();return setTimeout((function(){var o=(new Date).getTime();a()&&o-r<e+100&&n(t)}),e)}function a(){for(var e=["hidden","webkitHidden"],t=0,n=e.length;t<n;t++)if(void 0!==document[e[t]])return!document[e[t]];return!0}function c(e){setTimeout((function(){(function(e){var t=document.createElement("iframe");return t.id=e,t.style.border="none",t.style.width="0",t.style.height="0",t.style.display="none",t.style.overflow="hidden",document.body.appendChild(t),t}("appLauncher")).src=e}),100)}return function(s){var u,l,d,p,f="function"==typeof s.willInvokeApp?s.willInvokeApp:function(){},h="function"==typeof s.onAppMissing?s.onAppMissing:o,m="function"==typeof s.onUnsupportedEnvironment?s.onUnsupportedEnvironment:function(){};f(),t.android?(l=e.browser.chrome&&+e.browser.version.major>=25,d=new RegExp(n.join("|"),"i"),p=new RegExp(r.join("|"),"i"),(l&&!d.test(e.ua)||p.test(e.ua))&&s.intentURI&&!s.useUrlScheme?function(t){e.browser.chrome?n():setTimeout(n,100);function n(){top.location.href=t}}(s.intentURI):s.storeURL&&(u=s.urlScheme,i(300,s.storeURL,h),c(u))):t.ios&&s.storeURL?function(t,n,r,o){var s=i(5e3,n,r);parseInt(e.os.version.major,10)<8?function(e){window.addEventListener("pagehide",(function t(){a()&&(clearTimeout(e),window.removeEventListener("pagehide",t))}))}(s):function(e){document.addEventListener("visibilitychange",(function t(){a()&&(clearTimeout(e),document.removeEventListener("visibilitychange",t))}))}(s);parseInt(e.os.version.major,10)>8&&e.os.ios?(void 0===o?o=t:clearTimeout(s),function(e){window.top.location.href=e}(o)):c(t)}(s.urlScheme,s.storeURL,h,s.universalLink):setTimeout((function(){m()}),100)}}(),ao=new bn(100,100),co="362057947";function so(e,t){var n=function(e,t){var n=new Yr(e,t);if(JSON.stringify(n).length>1e4)throw new tn("Failed to send message because it exceeds the message size limit. Please contact the app administrator.");var r=Wt.os.ios?Yt.talkLinkScheme:"kakaolink://send";return"".concat(r,"?").concat(mt(n))}(t,e);!function(e,t,n){var r=["intent:".concat(e,"#Intent"),"launchFlags=0x14008000","".concat(!0===n?"package=".concat(Yt.talkAndroidPackage,";"):"","end;")].join(";"),o={urlScheme:e,intentURI:r,appName:"KakaoTalk",storeURL:sn(Yt.talkAndroidPackage,co),onUnsupportedEnvironment:function(){t(e)}};(!n||Un()||Ln())&&(o.onAppMissing=lt);Un()&&(o.universalLink=void 0);try{io(o)}catch(e){}}(n,t.fail,t.installTalk);var r={template_msg:e.template_msg||{},warning_msg:e.warning_msg||{},argument_msg:e.argument_msg||{}};t.success(r),t.always(r)}var uo={send:function(e,t,n){var r=null;if(Wt.browser.iphone&&/version/.test(Wt.ua.toLowerCase())){var o=null;r=function(e){o=e},ao.start((function(){null!==o&&(ao.stop(),so(o,e))}),(function(){var t={error:"timeout",error_description:"LINK_TIMEOUT"};e.fail(t),e.always(t)}))}else r=so;return Mr(t,n).then((function(t){r(t,e)}),(function(t){e.fail(t),e.always(t)}))}},lo={success:A,fail:A,always:A,callback:A,installTalk:Qe,throughTalk:Qe,extras:g,serverCallbackArgs:gt([function(e){try{JSON.parse(e)}catch(e){return!1}return!0},g])},po={success:lt,fail:lt,always:lt,installTalk:!1,throughTalk:!0};function fo(e){if(!f(e))return!1;if(e.length>2)throw new tn('Illegal argument for "buttons" in Link: size of buttons should be up to 2');return!0}var ho={required:{objectType:function(e){return"feed"===e},content:g},optional:Ue({itemContent:g,social:g,buttonTitle:Ye,buttons:fo},lo),defaults:po},mo={required:{objectType:function(e){return"list"===e},headerTitle:Ye,headerLink:g,contents:function(e){if(!f(e))return!1;if(e.length<2||e.length>3)throw new tn('Illegal argument for "contents" in Link: size of contents should be more than 1 and up to 3');return!0}},optional:Ue({buttonTitle:Ye,buttons:fo,headerImageUrl:Ye,headerImageWidth:et,headerImageHeight:et},lo),defaults:po},vo={required:{objectType:function(e){return"commerce"===e},content:g,commerce:g},optional:Ue({buttonTitle:Ye,buttons:fo},lo),defaults:po},go={required:{objectType:function(e){return"location"===e},content:g,address:Ye},optional:Ue({addressTitle:Ye,social:g,buttonTitle:Ye,buttons:fo},lo),defaults:po},yo={required:{objectType:function(e){return"text"===e},text:Ye,link:g},optional:Ue({buttonTitle:Ye,buttons:fo},lo),defaults:po},bo={required:{requestUrl:Ye},optional:Ue({templateId:et,templateArgs:g},lo),defaults:Ue({templateArgs:{}},po)},_o={required:{templateId:et},optional:Ue({templateArgs:g},lo),defaults:Ue({templateArgs:{}},po)};function ko(e){return Ge({required:Ue({container:gt([Ze,Ye])},e.required)},e)}var wo={defaultObjectTypes:["feed","list","commerce","location","text"],sendFeed:ho,createFeedButton:ko(ho),sendList:mo,createListButton:ko(mo),sendCommerce:vo,createCommerceButton:ko(vo),sendLocation:go,createLocationButton:ko(go),sendText:yo,createTextButton:ko(yo),sendScrap:bo,createScrapButton:ko(bo),sendCustom:_o,createCustomButton:ko(_o),uploadImage:{required:{file:g}},deleteImage:{required:{imageUrl:Ye}},scrapImage:{required:{imageUrl:Ye}}};function So(e,t){var n=pt(e.container);if(!n)throw new tn("container is required for KakaoTalk Link: pass in element or id");var r=function(n){n.preventDefault(),n.stopPropagation(),Oo(e,t)};ft(n,"click",r),Ao.push((function(){ht(n,"click",r)}))}var xo={default:{makeLinkFunc:function(e){return new(0,Zr["".concat(Rr(e.objectType),"Link")])(e)},requestUrl:"/v2/api/kakaolink/talk/template/default"},scrap:{makeLinkFunc:function(e){return new eo(e)},requestUrl:"/v2/api/kakaolink/talk/template/scrap"},custom:{makeLinkFunc:function(e){return new to(e)},requestUrl:"/v2/api/kakaolink/talk/template/validate"}};function Oo(e,t){var n=xo[t],r=n.makeLinkFunc,o=n.requestUrl,i=r(e),a=Wt.os.ios&&"tablet"===Wt.platform;Xt||e.throughTalk&&("mobile"===Wt.platform||a)?uo.send(e,o,i):oo.send(e,t,i)}var Ao=[];var To=nn([Object.freeze({__proto__:null,createDefaultButton:function(e){if(!e.objectType||!vt(wo.defaultObjectTypes)(e.objectType))throw new tn("objectType should be one of (".concat(wo.defaultObjectTypes.join(", "),")"));So(e=an(e,wo["create".concat(Rr(e.objectType),"Button")],"Link.createDefaultButton"),"default")},sendDefault:function(e){if(!e.objectType||!vt(wo.defaultObjectTypes)(e.objectType))throw new tn("objectType should be one of (".concat(wo.defaultObjectTypes.join(", "),")"));Oo(e=an(e,wo["send".concat(Rr(e.objectType))],"Link.sendDefault"),"default")},createScrapButton:function(e){So(e=an(e,wo.createScrapButton,"Link.createScrapButton"),"scrap")},sendScrap:function(e){Oo(e=an(e,wo.sendScrap,"Link.sendScrap"),"scrap")},createCustomButton:function(e){So(e=an(e,wo.createCustomButton,"Link.createCustomButton"),"custom")},sendCustom:function(e){Oo(e=an(e,wo.sendCustom,"Link.sendCustom"),"custom")},cleanup:function(){rn(Ao)}}),Object.freeze({__proto__:null,uploadImage:function(e){return Mr("/v2/api/talk/message/image/upload",{file:(e=an(e,wo.uploadImage,"Link.uploadImage")).file})},deleteImage:function(e){return Mr("/v2/api/talk/message/image/delete",{image_url:(e=an(e,wo.deleteImage,"Link.deleteImage")).imageUrl})},scrapImage:function(e){return Mr("/v2/api/talk/message/image/scrap",{image_url:(e=an(e,wo.scrapImage,"Link.scrapImage")).imageUrl})}})]),jo="width=350, height=510";function Co(e,t,n){var r=document.createElement("a");r.setAttribute("href","#");var o=document.createElement("img");return o.setAttribute("src",t),o.setAttribute("title",n),o.setAttribute("alt",n),e.supportMultipleDensities&&o.setAttribute("srcset",[t.replace(".png","_2X.png 2x"),t.replace(".png","_3X.png 3x")].join(", ")),r.appendChild(o),r}function Io(e){return mt({api_ver:e,kakao_agent:Vt,app_key:Zt(),referer:Jt+location.pathname+location.search})}var Po=["small","large"],Fo=["yellow","mono"],Bo=["pc","mobile"],Eo=["consult","question"],Lo={createAddChannelButton:{required:{container:gt([Ze,Ye]),channelPublicId:Ye},optional:{size:vt(Po),supportMultipleDensities:Qe},defaults:{size:Po[0],supportMultipleDensities:!1}},addChannel:{required:{channelPublicId:Ye}},createChatButton:{required:{container:gt([Ze,Ye]),channelPublicId:Ye},optional:{size:vt(Po),color:vt(Fo),shape:vt(Bo),title:vt(Eo),supportMultipleDensities:Qe},defaults:{size:Po[0],color:Fo[0],shape:Bo[0],title:Eo[0],supportMultipleDensities:!1}},chat:{required:{channelPublicId:Ye}}};function Uo(e){var t="".concat(Yt.channel,"/").concat(e.channelPublicId,"/friend");null!==Zt()&&(t+="?".concat(Io("1.1"))),dn(t,"channel_add_social_plugin",jo)}function Ro(e){var t="".concat(Yt.channel,"/").concat(e.channelPublicId,"/chat");null!==Zt()&&(t+="?".concat(Io("1.1"))),dn(t,"channel_chat_social_plugin",jo)}var zo=[];var Do=nn([Object.freeze({__proto__:null,createAddChannelButton:function(e){var t=pt(e.container);if(!t)throw new tn("container is required for Channel.createAddChannelButton: pass in element or id");pn(e,t,{channelPublicId:"data-channel-public-id",size:"data-size",supportMultipleDensities:"data-support-multiple-densities"});var n=function(e){var t="friendadd_".concat(e.size,"_yellow_rect.png");return"".concat(Yt.channelIcon,"/channel/").concat(t)}(e=an(e,Lo.createAddChannelButton,"Channel.createAddChannelButton")),r=Co(e,n,"카카오톡 채널 추가 버튼");t.appendChild(r);var o=function(t){t.preventDefault(),Uo(e)};ft(r,"click",o),zo.push((function(){ht(r,"click",o),t.removeChild(r)}))},addChannel:function(e){Uo(e=an(e,Lo.addChannel,"Channel.addChannel"))},createChatButton:function(e){var t=pt(e.container);if(!t)throw new tn("container is required for Channel.createChatButton: pass in element or id");pn(e,t,{channelPublicId:"data-channel-public-id",size:"data-size",color:"data-color",shape:"data-shape",title:"data-title",supportMultipleDensities:"data-support-multiple-densities"});var n=function(e){var t="".concat(e.title,"_").concat(e.size,"_").concat(e.color,"_").concat(e.shape,".png");return"".concat(Yt.channelIcon,"/channel/").concat(t)}(e=an(e,Lo.createChatButton,"Channel.createChatButton")),r=Co(e,n,"카카오톡 채널 1:1 채팅 버튼");t.appendChild(r);var o=function(t){t.preventDefault(),Ro(e)};ft(r,"click",o),zo.push((function(){ht(r,"click",o),t.removeChild(r)}))},chat:function(e){Ro(e=an(e,Lo.chat,"Channel.chat"))},cleanup:function(){rn(zo)}})]),Mo={createAddFriendButton:{required:{container:gt([Ze,Ye]),plusFriendId:Ye},optional:{size:vt(["small","large"]),color:vt(["yellow","black"]),shape:vt(["rect","round"]),supportMultipleDensities:Qe},defaults:{size:"small",color:"yellow",shape:"rect",supportMultipleDensities:!1}},addFriend:{required:{plusFriendId:Ye}},createChatButton:{required:{container:gt([Ze,Ye]),plusFriendId:Ye},optional:{size:vt(["small","large"]),color:vt(["yellow","mono"]),shape:vt(["pc","mobile"]),title:vt(["consult","question"]),supportMultipleDensities:Qe},defaults:{size:"small",color:"yellow",shape:"pc",title:"consult",supportMultipleDensities:!1}},chat:{required:{plusFriendId:Ye}}};function qo(){console&&console.warn("KakaoWarning: Kakao.PlusFriend is deprecated. Please use Kakao.Channel instead.")}function No(e){var t="".concat(Yt.channel,"/").concat(e.plusFriendId,"/friend");null!==Zt()&&(t+="?".concat(Io("1.0"))),dn(t,"plus_friend_add_social_plugin",jo)}function Ko(e){var t="".concat(Yt.channel,"/").concat(e.plusFriendId,"/chat");null!==Zt()&&(t+="?".concat(Io("1.0"))),dn(t,"plus_friend_chat_social_plugin",jo)}var Ho=[];var Jo=nn([Object.freeze({__proto__:null,createAddFriendButton:function(e){qo();var t=pt(e.container);if(!t)throw new tn("container is required for PlusFriend.createAddFriendButton: pass in element or id");pn(e,t,{plusFriendId:"data-plusfriend-id",size:"data-size",color:"data-color",shape:"data-shape",supportMultipleDensities:"data-support-multiple-densities"});var n=function(e){var t="friendadd_".concat(e.size,"_").concat(e.color,"_").concat(e.shape,".png");return"".concat(Yt.channelIcon,"/plusfriend/").concat(t)}(e=an(e,Mo.createAddFriendButton,"PlusFriend.createAddFriendButton")),r=Co(e,n,"플러스친구 친구 추가 버튼");t.appendChild(r);var o=function(t){t.preventDefault(),No(e)};ft(r,"click",o),Ho.push((function(){ht(r,"click",o),t.removeChild(r)}))},addFriend:function(e){qo(),No(e=an(e,Mo.addFriend,"PlusFriend.addFriend"))},createChatButton:function(e){qo();var t=pt(e.container);if(!t)throw new tn("container is required for PlusFriend.createChatButton: pass in element or id");pn(e,t,{plusFriendId:"data-plusfriend-id",size:"data-size",color:"data-color",shape:"data-shape",title:"data-title",supportMultipleDensities:"data-support-multiple-densities"});var n=function(e){var t="".concat(e.title,"_").concat(e.size,"_").concat(e.color,"_").concat(e.shape,".png");return"".concat(Yt.channelIcon,"/plusfriend/").concat(t)}(e=an(e,Mo.createChatButton,"PlusFriend.createChatButton")),r=Co(e,n,"플러스친구 1:1 채팅 버튼");t.appendChild(r);var o=function(t){t.preventDefault(),Ko(e)};ft(r,"click",o),Ho.push((function(){ht(r,"click",o),t.removeChild(r)}))},chat:function(e){qo(),Ko(e=an(e,Mo.chat,"PlusFriend.chat"))},cleanup:function(){rn(Ho)}})]),Wo={required:{title:Ye},optional:{desc:Ye,name:Ye,images:f,type:Ye},defaults:{type:"website"},after:function(e){e.images&&(e.imageurl=e.images,delete e.images)}},Xo={createShareButton:{required:{container:gt([Ze,Ye])},optional:{url:Ye,text:Ye},defaults:{url:location.href}},share:{optional:{url:Ye,text:Ye},defaults:{url:location.href}},open:{optional:{url:Ye,text:Ye,urlInfo:function(e){return g(e)&&!!an(e,Wo,"Story.open")},install:Qe},defaults:{url:location.href,install:!1}},createFollowButton:{required:{container:gt([Ze,Ye]),id:Ye},optional:{showFollowerCount:Qe,type:vt(["horizontal","vertical"])},defaults:{showFollowerCount:!0,type:"horizontal"},after:function(e){"@"!==e.id[0]&&(e.id="@".concat(e.id))}}};function $o(e){var t=Ue({url:e.url},Vo());e.text&&(t.text=e.text),dn("".concat(Yt.storyShare,"?").concat(mt(t)),"kakaostory_social_plugin","width=670, height=800, scrollbars=yes")}var Go=0;function Vo(){var e={kakao_agent:Vt};return null!==Zt()&&(e.app_key=Zt()),e}var Yo=[];var Qo=nn([Object.freeze({__proto__:null,createShareButton:function(e){var t=pt(e.container);if(!t)throw new tn("container is required for Story.createShareButton: pass in element or id");pn(e,t,{url:"data-url"}),e=an(e,Xo.createShareButton,"Story.createShareButton");var n=function(e,t){var n=document.createElement("a");n.setAttribute("href","#");var r=document.createElement("img");return r.setAttribute("src",e),r.setAttribute("title",t),r.setAttribute("alt",t),n.appendChild(r),n}(Yt.storyIcon,"카카오스토리 웹 공유 버튼");t.appendChild(n);var r=function(t){t.preventDefault(),$o(e)};ft(n,"click",r),Yo.push((function(){ht(n,"click",r),t.removeChild(n)}))},share:function(e){$o(e=an(e,Xo.share,"Story.share"))},open:function(e){var t=function(e){var t=location.hostname||"",n=Ue({apiver:"1.0",appver:$t,appid:t,appname:t,post:e.text?"".concat(e.text,"\n").concat(e.url):e.url},Vo());e.urlInfo&&(n.urlinfo=JSON.stringify(e.urlInfo),n.appname=e.urlInfo.name||n.appname);return"".concat(Yt.storyPostScheme,"?").concat(mt(n))}(e=an(e,Xo.open,"Story.open")),n={urlScheme:t,intentURI:["intent:".concat(t,"#Intent"),"".concat(e.install?"package=com.kakao.story;":"","end;")].join(";"),appName:"KakaoStory",storeURL:sn("com.kakao.story","486244601"),onUnsupportedEnvironment:function(){e.fail&&e.fail()}};try{io(n)}catch(e){}},createFollowButton:function(e){var t=pt(e.container);if(!t)throw new tn("container is required for Story.createFollowButton: pass in element or id");pn(e,t,{id:"data-id",showFollowerCount:"data-show-follower-count",type:"data-type"});var n=function(e){var t=Go++,n=e.showFollowerCount&&"horizontal"===e.type?85:59,r=e.showFollowerCount&&"vertical"===e.type?46:20,o=document.createElement("iframe");o.src=function(e,t){var n=Ue({id:e.id,type:e.type,hideFollower:!e.showFollowerCount,frameId:t},Vo());return"".concat(Yt.storyChannelFollow,"?").concat(mt(n))}(e,t),o.setAttribute("frameborder","0"),o.setAttribute("marginwidth","0"),o.setAttribute("marginheight","0"),o.setAttribute("scrolling","no"),o.setAttribute("style","width:".concat(n,"px; height:").concat(r,"px;"));var i=function(e){if(e.data&&/\.kakao\.com$/.test(e.origin)&&"string"==typeof e.data){var i=Pt(at(e.data.split(","),(function(e){return parseInt(e,10)})),3),a=i[0],c=i[1],s=i[2];a===t&&(n!==c&&(o.style.width="".concat(c,"px")),r!==s&&(o.style.height="".concat(s,"px")))}};return{iframe$:o,messageHandler:i}}(e=an(e,Xo.createFollowButton,"Story.createFollowButton")),r=n.iframe$,o=n.messageHandler;t.appendChild(r),ft(window,"message",o),Yo.push((function(){ht(window,"message",o),t.removeChild(r)}))},cleanup:function(){rn(Yo)}})]),Zo=["wgs84","katec"],ei={required:{name:Ye,x:tt,y:tt},optional:{rpflag:Ye,cid:Ye}},ti={start:{required:{name:Ye,x:tt,y:tt},optional:{coordType:vt(Zo),vehicleType:vt([1,2,3,4,5,6,7]),rpOption:vt([1,2,3,4,5,6,8,100]),routeInfo:Qe,sX:tt,sY:tt,sAngle:tt,returnUri:Ye,rpflag:Ye,cid:Ye,guideId:tt,viaPoints:function(e){if(f(e)){if(e.length>3)throw new tn("Invalid parameter keys: via points should not be exceed 3. at Navi.start");return Ve(e,(function(e){return an(e,ei,"Navi.start")})),!0}return!1}},defaults:{coordType:"katec",vehicleType:1,rpOption:100,routeInfo:!1}},share:{required:{name:Ye,x:tt,y:tt},optional:{coordType:vt(Zo),rpflag:Ye,cid:Ye,guideId:tt},defaults:{coordType:"katec"}}};function ni(){return{appkey:Zt(),apiver:"1.0",extras:{KA:Vt}}}function ri(e,t){var n={urlScheme:e,intentURI:["intent:".concat(e,"#Intent"),"package=com.locnall.KimGiSa","S.browser_fallback_url=".concat(encodeURIComponent(t)),"end;"].join(";"),storeURL:t,universalLink:t};try{io(n)}catch(e){}}var oi=nn([Object.freeze({__proto__:null,start:function(e){var t=mt(function(e){var t={name:e.name,x:e.x,y:e.y,rpflag:e.rpflag,cid:e.cid,guide_id:e.guideId},n={coord_type:e.coordType,vehicle_type:e.vehicleType,rpoption:e.rpOption,route_info:e.routeInfo,s_x:e.sX,s_y:e.sY,s_angle:e.sAngle,return_uri:e.returnUri};return _t(_t({},ni()),{},{param:{destination:t,option:n,via_list:e.viaPoints}})}(e=an(e,ti.start,"Navi.start")));ri("".concat(Yt.naviScheme,"?").concat(t),"".concat(Yt.naviFallback,"?").concat(t))},share:function(e){var t=mt(function(e){var t={name:e.name,x:e.x,y:e.y,rpflag:e.rpflag,cid:e.cid,guide_id:e.guideId},n={route_info:!0,coord_type:e.coordType};return _t(_t({},ni()),{},{param:{destination:t,option:n}})}(e=an(e,ti.share,"Navi.share")));ri("".concat(Yt.naviScheme,"?").concat(t),"".concat(Yt.naviFallback,"?").concat(t))}})]);function ii(e){return et(e)&&e>0&&e<101}function ai(e){if(e.maxPickableCount<e.minPickableCount)throw new tn('"minPickableCount" should not larger than "maxPickableCount"')}function ci(e){var t={required:{reason:vt(["msgBlocked","registered","unregistered","notFriend","custom"])},optional:{message:Ye,uuids:f},after:function(e){if(!("custom"!==e.reason||e.message&&e.uuids))throw new tn('"message" and "uuids" must be set for "custom" option in disableSelectOption')}};return f(e)&&ct(e,(function(e){return g(e)&&!!an(e,t,"disableSelectOption")}))}function si(e){if("chatMember"===e.selectionType){var t=e.chatFilters;if(t.indexOf("open")>-1)throw new tn('"open" is not allowed in "chatFilters"');if((t.indexOf("direct")>-1||t.indexOf("multi")>-1)&&-1===t.indexOf("regular"))throw new tn('"regular" should be included in "chatFilters"')}}var ui=["none","invitable","registered"],li=["talk","story","talkstory"],di=["age"],pi=["chat","chatMember"],fi=["regular","direct","multi","open"],hi=["all","ios","android"],mi={returnUrl:Ye,success:A,fail:A,always:A,friendFilter:vt(ui),serviceTypeFilter:vt(li),friendOrder:vt(di),title:Ye,enableSearch:Qe,countryCodeFilters:f,usingOsFilter:vt(hi),showMyProfile:Qe,showFavorite:Qe,disableSelectOptions:ci,displayAllProfile:Qe,enableBackButton:Qe},vi={success:lt,fail:lt,always:lt,friendFilter:ui[0],serviceTypeFilter:li[0]},gi={optional:{friendFilter:vt(ui),serviceTypeFilter:vt(li),friendOrder:vt(di),countryCodeFilters:f,usingOsFilter:vt(hi),showMyProfile:Qe,showFavorite:Qe,showPickedFriend:Qe},defaults:{friendFilter:ui[0],serviceTypeFilter:li[0]}},yi={optional:{selectionType:vt(pi),chatFilters:function(e){return f(e)&&ct(e,(function(e){return vt(fi)(e)}))}},defaults:{selectionType:pi[0],chatFilters:[fi[0]]},after:si},bi={selectFriend:{optional:mi,defaults:vi},selectFriends:{optional:_t(_t({},mi),{},{showPickedFriend:Qe,maxPickableCount:ii,minPickableCount:ii}),defaults:vi,after:ai},selectChat:{optional:{returnUrl:Ye,success:A,fail:A,always:A,selectionType:vt(pi),chatFilters:function(e){return f(e)&&ct(e,(function(e){return vt(fi)(e)}))},title:Ye,enableSearch:Qe,disableSelectOptions:ci,displayAllProfile:Qe,maxPickableCount:ii,minPickableCount:ii,enableBackButton:Qe},defaults:{success:lt,fail:lt,always:lt,selectionType:pi[0],chatFilters:[fi[0]]},after:function(e){ai(e),si(e)}},select:{optional:{returnUrl:Ye,success:A,fail:A,always:A,title:Ye,enableSearch:Qe,disableSelectOptions:ci,displayAllProfile:Qe,maxPickableCount:ii,minPickableCount:ii,enableBackButton:Qe,friendsParams:function(e){return g(e)&&!!an(e,gi,"Picker.select")},chatParams:function(e){return g(e)&&!!an(e,yi,"Picker.select")}},defaults:{success:lt,fail:lt,always:lt},after:ai}};function _i(e,t,n){Si();var r=cn(),o=_t(_t({transId:r,appKey:Zt(),ka:Vt},Hn()&&{token:Hn()}),function(e){["countryCodeFilters","chatFilters"].forEach((function(t){void 0!==e[t]&&(e[t]=e[t].join(","))})),e.disableSelectOptions&&(e.disableSelectOptions=JSON.stringify(e.disableSelectOptions));return e}(t)),i=Yt.pickerDomain+n;e.returnUrl?(o.returnUrl=e.returnUrl,vn(o,i)):(fn(r,"".concat(Yt.pickerDomain,"/proxy?transId=").concat(r),wi),hn(e,Yt.pickerDomain,wi),mn(o,{url:i,popupName:"friend_picker",popupFeatures:"location=no,resizable=no,status=no,scrollbars=no,width=460,height=608"}))}function ki(e){var t=_t({},e);return["returnUrl","success","fail","always","friendsParams","chatParams"].forEach((function(e){t[e]&&delete t[e]})),t}var wi=[];function Si(){rn(wi)}var xi=nn([Object.freeze({__proto__:null,selectFriends:function(e){_i(e=an(e,bi.selectFriends,"Picker.selectFriends"),ki(e),"/select/multiple")},selectFriend:function(e){_i(e=an(e,bi.selectFriend,"Picker.selectFriend"),ki(e),"/select/single")},selectChat:function(e){_i(e=an(e,bi.selectChat,"Picker.selectChat"),ki(e),"/chat/select")},select:function(e){_i(e=an(e,bi.select,"Picker.select"),_t(_t(_t({},ki(e)),e.friendsParams),e.chatParams),"/tab/select")},cleanup:Si})]);function Oi(){return null!==Zt()}"function"==typeof define&&define.amd&&(window.Kakao=e),"function"==typeof window.kakaoAsyncInit&&setTimeout((function(){window.kakaoAsyncInit()}),0),e.VERSION=$t,e.cleanup=function(){var e=this;Ve(["Auth","API","Link","Channel","PlusFriend","Story","Navi","Picker"],(function(t){return e[t]&&e[t].cleanup()})),en(null)},e.init=function(e){if(Wt.browser.msie&&Wt.browser.version.major<9)throw new tn("Kakao.init: Unsupported browser");if(Oi())throw new tn("Kakao.init: Already initialized");if(!Ye(e))throw new tn("Kakao.init: App key must be provided");en(e),this.Auth=Lr,this.API=Ur,this.Link=To,this.Channel=Do,this.PlusFriend=Jo,this.Story=Qo,this.Navi=oi,this.Picker=xi},e.isInitialized=Oi,Object.defineProperty(e,"__esModule",{value:!0})}));

var socialshareRenewal = (function () {
  'use strict';

  function kakaoTalk() {
    //카카오링크4.0 api
    function kakaoLinkShareHandler(context) {
      // if (ua.platform === 'pc') {
      //     alert('모바일 기기에서 이용 가능한 기능입니다.\n카카오톡이 설치된 스마트폰에서 이용해 주세요.');
      // } else {
      //     Kakao.Link.sendScrap(context.kakaoAPI.kakaoLinkData);
      // }
      var kakaoLinkContext = context.kakaoAPI.kakaoLinkData;
      Kakao.Link[kakaoLinkContext.shareType](kakaoLinkContext.shareData);
    }

    return {
      share: function share(context) {

        kakaoLinkShareHandler(context);
      }
    };
  }

  var htmlElement = typeof HTMLElement !== 'undefined' ? HTMLElement : Element;

  var attachEventListener = function attachEventListener(fn, target) {
    return function () {
      var e = window.event;
      fn({
        target: e.srcElement,
        currentTarget: target,
        preventDefault: function preventDefault() {
          e.returnValue = false;
        }
      });
    };
  };

  function eventBind(type, listener, target) {
    if (target.addEventListener) {
      target.addEventListener(type, listener, false);
    } else {
      var attachListener = attachEventListener(listener, target);
      target.attachEvent('on' + type, attachListener);
    }
  }

  function on(type, listener, target) {
    if (target && target.length && target[0] instanceof htmlElement) {
      for (var i = 0, len = target.length; i < len; i++) {
        eventBind(type, listener, target[i]);
      }
    } else {
      eventBind(type, listener, target);
    }
  }

  var TYPE = {
    RESIZE: 'resize',
    CLICK: 'click',
    LONGPRESS: 'contextmenu',
    TOUCH_END: 'touchend',
    TOUCH_MOVE: 'touchmove',
    HOVER: 'mouseenter'
  };

  var EventManager = {
    on: on,
    TYPE: TYPE
  };

  // 티아라 로그 관련 코드
  var clickLog = function clickLog(category, service) {
    var tiaraTracker = window.TiaraTracker;
    var _window = window,
        _tiq = _window._tiq;


    if (tiaraTracker && tiaraTracker.getInstance()) {
      var eventProps = {
        te1: "util",
        te2: category
      };
      if (service) {
        eventProps.te3 = service;
      }

      tiaraTracker.getInstance().trackEvent('clickLog').customProps(eventProps).track();
    } else if (_tiq) {
      var arr = ['__trackEvent', 'util', category];
      if (service) {
        arr.push(service);
      }

      _tiq.push(arr);
    }
  };

  var userAgent = function userAgent() {
    var ua = window.navigator.userAgent.toString().toLowerCase();
    function checkUserAgent(ua) {
      var browser = {};
      var match = /(dolfin)[ \/]([\w.]+)/.exec(ua) || /(edge)[ \/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || ['', 'unknown'];
      if (match[1] === 'webkit') {
        match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) || /(android)[ \/]([\w._\-]+);/.exec(ua) || [match[0], 'safari', match[2]];
      } else if (match[1] === 'mozilla') {
        if (/trident/.test(ua)) {
          match[1] = 'msie';
        } else {
          match[1] = 'firefox';
        }
      } else if (match[1] === 'edge') {
        match[1] = 'spartan';
      } else if (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)) {
        match[1] = 'polaris';
      }

      browser[match[1]] = true;
      browser.name = match[1];
      browser.version = setVersion(match[2]);

      return browser;
    }

    function setVersion(versionString) {
      var version = {};

      var versions = versionString ? versionString.split(/\.|-|_/) : ['0', '0', '0'];
      version.info = versions.join('.');
      version.major = versions[0] || '0';
      version.minor = versions[1] || '0';
      version.patch = versions[2] || '0';

      return version;
    }

    function checkPlatform(ua) {
      if (isPc(ua)) {
        return 'pc';
      } else if (isTablet(ua)) {
        return 'tablet';
      } else if (isMobile(ua)) {
        return 'mobile';
      } else {
        return '';
      }
    }
    function isPc(ua) {
      if (ua.match(/linux|windows (nt|98)|macintosh|cros/) && !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)) {
        return true;
      }
      return false;
    }
    function isTablet(ua) {
      if (ua.match(/ipad/) || ua.match(/android/) && !ua.match(/mobi|mini|fennec/)) {
        return true;
      }
      return false;
    }
    function isMobile(ua) {
      if (!!ua.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)) {
        return true;
      } else {
        return false;
      }
    }

    function checkOs(ua) {
      var os = {},
          match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) || /(android)[ \/]([\w._\-]+);/.exec(ua) || (/android/.test(ua) ? ['', 'android', '0.0.0'] : false) || (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua) ? ['', 'polaris', '0.0.0'] : false) || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(ua) || (/(windows)/.test(ua) ? ['', 'windows', '0.0.0'] : false) || /(mac) os x ([\w._\-]+)/.exec(ua) || (/(linux)/.test(ua) ? ['', 'linux', '0.0.0'] : false) || (/webos/.test(ua) ? ['', 'webos', '0.0.0'] : false) || /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(ua) || /(bada)[ \/]([\w._\-]+)/.exec(ua) || (/bada/.test(ua) ? ['', 'bada', '0.0.0'] : false) || (/(rim|blackberry|bb10)/.test(ua) ? ['', 'blackberry', '0.0.0'] : false) || ['', 'unknown', '0.0.0'];

      if (match[1] === 'iphone' || match[1] === 'ipad' || match[1] === 'ipod') {
        match[1] = 'ios';
      } else if (match[1] === 'windows' && match[2] === '98') {
        match[2] = '0.98.0';
      }
      if (match[1] === 'cros') {
        match[1] = 'chrome';
      }
      os[match[1]] = true;
      os.name = match[1];
      os.version = setVersion(match[2]);
      return os;
    }

    function checkApp(ua) {
      var app = {},
          match = /(crios)[ \/]([\w.]+)/.exec(ua) || /(daumapps)[ \/]([\w.]+)/.exec(ua) || ['', ''];

      if (match[1]) {
        app.isApp = true;
        app.name = match[1];
        app.version = setVersion(match[2]);
      } else {
        app.isApp = false;
      }

      return app;
    }

    return {
      ua: ua,
      browser: checkUserAgent(ua),
      platform: checkPlatform(ua),
      os: checkOs(ua),
      app: checkApp(ua)
    };
  };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /**
     오브젝트의 key-value 데이터를 주어진 separator 값으로 연결된 스트링 값으로 변환한다.

     @method queryStringify
     @static
     @param obj {Object} data object
     @param separator {String} data key-value 값들을 연결한 구분자 (Optional, 기본값 '&')
     @return {String} data object의 key-value 값들을 구분자로 연결한 스트링 데이터
     **/
  var queryStringify = function queryStringify(obj) {
    var pairs = [];
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          var value = obj[key];
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.length) {
            pairs.push(toValuesString(key, value));
          } else {
            pairs.push(key + '=' + value.toString());
          }
        }
      }
    }

    return pairs.join('&');
  };

  function toValuesString(key, values) {
    return values.map(function (value) {
      return key + '=' + value;
    }).join('&');
  }

  var web2app = function () {
    var TIMEOUT_IOS = 2 * 1000,
        TIMEOUT_ANDROID = 3 * 100,
        INTERVAL = 100,
        ua = userAgent(),
        os = ua.os,
        intentNotSupportedBrowserList = ['firefox', 'opr/'];

    function moveToStore(storeURL) {
      top.window.location.href = storeURL;
    }

    function web2app(context) {
      var willInvokeApp = typeof context.willInvokeApp === 'function' ? context.willInvokeApp : function () {},
          onAppMissing = typeof context.onAppMissing === 'function' ? context.onAppMissing : moveToStore,
          onUnsupportedEnvironment = typeof context.onUnsupportedEnvironment === 'function' ? context.onUnsupportedEnvironment : function () {};

      willInvokeApp();

      if (os.android) {
        if (isIntentSupportedBrowser() && context.intentURI && !context.useUrlScheme) {
          web2appViaIntentURI(context.intentURI);
        } else if (context.storeURL) {
          web2appViaCustomUrlSchemeForAndroid(context.urlScheme, context.storeURL, onAppMissing);
        }
      } else if (os.ios && context.storeURL) {
        web2appViaCustomUrlSchemeForIOS(context.urlScheme, context.storeURL, onAppMissing, context.universalLink);
      } else {
        setTimeout(function () {
          onUnsupportedEnvironment();
        }, 100);
      }
    }

    // chrome 25 and later supports intent. https://developer.chrome.com/multidevice/android/intents
    function isIntentSupportedBrowser() {
      var supportsIntent = ua.browser.chrome && +ua.browser.version.major >= 25;
      var blackListRegexp = new RegExp(intentNotSupportedBrowserList.join('|'), 'i');
      return supportsIntent && !blackListRegexp.test(ua.ua);
    }

    function web2appViaCustomUrlSchemeForAndroid(urlScheme, storeURL, fallback) {
      deferFallback(TIMEOUT_ANDROID, storeURL, fallback);
      launchAppViaHiddenIframe(urlScheme);
    }

    function deferFallback(timeout, storeURL, fallback) {
      var clickedAt = new Date().getTime();
      return setTimeout(function () {
        var now = new Date().getTime();
        if (isPageVisible() && now - clickedAt < timeout + INTERVAL) {
          fallback(storeURL);
        }
      }, timeout);
    }

    function web2appViaIntentURI(launchURI) {
      if (ua.browser.chrome) {
        move();
      } else {
        setTimeout(move, 100);
      }

      function move() {
        top.window.location.href = launchURI;
      }
    }

    function web2appViaCustomUrlSchemeForIOS(urlScheme, storeURL, fallback, universalLink) {
      var tid = deferFallback(TIMEOUT_IOS, storeURL, fallback);

      if (parseInt(ua.os.version.major, 10) < 8) {
        bindPagehideEvent(tid);
      } else {
        bindVisibilityChangeEvent(tid);
      }

      // https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12
      if (isSupportUniversalLinks()) {
        if (universalLink === undefined) {
          universalLink = urlScheme;
        } else {
          clearTimeout(tid);
        }
        launchAppViaChangingLocation(universalLink);
      } else {
        launchAppViaHiddenIframe(urlScheme);
      }
    }

    function bindPagehideEvent(tid) {
      window.addEventListener('pagehide', function clear() {
        if (isPageVisible()) {
          clearTimeout(tid);
          window.removeEventListener('pagehide', clear);
        }
      });
    }

    function bindVisibilityChangeEvent(tid) {
      document.addEventListener('visibilitychange', function clear() {
        if (isPageVisible()) {
          clearTimeout(tid);
          document.removeEventListener('visibilitychange', clear);
        }
      });
    }

    function isPageVisible() {
      var attrNames = ['hidden', 'webkitHidden'];
      for (var i = 0, len = attrNames.length; i < len; i++) {
        if (typeof document[attrNames[i]] !== 'undefined') {
          return !document[attrNames[i]];
        }
      }
      return true;
    }

    function launchAppViaChangingLocation(urlScheme) {
      console.log('launchAppViaChangingLocation');
      top.window.location.href = urlScheme;
    }

    function launchAppViaHiddenIframe(urlScheme) {
      setTimeout(function () {
        var iframe = createHiddenIframe('appLauncher');
        iframe.src = urlScheme;
      }, 100);
    }

    function createHiddenIframe(id) {
      var iframe = document.createElement('iframe');
      iframe.id = id;
      iframe.style.border = 'none';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.display = 'none';
      iframe.style.overflow = 'hidden';
      document.body.appendChild(iframe);
      return iframe;
    }

    function isSupportUniversalLinks() {
      return parseInt(ua.os.version.major, 10) > 8 && ua.os.ios;
    }

    /**
     * app.을 실행하거나 / store 페이지에 연결하여 준다.
     * @function
     * @param context {object} urlScheme, intentURI, storeURL, appName, onAppMissing, onUnsupportedEnvironment, willInvokeApp
     * @example daumtools.web2app({ urlScheme : 'daumapps://open', intentURI : '', storeURL: 'itms-app://...', appName: '다음앱' })
     */

    return web2app;
  }();

  var util = {
    type: function type(target) {
      return Object.prototype.toString.call(target);
    },
    throwError: function throwError(messages) {
      throw new Error(messages);
    },
    addClass: function addClass(el, cName) {
      function has(el, cname) {
        return el.className && (' ' + el.className + ' ').lastIndexOf(' ' + cname + ' ') > -1;
      }
      if (!el.className) {
        el.className = cName;
      } else if (!has(el, cName)) {
        el.className += ' ' + cName;
      }
    },
    removeClass: function removeClass(el, cName) {
      if (el.className) {
        el.className = (' ' + el.className + ' ').replace(' ' + cName + ' ', ' ').replace(/^\s+|\s+$/g, '');
      }
    },
    EventManager: EventManager,
    userAgent: userAgent,
    queryStringify: queryStringify,
    web2app: web2app,
    clickLog: clickLog
  };

  function kakaoStory(isMobile) {
    var ua = util.userAgent();
    var appId = window.location.hostname;
    var FULL_NAME = '카카오스토리';

    function shareKakaoStory(appInfo, context) {
      if (isMobile) {
        kakaoStory.web2app(appInfo);
      } else {
        var url = 'https://story.kakao.com/share?url=' + encodeURIComponent(context.link);
        var option = 'width=530, height=480, resizable=no, scrollbars=no, status=no';
        window.open(url, 'StoryShare', option);
      }
    }

    return {
      share: function share(context) {
        // throw new Error('hello')
        var link = context.link,
            uriPath = 'posting',
            storeURL = ua.os.android ? 'market://details?id=com.kakao.story' : 'itms-apps://itunes.apple.com/app/id486244601',
            serviceName = context.service_name || '다음',
            param = {
          post: encodeURIComponent(context.prefix + '\r\n' + link),
          appid: encodeURIComponent(appId),
          appname: encodeURIComponent(serviceName),
          appver: '1.0',
          apiver: '1.0'
        };

        if (context.url_info) {
          param['urlinfo'] = encodeURIComponent(JSON.stringify(context.url_info));
        }

        shareKakaoStory({
          name: FULL_NAME,
          suffix: '가',
          scheme: 'storylink',
          pkg: 'com.kakao.story',
          uriPath: uriPath,
          param: param,
          storeURL: storeURL
        }, context);
      }
    };
  }

  var getUrlScheme = function getUrlScheme(appInfo) {
    return appInfo.scheme + '://' + appInfo.uriPath + '?' + util.queryStringify(appInfo.param);
  };

  var getIntentUri = function getIntentUri(appInfo) {
    return 'intent://' + appInfo.uriPath + '?' + util.queryStringify(appInfo.param) + '#Intent;scheme=' + appInfo.scheme + ';package=' + appInfo.pkg + ';end';
  };

  kakaoStory.web2app = function (appInfo) {
    var UNKNOWN_APP_ID = 0;
    var DEFAULT_APP_KEYWORD = '다음앱';

    util.web2app({
      urlScheme: getUrlScheme(appInfo),
      intentURI: getIntentUri(appInfo),
      storeURL: appInfo.storeURL,
      appName: appInfo.name || DEFAULT_APP_KEYWORD,
      onUnsupportedEnvironment: function onUnsupportedEnvironment(context) {
        window.location.href = 'http://search.daum.net/search?w=tot&DA=BESE&q=' + (appInfo.name || DEFAULT_APP_KEYWORD);
      },
      willInvokeApp: function willInvokeApp() {
        var beacon = new Image();
        beacon.src = 'http://tiara.daum.net/tiara.front/front/click/?referer=http%3A%2F%2Fdummy.daum.net%2F&url=http://dummy.daum.net/?t__nil_mob_minidaum=applink&nil_id=' + UNKNOWN_APP_ID;
      }
    });
  };

  function facebook(isMobile) {
    return {
      share: function share(context) {
        var link = context.link;
        var ua = util.userAgent().platform;
        var device = ua === 'mobile' ? 'm' : 'www';
        var address = 'https://' + device + '.facebook.com/sharer.php?u=' + encodeURIComponent(link);
        var option = 'width=580, height=255, resizable=no, scrollbars=no, status=no';

        if (isMobile) {
          window.open(address, '', '');
        } else {
          window.open(address, '', option);
        }
      }
    };
  }

  function twitter(isMobile) {
    return {
      share: function share(context) {
        var link = context.link;
        var param = {
          url: encodeURIComponent(link),
          text: encodeURIComponent(context.prefix)
        };
        var webIntent = 'https://twitter.com/intent/tweet?' + util.queryStringify(param);

        if (context.service_name) {
          webIntent += encodeURIComponent(' | ' + context.service_name);
        }

        if (isMobile) {
          top.location.href = webIntent;
        } else {
          var option = 'width=580, height=255, resizable=no, scrollbars=yes, status=no';
          var popWindow = window.open('', '', option);
          popWindow.location.href = webIntent;
        }
      }
    };
  }

  function daumCafe(isMobile) {

    return {
      share: function share(context) {
        if (isMobile) {
          DaumCafe.Widget.connect('dialog', 'share', { link: context.link });
        } else {
          if (context.cafe) {
            window.open(encodeURI(context.cafe), '', 'width=620, height=450, resizable=yes, scrollbars=yes');
          } else {
            DaumCafe.Widget.connect('dialog', 'share', { link: context.link });
          }
        }
      }
    };
  }

  function mail(isMobile) {
    return {
      share: function share(context) {
        var link = context.link,
            param = {
          'opentype': 'compose',
          'serviceId': 'socialshareRenewal',
          'menubar': 'true',
          'SUBJECT': encodeURIComponent(context.prefix),
          'BODY': encodeURIComponent('"' + context.prefix + '"\r\n' + link),
          'LINK': encodeURIComponent(link)
        };

        if (isMobile) {
          top.location.href = 'https://m.mail.daum.net/goto?type=write&' + util.queryStringify(param);
        } else {
          var option = 'width=1000, height=550, resizable=yes, scrollbars=yes';
          var popWindow = window.open('', '', option);
          var isBetaService = context.isBetaService ? context.isBetaService : false;
          var mailUrl = isBetaService ? 'https://beta-mail.daum.net/goto/compose?' : 'https://mail.daum.net/goto/compose?';
          popWindow.location.href = mailUrl + util.queryStringify(param);
        }
      }
    };
  }

  var htmlElement$1 = typeof HTMLElement !== 'undefined' ? HTMLElement : Element;

  var attachEventListener$1 = function attachEventListener(fn, target) {
    return function () {
      var e = window.event;
      fn({
        target: e.srcElement,
        currentTarget: target,
        preventDefault: function preventDefault() {
          e.returnValue = false;
        }
      });
    };
  };

  function eventBind$1(type, listener, target) {
    if (target.addEventListener) {
      target.addEventListener(type, listener, false);
    } else {
      var attachListener = attachEventListener$1(listener, target);
      target.attachEvent('on' + type, attachListener);
    }
  }

  function on$1(type, listener, target) {
    if (target && target.length && target[0] instanceof htmlElement$1) {
      for (var i = 0, len = target.length; i < len; i++) {
        eventBind$1(type, listener, target[i]);
      }
    } else {
      eventBind$1(type, listener, target);
    }
  }

  var TYPE$1 = {
    RESIZE: 'resize',
    CLICK: 'click',
    LONGPRESS: 'contextmenu',
    TOUCH_END: 'touchend',
    TOUCH_MOVE: 'touchmove',
    HOVER: 'mouseenter'
  };

  var EventManager$1 = {
    on: on$1,
    TYPE: TYPE$1
  };

  // 티아라 로그 관련 코드
  var clickLog$1 = function clickLog(category, service) {
    var tiaraTracker = window.TiaraTracker;
    var _window = window,
        _tiq = _window._tiq;


    if (tiaraTracker && tiaraTracker.getInstance()) {
      var eventProps = {
        te1: "util",
        te2: category
      };
      if (service) {
        eventProps.te3 = service;
      }

      tiaraTracker.getInstance().trackEvent('clickLog').customProps(eventProps).track();
    } else if (_tiq) {
      var arr = ['__trackEvent', 'util', category];
      if (service) {
        arr.push(service);
      }

      _tiq.push(arr);
    }
  };

  var userAgent$1 = function userAgent() {
    var ua = window.navigator.userAgent.toString().toLowerCase();
    function checkUserAgent(ua) {
      var browser = {};
      var match = /(dolfin)[ \/]([\w.]+)/.exec(ua) || /(edge)[ \/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || ['', 'unknown'];
      if (match[1] === 'webkit') {
        match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) || /(android)[ \/]([\w._\-]+);/.exec(ua) || [match[0], 'safari', match[2]];
      } else if (match[1] === 'mozilla') {
        if (/trident/.test(ua)) {
          match[1] = 'msie';
        } else {
          match[1] = 'firefox';
        }
      } else if (match[1] === 'edge') {
        match[1] = 'spartan';
      } else if (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)) {
        match[1] = 'polaris';
      }

      browser[match[1]] = true;
      browser.name = match[1];
      browser.version = setVersion(match[2]);

      return browser;
    }

    function setVersion(versionString) {
      var version = {};

      var versions = versionString ? versionString.split(/\.|-|_/) : ['0', '0', '0'];
      version.info = versions.join('.');
      version.major = versions[0] || '0';
      version.minor = versions[1] || '0';
      version.patch = versions[2] || '0';

      return version;
    }

    function checkPlatform(ua) {
      if (isPc(ua)) {
        return 'pc';
      } else if (isTablet(ua)) {
        return 'tablet';
      } else if (isMobile(ua)) {
        return 'mobile';
      } else {
        return '';
      }
    }
    function isPc(ua) {
      if (ua.match(/linux|windows (nt|98)|macintosh|cros/) && !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)) {
        return true;
      }
      return false;
    }
    function isTablet(ua) {
      if (ua.match(/ipad/) || ua.match(/android/) && !ua.match(/mobi|mini|fennec/)) {
        return true;
      }
      return false;
    }
    function isMobile(ua) {
      if (!!ua.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)) {
        return true;
      } else {
        return false;
      }
    }

    function checkOs(ua) {
      var os = {},
          match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) || /(android)[ \/]([\w._\-]+);/.exec(ua) || (/android/.test(ua) ? ['', 'android', '0.0.0'] : false) || (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua) ? ['', 'polaris', '0.0.0'] : false) || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(ua) || (/(windows)/.test(ua) ? ['', 'windows', '0.0.0'] : false) || /(mac) os x ([\w._\-]+)/.exec(ua) || (/(linux)/.test(ua) ? ['', 'linux', '0.0.0'] : false) || (/webos/.test(ua) ? ['', 'webos', '0.0.0'] : false) || /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(ua) || /(bada)[ \/]([\w._\-]+)/.exec(ua) || (/bada/.test(ua) ? ['', 'bada', '0.0.0'] : false) || (/(rim|blackberry|bb10)/.test(ua) ? ['', 'blackberry', '0.0.0'] : false) || ['', 'unknown', '0.0.0'];

      if (match[1] === 'iphone' || match[1] === 'ipad' || match[1] === 'ipod') {
        match[1] = 'ios';
      } else if (match[1] === 'windows' && match[2] === '98') {
        match[2] = '0.98.0';
      }
      if (match[1] === 'cros') {
        match[1] = 'chrome';
      }
      os[match[1]] = true;
      os.name = match[1];
      os.version = setVersion(match[2]);
      return os;
    }

    function checkApp(ua) {
      var app = {},
          match = /(crios)[ \/]([\w.]+)/.exec(ua) || /(daumapps)[ \/]([\w.]+)/.exec(ua) || ['', ''];

      if (match[1]) {
        app.isApp = true;
        app.name = match[1];
        app.version = setVersion(match[2]);
      } else {
        app.isApp = false;
      }

      return app;
    }

    return {
      ua: ua,
      browser: checkUserAgent(ua),
      platform: checkPlatform(ua),
      os: checkOs(ua),
      app: checkApp(ua)
    };
  };

  /**
     오브젝트의 key-value 데이터를 주어진 separator 값으로 연결된 스트링 값으로 변환한다.

     @method queryStringify
     @static
     @param obj {Object} data object
     @param separator {String} data key-value 값들을 연결한 구분자 (Optional, 기본값 '&')
     @return {String} data object의 key-value 값들을 구분자로 연결한 스트링 데이터
     **/
  var queryStringify$1 = function queryStringify(obj) {
    var pairs = [];
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          var value = obj[key];
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.length) {
            pairs.push(toValuesString$1(key, value));
          } else {
            pairs.push(key + '=' + value.toString());
          }
        }
      }
    }

    return pairs.join('&');
  };

  function toValuesString$1(key, values) {
    return values.map(function (value) {
      return key + '=' + value;
    }).join('&');
  }

  var web2app$1 = function () {
    var TIMEOUT_IOS = 2 * 1000,
        TIMEOUT_ANDROID = 3 * 100,
        INTERVAL = 100,
        ua = userAgent$1(),
        os = ua.os,
        intentNotSupportedBrowserList = ['firefox', 'opr/'];

    function moveToStore(storeURL) {
      top.window.location.href = storeURL;
    }

    function web2app(context) {
      var willInvokeApp = typeof context.willInvokeApp === 'function' ? context.willInvokeApp : function () {},
          onAppMissing = typeof context.onAppMissing === 'function' ? context.onAppMissing : moveToStore,
          onUnsupportedEnvironment = typeof context.onUnsupportedEnvironment === 'function' ? context.onUnsupportedEnvironment : function () {};

      willInvokeApp();

      if (os.android) {
        if (isIntentSupportedBrowser() && context.intentURI && !context.useUrlScheme) {
          web2appViaIntentURI(context.intentURI);
        } else if (context.storeURL) {
          web2appViaCustomUrlSchemeForAndroid(context.urlScheme, context.storeURL, onAppMissing);
        }
      } else if (os.ios && context.storeURL) {
        web2appViaCustomUrlSchemeForIOS(context.urlScheme, context.storeURL, onAppMissing, context.universalLink);
      } else {
        setTimeout(function () {
          onUnsupportedEnvironment();
        }, 100);
      }
    }

    // chrome 25 and later supports intent. https://developer.chrome.com/multidevice/android/intents
    function isIntentSupportedBrowser() {
      var supportsIntent = ua.browser.chrome && +ua.browser.version.major >= 25;
      var blackListRegexp = new RegExp(intentNotSupportedBrowserList.join('|'), 'i');
      return supportsIntent && !blackListRegexp.test(ua.ua);
    }

    function web2appViaCustomUrlSchemeForAndroid(urlScheme, storeURL, fallback) {
      deferFallback(TIMEOUT_ANDROID, storeURL, fallback);
      launchAppViaHiddenIframe(urlScheme);
    }

    function deferFallback(timeout, storeURL, fallback) {
      var clickedAt = new Date().getTime();
      return setTimeout(function () {
        var now = new Date().getTime();
        if (isPageVisible() && now - clickedAt < timeout + INTERVAL) {
          fallback(storeURL);
        }
      }, timeout);
    }

    function web2appViaIntentURI(launchURI) {
      if (ua.browser.chrome) {
        move();
      } else {
        setTimeout(move, 100);
      }

      function move() {
        top.window.location.href = launchURI;
      }
    }

    function web2appViaCustomUrlSchemeForIOS(urlScheme, storeURL, fallback, universalLink) {
      var tid = deferFallback(TIMEOUT_IOS, storeURL, fallback);

      if (parseInt(ua.os.version.major, 10) < 8) {
        bindPagehideEvent(tid);
      } else {
        bindVisibilityChangeEvent(tid);
      }

      // https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12
      if (isSupportUniversalLinks()) {
        if (universalLink === undefined) {
          universalLink = urlScheme;
        } else {
          clearTimeout(tid);
        }
        launchAppViaChangingLocation(universalLink);
      } else {
        launchAppViaHiddenIframe(urlScheme);
      }
    }

    function bindPagehideEvent(tid) {
      window.addEventListener('pagehide', function clear() {
        if (isPageVisible()) {
          clearTimeout(tid);
          window.removeEventListener('pagehide', clear);
        }
      });
    }

    function bindVisibilityChangeEvent(tid) {
      document.addEventListener('visibilitychange', function clear() {
        if (isPageVisible()) {
          clearTimeout(tid);
          document.removeEventListener('visibilitychange', clear);
        }
      });
    }

    function isPageVisible() {
      var attrNames = ['hidden', 'webkitHidden'];
      for (var i = 0, len = attrNames.length; i < len; i++) {
        if (typeof document[attrNames[i]] !== 'undefined') {
          return !document[attrNames[i]];
        }
      }
      return true;
    }

    function launchAppViaChangingLocation(urlScheme) {
      console.log('launchAppViaChangingLocation');
      top.window.location.href = urlScheme;
    }

    function launchAppViaHiddenIframe(urlScheme) {
      setTimeout(function () {
        var iframe = createHiddenIframe('appLauncher');
        iframe.src = urlScheme;
      }, 100);
    }

    function createHiddenIframe(id) {
      var iframe = document.createElement('iframe');
      iframe.id = id;
      iframe.style.border = 'none';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.display = 'none';
      iframe.style.overflow = 'hidden';
      document.body.appendChild(iframe);
      return iframe;
    }

    function isSupportUniversalLinks() {
      return parseInt(ua.os.version.major, 10) > 8 && ua.os.ios;
    }

    /**
     * app.을 실행하거나 / store 페이지에 연결하여 준다.
     * @function
     * @param context {object} urlScheme, intentURI, storeURL, appName, onAppMissing, onUnsupportedEnvironment, willInvokeApp
     * @example daumtools.web2app({ urlScheme : 'daumapps://open', intentURI : '', storeURL: 'itms-app://...', appName: '다음앱' })
     */

    return web2app;
  }();

  var util$1 = {
    type: function type(target) {
      return Object.prototype.toString.call(target);
    },
    throwError: function throwError(messages) {
      throw new Error(messages);
    },
    addClass: function addClass(el, cName) {
      function has(el, cname) {
        return el.className && (' ' + el.className + ' ').lastIndexOf(' ' + cname + ' ') > -1;
      }
      if (!el.className) {
        el.className = cName;
      } else if (!has(el, cName)) {
        el.className += ' ' + cName;
      }
    },
    removeClass: function removeClass(el, cName) {
      if (el.className) {
        el.className = (' ' + el.className + ' ').replace(' ' + cName + ' ', ' ').replace(/^\s+|\s+$/g, '');
      }
    },
    EventManager: EventManager$1,
    userAgent: userAgent$1,
    queryStringify: queryStringify$1,
    web2app: web2app$1,
    clickLog: clickLog$1
  };

  var isMobile = util$1.userAgent().platform === 'mobile';

  var SNS_MODULE = {
    kakaoTalk: 'kakaotalk',
    kakaoStory: 'kakaostory',
    facebook: 'facebook',
    twitter: 'twitter',
    daumCafe: 'daumcafe',
    mail: 'mail'
  };

  var snsFactory = function snsFactory() {
    return {
      create: function create(snsName) {
        var sns = null;
        switch (snsName) {
          case SNS_MODULE.kakaoTalk:
            sns = kakaoTalk();
            break;
          case SNS_MODULE.kakaoStory:
            sns = kakaoStory(isMobile);
            break;
          case SNS_MODULE.facebook:
            sns = facebook(isMobile);
            break;
          case SNS_MODULE.twitter:
            sns = twitter(isMobile);
            break;
          case SNS_MODULE.daumCafe:
            sns = daumCafe(isMobile);
            break;
          case SNS_MODULE.mail:
            sns = mail(isMobile);
            break;

          default:
            sns = null;
        }

        return sns;
      }
    };
  };

  var socialSharer = function socialSharer(snsFactory, shareData) {
    if (!shareData) {
      throw new Error(socialSharer.messages.noShareData);
    }
    // 카카오톡 쉐어랑 관련된 코드
    var Kakao = window.Kakao || shareData.Kakao || null;

    if (Kakao) {
      if (Kakao.Auth) ; else {
        var kakaoLinkDaumAppKey = void 0;
        try {
          if (shareData.kakaoAPI.appkey) {
            kakaoLinkDaumAppKey = shareData.kakaoAPI.appkey;
          }
          Kakao.init(kakaoLinkDaumAppKey);
        } catch (e) {
          throw new Error(e.message + ' 및 ' + socialSharer.messages.confirmKakaoApi);
        }
      }
    }

    return {
      shareSns: function shareSns(snsName) {
        if (!snsName) throw new Error(socialSharer.messages.noSnsName);

        var sns = snsFactory.create(snsName);
        if (!sns) {
          throw new Error(socialSharer.noSnsModule(snsName));
        }

        sns.share(shareData);
      }
    };
  };

  socialSharer.messages = {
    noSnsName: 'sns 이름을 인자로 받아야 합니다.',
    noSnsModule: '_ 이란 sns모듈은 없습니다. sns 이름을 확인하세요',
    noShareData: 'sns 모듈에 전달할 data를 넣어야 합니다. 옵션값의 두번째 인자를 확인하세요',
    confirmKakaoApi: 'Kakao api data가 필요합니다.'
  };

  socialSharer.noSnsModule = function (name) {
    return socialSharer.messages.noSnsModule.replace('_', name);
  };

  /**
   *
   * @param {*} socialSharer
   * @param {NodeList} snsItemList
   * @return {Object} 
   */
  var ATTR_NAME = 'data-handler';
  var socialshareViewer = function socialshareViewer(socialSharer, snsItemList) {

    var view = {
      share: function share(socialName) {
        socialSharer.shareSns(socialName);
        util$1.clickLog('layer', socialName);
      }
    };

    var handleClick = function handleClick(e) {
      e.preventDefault();
      var targetEl = e.currentTarget;
      var socialName = targetEl.getAttribute(ATTR_NAME);
      view.share(socialName);
    };

    EventManager$1.on(EventManager$1.TYPE.CLICK, handleClick, snsItemList);

    return view;
  };

  var SocialShare = {
    snsFactory: snsFactory,
    socialSharer: socialSharer,
    socialshareViewer: socialshareViewer
  };

  var SNS_LIST = ['kakaotalk', 'kakaostory', 'facebook', 'twitter', 'mail', 'daumcafe'];

  var SNS_DATA = {
    kakaotalk: {
      iconClassName: 'ico_sns_kt',
      name: '카카오톡'
    },
    kakaostory: {
      iconClassName: 'ico_sns_ks',
      name: '카카오스토리'
    },
    facebook: {
      iconClassName: 'ico_sns_fb',
      name: '페이스북'
    },
    twitter: {
      iconClassName: 'ico_sns_tw',
      name: '트위터'
    },
    mail: {
      iconClassName: 'ico_sns_mail',
      name: '다음메일'
    },
    daumcafe: {
      iconClassName: 'ico_sns_cafe',
      name: '다음카페'
    }
  };

  var viewData = {
    SNS_LIST: SNS_LIST,
    SNS_DATA: SNS_DATA,
    link: ''
  };

  var CLOSE_BTN_CLASSNAME = '.btn_close';
  // const COPY_BTN_CLASSNAME = '.txt_copy'
  var COPY_BTN_CLASSNAME = '.link_copyurl';

  var bindEvent = function bindEvent(viewer, layerContainer) {
    var ua = util.userAgent();
    var isIE = ua.browser.name.indexOf('msie') > -1 ? parseInt(ua.browser.version.major) : false;
    var isLowIE = isIE && isIE < 10 ? true : false;
    var closeBtnEl = layerContainer.querySelectorAll(CLOSE_BTN_CLASSNAME);
    var copyBtn = layerContainer.querySelector(COPY_BTN_CLASSNAME);

    var delay = null;

    var closeLayer = function closeLayer(e) {
      e.preventDefault();
      viewer.hide();
      if (delay) {
        viewer.hideMsgLayer();
        clearTimeout(delay);
      }
    };

    var copyUrl = function copyUrl(e) {
      e.preventDefault();
      viewer.copyEvent();
      delay = setTimeout(function () {
        viewer.hideMsgLayer();
        closeLayer(e);
      }, 2000);
    };

    for (var i = 0; i < closeBtnEl.length; i++) {
      EventManager.on(EventManager.TYPE.CLICK, closeLayer, closeBtnEl[i]);
    }
    if (!isLowIE) {
      EventManager.on(EventManager.TYPE.CLICK, copyUrl, copyBtn);
    }
  };

  var ua = util.userAgent();
  var isLowIE = ua.browser.name.indexOf('msie') > -1 ? parseInt(ua.browser.version.major) : false;

  var template = function template(viewData) {
    var link = viewData.link;
    var URL_VIEW_IE = '<div class="sns_copyurl sns_copyurl_type2">\n  <span class="link_copyurl"><input type="text" class="tf_url" title="\uD604\uC7AC\uD398\uC774\uC9C0 URL\uBCF5\uC0AC" value="' + link + '"></span>\n  <p class="desc_tip">\uC704 URL\uC744 \uBCF5\uC0AC(Ctrl+C)\uD558\uC5EC \uC6D0\uD558\uB294 \uACF3\uC5D0 <br>\uBD99\uC5EC\uB123\uAE30(Ctrl+V)\uD574\uC8FC\uC138\uC694.</p>\n  </div>';

    var URL_VIEW_LATEST = '<div class="sns_copyurl">\n    <a href="#none" class="link_copyurl">\n    <span class="screen_out">\uD604\uC7AC\uD398\uC774\uC9C0 URL\uBCF5\uC0AC</span>\n    <span class="txt_url">' + link + '</span>\n    <span class="txt_copy">URL\uBCF5\uC0AC</span>\n    </a>\n    </div>';

    var URL_VIEW_TEMPLATE = isLowIE && isLowIE < 10 ? URL_VIEW_IE : URL_VIEW_LATEST;

    var MSG_TEMPLATE = '<div class="sns_comm_p copyurl_layer hide">\n  <div class="inner_copyurl">\n  <p class="desc_copyurl">\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.<br>\uC6D0\uD558\uB294\uACF3\uC5D0 \uBD99\uC5EC\uB123\uAE30(Ctrl+V)\uD574\uC8FC\uC138\uC694.</p>\n  <button class="btn_close"><span class="img_social ico_close">\uACF5\uC720\uBAA9\uB85D \uB2EB\uAE30</span>\n  </button>';

    var container = document.createElement('div');
    container.className = 'social_comm_p';

    var SNS_TEMPLATE = '<div class="sns_comm_p share_layer">\n    <strong class="screen_out">SNS\uB85C \uACF5\uC720\uD558\uAE30 \uD3BC\uCCD0\uC9D0</strong>\n    <ul class="list_sns"></ul>\n    <div class="copyUrl">' + URL_VIEW_TEMPLATE + '</div>\n    <button class="btn_close"><span class="img_social ico_close">\uACF5\uC720\uBAA9\uB85D \uB2EB\uAE30</span></button>\n    </div>' + MSG_TEMPLATE + '\n  ';

    container.innerHTML = SNS_TEMPLATE;

    var listSnsEl = container.querySelector('.list_sns');
    var snsList = viewData.SNS_LIST;

    var snsListHtml = function snsListHtml(snsList) {
      var buffer = [];
      for (var i = 0; i < snsList.length; i++) {
        var snsName = snsList[i];
        var invisibleSns = snsName === 'daumcafe' ? 'style="display: none"' : '';
        var temp = '<li ' + invisibleSns + '>\n        <a href="#none" class="link_sns" data-handler="' + snsName + '">\n        <span class="img_social ' + viewData.SNS_DATA[snsName].iconClassName + '">\n        </span>' + viewData.SNS_DATA[snsName].name + '</a></li>';

        buffer.push(temp);
      }
      return buffer.join('');
    };
    listSnsEl.innerHTML = snsListHtml(snsList);
    return container;
  };

  var htmlElement$4 = typeof HTMLElement !== 'undefined' ? HTMLElement : Element;

  var layerViewer = function layerViewer(triggerEl, opts) {
    var messages = layerViewer.messages;

    if (!(triggerEl instanceof htmlElement$4)) {
      util.throwError(messages.failTriggerEl);
    }

    viewData.link = opts.link || '';

    var layerContainer = template(viewData);
    var msgLayer = layerContainer.querySelector('.copyurl_layer');
    var shareLayer = layerContainer.querySelector('.share_layer');
    var linkTxt = layerContainer.querySelector('.txt_url');

    var viewer = {
      render: function render(moreViewContainer) {
        if (!(moreViewContainer instanceof htmlElement$4)) {
          util.throwError(layerViewer.failArgument(messages.failRenderArgument, moreViewContainer));
        }
        moreViewContainer.appendChild(this.getView());
        bindEvent(viewer, layerContainer);
        this.hide();
      },
      getView: function getView() {
        return layerContainer;
      },
      show: function show() {
        if (layerContainer) {
          util.clickLog('btn_share');
          util.removeClass(layerContainer, 'hide');
        }
      },
      hide: function hide() {
        util.addClass(layerContainer, 'hide');
      },
      showMsgLayer: function showMsgLayer() {
        util.removeClass(msgLayer, 'hide');
        util.addClass(shareLayer, 'hide');
      },
      hideMsgLayer: function hideMsgLayer() {
        util.addClass(msgLayer, 'hide');
        util.removeClass(shareLayer, 'hide');
      },
      changeLink: function changeLink(url) {
        if (layerContainer) {
          var urlEl = layerContainer.querySelector('.txt_url');
          urlEl.innerHTML = url;
        }
      },
      copyEvent: function copyEvent() {
        this.copyUrl(linkTxt);
        this.showMsgLayer();
        util.clickLog('layer', 'copyUrl');
      },
      copyUrl: function copyUrl(targetTxt) {
        var range = document.createRange();
        range.selectNodeContents(targetTxt);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');
        selection.removeAllRanges();
      }
    };

    EventManager.on(EventManager.TYPE.CLICK, function (e) {
      e.preventDefault();
      viewer.show();
    }, triggerEl);

    if (opts.action && opts.action === 'hover') {
      EventManager.on(EventManager.TYPE.HOVER, function (e) {
        e.preventDefault();
        viewer.show();
      }, triggerEl);
    }

    return viewer;
  };

  layerViewer.messages = {
    failRenderArgument: '_은 moreViewContainer 옵션으로 잘못된 타입 입니다. DOM객체가 주입되어야 합니다.',
    failTriggerEl: '트리거 버튼 타입이 잘못되었습니다. Element 타입으로 넣어주세요.'
  };

  layerViewer.failArgument = function failArgument(message, arguemnt) {
    return message.replace('_', util.type(arguemnt));
  };

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "/* global */\n.screen_out{overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px}\n.show{display:block}\n.hide{display:none}\n\n/* PC Social Share */\n/* 2018-04-25 수정 시작 */\n.social_comm_p{position:absolute;z-index:1000;}\n.social_comm_p .img_social{display:block;overflow:hidden;font-size:0;background:url(//t1.daumcdn.net/daumtop_deco/images/common/social/img_social_200414.png) no-repeat 0 0;text-indent:-9999px}\n.social_comm_p .sns_comm_p{overflow:hidden;position:relative;border:1px solid #e2e2e2;font-size:11px;color:#222;background-color:#fff;letter-spacing:-0.025em}\n.social_comm_p .btn_close{position:absolute;top:5px;right:5px;width:24px;height:24px}\n.social_comm_p .ico_close{width:15px;height:16px;margin:5px;background-position:-150px 0}\n.social_comm_p .share_layer{position:relative;width:260px;min-height:228px}\n.social_comm_p .list_sns{overflow:hidden;margin:26px 14px 0}\n.social_comm_p .list_sns li{float:left;width:77px;height:78px}\n.social_comm_p .list_sns .link_sns{display:block;text-align:center;text-decoration:none}\n.social_comm_p .list_sns .link_sns .img_social{width:43px;height:43px;margin:0 auto 4px}\n.social_comm_p .list_sns .tit_sns{display:block;margin-top:7px;font-weight:normal;line-height:16px}\n.social_comm_p .list_sns .ico_sns_ks{background-position:-50px 0}\n.social_comm_p .list_sns .ico_sns_fb{background-position:-100px 0}\n.social_comm_p .list_sns .ico_sns_tw{background-position:0 -50px}\n.social_comm_p .list_sns .ico_sns_cafe{background-position:-100px -50px}\n.social_comm_p .list_sns .ico_sns_mail{background-position:-50px -50px}\n.social_comm_p .list_sns .ico_sns_kt{background-position:0 0}\n.social_comm_p .sns_copyurl{margin:-1px 26px 0;padding-bottom:23px}\n.social_comm_p .sns_copyurl .link_copyurl{display:block;overflow:hidden;position:relative;height:23px;line-height:23px;border:1px solid #d0d0d0;background-color:#f8f8f8;text-decoration:none}\n.social_comm_p .sns_copyurl .txt_url{display:block;overflow:hidden;padding:0 64px 0 7px;color:#2695f8;white-space:nowrap;text-overflow:ellipsis}\n.social_comm_p .sns_copyurl .txt_copy{position:absolute;top:0;right:0;width:47px;height:25px;border-left:1px solid #d0d0d0;background-color:#fff;text-align:center}\n.social_comm_p .copyurl_layer{width:254px;height:78px;text-align:center}\n.social_comm_p .inner_copyurl{display:table;width:100%;height:100%}\n.social_comm_p .inner_copyurl .desc_copyurl{display:table-cell;padding:18px 0 17px;line-height:19px;vertical-align:middle}\n.social_comm_p .sns_copyurl_type2 .tf_url{display:block;width:210px;height:25px;padding:0 10px;border:0 none;color:#2695f8;background-color:transparent}\n.social_comm_p .sns_copyurl_type2 .desc_tip{padding:13px 0;line-height:18px;color:#888;text-align:center;letter-spacing:0}\n\n@media\nonly screen and (-webkit-min-device-pixel-ratio: 1.5),\nonly screen and (min-device-pixel-ratio: 1.5),\nonly screen and (min-resolution: 144dpi),\nonly screen and (min-resolution: 1.5dppx) {\n    .social_comm_p .img_social{background-image:url(//t1.daumcdn.net/daumtop_deco/images/common/social/rtn/img_social_200414.png);background-size:170px 100px}\n}";
  styleInject(css);

  var socialshareRenewal = {};

  function Main(el, options) {
    if (!(this instanceof Main)) {
      return new Main(el, options);
    }

    this.el = el;
    this.options = options;

    this.viewer = layerViewer(this.el, options);
    this.viewer.render(this.options.moreViewContainer);

    var snsFactory = SocialShare.snsFactory();
    var share = SocialShare.socialSharer(snsFactory, this.options);
    var snsItemEl = options.moreViewContainer.querySelectorAll('.link_sns');

    SocialShare.socialshareViewer(share, snsItemEl, this.options.prefix);
  }

  Main.prototype = {
    close: function close() {
      this.viewer.hide();
    },
    open: function open() {
      this.viewer.show();
    },
    share: function (_share) {
      function share(_x) {
        return _share.apply(this, arguments);
      }

      share.toString = function () {
        return _share.toString();
      };

      return share;
    }(function (snsName) {
      share.shareSns(snsName);
    }),
    updateContext: function updateContext(options) {
      var link = window.location || '';
      if (options) {
        this.options = options;
        link = this.options.link || '';
      }
      this.viewer.changeLink(link);
    }
  };

  socialshareRenewal.Main = Main;

  return socialshareRenewal;

}());
