let email = document.getElementById('email');
let emailError = document.getElementById('errorEmail');
let country = document.getElementById('country');
let countryError = document.getElementById('errorCountry');
let zip = document.getElementById('zip');
let zipError = document.getElementById('ErrorZip');
let pwd = document.getElementById('pwd');
let pwdError = document.getElementById('errorPwd');
let pwdConfirmation = document.getElementById('pwd-confirmation');
let pwdConfirmationError = document.getElementById('errorPwdConfirmation');

email.addEventListener("input", (e) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
      } else {
        showErrorEmail();
        emailError.className = "error active";
      };
}); 


function showErrorEmail() {
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
}; 