// * ESTE ARCHIVO CONTIENE LAS CLASES PARA GENERAR ELEMENTOS HTML DEL UI

/**
 * ? Superclase que representa un elemento HTML.
 */
class ElementoHTML {
    nombre
    clases
    mostrar
    tipo_display
    id
    funcionClick

    hijo
    elemento

    /**
     * Constructor de la clase ElementoHTML.
     * @param {string} nombre - El nombre del elemento.
     * @param {string[]} clases - Las clases CSS del elmento.
     * @param {boolean} mostrar - Indica si el elemento debe mostrarse.
     * @param {string} tipo_display - El tipo de display que tomara si decide mostrarse.
     * @param {HTMLElement} hijo - El elemento HTML que se insertará dentro del botón.
     * @param {HTMLElement} elemento - El elemento HTML principal.
     * @param {Function} funcionClick - La función que se ejecutara cuando se clickee el elemento.
     */
    constructor(
        nombre = "nada",
        clases = [],
        mostrar = false,
        tipo_display = "block",
        hijo = document.createElement('span'),
        elemento = document.createElement("div"),
        funcionClick = () => { }
    ) {
        this.nombre = nombre;
        this.clases = clases;
        this.mostrar = mostrar;
        this.tipo_display = tipo_display
        this.funcionClick = funcionClick;

        this.hijo = hijo;
        this.elemento = elemento
    }

    /**
     * Arma el botón HTML con sus propiedades y contenido.
     */
    ConstruirElemento() {
        this.elemento.classList.add(...this.clases)
        this.elemento.style.display = this.mostrar ? this.tipo_display : "none";
        this.elemento.addEventListener("click", this.funcionClick);
    }

    /**
     * Muestra u oculta el elemento estableciendo su estilo de visualización a `this.tipo_display`.
     */
    MostrarOcultarElemento() {
        // * Lo muestra
        if (this.mostrar) {
            this.mostrar = false
            this.elemento.style.display = "none"
        }
        // * Lo oculta
        else {
            this.mostrar = true
            this.elemento.style.display = this.tipo_display
        }
    }

    // Metodos getter para acceder a campos privados
    get Nombre() {
        return this.nombre;
    }
    get Clases() {
        return this.clases;
    }
    get Mostrar() {
        return this.mostrar;
    }
    get Hijo() {
        return this.hijo;
    }
    get Id() {
        return this.id;
    }
    get Elemento() {
        return this.elemento;
    }
    get FuncionClick() {
        return this.funcionClick;
    }

    // Metodos setter para campos privados
    set Nombre(nombre) {
        this.nombre = nombre;
    }
    set Clases(clases) {
        this.clases = clases;
    }
    set Mostrar(mostrar) {
        this.mostrar = mostrar;
    }
    set Hijo(hijo) {
        this.hijo = hijo;
    }
    set Id(id) {
        this.id = id;
    }
    set FuncionClick(funcionClick) {
        this.funcionClick = funcionClick;
        this.elemento.addEventListener("click", funcionClick)
    }
}

/**
 * ? Clase que representa un botón HTML.
 */
class Boton extends ElementoHTML {
    /**
     * Constructor de la clase Boton.
     * @param {string} nombre - El nombre del botón (id: nombre_btn).
     * @param {string[]} clases - Las clases CSS del botón.
     * @param {boolean} mostrar - Indica si el botón debe mostrarse o no (true: display: flex, false: display: none).
     * @param {string} tipo_display - El tipo de display que tomara si decide mostrarse.
     * @param {HTMLElement} hijo - El elemento HTML que se insertará dentro del botón.
     * @param {Function} funcionClick - La función que se ejecutara cuando se clickee el botón.
     */
    constructor(
        nombre = "nada",
        clases = [],
        mostrar = false,
        tipo_display = "flex",
        hijo = document.createElement('span'),
        funcionClick = () => { }
    ) {
        const elemento = document.createElement("button")
        super(nombre, clases, mostrar, tipo_display, hijo, elemento, funcionClick)
        this.id = `${this.nombre}_btn`

        this.ConstruirElemento()
    }

