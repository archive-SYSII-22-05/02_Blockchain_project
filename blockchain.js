
// Import
const Block = require("./block");

class Blockchain{

    constructor(){
        // Chain - Array mit Blöcken
        this.chain = [Block.genesis()];
    }

    addBlock(){

    }

}

module.exports = Blockchain;