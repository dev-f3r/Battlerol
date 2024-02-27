// Previene la seleccion de texto
document.onselectstart = function() {
    return false;
}

/**
 * ? Contiene la información del personaje seleccionado actualmente
 * @var {object} personaje
 */
let personaje = null
/**
 * ? Contiene la información del estado del personaje
 * @var {object} estado
 */
let estado = null
/**
 * ? Contiene la información de la carta seleccionada actualmente
 * @var {object} - carta
 */
let carta = null
/**
 * ? Contiene el nombre del atributo seleccionado actualmente
 * @var {string}
 */
let atributo = null

/**
 * ? Indica si el modal de selección de personajes está visible
 * @var {boolean}
 */
let esModalAvatar = false
/**
 * ? Indica si el modal de cambio de estado está visible
 * @var {boolean}
 */
let esModalCambioEstado = false
/**
 * ? Indica si el botón para abrir el modal de personajes está visible
 * @var {boolean}
 */
let esBtnCambiar = false
/**
 * ? Indica si los botones para modificar vida están visibles
 * @var {boolean}
 */
let esBtnMasMenos = false


/**
 * ? Mestra u oculta los botones + y -
 */
function mostrarOcultarBtnMasMenos() {
    // Verifica si los botones están visibles
    if (esBtnMasMenos) {
        // Oculta los botones
        esBtnMasMenos = false
        btnMasMenos.style.display = "none"
    } else {
        // Hace visibles los botones
        esBtnMasMenos = true
        btnMasMenos.style.display = "flex"
    }
}

/**
 * ? Muestra u oculta el boton cambiar
 */
function mostrarOcultarBtnCambiar() {
    if (esBtnCambiar) {
        // Oculta el boton
        esBtnCambiar = false
        btnCambiarPersonaje.style.display = "none"
    } else {
        // Hace visible el boton
        esBtnCambiar = true
        btnCambiarPersonaje.style.display = "flex"
    }
}

/**
 * ? Muestra u oculta el modal de personajes
 */
function mostrarOcultarModalPersonajes() {
    // Verifica si el modal esta visible
    if (esModalAvatar) {
        // Oculta el modal
        modalAvatares.style.display = "none"
        // Actualiza la bandera
        esModalAvatar = false
    } else {
        // Muestra el modal
        modalAvatares.style.display = "grid"
        // Actualiza la bandera
        esModalAvatar = true
    }
}

/**
 * ? Muestra u oculta el modal de estado
 */
function mostrarOcultarModalCambioEstado() {
    // Verifica si el modal esta visible
    if (esModalCambioEstado) {
        // Oculta el modal
        modalCambioEstado.style.display = "none"
        // Actualiza la bandera
        esModalCambioEstado = false
    } else {
        // Muestra el modal
        modalCambioEstado.style.display = "grid"
        // Actualiza la bandera
        esModalCambioEstado = true
    }

    
}

