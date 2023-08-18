const form = document.querySelector('#form');
const allInputs = document.querySelectorAll('.form__input');
const nameInputs = document.querySelectorAll('.form__input[type="text"]');
const emailInput = document.querySelector('#emailAddress');
const passwordInput = document.querySelector('#password');

let nameInputsEmpty;
let emailInputEmpty;
let passwordInputEmpty;
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

monitorNameInputs = () => {
    nameInputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        })
    
        input.addEventListener('input', () => {
            input.removeAttribute("aria-invalid");
        })
    })
}

checkNameInputs = () => {
    nameInputs.forEach(input => {
        if (input.value.length === 0) {
            input.setAttribute("aria-invalid", true);
            nameInputsEmpty = true;
            return;
        } else if (input.value.length > 0) {
            input.removeAttribute("aria-invalid");
            nameInputsEmpty = false;
        }
    })
}

validateInput = (input) => {
    if (input.value.length === 0) {
        input.setAttribute("aria-invalid", true);
        nameInputsEmpty = true;
        return;
    } else if (input.value.length > 0) {
        input.removeAttribute("aria-invalid");
    }
}

monitorEmailInput = () => {
    emailInput.addEventListener('blur', () => {
        validateEmailInput();
    })
    
    emailInput.addEventListener('input', () => {
        emailInput.removeAttribute("aria-invalid")
    })
}

checkEmailInput = () => {
    validateEmailInput();
}

validateEmailInput = () => {
    if (!(emailInput.value.match(emailPattern))) {
        emailInput.setAttribute("aria-invalid", true);
        emailInputEmpty = true;
        return;
    } else {
        emailInput.removeAttribute("aria-invalid")
        emailInputEmpty = false;
    }
}

monitorPasswordInput = () => {
    passwordInput.addEventListener('blur', () => {
        validatePasswordInput();
    })
    
    passwordInput.addEventListener('input', () => {
        passwordInput.removeAttribute("aria-invalid")
    })
}

checkPasswordInput = () => {
    validatePasswordInput();
}

validatePasswordInput = () => {
    if (!(passwordInput.value.match(passwordPattern))) {
        passwordInput.setAttribute("aria-invalid", true);
        passwordInputEmpty = true;
        return;
    } else {
        passwordInput.removeAttribute("aria-invalid");
        passwordInputEmpty = false;
    }
}

clearInputs = () => {
    allInputs.forEach(input => {
        input.value = "";
    })
}

submitForm = () => {
    const formData = new FormData(form);
    form.submit();
    clearInputs();
}

monitorNameInputs();

monitorEmailInput();

monitorPasswordInput();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameInputsEmpty || emailInputEmpty || passwordInputEmpty) {
        checkNameInputs();
        checkEmailInput();
        checkPasswordInput();
    }
    if (!nameInputsEmpty && !emailInputEmpty && !passwordInputEmpty) {
        submitForm();
    }
})
