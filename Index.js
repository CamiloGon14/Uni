document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('button');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const seccion = boton.textContent.toLowerCase();
            console.log(`Redirigiendo a la sección: ${seccion}`);
        });
    });
});
