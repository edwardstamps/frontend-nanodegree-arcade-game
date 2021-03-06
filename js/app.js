




// Enemies our player must avoid
var Enemy = function(x, y) {
    this.speed = Math.random() * (400-100)+100;
    this.x = x;
    this.y = Math.random()*(220-42)+42;

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    /* if (player === (202,404)) {
        this.speed=0;
    } */
    if (this.x < 606) {
        this.x += this.speed * dt;

    }else{
        this.x=0
        this.y = Math.random()*(220-42)+42;
    }

    if(player.x >= this.x - 30 && player.x <= this.x + 30){
        if(player.y >= this.y - 30 && player.y <= this.y + 30){
        Player.prototype.reset();
        }
    }




    


    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

var Player = function() {
    
    this.x = 202;
    this.y = 404;

    this.guy = 'images/char-boy.png';
}

Player.prototype.reset = function() {

    player.x = 202;
    player.y = 404;

}


Player.prototype.update = function() {
    if (this.Key === 'left') {
        this.x = this.x - 101;

    }

    if (this.Key === 'left' && this.x === -101) {
        this.x = 505;

    } 

     if (this.Key === 'right') {
        this.x = this.x + 101;

    }

     if (this.Key === 'right' && this.x === 606) {
        this.x = 0;

    }

     if (this.Key === 'up') {
        this.y = this.y - 83;

    }

     if (this.Key === 'down') {
        this.y = this.y + 83;

    }

    this.Key = null;

    if (this.y < 60){
        this.reset();
    }

    
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.guy), this.x, this.y);
}

Player.prototype.handleInput = function(e){
    this.Key = e;    
}



var allEnemies = [];



var makeEnemies = function(){
    allEnemies.push(new Enemy(-50));
    allEnemies.push(new Enemy(-200));
    allEnemies.push(new Enemy(-300));
    
}();


var player = new Player();
    

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
