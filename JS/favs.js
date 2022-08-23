const lista_favs = document.getElementById('lista_favs')
const burbujaFavs = document.getElementById('burbujaFavs')

function mostrarFavs() {
    let favs = capturarStorage()
    if(favs.length > 0){
        lista_favs.innerHTML = ''
        favs.forEach(element => {
        lista_favs.innerHTML +=`
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
        <button onclick="eliminarProdFav(${element.id})" class="btn_eliminar-producto"><i class="fa-solid fa-xmark"></i></button>
        </div>
        `
    })
    }
    else{lista_favs.innerHTML = `
            <div class="carrito_vacio">
                <h3>SU LISTA DE FAVORITOS ESTA VACÍA</h3>
                <span><a href="../index.html">IR AL INICIO</a></span>
            </div>
        `
    }
    cantidadFavs()
}
function capturarStorage() {
    return JSON.parse(localStorage.getItem('favs')) || []
}
function guardarStorage(favsNew) {
    localStorage.setItem('favs', JSON.stringify(favsNew))
}
function cantidadFavs(array) {
    let favs = capturarStorage()
    burbujaFavs.innerHTML = favs.length
}
const heart = document.getElementById('asd')
function hola(){
    heart.src = '../images/add-cart.svg'
}
function agregarFavs(idParam) {
    let favs = capturarStorage()
    const productoEncontrado = products.find(e => e.id == idParam)
    if (isInFavs(idParam)) {
        Toastify({
        text: "Producto ya agregado.",
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
    }
    else{
        Toastify({
        text: "Agregado a favoritos",
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
        favs.push({...productoEncontrado, cantidad:1})
    }
    guardarStorage(favs)
    mostrarFavs()
}
function eliminarProdFav(id) {
    let favs = capturarStorage()
    const resultado = favs.filter((prod) => prod.id !== id);
    guardarStorage(resultado)
    mostrarFavs()
}
function isInFavs(id){
    
    let favs = capturarStorage()   
    return favs.some(e => e.id == id)
}
mostrarFavs()
cantidadFavs()

/* let img = document.getElementById('nofav')
let fotoMostrada = 1
function changeImg() {
if(fotoMostrada == 1){
    img.src = '../images/whatsapp.png'
    fotoMostrada = 2
}
else if (fotoMostrada==2){
    img.src = '../images/user.svg'
    fotoMostrada = 1
}
} */