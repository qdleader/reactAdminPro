var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const mongoose = require('mongoose')
// 连接mongo 并且使用test集合(相当于mysql中的库)
const DB_URL = 'mongodb://127.0.0.1:27017/'

mongoose.connect("mongodb+srv://hellomryk:yang1314@cluster0.qiraxtc.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })

  .then(() => {
    console.log(1111, 'mongoose 连接成功！')
  })
  .catch(err => {
    console.log(2222, err)
  })


// mongoose.connect("mongodb+srv://hellomryk:yang1314@cluster0.qiraxtc.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
// mongoose.connection.on('connected', function () {
//   console.log('mongo connect success') //连接成功后输出
// })
// 类似于mysql的表 MongoDB里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, required: true },
  time: { type: String, required: true },
  age: { type: Number, required: true }
}))
// 新建数据，执行一次后可注释掉(执行一次就会插入一条数据)

User.create({
  user: 'qdleader',
  age: 20,
  time: new Date()
}).then(() => {
  // res.render("secrets");
  console.log("插入成功");
}).catch((err) => {
  console.log(err);
})
// newUser.save().then(() => {
//   res.render("secrets");
// }).catch((err) => {
//   console.log(err);
// })

// User.create({
//   user: 'qdleader',
//   age: 20
// }, function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
