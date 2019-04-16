
function goToLocation(loc) {
	$(".tab-bg-selected").animate({ 
		width: 0
	}, 300);
		
	$(".content-holder-main").animate({
		opacity: 0,
	}, 300, function () {
		window.location.href = loc;
	});
}


$( ".tab-1" ).click(function() {
	goToLocation('about.html');
});

$( ".tab-2" ).click(function() {
	goToLocation('projects.html');
});

$( ".tab-3" ).click(function() {
	goToLocation('resume.html');
});

$( ".tab-4" ).click(function() {
	goToLocation('blog.html');
});

$( ".tab-5" ).click(function() {
	goToLocation('contact.html');
});