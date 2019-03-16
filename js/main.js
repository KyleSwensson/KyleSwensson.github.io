$( ".tab-1" ).click(function() {
    $(".tab-bottom-bar" ).animate({
		height: "0%",
	}, 300);
	
	$(".content-holder-main").animate({
		opacity: 0,
	}, 500, function () {
		window.location.href = 'about.html';
	});
});

$( ".tab-2" ).click(function() {
    $(".tab-bottom-bar" ).animate({
		height: "0%",
	}, 300);
	
	$(".content-holder-main").animate({
		opacity: 0,
	}, 500, function () {
		window.location.href = 'projects.html';
	});
});

$( ".tab-3" ).click(function() {
    $(".tab-bottom-bar" ).animate({
		height: "0%",
	}, 300);
	
	$(".content-holder-main").animate({
		opacity: 0,
	}, 500, function () {
		window.location.href = 'resume.html';
	});
});

$( ".tab-5" ).click(function() {
    $(".tab-bottom-bar" ).animate({
		height: "0%",
	}, 300);
	
	$(".content-holder-main").animate({
		opacity: 0,
	}, 500, function () {
		window.location.href = 'contact.html';
	});
});