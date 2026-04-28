import { useParams, Link } from "react-router-dom";

import style from "./Gid.module.css";

import { ArrowLeft } from "lucide-react";

import Layout from "../../components/layout/Layout/Layout";

export default function Gid({
  language,
  lang,
  setLang,
  colorTheme,
  setColorTheme,
}) {
  const guides = language[lang].guides;

  const { slug } = useParams();
  const gid = guides.find((gid) => gid.url === slug);

  return (
    <>
      <Layout
        lang={lang}
        setLang={setLang}
        language={language}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      >
        <div className={`${style.gid_card} container`}>
          <Link className={style.gid_card__back_link} to="/gids">
            <ArrowLeft className={style.gid_card__icon_arrow} />
            <span>Назад к гидам</span>
          </Link>
          <div className={style.gid_card__main_info}>
            <img className={style.gid_card__img} src={gid.img} alt={gid.name} />
            <h3 className={style.gid_card__gid_name}>{gid.name}</h3>
            <p className={style.gid_card__motto}>"{gid.motto}"</p>
            <div>
              <p className={style.gid_card__experience_label}>Опыт:</p>
              <p className={style.gid_card__experience_value}>18 лет</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
