/**
 * Created by rpaulin on 6/24/17.
 */

var db = require("../models");
var express = require("express");
var urlSlug = require('url-slug');

module.exports = function(app)
{
	app.get("/profile", function(req, res)
	{
		console.log("Line 13");
		console.log(req.session.user_id);
		db.User.findOne(
		{
			where: { firebase_id: req.body.UserId }
		}).then(function(results)
		{
			res.render("profile");
			// console.log(results);
			// console.log("req.body.UserId: " + req.body.UserId);
			// console.log("results: " + results.dataValues.id);

			// db.Item.findAll(
			// {
			// 	where: { UserId: results.dataValues.userId }
			// }).then(function(listResults)
			// {
			// 	console.log("results: " + listResults);
			// });
		});
	});
};