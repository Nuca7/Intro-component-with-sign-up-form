let form = document.querySelector(".registrationForm");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let mail = document.querySelector("#mail");
let password = document.querySelector("#password");

// mdn
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {

    if(!checkValidity()) {
        e.preventDefault();
    }
}) 

function checkValidity() {
    let isValid = true;

    if(firstName.value === "") {
        error(firstName, "First Name cannot be empty");
        isValid = false;
    } else {
        remove(firstName, "");
    }
    
    if(lastName.value === "") {
        error(lastName, "Last Name cannot be empty");
        isValid = false;
    } else {
        remove(lastName, "");
    }
    
    if(mail.value === "") {
        error(mail, "mail cannot be empty");
        isValid = false;
    } else if(!emailRegExp.test(mail.value)) {
        error(mail, "Looks like this is not an email");
        isValid = false;
    } else {
        remove(mail, "");
    } 
    
    if(password.value === "") {
        error(password, "password cannot be empty");
        isValid = false;
    } else if(password.value.length <= 7) {
        error(password, "weak password. password length should be more than 7");
        isValid = false;
    } else {
        remove(password, "");
    } 

    return isValid;
}
function remove(elName, message) {
    let element = elName.parentNode;
    let errorText = element.querySelector(".errorText");
    errorText.innerHTML = message;

    element.classList.remove("failure")
}
function error(elName, message) {

    let element = elName.parentNode;
    let errorText = element.querySelector(".errorText");
    errorText.innerHTML = message;

    element.classList.add("failure")
    console.log(element)
}