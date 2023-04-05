let email = document.getElementById('email');
let emailError = document.getElementById('errorEmail');
let country = document.getElementById('country');
let countryError = document.getElementById('errorCountry');
let zip = document.getElementById('zip');
let zipError = document.getElementById('errorZip');
let pwd = document.getElementById('pwd');
let pwdError = document.getElementById('errorPwd');
let pwdConfirmation = document.getElementById('pwd-confirmation');
let pwdConfirmationError = document.getElementById('errorPwdConfirmation');


email.addEventListener("change", (e) => {
  if (email.validity.valid) {
      emailError.textContent = "";
      emailError.className = "error";
    } else {
      showErrorEmail();
      emailError.className = "error active";
    };
}); 

zip.addEventListener("change", (e) => {
  checkZIP(); 
}); 

pwdConfirmation.addEventListener("input", (e) => {
  checkPwd(); 
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

function checkZIP() {

  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  let countryValue = document.getElementById('country').value;
  let constraint = new RegExp(constraints[countryValue][0], "");

  if (constraint.test(zip.value)) {
    zipError.textContent = '';
    zip.setCustomValidity(''); 
  } else {
    zipError.textContent = constraints[countryValue][1];
    zip.setCustomValidity('Wrong ZIP'); 
  }

}; 

function checkPwd() {
  if (pwd.value != pwdConfirmation.value) {
    pwd.setCustomValidity('pwd does not match'); 
    pwdConfirmation.setCustomValidity('pwd does not match'); 
    pwdConfirmationError.textContent = "Password does not match";
  } else { 
    pwdConfirmationError.textContent = "";
    pwd.setCustomValidity(''); 
    pwdConfirmation.setCustomValidity(''); 
  }
}