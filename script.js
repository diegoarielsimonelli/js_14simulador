
$(document).ready(function() {
    console.log("Listo el DOM");
});
$(window).on('load', function() {
    console.log("Se cargó todo, ¡incluyendo imagenes y archivos externos!");
});
$(document).ready(()=> {
    obtenerDatos();
    
});
function obtenerDatos() {
    $.get("productos.json").done(function(resultado, estado) {
        console.log("Estado que retorna el metodo get: " + estado);
        if (estado == "success") {
            let datosRecibidos = resultado.productos;
            datosRecibidos.forEach(productos => {
                $("#productos1").append("<tr><td>" + productos.id + "</td><td>" + productos.nombre + "</td><td>  $"+ productos.precio + "</td><td>" + productos.descripcion + "</td> </tr>");
            });
        }
    });
}

let boton = document.getElementsByClassName( "btn btn-danger");

boton[0].onclick = () =>{agregarAlCarrito(0)};
boton[1].onclick = () =>{agregarAlCarrito(1)};     
boton[2].onclick = () =>{agregarAlCarrito(2)};
boton[3].onclick = () =>{agregarAlCarrito(3)};
boton[4].onclick = () =>{agregarAlCarrito(4)};
boton[5].onclick = () =>{agregarAlCarrito(5)};
boton[6].onclick = () =>{localStorage.clear()};

function activarPrecios() {
  
    let precio = document.getElementsByClassName("precio");
    precio[0].innerText = "$1000";
    precio[0].style.font = "italic bold 30px Georgia";
    precio[1].innerText = "$900";
    precio[1].style.font = "italic bold 30px Georgia";
    precio[2].innerText = "$1500";
    precio[2].style.font = "italic bold 30px Georgia";
    precio[3].innerText = "$1200";
    precio[3].style.font = "italic bold 30px Georgia";
    precio[4].innerText = "$950";
    precio[4].style.font = "italic bold 30px Georgia";
    precio[5].innerText = "$920";
    precio[5].style.font = "italic bold 30px Georgia";
    
   
}

activarPrecios();

let Productos = [
{ id: 1, nombre: "Ensalada Fattoush", precio: 1000 },
{ id: 2, nombre: "Escalativa Catalana Vegana", precio: 900 },
{ id: 3, nombre: "Vegetales Asados", precio: 1500 },
{ id: 4, nombre: "Sushi Vegano", precio: 1200 },
{ id: 5, nombre: "Hamburgueza de Lentejas", precio: 950 },
{ id: 6, nombre: "Sandwich de Milanesa de Seitán", precio: 920 }
];


let carrito = []

function agregarAlCarrito(prod) {
    carrito.push( Productos[prod] )

    localStorage.setItem('carrito', JSON.stringify(carrito) )
}



 



let carrito1=JSON.parse(localStorage.getItem('carrito'));
console.log(carrito1);


const URLJSON = "productos.json";
//Agregamos un botón con jQuery
$("#productos").prepend('<button id="btn">Productos</button>');
//Escuchamos el evento click del botón agregado
$("#btn").click(() => {
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let misDatos = respuesta.productos;
            for (const dato of misDatos) {
                $("#productos").prepend(`<div>

                                <h3>${dato.nombre}</h3>
                                <p> <strong>Precio: $</strong>${dato.precio}</p>
                                <p> <strong>Descripción: </strong>${dato.descripcion}</p>
                                <button <a href="#" class="btn btn-danger"><i class="bi bi-cart-plus"></i>  Agregar </a></button>                           
                                </div>`)
            }
        }
    });
});

