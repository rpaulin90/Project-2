/**
 * Created by rpaulin on 6/21/17.
 */

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var moment = require('moment');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBxA2FeFK2bTDV-H4LcKS-pSaxxN67G_bw",
    authDomain: "pets-59c22.firebaseapp.com",
    databaseURL: "https://pets-59c22.firebaseio.com",
    projectId: "pets-59c22",
    storageBucket: "pets-59c22.appspot.com",
    messagingSenderId: "397469016940"
};
firebase.initializeApp(config);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes =============================================================

require("./routes/homepage_routes")(app);
require("./routes/firebase_routes")(app);
require("./routes/make_a_post_routes")(app);
require("./routes/item_page_routes")(app);

// Syncing our sequelize models and then starting our express app

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
