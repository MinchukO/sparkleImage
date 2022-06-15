//For dropdown mrnu

const parentItems = document.querySelectorAll(".parent-item");

parentItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
