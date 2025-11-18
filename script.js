// =========================================================
// LÓGICA DE NAVEGACIÓN ENTRE PANTALLAS (Selector de Juegos)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    
    const pantallaSelector = document.getElementById('pantalla-selector-juegos');
    const configRuleta = document.getElementById('pantalla-config-ruleta');
    const configFichaje = document.getElementById('pantalla-config-fichaje');
    const btnJugarRuleta = document.getElementById('btnJugarRuleta');
    const btnJugarFichaje = document.getElementById('btnJugarFichaje');
    const btnVolver = document.getElementById('btnVolverConfiguracion');

    // Función para mostrar una pantalla y ocultar las demás
    function mostrarPantalla(pantallaAMostrar) {
        // Ocultar todas las pantallas de configuración
        const pantallasConfig = [pantallaSelector, configRuleta, configFichaje];
        pantallasConfig.forEach(p => p.style.display = 'none');
        
        // Mostrar la pantalla deseada
        if (pantallaAMostrar) {
            pantallaAMostrar.style.display = 'block';
        }

        // Mostrar u ocultar el botón de Volver
        if (pantallaAMostrar === pantallaSelector) {
             btnVolver.style.display = 'none';
        } else {
             btnVolver.style.display = 'flex'; // O 'block', según tu CSS
        }
    }

    // Listener para el botón de Ruleta
    btnJugarRuleta.addEventListener('click', () => {
        mostrarPantalla(configRuleta);
        // Aquí puedes iniciar la lógica de configuración específica de la ruleta
        console.log("Navegando a Configuración de Ruleta Futbolera");
    });

    // Listener para el botón de Fichaje (Quién Miente)
    btnJugarFichaje.addEventListener('click', () => {
        mostrarPantalla(configFichaje);
        // Aquí puedes iniciar tu lógica de configuración existente de Quien Miente
        console.log("Navegando a Configuración de El Falso Fichaje");
    });

    // Listener para el botón de Volver
    btnVolver.addEventListener('click', () => {
        mostrarPantalla(pantallaSelector);
        console.log("Volviendo al selector de juegos");
    });

    // Asegúrate de que al cargar, solo se muestre el selector
    mostrarPantalla(pantallaSelector);
    
});
