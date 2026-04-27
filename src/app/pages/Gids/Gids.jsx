import { Link } from "react-router-dom";
import style from "./Gids.module.css";

import Hero from "../../components/layout/Hero/Hero.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";

export default function Gids({
  lang,
  setLang,
  language,
  colorTheme,
  setColorTheme,
}) {
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
      <main className={`${style.gids_wrapper} container`}>
        <h2 className={style.gids__title}>{language[lang].gidsTitle}</h2>
        <ul>
          {guides.map((gid) => (
            <li key={gid.id}>
              <Link to={`/gids/${gid.url}`}>
                <img className={style.gids__img} src={gid.img} alt={gid.name} />
                <p>{gid.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer lang={lang} language={language} />
    </>
  );
}
