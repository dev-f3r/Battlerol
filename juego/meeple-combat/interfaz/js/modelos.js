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

    #funcionClick

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
        hijo = document.createElement('span'),
        funcionClick = () => console.log("click")
    ) {
        this.#nombre = nombre;
        this.#clases = clases;
        this.#mostrar = mostrar ? "flex" : "none"; // Establece el valor inicial de mostrar basado en el parámetro booleano
        this.#hijo = hijo; // El elemento HTML que se insertará dentro del botón
        this.#id = `${nombre}_btn`; // ID del botón

        this.#elemento = document.createElement("button"); // Crea el elemento HTML <button>

        this.#funcionClick = funcionClick

        this.ConstruirModal() // Arma el botón en cada instancia nueva
    }

    /**
     * Arma el botón HTML con sus propiedades y contenido.
     */
    ConstruirModal() {
        this.#elemento.classList.add(...this.#clases); // Agrega las clases CSS al botón
        this.#elemento.id = this.#id; // Establece el ID del botón
        this.#elemento.appendChild(this.#hijo); // Inserta el elemento hijo dentro del botón
        this.#elemento.style.display = this.#mostrar; // Establece el estilo de visualización del botón
        this.#elemento.addEventListener("click", this.#funcionClick) // Asigna la función que se ejecuta al clickear el botón.
    }

    /**
     * Devuelve el elemento principal del botón.
     * @returns {HTMLDivElement} 
     */
    get ElementoModal() {
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
        src = "",
        funcionClick = () => console.log("click")
    ) {
        // Se genera la ruta del icono del botón basado en su nombre.
        const icono = document.createElement("img")

        // Dependiendo de si es un arma o un personaje el patron de ruta va a ser diferente
        icono.src = src ? `img/${src}.png` : "img/nada.png"

        // Llamada al constructor de la clase padre (Boton) con los parámetros proporcionados, incluyendo el icono.
        super(nombre, clases, mostrar, icono, funcionClick)

        this.#icono = icono
    }
}

