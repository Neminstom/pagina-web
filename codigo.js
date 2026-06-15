function mostrarSeccion(id) {
    // 1. Ocultar todas las secciones
    const secciones = document.querySelectorAll('.contenido');
    secciones.forEach(sec => sec.style.display = 'none');

    // 2. Mostrar la seleccionada
    const target = document.getElementById(id);
    if (target) target.style.display = 'block';

    // 3. Dibujar en el canvas
    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "25px Georgia";
    ctx.textAlign = "center";

    if (id === 'vida') {
        ctx.fillStyle = "#8b4513";
        ctx.fillText("La Vida", canvas.width / 2, 40);
    } else if (id === 'amor') {
        ctx.fillStyle = "#ff1493";
        ctx.fillText("El Amor", canvas.width / 2, 40);
    } else if (id === 'nostalgia') {
        ctx.fillStyle = "#696969";
        ctx.fillText("La Nostalgia", canvas.width / 2, 40);
    } else if (id === 'multimedia') {
        ctx.fillStyle = "#5b1c1c";
        ctx.fillText("Videos y recomendaciones", canvas.width / 2, 40);
}
}
// Carga inicial: esto hace que aparezca el título al abrir la web
window.onload = function() {
    mostrarSeccion('vida');
};
// Agrega esto al final de tu función mostrarSeccion
// 1. Quitar la clase "activo" a todos los botones
document.querySelectorAll('button').forEach(btn => btn.classList.remove('activo'));
// 2. Ponérsela solo al botón que presionaste (necesitarás pasar el 'event' o buscar el botón)