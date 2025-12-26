//T1: Casos específicos de funciones / Casos específics de funcions
//U5: Arrow functions
/** 
	-- CASTELLANO --
	EJERCICIO 1.5.1 ENUNCIADO:
	Dado el ejemplo de la teoría del Tema 1, Unidad 1, en donde se emplea en una función el método map para obtener las notas
  de los estudiantes traducidas en letras a partir de valores numéricos, os pedimos reescribir su funcionalidad en la constante dada [planetDiameter]
  empleando una función de flecha, y definiendo el resultado en una nueva constante llamada [result], de manera que si pasamos la llamada del ejemplo 
  del Tema 1 Unidad 1 nos devuelva el mismo resultado que en la función de la teoría: [ 'B', 'A', 'C', 'D', 'C' ]
  
  Consejo: os recomendamos traducir las expresiones condicionales de la función con operadores ternarios 
  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
	
	-- CATALÀ --
	EXERCICI 1.5.1 ENUNCIAT:
  Donat l'exemple de la teoria del Tema 1, Unitat 1, on s'empra en una funció el mètode map per obtenir les notes
  dels estudiants traduïdes en lletres a partir de valors numèrics, us demanem reescriure la seva funcionalitat a la constant donada [planetDiameter]
  emprant una funció de fletxa, i definint el resultat a una nova variable anomenada [result], de manera que si passem la trucada de l'exemple 
  del Tema 1 Unitat 1 ens torni el mateix resultat que en la funció de la teoria: [ 'B', 'A', 'C', 'D', 'C' ]
  Consell: us recomanem traduir les expressions condicionals de la funció amb operadors ternaris
  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
*/
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
 
//Escribe aquí tu solución / escriviu aquí la vostra solució:
//es reescriu la funció en tipus fletxa.

const letterGrade = student => {

  return student.averageGrade >= 9.0 ? 'A' : (student.averageGrade >= 8.0 ? 'B': (student.averageGrade >= 3.0 ? 'C' : 'D'));

}

// El resultat del map el posem a una constant anomenada result.
const result = classroomStudents.map(letterGrade);

console.log(result);


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return [letterGrade, result];
}