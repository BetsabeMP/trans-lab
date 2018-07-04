//imprimir opciones
window.writeOption = (options) => {
    let optionsHTML = '';
    optionsHTML = optionsHTML + `<div class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4 optionsnav">
        <div>
            <button type="button" class="btnNavbar">Ver saldo</button>
        </div>
        <div>
            <button type="button" class="btnNavbar">Calcular Tarifa</button>
        </div>
        <div>
            <button type="button" class="btnNavbar">Perfil</button>
        </div>
        <div>
            <button type="button" class="btnNavbar">Preguntas Frecuentes</button>
        </div>
        <div>
            <button type="button" class="btnNavbar">Home</button>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navTitle">TRANS-LAB</div>
    </nav>
  </div>`; 
    let divOptions = document.getElementById('navbar');
    divOptions.innerHTML = optionsHTML;

    let optionsHTMLrowDos = '';
    optionsHTMLrowDos = optionsHTMLrowDos + `<div class="d-flex flex-sm-column optionsDos">
    <button type="button" class="btnOptions">VER SALDO</button>
</div>
<div class="d-flex flex-sm-column optionsDos">
    <button type="button" class="btnOptions">CALCULAR TARIFA</button>
</div>
<div class="d-flex flex-sm-column optionsDos">
    <button type="button" class="btnOptions">PERFIL</button>
</div>
<div class="d-flex flex-sm-column optionsDos">
    <button type="button" class="btnOptions">PREGUNTAS FRECUENTES</button>
</div>`;
    let divOptionsrowDos = document.getElementById('rowDos');
    divOptionsrowDos.innerHTML = optionsHTMLrowDos;

};


//validar Email
window.validarEmail = (email) => {
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
}

//max 8 carácteres
window.inputPass = (input) => {
    const inputPassword = document.getElementById('inputPassword6');
    inputPassword.addEventListener('input', function() {
        if (this.value.length > 8)
        this.value = this.value.slice(0,8);
    });
}
