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


    window.location = "/creditos.html"
    

})

logoBtn.addEventListener('click', function () {

    window.location = "/index.html"

})

matecitoBtn.addEventListener('click', function () {

    window.location = "https://www.matecito.co/battlerol.net"

})


jugarBtn.addEventListener('click', function () {


    

})




proyectoBtn.addEventListener('click', function () {

    window.location = "/proyecto.html"

})

siguienteBtn.addEventListener('click', function () {

    caratulaTitulo.src = "/img/descontrol-logo.png"
    juego = "descontrol"

})


anteriorBtn.addEventListener('click', function () {

    caratulaTitulo.src = "/img/meeple-combat-logo.png"
    juego = "meeple"

})



