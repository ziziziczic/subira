// 페이지 로드가 끝나면 header.html 파일을 불러오는 함수 실행
document.addEventListener("DOMContentLoaded", function () {
  const _header = document.getElementById("header");
  if (!_header) {
    return;
  }

  fetch("./src/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      return response.text();
    })
    .then((data) => {
      // 기존 콘텐츠 삭제 (안전한 방식)
      while (_header.firstChild) {
        _header.removeChild(_header.firstChild);
      }

      // 보안 강화: DOMParser와 Range API를 사용하여 안전하게 HTML 삽입
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");

      // style 태그와 body 내부의 모든 노드를 가져와서 추가
      const styles = doc.querySelectorAll("style");
      const bodyContent = doc.body.childNodes;

      // style 태그 추가
      styles.forEach((style) => {
        _header.appendChild(style.cloneNode(true));
      });

      // body 내용 추가
      Array.from(bodyContent).forEach((node) => {
        _header.appendChild(node.cloneNode(true));
      });

      // 모바일 메뉴 기능 초기화
      initMobileMenu();
    })
    .catch((error) => {
      console.error("header.html을 불러오는 중 오류 발생:", error);

      // 보안 강화: 에러 메시지를 안전하게 추가
      _header.textContent = "";
      const errorP = document.createElement("p");
      errorP.textContent =
        "메뉴를 불러오지 못했습니다. 페이지 새로고침 해주세요.";
      _header.appendChild(errorP);
    });
});

// 모바일 메뉴 기능 초기화 함수
function initMobileMenu() {
  const gnbMenuMo = document.querySelector(".gnb-menu-mo");
  const gnbModal = document.querySelector(".gnb-modal");
  const modalCloseBtn = document.querySelector(
    ".gnb-modal .modal-header button"
  );

  // 모바일 메뉴 버튼 클릭 이벤트
  if (gnbMenuMo && gnbModal) {
    gnbMenuMo.addEventListener("click", function () {
      gnbModal.classList.add("on");
      // body에 스크롤 방지 스타일 추가
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    });
  }

  // 모달 닫기 버튼 클릭 이벤트
  if (modalCloseBtn && gnbModal) {
    modalCloseBtn.addEventListener("click", function () {
      gnbModal.classList.remove("on");
      // body의 스크롤 방지 스타일 제거
      document.body.style.height = "";
      document.body.style.overflow = "";
    });
  }
}
