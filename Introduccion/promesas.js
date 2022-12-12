const empleados = [
    {
        id: 1,
        nombre: 'Santiago'
    },
    {
        id: 1,
        nombre: 'Alexis'
    },
    {
        id: 1,
        nombre: 'Alejandro'
    },
]

const salarios = [
    {
        id: 1,
        salario: 1900
    },
    {
        id: 1,
        salario: 3500
    }

]

const getEmpleado = (id) => {

    const promesa = new Promise ((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre

        // (empleado)
        //     ? resolve (empleado)
        //     : reject (`No existe empleado con id ${id}`);
        
        
        if (empleado){
            resolve (empleado)
        } else {
            reject(`No existe empleado con id ${id}`)
        }

    });

    return promesa;
}

// getEmpleado(1)
//     .then(empleado => console.log (empleado))
//     .catch(err => console.log(err));

const getSalario = (id) => {

    const promesa = new Promise ((resolve, reject) => {

        const salarioEmpleado = salarios.find(s => s.id === id)?.salario
        
        if (salarioEmpleado){
            resolve (salarioEmpleado)
        } else {
            reject(`No existe salario con id ${id}`)
        }

    });

    return promesa;
}

// getSalario(1)
//     .then(salarioEmpleado => console.log (salarioEmpleado))
//     .catch(err => console.log(err));

getEmpleado(1)
    .then(empleado => {

        getSalario(1)
            .then( salarioEmpleado => {

                console.log (`El empleado `+ empleado + ` tiene un salario de ${salarioEmpleado}`)

            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));


let nombre;

getEmpleado(1)
    .then(empleado => {
        nombre = empleado;
        return getSalario(1)
    })
    .then( salarioEmpleado =>  console.log (`El empleado `+ nombre + ` tiene un salario de ${salarioEmpleado}`))
    .catch(err => console.log(err))

