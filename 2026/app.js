/* =========================================================
   ICCCMLA 2026 — shared app (multipage)
   Header/footer/logo injection · active nav · countdown ·
   reveal · counters · mobile menu · neural-net hero
   ========================================================= */
(function () {
  "use strict";

  var SUBMIT_URL = "https://app.confconnects.com/conference/RFUUfnWqFz7xWUB91Bba";
  var EMAIL = "convenericccmla@gmail.com";
  var CONF_DATE = "2026-10-05T09:00:00+02:00";

  var NAV = [
    { label: "Home", href: "index.html", page: "home" },
    { label: "About", href: "about.html", page: "about" },
    { label: "Call for Papers", href: "call-for-papers.html", page: "cfp" },
    { label: "Committee", href: "committee.html", page: "committee" },
    { label: "Registration", href: "registration.html", page: "registration" },
    { label: "Sponsors", href: "sponsors.html", page: "sponsors" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ];

  var LOGO =
    '<svg class="brand__logo" viewBox="0 0 64 64" aria-hidden="true">' +
      '<defs><linearGradient id="lgmk" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0086D1"/><stop offset="1" stop-color="#003E63"/></linearGradient></defs>' +
      '<circle cx="32" cy="32" r="31" fill="url(#lgmk)"/>' +
      '<circle cx="32" cy="32" r="30" fill="none" stroke="#fff" stroke-opacity=".16"/>' +
      '<g stroke="#CDE6F7" stroke-opacity=".55" stroke-width="1">' +
        '<line x1="20" y1="24" x2="32" y2="18"/><line x1="20" y1="24" x2="32" y2="32"/><line x1="20" y1="24" x2="32" y2="46"/>' +
        '<line x1="20" y1="40" x2="32" y2="18"/><line x1="20" y1="40" x2="32" y2="32"/><line x1="20" y1="40" x2="32" y2="46"/>' +
        '<line x1="32" y1="18" x2="44" y2="24"/><line x1="32" y1="18" x2="44" y2="40"/>' +
        '<line x1="32" y1="32" x2="44" y2="24"/><line x1="32" y1="32" x2="44" y2="40"/>' +
        '<line x1="32" y1="46" x2="44" y2="24"/><line x1="32" y1="46" x2="44" y2="40"/>' +
      '</g>' +
      '<g fill="#fff"><circle cx="20" cy="24" r="2.6"/><circle cx="20" cy="40" r="2.6"/><circle cx="32" cy="18" r="2.6"/><circle cx="32" cy="46" r="2.6"/><circle cx="44" cy="24" r="2.6"/><circle cx="44" cy="40" r="2.6"/></g>' +
      '<circle cx="32" cy="32" r="3.6" fill="#E3AD31"/>' +
    '</svg>';

  var current = document.body.getAttribute("data-page") || "";

  function brand() {
    return '<a class="brand" href="index.html" aria-label="ICCCMLA 2026 — home">' + LOGO +
      '<span class="brand__txt">ICCCMLA<span class="brand__yr">2026</span></span></a>';
  }

  function buildHeader() {
    var links = NAV.map(function (n) {
      var a = n.page === current ? " is-active" : "";
      return '<a class="' + a.trim() + '" href="' + n.href + '">' + n.label + "</a>";
    }).join("");
    var mlinks = NAV.map(function (n) {
      var a = n.page === current ? " is-active" : "";
      return '<a class="' + a.trim() + '" href="' + n.href + '">' + n.label + "</a>";
    }).join("");
    return '' +
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<div class="topbar">' +
        '<span class="topbar__txt">An IEEE Conference · Record #71579 · Technically Co-Sponsored by the IEEE Germany Section</span>' +
        '<span class="topbar__logos">' +
          '<img src="assets/ieee-logo.svg" alt="IEEE" />' +
          '<img src="assets/IEEE-Germany-Logo.webp" alt="IEEE Germany Section" />' +
        "</span>" +
      "</div>" +
      '<header class="nav">' +
        brand() +
        '<nav class="nav__links" aria-label="Primary">' + links + "</nav>" +
        '<div class="nav__right">' +
          '<a class="btn btn--solid js-submit" href="' + SUBMIT_URL + '" target="_blank" rel="noopener">Submit Paper</a>' +
          '<button class="nav__burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>' +
        "</div>" +
      "</header>" +
      '<div class="mobile-menu" id="mobileMenu" aria-hidden="true">' + mlinks +
        '<a class="btn btn--solid js-submit" href="' + SUBMIT_URL + '" target="_blank" rel="noopener">Submit Paper</a></div>';
  }

  function buildFooter() {
    return '' +
    '<footer class="footer">' +
    '<div class="ieee-band">' +
      '<div class="ieee-logos">' +
        '<img class="ieee-logo" src="assets/ieee-logo.svg" alt="IEEE — Advancing Technology for Humanity" />' +
        '<img class="ieee-logo" src="assets/IEEE-Germany-Logo.webp" alt="IEEE Germany Section" />' +
      "</div>" +
      '<div class="ieee-band__txt"><b>An IEEE Conference · Technically Co-Sponsored by the IEEE Germany Section</b>' +
        '<span>IEEE Conference Record #71579. Proceedings of recent editions are indexed in IEEE Xplore.</span></div>' +
    "</div>" +
    '<div class="footer__top">' +
      '<div class="footer__brand">' + LOGO +
        '<span class="brand__txt">ICCCMLA<span class="brand__yr">2026</span></span>' +
        "<p>2026 IEEE 8th International Conference on Cybernetics, Cognition &amp; Machine Learning Applications.</p>" +
        '<p class="footer__ieee">IEEE Conference Record #71579 · Technically Co-Sponsored by the IEEE Germany Section</p>' +
      "</div>" +
      '<div class="footer__cols">' +
        '<div><h4>Conference</h4><a href="about.html">About</a><a href="committee.html">Committee</a><a href="call-for-papers.html">Call for Papers</a><a href="registration.html">Proceedings</a></div>' +
        '<div><h4>Participate</h4><a class="js-submit" href="' + SUBMIT_URL + '" target="_blank" rel="noopener">Submit Paper</a><a href="author-instructions.html">Author Instructions</a><a href="registration.html">Registration</a><a href="contact.html">Contact</a></div>' +
        '<div><h4>Conference</h4><a href="contact.html">Germany · Hybrid</a><a href="about.html">Oct 5–6, 2026</a><a href="mailto:' + EMAIL + '">' + EMAIL + "</a></div>" +
      "</div>" +
    "</div>" +
    '<div class="footer__bottom"><span>© 2026 ICCCMLA. All rights reserved.</span>' +
      '<span class="footer__legal"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="refund.html">Refund</a></span>' +
      '<span class="footer__credit">October 5–6, 2026 · Germany · Hybrid</span></div></footer>';
  }

  /* ---- behaviors ---- */
  function wireMenu() {
    var burger = document.getElementById("burger");
    var menu = document.getElementById("mobileMenu");
    if (!burger || !menu) return;
    function toggle(force) {
      var open = force != null ? force : !menu.classList.contains("open");
      menu.classList.toggle("open", open);
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-hidden", String(!open));
    }
    burger.addEventListener("click", function () { toggle(); });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { toggle(false); }); });
  }

  function wireReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  function wireCounters() {
    var nums = document.querySelectorAll(".stat__num[data-count]");
    if (!nums.length || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
    function animate(node) {
      var end = parseInt(node.getAttribute("data-count"), 10);
      var suffix = node.getAttribute("data-suffix") || "";
      var plain = node.getAttribute("data-plain") === "1";
      var dur = 1400, start = null;
      function fmt(v) { return plain ? String(v) : v.toLocaleString("en-US"); }
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);
        node.textContent = fmt(Math.round(end * e)) + suffix;
        if (p < 1) requestAnimationFrame(step); else node.textContent = fmt(end) + suffix;
      }
      requestAnimationFrame(step);
    }
  }

  function wireCountdown() {
    var el = document.getElementById("countdown");
    if (!el) return;
    var target = new Date(CONF_DATE).getTime();
    var f = {
      days: el.querySelector('[data-cd="days"]'), hours: el.querySelector('[data-cd="hours"]'),
      mins: el.querySelector('[data-cd="mins"]'), secs: el.querySelector('[data-cd="secs"]')
    };
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) { el.innerHTML = '<div class="countdown__done">// ICCCMLA 2026 is underway. Welcome.</div>'; clearInterval(t); return; }
      f.days.textContent = Math.floor(diff / 86400000);
      f.hours.textContent = pad(Math.floor((diff % 86400000) / 3600000));
      f.mins.textContent = pad(Math.floor((diff % 3600000) / 60000));
      f.secs.textContent = pad(Math.floor((diff % 60000) / 1000));
    }
    tick(); var t = setInterval(tick, 1000);
  }

  function wireNetwork() {
    var canvas = document.getElementById("net");
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var nodes = [], W, H, raf, LINK = 140;
    function size() {
      var r = canvas.parentElement.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.min(70, Math.round((W * H) / 17000));
      nodes = [];
      for (var i = 0; i < count; i++) nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.26, vy: (Math.random() - 0.5) * 0.26, r: 1 + Math.random() * 1.5 });
    }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < nodes.length; i++) { var n = nodes[i]; n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > W) n.vx *= -1; if (n.y < 0 || n.y > H) n.vy *= -1; }
      for (var a = 0; a < nodes.length; a++) for (var b = a + 1; b < nodes.length; b++) {
        var dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) { var o = (1 - d / LINK) * 0.4; ctx.strokeStyle = "rgba(255,255,255," + o.toFixed(3) + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.stroke(); }
      }
      for (var k = 0; k < nodes.length; k++) { var p = nodes[k]; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = (k % 4 === 0) ? "rgba(227,173,49,.95)" : "rgba(255,255,255,.8)"; ctx.fill(); }
      raf = requestAnimationFrame(frame);
    }
    size(); frame();
    var to; window.addEventListener("resize", function () { clearTimeout(to); to = setTimeout(function () { cancelAnimationFrame(raf); size(); frame(); }, 200); });
  }

  function wireProgress() {
    var bar = document.createElement("div");
    bar.className = "progress";
    document.body.appendChild(bar);
    function update() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var h = document.getElementById("site-header");
    var f = document.getElementById("site-footer");
    if (h) h.outerHTML = buildHeader();
    if (f) f.outerHTML = buildFooter();
    wireMenu();
    wireReveal();
    wireCounters();
    wireCountdown();
    wireNetwork();
    wireProgress();
  });
})();
