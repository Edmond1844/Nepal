import styles from "./SectionGuides.module.css";

import MainButton from "../../ui/MainButton/MainButton";

export default function SectionGuides({ lang, language }) {
  const guides = language[lang].guides;
  return (
    <section className={`${styles.section_guides} container`}>
      <h2 className={styles.section_guides__title}>
        {language[lang].titleGuides}
      </h2>
      <ul>
        {guides.map((guide) => (
          <li className={styles.section_guides__card} key={guide.id}>
            <img
              className={styles.section_guides__img}
              src={guide.img}
              alt="Гид"
            />
            <div className={styles.section_guides__card_content}>
              <h4 className={styles.section_guides__name}>{guide.name}</h4>
              <p className={styles.section_guides__motto}>"{guide.motto}"</p>
              <div className="flex gap-2 mb-2">
                {guide.levelDisplay.map((level, index) => (
                  <span
                    key={index}
                    className={`${styles.section_fast_pick__card_level} ${
                      guide.level[index] === "Pro" ||
                      guide.level[index] === "Crazy"
                        ? styles.level_pro_crazy
                        : ""
                    }`}
                    data-level={guide.level[index]}
                  >
                    {level}
                  </span>
                ))}
              </div>
              <p className={styles.section_guides__experience}>
                {guide.experience}
              </p>
            </div>
            <MainButton
              className={styles.section_guides__button}
              variant="myBookings"
            >
              {language[lang].buttonGides}
            </MainButton>
          </li>
        ))}
      </ul>
    </section>
  );
}
