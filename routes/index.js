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

router.get('/vender', function(req, res, next) {
  res.render('vender');
});

router.get('/ini_ses', function(req, res, next) {
  res.render('ini_ses');
});

router.get('/registro', function(req, res, next) {
  res.render('registro');
});

router.get('/asistencia', function(req, res, next) {
  res.render('menu_botones');
});

router.get('/instalaciones', function(req, res, next) {
  res.render('instalaciones');
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto');
});























module.exports = router;
