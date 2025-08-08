 function actualizarEstado() {
      const boton = document.getElementById('estadoNegocio');
      const ahora = new Date();
      const dia = ahora.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
      const hora = ahora.getHours();
      const minutos = ahora.getMinutes();

      let abierto = false;

    if (dia >= 1 && dia <= 5) { // Lunes a viernes
  abierto = (
    // Mañana 8:00 a 13:00
    (hora > 8 && hora < 13) ||
    (hora === 8 && minutos >= 0) ||
    (hora === 12 && minutos === 59) ||
    // Tarde 16:00 a 20:00
    (hora > 16 && hora < 20) ||
    (hora === 16 && minutos >= 0) ||
    (hora === 19 && minutos === 59)
  );
} else if (dia === 6) { // Sábado, mismo horario que lunes a viernes
  abierto = (
    (hora > 8 && hora < 13) ||
    (hora === 8 && minutos >= 0) ||
    (hora === 12 && minutos === 59) ||
    (hora > 16 && hora < 20) ||
    (hora === 16 && minutos >= 0) ||
    (hora === 19 && minutos === 59)
  );
} else if (dia === 0) { // Domingo solo 8 a 13
  abierto = (
    (hora > 8 && hora < 13) ||
    (hora === 8 && minutos >= 0) ||
    (hora === 12 && minutos === 59)
  );
}
      // 🛑 Domingo: cerrado (día 0) — no se modifica 'abierto'

      // Cambiar texto y color del botón
      if (abierto) {
        boton.textContent = 'Abierto';
        boton.classList.remove('cerrado');
        boton.classList.add('abierto');
      } else {
        boton.textContent = 'Cerrado';
        boton.classList.remove('abierto');
        boton.classList.add('cerrado');
      }
    }

    // Mostrar u ocultar los horarios al hacer clic
    document.getElementById('estadoNegocio').addEventListener('click', () => {
      actualizarEstado(); // refresca el estado por si cambia al hacer clic
      const info = document.getElementById('infoHorario');
      info.style.display = info.style.display === 'none' ? 'block' : 'none';
    });

    // Ejecutar al cargar
    actualizarEstado();

    // Actualizar cada minuto (por si cambia el estado)
    setInterval(actualizarEstado, 60000);