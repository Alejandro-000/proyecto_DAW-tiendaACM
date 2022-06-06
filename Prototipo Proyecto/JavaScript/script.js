var otromenu = false
var ver = false
const confirmaciones = [otromenu]
// datos_user = null
var usuario_registrado = null //posteriormente cambiar por variable dependiente de la base de datos
var sesion_iniciada = null //en principio puede quedarse asi, per hay que comprobar que funciona a la perfección
// en case de cambiar de fichero js devolver el valor de sesion_iniciada para evitar fallos
const usuarios = [
    {
        sesion_iniciada: false,
        nombre: 'Alejandro',
        apellido: 'Ruiz de la Asunción',
        username: 'admin',
        email: 'alexruizdela@gmail.com',
        contrasenya: 'admin'
    }
]
// usuarios = [0: {nom_ape: alejandro}]
// import todosProductos from 'buscar'
/* var todosProductos = [
    {
        foto: '',
        tipo: 'placa_base',
        formato: 'torre',
        nombre: 'Placa Base modelo EJ253',
        precio: 125,
        descripcion: 'componente esencia para trabajar con un ordenador, sin este componente el resto del ordenador es inutil'
    },
    {
        foto: '',
        tipo: 'procesador',
        formato: 'protatil',
        nombre: 'Procesador Intel Core 7',
        precio: 270,
        descripcion: 'procesador con 4 nucleos de procesamiento, potencia de 3.8GHz'
    },
    {
        foto: '',
        tipo: 'raton',
        formato: 'portatil',
        nombre: 'Ratón inalhámbrico',
        precio: 20,
        descripcion: 'raton inalhámbrico con puerto USB 3.0, marca inditech'
    }
] */

var listaCompra = []



/// COMPROBACIONES DE INICIO DE SESION Y DE REGISTRO DE USUARIO

//funcion encargado de cargar los usuarios registrados en la base de datos, se ejecuta al llegar a la página de registro o a la de inicio de sesion
registrar_usuario = () => {
    if (usuario_registrado == true) {
        //dejamos que el usuario entre dentro de la pagina,
        //Cambiar metodo por importacion de biblioteca que nos permita llevar el seguimiento de las paginas a las que pueen o no entrar los usuarios
        // ya sabemos cual es pero no recordamos el nombre
    }
}

//funcion encargada de comprobar que el nombre de usuario y la contraseña pertenezcan a la misma columna en la base de datos
// se ejecuta a la hora de enviar el formulario dentro de iniciar sesion
iniciar_sesion = () => {} //sustituible por inicio_sesion()


/// FUNCIONES ASOCIADAS A tienda.html ///
// const boton = document.createElement('input')
generar = () => {
    try{ 
        if (!document.getElementById('botonCompra')){
            for (i=0 ; i<todosProductos.length ; i++){
                // sacar esto de la funcion para que se ejecute por defecto y asi no podemos generar multiples elementos iguales
                const listado = document.getElementById('listaProd')
                const div = document.createElement('div')
                const foto = document.createElement('img')
                
                const nombre = document.createElement('h3')
                const precio = document.createElement('h3')
                const descripcion = document.createElement('p')
                const boton = document.createElement('input')
                // añadiremos un boton cuando se este cargando la pagina, dicho boton tendra su funcion correspondiente
                div.className = "producto"
                foto.alt = 'sin foto '
                boton.href="productos.html"
                
                boton.value= "comprar"//+todosProductos[i].tipo_comp
                
                boton.id = 'botonCompra'
                boton.type = 'submit'
                nombre.innerHTML = todosProductos[i].nombre
                precio.innerHTML = todosProductos[i].precio+'€'
                descripcion.className = 'descrip'
                descripcion.innerHTML = todosProductos[i].descripcion
                listado.append(div)
                div.append(foto, nombre, precio, descripcion, boton)
                
                // añadimos los eventos a todos los putos botones
                boton.addEventListener('click', compra, false)
            }
        } else {
            console.log('ya esta cargado')
        }
    } catch (e) {
        console.log('no se puede generar la lista de productos, compruba que existen los ids dentro del hbs')
        console.log(e)
    }
}

