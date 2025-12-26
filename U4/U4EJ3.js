//T1: Casos específicos de funciones / Casos específics de funcions
//U4: Definición de funciones dentro de funciones / Definició de funcions dins de funcions
/** 
	-- CASTELLANO --
	EJERCICIO 1.4.3 ENUNCIADO:
	Dada la constante classroomStudents (un array) que almacena un conjunto de estudiantes (objetos), se nos pide
  crear una función llamada [oldest] que reciba un número indeterminado de esudiantes como parámetros rest,
  (los cuales los podremos obtener de classroomStudents) y que nos devuelva el nombre del estudiante de mayor edad.
  -- CATALÀ --
	EXERCICI 1.4.3 ENUNCIAT:
	Donada la constant classroomStudents (un array) que emmagatzema un conjunt d'estudiants (objectes), se'ns demana
  crear una funció anomenada [oldest] que rebi un nombre indeterminat d'esudiants com a paràmetres rest,
  (els quals els podrem obtenir de classroomStudents) i que ens torni el nom de l'estudiant de més edat.
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
console.log(oldest(classroomStudents[0], classroomStudents[3])); //This will return 'Carme'
console.log(oldest(classroomStudents[2], classroomStudents[3], classroomStudents[4])); //This will return 'Ramon'

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function oldest(...arr1){
//definim el primer element passat com a referència de més vell (nom i edat)
  let nom = arr1[0].name;
  let mesVell = arr1[0].yearOfBirth;

  for (let i = 0; i < arr1.length; i++){
//Compara cada element amb el més vell trobat fins eixe moment i s'actialitza, si escau
      if (arr1[i].yearOfBirth < mesVell){

          nom = arr1[i].name;
          mesVell = arr1[i].yearOfBirth;

      } 

  }

  return nom;

}


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return oldest;
}