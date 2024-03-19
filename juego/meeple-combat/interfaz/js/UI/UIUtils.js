// ! VARIABLES PRINCIPALES



// ! EDICION
const boton_editar = document.getElementById("editarBtn")
/**
 * Cambia el modo de juego a "jugar" o "edicion"
 */
function cambiarModo() {
    if (modo === "jugar") {
        modo = "edicion"
        boton_editar.children[0].src = "img/guardar.png" // Cambia el icono del boton a candado.
    } else {
        modo = "jugar"
        boton_editar.children[0].src = "img/editar.png" // Cambia el icono del boton a editar.
    }
}
boton_editar.addEventListener("click", cambiarModo) // Cambia de modo cada que se clickee boton_editar
// ! EDICION





// ! PERSONAJES
const botones_modales_personajes = ["portadaBtn"]
botones_modales_personajes.forEach(id => {
    const el = document.getElementById(id) // El botón en cuestion.
    el.addEventListener("click", () => {
        if (modo === "edicion") modales.avatares.MostrarOcultarElemento() // Muestra el modal correspondiente.
    })
})

// TODO: Función para mostrar el estado actual del personaje seleccionado
// TODO: Lógica para cambiar de avatar a esbirro
// TODO: Lógica para navegar entre esbirros

// ! PERSONAJES





// ! ARMAS
// Id de los botones que activan los modales de armas.
const botones_modales_armas = ["arma1ImgBtn", "arma1TxtBtn", "arma2ImgBtn", "arma2TxtBtn"]
botones_modales_armas.forEach(id => {
    const el = document.getElementById(id) // El boton en cuestion.
    el.addEventListener("click", () => {
        if (modo === "edicion") modales.armas_marciales.MostrarOcultarElemento() // Muestra el modal correspondiente.
    })
})
// ! ARMAS