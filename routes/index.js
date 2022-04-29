const express = require('express');
//Importamos los modulos de las rutas
const productosRouter = require('./productos.router');
const usuarioRouter = require('./usuario.router');

//Creamos una funcion que contiene los endpoints
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v2',router);//Para manejar distintas versiones en las API
  app.use('/productos',productosRouter);
  router.use('/usuario',usuarioRouter);
}

//Exportamos la funcion
module.exports = routerApi;
