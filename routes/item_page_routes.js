/**
 * Created by rpaulin on 6/25/17.
 */

var db = require("../models");

var express = require("express");

var firebase = require("firebase");

var urlSlug = require('url-slug');

module.exports = function(app) {

    app.get("/item_page/:user_id/:item", function(req, res) {

        db.Item.findOne({
            where: {
                url_slug: req.params.item
            }
        }).then(function(results_item) {

            db.User.findOne({
                where: {
                    id: req.params.user_id

                }
            }).then(function(results_user) {

                res.render("item_page",{

                    seller_info: results_user.dataValues,
                    item_info: results_item.dataValues,
                    base: urlSlug.revert(results_item.dataValues.url_slug_base,"-","titlecase")


                });
            });


        });



    });




};