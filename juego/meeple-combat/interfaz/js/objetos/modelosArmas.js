/**
 * ? Clase que representa un arma.
 * @class
 */
class Arma extends EntidadBase {
    /**
     * ? Constructor de la clase Arma.
     * @constructor
     * @param {string} nombre - El nombre del arma.
     * @param {string} icono - La ruta del icono.
     * @param {number} danno - El multiplicador de daño del arma.
     * @param {string} descripcion - La descripción del arma.
     */
    constructor({
        nombre = "nada",
        icono = "img/nada.png",
        danno = 0,
        descripcion = "sin descripción."
    }) {
        super({ nombre, icono, descripcion })
        this.danno = danno
    }

    /**
     * ? Actualiza las propiedades del arma por otras
     * @param {Object} nueva - El objeto con las nuevas propiedades.
     */
    Actualizar = (nueva) => {
        Object.assign(this, nueva)
    }

    Ataquar = () => console.log("Ataque con arma")
}