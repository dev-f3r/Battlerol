/**
 * ? Contiene informacion sobre las cartas
 * @type {object}
 */
const cartasDict = {
    normales: {


        "CAIDA": {
            nombre: "CAIDA",
            descripcion: "PISAS UN CHARCO DE SUSTANCIA DESCONOCIDA, RESBALAS Y  CAES AL SUELO PERDIENDO UNA ACCIÓN LEVANTARSE CUESTA OTRA",
            imagen: "img/caida.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: -1,
        },

        "DE ARRIBA": {
            nombre: "DE ARRIBA",
            descripcion: "UN OBJETO  CONTUNDENTE NO IDENTIFICADO CAE SOBRE TI Y TE QUITA 3 PUNTOS DE RESISTENCIA",
            imagen: "img/dearriba.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "AFIP": {
            nombre: "AFIP",
            descripcion: "TODOS PIERDEN 1 PUNTO DE RESISTENCIA",
            imagen: "img/afip.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "BORRACHO": {
            nombre: "BORRACHO",
            descripcion: "TOMASTE DEMASIADO Y AHORA ESTAS BORRACHO PERMANENTE O HASTA ENCONTRAR AGUA MINERAL",
            imagen: "img/borracho.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
            "nuevo estado": 'ebrio'
        },

        "HUMO": {
            nombre: "HUMO",
            descripcion: "LA MAQUINA DE HUMO TE DA EN LA CARA Y PIERDES UNA ACCIÓN LAGRIMIANDO",
            imagen: "img/humo.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: -1,
        },

        "FUEGO": {
            nombre: "FUEGO",
            descripcion: "ACTIVA EL SISTEMA ANTI INCENDIOS Y EMPAPA A TODOS LOS DEMÁS, QUITÁNDOLES 1 PUNTO DE MOVIMIENTOEN ESTE TURNO",
            imagen: "img/fuego.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "AGUA MINERAL": {
            nombre: "AGUA MINERAL",
            descripcion: "QUITA LA BORRACHERA , SI NO ESTÁS BORRACHO RECUPERA 3 PUNTOS DE RESISTENCIA",
            imagen: "img/aguamineral.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
            "nuevo estado": 'lucido'
        },

        "ENERGIZANTE": {
            nombre: "ENERGIZANTE",
            descripcion: "GANAS UNA ACCION EXTRA EN ESTE TURNO Y QUEDAS EXTACIADO",
            imagen: "img/energizante.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 1,
            "nuevo estado": 'extaciado'
        },

        "¡TEMAZO!": {
            nombre: "¡TEMAZO!",
            descripcion: "TODOS GANAN +1 ACCION EN ESTA RONDA",
            imagen: "img/temazo.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 1,
        },

        "MAREO": {
            nombre: "MAREO",
            descripcion: "PIERDES UNA ACCIÓN, SI TE ENCUENTRAS BORRACHO, TAMBIÉN TE QUITA 1 PUNTO DE  RESISTENCIA",
            imagen: "img/mareo.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: -1,
        },

        "SALIDA DE EMERGENCIA": {
            nombre: "SALIDA DE EMERGENCIA",
            descripcion: "PUEDES SALIR DEL MAPA DURANTE 1 TURNO E INGRESAR DE NUEVO EN CUALQUIER PUNTO EN EL PRÓXIMO",
            imagen: "img/salidadeemergencia.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "POLICIA": {
            nombre: "POLICIA",
            descripcion: "EN ESTE TURNO NADIE ATACA",
            imagen: "img/policia.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "HORA FELIZ": {
            nombre: "HORA FELIZ",
            descripcion: "ACERCATE A LA BARRA Y RECUPERA PUNTOS DERESISTENCIA. 1 PUNTO POR CADA ACCIÓN QUE TE  ENCUENTRES AL LADO, NO PUEDES ATACAR MIENTRAS BEBES.",
            imagen: "img/horafeliz.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "VIP": {
            nombre: "VIP",
            descripcion: "EN ESTE TURNO NO PUEDES RECIBIR DAÑO",
            imagen: "img/vip.png",
            ataque: 6,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },
        "GASEOSA": {
            nombre: "GASEOSA",
            descripcion: "UN SUBIDON DE ENERGIA MOMENTANEO QUE TE DA UNA ACCION EXTRA.",
            imagen: "img/gaseosa.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 1,
        }, 
         "TODO NORMAL": {
            nombre: "TODO NORMAL",
            descripcion: "¡VAMOS JUEGA!",
            imagen: "img/todonormal.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "NO PASA NADA": {
            nombre: "NO PASA NADA",
            descripcion: "¡VAMOS JUEGA!",
            imagen: "img/nopasanada.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "SIGUE JUGANDO": {
            nombre: "SIGUE JUGANDO",
            descripcion: "¡VAMOS JUEGA!",
            imagen: "img/siguejugando.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

    },

    especiales: {

        "TODO NORMAL": {
            nombre: "TODO NORMAL",
            descripcion: "¡VAMOS JUEGA!",
            imagen: "img/todonormal.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "NO PASA NADA": {
            nombre: "NO PASA NADA",
            descripcion: "¡VAMOS JUEGA!",
            imagen: "img/nopasanada.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "SIGUE JUGANDO": {
            nombre: "SIGUE JUGANDO",
            descripcion: "¡VAMOS JUEGA!",
            imagen: "img/siguejugando.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },



    },
    epicas: {

        "CUCHARA": {
            nombre: "CUCHARA",
            descripcion: "¿QUE TAN INOFENSIVA ES?.",
            imagen: "img/cuchara.png",
            ataque: 1,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

       

        "BUSCAPIES": {
            nombre: "BUSCAPIES",
            descripcion: "LANZAS UN BUSCAPIES, HACIENDO QUE TODOS CORRAN DESPAVORIDOS, DEBIENDO MOVER SUS PERSONAJES POR EL MAPA EL MAXIMO PERMITIDO POR ACCIÓN.",
            imagen: "img/buscapies.png",
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "MATAFUEGOS": {
            nombre: "MATAFUEGOS",
            descripcion: "USALO COMO ARMA CUERPO A CUERPO O LANZA LA CARGA A UN MAXIMO DE 3 CASILLEROS, QUITANDOLE TODAS LAS ACCIONES DEL PROXIMO TURNO AL OBJETIVO.",
            imagen: "img/matafuegos.png",
            ataque: 3,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "PIEDRA": {
            nombre: "PIEDRA",
            descripcion: "¡VAMOS LANZALA! DISTANCIA MAXIMA 2 CASILLEROS POR PUNTO DE ATAQUE",
            imagen: "img/piedra.png",
            ataque: 2,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },

        "PALO": {
            nombre: "PALO",
            descripcion: "ARMA CUERPO A CUERPO, AUMENTA MUCHO EL DAÑO",
            imagen: "img/palo.png",
            ataque: 6,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },
        
        "BOTELLA": {
            nombre: "BOTELLA",
            descripcion: "ARMA A DISTANCIA, MAX 2 CASILLERO POR PUNTO DE ATAQUE, AUMENTA EL DAÑO",
            imagen: "img/botella.png",
            ataque: 2,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },




    },

}

/**
 * ? Contiene el nombre de las cartas normales
 * @const {array}
 */
const listaCartasNormales = Object.keys(cartasDict.normales)
/**
 * ? Contiene el nombre de las cartas especiales
 * @const {array}
 */
const listaCartasEspeciales = Object.keys(cartasDict.especiales)
/**
 * ? Contiene el nombre de las cartas epicas
 * @const {array}
 */
const listaCartasEpicas = Object.keys(cartasDict.epicas)