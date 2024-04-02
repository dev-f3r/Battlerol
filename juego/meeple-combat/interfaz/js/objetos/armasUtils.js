/**
 * ? Cambia determinada arma por otra.
 * @param {Personaje} personaje - La instancia del personaje actual.
 * @param {number} slot - El slot del arma a cambiar.
 * @param {string} nueva - El nombre de la nueva arma.
 */
function cambiar_arma(personaje, slot, nueva) {
    personaje.ConfigurarArma(slot, nueva) // Actualiza

    mostrar_personaje(personaje) // Muestra los cambios
    cambiarModo() // Cierra el modo edición
}