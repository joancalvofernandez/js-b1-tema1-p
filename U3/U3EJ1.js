//T1: Casos específicos de funciones / Casos específics de funcions
//U3: Definición de funciones dentro de funciones / Definició de funcions dins de funcions
/** 
	-- CASTELLANO --
	EJERCICIO 1.3.1 ENUNCIADO:
	Crea una función (llamada hypotenuse) que reciba como parámetros la base y la altura de un triángulo rectángulo y devuelva la medida de su hipotenusa.
  Recuerda que la fórmula del cálculo de la hipotenusa triángulo rectángulo, dadas la base y la altura es c = √(b²+a²). 
  Es decir: la raíz cuadrada de la base al cuadrado más la altura al cuadrado.
  Para calcular estas operaciones de elevar al cuadrado, debes definir (y emplear) dentro de la función principal (hypotenuse)
  otra función (llamada square) que reciba un valor como parámetro y lo devuelva elevado al cuadrado.
  Si es correcta la llamada del ejemplo hypotenuse(3,4); debería devolver un valor de 5.
	-- CATALÀ --
	EXERCICI 1.3.1 ENUNCIAT:
	Crea una funció (anomenada hypotenuse) que rebi com a paràmetres la base i l'alçada d'un triangle rectangle i torni el valor de la seva hipotenusa.
  Recordeu que la fórmula del càlcul de la hipotenusa triangle rectangle, donades la base i l'alçada és c = √(b²+a²).
  És a dir: l'arrel quadrada de la base al quadrat més l'alçada al quadrat.
  Per calcular aquestes operacions d'elevar al quadrat, has de definir (i emprar) dins la funció principal (hypotenuse)
  una altra funció (anomenada square) que rebi un valor com a paràmetre i el torni elevat al quadrat.
  Si és correcta la crida a la funció de l'exemple hypotenuse(3,4); hauria de tornar un valor de 5.
*/

//Do not modify this code:
console.log(hypotenuse(3,4));

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function hypotenuse(base, altura){
//def¡nim una funció per a calcular el quadrat d'un número, equivalent a Math.pow(numero, 2);
  function square(numero){

    return numero * numero;

  }
  //recollim els quadrats de base i altura i els sumem
  let resultat = square(base) + square(altura);

  //fem l'arrel quadrada amb la funció java corresponent i retornem el valor resultant
  return Math.sqrt(resultat);

}

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return hypotenuse;
}
