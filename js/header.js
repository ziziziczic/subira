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
      _header.innerHTML = data;

      // 모바일 메뉴 기능 초기화
      initMobileMenu();
    })
    .catch((error) => {
      console.error("header.html을 불러오는 중 오류 발생:", error);
      _header.innerHTML =
        "<p>메뉴를 불러오지 못했습니다. 페이지 새로고침 해주세요.</p>";
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
