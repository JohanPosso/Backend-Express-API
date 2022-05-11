const faker = require('faker');
class ProductoServices { //Se crea una clase para trasladar la logica 

    constructor() {//Se almacena en memoria
        this.productos = [];
        this.generate(); //Cuando se llame va a generar los 100 productos
    }

    generate() {

        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.productos.push({
                id: faker.datatype.uuid(), //Identificador ramdon
                Nombre: faker.commerce.productName(),
                Precio: parseInt(faker.commerce.price(), 10),
                Descripcion: faker.commerce.productDescription()
            });
        }

    }

    async crear(data) {
        const newProducto = {
            id: faker.datatype.uuid(),
            ...data //Para concatenar los valores que vienen por parte del usuario

        }
        this.productos.push(newProducto);
        return newProducto;
    }

    async buscar() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.productos); 
            }, 5000); //El tiempo en el cual se van a demorar los datos en cargar, cuando haga la peticion
        })
    }

    async BuscarUno(id) {//Se pasa el identificador
        return this.productos.find(item => item.id === id); //Si hay un elemento igual a nuestro id
    }

    async Actualizar(id, cambios) {
        const index = this.productos.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Producto no encontrado');
        }
        const productos = this.productos[index];
        this.productos[index] = { //De esta manera le indico que persistan los valores que estan en productos y solo me modifique lo que esta en cambios
            ...productos,
            ...cambios
        }
        return this.productos[index];
    }

    async Eliminar(id) {
        const index = this.productos.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Producto no encontrado');
        }
        this.productos.splice(index, 1);
        return { id };
    }
}

module.exports = ProductoServices;