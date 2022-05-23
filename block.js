
const SHA256 = require("crypto-js/sha256");

class Block{

    // Konstruktor + Parameter
    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash; // Hash des vorhergehenden Blocks
        this.hash = hash; // Hash des eigenen Blocks
        this.data = data; // Daten des eigenen Blocks
    }

    // String-Literal für Monitoring
    toString(){
        return ` Block -
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash}
        Hash: ${this.hash}
        Data: ${this.data}
        `
    }

    static genesis(){ // 1. Block der chain
        return new this("Genesis time","-----","xABc1234",["data1","data2,data3"]);
    }

    static mineBlock(lastBlock,ownData){ // weitere Blocks in der Chain

        const timestamp = Date.now(); // Zeit im ms seit 01.01.1970 | UNIX
        const lastHash = lastBlock.hash; // HASH-Wert des Vorgängers
        const hash = Block.hash(timestamp,lastHash,ownData);


        return new this(timestamp,lastHash,hash,"ownData");
    }

    static hash(timestamp,lastHash,data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

}

module.exports = Block; // Export als Modul