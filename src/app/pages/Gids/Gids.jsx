import { Link } from "react-router-dom";
import styles from "./Gids.module.css";

import SectionGuides from "../../components/sections/SectionGuides/SectionGuides.jsx";

import Hero from "../../components/layout/Hero/Hero.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";

export default function Gids({
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
      <main className={`${styles.gids_wrapper} container`}>
        <SectionGuides lang={lang} language={language} />
      </main>
      <Footer lang={lang} language={language} />
    </>
  );
}
