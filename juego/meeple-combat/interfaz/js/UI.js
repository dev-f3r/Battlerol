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
            const filNombre = avatar.portada.match(/\/(.+?)\.png/)[1]
            // Si excede el maximo el boton se genera con "display: none;"
            const mostrar = i <= maximo_botones - 1 ? true : false

            return new BotonModal(filNombre, ["item-modal"], mostrar, `${filNombre}ico`)
        }),
        "especial": new BotonModal("nuevopj", ["item-modal"], true, "nuevopjico")
    },
    // ? Lista de botones para modal armas
    "armas": {
        "normales": nombre_armas.map((nombre, i) => {
            // Extrae el arma determinada de la colleción de armas.
            const arma = armas1[nombre]
            // El nombre se extrae del icono 'img/<nombre>.png' del arma
            const filNombre = arma.icono.match(/\/(.+?)\.png/)[1]
            // Si excede el maximo el boton se genera con "display: none;"
            const mostrar = i <= maximo_botones - 1 ? true : false

            return new BotonModal(filNombre, ["item-modal"], mostrar, filNombre)
        }),
        "especial": new BotonModal("salvajes", ["item-modal"], true, "salvajes")
    },
    // ? Lista de botones para modal equipo
    // "equipo": [],
    // "esbirros": [],
}

const modales = {}

Object.keys(botones).forEach(nombre => {
    modales[nombre] = new Modal(nombre, ["modal"], false, maximo_botones, botones[nombre].normales, botones[nombre].especial)
})

// Elemento contenedor de los modales
const main = document.getElementById("main")
for(const modal in modales) {
    main.appendChild(modales[modal].el())
}