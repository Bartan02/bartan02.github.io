'use client'

import {useLocale, useTranslations} from "next-intl";
import Navbar from "@/app/lib/Navbar";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

declare global {
    interface Window { // eslint-disable-line @typescript-eslint/no-unused-vars
        grecaptcha: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    }
}

export default function Page() {
    const t = useTranslations("");
    const locale = useLocale();
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        try {
            const captcha = window.grecaptcha.getResponse();
            if (!captcha) {
                alert(t('Please complete the reCAPTCHA and then try again to send the message'));
                return;
            }
            const messageTypeMap = {
                feedback: t("Feedback / Suggestion for the Website"),
                work: t("Work & Collaboration"),
                networking: t("Networking & Professional Connections"),
                job: t("Job Offers & Recruiter Outreach"),
                other: t("Other")
            };

            const finalForm = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
                type_of_message: messageTypeMap[form.type_of_message.value],
            };

            await emailjs.send(
                'service_gyj1w8h',
                'template_rscst68',
                finalForm,
                'fKR78NdlRlZ_zx2qE'
            );
            alert(t('Message sent successfully, thanks! Now you will be redirected to the home page'));
            window.grecaptcha.reset();
            form.reset();
            router.push('/'+locale);
        } catch (error) {
            alert(t('Failed to send message Try again later or reach out to me via eg Linkedin') + (error.message ? `\n\nError: ${error.message}` : ''));
        }
    };
    return (
        <>
            <Navbar/>
            <div className={`text-(--font) font-[300] bg-(--landing-screen) px-4 sm:px-32 xl:px-92 py-4 sm:py-16 flex flex-col min-h-screen`}>
                <span className={"text-4xl sm:text-6xl pb-4"}>
                    {t("Contact form")}
                </span>
                <span
                    className={"pb-4 text-xl sm:text-2xl"}> {t("Hey there! I am really glad you are here If you have any questions, ideas, or just want to talk — feel free to drop me a message I will get back to you as soon as I can!")}</span>
                <form className={"flex flex-col gap-3"} action="https://formsubmit.co/el/mofoca" method="POST" onSubmit={handleSubmit}>
                    <label htmlFor="name"> {t("Your name")} <span className={"text-red-500"}>*</span></label>
                    <input type="text" id="name" name="name"
                           className={"bg-(--background) text-lg sm:text-2xl p-2 sm:p-3 rounded"} required/>
                    <label htmlFor="email">{t("Your email")} <span className={"text-red-500"}>*</span></label>
                    <input type="email" id="email" name="email"
                           className={"bg-(--background) text-lg sm:text-2xl p-2 sm:p-3 rounded"} required/>
                    <label htmlFor="type_of_message">{t("Type of message")} <span
                        className={"text-red-500"}>*</span></label>
                    <select id="type_of_message" name="type_of_message"
                            className={"bg-(--background) text-lg sm:text-2xl p-2 sm:p-3 rounded"} defaultValue={"none"}
                            required>
                        <option disabled value={"none"}> {t("-- select an option --")} </option>
                        <option name="work" value="work">{t("Work & Collaboration")}</option>
                        <option name="networking"
                                value="networking">{t("Networking & Professional Connections")}</option>
                        <option name="feedback" value="feedback">{t("Feedback/suggestion for the website")}</option>
                        <option name="job" value="job">{t("Job Offers & Recruiter Outreach")}</option>
                        <option name="other" value="other">{t("Other")}</option>
                    </select>
                    <label htmlFor="message">{t("Message")} <span className={"text-red-500"}>*</span></label>
                    <textarea id="message" name="message"
                              className={"bg-(--background) text-lg sm:text-2xl p-2 sm:p-3 rounded resize-none h-64"}
                              required/>
                    <div className={"flex md:flex-row flex-col-reverse gap-3 justify-center items-center py-6 text-lg sm:text-2xl"}>
                        <div className="flex items-center">
                            <Link
                                className="inline-block rounded bg-(--background) px-8 py-2 align-middle"
                                href={"/" + locale}
                            >
                                {t("Return")}
                            </Link>
                        </div>
                        <div className="g-recaptcha" data-sitekey="6LfWjWErAAAAANahvH2w_OJiJGsar1NSYsnKI96o"></div>
                        <div className="flex items-center">
                            <button type="submit"
                                    className={"rounded bg-green-500 px-8 py-2 text-white cursor-pointer"}>{t("Send")}</button>
                        </div>
                    </div>
                </form>
            </div>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        </>
    );
}