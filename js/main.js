function showNav()
{
	// Mobile display of navigation.

	if ($("#nav-links").is(":visible"))
	{
		$("#nav-links").slideUp("fast", function() {
		    // Animation complete.
			
			if ($(".top-nav-fixed-spacer"))
			{
				$(".top-nav-fixed-spacer").css("display", "block");
				$(".top-nav-fixed").css("position", "fixed");

			}
			
		});
	} else {
		$("#nav-links").slideDown("fast", function() {
		    // Animation complete.
			
			if ($(".top-nav-fixed-spacer"))
			{
				$(".top-nav-fixed-spacer").css("display", "none");
				$(".top-nav-fixed").css("position", "relative");
			}
			
			
		});
	}
	

}

function scrollToTop(speed)
{
	if (speed==null)
	{
		speed = "slow";
	}
	$("html, body").animate({ scrollTop: 0 }, speed);
}

var windowWidth = 0;

$(document).ready(function(){

	windowWidth = $(window).width();
	
	$( window ).resize(function() {
	  // Prevents this from firing because of a scroll on mobile.
	  if ($(window).width() != windowWidth)
	  {
	  
		  if ($(window).width()>=800)
		  {
			$("#nav-links").show();
			$("#nav-links li ul").hide();
		  } else {
			$("#nav-links").hide();
			$("#nav-links li ul").show();
		  }

	  }
	});

	// not sure how or where I learned this hack, but got it from another app I wrote...
	// it's supposed to bind a click or a touch, but using a flag so not at the same time.
	var didTouch = false;
	$(".hamburger").bind("touchstart click", function() {
		if (!didTouch)
		{
			scrollToTop("fast");
			showNav();
			didTouch = true;
			setTimeout(function(){ didTouch = false; }, 250);
		}
		return false;
	});

	

		$("#nav-links").show();

		$( "#nav-links li" ).mouseenter(function() {
					
			if ($(window).width()>=800)
			{				
				if ($( this ).has("ul"))
				{					
					$( this ).find("ul").eq(0).slideDown("fast");				
				}
			}
				  
		});

		$( "#nav-links li" ).mouseleave(function() {
					
			if ($(window).width()>=800)
			{
				if ($( this ).has("ul"))
				{
					$( this ).find("ul").eq(0).slideUp("fast");				
				}
			}
				  
		});

	
	// If on mobile, initially hide the nav links
	if ($(window).width()<800)
			{
			$("#nav-links").hide();
			}
	
	 

});



// Code here adapted from what I learned here:
// andy magoon @ http://stackoverflow.com/questions/249103/ie7-and-the-css-table-cell-property
// Praveen Kumar @ http://stackoverflow.com/questions/15755459/how-to-detect-ie7-and-lower-using-jquery-support
$(document).ready(function(){

  if ($('html').hasClass('ie7'))
  {
    $(".spancol").wrap("<td />");
    $(".spanrow").wrap("<tr />");
    $(".span").wrapInner("<table />");
	// should I wrap something in <tbody />???
  }
});