/**
 * ? Clase que representa un modal (ventana emergente con un menú de opciones).
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

    #vistas = []
    #index_vista = 0

    /**
     * Constructor de la clase Modal. Crea un modal con la estructura básica.
     * @param {string} nombre - Nombre que identifica al modal.
     * @param {string[]} clases - Clases CSS para aplicar estilos al modal.
     * @param {boolean} mostrar - Indica si el modal debe mostrarse inicialmente (true: visible, false: oculto).
     * @param {number} maximo_botones - Número máximo de botones generales permitidos (sin contar navegación ni botón especial).
     * @param {BotonModal[]} botones_gral - Arreglo con los botones generales del modal.
     * @param {Boton} boton_especial - Botón con una acción especial dentro del modal.
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
        this.#id = `modal_${nombre}` // ID del modal: Se genera un ID único a partir del nombre del modal.
        this.#clases = clases
        this.#mostrar = mostrar ? "grid" : "none" // Visibilidad inicial: Se establece la propiedad #mostrar según el valor del parámetro mostrar.
        this.#maximo_botones = maximo_botones

        // Elemento HTML principal: Se crea un elemento div como contenedor del modal.
        this.#elemento = document.createElement("div")

        this.#botones_gral = botones_gral
        this.#boton_especial = boton_especial

        // Construcción del modal: Se llama al método ConstruirModal() para construir la estructura HTML del modal.
        this.ConstruirModal()
    }

    /**
     * Construye la estructura HTML del modal y sus elementos.
     */
    // TODO: Refactorizar el codigo de este metodo
    ConstruirModal() {
        // * Creación de los elementos principales
        const titulo = this.GenerarTituloModal()
        const botonesNavegacion = this.CrearBotonesNavegacion()
        this.#boton_atras = botonesNavegacion[0]
        this.#boton_adelante = botonesNavegacion[1]
        this.#boton_cerrar = this.CrearBotonCerrar()

        // * Lógica de botones generales 
        if (this.#botones_gral.length > this.#maximo_botones) {
            this.CrearBotonesGenerales()
        }

        this.#vistas = this.#CrearVista(this.#botones_gral, this.#maximo_botones) // Crea las vistas

        // * Agregar elementos al modal
        this.#elemento.appendChild(titulo) // Titulo
        this.#elemento.appendChild(this.#boton_cerrar.ElementoModal) // Boton cerrar
        this.#botones_gral.forEach(boton => {
            this.#elemento.appendChild(boton.ElementoModal) // Botones generales
        })
        this.#elemento.appendChild(this.#boton_atras.ElementoModal) // Boton atras
        this.#elemento.appendChild(this.#boton_especial.ElementoModal) // Boton especial
        this.#elemento.appendChild(this.#boton_adelante.ElementoModal) // Botone adelante

        // * Configuración final del modal
        this.#elemento.classList.add(...this.#clases) // Clases del modal
        this.#elemento.id = this.#id // Id del modal
        this.#elemento.style.display = this.#mostrar // Visibilidad del modal
    }


    /**
     * Genera el elemento HTML para el título del modal.
     * @returns {HTMLDivElement} El elemento div que contiene el título.
     */
    GenerarTituloModal() {
        const div_titulo = document.createElement('div')
        const span_titulo = document.createElement('span')

        div_titulo.classList.add('item-modal')
        span_titulo.classList.add('texto')

        span_titulo.textContent = 'ARMAS'

        div_titulo.appendChild(span_titulo)

        return div_titulo
    }

    /**
     * Crea botones generales adicionales en caso de ser necesario para mantener un diseño equilibrado.
     */
    CrearBotonesGenerales() {
        const restantes = this.#maximo_botones - (this.#botones_gral.length % this.#maximo_botones)

        for (let i = 0; i < restantes; i++) {
            this.#botones_gral.push(new BotonModal())
        }
    }

    /**
     * Crea las vistas a partir de los botones generales.
     * @param {BotonModal[]} arr - Arreglo con los botones generales del modal.
     * @param {number} tamaño - Número de botones por vista.
     * @returns {[BotonModal[]]} Arreglo de vistas.
     */
    #CrearVista(arr, tamaño) {
        let salida = []
        for (let i = 0; i < arr.length; i += tamaño) {
            salida.push(arr.slice(i, i + tamaño))
        }

        return salida
    }

    /**
     * Crea los botones de navegación del modal (atrás y adelante).
     * @returns {BotonModal[]} Arreglo con los botones de navegación.
     */
    CrearBotonesNavegacion() {
        const boton_atras = new BotonModal(`atras_modal_${this.#nombre}`, ["item-modal"], true, "atras", this.CambiarVistaAtras)
        const boton_adelante = new BotonModal(`adelante_modal_${this.#nombre}`, ["item-modal"], true, "adelante", this.CambiarVistaAdelante)

        return [boton_atras, boton_adelante]
    }

    /**
     * Crea el botón para cerrar el modal.
     * @returns {BotonModal} El botón de cierre.
     */
    CrearBotonCerrar() {
        const boton_cerrar = new BotonModal(`cerrar_modal_${this.#nombre}`, ["item-modal"], true, "cerrar")

        return boton_cerrar
    }

    /**
     * Devuelve el elemento principal del modal (el contenedor div).
     * @returns {HTMLDivElement} 
     */
    get ElementoModal() {
        return this.#elemento
    }

    /**
     * Cambia a la vista siguiente
     */
    CambiarVistaAdelante = () => {
        if (this.#index_vista < this.#vistas.length - 1) {
            this.#index_vista++
        } else {
            this.#index_vista = 0
        }
        const vista = this.#vistas[this.#index_vista]

        this.#MostrarVista(vista)
        this.#OcultarVistas(this.#index_vista)
    }

    /**
     * Cambia a la vista anterior.
     */
    CambiarVistaAtras() {
        if (this.#index_vista > 0) {
            this.#index_vista--
        } else {
            this.#index_vista = this.#vistas.length - 1
        }
        const vista = this.#vistas[this.#index_vista]

        this.#MostrarVista(vista)
        this.#OcultarVistas(this.#index_vista)
    }

    /**
     * Muestra los botones de una vista.
     * @param {BotonModal[]} vista - Vista a mostrar.
     */
    #MostrarVista(vista) {
        vista.forEach(boton => boton.mostrarBoton())
    }

    /**
     * Oculta las vistas que no sean la actual.
     * @param {number} ignorar - Índice de la vista que se debe ignorar.
     */
    #OcultarVistas(ignorar) {
        for (let i = 0; i < this.#vistas.length; i++) {
            const vista = this.#vistas[i]
            if (i != ignorar) {
                this.#OcultarVista(vista)
            }
        }
    }

    /**
     * Oculta los botones de una vista.
     * @param {BotonModal[]} vista - Vista a ocultar.
     */
    #OcultarVista(vista) {
        vista.forEach(boton => boton.ocultarBoton())
    }
}