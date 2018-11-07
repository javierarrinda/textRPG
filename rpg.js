let grid = [  
    ['p', null, 'o', null, null],
    ['o', null, null, null, 'o'],
    ['o', 'o', null, null, 'o'],
    ['e', null, 'm', null, 'o'],
    [null, null, 'o', 'o', null],];

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
//          ['p', null, 'o', null, null],
//          ['o', null, null, null, 'o'],
//          ['o', 'o', null, null, 'o'],
//          [null, 'o', null, null, 'o'],
//          [null, 'e', null, 'o', null],
            // }
            // {
//          ['p', null, 'o', null, null],
//          ['o', null, null, null, 'o'],
//          ['o', 'o', null, null, 'o'],
//          [null, 'o', null, null, 'o'],
//          [null, 'e', null, 'o', null],
            // }
// ];


document.getElementById('start-game').onclick = function () {
    console.log("game starting!")
    // player
    // let player = new Player(); 

//logs to the console what you have to do
console.log('You are at position ' + player.x + '. You have 120 seconds to finish the maze.')

    let theGame = new Game;

    Game.obstacles;
    // shuffleArray();
    gameWon();
}
let monster = new Monster();
let player = new Player();



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
// function monsterPosition(){
//     for (let i = 0; i > mon){

//     }
// }


document.body.onkeydown = function(e){
    // this if statement checks to see if the keys being pressed are left right up or down
    if (e.keyCode >= 37 && e.keyCode <= 40){
        // function to check if there is an obstacle
        function checkObstacles(){
            if (player.playerPosition == obstacles){
                return false;
            }
            return;
        }

        // function that checks to see if you're leaving the grid
        function noMove(axis, direction){
            //checks y axis
            if(axis == "y") {
                if(player.y < 1 && direction === "top" || direction === "down" &&player.y > 3){
                    console.log("oops, you're trying to leave the grid y");
                    return false
                } else {
                    return true   
                }
            }
            //checks for the x axis 
            if(axis == "x") {
                if(player.x < 1 && direction === "left" || direction === "right" && player.x > 3){
                    console.log("oops, you're trying to leave the grid x");
                    return false
                } else {
                    return true    
                }
            }

            return move(e);
            getObstacles();
        // moving around the grid
        function move(e){
            if (e.keyCode === 37){
                if(noMove("x", "left")) {
                    player.x -= 1;
                    console.log('moved one spot to the left');
                }
            } 
            if (e.keyCode === 39){
                if(noMove("x", "right")) {
                    player.x += 1;
                    console.log('moved one spot to the right');
                }
            } 
            if (e.keyCode === 38){
                if(noMove("y", "top")){
                    player.y -= 1;
                    console.log('moved one spot to the top');
                }
            } 
            if (e.keyCode === 40){
                if(noMove("y", "down")){
                    player.y += 1;
                    console.log('moved one spot down');
                    }
                }
            
            }
        
        
        }
    return noMove(e);
    }
}


