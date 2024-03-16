let modo = "jugar"
const boton_editar = document.getElementById("editarBtn")

function cambiarModo() {
    if (modo === "jugar") {
        modo = "edicion"
        boton_editar.children[0].src = "img/guardar.png"
    } else {
        modo = "jugar"
        boton_editar.children[0].src = "img/editar.png"
    }
}

boton_editar.addEventListener("click", cambiarModo)

const botones_modales_personajes = ["portadaBtn"]
botones_modales_personajes.forEach(id => {
    const el = document.getElementById(id)
    el.addEventListener("click", () => {
        if (modo === "edicion") modales.avatares.MostrarOcultarElemento()
    })
})

const botones_modales_armas = ["arma1ImgBtn", "arma1TxtBtn", "arma2ImgBtn", "arma2TxtBtn"]
botones_modales_armas.forEach(id => {
    const el = document.getElementById(id)
    el.addEventListener("click", () => {
        if (modo === "edicion") modales.armas_marciales.MostrarOcultarElemento()
    })
})