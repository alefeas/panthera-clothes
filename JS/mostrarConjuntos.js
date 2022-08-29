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
precio_menor_mayor.addEventListener ('click',function(){
    productosConjuntos.sort((a,b) => {
        if(a.price > b.price){
            return 1
        }
        if(a.price < b.price){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosConjuntos)
}) 
precio_mayor_menor.addEventListener ('click',function(){
    productosConjuntos.sort((a,b) => {
        if(a.price < b.price){
            return 1
        }
        if(a.price > b.price){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosConjuntos)
}) 
orden_mayor_menor.addEventListener ('click',function(){
    productosConjuntos.sort((a,b) => {
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return 1
        }
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosConjuntos
        )
}) 
orden_menor_mayor.addEventListener ('click',function(){
    productosConjuntos.sort((a,b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return 1
        }
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosConjuntos)
}) 