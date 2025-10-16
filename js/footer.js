// 페이지 로드가 끝나면 footer.html 파일을 불러오는 함수 실행
document.addEventListener("DOMContentLoaded", function () {
  const _footer = document.getElementById("footer");
  if (!_footer) {
    return;
  }

  fetch("./src/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      return response.text();
    })
    .then((data) => {
      _footer.innerHTML = data;
    })
    .catch((error) => {
      console.error("footer.html을 불러오는 중 오류 발생:", error);
      _footer.innerHTML =
        "<p>footer를 불러오지 못했습니다. 페이지 새로고침 해주세요.</p>";
    });
});
