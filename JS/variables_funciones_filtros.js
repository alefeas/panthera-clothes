//VARIABLES GENERALES
const listaProductos= document.getElementById('lista_productos')
const sliderProducts = document.getElementById('sliderProducts')
let orden_mayor_menor = document.getElementById('orden_mayor_menor')
let orden_menor_mayor = document.getElementById('orden_menor_mayor')
let precio_mayor_menor = document.getElementById('precio_mayor_menor')
let precio_menor_mayor = document.getElementById('precio_menor_mayor')

//VARIABLES SECCIÓN HOMBRES
let categoria_accesorios_hombres = document.getElementById('accesoriosHombres')
let categoria_remeras_hombres = document.getElementById('remerasHombres')
let categoria_joggers_hombres = document.getElementById('joggersHombres')
let categoria_buzos_hombres = document.getElementById('buzosHombres')
let categoria_jeans_hombres = document.getElementById('jeansHombres')
let descartar_cambios_hombres = document.getElementById('botonDescartarCambiosHombres')
let buzos_hombres = products.filter(objeto => objeto.category === "Buzos" && objeto.page ==="Hombres")
let joggers_hombres = products.filter(element => element.category === "Joggers" && element.page ==="Hombres")
let remeras_hombres = products.filter(objeto => objeto.category === "Remeras" && objeto.page ==="Hombres")
let accesorios_hombres = products.filter(objeto => objeto.category === "Accesorios" && objeto.page ==="Hombres")
let jeans_hombres = products.filter(objeto => objeto.category === "Jeans" && objeto.page ==="Hombres")

//VARIABLES SECCIÓN MUJERES
let categoria_jeans_mujeres = document.getElementById('jeansMujeres')
let categoria_accesorios_mujeres = document.getElementById('accesoriosMujeres')
let categoria_remeras_mujeres = document.getElementById('remerasMujeres')
let categoria_joggers_mujeres = document.getElementById('joggersMujeres');
let categoria_buzos_mujeres = document.getElementById('buzosMujeres')
let descartar_cambios_mujeres = document.getElementById('botonDescartarCambiosMujeres')
let buzos_mujeres = products.filter(objeto => objeto.category === "Buzos" && objeto.page ==="Mujeres")
let joggers_mujeres = products.filter(element => element.category === "Joggers" && element.page ==="Mujeres")
let remeras_mujeres = products.filter(objeto => objeto.category === "Remeras" && objeto.page ==="Mujeres")
let accesorios_mujeres = products.filter(objeto => objeto.category === "Accesorios" && objeto.page ==="Mujeres")
let jeans_mujeres = products.filter(objeto => objeto.category === "Jeans" && objeto.page ==="Mujeres")

//VARIABLES SECCIÓN CONJUNTOS
let categoria_elegante_conjuntos = document.getElementById('eleganteConjuntos')
let categoria_urbano_conjuntos = document.getElementById('urbanoConjuntos')
let categoria_aesthetic_conjuntos = document.getElementById('aesthConjuntos')
let categoria_deportivo_conjuntos = document.getElementById('deportivoConjuntos');
let categoria_casual_conjuntos = document.getElementById('casualConjuntos')
let descartar_cambios_conjuntos = document.getElementById('botonDescartarCambiosConjuntos')
let casual_conjuntos = products.filter(objeto => objeto.category === "Casual" && objeto.page ==="Conjuntos")
let deportivo_conjuntos = products.filter(element => element.category === "Deportivo" && element.page ==="Conjuntos")
let aesthetic_conjuntos = products.filter(objeto => objeto.category === "Aesthetic" && objeto.page ==="Conjuntos")
let elegante_conjuntos = products.filter(objeto => objeto.category === "Elegante" && objeto.page ==="Conjuntos")
let urbano_conjuntos = products.filter(objeto => objeto.category === "Urbano" && objeto.page ==="Conjuntos")

