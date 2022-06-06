
/// LISTAS USADAS PARA tienda.html ///

var tiposProductos = ['placa_base','procesador','pantalla','raton','RAM','teclado','CD','HDD','SSD','ventilador','carcasa','fuente','grafica']

//var lista_compra = []
// lista de compra del cliente, para pruebas
var lista_compra = [
    {
        foto: '',
        tipo_comp: 'placa_base',
        formato: 'torre',
        nombre: 'Placa Base modelo EJ253',
        precio: 125,
        descripcion: 'componente esencia para trabajar con un ordenador, sin este componente el resto del ordenador es inutil'
    },
    {
        foto: '',
        tipo: 'raton',
        formato: 'portatil',
        nombre: 'Ratón inalhámbrico',
        precio: 20,
        descripcion: 'raton inalhámbrico con puerto USB 3.0, marca inditech'
    }
]

var todosProductos = [
    {
        foto: 'https://ae01.alicdn.com/kf/H40d965fb06b84e1d805015e865a20883F/Placa-base-X79-USB2-0-PCI-E-16X-LGA2011-M-ATX-X79M-S-2-0-NVME.jpg_Q90.jpg_.webp',
        tipo_comp: 'placa_base',
        formato: 'torre',
        nombre: 'Placa base X79',
        precio: 58.63,
        descripcion: 'Placa base X79 USB2.0 PCI-E 16X LGA2011 M ATX X79M-S 2,0, NVME M.2 SSD, compatible con memoria REG ECC y procesador Xeon E5',
        marca: 'ATX'
    },
    {
        foto: 'https://ae01.alicdn.com/kf/Ha174c859245548b1b249d5c3b020e409S/Placa-base-de-ordenador-port-til-para-ASUS-C15M-Celeron-N2940-Notebook-69N0CNMAYB02-REV-2-1.jpg_Q90.jpg_.webp',
        tipo_comp: 'placa_base',
        formato: 'portatil',
        nombre: 'placa base asus celeron',
        precio: 148.81,
        descripcion: 'Placa base de ordenador portátil para ASUS C15M Celeron N2940 Notebook, 69N0CNMAYB02 REV.2.1 DDR3',
        marca: 'ASUS'
    },
        {
        foto: 'https://ae01.alicdn.com/kf/H679c75f7b16e4a9ebb3d88baec31f32dC/Lntel-procesador-de-ordenador-port-til-Original-Core-i7-820QM-i7-840QM-de-1-73-GHz.jpg_Q90.jpg_.webp',
        tipo_comp: 'procesador',
        formato: 'portatil',
        nombre: 'Lntel-procesador de ordenador portátil Original Core i7',
        precio: 28.19,
        descripcion: 'Lntel-procesador de ordenador portátil Original Core i7 820QM, i7-840QM de 1,73 GHz Quad-Core i7 820Q PGA988 SLBLX, CPU móvil',
        marca: ''
    },
    {
        foto: 'https://img.pccomponentes.com/articles/35/357683/1291-revoltec-rs020-ventilador-led-para-vga-60mm.jpg',
        tipo_comp: 'ventilador',
        formato: 'torre',
        nombre: 'Revoltec RS020 Ventilador LED para VGA 60mm',
        precio: 9.86,
        descripcion: '',
        marca: 'revoltec'
    },
        {
        foto: 'https://m.media-amazon.com/images/I/51JF6prx1PS._AC_SL1000_.jpg',
        tipo_comp: 'ventilador',
        formato: 'portatil',
        nombre: 'Cooler Master NotePal CMC3 - Refrigeradores para Ordenador portátil Silent ',
        precio: 7.5,
        descripcion: 'Ventilador para Ordenador portátil Silent 200 mm, 700 RPM',
        marca: ''
    },
    {
        foto: 'https://thumb.pccomponentes.com/w-530-530/articles/24/245154/6.jpg',
        tipo_comp: 'grafica',
        formato: 'torre',
        nombre: 'MSI GeForce GTX 1660 SUPER Ventus XS OC 6GB GDDR6',
        precio: 315.99,
        descripcion: '',
        marca: 'Geoforce GTX'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/61XUr0Jj08L._AC_SL1000_.jpg',
        tipo_comp: 'grafica',
        formato: 'portatil',
        nombre: 'Tarjeta gráfica de 1 GB de repuesto para portátil Dell Alienware M15X R1 15.6" Intel Core i7 i5 i3 Gaming Laptop nVidia Geforce GTX 260M GTX260M GDDR3 1 GB, MXM VGA placa de reparación ',
        precio: 71.99,
        descripcion: '',
        marca: 'NVIDIA'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/713crn7sgVL._AC_SL1500_.jpg',
        tipo_comp: 'CD',
        formato: 'torre',
        nombre: 'ASUS DRW-24D5MT - Grabadora de DVD 24X, compatibilidad con M-Disc, encriptación de Disco, Almacenamiento Web Ilimitado (12 Meses), Nero Backitup, E-Green, E-Media ',
        precio: 24.40,
        descripcion: '',
        marca: 'ASUS'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/61iADY-Ud+L._AC_SL1500_.jpg',
        tipo_comp: 'CD',
        formato: 'portatil',
        nombre: 'Lector DVD Externo, Grabadora CD DVD Externa con USB 3.0 y Type-C, Disquetera Externa USB CD/DVD-RW Super Drive, Lector CD Externo para Portatil, PC, iMac, Macbook, Windows 11/10/8/XP/Linux/MacOS ',
        precio: 29.99,
        descripcion: '',
        marca: 'QDSYLQ'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/61ksP07mIgL._AC_SL1500_.jpg',
        tipo_comp: 'raton',
        formato: 'portatil',
        nombre: 'Logitech M185 Ratón Inalámbrico, 2.4GHz con Mini Receptor USB, Batería de 12 Meses, Seguimiento Óptico con Resolución de 1000 dpi, Ambidiestro, Compatible con PC, Mac, Portátil - Azul ',
        precio: 12.1,
        descripcion: '',
        marca: 'Logitech'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/41s6TYJtWnL._AC_.jpg',
        tipo_comp: 'raton',
        formato: 'torre',
        nombre: 'Ratón Inalámbrico Bluetooth Recargable, Ratón Retroiluminado de 7 Colores con Mini Receptor USB de 2,4 GHz, 1200,1600DPI',
        precio: 9.68,
        descripcion: '',
        marca: 'MME'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/61RY7zAgciL._AC_SL1200_.jpg',
        tipo_comp: 'teclado',
        formato: 'portatil',
        nombre: 'IFINGER Teclado Español Compatible para con portátil ASUS X55U 0KNB0-6221SP00 AENJ2P01210 NJ2 Teclas Repuesto',
        precio: 15.99,
        descripcion: '',
        marca: 'IFINGER'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/61eaMAoVLOL._AC_SL1500_.jpg',
        tipo_comp: 'teclado',
        formato: 'torre',
        nombre: 'Logitech K120 Teclado con Cable Business para Windows, Tamaño Normal, Resistante a Líquido, Barra Espaciadora Curvada, PC/Portátil, Disposición QWERTY Español, color Negro',
        precio: 10.99,
        descripcion: '',
        marca: 'Logitech'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/61ljxuwtg7L._AC_SL1500_.jpg',
        tipo_comp: 'carcasa',
        formato: 'torre',
        nombre: 'PCCASE Caja PC Micro-ATX MPC-27 con Fuente de Alimentación, Soporte para 3 Ventiladores, Rejilla Lateral, Soporte Candado, USB 3.0.',
        precio: 42.95,
        descripcion: '',
        marca: 'PCCASE'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/71Hb40BWP0L._AC_SL1424_.jpg',
        tipo_comp: 'carcasa',
        formato: 'portatil',
        nombre: 'mCover - Carcasa rígida para ASUS Chromebook Flip C214MA de 11,6 Pulgadas (2019, no Compatible con Otros Modelos ASUS Chromebook) Azul',
        precio: 24.99,
        descripcion: '',
        marca: 'mCover'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/61zGJo2ZrYL._AC_.jpg',
        tipo_comp: 'RAM',
        formato: 'portatil',
        nombre: 'Komputerbay - Memoria RAM portátil, 16GB (2 x 8GB), DDR3, PC3-10600/10666, 1333MHz, SODIMM (204-Pin)',
        precio: 49,
        descripcion: '',
        marca: 'Komputerbay'
    },
    {
        foto: 'https://m.media-amazon.com/images/I/61BVzUj2EEL._AC_SL1500_.jpg',
        tipo_comp: 'RAM',
        formato: 'torre',
        nombre: 'Lexar 16GB DRAM, DDR4 3200 MHz UDIMM Memoria de Escritorio para Usuarios Cotidianos, Mejora del Rendimiento, 16GB Single ',
        precio: 73.99,
        descripcion: '',
        marca: 'Lexar'
    },
    {
        foto: 'https://ae01.alicdn.com/kf/H679c75f7b16e4a9ebb3d88baec31f32dC/Lntel-procesador-de-ordenador-port-til-Original-Core-i7-820QM-i7-840QM-de-1-73-GHz.jpg_Q90.jpg_.webp',
        tipo_comp: 'procesador',
        formato: 'portatil',
        nombre: 'Intel-procesador de ordenador portátil Original Core i7',
        precio: 28.19,
        descripcion: 'Intel-procesador de ordenador portátil Original Core i7 820QM, i7-840QM de 1,73 GHz Quad-Core i7 820Q PGA988 SLBLX, CPU móvil',
        marca: 'Intel'
    },
    {
        foto: 'https://ae01.alicdn.com/kf/H057b790cecb5427eaa3844e158cbecebw/Toshiba-disco-duro-de-2TB-para-port-til-HDD-2-5-Sata3-Notebook-disco-duro-interno.jpg_Q90.jpg_.webp',
        tipo_comp: 'HDD',
        formato: 'portatil',
        nombre: 'Toshiba-disco duro',
        precio: 81.34,
        descripcion: 'Toshiba-disco duro de 2TB para portátil, HDD 2,5, Sata3, Notebook, disco duro interno 2T, Hardisk HD 2,5 RPM',
        marca: 'Toshiba'
    },
    {
        foto: 'https://ae01.alicdn.com/kf/S4f374029126443ec88a760cae1ef1589f/Sata-III-disco-duro-interno-de-estado-s-lido-1TB-2TB-SSD-2-5-pulgadas-para.jpg_Q90.jpg_.webp',
        tipo_comp: 'SSD',
        formato: 'portatil',
        nombre: 'Sata III',
        precio: 43.92,
        descripcion: 'Sata III-disco duro interno de estado sólido, 1TB, 2TB, SSD, 2,5 pulgadas, para ordenador portátil, microordenador y Escritorio',
        marca: 'SATA'
    },
    {
        foto: 'https://ae01.alicdn.com/kf/H0058dae183e14ede868289c9cb949dd5m/Pantalla-IPS-de-17-3-para-ordenador-port-til-144Hz-B173HAN03-2-B173HAN03-1-B173HAN03-0.jpg_Q90.jpg_.webp',
        tipo_comp: 'pantalla',
        formato: 'portatil',
        nombre: 'Pantalla IPS de 17,3',
        precio: 148.48,
        descripcion: 'Pantalla IPS de 17,3 "para ordenador portátil, 144Hz, B173HAN03.2 B173HAN03.1 B173HAN03.0, actualización de 144Hz para videojuegos, pantalla LCD FHD 1920x1080, 40pin eDP',
        marca: 'IPS'
    },
    {
        foto: 'https://ae01.alicdn.com/kf/H42f8aedd3c6448a6a70ed9acb7eef604l/SAMSUNG-superficie-curva-1800R-de-23-5-pulgadas-se-puede-montar-en-la-pared-sincronizaci-n.jpg_Q90.jpg_.webp',
        tipo_comp: 'pantalla',
        formato: 'torre',
        nombre: 'Pantalla SAMSUNG',
        precio: 265.71,
        descripcion: 'SAMSUNG-superficie curva 1800R de 23,5 pulgadas, se puede montar en la pared, sincronización libre, HDMI, interfaz de alta definición, Monitor LCD de ordenador',
        marca: 'SAMSUNG'
    },
    {
        foto: 'https://ae01.alicdn.com/kf/H97865d84db1d42b9b7999d3f4e36f089I/ASUS-cargador-de-corriente-de-20V-7-5a-150W-TUF-FX505DT-AL095T-FX505DT-EB73-CA.jpg_Q90.jpg_.webp',
        tipo_comp: 'fuente',
        formato: 'portatil',
        nombre: 'ASUS-cargador de corriente de 20V, 7,5a, 150W, TUF, FX505DT-AL095T, FX505DT-EB73, CA',
        precio: 30.13,
        descripcion: '',
        marca: 'ASUS'
    },
    {
        foto: 'https://ae01.alicdn.com/kf/Hd9b141e1e1fa486b91bd95b51cbba3ecD/Fuente-de-alimentaci-n-de-700W-para-PC-ventilador-silencioso-PSU-PFC-vatios-ATX-24-Pines.jpg_Q90.jpg_.webp',
        tipo_comp: 'fuente',
        formato: 'torre',
        nombre: 'PC POWER SUPPLY',
        precio: 25.96,
        descripcion: 'Fuente de alimentación de 700W para PC, ventilador silencioso, PSU, PFC, vatios, ATX, 24 Pines, 12CM, 80 + oro',
        marca: ''
    },
]