    /**
     * Arma el botón HTML con sus propiedades y contenido.
     */
    ConstruirElemento = () => {
        super.ConstruirElemento()
        this.elemento.appendChild(this.hijo)
        this.elemento.id = this.id
    }
}

/**
 * ? Clase que representa un botón HTML con icono.
 */
class BotonModal extends Boton {
    icono

    /**
     * Constructor de la clase Boton (id: "nombre"_btn, imgsrc: img/"nombre"ico.png).
     * @param {string} nombre - El nombre del botón.
     * @param {string[]} clases - Las clases CSS del botón.
     * @param {boolean} mostrar - Indica si el botón debe mostrarse o no (true: display: flex, false: display: none).
     * @param {string} src - El nombre del icono.
     * @param {string} tipo_display - El tipo de display que tomara si decide mostrarse.
     * @param {Function} funcionClick - La función que se ejecutara cuando se clickee el botón.
     */
    constructor(
        nombre = "nada",
        clases = [],
        mostrar = false,
        src = "",
        tipo_display = "flex",
        funcionClick = () => { }
    ) {
        // Se genera la ruta del icono del botón basado en su nombre.
        const icono = document.createElement("img")

        // Dependiendo de si es un arma o un personaje el patron de ruta va a ser diferente
        icono.src = src ? `img/${src}.png` : "img/nada.png"

        // Llamada al constructor de la clase padre (Boton) con los parámetros proporcionados, incluyendo el icono.
        super(nombre, clases, mostrar, tipo_display, icono, funcionClick)

        this.icono = icono
    }
}


/**
 * ? Clase que representa un modal (ventana emergente con un menú de opciones).
 */
class Modal extends ElementoHTML {

    maximo_botones

    botones_gral
    boton_cerrar
    boton_especial
    boton_atras
    boton_adelante

    vistas = []
    index_vista = 0

    /**
     * Constructor de la clase Modal. Crea un modal con la estructura básica.
     * @param {string} nombre - Nombre que identifica al modal.
     * @param {string[]} clases - Clases CSS para aplicar estilos al modal.
     * @param {boolean} mostrar - Indica si el modal debe mostrarse inicialmente (true: visible, false: oculto).
     * @param {string} tipo_display - El tipo de display que tomara en caso de mostrarse.
     * @param {number} maximo_botones - Número máximo de botones generales permitidos (sin contar navegación ni botón especial).
     * @param {BotonModal[]} botones_gral - Arreglo con los botones generales del modal.
     * @param {Boton} boton_especial - Botón con una acción especial dentro del modal.
     */
    constructor(
        nombre = "",
        clases = [],
        mostrar = false,
        tipo_display = "grid",
        maximo_botones = 12,

        botones_gral = [],
        boton_especial = new BotonModal(),
    ) {
        const elemento = document.createElement("div")

        super(nombre, clases, mostrar, tipo_display, "", elemento, () => { })

        this.maximo_botones = maximo_botones
        this.botones_gral = botones_gral
        this.boton_especial = boton_especial

        this.id = `modal_${nombre}`

        this.ConstruirElemento()
    }

    /**
     * Construye la estructura HTML del modal y sus elementos.
     */
    // TODO: Refactorizar el codigo del metodo ConstruirElemento en clase Modal
    ConstruirElemento() {
        // * Creación de los elementos principales
        const titulo = this.GenerarTituloModal()
        const botonesNavegacion = this.CrearBotonesNavegacion()
        this.boton_atras = botonesNavegacion[0]
        this.boton_adelante = botonesNavegacion[1]
        this.boton_cerrar = this.CrearBotonCerrar()

        // * Lógica de botones generales 
        if (this.botones_gral.length > this.maximo_botones) {
            this.CrearBotonesGenerales()
        }

        this.vistas = this.CrearVista(this.botones_gral, this.maximo_botones) // Crea las vistas

        // * Agregar elementos al modal
        this.elemento.appendChild(titulo) // Titulo
        this.elemento.appendChild(this.boton_cerrar.Elemento) // Boton cerrar
        this.botones_gral.forEach(boton => {
            this.elemento.appendChild(boton.Elemento) // Botones generales
        })
        this.elemento.appendChild(this.boton_atras.Elemento) // Boton atras
        this.elemento.appendChild(this.boton_especial.Elemento) // Boton especial
        this.elemento.appendChild(this.boton_adelante.Elemento) // Botone adelante

        // * Configuración final del modal
        super.ConstruirElemento()
        this.elemento.id = this.id // Id del modal
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

        span_titulo.textContent = this.nombre.toUpperCase()

        div_titulo.appendChild(span_titulo)

        return div_titulo
    }

