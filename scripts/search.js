const btn = document.querySelector(".header__top__right-menu__tablets-search");
const form = document.querySelector(".header__top__right-menu__search");

btn.addEventListener('click', (e) => {
  e.preventDefault()
  form.classList.toggle('visible')
})