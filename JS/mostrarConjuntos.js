//VARIABLES
let productosConjuntos = products.filter(objeto => objeto.page ==="Conjuntos")
let productosSliderConjuntos = products.filter(objeto => objeto.slider === "si" && objeto.page ==="Conjuntos")

//FUNCIONES
function mostrarProdsConjuntos(){ mostrarProductos(productosConjuntos)}
function filtrar_productos_slider() { mostrarProductosSlider(productosSliderConjuntos)}
mostrarProdsConjuntos()
filtrar_productos_slider()

//EVENTOS
categoria_aesthetic_conjuntos.onclick = filtrar_aesthetic_conjuntos
categoria_urbano_conjuntos.addEventListener('click',filtrar_urbano_conjuntos)
categoria_elegante_conjuntos.addEventListener('click', filtrar_elegante_conjuntos)
categoria_deportivo_conjuntos.onclick = filtrar_deportivo_conjuntos
categoria_casual_conjuntos.onclick = filtrar_casual_conjuntos
descartar_cambios_conjuntos.addEventListener('click',mostrarProdsConjuntos)