
const Cell = require("./Cell")

class Board {
    constructor() {
        // Initialize the cells of the game board using the Cell class
        this.cells = [new Cell(), new Cell(), new Cell(),
        new Cell(), new Cell(), new Cell(),
        new Cell(), new Cell(), new Cell(),]
    }
    // Check if a specific cell is empty
    isCellEmpty(cellNumber) {
        return this.cells[cellNumber].isCellEmpty()
    }
    // Mark a specific cell with a given symbol
    markCell(cellNumber, symbol) {
        this.cells[cellNumber].markCell(symbol)
    }
    // Analyze the current state of the board to determine if there's a winner or a draw

    winningCondition() {
        //winning conditions
        //avoid srp (single responsiblity principle)==> every class,module or function must have only one responsibility/purpose in program.
        //hence seperated the winning condition  and draw condition 
        if (this.cells[0].getMark() == this.cells[1].getMark() &&    //cells=> 0,1,2 (row 1)
            this.cells[0].getMark() == this.cells[2].getMark() &&
            !this.cells[0].isCellEmpty()
        ) {
            return [this.cells[0].getMark()]
        }
        if (this.cells[3].getMark() == this.cells[4].getMark() &&   // cells=> 3,4,5 (row 2)
            this.cells[4].getMark() == this.cells[5].getMark() &&
            !this.cells[3].isCellEmpty()
        ) {
            return [this.cells[3].getMark()]
        }
        if (this.cells[6].getMark() == this.cells[7].getMark() &&   //cells => 6,7,8 (row 3)
            this.cells[7].getMark() == this.cells[8].getMark() &&
            !this.cells[6].isCellEmpty()
        ) {
            return [this.cells[6].getMark()]
        }
        if (this.cells[0].getMark() == this.cells[3].getMark() &&  //cells => 0,3,6 (column 1)
            this.cells[3].getMark() == this.cells[6].getMark() &&
            !this.cells[0].isCellEmpty()
        ) {
            return [this.cells[0].getMark()]
        }
        if (this.cells[1].getMark() == this.cells[4].getMark() &&  //cells => 1,4,7 (column 2)
            this.cells[4].getMark() == this.cells[7].getMark() &&
            !this.cells[1].isCellEmpty()
        ) {
            return [this.cells[1].getMark()]
        }
        if (this.cells[2].getMark() == this.cells[5].getMark() &&   //cells => 2,5,8 (column 3)
            this.cells[5].getMark() == this.cells[8].getMark() &&
            !this.cells[2].isCellEmpty()
        ) {
            return [this.cells[2].getMark()]
        }

        if (this.cells[0].getMark() == this.cells[4].getMark() && // cells=> 0,4,8 (diagonal 1)=> left
            this.cells[4].getMark() == this.cells[8].getMark() &&
            !this.cells[0].isCellEmpty()
        ) {
            return [this.cells[0].getMark()]
        }
        if (this.cells[2].getMark() == this.cells[4].getMark() &&  //cells => 2,4,6 (diagonal 2)=> right
            this.cells[4].getMark() == this.cells[6].getMark() &&
            !this.cells[2].isCellEmpty()
        ) {
            return [this.cells[2].getMark()]
        }
        return ["Continue Playing"]

    }

    drawCondition() {
        //draw condition

        //checks if cell is empty and if it is, isDraw is set to false
        for (let index = 0; index < this.cells.length; index++) {
            if (this.cells[index].isCellEmpty()) {

                return false
            }
        }
        // If the board is full and no winner, the game is a draw
        return true

    }

    printBoard() {
        // Print the current state of the board     

        console.log(this.cells)

    }

}
module.exports = Board