const listaPorductosHombres= document.getElementById('listaProductosHombres')

function mostrarProductos(arrayProductos) {
    listaPorductosHombres.innerHTML = ''
    arrayProductos.forEach(element => {
        listaPorductosHombres.innerHTML += `
        <div class="lista_productos-item item1">
                <div class="container_img-sexo">
                    <img src="${element.img}" alt="">
                </div>
                <div class="producto-info">
                    <div id="container_name-fav">                            <p>${element.name}</p>
                        <button id="btn_no-fav"><img id="no-fav" src="../images/bx-heart.svg" alt=""></button>
                </div>
                <span>$${element.price}</span>
            </div>
        </div>
`
    });
}
mostrarProductos(productsHombres)

function filtrar_buzos_hombres() {
    let buzos_hombres = productsHombres.filter(objeto => objeto.category === "Buzos" && objeto.page ==="Hombres")
    mostrarProductos(buzos_hombres)
}
let categoria_buzos = document.getElementById('buzosHombres')
categoria_buzos.onclick = () =>{
    filtrar_buzos_hombres()
}

function filtrar_joggers_hombres() {
    let joggers_hombres = productsHombres.filter(element => element.category === "Joggers" && element.page ==="Hombres")
    mostrarProductos(joggers_hombres)
}
let categoria_joggers_hombres = document.getElementById('joggersHombres');
categoria_joggers_hombres.onclick = () => {
    filtrar_joggers_hombres();
}

function filtrar_remeras_hombres() {
    let remeras_hombres = productsHombres.filter(objeto => objeto.category === "Remeras" && objeto.page ==="Hombres")
    mostrarProductos(remeras_hombres)
}
let categoria_remeras_hombres = document.getElementById('remerasHombres')
categoria_remeras_hombres.onclick = () =>{
    filtrar_remeras_hombres()
}

function filtrar_accesorios_hombres() {
    let accesorios_hombres = productsHombres.filter(objeto => objeto.category === "Accesorios" && objeto.page ==="Hombres")
    mostrarProductos(accesorios_hombres)
}
let categoria_accesorios_hombres = document.getElementById('accesoriosHombres')
categoria_accesorios_hombres.addEventListener('click', function(){
    filtrar_accesorios_hombres()
})

function filtrar_jeans_hombres() {
    let jeans_hombres = productsHombres.filter(objeto => objeto.category === "Jeans" && objeto.page ==="Hombres")
    mostrarProductos(jeans_hombres)
}
let categoria_jeans_hombres = document.getElementById('jeansHombres')
categoria_jeans_hombres.addEventListener('click', function(){
    filtrar_jeans_hombres()
})