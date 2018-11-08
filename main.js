let theGame;
let gameWon;
class Game {
    constructor(theGrid, player){
        this.grid = theGrid;
        this.player = player;
        this.obstacles = [];
        this.exit;
        this.timer = 60;
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

    setExit(){
        for (var x = 0; x < grid.length; x++){
            for (var y = 0; y < grid[x].length; y++){
                if(this.grid[x][y] === 'e'){
                    this.exit = [x, y];
                    // alert("YOU HAVE SUCCESSFULLY PASSED THIS LEVEL!!!")
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
        this.strength = 25;
        this.playerPosition = this.x, this.y;
    }
// checkIfTouched(player) {
//     if(game.playerPosition === game.obstacles){
//       this.touched = true;
//     }
//   } 
    countdown() {
        var seconds = 60;
        // function tick() {
            var counter = document.getElementById("counter");
            // seconds--;
            // counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
            let timer = setInterval(() => {
                seconds--
                counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
                if(seconds === 0){
                    clearInterval(timer)
                    alert("Game Over !!!!!")
                }
            }, 600)
        //     if( seconds > 0 ) {
        //         // setTimeout(tick, 2200);
        //     } else {
        //         alert("Game over");
        //     }
        // }
        // tick();
        }
    // }

    noMove(theX, theY){
        if(theX >= 0 && theX <= theGame.grid.length && theY >= 0 && theY <=  theGame.grid[0].length) {
            return true
        } else {
            console.log("oops, you're trying to leave the grid.");
            document.getElementById('idOutputText').innerHTML = "Looks like you're trying to leave the grid.";
            return false
        }
    }
}

    class Monster {
        constructor(){
            this.health = 20;
            this.strength = 25;
            this.monsterPosition;
        }

        setMonster(){
            for (var x = 0; x < grid.length; x++){
                for (var y = 0; y < grid[x].length; y++){
                    if(this.grid[x][y] === 'm'){
                        this.monsterPosition = [x, y];
                        // alert("YOU HAVE SUCCESSFULLY PASSED THIS LEVEL!!!")
                    }
                }
            }
        }
 
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
// ]


document.getElementById('start-game').onclick = function () {
    prompt('are you sure? Timer will start now.');
    console.log("game starting!")
    document.getElementById('idOutputText').innerHTML = "Well, even if you ain't. <br>You are at position " + player.x + ". This is the top of the grid. You have 60 seconds to finish the maze. Use your arrow keys to walk through.";
    // calling the shuffle array function
    // shuffleArray();
    document.getElementById('start-game').style = "display:none";
    theGame = new Game(grid, new Player());
    theGame.setExit();
    var audio = new Audio('SOUNDS/creepy-background-daniel_simon.mp3');
    console.log("******** ", theGame);
    theGame.player.countdown();
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
        //make the monster prompt a question. each question asked takes away 10 life. two right answers lets you kill the monster
    }


document.body.onkeydown = function(e){
    // this if statement checks to see if the keys being pressed are left right up or down
    if (e.keyCode >= 37 && e.keyCode <= 40){
        // function that checks to see if you're leaving the grid
        // function noMove(theX, theY){
        //     if(theX >= 0 && theX <= theGame.grid.length && theY >= 0 && theY <=  theGame.grid[0].length) {
        //         return true
        //     } else {
        //         console.log("oops, you're trying to leave the grid");
        //         document.getElementById('idOutputText').innerHTML = "Looks like you're trying to leave the grid";
        //         return false
            
            //checks y axis
            // if(axis == "y") {
            //     if(player.y < 1 && direction === "top" || direction === "down" &&player.y > 3){
            //         console.log("oops, you're trying to leave the grid y");
            //         document.getElementById('idOutputText').innerHTML = "Looks like you're trying to leave the grid";
            //         return false
            //     } else {
            //         return true   
            //     }
            // }
            // // checks for the x axis 
            // if(axis == "x") {
            //     if(player.x < 1 && direction === "left" || direction === "right" && player.x > 3){
            //         console.log("oops, you're trying to leave the grid x");
            //         document.getElementById('idOutputText').innerHTML = "Looks like you're trying to leave the grid";
            //         return false
            //     } else {
            //         return true    
            //     }
            // }
            // return move(e);
            //check obstacles with futureX and futureY


            function obstacles(futureX, futureY){
                // console.log("the obstacle function")
                let result = true
                for(let k = 0; k < theGame.obstacles.length; k++){
                    // console.log("running for loop for obstacles")
                    if(futureX == theGame.obstacles[k][0] && futureY == theGame.obstacles[k][1]){
                        console.log(">>>>> the game obstacle in for loop <<<<< ", theGame.obstacles[k]);
                        document.getElementById('idOutputText').innerHTML = "There is a wall there. Movement is not allowed.";
                        result = false;
                    }
                }
                if(futureX === theGame.exit[0] && futureY === theGame.exit[1]) {
                    setTimeout(() => {
                        alert("YOU HAVE SUCCESSFULLY PASSED THIS LEVEL!!!")
                    }, 1)
                    window.location.reload();
                }
                return result;
            }


            // moving around the grid
            function move(e){
                // obstacles(player.x, player.y);
            if (e.keyCode === 37){
                if(player.noMove(player.x-1, player.y)) {
                    if(obstacles(player.x-1, player.y)){
                        player.x -= 1;
                        console.log('moved one spot to what you believe to be left');
                        document.getElementById('idOutputText').innerHTML = "moved one spot to what you believe to be the left.";
                    }
                }
            } 
            if (e.keyCode === 39){
                if(player.noMove(player.x+1, player.y)) {
                    if(obstacles(player.x+1, player.y)){
                        player.x += 1;
                        console.log('moved one spot to what you believe to be right');
                        document.getElementById('idOutputText').innerHTML = "moved one spot to what you believe to be the right.";
                    }
                }
            } 
            if (e.keyCode === 38){
                if(player.noMove(player.x, player.y-1)){
                    if(obstacles(player.x, player.y-1)){
                        player.y -= 1;
                        console.log('moved one spot to what you believe to be top');
                        document.getElementById('idOutputText').innerHTML = "moved one spot to what you believe to be up.";
                    }
                }
            } 
            if (e.keyCode === 40){
                if(player.noMove(player.x, player.y+1)){
                    if(obstacles(player.x, player.y+1)){
                        player.y += 1;
                        console.log('moved one spot to what you believe to be down');
                        document.getElementById('idOutputText').innerHTML = "moved one spot to what you believe to be down.";
                    }
                }
            }
        }  
    }
    console.log('------------- ', player.x, player.y)
    move(e);
    


}


