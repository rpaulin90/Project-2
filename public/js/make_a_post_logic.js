/**
 * Created by rpaulin on 6/24/17.
 */


$("#post_item_submit").on("click",function(){

     event.preventDefault();

    // NEED TO ADD VALIDATION TO FORM

    var new_item = {
        name: $("#post_item_name").val().trim(),
        description: $("#post_item_description").val().trim(),
        image_link: $("#preview_item").attr("src"),
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

    // remind the user to input required information

    if(new_item.name === ""){
        $("#item_name_reminder").toggle(2000).toggle(2000)

    }
    else if($("#post_item_base").attr("value") === "0"){
        $("#item_base_reminder").toggle(2000).toggle(2000)

    }
    else if(new_item.price === ""){
        $("#item_price_reminder").toggle(2000).toggle(2000)

    }
    else if(new_item.category_name === ""){
        $("#item_category_reminder").toggle(2000).toggle(2000)

    }
    else if(new_item.image_link === "http://via.placeholder.com/250x250"){
        $("#item_image_reminder").toggle(2000).toggle(2000)

    }
    else if(new_item.description === ""){
        $("#item_description_reminder").toggle(2000).toggle(2000)

    }


    $.post("/api/make_post",new_item,function(data){

        console.log("communicated with make_post app.post");
        $("#success_post_name").text(new_item.name);
        $("#success_post_price").text("Price: $ " + new_item.price);
        $("#success_post_base").text("Base: " + new_item.base_name);
        $("#success_post_description").text(new_item.description);
        $('#post_item_modal').modal('toggle');

    });

});

