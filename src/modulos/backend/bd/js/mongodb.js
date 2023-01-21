const { Schema } = require("mongoose");
const { default: mongoose } = require("mongoose");

class ConectaBD {
    constructor(){
        const mongoose  = require ("mongoose");
        mongoose.connect("mongodb://127.0.0.1:27017/sprun")
            .then(db => console.log("DB is conected"))
            .catch(err => console.error(err));
    }
}

//Defino la estructura de la bd y creo la coleccion users
class Usuarios {
    constructor(){
        const mongoose  = require ("mongoose");
        const { schema } = mongoose;
        new Schema({
            codigo:{type: String, required: true},
            fechaCreacion: {type: String, required: true},
            nombre: {type: String, required: true},
            usuario: {type: String, required: true},
            clave:{type: String, required: true},
            telefonos: {type: Array},
            nivel: {type: String, required: true},
            direccion: {type: Array},
            foto: {type: String},
            estado: {type: String, required: true},
            productos: {type: String}
            /*
            productos:[
                {
                    codigo:{type: String, required: true},
                    fechaCreacion: {type: String, required: true},
                    nombre: {type: String, require: true},
                    descripcion:{type: String},
                    precio: {type: Number, required: true, min: 0},
                    foto: {type: String},
                    categorias:[
                        {
                            codigo:{type: String, required: true},
                            nombre: {type: String, require: true},
                            descripcion:{type: String}
                        }
                    ]
                }
            ]
            */
        });
    }
}

const bd = new ConectaBD();
const users = new Usuarios();
module.exports = {bd};
module.exports = mongoose.model('users', users);