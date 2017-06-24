/**
 * Created by rpaulin on 6/23/17.
 */
var db = require("../models");

var express = require("express");

module.exports = function(app) {


    app.get("/", function(req, res) {

        db.Categorie.findAll({
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

        // db.Item.findAll({
        //      where: {
        //          base_id: req.params.base,
        //          category: req.params.category
        //      }
        // }).then(function(results) {
        //
        //
        //
        //     res.render("index",{
        //         categories: categories
        //     });
        // });

        // ignore the below code, I just have it here to test out the code

        db.Categorie.findAll({
            where: {
                id: req.params.category
            }
        }).then(function(results) {
            console.log(results);
            res.json(results);
        });


    });


};