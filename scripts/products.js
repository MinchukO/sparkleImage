'use strict'

import products from '../data/data.js';

let wrapperProduct = document.querySelector('.product-cards')
const pagination = document.querySelector('.pagination')

const items_on_page = 6;
let current_page = 1
const max_pagination = 5

//выводит список
function showList(items, wrapper, items_on_page, page_number) {
  wrapper.innerHTML = '';

  //let page_number = +item.innerHTML;
  let start = (page_number - 1) * items_on_page
  let end = start + items_on_page

  let products_on_one_page = items.slice(start, end)

  products_on_one_page.map((product, i) => {
   const productsHtml = `
    <div class="product-cards__product-card product-card" data-id="${product.id}" data-index="${product.index}">
      <img src="${product.img}" alt="" class="product-cards__product-card__img">
        <h3 class="product-cards__product-card__title">
          <a href="/sparkleImage/details.html">${product.title}</a>
            </h3>
        <div class="product-cards__product-card__count">
          <div class="product-cards__product-card__count__items-control" data-action="minus">-</div>
          <div class="product-cards__product-card__count__items-current" data-counter>1</div>
          <div class="product-cards__product-card__count__items-control" data-action="plus">+</div>
        </div>
        <div class="product-cards__product-card__bottom">
          <div class="product-cards__product-card__bottom__price">
            <p class="product-cards__product-card__bottom__price__label">&#8364;${product.price}</p>
            <p class="product-cards__product-card__bottom__price__value">${product.oldPrice}</p>
          </div>
          <div class="product-cards__product-card__bottom__buttons">
            <button
              type="button"
              class="product-cards__product-card__bottom__buttons__link product-cards__product-card__bottom__buttons__link--heart"
              href="#" data-qa="heart">
            </button>
            <button type="button"
              class="product-cards__product-card__bottom__buttons__link product-cards__product-card__bottom__buttons__link--cart"
              href="#"
              data-cart>
            </button>
          </div>
        </div>
          </div>
  `;
    wrapperProduct.insertAdjacentHTML('beforeend', productsHtml)
  })
}

//динамический подсчёт страниц в зависимости от кол-а товара
function setUpPagination(products, wrapper, items_on_page) {

  const count_of_pages = Math.ceil(products.length / items_on_page)
 
  let maxLeft = current_page - Math.floor(max_pagination / 2);
  let maxRight = current_page + Math.floor(max_pagination / 2);

  console.log(maxLeft, maxRight)

  if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = max_pagination;
  }

  if (maxRight > count_of_pages) {
    maxLeft = count_of_pages - (max_pagination - 1);
    maxRight = count_of_pages;

    if (maxLeft < 1) {
      maxLeft = 1;
    }
  }
  console.log(maxLeft, maxRight)
  console.log(count_of_pages, max_pagination)

  for (let btn = maxLeft; btn <= maxRight; btn++) {
    wrapper.append(paginationButton(btn, products))
  }
  if (count_of_pages > 1) {
    let li = document.createElement('li')
    li.innerHTML = `
      <li class="pagination__item pagination__item--arrowR"></li>
      `
    wrapper.append(li)
  }
}

function paginationButton(page, items) {

  let li = document.createElement('li')
  li.classList.add('pagination__item')
  li.innerHTML = ''
  if (page === current_page) {
    li.classList.add('pagination__item--active')
  }

  li.innerHTML = page
 
  
  li.addEventListener('click', () => {
    current_page = page;

    if (current_page !== 1 && !pagination.hasAttribute('data-arrow')) {
      pagination.setAttribute('data-arrow', 'L')
      pagination.insertAdjacentHTML('afterbegin', `
        <li class="pagination__item pagination__item--arrowL"></li>
      `)
    } 
    if (current_page === 1) {
      let arrowL = document.querySelector('.pagination__item--arrowL')
      pagination.removeAttribute('data-arrow')
      arrowL.remove()
    }
    
    showList(items, wrapperProduct, items_on_page, current_page)


    let prev_button = document.querySelector('.pagination__item--active')
    prev_button.classList.remove('pagination__item--active')

    li.classList.add('pagination__item--active')
    })
  
  return li;
}

showList(products, wrapperProduct, items_on_page, current_page)
setUpPagination(products, pagination, items_on_page)

//на 1-й стр 0 - 6
//на 2 - й стр 6 - 12
//на 3 - й стр 12 - 18
//при клике на 1-й выдавать первых 6 товаров


//filter
document.querySelectorAll(".wrapper-select").forEach((itemWrappper) => {

  const button = itemWrappper.querySelector(
    ".select-btn"
  );

  const dropdown = itemWrappper.querySelector(
    ".filters__selects__left-filter__list"
  );
  const filterChoice = document.querySelector(".wrapper-filter-result");

  button.addEventListener("click", () => {

    dropdown.classList.toggle("filters__selects__left-filter__list--visible");
  });

  //закрытие по клику снаружи
  document.addEventListener('click', (e) => {
    if (e.target !== itemWrappper.querySelector(
      ".filters__selects__left-filter__dropdown"
    )) {
      dropdown.classList.remove("filters__selects__left-filter__list--visible");
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.tab === 'Tab') {
      dropdown.classList.remove("filters__selects__left-filter__list--visible");
    }
  })

  //add filter value in div.result
  const list = dropdown.querySelectorAll(
    ".filters__selects__left-filter__list__item"
  );

  list.forEach((item) => {
    item.addEventListener("click", function (e) {

      const arrt = e.target.getAttribute('data-value')
      console.log(arrt)
      console.log(this.innerText)
      //filter(this.innerText)
      //if (e.target.hasAttribute(arrt === this.innerText)) {
      //  return;
      //}
      filterChoice.insertAdjacentHTML(
        "beforeend",
        `
          <span class="wrapper-filter-result__item">
            ${this.innerText}
            <span class="wrapper-filter-result__item__cross"></span>
          </span>
        `
      );
      dropdown.classList.remove("filters__selects__left-filter__list--visible");

      document.querySelector(".wrapper-filter-result").addEventListener('click', (e) => {
        if (!e.target.matches(".wrapper-filter-result__item__cross")) {
          return;
        }
        e.target.closest(".wrapper-filter-result__item").remove()
      })
    });
  });

  //function filter(current_category) {
  //  const result = products.filter(item => item.brand === current_category || item.type === current_category)
  //  showList(result, wrapperProduct, items_on_page, current_page)
  //  setUpPagination(result, pagination, items_on_page)
  //}

});







