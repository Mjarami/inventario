//Iniciar servidor
class Servidor {
    constructor() {
      const express = require("express");
      const morgan = require("morgan");
      const path = require("path");
      const bd = require("../modulos/backend/bd/js/conexion.js");
      const conecta = bd.bd;
      const app = express();
      app.set("port", process.env.PORT || 3000);
      app.use(morgan('dev'));
      app.use(express.json());
      const users = require("../modulos/backend/class/mongodb/usuarios.js");
      const levels = require("../modulos/backend/class/mongodb/niveles.js");
      const status = require("../modulos/backend/class/mongodb/estatus.js");
      const products = require("../modulos/backend/class/mongodb/productos.js");
      const categories = require("../modulos/backend/class/mongodb/categorias.js");
      app.use('/api/users', users);
      app.use('/api/levels', levels);
      app.use('/api/status', status);
      app.use('/api/products', products);
      app.use('/api/categories', categories);
      app.use(express.static(path.join(__dirname, "public")));
      app.listen(app.get("port"), () => console.log(`server on port ${app.get("port")}`));
    }
}

const servidor = new Servidor();
