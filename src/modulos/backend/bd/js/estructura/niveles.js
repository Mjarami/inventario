const { Schema } = require("mongoose");
const { default: mongoose } = require("mongoose");

//Defino la estructura de la bd
class Niveles {
    constructor(){
        const mongoose  = require ("mongoose");
        const { schema } = mongoose;
        const estructuraNivel = new Schema({
            codigo:{type: String, required: true},
            nombre: {type: String, required: true},
        });
        return estructuraNivel;
    }
}
const levels = new Niveles();
module.exports = mongoose.model('levels', levels);