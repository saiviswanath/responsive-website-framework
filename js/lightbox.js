$(document).ready(function(){

	$( "img.lightbox-image" ).click(function() {
				
		$(".lightbox-overlay").show();
		$(".lightbox-container").show();

		$("#lightbox-final-image").attr("src", $(this).attr("src") ) ;
		$(".lightbox-image-container").css("width", $("#lightbox-final-image").width());

		var windowHeight = $( window ).height()*1;
		var imageHeight =  $("#lightbox-final-image").height();

		$("#lightbox-final-image").css("top", ((windowHeight / 2) - (imageHeight/2)) + "px");
				
		
			  
	});

});


function hideLightbox()
{	
	$(".lightbox-overlay").hide();
	$(".lightbox-container").hide();
}