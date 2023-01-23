class crudUser {
    constructor(){
        const express = require("express");
        const router = express.Router();
        const estructura = require("../../bd/js/estructura/usuarios.js");
        //Consulta usuarios
        router.get('/', async (req, res) => {
            const users = await estructura.find();
            console.log(users);
            res.json(users);
        });
        //Consulta usuario
        router.get('/:id', async (req, res) => {
            const consultaUser = await estructura.findById(req.params.id);
            console.log(consultaUser);
            res.json(consultaUser);
        });
        //Guarda usuario
        router.post('/', async (req, res) => {
            const {codigo, fechaCreado, fechaVence, nombre, apellido, correo, usuario, clave, nivel, estatus} = req.body;
            const user = new estructura({codigo, fechaCreado, fechaVence, nombre, apellido, correo, usuario, clave, nivel, estatus});
            console.log(user);
            await user.save();
            res.json({status: 'Usuario guardado'});
        });
        //Actualiza usuario
        router.put('/:id', async (req, res) => {
            const {codigo, fechaCreado, fechaVence, nombre, apellido, correo, usuario, clave, nivel, estatus} = req.body;
            const updateUser = {codigo, fechaCreado, fechaVence, nombre, apellido, correo, usuario, clave, nivel, estatus};
            await estructura.findByIdAndUpdate(req.params.id, updateUser);
            console.log(req.params.id);
            console.log(updateUser);
            res.json({status: 'Usuario actualizado'});
        });
        //Elimina usuario
        router.delete('/:id', async (req, res) => {
            await estructura.findByIdAndRemove(req.params.id);
            console.log(req.params.id);
            res.json({status: 'Usuario eliminado'});
        });
        return router;
    }
}

const ruta = new crudUser();
module.exports = ruta;