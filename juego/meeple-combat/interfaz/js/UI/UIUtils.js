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
    boton_consola.textContent = texto
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

/**
 * ? Cambia el contenido de la pagina para reflejar los cambios en el personaje seleccionado.
 * @param {Personaje} personaje - El personaje a mostrar.
 */
function mostrar_personaje(personaje) {
    // Atributos
    id_botones_atributos.forEach(atributo => {
        const nombre_atributo = atributo.slice(0, -3)
        const boton = document.getElementById(atributo)

        const span = boton.childNodes[3].childNodes[1]
        span.textContent = personaje.atributos[nombre_atributo]
    })

    // Portada
    const portada = boton_portada.childNodes[0] // Elemento que muestra la portada
    portada.src = personaje.portada

    // Descripción
    contenido_consola(personaje.descripcion)

    // Nombre
    const nombre = document.getElementById("nombreTxt") // Elemento que muestra el nombre.
    nombre.textContent = personaje.nombre.toUpperCase() // En mayusculas.

    // TODO: Armas
    // TODO: Equipamiento
    // TODO: Habilidades
}
// TODO: Lógica para cambiar de avatar a esbirro
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