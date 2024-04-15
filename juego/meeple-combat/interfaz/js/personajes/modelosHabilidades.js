/**
 * ? Clase que representa una habilidad.
 * @class
 */
class Habilidad extends EntidadBase {
    /**
     * ? Constructor de la clase Habilidad.
     * @constructor
     * @param {string} nombre - El nombre de la habilidad.
     * @param {string} descripcion - La descripción de la habilidad.
     * @param {number} coste - El costo de uso de la habilidad.
     */
    constructor({
        nombre = "",
        descripcion = "sin descripción.",
        coste = 0,
    }) {
        super({ nombre, descripcion })
        this.coste = coste
    }

    /**
     * ? Actualiza las propiedades de una habilidad por las de otra
     * @param {Object} nueva - El objeto que contiene las nuevas propiedades.
     */
    Actualizar = (nueva) => {
        Object.assign(this, nueva)
    }
}