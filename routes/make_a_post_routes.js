/**
 * Created by rpaulin on 6/24/17.
 */

var db = require("../models");

var express = require("express");

var urlSlug = require('url-slug');

module.exports = function(app) {

    // POST route for saving a new post
    app.post("/api/make_post", function(req, res) {

        db.User.findOne({
            where: {
                firebase_id: req.body.UserId
            }
        }).then(function(results){

            console.log("req.body.UserId: " + req.body.UserId);
            console.log("results: " + results.dataValues.id);

            db.Item.create({

                name: req.body.name,
                description: req.body.description,
                image_link: req.body.image_link,
                price: req.body.price,
                url_slug: urlSlug(req.body.name),
                url_slug_base: urlSlug(req.body.base_name),
                url_slug_category: urlSlug(req.body.category_name),
                CategoryId: req.body.CategoryId,
                UserId: results.dataValues.id,
                BaseId: req.body.BaseId

            }).then(function(dbPost) {
                res.json(dbPost);
            });

        });

    });

};