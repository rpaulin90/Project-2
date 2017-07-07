/**
 * Created by rpaulin on 6/30/17.
 */

var db = require("../models");

var express = require("express");

var firebase = require("firebase");

var urlSlug = require('url-slug');

var moment = require('moment');

var aws = require("aws-sdk");

const S3_BUCKET = process.env.S3_BUCKET_NAME;

module.exports = function(app) {
    app.get('/sign-s3', function(req, res) {
        var s3 = new aws.S3( {
            signatureVersion: 'v4',
            region:'us-east-2'
        } );
        const fileName = req.query['file-name'];
        const fileType = req.query['file-type'];
        const s3Params = {
            Bucket: S3_BUCKET,
            Key: fileName,
            Expires: 60,
            ContentType: fileType,
            ACL: 'public-read'
        };

        s3.getSignedUrl('putObject', s3Params, function(err, data) {
            if(err){
                console.log(err);
                return res.end();
            }
            const returnData = {
                signedRequest: data,
                url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
            };
            res.write(JSON.stringify(returnData));
            res.end();
        });

    });
};