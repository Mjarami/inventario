class Router {
    constructor(){
        const express = require("express");
        const router = express.Router();
        const estructura = require("../../bd/js/mongodb.js");
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
            const {codigo, fechaCreacion, nombre, usuario, clave, telefonos, nivel, direccion, foto, estado, productos} = req.body;
            const user = new estructura({codigo, fechaCreacion, nombre, usuario, clave, telefonos, nivel, direccion, foto, estado, productos});
            console.log(user);
            await user.save();
            res.json({status: 'Usuario guardado'});
        });
        //Actualiza usuario
        router.put('/:id', async (req, res) => {
            const {codigo, fechaCreacion, nombre, usuario, clave, telefonos, nivel, direccion, foto, estado, productos} = req.body;
            const updateUser = {codigo, fechaCreacion, nombre, usuario, clave, telefonos, nivel, direccion, foto, estado, productos};
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
        module.exports = router;
    }
}

const ruta = new Router();