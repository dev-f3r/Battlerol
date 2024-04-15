class Equipo extends EntidadBase {
    /**
     * ? Constructor de la clase Equipo
     * @constructor
     * @param {string} nombre - El nombre del equipo.
     * @param {string} icono - El icono del equipo.
     * @param {string} descripcion - La descripción.
     * @param {object} atributos - Los atributos. Ej: ataque, vida, etc.
     */
    constructor({
        nombre = "",
        icono = "img/nada.png",
        descripcion = "sin descripción.",

        atributos = atributos_default,
    }) {
        super({nombre, icono, descripcion, atributos})
    }

    /**
     * ? Actualiza las propiedades del equipo por otras.
     * @param {Object} nuevo - El objeto con las nuevas propiedades
     */
    Actualizar = (nuevo) => {
        super.Actualizar(nuevo)
    }
}