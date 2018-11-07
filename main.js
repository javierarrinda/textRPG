class Game {
    constructor(theGrid, player){
        this.grid = theGrid;
        this.player = player;
        this.obstacles = [];
        this.timer = 120;
    }
    
    getObstacles() {

        for (var x = 0; x < grid.length; x++){
            for (var y = 0; y < grid[x].length; y++){
                if(this.grid[x][y] === 'o'){
                    this.obstacles.push([x, y])
                }
                
            }
        }
    }

}  


class Player{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.health = 50;
        this.strength = 10;
        this.playerPosition = this.x, this.y;
    }

    // attack() {

    // }

    // receiveDamage() {

    // }

}

    
    class Timer {

        constructor(seconds){

            var seconds=720;
            var timer;
        function myFunction() {
            if(seconds < 720) {
                document.getElementById("timer").innerHTML = seconds;
            }
            if (seconds >0 ) {
                seconds--;
            } else {
                clearInterval(timer);
                alert("YOU ARE A LOSER");
            }
        }
        document.getElementById("textarea").onkeypress = function() {
            if(!timer) {
                timer = window.setInterval(function() {
                    myFunction();
                }, 1000);
            }
        } 
        
        document.getElementById("timer").innerHTML="12:00"; 
        
    }
}



