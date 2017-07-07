$(".delete-post-btn").on("click",function(event)
{
	var itemId = event.target.getAttribute("data-id");
	event.target.disabled = true;
	
	$.post("/api/delete_post", { where : { id : itemId } }, function(data)
	{
		event.target.setAttribute("class", "btn btn-success text-center delete-post-btn");
		event.target.innerHTML = "Post Deleted";
		location.reload();
	});
});