import styles from "./ToursList.module.css";

import MainButton from "../../ui/MainButton/MainButton.jsx";

export default function ToursList({ tours, lang, language }) {
  return (
    <>
      <ul className={styles.tours}>
        {tours.map((item) => (
          <li className={styles.tours__item} key={item.id}>
            <img
              className={styles.tours__img}
              src={item.img}
              alt={item.title}
            />
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span
                  className={`${item.level === "Pro" || item.level === "Crazy" ? styles.level_pro_crazy : ""} level`}
                  data-level={item.level}
                >
                  {item.levelDisplay}
                </span>
                <span className={styles.tours__days}>{item.daysDisplay}</span>
              </div>
              <h3 className={styles.tours__title}>{item.title}</h3>
              <p className={styles.tours__description}>{item.description}</p>
              <div className="flex justify-between">
                <span className={styles.tours__price}>
                  {`${item.price.toLocaleString("ru-RU")} ₽`}
                </span>
                <MainButton className={styles.tours__button}>
                  {language[lang].BottonMoreDetails}
                </MainButton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
