
let saveBtn = document.querySelector('#save');

saveBtn.addEventListener('click', () => {
    let nameInput = document.querySelector('[placeholder="name"]');
    let lastnameInput = document.querySelector('[placeholder="lastname"]');
    let emailInput = document.querySelector('[placeholder="email"]');
    let phoneInput = document.querySelector('[placeholder="phone"]');

    let nameValue = nameInput.value.trim();
    let lastnameValue = lastnameInput.value.trim();
    let emailValue = emailInput.value.trim();
    let phoneValue = phoneInput.value.trim();
    let formValid = true;
    const validateEmaile = emailValue => {
        return String(emailValue)
            .toLowerCase()
            .match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );
    };

    const validatePhoneNumber = phoneValue => {
        return String(phoneValue)
            .match(
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,4}$/im
            );
    }

    if (!nameValue.length) {
        nameInput.classList.add("is-invalid");
        formValid = false;
    }
    if (!lastnameValue.length) {
        lastnameInput.classList.add("is-invalid");
        formValid = false;
    }
    if (!validateEmaile(emailValue)) {
        emailInput.classList.add("is-invalid");
        formValid = false;
    }
    if (!validatePhoneNumber(phoneValue)) {
        phoneInput.classList.add("is-invalid");
        formValid = false;
    }

    if (formValid) {
        alert('Validno')
    }


    let validationsInputs = document.querySelectorAll('.validation-form');

    validationsInputs.forEach(el => {
        el.addEventListener('change', e => {
            let currentInput = e.target;
            let inputValue = currentInput.value.trim();
            let inputName = currentInput.getAttribute('placeholder');

            switch (inputName) {
                case 'name':
                    if (inputValue.length >= 3) {
                        el.classList.remove("is-invalid");
                        el.classList.add("is-valid");
                    } else {
                        el.classList.add("is-invalid");
                        formValid = false;
                    }
                    break;
                case 'lastname':
                    if (inputValue.length >= 3) {
                        el.classList.remove("is-invalid");
                        el.classList.add("is-valid");
                    } else {
                        el.classList.add("is-invalid");
                        formValid = false;
                    }
                    break;
                case 'email':
                    if (validateEmaile(inputValue)) {
                        el.classList.remove("is-invalid");
                        el.classList.add("is-valid");
                    } else {
                        el.classList.add("is-invalid");
                        formValid = false;
                    }
                    break;
                case 'phone':
                    if (validatePhoneNumber(inputValue)) {
                        el.classList.remove("is-invalid");
                        el.classList.add("is-valid");
                    } else {
                        el.classList.add("is-invalid");
                        formValid = false;
                    }
                    break;
            }
        });
    });
});
