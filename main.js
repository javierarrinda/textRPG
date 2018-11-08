let theGame;
let gameWon;
class Game {
    constructor(theGrid, player){
        this.grid = theGrid;
        this.player = player;
        this.obstacles = [];
        this.timer = 120;
        this.monsterPosition = [];
        this.getObstacles();
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

    gameWon(){
        for (var x = 0; x < grid.length; x++){
            for (var y = 0; y < grid[x].length; y++){
                if(this.grid[x][y] === 'e'){
                    alert("YOU HAVE SUCCESSFULLY PASSED THIS LEVEL!!!")
                }
            }
        }
        //for each loop that itirates through array and puts objects, should return false if there is an object there
        game.player.forEach((obstacle) => {
            checkIfTouched(this.player)
            if(checkIfTouched === true){
                document.getElementById('idOutputText') = "You can't move in that direction, there seems to be a wall.";
             return false;
            }
          })
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
checkIfTouched(player) {
    if(game.playerPosition === game.obstacles){
      this.touched = true;
    }
  } 

}

    class Monster{
        constructor(){
            this.x = 2;
            this.y = 3;
            this.health = 20;
            this.strength = 50;
            this.monsterPosition = this.x, this.y;
        }

        // trying to prompt user when monster position is the same as the player position
        // if(playerPosition === monsterPosition ){
        //     prompt("do you like football");
        //     return;
        // }
}
 
    class Timer {

        constructor(seconds){

            var seconds=120;
            var timer;
        function myFunction() {
            if(seconds < 120) {
                document.getElementById("timer").innerHTML = seconds;
            }
            if (seconds >0 ) {
                seconds--;
            } else {
                clearInterval(timer);
                alert("YOU ARE A LOSER");
            }
        }
        document.getElementById("start-game").onclick = function() {
            if(!timer) {
                timer = window.setInterval(function() {
                    myFunction();
                }, 1200);
            }
        } 
        
        document.getElementById("timer").innerHTML="2:00"; 
        
    }
}


let grid = [  
    ['p', null, 'o', null, null],
    ['o', null, null, null, 'o'],
    ['o', 'o', null, null, 'o'],
    ['e', null, 'm', null, 'o'],
    [null, null, 'o', 'o', null],
];

    // sample two grids within objects
// let grid = [
            // {
    //     ['p', null, 'o', null, null],
    //     ['o', null, null, null, 'o'],
    //     ['o', 'o', null, null, 'o'],
    //     ['e', null, null, null, 'o'],
    //     [null, null, 'o', 'o', null],
            // }
            // {
    //     ['p', null, 'o', null, null],
    //     ['o', null, null, null, 'o'],
    //     ['o', 'o', null, null, 'o'],
    //     [null, 'o', null, null, 'o'],
    //     [null, 'e', null, 'o', null],
            // }
            // {
    //     ['p', null, 'o', null, null],
    //     ['o', null, null, null, 'o'],
    //     ['o', 'o', null, null, 'o'],
    //     [null, 'o', null, null, 'o'],
    //     [null, 'e', null, 'o', null],
            // }
// ];

document.getElementById('pictureDiv').style = "display:none";


document.getElementById('start-game').onclick = function () {
    console.log("game starting!")
    // player
    //logs to the console what you have to do
    // console.log('You are at position ' + player.x + '. You have 120 seconds to finish the maze.')
    // document.getElementById('idOutputText').innerHTML = "You are at position " + player.x + ". You have 120 seconds to finish the maze. Use your arrow keys to walk through.";
    // Game.obstacles;
    // calling the shuffle array function
    // shuffleArray();
    document.getElementsByClassName('arrowKeysPictures').style = "visibility:visible"
    document.getElementById('start-game').style = "display:none";
    theGame = new Game(grid, new Player());
}
let player = new Player(); 
// let gameWon = gameWon();
// let getObstacles = this.obstacles;
let monster = new Monster();
// let player = new Player();

    // shuffle through the arrays in order to select a specific grid
    // function shuffleArray(gridArray){
    //     for (let i = 0; i > gridArray.length; i++){
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = gridArray[i];
    //         gridArray[i] = gridArray[j];
    //         gridArray[j] = temp;
    //     }
    // }


    // randomize the position of the monster on the grid, only on spots that are null
    function monsterPosition(){
        // for (let i = 0; i > mon){

        // }

        //make the monster prompt a question. each question asked takes away 10 life. two right answers lets you kill the monster
    }


document.body.onkeydown = function(e){
    // this if statement checks to see if the keys being pressed are left right up or down
    if (e.keyCode >= 37 && e.keyCode <= 40){
        //

        // function that checks to see if you're leaving the grid
        function noMove(axis, direction){
            //checks y axis
            if(axis == "y") {
                if(player.y < 1 && direction === "top" || direction === "down" &&player.y > 3){
                    console.log("oops, you're trying to leave the grid y");
                    document.getElementById('idOutputText').innerHTML = "Looks like you're trying to leave the grid";
                    return false
                } else {
                    return true   
                }
            }
            //checks for the x axis 
            if(axis == "x") {
                if(player.x < 1 && direction === "left" || direction === "right" && player.x > 3){
                    console.log("oops, you're trying to leave the grid x");
                    document.getElementById('idOutputText').innerHTML = "Looks like you're trying to leave the grid";
                    return false
                } else {
                    return true    
                }
            }
            return move(e);
            // moving around the grid
            function move(e){
            if (e.keyCode === 37){
                if(noMove("x", "left")) {
                    player.x -= 1;
                    console.log('moved one spot to the left');
                    document.getElementById('idOutputText').innerHTML = "Moved one spot to the left.";
                }
            } 
            if (e.keyCode === 39){
                if(noMove("x", "right")) {
                    player.x += 1;
                    console.log('moved one spot to the right');
                    document.getElementById('idOutputText').innerHTML = "Moved one spot to the right.";
                }
            } 
            if (e.keyCode === 38){
                if(noMove("y", "top")){
                    player.y -= 1;
                    console.log('moved one spot to the top');
                    document.getElementById('idOutputText').innerHTML = "Moved one spot up.";
                }
            } 
            if (e.keyCode === 40){
                if(noMove("y", "down")){
                    player.y += 1;
                    console.log('moved one spot down');
                    document.getElementById('idOutputText').innerHTML = "Moved one spot down.";
                    }
                }
            
            }
        
        
        }
    return noMove(e);
    }
}





