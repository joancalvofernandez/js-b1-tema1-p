//T1: Casos específicos de funciones / Casos específics de funcions
//U1: Métodos map y filter / Mètodes map i filter
/** 
	-- CASTELLANO --
	EJERCICIO 1.1.2 ENUNCIADO:
	Dado el Array planets, compuesto de objetos literales de JS que representan a los planetas del sistema solar, 
	se nos pide, utilizando el método filter, definir en una constante a la que llamaremos [result], un nuevo Array 
	en el cual solamente tendremos planetas con anillos (los definidos por la propiedad hasRings = true)
	
	-- CATALÀ --
	EXERCICI 1.1.2 ENUNCIAT:
	Donat l'Array planets, compost d'objectes literals de JS que representen els planetes del sistema solar,
	se'ns demana, emprant el mètode filter, definir en una constant a la qual anomenarem [result], un nou Array
	en el qual únicament tindrem planetes amb anells (els definits per la propietat hasRings = true)
*/
//Do not modify this code:
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

// Function that receives a planet object and returns the objectes que hasRing == true.
function planetRing(planetes) {
    return planetes.hasRings === true;
}

const result = planets.filter(planetRing);
console.log(result);

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return result;
}
