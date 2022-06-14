let number = document.querySelector('.header__top__right-menu__cart-wrapper__number')
number.innerText = 0

window.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-cart')) {
    const cart = e.target.closest('.product-cards__product-card');
    const productCount = parseInt(cart.querySelector('[data-counter]').innerText);
    
    number.innerText = parseInt(number.innerText) + productCount;
    
    number.classList.add('header__top__right-menu__cart-wrapper__number--visible');
  }
})