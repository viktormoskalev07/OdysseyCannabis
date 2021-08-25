
function accordionInit(accordion) {
    window.addEventListener("load", function () {
      
      const items = accordion.querySelectorAll(".accordion__item"); 
      const openedItem = (item) => {
        const opened_item = accordion.querySelector(".is-open"); 
        toggle_item(item); 
        if (opened_item && opened_item !== item) {
          toggle_item(opened_item);
        }
      };
  
      items.forEach((item) => {
        const title = item.querySelector(".accordion__title-text"); 
        title.addEventListener("click", ( ) => {
          openedItem(item);
        });
  
        title.addEventListener("keydown", (event) => { 
          if (event.code==='Enter'||event.code==='Space'){ 
            event.preventDefault(); 
            openedItem(item);
          } 
        });
      });
  
      const toggle_item = (item) => {
        const body = item.querySelector(".accordion__body");
  
        if (item.classList.contains("is-open")) {
          body.removeAttribute("style");
          item.classList.remove("is-open");
        } else {
          body.style.overflow = 'hidden';
          body.style.transition = 'max-height 10s cubic-bezier(0.22, 0.61, 0.36, 1)';
          body.style.maxHeight = '2000px';
          item.classList.add("is-open");
        }
      };
    });
  }
  
  if (document.querySelector(".accordion")) { 
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(accordion => {
      accordionInit(accordion);
    }); 
  }