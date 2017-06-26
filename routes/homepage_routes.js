/**
 * Created by rpaulin on 6/23/17.
 */
var db = require("../models");

var express = require("express");

var firebase = require("firebase");

var urlSlug = require('url-slug');

var moment = require('moment');

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


    app.get("/api/:base/:category/:page", function(req, res) {

        if(req.params.base === "all-bases"){

            db.Item.findAll({
                where: {
                    url_slug_category: req.params.category
                }
            }).then(function(results) {

                var items = [];
                var pages = [];

                var start = (parseInt(req.params.page) - 1) * 10;
                var end;
                if((results.length >= parseInt(start + 10))){
                    end = parseInt(start) + 10
                }else{
                    end = parseInt(start) + (results.length % 10);
                }

                for(var x = start; x < end; x++){
                    items.push({

                        id: results[x].dataValues.id,
                        name: results[x].dataValues.name,
                        description: results[x].dataValues.description,
                        image_link: results[x].dataValues.image_link,
                        price: results[x].dataValues.price,
                        url_slug: results[x].dataValues.url_slug,
                        url_slug_base: results[x].dataValues.url_slug_base,
                        url_slug_category: results[x].dataValues.url_slug_category,
                        createdAt: moment(results[x].dataValues.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a"),
                        updatedAt: results[x].dataValues.updatedAt,
                        CategoryId: results[x].dataValues.CategoryId,
                        UserId: results[x].dataValues.UserId,
                        BaseId: results[x].dataValues.BaseId

                    });
                }

                var n = 0;
                for(var y = 0; y < results.length; y++ ){

                    if(y.toString().includes("0")){
                        n++;
                        if(n == req.params.page){
                            pages.push({
                                page: n,
                                category_slug: req.params.category,
                                base_slug: req.params.base,
                                active: "active"
                            })
                        }else {
                            pages.push({
                                page: n,
                                category_slug: req.params.category,
                                base_slug: req.params.base,
                                active: "not_active"
                            })
                        }
                    }
                }

                res.render("item_list", {
                    items: items,
                    base: "all bases",
                    category: urlSlug.revert(req.params.category,"-","titlecase"),
                    category_slug: req.params.category,
                    base_slug: req.params.base,
                    pages: pages

                });
            });

        }

        else {

            db.Item.findAll({
                where: {
                    url_slug_base: req.params.base,
                    url_slug_category: req.params.category
                }
            }).then(function (results) {

                var items = [];
                var pages = [];

                var start = (parseInt(req.params.page) - 1) * 10;
                var end;
                if((results.length >= parseInt(start + 10))){
                    end = parseInt(start) + 10
                }else{
                    end = parseInt(start) + (results.length % 10);
                }

                for (var x = start; x < end; x++) {
                    items.push({

                        id: results[x].dataValues.id,
                        name: results[x].dataValues.name,
                        description: results[x].dataValues.description,
                        image_link: results[x].dataValues.image_link,
                        price: results[x].dataValues.price,
                        url_slug: results[x].dataValues.url_slug,
                        url_slug_base: results[x].dataValues.url_slug_base,
                        url_slug_category: results[x].dataValues.url_slug_category,
                        createdAt: moment(results[x].dataValues.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a"),
                        updatedAt: results[x].dataValues.updatedAt,
                        CategoryId: results[x].dataValues.CategoryId,
                        UserId: results[x].dataValues.UserId,
                        BaseId: results[x].dataValues.BaseId

                    });
                }

                var n = 0;
                for(var y = 0; y < results.length; y++ ){

                    if(y.toString().includes("0")){
                        n++;
                        pages.push({
                            page: n,
                            category_slug: req.params.category,
                            base_slug: req.params.base
                        })
                    }
                }
                console.log(pages);
                res.render("item_list", {
                    items: items,
                    base: urlSlug.revert(req.params.base, "-", "titlecase"),
                    category: urlSlug.revert(req.params.category, "-", "titlecase"),
                    category_slug: req.params.category,
                    base_slug: req.params.base,
                    pages: pages

                });
            });
        }

    });

    app.get("/:current_user_id/make_a_post", function(req, res) {

        db.User.findOne({
            where: {
                firebase_id: req.params.current_user_id

            }
        }).then(function(results) {

            res.render("make_a_post",results.dataValues);
        });


    });



};