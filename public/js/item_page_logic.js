/**
 * Created by rpaulin on 6/25/17.
 */

/// NOTHING ADDED YET BUT WE WILL PROBABLY WANT TO ADD SOME JS TO THIS PAGE...

$("#send_email").on("click",function(){

    var new_message = {

        message: $("#message").text(),
        seller: $(this).attr("value"),
        item: $("#item_name_seller").attr("value")

    };

   if($("#message").val() !== ""){

       $.post("/message_sent", new_message, function (data) {

            $("#message_success").toggle(2000).toggle(2000)

       });


   }


});