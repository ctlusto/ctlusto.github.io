(function(){$(function(){var i,e;i=$("#hero"),e=function(){var e,t;$("#life").remove(),i.append("<div id='life'></div>").css("backgroundColor","transparent"),e=$("#life"),e.width(i.width()).height(i.height()),t=new Life({elt:"#life",width:e.width(),height:e.height(),cellSize:10}),t.init()},e(),$(window).resize(e)})}).call(this);