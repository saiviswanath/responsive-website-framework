// Thanks to andy magoon @ http://stackoverflow.com/questions/249103/ie7-and-the-css-table-cell-property
$(document).ready(function(){
  if ($.browser.msie && $.browser.version == 7)
  {
    $(".spancol").wrap("<td />");
    $(".spanrow").wrap("<tr />");
    $(".span").wrapInner("<table />");
	// wrap something in <tbody />???
  }
});