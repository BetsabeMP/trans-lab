window.onload = () => {
    //pasar a la sig sección
    const botonIniciarSesion = document.getElementById('botonIniciarSesion');
    botonIniciarSesion.addEventListener('click', () => {
        const userEmail = validarEmail();
        if (userEmail === true && inputPass === true) {
            window.writeOption();
        }
        console.log("hola");
        
    });
};

//validar Email
const validarEmail = () => {
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
const inputPass = () => {
    const inputPassword = document.getElementById('inputPassword6');
    inputPassword.addEventListener('input', function() {
        if (this.value.length > 8)
        this.value = this.value.slice(0,8);
    });
};



/*
//perfil usuario
let navPerfil = document.getElementById('perfilnav');

navPerfil.addEventListener('click', () => {
    console.log('holo');

}); */
 
