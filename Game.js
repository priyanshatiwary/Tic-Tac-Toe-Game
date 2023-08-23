// Import the Board and Player modules to use in the game
const Board = require("./Board")
const Player = require("./Player")

// Define the Game class to manage the Tic Tac Toe game
class Game {
    constructor(player0Name, player1Name) {
        // Initialize the game properties
        this.isGameEnded = false
        this.turn = 0
        this.board = new Board()
        this.players = [
            new Player(player0Name, 'X'),
            new Player(player1Name, 'O')
        ];
    }

    // Create a new game instance with validation
    static newGame(player0Name, player1Name) {
        // Validate the parameters
        if (
            player0Name != player1Name ||
            typeof player0Name != 'string' ||
            typeof player1Name != 'string'
        ) {
            return ['invalid parameters', null]
        }
        // Create a new game instance and return it along with a message
        return ["Object Created", new Game(player0Name, player1Name)]
    }

    // Play a move in the game
    play(cellNumber) {
        // Validate the game state and the chosen cell
        if (isNaN(cellNumber) || cellNumber < 0 || cellNumber > 8) {
            return 'Invalid cell number. Please choose a number between 0 and 8.';
        }
        if (this.isGameEnded) {
            return 'Game has Ended'
        }
        if (!this.board.isCellEmpty(cellNumber)) {
            return 'Cell is not empty'
        }

        // Determine the current player based on the turn number
        let currentPlayer = null
        if (this.turn % 2 == 0) {   //X will be even turns
            currentPlayer = this.players[0]
        }
        else {
            currentPlayer = this.players[1] //O will be odd turns
        }
        //Another way:
        // let currentPlayer = this.players[this.turn % 2] //odd = O, even = X

        // Mark the chosen cell with the player's symbol
        this.board.markCell(cellNumber, currentPlayer.getSymbol())

        // Increase the turn count
        this.turn++;

        // Analyze the result to check for a winner or draw
        let winnerSymbol = this.board.winningCondition()
        // console.log("Winner Symbol",winnerSymbol)
        let winner = null;

        // Check for a winner and end the game if necessary
        if (winnerSymbol == 'X') {
            winner = this.players[0]
            this.isGameEnded = true
            return `Game has been won by ${winner.name}`;
        }

        if (winnerSymbol == 'O') {
            winner = this.players[1]
            this.isGameEnded = true
            return `Game has been won by ${winner.name}`;
        }

        // Check for a draw and end the game if necessary
        /*
         if (gameStatus == "Draw") {
             this.isGameEnded = true
             return 'Game has ended in a draw'
         }
        */

        if (this.board.drawCondition()) {
            this.isGameEnded = false

            return 'Game has ended in a draw'
        }
        /* if(winner == null && this.isGameEnded){
           return 'Game has ended in a draw'
         }
         */

        // Print the current state of the board and continue playing
        this.board.printBoard()
        return 'Continue Playing'
    }
}

// Export the Game class to make it available for other modules
module.exports = Game
