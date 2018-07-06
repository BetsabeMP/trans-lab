//imprimir opciones
window.writeOption = () => {
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
            <button type="button" class="btnNavbar" id="perfilnav">Perfil</button>
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
    <button type="button" class="btnOptions id="perfilOption">PERFIL</button>
</div>
<div class="d-flex flex-sm-column optionsDos">
    <button type="button" class="btnOptions">PREGUNTAS FRECUENTES</button>
</div>`;
    let divOptionsrowDos = document.getElementById('rowDos');
    divOptionsrowDos.innerHTML = optionsHTMLrowDos;

};

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



