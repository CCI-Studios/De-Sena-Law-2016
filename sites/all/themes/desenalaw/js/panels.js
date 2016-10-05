(function($){    
    $(function(){
        $(".panel-button").on("click", panelClick);

        if($(window).width() > 960)
    	{
    		$(".views-row-5 .panel").addClass("open");
    	}

    	$(window).resize(function(){

	    	if($(window).width() > 960)
	    	{
	    		$(".panel").removeClass("open");
	    		$(".views-row-5 .panel").addClass("open");
	    	}
	    });
    });
    
	function panelClick(){

		if($(window).width() < 960) 
		{
			$(this).parents(".panel").toggleClass("open");
		}
		else {
			$(".panel").removeClass("open");
	    	$(this).parents(".panel").addClass("open"); 
	    	return false;
		}
	}

})(jQuery);