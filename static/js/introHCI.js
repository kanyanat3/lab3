'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(".jumbotron h1").text("Experience Chan!");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	//
	$("#submitBtn").click(changeDetails());
}

function changeDetails(e){
	var projectID = $('#project').val();
	$(projectID).animate({
		width: $('#width').val()
	});
	var addedText=$('#description').val();
	$(projectID + ".project-description").text(addedText);

}

function projectClick(e){
	e.preventDefault();
	
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);
	console.log("Target matched: " + jumbotronHeader.length);

	var containingProject = $(this).closest(".project");
	var description= $(containingProject).find(".project-description");
	if(description.length ==0){
		containingProject.append("<div class='project-description'><p>>Description of the project.</p></div>");
	}else{
		$(description).fadeOut();
	}
}





