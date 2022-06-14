//For dropdown

const parentItems = document.querySelectorAll('.parent-item')

parentItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
  })
})

//Filter
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
const button = document.querySelector('#select')
const dropdown = document.querySelector('.filters__selects__list')
const filterChoice = document.querySelector('.wrapper-filter-result')

button.addEventListener('click', (e) => {
  e.preventDefault()
  dropdown.classList.toggle('filters__selects__list--visible')
})

const list = document.querySelectorAll('.filters__selects__list__item')
console.log(list)
list.forEach(item => {
  item.addEventListener('click', function() {
   
    filterChoice.insertAdjacentHTML('beforeend', `
    <span class="wrapper-filter-result__item">${this.innerText}</span>`) 
    dropdown.classList.remove('filters__selects__list--visible')
  })
})


