const aboutReadMoreToggle = document.querySelector(".about-read-more-toggle");

if (aboutReadMoreToggle) {
  const aboutContent = aboutReadMoreToggle.closest(".about-section__content");

  if (aboutContent) {
    aboutReadMoreToggle.addEventListener("click", () => {
      const isExpanded = aboutContent.classList.toggle("is-expanded");

      aboutReadMoreToggle.setAttribute("aria-expanded", String(isExpanded));
      aboutReadMoreToggle.textContent = isExpanded ? "Zwiń" : "Czytaj dalej";
    });
  }
}
