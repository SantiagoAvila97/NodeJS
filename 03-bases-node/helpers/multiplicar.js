const { rejects } = require('assert');
const FileSystem = require('fs');
const { resolve } = require('path');

const crearArchivo = (numero, listar, hasta) => {

    const promesa = new Promise((resolve, rejects) => {

        if (numero) {
            let salida = '';
            
            for (let i = 1; i <= hasta; i++) {
                salida += `${numero} x ${i} = ${numero * i}\n`
            }
            
            if (listar){                
                console.log(`Tabla del: ${numero}`)
                console.log(salida)
            }

            //Toma como base la carpeta donde se ejecuta el archivo

            FileSystem.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
            resolve(`tabla-${numero}.txt`)

        }
    });

    return promesa;

}

module.exports = {
    crearArchivo
}