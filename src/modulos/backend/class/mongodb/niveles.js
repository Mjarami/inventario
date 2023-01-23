class crudNiveles {
    constructor(){
        const express = require("express");
        const router = express.Router();
        const estructura = require("../../bd/js/estructura/niveles.js");
        //Consulta niveles
        router.get('/', async (req, res) => {
            const levels = await estructura.find();
            console.log(levels);
            res.json(levels);
        });
        //Consulta nivel
        router.get('/:id', async (req, res) => {
            const consultaLevel = await estructura.findById(req.params.id);
            console.log(consultaLevel);
            res.json(consultaLevel);
        });
        //Guarda nivel
        router.post('/', async (req, res) => {
            const {codigo, nombre} = req.body;
            const level = new estructura({codigo, nombre});
            console.log(level);
            await level.save();
            res.json({status: 'Nivel guardado'});
        });
        //Actualiza nivel
        router.put('/:id', async (req, res) => {
            const {codigo, nombre} = req.body;
            const updateLevel = {codigo, nombre};
            await estructura.findByIdAndUpdate(req.params.id, updateLevel);
            console.log(req.params.id);
            console.log(updateLevel);
            res.json({status: 'Nivel actualizado'});
        });
        //Elimina nivel
        router.delete('/:id', async (req, res) => {
            await estructura.findByIdAndRemove(req.params.id);
            console.log(req.params.id);
            res.json({status: 'Nivel eliminado'});
        });
        return router;
    }
}

const ruta = new crudNiveles();
module.exports = ruta;