$(function(){

	$('#color_button').click(color_boxes);
	$('#box_area').on('hover', '.box', text_area_color);
	$('#box_area').on('click', '.box', select_box);
	$('#box_area').on('dblclick', '.box', delete_box);

});

function color_boxes() {
	var string = $('#text_area').val();
	var color_name = string.split(', ');
	for(var i = 0; i < color_name.length; i++)
	{
		var box = $('<div>');
		box.css("background-color", color_name[i]);
		box.addClass('box');
		$('#box_area').append(box);
	}
}

function text_area_color() {
	var color = $(this).css('background-color');
	$('#text_area').css('background-color', color);
}

function select_box() {
	$(this).toggleClass('select');
}

function delete_box() {
	$(this).remove();
}

