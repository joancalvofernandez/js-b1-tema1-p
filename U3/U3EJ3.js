//T1: Casos específicos de funciones / Casos específics de funcions
//U3: Definición de funciones dentro de funciones / Definició de funcions dins de funcions
/** 
	-- CASTELLANO --
	EJERCICIO 1.3.3 ENUNCIADO:
	Dada la constante classroomStudents (un array) que almacena un conjunto de estudiantes (objetos), se nos pide
  definir una función denominada (totalApproved) que reciba este array classroomStudents como parámetro y que nos devuelva el
  número de aprobados total que hay en la clase.
  Para esto usaremos una función (a la que llamaremos isApproved) dentro de la función
  principal que reciba un estudiante por parámetro y nos devuelva si está o no aprobado (es decir si tiene un averageGrade igual o superior a 5).
  Si es correcta, la llamada a la función del ejemplo debería devolvernos el siguiente valor: 2
	-- CATALÀ --
	EXERCICI 1.3.3 ENUNCIAT:
	Donada la constant classroomStudents (un array) que emmagatzema un conjunt d'estudiants (objectes), se'ns demana
  definir una funció anomenada (totalApproved) que rebi aquest array classroomStudents com a paràmetre i que ens torni el
  nombre d'aprovats total que hi ha a la classe.
  Per això farem servir una funció (a la que anomenarem isApproved) dins de la funció
  principal que rebi un estudiant per paràmetre i ens torni si està o no aprovat (és a dir si té un averageGrade igual o superior a 5).
  Si és correcta, la crida a la funció de l'exemple ens hauria de tornar el valor següent: 2
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
console.log(totalApproved(classroomStudents));

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function totalApproved(alumnes){
//Definim variable per a recollir el total d'aprovats.
  let total = 0;

  for (let i = 0; i < alumnes.length; i++){
//Usem la funció per verificar si estan aprovats passant el valor de nota concret de cada estudiant
    total = total + isApproved(alumnes[i].averageGrade);

  }

  return total;
  
//Està aprovat si la nota es major o igual a 5
  function isApproved (nota){

   return nota >=5 ? 1 : 0;

  }

}


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return totalApproved;
}