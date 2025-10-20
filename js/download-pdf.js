document.addEventListener("DOMContentLoaded", function () {
  var downloadLinks = document.querySelectorAll(".download-btn");
  if (!downloadLinks || downloadLinks.length === 0) return;

  var pdfPath = "./doc/수비라.pdf";

  downloadLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      try {
        var a = document.createElement("a");
        a.href = pdfPath;
        // 'download' attribute suggests a filename; browsers may still open inline
        a.setAttribute("download", "수비라.pdf");
        // For some iOS/Safari cases, opening in new tab helps then prompts save/share
        a.setAttribute("target", "_blank");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (err) {
        // Fallback: navigate to the file directly
        window.location.href = pdfPath;
      }
    });
  });
});
