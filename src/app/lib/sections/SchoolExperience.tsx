import {interTightHeader} from "@/app/style/fonts";
import React from "react";
import {useI18n} from "@/hooks/useI18n";
import Experience from "@/app/lib/interfaces/Experience";
import experienceData from "@/public/data/school_experience.json";
import {TimelineItem} from "@/app/lib/elements/TimelineItem";

export default function SchoolExperience() {
    const {t} = useI18n({ namespace: 'common' });

    const experiences: Experience[] = experienceData;

    return (
        <section className="pt-20">
            <div className={`${interTightHeader.className} pb-5 text-center text-(--about-me-headings) text-[calc(10vw)] md:text-[calc(24px+4vw)]`}>
                {t('Education')}
            </div>
            <div className="xl:px-[calc(15vw)] lg:px-[calc(7vw)]">
                <div className="space-y-8 text-2xl relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:bg-(--about-me-headings) before:to-transparent">
                    {experiences.map((experience, index) => (
                        <TimelineItem key={index} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    );
}