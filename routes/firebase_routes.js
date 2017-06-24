/**
 * Created by rpaulin on 6/22/17.
 */
var db = require("../models");

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

var express = require("express");

module.exports = function(app) {

    app.post("/api/account_created",function(req,res){

        db.User.create({

            name: req.body.name,
            email: req.body.email,
            firebase_id: req.body.uid,
            image_link: req.body.image,
            rank: req.body.rank,
            BaseId: req.body.base

        }).then(function() {
            res.json(req.body);
        });

    });

    app.post("/api/current_user", function(req, res) {
        db.User.findOne({
            where: {
                firebase_id: req.body.uid
            }
        }).then(function(results) {
            return res.json(results);
        });
    });


};