/**
 * Created by rpaulin on 6/23/17.
 */

// CLICKING ON ANY CATEGORY LINK

$(".homepage_category_link").on("click",function(){

   $(this).attr("href","/api/" + $("#bases_homepage").val() + "/" + $(this).attr("value") + "/1")

});

// CLICKING ON THE "MY POSTS" TAB
// STEVEN'S PART

$("#my_posts_btn").on("click",function(){

    console.log(current_user_id);

});
