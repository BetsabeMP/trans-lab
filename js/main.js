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

//contraseña -> aceptar max 8 caracteres y solo números
const inputPassword = document.getElementById('inputPassword6');

inputPassword.addEventListener('input', function() {
    if (this.value.length > 8)
    this.value = this.value.slice(0,8);
})


/*
//llamar API
window.callData = (number) => {
    return fetch (`http://www.psep.cl/api/Bip.php?&numberBip=${number}`)
    .then ((answer) => {
        if (answer.ok) {
            return answer.json();
        } else {
            throw new Error ('la API falló');
        }
    }) .then ((answerJSON) => {
        console.log(answerJSON);
        return answerJSON;
    }) .catch ((bug) => {
        console.log(bug);
    });
};

window.onload = () => {
    callData(19420273);
}
*/