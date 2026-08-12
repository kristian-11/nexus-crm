const loginForm = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const authAlert = document.querySelector('.auth-alert');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (usernameInput.value === '' || passwordInput.value === '') {
        authAlert.classList.add('show');
    } else {
        authAlert.classList.remove('show');
    }
});



