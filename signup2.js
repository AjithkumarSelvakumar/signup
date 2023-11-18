const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById('email');
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirm.value.trim();

    if(usernameValue === '') {
        // add error class
        setError(username, "This field cannot be blank !!");
    } else {
        // add success class
        setSuccess(username);
    }

    if(emailValue === '') {
        // add error class
        setError(email, "This field cannot be blank!!");
    } else {
        // add success class
        setSuccess(email);
    }
    // ... (add similar checks for password and confirm)
}

function setError(input, message) {
    // Add error class and display the error message
    // Example: input.classList.add("error");
    //          errorElement.innerText = message;
}

function setSuccess(input) {
    // Add success class
    // Example: input.classList.add("success");
}
