/**
 * Created by rpaulin on 6/24/17.
 */

var db = require("../models");

var express = require("express");

module.exports = function(app) {

    // POST route for saving a new post
    app.post("/api/make_post", function(req, res) {
        db.Item.create(req.body).then(function(dbPost) {
            res.json(dbPost);
        });
    });

};