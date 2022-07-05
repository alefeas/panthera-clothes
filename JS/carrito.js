function calculo_iva(){
    let precio_buzo=4999;
    let precio_zapatos=14999;
    let precio_jean=9999;
    let precio_remera=2999;
    let precio_collar=2999;
    let suma_carrito=0;
    for(let i=0; i<1;i++){
        let cant_productos=prompt("¿Cuantos productos desea llevar?");
        if(cant_productos<=0 || cant_productos>10){
            console.log("Solo se puede llevar de 1 a 10 productos por compra.");
            i=i-1;
        }
        else if(cant_productos<=10 || cant_productos>0){
            for(let i=0;i<cant_productos;i++){
                let producto=prompt("Elija un producto: BUZO/REMERA/JEAN/ZAPATOS/COLLAR");
                if(producto=="BUZO"){
                    suma_carrito =parseInt(suma_carrito + precio_buzo) ;
                    let iva = parseInt(suma_carrito * 0.21);
                    console.log("El precio total es de: $",suma_carrito);
                    console.log("IVA incluido de: $",iva)
                }
                else if(producto=="REMERA"||producto=="COLLAR"){
                    suma_carrito = parseInt(suma_carrito + precio_collar);
                    iva = parseInt(suma_carrito * 0.21);
                    console.log("El precio total es de: $",suma_carrito);
                    console.log("IVA inclucido de: $",iva)
                }
                else if(producto=="JEAN"){
                    suma_carrito = parseInt(suma_carrito + precio_jean);
                    iva = parseInt(suma_carrito * 0.21);
                    console.log("El precio total es de: $",suma_carrito);
                    console.log("IVA inclucido de: $",iva)
                }
                else if(producto=="ZAPATOS"){
                    suma_carrito =parseInt(suma_carrito + precio_zapatos);
                    iva = parseInt(suma_carrito * 0.21);
                    console.log("El precio total es de: $",suma_carrito);
                    console.log("IVA inclucido de: $",iva);
                }
                else{
                    console.log("Artículo no encontrado.");
                    i=i-1;
                }
            }
        }
        else{
            console.log("Debe ingresar un numero.");
            i=i-1;
        }
    }
}
calculo_iva();