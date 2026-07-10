document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = themeToggle?.querySelector("i");
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }

  const syncThemeButton = () => {
    const isLight = document.body.classList.contains("light-theme");
    themeToggle?.setAttribute("aria-pressed", String(isLight));

    if (themeIcon) {
      themeIcon.className = isLight ? "fa fa-sun-o" : "fa fa-moon-o";
    }
  };

  syncThemeButton();

  themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    syncThemeButton();
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.tab;

      document.querySelectorAll(".tab").forEach((button) => {
        button.classList.toggle("active", button === tab);
        button.setAttribute("aria-selected", String(button === tab));
      });

      document.querySelectorAll(".tab-panel").forEach((panel) => {
        const isActive = panel.id === targetId;
        panel.classList.toggle("active", isActive);
        panel.hidden = !isActive;
      });
    });
  });

  const currentYear = document.getElementById("current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});
