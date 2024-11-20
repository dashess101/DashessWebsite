(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
    var themeToggleBtn = document.getElementById("theme-toggle");
    if (!themeToggleDarkIcon || !themeToggleLightIcon || !themeToggleBtn) {
      return;
    }
    if (!localStorage.getItem("color-theme") || localStorage.getItem("color-theme") === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.classList.remove("hidden");
    }
    themeToggleBtn.addEventListener("click", function() {
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    });
  });
})();
