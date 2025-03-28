"use client"
import Image, {StaticImageData} from "next/image";
import bartoszadamczyk from "../../public/image/bartoszadamczyk.webp";
import { interTightHeader } from "@/app/ui/fonts";
import Navbar from "@/app/lib/Navbar";
import Footer from "@/app/lib/Footer";
import Link from "next/link";
import sporton from "@/public/image/projects/sporton.webp"
import jrcz from "@/public/image/projects/jrcz.webp"
import oopgame from "@/public/image/projects/oopgame.webp"
import stepup from "@/public/image/projects/stepup.webp"
import { useTranslations } from "next-intl";
import ScrollAnimation from 'react-animate-on-scroll';
import React from "react";

const projects = [
    {
        src: sporton,
        alt: "Sporton project",
        title: "SportON",
        description: "A startup project that enhances the sports experience by providing a platform for broad finding, simple reserving, and easy accessing of sports facilities",
        link: "https://sporton.online",
        linkText: "Website"
    },
    {
        src: stepup,
        alt: "StepUP! project",
        title: "StepUp",
        description: "An application that connects people through sports It tracks your performance during activity and it also allows you to meet/chat with other sport colleagues",
        link: "https://github.com/Bartan02/positive-health-int-team-2",
        linkText: "Source code"
    },
    {
        src: jrcz,
        alt: "JRCZ Temperature Monitoring Application project",
        title: "JRCZ Temperature Monitoring Application",
        description: "An application that provides with clear visualization of temperature room records inside Joint Research Center Zeeland building and thus helps monitor past temperatures in order to analyze and reduce energy waste"
    },
    {
        src: oopgame,
        alt: "OOP Educational Game",
        title: "OOP Educational Game",
        description: "An educational game for kids, aged around 8-10, about identity theft issue and preventing from it"
    }
];

interface TimelineItemProps {
    date: string;
    company: string;
    location: string;
    position: string;
    details: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, company, location, position, details }) => (
    <div className="relative flex justify-center items-center group">
        <div className="flex items-center justify-center w-4 h-4 rounded-full border border-[--about-me-headings] bg-[--about-me-headings] text-[--about-me-headings]"></div>
        <div className="w-[calc(100%)] p-4 text-left">
            <p>{date}</p>
            <p className="text-4xl flex">{company}</p>
            <p>{location}</p>
            <br />
            <p>{position}</p>
            <br />
            <ul className="list-disc list-inside">
                {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    </div>
);

interface ProjectItemProps {
    src: StaticImageData;
    alt: string;
    title: string;
    description: string;
    link?: string;
    linkText?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ src, alt, title, description, link, linkText }) => {
    const t = useTranslations("");
    return (
        <div className="relative">
        <Image src={src} alt={alt} className="image" />
        <div className="block absolute transition top-0 bottom-0 left-0 right-0 ease-linear h-full w-full hover:opacity-95 opacity-0 bg-[--portfolio]">
            <div className="text-white p-5 w-full text-center top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                <span className={`text-2xl lg:text-3xl ${interTightHeader.className}`}>{title}</span>
                <br /><br />
                <span className="lg:text-lg">{t(description)}</span>
                {link && (
                    <>
                        <br /><br />
                        <span>
                                <Link href={link} className="underline decoration-1" target="_blank">{t(linkText)}</Link>
                            </span>
                    </>
                )}
            </div>
        </div>
    </div>
    )};

