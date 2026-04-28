import "./App.css";
import { useState, useEffect } from "react";
import { languageEng } from "./data/languages-eng";
import { languageRus } from "./data/languages-rus";
import { Routes, Route } from "react-router-dom";

import Home from "./app/pages/Home/Home";
import Tours from "./app/pages/Tours/Tours";
import Gids from "./app/pages/Gids/Gids";
import Gid from "./app/pages/Gid/Gid";
import AboutUs from "./app/pages/AboutUs/AboutUs";

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

  const [colorTheme, setColorTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" || saved === "neon"
      ? saved
      : "light";
  });

  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark", "theme-neon");

    document.body.classList.add(`theme-${colorTheme}`);
    localStorage.setItem("theme", colorTheme);
  }, [colorTheme]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            lang={lang}
            setLang={setLang}
            language={translations}
            colorTheme={colorTheme}
            setColorTheme={setColorTheme}
          />
        }
      />
      <Route
        path="/tours"
        element={
          <Tours
            lang={lang}
            setLang={setLang}
            language={translations}
            colorTheme={colorTheme}
            setColorTheme={setColorTheme}
          />
        }
      />
      <Route
        path="/gids"
        element={
          <Gids
            lang={lang}
            setLang={setLang}
            language={translations}
            colorTheme={colorTheme}
            setColorTheme={setColorTheme}
          />
        }
      />
      <Route
        path="/gids/:slug"
        element={
          <Gid
            lang={lang}
            setLang={setLang}
            language={translations}
            colorTheme={colorTheme}
            setColorTheme={setColorTheme}
          />
        }
      />
      <Route
        path="/about-us"
        element={
          <AboutUs
            lang={lang}
            setLang={setLang}
            language={translations}
            colorTheme={colorTheme}
            setColorTheme={setColorTheme}
          />
        }
      />
    </Routes>
  );
}

export default App;
