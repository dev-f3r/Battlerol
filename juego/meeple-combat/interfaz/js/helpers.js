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

const atributos_default = {
    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,
    vida: 0,
    vidaMaxima: 0,
    poder: 0,
    poderMaximo: 0,
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
     * @param {Object} atributos - Los atributos de la entidad. Ej: Ataque, vida, etc.
     */
    constructor({
        nombre = "nada",
        descripcion = "Sin descripción.",
        icono = "img/nada.png",
        portada = "img/nada.png",
        atributos = atributos_default,
    }) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.icono = icono
        this.portada = portada
        this.atributos = atributos
    }

    /**
     * ? Cambia las propiedades actuales por otras.
     * @param {Object} nuevo - El objeto con las nuevas propiedades.
     */
    Actualizar(nuevo) {
        // * Propiedades generales
        this.nombre = nuevo.nombre
        this.descripcion = nuevo.descripcion
        this.portada = nuevo.portada

        // * Atributos
        for (const nombre in atributos_default) {
            this.atributos[nombre] = nuevo[nombre]
        }
    }

    cambiar_nombre = (nuevo) => {
        this.nombre = nuevo
    }

    get Nombre() {
        return this.nombre
    }
    get Descripcion() {
        return this.descripcion
    }
    get Portada() {
        return this.portada
    }
    get Atributos() {
        return this.atributos
    }

    set Nombre(nuevo) {
        this.nombre = nuevo
    }
    set Descripcion(nueva) {
        this.descripcion = nueva
    }
    set Portada(nueva) {
        this.portada = nueva
    }
    set Atributos(obj) {
        for (const nombre in atributos_default) {
            this.atributos[nombre] = obj[nombre]
        }
    }
}