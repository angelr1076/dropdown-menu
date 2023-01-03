let hamIcon = document.querySelector('.fa-bars');
let navbarEl = document.querySelector('.nav-menu');

function navbarToggle(btn, el) {
  btn.addEventListener('click', function () {
    el.classList.toggle('hidden');
  });
}

navbarToggle(hamIcon, navbarEl);
