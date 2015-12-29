$(document).ready(function(){

	$( "img.lightbox-image" ).click(function() {
				
		$(".lightbox-overlay").show();
		$(".lightbox-container").show();

		$("#lightbox-final-image").attr("src", $(this).attr("src") ) ;
		$(".lightbox-image-container").css("width", $("#lightbox-final-image").width());
		
		
			  
	});

});


function hideLightbox()
{	
	$(".lightbox-overlay").hide();
	$(".lightbox-container").hide();
}