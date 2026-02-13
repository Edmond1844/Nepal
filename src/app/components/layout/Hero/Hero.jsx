import Header from "../Header/Header";

export default function Hero({ lang, setLang, language }) {
	return (
		<>
			<Header lang={lang} setLang={setLang} language={language} />
			<section>
				<h1>{language[lang].title}</h1>
			</section>
		</>
	);
}
