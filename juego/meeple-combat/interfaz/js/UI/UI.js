// * Máximo de botones generales por modal (excluye navegación y especial):
const maximo_botones = 12

// * Helpers
/**
 * ? Crea una lista con los botones a partir de una lista con nombres de objetos.
 * ? Estos botones pueden estar mostrados u ocultos.
 * @param {string[]} lista - La lista con nombres de objetos.
 * @param {Object.<string, Object>} coleccion - La colección en la que se basa la lista de nombres.
 * @param {string} propiedad - La propiedad de los objetos de la colección donde esta el nombre del icono.
 * @param {number} maximo - El máximo de botones visibles.
 * @param {string} terminacion - La expresión en la que termina el icono.
 * @returns {BotonModal[]} Una lista con los botones creados.
 */
function armar_lista_botones(lista, coleccion, propiedad, maximo, terminacion = "") {
    return lista.map((nombre, i) => {
        const objeto = coleccion[nombre] // Extrae el objeto de la colección.
        const nombre_obj = objeto[propiedad].match(/\/([a-z]+?)\.png/)[1] // Obtiene el nombre del icono.

        const mostrar = i <= maximo - 1 ? true : false // Visivilidad según el maximo.

        return new BotonModal(
            nombre_obj,
            ["item-modal"],
            mostrar,
            nombre_obj + terminacion,
            "flex",
        ) // Creación de la intancia
    })
}

// * Botones para cada modal:
const botones = {
    // * Botones para modal avatares:
    "avatares": {
        "normales": armar_lista_botones(nombre_avatares, avatares, "portada", maximo_botones, "ico"),
        "especial": new BotonModal("nuevopj", ["item-modal"], true, "nuevopjico", "flex"),
    },
    // * Botones para modal armas:
    "armas_marciales": {
        "normales": armar_lista_botones(nombre_armas_marciales, armas_marciales, "icono", maximo_botones),
        "especial": new BotonModal(
            "salvajes",
            ["item-modal"],
            true,
            "salvajes",
            "flex",
            () => { ocultar_modales(); mostrar_modal(modales.armas_naturales) }
        ),
    },
    "armas_naturales": {
        "normales": armar_lista_botones(nombre_armas_naturales, armas_naturales, "icono", maximo_botones),
        "especial": new BotonModal(
            "salvajes",
            ["item-modal"],
            true,
            "marciales",
            "flex",
            () => { ocultar_modales; mostrar_modal(modales.armas_marciales) }),
    },
    "esbirros": {
        "normales": armar_lista_botones(nombre_esbirros, esbirros, "portada", maximo_botones, "ico"),
        "especial": new BotonModal("nuevoesbirro", ["item-modal"], true, "nuevopjico", "flex"),
    },
    "equipos": {
        "normales": armar_lista_botones(nombre_equipos, equipos, "icono", maximo_botones),
        // TODO: Retocar clases para una mejor creación de elementos de relleno
        "especial": new BotonModal(
            "nada",
            ["item-modal"],
            true,
            "nada",
            "flex"
        ),
    },
}

// * Diccionario de modales:
const modales = {}

// * Crea un modal para cada tipo de botón:
Object.keys(botones).forEach(nombre => {
    let nombre_modal = ""

    // Personalización de nombre para modal
    if (nombre === "armas_marciales") nombre_modal = "armas marciales"
    else if (nombre === "armas_naturales") nombre_modal = "armas naturales"
    else nombre_modal = nombre

    modales[nombre] = new Modal(
        nombre_modal, // Nombre
        ["modal"], // Clases
        false, // Mostrar
        "grid", // Tipo display
        maximo_botones, // Numero de botones grales

        botones[nombre].normales, // Botones grales
        botones[nombre].especial, // Botone especial
    )
})

// * Elemento contenedor de los modales:
const main = document.getElementById("main")

// * Agrega cada modal al contenedor:
for (const modal in modales) {
    main.appendChild(modales[modal].Elemento)
}

const formulario = new Formulario("texto", ["contenedor-input"], "flex", false)
main.appendChild(formulario.Elemento)