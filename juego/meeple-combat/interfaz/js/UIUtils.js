let modo = "jugar"

const boton_editar = document.getElementById("editarBtn")
boton_editar.addEventListener("click", () => {
    if(modo === "jugar") modo = "edicion"
    else modo = "jugar"
})

const botones_modales_personajes = ["portadaBtn"]
botones_modales_personajes.forEach(id => {
    const el = document.getElementById(id)
    el.addEventListener("click", () => {
        if(modo === "edicion") modales.avatares.MostrarOcultarElemento()
    })
})

const botones_modales_armas = ["arma1ImgBtn", "arma1TxtBtn", "arma2ImgBtn", "arma2TxtBtn"]
botones_modales_armas.forEach(id => {
    const el = document.getElementById(id)
    el.addEventListener("click", () => {
        if(modo === "edicion") modales.armas_marciales.MostrarOcultarElemento()
    })
})