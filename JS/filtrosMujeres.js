const listaProductosMujeres = document.getElementById('listaProductosMujeres')
let categoria_jeans_mujeres = document.getElementById('jeansMujeres')
let categoria_accesorios_mujeres = document.getElementById('accesoriosMujeres')
let categoria_remeras_mujeres = document.getElementById('remerasMujeres')
let categoria_joggers_mujeres = document.getElementById('joggersMujeres');
let categoria_buzos_mujeres = document.getElementById('buzosMujeres')
let descartar_cambios = document.getElementById('botonDescartarCambiosMujeres')

function mostrarProductos(arrayProductos) {
    listaProductosMujeres.innerHTML = ''
    arrayProductos.forEach(element => {
        listaProductosMujeres.innerHTML += `
        <div class="lista_productos-item item1">
            <div class="container_img-sexo">
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
function filtrar_buzos_mujeres() {
    let buzos_mujeres = productsMujeres.filter(objeto => objeto.category === "Buzos" && objeto.page ==="Mujeres")
    mostrarProductos(buzos_mujeres)
}
function filtrar_joggers_mujeres() {
    let joggers_mujeres = productsMujeres.filter(element => element.category === "Joggers" && element.page ==="Mujeres")
    mostrarProductos(joggers_mujeres)
}
function filtrar_remeras_mujeres() {
    let remeras_mujeres = productsMujeres.filter(objeto => objeto.category === "Remeras" && objeto.page ==="Mujeres")
    mostrarProductos(remeras_mujeres)
}
function filtrar_accesorios_mujeres() {
    let accesorios_mujeres = productsMujeres.filter(objeto => objeto.category === "Accesorios" && objeto.page ==="Mujeres")
    mostrarProductos(accesorios_mujeres)
}
function filtrar_jeans_mujeres() {
    let jeans_mujeres = productsMujeres.filter(objeto => objeto.category === "Jeans" && objeto.page ==="Mujeres")
    mostrarProductos(jeans_mujeres)
}
mostrarProductos(productsMujeres)

categoria_buzos_mujeres.onclick = () =>{
    filtrar_buzos_mujeres()
}
categoria_joggers_mujeres.onclick = () => {
    filtrar_joggers_mujeres();
}
categoria_remeras_mujeres.onclick = () =>{
    filtrar_remeras_mujeres()
}
categoria_accesorios_mujeres.addEventListener('click', function(){
    filtrar_accesorios_mujeres()
})
categoria_jeans_mujeres.addEventListener('click', function(){
    filtrar_jeans_mujeres()
})

descartar_cambios.addEventListener('click', function(){
    mostrarProductos(productsMujeres)
})
