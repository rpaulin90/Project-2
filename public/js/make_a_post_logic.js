/**
 * Created by rpaulin on 6/24/17.
 */


$("#post_item_submit").on("click",function(){

    event.preventDefault();

    var new_item = {
        name: $("#post_item_name").val().trim(),
        description: $("#post_item_description").val().trim(),
        image_link: $("#post_item_image").val().trim(),
        price: $("#post_item_price").val().trim(),
        CategoryId: $("#post_item_category").val().trim(),
        category_name: $("#post_item_category option:selected").text(),
        UserId: $(this).attr("value"),
        BaseId: $("#post_item_base").val().trim(),
        base_name: $("#post_item_base option:selected").text()
    };
    //

   //$("#post_item_base").val("-- Choose a base --");
   //$("#post_item_category").val("-- Choose a category --");
   $("#post_item_name").val("");
   $("#post_item_price").val("");
   $("#post_item_image").val("");
   $("#post_item_description").val("");

    $.post("/api/make_post",new_item,function(data){

        // add a modal or something that tells the user that the post was successful
        console.log("communicated with make_post app.post");

    });

});

