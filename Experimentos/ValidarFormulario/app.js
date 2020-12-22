var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';

var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
    evt.preventDefault();
        
    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }

    if(password.value === null || password.value === ''){
        mensajesError.push('Ingresa tu password');
    }

    error.innerHTML = mensajesError.join(', ');

    });