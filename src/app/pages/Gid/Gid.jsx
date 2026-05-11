import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

import styles from "./Gid.module.css";

import Layout from "../../components/layout/Layout/Layout";
import Icon from "../../components/ui/Icon/Icon";
import ToursList from "../../components/ui/ToursList/ToursList";
import MainButton from "../../components/ui/MainButton/MainButton";

export default function Gid({
  language,
  lang,
  setLang,
  colorTheme,
  setColorTheme,
}) {
  const guides = language[lang].guides;
  const allTours = language[lang].tours;

  const { slug } = useParams();
  const gid = guides.find((gid) => gid.url === slug);

  const guideTours = allTours.filter((tour) => gid.toursId.includes(tour.id));

  return (
    <>
      <Layout
        lang={lang}
        setLang={setLang}
        language={language}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      >
        <div className={`${styles.gid_card} container`}>
          <Link className={styles.gid_card__back_link} to="/gids">
            <ArrowLeft className={styles.gid_card__icon_arrow} />
            <span>{language[lang].backToGuides}</span>
          </Link>
          <div className={styles.gid_card__main_info}>
            <img
              className={styles.gid_card__img}
              src={gid.img}
              alt={gid.name}
            />
            <h3 className={styles.gid_card__gid_name}>{gid.name}</h3>
            <p className={styles.gid_card__motto}>"{gid.motto}"</p>
            <div className={styles.gid_card__stat_item}>
              <Icon className={styles.gid_card__icon} name="icon-experience" />
              <div>
                <p className={styles.gid_card__experience_label}>
                  {gid.details.label}
                </p>
                <p className={styles.gid_card__experience_value}>
                  {gid.details.value}
                </p>
              </div>
            </div>
            <div className={styles.gid_card__stat_item}>
              <Icon className={styles.gid_card__icon} name="icon-lang" />
              <div>
                <p className={styles.gid_card__experience_label}>
                  {gid.language.label}
                </p>
                <p className={styles.gid_card__experience_value}>
                  {gid.language.value}
                </p>
              </div>
            </div>
            <div className={styles.gid_card__stat_item}>
              <Icon className={styles.gid_card__icon} name="icon-mountain" />
              <div>
                <p className={styles.gid_card__experience_label}>
                  {gid.favoriteRoute.label}
                </p>
                <p className={styles.gid_card__experience_value}>
                  {gid.favoriteRoute.value}
                </p>
              </div>
            </div>
            <MainButton className={styles.gid_card__button}>
              <Icon name="icon-write" />
              {language[lang].writeButton}
            </MainButton>
          </div>
          <div className={styles.gid_card__content}>
            <div className={styles.gid_card__wrapper}>
              <h2 className={styles.gid_card__title}>
                {language[lang].aboutGid}
              </h2>
              <p className={styles.gid_card__about}>{gid.about}</p>
              {gid.favoriteAltitude && (
                <p className={styles.gid_card__favorite}>
                  <span className={styles.gid_card__favorite_label}>
                    {gid.favoriteAltitude.label}:
                  </span>{" "}
                  {gid.favoriteAltitude.value}
                </p>
              )}
            </div>
            <div className={styles.gid_card__wrapper}>
              <h2 className={styles.gid_card__title}>
                {language[lang].specializationGid}
              </h2>
              <ul className={styles.gid_card__specializations_list}>
                {gid.specializations.map((item, index) => (
                  <li
                    className={styles.gid_card__specialization_item}
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.gid_card__wrapper}>
              <h2 className={styles.gid_card__title}>
                {language[lang].leadTours}
              </h2>
              <ul className="flex gap-2">
                {gid.brief.levelDisplay.map((item, index) => (
                  <li
                    className={`${styles.level_pro_crazy} level`}
                    key={index}
                    data-level={gid.brief.level[index]}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={styles.gid_card__title}>{gid.toursTitle}</h2>
              <ToursList tours={guideTours} lang={lang} language={language} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
