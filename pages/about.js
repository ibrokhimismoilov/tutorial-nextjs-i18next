import React from 'react';
import useTranslation from "next-translate/useTranslation";

const About = () => {
    const { t, lang } = useTranslation("common");

    console.log('lang', lang);

    return (
        <div>
            <h1>{t("about-page")}</h1>
        </div>
    )
}

export default About;
