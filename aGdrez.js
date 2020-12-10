// aGdrez 

// tablero pop up, con window.open()

function empieza(algo){

	tablero.popup();		
		
	return console.log(algo);
}




let tablero = {} || tablero;

tablero.documentacion = {
	
	nombre : 'tablero/pop - window.open()',
	url : 'TODO liga github'

}

tablero.dibujoData = {
	
	piezas : [{ 
		rey :		  ['&#9812;', 1],
		dama :  	['&#9813;', 1],
		torre : 	['&#9814;', 2],
		alfil : 	['&#9815;', 2],
		caballo : ['&#9816;', 2],
		peon :	  ['&#9817;', 8]
		},{
		rey :		  ['&#9818;', 1],
		dama : 	  ['&#9819;', 1],
		torre : 	['&#9820;', 2],
		alfil : 	['&#9821;', 2],
		caballo : ['&#9822;', 2],
		peon :	  ['&#9823;', 8]
		}],
	colores : []

}


tablero.popup = function(){


	//Info general;	
	console.log(this);
	
}

