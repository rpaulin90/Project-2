/**
 * Created by rpaulin on 6/23/17.
 */


$(".homepage_category_link").on("click",function(){

   $(this).attr("href","/api/" + $("#bases_homepage").val() + "/" + $(this).attr("value"))

});

