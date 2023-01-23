class crudEstatus {
    constructor(){
        const express = require("express");
        const router = express.Router();
        const estructura = require("../../bd/js/estructura/estatus.js");
        //Consulta estatus
        router.get('/', async (req, res) => {
            const status = await estructura.find();
            console.log(status);
            res.json(status);
        });
        //Consulta estatu
        router.get('/:id', async (req, res) => {
            const consultaStatus = await estructura.findById(req.params.id);
            console.log(consultaStatus);
            res.json(consultaStatus);
        });
        //Guarda estatu
        router.post('/', async (req, res) => {
            const {codigo, nombre} = req.body;
            const statu = new estructura({codigo, nombre});
            console.log(statu);
            await statu.save();
            res.json({status: 'Status guardado'});
        });
        //Actualiza estatu
        router.put('/:id', async (req, res) => {
            const {codigo, nombre} = req.body;
            const updateStatus = {codigo, nombre};
            await estructura.findByIdAndUpdate(req.params.id, updateStatus);
            console.log(req.params.id);
            console.log(updateStatus);
            res.json({status: 'Status actualizado'});
        });
        //Elimina estatu
        router.delete('/:id', async (req, res) => {
            await estructura.findByIdAndRemove(req.params.id);
            console.log(req.params.id);
            res.json({status: 'Status eliminado'});
        });
        return router;
    }
}

const ruta = new crudEstatus();
module.exports = ruta;