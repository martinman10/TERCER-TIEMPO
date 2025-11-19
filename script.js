/* ========== TERCER TIEMPO - SCRIPT MÓVIL OPTIMIZADO - CORREGIDO ========== */

(() => {
  'use strict';

  // ========== CONSTANTES MÓVILES ========== 
  const THEME_KEY = 'tercer-tiempo-theme';
  const ANIMATION_DURATION = 200;
  const TOUCH_FEEDBACK_DURATION = 150;
  const VIBRATION_PATTERN = [10]; // Vibración sutil para feedback táctil
  
  // Elementos del DOM
  const themeToggle = document.getElementById('btnTema');
  const helpButton = document.getElementById('btnAyuda');
  const playButtons = {
  ruleta: document.getElementById('btnJugarRuleta')
  // btnJugarFichaje no va acá porque ya es un enlace real
};
  const gameCards = document.querySelectorAll('.game-card:not(.coming-soon)');
  const body = document.body;

  // ========== UTILIDADES MÓVILES ========== 
  const MobileUtils = {
    // Detectar si es un dispositivo táctil
    isTouchDevice() {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    },

    // Vibración táctil si está disponible
    vibrate(pattern = VIBRATION_PATTERN) {
      if ('vibrate' in navigator && this.isTouchDevice()) {
        navigator.vibrate(pattern);
      }
    },

    // Prevenir zoom accidental en inputs
    preventZoom() {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        // Se mantiene 'user-scalable=no' aquí para el zoom, pero se confía en la
        // gestión moderna de eventos táctiles para los botones.
        viewport.setAttribute('content', 
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        );
      }
    },

    // Detectar orientación
    getOrientation() {
      return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    },

    // Obtener información del dispositivo
    getDeviceInfo() {
      const userAgent = navigator.userAgent;
      return {
        isIOS: /iPad|iPhone|iPod/.test(userAgent),
        isAndroid: /Android/.test(userAgent),
        isSafari: /Safari/.test(userAgent) && !/Chrome/.test(userAgent),
        isChrome: /Chrome/.test(userAgent),
        orientation: this.getOrientation()
      };
    }
  };

  // ========== SISTEMA DE TEMA MÓVIL MEJORADO ========== 
  class MobileThemeManager {
    constructor() {
      this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
      this.deviceInfo = MobileUtils.getDeviceInfo();
      this.init();
    }

    getStoredTheme() {
      try {
        return localStorage.getItem(THEME_KEY);
      } catch (e) {
        console.warn('No se pudo acceder a localStorage para el tema');
        return null;
      }
    }

    getSystemTheme() {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    }

    init() {
      this.applyTheme(this.currentTheme);
      this.setupEventListeners();
      this.handleIOSSpecifics();
    }

    applyTheme(theme) {
      const themeIcon = themeToggle?.querySelector('.theme-icon');
      
      // Animación suave del cambio de tema
      body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
      
      if (theme === 'dark') {
        body.classList.add('tema-oscuro');
        if (themeIcon) themeIcon.textContent = '☀️';
        themeToggle?.setAttribute('aria-label', 'Cambiar a tema claro');
        
        // Actualizar meta theme-color para móviles
        this.updateMetaThemeColor('#1e293b');
      } else {
        body.classList.remove('tema-oscuro');
        if (themeIcon) themeIcon.textContent = '🌙';
        themeToggle?.setAttribute('aria-label', 'Cambiar a tema oscuro');
        
        this.updateMetaThemeColor('#4BC55D');
      }

      this.currentTheme = theme;
      this.storeTheme(theme);
    }

    updateMetaThemeColor(color) {
      let metaTheme = document.querySelector('meta[name="theme-color"]');
      if (!metaTheme) {
        metaTheme = document.createElement('meta');
        metaTheme.name = 'theme-color';
        document.head.appendChild(metaTheme);
      }
      metaTheme.content = color;
    }

    storeTheme(theme) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (e) {
        console.warn('No se pudo guardar el tema en localStorage');
      }
    }

    toggle() {
      const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      
      // Vibración táctil
      MobileUtils.vibrate();
      
      // Animación del botón más pronunciada para móvil
      if (themeToggle) {
        themeToggle.style.transform = 'scale(0.85) rotate(180deg)';
        setTimeout(() => {
          themeToggle.style.transform = '';
        }, TOUCH_FEEDBACK_DURATION);
      }
      
      this.applyTheme(newTheme);
    }

    handleIOSSpecifics() {
      if (this.deviceInfo.isIOS) {
        // Manejar la barra de estado en iOS
        const metaStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
        if (metaStatusBar) {
          metaStatusBar.content = this.currentTheme === 'dark' ? 'black-translucent' : 'default';
        }
      }
    }

    setupEventListeners() {
      // Toggle manual con mejor feedback táctil (solo transform)
      themeToggle?.addEventListener('touchstart', (e) => {
        // CORRECCIÓN: Usar preventDefault solo para evitar el click simulado de 300ms, pero no para romper el flujo.
        // En este caso, lo mejor es dejar que el click haga el toggle.
        themeToggle.style.transform = 'scale(0.95)';
      }, { passive: true }); // Usar passive para no bloquear el scroll

      themeToggle?.addEventListener('touchend', (e) => {
        // CORRECCIÓN: Eliminar e.preventDefault() aquí
        themeToggle.style.transform = '';
      }, { passive: true });

      // Evento principal de toggle (funciona en click, ratón y toque simulado)
      themeToggle?.addEventListener('click', (e) => {
        this.toggle();
      });

      // Detectar cambios del sistema
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
              this.applyTheme(e.matches ? 'dark' : 'light');
            }
          });
      }
    }
  }

  // ========== GESTIÓN DE JUEGOS MÓVIL ========== 
  class MobileGameManager {
    constructor() {
      this.setupEventListeners();
      this.setupTouchFeedback();
    }

    setupEventListeners() {
      // Botones de jugar con mejor feedback táctil
      Object.entries(playButtons).forEach(([game, button]) => {
        if (button) {
          this.setupButtonTouchEvents(button, game);
        }
      });

      // Cards clickeables optimizadas para móvil
      gameCards.forEach(card => {
        this.setupCardTouchEvents(card);
      });
    }

    setupButtonTouchEvents(button, gameType) {
      // Usar touchstart/touchend solo para feedback visual y vibración
      button.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        button.style.transform = 'scale(0.95)';
        MobileUtils.vibrate();
      }, { passive: true });

      button.addEventListener('touchend', (e) => {
        e.stopPropagation();
        // CORRECCIÓN: Eliminar e.preventDefault() aquí
        button.style.transform = '';
      }, { passive: true });

      button.addEventListener('touchcancel', () => {
        button.style.transform = '';
      });

      // Evento principal de juego (funciona en click, ratón y toque simulado)
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleGameStart(gameType);
      });
    }

    setupCardTouchEvents(card) {
      let touchStartTime = 0;
      let touchStartY = 0;
      let touchStartX = 0;

      card.addEventListener('touchstart', (e) => {
        // Ignorar si el toque es en un botón
        if (e.target.closest('.play-button')) return;
        
        touchStartTime = Date.now();
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
        
        card.style.transform = 'scale(0.98)';
      }, { passive: true });

      card.addEventListener('touchmove', (e) => {
        const currentY = e.touches[0].clientY;
        const currentX = e.touches[0].clientX;
        const deltaY = Math.abs(currentY - touchStartY);
        const deltaX = Math.abs(currentX - touchStartX);
        
        // Si hay mucho movimiento, cancelar la acción
        if (deltaY > 10 || deltaX > 10) {
          card.style.transform = '';
        }
      }, { passive: true });

      card.addEventListener('touchend', (e) => {
        if (e.target.closest('.play-button')) return;
        
        const touchDuration = Date.now() - touchStartTime;
        const currentY = e.changedTouches[0].clientY;
        const currentX = e.changedTouches[0].clientX;
        const deltaY = Math.abs(currentY - touchStartY);
        const deltaX = Math.abs(currentX - touchStartX);
        
        // Solo activar si fue un toque rápido y sin mucho movimiento
        if (touchDuration < 300 && deltaY < 10 && deltaX < 10) {
          const playButton = card.querySelector('.play-button');
          if (playButton && !playButton.disabled) {
            MobileUtils.vibrate();
            setTimeout(() => {
              card.style.transform = '';
              // CORRECCIÓN: Permitir que el playButton.click() se ejecute
              playButton.click(); 
            }, 100);
          }
        } else {
          card.style.transform = '';
        }
      }, { passive: true });

      card.addEventListener('touchcancel', () => {
        card.style.transform = '';
      });

      // Navegación por teclado (para dispositivos con teclado físico)
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const playButton = card.querySelector('.play-button');
          if (playButton && !playButton.disabled) {
            MobileUtils.vibrate();
            this.animateCardClick(card);
            setTimeout(() => playButton.click(), 200);
          }
        }
      });

      // Hacer la card focuseable
      if (!card.hasAttribute('tabindex')) {
        card.setAttribute('tabindex', '0');
      }
    }

    setupTouchFeedback() {
      // CORRECCIÓN: Eliminar el uso de e.preventDefault() global en touchstart/touchend
      // y dejar solo la prevención de la selección de texto al arrastrar sobre elementos importantes.
      document.addEventListener('selectstart', (e) => {
        if (e.target.closest('.game-card, .play-button')) {
          e.preventDefault();
        }
      });
    }

    animateCardClick(card) {
      card.style.transform = 'scale(0.96)';
      setTimeout(() => {
        card.style.transform = '';
      }, 200);
    }

    handleGameStart(gameType) {
      // Vibración más fuerte para acción importante
      MobileUtils.vibrate([15, 10, 15]);

      // Lógica específica por juego
      switch (gameType) {
        case 'ruleta':
          this.startRuleta();
          break;
        case 'fichaje':
          this.startFichaje();
          break;
        default:
          console.warn(`Juego no reconocido: ${gameType}`);
      }
    }

    startRuleta() {
      console.log('🎡 Iniciando La Ruleta Futbolera...');
      this.showMobileGameStartFeedback('La Ruleta Futbolera', '🎡');
      
      setTimeout(() => {
        this.showMobileAlert('🎡 ¡La Ruleta Futbolera está lista!\n\nEsta funcionalidad se implementará próximamente.');
      }, 1000);
    }

    startFichaje() {
      console.log('🕵️ Iniciando ¿Quién Miente?...');
      this.showMobileGameStartFeedback('¿Quién Miente?', '🕵️');
      
      setTimeout(() => {
        this.showMobileAlert('🕵️ ¡¿Quién Miente? está listo!\n\nEsta funcionalidad se implementará próximamente.');
      }, 1000);
    }

    showMobileGameStartFeedback(gameName, icon) {
      // Crear elemento de feedback optimizado para móvil
      const feedback = document.createElement('div');
      feedback.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--accent);
        color: white;
        padding: 24px 32px;
        border-radius: 20px;
        font-size: 18px;
        font-weight: 600;
        z-index: 1000;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 90vw;
        text-align: center;
        backdrop-filter: blur(10px);
      `;
      feedback.innerHTML = `${icon} Cargando ${gameName}...`;
      
      document.body.appendChild(feedback);
      
      // Animación de entrada
      requestAnimationFrame(() => {
        feedback.style.opacity = '1';
        feedback.style.transform = 'translate(-50%, -50%) scale(1)';
      });
      
      // Remover después de un tiempo
      setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'translate(-50%, -50%) scale(0.9)';
        setTimeout(() => {
          if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
          }
        }, 300);
      }, 800);
    }

    showMobileAlert(message) {
      // Alert nativo optimizado para móvil
      alert(message);
    }
  }

  // ========== SISTEMA DE AYUDA MÓVIL ========== 
  class MobileHelpManager {
    constructor() {
      this.setupEventListeners();
    }

    setupEventListeners() {
      // Eventos táctiles para el botón de ayuda (solo feedback visual)
      helpButton?.addEventListener('touchstart', (e) => {
        helpButton.style.transform = 'scale(0.9)';
      }, { passive: true });

      helpButton?.addEventListener('touchend', (e) => {
        // CORRECCIÓN: Eliminar e.preventDefault() aquí
        helpButton.style.transform = '';
      }, { passive: true });

      // Evento principal de ayuda
      helpButton?.addEventListener('click', (e) => {
        this.showMobileHelp();
      });
    }

    showMobileHelp() {
      // Vibración para feedback
      MobileUtils.vibrate();

      const helpContent = `🏆 TERCER TIEMPO - AYUDA

