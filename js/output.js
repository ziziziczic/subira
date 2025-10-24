// 탭 클릭시, 해당 탭의 컨텐츠만 활성화
document.addEventListener("DOMContentLoaded", function () {
  // Get all tab items and content items
  const tabItems = document.querySelectorAll(".output-tab-item");
  const contentItems = document.querySelectorAll(".output-content");

  // Add click event listeners to all tab items
  tabItems.forEach(function (tabItem) {
    tabItem.addEventListener("click", function () {
      // Get the class name that identifies this tab (e.g., "item1", "item2", etc.)
      const tabClass = Array.from(tabItem.classList).find((cls) =>
        cls.startsWith("item")
      );

      if (!tabClass) return;

      // Remove active class from all tab items
      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Add active class to clicked tab item
      tabItem.classList.add("active");

      // Remove active class from all content items
      contentItems.forEach(function (content) {
        content.classList.remove("active");
      });

      // Add active class to corresponding content item
      const targetContent = document.querySelector(
        `.output-content.${tabClass}`
      );
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});

// GNB 메뉴 클릭시, 해당 탭 활성화
document.addEventListener("DOMContentLoaded", function () {
  // Check URL parameters on page load
  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get("tab");

  if (tabParam) {
    // Get all tab items and content items
    const tabItems = document.querySelectorAll(".output-tab-item");
    const contentItems = document.querySelectorAll(".output-content");

    // Remove active class from all tab items
    tabItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Add active class to specified tab item
    const targetTab = document.querySelector(`.output-tab-item.${tabParam}`);
    if (targetTab) {
      targetTab.classList.add("active");
    }

    // Remove active class from all content items
    contentItems.forEach(function (content) {
      content.classList.remove("active");
    });

    // Add active class to corresponding content item
    const targetContent = document.querySelector(`.output-content.${tabParam}`);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  }
});
