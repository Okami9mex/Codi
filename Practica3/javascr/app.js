let cancion = ["It Was A Good Day", "Ice Cube" , "The Predator", "1992"];

//1.- Usando la desestructuración, obtén el album y año de lanzamiento de la cancion.
let [album,,,anio]= cancion;
console.log(album,anio);

//2.-  Usando la desestructuración, imprime el titulo de la cancion y el resto de información en una variable distita.
let[,,melodia] = cancion
console.log(melodia);

let[album2,autor,,anio2]=cancion
console.log(album2,autor,anio2);

//3.- Vuelve a obtener el album y el año de lanzamiento, pero esta vez utiliza una función para ello.
const dato1 = ([album,,,anio])=>({
    album:album,
    anio:anio
})
console.log(dato1(cancion));

//4.- Usa la desestructuración para imprimir cada uno de los atributos del objeto persona

let persona = {
    nombre: "Sarah", 
    pais: "Nigeria", 
    trabajo: "Desarrollador"
};

const{nombre,pais,trabajo}=persona;
console.log(nombre);
console.log(pais);
console.log(trabajo);
