document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     Navbar + Logo on Scroll
  ========================== */
  const navbar = document.getElementById("navbar");
  const logo = document.querySelector(".navbar-brand img");

  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("nav-fixed");
        if (logo) {
          logo.src = "/assets/images/Coralmin.png";
          logo.style.height = "40px";
        }
      } else {
        navbar.classList.remove("nav-fixed");
        if (logo) {
          logo.src = "/assets/images/Logo  Corallogo.png";
          logo.style.height = "40px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }


  /* ==========================
     Swiper
  ========================== */
  if (typeof Swiper !== "undefined" && document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
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
     Owl Carousel
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
      navText: ["‹", "›"]
    });
  }


  /* ==========================
     Gallery Modal
  ========================== */
  const modalImage = document.getElementById("modalImage");
  if (modalImage) {
    document.querySelectorAll(".gallery a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        modalImage.src = link.href;
      });
    });
  }


  /* ==========================
     Popup Modal
  ========================== */
  const popupModal = document.getElementById("popupModal");
  const closeBtn = document.getElementById("closeBtn");

  if (popupModal && closeBtn) {
    setTimeout(() => {
      popupModal.style.display = "block";
    }, 500);

    closeBtn.addEventListener("click", () => {
      popupModal.style.display = "none";
    });

    popupModal.addEventListener("click", e => {
      if (e.target === popupModal) {
        popupModal.style.display = "none";
      }
    });
  }

});
