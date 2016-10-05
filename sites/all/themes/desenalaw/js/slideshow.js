var carousel_timer;

(function($) {
	$(function(){
		$("#slide-arrow-left").click(left);
		$("#slide-arrow-right").click(right);

		$(".view-slideshow .views-row-1").addClass("active");

		carousel_timer = setInterval(next, 8000);
	});

	function left(event)
	{
		previous();
		stopTimer();
		event.preventDefault();
	}
	function right(event)
	{
		next();
		stopTimer();
		event.preventDefault();
	}

	function stopTimer()
	{
		clearInterval(carousel_timer);
	}

	function next()
	{
		var $rows = $(".view-slideshow .views-row");
		var current = $rows.filter(".active").index() || 0;
		var max = $rows.length;

		current++;
		if (current > max - 1)
			current = 0;

		$rows.removeClass("active").filter(".views-row-"+(current+1)).addClass("active");
	}
	function previous()
	{
		var $rows = $(".view-slideshow .views-row");
		var current = $rows.filter(".active").index() || 0;
		var max = $rows.length;

		current--;
		if (current < 0)
			current = max-1;

		$rows.removeClass("active").filter(".views-row-"+(current+1)).addClass("active");
	}
}(jQuery));