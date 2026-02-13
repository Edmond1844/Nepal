import styles from "./Header.module.css";
export default function Header({ lang, setLang, language }) {
	return (
		<>
			<header>
				<h2>
					Nepal Peak Station
					<span>{language[lang].headerLogo}</span>
				</h2>

				<button onClick={() => setLang(lang === "en" ? "ru" : "en")}>
					{lang === "en"
						? language.ru.language
						: language.en.language}
				</button>
			</header>
		</>
	);
}
