//VARIABLES
const lista_carrito = document.getElementById('lista_carrito')
const total_carrito = document.getElementById('total_carrito')
const btn_vaciar_carrito = document.getElementById('trash')
const burbujaCarrito = document.querySelector("#burbujaCarrito")
const totalCarrito = document.querySelector("#totalCarrito")
const precio_entrega = document.querySelector("#precio_entrega")

//FUNCIONES
function mostrarCarrito() {
    let carrito = capturarStorage()
    if(carrito.length > 0){
        lista_carrito.innerHTML = ''
        carrito.forEach(element => {
        lista_carrito.innerHTML +=`
        <div id="producto_carrito">
        <div class="container_carrito-info">
        <img src="../images/${element.img}" alt="">
        <div class="container_btn-cant">
            <button onclick="incrementarCantidad(${element.id})" class="btn_cant btn_cant-inc"><i class="fa-solid fa-caret-up"></i></button>    
            <button onclick="restarCantidad(${element.id})" class="btn_cant btn_cant-rest"><i class="fa-solid fa-caret-down"></i></button>
        </div>
        <div>
        <span class="name_producto-carrito">${element.name}</span>
        <p class="color_producto-carrito">Cantidad: <input type="number" value="${element.cantidad}" readonly name="" id="input_cantidad_prod"></p>
        <p class="talle_producto-carrito">Talle: <select name="" id="select_talle"><option value="">XS</option></select></p>
                <p class="precio_producto-carrito">Precio: <span>$${element.price*element.cantidad}</span></p>
            </div>
        </div>
        <button onclick="eliminarProductoCarrito(${element.id})" class="btn_eliminar-producto"><i class="fa-solid fa-xmark"></i></button>
        </div>
        `
    })
    }
    else{
        lista_carrito.innerHTML = `
            <div class="carrito_vacio">
                <h3>TU CARRITO ESTÁ VACÍO</h3>
                <span><a href="../index.html">COMPRAR</a></span>
            </div>
        `
    }
    cantidadCarrito()
    mostrarTotalCarrito()
}
function capturarStorage() {
    return JSON.parse(localStorage.getItem('carrito')) || []
}
function guardarStorage(carritoNuevo) {
    localStorage.setItem('carrito', JSON.stringify(carritoNuevo))
}
function cantidadCarrito() {
    let carrito = capturarStorage()
    let productoEncontrado = products.filter(e => e.id)
    burbujaCarrito.innerHTML = carrito.length
}
function agregarAlCarrito(idParam) {
    let carrito = capturarStorage()
    Toastify({
        text: "Agregado al carrito",
        style: {
            color: '#000',
            fontSize:'20px',
            fontFamily:'Staatliches, cursive',
            textAlign:'center',
            width:'200px',
        },
        duration: 1000,
        backgroundColor:'#d3b246',
    }).showToast();
    const productoEncontrado = products.find(e => e.id == idParam)
    isInCarrito(idParam) ? incrementarCantidad(idParam) : carrito.push({...productoEncontrado, cantidad:1})
    guardarStorage(carrito)
    mostrarCarrito()
}
function incrementarCantidad(id){
    let carrito = capturarStorage()
    const indice = carrito.findIndex(e => e.id ==id)
    carrito[indice].cantidad==10 ? true: carrito[indice].cantidad++
    guardarStorage(carrito)
    mostrarCarrito()
}
function restarCantidad(id) {
    let carrito = capturarStorage();
    const indice = carrito.findIndex((e) => e.id === id);
    carrito[indice].cantidad > 1 ? carrito[indice].cantidad-- : false
    guardarStorage(carrito);
    mostrarCarrito();
}
function isInCarrito(id){
    let carrito = capturarStorage()   
    return carrito.some(e => e.id == id)
}
function mostrarTotalCarrito() {
    const carrito = capturarStorage();
    const total = carrito.reduce(
      (acc, elem) => acc + elem.cantidad * elem.price,
    0
    );
    totalCarrito.innerHTML ='$' + total;
}
function eliminarProductoCarrito(id) {
    let carrito = capturarStorage()
    const resultado = carrito.filter((prod) => prod.id !== id);
    guardarStorage(resultado)
    mostrarCarrito()
}
function eliminarCarrito() {
    let carrito = capturarStorage()
    if(carrito.length == 0){
        Swal.fire({
            title: 'Su carrito de compras está vacío.',
            confirmButtonColor: '#d3b246',
        })
    }
    else{
        Swal.fire({
            title: '¿Desea vaciar el carrito de compras?',
            showCancelButton: true,
            confirmButtonColor: '#d3b246',
            cancelButtonColor: '#db0000',
            confirmButtonText: 'Eliminar productos',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                let timerInterval
                Swal.fire({
                    title: 'Vaciando carrito.',
                    html: 'Finaliza en <b></b> milisegundos.',
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        localStorage.removeItem("carrito")
                        mostrarCarrito()
                    }
                })
            }
        })
    }
}
mostrarCarrito()
cantidadCarrito()

//EVENTOS
btn_vaciar_carrito.onclick = eliminarCarrito