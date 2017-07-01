/**
 * Created by rpaulin on 6/25/17.
 */

var db = require("../models");

var express = require("express");

var firebase = require("firebase");

var urlSlug = require('url-slug');

var nodemailer = require('nodemailer');

const EMAIL = process.env.EMAIL;

const EMAIL_PWD = process.env.EMAIL.PWD;

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

    app.post("/message_sent",function(req,res){

        db.User.findOne({
            where: {
                id: req.body.seller

            }
        }).then(function(results) {

            var title = 'Interest in your item: ' + req.body.item;

            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // secure:true for port 465, secure:false for port 587
                auth: {
                    user: EMAIL,
                    pass: EMAIL_PWD
                }
            });

            //setup email data with unicode symbols

            let mailOptions = {
                from: EMAIL, // sender address
                to: results.dataValues.email, // list of receivers
                subject: title, // Subject line
                text: req.body.message, // plain text body
                html: '<p>req.body.message</p>' // html body
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    return console.log(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
                res.end();
            });


        });

    })


};