// * ARCHIVO DE LÓGICA PRINCIPAL

/**
 * ? Contiene todos las instancias de los personajes
 * @const {Personaje[]}
 */
const personajes = [
    new Personaje({
        nombre: "bienvenido",
        portada: "img/logo-meeple-combat.png",
        descripcion: "consola",
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
const botones_personajes = botones.avatares.normales.concat(botones.esbirros.normales)

// * Evento click para cambiar personajes
botones_personajes.forEach(boton => {
    const personaje_nuevo = avatares[boton.nombre] ? avatares[boton.nombre] : esbirros[boton.nombre] // Trae el personaje correcto basandose en si es un esbirro o un avatar

    boton.FuncionClick = () => cambiar_personaje(personajes[indice_personaje], personaje_nuevo) // Estable la función click.
})
// * Evento click para pasar de avatar a esbirros
boton_esbirros.addEventListener("click", () => {
    [indice_personaje, indice_esbirro] = mostrar_esbirros(personajes, indice_personaje, indice_esbirro)
    mostrar_ocultar_direccionales(indice_personaje)
})

// * Evento click para navegar entre esbirros
botones_izquierda_derecha.forEach(boton => {
    boton.addEventListener("click", () => {
        const direccion = boton.id.slice(0, -3) // Obtiene la acción desde el id descartando "Btn".

        indice_personaje = navegar_esbirros(personajes, indice_esbirro, direccion) // Actualiza el indice de personaje mostrado.
        indice_esbirro = indice_personaje // Actualiza el indice de esbirro mostrado.

        mostrar_personaje(personajes[indice_personaje]) // Muestra el esbirro dependiendo de la dirección.
    })
})

mostrar_personaje(personajes[0]) // Muestra el personaje principal desde inició