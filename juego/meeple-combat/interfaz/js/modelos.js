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
        const id = `${this.nombre}_btn`
        const icono = `img/${this.nombre}ico.png`

        this.html =
            `<button class="${clases}" id="${id}" style="${estilos}">
                <img src="${icono}" alt="${this.nombre}" />
            </button>`
    }
}

class Modal {
    constructor(
        nombre = "",
        clases = [],
        estilos = [],
        botones = [],
    ) {
        this.nombre = nombre
        this.clases = clases
        this.estilos = estilos
        this.botones = botones

        this.html = ""

        this.armar()
    }

    armar() {
        const clases = this.clases.join(" ")
        const estilos = this.estilos.join(";")
        const id = `modal_${this.nombre}`

        let contenido = ""

        // ? Titulo
        contenido += `<div class="item-modal"><span class="texto">${this.nombre.toUpperCase()}</span></div>\n`
        // ? Boton cerrar modal
        contenido += `<button class="item-modal" id="cerrar_modal_${this.nombre}"><img src="img/cerrar.png"></button>\n`

        // ? Lista de botones
        for (let i = 0; i < this.botones.length; i++) {
            const boton = this.botones[i]
            if (i === this.botones.length - 1) {
                contenido += `<button class="item-modal"><img src="img/atras.png"></button>\n`
                contenido += `${boton.html}\n`
                contenido += `<button class="item-modal"><img src="img/adelante.png"></button>\n`
            } else {
                contenido += `${boton.html}\n`
            }
        }

        this.html =
            `<div class="${clases}" id="${id}" style="${estilos}">
                ${contenido}
            </div>`

    }
}