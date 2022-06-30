document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.querySelectorAll(".accordion__list__item");

  accordion.forEach((item) => {
    item.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const icon = self.querySelector(
        ".accordion__list__item__control__icon"
      );
      const content = self.querySelector(".accordion__list__item__content");
      const control = self.querySelector(".accordion__list__item__control");

      content.classList.toggle("open");
      icon.classList.toggle("accordion__list__item__control__icon--rotate");


      //for reader
      if (content.classList.contains("open")) {
        control.setAttribute("area-expanded", true);
        content.setAttribute("area-hidden", false);

        content.style.maxHeight = content.scrollHeight + 'px'
      } else {
        control.setAttribute("area-expanded", false);
        content.setAttribute("area-hidden", true);

        content.style.maxHeight = null
      }
    });
  });

  //при загрузке открыт первый
  const content = document.querySelector(".accordion__list__item__content");
  if (content.classList.contains("open")) {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});