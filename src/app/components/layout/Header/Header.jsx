import { NavLink, Link } from "react-router-dom";

import styles from "./Header.module.css";
import iconBurger from "../../../../images/svg/icon-burger.svg";

export default function Header({ lang, setLang, language }) {
	const navLinks = language[lang].navLinks;
	return (
		<>
			<header className={styles.header}>
				<div className={`${styles.header__wrapper_content} container`}>
					<Link to={"/"}>
						<h2 className={styles.header__logo}>
							Nepal Peak Station
							<span>{language[lang].headerLogo}</span>
						</h2>
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
							<button
								className={styles.header__toggle_theme_button}
							>
								поменять цвет
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
