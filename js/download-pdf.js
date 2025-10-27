document.addEventListener("DOMContentLoaded", function () {
  var downloadLinks = document.querySelectorAll(".download-btn");
  if (!downloadLinks || downloadLinks.length === 0) return;

  // ✅ 상대경로 + 영문 파일명 권장
  var pdfPath = "./pdf/o2i-intro-2020.pdf";

  downloadLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      try {
        var a = document.createElement("a");
        a.href = pdfPath;
        a.setAttribute("download", "o2i회사소개2020.pdf"); // 표시명은 한글 가능
        a.target = "_blank";

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (err) {
        console.error("Download failed:", err);
        window.open(pdfPath, "_blank");
      }
    });
  });
});
