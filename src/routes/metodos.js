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

module.exports = router;