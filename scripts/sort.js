import products from '../data/data.js';

const button = document.querySelector('.filters__selects__right-filter__dropdown')

  const dropdown = document.querySelector(
    ".filters__selects__right-filter__list"
  );

  button.addEventListener("click", () => {
    dropdown.classList.toggle("filters__selects__right-filter__list--visible");
  });

const list = dropdown.querySelectorAll(
  ".filters__selects__right-filter__list__item"
);

list.forEach((item) => {
  item.addEventListener('click', (e)=> {
    console.log(e.target.value)
  })
})
  //закрытие по клику снаружи
  document.addEventListener('click', (e) => {
    if (e.target !== document.querySelector(
      ".filters__selects__right-filter__dropdown"
    )) {
      dropdown.classList.remove("filters__selects__right-filter__list--visible");
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.tab === 'Tab') {
      dropdown.classList.remove("filters__selects__right-filter__list--visible");
    }
  })
