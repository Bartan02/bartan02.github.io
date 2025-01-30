"use client"
import {useState, useEffect, useLayoutEffect} from "react";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import darkModeOff from "@/public/image/icons/icons8-dark-mode-32.png";
import darkModeOn from "@/public/image/icons/icons8-do-not-disturb-ios-32.png";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';
import uk_icon from '@/public/image/icons/header/flags/united-kingdom.png';
import nl_icon from '@/public/image/icons/header/flags/netherlands.png';
import fr_icon from '@/public/image/icons/header/flags/france.png';
import pl_icon from '@/public/image/icons/header/flags/poland.png';

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

    const SCROLLED_STATE_CLASS = "shadow-lg"

    const onScroll = () => {
        const navbar = document.getElementById("nav")!;
        const scroll = document.documentElement.scrollTop
        if (scroll > 0) {
            navbar.classList.add(SCROLLED_STATE_CLASS);
        } else {
            navbar.classList.remove(SCROLLED_STATE_CLASS)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    }, []);

    // Language switcher

    const [isLanguageSwitch, setIsLanguageSwitch] = useState(false);

    function changeLanguage(targetLang: string) {
        setIsLanguageSwitch(!isLanguageSwitch)
        if(locale !== targetLang){
            const currentPath = window.location.pathname.slice(3);
            const targetPath = '/' + targetLang + currentPath;
            router.push(targetPath);
        }
        return undefined;
    }

    const [imageSrc, setImageSrc] = useState<StaticImageData>(uk_icon);

    useLayoutEffect(() => {
        switch(locale){
            case 'en':
                setImageSrc(uk_icon);
                break;
            case 'fr':
                setImageSrc(fr_icon);
                break;
            case 'nl':
                setImageSrc(nl_icon);
                break;
            case 'pl':
                setImageSrc(pl_icon);
                break;
        }
    }, []);

    return (
        <nav id="nav" className="fixed m-8 text-xl right-0 md:right-5 z-20 bg-[--landing-screen] rounded-full p-2 px-3 sm:px-4">
            <div className="navlist list-none flex gap-4 items-center">
                <div className={'md:flex hidden gap-4'}>
                    <span>
                        <Link href="#about-me">{t('About me')}</Link>
                    </span>
                    <span>
                        <Link href="#portfolio">{t('Portfolio')}</Link>
                    </span>
                    <span>
                        <Link href="#contact-me">{t('Contact')}</Link>
                    </span>
                </div>
                <div className={'cursor-pointer transition-all'}>
                    <Image src={imageSrc} alt={'Flag'} onClick={() => {setIsLanguageSwitch(!isLanguageSwitch)}}/>
                    <div className={`z-0 gap-4 text-sm absolute bg-[--landing-screen] p-3 px-6 rounded-full shadow-2xl md:left-[65px] -left-40 md:top-16 top-12 ${isLanguageSwitch ? "flex motion-preset-slide-down motion-duration-200" : 'hidden'}`}>
                        <div className={'flex flex-col items-center gap-1 hover:bg-[--highlight] rounded'} onClick={() => {changeLanguage('en')}}>
                            <Image src={uk_icon} alt={'UK flag'}/>
                            english
                        </div>
                        <div className={'flex flex-col items-center gap-1 hover:bg-[--highlight] rounded'} onClick={() => {changeLanguage('fr')}}>
                            <Image src={fr_icon} alt={'FR flag'}/>
                            français
                        </div>
                        <div className={'flex flex-col items-center gap-1 hover:bg-[--highlight] rounded'} onClick={() => {changeLanguage('nl')}}>
                            <Image src={nl_icon} alt={'NL flag'}/>
                            nederlands
                        </div>
                        <div className={'flex flex-col items-center gap-1 hover:bg-[--highlight] rounded'} onClick={() => {changeLanguage('pl')}}>
                            <Image src={pl_icon} alt={'PL flag'}/>
                            polski
                        </div>
                    </div>
                    <div className={`-z-10 absolute border-x-[20px] border-x-transparent border-b-[25px] border-b-[--landing-screen] md:top-12 md:right-12 right-[84px] top-11 ${isLanguageSwitch ? "block motion-preset-slide-down motion-duration-200" : 'hidden'}`}></div>
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
                <div className={'md:hidden flex'}>
                    <div className="inline-block cursor-pointer w-[24px] h-[24px] xl:hidden content-center" onClick={() => {setToggle(!toggled); setIsLanguageSwitch(false)}}>
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
                        <Link href="#about-me" onClick={() => {setToggle(!toggled); setIsLanguageSwitch(false)}}>{t('About me')}</Link>
                    </li>
                    <li className="hover:font-[900] py-5">
                        <Link href="#portfolio" onClick={() => {setToggle(!toggled); setIsLanguageSwitch(false)}}>{t('Portfolio')}</Link>
                    </li>
                    <li className="hover:font-[900] py-5">
                        <Link href="#contact-me" onClick={() => {setToggle(!toggled); setIsLanguageSwitch(false)}}>{t('Contact')}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}