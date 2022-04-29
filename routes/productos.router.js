const express = require('express');
const { status } = require('express/lib/response');
const faker = require('faker');
const router = express.Router();


router.get('/', (req, res) => {
  const productos = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    productos.push({
      Nombre: faker.commerce.productName(),
      Precio: parseInt(faker.commerce.price(), 10),
      Descripcion: faker.commerce.productDescription()
    });
  }
  res.json(productos);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json([{
    id,
    Nombre: "Johan",
    Apellido: "Posso"
  }, {
    Peso: 80,
    altura: "1,86m"
  }]);
});

router.post('/', (req, res) => {
  const body = req.body
  res.status(201).json({ //Se utiliza para enviar el estado
    message: 'Creado Exitosamente',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const {id}  = req.params
  const body = req.body
  res.json({
    id,
    message: 'Modificado Exitosamente'
    ,data:body
  });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    message: 'Eliminado Exitosamente'
  });
});
module.exports = router;
