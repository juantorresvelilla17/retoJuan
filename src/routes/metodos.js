const { Router } = require('express');
const router = Router();

const productos = require('../Productos.json');

//Listar productos

router.get('/', (req, res) => {
    res.json(productos); 
});


module.exports = router;