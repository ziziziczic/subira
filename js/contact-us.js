// 이메일 도메인 자동 입력
document.addEventListener("DOMContentLoaded", function () {
  // Get the email domain select element and input element
  const emailDomainSelect = document.getElementById("email-domain-select");
  const emailDomainInput = document.getElementById("email-domain");

  if (emailDomainSelect && emailDomainInput) {
    // Add change event listener to the select element
    emailDomainSelect.addEventListener("change", function () {
      // Get the selected option value
      const selectedValue = this.value;

      // If "직접입력" is selected (empty value)
      if (selectedValue === "") {
        // Enable the input field
        emailDomainInput.disabled = false;

        // Clear the input field
        emailDomainInput.value = "";

        // Focus on the email domain input
        emailDomainInput.focus();
      }
      // If a domain value is selected (not empty)
      else if (selectedValue) {
        // Disable the input field
        emailDomainInput.disabled = true;

        // Set the input value to the selected option value
        emailDomainInput.value = selectedValue;

        // Focus on the email domain input
        emailDomainInput.focus();
      }
    });
  }
});

// 등록하기 버튼 클릭 시 모달 표시
document.addEventListener("DOMContentLoaded", function () {
  // Get the submit button and modal elements
  const submitButton = document.querySelector(".btn--secondary");
  const modal = document.querySelector(".modal");
  const modalContextText = document.querySelector(".modal-content-text");

  if (submitButton && modal && modalContextText) {
    // Add click event listener to submit button
    submitButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent form submission

      // Get all required form labels
      const requiredLabels = document.querySelectorAll(".form-label.required");
      let allFieldsFilled = true;

      // Check each required field
      requiredLabels.forEach(function (label) {
        // Find the next sibling form-content element
        const formContent = label.parentElement.querySelector(".form-content");

        if (formContent) {
          // Get all input and textarea elements within the form-content
          const inputs = formContent.querySelectorAll("input[type='text']");
          const textareas = formContent.querySelectorAll("textarea");

          // Check all input fields
          inputs.forEach(function (input) {
            if (input.value.trim() === "") {
              allFieldsFilled = false;
            }
          });

          // Check all textarea fields
          textareas.forEach(function (textarea) {
            if (textarea.value.trim() === "") {
              allFieldsFilled = false;
            }
          });
        }
      });

      // Check agree field separately (outside the loop)
      const agreeInput = document.getElementById("agree-yes");
      if (agreeInput && !agreeInput.checked) {
        allFieldsFilled = false;
      }

      // Set modal content based on validation result
      if (allFieldsFilled) {
        modalContextText.innerHTML = `<p class="confirm-text">문의가 접수 되었습니다.<br />담당자가 확인 후 연락드리겠습니다.<br />감사합니다.<br /></p>`;
      } else {
        modalContextText.innerHTML = `<p class="notice-text">필수 항목이 입력되어야<br />문의가 가능합니다.</p>`;
      }

      // Show modal
      modal.classList.add("active");
    });

    // Add click event listener to modal to close it
    modal.addEventListener("click", function (e) {
      // Only close if clicking on the modal backdrop (not the content)
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }
});
