const listaProductosCalzado= document.getElementById('listaProductosCalzado')
let categoria_botas_calzado = document.getElementById('botasCalzado')
let categoria_elegante_calzado = document.getElementById('eleganteCalzado')
let categoria_sneakers_calzado = document.getElementById('sneakersCalzado')
let categoria_sandalias_calzado = document.getElementById('sandaliasCalzado');
let categoria_deportivo_calzado = document.getElementById('deportivoCalzado')
let descartar_cambios = document.getElementById('botonDescartarCambiosCalzado')

function mostrarProductos(arrayProductos) {
    listaProductosCalzado.innerHTML = ''
    arrayProductos.forEach(element => {
        listaProductosCalzado.innerHTML += `
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
function filtrar_deportivo_calzado() {
    let deportivo_calzado = productsCalzado.filter(objeto => objeto.category === "Deportivo" && objeto.page ==="Calzado")
    mostrarProductos(deportivo_calzado)
}
function filtrar_sandalias_calzado() {
    let sandalias_calzado = productsCalzado.filter(objeto => objeto.category === "Sandalias" && objeto.page ==="Calzado")
    mostrarProductos(sandalias_calzado)
}
function filtrar_sneakers_calzado() {
    let sneakers_calzado = productsCalzado.filter(objeto => objeto.category === "Sneakers" && objeto.page ==="Calzado")
    mostrarProductos(sneakers_calzado)
}
function filtrar_elegante_calzado() {
    let elegante_calzado = productsCalzado.filter(objeto => objeto.category === "Elegante" && objeto.page ==="Calzado")
    mostrarProductos(elegante_calzado)
}
function filtrar_botas_calzado() {
    let botas_calzado = productsCalzado.filter(objeto => objeto.category === "Botas" && objeto.page ==="Calzado")
    mostrarProductos(botas_calzado)
}
mostrarProductos(productsCalzado)

categoria_deportivo_calzado.onclick = () =>{
    filtrar_deportivo_calzado()
}
categoria_sandalias_calzado.onclick = () => {
    filtrar_sandalias_calzado();
}
categoria_sneakers_calzado.onclick = () =>{
    filtrar_sneakers_calzado()
}
categoria_elegante_calzado.addEventListener('click', function(){
    filtrar_elegante_calzado()
})
categoria_botas_calzado.addEventListener('click', function(){
    filtrar_botas_calzado()
})

descartar_cambios.addEventListener('click', function(){
    mostrarProductos(productsCalzado)
})
