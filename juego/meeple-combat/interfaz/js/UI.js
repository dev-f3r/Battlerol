const maximo_botones = 13

const botones = {
    "personajes": nombrePersonajes.map((nombre, i) => {
        const personaje = personajes[nombre]
        const filNombre = personaje.portada.match(/\/(.+?)\.png/)

        const mostrar = i <= maximo_botones - 1 ? true : false

        return new BotonModal(filNombre[1], ["item-modal"], mostrar)
    }),
    "armas": [],
    "equipo": [],
}

const modales = Object.keys(botones).map(nombre => {
    const contenido = botones[nombre]
    return new Modal(nombre, ["modal"], ["display:none"], contenido, maximo_botones)
})

const main = document.getElementById("main")
// * Insertar los modales al final de #main
main.insertAdjacentHTML("beforeend", modales[0].html)