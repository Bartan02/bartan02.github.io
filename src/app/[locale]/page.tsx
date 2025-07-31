"use client"
import Image, {StaticImageData} from "next/image";
import badamczykwhite from "../../public/image/logos/badamczykwhite.svg";
import badamczyk from "../../public/image/bartoszadamczyk.webp";
import { interTightHeader } from "@/app/ui/fonts";
import Navbar from "@/app/lib/Navbar";
import Footer from "@/app/lib/Footer";
import Link from "next/link";
import sporton from "@/public/image/projects/sporton.webp"
import jrcz from "@/public/image/projects/jrcz.webp"
import oopgame from "@/public/image/projects/oopgame.webp"
import stepup from "@/public/image/projects/stepup.webp"
import ScrollAnimation from 'react-animate-on-scroll';
import React from "react";
import {useI18n} from "@/hooks/useI18n";

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
        <div className="flex items-center justify-center w-4 h-4 rounded-full border border-(--about-me-headings) bg-(--about-me-headings) text-(--about-me-headings)"></div>
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
    const {t} = useI18n({ namespace: 'common' })
    return (
        <div className="relative">
        <Image src={src} alt={alt} className="image" />
        <div className="block absolute transition top-0 bottom-0 left-0 right-0 ease-linear h-full w-full hover:opacity-95 opacity-0 bg-(--portfolio)">
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
    const {t} = useI18n({ namespace: 'common' })
    return (
        <>
            <Navbar />
            <section className="h-svh w-full flex flex-col items-center overflow-hidden text-white">
                <div className={"absolute gradient -z-20 h-svh max-w-full"}></div>
                <div className="flex flex-col justify-center items-center text-center w-full h-full motion-preset-shrink motion-delay-400">
                        <Image
                            className="w-[80vw] lg:w-[60vw] pointer-events-none"
                            src={badamczykwhite}
                            alt="Bartosz Adamczyk Logo"
                            priority={true}
                        />
                        <span className={`lg:text-4xl sm:text-2xl text-xl ${interTightHeader.className} pt-8 motion-preset-shrink motion-delay-500`}> Bartosz Adamczyk </span>
                </div>
                <span className={`motion-preset-oscillate motion-duration-2000 motion-delay-1500 tracking-wide text-lg m-8 ${interTightHeader.className}`}> {t("#discover")} &#x2193; </span>
            </section>
            <section id="about-me" className="w-full text-white block lg:grid lg:grid-cols-[48%_2%_48%] lg:gap-3 min-h-[750px] h-fit bg-(--about-me) place-items-center">
                <div className={`${interTightHeader.className} pt-10 lg:pt-0 text-center text-[calc(24px+4vw)]`}>
                    {t('About me')}
                </div>
                <div className="w-[1px] h-3/5 bg-white lg:block hidden"></div>
                <div className="lg:text-2xl text-xl lg:pl-10 lg:pr-20 p-10">
                    <Image
                        className="flex rounded-full w-2/3 lg:w-1/3 mx-auto lg:mx-0 pointer-events-none mb-7"
                        src={badamczyk}
                        alt="Bartosz Adamczyk picture"
                        width={1417}
                        height={1417}
                    />
                    {t(`I am Bartosz Adamczyk, currently ICT student at HZ University of Applied Sciences, with a passion for technology, innovation, and creating impactful digital experiences`)}&nbsp;
                    {t(`I would like to introduce mainly my educational and professional background more in details on this page`)}&nbsp;
                    {t(`I am keen on programming and solving technical problems`)}&nbsp;
                    {t('I want to make world a better place through creating various applications, programs and websites')}&nbsp;
                    {t(`It gives me a lot of pleasure and satisfaction`)}&nbsp;
                    {t(`Beyond tech, I love exploring new places, listening to great music, and embracing new experiences that fuel my creativity`)}
                </div>
            </section>
            <section className="w-full p-5 py-12 md:p-20 min-h-screen bg-(--background)">
                <ScrollAnimation animateIn="motion-preset-slide-right" animateOnce={true}>
                    <section>
                        <div className={`${interTightHeader.className} pb-5 text-center text-(--about-me-headings) text-[calc(10vw)] md:text-[calc(24px+4vw)]`}>
                            {t('Experience')}
                        </div>
                        <div className="xl:px-[calc(15vw)] lg:px-[calc(7vw)]">
                            <div className="space-y-8 text-2xl relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:bg-(--about-me-headings) before:to-transparent">
                                <TimelineItem
                                    date={`${t('February')} 2025 - ${t('July')} 2025`}
                                    company="Joint Research Center Zeeland"
                                    location={t('Middelburg, Netherlands')}
                                    position={t('Apprenticeship')}
                                    details={[t("Developing a 3D virtual anatomy application using C++ and Unreal Engine, aimed at supporting HZ’s nursing program (Verpleegkunde)")]}
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
                        <div className={`${interTightHeader.className} pb-5 text-center text-(--about-me-headings) text-[calc(10vw)] md:text-[calc(24px+4vw)]`}>
                            {t('Education')}
                        </div>
                        <div className="xl:px-[calc(15vw)] lg:px-[calc(7vw)]">
                            <div className="space-y-8 text-2xl relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:bg-(--about-me-headings) before:to-transparent">
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
            <section id="portfolio" className="w-full text-white block lg:grid lg:grid-cols-[48%_2%_48%] lg:gap-3 md:min-h-[500px] h-fit bg-(--portfolio) place-items-center">
                <div className={`${interTightHeader.className} pt-10 lg:pt-0 text-center text-[calc(24px+4vw)] lg:order-last`}>
                    Portfolio
                </div>
                <div className="w-[1px] h-3/5 bg-white lg:block hidden"></div>
                <div className="lg:text-2xl text-xl lg:pl-20 lg:pr-10 p-10 lg:order-first">
                    {t('Explore a collection of websites and applications developed with a focus on simplicity, functionality, and continuous improvement')}.&nbsp;
                    {t('These projects highlight a growing passion for technology and problem-solving')}
                </div>
            </section>
            <section className="w-full p-5 py-12 md:p-20 bg-(--background)">
                <ScrollAnimation animateIn="motion-preset-slide-left" animateOnce={true}>
                    <div>
                        <div className={`${interTightHeader.className} text-center text-(--portfolio-headings) text-[calc(8vw)] md:text-[calc(24px+4vw)]`}>
                            {t('University projects')}
                        </div>
                        <div className="text-center pt-5 pb-10">
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