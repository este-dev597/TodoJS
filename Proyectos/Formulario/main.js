var inputs = document.getElementsByClassName('formulario__input');  //inputs se convierte en un arreglo porque hay varios datos
for (var i=0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){  //keyup -> el evento cuando suelto una tecla
        if(this.value.length >= 1) {   //si el valor del input es uno o más...  // osea si hay al menos un caracter
            this.nextElementSibling.classList.add('fijar'); //selecciona al siguiente elemento (en este caso al label) y agregale la clase fijar
        }  else {  //si no es mayor igual a 1 (osea no hay nada), se le quita esa clase
            this.nextElementSibling.classList.remove('fijar');
        }
    });  
}
