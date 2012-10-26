$(function(){

$('#add_button').click(add_boxes)

});

function add_boxes() {
	var boxes = $('#number_of_boxes').val();
	i = parseInt(boxes);

	for(var i = 0; i < count; i++) 
	paste_boxes();
}

function paste_boxes(){
	var d = $('<div>');
	d.addClass('box');
	d.text(i)
	$('#boxes').append(d);
}