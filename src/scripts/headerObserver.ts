const button = document.querySelector<HTMLButtonElement>("#menu-button");
const menu = document.querySelector<HTMLElement>("#main-menu");
const navList = document.querySelector<HTMLUListElement>("#main-menu > ul");
const navItems = document.querySelectorAll<HTMLAnchorElement>(".nav-item");
const indicator = document.querySelector<HTMLElement>("#nav-indicator");
// @ts-ignore
const langMenu = document.querySelector<HTMLElement>("#lang-menu");
// @ts-ignore
const langBtn = document.querySelector<HTMLButtonElement>("#lang-menu-button");
const siteHeader = document.querySelector<HTMLElement>("#site-header");
const siteLogo = document.querySelector<HTMLElement>("#site-logo");

let activeItem: HTMLAnchorElement | null = null;

// Move indicator to target or hide it
const updateIndicator = (target: HTMLElement | null) => {
    if (!indicator || !navList) return;

    if (!target) {
        indicator.classList.add("opacity-0");
        return;
    }

    const navRect = navList.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const left = targetRect.left - navRect.left;
    const width = targetRect.width;

    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.width = `${width}px`;
    indicator.classList.remove("opacity-0");
};

const setActiveItem = (item: HTMLAnchorElement | null) => {
    if (activeItem === item) return;

    navItems.forEach((el) => el.classList.remove("text-white"));
    activeItem = item;

    if (activeItem) {
        activeItem.classList.add("text-white");
    }
    updateIndicator(activeItem);
};

// Toggle mobile menu
const toggleMenu = (e?: Event) => {
    e?.stopPropagation();

    const isOpening = menu?.classList.contains("hidden");

    if (isOpening) {
        langMenu?.classList.add("hidden");
        langBtn?.setAttribute("aria-expanded", "false");
    }

    menu?.classList.toggle("hidden");
    const isHidden = menu?.classList.contains("hidden");
    button?.setAttribute("aria-expanded", `${!isHidden}`);
};

button?.addEventListener("click", toggleMenu);

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        menu?.classList.add("hidden");
        button?.setAttribute("aria-expanded", "false");
    });
});

// Close main navigation when clicking outside
document.addEventListener("click", (e: MouseEvent) => {
    const targetNode = e.target as Node | null;
    if (!menu?.contains(targetNode) && !button?.contains(targetNode)) {
        menu?.classList.add("hidden");
        button?.setAttribute("aria-expanded", "false");
    }
});

// Handle header styling & active link detection on scroll
const onScroll = () => {
    // 1. Header Background & Logo
    const scrollThreshold = 600;
    if (window.scrollY > scrollThreshold) {
        siteHeader?.classList.remove("bg-transparent");
        siteHeader?.classList.add("bg-black");
        siteLogo?.classList.remove("opacity-0", "pointer-events-none");
        siteLogo?.classList.add("opacity-100");
    } else {
        siteHeader?.classList.remove("bg-black");
        siteHeader?.classList.add("bg-transparent");
        siteLogo?.classList.remove("opacity-100");
        siteLogo?.classList.add("opacity-0", "pointer-events-none");
    }

    // 2. Active Section Detection
    const sections: { el: HTMLElement; item: HTMLAnchorElement }[] = [];

    navItems.forEach((item) => {
        const href = item.getAttribute("href");
        if (href?.startsWith("#")) {
            const el = document.querySelector<HTMLElement>(href);
            if (el) {
                sections.push({ el, item });
            }
        }
    });

    if (sections.length === 0 || !sections[0]) return;

    // Viewport trigger line (35% from the top of the screen)
    const triggerPoint = window.innerHeight * 0.35;

    // ONLY reset in Hero area
    const firstSectionTop = sections[0].el.getBoundingClientRect().top;
    if (firstSectionTop > triggerPoint) {
        setActiveItem(null);
        return;
    }

    // Keep the indicator active on the latest section passed
    let current: HTMLAnchorElement = sections[0].item;
    for (const { el, item } of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
            current = item;
        }
    }

    setActiveItem(current);
};

// Run on scroll and resize
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => {
    onScroll();
    if (activeItem) updateIndicator(activeItem);
});

// Initial call
onScroll();