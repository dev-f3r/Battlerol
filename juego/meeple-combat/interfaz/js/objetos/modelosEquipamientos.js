// TODO: Crear una lista con los nombres de los equipos
class Equipo extends EntidadBase {
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