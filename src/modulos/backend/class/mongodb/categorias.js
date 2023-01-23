class crudCategories {
    constructor(){
        const express = require("express");
        const router = express.Router();
        const estructura = require("../../bd/js/estructura/categorias.js");
        //Consulta categorias
        router.get('/', async (req, res) => {
            const categories = await estructura.find();
            console.log(categories);
            res.json(categories);
        });
        //Consulta categoria
        router.get('/:id', async (req, res) => {
            const consultaCategory = await estructura.findById(req.params.id);
            console.log(consultaCategory);
            res.json(consultaCategory);
        });
        //Guarda categoria
        router.post('/', async (req, res) => {
            const {codigo, nombre} = req.body;
            const category = new estructura({codigo, nombre});
            console.log(category);
            await category.save();
            res.json({status: 'Categoria guardada'});
        });
        //Actualiza categoria
        router.put('/:id', async (req, res) => {
            const {codigo, nombre} = req.body;
            const updateCategory = {codigo, nombre};
            await estructura.findByIdAndUpdate(req.params.id, updateCategory);
            console.log(req.params.id);
            console.log(updateCategory);
            res.json({status: 'Categoria actualizada'});
        });
        //Elimina estatu
        router.delete('/:id', async (req, res) => {
            await estructura.findByIdAndRemove(req.params.id);
            console.log(req.params.id);
            res.json({status: 'Categoria eliminada'});
        });
        return router;
    }
}

const ruta = new crudCategories();
module.exports = ruta;