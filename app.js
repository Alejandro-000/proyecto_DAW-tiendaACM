
// añadido


// const flash = require('connect-flash');
// // const session = require('express-session');
// const smysql = require('express-mysql-session');
// const { database_dev, database_prod } = require('./baseDatos/accesoBD');
// // const passport = require('passport');
// const jwt = require('jsonwebtoken');


// require('./lib/passport');

// app.use(session({
//   secret: 'patata',
//   resave: false,
//   saveUninitialized: false,
//   store: new smysql(database)
// }));
// sesion propia
// app.use(
//   session({
//     secret: 'tiendaACM',
//     resave: false,
//     saveUninitialized: false,
//     // store: new MySQLStore()
//     store: new MySQLStore(database),
//   })
// );


// app.use(flash());


// app.use(passport.initialized());
// app.use(passport.session());

// variables locales
// app.use((req, res, next) => {
//   app.locals.message = req.flash('message');
//   app.locals.correcto = req.flash('correcto');
//   app.locals.user = req.user;
// })

/**********************/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const favicon = require('serve-favicon');
const { engine } = require('express-handlebars');
require('dotenv').config();



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users')
// var authenticacionRouter = require('./routes/authenticacion');
// var linksRouter = require('./routes/links');

// var navegacionRouter = require('./routes/index');
// var asistenciaRouter = require('./routes/asistencia');
// var sesionRouter = require('./routes/index');
// var transaccionRouter = require('./routes/transaccion');
// var tiendaRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', engine({
  defaultLayout: 'layout',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  // partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));

app.set('view engine', 'hbs');

// app.use(flash());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
////////////////////////////////////////////////////////// componentes de prueba
// app.use('/authentication', authenticationRouter);
// app.use('/links', linksRouter);
//////////////////////////////////////////////////////////

/************ (propias) rutas propias *************/
// ruta encargada de la navegacion de toda la pagina, usada para navegar de un lado a otro
    // app.use('/navegacion', navegacionRouter);
// ruta a .js encargado de los metodos de los formularios para la asistencia y reparaciones:
// paginas: asistencia.hbs, reparaciones.hbs
    // app.use('/asistencia', asistenciaRouter);
// ruta a .js encargado de los metodos de los formularios para los usuarios:
//paginas: ini_ses.hbs, registro.hbs, contacto.hbs, posiblemente menu_usu.hbs
    // app.use('/sesion', sesionRouter);
// ruta a .js para formularios de pagos:
//paginas: transacciones.hbs (comprobar si añadir mas paginas para las transacciones)
    // app.use('/transaccion', transaccionRouter);
// ruta a .js encargado de los metodos para vistas asociadas a tienda y demas:
//paginas: tienda.hbs, producto.hbs, vender.hbs, 
    // app.use('/tienda', tiendaRouter);

// catch 404 and forward to error handler
//personalizar pagina error 404.hbs
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;