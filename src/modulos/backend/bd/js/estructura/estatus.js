const { Schema } = require("mongoose");
const { default: mongoose } = require("mongoose");

//Defino la estructura de la bd
class Estatus {
    constructor(){
        const mongoose  = require ("mongoose");
        const { schema } = mongoose;
        const estructuraEstatus = new Schema({
            codigo:{type: String, required: true},
            nombre: {type: String, required: true},
        });
        return estructuraEstatus;
    }
}

const status = new Estatus();
module.exports = mongoose.model('status', status);