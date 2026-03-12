// 1. Buscamos el botón en el HTML usando su ID
const botonUnirse = document.getElementById('btn-unirse');
// 2. Le agregamos un "escuchador de eventos" para el clic
botonUnirse.addEventListener('click', function() {
    // Muestra una ventana emergente con un mensaje
    alert('¡Excelente! Gracias por sumarte a la cultura del reciclaje en nuestra comunidad.');
    // Cambia el texto del botón
    botonUnirse.textContent = '¡Ya estás participando!';
    // Cambia el color del botón para que se vea desactivado/completado
    botonUnirse.style.backgroundColor = '#7f8c8d'; // Un tono gris
    botonUnirse.style.cursor = 'default';
});