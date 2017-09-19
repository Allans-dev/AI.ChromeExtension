var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'); //created model loading here
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('Example RESTful API server started on: ' + port);