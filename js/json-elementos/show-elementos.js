
$( ".cel" ).each(function( i ) {

	if ( i<57 ) { a = i;}
	else if ( i<=71) { a = i+14; }
	else if ( i<75 ) { a = i+14;}
	else if ( i>=75 & i<=89){ a=i+28;}
	else if ( i<104 & i>89) { a = i-33; }
	else { a=i-15; }

	$(this).data('numero', elementos[a].numero);
	$(this).data('simbolo', elementos[a].simbolo);
	$(this).data('nombre', elementos[a].nombre);
	$(this).data('peso', elementos[a].peso);
	$(this).data('grupo', elementos[a].grupo);

	$(this).find('.simb').html(elementos[a].simbolo);
	$(this).find('.num').html(elementos[a].numero);
	$(this).find('.nomb').html(elementos[a].nombre);

});

$('.cel').on('mouseover', mostrar);

function mostrar() {

	$('.big-numero').html($(this).data('numero'));
	$('.big-simbolo').html($(this).data('simbolo'));
	$('.big-nombre').html($(this).data('nombre'));
	$('.big-others').html($(this).data('peso'));
}

$('#metales').on('click',colorearMetal);
$('#nometales').on('click',colorearNoMetal);
$('#metaloides').on('click',colorearMetaloide);


function colorearMetal(){

	$('.cel').each(function() {
		if ($(this).data('grupo') == 'metales') {
			$(this).css('background', 'rgb(195, 204, 231)');
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


$('#metales').on("click",mostrarMenu);

function mostrarMenu(){
	$('.submen').show(100);
}