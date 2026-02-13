import "./App.css";
import { useState, useEffect } from "react";

import { languageEng } from "./data/languages-eng";
import { languageRus } from "./data/languages-rus";

import Hero from "./app/components/layout/Hero/Hero";

function App() {
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
			<Hero lang={lang} setLang={setLang} language={translations} />
			<p>{translations[lang].aboutGuide}</p>
		</>
	);
}

export default App;
