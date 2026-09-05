import type {SiteConfig} from "@types";

export const SHARED_CONFIG = {
    author: "Bartosz Adamczyk",
    siteLogoIcon: "/icons/header/badamczykicon.svg",
    socialLinks: [
        { text: "LinkedIn", href: "https://linkedin.com/in/bartosz-a/" },
        { text: "Github", href: "https://github.com/Bartan02/" },
        { text: "Email", href: "mailto://contact@badamczyk.eu" },
    ],
    socialImage: "/og-photo.jpg",
    canonicalURL: "https://badamczyk.eu",
}

export const SITE_CONFIG: Record<string, SiteConfig> = {
    en: {
        title: "Bartosz Adamczyk - Software Developer",
        description: "A portfolio website of Bartosz Adamczyk, outlining previous software development experience, personal projects, and university assignments. This site serves as a central place to view past technical work and provides contact details for networking, recruitment, or potential collaboration.",
        lang: "en",
        langLabel: "english",
        langFlag: "/icons/header/flags/united-kingdom.png",
        navLinks: [
            { text: "About", href: "#about" },
            { text: "Experience", href: "#experience" },
            { text: "Projects", href: "#projects" },
            { text: "Contact", href: "#contact" },
        ],
        ...SHARED_CONFIG
    },
    fr: {
        title: "Bartosz Adamczyk - Software Développeur",
        description:
            "Un site portfolio de Bartosz Adamczyk, partageant des expériences passées en développement logiciel, des projets personnels et des travaux universitaires. Ce site sert d'espace central pour consulter des réalisations techniques antérieures et fournit des coordonnées pour le réseautage, le recrutement ou d'éventuelles collaborations.",
        lang: "fr",
        langLabel: "français",
        langFlag: "/icons/header/flags/france.png",
        navLinks: [
            { text: "À propos", href: "#about" },
            { text: "Expérience", href: "#experience" },
            { text: "Projets", href: "#projects" },
            { text: "Contact", href: "#contact" },
        ],
        ...SHARED_CONFIG
    },
    nl: {
        title: "Bartosz Adamczyk - Softwareontwikkelaar",
        description:
            "Een portfoliowebsite van Bartosz Adamczyk, met eerdere ervaring in softwareontwikkeling, persoonlijke projecten en opdrachten vanuit de universiteit. Deze site dient als een centrale plek om eerder technisch werk te bekijken en biedt contactgegevens voor netwerken, werving of mogelijke samenwerking.",
        lang: "nl",
        langLabel: "nederlands",
        langFlag: "/icons/header/flags/netherlands.png",
        navLinks: [
            { text: "Over Mij", href: "#about" },
            { text: "Ervaring", href: "#experience" },
            { text: "Projecten", href: "#projects" },
            { text: "Contact", href: "#contact" },
        ],
        ...SHARED_CONFIG
    },
    pl: {
        title: "Bartosz Adamczyk - Software Developer",
        description:
            "Strona typu portfolio, której autorem jest Bartosz Adamczyk, opisująca dotychczasowe doświadczenie w programowaniu, projekty osobiste oraz prace uczelniane. Witryna służy jako miejsce do zapoznania się z wcześniejszymi realizacjami technicznymi i udostępnia dane kontaktowe w celach zawodowych, rekrutacyjnych lub networkingowych.",
        lang: "pl",
        langLabel: "polski",
        langFlag: "/icons/header/flags/poland.png",
        navLinks: [
            { text: "O mnie", href: "#about" },
            { text: "Doświadczenie", href: "#experience" },
            { text: "Projekty", href: "#projects" },
            { text: "Kontakt", href: "#contact" },
        ],
        ...SHARED_CONFIG
    },
};