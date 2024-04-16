// ! VARIABLES PRINCIPALES
/**
 * ? Contiene los modales o demas elementos que se muestran actualmente
 * @var {Modal[]}
 */
let elementos_mostrados = []
/**
 * ? Contiene el slot del arma seleccionada.
 * @var {number}
 */
let slot_arma_seleccionada = 1


/**
 * ? Contiene los ids de los botones para los atributos del personaje.
 * @const {string[]}
 */
const id_botones_atributos = ["ataqueBtn", "esquivaBtn", "bloqueoBtn", "velocidadBtn", "vidaBtn", "poderBtn"]
/**
 * ? Contiene los ids de los botones para las habilidades de un personaje.
 * @const {string[]}
 */
const id_botones_habilidades = ["habilidad1Btn", "habilidad2Btn", "habilidad3Btn"]
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
 * Contiene los ids botones direccionales [arriba, abajo] [izquierda, derecha].
 * @const {HTMLButtonElement}
 */
const id_botones_dirreccionales = [["arribaBtn", "abajoBtn"], ["izquierdaBtn", "derechaBtn"]]


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
/**
 * Contiene los botones arriba y abajo usados principalmente para modificar atributos.
 * @const {HTMLButtonElement}
 */
const botones_arriba_abajo = document.getElementById("btnMasMenos").children
/**
 * Contiene los botones izquierda y derecha usados principalmente navegar.
 * @const {HTMLButtonElement}
 */
const botones_izquierda_derecha = document.querySelector("#consola_container").querySelectorAll("div")
// ! VARIABLES PRINCIPALES




// ! HELPERS
/**
 * ? Limpia y oculta todos los modales en `lista`.
 * @param {Modal[]} lista - La lista con los modales
 */
function ocultar_modales(lista = elementos_mostrados) {
    while (lista.length) {
        const modal = lista.pop()
        modal.MostrarOcultarElemento()
    }
}
// TODO: Descartar función mostrar_modal, reemplazar por mostrar_elementos
/**
 * ? Muestra el modal, lo agrega a `lista` y oculta los demas si se indica.
 * @param {Modal} modal - El modal en cuestion.
 * @param {Modal[]} lista - La lista a la cual agregar `modal`.
 * @param {Boolean} ocultar_demas - Oculta los demas modales.
*/
function mostrar_modal(modal, lista = elementos_mostrados, ocultar_demas = true) {
    // if (ocultar_demas) ocultar_modales(lista) // Oculta todos los modales mostrados
    if (ocultar_demas) ocultar_elementos(elementos_mostrados)

    lista.push(modal); modal.MostrarOcultarElemento() // Lo agrega a `lista` y lo muestra
}
/**
 * ? Cambia el contenido de la consola.
 * @param {string} texto - El nuevo texto.
 */
function contenido_consola(texto) {
    // Convierte a string y capitaliza la primera letra.
    boton_consola.innerHTML = capitalizarPrimeraLetra(String(texto))
}

/**
 * ? Muestra elementos HTML cualquieras.
 * @param {HTMLElement[]} elementos - La lista de elementos a mostrar.
 * @param {string} display - El tipo de display.
 */
function mostrar_elementos(elementos, display) {
    // Muestra los elementos
    elementos.forEach(elemento => {
        // Si es un simple elementos HTML
        if (elemento instanceof HTMLElement) elemento.style.display = display
        // Si es la instancia de una clase. Ej: Modal
        else elemento.MostrarOcultarElemento()
    })

    // Los agrega a la lista
    elementos_mostrados.push(...elementos)
}
/**
 * ? Oculta elementos HTML cualquieras.
 * @param {HTMLElement[]} elementos - La lista de elementos a ocultar.
 */
function ocultar_elementos(elementos) {
    // Oculta los elementos
    elementos.forEach(elemento => {
        // Si es un simple elementos HTML
        if (elemento instanceof HTMLElement) elemento.style.display = "none"
        // Si es la instancia de una clase. Ej: Modal
        else elemento.MostrarOcultarElemento()
    })

    // Elimina los elementos de la lista
    for (let i = 0; i < elementos_mostrados.length; i++) {
        const objetivo = elementos[0]
        const actual = elementos_mostrados[i]
        if (actual.id === objetivo.id) {
            elementos_mostrados = elementos_mostrados.slice(0, i).concat(elementos_mostrados.slice(elementos.length))
        }
    }
}
/**
 * ? Muestra los botones direccionales izquierda y derecha.
 * @param {number} indice_personaje - El indice del personaje actual.
 */
