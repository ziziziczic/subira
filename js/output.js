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
