import {interTightHeader} from "@/app/style/fonts";
import React from "react";
import {useI18n} from "@/hooks/useI18n";

export default function Portfolio() {
    const {t} = useI18n({ namespace: 'common' });
    return (
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
    );
}