//VARIABLES
let productosCalzado = products.filter(objeto => objeto.page ==="Calzado")
let productosSliderCalzado = products.filter(objeto => objeto.slider === "si" && objeto.page ==="Calzado")

//FUNCIONES
function mostrarProdsCalzado(){mostrarProductos(productosCalzado)}
function filtrar_productos_slider(){mostrarProductosSlider(productosSliderCalzado)}
mostrarProdsCalzado()
filtrar_productos_slider()

//EVENTOS
categoria_deportivo_calzado.onclick = filtrar_deportivo_calzado
categoria_sandalias_calzado.onclick = filtrar_sandalias_calzado
categoria_sneakers_calzado.onclick = filtrar_sneakers_calzado
categoria_elegante_calzado.addEventListener('click', filtrar_elegante_calzado)
categoria_botas_calzado.addEventListener('click', filtrar_botas_calzado)
descartar_cambios_calzado.addEventListener('click',mostrarProdsCalzado)
precio_menor_mayor.addEventListener ('click',function(){
    productosCalzado.sort((a,b) => {
        if(a.price > b.price){
            return 1
        }
        if(a.price < b.price){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosCalzado)
}) 
precio_mayor_menor.addEventListener ('click',function(){
    productosCalzado.sort((a,b) => {
        if(a.price < b.price){
            return 1
        }
        if(a.price > b.price){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosCalzado)
}) 
orden_mayor_menor.addEventListener ('click',function(){
    productosCalzado.sort((a,b) => {
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return 1
        }
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosCalzado)
}) 
orden_menor_mayor.addEventListener ('click',function(){
    productosCalzado.sort((a,b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return 1
        }
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return -1
        }
        return 0 
    })
    mostrarProductos(productosCalzado)
}) 