class Boton {
    constructor(
        nombre = "nada",
        clases = [],
        mostrar = false,
        contenido = ""
    ) {
        this.nombre = nombre
        this.clases = clases
        this.mostrar = mostrar
        this.contenido = contenido

        this.html = ""

        this.armar()
    }

    armar() {
        const clases = this.clases.join(" ")
        const mostrar = this.mostrar ? "display: flex;" : "display: none;"
        const id = `${this.nombre}_btn`

        this.html = `<button class="${clases}" id="${id}" style="${mostrar}">${this.contenido}</button>`
    }
}

class BotonModal extends Boton {
    constructor(
        nombre = "nada",
        clases = [],
        mostrar = false,
    ) {
        const icono = `img/${nombre}ico.png`

        super(nombre, clases, mostrar, `<img src="${icono}" alt="${nombre}" />`)

        this.armar()
    }
}

class Modal {
    constructor(
        nombre = "",
        clases = [],
        estilos = [],
        botones = [],
        maximo_botones = 13,
    ) {
        this.nombre = nombre
        this.clases = clases
        this.estilos = estilos
        this.botones = botones
        this.maximo_botones = maximo_botones

        this.html = ""

        this.armar()
    }

    armar() {
        const clases = this.clases.join(" ")
        const estilos = this.estilos.join(";")
        const id = `modal_${this.nombre}`

        let contenido = ""

        // ? Titulo
        contenido += `<div class="item-modal"><span class="texto">${this.nombre.toUpperCase()}</span></div>`
        // ? Boton cerrar modal
        const boton_cerrar = new Boton(`cerrar_modal_${this.nombre}`, ["item-modal"], true, `<img src="img/cerrar.png">`)
        contenido += boton_cerrar.html

        // ? Lista de botones
        for (let i = 0; i < this.botones.length; i++) {
            const boton = this.botones[i]
            if (i === this.maximo_botones - 1) {
                const boton_atras = new Boton(`atras_modal_${this.nombre}`, ["item-modal"], true, `<img src="img/atras.png">`)
                const boton_adelante = new Boton(`adelante_modal_${this.nombre}`, ["item-modal"], true, `<img src="img/adelante.png">`)

                contenido += boton_atras.html
                contenido += boton.html
                contenido += boton_adelante.html
            } else {
                contenido += `${boton.html}`
            }
        }

        this.html =
            `<div class="${clases}" id="${id}" style="${estilos}">
                ${contenido}
            </div>`

    }
}