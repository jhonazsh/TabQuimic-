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

	i++;

}


$('.cel').on('mouseover', mostrar);

function mostrar() {
	$this = this.children;

	$('.big-numero').html($this[0].innerHTML);
	$('.big-simbolo').html($this[1].innerHTML);
	$('.big-nombre').html($this[2].innerHTML);


	document.getElementById('big-others').innerHTML = elementos[0].peso
}






