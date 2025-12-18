//T1: Casos específicos de funciones / Casos específics de funcions
//U2: Recursividad / Recursivitat
/** 
	-- CASTELLANO --
	EJERCICIO 1.2.1 ENUNCIADO:
	Un ejemplo de recursividad aplicada en una función que habéis visto en la teoría es el cálculo del factorial, 
	otro clásico ejemplo es el cálculo de la sucesión de Fibonacci. 
	La definición de la sucesión de Fibonacci es muy simple: es una sucesión de valores que comienza con los números 0 y 1;
	a partir de estos, cada término será la suma de los dos anteriores. 
	Dada esta definición es inmediato concluir que estamos ante una relación de recurrencia cuya lógica podemos trasladar 
	a una función recursiva. 
	Define una función recursiva a la que llamaremos [fibonacci] que reciba un número y que calcule el valor de la sucesión de 
	Fibonacci en esta posición, de tal manera que, si la instanciamos en el bucle for dado obtendríamos los 10 
	primeros valores de esta sucesión.
	
	-- CATALÀ --
	EXERCICI 1.2.1 ENUNCIAT:
	Un exemple de recursivitat aplicada en una funció que heu vist en la teoria és el càlcul del factorial, 
	un altre clàssic exemple és el càlcul de la successió de Fibonacci.
	La definició de la successió de Fibonacci és molt simple: és una successió de valors que comença amb els números 0 i 1;
	a partir d'aquests, cada terme serà la suma dels dos anteriors. 
	Donada aquesta definició és immediat concloure que estem davant d'una relació de recurrència la lògica de la qual 
	podem traslladar a una funció recursiva. 
	Defineix el cos d'una funció recursiva la qual anomenarem [fibonacci] que rebi un número i que calculi el valor de la successió de 
	Fibonacci en aquesta posició, de manera que, si la instàncies al bucle for donat obtindríem els 10 primers valors 
	d'aquesta successió.
*/
for(let i=0; i<10;i++){
	console.log(fibonacci(i));
}

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function fibonacci(valor){

   if (valor == 1 || valor == 0) {
		return valor;
   } else {
		return fibonacci(valor-2) + fibonacci(valor-1);
   }
}

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return fibonacci;
}