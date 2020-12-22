var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    // btnSubmit = document.getElementById('boton');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});    

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});    





function getData(objeto) {
    let name = document.getElementById('name').value;
    let nombre = objeto.nombre;
    // var correo = document.getElementById('correo').value;
    // console.log(name);
    // console.log(correo);
    
    
    console.log(name);
    
}

var info = {nombre: name, adress: '@'}

getData(info);

