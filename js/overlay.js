function showOverlay(which)
{
	$(".standard-overlay").show();
	$(".standard-overlay-container").show();

	$("#"+which).show();

	var windowHeight = $( window ).height()*1;
	var divHeight =  $("#"+which).height();

	$("#"+which).css("top", ((windowHeight / 2) - (divHeight)) + "px");

}


function hideOverlay()
{	
	$(".standard-overlay").hide();
	$(".standard-overlay-container").hide();
}