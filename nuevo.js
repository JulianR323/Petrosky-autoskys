const botonesComprar = document.querySelectorAll('.boton-comprar');

botonesComprar.forEach((boton) => {
  boton.addEventListener('click', function() {
    const tarjeta = this.closest('.tarjeta-vehiculo');
    const nombreAuto = tarjeta.querySelector('.nombre-vehiculo').innerText;
    alert('Iniciando proceso de compra para: ' + nombreAuto);
  });
});

const campoBusqueda = document.getElementById('campo-busqueda');

if (campoBusqueda) {
  campoBusqueda.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter' && campoBusqueda.value.trim() !== '') {
      alert('Filtrando vehículos de concesionario por: ' + campoBusqueda.value);
    }
  });
}