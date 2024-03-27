// ! VARIABLES PRINCIPALES
/**
 * ? Contiene los modales que se muestran actualmente
 * @var {Modal[]}
 */
let modales_mostrados = []


/**
 * ? Contiene los ids de los botones para los atributos del personaje.
 * @const {string[]}
 */
const id_botones_atributos = ["ataqueBtn", "esquivaBtn", "bloqueoBtn", "velocidadBtn", "vidaBtn", "poderBtn"]
/**
 * ? Contiene los id de todos los botones relacionados con las armas.
 * @var {string[]}
 */
const id_botones_armas = ["arma1ImgBtn", "arma1TxtBtn", "arma2ImgBtn", "arma2TxtBtn"]
/**
 * ? Contiene los id de los botones relacionados al equipamiento.
 * @const {string[]}
 */
const id_botones_equipamiento = ["equipo1Btn", "equipo2Btn", "equipo3Btn"]


/**
 * Contiene el botón de la portada.
 * @const {HTMLButtonElement}
 */
const boton_portada = document.getElementById("portadaBtn")
/**
 * Contiene el botón de la experiencia.
 * @const {HTMLButtonElement}
 */
const boton_exp = document.getElementById("experienciaBtn")
/**
 * Contiene el botón que abre la mochila.
 * @const {HTMLButtonElement}
 */
const boton_mochila = document.getElementById("mochilaBtn")
/**
 * Contiene el botón que muestra la lista de esbirros.
 * @const {HTMLButtonElement}
 */
const boton_esbirros = document.getElementById("esbirrosBtn")
/**
 * Contiene el botón que manipula el modo de juego.
 * @const {HTMLButtonElement}
 */
const boton_editar = document.getElementById("editarBtn")
/**
 * Contiene el botón de la consola.
 * @const {HTMLButtonElement}
 */
const boton_consola = document.getElementById("consolaBtn")
/**
 * Contiene el botón que realiza la acción del turno actual.
 * @const {HTMLButtonElement}
 */
const boton_accion = document.getElementById("accionBtn")
// ! VARIABLES PRINCIPALES




// ! HELPERS
/**
 * ? Limpia y oculta todos los modales en `lista`.
 * @param {Modal[]} lista - La lista con los modales
 */
function ocultar_modales(lista = modales_mostrados) {
    while (lista.length) {
        const modal = lista.pop()
        modal.MostrarOcultarElemento()
    }
}
/**
 * ? Muestra el modal, lo agrega a `lista` y oculta los demas si se indica.
 * @param {Modal} modal - El modal en cuestion.
 * @param {Modal[]} lista - La lista a la cual agregar `modal`.
 * @param {Boolean} ocultar_demas - Oculta los demas modales.
*/
function mostrar_modal(modal, lista = modales_mostrados, ocultar_demas = true) {
    if (ocultar_demas) ocultar_modales(lista) // Oculta todos los modales mostrados

    lista.push(modal); modal.MostrarOcultarElemento() // Lo agrega a `lista` y lo muestra
}
/**
 * ? Cambia el contenido de la consola.
 * @param {string} texto - El nuevo texto.
 */
function contenido_consola(texto) {
    boton_consola.textContent = capitalizarPrimeraLetra(texto)
}
// ! HELPERS



// ! EDICION
/**
 * ? Cambia el modo de juego a "jugar" o "edicion"
 */
function cambiarModo() {
    // Pasa a modo edición.
    if (modo === "jugar") {
        modo = "edicion"
        boton_editar.children[0].src = "img/guardar.png" // Cambia el icono del boton a candado.
    }
    // Pasa a modo jugar.
    else {
        modo = "jugar"
        boton_editar.children[0].src = "img/editar.png" // Cambia el icono del boton a editar.
    }

    ocultar_modales(modales_mostrados) // Oculta todos los modales mostrados
}
boton_editar.addEventListener("click", cambiarModo) // Cambia de modo cada que se clickee boton_editar
// ! EDICION





