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


// Show more/less button
let toggles = document.getElementsByClassName('content-btn')
let contentDiv = document.getElementsByClassName('content')
let contentWrap = document.getElementsByClassName('content-wrap')
let contentHeight = 200

for (let i = 0; i < toggles.length; i++) {
	if (contentDiv[i].scrollHeight > 200) {
		toggles[i].classList.add('show')
	} else {
		toggles[i].classList.remove('show')
		toggles[i].classList.add('hide')

		contentDiv[i].style.height = 'auto'
	}

	toggles[i].addEventListener('click', () => {
		if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
			contentDiv[i].style.height = contentDiv[i].scrollHeight + 'px'

			toggles[i].classList.toggle('activeBtn');
		} else {
			contentDiv[i].style.height = contentHeight + 'px'

			toggles[i].classList.toggle('activeBtn');
			contentDiv[i].classList.toggle('heightActive')
		}

		for (let j = contentHeight; j < contentDiv.length; j++) {
			if (j !== i) {
				contentDiv[j].style.height = contentHeight

        		toggles[i].classList.toggle('activeBtn');
			}
		}
	})
}
// Show more/less button


