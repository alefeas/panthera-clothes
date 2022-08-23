//VARIABLES
const code_descuento = document.getElementById('inputCode')
const btn_code_desc = document.getElementById('btnDesc')
const desc_compra = document.getElementById('descCompra')
const precio_entrega = document.querySelector("#precio_entrega")

//FUNCIONES
function envioGratis(){
    const carrito = capturarStorage()
    const envio = 'GRATIS'
    const total = carrito.reduce(
    (acc, elem) => acc + elem.cantidad * elem.price,    
    0
    )
    totalCarrito.innerHTML ='$' + total
    precio_entrega.innerHTML = envio
}
function descuentoCompra(){
    const carrito = capturarStorage()
    const envio = 600
    const desc = '10%'
    const total = carrito.reduce(
    (acc, elem) => acc + elem.cantidad * elem.price - (elem.price *elem.cantidad *5/100),    
    0
    )
    totalCarrito.innerHTML ='$' + total
    precio_entrega.innerHTML = envio
    desc_compra.innerHTML = '-' + desc
}
function mostrarTotalCarrito() {
    const carrito = capturarStorage()
    const envio = 600
    const total = carrito.reduce(
    (acc, elem) => acc + elem.cantidad * elem.price,    
    envio
    )
    totalCarrito.innerHTML ='$' + total
    precio_entrega.innerHTML ='$' + envio
}    

//EVENTOS
btn_code_desc.onclick = () => {
    if(code_descuento.value == 'envio-gratis' || code_descuento.value == 'ENVIO-GRATIS'){
        envioGratis()
    }
    else if (code_descuento.value == '10-PORC-DESC' || code_descuento.value == '10-porc-desc') {
        descuentoCompra()
    }
}