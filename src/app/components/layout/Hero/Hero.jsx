import { useState, useEffect } from "react";
import { languageEng } from "../../../../data/languages-eng";
import { languageRus } from "../../../../data/languages-rus";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import styles from "./Hero.module.css";
import heroBackgroundMobile from "../../../../images/hero/hero-mobile.png";
import heroBackgroundDesktop from "../../../../images/hero/hero-desktop.png";

import Header from "../Header/Header";
import MainButton from "../../ui/MainButton/MainButton";

export default function Hero() {
	const [lang, setLang] = useState(() => {
		const saved = localStorage.getItem("language");
		return saved === "en" || saved === "ru" ? saved : "ru";
	});

	useEffect(() => {
		localStorage.setItem("language", lang);
	}, [lang]);

	const translations = {
		en: languageEng.en,
		ru: languageRus.ru,
	};

	return (
		<>
			<Header lang={lang} setLang={setLang} language={translations} />
			<section className={styles.hero}>
				<picture className={styles.hero__picture}>
					<source
						media="(min-width: 1024px)"
						srcSet={heroBackgroundDesktop}
					/>
					<source
						media="(min-width: 360px)"
						srcSet={heroBackgroundMobile}
					/>
					<img
						className={styles.hero__img}
						src={heroBackgroundMobile}
						alt={translations[lang].title}
					/>
				</picture>
				<div className={styles.hero__content}>
					<h1 className={styles.hero__title}>
						{translations[lang].title}
					</h1>
					<div className={styles.hero__wrapper_subtitle}>
						<p className={styles.hero__subtitleLarge}>
							{translations[lang].subtitlePrimary}
						</p>
						<p className={styles.hero__subtitleSmall}>
							{translations[lang].subtitleSecondary}
						</p>
					</div>
					<Link>
						<MainButton
							// to="/tours/"
							className={styles.hero__button}
						>
							{translations[lang].buttonText}
							<ArrowRight className={styles.hero__icon_arrow} />
						</MainButton>
					</Link>
				</div>
			</section>
		</>
	);
}
