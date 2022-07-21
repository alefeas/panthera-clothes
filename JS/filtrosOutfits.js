const listaProductosConjuntos= document.getElementById('listaProductosConjuntos')
let categoria_elegante_conjuntos = document.getElementById('eleganteConjuntos')
let categoria_urbano_conjuntos = document.getElementById('urbanoConjuntos')
let categoria_aesthetic_conjuntos = document.getElementById('aesthConjuntos')
let categoria_deportivo_conjuntos = document.getElementById('deportivoConjuntos');
let casual_conjuntos = document.getElementById('casualConjuntos')
let descartar_cambios = document.getElementById('botonDescartarCambiosConjuntos')

function mostrarProductos(arrayProductos) {
    listaProductosConjuntos.innerHTML = ''
    arrayProductos.forEach(element => {
        listaProductosConjuntos.innerHTML += `
        <div class="lista_productos-item">
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
function filtrar_casual_conjuntos() {
    let casual_conjuntos = productsConjuntos.filter(objeto => objeto.category === "Casual" && objeto.page ==="Conjuntos")
    mostrarProductos(casual_conjuntos)
}
function filtrar_deportivo_conjuntos() {
    let deportivo_conjuntos = productsConjuntos.filter(element => element.category === "Deportivo" && element.page ==="Conjuntos")
    mostrarProductos(deportivo_conjuntos)
}
function filtrar_aesthetic_conjuntos() {
    let aesthetic_conjuntos = productsConjuntos.filter(objeto => objeto.category === "Aesthetic" && objeto.page ==="Conjuntos")
    mostrarProductos(aesthetic_conjuntos)
}
function filtrar_elegante_conjuntos() {
    let elegante_conjuntos = productsConjuntos.filter(objeto => objeto.category === "Elegante" && objeto.page ==="Conjuntos")
    mostrarProductos(elegante_conjuntos)
}
function filtrar_urbano_conjuntos() {
    let urbano_conjuntos = productsConjuntos.filter(objeto => objeto.category === "Urbano" && objeto.page ==="Conjuntos")
    mostrarProductos(urbano_conjuntos)
}
mostrarProductos(productsConjuntos)

categoria_aesthetic_conjuntos.onclick = () =>{
    filtrar_aesthetic_conjuntos()
}
categoria_urbano_conjuntos.addEventListener('click', function(){
    filtrar_urbano_conjuntos()
})
categoria_elegante_conjuntos.addEventListener('click', function(){
    filtrar_elegante_conjuntos()
})
categoria_deportivo_conjuntos.onclick = () => {
    filtrar_deportivo_conjuntos();
}
casual_conjuntos.onclick = () =>{
    filtrar_casual_conjuntos()
}
descartar_cambios.addEventListener('click', function(){
    mostrarProductos(productsConjuntos)
})
