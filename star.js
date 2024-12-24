document.getElementById('pressBtn').addEventListener('click', function() {
    // Desaparecer el cartel con el efecto blur
    document.querySelector('.box').classList.add('hidden');
    
    // Añadir un retraso para la aparición del sol
    setTimeout(function() {
        document.querySelector('.sun-container').style.opacity = '0';
    }, 2000); // Retraso de 2000 milisegundos (2 segundos)
    
    // Redireccionar a star_start.html después de 2 segundos
    setTimeout(function() {
        window.location.href = 'star_start.html';
    }, 2000);
});