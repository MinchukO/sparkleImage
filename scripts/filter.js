import products from '../data/data.js';


//document.querySelectorAll(".wrapper-select").forEach((itemWrappper) => {

//  const button = itemWrappper.querySelector(
//    ".select-btn"
//  );
 
//  const dropdown = itemWrappper.querySelector(
//    ".filters__selects__left-filter__list"
//  );
//  const filterChoice = document.querySelector(".wrapper-filter-result");
    
//  button.addEventListener("click", () => {
    
//    dropdown.classList.toggle("filters__selects__left-filter__list--visible");
//  });

//  //закрытие по клику снаружи
//  document.addEventListener('click', (e) => {
//    if (e.target !== itemWrappper.querySelector(
//    ".filters__selects__left-filter__dropdown"
//  )) {
//      dropdown.classList.remove("filters__selects__left-filter__list--visible");
//    }
//  })

//  document.addEventListener('keydown', (e) => {
//    if(e.key === 'Escape' || e.tab === 'Tab') {
//      dropdown.classList.remove("filters__selects__left-filter__list--visible");
//    }
//  })
  
//  //add filter value in div.result
//  const list = dropdown.querySelectorAll(
//    ".filters__selects__left-filter__list__item"
//  );

//  list.forEach((item) => {
//    item.addEventListener("click", function () {
      
//      filter(this.innerText)

//      filterChoice.insertAdjacentHTML(
//        "beforeend",
//        `
//          <span class="wrapper-filter-result__item">
//            ${this.innerText}
//            <span class="wrapper-filter-result__item__cross"></span>
//          </span>
//        `
//      );
//      dropdown.classList.remove("filters__selects__left-filter__list--visible");
      

//      document.querySelector(".wrapper-filter-result"). addEventListener('click', (e) => {
//        if (!e.target.matches(".wrapper-filter-result__item__cross")) {
//          return;
//        }
//        e.target.closest(".wrapper-filter-result__item").remove()
//      })
//    });
//  });

//  function filter(current_category) {
//      const result = products.filter(item => item.brand === current_category || item.type === current_category) 
//    showList(result, wrapperProduct, items_on_page, current_page)
//  }

//});









 
 
