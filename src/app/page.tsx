import { redirect } from "next/navigation";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Bartosz Adamczyk",
    description: "Bartosz Adamczyk's portfolio page",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootPage() {
    redirect("/en");
}