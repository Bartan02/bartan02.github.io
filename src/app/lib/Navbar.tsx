"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import darkModeOff from "@/public/image/icons/icons8-dark-mode-32.png";
import darkModeOn from "@/public/image/icons/icons8-do-not-disturb-ios-32.png";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const [toggled, setToggle] = useState(false);
    // State for tracking dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effect for syncing dark mode with system preferences
    useEffect(() => {
        const useDark = window.matchMedia("(prefers-color-scheme: dark)");

        const syncWithSystem = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

        // Initialize state with system preference
        setIsDarkMode(useDark.matches);

        // Add listener for system preference changes
        useDark.addEventListener("change", syncWithSystem);

        // Cleanup listener on component unmount
        return () => useDark.removeEventListener("change", syncWithSystem);
    }, []);

    // Toggle dark mode manually
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    // Update document class based on dark mode state
    useEffect(() => {
        document.documentElement.classList.toggle("dark-mode", isDarkMode);
    }, [isDarkMode]);

    const t = useTranslations("");

    const locale = useLocale();

    const router = useRouter()


    return (
        <nav className="fixed m-8 text-xl right-0 md:right-5 z-20">
            <div className="navlist list-none flex gap-4 items-center">
                <div className={'md:flex hidden gap-4 transition'}>
                    <span className="hover:font-[900]">
                        <Link href="#about-me">{t('About me')}</Link>
                    </span>
                    <span className="hover:font-[900]">
                        <Link href="#portfolio">{t('Portfolio')}</Link>
                    </span>
                    <span className="hover:font-[900]">
                        <Link href="#contact-me">{t('Contact')}</Link>
                    </span>
                </div>
                <div className={'gap-4 cursor-pointer'}>
                    <select name="lang" id="lang" className={'bg-transparent border-0'} value={locale} onChange={async e => {
                        const currentPath = window.location.pathname.slice(3)
                        const targetPath = '/' + e.target.value + currentPath
                        router.push(targetPath)
                    }}>
                        <option value="en">EN</option>
                        <option value="fr">FR</option>
                        <option value="nl">NL</option>
                        <option value="pl">PL</option>
                    </select>
                </div>
                <span
                    className="hover:font-[900] hover:cursor-pointer"
                    onClick={toggleDarkMode}
                >
                    <Image
                        alt="Dark mode toggle button"
                        src={isDarkMode ? darkModeOn : darkModeOff}
                        width={24}
                        height={24}
                    />
                </span>
                <div className={'md:hidden flex gap-4'}>
                    <div className="inline-block cursor-pointer w-[24px] h-[24px] xl:hidden content-center" onClick={() => setToggle(!toggled)}>
                        <div
                            className={`${toggled ? "change" : ""}`}
                        >
                            <div className={`bar1`}></div>
                            <div className={`bar2`}></div>
                            <div className={`bar3`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mobile-nav ${toggled ? "fixed" : "hidden"} w-full h-dvh top-0 left-0 -z-10 opacity-100 bg-[--background] content-center text-center text-6xl`}>
                <ul>
                    <li className="hover:font-[900] py-5">
                        <Link href="#about-me" onClick={() => setToggle(!toggled)}>{t('About me')}</Link>
                    </li>
                    <li className="hover:font-[900] py-5">
                        <Link href="#portfolio" onClick={() => setToggle(!toggled)}>{t('Portfolio')}</Link>
                    </li>
                    <li className="hover:font-[900] py-5">
                        <Link href="#contact-me" onClick={() => setToggle(!toggled)}>{t('Contact')}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}