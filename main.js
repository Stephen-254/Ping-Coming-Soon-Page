function validateEmail() {
    const checkIfEmailIsValid = true;
    const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    const emailInput = document.getElementById("email");
    const error = document.getElementById("error")

    if(emailInput == ""){
        error.style.display = "inline";
        checkIfEmailIsValid = false;
    } else{
        error.style.display = "none";
    }

    return checkIfEmailIsValid;
}