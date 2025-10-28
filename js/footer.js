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
      // 기존 콘텐츠 삭제 (안전한 방식)
      while (_footer.firstChild) {
        _footer.removeChild(_footer.firstChild);
      }

      // 보안 강화: DOMParser를 통해 안전하게 HTML 파싱 및 삽입
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");

      // style 태그와 body 내부의 모든 노드를 가져와서 추가
      const styles = doc.querySelectorAll("style");
      const bodyContent = doc.body.childNodes;

      // style 태그 추가
      styles.forEach((style) => {
        _footer.appendChild(style.cloneNode(true));
      });

      // body 내용 추가
      Array.from(bodyContent).forEach((node) => {
        _footer.appendChild(node.cloneNode(true));
      });
    })
    .catch((error) => {
      console.error("footer.html을 불러오는 중 오류 발생:", error);

      // 보안 강화: 에러 메시지를 안전하게 추가
      _footer.textContent = "";
      const errorP = document.createElement("p");
      errorP.textContent =
        "footer를 불러오지 못했습니다. 페이지 새로고침 해주세요.";
      _footer.appendChild(errorP);
    });
});
