    document.addEventListener('DOMContentLoaded', (event) => {
        // Your existing code, including the problematic line, goes here
        function obtenerUbicacion() {
            // ... other code ...
            document.getElementById('ubicacion-status').innerText = "Actualizando...";
            // ... other code ...
        }

        function initMap() {
            // ... other code ...
            obtenerUbicacion();
            // ... other code ...
        }

        // Call initMap or other functions that use obtenerUbicacion
        // initMap(); // Example call if initMap is meant to be called immediately
    });
    