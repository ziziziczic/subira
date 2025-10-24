// 모달 열기 닫기
document.addEventListener("DOMContentLoaded", function () {
  // Get all output content divs

  // 결과물
  const outputContentDivs = document.querySelectorAll(".output-content > div");

  // Add click event listeners to each output content div
  outputContentDivs.forEach(function (contentDiv) {
    contentDiv.addEventListener("click", function () {
      // Find the dialog element within this div
      const dialog = contentDiv.querySelector("dialog");

      if (dialog) {
        // Toggle active class on the dialog

        if (dialog.classList.contains("active")) {
          document.body.style.overflow = "";
          dialog.classList.remove("active");
        } else {
          document.body.style.overflow = "hidden";
          dialog.classList.add("active");
        }
      }
    });
  });

  // 포트폴리오
  const portfolioItemDivs = document.querySelectorAll(".portfolio-item");

  portfolioItemDivs.forEach(function (contentDiv) {
    contentDiv.addEventListener("click", function () {
      // Find the dialog element within this div
      const dialog = contentDiv.querySelector("dialog");

      if (dialog) {
        // Toggle active class on the dialog

        if (dialog.classList.contains("active")) {
          document.body.style.overflow = "";
          dialog.classList.remove("active");
        } else {
          document.body.style.overflow = "hidden";
          dialog.classList.add("active");
        }
      }
    });
  });
});
