// Filtro sencillo para buscar por texto en las tarjetas
const searchInput = document.getElementById('searchInput');
const tarjetas = document.querySelectorAll('.tarjeta-taller');

searchInput.addEventListener('keyup', function () {
  const textoBuscado = searchInput.value.toLowerCase();

  tarjetas.forEach(tarjeta => {
    const contenidoTarjeta = tarjeta.textContent.toLowerCase();
    
    // Si la tarjeta contiene el texto de la busqueda la muestra, si no la oculta
    if (contenidoTarjeta.includes(textoBuscado)) {
      tarjeta.style.display = 'flex';
    } else {
      tarjeta.style.display = 'none';
    }
  });
});