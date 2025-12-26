//T1: Casos específicos de funciones / Casos específics de funcions
//U5: Arrow functions
/** 
	-- CASTELLANO --
	EJERCICIO 1.5.3 ENUNCIADO:
	Análogamente al ejercicio 1.1.2, dado el Array [planets], compuesto de objetos literales de JS que representan a los planetas 
  del sistema solar, se nos pide, mediante una función de flecha que definiremos en la constante ya dada [planetHasRings],
  y utilizando el método filter , definir en la constante [result], un nuevo Array en el cual solamente tendremos planetas con anillos 
  (los definidos por la propiedad hasRings = true)
	
	-- CATALÀ --
	EXERCICI 1.5.3 ENUNCIAT:
    Anàlogament a l'exercici 1.1.2, donat l'Array [planets], compost d'objectes literals de JS que representen els planetes
  del sistema solar, se'ns demana, mitjançant una funció de fletxa que definirem a la constant ja donada [planetHasRings],
  i utilitzant el mètode filter , definir en la constant [result], un nou Array en el qual només tindrem planetes amb anells
  (els definits per la propietat hasRings = true)
*/
let planets = [
        {
            name: "Mercury",
            distanceToSun: 58344000,
            hasRings: false,
            diameter: 4878
        },
        {
            name: "Venus",
            distanceToSun: 107712000,
            hasRings: false,
            diameter: 12100
        },
        {
            name: "Earth",
            distanceToSun: 149600000,
            hasRings: false,
            diameter: 12756
        },
        {
            name: "Mars",
            distanceToSun: 227392000,
            hasRings: false,
            diameter: 6787
        },
        {
            name: "Jupiter",
            distanceToSun: 777920000,
            hasRings: true,
            diameter: 142984
        },
        {
            name: "Saturn",
            distanceToSun: 1427184000,
            hasRings: true,
            diameter: 120536
        },
        {
            name: "Uranus",
            distanceToSun: 2600000000,
            hasRings: true,
            diameter: 51108
        },
        {
            name: "Neptune",
            distanceToSun: 4300000000,
            hasRings: true,
            diameter: 49538
        }
    ]
//Escribe aquí tu solución / escriviu aquí la vostra solució:

//fem la funció amb arrow i eliminem claus perquè return va amb una única línia.
const planetHasRings = planetes => planetes.hasRings === true;

// El resultat del map el posem a una constant anomenada result.
const result = planets.filter(planetHasRings);
console.log(result);


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return [planetHasRings, result];
}