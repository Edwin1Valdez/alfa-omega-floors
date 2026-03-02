// Mobile menu
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navMenu.style.display = expanded ? "none" : "flex";
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple form status (FormSubmit redirects by default; this just reassures users)
const form = document.getElementById("quoteForm");
const statusEl = document.getElementById("formStatus");

form?.addEventListener("submit", () => {
  statusEl.textContent = "Sending… If you don’t hear back soon, call/text (442) 278-8596.";
});
