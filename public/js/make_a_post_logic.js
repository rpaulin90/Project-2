/**
 * Created by rpaulin on 6/24/17.
 */


$("#post_item_submit").on("click",function(){

    // event.preventDefault();

    // NEED TO ADD VALIDATION TO FORM

    var new_item = {
        name: $("#post_item_name").val().trim(),
        description: $("#post_item_description").val().trim(),
        image_link: $("#post_item_image").val().trim(),
        price: $("#post_item_price").val().trim(),
        CategoryId: $("#post_item_category").val().trim(),
        category_name: $("#post_item_category option:selected").text(),
        UserId: current_user_id,
        BaseId: $("#post_item_base").val().trim(),
        base_name: $("#post_item_base option:selected").text()
    };

    $("#post_item_name").val("");
    $("#post_item_price").val("");
    $("#post_item_image").val("");
    $("#post_item_description").val("");

    $.post("/api/make_post",new_item,function(data){

        console.log("communicated with make_post app.post");
        $("#success_post_name").text(new_item.name);
        $("#success_post_price").text("Price: $ " + new_item.price);
        $("#success_post_base").text("Base: " + new_item.base_name);
        $("#success_post_description").text(new_item.description);
        $('#post_item_modal').modal('toggle');

    });

});

