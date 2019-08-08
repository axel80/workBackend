'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var db = require('./models');
var app = express();


// Files to routes
var gift_routes = require('./routes/giftCardRoute');

// middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



// CORS


// routes
app.use('/api/',gift_routes);


db.sequelize.sync().then(runserver);

function runserver(){
    var port = 8090;

    app.listen(port,() => {
        console.log('Servicio inicido con éxito');
    });
}

// Export
module.exports = app;  


