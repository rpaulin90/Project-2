/**
 * Created by rpaulin on 6/23/17.
 */
var db = require("../models");

var express = require("express");

var firebase = require("firebase");

module.exports = function(app) {


    app.get("/", function(req, res) {

        db.Category.findAll().then(function(results) {

            var categories = [];

            for(var x = 0; x < results.length; x++){
                categories.push({
                    id: results[x].dataValues.id,
                    category: results[x].dataValues.category_name,
                    url_slug: results[x].dataValues.url_slug
                });
                console.log(results[x].dataValues.category_name);
            }


            res.render("index",{
                categories: categories
            });
        });


    });


    app.get("/api/:base/:category", function(req, res) {

        db.Item.findAll({
             where: {
                 url_slug_base: req.params.base,
                 url_slug_category: req.params.category
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

    app.get("/:current_user_id/make_a_post", function(req, res) {

        db.User.findOne({
            where: {
                firebase_id: req.params.current_user_id

            }
        }).then(function(results) {

            res.render("make_a_post",{UserId: results.dataValues.id});
        });


    });



};