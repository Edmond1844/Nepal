import { useState, useEffect } from "react";
import styles from "./SectionFastPick.module.css";

import Icon from "../../ui/Icon/Icon.jsx";
import MainButton from "../../ui/MainButton/MainButton.jsx";

export default function SectionFastPick({ lang, language }) {
  const buttonsLevel = language[lang].buttonsFilterToursLevel;
  const buttonsDuration = language[lang].buttonsFilterToursDuration;
  const tours = language[lang].tours;

  // Филтрация туров
  const [filerTours, setFilerTours] = useState(tours);
  const [value, setValue] = useState("");
  const [tour, setTour] = useState(2);
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    setFilerTours(tours);
    setValue("");
    setTour(2);
  }, [lang, tours]);

  function handleInput(event) {
    setValue(event.target.value.trim());
  }

  //  Для кнопок
  function handleReset() {
    setFilerTours(tours);
    setValue("");
    setTour(2);
    setActiveButton("");
  }
  function filterLevel(filterType) {
    setActiveButton(filterType);

    if (filterType === "beginner") {
      setFilerTours(tours.filter((item) => item.level === "beginner"));
    } else if (filterType === "Average") {
      setFilerTours(tours.filter((item) => item.level === "Average"));
    } else if (filterType === "Pro") {
      setFilerTours(tours.filter((item) => item.level === "Pro"));
    } else if (filterType === "Crazy") {
      setFilerTours(tours.filter((item) => item.level === "Crazy"));
    }
  }

  function filterDays(filterType) {
    setActiveButton(filterType);

    if (filterType === "1days") {
      setFilerTours(tours.filter((item) => item.daysNumber === 1));
    } else if (filterType === "2-4days") {
      setFilerTours(
        tours.filter((item) => item.daysNumber >= 2 && item.daysNumber <= 4),
      );
    } else if (filterType === "5-8days") {
      setFilerTours(
        tours.filter((item) => item.daysNumber >= 5 && item.daysNumber <= 8),
      );
    } else if (filterType === "9+days") {
      setFilerTours(tours.filter((item) => item.daysNumber >= 9));
    }
  }

  const filteredTours = filerTours.filter(
    (item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.price.toString().includes(value) ||
      item.levelDisplay.toLowerCase().includes(value.toLowerCase()),
  );

  const visibleTours = filteredTours.slice(0, tour);

  function handleClick() {
    setTour((prevTour) => prevTour + 2);
  }

  const hasMoreTours = tour < filteredTours.length;

  const sorted = [...visibleTours].sort((a, b) => a.price - b.price);

  return (
    <>
      <section className={`${styles.section_fast_pick} container`}>
        <h2 className={styles.section_fast_pick__title}>
          {language[lang].fastPickTitle}
        </h2>
        <h3 className={styles.section_fast_pick__info_text}>
          {language[lang].fastPickTourDisplayed} {visibleTours.length}{" "}
          {language[lang].fastPickOf} {filerTours.length}
        </h3>
        <div className={styles.section_fast_pick__container}>
          <div className={styles.section_fast_pick__filter_wrapper}>
            <div className={styles.section_fast_pick__filter_header}>
              <div className="flex items-center gap-2">
                <Icon name="icon-filter" className="w-5 h-5" />
                <h3 className={styles.section_fast_pick__filter_title}>
                  {language[lang].fastPickFilterTitle}
                </h3>
              </div>
              <button
                className={styles.section_fast_pick__button_reset}
                onClick={handleReset}
              >
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
                  onChange={handleInput}
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
                <div className="flex items-center gap-3 flex-wrap">
                  {buttonsLevel.map((item) => (
                    <MainButton
                      className={`${
                        styles.section_fast_pick__filter_button
                      } ${styles.section_fast_pick__filter_button_level}`}
                      onClick={() => filterLevel(item.filterType)}
                      variant={activeButton === item.filterType ? "active" : ""}
                      key={item.id}
                    >
                      {item.name}
                    </MainButton>
                  ))}
                </div>
              </div>
              <div className={styles.section_fast_pick__wrapper}>
                <p className={styles.section_fast_pick__filter_names}>
                  {language[lang].fastPickDuration}
                </p>
                <div className="flex items-center gap-2 flex-wrap justify-between">
                  {buttonsDuration.map((item) => (
                    <MainButton
                      className={`${
                        styles.section_fast_pick__filter_button
                      } ${styles.section_fast_pick__filter_button_duration}`}
                      onClick={() => filterDays(item.filterType)}
                      variant={activeButton === item.filterType ? "active" : ""}
                      key={item.id}
                    >
                      {item.name}
                    </MainButton>
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
                  value={value}
                  type="text"
                  id="price-input"
                  className={`${styles.section_fast_pick__price_input} `}
                />
                <div className={styles.section_fast_pick__input_price_wrapper}>
                  <p>0 ₽</p>
                  <p>100,000 ₽</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className={styles.section_fast_pick__wrapper_tours}>
              {visibleTours.length === 0 ? (
                <h3 className={styles.section_fast_pick__info_text}>
                  {language[lang].notFound}
                </h3>
              ) : (
                visibleTours.map((item) => {
                  return (
                    <li
                      className={styles.section_fast_pick__card}
                      key={item.id}
                    >
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
                        <p
                          className={styles.section_fast_pick__card_description}
                        >
                          {item.description}
                        </p>
                        <div className="flex justify-between">
                          <span
                            className={styles.section_fast_pick__card_price}
                          >
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
            </ul>
            {hasMoreTours && (
              <MainButton
                className={styles.section_fast_pick__button_more_details}
                onClick={handleClick}
              >
                {language[lang].fastPickButtonMoreTours}
              </MainButton>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
