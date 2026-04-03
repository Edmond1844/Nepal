import "./App.css";
import { useState, useEffect } from "react";
import { languageEng } from "./data/languages-eng";
import { languageRus } from "./data/languages-rus";
import { Routes, Route } from "react-router-dom";

import Home from "./app/pages/Home/Home";

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
		<Routes>
			<Route
				path="/"
				element={
					<Home
						lang={lang}
						setLang={setLang}
						language={translations}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
