/* function calculo_iva(){
    let precio_buzo=4999;
    let precio_zapatos=14999;
    let precio_jean=9999;
    let precio_remera=2999;
    let precio_collar=2999;
    let suma_carrito=0;
    function resultado_suma_iva(){
        const iva = parseInt(suma_carrito * 0.21);
        console.log("El precio total es de: $",suma_carrito);
        console.log("IVA incluido de: $",iva);
    }
    let cant_productos=prompt("¿Cuantos productos desea llevar?");
    for(let i=0; i<cant_productos;i++){
        if(cant_productos<=0 || cant_productos>10){
            console.log("Solo se puede llevar de 1 a 10 productos por compra.");
            i=i-1;
        }
        else if(cant_productos<=10 || cant_productos>0){
            for(let i=0;i<cant_productos;i++){
                let producto=prompt("Elija un producto: BUZO/REMERA/JEAN/ZAPATOS/COLLAR");
                if(producto=="BUZO"){
                    suma_carrito =parseInt(suma_carrito + precio_buzo) ;
                    resultado_suma_iva();
                }
                else if(producto=="REMERA"||producto=="COLLAR"){
                    suma_carrito = parseInt(suma_carrito + precio_collar);
                    resultado_suma_iva();
                }
                else if(producto=="JEAN"){
                    suma_carrito = parseInt(suma_carrito + precio_jean);
                    resultado_suma_iva();
                }
                else if(producto=="ZAPATOS"){
                    suma_carrito =parseInt(suma_carrito + precio_zapatos);
                    resultado_suma_iva();
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
calculo_iva(); */

const Products = 
[
    {
        id:1,
        name:'Remera Oversize.',
        price: 2990,
    },
    {
        id:2,
        name:'Buzo Oversize.',
        price: 8990
    },
    {
        id:3,
        name:'Jogger de Jean.',
        price: 9990
    },
    {
        id:4,
        name:'Jean Oversize.',
        price: 12990
    },
    {
        id:5,
        name:'Jean Elastizado.',
        price: 10990
    },
    {
        id:6,
        name:'Collar de Plata.',
        price: 2990
    }
]

const cart = [];
let menu = `Bienvenido a nuestra tienda.\n 1 - Seleccionar un producto.\n 2 - Mostrar carrito.\n 3 - Eliminar producto.\n 0 - Finalizar compra.\n`;

const add_product = () =>{
    let list = '';
    for (const element of Products){   
        list += element.id + '- ' + element.name + '\n';
    }
    list +='0 - Volver al menu.\n';
    let option = parseInt(prompt(list));
    let product = Products.find(element => element.id === option);
    if(product){
        cart.push(product);
        alert('Producto agregado.');
    }
    else if(option==0){
    }
    else if(option<0 || option>0){
        alert('Producto no encontrado.');
    }
    else{
        alert('Debe ingresar un número para identificar el producto.')
    }
}

const show_cart = () =>{   
    let list = '';
    let count = 1;
    let total = 0;
    for (const element of cart){
        list += count++ + '- ' + element.name + '\n';
        total+= parseInt(element.price*1.21);
    }
    if(total==0){
        alert('Su carrito esta vacío.');
    }
    else{
        const iva = parseInt(total*0.21);
        list+= 'El total a pagar es: $' + total + '.\n';
        list+= 'IVA incluido: $' + iva + '.\n'; 
        alert(list);
    }
}
const delete_product = () =>{
    let list = '';
    let count = 1;
    for (const element of cart){
        list += count++ + '- ' + element.name + '\n';
    }
    if(count==1){
        alert('Debes seleccionar algún producto previamente.')
    }
    else{
        list +='0 - Volver al menu.\n';
        let option = parseInt(prompt(list));
        if(option>0 && option<count){
            cart.splice(option - 1,1);
            alert('Se ha eliminado el producto.')
        }
        else if(option>=count || option<0){
            alert('No se ha encontrado el producto.');
        }
        else if(option==0){
        }
        else{
            alert('Debe ingresar un número para identificar el producto.')
        }
    }
}
while(true){
    let option = parseInt(prompt(menu));
    switch(option){
        case 1:
        add_product();
        break;

        case 2:
        show_cart();
        break;

        case 3:
        delete_product();
        break;

        case 0:
        alert("Hasta luego, ¡Vuelva pronto!");
        break;

        default:
        alert("Debes seleccionar una opción válida.");
        break;
    }
    if(option == 0){
        break;
    }
}