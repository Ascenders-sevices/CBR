document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SCROLL TO TOP
  ========================= */
  window.scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* =========================
     SWIPER (ONLY IF PRESENT)
  ========================= */
  const swiperEl = document.querySelector(".mySwiper");
  if (swiperEl && typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  /* =========================
     AOS ANIMATION
  ========================= */
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: false,
      offset: 250,
      duration: 800,
    });
  }

});
