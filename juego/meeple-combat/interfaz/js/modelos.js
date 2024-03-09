// * ESTE ARCHIVO CONTIENE LAS CLASES PARA GENERAR ELEMENTOS HTML DEL UI

/**
 * ? Clase que representa un botón HTML.
 */
class Boton {

    #nombre
    #clases
    #mostrar
    #hijo
    #id
    #elemento

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
        this.#nombre = nombre;
        this.#clases = clases;
        this.#mostrar = mostrar ? "flex" : "none"; // Establece el valor inicial de mostrar basado en el parámetro booleano
        this.#hijo = hijo; // El elemento HTML que se insertará dentro del botón
        this.#id = `${nombre}_btn`; // ID del botón

        this.#elemento = document.createElement("button"); // Crea el elemento HTML <button>

        this.armar() // Arma el botón en cada instancia nueva
    }

    /**
     * Arma el botón HTML con sus propiedades y contenido.
     */
    armar() {
        this.#elemento.classList.add(...this.#clases); // Agrega las clases CSS al botón
        this.#elemento.id = this.#id; // Establece el ID del botón
        this.#elemento.appendChild(this.#hijo); // Inserta el elemento hijo dentro del botón
        this.#elemento.style.display = this.#mostrar; // Establece el estilo de visualización del botón
    }

    el() {
        return this.#elemento
    }

    /**
     * Muestra el botón estableciendo su estilo de visualización a "flex".
     */
    mostrarBoton() {
        this.#mostrar = "flex";
        this.#elemento.style.display = this.#mostrar;
    }

    /**
     * Oculta el botón estableciendo su estilo de visualización a "none".
     */
    ocultarBoton() {
        this.#mostrar = "none";
        this.#elemento.style.display = this.#mostrar;
    }
}

/**
 * ? Clase que representa un botón HTML con icono.
 */
class BotonModal extends Boton {

    #icono

    /**
     * ? Constructor de la clase Boton (id: "nombre"_btn, imgsrc: img/"nombre"ico.png).
     * @param {string} nombre - El nombre del botón.
     * @param {string[]} clases - Las clases CSS del botón.
     * @param {boolean} mostrar - Indica si el botón debe mostrarse o no (true: display: flex, false: display: none).
     * @param {string} src - El nombre del icono.
     */
    constructor(
        nombre = "nada",
        clases = [],
        mostrar = false,
        src = ""
    ) {
        // Se genera la ruta del icono del botón basado en su nombre.
        const icono = document.createElement("img")

        // Dependiendo de si es un arma o un personaje el patron de ruta va a ser diferente
        icono.src = src ? `img/${src}.png` : "img/nada.png"

        // Llamada al constructor de la clase padre (Boton) con los parámetros proporcionados, incluyendo el icono.
        super(nombre, clases, mostrar, icono)

        this.#icono = icono
    }
}

/**
 * ? Clase que representa un modal (menu de opciones emergente).
 */
class Modal {

    #nombre
    #id
    #clases
    #mostrar
    #maximo_botones


    #elemento

    #botones_gral
    #boton_cerrar
    #boton_especial
    #boton_atras
    #boton_adelante

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
        mostrar = false,
        maximo_botones = 12,

        botones_gral = [],
        boton_especial = new BotonModal(),
    ) {
        this.#nombre = nombre
        this.#id = `modal_${nombre}`
        this.#clases = clases
        this.#mostrar = mostrar ? "grid" : "none"
        this.#maximo_botones = maximo_botones

        this.#elemento = document.createElement("div")

        this.#botones_gral = botones_gral
        this.#boton_especial = boton_especial

        // Se llama al método armar().
        this.armar()
    }

    /**
     * ? Arma el HTML del modal
     */
    armar() {
        // Titulo
        const titulo = this._titulo()

        // Navegación
        const botonesNavegacion = this._botonesNavegacion()
        this.#boton_atras = botonesNavegacion[0]
        this.#boton_adelante = botonesNavegacion[1]
        console.log(this.#boton_adelante, this.#boton_atras)

        // Cierre de modal
        this.#boton_cerrar = this._botonCerrar()
        // Botones generales
        if (this.#botones_gral.length > this.#maximo_botones) {
            this._botonesGenerales()
        }

        // Agrega los elementos al modal
        this.#elemento.appendChild(titulo)

        this.#elemento.appendChild(this.#boton_cerrar.el())

        this.#botones_gral.forEach(boton => {
            this.#elemento.appendChild(boton.el())
        })

        // Navegacion y especial
        this.#elemento.appendChild(this.#boton_atras.el())
        this.#elemento.appendChild(this.#boton_especial.el())
        this.#elemento.appendChild(this.#boton_adelante.el())

        // Estilos, id y clases
        this.#elemento.classList.add(...this.#clases)
        this.#elemento.id = this.#id
        this.#elemento.style.display = this.#mostrar
    }

    _titulo() {
        const div_titulo = document.createElement('div')
        const span_titulo = document.createElement('span')

        div_titulo.classList.add('item-modal')
        span_titulo.classList.add('texto')

        span_titulo.textContent = 'ARMAS'

        div_titulo.appendChild(span_titulo)

        return div_titulo
    }

    _botonesGenerales() {
        const restantes = this.#maximo_botones - (this.#maximo_botones % this.#botones_gral)

        for(let i = 0; i < restantes; i++) {
            this.#botones_gral.push(new BotonModal())
        }
    }

    _botonesNavegacion() {
        const boton_atras = new BotonModal(`atras_modal_${this.#nombre}`, ["item-modal"], true, "atras")
        const boton_adelante = new BotonModal(`adelante_modal_${this.#nombre}`, ["item-modal"], true, "adelante")

        return [boton_atras, boton_adelante]
    }

    _botonCerrar() {
        const boton_cerrar = new BotonModal(`cerrar_modal_${this.#nombre}`, ["item-modal"], true, "cerrar")

        return boton_cerrar
    }

    el() {
        return this.#elemento
    }
}