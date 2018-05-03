
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var apiRoutes = require('./controllers/api-route.js');

var app = express();
var PORT = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(apiRoutes);
app.use('/', express.static(path.join(__dirname, 'public')));
require("./routes/html-route.js")(app);

app.listen(PORT, function() {
    console.log('App listening on', PORT);
});
// =======
// var express = require("express");
// var bodyParser = require("body-parser");
// var PORT = process.env.PORT || 3306;
// var app = express();
//
// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
//
// // // parse application/x-www-form-urlencoded
// // app.use(bodyParser.urlencoded({ extended: false }));
//
// // parse application/json
// app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");
// Import routes and give the server access to them.

// var routes = require("./controllers/inventory_controller");
// app.use(routes);
//
// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT);
// });