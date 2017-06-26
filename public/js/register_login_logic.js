/**
 * Created by rpaulin on 6/23/17.
 */

// FIREBASE CONFIG

var config = {
    apiKey: "AIzaSyBxA2FeFK2bTDV-H4LcKS-pSaxxN67G_bw",
    authDomain: "pets-59c22.firebaseapp.com",
    databaseURL: "https://pets-59c22.firebaseio.com",
    projectId: "pets-59c22",
    storageBucket: "pets-59c22.appspot.com",
    messagingSenderId: "397469016940"
};
firebase.initializeApp(config);

var current_user_id;

// END FIREBASE CONFIG

// MODAL DISPLAY

$("#go_to_register").on("click",function(){

   $("#login_form").css("display","none");
   $("#reset_pwd_form").css("display","none");
   $("#register_form").css("display","block");

});

$("#go_to_login").on("click",function(){

    $("#register_form").css("display","none");
    $("#reset_pwd_form").css("display","none");
    $("#login_form").css("display","block");

});

$("#reset_pwd_register").on("click",function(){

    $("#register_form").css("display","none");
    $("#reset_pwd_form").css("display","block");
    $("#login_form").css("display","none");

});

$("#go_to_login_reset").on("click",function(){

    $("#register_form").css("display","none");
    $("#reset_pwd_form").css("display","none");
    $("#login_form").css("display","block");

});

$("#go_to_register_reset").on("click",function(){

    $("#login_form").css("display","none");
    $("#reset_pwd_form").css("display","none");
    $("#register_form").css("display","block");

});

$("#reset_pwd_login").on("click",function(){

    $("#register_form").css("display","none");
    $("#reset_pwd_form").css("display","block");
    $("#login_form").css("display","none");

});

// END MODAL DISPLAY


// FIREBASE LOGIC

// CREATING A NEW ACCOUNT

$("#create_account").on("click",function(event){

    event.preventDefault();

    var user = {

        name: $("#name_register").val().trim(),
        base: $("#base_register").val(),
        email: $("#email_register").val().trim(),
        password: $("#pwd_register").val().trim(),
        image: $("#image_register").val().trim(),
        rank: $("#rank_register").val().trim()

    };
    //

    console.log(user);

    $("#name").val("");
    $("#email_registration").val("");
    $("#password").val("");

    if(user.base === "0"){
        $("#base_reminder").toggle(2000).toggle(2000)
    }
    else if(user.name === ""){
        $("#name_reminder").toggle(2000).toggle(2000)
    }
    else if(user.email === ""){
        $("#email_reminder").toggle(2000).toggle(2000)
    }
    else if(user.password === ""){
        $("#password_reminder").toggle(2000).toggle(2000)
    }
    else if(user.rank === ""){
        $("#rank_reminder").toggle(2000).toggle(2000)
    }
    else if(user.image === ""){
        $("#image_reminder").toggle(2000).toggle(2000)
    }
    else{

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function () {

            var currentUser = firebase.auth().currentUser;
            var id = currentUser.uid;

            var user_with_id = {

                name: user.name,
                base: user.base,
                email: user.email,
                image: user.image,
                rank: user.rank,
                uid: id

            };

            $.post("/api/account_created",user_with_id,function(data){

                console.log("called the post api");
                $("#myModal").modal("toggle");

            });


        }).catch(function (error) {
            // Handle Errors here.
            if(error) {
                console.log(error)
            }

        });
    }


});


$("#sign_in").on("click",function(event){

    event.preventDefault();

    var user = {

        email: $("#email_login").val().trim(),
        password: $("#pwd_login").val().trim()

    };

    $("#email_signin").val("");
    $("#password_signin").val("");

    //
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(function () {

        $("#myModal").modal("toggle");
        console.log("signed in successfully")

    }).catch(function (error) {
        // Handle Errors here.
        if(error) {
            console.log(error)
        }

    });


});

$("#logout_btn").on("click",function(event){

    // event.preventDefault();

    firebase.auth().signOut().then(function () {

        console.log("signed out successfully")

    }).catch(function (error) {
        // Handle Errors here.
        if(error) {
            console.log(error)
        }

    });


});
//
//
//
firebase.auth().onAuthStateChanged(function (user) {
    if (user) { /// THERE IS A USER LOGGED IN

        var currentUser = firebase.auth().currentUser;
        var id = currentUser.uid;

        current_user_id = id;

        console.log("logged in as " + id);

        $.post("/api/current_user",{uid: id},function(data){

            console.log(data);

            $("#register_signin_btn").css("display","none");
            $("#logout").css("display","block");
            $("#make_a_post").css("display","block");
            $("#my_posts").css("display","block");


        });

        // var currentURL = window.location.href;
        //
        // if(currentURL.includes("user_page") === false){
        //     window.location.href = window.location.href + "user_page/" + id
        // }


    } else {


        $("#register_signin_btn").css("display","block");
        $("#logout").css("display","none");
        $("#make_a_post").css("display","none");
        $("#my_posts").css("display","none");

    }
});

/// RESET PASSWORD LOGIC
$("#resetPassword").on('click', function(event) {

    event.preventDefault();

    var email_password_reset = $("#email_password_reset").val();


    firebase.auth().sendPasswordResetEmail(email_password_reset).then(function () {
        $("#reset_success").toggle(2000).toggle(2000)
        // Email sent.
    }, function (error) {
        if (error) {
            console.log(error)
        }
    });
});

