"use client"

import Navbar from "@/app/lib/elements/Navbar";
import Footer from "@/app/lib/sections/Footer";
import React from "react";
import Welcome from "@/app/lib/sections/Welcome";
import AboutMe from "@/app/lib/sections/AboutMe";
import Portfolio from "@/app/lib/sections/Portfolio";
import Experience from "@/app/lib/sections/Experience";
import UniversityProjects from "@/app/lib/sections/UniversityProjects";

export default function Home() {
    return (
        <>
            <Navbar />
            <Welcome />
            <AboutMe />
            <Experience />
            <Portfolio />
            <UniversityProjects />
            <Footer />
        </>
    );
}