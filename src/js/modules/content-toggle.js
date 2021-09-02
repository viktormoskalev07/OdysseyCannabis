function contentToggleInit(toggle) {
	window.addEventListener('load', function () {
		let toggles = toggle.querySelector('.content-btn')
		let contentDiv = toggle.querySelector('.content')
		let contentWrap = toggle.querySelector('.content-wrap')
		let contentItems = toggle.querySelector('.content-wrap').children
		let maxVisibleEls = 3

		if (contentItems.length >= maxVisibleEls) {
			toggles.classList.add('show')

			var arr = []
			for (let i = 0; i < maxVisibleEls; i++) {
				var elHeights = contentItems[i].clientHeight + 15 //15 - margin bottom for tag <p>
				arr.push(elHeights)
			}

			function contentHeight(array) {
				var sum = 0
				for (var i = 0; i < array.length; i++) {
					sum += array[i]
				}
				contentDiv.style.height = sum + 'px'
			}
			contentHeight(arr)

			toggles.addEventListener('click', () => {
				if (parseInt(contentDiv.style.height) != contentDiv.scrollHeight) {
					contentDiv.style.height = contentDiv.scrollHeight + 'px'
					contentDiv.classList.remove('closed')
					contentDiv.classList.add('opened')
					toggles.classList.remove('closed')
					toggles.classList.add('opened')
					toggles.innerHTML = 'Show Less'
				} else {
					contentHeight(arr)
					contentDiv.classList.remove('opened')
					contentDiv.classList.add('closed')
					toggles.classList.remove('opened')
					toggles.classList.add('closed')
					toggles.innerHTML = 'Show More'
				}
			})

			window.addEventListener('resize', () => {
				if (contentDiv.classList.contains('opened')) {
					contentDiv.style.height = contentWrap.scrollHeight + 15 + 'px'
					console.log(parseInt(contentDiv.style.height))
				}
			})
		} else {
			toggles.classList.remove('show')
			toggles.classList.add('hide')
			contentDiv.style.height = 'auto'

			window.addEventListener('resize', () => {
				contentHeight(arr)
				contentDiv.style.height = 'auto'
			})
		}
	})
}

if (document.querySelector('.content-toggle')) {
	const toggles = document.querySelectorAll('.content-toggle')
	toggles.forEach(toggle => {
		contentToggleInit(toggle)
	})
}
