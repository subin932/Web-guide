$(function(){
    $(".top>a").click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});