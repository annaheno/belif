$(function(){
	var liIndex=-1;
	
	$(".main_menu > ul > li > h3").click(function(){
		var $thisLi=$(this).parent("li");
		
		$(".main_menu > ul > li").removeClass("active");
		
		if(liIndex==$thisLi.index()){
			$thisLi.removeClass("active");
			liIndex=-1;
		}else{
			$thisLi.addClass("active");
			liIndex=$thisLi.index();
		}
	});
	
	$(".nav > label.btn_close").click(function(){
		$(".main_menu > ul > li").removeClass("active");	
		liIndex=-1;
	});
});