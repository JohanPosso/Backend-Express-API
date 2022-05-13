const express = require('express');
const app = express();
const port = 3000;
//Importamos la funcion del index/routes. No es necesario poner index porque lo toma automaticamente
const routerApi = require('./routes');
const {
  logError,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

//Usamos este middleware para que nos devuelva la respuesta en formato JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Pagina principal');
});

//Llamamos a la funcion
routerApi(app);
//Los middleware de tipo error se deben definir despues de hacer el routing
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is Running: ${port}`);
});
