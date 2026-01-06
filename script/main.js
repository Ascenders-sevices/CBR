document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     Swiper
  ========================== */
  if (typeof Swiper !== "undefined" && document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  /* ==========================
     AOS
  ========================== */
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      duration: 800,
      offset: 200
    });
  }

  /* ==========================
     Owl Carousel (jQuery safe)
  ========================== */
  if (window.jQuery && $(".owl-carousel").length) {
    $(".owl-carousel").owlCarousel({
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 3 }
      },
      navText: [
        "<img src='/assets/images/LA.png' alt='Previous' loading='lazy'>",
        "<img src='/assets/images/RA.png' alt='Next' loading='lazy'>"
      ]
    });
  }

});
