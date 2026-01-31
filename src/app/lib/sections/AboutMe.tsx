"use client";

import {interTightHeader} from "@/app/style/fonts";
import Image from "next/image";
import badamczyk from "@/public/image/bartoszadamczyk.webp";
import React from "react";
import {useI18n} from "@/hooks/useI18n";

export default function AboutMe() {
    const {t} = useI18n({ namespace: 'common' })
    return (
        <section id="about-me" className="w-full text-white block lg:grid lg:grid-cols-[48%_2%_48%] lg:gap-3 min-h-[750px] h-fit bg-(--about-me) place-items-center">
            <div className={`${interTightHeader.className} pt-10 lg:pt-0 text-center flex flex-col items-center text-[calc(24px+4vw)]`}>
                <Image
                    className="flex rounded-full w-2/3 sm:w-1/3 lg:w-2/3 lg:max-w-xl mx-auto lg:mx-0 pointer-events-none mb-7"
                    src={badamczyk}
                    alt="Bartosz Adamczyk picture"
                    width={100}
                    height={100}
                />
                <span> {t('About me')} </span>

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
    );
}