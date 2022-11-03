console.log("Hi World");

const btnSevenDay = document.querySelector('.button-free-day');
const inputName = document.querySelector('.firstName');
const inputlast = document.querySelector('.lastName');
const inputEmail = document.querySelector('.emailAddress');
const inputPassword = document.querySelector('.password');
const btnFree = document.querySelector('.button-major');
const spanEmail = document.querySelector('#alert');

const validateEmptyField = (message, e)=> {
    console.log(e.target.value);
    const field = e.target;
    const fielValue = e.target.value.trim();
    if (fielValue.length === 0) {
        field.nextElementSibling.classList.remove('inactive');
        field.classList.add('error-alert');
        field.classList.remove('check-icon');
        field.nextElementSibling.innerText = message ;
    } else {
        field.nextElementSibling.classList.remove('inactive');
        field.classList.add('check-icon');
        field.nextElementSibling.innerText = " ";
    }
}

const validateEmailFormat = (e) => {
    
    const field = e.target;
    const fielValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if(fielValue.trim().length > 5 && regex.test(fielValue)){
        spanEmail.innerText = "Valid";
        field.classList.add('check-icon');
        field.classList.remove('error-icon');
    } else {
        field.classList.remove('check-icon');
        field.classList.add('error-alert');
        spanEmail.innerText = "Pleaser enter a valid email";
    }
    
}
inputName.addEventListener('blur', (e) => validateEmptyField("First name canoot be empty", e));
inputlast.addEventListener('blur', (e) => validateEmptyField("Last Name canoot be empty", e));
inputEmail.addEventListener('blur', (e) => validateEmptyField("Looks like thi is not an email", e));
inputPassword.addEventListener('blur', (e) => validateEmptyField("Password cannot be empty", e));
inputEmail.addEventListener('input', validateEmailFormat);
btnFree.addEventListener('click', function (e){
    e.preventDefault();
})



