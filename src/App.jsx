import "./App.css";
import { useState, useEffect } from "react";

import { translations } from "./data/data-languages";

import Hero from "./app/components/layout/Hero/Hero";

function App() {
	const [lang, setLang] = useState(() => {
		const saved = localStorage.getItem("language");
		return saved === "en" || saved === "ru" ? saved : "ru";
	});

	useEffect(() => {
		localStorage.setItem("language", lang);
	}, [lang]);

	return (
		<>
			<Hero lang={lang} />
			<h1 className="title">{translations[lang].title}</h1>
			<button onClick={() => setLang(lang === "en" ? "ru" : "en")}>
				{lang === "en"
					? translations.ru.language
					: translations.en.language}
			</button>
			<p>{translations[lang].aboutGuide}</p>
		</>
	);
}

export default App;

// import "./App.css";
// import { useState, useEffect } from "react";

// import { translations } from "./data/data-languages";

// import Hero from "./app/components/layout/Hero/Hero";

// function App() {
// 	const [lang, setLang] = useState(() => {
// 		const saved = localStorage.getItem("language");
// 		return saved === "en" || saved === "ru" ? saved : "ru";
// 	});

// 	useEffect(() => {
// 		localStorage.setItem("language", lang);
// 	}, [lang]);

// 	return (
// 		<>
// 			<Hero lang={lang} />
// 			<h1 className="title">{translations[lang].title}</h1>
// 			<button onClick={() => setLang(lang === "en" ? "ru" : "en")}>
// 				{lang === "en"
// 					? translations.ru.language
// 					: translations.en.language}
// 			</button>
// 			<p>{translations[lang].aboutGuide}</p>
// 		</>
// 	);
// }

// export default App;
