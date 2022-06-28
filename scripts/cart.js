'use strict'

let number = document.querySelector('.header__top__right-menu__cart-wrapper__number')
number.innerText = 0
let cartWrapperHTML = document.querySelector('.cart__body')

window.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-cart')) {
    const cart = e.target.closest('.product-cards__product-card');
    const productCount = parseInt(cart.querySelector('[data-counter]').innerText);
    
    number.innerText = parseInt(number.innerText) + productCount;
    
    number.classList.add('header__top__right-menu__cart-wrapper__number--visible');

    const productInfo = {
      id: cart.dataset.id,
      img: cart.querySelector('.product-cards__product-card__img').getAttribute('src'),
      title: cart.querySelector('.product-cards__product-card__title').innerText,
      price: cart.querySelector('.product-cards__product-card__bottom__price__label').innerText,
      count: cart.querySelector('[data-counter]').innerText,
      index: cart.dataset.index,
      totalPrice: this.count,
    }
    cartWrapperHTML.insertAdjacentHTML('afterbegin', `
       <div class="cart__body__product">
          <img src="${productInfo.img}" alt="" class="cart__body__product__img">
          <div class="cart__body__product__column">
            <div class="cart__body__product__column__title">${productInfo.title}</div>
            <div class="cart__body__product__column__index">#${productInfo.index}</div>
          </div>
          <div class="cart__body__product__price">€${productInfo.price}</div>
          <input type="text" class="cart__body__product__count" value="${productInfo.count}">
          <div class="cart__body__product__total-price">€11.98</div>
          <button class="cart__body__product__btn-delete"></button>
      </div>
    `)
  }
})