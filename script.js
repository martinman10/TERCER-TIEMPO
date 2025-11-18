/* ========= script.js — navegación, UI y socket =========
   Reemplaza tu script antiguo por este.
*/

(() => {
  // --- Elementos clave ---
  const pantallaSelector = document.getElementById('pantalla-selector-juegos');
  const configRuleta = document.getElementById('pantalla-config-ruleta');
  const configFichaje = document.getElementById('pantalla-config-fichaje');

  const btnJugarRuleta = document.getElementById('btnJugarRuleta');
  const btnJugarFichaje = document.getElementById('btnJugarFichaje');

  const btnVolverConfiguracion = document.getElementById('btnVolverConfiguracion');
  const btnVolverConfiguracion2 = document.getElementById('btnVolverConfiguracion2');

  const btnTema = document.getElementById('btnTema');
  const btnAyuda = document.getElementById('btnAyuda');

  const btnIniciarRuleta = document.getElementById('btnIniciarRuleta');
  const btnIniciarFichaje = document.getElementById('btnIniciarFichaje');

  // --- Helper: mostrar / ocultar pantalla ---
  function mostrarPantalla(p) {
    const pantallas = [pantallaSelector, configRuleta, configFichaje];
    pantallas.forEach(el => {
      if (!el) return;
      if (el === p) {
        el.hidden = false;
        el.classList.add('activa');
      } else {
        el.hidden = true;
        el.classList.remove('activa');
      }
    });
    // mover foco al primer control para accesibilidad
    setTimeout(() => {
      const first = p.querySelector('button, input, [tabindex]:not([tabindex="-1"])');
      if (first) first.focus();
    }, 120);
  }

  // --- Listeners: botones principales ---
  if (btnJugarRuleta) btnJugarRuleta.addEventListener('click', () => mostrarPantalla(configRuleta));
  if (btnJugarFichaje) btnJugarFichaje.addEventListener('click', () => mostrarPantalla(configFichaje));
  if (btnVolverConfiguracion) btnVolverConfiguracion.addEventListener('click', () => mostrarPantalla(pantallaSelector));
  if (btnVolverConfiguracion2) btnVolverConfiguracion2.addEventListener('click', () => mostrarPantalla(pantallaSelector));

  // --- Iniciar juegos (placeholder, conectá tu lógica) ---
  if (btnIniciarRuleta) btnIniciarRuleta.addEventListener('click', () =>{
    const cantidad = document.getElementById('ruleta-cantidad')?.value || 6;
    const tematicas = document.getElementById('ruleta-tematicas')?.value || '';
    console.log('Iniciar Ruleta:', {cantidad, tematicas});
    alert('Ruleta iniciada!\nCantidad: '+cantidad+'\nCategorías: '+tematicas);
    // Aquí podés abrir la pantalla del juego real o emitir evento socket
  });

  if (btnIniciarFichaje) btnIniciarFichaje.addEventListener('click', () =>{
    const cantidad = document.getElementById('fichaje-cantidad')?.value || 6;
    const mentiras = document.getElementById('fichaje-mentiras')?.value || 1;
    console.log('Iniciar Fichaje:', {cantidad, mentiras});
    alert('Fichaje iniciado!\nJugadores: '+cantidad+'\nMentiras: '+mentiras);
  });

  // --- Tema oscuro / claro (persistencia) ---
  const LS_KEY = 'tt_tema';
  function aplicarTema(tema){
    if (tema === 'oscuro') {
      document.body.classList.add('tema-oscuro');
      btnTema.innerText = '☀️';
      btnTema.setAttribute('aria-pressed','true');
    } else {
      document.body.classList.remove('tema-oscuro');
      btnTema.innerText = '🌙';
      btnTema.setAttribute('aria-pressed','false');
    }
    try { localStorage.setItem(LS_KEY, tema); } catch(e){}
  }
  btnTema?.addEventListener('click', () => {
    const modo = document.body.classList.contains('tema-oscuro') ? 'claro' : 'oscuro';
    aplicarTema(modo);
  });
  // Aplicar tema guardado al cargar
  try {
    const temaGuardado = localStorage.getItem(LS_KEY) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro');
    aplicarTema(temaGuardado);
  } catch(e){ aplicarTema('claro'); }

  // --- Modal de ayuda sencillo ---
  btnAyuda?.addEventListener('click', () => {
    const helpHtml = `
      Tercer Tiempo — Ayuda\n\n
      - Elegí un juego para ver su configuración.\n
      - Ajustá jugadores y parámetros y tocá "Iniciar".\n
      - Pulsá el icono de luna/sol para cambiar tema.\n
    `;
    alert(helpHtml);
  });

  // --- Accesibilidad: Enter en tarjeta abre configuración ---
  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        const btn = card.querySelector('.btn-jugar');
        if (btn) btn.click();
        e.preventDefault();
      }
    });
    // click en la card también dispara botón jugar
    card.addEventListener('click', e => {
      if (e.target.tagName.toLowerCase() === 'button') return;
      const btn = card.querySelector('.btn-jugar');
      if (btn) btn.click();
    });
  });

  // --- SOCKET.IO (si querés usar) ---
  // Se asume que cargaste el CDN <script src="https://cdn.socket.io/..."></script> en index.html
  // Aquí inicializamos la conexión y creamos algunos handlers básicos.
  try {
    if (typeof io !== 'undefined') {
      window.socket = io("https://quien-miente-server.onrender.com", {
        transports: ["websocket", "polling"]
      });

      window.socket.on("connect", () => {
        console.log("✅ Socket conectado:", window.socket.id);
      });

      window.socket.on("connect_error", (err) => {
        console.warn("Socket connect_error:", err?.message || err);
      });

      window.socket.on("disconnect", (reason) => {
        console.log("Socket desconectado:", reason);
      });
    } else {
      console.warn('Socket.IO no disponible (revisá que cargaste el CDN).');
    }
  } catch(err){
    console.error('Error inicializando socket:', err);
  }

  // --- Inicio: mostrar selector ---
  document.addEventListener('DOMContentLoaded', () => {
    mostrarPantalla(pantallaSelector);
  });

})();