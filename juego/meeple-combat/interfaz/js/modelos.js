class BotonModal {
    constructor(
        nombre = "nada",
        // icono = "img/nada",
        // id = "",
        clases = [],
        estilos = [],
    ) {
        // this.icono = `img/${icono}ico.png`
        // this.id = `${id}BTN`
        this.nombre = nombre
        this.clases = clases
        this.estilos = estilos

        this.html = ""

        this.armar()
    }

    armar() {
        const clases = this.clases.join(" ")
        const estilos = this.estilos.join(";")
        const id = `${this.nombre}BTN`
        const icono = `img/${this.nombre}`

        this.html =
            `<button class="${clases}" id="${id}" style="${estilos}">
                <img src="${icono}" alt="${this.nombre}" />
            </button>`
    }
}