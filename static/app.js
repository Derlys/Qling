const root = document.documentElement;
const btn = document.getElementById("toggle-theme");
const KEY = "qling-theme";

function applyTheme(mode) {
  root.setAttribute("data-theme", mode);
  localStorage.setItem(KEY, mode);
  if (btn) btn.textContent = mode === "dark" ? "☀️ light mode" : "🌙 Dark mode";
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  applyTheme(localStorage.getItem(KEY) || "light");
  if (btn) {
    btn.addEventListener("click", () => {
      const next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  const quoteBtn = document.getElementById("new-quote");
  if (quoteBtn) {
    quoteBtn.addEventListener("click", getQuote);
    getQuote();
  }
}

async function getQuote() {
  const el = document.getElementById("quote");
  const spinner = document.getElementById("spinner");
  if (!el || !spinner) return;

  spinner.classList.remove("hidden");
  el.textContent = "";

  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 6000);

  try {
    const res = await fetch("https://api.quotable.io/random", {
      signal: controller.signal,
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    el.textContent = `“${data.content}” — ${data.author}`;
  } catch (err) {
    console.error("[quote] error:", err);
    el.textContent = "Error al obtener la frase 😢";
  } finally {
    clearTimeout(t);
    spinner.classList.add("hidden");
  }
}
