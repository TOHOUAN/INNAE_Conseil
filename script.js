(function () {
  const header = document.getElementById("header");
  const burger = document.querySelector(".nav-burger");
  const drawer = document.querySelector(".nav-drawer");

  if (!burger || !drawer || !header) return;

  // Par défaut : menu fermé
  burger.setAttribute("aria-expanded", "false");
  drawer.hidden = true;

  const toggle = () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    drawer.hidden = open;
  };

  burger.addEventListener("click", toggle);

  // Ferme au clic sur un lien
  drawer.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    burger.setAttribute("aria-expanded", "false");
    drawer.hidden = true;
  });

  // Scroll offset (navbar sticky)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;

      const el = document.querySelector(id);
      if (!el) return;

      e.preventDefault();

      const headerH = header.offsetHeight || 76;
      const y = el.getBoundingClientRect().top + window.scrollY - headerH - 10;

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
})();