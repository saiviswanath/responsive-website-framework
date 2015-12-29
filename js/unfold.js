/* unfold.js - MIT License */


$(document).ready(function(){
	$( "span.folder-head" ).click(function() {
		
		console.log("here");
		element = $(".folder-file", $(this).parent());
				
		if (element.is(":visible"))
		{
			element.slideUp(); // show();
		} else {
			element.slideDown(); // show();
		}
			  
	});
});