/*
Tener en cuenta: si clicamos 1 vez un evento de click, lo añadimos a el elemento, pero si el evento
que hemos añadido a su vez añade otro evento, el primer click añadira el segundo evento, no los 2 a la
vez, por lo tanto lo inteligente seria añadir los 2 eventos desde el principio para evitar problemas.
*/

// funcion en la que se indica que va a hacer el boton dentro del recuadro del producto dentro de tienda.html
function compra(){
    // botones.addEventListener('click', prueba, false)
    console.log(this.placeholder)
}
// funcion para añadir eventos, en este caso solo añade la funcion 'compra', pero si hubiera mas eventos para añadir
// a un mismo objeto los añadiriamos usando esta funcion
function addeventos(){
    botones = document.getElementById('botonCompra')
    botones.addEventListener('click', compra, false)
}

try{
    document.addEventListener('DOMContentLoaded', generar, true)
} catch (e) {
    console.log('fallo debido a que se ejecuta una funcion por defecto en la ejecucion de la pagina, la cual puede dar errores, el error está explicado en la ejecucion de la funcion.')
    console.log(e)
}


///// EJEMPLO DE COMO AÑADIR UN EVENTO PARA QUE SE EJECUTE SIN NECESIDAD DE QUE UN BOTON LO LLAME DESDE EL HTML
// document.addEventListener("click", cargar, false)

// function llamar(){
//     var prueba = document.getElementById('pruebame')
//     console.log(this)
//     prueba.firstChild.nodeValue = 'three'
// }
// function cargar(){
//     var pru = document.getElementById('pru')
//     pru.addEventListener('click', llamar, false)
//     console.log(this)
// }

// document.addEventListener("DOMContentLoaded", cargar, false)





vermenu = () => {
    const menu = document.getElementById('menuOpcional')
    if (ver == false) {
        menu.style.display = 'flex'
        ver = true
    } else if (ver == true) {
        menu.style.display = 'none'
        ver = false
    }
}

desplegar = () => {
}

/// FUNCIONES PARA registro.html ///
// usuarios = [0:{sesion_iniciada: inicio_sesion(), nombre: nom, apellido: ape, username: usuario.user, email: usuario.email, contrasenya: usuario.contra}]
recopilar = () => {
    var nom_ape = document.getElementById('nom_ape').value          //variable que contiene el nombre y apellidos del usuario
    const user = document.getElementById('user').value              //variable que contien el nombre de usuario del cliente
    const mail = document.getElementById('mail').value              //variable que contiene el correo del usuario
    const contra = document.getElementById('contra').value          //variable que contiene la contraseña del usuario
    const repe_contra = document.getElementById('repe_contra').value 
    nom_ape = nom_ape.split(' ')                //dividimos el nombre y los apellidos
    const nom = nom_ape[0]                      //el nombre del usuario es el primer elemento del array
    var ape = ''                                //creamos variable para almacenar los apellidos
    for (i = 1 ; i<nom_ape.length ; i++) {      //bucle: por cada elemento despues del primero se suma 1
        ape+=nom_ape[i]+' '                     //vamos añadiendo los apellidos del usuario por cada bucle
    }
    
    /*
    plantear: si mantenemos sesion_iniciada como null o lo pasamos a false una vez registrado el usuario
    */
    //almacenamos el usuario con sus variables
    const usuario = {sesion_iniciada: sesion_iniciada, nombre: nom, apellido: ape, username: user, email: mail, contrasenya: contra}
    // console.log(nom, ape, username, mail, contra, repe_contra)
    // if (user != " " && user != "" && email != " " && email != "" && contra != " " && contra != "") {    //condicion para comprobar si podemos o no registrar ala usuario
    if (user != " " && user != "" && contra != " " && contra != "" && repe_contra != " " && repe_contra != "") {
        if (contra != repe_contra) {                    //en caso de que las contraseñas sean distintas sale mensaje
            console.log('las contraseñas no coinciden')
            aviso.innerHTML = 'las contraseñas no coinciden'
            return usuario_registrado = false
        } else {
            usuario_registrado = true       //indicamos que se acaba de registrar un usuario
            console.log(usuario)            //comprobamos el usuario que acabamos de crear
        }
        /*
        comprobacion de que el nombre de usuario es único en la base de datos
        //SELECT username FROM usuarios WHERE user=username
        Añadir COUNT() para contabilizar el numero de veces que aparece un nombre igual al nombre de usuario dado,
        ahora añadimos un condicional para asegurar los NOMBRES ÚNICOS
        //if (COUNT(SELECT username FROM usuarios WHERE user=username) > 1) {
        */
        /*
        queda devolver el valor de los inpus a "", pero si pasamos el div
        a formulario deberia solucionarse el problema al enviar al usuario
        a la pagina de inicio de sesión
        */
        console.log('todo bien cuando se recogen los datos y se insertan dentro del usuario')
        return usuario //devolvemos el usuario valido recien creado, para poder añadirlo a la base de datos
    } else {
        usuario_registrado = false //indicamos que el usuario a registrar no es valido, por lo tanto no se guardará en la base de datos
    }
}
/* NOTA:
PARA PODER SEGUIR TOCANDO EL TEMA DEL INICIO DE SESION DE LOS USUARIOS 
DEBEMOS USAR UNA BASE DE DATOS, SINO SERA CASI IMPOSIBLE ALMACENAR LOS
USUARIOS SIN GUARDAR LA INFORMACION EN UN FICHERO Y EXTRAR LOS USUARIOS
DE AHÍ

*/

