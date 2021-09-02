"use strict"
const body = document.querySelector('body');
const html = document.querySelector('html');
const header = document.querySelector('.header');
const navBtn = document.querySelector('.menu-icon');

window.onload = function(){
	pagescroll();
};

@@include('lazyscripts.js');
@@include('modules/nav.js');
@@include('modules/fixed-header.js');
@@include('modules/popup.js');
@@include('modules/accordion.js');
@@include('modules/fetch-inst.js');
@@include('modules/share.js');
@@include('modules/content-toggle.js');

function hidescroll() {
	body.style.paddingRight = window.innerWidth - html.offsetWidth + 'px';
	body.style.overflow = 'hidden';
}

function showscroll() {
	body.style.paddingRight = 0;
	body.style.overflow = 'visible';
}

//preloader
if (document.querySelector('.preloader')) {

	function hidescroll() {
		body.style.paddingRight = window.innerWidth - html.offsetWidth + 'px';
		body.style.overflow = 'hidden';
	}

	function showscroll() {
		body.style.paddingRight = 0;
		body.style.overflow = 'visible';
	}

	const loader = document.querySelector('.preloader');
	loader.style.top = document.querySelector('.header').clientHeight + 'px';
	hidescroll();

	window.onload = function () {
		document.body.classList.add('loaded_hiding');
		showscroll();
		window.setTimeout(function () {
			document.body.classList.add('loaded');
			document.body.classList.remove('loaded_hiding');
		}, 300);
	};
	setTimeout(function() {
		document.body.classList.remove('loaded_hiding');
	}, 5000)
}
//preloader

