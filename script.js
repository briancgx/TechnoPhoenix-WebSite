document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita la recarga de la página

            fetch(link.getAttribute('href'))
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        throw new Error('No se pudo cargar la página');
                    }
                })
                .then(data => {
                    document.getElementById('main-content').innerHTML = data;
                    history.pushState(null, '', link.href);
                })
                .catch(error => {
                    console.error('Error al cargar la página:', error);
                });
        });
    });
});
