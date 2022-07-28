//FUNCIONES
function mostrarProdsMujeres(){
    let productosMujeres = products.filter(objeto => objeto.page ==="Mujeres")
    mostrarProductos(productosMujeres)
}
function filtrar_productos_slider() {
    let productosSliderMujeres = products.filter(objeto => objeto.slider === "si" && objeto.page ==="Mujeres")
    mostrarProductosSlider(productosSliderMujeres)
}
mostrarProdsMujeres()
filtrar_productos_slider()

//EVENTOS
categoria_buzos_mujeres.onclick = filtrar_buzos_mujeres
categoria_joggers_mujeres.onclick = filtrar_joggers_mujeres
categoria_remeras_mujeres.onclick = filtrar_remeras_mujeres
categoria_accesorios_mujeres.addEventListener('click', filtrar_accesorios_mujeres)
categoria_jeans_mujeres.addEventListener('click', filtrar_jeans_mujeres)
descartar_cambios_mujeres.addEventListener('click',mostrarProdsMujeres)