    /**
     * Crea botones generales adicionales en caso de ser necesario para mantener un diseño equilibrado.
     */
    CrearBotonesGenerales() {
        const maximo = this.maximo_botones
        const longitud = this.botones_gral.length

        let restantes = 0
        // Si la longitud de los botones es menor al maximo por vista
        // Ej: 9 < 12: restantes = 3
        if (longitud < maximo) {
            restantes = maximo - longitud
        }
        // Si la longitud de los botones es mayor y no es multiplo del maximo por vista
        // Ej: 13 > 12 && 13 % 12 = 1: restantes = 11
        else if (longitud > maximo && longitud % maximo !== 0) {
            const resto = longitud % maximo
            restantes = maximo - resto
        }

        if (longitud !== maximo) {
            for (let i = 0; i < restantes; i++) {
                this.botones_gral.push(new BotonModal())
            }
        }
    }

    /**
     * Crea las vistas a partir de los botones generales.
     * @param {BotonModal[]} botones - Arreglo con los botones generales del modal.
     * @param {number} tamaño - Número de botones por vista.
     * @returns {[BotonModal[]]} Arreglo de vistas.
     */
    CrearVista(botones, tamaño) {
        let salida = []

        // Divide el arreglo con los botones de partes de longitud `tamaño`
        for (let i = 0; i < botones.length; i += tamaño) {
            salida.push(botones.slice(i, i + tamaño))
        }

        return salida
    }

    /**
     * Crea los botones de navegación del modal (atrás y adelante).
     * @returns {BotonModal[]} Arreglo con los botones de navegación.
     */
    CrearBotonesNavegacion() {
        const boton_atras = new BotonModal(
            `atras_modal_${this.nombre}`,
            ["item-modal"],
            true,
            "atras",
            "flex",
            () => this.CambiarVista("atras"),
        )
        const boton_adelante = new BotonModal(
            `adelante_modal_${this.nombre}`,
            ["item-modal"],
            true,
            "adelante",
            "flex",
            () => this.CambiarVista("adelante"),
        )

        return [boton_atras, boton_adelante]
    }

    /**
     * Crea el botón para cerrar el modal.
     * @returns {BotonModal} El botón de cierre.
     */
    CrearBotonCerrar() {
        // Funcion del boton
        const cerrar_modal = () => {
            cambiarModo() // Cambia a modo jugar.
        }

        // Creacion del boton
        const boton_cerrar = new BotonModal(
            `cerrar_modal_${this.nombre}`,
            ["item-modal"],
            true,
            "cerrar",
            "flex",
            cerrar_modal
        )

        return boton_cerrar
    }

    /**
     * Incrementa la propiedad index_vista
     */
    IncrementarIndexVista = () => {
        if (this.index_vista < this.vistas.length - 1) {
            this.index_vista++
        } else {
            this.index_vista = 0
        }
    }
    /**
     * Decrementa la propiedad index_vista
     */
    DecrementarIndexVista = () => {
        if (this.index_vista > 0) {
            this.index_vista--
        } else {
            this.index_vista = this.vistas.length - 1
        }
    }

    /**
     * Cambia a la vista siguiente o anterior.
     * @param {String} accion - La direccion a donde cambiar.
     */
    CambiarVista = (accion) => {
        // No hace nada si solo hay una vista.
        if (this.vistas.length <= 1) return

        switch (accion) {
            case "adelante":
                this.IncrementarIndexVista()
                break
            case "atras":
                this.DecrementarIndexVista()
                break
            default:
                console.error("CambiarVista: Accion no reconocida", accion)
                break;
        }

        this.MostrarVista(this.index_vista) // Muestra la vista requerida.
        this.OcultarVistas(this.index_vista) // Oculta las demas.
    }

