import { useState } from "react";
import styles from "./SectionFastPick.module.css";

import Icon from "../../ui/Icon/Icon.jsx";
import FilterButton from "../../ui/FilterBottons/FilterButtons.jsx";
import MainButton from "../../ui/MainButton/MainButton.jsx";

export default function SectionFastPick({ lang, language }) {
  const buttonsLevel = language[lang].buttonsFilterToursLevel;
  const buttonsDuration = language[lang].buttonsFilterToursDuration;
  const tours = language[lang].tours;

  const [tour, setTour] = useState(2);
  const visibleTours = tours.slice(0, tour);

  const hasMoreTours = tour < tours.length;

  function handleClick() {
    setTour((prevTour) => prevTour + 2);
  }

  const sorted = [...visibleTours].sort((a, b) => a.price - b.price);

  return (
    <>
      <section className={`${styles.section_fast_pick} `}>
        <h2 className={styles.section_fast_pick__title}>
          {language[lang].fastPickTitle}
        </h2>
        <div className={styles.section_fast_pick__filter_wrapper}>
          <div className={styles.section_fast_pick__filter_header}>
            <div className="flex items-center gap-2">
              <Icon name="icon-filter" className="w-5 h-5" />
              <h3 className={styles.section_fast_pick__filter_title}>
                {language[lang].fastPickFilterTitle}
              </h3>
            </div>
            <button className={styles.section_fast_pick__button_reset}>
              {language[lang].fastPickFilterButtonRest}
            </button>
          </div>
          <div className={styles.section_fast_pick__search}>
            <label
              className={styles.section_fast_pick__filter_names}
              htmlFor="search-input"
            >
              {language[lang].fastPickSearch}
            </label>
            <div
              className={`${styles.section_fast_pick__search_wrapper} ${styles.section_fast_pick__wrapper}`}
            >
              <input
                type="text"
                id="search-input"
                className={styles.section_fast_pick__search_input}
              />
              <Icon
                name="icon-search"
                className={styles.section_fast_pick__icon_search}
              />
            </div>
            <div className={styles.section_fast_pick__wrapper}>
              <p className={styles.section_fast_pick__filter_names}>
                {language[lang].fastPickLevel}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {buttonsLevel.map((item) => (
                  <FilterButton
                    className={`${
                      styles.section_fast_pick__filter_button
                    } ${styles.section_fast_pick__filter_button_level}`}
                    key={item.id}
                    name={item.name}
                  />
                ))}
              </div>
            </div>
            <div className={styles.section_fast_pick__wrapper}>
              <p className={styles.section_fast_pick__filter_names}>
                {language[lang].fastPickDuration}
              </p>
              <div className="flex items-center gap-2 flex-wrap justify-between">
                {buttonsDuration.map((item) => (
                  <FilterButton
                    className={`${
                      styles.section_fast_pick__filter_button
                    } ${styles.section_fast_pick__filter_button_duration}`}
                    key={item.id}
                    name={item.name}
                  />
                ))}
              </div>
            </div>
            <label
              className={styles.section_fast_pick__filter_names}
              htmlFor="price-input"
            >
              {language[lang].fastPickPriceInput} 100,000 ₽
            </label>
            <div
              className={`${styles.section_fast_pick__search_wrapper} ${styles.section_fast_pick__wrapper}`}
            >
              <input
                type="text"
                id="price-input"
                className={`${styles.section_fast_pick__price_input} `}
              />
              <div className={styles.section_fast_pick__input_price_wrapper}>
                <p>0 ₽</p>
                <p>100,000 ₽</p>
              </div>
            </div>
            <label
              className={styles.section_fast_pick__filter_names}
              htmlFor="sorting-input"
            >
              {language[lang].fastPickSortingInput}
            </label>
            <div
              className={`${styles.section_fast_pick__search_wrapper} ${styles.section_fast_pick__wrapper}`}
            >
              <input
                type="text"
                id="sorting-input"
                className={`${styles.section_fast_pick__price_input} `}
              />
            </div>
          </div>
        </div>
        <h3 className={styles.section_fast_pick__info_text}>
          {language[lang].fastPickButtonMoreTours} {visibleTours.length}{" "}
          {language[lang].fastPickOf} {tours.length}
        </h3>
        <ul>
          <p className={styles.section_fast_pick__info_text}>
            {language[lang].fastPickPriceTour} {sorted[0].price}{" "}
            {language[lang].fastPickPpriceTourTo}{" "}
            {sorted[sorted.length - 1].price}
          </p>

          {visibleTours.length === 0 ? (
            <h3 className={styles.section_fast_pick__info_text}>
              {language[lang].notFound}
            </h3>
          ) : (
            visibleTours.map((item) => {
              return (
                <li className={styles.section_fast_pick__card} key={item.id}>
                  <img
                    className={styles.section_fast_pick__img}
                    src={item.img}
                    alt={item.title}
                  />
                  <div className="p-4">
                    <div className="flex justify-between mb-2">
                      <span
                        className={`${styles.section_fast_pick__card_level} ${item.level === "Pro" || item.level === "Crazy" ? styles.level_pro_crazy : ""} `}
                        data-level={item.level}
                      >
                        {item.levelDisplay}
                      </span>
                      <span className={styles.section_fast_pick__days}>
                        {item.daysDisplay}
                      </span>
                    </div>
                    <h3 className={styles.section_fast_pick__card_title}>
                      {item.title}
                    </h3>
                    <p className={styles.section_fast_pick__card_description}>
                      {item.description}
                    </p>
                    <div className="flex justify-between">
                      <span className={styles.section_fast_pick__card_price}>
                        {`${item.price.toLocaleString("ru-RU")} ₽`}
                      </span>
                      <MainButton
                        className={styles.section_fast_pick__card_button}
                      >
                        {language[lang].BottonMoreDetails}
                      </MainButton>
                    </div>
                  </div>
                </li>
              );
            })
          )}
          {hasMoreTours && (
            <MainButton
              className={styles.section_fast_pick__button_more_details}
              onClick={handleClick}
            >
              {language[lang].fastPickButtonMoreTours}
            </MainButton>
          )}
        </ul>
      </section>
    </>
  );
}