var palabra = ''

buscando = () => {
    var palabra = document.getElementById('buscador').value
    for (i = 0 ; i<todosProductos.length ; i++) {
        if (palabra == todosProductos[i].tipo_comp) {
            // console.log(todosProductos[i])
            console.log('has encontrado un/a '+palabra)
        } else {
            console.log('este producto no es un/a '+palabra)
        }
    }
        // console.log(palabra.find(todosProductos))

    // }
}

////// FUNCION PARA tienda.html y producto.html ///////////
/*
USAR EL MODIFICADOR EN EL HEADOR PARA QUE SE CARGUE EL JAVASCRIPT
ANTES QUE EL RESTO DE LA PAGINA, PORQUE SINO ESTE MÉTODO PUEDE FALLAR,
DE FORMA QUE SI EL USUARIO ESTÁ MOVIENDO EL RATÓN POR LA PANTALLA MIENTRAS
SE CARGA LA PAGINA ESTE MÉTODO DA ERROR PORQUE SE CARGA DESPUÉS QUE EL HTML
*/

comprobaciones = () => {
    try{
        setTimeout(() => {
            /*
            comprobacion de los elementos dentro del carro, para comprobar 
            que productos estan en el carro y son esenciales para montar un
            ordenador, de esta forma cuando el usuario quiera comprobar
            los productos que necesita sabrá cuales tiene
            */

            for (i=0 ; i<lista_compra.length ; i++) { // bucle para recorrer la lista de productos que tiene el cliente
                for (j=0 ; j<tiposProductos.length ; j++) { //bucle para recorrer todos los tipos de productos del menu opcional
                    if (lista_compra[i].tipo_comp == tiposProductos[j]) { //si el producto de la lista del cliente coincide con el tipo de producto de la lista se cumple condicion
                        //console.log('un producto de la lista de la compra es del tipo: '+tiposProductos[j])
                        var checkeado = document.getElementById(tiposProductos[j])
                        console.log(checkeado)
                        try{
                            checkeado.setAttribute('checked','')
                        } catch (e){
                            console.log('se intenta asignar un atributo pero da error')
                            console.log(e)
                        }

                        
                        // checkeado.checked = 'checked'//('checked','')
                    } else {
                        console.log('no hay productos de los básicos')
                    }
                // if (SELECT tipo FROM componentes WHERE tipo=tipo_comp;) {
                //     const check = document.getElementById(tipo)
                //     check.setAttribute('checked')
                // }
                }
            }
        }, 5000);
    } catch (e) {
        console.log('fallo debido a que se intenta asignar un atributo a una etiqueta con un id que no existe')
        console.log(e)
    }

}

