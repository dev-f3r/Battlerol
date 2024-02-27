document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});
document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    return false;
});
document.body.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});
document.body.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});


var juego = "meeple"

jugarAhoraBtn.addEventListener('click', function () {

    if (juego == "meeple") {

        window.location = "../../juego/meeple-combat/interfaz/index.html"
    }

    if (juego == "descontrol") {

        window.location = "../../juego/descontrol/interfaz/index.html"
    }



})

logoBtn.addEventListener('click', function () {

    window.location = "/index.html"

})

matecitoBtn.addEventListener('click', function () {

    window.location = "https://www.matecito.co/battlerol.net"

})


jugarBtn.addEventListener('click', function () {


    if (juego == "meeple") {
        window.location = "../../juego/meeple-combat/index.html"
    }

    if (juego == "descontrol") {
        window.location = "../../juego/descontrol/index.html"
    }

    if (juego == "hegregon") {
        window.location = "../../juego/hegregon/index.html"
    }


})




proyectoBtn.addEventListener('click', function () {

    window.location = "/proyecto.html"

})

siguienteBtn.addEventListener('click', function () {

    if (juego == "meeple") {
        caratulaTitulo.src = "/img/descontrol-logo.png"
        juego = "descontrol"
        jugarAhoraTxt.textContent = "JUGAR AHORA"
    }else if(juego == "descontrol"){
        caratulaTitulo.src = "/img/hegregon-logo.png"
        juego = "hegregon"
        jugarAhoraTxt.textContent = "PROXIMAMENTE"
    }

})


anteriorBtn.addEventListener('click', function () {

    if (juego == "hegregon") {
        caratulaTitulo.src = "/img/descontrol-logo.png"
        juego = "descontrol"
        jugarAhoraTxt.textContent = "JUGAR AHORA"
    }else if(juego == "descontrol"){
        caratulaTitulo.src = "/img/meeple-combat-logo.png"
        juego = "meeple"
        jugarAhoraTxt.textContent = "JUGAR AHORA"
    }

})