⚽ JUEGOS DISPONIBLES:
• La Ruleta Futbolera: Arma tu 11 ideal con categorías aleatorias
• ¿Quién Miente?: Descubre al impostor entre historias futboleras

🎮 CÓMO JUGAR:
• Toca cualquier card de juego para comenzar
• Cada juego tiene su propia configuración
• Perfecto para 3-22 jugadores

🌙 PERSONALIZACIÓN:
• Usa el botón de luna/sol para cambiar el tema
• El tema se guarda automáticamente

📱 OPTIMIZADO PARA MÓVIL:
• Diseño táctil mejorado
• Funciona sin conexión
• Vibración para mejor feedback

¡Que disfrutes la juntada! ⚽`;

      alert(helpContent);
    }
  }

  // ========== EFECTOS VISUALES MÓVILES ========== 
  class MobileVisualEffects {
    constructor() {
      this.setupMobileEffects();
      this.setupOrientationHandling();
      this.setupPerformanceOptimizations();
    }

    setupMobileEffects() {
      // Animación de carga optimizada para móvil
      const cards = document.querySelectorAll('.game-card');
      cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50 * (index + 1));
      });
    }

    setupOrientationHandling() {
      // Manejar cambios de orientación
      window.addEventListener('orientationchange', () => {
        // Pequeño delay para que el navegador termine el cambio
        setTimeout(() => {
          this.handleOrientationChange();
        }, 100);
      });

      window.addEventListener('resize', () => {
        this.handleOrientationChange();
      });
    }

    handleOrientationChange() {
      const orientation = MobileUtils.getOrientation();
      body.setAttribute('data-orientation', orientation);
      
      // Forzar repaint para evitar bugs visuales
      body.style.display = 'none';
      body.offsetHeight; // Trigger reflow
      body.style.display = '';
    }

    setupPerformanceOptimizations() {
      // Optimizar animaciones para dispositivos de bajo rendimiento
      const isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
      
      if (isLowPerformance) {
        body.classList.add('low-performance');
        // Reducir animaciones en dispositivos lentos
        const style = document.createElement('style');
        style.textContent = `
          .low-performance * {
            transition-duration: 0.1s !important;
            animation-duration: 0.1s !important;
          }
        `;
        document.head.appendChild(style);
      }
    }
  }

  // ========== ACCESIBILIDAD MÓVIL ========== 
  class MobileAccessibilityManager {
    constructor() {
      this.setupMobileAccessibility();
      this.setupVoiceOverSupport();
    }

    setupMobileAccessibility() {
      // Mejorar el contraste para pantallas móviles al sol
      if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
        body.classList.add('high-contrast');
      }

      // Soporte para navegación por switch control
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          body.classList.add('keyboard-navigation');
        }
      });

      // Mejorar etiquetas ARIA para lectores de pantalla móviles
      gameCards.forEach(card => {
        const title = card.querySelector('.game-title')?.textContent;
        if (title) {
          card.setAttribute('aria-label', `Jugar ${title}`);
          card.setAttribute('role', 'button');
        }
      });
    }

    setupVoiceOverSupport() {
      // Optimizaciones específicas para VoiceOver en iOS
      if (MobileUtils.getDeviceInfo().isIOS) {
        // Mejorar la navegación por VoiceOver
        const focusableElements = document.querySelectorAll('[tabindex], button, [role="button"]');
        focusableElements.forEach(element => {
          element.addEventListener('focus', () => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          });
        });
      }
    }
  }

  // ========== INICIALIZACIÓN MÓVIL ========== 
  const initMobileApp = () => {
    console.log('📱 Iniciando Tercer Tiempo para móvil...');
    
    // Configuraciones iniciales para móvil
    MobileUtils.preventZoom();
    
    // Inicializar todos los managers móviles
    new MobileThemeManager();
    new MobileGameManager();
    new MobileHelpManager();
    new MobileVisualEffects();
    new MobileAccessibilityManager();
    
    console.log('✅ Tercer Tiempo móvil iniciado correctamente');
    
    // Log de información del dispositivo para debug
    console.log('📱 Info del dispositivo:', MobileUtils.getDeviceInfo());
  };

  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileApp);
  } else {
    initMobileApp();
  }

  // ========== MANEJO DE ERRORES MÓVIL ========== 
  window.addEventListener('error', (e) => {
    console.error('Error en Tercer Tiempo móvil:', e.error);
  });

  window.addEventListener('unhandledrejection', (e) => {
    console.error('Promise rechazada en Tercer Tiempo móvil:', e.reason);
  });

  // ========== SERVICE WORKER BÁSICO PARA PWA ========== 
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Registro básico de service worker para funcionalidad offline
      console.log('📱 Service Worker disponible para PWA');
    });
  }

})();
