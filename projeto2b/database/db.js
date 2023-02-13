const mongoose = require("mongoose");
const url = process.env.URL_DB;
const dbName = process.env.DATABASE_NAME;

class DataBase {
    constructor() {
        this._startBanco();
    }

    _startBanco = () => {
        try {
            mongoose.connect(url, { dbName: dbName })
                .then(() => console.log("coneccao com banco de dados iniciado"));
        } catch (erro) {
            throw erro;
        }
    }

}




module.exports = new DataBase();
