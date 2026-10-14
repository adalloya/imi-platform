/**
 * IMI Industrial Consultant Web Widget
 * Script embebible e independiente para Instrumentación y Metrología Industrial S.R.L. de C.V.
 *
 * Uso en cualquier página web:
 * <script src="https://tu-dominio.com/widget-imi.js"></script>
 */
(function () {
  if (window.__IMI_WIDGET_LOADED__) return;
  window.__IMI_WIDGET_LOADED__ = true;

  // Determinar origen del script
  var scriptTag = document.currentScript;
  var scriptUrl = scriptTag ? scriptTag.src : "";
  var baseUrl = "";
  if (scriptUrl) {
    try {
      var urlObj = new URL(scriptUrl);
      baseUrl = urlObj.origin;
    } catch (e) {
      baseUrl = window.location.origin;
    }
  } else {
    baseUrl = window.location.origin;
  }

  var iframeUrl = baseUrl + "/consultant/imi";

  // Inyectar Estilos Aislados
  var style = document.createElement("style");
  style.id = "imi-widget-styles";
  style.textContent = `
    .imi-widget-btn {
      position: fixed !important;
      bottom: 24px !important;
      right: 24px !important;
      z-index: 999998 !important;
      height: 58px !important;
      padding: 0 20px !important;
      border-radius: 9999px !important;
      background: #0256B2 !important;
      color: #ffffff !important;
      border: 2px solid #ffffff !important;
      box-shadow: 0 10px 30px -4px rgba(2, 86, 178, 0.6) !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      font-size: 14px !important;
      font-weight: 700 !important;
      transition: all 0.25s ease !important;
      user-select: none !important;
      outline: none !important;
    }
    .imi-widget-btn:hover {
      background: #01468F !important;
      transform: translateY(-2px) scale(1.02) !important;
      box-shadow: 0 14px 34px -4px rgba(2, 86, 178, 0.75) !important;
    }
    .imi-widget-btn:active {
      transform: scale(0.97) !important;
    }
    .imi-widget-pulse {
      position: relative !important;
      display: flex !important;
      width: 10px !important;
      height: 10px !important;
    }
    .imi-widget-pulse-ping {
      position: absolute !important;
      width: 100% !important;
      height: 100% !important;
      border-radius: 9999px !important;
      background-color: #34d399 !important;
      opacity: 0.75 !important;
      animation: imiPing 1.8s cubic-bezier(0, 0, 0.2, 1) infinite !important;
    }
    .imi-widget-pulse-dot {
      position: relative !important;
      width: 10px !important;
      height: 10px !important;
      border-radius: 9999px !important;
      background-color: #10b981 !important;
    }
    @keyframes imiPing {
      75%, 100% {
        transform: scale(2.2);
        opacity: 0;
      }
    }
    .imi-widget-frame-container {
      position: fixed !important;
      bottom: 96px !important;
      right: 24px !important;
      width: 420px !important;
      height: 640px !important;
      max-height: calc(100vh - 120px) !important;
      max-width: calc(100vw - 32px) !important;
      border-radius: 16px !important;
      overflow: hidden !important;
      box-shadow: 0 25px 60px -12px rgba(6, 39, 72, 0.45) !important;
      border: 1px solid rgba(2, 86, 178, 0.25) !important;
      background: #ffffff !important;
      z-index: 999999 !important;
      display: none;
      flex-direction: column !important;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
      opacity: 0;
      transform: translateY(16px) scale(0.97);
    }
    .imi-widget-frame-container.open {
      display: flex !important;
      opacity: 1 !important;
      transform: translateY(0) scale(1) !important;
    }
    .imi-widget-frame {
      width: 100% !important;
      height: 100% !important;
      border: none !important;
      background: #ffffff !important;
    }
    @media (max-width: 640px) {
      .imi-widget-frame-container {
        bottom: 0 !important;
        right: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100vh !important;
        max-width: 100vw !important;
        border-radius: 0 !important;
      }
      .imi-widget-btn {
        bottom: 16px !important;
        right: 16px !important;
      }
    }
  `;
  document.head.appendChild(style);

  // Crear Botón Flotante
  var btn = document.createElement("button");
  btn.className = "imi-widget-btn";
  btn.setAttribute("aria-label", "Consultor Técnico IMI");
  btn.innerHTML = `
    <span class="imi-widget-pulse">
      <span class="imi-widget-pulse-ping"></span>
      <span class="imi-widget-pulse-dot"></span>
    </span>
    <span>Consultor IMI</span>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
    </svg>
  `;

  // Crear Contenedor de iframe
  var container = document.createElement("div");
  container.className = "imi-widget-frame-container";

  var iframe = document.createElement("iframe");
  iframe.className = "imi-widget-frame";
  iframe.title = "Consultor Técnico IMI";
  iframe.loading = "lazy";
  iframe.src = iframeUrl;

  container.appendChild(iframe);
  document.body.appendChild(container);
  document.body.appendChild(btn);

  var isOpen = false;

  btn.addEventListener("click", function () {
    isOpen = !isOpen;
    if (isOpen) {
      container.classList.add("open");
      btn.innerHTML = `
        <span>Cerrar Chat</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
    } else {
      container.classList.remove("open");
      btn.innerHTML = `
        <span class="imi-widget-pulse">
          <span class="imi-widget-pulse-ping"></span>
          <span class="imi-widget-pulse-dot"></span>
        </span>
        <span>Consultor IMI</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
        </svg>
      `;
    }
  });
})();
