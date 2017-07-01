/**
 * Created by rpaulin on 6/23/17.
 */

// CLICKING ON ANY CATEGORY LINK

$(".homepage_category_link").on("click",function(){

   $(this).attr("href","/api/" + $("#bases_homepage").val() + "/" + $(this).attr("value") + "/1")

});

// CLICKING ON THE "MY POSTS" TAB
// STEVEN'S PART

// console.log(current_user_id);
// $("#my_posts_btn").on("click",function(event){

// 	event.preventDefault();
//     console.log(current_user_id);

// });
