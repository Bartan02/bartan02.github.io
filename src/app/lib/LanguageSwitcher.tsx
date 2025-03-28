import Image, {StaticImageData} from "next/image";
import uk_icon from "@/public/image/icons/header/flags/united-kingdom.png";
import fr_icon from "@/public/image/icons/header/flags/france.png";
import nl_icon from "@/public/image/icons/header/flags/netherlands.png";
import pl_icon from "@/public/image/icons/header/flags/poland.png";
import {useLayoutEffect, useState} from "react";
import {useLocale} from "next-intl";
import {useRouter} from "next/navigation";

export default function LanguageSwitcher() {

    const locale = useLocale();

    const router = useRouter()

    const [isLanguageSwitch, setIsLanguageSwitch] = useState(false);

    function changeLanguage(targetLang: string) {
        setIsLanguageSwitch(!isLanguageSwitch)
        if(locale !== targetLang){
            const currentPath = window.location.pathname.slice(3);
            const targetPath = '/' + targetLang + currentPath;
            router.push(targetPath);
        }
        return undefined;
    }
    const [imageSrc, setImageSrc] = useState<StaticImageData>(uk_icon);

    useLayoutEffect(() => {
        switch(locale){
            case 'en':
                setImageSrc(uk_icon);
                break;
            case 'fr':
                setImageSrc(fr_icon);
                break;
            case 'nl':
                setImageSrc(nl_icon);
                break;
            case 'pl':
                setImageSrc(pl_icon);
                break;
        }
    }, []);

    return(
        <div className={'cursor-pointer transition-all'}>
            <Image src={imageSrc} alt={'Flag'} onClick={() => {setIsLanguageSwitch(!isLanguageSwitch)}}/>
            <div className={`gap-4 text-sm absolute bg-(--landing-screen) p-3 px-6 rounded-full shadow-2xl md:left-[65px] -left-40 md:top-16 top-12 ${isLanguageSwitch ? "flex motion-preset-slide-down motion-duration-200" : 'hidden'}`}>
                <div className={'flex flex-col items-center gap-1 hover:bg-(--highlight) rounded-sm'} onClick={() => {changeLanguage('en')}}>
                    <Image src={uk_icon} alt={'UK flag'}/>
                    english
                </div>
                <div className={'flex flex-col items-center gap-1 hover:bg-(--highlight) rounded-sm'} onClick={() => {changeLanguage('fr')}}>
                    <Image src={fr_icon} alt={'FR flag'}/>
                    français
                </div>
                <div className={'flex flex-col items-center gap-1 hover:bg-(--highlight) rounded-sm'} onClick={() => {changeLanguage('nl')}}>
                    <Image src={nl_icon} alt={'NL flag'}/>
                    nederlands
                </div>
                <div className={'flex flex-col items-center gap-1 hover:bg-(--highlight) rounded-sm'} onClick={() => {changeLanguage('pl')}}>
                    <Image src={pl_icon} alt={'PL flag'}/>
                    polski
                </div>
            </div>
            <div className={`-z-10 absolute border-x-[20px] border-x-transparent border-b-[25px] border-b-(--landing-screen) md:top-12 md:right-12 right-[84px] top-11 ${isLanguageSwitch ? "block motion-preset-slide-down motion-duration-200" : 'hidden'}`}></div>
        </div>
    );
}