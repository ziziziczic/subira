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
