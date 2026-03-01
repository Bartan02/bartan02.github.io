import React from "react";
import Experience from "@/app/lib/interfaces/Experience";
import {useI18n} from "@/hooks/useI18n";

export const TimelineItem: React.FC<Experience> = ({ date, company, location, position, details }) => {
    const {t} = useI18n({ namespace: 'common' });
    return (
        <div className="relative flex">
            <div className="relative w-4 h-4 top-12 rounded-full border border-(--about-me-headings) bg-(--about-me-headings)"></div>
            <div className="w-[calc(100%)] text-lg sm:text-2xl p-4 text-left">
                <p>{date.split(" ").map(word => {
                    return /[\d-]/.test(word) ? word  : t(word) + " ";
                })}</p>
                <p className="text-4xl flex">{t(company)}</p>
                <p>{t(location)}</p>
                <br />
                <p>{t(position)}</p>
                <br />
                <ul className="list-disc list-inside">
                    {details.map((detail, index) => (
                        <li key={index}>{t(detail)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};