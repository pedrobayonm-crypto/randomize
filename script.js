
const prendas = {
    camiseta: [
        "imagenes/camiseta1.jpeg",
        "imagenes/camiseta2.jpeg",
        "imagenes/camiseta3.jpeg",
        "imagenes/camiseta4.jpeg",
        "imagenes/camiseta5.jpeg"
    ],

    pantalon: [
        "imagenes/pantalon1.jpeg",
        "imagenes/pantalon2.jpeg",
        "imagenes/pantalon3.jpeg",
        "imagenes/pantalon4.jpeg",
        "imagenes/pantalon5.jpeg"
    ],

    medias: [
        "imagenes/medias1.jpeg",
        "imagenes/medias2.jpeg",
        "imagenes/medias3.jpeg",
        "imagenes/medias4.jpeg",
        "imagenes/medias5.jpeg"
    ],

    zapatos: [
        "imagenes/zapatos1.jpeg",
        "imagenes/zapatos2.jpeg",
        "imagenes/zapatos3.jpeg",
        "imagenes/zapatos4.jpeg",
        "imagenes/zapatos5.jpeg"
    ]
};

const boton = document.getElementById("randomize");
const mensaje = document.getElementById("mensaje");

function elegirAleatorio(lista) {
    const numero = Math.floor(Math.random() * lista.length);
    return lista[numero];
}

function cambiarPrenda(id, lista) {
    const imagen = document.getElementById(id);
    const emoji = imagen.parentElement.querySelector(".emoji");
    const nuevaImagen = elegirAleatorio(lista);

    const nueva = new Image();

    nueva.onload = function () {
        imagen.src = nuevaImagen;
        imagen.style.display = "block";
        emoji.style.display = "none";
    };

    nueva.onerror = function () {
        imagen.style.display = "none";
        emoji.style.display = "block";
    };

    nueva.src = nuevaImagen;
}

const mensajes = [
    "EL DESTINO HA HABLADO.",
    "ESTA PINTA NO ESTABA EN TUS PLANES.",
    "CONFÍA EN EL PROCESO.",
    "HOY SE SALE CON ESTILO.",
    "NO TODOS ESTÁN LISTOS PARA ESTA PINTA.",
    "EL AZAR TIENE BUEN GUSTO.",
    "NUEVA PINTA, NUEVA HISTORIA."
];

function randomize() {
    boton.disabled = true;
    boton.textContent = "⟳ RANDOMIZING...";

    cambiarPrenda("camiseta", prendas.camiseta);
    cambiarPrenda("pantalon", prendas.pantalon);
    cambiarPrenda("medias", prendas.medias);
    cambiarPrenda("zapatos", prendas.zapatos);

    mensaje.textContent = elegirAleatorio(mensajes);

    setTimeout(function () {
        boton.disabled = false;
        boton.textContent = "⟳ RANDOMIZE";
    }, 500);
}

boton.addEventListener("click", randomize);


// MÚSICA DE FONDO

const musica = document.getElementById("musicaFondo");
const botonMusica = document.getElementById("musicButton");

musica.volume = 0.25;

botonMusica.addEventListener("click", function () {
    if (musica.paused) {
        musica.play().then(function () {
            botonMusica.textContent = "♫ APAGAR MÚSICA";
        }).catch(function () {
            botonMusica.textContent = "NO SE PUDO REPRODUCIR";
        });
    } else {
        musica.pause();
        botonMusica.textContent = "♫ ACTIVAR MÚSICA";
    }
});


// MOSTRAR LOS EMOJIS SI LAS FOTOS NO CARGAN

document.querySelectorAll(".imagen img").forEach(function (imagen) {
    const emoji = imagen.parentElement.querySelector(".emoji");

    function revisarImagen() {
        if (imagen.naturalWidth > 0) {
            imagen.style.display = "block";
            emoji.style.display = "none";
        } else {
            imagen.style.display = "none";
            emoji.style.display = "block";
        }
    }

    imagen.addEventListener("load", revisarImagen);
    imagen.addEventListener("error", revisarImagen);

    if (imagen.complete) {
        revisarImagen();
    }
});
