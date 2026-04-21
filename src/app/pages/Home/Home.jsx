import { useState, useEffect } from "react";
import Hero from "../../components/layout/Hero/Hero.jsx";
import SectionFastPick from "../../components/sections/SectionFastPick/SectionFastPick.jsx";
import SectionGuides from "../../components/sections/SectionGuides/SectionGuides.jsx";
import SectionAdvantages from "../../components/sections/SectionAdvantages/SectionAdvantages.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";

export default function Home({ lang, setLang, language }) {
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
    <>
      <Hero
        lang={lang}
        setLang={setLang}
        language={language}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      />
      <main>
        <SectionFastPick lang={lang} language={language} />
        <SectionGuides lang={lang} language={language} />
        <SectionAdvantages lang={lang} language={language} />
      </main>
      <Footer lang={lang} language={language} />
    </>
  );
}
