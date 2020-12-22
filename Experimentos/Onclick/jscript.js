document.getElementById('boton').addEventListener('click', sumar);

function sumar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var suma = parseInt(num1) + parseInt(num2);
    alert("La suma es: " + suma);
}