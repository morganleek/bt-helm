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
(window.wpackiobonesThemeappJsonp=window.wpackiobonesThemeappJsonp||[]).push([[2],{23:function(e,t,o){"use strict";o.r(t);var s=o(6),l=o.n(s),i=o(2),a=o(7);i.a.registerPlugin(a.a),document.addEventListener("DOMContentLoaded",(function(){if(document.querySelectorAll(".menu-toggle > .hamburger, .overlay-close .wp-block-button__link").forEach((function(e){e.addEventListener("click",(function(e){var t,o=document.body.classList.toggle("toggle-navigation");null===(t=document.querySelector(".hamburger"))||void 0===t||t.classList.toggle("is-active",o)}))})),window.addEventListener("resize",n),n(),document.querySelectorAll(".wp-site-blocks select").forEach((function(e){new l.a(e,{allowEmptyOption:!0,create:!0})})),null==document.querySelector(".page-template-page-home-landing")){var e=document.querySelector("header.wp-block-template-part");if(e){var t=e.offsetHeight-1;i.a.timeline({scrollTrigger:{trigger:"main",start:"start "+t+"px",scrub:1,toggleClass:{targets:e,className:"show-shadow"}}})}}document.querySelectorAll(".wp-block-questions a").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o,s=e.closest(".questions"),l=parseInt(s.dataset.questionSet)+1,i=s.dataset.questionLabel,a=t.target.innerHTML;(localStorage.setItem("question-"+l+"-label",i),localStorage.setItem("question-"+l+"-answer",a),s.classList.remove("is-visible-question"),null!==s.nextSibling)?s.nextSibling.classList.add("is-visible-question"):(null===(o=document.querySelector(".questions-title"))||void 0===o||o.classList.add("is-hidden"),t.target.dataset.redirect&&(window.location=t.target.dataset.redirect))}))}))}));var n=function(){document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px"))};window.addEventListener("load",(function(){if(document.querySelector("body.page-home"))if(localStorage.getItem("helm-splash-loaded")){var e;null===(e=document.querySelector(".wp-site-blocks"))||void 0===e||e.classList.add("is-visible")}else{var t;if(document.querySelector(".wp-block-template-part.overlay-splash"))document.querySelector(".wp-block-template-part.overlay-splash").classList.add("is-visible"),setTimeout((function(){var e;null===(e=document.querySelector(".wp-site-blocks"))||void 0===e||e.classList.add("is-visible")}),500),setTimeout((function(){document.querySelector(".wp-block-template-part.overlay-splash").classList.remove("is-visible")}),4e3);else null===(t=document.querySelector(".wp-site-blocks"))||void 0===t||t.classList.add("is-visible");localStorage.setItem("helm-splash-loaded",!0)}}))},8:function(e,t,o){o(1),e.exports=o(23)}},[[8,0,3]]]);
//# sourceMappingURL=main-94664341.js.map