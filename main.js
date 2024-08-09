
function validateEmail(event) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById("email");
    const error = document.getElementById("error");

    if (emailRegex.test(emailInput.value)) {
        error.style.display = "none";
        emailInput.value = ""; 
        return true;
    } else {
        error.style.display = "block"; 
        return false;
    }
}