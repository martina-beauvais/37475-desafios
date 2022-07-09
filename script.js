//Desafio complementario 2//
class Libro {
    constructor (nombreLibro, autor, precio){
        this.nombreLibro = nombreLibro
        this.autor = autor
        this.precio = precio
    }
}

const libros = []

let nombreLibro, autor, precio, continua

do{
    nombreLibro = prompt("Insertar título de un libro").toLowerCase();
    autor = prompt("Insertar nombre de autor").toLowerCase();
    precio = parseInt(prompt("Ingrese el precio"));

    if(precio <1){
        alert("Ingrese valores válidos")
    }else{
        alert("El libro seleccionado ha sido "+nombreLibro+", su autor es "+autor+" y su precio es $ "+precio)
    }
    const libro = new Libro (nombreLibro, autor, precio)
    libros.push(libro);

    continua = prompt("¿Desea continuar ingresando más libros?").toLowerCase()
        
}while((continua != "no") || (isNaN(precio)) || (precio <1))

console.log(libros)

 

//Desafio complementario 1/
/*let i = parseInt (prompt("Ingresar un número entre 1 y 100 para sumar 10"));
do{
    i = i + 10;
    alert("La suma da "+i+" y si le sumo 10 más")
} while(i <100){
    alert("¡Gracias!");
}*/