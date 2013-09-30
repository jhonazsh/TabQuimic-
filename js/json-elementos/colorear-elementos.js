$('#metales').on('click',colorearMetal);
$('#nometales').on('click',colorearNoMetal);
$('#metaloides').on('click',colorearMetaloide);


function colorearMetal(){

	$('.cel').each(function() {
		if ($(this).data('grupo') == 'metales') {
			$(this).css({'background':'rgb(167, 163, 255)'});
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


$('#metales').on("click",{id:1},mostrarMenu);
$('#nometales').on("click",{id:2},mostrarMenu);
$('#metaloides').on("click",{id:3},mostrarMenu);

function mostrarMenu(valor,valoruno) {
	if(valor.data.id==1){
		$('.glyphicon-chevron-down').eq(0).toggleClass('glyphicon-chevron-up');
		$('.submenuno').toggle();
		console.log('hola');
	}

	else if(valor.data.id==2){
		$('.glyphicon-chevron-down').eq(1).toggleClass('glyphicon-chevron-up');
		$('.submendos').toggle();
	}

	else if(valor.data.id==3){
		$('.glyphicon-chevron-down').eq(2).toggleClass('glyphicon-chevron-up');
		$('.submentres').toggle();
	}
}

////////////////////////////////////

$('.fil').eq(0).on('mouseover',{id:1},colorGrupo);
$('.fil').eq(1).on('mouseover',{id:2},colorGrupo);
$('.fil').eq(2).on('mouseover',{id:3},colorGrupo);
$('.fil').eq(3).on('mouseover',{id:4},colorGrupo);
$('.fil').eq(4).on('mouseover',{id:5},colorGrupo);
$('.fil').eq(5).on('mouseover',{id:6},colorGrupo);
$('.fil').eq(6).on('mouseover',{id:7},colorGrupo);

$('.fil').eq(0).on('mouseleave',{id:1},descolorGrupo);
$('.fil').eq(1).on('mouseleave',{id:2},descolorGrupo);
$('.fil').eq(2).on('mouseleave',{id:3},descolorGrupo);
$('.fil').eq(3).on('mouseleave',{id:4},descolorGrupo);
$('.fil').eq(4).on('mouseleave',{id:5},descolorGrupo);
$('.fil').eq(5).on('mouseleave',{id:6},descolorGrupo);
$('.fil').eq(6).on('mouseleave',{id:7},descolorGrupo);

function colorGrupo(valorsito) {
	if (valorsito.data.id==1) {
		$('.menors').eq(0).css({'background-color':'black'});
	}

	else if (valorsito.data.id==2) {
		$('.menors').eq(1).css({'background-color':'black'});
	}

	else if (valorsito.data.id==3) {
		$('.menors').eq(2).css({'background-color':'black'});
	}

	else if (valorsito.data.id==4) {
		$('.menors').eq(3).css({'background-color':'black'});
	}

	else if (valorsito.data.id==5) {
		$('.menors').eq(4).css({'background-color':'black'});
	}

	else if (valorsito.data.id==6) {
		$('.menors').eq(5).css({'background-color':'black'});
	}

	else if (valorsito.data.id==7) {
		$('.menors').eq(6).css({'background-color':'black'});
	}
	
}

function descolorGrupo(valorsito) {

	if (valorsito.data.id==1) {
		$('.menors').eq(0).css({'background-color':'rgba(25, 61, 34, 0.43)'});
	}

	else if (valorsito.data.id==2) {
		$('.menors').eq(1).css({'background-color':'rgba(25, 61, 34, 0.43)'});
	}

	else if (valorsito.data.id==3) {
		$('.menors').eq(2).css({'background-color':'rgba(25, 61, 34, 0.43)'});
	}

	else if (valorsito.data.id==4) {
		$('.menors').eq(3).css({'background-color':'rgba(25, 61, 34, 0.43)'});
	}

	else if (valorsito.data.id==5) {
		$('.menors').eq(4).css({'background-color':'rgba(25, 61, 34, 0.43)'});
	}

	else if (valorsito.data.id==6) {
		$('.menors').eq(5).css({'background-color':'rgba(25, 61, 34, 0.43)'});
	}

	else if (valorsito.data.id==7) {
		$('.menors').eq(6).css({'background-color':'rgba(25, 61, 34, 0.43)'});
	}
}