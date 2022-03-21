let registrationForm = document.getElementById("registration-form");
let signInForm = document.getElementById("signin-form");
let signUpForm = document.getElementById("signup-form");

registrationForm.style.display = "none";
signInForm.style.display = "none";
signUpForm.style.display = "none";

function showOrHideRegistrationForm() {
    signInForm.style.display = "none";
    signUpForm.style.display = "none";

    if (registrationForm.style.display === "none") {
        registrationForm.style.display = "block";
    }
    else {
        registrationForm.style.display = "none";
    }
}

function showOrHideSignInForm() {
    registrationForm.style.display = "none";
    signUpForm.style.display = "none";

    if (signInForm.style.display === "none") {
        signInForm.style.display = "block";
    }
    else {
        signInForm.style.display = "none";
    }
}

function showOrHideSignUpForm() {
    signInForm.style.display = "none";
    registrationForm.style.display = "none";

    if (signUpForm.style.display === "none") {
        signUpForm.style.display = "block";
    }
    else {
        signUpForm.style.display = "none";
    }
}