!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e=e||self).KakaoAgent={})}(this,(function(e){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,r){return e(r={exports:{}},r.exports),r.exports}var t=function(e){return e&&e.Math==Math&&e},o=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof r&&r)||Function("return this")(),i=function(e){try{return!!e()}catch(e){return!0}},a=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,s={f:u&&!c.call({1:2},1)?function(e){var r=u(this,e);return!!r&&r.enumerable}:c},f=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}},l={}.toString,p=function(e){return l.call(e).slice(8,-1)},d="".split,w=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==p(e)?d.call(e,""):Object(e)}:Object,v=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},b=function(e){return w(v(e))},m=function(e){return"object"==typeof e?null!==e:"function"==typeof e},h=function(e,r){if(!m(e))return e;var n,t;if(r&&"function"==typeof(n=e.toString)&&!m(t=n.call(e)))return t;if("function"==typeof(n=e.valueOf)&&!m(t=n.call(e)))return t;if(!r&&"function"==typeof(n=e.toString)&&!m(t=n.call(e)))return t;throw TypeError("Can't convert object to primitive value")},y={}.hasOwnProperty,g=function(e,r){return y.call(e,r)},S=o.document,O=m(S)&&m(S.createElement),k=function(e){return O?S.createElement(e):{}},A=!a&&!i((function(){return 7!=Object.defineProperty(k("div"),"a",{get:function(){return 7}}).a})),T=Object.getOwnPropertyDescriptor,x={f:a?T:function(e,r){if(e=b(e),r=h(r,!0),A)try{return T(e,r)}catch(e){}if(g(e,r))return f(!s.f.call(e,r),e[r])}},M=function(e){if(!m(e))throw TypeError(String(e)+" is not an object");return e},j=Object.defineProperty,B={f:a?j:function(e,r,n){if(M(e),r=h(r,!0),M(n),A)try{return j(e,r,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[r]=n.value),e}},E=a?function(e,r,n){return B.f(e,r,f(1,n))}:function(e,r,n){return e[r]=n,e},D=function(e,r){try{E(o,e,r)}catch(n){o[e]=r}return r},K=o["__core-js_shared__"]||D("__core-js_shared__",{}),P=Function.toString;"function"!=typeof K.inspectSource&&(K.inspectSource=function(e){return P.call(e)});var C,V,F,_=K.inspectSource,I=o.WeakMap,W="function"==typeof I&&/native code/.test(_(I)),N=n((function(e){(e.exports=function(e,r){return K[e]||(K[e]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),U=0,z=Math.random(),L=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++U+z).toString(36)},H=N("keys"),R=function(e){return H[e]||(H[e]=L(e))},q={},G=o.WeakMap;if(W){var X=new G,Y=X.get,$=X.has,J=X.set;C=function(e,r){return J.call(X,e,r),r},V=function(e){return Y.call(X,e)||{}},F=function(e){return $.call(X,e)}}else{var Q=R("state");q[Q]=!0,C=function(e,r){return E(e,Q,r),r},V=function(e){return g(e,Q)?e[Q]:{}},F=function(e){return g(e,Q)}}var Z={set:C,get:V,has:F,enforce:function(e){return F(e)?V(e):C(e,{})},getterFor:function(e){return function(r){var n;if(!m(r)||(n=V(r)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ee=n((function(e){var r=Z.get,n=Z.enforce,t=String(String).split("String");(e.exports=function(e,r,i,a){var c=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,s=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof r||g(i,"name")||E(i,"name",r),n(i).source=t.join("string"==typeof r?r:"")),e!==o?(c?!s&&e[r]&&(u=!0):delete e[r],u?e[r]=i:E(e,r,i)):u?e[r]=i:D(r,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&r(this).source||_(this)}))})),re=o,ne=function(e){return"function"==typeof e?e:void 0},te=function(e,r){return arguments.length<2?ne(re[e])||ne(o[e]):re[e]&&re[e][r]||o[e]&&o[e][r]},oe=Math.ceil,ie=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?ie:oe)(e)},ce=Math.min,ue=function(e){return e>0?ce(ae(e),9007199254740991):0},se=Math.max,fe=Math.min,le=function(e){return function(r,n,t){var o,i=b(r),a=ue(i.length),c=function(e,r){var n=ae(e);return n<0?se(n+r,0):fe(n,r)}(t,a);if(e&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((e||c in i)&&i[c]===n)return e||c||0;return!e&&-1}},pe={includes:le(!0),indexOf:le(!1)}.indexOf,de=function(e,r){var n,t=b(e),o=0,i=[];for(n in t)!g(q,n)&&g(t,n)&&i.push(n);for(;r.length>o;)g(t,n=r[o++])&&(~pe(i,n)||i.push(n));return i},we=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ve=we.concat("length","prototype"),be={f:Object.getOwnPropertyNames||function(e){return de(e,ve)}},me={f:Object.getOwnPropertySymbols},he=te("Reflect","ownKeys")||function(e){var r=be.f(M(e)),n=me.f;return n?r.concat(n(e)):r},ye=function(e,r){for(var n=he(r),t=B.f,o=x.f,i=0;i<n.length;i++){var a=n[i];g(e,a)||t(e,a,o(r,a))}},ge=/#|\.prototype\./,Se=function(e,r){var n=ke[Oe(e)];return n==Te||n!=Ae&&("function"==typeof r?i(r):!!r)},Oe=Se.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},ke=Se.data={},Ae=Se.NATIVE="N",Te=Se.POLYFILL="P",xe=Se,Me=x.f,je=function(e,r){var n,t,i,a,c,u=e.target,s=e.global,f=e.stat;if(n=s?o:f?o[u]||D(u,{}):(o[u]||{}).prototype)for(t in r){if(a=r[t],i=e.noTargetGet?(c=Me(n,t))&&c.value:n[t],!xe(s?t:u+(f?".":"#")+t,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;ye(a,i)}(e.sham||i&&i.sham)&&E(a,"sham",!0),ee(n,t,a,e)}};je({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperty:B.f});n((function(e){var r=re.Object,n=e.exports=function(e,n,t){return r.defineProperty(e,n,t)};r.defineProperty.sham&&(n.sham=!0)}));var Be,Ee=function(e,r,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===r)return e;switch(n){case 0:return function(){return e.call(r)};case 1:return function(n){return e.call(r,n)};case 2:return function(n,t){return e.call(r,n,t)};case 3:return function(n,t,o){return e.call(r,n,t,o)}}return function(){return e.apply(r,arguments)}},De=Array.isArray||function(e){return"Array"==p(e)},Ke=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),Pe=Ke&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ce=N("wks"),Ve=o.Symbol,Fe=Pe?Ve:Ve&&Ve.withoutSetter||L,_e=function(e){return g(Ce,e)||(Ke&&g(Ve,e)?Ce[e]=Ve[e]:Ce[e]=Fe("Symbol."+e)),Ce[e]},Ie=_e("species"),We=function(e,r){var n;return De(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!De(n.prototype)?m(n)&&null===(n=n[Ie])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)},Ne=[].push,Ue=function(e){var r=1==e,n=2==e,t=3==e,o=4==e,i=6==e,a=5==e||i;return function(c,u,s,f){for(var l,p,d=Object(v(c)),b=w(d),m=Ee(u,s,3),h=ue(b.length),y=0,g=f||We,S=r?g(c,h):n?g(c,0):void 0;h>y;y++)if((a||y in b)&&(p=m(l=b[y],y,d),e))if(r)S[y]=p;else if(p)switch(e){case 3:return!0;case 5:return l;case 6:return y;case 2:Ne.call(S,l)}else if(o)return!1;return i?-1:t||o?o:S}},ze={forEach:Ue(0),map:Ue(1),filter:Ue(2),some:Ue(3),every:Ue(4),find:Ue(5),findIndex:Ue(6)},Le=Object.keys||function(e){return de(e,we)},He=a?Object.defineProperties:function(e,r){M(e);for(var n,t=Le(r),o=t.length,i=0;o>i;)B.f(e,n=t[i++],r[n]);return e},Re=te("document","documentElement"),qe=R("IE_PROTO"),Ge=function(){},Xe=function(e){return"<script>"+e+"<\/script>"},Ye=function(){try{Be=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,r;Ye=Be?function(e){e.write(Xe("")),e.close();var r=e.parentWindow.Object;return e=null,r}(Be):((r=k("iframe")).style.display="none",Re.appendChild(r),r.src=String("javascript:"),(e=r.contentWindow.document).open(),e.write(Xe("document.F=Object")),e.close(),e.F);for(var n=we.length;n--;)delete Ye.prototype[we[n]];return Ye()};q[qe]=!0;var $e=Object.create||function(e,r){var n;return null!==e?(Ge.prototype=M(e),n=new Ge,Ge.prototype=null,n[qe]=e):n=Ye(),void 0===r?n:He(n,r)},Je=_e("unscopables"),Qe=Array.prototype;null==Qe[Je]&&B.f(Qe,Je,{configurable:!0,value:$e(null)});var Ze,er=Object.defineProperty,rr={},nr=function(e){throw e},tr=ze.find,or=!0,ir=function(e,r){if(g(rr,e))return rr[e];r||(r={});var n=[][e],t=!!g(r,"ACCESSORS")&&r.ACCESSORS,o=g(r,0)?r[0]:nr,c=g(r,1)?r[1]:void 0;return rr[e]=!!n&&!i((function(){if(t&&!a)return!0;var e={length:-1};t?er(e,1,{enumerable:!0,get:nr}):e[1]=1,n.call(e,o,c)}))}("find");"find"in[]&&Array(1).find((function(){or=!1})),je({target:"Array",proto:!0,forced:or||!ir},{find:function(e){return tr(this,e,arguments.length>1?arguments[1]:void 0)}}),Ze="find",Qe[Je][Ze]=!0;var ar,cr,ur,sr,fr,lr,pr=Function.call,dr=(ar="find",Ee(pr,o["Array"].prototype[ar],cr),function(){return(dr=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)});function wr(e,r,n,t){return new(n||(n=Promise))((function(o,i){function a(e){try{u(t.next(e))}catch(e){i(e)}}function c(e){try{u(t.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(r){r(e.value)})).then(a,c)}u((t=t.apply(e,r||[])).next())}))}function vr(e,r){var n,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(e,a)}catch(e){i=[6,e],t=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function br(r){return/KAKAOTALK/.test(r)?e.App.KakaoTalk:/KAKAOSTORY/.test(r)?e.App.KakaoStory:/DaumApps/.test(r)?e.App.Daum:/NAVER/.test(r)?e.App.Naver:/(FBIOS|FB_IAB)/.test(r)?e.App.Facebook:/Twitter/.test(r)?e.App.Twitter:/BAND/.test(r)?e.App.Band:/KAKAOCHANNEL/.test(r)?e.App.KakaoStoryChannel:e.App.Unknown}(ur=e.App||(e.App={})).Unknown="Unknown",ur.KakaoTalk="KakaoTalk",ur.KakaoStory="KakaoStory",ur.KakaoStoryChannel="KakaoStoryChannel",ur.Facebook="Facebook",ur.Daum="Daum",ur.Naver="Naver",ur.Twitter="Twitter",ur.Band="Band",(sr=e.Browser||(e.Browser={})).Unknown="Unknown",sr.InternetExplorer="InternetExplorer",sr.Edge="Edge",sr.Chrome="Chrome",sr.FireFox="FireFox",sr.Safari="Safari",sr.Opera="Opera",sr.SamsungBrowser="SamsungBrowser",sr.Whale="Whale",(fr=e.DeviceType||(e.DeviceType={})).Mobile="Mobile",fr.Tablet="Tablet",fr.Desktop="Desktop",(lr=e.OS||(e.OS={})).Unknown="Unknown",lr.iOS="iOS",lr.Android="Android",lr.Windows="Windows",lr.Mac="Mac";var mr=[{browser:e.Browser.Opera,matcher:/Opera|OPR/,versionMatchers:[/(?:Opera[/ ]?|OPR\/)([\d.]+)/]},{browser:e.Browser.InternetExplorer,matcher:/MSIE|Trident|iemobile/i,versionMatchers:[/iemobile[ /]?([\d.]*)/i,/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/,/MSIE (\d+[.]\d+)/]},{browser:e.Browser.Edge,matcher:/edge|edg/i,versionMatchers:[/edge\/(\d+[.]\d+)/i,/edg\/([\d.]+)/i]},{browser:e.Browser.FireFox,matcher:/firefox/i,versionMatchers:[/firefox\/(\d+[.]\d+)/i]},{browser:e.Browser.SamsungBrowser,matcher:/SamsungBrowser/i,versionMatchers:[/SamsungBrowser\/([\d.]+)/]},{browser:e.Browser.Whale,matcher:/Whale/i,versionMatchers:[/Whale\/([\d.]+)/]},{browser:e.Browser.Chrome,matcher:/chrome|CriOS/i,versionMatchers:[/Chrome\/([\d.]+)/,/CriOS\/([\d.]+)/]},{browser:e.Browser.Unknown,matcher:/android/i,versionMatchers:[]},{browser:e.Browser.Safari,matcher:/safari/i,versionMatchers:[]}];var hr=[{os:e.OS.Unknown,matcher:/iemobile/i,versionMatchers:[]},{os:e.OS.Android,matcher:/android/i,versionMatchers:[/android (\d+(?:\.\d+){0,2})/i]},{os:e.OS.iOS,matcher:/(iphone|ipad|ipod)/i,versionMatchers:[/(\d+_\d+)/i]},{os:e.OS.Mac,matcher:/Mac OS/i,versionMatchers:[/Mac OS X (\d+[_.]\d+)/]},{os:e.OS.Windows,matcher:/Windows NT/i,versionMatchers:[/Windows NT (\d+.\d+)/]}];var yr={isMobile:!1,isTablet:!1,isDesktop:!1};function gr(r){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n=r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(n.substr(0,4))?dr(dr({},yr),{deviceType:e.DeviceType.Mobile,isMobile:!0}):function(e){var r=/^(?=.*android)(?!.*mobile).*/i.test(e),n=/ipad/i.test(e),t="object"==typeof document&&!!document&&"ontouchend"in document&&/(macintosh)/i.test(e);return r||n||t}(r)?dr(dr({},yr),{deviceType:e.DeviceType.Tablet,isTablet:!0}):dr(dr({},yr),{deviceType:e.DeviceType.Desktop,isDesktop:!0});var n}function Sr(r){var n=r.app,t=r.browser,o=r.os;return{isIE:t===e.Browser.InternetExplorer,isIOS:o===e.OS.iOS,isAndroid:o===e.OS.Android,isKakaoTalk:n===e.App.KakaoTalk,isMac:o===e.OS.Mac,isWindows:o===e.OS.Windows}}function Or(e){if(void 0!==e)return e;if("undefined"==typeof window)throw new Error("window 객체가 없는 환경에서는 userAgent 문자열을 인자로 전달해야 합니다.");return window.navigator.userAgent||window.navigator.vendor||window.opera||""}function kr(r,n){var t=function(r){switch(r){case e.OS.Android:return/KAKAOTALK (\d+)/;case e.OS.iOS:return/KAKAOTALK (\d+\.\d+\.\d+)/;default:return null}}(n);if(t){var o=(r.match(t)||[])[1];return n===e.OS.Android?function(e){if(null!=e){var r=/^\d{2}(\d{2})(\d{1})(\d{1})\d$/.exec(e)||[],n=r[1],t=r[2],o=r[3];if(void 0!==n)return Number(n)+"."+Number(t)+"."+Number(o)}}(o):o}}var Ar=["platform","platformVersion","architecture","model","uaFullVersion","fullVersionList","bitness"],Tr=[e.Browser.Unknown,e.Browser.InternetExplorer,e.Browser.Edge,e.Browser.Chrome,e.Browser.FireFox,e.Browser.Safari,e.Browser.Opera,e.Browser.SamsungBrowser,e.Browser.Whale],xr=[e.OS.Unknown,e.OS.iOS,e.OS.Android,e.OS.Windows,e.OS.Mac];function Mr(){return window.navigator.userAgentData}function jr(){return"undefined"!=typeof window&&void 0!==Mr()}function Br(){return wr(this,void 0,void 0,(function(){var e,r,n,t,o;return vr(this,(function(i){switch(i.label){case 0:return e=Mr(),r=e.brands,n=e.mobile,t=e.platform,[4,Mr().getHighEntropyValues(Ar)];case 1:return o=i.sent(),[2,{brands:r,mobile:n,platform:t,uaDataValues:o}]}}))}))}function Er(e,r){var n=e.map((function(e){return e.toLowerCase()}));return function(t){void 0===t&&(t="");var o=t.toLowerCase(),i=n.findIndex((function(e){return o.includes(e)}));return-1!==i?e[i]:r}}function Dr(r){var n,t=r.userAgent,o=r.clientHints,i=o.mobile,a=o.uaDataValues,c=Or(t),u=br(c),s=function(r){var n,t=r.brands,o=(null===(n=r.uaDataValues)||void 0===n?void 0:n.fullVersionList)||t||[],i=Er(Tr,e.Browser.Unknown),a=o.map((function(e){var r=e.brand,n=e.version;return{browser:i(r),browserVersion:n}})).filter((function(r){return r.browser!==e.Browser.Unknown}))[0];return void 0===a?{browser:e.Browser.Unknown}:a}(o),f=s.browser,l=s.browserVersion,p=function(r){var n=r.platform;return Er(xr,e.OS.Unknown)(n)}(o),d=null===(n=a)||void 0===n?void 0:n.platformVersion.replace(/_/g,"."),w=i?e.DeviceType.Mobile:e.DeviceType.Desktop,v=kr(c,p);return dr({app:u,kakaoTalkVersion:v,browser:f,browserVersion:l,os:p,osVersion:d,deviceType:w,isMobile:i,isTablet:!1,isDesktop:!i},Sr({app:u,browser:f,os:p}))}e.getAgent=function(r){void 0===r&&(r={});var n=Or(r.userAgent),t=br(n),o=function(r){var n=mr.find((function(e){return e.matcher.test(r)}));if(!n)return{browser:e.Browser.Unknown};var t=n.browser,o=n.versionMatchers.find((function(e){return e.test(r)}));return o?{browser:t,browserVersion:o.exec(r)[1]}:{browser:t}}(n),i=o.browser,a=o.browserVersion,c=function(r){var n=hr.find((function(e){return e.matcher.test(r)}));if(!n)return{os:e.OS.Unknown};var t=n.os,o=n.versionMatchers.find((function(e){return e.test(r)}));return o?{os:t,osVersion:o.exec(r)[1].replace(/_/g,".")}:{os:t}}(n),u=c.os,s=c.osVersion,f=kr(n,u);return dr(dr({app:t,kakaoTalkVersion:f,browser:i,browserVersion:a,os:u,osVersion:s},gr(n)),Sr({app:t,browser:i,os:u}))},e.getClientHints=function(e){var r=this;return new Promise((function(n,t){return wr(r,void 0,void 0,(function(){var r,o;return vr(this,(function(i){switch(i.label){case 0:return jr()?[4,Br()]:[3,2];case 1:return r=i.sent(),o=Dr({userAgent:e,clientHints:r}),n(o),[3,3];case 2:t("window.navigator.userAgentData를 미지원하는 브라우저입니다."),i.label=3;case 3:return[2]}}))}))}))},e.getClientHintsSync=function(e){if(jr())return Dr({userAgent:e,clientHints:Mr()})},e.isSupportClientHints=jr,Object.defineProperty(e,"__esModule",{value:!0})}));//# sourceMappingURL=agent.js.map
