const listaPorductosHombres= document.getElementById('listaProductosHombres')
let categoria_accesorios_hombres = document.getElementById('accesoriosHombres')
let categoria_remeras_hombres = document.getElementById('remerasHombres')
let categoria_joggers_hombres = document.getElementById('joggersHombres')
let categoria_buzos = document.getElementById('buzosHombres')
let categoria_jeans_hombres = document.getElementById('jeansHombres')
let descartar_cambios = document.getElementById('botonDescartarCambiosHombres')

function mostrarProductos(arrayProductos) {
    listaPorductosHombres.innerHTML = ''
    arrayProductos.forEach(element => {
        listaPorductosHombres.innerHTML += `
        <div class="lista_productos-item item1">
            <div>
                <img src="${element.img}" alt="">
            </div>
            <div class="producto-info">
                <div id="container_name-fav">
                    <p>${element.name}</p>
                    <button id="btn_no-fav"><img id="no-fav" src="../images/bx-heart.svg" alt=""></button>
                </div>
                <span>$${element.price}</span>
            </div>
        </div>
        `
    });
}

function mostrarProductosDesc(arrayProductos) {
    listaPorductosHombres.innerHTML = ''
    arrayProductos.forEach(element => {
        listaPorductosHombres.innerHTML += `
        <div class="lista_productos-item item1">
            <div>
                <img src="${element.img}" alt="">
            </div>
            <div class="producto-info">
                <div id="container_name-fav">
                    <p>${element.price}</p>
                    <button id="btn_no-fav"><img id="no-fav" src="../images/bx-heart.svg" alt=""></button>
                </div>
                <span>$${element.price}</span>
            </div>
        </div>
        `
    });
}
/* 
if (busquedaProdsDesc = productsHombres.find((objeto) => objeto.precioDesc != 0)) {
    mostrarProdsDesc(busquedaProdsDesc)
} */
function filtrar_buzos_hombres() {
    let buzos_hombres = productsHombres.filter(objeto => objeto.category === "Buzos" && objeto.page ==="Hombres")
    mostrarProductos(buzos_hombres)
}
function filtrar_joggers_hombres() {
    let joggers_hombres = productsHombres.filter(element => element.category === "Joggers" && element.page ==="Hombres")
    mostrarProductos(joggers_hombres)
}
function filtrar_remeras_hombres() {
    let remeras_hombres = productsHombres.filter(objeto => objeto.category === "Remeras" && objeto.page ==="Hombres")
    mostrarProductos(remeras_hombres)
}
function filtrar_accesorios_hombres() {
    let accesorios_hombres = productsHombres.filter(objeto => objeto.category === "Accesorios" && objeto.page ==="Hombres")
    mostrarProductos(accesorios_hombres)
}
function filtrar_jeans_hombres() {
    let jeans_hombres = productsHombres.filter(objeto => objeto.category === "Jeans" && objeto.page ==="Hombres")
    mostrarProductos(jeans_hombres)
}
mostrarProductos(productsHombres)

categoria_buzos.onclick = () =>{
    filtrar_buzos_hombres()
}
categoria_joggers_hombres.onclick = () => {
    filtrar_joggers_hombres();
}
categoria_remeras_hombres.onclick = () =>{
    filtrar_remeras_hombres()
}
categoria_accesorios_hombres.addEventListener('click', function(){
    filtrar_accesorios_hombres()
})
categoria_jeans_hombres.addEventListener('click', function(){
    filtrar_jeans_hombres()
})
descartar_cambios.addEventListener('click', function(){
    mostrarProductos(productsHombres)
})

