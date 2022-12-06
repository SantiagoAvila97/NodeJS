 const nombres = 'Saniago';
 const apellidos = 'Avila Pacanchique';

 const imprimirNombreTemplate = `${nombres} ${apellidos}`;


console.log(imprimirNombreTemplate); //Recibe + cosas

///////////////////////////////////
// Destructuración de objetos
///////////////////////////////////

const persona = {
    nombre : 'Sing',
    apellido : 'Trol',
    poder : 'Regeneración',
    getNombre: function (){
        return `${this.nombre} ${this.apellido}`
    }
};

console.log(persona.getNombre());

// const { nombre, apellido, poder} = persona;

function imprimirHeroes ({nombre, apellido, poder}){
    console.log (`${nombre} ${apellido} ${poder}`)
};

console.log(imprimirHeroes(persona));

const carro = ['BMW', 'Mercedez', 'Mazda'];

const [carro1, carro2, carro3] = carro;

console.log(carro1);


///////////////////////////////////
// Call back
///////////////////////////////////


 