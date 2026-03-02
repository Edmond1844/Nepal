import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Header.module.css";

// import iconLogo from "../../../../images/svg/icon-logo.svg";

import Icon from "../../ui/Icon/Icon.jsx";

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
						<div className={styles.header__logo_icon} />
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
								className={`${styles.header__button} ${styles.header__button_language}`}
								onClick={() =>
									setLang(lang === "en" ? "ru" : "en")
								}
							>
								{lang === "en"
									? language.ru.language
									: language.en.language}
							</button>
							<button
								className={`${styles.header__button} flex items-center justify-center`}
							>
								<Icon name="icon-toggle-theme" />
							</button>
							<button
								className={`${styles.header__burger_button} flex items-center justify-center`}
							>
								<Icon name="icon-burger" />
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
