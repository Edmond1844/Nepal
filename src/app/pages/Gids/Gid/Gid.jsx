import { useParams, Link } from "react-router-dom";

import style from "./Gid.module.css";

import { ArrowLeft } from "lucide-react";

import Layout from "../../../components/layout/Layout/Layout";

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
  console.log(gid);
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
          <div className="flex">
            <Link to="/gids">
              <ArrowLeft />
              <p> Назад к гидам</p>
            </Link>
          </div>
          <div>
            <img src={gid.img} alt={gid.name} />
            {/* <h3>{gid.name}</h3> */}
          </div>
        </div>
      </Layout>
    </>
  );
}
