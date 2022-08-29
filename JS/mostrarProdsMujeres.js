//VARIABLES
let productosMujeres = products.filter(objeto => objeto.page ==="Mujeres")
let productosSliderMujeres = products.filter(objeto => objeto.slider === "si" && objeto.page === "Mujeres")

//FUNCIONES
function mostrarProdsMujeres(){
    mostrarProductos(productosMujeres)  
}
function filtrar_productos_slider(){ mostrarProductosSlider(productosSliderMujeres) }
mostrarProdsMujeres()
filtrar_productos_slider()

//EVENTOS
categoria_buzos_mujeres.onclick = filtrar_buzos_mujeres
categoria_joggers_mujeres.onclick = filtrar_joggers_mujeres
categoria_remeras_mujeres.onclick = filtrar_remeras_mujeres
categoria_accesorios_mujeres.addEventListener('click', filtrar_accesorios_mujeres)
categoria_jeans_mujeres.addEventListener('click', filtrar_jeans_mujeres)
descartar_cambios_mujeres.addEventListener('click',mostrarProdsMujeres)
precio_menor_mayor.addEventListener ('click',function(){
        productosMujeres.sort((a,b) => {
            if(a.price > b.price){
                return 1
            }
            if(a.price < b.price){
                return -1
            }
            return 0 
        })
        mostrarProductos(productosMujeres)
}) 
precio_mayor_menor.addEventListener ('click',function(){
        productosMujeres.sort((a,b) => {
            if(a.price < b.price){
                return 1
            }
            if(a.price > b.price){
                return -1
            }
            return 0 
        })
        mostrarProductos(productosMujeres)
}) 
orden_mayor_menor.addEventListener ('click',function(){
        productosMujeres.sort((a,b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()){
                return 1
            }
            if(a.name.toLowerCase() < b.name.toLowerCase()){
                return -1
            }
            return 0 
        })
        mostrarProductos(productosMujeres)
}) 
orden_menor_mayor.addEventListener ('click',function(){
        productosMujeres.sort((a,b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()){
                return 1
            }
            if(a.name.toLowerCase() > b.name.toLowerCase()){
                return -1
            }
            return 0 
        })
        mostrarProductos(productosMujeres)
}) 