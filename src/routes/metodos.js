const { Router } = require('express');
const router = Router();

const productos = require('../Productos.json');

//Listar productos

router.get('/', (req, res) => {
    res.json(productos);
});

//consultar productos
router.get('/:Sku', (req, res) => {
    const {Sku} = req.params;
    _.each(productos, (producto, i) => {
        if(producto.Sku == Sku){
            res.json(producto);
        }
    });
    res.json(producto);
});

//insertar producto
router.post('/', (req, res) => {
    const { Nombre, Precio,URL, Marca, Iva, Inventario}  = req.body;
    if(Nombre && Precio && URL && Marca && Iva && Inventario){
        const Sku = productos.length + 1;
        const newProduct = {...req.body, Sku};
        productos.push(newProduct);
        res.send('se insertó el producto satisfactoriamente.');
    }else{
        res.send('No se inserto el Producto satisfactoriamente');
    }
});

router.get('/', (req, res) => {
    var precioFinal = 0;
    precioFinal = productos.precio - (productos.precio * productos.descuento) + (productos.precio + productos.iva) 
    res.json(productos);
});

module.exports = router;