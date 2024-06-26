const personaje_prueba = {
    nombre: "guerrero",
    portada: "img/guerrero.png",
    icono: "",
    descripcion: "combatiente cuerpo a cuerpo, con mucha resistencia pero muy poco daño base.",

    ataque: 4,
    esquiva: 2,
    bloqueo: 5,
    velocidad: 3,
    vida: 40,
    vidaMaxima: 40,
    poder: 40,
    poderMaximo: 40,

    arma1: "espada",
    arma2: "escudo",

    equipo1: "nada",
    equipo2: "nada",
    equipo3: "nada",

    habilidad1: "embestida con escudo",
    habilidad2: "cobertura",
    habilidad3: "ataque poderoso",
}

/**
 * ? Clase que representa un personaje (avatar o esbirro).
 * @class
 */
class Personaje extends EntidadBase {
    /**
     * ? Constructor de la clase Personaje.
     * @constructor
     * @param {string} nombre - El nombre del personaje
     * @param {string} portada - La ruta de la portada del personaje.
     * @param {string} descripcion - La descripción del personaje.
     * @param {Object.<string,number>} atributos - Los atributos del personaje.
     * @param {Arma} arma1 - El arma en el slot 1 del personaje.
     * @param {Arma} arma2 - El arma en el slot 2 del personaje.
     * @param {Equipo} equipo1 - El equipo en el slot 1 del personaje.
     * @param {Equipo} equipo2 - El equipo en el slot 2 del personaje.
     * @param {Equipo} equipo3 - El equipo en el slot 3 del personaje.
     * @param {Habilidad} habilidad1 - La habilidad en el slot 1 del personaje.
     * @param {Habilidad} habilidad2 - La habilidad en el slot 2 del personaje.
     * @param {Habilidad} habilidad3 - La habilidad en el slot 3 del personaje.
     */
    constructor({
        nombre = "",
        portada = "img/nada.png",
        descripcion = "sin descripción.",

        atributos = atributos_default,

        arma1 = new Arma({}),
        arma2 = new Arma({}),

        equipo1 = new Equipo({}),
        equipo2 = new Equipo({}),
        equipo3 = new Equipo({}),

        habilidad1 = new Habilidad({ nombre: "habilidad 1" }),
        habilidad2 = new Habilidad({ nombre: "habilidad 2" }),
        habilidad3 = new Habilidad({ nombre: "habilidad 3" }),
    }) {
        super({ nombre, descripcion, portada })

        this.atributos = atributos

        this.arma1 = arma1
        this.arma2 = arma2

        this.equipo1 = equipo1
        this.equipo2 = equipo2
        this.equipo3 = equipo3

        this.habilidad1 = habilidad1
        this.habilidad2 = habilidad2
        this.habilidad3 = habilidad3
    }

    /**
     * ? Cambia las propiedades (nombre, descripción, portada, atributos, habilidades y armas) 
     * del personaje por otras
     * @param {object} props - El objeto con las nuevas propiedades.
     */
    Actualizar = (props) => {
        super.Actualizar(props)

        // * Habilidades
        this.ConfigurarHabilidad(1, props.habilidad1)
        this.ConfigurarHabilidad(2, props.habilidad2)
        this.ConfigurarHabilidad(3, props.habilidad3)

        // * Armas
        this.ConfigurarArma(1, props.arma1)
        this.ConfigurarArma(2, props.arma2)
    }

    /**
     * Cambia el arma de un determinado slot.
     * @param {number} slot - El slot del arma a cambiar.
     * @param {string} nombre - El nombre de la nueva arma.
     */
    ConfigurarArma = (slot, nombre) => {
        // Verifica si el arma esta en la colección de naturales o marciales
        const nueva = armas_naturales[nombre] ? armas_naturales[nombre] : armas_marciales[nombre]

        this[`arma${slot}`].Actualizar(nueva) // La actualiza por la nueva
    }

    /**
     * Cambia el equipo de un determinado slot.
     * @param {number} slot - El slot del equipo a cambiar.
     * @param {string} nombre - El nombre de la nueva equipo.
     */
    ConfigurarEquipamiento = (slot, nombre) => {
        console.log(slot, nombre)
        // TODO: Completar logica para cambio de equipamiento.
    }

    /**
     * Cambia la habilidad de un determinado slot.
     * @param {number} slot - El slot de la habilidad a cambiar.
     * @param {string} nombre - El nombre de la nueva habilidad.
     */
    ConfigurarHabilidad = (slot, nombre) => {
        const nueva = habilidades[quitarAcentos(nombre)]

        this[`habilidad${slot}`].Actualizar(nueva)
    }

    /**
     * ? Entrega el valor total de un atributo (ataque, vida, etc)
     * @param {string} nombre - El nombre del atributo.
     * @returns {number} El resultado de la suma.
     */
    TotalAtibuto = (nombre) => {
        return this.atributos[nombre] + this.equipo1.atributos[nombre] + this.equipo2.atributos[nombre] + this.equipo3.atributos[nombre]
    }

    // TODO: Metodo para ataquar
}