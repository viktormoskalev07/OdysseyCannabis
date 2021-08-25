const popupAge = document.querySelector('#age-verification')
const popupAgeText = document.querySelector('.popup-text')
const popupBtnGroup = document.querySelector('.btn-group')
const popupBtnYes = document.querySelector('[data-yes]')
const popupBtnNo = document.querySelector('[data-no]')

localStorage.getItem('age') ? document.body.classList.remove('no-scroll') : (document.body.classList.add('no-scroll'), (popupAge.style.display = 'flex'))


function closePopupAge() {
    localStorage.setItem('age', 'true'),
    popupAge.style.display = "none",
    document.body.classList.remove('no-scroll')
}

function noPopupAge() {
    popupAgeText.innerHTML = "Sorry, come back when you're 19.",
    popupBtnGroup.innerHTML = ""
}

popupBtnYes.addEventListener('click', closePopupAge),
popupBtnNo.addEventListener('click', noPopupAge);


