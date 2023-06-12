// Handles form validation and submission via JS to check password match
function formHandler() {
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function (event) {
    if (validateForm() === true) submitForm();
  });
}

function validateForm() {
  // Get form fields
  formElement = document.getElementById("account-form");

  passField = document.getElementById("pass");
  passConfirm = document.getElementById("pass-confirm");

  if (passField.value != passConfirm.value) {
    passConfirm.setCustomValidity("Passwords do not match");
  }

  return formElement.reportValidity();
}

function submitForm() {
  formElement = document.getElementById("account-form");
  formElement.submit();
}

formHandler();
