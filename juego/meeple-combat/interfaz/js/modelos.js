// * ESTE ARCHIVO CONTIENE LAS CLASES PARA GENERAR ELEMENTOS HTML DEL UI

/**
 * Clase que representa un botón HTML.
 */
class Boton {
    /**
     * Constructor de la clase Boton.
     * @param {string} nombre - El nombre del botón (id: nombre_btn).
     * @param {string[]} clases - Las clases CSS del botón.
     * @param {boolean} mostrar - Indica si el botón debe mostrarse o no (true: display: flex, false: display: none).
     * @param {HTMLElement} hijo - El elemento HTML que se insertará dentro del botón.
     */
    constructor(
        nombre = "nada",
        clases = [],
        mostrar = false,
        hijo = document.createElement('span')
    ) {
        this.nombre = nombre;
        this.clases = clases;
        this.mostrar = mostrar ? "flex" : "none"; // Establece el valor inicial de mostrar basado en el parámetro booleano
        this.hijo = hijo; // El elemento HTML que se insertará dentro del botón
        this.id = `${nombre}_btn`; // ID del botón

        this.elemento = document.createElement("button"); // Crea el elemento HTML <button>

        this.armar() // Arma el botón en cada instancia nueva
    }

    /**
     * Arma el botón HTML con sus propiedades y contenido.
     */
    armar() {
        const el = this.elemento

        el.classList.add(...this.clases); // Agrega las clases CSS al botón
        el.id = this.id; // Establece el ID del botón
        el.appendChild(this.hijo); // Inserta el elemento hijo dentro del botón
        el.style.display = this.mostrar; // Establece el estilo de visualización del botón
    }

    /**
     * Muestra el botón estableciendo su estilo de visualización a "flex".
     */
    mostrarBoton() {
        this.mostrar = "flex";
        this.elemento.style.display = this.mostrar;
    }

    /**
     * Oculta el botón estableciendo su estilo de visualización a "none".
     */
    ocultarBoton() {
        this.mostrar = "none";
        this.elemento.style.display = this.mostrar;
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
        const icono = document.createElement("img")

        // Dependiendo de si es un arma o un personaje el patron de ruta va a ser diferente
        icono.src = armas1[nombre] ? `img/${nombre}.png` : `img/${nombre}ico.png`

        // Llamada al constructor de la clase padre (Boton) con los parámetros proporcionados, incluyendo el icono.
        super(nombre, clases, mostrar, icono)
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
     * @param {BotonModal[]} botones - Los botones del modal.
     * @param {Boton} boton_especial - Botón con accion especial del modal.
     * @param {number} maximo_botones - El número máximo de botones permitidos en el modal (por defecto 13).
     */
    constructor(
        nombre = "",
        clases = [],
        estilos = [],
        botones = [],
        boton_especial = new BotonModal(),
        maximo_botones = 13,
    ) {
        this.nombre = nombre
        this.clases = clases
        this.estilos = estilos
        this.botones = botones
        this.boton_especial = boton_especial
        this.maximo_botones = maximo_botones

        // Creación de botones para navegación, cerrar, etc.
        this.boton_atras = new Boton(`atras_modal_${this.nombre}`, ["item-modal"], true, `<img src="img/atras.png">`)
        this.boton_adelante = new Boton(`adelante_modal_${this.nombre}`, ["item-modal"], true, `<img src="img/adelante.png">`)
        this.boton_cerrar = new Boton(`cerrar_modal_${this.nombre}`, ["item-modal"], true, `<img src="img/cerrar.png">`)

        // Modal ids
        this.id = `modal_${this.nombre}`
        this.id_boton_cerrar = this.boton_cerrar.id
        this.id_boton_adelante = this.boton_adelante.id
        this.id_boton_atras = this.boton_atras.id

        // Contenido HTML del modal
        this.html = ""


        // Si la cantidad de botones es menor a la maxima, se añaden botones para completar
        for (let i = this.botones.length; i < maximo_botones; i++) {
            this.botones.push(new BotonModal())
        }

        this.vistas = []
        for (let i = 0; i < this.botones.length; i += this.maximo_botones) {
            const parte = this.botones.slice(i, i + this.maximo_botones)
            this.vistas.push(parte)
        }

        this.index_vista = 0

        // Se llama al método armar() para generar el HTML del modal.
        this.armar()
    }

    /**
     * ? Arma el HTML del modal
     */
    armar() {
        const clases = this.clases.join(" ")
        const estilos = this.estilos.join(";")

        let contenido = ""

        // Se agrega el título del modal
        contenido += `<div class="item-modal"><span class="texto">${this.nombre.toUpperCase()}</span></div>`

        // Botón cerrar
        contenido += this.boton_cerrar.html

        // Se agregan los botones al contenido del modal
        for (let i = 0; i < this.botones.length; i++) {
            const boton = this.botones[i]
            if (i === this.maximo_botones - 1) {
                // Si se alcanza el máximo de botones permitidos, se agregan botones de navegación.

                // Añade el boton actual.
                contenido += boton.html

                contenido += this.boton_atras.html
                // Se inserta el boton especial entre los de navegación.
                contenido += this.boton_especial.html
                contenido += this.boton_adelante.html
            } else {
                contenido += `${boton.html}`
            }
        }

        // Se genera el HTML completo del modal
        this.html =
            `<div class="${clases}" id="${this.id}" style="${estilos}">
                ${contenido}
            </div>`
    }

    atras() {
        console.log("atras", this.nombre)
        if (this.botones.length > this.maximo_botones) {
            if (this.index_vista > 0) {
                this.index_vista--
            } else {
                this.index_vista = this.vistas.length - 1
            }

            this.mostrar_vista()
        }
    }

    adelante() {
        console.log("adelante", this.nombre)
        if (this.botones.length > this.maximo_botones) {
            if (this.index_vista < this.vistas.length - 1) {
                this.index_vista++
            } else {
                this.index_vista = 0
            }

            this.ocultar_vistas(this.index_vista)
            this.mostrar_vista(this.index_vista)
        }
    }

    mostrar_vista(index_vista) {
        const vista = this.vistas[index_vista]
        for (let i = 0; i < vista.length; i++) {
            const boton = vista[i]
            boton.mostrar_boton()
        }
    }

    ocultar_vistas(index_excluir) {
        for (let i = 0; i < this.vistas.length; i++) {
            const vista = this.vistas[i]
            if (i != index_excluir) {
                this.ocultar_vista(vista)
            }
        }
    }

    ocultar_vista(vista) {
        for (let i = 0; i < vista.length; i++) {
            const boton = vista[i]
            boton.ocultar_boton()
        }
    }
}