// hacer un return para que el valor de usuario salga de la funcion recopilar(), y pueda usarse en otras funciones

// sesion = () => {
    // console.log('sesion de usuario: '+datos_user.nombre)
// }
user_registrado = (usuario) => { //funcion encargada de actualizar la base de datos para registrar los nuevos usuarios
    console.log(usuarios)
    console.log(user.value, contra.value, repe_contra.value)
    console.log('¿Podemos registrar usuario?: '+usuario_registrado)
    if (usuario_registrado == true) { //si el usuario es valido: usuario_registrado, modificada en la función recopilar()
        /*
        Adaptar este código para que funcione con bases de datos.
        */
        if(usuarios.length > 0) { //en caso de que la lista de usuarios contenga mas de 1 elemento se recorre la lista entero para realizar estas comprobaciones
            //implementar en la comprobacion de usuarios la base de datos, para evitar este problema, es posible que esto no resuelva el problema.
            /*
            IMPORTANTE: el bucle no es perfecto, pasar a SQL, tener en cuenta:
            que por cada pasada que hace el bucle, que no encuentra coincidencias,
            añade un usuario, esto implica, que si añadimos un usuario con
            username alex, el bucle for añadirá otro usuario con ese nombre 
            durante la primera pasada que haga cuando recorra la lista, solucionar
            eso. Hay que buscar el nombre en todos los elemnentos del array a la
            vez. Por lo tanto hay que quitar el bucle.
            */
            for (i = 0 ; i<usuarios.length ; i++) { //bucle que recorre la lista de usuarios
                console.log('nº de bucle '+i)
                if (usuario.username == usuarios[i].username) { //comprobamos que el nombre de usuario es único
                    aviso.innerHTML = 'el nombre de usuario ya existe o no es valido, porfavor escoge uno nuevo'
                } else if (usuario.email == usuarios[i].email) { //comprobamos si el correo que intenta usar el usuario para registrarse no está registrado ya.
                    aviso.innerHTML = 'el correo usado ya está registrado o no es valido, comprueba si está bien escrito o usa otro distintito'
                } else if (usuario.contrasenya == ' ' || usuario.contrasenya == '') {
                    aviso.innerHTML = 'la contraseña no es valida, cambiala'
                } else {
                    // posibilidad de usar una funcion asyncrona para añadir el usuario en la lista de usarios
                    usuarios.push(usuario) //guardamos en el array el nuevo usuario, que es valido
                }
                //hacemos desaparecer el mensaje anterior
                setTimeout(() => {
                    aviso.innerHTML = ''
                }, 4000);
            }
        }
        // consulta asyncrona SQL para insertar el usuario en la base de datos, en case de que falle el proceso salta excepcion
        
        console.log('Se ha registrado usuario correctamente')
        console.log('sesion de usuario: '+usuario.username+', con contraseña '+usuario.contrasenya)
        // usuarios.push(usuario)  //sustituir por consulta asyncrona para actualizar la base de datos
        console.log(usuarios)   //comprobamos la lista de usuarios que tenemos en la web
        return usuarios
        //devolvemos usuarios, para que podamos usarlo fuera de esta funcion: esto solo funciona con ficheros html y javascript
    } else {
        if (user.value == '' || user.value == ' ') {  //en caso de que el nombre de usuario esté en blanco la pagina avisa
            aviso.innerHTML = 'el nombre de usuario no es valido, introduce uno que contenga al menos 1 letra'
        } else if (contra.value != repe_contra.value) {    //en caso de que las contraseñas sean distintas la pagina avisa
            aviso.innerHTML = 'las contraseñas no coinciden'
            return usuario_registrado = false
        }
    }
    //mediante una función devolvemos el valor del aviso anterior a '', para que el usuario no vea este aviso permanentemente
    setTimeout(() => {
        aviso.innerHTML = ''
    }, 4000); //esperamos 4 segundos
}

