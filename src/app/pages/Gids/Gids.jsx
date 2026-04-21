import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/layout/Hero/Hero.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";

export default function Gids({ lang, setLang, language }) {
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

  const guides = language[lang].guides;

  return (
    <>
      <Hero
        lang={lang}
        setLang={setLang}
        language={language}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      />
      <ul>
        {guides.map((gid) => (
          <li key={gid.id}>
            <Link to={`/gids/${gid.url}`}>{gid.name}</Link>
          </li>
        ))}
      </ul>
      <Footer lang={lang} language={language} />
    </>
  );
}
