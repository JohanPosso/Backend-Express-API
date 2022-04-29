const express = require('express');
const app = express();
const port = 3000;
//Importamos la funcion del index/routes. No es necesario poner index porque lo toma automaticamente
const routerApi = require('./routes');

//Usamos este middleware para que nos devuelva la respuesta en formato JSON
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Pagina principal');
});

//Llamamos a la funcion
routerApi(app);


app.listen(port, () => {
  console.log(`Server is Running: ${port}`);
});
