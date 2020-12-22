// bindamos al evento submit del elemento formulario la función de validación
document.getElementById("formulario").addEventListener("submit", function(event){
    let hasError = false;
    valor = document.getElementById('nombre').value;

    if( valor == null || valor.length == 0) {
      alert('Error, rellena el campo nombre');
      hasError = true;
    }

    // obtenemos todos los input radio del grupo horario que esten chequeados
    // si no hay ninguno lanzamos alerta
    if(!document.querySelector('input[name="horario"]:checked')) {
      alert('Error, rellena el campo horario');
      hasError = true;
      }

    if(!registro.checked ){
      alert('Debe aceptar el registro');
      hasError = true;
    }
    
    // si hay algún error no efectuamos la acción submit del form
    if(hasError) event.preventDefault();
});