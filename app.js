var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/v1/users/users');
var profilesRouter = require('./routes/api/v1/profiles/profiles');
var bankAccountsRouter = require('./routes/api/v1/bank_accounts/bank_accounts');
var transactionsRouter = require('./routes/api/v1/transactions/transactions');
var accountTransactionRouter = require('./routes/api/v1/account_transaction/account_transaction');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profiles', profilesRouter);
app.use('/bank_accounts', bankAccountsRouter);
app.use('/transactions', transactionsRouter);
app.use('/account_transactions', accountTransactionRouter);

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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
