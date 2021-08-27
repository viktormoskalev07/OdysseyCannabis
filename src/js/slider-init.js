 //swiper
(function () {
  let swiper = Swiper;
  let init = false;

  function swiperMode() {
    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 991px)");
    let desktop = window.matchMedia("(min-width: 991px) and (max-width: 40000px)");

    if (mobile.matches) {
      if (!init) {
        init = true;
        swiper = new Swiper(".swiper-categories", {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 5000,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            415: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          },
        });
      }
    } else if (desktop.matches) {
      init && swiper.destroy();
      init = false;
    }
  }

  if (document.querySelector(".swiper-categories")) {

      swiperMode();
    window.addEventListener("resize", function () {
      swiperMode();
    });
  }
}
)
();