$(function(){

$('#yellow').click(yellow);
$('#small').hover(small);
$('#big').hover(big);
$('#clear').click(clear);
});


function small(){
  $('#target2').css('font-size','4px');
}

function yellow(){
  $('body').css('background-color','yellow');
}

function big(){
  $('#target2').css('font-size','30px');
  $('#target2').css('color','green');
  $('#target2').css('font-style', 'italic');

}

function clear(){
	$('#target1').val("");
	$('#target2').val("");
}