/**
 * ? Muestra los datos de la carta actual
 */
function mostrarCarta() {
    // Imagen de la carta
    imgCarta.src = carta.imagen
    // Descripcion
    consolaCartaTxt(carta.descripcion)
}

/**
 * ? Cambia la carta actual
 */
function levantarCarta() {
    // Genera un numero aleatorio entre 1 y 9 
    let dado = Math.floor(Math.random() * 6) + 1
    // Suma la acción del personaje al valor del dado
    dado += personaje.accion

    // Define variables para el tipo y mazo de cartas
    let tipo = ""
    let maso = null

    // Verifica el valor del dado para asignar el tipo y mazo de cartas
    if (dado <= 6) {
        // Cartas normales
        maso = listaCartasNormales
        tipo = "normales"
    } else if (dado <= 9) {
        // Cartas especiales
        maso = listaCartasEspeciales
        tipo = "especiales"
    } else {
        // Cartas épicas
        maso = listaCartasEpicas
        tipo = "epicas"
    }

    // Obtiene un indice aleatorio del mazo 
    let indice = Math.floor(Math.random() * maso.length)

    // Obtiene el nombre de la carta elegida
    let nombreCarta = maso[indice]

    // Inicializa la carta actual si no existe
    if (!carta) carta = {}

    // Asigna las propiedades de la carta elegida
    cambiarCarta(tipo, nombreCarta)
}

/**
 * ? Cambia la carta actual por otra
 * ? En caso de tener la prop 'nuevo estado', tambien cambiara el estado del personaje
 * @param {tipo} string - El tipo de la nueva carta
 * @param {nombre} string - El nombre de la nueva carta
 */
function cambiarCarta(tipo, nombre) {
    const cartaNueva = cartasDict[tipo][nombre]
    Object.assign(carta, cartaNueva)
    carta["tipo"] = tipo
    if(cartaNueva["nuevo estado"]) {
        document.getElementById(carta["nuevo estado"]).click()
    }
}