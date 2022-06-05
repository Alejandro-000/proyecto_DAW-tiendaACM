
/// LISTAS USADAS PARA tienda.html ///

var tiposProductos = ['placa_base','procesador','pantalla','raton','RAM','teclado','CD','HDD','SSD','ventilador','carcasa','fuente','grafica']

//var lista_compra = []
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
        foto: '',
        tipo_comp: 'placa_base',
        formato: 'torre',
        nombre: 'Placa Base modelo EJ253',
        precio: 125,
        descripcion: 'componente esencia para trabajar con un ordenador, sin este componente el resto del ordenador es inutil'
    },
    {
        foto: '',
        tipo_comp: 'procesador',
        formato: 'torre',
        nombre: 'Procesador Intel Core 7',
        precio: 270,
        descripcion: 'procesador con 4 nucleos de procesamiento, potencia de 3.8GHz'
    },
    {
        foto: '',
        tipo_comp: 'pantalla',
        formato: 'torre',
        nombre: 'Pantalla plana 30" modelo LG1225E',
        precio: 95,
        descripcion: 'pantalla Gaming'
    },
    {
        foto: '',
        tipo_comp: 'RAM',
        formato: 'torre',
        nombre: '2 Tarjetas de memoria RAM 16GB. 2x8GB',
        precio: 200,
        descripcion: '2 tarjetas de memoria RAM, un total de 16GB cada tarjeta tiene 8GB de memoria',
    }
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
                    checkeado.setAttribute('checked','')
                    
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



