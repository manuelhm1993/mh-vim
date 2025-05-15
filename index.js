const { ayuda } = require('./helper.js');

const suma = (ns) => {
    let acumulado = 0;
    for (i = 0; i < ns.length; i++) 
    {
        acumulado += ns[i];
    }

    ayuda();
    return acumulado;
};

const numeros = [1, 2, 3, 4, 5];
// Multiplica *2 cada número
const multiplicados = numeros.map((x) => x * 2);
// a pares
const parejas = numeros.map((x) => [x, x]);

const mascotas = [
    { nombre: "Pelusa", edad: 12, tipo: "gato" },
    { nombre: "Chanchito feliz", edad: 3, tipo: "perro" },
    { nombre: "Puchini", edad: 12, tipo: "perro" },
    { nombre: "Pulga", edad: 10, tipo: "perro" },
];
// edad promedio
/*const edades = mascotas.map((x) => x.edad);
const resultado = suma(edades);
console.log(resultado / edades.length);
*/

let resultado = mascotas.reduce((acumulado, mascota) => acumulado + mascota.edad, 0);

resultado /= mascotas.length;

console.log(resultado);
