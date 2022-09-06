const { Router } = require('express');
const router = Router();
const _ = require('underscore')

const _ = require('underscore');


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


//actualizar producto
router.put('/:Sku', (req, res) => {
    const {Sku} = req.params;
    const { Nombre, Precio, URL, Marca, Iva, Inventario}  = req.body;
    if(Nombre && Precio && URL && Marca && Iva && Inventario){
        _.each(productos, (producto, i) => {
            if(producto.Sku == Sku){
                producto.Nombre = Nombre;
                producto.Precio = Precio;
                producto.URL = URL;
                producto.Marca = Marca;
                producto.Iva = Iva;
                producto.Inventario = Inventario;                
            }
           });
           res.send('Actualizado');
           //res.json(productos);
    }else{
        res.status(500).json({error: 'No actualizado'});
    }

});

router.delete('/:Sku', (req, res) => {
    const {Sku} = req.params;
   _.each(productos, (producto, i) => {
    if(producto.Sku == Sku){
        productos.splice(i, 1);
    }
   });
   res.send('deleted');
});

module.exports = router;