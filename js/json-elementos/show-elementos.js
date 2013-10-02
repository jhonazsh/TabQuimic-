
/* Esta porcion de codigo llena cada cuadrito en la tabla periodica quimica */
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
	$(this).data('pertenece', elementos[a].pertenece);
	$(this).data('grupo', elementos[a].grupo);

	$(this).find('.simb').html(elementos[a].simbolo);
	$(this).find('.num').html(elementos[a].numero);
	$(this).find('.nomb').html(elementos[a].nombre);

});

/*****************************************************************************/

/* Con esta funcion se trata de mostrar a los elementos en su forma mas grande y detallada */
$('.cel').on('mouseover', mostrar);

function mostrar() {

	$('.big-numero').html($(this).data('numero'));
	$('.big-simbolo').html($(this).data('simbolo'));
	$('.big-nombre').html($(this).data('nombre'));
	$('.big-others').html($(this).data('peso'));
}

/*******************************************************************************************/

