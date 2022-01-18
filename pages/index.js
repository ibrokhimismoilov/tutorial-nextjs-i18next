import React from 'react';
import styles from '../styles/Home.module.css';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <p className={styles.description}>{t("welcome")}</p>
      <p>
        <Link href={"/about"} >{t("about")}</Link>
      </p>
    </div>
  )
}
