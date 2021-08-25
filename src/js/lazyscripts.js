function addScript(path, stimeout) {
	if (localStorage.getItem(path)) {
		stimeout = 1
	}

	const someJs = document.createElement('script')
	someJs.async = true
	someJs.src = path
	setTimeout(() => {
		body.appendChild(someJs)
		localStorage.setItem(path, true)
	}, stimeout)
	return someJs
}

window.addEventListener('load', function () {
	const mediaQuery2 = window.matchMedia('(max-width: 480px)').matches
	let swiperLoadingDelay = 1
	const swipDelay = document.querySelector('.swiper-delay_js')
	if (swipDelay) {
		const addtime = parseInt(swipDelay.dataset.time)
		if (addtime > 0) {
			swiperLoadingDelay = 1 + addtime / 5
			if (mediaQuery2) {
				swiperLoadingDelay = addtime
			}
			addScript(templateUrl + '/js/swiper-min.js', swiperLoadingDelay).addEventListener('load', () => {
				addScript(templateUrl + '/js/slider-init.js', 1)
			})
			//swiper loading only if swiper delay datatime > 0
		}
	}
})
