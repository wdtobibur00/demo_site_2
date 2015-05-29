$(document).ready(function(){
	/*this code for menu*/
	$(".left_menu li a").mouseover(function(){
		
		$(this).stop().animate({width:"300px"});
		
		
	});
	/*this code for menu*/
	$(".left_menu li a").mouseout(function(){
		
		$(this).stop().animate({width:"200px"});
		
	});
	
	
	/*this code for scroll*/
		$(".scroll_top").click(function(){
		
		$("html,body").animate({scrollTop:0},2000);
		
		
	});
	
	/*this code for portfolio*/
	$(".hide").click(function(){
		
		$(".portfolio").hide(5000);
		
	});
	
/*this code for portfolio*/
	$(".show").click(function(){
		
		$(".portfolio").show(5000);
		
		
	});
	
});