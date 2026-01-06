document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".room-img");
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");

  if (!cards.length || !modal || !modalVideo) return;

  let hoverTimer;

  const openModal = (src) => {
    modal.classList.add("active");
    modalVideo.src = src;
    modalVideo.play().catch(() => {});
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.removeAttribute("src");
  };

  cards.forEach(card => {
    const videoSrc = card.dataset.video;
    if (!videoSrc) return;

    card.addEventListener("mouseenter", () => {
      hoverTimer = setTimeout(() => openModal(videoSrc), 1000);
    });

    card.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimer);
    });

    card.addEventListener("click", () => openModal(videoSrc));
  });

  modal.addEventListener("click", closeModal);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

});
