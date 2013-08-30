var i = 0;
while (i < 118) {
	var a;

	if ( i<57 ) { a = i;}
	else if ( i<71) { a = i+33; }
	else if ( i<89 ) { a = i-14; }
	else if ( i<103 ) { a = i+15; }
	else { a=i-28; }

	$('.cel')[a].children[0].innerHTML = elementos[i].numero;
	$('.cel')[a].children[1].innerHTML = elementos[i].simbolo;
	$('.cel')[a].children[2].innerHTML = elementos[i].nombre;

	$( ".cel" ).each(function( a ) {
		$(this).data('peso', elementos[a].peso);
	});
	

	i++;

}


$('.cel').on('mouseover', mostrar);

function mostrar() {
	$this = this.children;

	$('.big-numero').html($this[0].innerHTML);
	$('.big-simbolo').html($this[1].innerHTML);
	$('.big-nombre').html($this[2].innerHTML);

	$('.big-others').html($(this).data('peso'));
}

/*empezamos con la coloracion*/

$("#metales").on("click", colorearMetal);
$("#nometales").on("click", colorearNoMetal);
$("#metaloides").on("click", colorearMetaloide);

function colorearMetal(){
	$(".metal").css({"background-color":"rgb(123, 170, 63)"});
	$(".nometal").css({"background-color":"rgb(204, 204, 154)"});
	$(".metaloide").css({"background-color":"rgb(204, 204, 154)"});
}

function colorearNoMetal(){
	$(".nometal").css({"background-color":"rgb(196, 196, 83)"});
	$(".metal").css({"background-color":"rgb(204, 204, 154)"});
	$(".metaloide").css({"background-color":"rgb(204, 204, 154)"});
}


function colorearMetaloide(){
	$(".metaloide").css({"background-color":"rgb(108, 108, 221)"});
	$(".metal").css({"background-color":"rgb(204, 204, 154)"});
	$(".nometal").css({"background-color":"rgb(204, 204, 154)"});
}





