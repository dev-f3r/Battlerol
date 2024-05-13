/**
 * ? Cambia determinado personaje por otro.
 * @param {Personaje} actual - La instancia del personaje actual.
 * @param {Object} nuevo - El objeto con la información del nuevo personaje.
 */
function cambiar_personaje(actual, nuevo, actualizar = false) {
    actual.Actualizar(nuevo) // Actualiza

    mostrar_personaje(actual) // Muestra los cambios
    if(actualizar) cambiarModo() // Cierra el modo edición
}

// TODO: Lógica para modificar los atributos del personaje actual

// TODO: Lógica para cambiar las habilidades del personaje actual