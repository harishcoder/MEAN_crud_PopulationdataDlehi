var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongodb = require('mongodb');
var mongoose = require('mongoose');

//set Mongodb connection
mongoose.connect('mongodb://localhost/populationdata');
var db = mongoose.connection;

db.once('open',function(){
  console.log('connection established');
})

//set routes

var data = require('./routes/data');

var app = express();

//set view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static file
app.use(express.static(path.join(__dirname,'client')));

//body parser middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/', data);

//listen to the port
var port = 3000;
app.listen(port,function(){
  console.log('server is started'+port);
})
