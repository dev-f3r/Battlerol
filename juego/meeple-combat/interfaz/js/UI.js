// * ESTE ARCHIVO SE USA PARA GENERAR ELEMENTOS UI

// Maximo de botones generales (se excluyen los botones de navegacion) por modal.
const maximo_botones = 13

// Botones para cada modal.
const botones = {
    // ? Lista de botones para modal avatares
    "avatares": nombreAvatares.map((nombre, i) => {
        // Extrae el avatar determinado de la colleción de avatares.
        const avatar = avatares[nombre]
        // El nombre se extrae de la portada 'img/<nombre>.png' del avatar
        const filNombre = avatar.portada.match(/\/(.+?)\.png/)
        // Si excede el maximo el boton se genera con "display: none;"
        const mostrar = i <= maximo_botones - 1 ? true : false

        return new BotonModal(filNombre[1], ["item-modal"], mostrar)
    }),
    // ? Lista de botones para modal armas
    "armas": [],
    // ? Lista de botones para modal equipo
    "equipo": [],
}

// Lista de modales
const modales = Object.keys(botones).map(nombre => {
    // Se trae la lista de botones y se pasa a la clase
    const contenido = botones[nombre]

    return new Modal(nombre, ["modal"], ["display:none"], contenido, maximo_botones)
})

// Elemento contenedor de los modales
const main = document.getElementById("main")
// * Insertar los modales al final de #main
main.insertAdjacentHTML("beforeend", modales[0].html)