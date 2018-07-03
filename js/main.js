window.onload = () => {
    window.validarEmail();

//pasar a la sig sección
const botonIniciarSesion = document.getElementById('botonIniciarSesion');
botonIniciarSesion.addEventListener('click', () => {
   
        window.writeOption();
    
});

};


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