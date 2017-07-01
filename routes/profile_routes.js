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

		if(req.session.user_id == undefined)
		{
			res.render("profile", {user:"",base:"",items:""});
		}

		db.User.findOne(
		{
			where: { firebase_id : req.session.user_id }
		}).then(function(userResults)
		{
			var user = userResults.dataValues;

			db.Base.findOne(
			{
				where: { id : user.BaseId }
			}).then(function(baseResults)
			{
				var base = baseResults.dataValues;

				console.log("userid: " + user.id);
				db.Item.findAll().then(function(itemResults)
				{
					var items = [];
					for(var i = 0; i < itemResults.length; i++)
					{
						items.push(itemResults[i].dataValues);
						items[i].BaseName = base.base_name;
						items[i].UserName = user.name;
						items[i].UserRank = user.rank;
					}

					console.log(items);

					res.render("profile",
					{
						user : user,
						base : base,
						items : items
					});
				});	
			});
		});
	});
};