/* ============================================================
   KVS PRODUCTIONS — SCRIPT
   ------------------------------------------------------------
   Kept intentionally minimal. CSS handles all animation/glitch
   effects — this file only does two small, practical things:

   1. Auto-fills the current year in the footer.
   2. Adds a one-time "static burst" class to the hero title
      when the page first loads, then removes it (purely a nice-
      to-have visual beat — safe to delete this whole block if
      you don't want it).
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // 1. Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. One-off glitch burst on load (adds/removes a class that
  //    you can hook extra keyframes onto in style.css if desired)
  var title = document.querySelector('.hero-title');
  if (title) {
    title.classList.add('glitch-burst');
    window.setTimeout(function () {
      title.classList.remove('glitch-burst');
    }, 1200);
  }

});
