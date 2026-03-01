"use client"

import Image from "next/image";
import badamczykwhite from "@/public/image/logos/badamczykwhite.svg";
import {interTightHeader} from "@/app/style/fonts";
import React from "react";
import {useI18n} from "@/hooks/useI18n";

export default function Welcome(){
    const {t} = useI18n({ namespace: 'common' })
    return (
        <section className="relative h-svh max-w-full flex flex-col items-center overflow-hidden text-white">
            <div className={"absolute gradient -z-20 h-svh"}></div>
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
    );
}