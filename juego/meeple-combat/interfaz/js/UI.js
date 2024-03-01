const botones = {
    "personajes": nombrePersonajes.map((nombre, i) => {
        const personaje = personajes[nombre]
        const filNombre = personaje.portada.match(/\/(.+?)\.png/)
        return new BotonModal(filNombre[1], ["item-modal"])
    }),
    "armas": [],
    "equipo": [],
}

const modales = Object.keys(botones).map(nombre => {
    const contenido = botones[nombre]
    return new Modal(nombre, ["modal"], ["display:grid"], contenido)
})

const main = document.getElementById("main")
// * Insertar los modales al final de #main
main.insertAdjacentHTML("beforeend", modales[0].html)