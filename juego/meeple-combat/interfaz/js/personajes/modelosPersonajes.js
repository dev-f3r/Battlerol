// TODO: Documentar

const atributos_default = {
    ataque: 0,
    esquiva: 0,
    bloqueo: 0,
    velocidad: 0,
    vida: 0,
    poder: 0,
}

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

class Personaje {
    constructor({
        nombre = "",
        portada = "img/nada.png",
        icono = "img/nada.png",
        descripcion = "sin descripción.",

        atributos = atributos_default,

        arma1 = new Arma({}),
        arma2 = new Arma({}),

        equipo1 = new Equipo({}),
        equipo2 = new Equipo({}),
        equipo3 = new Equipo({}),

        habilidad1 = new Habilidad({}),
        habilidad2 = new Habilidad({}),
        habilidad3 = new Habilidad({}),
    }) {
        this.nombre = nombre
        this.portada = portada
        this.icono = icono
        this.descripcion = descripcion

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

    Actualizar = (props) => {
        console.log(props)
        this.nombre = props.nombre
        this.descripcion = props.descripcion
        this.portada = props.portada

        for (const nombre in atributos_default) {
            this.atributos[nombre] = props[nombre]
        }

        this.ConfigurarHabilidad(1, props.habilidad1)
        this.ConfigurarHabilidad(2, props.habilidad2)
        this.ConfigurarHabilidad(3, props.habilidad3)

        this.ConfigurarArma(1, props.arma1)
        this.ConfigurarArma(2, props.arma2)
    }

    ConfigurarArma = (ranura, nombre) => {
        const nueva = armas_naturales[nombre] ? armas_naturales[nombre] : armas_marciales[nombre]

        this[`arma${ranura}`].Actualizar(nueva)
    }

    ConfigurarEquipamiento = (ranura, nombre) => {
        console.log(ranura, nombre)
    }

    ConfigurarHabilidad = (ranura, nombre) => {
        console.log(ranura, nombre)
    }

    // TODO: Metodo para entregar el total de un atributo
    // TODO: Metodo para ataquar
}