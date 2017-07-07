//Test allows you to login and view your profile after clicking on the profile link
var Nightmare = require('nightmare');
var should = require('chai').should();
var expect = require('chai').expect;

describe('Profile Page', function(){
    // set the url here
    var url = 'https://military-marketplace.herokuapp.com/';
    //Set timeout to 5 seconds
    this.timeout(50000); 

    it('should allow me to creata an account and view my profile', function(done) {
        Nightmare({show: true})
        .goto(url)
        .click('#register_signin_btn')
        //Click login button
        .click('#go_to_login')
        .wait(5000)
        //Enter email 
        .type('#email_login', 'bobjones@yahoo.com')
        //Enter password
        .type('#pwd_login', 'apple1234')
        //Click Submit button
        .click('#sign_in')
        .wait(5000)
        .click('#profile_btn')
        .wait(5000)
        .evaluate(function(){
            return document.querySelector("a[href='/profile']");
        }).then(function(result){
            expect(result).to.not.equal(undefined);
            done();
        });
    });
});