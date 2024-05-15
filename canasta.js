//traer el valor de los input del html
let nombre = document.getElementById("nombre")
let cantidad = document.getElementById("cantidad")
let precio = document.getElementById("precio")
//localStorage.getItem - trae la informacion del local
//JSON.parse - hace la conversion a la hora de traer la informacion
//localStorage.setIten - guarda la informacion en el localStorage
//JSON.stringify - hace la conversion a la hora de guardar en el local storage


function guardar() {
   if (nombre.value != "" && cantidad.value != "" && precio.value != "") {

     let productos = JSON.parse(localStorage.getItem("canasta")) || [];

     //objeto o registro
     let producto = {
        nombre: nombre.value,
        cantidad: cantidad.value,
        precio: precio.value
     }
        //productos es nuestra lista, nuestro array que se va a almacenar en el local. 
        //con el .push metemos el nuevo dato a la lista o array
     productos.push(producto);

     //seteamos la nueva lista de productos en el local storage
        localStorage.setItem("canasta", JSON.stringify(productos));

        alert ('Producto Agregado');

    }else{
        alert ('campos incompletos');
    }

};