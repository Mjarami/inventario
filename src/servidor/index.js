//Iniciar servidor
class Servidor {
    constructor() {
      const express = require("express");
      const morgan = require("morgan");
      const path = require("path");
      const bd = require("../modulos/backend/bd/js/mongodb.js");
      const conecta = bd.bd;
      const app = express();
      app.set("port", process.env.PORT || 3000);
      app.use(morgan('dev'));
      app.use(express.json());
      const rutas = require("../modulos/backend/fuente/rutas/define_ruta.js");
      app.use('/api/users', rutas);
      app.use(express.static(path.join(__dirname, "public")));
      app.listen(app.get("port"), () => console.log(`server on port ${app.get("port")}`));
    }
}

const servidor = new Servidor();
