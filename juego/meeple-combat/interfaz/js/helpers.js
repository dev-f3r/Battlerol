/**
 * ? Quita cualquier tipo de acentuación.
 * @param {string} text - El texto a modificar.
 * @returns {string} El texto sin acentos.
 */
function quitarAcentos(text) {
    return text
        .normalize('NFD') // Descopone caracteres acentuados en su caracter base y su acento.
        .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos.
}

/**
 * ? Capitaliza la primera letra de un string.
 *
 * @param {string} texto - El string que se va a capitalizar.
 * @returns {string} - El string con la primera letra en mayúscula.
 */
function capitalizarPrimeraLetra(texto) {
    // Verifica si el texto está vacío o es nulo y devuelve el mismo texto sin cambios
    if (!texto) {
        return texto
    }

    // Capitaliza la primera letra del texto y la concatena con el resto del texto en minúsculas
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
}

/**
 * ? Elimina los espacios en una cadena de texto.
 * @param {string} texto - El texto con espacios.
 * @returns {string} El texto si espacios.
 */
function quitarEspacios(texto) {
    return texto
        .split(" ") // Crea un arreglo usando como separador los espacios.
        .join("") // Une el arreglo en un string.
}

/**
 * ? Clase con propiedades basicas de uso general.
 * @class
 */
class EntidadBase {
    /**
     * @constructor
     * @param {string} nombre - El nombre
     * @param {string} descripcion - La descripción.
     * @param {string} icono - La ruta del iconó.
     * @param {string} portada - La ruta de la portada.
     */
    constructor({
        nombre = "nada",
        descripcion = "Sin descripción.",
        icono = "img/nada.png",
        portada = "img/nada.png",
    }) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.icono = icono
        this.portada = portada
    }

    /**
     * ? Cambia las propiedades actuales por otras.
     */
    Actualizar = (nuevo) => {
        Object.assign(this, nuevo)
    }
}