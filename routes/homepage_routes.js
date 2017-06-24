/**
 * Created by rpaulin on 6/23/17.
 */
var db = require("../models");

var express = require("express");

module.exports = function(app) {


    app.get("/", function(req, res) {

        db.Category.findAll({
            // where: {
            //     firebase_id: req.body.uid
            // }
        }).then(function(results) {

            var categories = [];

            for(var x = 0; x < results.length; x++){
                categories.push({
                    id: results[x].dataValues.id,
                    category: results[x].dataValues.category_name
                });
                console.log(results[x].dataValues.category_name);
            }


            res.render("index",{
                categories: categories
            });
        });


    });

    // need to create items table and test out
    // each item links to a user and that user has a base_id...how do we connect all the tables to get the info here?
    // Steven's part??

    app.get("/api/:base/:category", function(req, res) {

        db.Item.findAll({
             where: {
                 BaseId: req.params.base,
                 CategoryId: req.params.category
             }
        }).then(function(results) {

            var items = [];

            for(var x = 0; x < results.length; x++){
                items.push(results[x].dataValues);
            }

            res.render("item_list", {
                items: items
            });
        });

    });


};