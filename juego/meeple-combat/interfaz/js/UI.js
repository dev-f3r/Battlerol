// * ESTE ARCHIVO SE USA PARA GENERAR ELEMENTOS UI

// Maximo de botones generales (se excluyen los botones de navegacion) por modal.
const maximo_botones = 12

// Botones para cada modal.
const botones = {
    // ? Lista de botones para modal avatares
    "avatares": {
        "normales": nombre_avatares.map((nombre, i) => {
            // Extrae el avatar determinado de la colleción de avatares.
            const avatar = avatares[nombre]
            // El nombre se extrae de la portada 'img/<nombre>.png' del avatar
            const filNombre = avatar.portada.match(/\/(.+?)\.png/)
            // Si excede el maximo el boton se genera con "display: none;"
            const mostrar = i <= maximo_botones - 1 ? true : false

            return new BotonModal(filNombre[1], ["item-modal"], mostrar)
        }),
        "especial": new BotonModal("nuevopj", ["item-modal"], true)
    },
    // ? Lista de botones para modal armas
    "armas": {
        "normales": nombre_armas.map((nombre, i) => {
            // Extrae el arma determinada de la colleción de armas.
            const arma = armas1[nombre]
            // El nombre se extrae del icono 'img/<nombre>.png' del arma
            const filNombre = arma.icono.match(/\/(.+?)\.png/)
            // Si excede el maximo el boton se genera con "display: none;"
            const mostrar = i <= maximo_botones - 1 ? true : false

            return new BotonModal(filNombre[1], ["item-modal"], mostrar)
        }),
        "especial": new BotonModal("salvajes", ["item-modal"], true)
    },
    // ? Lista de botones para modal equipo
    "equipo": [],
}

// Lista de modales
const modales = Object.keys(botones).map(nombre => {
    // Se trae la lista de botones y se pasa a la clase
    const botones_normales = botones[nombre].normales
    // Se trae el botón especial
    const boton_especial = botones[nombre].especial

    return new Modal(nombre, ["modal"], ["display:none"], botones_normales, boton_especial, maximo_botones)
})

// Elemento contenedor de los modales
const main = document.getElementById("main")
// * Insertar los modales al final de #main
main.insertAdjacentHTML("beforeend", modales[0].html)
main.insertAdjacentHTML("beforeend", modales[1].html)