import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import ProfessionalExperience from "@/app/lib/sections/ProfessionalExperience";
import SchoolExperience from "@/app/lib/sections/SchoolExperience";

export default function Experience() {
    return (
        <section className="w-full p-5 py-12 md:p-20 min-h-screen bg-(--background)">
            <ScrollAnimation animateIn="motion-preset-slide-right" animateOnce={true}>
                <ProfessionalExperience />
                <SchoolExperience />
            </ScrollAnimation>
        </section>
    );
}