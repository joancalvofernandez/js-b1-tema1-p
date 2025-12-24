//T1: Casos específicos de funciones / Casos específics de funcions
//U2: Recursividad / Recursivitat
/** 
	-- CASTELLANO --
	EJERCICIO 1.2.2 ENUNCIADO:
	Define el cuerpo de una función denominada rangeOfNumbers (ya dada) que reciba un número como parámetro y devuelva la suma de todos 
	los números que hay desde 0 hasta el número recibido. Es decir, el resultado de la llamada a la función 
	rangeOfNumbers(4) debería ser 1+2+3+4 = 10
	
	-- CATALÀ --
	EXERCICI 1.2.2 ENUNCIAT:
	Defineix el cos d'una funció anomenada rangeOfNumbers (ja donada) que rebi un número com a paràmetre i torni la suma de tots
	els números que hi ha des de 0 fins al número rebut. És a dir, el resultat de la crida a la funció
	rangeOfNumbers(4) hauria de ser 1+2+3+4 = 10
*/

console.log(rangeOfNumbers(4));
//Escribe aquí tu solución / escriviu aquí la vostra solució:

function rangeOfNumbers(valor){
	
	if (valor <= 0) {
		return 0;
   	} else{

	return valor + rangeOfNumbers(valor-1);
   }
}


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return rangeOfNumbers;
}