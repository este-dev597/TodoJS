document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    
    let currentShooterIndex = 202;
    let width = 15;

    let currentEnemyIndex = 0;
    let direction = 1;

    let invaderId;


    

// define the enemy
const enemy = [0];

// draw the shooter 
squares[currentShooterIndex].classList.add('shooter');

// draw the enemy
enemy.forEach( enem => squares[currentEnemyIndex + enem].classList.add('invader') );

//move the shooter in the map
function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter');
    switch(e.keyCode) {
        case 37:
            if(currentShooterIndex % width !== 0) currentShooterIndex -= 1;
            break;
        case 39:
            if(currentShooterIndex % width < width - 1) currentShooterIndex += 1
            break;
        case 38:
            if(currentShooterIndex / width > 1) currentShooterIndex -= 15;
            break; // subir
        case 40:
            if(currentShooterIndex < width*(width-1)) currentShooterIndex += 15;
            break; // bajar
    }
    squares[currentShooterIndex].classList.add('shooter');
}
document.addEventListener('keydown', moveShooter);

// move the enemy
function moveEnemy() {
    // direction++;
    if(enemy[0] === width - 1){
        direction = -1;
    } else if (enemy[0] === 0) {
        direction = 1;
    }

    squares[enemy[0]].classList.remove('invader');
    
    enemy[0] = enemy[0] + direction;

    squares[enemy[0]].classList.add('invader');

}

invaderId = setInterval(moveEnemy, 100);
// moveEnemy();


// Shoot at aliens
function shoot(e) {
    let laserId;
    let currentLaserIndex = currentShooterIndex;
    // move the laser from the shooter to the alien Invader
    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser');
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add('laser');
        if(squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('laser');
            squares[currentLaserIndex].classList.remove('invader');
            squares[currentLaserIndex].classList.add('boom');

            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 250) ;
            clearInterval(laserId);
            alert('You win');
        }

        if(currentLaserIndex < width) {
            clearInterval(laserId);
            setTimeout(() => squares[currentLaserIndex].classList.remove('laser'), 100);
        }
    }



    
    switch(e.keyCode) {
        case 32: 
        laserId = setInterval(moveLaser, 100);
        break;
    }
}




document.addEventListener('keyup', shoot);





});
