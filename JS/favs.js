//VARIABLES
const lista_favs = document.getElementById('lista_favs')
const burbujaFavs = document.getElementById('burbujaFavs')
const trash_favs = document.getElementById('trashFavs')

//FUCIONES
function mostrarFavs() {
    let favs = capturarStorageFavs()
    if(favs.length > 0){
        lista_favs.innerHTML = ''
        favs.forEach(element => {
        lista_favs.innerHTML +=`
        <div class="producto card swiper-slide">
            <img class="img-producto" src="../images/${element.img}" alt="${element.name}">
            <div class="porc-descuento">
                <span>% ${element.porcDesc}</span>
            </div>
            <div class="producto-info">
                <div id="container_name-fav">
                    <p>${element.name}</p>
                    <button onclick='eliminarProdFav(${element.id})' id='btn_no_fav'><img id="nofav" src="../images/heart_negro.png" alt=""></button>
                </div>
                <div class="container_price-agregar">
                    <div class="container_precios">
                        <span class="precio-sin-desc"> $${element.price+(element.price *element.porcDesc/100)}</span>
                        <span class="precio-descuento"> $${element.price}</span>
                    </div>
                    <button onclick="agregarAlCarrito(${element.id})" class="btn_agregar_carrito"><img class="img_agregar_carrito" src="../images/add-to-basket.png" alt="Agregar al Carrito"></button>
                </div>  
            </div>
        </div>
        `
    })
    }
    else{lista_favs.innerHTML = `
            <div class="favs_vacio">
                <h3>SU LISTA DE FAVORITOS ESTÁ VACÍA</h3>
                <span><a href="../index.html">IR AL INICIO</a></span>
            </div>
        `
    }
    cantidadFavs()
}
function capturarStorageFavs() {
    return JSON.parse(localStorage.getItem('favs')) || []
}
function guardarStorageFavs(favsNew) {
    localStorage.setItem('favs', JSON.stringify(favsNew))
}
function cantidadFavs(array) {
    let favs = capturarStorageFavs()
    burbujaFavs.innerHTML = favs.length
}
const heart = document.getElementById('asd')
function hola(){
    heart.src = '../images/add-cart.svg'
}
function agregarFavs(idParam) {
    let favs = capturarStorageFavs()
    const productoEncontrado = products.find(e => e.id == idParam)
    if (isInFavs(idParam)) {
        Toastify({
        text: "Producto ya agregado",
        style: {
            color: '#000',
            fontSize:'20px',
            fontFamily:'Staatliches, cursive',
            textAlign:'center',
            width:'207px',
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
            width:'207px',
        },
        duration: 1000,
        backgroundColor:'#d3b246',
    }).showToast();
        favs.push({...productoEncontrado, cantidad:1})
    }
    guardarStorageFavs(favs)
    mostrarFavs()
}
function eliminarProdFav(id) {
    let favs = capturarStorageFavs()
    Toastify({
        text: "eliminado de favoritos",
        style: {
            color: '#000',
            fontSize:'20px',
            fontFamily:'Staatliches, cursive',
            textAlign:'center',
            width:'207px',
        },
        duration: 1000,
        backgroundColor:'#d3b246',
    }).showToast()
    const resultado = favs.filter((prod) => prod.id !== id);
    guardarStorageFavs(resultado)
    mostrarFavs()
}
function eliminarListaFavs() {
    let favs = capturarStorageFavs()
    if(favs.length == 0){
        Swal.fire({
            title: 'Su lista de favoritos está vacía.',
            confirmButtonColor: '#d3b246',
        })
    }
    else{
        Swal.fire({
            title: '¿Desea vaciar su lista de favoritos?',
            showCancelButton: true,
            confirmButtonColor: '#d3b246',
            cancelButtonColor: '#db0000',
            confirmButtonText: 'Eliminar productos',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                let timerInterval
                Swal.fire({
                    title: 'Vaciando lista de favoritos.',
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
                        localStorage.removeItem("favs")
                        mostrarFavs()
                    }
                })
            }
        })
    }
}
function isInFavs(id){
    let favs = capturarStorageFavs()   
    return favs.some(e => e.id == id)
}
mostrarFavs()
cantidadFavs()

//EVENTOS
trash_favs.onclick = eliminarListaFavs