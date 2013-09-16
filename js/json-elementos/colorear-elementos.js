$('#metales').on('click',colorearMetal);
$('#nometales').on('click',colorearNoMetal);
$('#metaloides').on('click',colorearMetaloide);


function colorearMetal(){

	$('.cel').each(function() {
		if ($(this).data('grupo') == 'metales') {
			$(this).css({'background':'rgb(76, 211, 64)'});
		}
	});
}

function colorearNoMetal(){

	$('.cel').each(function() {
		if ($(this).data('grupo') == 'no metales') {
			$(this).css('background', 'rgb(228, 228, 40)');
		}
	});
}

function colorearMetaloide(){

	$('.cel').each(function() {
		if ($(this).data('grupo') == 'metaloides') {
			$(this).css('background', 'rgb(255, 255, 144)');
		}
	});
}


$('#metales').on("click",mostrarMenuMetales);
$('#nometales').on("click",mostrarMenuNoMetales);
$('#metaloides').on("click",mostrarMenuMetaloides);

function mostrarMenuMetales(){
	$('.glyphicon-chevron-down').eq(0).toggleClass('glyphicon-chevron-up');
	$('.submenuno').toggle();
}

function mostrarMenuNoMetales(){
	$('#nometales .glyphicon-chevron-down').removeClass('nometales glyphicon-chevron-down').addClass('nometales glyphicon-chevron-up');
	$('.submendos').toggle();
}

function mostrarMenuMetaloides(){
	$('#metaloides .glyphicon-chevron-down').removeClass('metaloides glyphicon-chevron-down').addClass('metaloides glyphicon-chevron-up');
	$('.submentres').toggle();
}

////////////////////////////////////

