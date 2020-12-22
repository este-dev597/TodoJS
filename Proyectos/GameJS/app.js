var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 4;
var dy = -4;

var hexc;

var paddleHeight = 10;
var paddleWidth = 95;
var paddleX = (canvas.width-paddleWidth)/2; /* La posición en el ejeX en la que empieza a dibujarse */
var rightPressed = false; /* las variables que nos dirán si se ha pulsado un botón */
var leftPressed = false;

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10; /* el hueco entre los ladrillos para que no se toquen */
var brickOffsetTop = 30;  /* margen superior (Top) e izquierdo (Left) para que no se dibujen tocando los bordes. */
var brickOffsetLeft = 30;

var score = 0;

var lives = 3;

var cronometro;
var contador_s = 0;
var contador_m = 0;

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];  /* Cada columna contendrá, a su vez, toda la fila (r) de ladrillos */
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };  /*  Cada ladrillo se va a representar con un objeto con las posiciones "x" e "y" en las que se dibujará  */
    }
}

document.addEventListener('keydown', keyDownHandler, false);  /* Cuando ocurra el evento keydown al pulsar cualquier tecla del teclado, la función keyDownHandler() se ejecutará */
document.addEventListener('keyup', keyUpHandler, false); /* Cuando se liberará la tecla pulsada, se ejecutará la función keyUpHandler() */
document.addEventListener('mousemove', mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {  /* e.keyCode nos va a decir qué tecla se ha pulsado */
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft ;
    if(relativeX > 0 && relativeX < canvas.width) {   /* calculamos un valor relativeX, que es la posición horizontal del ratón en el "viewport" (e.clientX), menos la distancia entre el borde izquierdo del terreno de juego y el borde izquierdo del "viewport" (canvas.offsetLeft) */
        paddleX = relativeX - paddleWidth/2;  /* Si el valor resultante es mayor que cero y menor que el ancho del terreno de juego, es que el ratón está dentro de los límites, y calculamos la posición de la paleta poniéndole el valor relativeX menos la mitad del ancho de la paleta, para que el movimiento sea de verdad relativo a la mitad de la paleta */
    }
}


function randCol(hexc) {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = '#';
    for(let i=0; i<6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    hexc= hexColor;
    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);
    }
    return hexc;

}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight); /* (punto de dibujo X, punto de dibujo Y, sigue dibjuando hasta... en X, sigue dibjuando hasta... en Y) */
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
          if(bricks[c][r].status == 1) {  
            var brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
            var brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
            bricks[c][r].x = brickX;  /* Cada ladrillo se dibujará en la posición (0, 0), tendrá un ancho brickWidth y un alto de brickHeight.  */
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = '#0095DD';
            ctx.fill();
            ctx.closePath();
          }
        }
    }
}

function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r]; /* definiremos la variable "b" que almacenará el objeto ladrillo en cada vuelta de bucle */
            if(b.status == 1) {
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    // hexc = randCol(hexc);
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert('YOU WIN, CONGRATULATIONS!');
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawScore() {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Score: ' + score, 8, 20);  /*  El primer parámetro es el texto en si y los otros dos son las coordenadas */
}

function drawLives() {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText('Lives: '+lives, canvas.width - 65, 20);
}

function carga() {
    s = document.getElementById('segundos');
    m = document.getElementById('milisegundos');

    cronometro = setInterval(
        function(){
            if(contador_m == 99) {
                contador_m = 0;
                contador_s++;
                s.innerHTML = contador_s;
                if(contador_s == 0){
                    contador_s = 0;
                }
            }

            m.innerHTML = contador_m;
            contador_m++;
        }
    ,10);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        
    }
    if(y + dy < ballRadius) {
        dy = -dy;
        

    // Si la bola toca el borde inferior del lienzo (Canvas) debemos comprobar si golpea la pala. Si es así, entonces rebota como el jugador se imagina que va a ocurrir; si no, el juego ha terminado.    
    } else if(y + dy > canvas.height - ballRadius) {
        if( x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
                alert('GAME OVER');
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height - 30;
                dx = 4;
                dy = -4;
                paddleX = (canvas.width - paddleWidth)/2;
            }
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}

draw();

