document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('#miLista li');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1; // Hacer visible el elemento
            item.style.transform = 'translateY(0)'; // Desplazar a su posición original
        }, index * 300); // Retraso basado en el índice
    });
});
