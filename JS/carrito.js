const lista_carrito = document.getElementById('lista_carrito')
const total_carrito = document.getElementById('total_carrito')

function mostrarCarrito() {
    let carrito = capturarStorage()
    lista_carrito.innerHTML = ''
    carrito.forEach(element => {
        lista_carrito.innerHTML +=`
        <div id="producto_carrito">
        <div class="container_carrito-info">
            <img src="${element.img}" alt="">
            <div>
                <span class="name_producto-carrito">${element.name}</span>
                <p class="color_producto-carrito">Cantidad: <input type="number" value="${element.cantidad}" readonly name="" id="input_cantidad_prod"></p>
                <button onclick="incrementarCantidad(${element.id})" class="btn"><i class="fa-solid fa-caret-up"></i></button>    
                <button onclick="restarCantidad(${element.id})" class="btn"><i class="fa-solid fa-caret-down"></i></button>
                <p class="talle_producto-carrito">Talle: <select name="" id="select_talle"><option value="">XS</option></select></p>
                <p class="precio_producto-carrito">Precio: <span>$${element.price*element.cantidad}</span></p>
            </div>
        </div>
        <button onclick="eliminarProductoCarrito(${element.id})" class="btn_eliminar-producto"><i class="fa-solid fa-xmark"></i></button>
    </div>
        `
    })
}
function capturarStorage() {
    return JSON.parse(localStorage.getItem('carrito')) || []
}
function guardarStorage(carritoNuevo) {
    localStorage.setItem('carrito', JSON.stringify(carritoNuevo))
}
function agregarAlCarrito(idParam) {
    let carrito = capturarStorage()
    if(isInCarrito(idParam)){
        incrementarCantidad(idParam)
    }
    else{
        const productoEncontrado = products.find(e => e.id == idParam)
        carrito.push({...productoEncontrado, cantidad:1})
        guardarStorage(carrito)
        mostrarCarrito()
    }
}
function incrementarCantidad(id){
    let carrito = capturarStorage()
    const indice = carrito.findIndex(e => e.id ==id)
    if(carrito[indice].cantidad==10){
        carrito[indice].cantidad--;
    } 
    else{
        carrito[indice].cantidad++
        guardarStorage(carrito)
        mostrarCarrito()
    }
}
function restarCantidad(id) {
    let carrito = capturarStorage();
    const indice = carrito.findIndex((e) => e.id === id); // busco la posicion del objeto
    if (carrito[indice].cantidad > 1) {
        carrito[indice].cantidad--; //segun la posucion le resto uno a cantidad
        guardarStorage(carrito);
        mostrarCarrito();
    }
}
function isInCarrito(id){
    let carrito = capturarStorage()   
    return carrito.some(e => e.id == id)
}
function eliminarProductoCarrito(id) {
    const carrito = capturarStorage();
    const resultado = carrito.filter((prod) => prod.id !== id);
    guardarStorage(resultado);
    mostrarCarrito();
}
mostrarCarrito()