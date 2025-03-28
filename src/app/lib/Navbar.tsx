"use client"
import {useState, useEffect} from "react";
import Link from "next/link";
import {useTranslations } from "next-intl";
import LanguageSwitcher from "@/app/lib/LanguageSwitcher";
import DarkMode from "@/app/lib/DarkMode";

export default function Navbar() {
    const [toggled, setToggle] = useState(false);

    const t = useTranslations("");

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

    return (
        <nav id="nav" className="fixed m-8 text-xl right-0 md:right-5 z-20 bg-(--landing-screen) rounded-full p-2 px-3 sm:px-4">
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
                <LanguageSwitcher/>
                <DarkMode/>
                <div className={'md:hidden flex'}>
                    <div className="inline-block cursor-pointer w-[24px] h-[24px] xl:hidden content-center" onClick={() => {setToggle(!toggled)}}>
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
            <div className={`mobile-nav ${toggled ? "fixed" : "hidden"} w-full h-dvh top-0 left-0 -z-10 opacity-100 bg-(--background) content-center text-center text-6xl`}>
                <ul>
                    <li className="hover:font-[900] py-5">
                        <Link href="#about-me" onClick={() => {setToggle(!toggled)}}>{t('About me')}</Link>
                    </li>
                    <li className="hover:font-[900] py-5">
                        <Link href="#portfolio" onClick={() => {setToggle(!toggled)}}>{t('Portfolio')}</Link>
                    </li>
                    <li className="hover:font-[900] py-5">
                        <Link href="#contact-me" onClick={() => {setToggle(!toggled)}}>{t('Contact')}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}