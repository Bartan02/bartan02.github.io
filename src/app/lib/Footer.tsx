"use client"

import {useI18n} from "@/hooks/useI18n";
import Link from "next/link";
import { interTight, interTightHeader } from "@/app/ui/fonts";
import {useLocale} from "next-intl";
import Image from "next/image";
import linkedin from "@/public/image/icons/footer/linkedin.svg"
import github from "@/public/image/icons/footer/github.svg"
import email from "@/public/image/icons/footer/email.svg"
import badamczykwhite from "../../public/image/logos/badamczykwhite.svg";
import React from "react";

export default function Footer() {
    const locale = useLocale();
    const {t} = useI18n({ namespace: 'common' })
    return (
        <footer id={"contact-me"} className={`w-full bg-(--footer) ${interTightHeader.className} text-white p-4 md:p-16 block lg:justify-between lg:flex`}>
            <div>
                <div className={`text-5xl md:text-8xl`}>
                    {t('Contact me')}
                </div>
                <div className={`md:text-2xl`}>
                    email: contact[at]badamczyk[dot]eu
                    <br />
                    <div className={"flex gap-3 pt-2"}>
                        <Link className={"flex gap-1 hover:decoration-1 items-center hover:underline cursor-pointer"} href={"/" + locale + "/contact"}
                              aria-label="Form">
                            <Image src={email} alt={'Email icon'}/>
                            {t('Contact form')}
                        </Link>
                        <Link className={"flex gap-1 hover:decoration-1 items-center hover:underline"} href={"https://www.linkedin.com/in/bartosz-a/"} target={"_blank"}
                            aria-label="Linkedin profile">
                            <Image src={linkedin} alt={'Linkedin icon'}/>
                            Linkedin
                        </Link>
                        <Link className={"flex gap-1 hover:decoration-1 items-center hover:underline"} href={"https://github.com/Bartan02"} target={"_blank"}
                            aria-label="Github profile">
                            <Image src={github} alt={'Github icon'}/>
                            Github
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`content-end`}>
                <Image
                    className="pt-8 lg:pt-0 lg:w-auto pointer-events-none"
                    src={badamczykwhite}
                    alt="Bartosz Adamczyk Logo"
                />
                <div className={`md:text-xl lg:text-right pt-2 ${interTight.className}`}>
                    &#169; { new Date().getFullYear() } Bartosz Adamczyk |&nbsp;
                    <Link href={'https://github.com/Bartan02/bartan02.github.io/'}
                        className={"hover:decoration-1 hover:underline"} target={"_blank"}
                        aria-label="Source code on Github">
                        {t('Source code')} </Link>
                </div>
            </div>
        </footer>
    );
}