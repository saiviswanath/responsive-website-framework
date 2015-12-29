/* slideshow.js MIT Licensed */

var fadeTime = 3000
var slideSpeed = 500
var sliderType = "slide"; // or "fade"
var imgCount; // number of images here.
var onImg = 0;
var slideshowLoop;

function doSlideshowFade(which,dir)
{

	if (sliderType=="fade")
	{
		$('.rotimg').eq(onImg).fadeOut(slideSpeed);
	} else {	
		if (dir==null || dir==1)
		{
			newDir1 = "left";
			newDir2 = "right";
		} else {			
			newDir1 = "right";
			newDir2 = "left";
		}
		$('.rotimg').eq(onImg).hide("slide", { direction: newDir1 }, slideSpeed);
	}

			$('#slideshowDot-'+onImg).css("opacity", "0.4");
			if(onImg == imgCount-1 && which>0) {
				onImg = 0;			
			} else {
				onImg = onImg + which;
			}
			if(onImg == -1 && which<0) {
				onImg = imgCount-1;
			}
			$('#slideshowDot-'+onImg).css("opacity", "1");
			if (sliderType=="fade")
			{
				$('.rotimg').eq(onImg).fadeIn(1000);
			} else {
				$('.rotimg').eq(onImg).show("slide", { direction: newDir2 }, slideSpeed);
			}

}

function createInterval()
{

	slideshowLoop = setInterval(function(){
			doSlideshowFade(1);
		}, fadeTime);


}

$(window).load(function() { //start after HTML, images have loaded
		
		imgCount = $('#slideshow-container').attr("alt")*1;

		$('#slideshowDot-'+onImg).css("opacity", "1");
		createInterval();

		function updateSliderHeight() { 
				$(".fadein").css("height", $("#slide"+(onImg+1)).height() + "px");				
				$("#slideshow-arrow-left").css("margin-left", "20px");
				$("#slideshow-arrow-right").css("margin-left", (($("#slide"+(onImg+1)).width()*1) - (($("#slideshow-arrow-right").width()*1) + 20)) + "px");
				$("#slideshow-arrow-right").css("margin-top", ( (($("#slide"+(onImg+1)).height()*1) / 2) - (($("#slideshow-arrow-right").height()*1)/2)) + "px");
				$("#slideshow-arrow-left").css("margin-top", ( (($("#slide"+(onImg+1)).height()*1) / 2) - (($("#slideshow-arrow-left").height()*1)/2)) + "px");
				$("#slideshow-arrow-left").css("display", "block");
				$("#slideshow-arrow-right").css("display", "block");
			}
		updateSliderHeight();

		$( window ).resize(function() {
		  updateSliderHeight();
		});
			   
 
});

function slideSwitch(which,slideTo)
{

	var dir = which
	if (which==0)
	{		
		which = slideTo - onImg;
		console.log(which);
	}
	clearInterval(slideshowLoop);
	doSlideshowFade(which,dir);	
	createInterval();
	
}

