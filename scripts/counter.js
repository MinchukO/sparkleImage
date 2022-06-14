'use strict'

window.addEventListener('click', (e) => {
  let counter;
  if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
    const wrapperPlus = e.target.closest('.product-cards__product-card__count')
    counter = wrapperPlus.querySelector('[data-counter]')
  }

  if(e.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText
  }
  if (e.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText
    }
  }
})
