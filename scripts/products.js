import products from '../data/data.js';

let wrapperProduct = document.querySelector('.product-cards')
const pagination = document.querySelector('.pagination')

const items_on_page = 6;
let current_page = 1

//выводит список
function showList(items, wrapper, items_on_page, page_number) {
  wrapper.innerHTML = '';

  //let page_number = +item.innerHTML;
  let start = (page_number - 1) * items_on_page
  let end = start + items_on_page

  let products_on_one_page = items.slice(start, end)

  products_on_one_page.map((product, i) => {
    const productsHtml = `
    <div class="product-cards__product-card product-card" data-id="${product.id}">
      <img src="${product.img}" alt="" class="product-cards__product-card__img">
        <h3 class="product-cards__product-card__title">
          ${product.title}
            </h3>
        <div class="product-cards__product-card__count">
          <div class="product-cards__product-card__count__items-control" data-action="minus">-</div>
          <div class="product-cards__product-card__count__items-current" data-counter>1</div>
          <div class="product-cards__product-card__count__items-control" data-action="plus">+</div>
        </div>
        <div class="product-cards__product-card__bottom">
          <div class="product-cards__product-card__bottom__price">
            <p class="product-cards__product-card__bottom__price__label">&#8364;${product.oldPrice}</p>
            <p class="product-cards__product-card__bottom__price__value">${product.price}</p>
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
  `
    wrapperProduct.insertAdjacentHTML('beforeend', productsHtml)
  })
}

//динамический подсчёт страниц в зависимости от кол-а товара
function setUpPagination(products, wrapper, items_on_page) {

  const count_of_pages = Math.ceil(products.length / items_on_page)
 
  for (let btn = 1; btn <= count_of_pages; btn++) {
    wrapper.append(paginationButton(btn, products))
  }
}

function paginationButton(page, items) {
  let li = document.createElement('li')
  li.classList.add('pagination__item')

  li.innerText = page
  if (page === current_page) {
    li.classList.add('pagination__item--active')
  }

  li.addEventListener('click', () => {
    current_page = page;

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