inicio_sesion = () => { //funcion encargada de decidir que usuarios inician sesion en nuestra web
    const user = document.getElementById('user').value      //guardamos en variable el nombre de usuario que nos han indicado
    const contra = document.getElementById('contra').value  //guardamos en variable la contraseña asociada al usuario
    const aviso = document.getElementById('aviso')          //guardamos en variable un parrafo escondido para mostrar mensajes
    try{  
        for (i = -1 ; i<usuarios.length ; i++) { //
            console.log(i, usuarios)
            if (usuarios[i].username == user) {
                if (usuarios[i].contrasenya == contra) {
                    usuarios[i].sesion_iniciada = true
                    console.log('sesion de usuario: '+usuario.username+' con contraseña '+usuario.contrasenya)
                } else {
                    aviso.innerHTML = 'la contraseña no pertenece a este usuario'
                    setTimeout(() => {
                        aviso.innerHTML = ''
                    }, 4000);
                }
            } else if (usuarios.length < 1) {
                console.log('problema')
            } else {
                aviso.innerHTML = 'Este usuario no está registrado o no existe'
                setTimeout(() => {
                    aviso.innerHTML = ''
                }, 4000);
            }
        }
    } catch (e) {
        console.log('fallo debido a '+e)

    }
    console.log('fallo')
    
    return sesion_iniciada
}

// setInterval(vacio(), 2000) //funcion para intervalo de ejemplo

/// FUNCIONES PARA contacto.html ///
//comentario de ejemplo: intente montar mi propio PC gaming, pero no salio como esperaba

ver_res = () => {
    const reses = document.getElementById('caja_reses')
    const bloque = document.createElement('div')
    
    for (i = 0 ; i<3 ; i++) {
        const bloque = document.createElement('div')
        const comentario = document.createElement('div')
        const user = document.createElement('h4')
        const comen = document.createElement('p')
        bloque.className = 'res'
        comentario.className = 'comentario'
        user.innerHTML = 'Juan Pepe Montserrat'
        comen.innerHTML = 'intenté montar mi propio PC gaming, pero no salio como esperaba'
        reses.append(bloque)
        bloque.append(comentario)
        comentario.append(user, comen)
    }
}

/* funcion para ver la vista de la pagina a la que quiere ir el cliente

explicacion/ejemplo: si el cliente quiere ir a la pagina de 'Soporte' le damos a elegir 2 opciones,
cada opcion es un boton, dependiendo del boton que pulse el cliente se verá una vista u otra,
en origen la ventana con los 2 botones es display: flex; height: 90vh; para que el cliente solo vea los botones,
dependiendo del boton que pulse, hacemos display : none; para el menu de botones y display: flex; 
para la vista que ha seleccionado el cliente. ANADIR EXPLICACION DEL SERVICIO EN EL MENU DE BOTONES
*/



