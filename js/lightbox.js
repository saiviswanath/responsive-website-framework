$(document).ready(function(){

	$( "img.lightbox-image" ).click(function() {
				
				
		var w=0;
		var h=0;
		$("<img/>").attr("src", $(this).attr("src")).load(function() {
				$(".lightbox-overlay").show();
				$(".lightbox-container").show();
				w = this.width*1;   
				h = this.height*1; 
				var neww = 0				
				if (w >= $( window ).width())
				{
					neww = $( window ).width() - 20;
					h = (h * neww) / w
					w = neww
				}				
				$("#lightbox-final-image").attr("src", $(this).attr("src") ) ;	
				$("#lightbox-final-image").css("width", w+"px");
				$("#lightbox-final-image").css("height", h+"px");
				$("#lightbox-final-image").css("left", ($( window ).width()/2) + "px");
				$("#lightbox-final-image").css("margin-left", "-" + ((w/2)) + "px");
				var windowHeight = $( window ).height()*1;
				var imageHeight =  h;
				var newTop
				newTop = Math.abs((windowHeight / 2) - (imageHeight/2));
				$("#lightbox-final-image").css("top", newTop + "px");

			});		
		
			  
	});

});


function hideLightbox()
{	
	$(".lightbox-overlay").hide();
	$(".lightbox-container").hide();
}