const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const searchInput = document.querySelector("#categorySearch");
const categoryCards = [...document.querySelectorAll(".category-card")];

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

searchInput?.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  categoryCards.forEach((card) => {
    const text = `${card.textContent} ${card.dataset.keywords ?? ""}`.toLowerCase();
    card.hidden = query.length > 0 && !text.includes(query);
  });
});
