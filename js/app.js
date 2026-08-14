const loginForm = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const authAlert = document.querySelector('.auth-alert');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        console.log('Formulario enviado...'); // Aquí puedes agregar la lógica para enviar el formulario al servidor
    } 

});


function validateForm() {
    if (usernameInput.value === '' || passwordInput.value === '') {
        authAlert.textContent = 'Todos los campos son obligatorios.';
        authAlert.classList.add('show');
        return false;
    } else if (passwordInput.value.length < 6) {
        authAlert.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        authAlert.classList.add('show');
        return false;
    } else {
        authAlert.classList.remove('show');
        return true;
    }   
}

