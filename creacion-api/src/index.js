const express = require('express');
const router = express();

const puerto = 3000;
router.listen(puerto, function(){
    console.log('Corriendo por el puerto 3000')
});

const users = require('./index.route');
console.log("Prueba")
router.use(users)

