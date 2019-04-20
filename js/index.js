function slideOutBars() {
  $( ".index-title" ).animate({
    opacity: "0",
  }, 500);	

  $( ".bg-bar-1" ).animate({
    top: "-=94%",
  }, 750);
  $( ".bg-bar-2" ).animate({
    top: "-=94%",
  }, 800);
  $( ".bg-bar-3" ).animate({
    top: "-=94%",
  }, 850);
  $( ".bg-bar-4" ).animate({
    top: "-=94%",
  }, 900);
  $( ".bg-bar-5" ).animate({
    top: "-=94%",
  }, 950);
  
}

function shrinkSingleTabColor(tabClass, transitionTime) {
	$(tabClass).css("height", "6%");
	$(tabClass).css("top", "0%");
	
	$(tabClass).animate({
		top: "+=5%",
		height: "-=5%"
	}, transitionTime);
}

function shrinkTabColors() {
	$(".category-text").css("display", "none");
	$(".bg-bar-icon").css("display", "none");
	
	shrinkSingleTabColor(".bg-bar-1", 300);
	shrinkSingleTabColor(".bg-bar-2", 400);
	shrinkSingleTabColor(".bg-bar-3", 500);
	shrinkSingleTabColor(".bg-bar-4", 600);
	shrinkSingleTabColor(".bg-bar-5", 700);
}


function goToAbout() {
    window.location.href = "about.html";
}

function goToProjects() {
    window.location.href = "projects.html";
}

function goToResume() {
    window.location.href = "resume.html";
}

function goToBlog() {
	window.location.href = "blog.html";
}

function goToContact() {
    window.location.href = "contact.html";
}

$( ".bg-bar-1" ).click(function() {
  slideOutBars();
  window.setTimeout(shrinkTabColors, 1000);
  window.setTimeout( goToAbout, 1900);
});

$( ".bg-bar-2" ).click(function() {
  slideOutBars();
  window.setTimeout(shrinkTabColors, 1000);
  window.setTimeout( goToProjects, 1900);
});

$( ".bg-bar-3" ).click(function() {
  slideOutBars();
  window.setTimeout(shrinkTabColors, 1000);
  window.setTimeout( goToResume, 1900);
});

$( ".bg-bar-4" ).click(function() {
  slideOutBars();
  window.setTimeout(shrinkTabColors, 1000);
  window.setTimeout( goToBlog, 1900);
});

$( ".bg-bar-5" ).click(function() {
  slideOutBars();
  window.setTimeout(shrinkTabColors, 1000);
  window.setTimeout( goToContact, 1900);
});




