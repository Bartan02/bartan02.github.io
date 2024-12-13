"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import darkModeOff from "@/public/image/icons/icons8-dark-mode-32.png";
import darkModeOn from "@/public/image/icons/icons8-do-not-disturb-ios-32.png";

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

    return (
        <nav className="fixed m-8 text-xl right-5 z-20">
            <div className="navlist list-none flex gap-4">
                <div className={'md:flex hidden gap-4 transition'}>
                    <span className="hover:font-[900]">
                        <Link href="#about-me">About me</Link>
                    </span>
                    <span className="hover:font-[900]">
                        <Link href="#portfolio">Portfolio</Link>
                    </span>
                    <span className="hover:font-[900]">
                        <Link href="#contact-me">Contact</Link>
                    </span>
                </div>
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
            </div>
            <div className={`mobile-nav ${toggled ? "fixed" : "hidden"} w-full h-dvh top-0 left-0 -z-10 opacity-100 bg-[--background] content-center text-center text-6xl`}>
                <ul>
                    <li className="hover:font-[900] py-5">
                        <Link href="#about-me" onClick={() => setToggle(!toggled)}>About me</Link>
                    </li>
                    <li className="hover:font-[900] py-5">
                        <Link href="#portfolio" onClick={() => setToggle(!toggled)}>Portfolio</Link>
                    </li>
                    <li className="hover:font-[900] py-5">
                        <Link href="#contact-me" onClick={() => setToggle(!toggled)}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}