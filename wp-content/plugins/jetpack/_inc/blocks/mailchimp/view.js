(()=>{var e={39904:(e,t)=>{"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},78693:(e,t,r)=>{var n=r(11665).Symbol;e.exports=n},80740:(e,t,r)=>{var n=r(78693),o=r(49079),i=r(19170),s=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?o(e):i(e)}},89156:(e,t,r)=>{var n=r(51284),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},99324:e=>{var t="object"==typeof window&&window&&window.Object===Object&&window;e.exports=t},49079:(e,t,r)=>{var n=r(78693),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var o=s.call(e);return n&&(t?e[a]=r:delete e[a]),o}},19170:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},11665:(e,t,r)=>{var n=r(99324),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},51284:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},3257:(e,t,r)=>{var n=r(49169),o=r(22776),i=r(4186),s=Math.max,a=Math.min;e.exports=function(e,t,r){var c,u,l,p,d,f,v=0,m=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var r=c,n=u;return c=u=void 0,v=t,p=e.apply(n,r)}function h(e){var r=e-f;return void 0===f||r>=t||r<0||b&&e-v>=l}function g(){var e=o();if(h(e))return j(e);d=setTimeout(g,function(e){var r=t-(e-f);return b?a(r,l-(e-v)):r}(e))}function j(e){return d=void 0,y&&c?w(e):(c=u=void 0,p)}function x(){var e=o(),r=h(e);if(c=arguments,u=this,f=e,r){if(void 0===d)return function(e){return v=e,d=setTimeout(g,t),m?w(e):p}(f);if(b)return clearTimeout(d),d=setTimeout(g,t),w(f)}return void 0===d&&(d=setTimeout(g,t)),p}return t=i(t)||0,n(r)&&(m=!!r.leading,l=(b="maxWait"in r)?s(i(r.maxWait)||0,t):l,y="trailing"in r?!!r.trailing:y),x.cancel=function(){void 0!==d&&clearTimeout(d),v=0,c=f=u=d=void 0},x.flush=function(){return void 0===d?p:j(o())},x}},49169:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},11726:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},47614:(e,t,r)=>{var n=r(80740),o=r(11726);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},22776:(e,t,r)=>{var n=r(11665);e.exports=function(){return n.Date.now()}},4186:(e,t,r)=>{var n=r(89156),o=r(49169),i=r(47614),s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=a.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):s.test(e)?NaN:+e}},54790:(e,t,r)=>{"use strict";r.d(t,{j7:()=>o});var n=r(27723);const __=n.__,o="wp-block-jetpack-mailchimp";__("Enter your email","jetpack"),__("By clicking submit, you agree to share your email address with the site owner and Mailchimp to receive marketing, updates, and other emails from the site owner. Use the unsubscribe link in those emails to opt out at any time.","jetpack"),__("Processing…","jetpack"),__("Success! You're on the list.","jetpack"),__("Whoops! There was an error and we couldn't process your subscription. Please reload the page and try again.","jetpack")},79366:(e,t,r)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(r.p=window.Jetpack_Block_Assets_Base_Url)},98490:e=>{"use strict";e.exports=window.wp.domReady},27723:e=>{"use strict";e.exports=window.wp.i18n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{"use strict";r(79366)})(),(()=>{"use strict";var e=r(98490),t=r.n(e),n=r(39904),o=r(3257),i=r.n(o),s=r(54790);function a(e,t){const r=t.value,o="error";return t.classList.remove(o),!!n.validate(r)||(t.classList.add(o),"function"==typeof document.createElement("input").reportValidity&&e.reportValidity(),!1)}const c=(e,t)=>i()((()=>{a(e,t)}),1e3);function u(e,t){const r=e.querySelector("form"),n=e.querySelector("input[name=email]"),o=e.querySelector("."+s.j7+"_processing"),i=e.querySelector("."+s.j7+"_error"),u=e.querySelector("."+s.j7+"_success");n.addEventListener("input",c(r,n)),r.addEventListener("submit",(s=>{s.preventDefault();const l=n.value,p=[].slice.call(r.querySelectorAll("input[type=hidden].mc-submit-param")).reduce(((e,t)=>({...e,[t.name]:t.value})),{});a(r,n)&&(e.classList.add("is-processing"),n.removeEventListener("input",c(r,n)),o.classList.add("is-visible"),function(e,t,r){let n="https://public-api.wordpress.com/rest/v1.1/sites/"+encodeURIComponent(e)+"/email_follow/subscribe?email="+encodeURIComponent(t);for(const e in r)n+="&"+encodeURIComponent(e)+"="+encodeURIComponent(r[e]);return new Promise((function(e,t){const r=new XMLHttpRequest;r.open("GET",n),r.onload=function(){if(200===r.status){const t=JSON.parse(r.responseText);e(t)}else{const e=JSON.parse(r.responseText);t(e)}},r.send()}))}(t,l,p).then((e=>{o.classList.remove("is-visible"),e.error&&"member_exists"!==e.error?i.classList.add("is-visible"):u.classList.add("is-visible")}),(()=>{o.classList.remove("is-visible"),i.classList.add("is-visible")})))}))}const l=()=>{Array.from(document.querySelectorAll("."+s.j7)).forEach((e=>{if("true"===e.getAttribute("data-jetpack-block-initialized"))return;const t=e.getAttribute("data-blog-id");try{u(e,t)}catch(e){0}e.setAttribute("data-jetpack-block-initialized","true")}))};"undefined"!=typeof window&&t()(l)})()})();