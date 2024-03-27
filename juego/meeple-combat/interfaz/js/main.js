// * ARCHIVO DE LÓGICA PRINCIPAL

/**
 * ? Contiene todos las instancias de los personajes
 * @const {Personaje[]}
 */
const personajes = [
    new Personaje({
        nombre: "meeple",
    }),
    new Personaje({
        nombre: "esbirro 1",
    }),
    new Personaje({
        nombre: "esbirro 2",
    }),
    new Personaje({
        nombre: "esbirro 3",
    }),
    new Personaje({
        nombre: "esbirro 4",
    }),
    new Personaje({
        nombre: "esbirro 5",
    }),
]

/**
 * ? Indica el indice del personaje seleccionado
 * @var {number}
 */
let indice_personaje = 0
/**
 * ? Contiene el indice de ultimo esbirro seleccionado
 */
let indice_esbirro = 1
/**
 * ? Indica el modo de juego
 * @var {string}
 */
let modo = "jugar"

/**
 * Contiene todos los botones de los avatares y esbirros
 * @const {BotonModal[]}
 */
const botones_personajes = botones.avatares.normales.concat(/* TODO: Agregar esbirros*/)
botones_personajes.forEach(boton => {
    const personaje_actual = personajes[indice_personaje]
    const personaje_nuevo = avatares[boton.nombre]

    boton.FuncionClick = () => cambiar_personaje(personaje_actual, personaje_nuevo) // Estable la función click.
})

// * Boton para cambiar a esbirros
boton_esbirros.addEventListener("click", () => {
    [indice_personaje, indice_esbirro] = mostrar_esbirros(personajes, indice_personaje, indice_esbirro)
})