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

}

module.exports = Block; // Export als Modul