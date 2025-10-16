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

// Swiper slide 클릭 이벤트 추가
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".print-swiper .swiper-slide");
  let currentModal = null;

  slides.forEach((slide) => {
    slide.addEventListener("click", function () {
      // 이미 모달이 열려있는지 확인
      if (currentModal) {
        // 모달 해제
        document.body.removeChild(currentModal);
        currentModal = null;
        document.body.style.overflow = "";
      } else {
        // 현재 슬라이드의 내용을 복사하여 모달 생성
        const slideDiv = this.querySelector("div");
        const modalDiv = document.createElement("div");
        modalDiv.className = "print-modal";
        modalDiv.innerHTML = slideDiv.innerHTML;

        // 모달 클릭 시 닫기
        modalDiv.addEventListener("click", function () {
          document.body.removeChild(modalDiv);
          currentModal = null;
          document.body.style.overflow = "";
        });

        // body에 모달 추가
        document.body.appendChild(modalDiv);
        currentModal = modalDiv;
        document.body.style.overflow = "hidden";
      }
    });
  });
});
