function mostrarCreditos() {

  alert("Autor: Marina Alcoba Alvarez\nCurso y Grupo: 2ºB");

}



function ocultarBloque1() {

  var bloque1 = document.querySelector('.bloque1');

  bloque1.style.display = 'none';

}



function mostrarBloque1() {

  var bloque1 = document.querySelector('.bloque1');

  bloque1.style.display = 'block';

}



function cambiarColorBloque1() {

  var bloque1 = document.querySelector('.bloque1');

  var nuevoColor = obtenerColorAleatorio();

  bloque1.style.backgroundColor = nuevoColor;

}



function obtenerColorAleatorio() {

  return '#' + Math.floor(Math.random() * 16777215).toString(16);

}

function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;
        alert("Ubicación actual:\nLatitud: " + latitud + "\nLongitud: " + longitud);
      },
      function(error) {
        alert("Error al obtener la ubicación: " + error.message);
      }
    );
  } else {
    alert("La geolocalización no es compatible con este navegador.");
  }
}





// Añadir evento onmouseover al primer div para mostrar la fecha en una ventana de alerta
document.querySelector('.bloque1').addEventListener('mouseover', function() {
  var fechaActual = new Date();
  alert("Fecha actual: " + fechaActual);
});

// Añadir eventos onmouseover y onmouseout al segundo div para cambiar el color de fondo
document.querySelector('.bloque2').addEventListener('mouseover', function() {
  cambiarColorFondo('.bloque2');
});

document.querySelector('.bloque2').addEventListener('mouseout', function() {
  restaurarColorFondo('.bloque2');
});

// Función para cambiar el color de fondo
function cambiarColorFondo(selector) {
  var bloque = document.querySelector(selector);
  var nuevoColor = obtenerColorAleatorio();
  bloque.style.backgroundColor = nuevoColor;
}

// Función para restaurar el color de fondo original
function restaurarColorFondo(selector) {
  var bloque = document.querySelector(selector);
  bloque.style.backgroundColor = ''; // Esto restablece el color de fondo original (puede ser un color específico si lo deseas)
}

function mostrarUbicacionEnMapa(latitud, longitud) {
  var mapa = L.map('mapa').setView([latitud, longitud], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(mapa);

  L.marker([latitud, longitud]).addTo(mapa)
    .bindPopup('Tu ubicación actual').openPopup();
}

function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;
        
        alert("Ubicación actual:\nLatitud: " + latitud + "\nLongitud: " + longitud);
        
        // Mostrar el mapa en la nueva sección
        mostrarUbicacionEnMapa(latitud, longitud);
      },
      function(error) {
        alert("Error al obtener la ubicación: " + error.message);
      }
    );
  } else {
    alert("La geolocalización no es compatible con este navegador.");
  }
}