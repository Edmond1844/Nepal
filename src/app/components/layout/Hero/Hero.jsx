import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import styles from "./Hero.module.css";
import heroBackgroundMobile from "../../../../images/hero/hero-mobile.png";
import heroBackgroundDesktop from "../../../../images/hero/hero-desktop.png";

import Header from "../Header/Header";
import MainButton from "../../ui/MainButton/MainButton";

export default function Hero({ lang, setLang, language }) {
	return (
		<>
			<Header lang={lang} setLang={setLang} language={language} />
			<div className={styles.hero}>
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
						alt={language[lang].title}
					/>
				</picture>
				<div className={styles.hero__content}>
					<h1 className={styles.hero__title}>
						{language[lang].title}
					</h1>
					<div className={styles.hero__wrapper_subtitle}>
						<p className={styles.hero__subtitleLarge}>
							{language[lang].subtitlePrimary}
						</p>
						<p className={styles.hero__subtitleSmall}>
							{language[lang].subtitleSecondary}
						</p>
					</div>
					<Link>
						<MainButton
							// to="/tours/"
							className={styles.hero__button}
						>
							{language[lang].buttonText}
							<ArrowRight className={styles.hero__icon_arrow} />
						</MainButton>
					</Link>
				</div>
			</div>
		</>
	);
}
