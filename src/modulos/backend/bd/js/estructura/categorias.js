const { Schema } = require("mongoose");
const { default: mongoose } = require("mongoose");

//Defino la estructura de la bd
class Categorias {
    constructor(){
        const mongoose  = require ("mongoose");
        const { schema } = mongoose;
        const estructuraCategoria = new Schema({
            codigo:{type: String, required: true},
            nombre: {type: String, require: true}
        });
        return estructuraCategoria;
    }
}

const categories = new Categorias();
module.exports = mongoose.model('categories', categories);