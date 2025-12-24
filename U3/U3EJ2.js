//T1: Casos específicos de funciones / Casos específics de funcions
//U3: Definición de funciones dentro de funciones / Definició de funcions dins de funcions
/** 
	-- CASTELLANO --
	EJERCICIO 1.3.2 ENUNCIADO:
	Dada la constante classroomStudents (un array) que almacena un conjunto de estudiantes (objetos), se nos pide
  definir una función denominada (currentAge) que reciba este array classroomStudents como parámetro y que nos devuelva un nuevo array 
  que contenga la edad actual de cada estudiante (consideraremos directamente que estamos en el año 2023).
  Para esto usaremos una función (a la que llamaremos calculatedYears) dentro de la función
  principal que reciba un estudiante por parámetro y nos devuelva la edad actual.
  Si es correcta, la llamada a la función del ejemplo debería devolvernos el siguiente Array: [25, 24, 20, 23, 21]
	-- CATALÀ --
	EXERCICI 1.3.2 ENUNCIAT:
	Donada la constant classroomStudents (un array) que emmagatzema un conjunt d'estudiants (objectes), se'ns demana
  definir una funció anomenada (currentAge) que rebi aquest array classroomStudents com a paràmetre i que ens torni un nou array
  que contingui l'edat actual de cada estudiant (considerarem directament que som al any 2023). 
  Per això farem servir una funció (a la que anomenarem calculatedYears) dins de la funció
  principal que rebi un estudiant per paràmetre i ens torni l'edat actual.
  Si és correcta, la crida a la funció de l'exemple ens hauria de tornar el següent Array: [25, 24, 20, 23, 21]
*/
//Do not modify this code:
// Declaring and initializing the array that represents the students in the classroom.
const classroomStudents = [
  {
      name: 'Carme',
      surname: 'Ibáñez Marchena',
      yearOfBirth: 1998,
      averageGrade: 8.3,
      repeater: false,
  },
  {
      name: 'Joan',
      surname: 'Espí Prats',
      yearOfBirth: 1999,
      averageGrade: 9.8,
      repeater: true,
  },
  {
      name: 'Maria',
      surname: 'Massats Perelló',
      yearOfBirth: 2003,
      averageGrade: 4.5,
      repeater: false,
  },
  {
      name: 'Ramon',
      surname: 'Cugat Llopis',
      yearOfBirth: 2000,
      averageGrade: 2.7,
      repeater: true,
  },
  {
      name: 'Anna',
      surname: 'Bernal Valls',
      yearOfBirth: 2002,
      averageGrade: 3.5,
      repeater: false,
  }
];
console.log(currentAge(classroomStudents));

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function currentAge(alumnes){
//definim un vector que arreplegue les edats dels estudiants i recorrem l'objecte.
  let edat = new Array();

  for (let i = 0; i < alumnes.length; i++){
//Usem la funció de càlcul d'edat passant el valor d'any de naixement concret de cada element
    edat.push(calculatedYears(alumnes[i].yearOfBirth));

  }

  return edat;

  function calculatedYears (anys){

    return 2023-anys;

  }

}


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return currentAge;
}
