// 모달 열기 닫기
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector("main > dialog");

  modal.addEventListener("click", function () {
    if (modal.classList.contains("active")) {
      document.body.style.overflow = "";
      modal.classList.remove("active");
    }
  });

  const swiperSlideContentDivs = document.querySelectorAll(
    ".swiper.print-swiper .swiper-slide"
  );

  // Add click event listeners to each output content div
  swiperSlideContentDivs.forEach(function (contentDiv) {
    contentDiv.addEventListener("click", function () {
      const modalContent = contentDiv.querySelector(".modal-content");
      if (modalContent) {
        // Clone the modal content to avoid removing it from original location
        const clonedContent = modalContent.cloneNode(true);

        // Clear existing modal content (보안 강화: innerHTML 대신 직접 DOM 조작)
        while (modal.firstChild) {
          modal.removeChild(modal.firstChild);
        }

        // Append cloned content to modal
        modal.appendChild(clonedContent);

        document.body.style.overflow = "hidden";
        modal.classList.add("active");
      }
    });
  });
});
