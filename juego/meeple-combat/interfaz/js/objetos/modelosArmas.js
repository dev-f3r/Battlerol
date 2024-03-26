// TODO: Crear una clase para armas
// - Cada instancia debe lucir asi: { nombre: "wp 1", icono: "img/nada.png", danno: 0, descripcion: "dc wp 1" }
class Arma {
    constructor({
        nombre = "",
        icono = "img/nada.png",
        danno = 0,
        descripcion = "sin descripción."
    }){
        this.nombre = nombre
        this.icono = icono
        this.danno = danno
        this.descripcion = descripcion
    }

    Actualizar = (nueva) => {
        Object.assign(this, nueva)
    }

    Ataquar = () => console.log("Ataque con arma")
}