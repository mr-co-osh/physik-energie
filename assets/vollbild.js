/* Vollbild-Schalter für alle Seiten der Lernseite (Standard seit 21.11.2026).
   Kleines Symbol oben rechts; nutzt nur die eingebaute Fullscreen-Funktion des Browsers.
   Nichts wird gespeichert, nichts wird nachgeladen. Ohne Vollbild-Unterstützung (z. B. iPhone) bleibt das Symbol unsichtbar. */
(function () {
  'use strict';
  var d = document, el = d.documentElement;
  var kann = !!(d.fullscreenEnabled || d.webkitFullscreenEnabled);
  if (!kann) return;

  function aktiv() { return !!(d.fullscreenElement || d.webkitFullscreenElement); }
  function an() { (el.requestFullscreen || el.webkitRequestFullscreen).call(el); }
  function aus() { (d.exitFullscreen || d.webkitExitFullscreen).call(d); }

  var AN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
  var AUS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>';

  var css = d.createElement('style');
  css.textContent =
    '.vb-knopf{position:fixed;z-index:9999;top:calc(env(safe-area-inset-top,0px) + 10px);right:calc(env(safe-area-inset-right,0px) + 10px);' +
    'width:36px;height:36px;border-radius:9px;border:1px solid rgba(255,255,255,.35);background:rgba(14,59,92,.78);color:#fff;' +
    'display:inline-flex;align-items:center;justify-content:center;cursor:pointer;padding:0;box-shadow:0 2px 8px rgba(0,0,0,.18);' +
    '-webkit-tap-highlight-color:transparent;opacity:.85;transition:opacity .15s}' +
    '.vb-knopf:hover,.vb-knopf:focus-visible{opacity:1}' +
    '.vb-knopf:focus-visible{outline:3px solid #F2C230;outline-offset:2px}' +
    '.vb-knopf svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}' +
    '.vb-knopf.vb-inline{position:static;width:32px;height:32px;margin-left:auto;flex:none;box-shadow:none;background:rgba(255,255,255,.10);border-color:rgba(255,255,255,.35)}' +
    '.lk-bar .vb-knopf.vb-inline{margin-left:12px}' +
    '@media (max-width:640px){.lk-bar .vb-knopf.vb-inline{margin-left:auto}}' +
    '@media print{.vb-knopf{display:none}}';
  d.head.appendChild(css);

  var b = d.createElement('button');
  b.type = 'button';
  b.className = 'vb-knopf';

  function zeigen() {
    var v = aktiv();
    b.innerHTML = v ? AUS : AN;
    b.setAttribute('aria-label', v ? 'Vollbild beenden' : 'Vollbild');
    b.title = v ? 'Vollbild beenden' : 'Vollbild';
    b.setAttribute('aria-pressed', v ? 'true' : 'false');
  }
  b.addEventListener('click', function () {
    try { if (aktiv()) aus(); else an(); } catch (e) { /* Browser verweigert: nichts tun */ }
  });
  d.addEventListener('fullscreenchange', zeigen);
  d.addEventListener('webkitfullscreenchange', zeigen);
  zeigen();

  /* Ort: in der Navigationsleiste der Simulationen (.lk-bar), sonst im blauen Kopfband (.band .wrap), sonst schwebend oben rechts */
  function einsetzen() {
    var ziel = d.querySelector('.lk-bar') || d.querySelector('header.band .wrap');
    if (ziel) { b.classList.add('vb-inline'); ziel.appendChild(b); } else d.body.appendChild(b);
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', einsetzen); else setTimeout(einsetzen, 0);
})();
