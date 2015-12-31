function showNav()
{

	if ($("#nav-links").is(":visible"))
	{
		$("#nav-links").slideUp("fast", function() {
		    // Animation complete.
		});
	} else {
		$("#nav-links").slideDown("fast", function() {
		    // Animation complete.
		});
	}
	

}

function scrollToTop()
{
	$("html, body").animate({ scrollTop: 0 }, "slow");
}


$(document).ready(function(){
	$( window ).resize(function() {
	  if ($(window).width()>=800)
	  {
		$("#nav-links").show();
	  } else {
		  $("#nav-links").hide();
	  }
	});
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