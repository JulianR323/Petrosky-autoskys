
const campoBusqueda = document.getElementById('campo-busqueda');

campoBusqueda.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    alert('Buscando: ' + campoBusqueda.value);
  }
});