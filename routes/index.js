var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('inicio');
});

router.get('/inicio', function(req, res, next) {
  console.log('\n"Has llegado a la pagina de inicio." \n')
  res.render('inicio');
});

router.get('/tienda', function(req, res, next) {
  res.render('tienda');
});

router.post('/tienda', function(req, res, next) {
  res.redirect('producto');
})

router.get('/producto', function(req, res, next) {
  res.render('producto');
})

router.get('/vender', function(req, res, next) {
  res.render('vender');
});

router.get('/ini_ses', function(req, res, next) {
  res.render('ini_ses');
});

router.post('/ini_ses', function(req, res, next) {
  res.redirect('tienda');
})

router.get('/registro', function(req, res, next) {
  res.render('registro');
});

router.get('/soporte', function(req, res, next) {
  res.render('menu_botones');
});

router.get('/asistencia', function(req, res, next) {
  res.render('asistencia');
});

router.get('/reparaciones', function (req, res, next) {
  res.render('reparaciones');
});

router.get('/instalaciones', function(req, res, next) {
  res.render('instalaciones');
});

router.get('/montaje', function(req, res, next) {
  res.render('montaje');
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto');
});


module.exports = router;
