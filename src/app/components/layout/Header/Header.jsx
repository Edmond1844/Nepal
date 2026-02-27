import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Header.module.css";

import iconLogo from "../../../../images/svg/icon-logo.svg";
import iconBurger from "../../../../images/svg/icon-burger.svg";
import iconLightTheme from "../../../../images/svg/icon-light-theme.svg";
import iconDarkTheme from "../../../../images/svg/icon-dark-theme.svg";
import iconNeonTheme from "../../../../images/svg/icon-neon-theme.svg";

export default function Header({ lang, setLang, language }) {
	const navLinks = language[lang].navLinks;

	const themes = {
		light: "light",
		dark: "dark",
		neon: "neon",
	};
	const [colorTheme, setColorTheme] = useState(themes.light);

	function changeTheme(theme) {
		setColorTheme(theme);
	}

	return (
		<>
			<header className={styles.header}>
				<div className={`${styles.header__wrapper_content} container`}>
					<Link to={"/"}>
						<div className={styles.header__logo_wrapper}>
							<img
								className={styles.header__logo_icon}
								src={iconLogo}
								alt="logo"
							/>
							<h2 className={styles.header__logo_text}>
								Nepal Peak
								<span>{language[lang].headerLogo}</span>
							</h2>
						</div>
					</Link>
					<div className={styles.header__content}>
						<nav className={styles.header__nav}>
							<ul className={styles.header__nav_list}>
								{navLinks.map((link) => (
									<li key={link.to}>
										<NavLink to={link.to}>
											{link.text}
										</NavLink>
									</li>
								))}
							</ul>
						</nav>
						<div className={styles.header__buttons_wrapper}>
							<button
								className={styles.header__language_button}
								onClick={() =>
									setLang(lang === "en" ? "ru" : "en")
								}
							>
								{lang === "en"
									? language.ru.language
									: language.en.language}
							</button>
							<button className={styles.header__burger_button}>
								<img src={iconBurger} alt="burger" />
							</button>
							<div
								className={styles.header__theme_button_wrapper}
							>
								<button
									className={styles.header__theme_button}
									onClick={() => changeTheme("light")}
								>
									<img
										className={styles.header__theme_icon}
										src={iconLightTheme}
										alt="theme"
									/>
								</button>
								<button
									className={`${styles.header__theme_button} ${
										colorTheme === "dark"
											? styles.active
											: ""
									}`}
									onClick={() => changeTheme("dark")}
								>
									<img
										className={styles.header__theme_icon}
										src={iconDarkTheme}
										alt="theme"
									/>
								</button>
								<button
									className={styles.header__theme_button}
									onClick={() => changeTheme("neon")}
								>
									<img
										className={styles.header__theme_icon}
										src={iconNeonTheme}
										alt="theme"
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
