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

  // 취소버튼 누르면 input, textarea, select 초기화
  const cancelButton = document.querySelector(".btn--primary");
  if (cancelButton) {
    cancelButton.addEventListener("click", function (e) {
      e.preventDefault();

      // Get all input and textarea elements
      const inputs = document.querySelectorAll("input[type='text']");
      const textareas = document.querySelectorAll("textarea");

      // Clear all input and textarea fields
      inputs.forEach(function (input) {
        input.value = "";
      });

      textareas.forEach(function (textarea) {
        textarea.value = "";
      });

      // Clear all select elements
      const telephoneSelect = document.querySelector(".phone-group select");
      if (telephoneSelect) {
        telephoneSelect.value = "010";
      }

      const emailSelect = document.querySelector(".email-group select");
      if (emailSelect) {
        emailSelect.value = "직접입력";
      }

      // Clear all radio elements
      const radioInputs = document.querySelectorAll("input[type='radio']");
      radioInputs.forEach(function (radioInput) {
        radioInput.checked = false;
      });

      const subiraInput = document.getElementById("subira");
      if (subiraInput) {
        subiraInput.checked = true;
      }

      // Clear all agree elements
      const agreeInput = document.getElementById("agree-no");
      if (agreeInput) {
        agreeInput.checked = true;
      }

      // Clear all modal content (보안 강화: innerHTML 대신 DOM 조작 사용)
      const modalContentText = document.querySelector(".modal-content-text");
      if (modalContentText) {
        modalContentText.textContent = "";
      }

      // Close modal
      const modal = document.querySelector(".modal");
      if (modal) {
        modal.classList.remove("active");
      }
    });
  }

  // 등록하기 버튼 클릭 시 모달 표시
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

      // Set modal content based on validation result (보안 강화: innerHTML 대신 안전한 DOM 조작 사용)
      modalContextText.textContent = "";

      const messageParagraph = document.createElement("p");
      if (allFieldsFilled) {
        messageParagraph.className = "confirm-text";
        // 안전한 방식으로 텍스트 노드 추가 (XSS 방지)
        const text1 = document.createTextNode("문의가 접수 되었습니다.");
        const br1 = document.createElement("br");
        const text2 = document.createTextNode(
          "담당자가 확인 후 연락드리겠습니다."
        );
        const br2 = document.createElement("br");
        const text3 = document.createTextNode("감사합니다.");
        const br3 = document.createElement("br");
        messageParagraph.appendChild(text1);
        messageParagraph.appendChild(br1);
        messageParagraph.appendChild(text2);
        messageParagraph.appendChild(br2);
        messageParagraph.appendChild(text3);
        messageParagraph.appendChild(br3);
      } else {
        messageParagraph.className = "notice-text";
        // 안전한 방식으로 텍스트 노드 추가 (XSS 방지)
        const text1 = document.createTextNode("필수 항목이 입력되어야");
        const br1 = document.createElement("br");
        const text2 = document.createTextNode("문의가 가능합니다.");
        messageParagraph.appendChild(text1);
        messageParagraph.appendChild(br1);
        messageParagraph.appendChild(text2);
      }
      modalContextText.appendChild(messageParagraph);

      // Show modal
      modal.classList.add("active");
    });

    // Add click event listener to modal to close it
    modal.addEventListener("click", function (e) {
      // Close when clicking on the modal backdrop or modal content
      if (e.target === modal || e.target.closest(".modal-content")) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
});
