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
(window.wpackiobonesThemeappJsonp=window.wpackiobonesThemeappJsonp||[]).push([[2],{23:function(e,t,o){"use strict";o.r(t);var a=o(6),l=o.n(a),n=o(2),s=o(7);n.a.registerPlugin(s.a),document.addEventListener("DOMContentLoaded",(function(){if(document.querySelectorAll('a[href*="{{params}}"]').length>0){var e=[],t=["gambling","drugs","alcohol","anger","all"],o="all";localStorage.getItem("question-2-answer")?o=t.indexOf(localStorage.getItem("question-2-answer"))>=0?localStorage.getItem("question-2-answer"):"all":t.forEach((function(e){document.body.classList.contains("page-"+e)&&(o=e)})),e.push("theme="+o);var a="initialConsultation";if(localStorage.getItem("question-1-answer")){a=["initialConsultation","supportedAdvice"].indexOf(localStorage.getItem("question-1-answer"))>=0?localStorage.getItem("question-1-answer"):"initialConsultation"}if(e.push("session="+a),document.querySelector('meta[name="sid"]')){var s,r=null===(s=document.querySelector('meta[name="sid"]'))||void 0===s?void 0:s.attributes.content.value;e.push("sid="+r)}document.querySelectorAll('a[href*="{{params}}"]').forEach((function(t){t.href=t.href.replace(/{{params}}/i,e.join("&"))}))}if(document.querySelectorAll(".menu-toggle > .hamburger, .overlay-close .wp-block-button__link").forEach((function(e){e.addEventListener("click",(function(e){var t,o=document.body.classList.toggle("toggle-navigation");null===(t=document.querySelector(".menu-toggle .hamburger"))||void 0===t||t.classList.toggle("is-active",o)}))})),window.addEventListener("resize",i),i(),document.querySelectorAll(".wp-site-blocks select").forEach((function(e){new l.a(e,{allowEmptyOption:!0,create:!0})})),null==document.querySelector(".page-template-page-home-landing")){var c=document.querySelector("header.wp-block-template-part");if(c){n.a.timeline({scrollTrigger:{trigger:"main",start:"20px start",scrub:1,toggleClass:{targets:c,className:"show-shadow"}}})}}if(document.querySelector("main > .wp-block-post-content > *:first-child")){var u=function(e){var t=e.classList.toString(),o=t.match(/has-(.[^\s]*)-background-color/i);if(null!==o)return o[1];var a=t.match(/has-(.[^\s]*)-gradient-background/i);return null!==a?a[1]:""}(document.querySelector("main > .wp-block-post-content > *:first-child"));""!=u&&document.body.classList.add("logo-fill-background-"+u)}document.querySelectorAll(".wp-block-questions a").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o,a=e.closest(".questions"),l=parseInt(a.dataset.questionSet)+1,n=a.dataset.questionLabel,s=t.target.dataset.answer;(localStorage.setItem("question-"+l+"-label",n),localStorage.setItem("question-"+l+"-answer",s),a.classList.remove("is-visible-question"),null!==a.nextSibling)?a.nextSibling.classList.add("is-visible-question"):(null===(o=document.querySelector(".questions-title"))||void 0===o||o.classList.add("is-hidden"),t.target.dataset.redirect&&(window.location=t.target.dataset.redirect))}))}))}));var i=function(){document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px"))};window.addEventListener("load",(function(){if(document.querySelector("body.page-home"))if(localStorage.getItem("helm-splash-loaded")){var e;null===(e=document.querySelector(".wp-site-blocks"))||void 0===e||e.classList.add("is-visible")}else{var t;if(document.querySelector(".wp-block-template-part.overlay-splash"))document.querySelector(".wp-block-template-part.overlay-splash").classList.add("is-visible"),setTimeout((function(){var e;null===(e=document.querySelector(".wp-site-blocks"))||void 0===e||e.classList.add("is-visible")}),500),setTimeout((function(){document.querySelector(".wp-block-template-part.overlay-splash").classList.remove("is-visible")}),4e3);else null===(t=document.querySelector(".wp-site-blocks"))||void 0===t||t.classList.add("is-visible");localStorage.setItem("helm-splash-loaded",!0)}}))},8:function(e,t,o){o(1),e.exports=o(23)}},[[8,0,3]]]);
//# sourceMappingURL=main-2fff3898.js.map