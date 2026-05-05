import { Link } from "react-router-dom";
import styles from "./SectionGuides.module.css";

import MainButton from "../../ui/MainButton/MainButton";

export default function SectionGuides({ lang, language }) {
  const guides = language[lang].guides;
  return (
    <section className={`${styles.section_guides} container`}>
      <h2 className={styles.section_guides__title}>
        {language[lang].titleGuides}
      </h2>
      <ul className={styles.section_guides__list}>
        {guides.map((guide) => (
          <li className={styles.section_guides__card} key={guide.id}>
            <img
              className={styles.section_guides__img}
              src={guide.img}
              alt={guide.name}
            />
            <div className={styles.section_guides__card_content}>
              <h4 className={styles.section_guides__name}>{guide.name}</h4>
              <p className={styles.section_guides__motto}>"{guide.motto}"</p>
              <div className={styles.section_guides__levels}>
                {guide.brief.levelDisplay.map((level, index) => (
                  <span
                    key={index}
                    className={`${styles.section_guides__level} level ${
                      guide.brief.level[index] === "Pro" ||
                      guide.brief.level[index] === "Crazy"
                        ? styles.level_pro_crazy
                        : ""
                    }`}
                    data-level={guide.brief.level[index]}
                  >
                    {level}
                  </span>
                ))}
              </div>
              <p className={styles.section_guides__experience}>
                {guide.brief.experience}
              </p>
            </div>
            <Link
              className={styles.section_guides__link}
              to={`/gids/${guide.url}`}
            >
              <MainButton
                className={styles.section_guides__button}
                variant="myBookings"
              >
                {language[lang].buttonGides}
              </MainButton>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