try{
    document.addEventListener('DOMContentLoaded', comprobaciones, true)
} catch (e) {
    console.log('fallo debido a que se intenta asignar el atributo checked a una etiqueta on un id que no existe en esta pagina')
    console.log(e)
}
/// CONSULTAS SQL PARA EL FUNCIONAMIENTO DE LA PAGINA WEB
//--'SELECT * FROM componentes, equipos, prod_clientes';
//--'SELECT * FROM componentes, equipos, prod_clientes LIKE '+palabra+';';
//--'SELECT COUNT(c.nombre, e.nombre, p.nombre) FROM componentes c, equipos e, prod_clientes p;';

/// condicional para la consulta de busqueda de productos:
try{
    const palabra_buscar = document.getElementById('buscador').value
    const resultados = 'SELECT * FROM componentes c, equipos e, prod_clientes p WHERE c.nombre LIKE '+palabra+', e.nombre LIKE '+palabra+', p.nombre LIKE '+palabra+';';
    if (resultados.length > 0) {
        console.log('pasar el resultado de la consulta a la web para actualizar la pagina '+resultados+'(comprobar como llamar a todos los elementos de las tablas si las filas pertenecen a distintas tablas y tienen distintos nombres)');
        //comprobar como queda el resultado que devuelve la consulta en caso de que la base de datos contenga elementos
    } else {
        console.log('no es que la base de datos esté vacia, sino que la palabra a buscar no coincide con ningún nombre dentro de la base de datos')
        const productos = 'SELECT * FROM componentes c, equipos e, prod_clientes p;';
        productos.findAll(palabra)
    }
} catch (e) {
    console.log('funcion sin terminar, puede tener fallos a la hora de buscar palabras en el buscador de la tienda')
    console.log(e)
}

