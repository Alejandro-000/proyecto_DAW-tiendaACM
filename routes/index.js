var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('\nRedireccionando a inicio\n')
  res.redirect('inicio');
});

// METODOS PARA LA PAGINA INICIO
router.get('/inicio', function(req, res, next) {
  console.log('\n"Has llegado a la pagina de inicio." \n')
  res.render('inicio');
});

// METODOS PARA LA PAGINA TIENDA
router.get('/tienda', function(req, res, next) {
  console.log('\nEntrando en la pagina de la tienda en la cual se pueden comprar productos\n')
  res.render('tienda');
});

router.post('/tienda', function(req, res, next) {
  console.log('\nUsuario redireccionado a el prodcuto al que va a comprar, falta id del producto\n')
  res.redirect('producto');
});

// METODOS PARA LA PAGINA PRODUCTOS, FALTA EL ID DEL PRODCUTO
router.get('/producto', function(req, res, next) {
  console.log('\nCargando la pagina en la que se encuentra el producto que el usuario quiere comprar\n');
  res.render('producto');
});

router.post('/producto', function(req, res, next) {
  console.log('\nRedirigiendo desde la pagina prodcutos hasta la pagina en la que pedimos los datos de la tarjeta del cliente para que pague por sus productos\n');
  res.redirect('tarjeta');
});

// METODOS PARA LA PAGINA TRAJETA
router.get('/tarjeta', function(req, res, next) {
  console.log('\nEntrando en la página para pedir los datos de la tarjeta del cliente para que page por sus productos\n');
  res.render('datos_tarjeta');
});

router.post('/tarjeta', function(req, res, next) {
  console.log('\nRediriendo al cliente a la pagina de inicio para que decida su proxima acción\n');
  res.redirect('inicio');
});

// METODOS PARA LA PAGINA VENDER
router.get('/vender', function(req, res, next) {
  console.log('\nCargando pagina con formulario para vender productos\n');
  res.render('vender');
});

router.post('/vender', function(req, res, next) {
  console.log('\nYa que el cliente a añadido un producto se le devuelve a la pagina de inicio para que decida su proxima accion\n');
  res.redirect('inicio');
});

// METODOS PARA LA PAGINA INI_SES
router.get('/ini_ses', function(req, res, next) {
  console.log('\nCargando pagina de inicio de sesion para que el usuario que navega por la pagina pueda comprar productos\n');
  res.render('ini_ses');
});

router.post('/ini_ses', function(req, res, next) {
  console.log('\nRedirigiendo a la pagina de tienda al usuario tras iniciar sesion para que pueda empezar a comprar\n');
  res.redirect('tienda');
});

// METODOS PARA LA PAGINA REGISTRO
router.get('/registro', function(req, res, next) {
  console.log('\nUsuario enviado a la pagina de registro para guardar su usuario en la base de datos\n');
  res.render('registro');
});

router.post('/registro', function(req, res, next) {
  console.log('\nSi el usuario acaba de registrarse lo mas inteligente es que le enviemos al formulario para iniciar sesión y que la inicie\n');
  res.redirect('ini_ses');
});

// METODOS PARA LA PAGINA SOPORTE
router.get('/soporte', function(req, res, next) {
  console.log('\nSolo se carga una pagina con 2 botones, 1 para cada tipo de asistencia\n');
  res.render('menu_botones');
});

// METODOS PARA LA PAGINA ASISTENCIA
router.get('/asistencia', function(req, res, next) {
  console.log('\nCargando la pagina de asistencia para ayuda telematica, que solo carga los datos de ayuda para el cliente\n');
  res.render('asistencia');
});


// METODOS PARA LA PAGINA REPARACIONES
router.get('/reparaciones', function (req, res, next) {
  console.log('\nCarga formulario de informe de reparacion de producto, que se envia al cliente\n');
  res.render('reparaciones');
});

router.post('/reparaciones', function (req, res, next) {
  console.log('\nYa que el cliente a decidido mandar un informe de reparacion lo devolvemos a la pagina de inicio para que decida su proxima acción\n');
  res.redirect('inicio');
})

// METODOS PARA LA PAGINA INSTALACIONES
router.get('/instalaciones', function(req, res, next) {
  console.log('\nEntrando en la pagina de instalaciones, consiste en menu de compra de sistemas operativos, tambien redije a la pagina de montaje por si el usuario quiere comprar un equipo montado y quiere un sistema operativo comprado por el cliente\n');
  res.render('tienda');
});

// METODOS PARA LA PAGINA MONTAJE
router.get('/montaje', function(req, res, next) {
  console.log('\nEntrando en la pagina de montaje de equipos, falta rellenar\n');
  res.render('montaje');
});

router.post('/montaje', function(req, res, next){
  console.log('\nRedirigiendo al cliente a la pagina de inicio, ya que si ha mandado el pedido para un ordenador no necesita comprar nada más, por eso le enviamos a la pagina en la que puede decidir que hacer a partir de ahora\n');
  res.redirect('inicio');
})

// METODOS PARA LA PAGINA CONTACTO
router.get('/contacto', function(req, res, next) {
  console.log('\nUsuario entrando en la pagina de Contacto\n');
  res.render('contacto');
});


module.exports = router;
