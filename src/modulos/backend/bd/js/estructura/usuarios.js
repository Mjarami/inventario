const { Schema } = require("mongoose");
const { default: mongoose } = require("mongoose");

//Defino la estructura de la bd
class Usuarios {
    constructor(){
        const mongoose  = require ("mongoose");
        const { schema } = mongoose;
        const estructuraUsuario = new Schema({
            codigo:{type: String, required: true},
            fechaCreado: {type: String, required: true},
            fechaVence: {type: String, required: true},
            nombre: {type: String, required: true},
            apellido: {type: String, required: true},
            correo: {type: String, required: true},
            usuario: {type: String, required: true},
            clave:{type: String, required: true},
            nivel: {type: String, required: true},
            estatus: {type: String, required: true}
        });
        return estructuraUsuario;
    }
}

const users = new Usuarios();
module.exports = mongoose.model('users', users);