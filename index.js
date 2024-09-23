//Declaración
//#1 - 4
const Coche = {
    marca: "BMW",
    modelo: "330i",
    matricula: "WillXYZ"
    };

const Casa = {
    codPostal: 28008,
    calle: "Gran Via",
    portal: 3,
    piso: 2
}

const FullStackDeveloper = {
    lenguajes: ["Javascript", 'SQL', 'VBA'],
    proyectos: ['Blog', 'Work', 'Pleasure']
    };

const Perro = {
    nombre: "Fido",
    raza: "Shih Tzu",
    color: "Blanco y Marron",
    edad: 13,
    ladrar: function(){
        console.log("Guau!");   //función ladrar (imprime por consola un ladrido),
        },
        popo: function(){
            return Math.random() * 3;
        }   //Math.random():

        /*Math.random(): 
        This function generates a random floating-point number between 0 (inclusive) and 1 (exclusive). So, the result will always be somewhere between 0 and 0.9999.... 
        Math.random() * 3:
        This multiplies the random number (between 0 and 1) by 3. The result will be a random number between 0 and 3 (but never reaching exactly 3).
        */
    }


//Lectura de propiedades
//#5-8

const portatil   = {
    marca: 'Lenovo'
    };

let marcaPortatil = portatil.marca;

let marcaPortatil2 = portatil.["marca"];

let Concierto = {
    cartelera:   "Guns N' Roses"
    
}

//#7
const grupos = Concierto.grupos;   // there is an array of groups/ grupos

//#8
const RBG = [Led.rojo, Led.verde, Led.azul];


//Modificación de propiedades
//9-12
portatil.modelo = 'P345';

Concierto.cartelera.push("Guns N' Roses");   // here we are adding the band to cartelera up above written in the object in #7

Concierto.fecha = new Date(2024,9, 23);

//#12
Impresora.imprimiendo = {
    nombreArchivo: "HPLaserjet.pdf",
    copias: 1,
    numPaginas: 7
};


//////
//hecho hasta - Iteraciones ⚔️ Pair Programming ⚔️
///////////