function mostrar_ocultar_direccionales(indice_personaje) {
    const [izquierda, derecha] = botones_izquierda_derecha

    // Si uno esta oculto, y se estan visualizando los esbirros
    if (
        (izquierda.style.display === "none" || izquierda.style.display === "")
        && indice_personaje !== 0
    ) {
        mostrar_elementos(botones_izquierda_derecha, "block")
    }
    // Si se estan mostrando
    else {
        ocultar_elementos(botones_izquierda_derecha)
    }
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

    ocultar_elementos(elementos_mostrados) // Oculta todos los modales mostrados
}
boton_editar.addEventListener("click", cambiarModo) // Cambia de modo cada que se clickee boton_editar
// ! EDICION





// ! PERSONAJES
/**
 * ? Contiene el modal de avatares
 * @const {Modal}
 */
const modal_avatares = modales.avatares
/**
 * ? Contiene el modal de esbirros
 * @const {Modal}
 */
const modal_esbirros = modales.esbirros
// * Evento click que muestra el modal de avatares o esbirros
boton_portada.addEventListener("click", () => {
    // Si el juego esta en modo edicíon
    if (modo === "edicion") {
        // Si se trata de el avatar pricipal
        if (indice_personaje === 0) mostrar_modal(modal_avatares, elementos_mostrados)
        // Si se trata de algun esbirro
        else mostrar_modal(modal_esbirros, elementos_mostrados)
    }
})

/**
 * ? Muestra un aspecto del personaje pasado (atributos, nombre, descripción, etc.)
 * @param {Personaje} personaje - El personaje con la aspecto a mostrar.
 * @param {string} nombre_aspecto - El nombre de la aspecto a mostrar.
 */
function mostrar_aspecto_personaje(personaje, nombre_aspecto) {
    // Se guarda la aspecto, caso especial para los atributos
    const aspecto = personaje[nombre_aspecto] ? personaje[nombre_aspecto] : personaje.atributos[nombre_aspecto]

    let salida = "" // El texto final

    // Si es un objeto (Ej: arma, habildad), extrae el nombre
    if (typeof aspecto === "object") salida = aspecto.descripcion
    // Si es un numero o string comun
    else {
        // Si se trata de las descripción, muestra solamente el texto,
        // de lo contrario muestra el nombre del aspecto y su valor
        salida = nombre_aspecto === "descripcion"
            ? aspecto
            : `${capitalizarPrimeraLetra(nombre_aspecto)}: ${aspecto}`
    }

    contenido_consola(salida) // Muestra por consola la aspecto
}
// TODO: Refactorizar mostrar_personaje
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
    arma1_txt.textContent = capitalizarPrimeraLetra(personaje.arma1.nombre)
    // * Arma 2
    const arma2_img = document.getElementById("arma2Img") // Icóno
    arma2_img.src = personaje.arma2.icono
    const arma2_txt = document.getElementById("arma2Txt") // Nombre
    arma2_txt.textContent = capitalizarPrimeraLetra(personaje.arma2.nombre)


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
/**
 * ? Permite navegar entre los esbirros de forma bidireccional.
 * @param {Personaje[]} personajes - La lista con todos los personajes (avatar y esbirros).
 * @param {number} indice_esbirro - El indice del esbirro actual.
 * @param {string} direccion - La dirección hacia la cual navegar.
 * @returns {number} El indice nuevo del esbirro.
 */
function navegar_esbirros(personajes, indice_esbirro, direccion) {
    if (direccion === "izquierda") {
        // Si se trata del primer esbirro
        if (indice_esbirro === 1) indice_esbirro = personajes.length - 1 // Mueve el selector al ultimo esbirro
        // Si se trata de otro
        else indice_esbirro-- // Mueve el selector al esbirro anterior
    }
    if (direccion === "derecha") {
        // Si se trata del ultimo esbirro
        if (indice_esbirro === personajes.length - 1) indice_esbirro = 1 // Mueve el selector al primero
        // Si se trata de otro
        else indice_esbirro++ // Mueve el selector al siguiente
    }

    return indice_esbirro
}
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
        slot_arma_seleccionada = id[4] // Extrae el slot del id. Ej: arma1Txt => 1
        if (modo === "edicion") {
            mostrar_modal(modal_armas_marciales, elementos_mostrados)
        }
    })
})
// ! ARMAS





// ! EQUIPAMIENTO
const modal_equipos = modales.equipos
// ! EQUIPAMIENTO




// ! HABILIDADES
// ! HABILIDADES