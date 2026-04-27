import { useState, useEffect } from "react";
import Hero from "../../components/layout/Hero/Hero.jsx";
import SectionFastPick from "../../components/sections/SectionFastPick/SectionFastPick.jsx";
import SectionGuides from "../../components/sections/SectionGuides/SectionGuides.jsx";
import SectionAdvantages from "../../components/sections/SectionAdvantages/SectionAdvantages.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";

export default function Home({
  lang,
  setLang,
  language,
  colorTheme,
  setColorTheme,
}) {
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
