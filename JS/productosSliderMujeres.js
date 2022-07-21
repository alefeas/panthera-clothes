const sliderMujeres = document.getElementById('sliderMujeres')

function mostrarProductosSlider(arrayProductos) {
    sliderMujeres.innerHTML = ''
    arrayProductos.forEach(element => {
        sliderMujeres.innerHTML += `
        <div class="producto">
            <img src="../images/${element.img}" alt="">
            <div class="producto-info">
                <div id="container_name-fav">
                    <p>${element.name}</p>
                    <button id='btn_no-fav'>
                        <img id="no-fav" src="../images/bx-heart.svg" alt="">
                    </button>
                </div>  
                <span> $${element.price}</span>
                <span class="precio-descuento"> $5999</span>
            </div>
        </div>
        <button class="btn btn-right"><i class="fa-solid fa-chevron-right glider-next"></i></button>
        <button class="btn btn-left glider-prev"><i class="fa-solid fa-chevron-left"></i></button>
        `
    });
}

function filtrar_productos_slider() {
    let productosSliderMujeres = productsMujeres.filter(objeto => objeto.slider === "si" && objeto.page ==="Mujeres")
    mostrarProductosSlider(productosSliderMujeres)
}
filtrar_productos_slider()