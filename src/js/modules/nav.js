function closenav() {
	header.classList.remove('nav-open')
	navBtn.style.marginRight = '0'
	body.classList.remove('no-scroll')
}

function togglenav() {
	header.classList.toggle('nav-open')
	if (header.classList.contains('nav-open')) {
		navBtn.style.marginRight = window.innerWidth - html.offsetWidth + 'px'
		body.classList.add('no-scroll')
	} else {
		body.classList.remove('no-scroll')
		navBtn.style.marginRight = '0'
	}
}
navBtn.addEventListener('click', togglenav)
const links = header.querySelectorAll('a')
links.forEach(link => {
	link.addEventListener('click', closenav)
})
