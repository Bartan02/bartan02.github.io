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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeLink = document.querySelector(`.nav-item[href="#${entry.target.id}"]`);
        setActiveItem(activeLink as HTMLAnchorElement);
      }
    });
  }, { rootMargin: "-35% 0px -65% 0px" });

  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href?.startsWith("#")) {
      const el = document.querySelector<HTMLElement>(href);
      if (el) observer.observe(el);
    }
  });
};

// Run on scroll and resize
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => {
    onScroll();
    if (activeItem) updateIndicator(activeItem);
});

// Initial call
onScroll();