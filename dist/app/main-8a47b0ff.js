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
(window.wpackiobonesThemeappJsonp=window.wpackiobonesThemeappJsonp||[]).push([[2],{23:function(t,e,o){"use strict";o.r(e);var n=o(7),c=o.n(n),a=o(2),r=o(3);a.a.registerPlugin(r.a),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".menu-toggle > *").forEach((function(t){t.addEventListener("click",(function(t){var e,o=document.body.classList.toggle("toggle-navigation");null===(e=document.querySelector(".hamburger"))||void 0===e||e.classList.toggle("is-active",o)}))})),document.querySelectorAll(".wp-site-blocks select").forEach((function(t){new c.a(t,{allowEmptyOption:!0,create:!0})})),r.a.matchMedia({"(min-width: 768px)":function(){document.querySelectorAll(".wp-block-post-content > .has-background").forEach((function(t){var e=t.classList.toString().match(/has-(.[^\s]*)-background-color/i),o="";null!==e&&(o=e[1]),a.a.timeline({scrollTrigger:{trigger:t,start:"start start+=1",end:"bottom-=75 start",scrub:1,toggleClass:{targets:document.body,className:"logo-fill-background-"+o}}})}))}})}))},8:function(t,e,o){o(1),t.exports=o(23)}},[[8,0,3]]]);
//# sourceMappingURL=main-8a47b0ff.js.map