function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.contenido');
    secciones.forEach(sec => sec.style.display = 'none');

    const seleccionada = document.getElementById(seccionId);
    if (seleccionada) {
        seleccionada.style.display = 'block';
        dibujarCanvas(seccionId);
    }
}

function dibujarCanvas(seccionId) {
    let canvas = document.getElementById("miCanvas");
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "miCanvas";
        canvas.width = window.innerWidth * 0.9;
        canvas.height = 100;
        document.body.insertBefore(canvas, document.body.firstChild);
    }

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "20px Georgia";
    ctx.textAlign = "center";

    if (seccionId === "vida") {
        ctx.fillStyle = "#8b4513";
        ctx.fillText(" La Vida ", canvas.width / 2, 100);
    } else if (seccionId === "amor") {
        ctx.fillStyle = "#ff1493";
        ctx.fillText(" El Amor ", canvas.width / 2, 100);
    } else if (seccionId === "nostalgia") {
        ctx.fillStyle = "#696969";
        ctx.fillText(" La Nostalgia ", canvas.width / 2, 100);
    }
}

/* Mostrar La Vida al cargar */
window.onload = function() {
    mostrarSeccion("vida");
};

