const form = document.querySelector("form");
const button = document.querySelector("button");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
    event.preventDefault();

    validateLength(nameError, name.value, 4, "Name must have at least 5 characters");
    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.innerHTML = `<p class="form_error">Please enter a valid email address</p>`;
    }
    validateLength(subjectError, subject.value, 14, "Subject must have at least 15 characters");
    validateLength(messageError, message.value, 24, "Message must have at least 25 characters");

}

// adding event listener for submitting the validateForm function
form.addEventListener("submit", validateForm);

// making a reusable function to check the length
function checkLength(value, len) {
    return value.trim().length > len;
}

// making a reusable function for validating the length of the value and adding an error message
function validateLength(errorType, value, minLength, error) {
    if(checkLength(value, minLength) === true) {
        errorType.style.display = "none";
    } else {
        errorType.innerHTML = `<p class="form_error">${error}</p>`;
    }
}

// making a function for validating email formating
function validateEmail(email) {
    const regEx = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+\.([a-z])/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}