//T1: Casos específicos de funciones / Casos específics de funcions
//U4: Definición de funciones dentro de funciones / Definició de funcions dins de funcions
/** 
	-- CASTELLANO --
	EJERCICIO 1.4.2 ENUNCIADO:
	Crea una función llamada [evenNumbers] de manera que ésta reciba un número indeterminado de valores enteros y devuelva un Array con 
  el número inferior y par más cercano a los números introducidos, es decir, si en una posición introducimos un 7 nos devolverá un 6,
  si introducimos un 6, entonces nos devolverá un 6. Como estrategia podéis seguir la siguiente: si la función evenNumbers la definimos con
  parámetros rest, tenemos por un lado que los parámetros recibidos pueden ser de un número indeterminado a priori, y por otro que
  podemos tratar directamente estos parámetros como un Array; una vez recibidos estos parámetros, los meteremos en un nuevo Array
  (clonándolos haciendo uso del operador spread) y calcularemos el resto de la división entre 2 para cada elemento de este nuevo Array,
  redefiniendo en cada posición de este nuevo Array el valor de ese resto de la división. 
  Finalmente solamente nos quedará devolver otro Array que será, para cada posición, el Array de parámetros recibidos menos el valor
  de la misma posición en el Array que hemos almacenado los restos de la división entre dos (esto propiciará que, para los números impares,
  restaremos 1 y para los pares restaremos 0).
  Por ejemplo: la llamada a la función evenNumbers(4,7,21,3); debería devolvernos [4,6,20,2]
  -- CATALÀ --
	EXERCICI 1.4.2 ENUNCIAT:
	Crea una funció anomenada [evenNumbers] de manera que aquesta rebi un nombre indeterminat de valors enters i torni un Array amb
  el nombre inferior i parell més proper als números introduïts, és a dir, si en una posició introduïm un 7 ens tornarà un 6,
  si introduïm un 6, llavors ens tornarà un 6. Com a estratègia podeu seguir la següent: si la funció evenNumbers la definim amb
  paràmetres rest, tenim per una banda que els paràmetres rebuts poden ser d'un nombre indeterminat a priori, i per una altra que
  podem tractar directament aquests paràmetres com un Array; un cop rebuts aquests paràmetres, els ficarem en un nou Array
  (clonant-los fent ús de l'operador spread) i calcularem la resta de la divisió entre 2 per a cada element d'aquest nou Array,
  redefinint a cada posició d'aquest nou Array el valor de la resta de la divisió.
  Finalment només ens quedarà tornar un altre Array que serà, per a cada posició, l'Array de paràmetres rebuts menys el valor
  de la mateixa posició a l'Array que hem emmagatzemat les restes de la divisió entre dos (això propiciarà que, per als nombres imparells,
  restarem 1 i per als parells en restarem 0).
  Per exemple: la crida a la funció evenNumbers(4,7,21,3); ens hauria de tornar [4,6,20,2]
*/
console.log(evenNumbers(4,8,29,9)); //This will return [4,8,28,8]

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function evenNumbers(...numeros){
//Definim clon de l'entrada per a calcular els residus entre 2 i esbrinar si son parells - 0 o senalls - 1
//També tenim un vector auxiliar on desem el resultat de la resta.
    const arr2 = [...numeros];
    let aux = new Array;
  for (let i = 0; i < arr2.length; i++){

      arr2[i] = arr2[i] % 2;
      aux[i] = numeros[i]-arr2[i];

  }

    return aux;
}


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return evenNumbers;
}