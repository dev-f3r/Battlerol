/**
 * ? Muestra los datos del personaje actual incluyendo imagen, atributos
 * ? y descripción.
 */
function mostrarPersonaje() {
    const atributos = ["ataque", "esquiva", "velocidad", "vida", "accion"]
    // Recorre las claves de atributo definidas
    // y actualiza los elementos de la UI
    atributos.forEach(key => {
        // Establece el valor del indicador 
        // al valor del atributo del personaje
        document.getElementById(`${key}Indicador`).textContent = personaje[key]
    })

    // Establece la imagen del personaje basado en la propiedad personaje.imagen
    imgPersonaje.src = personaje.imagen
}

/**
 * ? Restaura los valores originales del personaje actual
 */
function reestaurarPersonaje() {
    // Asigna las propiedades del personaje indicado
    // tomándolas del diccionario de personajes
    Object.assign(personaje, personajesDict[personaje.nombre])
}

/**
 * ? Muestra la imagen correspondiente al estado actual del personaje
 */
function mostrarEstado() {
    // Establece como fuente de la imagen de estado
    // el atributo imagen del estado general  
    imgEstado.src = estado.general.imagen
}

/**
 * ? Cambia el estado actual del personaje
 * @param {string} nombre - nombre del nuevo estado
 */
function cambiarEstado(nombre) {
    if (!estado) estado = {}
    // Asigna las propiedades del estado indicado
    // tomándolas del diccionario de estados

    Object.assign(estado, estadosDict[nombre])
    
}

/**
 * ? Modifica los atributos del personaje actual
 * ? basado en su estado y en efectos de cartas
 */
function modificarAtributosPersonaje() {
    const listaAtributos = ["ataque", "esquiva", "velocidad", "vida", "accion"]

    // Restaura los valores originales del personaje
    reestaurarPersonaje()

    // Si hay un estado activo
    if (estado) {
        // Recorre los atributos del estado
        for (const atributo in estado.atributos) {
            // No se admiten numeros negativos
            if ((personaje[atributo] + estado.atributos[atributo]) < 0) {
                personaje[atributo] = 0
            } else {
                // Suma el modificador del estado
                personaje[atributo] += estado.atributos[atributo]
            }
        }
    }

    // Si hay una carta
    if (carta) {
        // Recorre la lista de atributos
        listaAtributos.forEach(atributo => {
            // Verifica que el valor no sea negativo
            if ((personaje[atributo] + carta[atributo]) < 0) {
                personaje[atributo] = 0
            } else {
                // Suma el modificador de la carta
                personaje[atributo] += carta[atributo]
            }
        })
    }
}


/**
 * ? Cambia el personaje actual por otro
 * @param {string} nombre - nombre del nuevo personaje
 */
function cambiarPersonaje(nombre) {
    // Verifica si personaje está definido
    if (!personaje) personaje = {}
    // Asigna las propiedades del nuevo personaje 
    Object.assign(personaje, personajesDict[nombre])

    // Lucido es el estado por defecto
    cambiarEstado("lucido")
    mostrarEstado()
}

/**
 * ? Modifica la vida del personaje actual sumando o restando 1 punto
 * @param {string} accion - "mas" para sumar vida, "menos" para restar vida
 */
function modificarVida(accion) {
    // Verifica si se debe sumar o restar vida
    if (accion == "mas") {
        // Suma vida si está por debajo del máximo
        if (personaje.vida < 18) personaje.vida += 1
    } else {
        // Resta vida si está por encima del mínimo
        if (personaje.vida >= 1) personaje.vida -= 1
    }
    // Actualiza la UI
    mostrarPersonaje()
    // Muestra el nuevo valor de vida
    consolaPersonajeTxt(`Resistencia: ${personaje.vida}`)
}

/**
 * ? Muestra la descripcion de un atributo del personaje
 * @param {string} nombre - nombre del atributo
 */
function descripcionAtributo(nombre) {
    consolaPersonajeTxt(`${capitalizarPrimeraLetra(nombre)}: ${personaje[nombre]}`)
}


/**
 * ? Simula una acción de ataque, esquiva o movimiento
 * ? y muestra los resultados en la consola
 * 
 */
