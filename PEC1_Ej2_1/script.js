const form = document.getElementById('form');
const username = document.getElementById('username');
const edad = document.getElementById('edad');
const email = document.getElementById('email');
const urlpersonal = document.getElementById('urlpersonal');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Mensaje erro:
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Mensaje correcto:
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Validadion Email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'El Correo Electronico no es valido');
    }
}

// Validadion Url personal
function checkUrl(input) {
    const re = /[a-zA-Z0-9][a-zA-Z0-9-_]{1,}\.[a-zA-Z]{2,3}\/[a-zA-Z0-9][a-zA-Z0-9-_]{1,}\/[a-zA-Z0-9][a-zA-Z0-9-_]{1,}$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'La URL introducida no es valida');
    }
}

// Validacion contraseña
function CheckPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value ){
        showError(input2, 'Las contraseñas no coinciden')
    }
}

// Comprovacion de campos
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '')  {
            showError(input, `Se requiere introducir ${getFielName(input)}`);
        } else {
            showSuccess(input);
        }
    })
}

// Comprovacion largada
function checkLength(input, min, max) {
    if (input.value.length < min) {
       showError(input, `${getFielName(input)} Deve contener al menos ${min} caracteres`); 
    }   else if (input.value.length > max) {
        showError(input, `${getFielName(input)} Deve contener menos de ${max} caracteres`); 
     }  else showSuccess(input);
}

// Comprovacion edad
function checkEdad(input, min, max) {
    if (input.value < min) {
       showError(input, `Tu ${getFielName(input)} deve ser superior o igual a ${min}`); 
    }   else if (input.value >= max) {
        showError(input, `Tu ${getFielName(input)} deve ser inferior a ${max}`); 
     }  else showSuccess(input);
}

// Nombre de campo
function getFielName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkEdad(edad, 0, 999);
    checkRequired([username, edad, email, urlpersonal, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 4, 6);
    checkEmail(email)
    checkUrl(urlpersonal);
    CheckPasswordsMatch(password, password2);
});