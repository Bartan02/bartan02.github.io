import ScrollAnimation from "react-animate-on-scroll";
import {interTightHeader} from "@/app/style/fonts";
import React from "react";
import {useI18n} from "@/hooks/useI18n";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import Project from "@/app/lib/interfaces/Project";
import projectsData from "@/public/data/university_projects.json";

import prv from "@/public/image/projects/prv.webp";
import sporton from "@/public/image/projects/sporton.webp";
import stepup from "@/public/image/projects/stepup.webp";
import jrcz from "@/public/image/projects/jrcz.webp";
import oopgame from "@/public/image/projects/oopgame.webp";

// Map the string identifiers from JSON to StaticImageData imports
const imageMap: Record<string, StaticImageData> = {
    "prv": prv,
    "sporton": sporton,
    "stepup": stepup,
    "jrcz": jrcz,
    "oopgame": oopgame
};

// Transform JSON data into Project array
const universityProjects: Project[] = projectsData.map((data) => ({
    src: imageMap[data.src],
    alt: data.alt,
    title: data.title,
    description: data.description,
    link: data.link ?? null,
    linkText: data.linkText ?? null
}));

const ProjectItem: React.FC<Project> = ({ src, alt, title, description, link, linkText }) => {
    const {t} = useI18n({ namespace: 'common' })
    return (
        <div className="relative">
            <Image src={src} alt={alt} className="image" />
            <div className="block absolute transition top-0 bottom-0 left-0 right-0 ease-linear h-full w-full hover:opacity-95 active:opacity-95 opacity-0 bg-(--portfolio)">
                <div className="text-white p-5 w-full text-center top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                    <span className={`text-xl xl:text-2xl ${interTightHeader.className}`}>{title}</span>
                    <br /><br />
                    <p className="text-sm xl:text-sm leading-none">{t(description)}</p>
                    {link && linkText &&
                        <span className={"pt-2 block"}>
                            <Link href={link} className="underline decoration-1 text-sm" target="_blank">{t(linkText)}</Link>
                        </span>
                    }
                </div>
            </div>
        </div>
    )};

export default function UniversityProjects() {
    const {t} = useI18n({ namespace: 'common' });
    return (
        <section className="w-full p-5 py-12 md:p-20 bg-(--background)">
            <ScrollAnimation animateIn="motion-preset-slide-left" animateOnce={true}>
                <div>
                    <div className={`${interTightHeader.className} text-center text-(--portfolio-headings) text-[calc(8vw)] md:text-[calc(24px+4vw)]`}>
                        {t('University projects')}
                    </div>
                    <div className="text-center pt-5 pb-10">
                        {t('Hover or hold your finger (mobile) on an image to find out more about a specific project')}
                    </div>
                    <div className="xl:px-[calc(15vw)] lg:px-[calc(7vw)] grid md:grid-cols-2 gap-3">
                        {universityProjects.map((project, index) => (
                            <ProjectItem key={index} {...project} />
                        ))}
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
}