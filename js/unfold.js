/* unfold.js - MIT License */


$(document).ready(function(){
	$( "div.folder" ).click(function() {
		
		element = $(".folder-file", this);
		
		if (element.is(":visible"))
		{
			element.slideUp(); // show();
		} else {
			element.slideDown(); // show();
		}
			  
	});
});