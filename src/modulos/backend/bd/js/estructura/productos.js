const { Schema } = require("mongoose");
const { default: mongoose } = require("mongoose");

//Defino la estructura de la bd
class Productos {
    constructor(){
        const mongoose  = require ("mongoose");
        const { schema } = mongoose;
        const estructuraProducto = new Schema({
            codigo:{type: String, required: true},
            usuario:{type: String, required: true},
            fechaCreado: {type: String, required: true},
            nombre: {type: String, require: true},
            descripcion:{type: String},
            precio: {type: String, required: true, min: 0},
            foto: {type: String},
            categorias: {type: Array}
        });
        return estructuraProducto;
    }
}

const products = new Productos();
module.exports = mongoose.model('products', products);