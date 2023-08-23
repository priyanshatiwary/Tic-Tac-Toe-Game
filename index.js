//driver
// Import the Game module
const Game = require("./Game");

//create a new game instance using the static method newGame from the Game module
//parameters : player0Name,player1Name
//let [msg, g1] = Game.newGame("1","XYZ")//
let g1 = new Game("Priyansha", "Prerana")
/*
 let g2 = new Game("ABC","XYZ")
 let g3 = new Game("ABC","XYZ")
 let g4 = new Game("ABC","XYZ")
 
*/
//checking validations (should be between 0 to 8)
/* 
console.log(g1.play(9))
console.log(g1.play(-2))
console.log(g1.play('g')) 
*/

//for playing moves on additional game instances
//console.log(g2.play(5))

// Winning condition for x ==> 2,4,6 (diagonal)
console.log(g1.play(2))//x
console.log(g1.play(0))//o
console.log(g1.play(6))//x
console.log(g1.play(1))//0
console.log(g1.play(4))//x
console.log(g1.play(3))//o

// Winning condition for O ==> 0,1,2 (row 1)
/*
 console.log(g1.play(8))//x
 console.log(g1.play(0))//o
 console.log(g1.play(3))//x
 console.log(g1.play(1))//o
 console.log(g1.play(4))//x
 console.log(g1.play(2))//o
*/

// Draw condition
/*
console.log(g1.play(0)) //x
console.log(g1.play(1)) //0
console.log(g1.play(2)) //x
console.log(g1.play(3)) //0
console.log(g1.play(4)) //x
console.log(g1.play(6)) //0
console.log(g1.play(5)) //x
console.log(g1.play(8)) //0
console.log(g1.play(7)) //x
*/