const btn = document.querySelector(".header__top__right-menu__tablets-search");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector('.modal')

btn.addEventListener('click', (e) => {
  modalOverlay.classList.toggle('modal-overlay--visible')
  modal.classList.add('modal--visible')
})

modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible')
  }
})