//VARIABLES
let productosHombres = products.filter(objeto => objeto.page ==="Hombres")
let productosSliderHombres= products.filter(objeto => objeto.slider === "si" && objeto.page ==="Hombres")

//FUNCIONES
function mostrarProdsHombres(){mostrarProductos(productosHombres)}
function filtrar_productos_slider(){mostrarProductosSlider(productosSliderHombres)}
mostrarProdsHombres()
filtrar_productos_slider()

//EVENTOS
categoria_buzos_hombres.onclick = filtrar_buzos_hombres
categoria_joggers_hombres.onclick = filtrar_joggers_hombres
categoria_remeras_hombres.onclick = filtrar_remeras_hombres
categoria_accesorios_hombres.addEventListener('click', filtrar_accesorios_hombres)
categoria_jeans_hombres.addEventListener('click', filtrar_jeans_hombres)
descartar_cambios_hombres.addEventListener('click',mostrarProdsHombres)