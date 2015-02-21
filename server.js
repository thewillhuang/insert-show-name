'use strict';

var express     = require('express');
var app         = express();
var port        = process.env.PORT || 8080;
var path        = __dirname + '/assets/';
var bodyparser  = require('body-parser');
var compression = require('compression');
var oneDay = 86400000;
// var mongoose    = require('mongoose');
// var uriUtil     = require('mongodb-uri');
// var options     = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
//                 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } } };
// var mongodbUri  = process.env.MONGOLAB_URI;
// var mongooseUri = uriUtil.formatMongoose(mongodbUri);
// mongoose.connect(process.env.MONGO_URL || mongooseUri || 'mongodb://localhost/faith_development', options);

app.enable('etag');
app.use(compression());
app.use(bodyparser.json());

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server started on port: %d', port);
});
