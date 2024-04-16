// * ARCHIVO DE LÓGICA PRINCIPAL

/**
 * ? Contiene todos las instancias de los personajes
 * @const {Personaje[]}
 */
const personajes = [
    new Personaje({
        nombre: "bienvenido",
        portada: "img/logo-meeple-combat.png",
        descripcion: "consola",
    }),
    new Personaje({
        nombre: "esbirro 1",
    }),
    new Personaje({
        nombre: "esbirro 2",
    }),
    new Personaje({
        nombre: "esbirro 3",
    }),
    new Personaje({
        nombre: "esbirro 4",
    }),
    new Personaje({
        nombre: "esbirro 5",
    }),
]

/**
 * ? Indica el indice del personaje seleccionado
 * @var {number}
 */
let indice_personaje = 0
/**
 * ? Contiene el indice de ultimo esbirro seleccionado
 */
let indice_esbirro = 1
/**
 * ? Indica el modo de juego
 * @var {string}
 */
let modo = "jugar"

/**
 * Contiene todos los botones de los avatares y esbirros
 * @const {BotonModal[]}
 */
const botones_personajes = botones.avatares.normales.concat(botones.esbirros.normales)
/**
 * ? Contiene los ids de todos los botones que representan un aspecto del personaje. Ej: atibutos, armas, habilidades, etc.
 * @const {string[]}
 */
const aspectos_personaje = [...id_botones_armas, ...id_botones_atributos, ...id_botones_equipamiento, ...id_botones_habilidades, "nombreBtn"]
/**
 * Contiene todos los botones de las armas.
 * @const {BotonModal[]}
 */
const botones_armas = botones.armas_marciales.normales.concat(botones.armas_naturales.normales)

/**
 * ? Permite el ingreso de comandos.
 * @param {string} comando - El comando que se quiere ingresar.
 */
function ingresar_comandos(comando) {
    // TODO: Agregar los comandos correspondientes
}

/**
 * ? Condiciona un determinado formulario (cambia su nombre, funcion de ingreso, etc.).
 * @param {Formulario} formulario - El formulario que se quiere condicionar.
 * @param {string} modo - El nuevo del formulario (comando, habilidad, nombre).
 */
function condicionar_formulario(formulario, modo) {
    let nueva_funcion = () => { }
    let nuevo_titulo = "Ingrese "
    switch (modo) {
        case "comando":
            nueva_funcion = ingresar_comandos
            nuevo_titulo += "el comando"
            break;
        // TODO: nombre habilidad, nombre personaje
        default:
            break;
    }

    formulario.Funcion_ingreso = nueva_funcion
    formulario.cambiar_encabezado = nuevo_titulo
}

// ! PERSONAJES
// * Evento click para cambiar personajes
botones_personajes.forEach(boton => {
    const personaje_nuevo = avatares[boton.nombre] ? avatares[boton.nombre] : esbirros[boton.nombre] // Trae el personaje correcto basandose en si es un esbirro o un avatar

    boton.FuncionClick = () => cambiar_personaje(personajes[indice_personaje], personaje_nuevo) // Estable la función click.
})
// * Evento click para pasar de avatar a esbirros
boton_esbirros.addEventListener("click", () => {
    [indice_personaje, indice_esbirro] = mostrar_esbirros(personajes, indice_personaje, indice_esbirro)
    mostrar_ocultar_direccionales(indice_personaje)
})
// * Evento click para navegar entre esbirros
botones_izquierda_derecha.forEach(boton => {
    boton.addEventListener("click", () => {
        const direccion = boton.id.slice(0, -3) // Obtiene la acción desde el id descartando "Btn".

        indice_personaje = navegar_esbirros(personajes, indice_esbirro, direccion) // Actualiza el indice de personaje mostrado.
        indice_esbirro = indice_personaje // Actualiza el indice de esbirro mostrado.

        mostrar_personaje(personajes[indice_personaje]) // Muestra el esbirro dependiendo de la dirección.
    })
})
// * Lógica para mostrar por consola los aspectos de los personajes.
aspectos_personaje.forEach(id => {
    const boton = document.getElementById(id) // Trae el boton correspondiente.
    const final = id.includes("arma") ? -6 : -3 // Caso particular para los id relacionados con armas.
    let nombre_aspecto = id.slice(0, final) // Filtra el nombre dejando la parte relevante. Ej: nombreBtn => nombre

    if (id === "portadaBtn" || id === "nombreBtn") nombre_aspecto = "descripcion" // Caso particular la portada debe mostrar el nombre

    // Evento click para mostrar un determinado aspecto
    boton.addEventListener("click", () => {
        // Si el modo de juego es "jugar" muestra la descripción del aspecto
        if (modo === "jugar") mostrar_aspecto_personaje(personajes[indice_personaje], nombre_aspecto)
        // Si el modo de juego es "edicion" muestra los controles para editar el aspecto
        else {
            if(id.includes("equipo")) mostrar_elementos([modal_equipos], modal_equipos.tipo_display)
            console.log("Editar", nombre_aspecto)
        }
    })
})
// ! PERSONAJES


// ! ARMAS
// Settea el función click para cada uno de los botones que cambian el arma.
botones_armas.forEach(boton => {
    boton.FuncionClick = () => cambiar_arma(personajes[indice_personaje], slot_arma_seleccionada, boton.nombre)
})
// ! ARMAS


// * Muestra los direccionales izquierda y derecha al clickear la portada.
boton_portada.addEventListener("click", () => {
    // Si esta en modo jugar
    if (modo === "jugar") mostrar_ocultar_direccionales(indice_personaje)
})

// * Evento para mostrar formulario para ingreso de comandos
// * Con el boton consola.
boton_consola.addEventListener("click", () => {
    if (modo === "edicion") {
        mostrar_elementos([formulario]) // Muestra el formulario
        condicionar_formulario(formulario, "comando") // Lo condiciona para poder ingresar comandos
    }
})
// TODO: Formulario para cambio de nombre de personajes y habilidades

mostrar_personaje(personajes[0]) // Muestra el personaje principal desde inició