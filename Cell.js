// Define the Cell class to represent individual cells on the game board
class Cell {
    constructor() {
        // Initialize the mark of the cell as 'z'
        this.mark = 'E' 
    }

    // Mark the cell with the given symbol
    markCell(symbol) {
        // Set the mark of the cell to the provided symbol
        this.mark = symbol
    }

    // Check if the cell is empty (marked with 'z')
    isCellEmpty() {
        return this.mark == 'E' 
    }

    // Retrieve the current mark of the cell
    getMark() {
        return this.mark
    }
}

// Export the Cell class to make it available for other modules
module.exports = Cell
