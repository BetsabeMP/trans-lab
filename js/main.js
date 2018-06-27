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
});

//imprimir opciones
window.writeOption = (options) => {
    let optionsHTML = '';
    optionsHTML = optionsHTML + `<div class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>`; 
let divOptions = document.getElementById('navbar');
divOptions.innerHTML = optionsHTML;

};

//pasar a la sig sección
const botonIniciarSesion = document.getElementById('botonIniciarSesion');
botonIniciarSesion.addEventListener('click', () => {
    window.writeOption();
    console.log(writeOption);
    
});


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