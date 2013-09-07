// var i = 0;
// while (i < 118) {
// 	var a;

// 	if ( i<57 ) { a = i;}
// 	else if ( i<71) { a = i+33; }
// 	else if ( i<89 ) { a = i-14; }
// 	else if ( i<103 ) { a = i+15; }
// 	else { a=i-28; }

// 	$('.cel')[a].children[0].innerHTML = elementos[i].numero;
// 	$('.cel')[a].children[1].innerHTML = elementos[i].simbolo;
// 	$('.cel')[a].children[2].innerHTML = elementos[i].nombre;

// 	i++;

// }

$( ".cel" ).each(function( i ) {

	if ( i<57 ) { a = i;}
	else if ( i<71) { a = i+33; }
	else if ( i<89 ) { a = i-14; }
	else if ( i<103 ) { a = i+15; }
	else { a=i-28; }

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




