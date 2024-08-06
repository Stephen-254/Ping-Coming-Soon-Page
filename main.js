function validateEmail() {

    
    const emailInput = document.getElementById("email");
    const error = document.getElementById("error")


    let checkIfEmailIsValid = true;


    if(emailInput.value == ""){
        error.style.display = "block";
        checkIfEmailIsValid = false;
    } else{
        error.style.display = "none";
    }

    /*function ifEmailFieldIsFilled(checkIfEmailIsValid) {
        const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

        if(emailInput) {
            return emailRegex.test(emailInput);
        }
    } */

    return checkIfEmailIsValid;
}