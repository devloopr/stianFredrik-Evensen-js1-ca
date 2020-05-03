// I felt like i was cheating on this part of the assignment. Since my code is close to identical to yours from the video lesson you gave us.!

const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const answer = document.querySelector("#answer");
const answerError = document.querySelector("#answerError");
let answerHasError = false;

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
let emailHasError = false;

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
let addressHasError = false;

form.addEventListener("submit", validateForm);

function validateForm() {
  event.preventDefault();

  // test name

  const nameValue = name.value;

  if (validateLength(nameValue, 1) === true) {
    nameError.style.display = "none";
    nameHasError = false;
  } else {
    nameError.style.display = "block";
    nameHasError = true;
  }

  // test answer

  const answerValue = answer.value;

  if (validateLength(answerValue, 10) === true) {
    answerError.style.display = "none";
    answerHasError = false;
  } else {
    answerError.style.display = "block";
    answerHasError = true;
  }

  // test email

  const emailValue = email.value;

  if (validateEmail(emailValue)) {
    emailError.style.display = "none";
    emailHasError = false;
  } else {
    emailError.style.display = "block";
    emailHasError = true;
  }

  // test address

  const addressValue = address.value;

  if (validateLength(addressValue, 15) === true) {
    addressError.style.display = "none";
    addressHasError = false;
  } else {
    addressError.style.display = "block";
    addressHasError = true;
  }

  // validate and email functions

  function validateLength(value, lengthToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lengthToCheck) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
      return true;
    } else {
      return false;
    }
  }
}
