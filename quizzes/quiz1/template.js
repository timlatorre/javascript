$(function(){

$('#add_button').click(add_numbers)

});

function add_numbers() {
	a = ('#number1').val();
	b = parseInt(a);

	c = ('#number2').val();
	d = parseInt(c);

	e = b + d;
	$('#result').text(e);
}
