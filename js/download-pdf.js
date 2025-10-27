document.addEventListener("DOMContentLoaded", function () {
  var downloadLinks = document.querySelectorAll(".download-btn");
  if (!downloadLinks || downloadLinks.length === 0) return;

  // Use absolute path from root to work on both local and GitHub Pages
  var pdfPath = "/doc/o2i회사소개2020.pdf";

  downloadLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      try {
        // Create a link element for download
        var a = document.createElement("a");
        a.href = pdfPath;
        a.setAttribute("download", "o2i회사소개2020.pdf");
        a.setAttribute("target", "_blank");

        // Append to body temporarily
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
      } catch (err) {
        console.error("Download failed:", err);
        // Fallback: open in new tab
        window.open(pdfPath, "_blank");
      }
    });
  });
});
