'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
	//$('#colorBtn').click(stretch);
	
	
	
	
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	$.get("/project/" + idNumber, callBackProject);
	
	//$("#" + projectID + ".details").html("foo");
	
	console.log("User clicked on project " + idNumber);
}

function addProject(result){
	console.log(result);
	
	var projectHTML = '<a href="#" class = "thumbnail">' + '<img src="' + result['image'] + 
	'class = "img">' + '<p>' + result['title'] + '</p>' + '<p><small>' + result['date'] + '</small></p></a>';
	
	$("#project-container").html(projectHTML);
	$("#project-description").html(result['summary']);
}

function callBackProject(result){
	console.log(result);
	
	var selector = 'div#project' + result.id + '.project';
	
	//$(selector).children('.thumbnail').children('.details').html();
	$(selector).children('.thumbnail').children('.details').html("<img src'" + result['image'] + "' class='detailsImage'>" + result.summary);
	
	/*var projectHTML = '<a href="#" class = "thumbnail">' + '<img src="' + result['image'] + 
	'class = "img">' + '<p>' + result['title'] + '</p>' + '<p><small>' + result['date'] + '</small></p></a>';
	
	$("#project-container").html(projectHTML);
	$("#project-description").html(result['summary']);*/
	
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
	
	$.get("/palette/", callBackColor);
}

function callBackColor(result){
	console.log(result);
	
	var colors = result['colors']['hex'];
	
	console.log(colors);
	
	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);	
	$('.project img').css('opacity', .75);
	
}


/*
 * REST API GET request
 */
function stretch(e){
	console.log("S");
	//alert("A");
	$.get("/panoramio/", callBackPanoramio);	
}
function callBackPanoramio(result){
	
	console.log(result);
	//alert(result);
	//var count = result[0];
	//alert("A");
	//console.log(count);
	//console.log("TEST");
}