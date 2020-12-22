/* var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');      // ? : operador ternario
}

// Comienza con una condición de prueba: select.value === 'black'. 
// Si esto devuelve verdadero, ejecutamos la función update () con parámetros de blanco y negro, 
// lo que significa que terminamos con un color de fondo negro y un color de texto blanco. 
// Si devuelve falso, ejecutamos la función update () con parámetros de blanco y negro, 
// lo que significa que el color del sitio está invertido

 */

var select = document.querySelector('select');
var html = document.querySelector('body');

select.onchange = function() {
 var choice = select.value;

 switch(choice) {
 case 'black':
 update('black','white');
 break;
 case 'white':
 update('white','black');
 break;
 case 'purple':
 update('purple','white');
 break;
 case 'yellow':
 update('yellow','darkgray');
 break;
 case 'psychedelic':
 update('lime','purple');
 break;
 }
}

function update(bgColor, textColor) {
 html.style.backgroundColor = bgColor;
 html.style.color = textColor;
}