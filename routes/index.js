var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('\nredireccionando a inicio\n')
  res.redirect('inicio');
});

router.get('/inicio', function(req, res, next) {
  console.log('\n"Has llegado a la pagina de inicio." \n')
  res.render('inicio');
});

router.get('/tienda', function(req, res, next) {
  console.log('\nEntrando en la pagina de la tienda en la cual se pueden comprar productos\n')
  res.render('tienda');
});

router.post('/tienda', function(req, res, next) {
  console.log('\nUsuario redireccionado a el prodcuto al que va a comprar, falta id del producto\n')
  res.redirect('producto');
})

router.get('/producto', function(req, res, next) {
  console.log('\nCargando la pagina en la que se encuentra el producto que el usuario quiere comprar\n');
  res.render('producto');
})

router.get('/vender', function(req, res, next) {
  console.log('\nCargando pagina con formulario para vender productos\n');
  res.render('vender');
});

router.get('/ini_ses', function(req, res, next) {
  console.log('\nCargando pagina de inicio de sesion para que el usuario que navega por la pagina pueda comprar productos\n');
  res.render('ini_ses');
});

router.post('/ini_ses', function(req, res, next) {
  console.log('\nRedirigiendo a la pagina de tienda al usuario tras iniciar sesion para que pueda empezar a comprar\n');
  res.redirect('tienda');
})

router.get('/registro', function(req, res, next) {
  console.log('\nUsuario enviado a la pagina de registro para guardar su usuario en la base de datos\n');
  res.render('registro');
});

router.get('/soporte', function(req, res, next) {
  console.log('\nSolo se carga una pagina con 2 botones, 1 para cada tipo de asistencia\n');
  res.render('menu_botones');
});

router.get('/asistencia', function(req, res, next) {
  console.log('\nCargando la pagina de asistencia para ayuda telematica, que solo carga los datos de ayuda para el cliente\n');
  res.render('asistencia');
});

router.get('/reparaciones', function (req, res, next) {
  console.log('\nCarga formulario de informe de reparacion de producto, que se envia al cliente\n');
  res.render('reparaciones');
});

router.get('/instalaciones', function(req, res, next) {
  console.log('\nEntrando en la pagina de instalaciones, consiste en menu de compra de sistemas operativos, tambien redije a la pagina de montaje por si el usuario quiere comprar un equipo montado y quiere un sistema operativo comprado por el cliente\n');
  res.render('instalaciones');
});

router.get('/montaje', function(req, res, next) {
  console.log('\nEntrando en la pagina de montaje de equipos, falta rellenar\n');
  res.render('montaje');
});

router.get('/contacto', function(req, res, next) {
  console.log('\nUsuario entrando en la pagina de Contacto\n');
  res.render('contacto');
});


module.exports = router;
