class Personaje {
    constructor({
        nombre = "",
        portada = "img/nada.png",
        icono = "img/nada.png",

        atributos = {},

        arma1 = new Arma(),
        arma2 = new Arma(),

        equipo1 = new Equipo(),
        equipo2 = new Equipo(),
        equipo3 = new Equipo(),

        habilidad1 = new Habilidad(),
        habilidad2 = new Habilidad(),
        habilidad3 = new Habilidad(),
    }) {
        this.nombre = nombre
        this.portada = portada
        this.icono = icono

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

    ActulizarAtributos = (props) => {

    }

    ConfigurarArma = (ranura, nombre) => {

    }

    ConfigurarEquipamiento = (ranura, nombre) => {

    }

    ConfigurarHabilidad = (ranura, nombre) => {

    }
}