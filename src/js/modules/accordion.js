function accordionInit(accordion) {
	window.addEventListener('load', function () {
		const items = accordion.querySelectorAll('.accordion-item')
		const openedItem = item => {
			const opened_item = accordion.querySelector('.accordion-active')
			toggle_item(item)
			if (opened_item && opened_item !== item) {
				toggle_item(opened_item)
			}
		}

		items.forEach(item => {
			const title = item.querySelector('.accordion-header')
			title.addEventListener('click', () => {
				openedItem(item)
			})

			title.addEventListener('keydown', event => {
				if (event.code === 'Enter' || event.code === 'Space') {
					event.preventDefault()
					openedItem(item)
				}
			})
		})

		const toggle_item = item => {
			const body = item.querySelector('.accordion-content')
			if (item.classList.contains('accordion-active')) {
				item.classList.remove('accordion-active')
				body.style.height = '0px'
			} else {
				body.style.height = body.scrollHeight + 'px'
				item.classList.add('accordion-active')
			}
		}
	})
}

if (document.querySelector('.accordion')) {
	const accordions = document.querySelectorAll('.accordion')
	accordions.forEach(accordion => {
		accordionInit(accordion)
	})
}
