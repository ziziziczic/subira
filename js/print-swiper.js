// Initialize Swiper
const swiper = new Swiper(".print-swiper", {
  // Optional parameters
  direction: "horizontal",
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
