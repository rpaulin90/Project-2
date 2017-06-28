// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Routes
// =============================================================
module.exports = function(app) {
  // Index route loads about
  app.get("/about", function(req, res) {
    res.render('about');
  });
};