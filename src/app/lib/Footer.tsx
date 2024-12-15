"use client"
import Link from "next/link";
import {interTight, interTightHeader} from "@/app/ui/fonts";
import {useTranslations} from "next-intl";

export default function Footer() {
    const t = useTranslations("");
    return (
        <footer id={"contact-me"} className={`w-full bg-[--footer] ${interTightHeader.className} text-white p-4 md:p-16 block lg:justify-between lg:flex`}>
            <div>
                <div className={`text-5xl md:text-8xl`}>
                    {t('Contact me')}
                </div>
                <div className={`md:text-2xl`}>
                    email: <Link className={"hover:decoration-1 hover:underline"} href={'mailto:contact@badamczyk.eu'} aria-label="Email">
                    contact@badamczyk.eu
                </Link>
                    <br/>
                    <div className={"flex gap-3 pt-2"}>
                        <Link className={"flex gap-1 hover:decoration-1 items-center hover:underline"} href={"https://www.linkedin.com/in/bartosz-a/"} target={"_blank"}
                              aria-label="Linkedin profile">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                width="32px"
                                height="32px"
                                fillRule="nonzero"
                            >
                                <g
                                    fill="#ffffff"
                                    fillRule="nonzero"
                                    stroke="none"
                                    strokeWidth="1"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeMiterlimit="10"
                                    fontFamily="none"
                                    fontWeight="none"
                                    fontSize="none"
                                    textAnchor="none"
                                    style={{ mixBlendMode: "normal" }} // Corrected style
                                >
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                                    </g>
                                </g>
                            </svg>
                            Linkedin
                        </Link>
                        <Link className={"flex gap-1 hover:decoration-1 items-center hover:underline"} href={"https://github.com/Bartan02"} target={"_blank"}
                              aria-label="Github profile">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                width="32px"
                                height="32px"
                                fillRule="nonzero"
                            >
                                <g
                                    fill="#ffffff"
                                    fillRule="nonzero"
                                    stroke="none"
                                    strokeWidth="1"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeMiterlimit="10"
                                    fontFamily="none"
                                    fontWeight="none"
                                    fontSize="none"
                                    textAnchor="none"
                                    style={{ mixBlendMode: "normal" }} // Corrected style
                                >
                                    <g transform="scale(4,4)">
                                        <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path>
                                    </g>
                                </g>
                            </svg>
                            Github
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`content-end`}>
                <div className={`md:text-xl lg:text-right pt-2 ${interTight.className}`}>
                    © 2024 Bartosz Adamczyk |&nbsp;
                    <Link href={'https://github.com/Bartan02/bartan02.github.io/'}
                          className={"hover:decoration-1 hover:underline"} target={"_blank"}
                          aria-label="Source code on Github">
                        {t('Source code')} </Link>
                </div>
            </div>
        </footer>
    );
}