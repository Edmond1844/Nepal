import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import style from "./Gid.module.css";

import Layout from "../../components/layout/Layout/Layout";
import Icon from "../../components/ui/Icon/Icon";
import MainButton from "../../components/ui/MainButton/MainButton";

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
            <span>{language[lang].backToGuides}</span>
          </Link>
          <div className={style.gid_card__main_info}>
            <img className={style.gid_card__img} src={gid.img} alt={gid.name} />
            <h3 className={style.gid_card__gid_name}>{gid.name}</h3>
            <p className={style.gid_card__motto}>"{gid.motto}"</p>
            <div className={style.gid_card__stat_item}>
              <Icon className={style.gid_card__icon} name="icon-experience" />
              <div>
                <p className={style.gid_card__experience_label}>
                  {gid.details.label}
                </p>
                <p className={style.gid_card__experience_value}>
                  {gid.details.value}
                </p>
              </div>
            </div>
            <div className={style.gid_card__stat_item}>
              <Icon className={style.gid_card__icon} name="icon-lang" />
              <div>
                <p className={style.gid_card__experience_label}>
                  {gid.language.label}
                </p>
                <p className={style.gid_card__experience_value}>
                  {gid.language.value}
                </p>
              </div>
            </div>
            <div className={style.gid_card__stat_item}>
              <Icon className={style.gid_card__icon} name="icon-mountain" />
              <div>
                <p className={style.gid_card__experience_label}>
                  {gid.favoriteRoute.label}
                </p>
                <p className={style.gid_card__experience_value}>
                  {gid.favoriteRoute.value}
                </p>
              </div>
            </div>
            <MainButton className={style.gid_card__button}>
              <Icon name="icon-write" />
              {language[lang].writeButton}
            </MainButton>
          </div>
          <div className={style.gid_card__content}>
            <div className={style.gid_card__wrapper}>
              <h2 className={style.gid_card__about_title}>
                {language[lang].aboutGid}
              </h2>
              <p className={style.gid_card__about}>{gid.about}</p>
              {gid.favoriteAltitude && (
                <p className={style.gid_card__favorite}>
                  <span className={style.gid_card__favorite_label}>
                    {gid.favoriteAltitude.label}:
                  </span>{" "}
                  {gid.favoriteAltitude.value}
                </p>
              )}
            </div>
            <div className={style.gid_card__wrapper}>
              <h2 className={style.gid_card__about_title}>
                {language[lang].specializationGid}
              </h2>
              <ul className={style.gid_card__specializations_list}>
                {gid.specializations.map((item, index) => (
                  <li
                    className={style.gid_card__specialization_item}
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={style.gid_card__about_title}>
                {language[lang].leadTours}
              </h2>
              <ul>
                {gid.brief.levelDisplay.map((item, index) => (
                  <li
                    className={`${style.level_pro_crazy} level`}
                    key={index}
                    data-level={gid.brief.level[index]}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
