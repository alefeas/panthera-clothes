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
precio_menor_mayor.addEventListener ('click',function(){
    productosHombres.sort((a,b) => {
        if(a.price > b.price){
            return 1
        }
        if(a.price < b.price){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosHombres)
}) 
precio_mayor_menor.addEventListener ('click',function(){
    productosHombres.sort((a,b) => {
        if(a.price < b.price){
            return 1
        }
        if(a.price > b.price){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosHombres)
}) 
orden_mayor_menor.addEventListener ('click',function(){
    productosHombres.sort((a,b) => {
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return 1
        }
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosHombres)
}) 
orden_menor_mayor.addEventListener ('click',function(){
    productosHombres.sort((a,b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return 1
        }
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosHombres)
}) 