let experiencia = 200

function consultar_experiencia() {
    return experiencia
}

function modificar_experiencia(modo, valor) {
    if (modo === 'aumentar') {
        experiencia += valor
    } else {
        experiencia -= valor
    }
}


// ? Contiene el costo de experiencia de cada atributo
const valorExperiencia = {
    ataque: 3,
    esquiva: 3,
    bloqueo: 3,
    velocidad: 6,
    poder: 1,
    vida: 1,
    vidaMaxima: 1,
    poderMaximo: 1
}

/**
 * ? Cambia determinado personaje por otro.
 * @param {Personaje} actual - La instancia del personaje actual.
 * @param {Object} nuevo - El objeto con la información del nuevo personaje.
 */
function cambiar_personaje(actual, nuevo, actualizar = false) {
    actual.Actualizar(nuevo) // Actualiza

    mostrar_personaje(actual) // Muestra los cambios
    if (actualizar) cambiarModo() // Cierra el modo edición
}

// TODO: Lógica para modificar los atributos del personaje actual

/**
 * Función para modificar los atributos de un personaje.
 * @param {Personaje} personaje - La instancia del personaje.
 * @param {string} atributo - El nombre del atributo a modificar.
 */
function modificar_atributos(personaje, atributo) {
    // Muestra el valor actual del atributo en la consola
    contenido_consola(`${capitalizarPrimeraLetra(atributo === "poder" ? "anima" : atributo)}: ${personaje.atributos[atributo]}`)
    // Muestra los botones de incrementar y decrementar
    mostrar_elementos([botones_arriba_abajo], "flex")

    // Evento click para incrementar el atributo
    botones_arriba_abajo.children[0].addEventListener("click", () => {
        incrementar_atributo(personaje, atributo)
    })
    // Evento click para decrementar el atributo
    botones_arriba_abajo.children[1].addEventListener("click", () => {
        decrementar_atributo(personaje, atributo)
    })

}

function mostrar_cambio_atributo(atributo, valor) {
    const elemento = document.querySelector(`#${atributo}Txt`)
    elemento.textContent = valor
}


/**
 * Incrementa el valor de un atributo del personaje si hay suficiente experiencia.
 * @param {Personaje} personaje - La instancia del personaje.
 * @param {string} atributo - El nombre del atributo a incrementar.
 */
function incrementar_atributo(personaje, atributo) {
    // ? valor de experiencia minimo requerido
    let valor = 0

    if (atributo === 'vidaMaxima' || atributo === 'poderMaximo') {
        valor = 1
    }
    else valor = (personaje.atributos[atributo] + 1) * valorExperiencia[atributo]

    // ? Si hay suficiente experiencia
    if (experiencia >= valor) {
        personaje.atributos[atributo]++

        data = `${capitalizarPrimeraLetra(atributo === "poder" ? "anima" : atributo)}: ${personaje.atributos[atributo]}`
        // * decrementar exp
        experiencia -= valor

        // * cambiar contenido mostrado
        contenido_consola(data)
    } else {
        contenido_consola("Experiencia insuficiente")
    }

    mostrar_cambio_atributo(atributo, personaje.atributos[atributo])
}

/**
 * Decrementa el valor de un atributo del personaje.
 * @param {Personaje} personaje - La instancia del personaje.
 * @param {string} atributo - El nombre del atributo a decrementar.
 */
function decrementar_atributo(personaje, atributo) {
    // ? valor de experiencia minimo requerido
    let valor = 0

    if (atributo === 'vidaMaxima' || atributo === 'poderMaximo') {
        valor = 1
    }
    else valor = (personaje.atributos[atributo] + 1) * valorExperiencia[atributo]

    // ? Si el atributo es mayor a 0
    if (personaje.atributos[atributo] > 0) {
        personaje.atributos[atributo]--

        data = `${capitalizarPrimeraLetra(atributo === "poder" ? "anima" : atributo)}: ${personaje.atributos[atributo]}`
        // * incrementar exp
        experiencia += valor

        // * cambiar contenido mostrado
        contenido_consola(data)
    }

    mostrar_cambio_atributo(atributo, personaje.atributos[atributo])
}


// TODO: Lógica para cambiar las habilidades del personaje actual