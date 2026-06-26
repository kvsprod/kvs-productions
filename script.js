/* ============================================================
   KVS PRODUCTIONS — SCRIPT
   ------------------------------------------------------------
   Small and optional. CSS handles all continuous animation
   (scanlines, vignette, rec dot). This file just adds two
   one-off interactive touches:
   1. A "power on" flicker on the #tv frame when the page loads.
   2. A quick RGB-split static glitch on the hero title and work
      cards when you hover/tap them — like the signal hiccups.
   Delete either block freely if you don't want that behaviour.
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  // 1. Power-on flicker, once, on load
  var tv = document.getElementById('tv');
  if (tv) {
    tv.classList.add('power-on');
    window.setTimeout(function () {
      tv.classList.remove('power-on');
    }, 800);
  }
  // 2. Hover/tap static glitch on the hero title + work cards
  var glitchTargets = document.querySelectorAll('.hero-title, .work-card h3');
  glitchTargets.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      el.classList.add('glitch-now');
      window.setTimeout(function () {
        el.classList.remove('glitch-now');
      }, 260);
    });
  });
});
