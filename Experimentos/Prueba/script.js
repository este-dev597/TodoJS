var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function drawBlock() {
    ctx.beginPath();
    ctx.rect(350, 325, 50, 50);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

drawBlock();

