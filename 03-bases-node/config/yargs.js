const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero a multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta que numero multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Con lista o no'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'No fue recibido un numero'
        }
        return true;
    })
    .argv;
 
module.exports = argv; 