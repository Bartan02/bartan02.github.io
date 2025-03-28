"use client"
import Link from "next/link";
import { interTight, interTightHeader } from "@/app/ui/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import linkedin from "@/public/image/icons/footer/linkedin.svg"
import github from "@/public/image/icons/footer/github.svg"

export default function Footer() {
    const t = useTranslations("");
    return (
        <footer id={"contact-me"} className={`w-full bg-(--footer) ${interTightHeader.className} text-white p-4 md:p-16 block lg:justify-between lg:flex`}>
            <div>
                <div className={`text-5xl md:text-8xl`}>
                    {t('Contact me')}
                </div>
                <div className={`md:text-2xl`}>
                    email: <Link className={"hover:decoration-1 hover:underline"} href={'mailto:contact@badamczyk.eu'} aria-label="Email">
                        <span className="select-text"> contact@badamczyk.eu </span>
                    </Link>
                    <br />
                    <div className={"flex gap-3 pt-2"}>
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