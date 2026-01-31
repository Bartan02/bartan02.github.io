import Image from "next/image";
import darkModeOn from "@/public/image/icons/icons8-do-not-disturb-ios-32.png";
import darkModeOff from "@/public/image/icons/icons8-dark-mode-32.png";
import {useEffect, useState} from "react";

export default function DarkMode(){
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

    return(
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
    );
}