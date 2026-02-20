import { useState, useEffect } from "react";
import { languageEng } from "../../../../data/languages-eng";
import { languageRus } from "../../../../data/languages-rus";

import styles from "./Hero.module.css";
import heroBackground from "../../../../images/hero/hero-mobile.png";

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
						// srcSet={heroBackground}
					/>
					<source
						media="(min-width: 768px)"
						// srcSet={heroBackground}
					/>
					<source
						media="(min-width: 360px)"
						srcSet={heroBackground}
					/>
					<img
						className={styles.hero__img}
						src={heroBackground}
						alt={translations[lang].title}
					/>
				</picture>
				<div className={styles.hero__content}>
					<h1 className={styles.hero__title}>
						{translations[lang].title}
					</h1>
					<div className={styles.hero__wrapper_subtitle}>
						<p className={styles.hero__subtitleLarge}>
							Путешествие к вершинам
						</p>
						<p className={styles.hero__subtitleSmall}>
							Туры для всех: от чая на высоте до Эвереста
						</p>
					</div>
					<MainButton>Выбрать тур</MainButton>
				</div>
			</section>
		</>
	);
}
