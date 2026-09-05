// @ts-ignore
const langBtn = document.querySelector("#lang-menu-button");
// @ts-ignore
const langMenu = document.querySelector("#lang-menu");
const mainMenu = document.querySelector("#main-menu");
const menuBtn = document.querySelector("#menu-button");

// Toggle Language Menu
const toggleLangMenu = (e: Event) => {
    e.stopPropagation();

    const isOpening = langMenu?.classList.contains("hidden");

    if (isOpening) {
        mainMenu?.classList.add("hidden");
        menuBtn?.setAttribute("aria-expanded", "false");
    }

    langMenu?.classList.toggle("hidden");
    const isHidden = langMenu?.classList.contains("hidden");
    langBtn?.setAttribute("aria-expanded", `${!isHidden}`);
};

langBtn?.addEventListener("click", toggleLangMenu);

document.addEventListener("click", (e) => {
    if (!langMenu?.contains(e.target as Node) && e.target !== langBtn) {
        langMenu?.classList.add("hidden");
        langBtn?.setAttribute("aria-expanded", "false");
    }
});