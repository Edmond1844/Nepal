import styles from "./SectionAdvantages.module.css";

import Icon from "../../ui/Icon/Icon.jsx";

export default function SectionAdvantages({ lang, language }) {
  const advantages = language[lang].advantages;

  return (
    <>
      <section className={styles.section_advantages}>
        <div className="container">
          <h3 className={styles.section_advantages__title}>
            {language[lang].SectionAdvantagesTitle}
          </h3>
          <ul className={styles.section_advantages__list}>
            {advantages.map((advantage) => (
              <li
                className={styles.section_advantages__item}
                key={advantage.id}
              >
                <div className={styles.section_advantages__icon_wrapper}>
                  <Icon
                    name={advantage.icon}
                    className={styles.section_advantages__icon}
                  />
                </div>
                <div>
                  <h3 className={styles.section_advantages__item_title}>
                    {advantage.title}
                  </h3>
                  <p className={styles.section_advantages__item_description}>
                    {advantage.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
