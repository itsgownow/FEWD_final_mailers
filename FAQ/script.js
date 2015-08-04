$(".question").click(function(){ 
	$(this).next().slideToggle();
});
//do I need to list out the array WITHOUT question 5 above?

$("#question5").click(function(){
	$(".answer5").slideToggle();
});

//an easier/better way to write the above rules without being repetitive!
// $('#question1, #question2, #question3').click(function(){
	//rather than call out each ID, add a class to all IDs and call out that Class:
	// $('.question').click(function(){
	// // console.log(this);
	// //"this" is no longer a jquery object
	// //can't use .addclass, .attr, .css, etc; $('this')


// put all IDs in an array 
// function()
	//var id = $(this).attr('id'));
//selecting attributes within HTML (id's) rather than listing out all #IDs
