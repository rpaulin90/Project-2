/**
 * Created by rpaulin on 6/23/17.
 */

// CLICKING ON ANY CATEGORY LINK

$(".homepage_category_link").on("click",function(){

   $(this).attr("href","/api/" + $("#bases_homepage").val() + "/" + $(this).attr("value"))

});

// CLICKING ON THE "MAKE A POST" TAB

$("#make_a_post_btn").on("click",function(){

    // We need to revisit this. I think there is a better way to get the firebase_id from the front end to the back end that does not involve putting it in the URL.

   $(this).attr("href", "/" + current_user_id + "/make_a_post");

});

// CLICKING ON THE "MY POSTS" TAB

$("#my_posts_btn").on("click",function(){

    console.log(current_user_id);

});
