const { Schema } = require("mongoose");
const { default: mongoose } = require("mongoose");
class ConectaBD {
    constructor(){
        const mongoose  = require ("mongoose");
        mongoose.connect("mongodb://127.0.0.1:27017/inventario")
            .then(db => console.log("DB is conected"))
            .catch(err => console.error(err));
        return mongoose;
    }
}

const bd = new ConectaBD();