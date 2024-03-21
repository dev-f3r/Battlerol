// * Máximo de botones generales por modal (excluye navegación y especial):
const maximo_botones = 12

// * Botones para cada modal:
const botones = {
    // * Botones para modal avatares:
    "avatares": {
        "normales": nombre_avatares.map((nombre, i) => {
            // Extrae el avatar de la colección.
            const avatar = avatares[nombre]
            // Obtiene el nombre del archivo.
            const filNombre = avatar.portada.match(/\/(.+?)\.png/)[1]
            // Visibilidad según el límite de botones.
            const mostrar = i <= maximo_botones - 1 ? true : false

            return new BotonModal(filNombre, ["item-modal"], mostrar, `${filNombre}ico`, "flex")
        }),
        "especial": new BotonModal("nuevopj", ["item-modal"], true, "nuevopjico", "flex"),
    },
    // * Botones para modal armas:
    "armas_marciales": {
        "normales": nombre_armas_marciales.map((nombre, i) => {
            // Extrae el arma de la colección.
            const arma = armas_marciales[nombre]
            // Obtiene el nombre del archivo.
            const filNombre = arma.icono.match(/\/(.+?)\.png/)[1]
            // Visibilidad según el límite de botones.
            const mostrar = i <= maximo_botones - 1 ? true : false

            return new BotonModal(filNombre, ["item-modal"], mostrar, filNombre, "flex")
        }),
        "especial": new BotonModal(
            "salvajes",
            ["item-modal"],
            true,
            "salvajes",
            "flex",
            () => { modales.armas_naturales.MostrarOcultarElemento(); modales.armas_marciales.MostrarOcultarElemento() }
        ),
    },
    "armas_naturales": {
        "normales": nombre_armas_naturales.map((nombre, i) => {
            // Extrae el arma de la colección.
            const arma = armas_naturales[nombre]
            // Obtiene el nombre del archivo.
            const filNombre = arma.icono.match(/\/(.+?)\.png/)[1]
            // Visibilidad según el límite de botones.
            const mostrar = i <= maximo_botones - 1 ? true : false

            return new BotonModal(filNombre, ["item-modal"], mostrar, filNombre, "flex")
        }),
        "especial": new BotonModal(
            "salvajes",
            ["item-modal"],
            true,
            "marciales",
            "flex",
            () => { modales.armas_marciales.MostrarOcultarElemento(); modales.armas_naturales.MostrarOcultarElemento() }),
    }
    // TODO: configurar los botones de los modales restantes
    // "equipo": [],
    // "esbirros": [],
}

// * Diccionario de modales:
const modales = {}

// * Crea un modal para cada tipo de botón:
Object.keys(botones).forEach(nombre => {
    let nombre_modal = ""

    // Personalización de nombre para modal
    if (nombre === "armas_marciales") nombre_modal = "armas marciales"
    else if (nombre === "armas_naturales") nombre_modal = "armas naturales"
    else nombre_modal = nombre

    modales[nombre] = new Modal(
        nombre_modal,
        ["modal"],
        false,
        "grid",
        maximo_botones,

        botones[nombre].normales,
        botones[nombre].especial,
    )
})

// * Elemento contenedor de los modales:
const main = document.getElementById("main")

// * Agrega cada modal al contenedor:
for (const modal in modales) {
    main.appendChild(modales[modal].Elemento)
}