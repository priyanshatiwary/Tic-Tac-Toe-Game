// Define the Player class to represent players and their symbols
class Player {
    constructor(name, symbol) {
        // Initialize the player's name and symbol
        this.name = name
        this.symbol = symbol
    }

    // Retrieve the symbol associated with the playerno
    getSymbol() {
        return this.symbol
    }
}

// Export the Player class to make it available for other modules
module.exports = Player
