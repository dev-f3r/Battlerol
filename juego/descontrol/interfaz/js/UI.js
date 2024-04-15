// Iteramos por cada personaje
for (const nombre in personajesDict) {
    const personaje = personajesDict[nombre]
    // Creamos el elemento HTML para el personaje
    let divNuevo = `<div class="item-modal" id="${nombre}"><img src="${personaje.imagen}" class="modal-img"></div>`

    // Lo insertamos despues del boton de cerrarModalPersonaje
    cerrarModalPersonaje.insertAdjacentHTML('afterend', divNuevo)
}

/**
 * ? Contiene el modal de selección de personajes
 * @const {object}
 */
const modalAvatares = document.getElementById("modalAvatares")

// Calcula el numero de filas necesarias 
let rows = (Object.keys(personajesDict).length / 4) + 1
// Calcula el numero de columnas
let cols = 4


// Ajusta las filas del modal de avatares segun el tamaño de pantalla
// Si la pantalla tiene un ancho mayor a 1000px, el modal ocupara desde la fila 7 hasta rows + 5 filas  
if (window.matchMedia("(min-width: 1000px)").matches) modalAvatares.style.gridRow = `7/span ${rows + 5}`
// Si la pantalla tiene un ancho mayor a 900px, el modal ocupara desde la fila 7 hasta rows + 4 filas
else if (window.matchMedia("(min-width: 900px)").matches) modalAvatares.style.gridRow = `7/span ${rows + 4}`
// Si la pantalla tiene un ancho menor a 1000px, el modal ocupara desde la fila 8 hasta rows + 2 filas
else modalAvatares.style.gridRow = `8/span ${rows + 2}`


// Ajusta las columnas 
modalAvatares.style.gridTemplateColumns = `repeat(${cols}, 1fr)`

// Ajusta las filas
modalAvatares.style.gridTemplateRows = `repeat(${rows}, 1fr)`