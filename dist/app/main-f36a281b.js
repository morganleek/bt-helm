/*!
 * 
 * bonesTheme
 * 
 * @author 
 * @version 0.1.0
 * @link UNLICENSED
 * @license UNLICENSED
 * 
 * Copyright (c) 2022 
 * 
 * This software is released under the UNLICENSED License
 * https://opensource.org/licenses/UNLICENSED
 * 
 * Compiled with the help of https://wpack.io
 * A zero setup Webpack Bundler Script for WordPress
 */
(window.wpackiobonesThemeappJsonp=window.wpackiobonesThemeappJsonp||[]).push([[2],{23:function(e,t,o){"use strict";o.r(t);var l=o(6),s=o.n(l),i=o(2),n=o(7);i.a.registerPlugin(n.a),document.addEventListener("DOMContentLoaded",(function(){if(document.querySelectorAll(".menu-toggle > .hamburger, .overlay-close .wp-block-button__link").forEach((function(e){e.addEventListener("click",(function(e){var t,o=document.body.classList.toggle("toggle-navigation");null===(t=document.querySelector(".hamburger"))||void 0===t||t.classList.toggle("is-active",o)}))})),window.addEventListener("resize",a),a(),document.querySelectorAll(".wp-site-blocks select").forEach((function(e){new s.a(e,{allowEmptyOption:!0,create:!0})})),null==document.querySelector(".page-template-page-home-landing")){var e=document.querySelector("header.wp-block-template-part");if(e){i.a.timeline({scrollTrigger:{trigger:"main",start:"20px start",scrub:1,toggleClass:{targets:e,className:"show-shadow"}}})}}if(document.querySelector("main > .wp-block-post-content > *:first-child")){var t=function(e){var t=e.classList.toString(),o=t.match(/has-(.[^\s]*)-background-color/i);if(null!==o)return o[1];var l=t.match(/has-(.[^\s]*)-gradient-background/i);return null!==l?l[1]:""}(document.querySelector("main > .wp-block-post-content > *:first-child"));""!=t&&document.body.classList.add("logo-fill-background-"+t)}document.querySelectorAll(".wp-block-questions a").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o,l=e.closest(".questions"),s=parseInt(l.dataset.questionSet)+1,i=l.dataset.questionLabel,n=t.target.innerHTML;(localStorage.setItem("question-"+s+"-label",i),localStorage.setItem("question-"+s+"-answer",n),l.classList.remove("is-visible-question"),null!==l.nextSibling)?l.nextSibling.classList.add("is-visible-question"):(null===(o=document.querySelector(".questions-title"))||void 0===o||o.classList.add("is-hidden"),t.target.dataset.redirect&&(window.location=t.target.dataset.redirect))}))}))}));var a=function(){document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px"))};window.addEventListener("load",(function(){if(document.querySelector("body.page-home"))if(localStorage.getItem("helm-splash-loaded")){var e;null===(e=document.querySelector(".wp-site-blocks"))||void 0===e||e.classList.add("is-visible")}else{var t;if(document.querySelector(".wp-block-template-part.overlay-splash"))document.querySelector(".wp-block-template-part.overlay-splash").classList.add("is-visible"),setTimeout((function(){var e;null===(e=document.querySelector(".wp-site-blocks"))||void 0===e||e.classList.add("is-visible")}),500),setTimeout((function(){document.querySelector(".wp-block-template-part.overlay-splash").classList.remove("is-visible")}),4e3);else null===(t=document.querySelector(".wp-site-blocks"))||void 0===t||t.classList.add("is-visible");localStorage.setItem("helm-splash-loaded",!0)}}))},8:function(e,t,o){o(1),e.exports=o(23)}},[[8,0,3]]]);
//# sourceMappingURL=main-f36a281b.js.map