import Layout from "../../components/layout/Layout/Layout";
export default function AboutUs({
  lang,
  setLang,
  language,
  colorTheme,
  setColorTheme,
}) {
  return (
    <>
      <Layout
        lang={lang}
        setLang={setLang}
        language={language}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      >
        <h2>О нас</h2>
      </Layout>
    </>
  );
}