// ! PERSONAJES
/**
 * ? Contiene el modal de avatares
 * @const {Modal}
 */
const modal_avatares = modales.avatares
// Evento click
boton_portada.addEventListener("click", () => {
    if (modo === "edicion") {
        mostrar_modal(modal_avatares, modales_mostrados)
    }
})

// TODO: Refactorizar
/**
 * ? Cambia el contenido de la pagina para reflejar los cambios en el personaje seleccionado.
 * @param {Personaje} personaje - El personaje a mostrar.
 */
function mostrar_personaje(personaje) {
    // * Atributos
    id_botones_atributos.forEach(atributo => {
        const nombre_atributo = atributo.slice(0, -3)
        const boton = document.getElementById(atributo)

        const span = boton.childNodes[3].childNodes[1]
        span.textContent = personaje.atributos[nombre_atributo]
    })

    // * Portada
    const portada = boton_portada.childNodes[0] // Elemento que muestra la portada
    portada.src = personaje.portada

    // * Descripción
    contenido_consola(personaje.descripcion)

    // * Nombre
    const nombre = document.getElementById("nombreTxt") // Elemento que muestra el nombre.
    nombre.textContent = personaje.nombre.toUpperCase() // En mayusculas.

    // * Arma 1
    const arma1_img = document.getElementById("arma1Img") // Icóno
    arma1_img.src = personaje.arma1.icono
    const arma1_txt = document.getElementById("arma1Txt") // Nombre
    arma1_txt.textContent = personaje.arma1.nombre.toUpperCase()
    // * Arma 2
    const arma2_img = document.getElementById("arma2Img") // Icóno
    arma2_img.src = personaje.arma2.icono
    const arma2_txt = document.getElementById("arma2Txt") // Nombre
    arma2_txt.textContent = personaje.arma2.nombre.toUpperCase()


    for (let i = 1; i <= 3; i++) {
        // * Habilidades
        const habilidad = document.getElementById(`habilidad${i}Txt`)
        habilidad.textContent = personaje[`habilidad${i}`].nombre.toUpperCase()

        // TODO: Equipamiento
    }
}

/**
 * ? Muestra los esbirros o el avatar principal.
 * @param {Personaje[]} personajes - La lista con todos los personajes.
 * @param {number} indice_personaje - El indice del personaje actual.
 * @param {number} indice_esbirro - El indice del ultimo esbirro mostrado.
 * @returns {number[]} Los cambios en el indice del personaje y el esbirro. 
 */
function mostrar_esbirros(personajes, indice_personaje, indice_esbirro) {
    // Muestra los esbirros
    if (indice_personaje === 0) {
        indice_personaje = indice_esbirro
        boton_esbirros.children[0].src = "img/personajeico.png" // Cambia el icóno
    } 
    // Muestra el avatar
    else {
        indice_personaje = 0
        boton_esbirros.children[0].src = "img/esbirrosico.png" // Cambia el icóno
    }

    const personaje = personajes[indice_personaje] // Accede al personaje
    mostrar_personaje(personaje) // Lo muestra

    return [indice_personaje, indice_esbirro] // Retorna los indices cambiados
}
// TODO: Lógica para navegar entre esbirros

// ! PERSONAJES





// ! ARMAS
/**
 * ? Contiene el modal de armas marciales
 * @var {Modal}
 */
const modal_armas_marciales = modales.armas_marciales
// Eventos para botones relacionados con las armas
id_botones_armas.forEach(id => {
    const el = document.getElementById(id) // El boton en cuestion.

    // Evento click
    el.addEventListener("click", () => {
        if (modo === "edicion") {
            mostrar_modal(modal_armas_marciales, modales_mostrados)
        }
    })
})
// ! ARMAS





// ! EQUIPAMIENTO
// ! EQUIPAMIENTO




// ! HABILIDADES
// ! HABILIDADES