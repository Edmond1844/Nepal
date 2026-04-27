import Layout from "../../components/layout/Layout/Layout";

export default function Tours({
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
        <h2>Tours</h2>
      </Layout>
    </>
  );
}
