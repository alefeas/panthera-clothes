function mostrarProductosSliderIndex(arrayProductos) {
    sliderProducts.innerHTML = ''
    arrayProductos.forEach(element => {
        sliderProducts.innerHTML += `
        <div class="producto">
            <img class="img-producto" src="images/${element.img}" alt="${element.name}">
            <div class="porc-descuento">
                <span>% ${element.porcDesc}</span>
            </div>
            <div class="producto-info">
                <div id="container_name-fav">
                    <p>${element.name}</p>
                    <button onclick='prodsFav(${element.id})' id='btn_no_fav'><img id="no-fav" src="images/heart.png" alt=""></button>
                </div>
                <div class="container_price-agregar">
                    <div class="container_precios">
                        <span class="precio-sin-desc"> $${element.price+(element.price *element.porcDesc/100)}</span>
                        <span class="precio-descuento"> $${element.price}</span>
                    </div>
                    <button onclick="agregarAlCarrito(${element.id})" style="background=transparent" class="btn_agregar_carrito"><img class="img_agregar_carrito" src="images/add-to-basket.png" alt="Agregar al Carrito"></button>
                </div>  
            </div>
        </div>
        `
    });
}
function filtrar_productos_slider() {
    let productosSliderIndex= products.filter(objeto => objeto.sliderIndex === "si")
    mostrarProductosSliderIndex(productosSliderIndex)
}
filtrar_productos_slider()