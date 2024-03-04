// * ESTE ARCHIVO CONTIENE LAS CLASES PARA GENERAR EL HTML DE ALGUNOS ELEMENTOS DEL UI

/**
 * ? Clase que representa un botón HTML.
 */
class Boton {
    /**
     * ? Constructor de la clase Boton.
     * @param {string} nombre - El nombre del botón (id: nombre_btn).
     * @param {string[]} clases - Las clases CSS del botón.
     * @param {boolean} mostrar - Indica si el botón debe mostrarse o no (true: display: flex, false: display: none).
     * @param {string} contenido - El contenido dentro del botón.
     */
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

        // Se llama al método armar() para generar el HTML del botón.
        this.armar()
    }

    /**
     * ? Arma el HTML del boton
     */
    armar() {
        const clases = this.clases.join(" ")
        const mostrar = this.mostrar ? "display: flex;" : "display: none;"
        const id = `${this.nombre}_btn`

        this.html = `<button class="${clases}" id="${id}" style="${mostrar}">${this.contenido}</button>`
    }
}

/**
 * ? Clase que representa un botón HTML.
 */
class BotonModal extends Boton {
    /**
     * ? Constructor de la clase Boton (id: "nombre"_btn, imgsrc: img/"nombre"ico.png).
     * @param {string} nombre - El nombre del botón.
     * @param {string[]} clases - Las clases CSS del botón.
     * @param {boolean} mostrar - Indica si el botón debe mostrarse o no (true: display: flex, false: display: none).
     * @param {string} contenido - El contenido dentro del botón.
     */
    constructor(
        nombre = "nada",
        clases = [],
        mostrar = false,
    ) {
        // Se genera la ruta del icono del botón basado en su nombre.
        const icono = `img/${nombre}ico.png`

        // Llamada al constructor de la clase padre (Boton) con los parámetros proporcionados, incluyendo el icono.
        super(nombre, clases, mostrar, `<img src="${icono}" alt="${nombre}" />`)

        // Se llama al método armar() para generar el HTML del botón.
        this.armar()
    }
}

/**
 * ? Clase que representa un modal (menu de opciones emergente).
 */
class Modal {
    /**
     * ? Constructor de la clase Modal (id: modal_"nombre", ).
     * @param {string} nombre - El nombre del modal.
     * @param {string[]} clases - Las clases CSS del modal.
     * @param {string[]} estilos - Los estilos CSS adicionales del modal.
     * @param {Boton[]} botones - Los botones del modal.
     * @param {number} maximo_botones - El número máximo de botones permitidos en el modal (por defecto 13).
     */
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

        // Se llama al método armar() para generar el HTML del modal.
        this.armar()
    }

    /**
     * ? Arma el HTML del modal
     */
    armar() {
        const clases = this.clases.join(" ")
        const estilos = this.estilos.join(";")
        const id = `modal_${this.nombre}`

        let contenido = ""

        // Se agrega el título del modal
        contenido += `<div class="item-modal"><span class="texto">${this.nombre.toUpperCase()}</span></div>`

        // Se crea el botón para cerrar el modal
        const boton_cerrar = new Boton(`cerrar_modal_${this.nombre}`, ["item-modal"], true, `<img src="img/cerrar.png">`)
        contenido += boton_cerrar.html

        // Se agregan los botones al contenido del modal
        for (let i = 0; i < this.botones.length; i++) {
            const boton = this.botones[i]
            if (i === this.maximo_botones - 1) {
                // Si se alcanza el máximo de botones permitidos, se agregan botones de navegación

                const boton_atras = new Boton(`atras_modal_${this.nombre}`, ["item-modal"], true, `<img src="img/atras.png">`)
                const boton_adelante = new Boton(`adelante_modal_${this.nombre}`, ["item-modal"], true, `<img src="img/adelante.png">`)

                contenido += boton_atras.html
                contenido += boton.html
                contenido += boton_adelante.html
            } else {
                contenido += `${boton.html}`
            }
        }

        // Se genera el HTML completo del modal
        this.html =
            `<div class="${clases}" id="${id}" style="${estilos}">
                ${contenido}
            </div>`

    }
}