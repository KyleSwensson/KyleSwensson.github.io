
var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

function fillData(proj) {
	$(".p-name").prepend(proj.name); 
	for (var i=proj.sections.length-1; i > -1; i--) {
		$(".content-holder-main-inner").prepend("\
			<div class='content-holder-1 white-bg dark-text default-shadow'>\
			<div class='content-header'>\
				" +proj.sections[i].name + "\
			</div>	\
			<div>" + proj.sections[i].info + "</div>\
		</div>");
	}
	
	$(".p-description").text(proj.description);
	$(".p-contributions").text(proj.contributions);
	for (var i = 0; i < proj.technologies.length; i++) {
		$(".p-technologies").append("<div class='technology-label'>" + proj.technologies[i] + "</div>");
	}
	for (var i = proj.picnames.length - 1; i > -1; i--) { // Add these in reverse order since we're prepending
		$(".slideshow-holder").prepend("<div class='slideshow-slide slideshow-fade'> <img src='img/"+proj.picnames[i]+"' style='max-height:15em; max-width: 55vw'> </div>");
	}
	
	showSlides(slideIndex);
}

var url = new URL(window.location.href);
var projNum = url.searchParams.get("proj");
var pageProject = projs[projNum-1];

fillData(pageProject);
