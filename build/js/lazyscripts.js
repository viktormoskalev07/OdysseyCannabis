"use strict";function addScript(t,e){localStorage.getItem(t)&&(e=1);var a=document.createElement("script");return a.async=!0,a.src=t,setTimeout((function(){body.appendChild(a),localStorage.setItem(t,!0)}),e),a}window.addEventListener("load",(function(){var t=window.matchMedia("(max-width: 480px)").matches,e=1,a=document.querySelector(".swiper-delay_js");if(a){var i=parseInt(a.dataset.time);i>0&&(e=1+i/5,t&&(e=i),addScript(templateUrl+"/js/swiper-min.js",e).addEventListener("load",(function(){addScript(templateUrl+"/js/slider-init.js",1)})))}}));