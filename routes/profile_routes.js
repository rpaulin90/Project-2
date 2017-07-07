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
		var profileData = {user:"",base:"",items:""};

		if(req.session.user_id == undefined)
		{
			res.render("profile", profileData);
		}

		db.User.findOne(
		{
			where: { firebase_id : req.session.user_id }
		}).then(function(userResults)
		{
			profileData.user = userResults.dataValues;

			db.Base.findOne(
			{
				where: { id : profileData.user.BaseId }
			}).then(function(baseResults)
			{
				profileData.base = baseResults.dataValues;

				console.log("userid: " + profileData.user.id);
				db.Item.findAll(
				{
					where: { UserId : profileData.user.id }
				}).then(function(itemResults)
				{
					profileData.items = [];
					for(var i = 0; i < itemResults.length; i++)
					{
						profileData.items.push(itemResults[i].dataValues);
						profileData.items[i].BaseName = profileData.base.base_name;
						profileData.items[i].UserName = profileData.user.name;
						profileData.items[i].UserRank = profileData.user.rank;
					}

					console.log(profileData.items);

					res.render("profile", profileData);
				});	
			});
		});
	});

	app.post("/api/delete_post", function(req, res)
	{
		var clause = req.body;
		db.Item.destroy(clause).then(function(data)
		{
			res.json({hello:"hello"});
		});	
	});
};