filtrar = () => {
    var filtro_general = document.getElementById('filtro_eq_com')
    var filtro_comps = document.getElementById('filtro_comps')
    console.log(tiposProductos)
    if (filtro_general.value == 'equipos'){
        console.log('mostrar equipos')
        //llamar a todos los productos del tipo 'equipo'
        //conexion.execueQuery('SELECT * FROM productos WHERE tipo="equipo";');
        filtro_comps.style.display = 'none'
    } if (filtro_general.value == 'comp'){
        console.log('mostrar productos que no sean equipos')
        //con.executeQuery('SELECT * FROM productos WHERE tipo!="equipo";');
        filtro_comps.style.display = "flex"
    }
}

filtrarComp = () => {
    for (i=0 ; i<tiposProductos.length ; i++){
        if (filtro_comps.value == tiposProductos[i]){
            console.log('mostrar tipo de componente: '+tiposProductos[i])
            //con.executeQuery('SELECT * FROM productos WHERE tipo="'+tiposProductos[i]+'";')
        }
    }
    //condicionales en case de que el select indique que queremos ver los compoenntes:
    
}

/// FUNCIONES PARA producto.html /////
/*
que es la página que tocaria si el cliente decide comprar un producto o 
revisar las especificaciones de3 un producto.
*/

// Hay que buacar una forma de impedir al usuario que suba manualmente el 
// contador o dejamos la función como está

///PLANTEAR LA IDEA DE LAS FLECHAS, CUAL QUEREMOS QUE SUBA Y CUAL QUE BAJE
/// O SINO, CAMBIAR LOS SIMBOLOS POR ICONOS

// var contador = document.getElementById('cantidad')
// var cantidad = document.getElementById('cantidad').value
subir = () => {
    var contador = document.getElementById('cantidad')
    var cantidad = document.getElementById('cantidad').value
    cantidad++
    contador.value = cantidad
}

bajar = () => {
    var contador = document.getElementById('cantidad')
    var cantidad = document.getElementById('cantidad').value
    if (cantidad > 1) {
        cantidad--
        contador.value = cantidad

    } else {
        return 
    }
}



