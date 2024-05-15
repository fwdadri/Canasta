let productos = JSON.parse(localStorage.getItem("canasta")) || [];

let shopContent = document.getElementById('shopContent');

for (let index = 0; index < productos.length; index++) {
    
    let div = document.createElement('div');
    let boton = document.createElement('button');

    div.innerHTML = "<br>Producto: "+ productos[index].nombre + "<br> Precio: " + productos[index].precio + "<br> Cantidad: " + productos[index].cantidad;
    boton.textContent = "ELIMINAR"

    shopContent.appendChild(div);
    shopContent.appendChild(boton);


    boton.addEventListener('click', function () {
        
    })
}