{ // * Triggers
    { // * Modal Personajes
        // ? Captura el click del boton de personaje
        personajeBtn.addEventListener('click', () => {
            // Limpia la consola
            consolaPersonaje.click()

            // Si ya hay un personaje seleccionado muestra su descripcion
            if (personaje) consolaPersonajeTxt(personaje.descripcion)
            // Caso contrario indica que se debe seleccionar uno
            else consolaPersonajeTxt("Selecciona un personaje")

            // Muestra el boton para cambiar personaje
            mostrarOcultarBtnCambiar()
        })

        // ? Captura el click del boton para mostrar el modal de personajes
        btnCambiarPersonaje.addEventListener('click', () => {
            // Limpia la consola
            consolaPersonaje.click()
            // Muestra el modal de personajes
            mostrarOcultarModalPersonajes()
        })

        // ? Captura el click del boton para cerrar el modal de personajes
        cerrarModalPersonaje.addEventListener('click', () => {
            // Oculta el modal de personajes
            modalAvatares.style.display = "none"
            // Actualiza la bandera
            esModalAvatar = false
        })
    }

    { // * Modal estado
        // ? Captura el click del boton para cambio de estado
        estadoBtn.addEventListener('click', () => {
            // Limpia la consola
            consolaPersonaje.click()
            mostrarOcultarModalCambioEstado()
        })

        cerrarModalEstados.addEventListener('click', () => {
            // Oculta el modal de cambio de estado
            modalCambioEstado.style.display = "none"
            esModalCambioEstado = false
        })
    }

    // ? Captura el click de la consola de personaje
    // ? Limpia la consola por completo
    consolaPersonaje.addEventListener('click', () => {
        // Reestablece el texto
        consolaPersonajeTxt("CONSOLA")
        // Oculta el boton para cambio de personaje si esta activo
        if (esBtnCambiar) mostrarOcultarBtnCambiar()
        // Oculta los botones + y - si estan activos
        if (esBtnMasMenos) mostrarOcultarBtnMasMenos()
        // Cierra el modal de personajes si está abierto
        if (esModalAvatar) mostrarOcultarModalPersonajes()
        // Cierra el modal de estados si está abierto  
        if (esModalCambioEstado) mostrarOcultarModalCambioEstado()
    })

    { // * Botones + y -
        // Identificadores de los botones de mas y menos vida
        const idsBotones = ["mas", "menos"]

        // Recorre los identificadores
        idsBotones.forEach(idBoton => {
            // Obtiene la referencia al boton 
            const boton = document.getElementById(`${idBoton}Btn`)

            // Agrega un manejador al evento contextmenu para prevenir el menú contextual
            boton.addEventListener('contextmenu', (event) => {
                event.preventDefault();
            })

            // Agrega un manejador al evento click
            boton.addEventListener('click', () => {
                // Ejecuta la funcion para sumar o restar vida
                modificarVida(idBoton)
            })

            // Timer que se ejecuta mientras se mantiene presionado el boton
            let timerPresionado

            function iniciarTimer() {
                // Inicia el timer de ejecucion mientras se mantiene presionado
                timerPresionado = setInterval(() => {
                    // Ejecuta la funcion para sumar o restar vida
                    modificarVida(idBoton)
                }, 100)
            }

            // * Eventos para dispositivos de escritorio 
            // Agrega un manejador al evento mousedown 
            boton.addEventListener('mousedown', () => {
                iniciarTimer()
            })
            // Agrega un manejador al evento mouseup
            window.addEventListener('mouseup', () => {
                // Detiene el timer
                clearInterval(timerPresionado)
            })
            // Agrega manejadores para los eventos mouseout y mouseleave
            boton.addEventListener('mouseout', () => {
                clearInterval(timerPresionado)
            })
            boton.addEventListener('mouseleave', () => {
                clearInterval(timerPresionado)
            })

            // * Eventos para dispositivos moviles
            boton.addEventListener('touchstart', () => {
                iniciarTimer()
            })
            window.addEventListener('touchend', () => {
                // Detiene el timer
                clearInterval(timerPresionado)
            })
        })
    }

    // ? Captura el click del boton para levantar una carta
    // ? Se levanta una carta aleatoria
    btnLevantarCarta.addEventListener('click', () => {
        // Si hay un personaje
        if (personaje) {
            // Guarda la vida actual del personaje
            vidaActual = personaje.vida
            // Tira una carta aleatoria
            levantarCarta()
            // La muestra
            mostrarCarta()
            // La carta modifica el personaje
            modificarAtributosPersonaje()
            // Asigna la vida anterior al reinicio del personaje
            personaje.vida = vidaActual
            // Se muestran los cambios del personaje
            mostrarPersonaje()
            consolaPersonajeTxt("CONSOLA")
        }
        // Si no hay un personaje se pide uno
        else consolaPersonajeTxt("Primero selecciona un personaje")
    })

    btnAtacar.addEventListener('click', () => {
        // Si hay un personaje
        if (personaje) {
            atacar()
        }
        // Si no hay un personaje se pide uno
        else consolaPersonajeTxt("Primero selecciona un personaje")
    })
}

{ // * Helpers
    /**
     * ? Cambia el contenido de la consola de personajes
     * @param {string} txt - el texto nuevo
     */
    function consolaPersonajeTxt(txt) {
        textoConsolaPersonaje.innerHTML = txt
    }

    /**
     * ? Cambia el contenido de la consola de cartas
     * @param {string} txt - el texto nuevo
     */
    function consolaCartaTxt(txt) {
        textoConsolaCarta.innerHTML = txt
    }

    /**
     * ? Capitaliza la primera letra de una cadena
     * @param {string} palabra - La palabra a capitalizar
     * @returns {string} La palabra con la primera letra en mayúscula
     */
    function capitalizarPrimeraLetra(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1)
    }
}