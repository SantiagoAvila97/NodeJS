const saludar = (nombre) => {
    return `Saludos ${nombre}`; // 'Saludos' + nombre;

}

console.log(saludar('Santiago'));

//Segun ejercicio

console.log('Inicio de la app');

setTimeout( ()=>{
    console.log('Primer timeout')
}, 3000)

setTimeout( ()=>{
    console.log('Segundo timeout')
}, 0)

setTimeout( ()=>{
    console.log('Tercer timeout')
}, 0)


console.log('Fin de la app');