//VARIABLES SECCIÓN CALZADO
let categoria_botas_calzado = document.getElementById('botasCalzado')
let categoria_elegante_calzado = document.getElementById('eleganteCalzado')
let categoria_sneakers_calzado = document.getElementById('sneakersCalzado')
let categoria_sandalias_calzado = document.getElementById('sandaliasCalzado');
let categoria_deportivo_calzado = document.getElementById('deportivoCalzado')
let descartar_cambios_calzado = document.getElementById('botonDescartarCambiosCalzado')
let elegante_calzado = products.filter(objeto => objeto.category === "Elegante" && objeto.page ==="Calzado")
let sneakers_calzado = products.filter(objeto => objeto.category === "Sneakers" && objeto.page ==="Calzado")
let sandalias_calzado = products.filter(objeto => objeto.category === "Sandalias" && objeto.page ==="Calzado")
let deportivo_calzado = products.filter(objeto => objeto.category === "Deportivo" && objeto.page ==="Calzado")
let botas_calzado = products.filter(objeto => objeto.category === "Botas" && objeto.page ==="Calzado")

//FUNCIONES (MOSTRAR PRODUCTOS)
function mostrarProductos(arrayProductos) {
        listaProductos.innerHTML = ''
        arrayProductos.forEach(element => {
            listaProductos.innerHTML += `
            <div class="producto">
            <img class="img-producto" src="../images/${element.img}" alt="${element.name}">
            <div class="porc-descuento">
            <span>% ${element.porcDesc}</span>
            </div>
            <div class="producto-info">
            <div id="container_name-fav">
            <p>${element.name}</p>
            <button onclick='agregarFavs(${element.id})' id='btn_no_fav'><img id="nofav" src="../images/heart.png" alt=""></button>
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
        });
}
function mostrarProductosSlider(arrayProductos) {
    sliderProducts.innerHTML = ''
    arrayProductos.forEach(element => {
        sliderProducts.innerHTML += `
        <div class="producto card swiper-slide">
            <img class="img-producto" src="../images/${element.img}" alt="${element.name}">
            <div class="porc-descuento">
                <span>% ${element.porcDesc}</span>
            </div>
            <div class="producto-info">
                <div id="container_name-fav">
                    <p>${element.name}</p>
                    <button onclick='agregarFavs(${element.id})' id='btn_no_fav'><img id="nofav" src="../images/heart.png" alt=""></button>
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
    });
}

//FUNCIONES SECCIÓN HOMBRES
function filtrar_buzos_hombres() { mostrarProductos(buzos_hombres) }
function filtrar_joggers_hombres() { mostrarProductos(joggers_hombres) }
function filtrar_remeras_hombres() { mostrarProductos(remeras_hombres) }
function filtrar_accesorios_hombres() { mostrarProductos(accesorios_hombres) }
function filtrar_jeans_hombres() { mostrarProductos(jeans_hombres) }

//FUNCIONES SECCIÓN MUJERES
function filtrar_buzos_mujeres() { mostrarProductos(buzos_mujeres) }
function filtrar_joggers_mujeres() { mostrarProductos(joggers_mujeres) }
function filtrar_remeras_mujeres() { mostrarProductos(remeras_mujeres) }
function filtrar_accesorios_mujeres() { mostrarProductos(accesorios_mujeres) }
function filtrar_jeans_mujeres() { mostrarProductos(jeans_mujeres) }

//FUNCIONES SECCIÓN CONJUNTOS
function filtrar_casual_conjuntos() { mostrarProductos(casual_conjuntos) }
function filtrar_deportivo_conjuntos() { mostrarProductos(deportivo_conjuntos) }
function filtrar_aesthetic_conjuntos() { mostrarProductos(aesthetic_conjuntos) }
function filtrar_elegante_conjuntos() { mostrarProductos(elegante_conjuntos) }
function filtrar_urbano_conjuntos() { mostrarProductos(urbano_conjuntos) }

//FUNCIONES SECCIÓN CALZADO
function filtrar_deportivo_calzado() { mostrarProductos(deportivo_calzado) }
function filtrar_sandalias_calzado() { mostrarProductos(sandalias_calzado) }
function filtrar_sneakers_calzado() { mostrarProductos(sneakers_calzado) }
function filtrar_elegante_calzado() { mostrarProductos(elegante_calzado) }
function filtrar_botas_calzado() { mostrarProductos(botas_calzado) }