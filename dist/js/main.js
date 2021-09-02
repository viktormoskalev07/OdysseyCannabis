"use strict";var body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector(".header"),navBtn=document.querySelector(".menu-icon");function addScript(e,t){localStorage.getItem(e)&&(t=1);var n=document.createElement("script");return n.async=!0,n.src=e,setTimeout((function(){body.appendChild(n),localStorage.setItem(e,!0)}),t),n}function closenav(){header.classList.remove("nav-open"),navBtn.style.marginRight="0",body.classList.remove("no-scroll")}function togglenav(){header.classList.toggle("nav-open"),header.classList.contains("nav-open")?(navBtn.style.marginRight=window.innerWidth-html.offsetWidth+"px",body.classList.add("no-scroll")):(body.classList.remove("no-scroll"),navBtn.style.marginRight="0")}window.onload=function(){pagescroll()},window.addEventListener("load",(function(){var e=window.matchMedia("(max-width: 480px)").matches,t=1,n=document.querySelector(".swiper-delay_js");if(n){var o=parseInt(n.dataset.time);o>0&&(t=1+o/5,e&&(t=o),addScript(templateUrl+"js/swiper-min.js",t).addEventListener("load",(function(){addScript(templateUrl+"js/slider-init.js",1)})))}})),navBtn.addEventListener("click",togglenav);var links=header.querySelectorAll("a");function pagescroll(){var e=0;window.addEventListener("scroll",(function(){e<pageYOffset&pageYOffset>header.offsetHeight?header.style.transform="translateY(-100%)":header.style.transform="none",e=pageYOffset}))}links.forEach((function(e){e.addEventListener("click",closenav)}));var popupAge=document.querySelector("#age-verification"),popupAgeText=document.querySelector(".popup-text"),popupBtnGroup=document.querySelector(".btn-group"),popupBtnYes=document.querySelector("[data-yes]"),popupBtnNo=document.querySelector("[data-no]");function closePopupAge(){localStorage.setItem("age","true"),popupAge.style.display="none",document.body.classList.remove("no-scroll")}function noPopupAge(){popupAgeText.innerHTML="Sorry, come back when you're 19.",popupBtnGroup.innerHTML=""}function accordionInit(e){window.addEventListener("load",(function(){var t=e.querySelectorAll(".accordion-item"),n=function(t){var n=e.querySelector(".accordion-active");o(t),n&&n!==t&&o(n)};t.forEach((function(e){var t=e.querySelector(".accordion-header");t.addEventListener("click",(function(){n(e)})),t.addEventListener("keydown",(function(t){"Enter"!==t.code&&"Space"!==t.code||(t.preventDefault(),n(e))}))}));var o=function(e){var t=e.querySelector(".accordion-content"),n=e.querySelector(".accordion-text");e.classList.contains("accordion-active")?(e.classList.remove("accordion-active"),t.style.height="0px",window.addEventListener("resize",(function(){t.style.height="0px"}))):(t.style.height=t.scrollHeight+"px",e.classList.add("accordion-active"),window.addEventListener("resize",(function(){n.style.height>t.style.height?t.style.height=t.scrollHeight+"px":t.style.height=n.scrollHeight+"px"})))}}))}if(localStorage.getItem("age")?document.body.classList.remove("no-scroll"):(document.body.classList.add("no-scroll"),popupAge.style.display="flex"),popupBtnYes.addEventListener("click",closePopupAge),popupBtnNo.addEventListener("click",noPopupAge),document.querySelector(".accordion")){var accordions=document.querySelectorAll(".accordion");accordions.forEach((function(e){accordionInit(e)}))}function instagramIntegration(){new XMLHttpRequest;var e=document.querySelector("#instagam-cont"),t=document.querySelectorAll(".instagram-name"),n=document.querySelectorAll(".instagram-image img"),o=document.querySelector(".instagram-account");if(e){var i=e.getAttribute("data-instagram-post");fetch(i).then((function(e){return e.json()})).catch((function(e){console.log("insta error, wrong token www.curator.io")})).then((function(e){if(console.log(e),e){var i=e.posts;o.innerHTML="#"+i[0].user_full_name;for(var r=0;r<4;r++)try{var c=i[r];t[r].innerHTML="@"+c.user_full_name,n[r].src=c.image}catch(e){console.log(e)}}}))}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",instagramIntegration()):instagramIntegration();var Shares={title:"share",width:320,height:500,init:function(){for(var e=document.querySelectorAll("#social-info"),t=0,n=e.length;t<n;t++)for(var o=e[t].getAttribute("data-url")||location.href,i=e[t].getAttribute("data-title")||"",r=e[t].getAttribute("data-desc")||"",c=e[t].querySelectorAll(".push"),s=0,d=c.length;s<d;s++){var a=c[s].getAttribute("data-id");a&&this.addEventListener(c[s],"click",{id:a,url:o,title:i,desc:r})}},addEventListener:function(e,t,n){var o=this,i=function(){o.share(n.id,n.url,n.title,n.desc)};e.addEventListener?e.addEventListener(t,i):e.attachEvent("on"+t,(function(){i.call(e)}))},share:function(e,t,n,o){switch(t=encodeURIComponent(t),o=encodeURIComponent(o),n=encodeURIComponent(n),e){case"fb":this.popupCenter("https://www.facebook.com/sharer.php?t="+t,this.title,this.width,this.height);break;case"tw":var i=n||o||"";n.length>0&&o.length>0&&(i=n+" - "+o),i.length>0&&(i="&text="+i),this.popupCenter("https://twitter.com/intent/tweet?url="+t+i,this.title,this.width,this.height);break;case"medi":this.popupCenter("https://medium.com/p/import?rel=",this.title,this.width,this.height)}},newTab:function(e){window.open(e,"_blank").focus()},popupCenter:function(e,t,n,o){var i=void 0!==window.screenLeft?window.screenLeft:screen.left,r=void 0!==window.screenTop?window.screenTop:screen.top,c=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-n/2+i,s=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/3-o/3+r,d=window.open(e,t,"scrollbars=yes, width="+n+", height="+o+", top="+s+", left="+c);window.focus&&d.focus()}};function forLoad(){for(var e=document.getElementById("social-info"),t=document.querySelectorAll(".push-share"),n=0;n<t.length;n++)t[n].addEventListener("click",(function(){var t=this.getAttribute("data-id");if(t){var n=e.dataset.url||location.href,o=e.dataset.title||"",i=e.dataset.desc||"";Shares.share(t,n,o,i)}}))}function contentToggleInit(e){window.addEventListener("load",(function(){var t=e.querySelector(".content-btn"),n=e.querySelector(".content"),o=e.querySelector(".content-wrap"),i=e.querySelector(".content-wrap").children;if(i.length>=3){var r=function(e){for(var t=0,o=0;o<e.length;o++)t+=e[o];n.style.height=t+"px"};t.classList.add("show");for(var c=[],s=0;s<3;s++){var d=i[s].clientHeight+15;c.push(d)}r(c),t.addEventListener("click",(function(){parseInt(n.style.height)!=n.scrollHeight?(n.style.height=n.scrollHeight+"px",n.classList.remove("closed"),n.classList.add("opened"),t.classList.remove("closed"),t.classList.add("opened"),t.innerHTML="Show Less"):(r(c),n.classList.remove("opened"),n.classList.add("closed"),t.classList.remove("opened"),t.classList.add("closed"),t.innerHTML="Show More")})),window.addEventListener("resize",(function(){n.classList.contains("opened")&&(n.style.height=o.scrollHeight+15+"px")}))}else t.classList.remove("show"),t.classList.add("hide"),n.style.height="auto",window.addEventListener("resize",(function(){contentHeight(c),n.style.height="auto"}))}))}if(window.addEventListener("load",forLoad),document.querySelector(".content-toggle")){var toggles=document.querySelectorAll(".content-toggle");toggles.forEach((function(e){contentToggleInit(e)}))}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}if(document.querySelector(".preloader")){var _hidescroll=function(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"},_showscroll=function(){body.style.paddingRight=0,body.style.overflow="visible"},loader=document.querySelector(".preloader");loader.style.top=document.querySelector(".header").clientHeight+"px",_hidescroll(),window.onload=function(){document.body.classList.add("loaded_hiding"),_showscroll(),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),300)},setTimeout((function(){document.body.classList.remove("loaded_hiding")}),5e3)}