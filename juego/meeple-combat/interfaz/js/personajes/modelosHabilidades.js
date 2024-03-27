// TODO: Crear una clase para las habilidades
// Debe lucir asi:
// { nombre: "sk 1", coste: 0, descripcion: "dc sk 1" },

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
}