    /**
     * Muestra los botones de una vista.
     * @param {BotonModal[]} vista - Vista a mostrar.
     */
    MostrarVista(index) {
        // Recorre la vista y oculta cada botón.
        this.vistas[index].forEach(boton => boton.MostrarOcultarElemento())
    }

    /**
     * Oculta las vistas que no sean la actual.
     * @param {number} ignorar - Índice de la vista que se debe ignorar.
     */
    OcultarVistas(ignorar) {
        for (let i = 0; i < this.vistas.length; i++) {
            const vista = this.vistas[i]
            if (i != ignorar) {
                this.OcultarVista(vista)
            }
        }
    }

    /**
     * Oculta los botones de una vista.
     * @param {BotonModal[]} vista - Vista a ocultar.
     */
    OcultarVista(vista) {
        vista.forEach(boton => boton.MostrarOcultarElemento())
    }

    MostrarOcultarElemento() {
        super.MostrarOcultarElemento()

        // Reestablece la vista mostrada a la primera.
        if (!this.vistas[0][0].mostrar) {
            this.index_vista = 0
            this.MostrarVista(this.index_vista)
            this.OcultarVistas(this.index_vista)
        }
    }
}

/**
 * ? Clase que representa un formulario.
 * @class
 */
class Formulario extends ElementoHTML {
    /**
     * Constructor de la clase Formulario. Crea un formulario para ingreso de comandos, nombres, habilidades, etc.
     * @param {string} nombre - Nombre del formulario.
     * @param {string[]} clases - Clases CSS para aplicar estilos.
     * @param {boolean} mostrar - Indica si el formulario debe mostrarse inicialmente (true: visible, false: oculto).
     * @param {string} tipo_display - El tipo de display que tomara en caso de mostrarse.
     * @param {HTMLElement} hijo - El elemento hijo del formulario.
     * @param {HTMLElement} elemento - El contenedor del formulario.
     * @param {Function} funcion_ingreso - La función que se ejecuta al ingresar texto.
     */
    constructor(
        nombre = "nada",
        clases = ["contenedor-input"],
        tipo_display = "flex",
        mostrar = false,
        hijo = document.createElement("span"),
        elemento = document.createElement("div"),
        funcion_ingreso = () => { }
    ) {
        super(nombre, clases, mostrar, tipo_display, hijo, elemento)
        this.funcion_ingreso = funcion_ingreso

        this.encabezado = document.createElement("span")
        this.input = document.createElement("input")
        this.boton = document.createElement("button")

        this.id = `ingreso_${nombre}`

        this.ConstruirElemento()
    }

    /**
     * ? Construye el formulario
     */
    ConstruirElemento() {
        super.ConstruirElemento()
        // Contenido de hijos
        this.encabezado.textContent = `Ingrese ${this.nombre}`
        this.boton.textContent = "Ingresar"

        // Clases de hijos
        this.encabezado.classList.add("input-label")
        this.input.classList.add("comandos-input")
        this.boton.classList.add("input-button")

        // Ids & nombres de hijos
        this.input.id = `${this.nombre}_valor`
        this.input.name = `${this.nombre}_input`

        // Configuraciones generales del elemento principal
        this.elemento.id = `contenedor_input_${this.nombre}`

        // Añade los elementos
        this.elemento.appendChild(this.encabezado)
        this.elemento.appendChild(this.input)
        this.elemento.appendChild(this.boton)
    }

    /**
     * ? Establece el handler para el ingreso de texto.
     * @param {Function} nueva - La función que se ejecutara a la hora de ingresar texto.
     */
    set Funcion_ingreso(nueva) {
        this.funcion_ingreso = nueva
        this.input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                nueva(this.value)
            }
        })
        this.boton.addEventListener("click", () => {
            console.log("click")
            nueva(this.input.value)
        })
    }

    /**
     * Cambia el encabezado del formulario.
     * @param {string} nuevo - El nuevo encabezado.
     */
    set cambiar_encabezado(nuevo) {
        this.encabezado.textContent = nuevo
    }
}