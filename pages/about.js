import React from 'react';
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link';

const About = () => {
    const { t, lang } = useTranslation("common");

    // console.log('lang', lang);

    return (
        <div>
            <h1>{t("about-page")}</h1>
            <Link href={"/"}>{t("home")}</Link>
        </div>
    )
}

export default About;
