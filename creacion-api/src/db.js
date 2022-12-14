const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'creacionAPI',
})

conexion.connect(function(error){
    if (error){
        throw error;
    } else{
        console.log("Conexión exitosa")
    }
})

module.exports = conexion;
