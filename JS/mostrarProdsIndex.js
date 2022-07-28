function filtrar_productos_slider() {
    let productosSliderHombres= products.filter(objeto => objeto.sliderIndex === "si")
    mostrarProductosSlider(productosSliderHombres)
}
filtrar_productos_slider()