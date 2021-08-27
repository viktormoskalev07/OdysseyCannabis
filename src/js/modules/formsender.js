//отправка формы  
let form = document.querySelectorAll('.order-form');

const modal = document.getElementById("modal");

function ajaxform(evt) {
  gtag('event', 'submit', {
    'event_category': 'Form'
  });
  evt.preventDefault();
  let formstatus = this.querySelector('.formstatus');
  formstatus.innerHTML = '<class="load-form">Соедиенеие ...';

  let formData = {
    desc: this.querySelector('input[name="description"]').value,
    name: this.querySelector('input[name="name"]').value,

    phone: this.querySelector('input[name="phone"]').value

  };
  console.log(formData);
  let request = new XMLHttpRequest();

  request.addEventListener('load', function () {

    formstatus.innerHTML = 'Ваша заявка успешно отправлена, ожидайте звонка';

  }); 
  request.open('POST', '/mail.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone) + '&desc=' + encodeURIComponent(formData.desc)); 
};



for ( let i = 0; i < form.length; i++) {
  form[i].addEventListener('submit', ajaxform);
} 