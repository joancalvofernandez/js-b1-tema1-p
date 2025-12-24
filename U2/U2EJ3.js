//T1: Casos específicos de funciones / Casos específics de funcions
//U2: Recursividad / Recursivitat
/** 
	-- CASTELLANO --
	EJERCICIO 1.2.3 ENUNCIADO:
	Define el cuerpo de una función recursiva denominada [oddNumbers] que recibiba un número y un Array vacío como parámetro y rellene este Array 
	recibido como parámetro con todos los números impares que hay entre cero y el número recibido (con este incluido) como parámetro. 
	Por ejemplo siendo myArray un Array vacío, la llamada a la función oddNumbers(7, myArray) devolvería myArray con los valores [7, 5, 3, 1] 
	-- CATALÀ --
	EXERCICI 1.2.3 ENUNCIAT:
	Defineix el cos d'una funció recursiva anomenada [oddNumbers] que rebi un nombre i un Array buit com a paràmetre i empleni aquest Array
	rebut com a paràmetre amb tots els números senars que hi ha entre zero i el nombre rebut (amb aquest inclòs) com a paràmetre.
	Per exemple sent myArray un Array buit, la crida a la funció oddNumbers(7, myArray) tornaria myArray amb els valors [7, 5, 3, 1]
*/
//Do not modify this code:
let myArray = new Array();
oddNumbers(7, myArray);
console.log(myArray);

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function oddNumbers(valor, meuArray){
//Quan el número es menor d'1, hem de parar de cridar la funció i retornar el que tenim
	if (valor < 1){

		return meuArray;

	}
//Hem de detectar els valors senalls i posar-los al vector
	if (valor % 2 !== 0) {

			meuArray.push(valor);

	}
//Cridem a la funció per al següent número anterior del valor.
	return oddNumbers(valor - 1, meuArray);

}


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return oddNumbers;
}