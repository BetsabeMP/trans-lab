//validar email
const inputEmail = document.getElementById('inputEmail4');

inputEmail.addEventListener('input', () => {
    outback =  event.target;
    mailValido = document.getElementById('emailOK');

    emailCharac = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailCharac.test(outback.value)) {
        mailValido.innerText = 'Correcto';
    } else {
        mailValido.innerText = 'Email incorrecto';
    }
});