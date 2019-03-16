
function fadeInTabs() {
	$(".tab-text").show();
	
	$(".tab-text-1").animate({
		opacity: "1",
	}, 500); 
	
	$(".tab-text-2").animate({
		opacity: "1",
	}, 600);
	
	$(".tab-text-3").animate({
		opacity: "1",
	}, 700);
	
	$(".tab-text-4").animate({
		opacity: "1",
	}, 800);
	
	$(".tab-text-5").animate({
		opacity: "1",
	}, 900);
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

function goToContact() {
    window.location.href = "contact.html";
}

$( ".bg-bar-1" ).click(function() {
  $( ".bg-bar-1" ).animate({
    top: "-=95%",
  }, 1000);
  $( ".bg-bar-2" ).animate({
    top: "-=95%",
  }, 1050);
  $( ".bg-bar-3" ).animate({
    top: "-=95%",
  }, 1100);
  $( ".bg-bar-4" ).animate({
    top: "-=95%",
  }, 1150);
  $( ".bg-bar-5" ).animate({
    top: "-=95%",
  }, 1200);
  
  window.setTimeout( fadeInTabs, 1000 ); 
  window.setTimeout( goToAbout, 1900);
});

$( ".bg-bar-2" ).click(function() {
  $( ".bg-bar-1" ).animate({
    top: "-=95%",
  }, 1000);
  $( ".bg-bar-2" ).animate({
    top: "-=95%",
  }, 1050);
  $( ".bg-bar-3" ).animate({
    top: "-=95%",
  }, 1100);
  $( ".bg-bar-4" ).animate({
    top: "-=95%",
  }, 1150);
  $( ".bg-bar-5" ).animate({
    top: "-=95%",
  }, 1200);
  
  window.setTimeout( fadeInTabs, 1000 ); 
  window.setTimeout( goToProjects, 1900);
});

$( ".bg-bar-3" ).click(function() {
  $( ".bg-bar-1" ).animate({
    top: "-=95%",
  }, 1000);
  $( ".bg-bar-2" ).animate({
    top: "-=95%",
  }, 1050);
  $( ".bg-bar-3" ).animate({
    top: "-=95%",
  }, 1100);
  $( ".bg-bar-4" ).animate({
    top: "-=95%",
  }, 1150);
  $( ".bg-bar-5" ).animate({
    top: "-=95%",
  }, 1200);
    
  window.setTimeout( fadeInTabs, 1000 ); 
  window.setTimeout( goToResume, 1900);
  
});

$( ".bg-bar-5" ).click(function() {
  $( ".bg-bar-1" ).animate({
    top: "-=95%",
  }, 1000);
  $( ".bg-bar-2" ).animate({
    top: "-=95%",
  }, 1050);
  $( ".bg-bar-3" ).animate({
    top: "-=95%",
  }, 1100);
  $( ".bg-bar-4" ).animate({
    top: "-=95%",
  }, 1150);
  $( ".bg-bar-5" ).animate({
    top: "-=95%",
  }, 1200);
  
  window.setTimeout( fadeInTabs, 1000 ); 
  window.setTimeout( goToContact, 1900);
});




