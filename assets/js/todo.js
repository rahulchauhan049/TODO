 //Check Off Specific Todos By Clicking
 $("ul").on("click", "li", function(){
 	$(this).toggleClass("completed");
 });

//Click C To Delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation;
});

$("input[type='text'").on("keypress", function(event){
	if (event.which === 13) {
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span><i class='fa fa-trash'></i></span> "+text+"</li" );
	}

});
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});