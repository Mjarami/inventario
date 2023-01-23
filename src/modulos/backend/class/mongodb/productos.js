class crudProducts {
    constructor(){
        const express = require("express");
        const router = express.Router();
        const estructura = require("../../bd/js/estructura/productos.js");
        //Consulta productos
        router.get('/', async (req, res) => {
            const products = await estructura.find();
            console.log(products);
            res.json(products);
        });
        //Consulta producto
        router.get('/:id', async (req, res) => {
            const consultaProducto = await estructura.findById(req.params.id);
            console.log(consultaProducto);
            res.json(consultaProducto);
        });
        //Guarda producto
        router.post('/', async (req, res) => {
            const {codigo, usuario, fechaCreado, nombre, descripcion, precio, foto, categorias} = req.body;
            const product = new estructura({codigo, usuario, fechaCreado, nombre, descripcion, precio, foto, categorias});
            console.log(product);
            await product.save();
            res.json({status: 'Usuario guardado'});
        });
        //Actualiza producto
        router.put('/:id', async (req, res) => {
            const {codigo, usuario, fechaCreado, nombre, descripcion, precio, foto, categorias} = req.body;
            const updateProducts = {codigo, usuario, fechaCreado, nombre, descripcion, precio, foto, categorias};
            await estructura.findByIdAndUpdate(req.params.id, updateProducts);
            console.log(req.params.id);
            console.log(updateProducts);
            res.json({status: 'Producto actualizado'});
        });
        //Elimina producto
        router.delete('/:id', async (req, res) => {
            await estructura.findByIdAndRemove(req.params.id);
            console.log(req.params.id);
            res.json({status: 'Producto eliminado'});
        });
        return router;
    }
}

const ruta = new crudProducts();
module.exports = ruta;