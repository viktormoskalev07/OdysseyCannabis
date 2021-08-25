// Появление меню при прокрутке
function pagescroll() {
	let pscroll = 0
	window.addEventListener('scroll', function () {
		if ((pscroll < pageYOffset) & (pageYOffset > header.offsetHeight)) {
			header.style.transform = 'translateY(-100%)' //прячем хедер при прокрутке вниз
		} else {
			header.style.transform = 'none' //показываем хедер при прокрутке вверх
		}
		pscroll = pageYOffset
	})
}

//Появление меню при прокрутке
