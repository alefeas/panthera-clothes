const products = [
    { id:1, name:'Buzo Oversize.',price: 8990, porcDesc:10, page:'Mujeres', category:'Buzos', img:'camperablanca.webp', slider:'si', stock:5 },
    { id:2, name:'Jogger de Jean.', price: 9990, porcDesc:10, page:'Mujeres', category:'Joggers', img:'camperablanca.webp', slider:'si', stock:5},
    { id:3, name:'Jean Oversize.', price: 12990, porcDesc:10, page:'Mujeres', categoria:'Jeans', img:'camperablanca.webp', slider:'si', stock:5 },
    { id:4, name:'Collar de Plata.', price: 2990, porcDesc:10, page:'Mujeres', category:'Accesorios', img:'camperablanca.webp', slider:'no', stock:5 },
    { id:5, name:'Remera Oversize.', price: 2990, porcDesc:10, page:'Mujeres', category:'Remeras', img:'camperablanca.webp', slider:'no', stock:5 },
    { id:6, name:'Buzo Canguro.', price: 2990, porcDesc:10, page:'Mujeres', category:'Buzos', img:'camperablanca.webp', slider:'no', stock:5 },
    { id:7, name:'Buzo Oversize.', price: 8990, porcDesc:10, page:'Hombres', category:'Buzos', img:'ropa_hombre.webp', slider:'no', stock:5 },
    { id:8, name:'Jogger de Je .', price: 9990, porcDesc:10, page:'Mujeres', category:'Joggers', img:'camperablanca.webp', slider:'no', stock:5 },
    { id:9, name:'Jean Oversize.', price: 12990, porcDesc:10, page:'Mujeres', categoria:'hogar', img:'camperablanca.webp', slider:'no', stock:5 },
    { id:10, name:'Jean Elastizado.', price: 10990, porcDesc:10, page:'Mujeres', category:'Jeans', img:'camperablanca.webp', slider:'no'},
    { id:11, name:'Remera Oversize.', price: 2990, porcDesc:10, page:'Mujeres', category:'Remeras', img:'camperablanca.webp', slider:'si', stock:5 },
    { id:12, name:'Buzo Oversize.', price: 8990, porcDesc:10, page:'Mujeres', category:'Buzos', img:'camperablanca.webp', slider:'si', stock:5 },
    { id:13, name:'Jogger de Jean.', price: 9990, porcDesc:10, page:'Mujeres', category:'Joggers', img:'camperablanca.webp', slider:'si', stock:5 },
    { id:14, name:'Jean Oversize.', price: 12990, porcDesc:10, page:'Mujeres', categoria:'Jeans', img:'camperablanca.webp', slider:'si', stock:5 },
    { id:15, name:'Jean Elastizado.', price: 10990, porcDesc:10, page:'Mujeres', category:'Jeans', img:'camperablanca.webp', slider:'si', stock:5 },
    { id:16, name:'Collar de Plata.', price: 2990, porcDesc:10, page:'Mujeres', category:'Accesorios', img:'camperablanca.webp', slider:'si', stock:5 },
    { id:17, name:'Buzo Oversize.', price: 8990, porcDesc:10, page:'Mujeres', category:'Buzos', img:'camperablanca.webp', slider:'si', stock:5 },
    { id:18, name:'Buzo Oversize.', price: 8990, porcDesc:10, page:'Mujeres', category:'Buzos', img:'camperablanca.webp', slider:'si', sliderIndex:'si', stock:5 },
    { id:19, name:'Deportivo Outfit.', price: 9990, porcDesc:20, page:'Conjuntos', category:'Deportivo', img:'outfitvioleta.webp', slider:'si', stock:5 },
    { id:20, name:'Traje Cruzado.', price: 10990, porcDesc:10, page:'Conjuntos', category:'Elegante', img:'outfitvioleta.webp', slider:'si', sliderIndex:'si', stock:10 },
    { id:21, name:'Urbano Outfit', price: 2990, porcDesc:10, page:'Conjuntos', category:'Urbano', img:'outfitvioleta.webp', slider:'si', stock:5 },
    { id:22, name:'Casual Outfit', price: 2990, porcDesc:10, page:'Conjuntos', category:'Casual', img:'outfitvioleta.webp', slider:'si', stock:5 },
    { id:23, name:'Aesthetic Outfit', price: 2990, porcDesc:10, page:'Conjuntos', category:'Aesthetic', img:'outfitvioleta.webp', slider:'si', stock:5 },
    { id:24, name:'Deportivo Outfit.', price: 9990, porcDesc:10, page:'Conjuntos', category:'Deportivo', img:'outfitvioleta.webp', slider:'si', stock:5 },
    { id:25, name:'Traje Cruzado.', price: 10990, porcDesc:10, page:'Conjuntos', category:'Elegante', img:'outfitvioleta.webp', slider:'si', stock:60 },
    { id:26, name:'Urbano Outfit', price: 2990, porcDesc:10, page:'Conjuntos', category:'Urbano', img:'outfitvioleta.webp', slider:'si', sliderIndex:'si', stock:5 },
    {id:27,name:'Casual Outfit',price: 2990,porcDesc:10,page:'Conjuntos',category:'Casual',img:'outfitvioleta.webp',slider:'si',stock:5},
    {id:28,name:'Aesthetic Outfit',price: 2990,porcDesc:10,page:'Conjuntos',category:'Aesthetic',img:'outfitvioleta.webp',slider:'si',stock:5},
    { id:29, name:'Remera Oversize.', price: 2990, page:'Hombres', precioDesc:0, category:'Remeras', img:'ropa_hombre.webp', slider:'no', sliderIndex:'si', porcDesc:10, stock:5 },
    { id:30, name:'Chomba.', price: 2990, precioDesc:2000, page:'Hombres', category:'Remeras', img:'ropa_hombre.webp', sliderIndex:'si', slider:'si', porcDesc:10, stock:5 },
    { id:31, name:'Buzo Canguro.', price: 2990, precioDesc:0, page:'Hombres', category:'Buzos', img:'ropa_hombre.webp', slider:'si', porcDesc:10, stock:5 },
    { id:32, name:'Jean Elastizado.', price: 10990, precioDesc:0, page:'Hombres', category:'Jeans', img:'ropa_hombre.webp', sliderIndex:'si', slider:'si', porcDesc:10, stock:5 },
    { id:33, name:'Chomba.', price: 2990, porcDesc:10, page:'Hombres', category:'Remeras', img:'ropa_hombre.webp', slider:'si', stock:5 },
    { id:34, name:'Collar de Plata.', price: 2990, page:'Hombres', category:'Accesorios', img:'ropa_hombre.webp', slider:'si', sliderIndex:'si', porcDesc:10, stock:5 },
    { id:35, name:'Chomba.', price: 2990, porcDesc:10, page:'Hombres', category:'Remeras', img:'ropa_hombre.webp',sliderIndex:'si', slider:'si', stock:5 },
    { id:36, name:'Jean Oversize.', price: 2990, porcDesc:10, page:'Hombres', category:'Jeans', img:'ropa_hombre.webp', slider:'si', stock:5 },
    { id:37, name:'Jogger de Jean.', price: 2990, porcDesc:10, page:'Hombres', category:'Joggers', img:'ropa_hombre.webp', slider:'si', stock:5 },
    { id:38, name:'Zapatillas.', price: 20990, porcDesc:10, page:'Calzado', category:'Deportivo', img:'zapatillas.webp', slider:'si', stock:5 },
    { id:39, name:'Sandalias.', price: 19990, porcDesc:10, page:'Calzado', category:'Sandalias', img:'zapatillas.webp', slider:'si', stock:5 },
    { id:40, name:'Botas.', price: 2990, porcDesc:10, page:'Calzado', category:'Botas', img:'zapatillas.webp', slider:'si', sliderIndex:'si', stock:5 },
    { id:41, name:'Sneakers.', price: 2990, porcDesc:10, page:'Calzado', category:'Sneakers', img:'zapatillas.webp', slider:'si', stock:5 },
    { id:42, name:'Elegante.', price: 2990, porcDesc:10, page:'Calzado', category:'Elegante', img:'zapatillas.webp', slider:'si', sliderIndex:'si', stock:5 },
    { id:43, name:'Zapatillas.', price: 2990, porcDesc:10, page:'Calzado', category:'Deportivo', img:'zapatillas.webp', slider:'si', stock:5 },
    { id:44, name:'Sandalias.', price: 2990, porcDesc:10, page:'Calzado', category:'Sandalias', img:'zapatillas.webp', slider:'si', stock:5 },
    { id:45, name:'Botas.', price: 2990, porcDesc:10, page:'Calzado', category:'Botas', img:'zapatillas.webp', slider:'si', sliderIndex:'si', stock:5 },
    { id:46, name:'Sneakers.', price: 2990, porcDesc:10, page:'Calzado', category:'Sneakers', img:'zapatillas.webp', slider:'si', stock:5 },
    { id:47, name:'Elegante.', price: 2990, porcDesc:10, page:'Calzado', category:'Elegante', img:'zapatillas.webp', slider:'si', sliderIndex:'si', stock:5 },
]