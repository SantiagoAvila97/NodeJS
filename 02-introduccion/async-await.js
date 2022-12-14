const empleados = [
    {
        id: 1,
        nombre: 'Santiago'
    },
    {
        id: 2,
        nombre: 'Alexis'
    },
    {
        id: 3,
        nombre: 'Alejandro'
    },
]

const salarios = [
    {
        id: 1,
        salario: 1900
    },
    {
        id: 2,
        salario: 3500
    }

]

const getEmpleado = (id) => {

    const promesa = new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre

        if (empleado) {
            resolve(empleado)
        } else {
            reject(`No existe empleado con id ${id}`)
        }

    });

    return promesa;
}

const getSalario = (id) => {

    const promesa = new Promise((resolve, reject) => {

        const salarioEmpleado = salarios.find(s => s.id === id)?.salario

        if (salarioEmpleado) {
            resolve(salarioEmpleado)
        } else {
            reject(`No existe salario con id ${id}`)
        }

    });

    return promesa;
}
const id = 3;

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salarioEmpleado = await getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salarioEmpleado}`
    } catch (error) {
        throw error
    }
}

getInfoUsuario(id)
    .then(mensaje => console.log('OK \n' + mensaje))
    .catch(err => console.log('KO \n' + err))

