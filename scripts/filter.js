//Filter for standart select

//const val = document.querySelector('#select')
//const filterChoice = document.querySelector('.filterResult')

//val.addEventListener('change', () => {
//  let result = [].filter
//    .call(val.options, option => option.selected)
//    .map(option => option.text)
//    filterChoice.insertAdjacentHTML("beforeend", `
//      ${result.map(e => `<span class="filterResult">${e}</span>`).join(' ')}
//    `) 
//}) 
  
//filter custom

document.querySelectorAll(".wrapper-select").forEach((itemWrappper) => {
  
  const button = itemWrappper.querySelector(
    ".filters__selects__left-filter__dropdown"
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
    if(e.key === 'Escape' || e.tab === 'Tab') {
      dropdown.classList.remove("filters__selects__left-filter__list--visible");
    }
  })
  const list = dropdown.querySelectorAll(
    ".filters__selects__left-filter__list__item"
  );

  list.forEach((item) => {
    item.addEventListener("click", function () {
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
      

      document.querySelector(".wrapper-filter-result"). addEventListener('click', (e) => {
        if (!e.target.matches(".wrapper-filter-result__item__cross")) {
          return;
        }
        e.target.closest(".wrapper-filter-result__item").remove()
      })
    });
  });
});









 
 
