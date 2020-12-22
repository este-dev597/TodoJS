document.getElementById("formulario").addEventListener("submit", function(evt){

    if(!document.querySelector('input[name="rpta"]:checked')) {
        alert('Elije una alternativa');
    }

    if(document.querySelector('input[id="correcto"]:checked')) {
        alert('Elejiste bien');
    } else {
        alert('Elejiste mal');
    }

})