function goToIndividualProj(projNum) {
	$("#p"+projNum).click(function() {
		goToLocation('individualProject.html?proj=' + projNum);
	});
}

function fillCards() {
	for (var i= 0; i < projs.length; i++) {
		$(".p"+(i+1)+"-title").text(projs[i].name);
		$(".p"+(i+1)+"-card").css("background-image", "url(img/"+projs[i].icon+")");
	}
}

//This is wonky
//There should be an easier way to do this but if I just pass I into the location call 
//it always ends up passing 9 because the i in the location call still refers to the i being iterated
goToIndividualProj(1);
goToIndividualProj(2);
goToIndividualProj(3);
goToIndividualProj(4);
goToIndividualProj(5);
goToIndividualProj(6);
goToIndividualProj(7);
goToIndividualProj(8);
goToIndividualProj(9);

fillCards();