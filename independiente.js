
const botonesComparar = document.querySelectorAll('.boton-comparar');

botonesComparar.forEach((boton) => {
  boton.addEventListener('click', function() {
    const tarjeta = this.closest('.tarjeta-vehiculo');
    const nombreAuto = tarjeta.querySelector('.nombre-vehiculo').innerText;
    
    
    if (this.innerText === 'Comparar') {
      this.innerText = 'Añadido';
      this.style.backgroundColor = '#2b1130';
      this.style.color = '#ffffff';
      console.log('Añadido a comparación: ' + nombreAuto);
    } else {
      this.innerText = 'Comparar';
      this.style.backgroundColor = '#ffffff';
      this.style.color = '#2b1130';
      console.log('Removido de comparación: ' + nombreAuto);
    }
  });
});

const campoBusqueda = document.getElementById('campo-busqueda');

if (campoBusqueda) {
  campoBusqueda.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter' && campoBusqueda.value.trim() !== '') {
      alert('Filtrando por: ' + campoBusqueda.value);
    }
  });
}