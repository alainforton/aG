//Se realiza un test de hacer el tablero de 8x8 abriendo popups, es decir cada casilla un pop up, pero el navegador dice chao.
//Se realiza lo mismo pero con menos esta vez de 4x4 y a pesar de que va lento hace lo que se quiere.


// aGdrez tablero pop up en firefox

var contador = {
	
	x : 400,
	y : 400,
	pieza : '12'
}

function testing(){
	for(var y = 4; y > 0; y--){
		for(var x = 4; x > 0; x--){
			
			popUp(contador)
			
			contador.x = contador.x - 100;
			contador.pieza++;
		}
		
		contador.x = 400;
		contador.y = contador.y - 100;
	}



}

function popUp(val,pieza) {

	var datos = `width=100,height=100,top=${val.x},left=${val.y}`;
	var myWindow = window.open("", "", datos);
 	
 	//myWindow.document.wirte(`<table><tr><td style='width: 40px;height: 40px;color: white;'></td><td style='width: 40px;height: 40px;color: black;></td></tr><tr><td></td><td></td></tr></table>`)
 	
	myWindow.document.write(`<span style='font-size:80px;color:black;'>&#98${contador.pieza};</span>`);
  
}
