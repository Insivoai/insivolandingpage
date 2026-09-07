/* insivo Redesign-Prototyp — gemeinsames Verhalten für alle Seiten */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.nav');

    /* Leiste ist oben transparent und nimmt beim Scrollen leicht Farbe an */
    if (nav) {
      var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 60); };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* Mobile-Menü */
    var burger = document.querySelector('.nav-burger');
    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    /* Solutions-Dropdown: Hover per CSS, Klick/Tastatur hier.
       Trigger ist ein <button>, damit kein Anker-Handler dazwischenfunkt. */
    document.querySelectorAll('.nav-dd').forEach(function (dd) {
      var trigger = dd.querySelector('.nav-link');
      var menu = dd.querySelector('.nav-dd-menu');
      if (!trigger || !menu) return;

      var isOpen = function () { return trigger.getAttribute('aria-expanded') === 'true'; };
      var close = function () { trigger.setAttribute('aria-expanded', 'false'); };

      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        trigger.setAttribute('aria-expanded', isOpen() ? 'false' : 'true');
      });
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          close();
          if (nav) nav.classList.remove('open');
        });
      });
      document.addEventListener('click', function (e) {
        if (isOpen() && !dd.contains(e.target)) close();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && isOpen()) { close(); trigger.focus(); }
      });
      window.addEventListener('resize', close);
    });

    /* FAQ-Akkordeon */
    var items = document.querySelectorAll('.faq-i');
    items.forEach(function (item) {
      var q = item.querySelector('.faq-q');
      var a = item.querySelector('.faq-a');
      if (!q || !a) return;
      q.setAttribute('aria-expanded', 'false');
      q.addEventListener('click', function () {
        var wasOpen = item.classList.contains('open');
        items.forEach(function (other) {
          other.classList.remove('open');
          var oa = other.querySelector('.faq-a');
          var oq = other.querySelector('.faq-q');
          if (oa) oa.style.height = '0px';
          if (oq) oq.setAttribute('aria-expanded', 'false');
        });
        if (!wasOpen) {
          item.classList.add('open');
          a.style.height = a.scrollHeight + 'px';
          q.setAttribute('aria-expanded', 'true');
        }
      });
    });

    var reduziert = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Zahlen zaehlen hoch, Balken laufen ein — nur einmal, beim Sichtbarwerden */
    (function () {
      var cc = document.querySelector('.cc');
      if (!cc) return;

      function starte() {
        cc.querySelectorAll('.stat').forEach(function (st) {
          var val = st.querySelector('.stat-val');
          var bar = st.querySelector('.stat-fill');
          var ziel = parseInt((val ? val.textContent : '0').replace(/\D/g, ''), 10) || 0;
          if (bar) requestAnimationFrame(function () { bar.style.width = ziel + '%'; });
          if (!val || reduziert) { if (bar) bar.style.width = ziel + '%'; return; }
          var t0 = null, dauer = 1500;
          function schritt(t) {
            if (t0 === null) t0 = t;
            var f = Math.min((t - t0) / dauer, 1);
            var e = 1 - Math.pow(1 - f, 3);          // ease-out, gleiche Kurve wie der Balken
            val.textContent = Math.round(ziel * e) + '%';
            if (f < 1) requestAnimationFrame(schritt);
          }
          val.textContent = '0%';
          requestAnimationFrame(schritt);
        });
      }

      if (!('IntersectionObserver' in window)) { starte(); return; }
      var o = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { starte(); o.disconnect(); } });
      }, { threshold: 0.25 });
      o.observe(cc);
    })();

    /* Abhak-Liste: Zeilen nacheinander bestaetigen */
    (function () {
      var seq = document.querySelector('.seq');
      if (!seq) return;
      var rows = [].slice.call(seq.querySelectorAll('.seqrow'));
      function lauf() {
        if (reduziert) { rows.forEach(function (r) { r.classList.add('on'); }); return; }
        rows.forEach(function (r, i) {
          setTimeout(function () { r.classList.add('on'); }, 500 + i * 700);
        });
      }
      if (!('IntersectionObserver' in window)) { lauf(); return; }
      var o = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { lauf(); o.disconnect(); } });
      }, { threshold: 0.3 });
      o.observe(seq);
    })();

    /* Ablauf und At-scale bekommen ihre eigene Klasse beim Sichtbarwerden */
    ['.flow4', '.scale-wrap'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      if (!('IntersectionObserver' in window)) { el.classList.add('in'); return; }
      var o = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); o.disconnect(); } });
      }, { threshold: 0.2 });
      o.observe(el);
    });

    /* Scroll-Reveal — das einzige Bewegungssystem der Seite */
    var reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('in'); });
    } else {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(function (el) { obs.observe(el); });
    }
  });
})();
