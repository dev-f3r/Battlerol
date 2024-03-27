/**
 * ? Clase que representa un arma.
 * @class
 */
class Arma {
    /**
     * ? Constructor de la clase Arma.
     * @constructor
     * @param {string} nombre - El nombre del arma.
     * @param {string} icono - La ruta del icono.
     * @param {number} danno - El multiplicador de daño del arma.
     * @param {string} descripcion - La descripción del arma.
     */
    constructor({
        nombre = "",
        icono = "img/nada.png",
        danno = 0,
        descripcion = "sin descripción."
    }){
        this.nombre = nombre
        this.icono = icono
        this.danno = danno
        this.descripcion = descripcion
    }

    /**
     * Cambia las propiedades del arma actual por otras.
     */
    Actualizar = (nueva) => {
        Object.assign(this, nueva)
    }

    Ataquar = () => console.log("Ataque con arma")
}