var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const NewStudentRouter = require('./Component/StudentComponent/NewStudent')
const NewMendarRouter = require('./Component/MendarComponent/newMendar')
const NewAdminRouter = require('./Component/AdminComponent/NewAdmin')
const cors = require('cors')
const EditStudentRouter = require('./Component/StudentComponent/EditStudent')

require('./common/dbconfig')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',NewAdminRouter)
app.use('/student', NewStudentRouter)
app.use('/student', EditStudentRouter)
app.use('/mendar',NewMendarRouter)


// catch 404 and forward to error handler
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