export default function Home() {
    const t = useTranslations("");
    return (
        <>
            <Navbar />
            <section className="h-svh w-full bg-[--landing-screen] flex sm:justify-start justify-center overflow-hidden">
                <div className="content-end sm:ml-12 lg:ml-16 xl:ml-24 2xl:ml-32">
                    <Image
                        className="sm:w-[calc(100px+15vw+30vh)] w-[calc(200px+10vw+10vh)] pointer-events-none"
                        src={bartoszadamczyk}
                        alt="Bartosz Adamczyk Photo"
                    />
                </div>
                <div className={`absolute right-7 sm:right-14 xl:right-32 2xl:top-1/2 lg:top-[25vw] sm:top-[23vw] top-[calc(17vw+10vh)] text-right -translate-y-1/2 ${interTightHeader.className}`}>
                    <span className="text-shadow-pop-right tracking-wide text-white text-[calc(24px+5vw)] leading-none inline-block">BARTOSZ <br /> ADAMCZYK</span>
                </div>
                <div className={`absolute right-7 sm:right-14 xl:right-32 2xl:top-3/4 lg:top-[40vw] sm:top-[35vw] sm:block hidden top-[calc(35vw+10vh)] text-right -translate-y-1/2 ${interTightHeader.className}`}>
                    <span className="motion-preset-oscillate motion-duration-2000 tracking-wide text-[--font] text-md sm:text-2xl leading-none inline-block">{t('#discover')} &#x2193;</span>
                </div>
            </section>
            <section id="about-me" className="w-full text-white block lg:grid lg:grid-cols-[48%,2%,48%] lg:gap-3 min-h-[500px] h-fit bg-[--about-me] place-items-center">
                <div className={`${interTightHeader.className} pt-10 lg:pt-0 text-center text-[calc(24px+4vw)]`}>
                    <ScrollAnimation animateIn="text-shadow-pop-about-me" animateOnce={true} initiallyVisible={true}>
                        {t('About me')}
                    </ScrollAnimation>
                </div>
                <div className="w-[1px] h-3/5 bg-white lg:block hidden"></div>
                <div className="lg:text-2xl text-xl lg:pl-10 lg:pr-20 p-10">
                    {t(`I am Bartosz Adamczyk, currently ICT student at HZ University of Applied Sciences, with a passion for technology, innovation, and creating impactful digital experiences`)}&nbsp;
                    {t(`I would like to introduce mainly my educational and professional background more in details on this page`)}&nbsp;
                    {t(`I am keen on programming and solving technical problems`)}&nbsp;
                    {t('I want to make world a better place through creating various applications, programs and websites')}&nbsp;
                    {t(`It gives me a lot of pleasure and satisfaction`)}&nbsp;
                    {t(`Beyond tech, I love exploring new places, listening to great music, and embracing new experiences that fuel my creativity`)}
                </div>
            </section>
            <section className="w-full p-5 py-12 md:p-20 min-h-screen bg-[--background]">
                <ScrollAnimation animateIn="motion-preset-slide-right" animateOnce={true}>
                    <section>
                        <div className={`${interTightHeader.className} pb-5 text-center text-[--about-me-headings] text-[calc(10vw)] md:text-[calc(24px+4vw)]`}>
                            {t('Experience')}
                        </div>
                        <div className="xl:px-[calc(15vw)] lg:px-[calc(7vw)]">
                            <div className="space-y-8 text-2xl relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:bg-[--about-me-headings] before:to-transparent">
                                <TimelineItem
                                    date={`${t('February')} 2025 - ${t('Current')}`}
                                    company="Joint Research Center Zeeland"
                                    location={t('Middelburg, Netherlands')}
                                    position={t('Internship')}
                                    details={[t("Software Engineering Internship")]}
                                />
                                <TimelineItem
                                    date={`${t('May')} 2021`}
                                    company="Diebold Nixdorf"
                                    location={t('Warsaw, Poland')}
                                    position={t('Apprenticeship')}
                                    details={[t(`Creating the web application for searching appropriate install files for ATM machines and the desktop application changing some properties on Windows`)]}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="pt-20">
                        <div className={`${interTightHeader.className} pb-5 text-center text-[--about-me-headings] text-[calc(10vw)] md:text-[calc(24px+4vw)]`}>
                            {t('Education')}
                        </div>
                        <div className="xl:px-[calc(15vw)] lg:px-[calc(7vw)]">
                            <div className="space-y-8 text-2xl relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:bg-[--about-me-headings] before:to-transparent">
                                <TimelineItem
                                    date={`${t('September')} 2022 - ${t('Current')}`}
                                    company={t('HZ University of Applied Sciences')}
                                    location={t('Middelburg, Netherlands')}
                                    position={t('BSc | Information and Communication Technology')}
                                    details={[]}
                                />
                                <TimelineItem
                                    date={`${t('September')} 2024 - ${t('January')} 2025`}
                                    company={t('The Hague University of Applied Sciences')}
                                    location={t('Zoetermeer, Netherlands')}
                                    position={t('Minor | "Becoming the next successful online startup"')}
                                    details={[]}
                                />
                                <TimelineItem
                                    date={`${t('September')} 2018 - ${t('April')} 2022`}
                                    company={t('Technical Secondary School of Mechatronics No 1')}
                                    location={t('Warsaw, Poland')}
                                    position={t('High School Diploma + Vocational qualifications')}
                                    details={[t(`Passed and received EE08 (Installation and operation of computer systems, peripherals and networks) and EE09 (Programming, development and administration of websites and databases) qualifications issued by CKE (Polish examination board)`)]}
                                />
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </section>
            <section id="portfolio" className="w-full text-white block lg:grid lg:grid-cols-[48%,2%,48%] lg:gap-3 md:min-h-[500px] h-fit bg-[--portfolio] place-items-center">
                <div className={`${interTightHeader.className} pt-10 lg:pt-0 text-center text-[calc(24px+4vw)] lg:order-last`}>
                    <ScrollAnimation animateIn="text-shadow-pop-portfolio" animateOnce={true} initiallyVisible={true}>
                        Portfolio
                    </ScrollAnimation>
                </div>
                <div className="w-[1px] h-3/5 bg-white lg:block hidden"></div>
                <div className="lg:text-2xl text-xl lg:pl-20 lg:pr-10 p-10 lg:order-first">
                    {t('Explore a collection of websites and applications developed with a focus on simplicity, functionality, and continuous improvement')}.&nbsp;
                    {t('These projects highlight a growing passion for technology and problem-solving')}
                </div>
            </section>
            <section className="w-full p-5 py-12 md:p-20 bg-[--background]">
                <ScrollAnimation animateIn="motion-preset-slide-left" animateOnce={true}>
                    <div>
                        <div className={`${interTightHeader.className} text-center text-[--portfolio-headings] text-[calc(8vw)] md:text-[calc(24px+4vw)]`}>
                            {t('University projects')}
                        </div>
                        <div className="text-center py-10">
                            {t('Hover (or click) on an image to find out more about a specific project')}
                        </div>
                        <div className="xl:px-[calc(15vw)] lg:px-[calc(7vw)] grid md:grid-cols-2 gap-3">
                            {projects.map((project, index) => (
                                <ProjectItem key={index} {...project} />
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>
            </section>
            <Footer />
        </>
    );
}