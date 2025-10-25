// Initialize Swiper
const swiper = new Swiper(".print-swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true, // 무한 루프 활성화
  slidesPerView: "auto",
  // centeredSlides: true, // 슬라이드를 중앙에 정렬
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
