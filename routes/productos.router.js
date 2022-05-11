const express = require('express');
const router = express.Router();
const ProductoServices = require('../services/productos.services')
const services = new ProductoServices();//Se crea una instancia del servicio

router.get('/', async (req, res) => {
  const productos = await services.buscar();
  res.json(productos);

});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const producto = await services.BuscarUno(id);//Le pasamos el id que le envia el usuario
  res.json(producto);
});

router.post('/', async (req, res) => {
  const body = req.body
  const newProducto = await services.crear(body); //Crear el producto desde el backend
  res.status(201).json(newProducto);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const updateProducto = await services.Actualizar(id, body);
    res.json(updateProducto);
  } catch (error) { //Capturamos el error
    res.status(404).json({ //Devolvemos el error en formato JSON
      message: error.message
    });
  }

});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const EliminarProducto = await services.Eliminar(id);

  res.json(EliminarProducto);
});
module.exports = router; 
