// * Máximo de botones generales por modal (excluye navegación):
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

            return new BotonModal(filNombre, ["item-modal"], mostrar, `${filNombre}ico`)
        }),
        "especial": new BotonModal("nuevopj", ["item-modal"], true, "nuevopjico"),
    },
    // * Botones para modal armas:
    "armas": {
        "normales": nombre_armas.map((nombre, i) => {
            // Extrae el arma de la colección.
            const arma = armas1[nombre]
            // Obtiene el nombre del archivo.
            const filNombre = arma.icono.match(/\/(.+?)\.png/)[1]
            // Visibilidad según el límite de botones.
            const mostrar = i <= maximo_botones - 1 ? true : false

            return new BotonModal(filNombre, ["item-modal"], mostrar, filNombre)
        }),
        "especial": new BotonModal("salvajes", ["item-modal"], true, "salvajes"),
    },
    // TODO: configurar los botones de los modales restantes
    // "equipo": [],
    // "esbirros": [],
}

// * Diccionario de modales:
const modales = {}

// * Crea un modal para cada tipo de botón:
Object.keys(botones).forEach(nombre => {
    modales[nombre] = new Modal(
        nombre,
        ["modal"],
        false,
        maximo_botones,
        botones[nombre].normales,
        botones[nombre].especial,
    )
})

// * Elemento contenedor de los modales:
const main = document.getElementById("main")

// * Agrega cada modal al contenedor:
for (const modal in modales) {
    main.appendChild(modales[modal].getElementoModal())
}
