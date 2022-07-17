//Desafio complementario 3 
class Libros {
    constructor(id, nombre, autor, precio, imagen ){
        this.id = id,
        this.nombre = nombre, 
        this.autor = autor, 
        this.precio = precio,
        this.imagen = imagen
    }
}
let id, nombre, autor, precio, imagen

const libro1 = new Libros (0, "Una Eduación Mortal", "Naomi Novik", "350", "imagenes/libros-cupcake/Una-Educacion-Mortal-Naomi-Novik.png")
const libro2 = new Libros (1, "Lore", "Alexandra Bracken", "400", "imagenes/libros-cupcake/lore.jpg.png")
const libro3 = new Libros (2, "Renegados", "Marissa Meyer", "300", "imagenes/libros-cupcake/renegados.png")
const libro4 = new Libros (3, "Matar Un Reino", "Alexandra Christo", "250", "imagenes/libros-cupcake/Matar-Un-Reino-Alexandra-Christo.png")
const libro5 = new Libros (4, "Sombra y Hueso (Estuche Trilogia)", "Leigh Bardugo", "827", "imagenes/libros-cupcake/shadow-and-bone-box.png")
const libro6 = new Libros (5, "Caraval (Estuche Trilogia)", "Stephanie Garber", "910", "imagenes/libros-cupcake/Caraval-Boxed-Set.png")

const libros = [libro1,libro2,libro3,libro4,libro5,libro6]

const divLibros = document.getElementById('libros')
libros.forEach(librosArray => {
    divLibros.innerHTML += `    
    <div class="col-10 col-md-4">
        <div class="card libros" id="libros${librosArray.id}" style="width: 18rem;">
            <div class="card-book" style="width: 18rem;">
                <a href="#">
                    <img src="${librosArray.imagen}" class="card-img-top" alt="..."> 
                </a>
                <div class="card-body">
                    <h4 class="card-title">${librosArray.nombre}</h4>
                    <p class="card-text">${librosArray.autor}</p>                        
                    <h5 class="card-price">$${librosArray.precio}</h5>
                    <div class="submit">
                        <a href="#" class="btn btn-outline-dark">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
})


/*Desafio complementario 2//
class Libros {
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
    const libro = new Libros (nombreLibro, autor, precio)
    libros.push(libro);

    continua = prompt("¿Desea continuar ingresando más libros?").toLowerCase()
        
}while((continua != "no") || (isNaN(precio)) || (precio <1))

console.log(libros)

 

//Desafio complementario 1/
let i = parseInt (prompt("Ingresar un número entre 1 y 100 para sumar 10"));
do{
    i = i + 10;
    alert("La suma da "+i+" y si le sumo 10 más")
} while(i <100){
    alert("¡Gracias!");
}*/