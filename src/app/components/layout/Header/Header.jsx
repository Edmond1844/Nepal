import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Header.module.css";

import Icon from "../../ui/Icon/Icon.jsx";

export default function Header({
  lang,
  setLang,
  language,
  colorTheme,
  setColorTheme,
}) {
  const navLinks = language[lang].navLinks;
  function toggleTheme() {
    if (colorTheme === "light") {
      setColorTheme("dark");
    } else if (colorTheme === "dark") {
      setColorTheme("neon");
    } else if (colorTheme === "neon") {
      setColorTheme("light");
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.header__wrapper_content} container`}>
          <Link to={"/"}>
            <div className={`${styles.header__logo_wrapper} flex`}>
              <Icon className={styles.header__logo_icon} name="icon-mountain" />
              <span className={styles.header__logo_text}>Nepal Peak</span>
            </div>
          </Link>
          <div className={styles.header__content}>
            <nav className={styles.header__nav} aria-label="Main navigation">
              <ul className={styles.header__nav_list}>
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to}>{link.text}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.header__buttons_wrapper}>
              <button
                className={`${styles.header__button} ${styles.header__button_language}`}
                onClick={() => setLang(lang === "en" ? "ru" : "en")}
              >
                {lang === "en" ? language.ru.language : language.en.language}
              </button>
              <button
                className={`${styles.header__button} flex items-center justify-center`}
                onClick={toggleTheme}
              >
                <Icon name="icon-toggle-theme" />
              </button>
              <button
                className={`${styles.header__button} ${styles.header__button_burger} flex items-center justify-center`}
                onClick={toggleMenu}
              >
                <Icon name="icon-burger" />
              </button>
              {isMenuOpen && (
                <nav
                  className={styles.header_mobile_menu}
                  aria-label="Mobile navigation"
                >
                  <ul className={styles.header__mobile_menu_list}>
                    {navLinks.map((link) => (
                      <li
                        className={styles.header__mobile_menu_item}
                        key={link.to}
                      >
                        <NavLink to={link.to}>{link.text}</NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
