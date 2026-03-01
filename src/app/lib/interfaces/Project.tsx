import {StaticImageData} from "next/image";

export default interface Project {
    src: StaticImageData
    alt: string
    title: string
    description: string
    link: string | null
    linkText?: string | null
};