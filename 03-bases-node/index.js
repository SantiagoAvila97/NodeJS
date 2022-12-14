const { crearArchivo } = require('./helpers/multiplicar');
const argv = require ('./config/yargs');
// const numero = 4;

console.log(argv);

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado correctamente'))
    .catch(err => console.log(err))  