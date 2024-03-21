// ! VARIABLES PRINCIPALES
/**
 * ? Contiene los modales que se muestran actualmente
 * @var {Modal[]}
 */
let modales_mostrados = []
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
function mostrar_modal(modal, lista = modales_mostrados, ocultar_demas = false) {
    if (ocultar_demas) ocultar_modales(lista) // Oculta todos los modales mostrados

    lista.push(modal); modal.MostrarOcultarElemento() // Lo agrega a `lista` y lo muestra
}
// ! HELPERS



// ! EDICION
/**
 * ? Contiene el boton que manipula el modo de juego
 * @const {HTMLElement}
 */
const boton_editar = document.getElementById("editarBtn")
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
 * ? Contiene los id de los botones relacionados a personajes
 * @const {String[]}
 */
const botones_modales_personajes = ["portadaBtn"]
/**
 * ? Contiene el modal de avatares
 * @const {Modal}
 */
const modal_avatares = modales.avatares
botones_modales_personajes.forEach(id => {
    const el = document.getElementById(id) // El botón en cuestion.

    // Evento click
    el.addEventListener("click", () => {
        if (modo === "edicion") {
            mostrar_modal(modal_avatares, modales_mostrados, true)
        }
    })
})

// TODO: Función para mostrar el estado actual del personaje seleccionado
// TODO: Lógica para cambiar de avatar a esbirro
// TODO: Lógica para navegar entre esbirros

// ! PERSONAJES





// ! ARMAS
/**
 * ? Contiene los id de todos los botones relacionados con las armas
 * @var {String[]}
 */
const botones_modales_armas = ["arma1ImgBtn", "arma1TxtBtn", "arma2ImgBtn", "arma2TxtBtn"]
/**
 * ? Contiene el modal de armas marciales
 * @var {Modal}
 */
const modal_armas_marciales = modales.armas_marciales

botones_modales_armas.forEach(id => {
    const el = document.getElementById(id) // El boton en cuestion.

    // Evento click
    el.addEventListener("click", () => {
        if (modo === "edicion") {
            mostrar_modal(modal_armas_marciales, modales_mostrados, true)
        }
    })
})
// ! ARMAS





// ! EQUIPAMIENTO
// ! EQUIPAMIENTO




// ! HABILIDADES
// ! HABILIDADES