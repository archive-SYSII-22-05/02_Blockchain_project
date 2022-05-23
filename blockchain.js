
// Import
const Block = require("./block");

class Blockchain{

    constructor(){
        // Chain - Array mit Blöcken
        this.chain = [Block.genesis()];
    }

    addBlock(data){
        // Verweis auf Vorgänger --> arr.length - 1
        const lastBlock  = this.chain[this.chain.length - 1]
        // Block erzeugen
        const block = Block.mineBlock(lastBlock,data);
        // Block an Chain anhängen
        this.chain.push(block);
    }

}

module.exports = Blockchain;