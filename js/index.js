/* 头部动画效果 */
$( "#panda" ).animate({
	left:"840px"
}, 7000, function() {
    $(this).css("transform","rotateY(180deg)").animate({
    	left:"0px"
    },7000,function(){
    	$(this).css("transform","rotateY(0deg)");
    });
});
setInterval(function(){
	$( "#panda" ).animate({
		left:"840px"
	}, 7000, function() {
	    $(this).css("transform","rotateY(180deg)").animate({
	    	left:"0px"
	    },7000,function(){
	    	$(this).css("transform","rotateY(0deg)");
	    });
	});	
},14000);
