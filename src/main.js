import validator from "validator";
import "./scss/style.scss";

const form = document.querySelector("form");
const email = document.getElementById("mail");
const zipCode = document.getElementById("zip");
const country = document.getElementById("country");
const password = document.getElementById("pwd");
const confirmpassword = document.getElementById("confirmpwd");

window.addEventListener("load", () => {
  const validMail = validator.isEmail(email.value);
  email.className = validMail ? "valid" : "invalid";

  const validZipCode = validator.isPostalCode(zipCode.value, country.value);
  zipCode.className = validZipCode ? "valid" : "invalid";

  const validPassword = validator.isStrongPassword(password.value);
  password.className = validPassword ? "valid" : "invalid";

  const validConfirmPW =
    validator.equals(password.value, confirmpassword.value) &&
    confirmpassword.value.length !== 0;
  confirmpassword.className = validConfirmPW ? "valid" : "invalid";
});

form.addEventListener("input", (event) => {
  event.preventDefault();

  const targetElement = event.target;
  const error = targetElement.nextElementSibling;

  switch (targetElement.id) {
    case "mail":
      {
        const validMail = validator.isEmail(email.value);
        if (validMail) {
          targetElement.className = "valid";
          error.textContent = "";
          error.className = "error";
        } else {
          targetElement.className = "invalid";
        }
      }
      break;
    case "zip":
      {
        const validZipCode = validator.isPostalCode(
          zipCode.value,
          country.value
        );
        if (validZipCode) {
          targetElement.className = "valid";
          error.textContent = "";
          error.className = "error";
        } else {
          targetElement.className = "invalid";
        }
      }
      break;
    case "pwd":
      {
        const validPassword = validator.isStrongPassword(password.value);
        if (validPassword) {
          targetElement.className = "valid";
          error.textContent = "";
          error.className = "error";
        } else {
          targetElement.className = "invalid";
        }
      }
      break;
    case "confirmpwd":
      {
        const validConfirmPW =
          validator.equals(password.value, confirmpassword.value) &&
          confirmpassword.value.length !== 0;

        if (validConfirmPW) {
          targetElement.className = "valid";
          error.textContent = "";
          error.className = "error";
        } else {
          targetElement.className = "invalid";
        }
      }
      break;
    default:
      break;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();

  const validMail = validator.isEmail(email.value);
  if (validMail) {
    email.className = "valid";
    email.nextElementSibling.textContent = "";
    email.nextElementSibling.className = "error";
  } else {
    email.className = "invalid";
    email.nextElementSibling.textContent = "Incorrect email";
    email.nextElementSibling.className = "error active";
  }

  const validZipCode = validator.isPostalCode(zipCode.value, country.value);
  if (validZipCode) {
    zipCode.className = "valid";
    zipCode.nextElementSibling.textContent = "";
    zipCode.nextElementSibling.className = "error";
  } else {
    zipCode.className = "invalid";
    zipCode.nextElementSibling.textContent = "ZIP Code is invalid";
    zipCode.nextElementSibling.className = "error";
  }

  const validPassword = validator.isStrongPassword(password.value);
  if (validPassword) {
    password.className = "valid";
    password.nextElementSibling.textContent = "";
    password.nextElementSibling.className = "error";
  } else {
    password.className = "invalid";
    password.nextElementSibling.textContent =
      "Password needs to have a min length of 8 and at least 1 lower case, 1 uppercase, 1 number and 1 special character";
    password.nextElementSibling.className = "error";
  }

  const validConfirmPW =
    validator.equals(password.value, confirmpassword.value) &&
    confirmpassword.value.length !== 0;

  if (validConfirmPW) {
    confirmpassword.className = "valid";
    confirmpassword.nextElementSibling.textContent = "";
    confirmpassword.nextElementSibling.className = "error";
  } else {
    confirmpassword.className = "invalid";
    confirmpassword.nextElementSibling.textContent =
      "It's not the same as password";
    confirmpassword.nextElementSibling.className = "error";
  }

  if (
    validConfirmPW &&
    validMail &&
    validMail &&
    validPassword &&
    validZipCode
  ) {
    console.log("all is good!");
  }
});