function atacar() {
    // Tira un dado de 6 caras 
    let dado = Math.floor(Math.random() * 6) + 1

    // El texto a mostrar
    let texto = "Ataque"
    if(carta && carta.tipo === "epicas") {
        texto += ` con ${carta.nombre.toLowerCase()}`
    }

    // Verifica si fue un critico
    if (dado === 6) {
        texto += `: ${dado}<br>Daño ${Math.floor(personaje.ataque * 1)}`
    }
    // Verifica si fue un fallo
    else if (dado === 1) {
        texto += `: ${dado}<br>Daño ${Math.floor(personaje.ataque * 0)}`
    }
    // Resultado normal
    else {
        texto += `: ${dado}<br>Daño ${Math.floor(personaje.ataque * 0.75)}`
    }

    // Muestra el resultado en la consola
    consolaPersonajeTxt(texto)

    if(carta && carta.tipo === "epicas") {
        const tmpvida = personaje.vida
        reestaurarPersonaje()
        personaje.vida = tmpvida
        cambiarCarta("normales", "SIGUE JUGANDO")
        mostrarCarta()
    }
}



{ // * Seleccion de personajes
    // Itera por cada identificador de personaje en el diccionario
    const idBtnPersonaje = Object.keys(personajesDict)

    // Recorre cada identificador y agrega un manejador de eventos
    idBtnPersonaje.forEach(id => {
        // Captura el click en el botón de un personaje
        document.getElementById(id).addEventListener('click', () => {
            // Cambia el personaje actual por el seleccionado
            cambiarPersonaje(id)
            // Muestra los datos del nuevo personaje
            mostrarPersonaje()
            // Cierra el modal de selección de personajes
            cerrarModalPersonaje.click()
            // Limpia el texto de la consola
            textoConsolaPersonaje.click()
            // Muestra la descripción del nuevo personaje
            consolaPersonajeTxt(personaje.descripcion)
        })
    })
}

{ // * Atributos
    // Itera sobre los identificadores de los botones de atributos
    const idBtnAtributo = ["ataque", "esquiva", "velocidad", "vida", "accion"]
    // Agrega un manejador de eventos a cada botón de atributo
    idBtnAtributo.forEach(id => {
        // Captura el click del botón de atributo
        document.getElementById(`${id}Btn`).addEventListener('click', () => {
            // Limpia la consola
            consolaPersonaje.click()

            // Establece el atributo
            atributo = id

            // Si hay un personaje seleccionado
            if (personaje) {
                // Si el atributo no es vida, muestra su descripción  
                if (id !== "vida") {
                    if (esBtnMasMenos) mostrarOcultarBtnMasMenos() // Si los botones + y - se estan mostrando los oculta
                    descripcionAtributo(id)
                }
                // Si el atributo es vida, muestra los botones más/menos
                else {
                    consolaPersonajeTxt(`Resistencia: ${personaje.vida}`)
                    mostrarOcultarBtnMasMenos() // Muestra los botones apenas se activan
                }
            }
            // Si no hay personaje seleccionado, muestra mensaje
            else consolaPersonajeTxt("Primero selecciona un personaje")
        })
    })
}

{ // * Seleccion de estado

    // Itera sobre los identificadores de los botones de estado
    const idBtnEstado = ["ebrio", "lucido", "extaciado"]
    idBtnEstado.forEach(estado => {
        // Agrega un manejador de eventos a cada botón de estado
        document.getElementById(estado).addEventListener('click', () => {
            // Limpia la consola de personaje
            consolaPersonaje.click()

            if (personaje) {
                // Cambia el estado del personaje
                cambiarEstado(estado)
                // Modifica los atributos según el estado
                vidaActual = personaje.vida
                modificarAtributosPersonaje()
                // Muestra el nuevo estado
                mostrarEstado()
                personaje.vida = vidaActual
                // Actualiza los datos del personaje
                mostrarPersonaje()
                
                

                
            } else {
                // Muestra mensaje si no hay personaje
                consolaPersonajeTxt("Primero selecciona un personaje")
            }

        })

        
    })
}